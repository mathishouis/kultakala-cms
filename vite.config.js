import path from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    ssr: {
        noExternal: ['@inertiajs/server'],
    },
    resolve: {
        alias: [
            {
                find: '@css', replacement: path.resolve(__dirname, 'resources/css'),
            },
            {
                find: '@js', replacement: path.resolve(__dirname, 'resources/js'),
            },
            {
                find: '@views', replacement: path.resolve(__dirname, 'resources/views'),
            },
            {
                find: '@fonts', replacement: path.resolve(__dirname, 'resources/fonts'),
            },
            {
                find: '@images', replacement: path.resolve(__dirname, 'resources/images'),
            },
            {
                find: '@vendor', replacement: path.resolve(__dirname, 'vendor'),
            }
        ],
    },
});
