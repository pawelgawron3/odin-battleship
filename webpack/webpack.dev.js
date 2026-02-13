import path from 'node:path';

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(import.meta.dirname, '../dist'),
    },
    watchFiles: ['./src/template.html'],
  },
};
