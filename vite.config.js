import { defineConfig } from 'vitest/config';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';

// Prevent Vite from processing manifest.json and icons (PWA needs them at root)
function preserveStaticRefs() {
    return [
        {
            name: 'preserve-static-refs-pre',
            enforce: 'pre',
            transformIndexHtml: {
                order: 'pre',
                handler(html) {
                    return html
                        .replace(/href="manifest\.json"/g, 'data-preserve-href="manifest.json"')
                        .replace(/href="icons\/([^"]+)"/g, 'data-preserve-href="icons/$1"')
                        .replace(/<script src="\/js\/inline-boot\.js" defer><\/script>/g, '<!--IIFE:inline-boot-->')
                        .replace(/<script src="\/js\/pwa\.js" defer><\/script>/g, '<!--IIFE:pwa-->');
                }
            }
        },
        {
            name: 'preserve-static-refs-post',
            enforce: 'post',
            transformIndexHtml: {
                order: 'post',
                handler(html) {
                    return html
                        .replace(/data-preserve-href="/g, 'href="')
                        .replace('<!--IIFE:inline-boot-->', '<script src="/js/inline-boot.js" defer></script>')
                        .replace('<!--IIFE:pwa-->', '<script src="/js/pwa.js" defer></script>');
                }
            }
        }
    ];
}

// Copy non-module IIFE scripts (inline-boot.js, pwa.js) to dist as-is
function copyIIFEScripts() {
    var files = ['js/inline-boot.js', 'js/pwa.js', 'lib/pdf.min.js', 'lib/pdf.worker.min.js'];
    return {
        name: 'copy-iife-scripts',
        writeBundle(options) {
            var outDir = options.dir || 'dist';
            files.forEach(function(f) {
                var src = resolve(__dirname, f);
                var dest = resolve(outDir, f);
                mkdirSync(dirname(dest), { recursive: true });
                writeFileSync(dest, readFileSync(src, 'utf-8'));
            });
        }
    };
}

export default defineConfig({
    plugins: [preserveStaticRefs(), copyIIFEScripts()],
    publicDir: false,
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/main.js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['tests/**/*.test.js'],
        setupFiles: ['tests/setup.js']
    }
});
