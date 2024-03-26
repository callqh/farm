import farmDtsPlugin from '@farmfe/js-plugin-dts';

import { createFarmJsPluginBuildConfig } from '../../configs/farm-js-plugin.base.config.mjs';
/**
 * @type {import('@farmfe/core').UserConfig}
 */
export default createFarmJsPluginBuildConfig(
  [
    farmDtsPlugin({
      tsConfigPath: './tsconfig.build.json'
    })
  ],
  {
    external: ['@farmfe/core', 'postcss-url', 'postcss-import', '@farmfe/js-plugin-dts', "fast-glob", "postcss-import", "postcss-load-config"]
  }
);
