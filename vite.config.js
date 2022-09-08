import { defineConfig } from 'vite';
import { svgstore } from './src/lib/vite_plugins/svgstore';

export default defineConfig({
    plugins: [
        svgstore(),
    ],

});
