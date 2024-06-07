const path = require('path');

const dayjs = require('dayjs');

const { dependencies, devDependencies, version } = require('./package.json');

const mode = process.env.MODE || 'local';
const { env, publicPath } = require(`./config/${mode}.env.js`);

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath,
  devServer: {
    open: true,
    port: 7001,
    overlay: false,
  },

  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0] = {
        'process.env': {
          ...env,
          package: JSON.stringify({ dependencies, devDependencies, version }),
          buildTime: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
        },
      };

      return args;
    });

    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end();
      config.plugins.delete('prefetch');
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/styles/mixins.less'),
        resolve('src/styles/vars.less'),
      ],
    },
  },
};
