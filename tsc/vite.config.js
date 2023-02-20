import { defineConfig } from 'vite';
import path from "path";
const resolve = path.resolve;
export default defineConfig({
    build: {
        target: ['es2015'],
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "redux-observable-another",
        },
    },
});
