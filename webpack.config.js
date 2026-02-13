import { merge } from 'webpack-merge';
import common from './webpack/webpack.common.js';
import dev from './webpack/webpack.dev.js';
import prod from './webpack/webpack.prod.js';

export default (env, argv) => {
  const isProd = argv.mode === 'production';
  const config = isProd ? prod : dev;

  return merge(common, config);
};
