import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin';
import path from 'path';

export default {
  webpack: (config) => {
    config.experiments = { asyncWebAssembly: true, layers: true };
    // config.plugins.push(new WasmPackPlugin({
    //   crateDirectory: path.resolve("/", "src"),
    //   outDir: path.resolve("/", "public/wasm"),
    // }));
    return config;
  },
};
