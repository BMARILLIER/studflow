// ocr.js — Client-side OCR via Tesseract.js (lazy-loaded)
// Extracts text from images (jpg, png). Text-only sent to IA, never the image.
(function() {
    'use strict';

    var _loaded = false;
    var TESSERACT_CDN = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    var MIN_CONFIDENCE = 40;  // Reject OCR below this confidence %
    var MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB

    // ==================== LAZY LOAD ====================
    function loadTesseract() {
        if (_loaded && window.Tesseract) return Promise.resolve();
        if (window.Tesseract) { _loaded = true; return Promise.resolve(); }

        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = TESSERACT_CDN;
            script.onload = function() {
                _loaded = true;
                console.log('[OCR] Tesseract.js loaded');
                resolve();
            };
            script.onerror = function() {
                reject(new Error('Impossible de charger Tesseract.js'));
            };
            document.head.appendChild(script);
        });
    }

    // ==================== IMAGE VALIDATION ====================
    function validateImage(file) {
        if (!file) return 'Aucun fichier';
        if (file.size > MAX_IMAGE_SIZE) return 'Image trop lourde (max 10 Mo)';
        if (file.size < 5000) return 'Image trop petite ou corrompue';

        var validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        var ext = (file.name || '').toLowerCase();
        var isValid = validTypes.indexOf(file.type) !== -1
            || ext.endsWith('.jpg') || ext.endsWith('.jpeg')
            || ext.endsWith('.png') || ext.endsWith('.webp');

        if (!isValid) return 'Format non supporte (JPG, PNG ou WebP)';
        return null;
    }

    // ==================== EXTRACT TEXT ====================
    function extractText(file, onProgress) {
        var error = validateImage(file);
        if (error) return Promise.reject(new Error(error));

        return loadTesseract().then(function() {
            console.log('[OCR] Starting recognition for:', file.name);

            return Tesseract.recognize(file, 'fra', {
                logger: function(m) {
                    if (m.status === 'recognizing text' && onProgress) {
                        onProgress(Math.round(m.progress * 100));
                    }
                }
            });
        }).then(function(result) {
            var confidence = result.data.confidence || 0;
            var text = (result.data.text || '').trim();

            console.log('[OCR] Done. Confidence:', confidence, '%, Length:', text.length);

            if (confidence < MIN_CONFIDENCE) {
                return Promise.reject(new Error(
                    'Image peu lisible (confiance : ' + Math.round(confidence) + '%). Essaie avec une photo plus nette.'
                ));
            }

            if (text.length < 20) {
                return Promise.reject(new Error(
                    'Pas assez de texte detecte. Verifie que la photo est nette et contient du texte.'
                ));
            }

            // Basic cleanup
            text = text
                .replace(/\n{3,}/g, '\n\n')    // Max 2 newlines
                .replace(/[ \t]{2,}/g, ' ')     // Collapse spaces
                .replace(/^[\d\s]+$/gm, '')     // Remove page numbers
                .trim();

            return text;
        });
    }

    // ==================== IS IMAGE ====================
    function isImage(file) {
        if (!file) return false;
        var types = ['image/jpeg', 'image/png', 'image/webp'];
        if (types.indexOf(file.type) !== -1) return true;
        var ext = (file.name || '').toLowerCase();
        return ext.endsWith('.jpg') || ext.endsWith('.jpeg') || ext.endsWith('.png') || ext.endsWith('.webp');
    }

    // ==================== EXPOSE ====================
    window.StudFlow = window.StudFlow || {};
    window.StudFlow.ocr = {
        extractText: extractText,
        isImage: isImage,
        validateImage: validateImage
    };
})();
