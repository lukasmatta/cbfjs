import { join } from "path";

export default {
    entry: "./src/cbfjs.js",
    output: {
        path: join(__dirname, "dist"),
        libraryTarget: "umd",
        library: "CBFjs"
    },
    devtool: "source-map",
    module: {
        rules: [{ test: /\.js$/, use: "babel-loader" }]
    }
};