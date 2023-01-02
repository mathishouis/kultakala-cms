import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = document.getElementsByTagName('title')[0].innerText || 'Laravel';
const dir = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} — ${appName}`,
    resolve: (name) => resolvePageComponent(`../views/${dir}/${name}.vue`, import.meta.globEager('../views/**/**/*.vue')),
    setup: ({ app, props, plugin: inertia }) => {
        return createSSRApp({ render: () => h(app, props) }).use(inertia);
    },
}));
