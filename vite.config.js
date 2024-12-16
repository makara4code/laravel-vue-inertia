import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.ts",
            ssr: "resources/js/ssr.ts",
            refresh: true,
        }),
        Vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        Components({
            resolvers: [
                IconsResolver({
                    alias: {
                        lucide: "lucide-vue-next",
                    },
                }),
            ],
        }),
        Icons({
            compiler: "vue3",
            autoInstall: true,
        }),
    ],
    server: {
        host: true,
        hmr: {
            host: "127.0.0.1",
        },
        watch: {
            usePolling: true,
            ignored: ["**/vendor/**"],
        },
    },
});
