const mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');


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

mix.js('resources/js/app.js', 'public/tenancy/assets/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/src'),
                '@assets': path.resolve(__dirname, 'resources/assets'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        }
    })
    .sass('resources/sass/app.scss', 'public/tenancy/assets/css').options({
        postCss:[require('autoprefixer')]
    })
    .postCss('resources/assets/css/main.css', 'public/tenancy/assets/css', [
        tailwindcss('tailwind.js'),
    ])
    .copy('node_modules/vuesax/dist/vuesax.css', 'public/tenancy/assets/css/vuesax.css') // Vuesax framework css
    .copy('resources/assets/css/iconfont.css', 'public/tenancy/assets/css/iconfont.css') // Feather Icon Font css
    .copyDirectory('resources/assets/fonts', 'public/tenancy/assets/fonts') // Feather Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont', 'public/tenancy/assets/css/material-icons') // Material Icon fonts
    .copyDirectory('node_modules/material-icons/iconfont/material-icons.css', 'public/tenancy/assets/css/material-icons/material-icons.css') // Material Icon fonts css
    .copy('node_modules/prismjs/themes/prism-tomorrow.css', 'public/tenancy/assets/css/prism-tomorrow.css') // Prism Tomorrow theme css
    .copyDirectory('resources/assets/images', 'public/tenancy/assets/images'); // Copy all images from resources to public folder


mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name].js',
    }
});
