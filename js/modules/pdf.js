// pdf.js — Extraction PDF (lazy-loads pdf.min.js on first use)
(function() {
    var _loaded = false;

    function loadPdfJs() {
        if (_loaded) return Promise.resolve();
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdf.worker.min.js';
            _loaded = true;
            return Promise.resolve();
        }
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src = 'lib/pdf.min.js';
            script.onload = function() {
                if (typeof pdfjsLib !== 'undefined') {
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'lib/pdf.worker.min.js';
                }
                _loaded = true;
                resolve();
            };
            script.onerror = function() { reject(new Error('Failed to load PDF.js')); };
            document.head.appendChild(script);
        });
    }

    async function extractText(file) {
        await loadPdfJs();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;

        let fullText = '';
        const totalPages = pdf.numPages;

        for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n\n';
        }

        return fullText;
    }

    window.StudFlow = window.StudFlow || {};
    window.StudFlow.pdf = { extractText };
})();
