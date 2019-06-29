const mix = require('laravel-mix');
const webpack = require('webpack');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  uglify: {
    uglifyOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
  .setPublicPath('public')
  .js('resources/js/app.js', 'public')
  .sass('resources/sass/app.scss', 'public')
  .version()
  .copy('public', '../laravel-paket-sandbox/public/vendor/paket')
  .webpackConfig({
    resolve: {
      symlinks: false,
      alias: {
        '@': path.resolve(__dirname, 'resources/js/'),
      },
    },
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  });
