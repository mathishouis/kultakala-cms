import '@js/bootstrap';
import '@css/app.scss';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const dir = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

declare const Ziggy;

InertiaProgress.init({ showSpinner: true });

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`../views/${dir}/${name}.vue`, import.meta.globEager('../views/**/**/*.vue')),
    setup: ({ el, app, props, plugin }) => {
        try {
            createApp({ render: () => h(app, props) })
                .use(plugin)
                //.use(ZiggyVue, Ziggy)
                .mount(el)
            ;
        } catch (e) {
            console.error('An error has been occurred when mounting App');
        }
    },
}).then(() => {
    InertiaProgress.init({ showSpinner: false, color: '#eb3661' });
});
