<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Cakrasoft Cloud System</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/iconfont.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/material-icons/material-icons.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/vuesax.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/prism-tomorrow.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/loader.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/font-awesome/css/font-awesome.min.css') }}">


    <script src="{{ asset('js/dist/cryptojs-aes.min.js') }}"></script>
    <script src="{{ asset('js/dist/cryptojs-aes-format.js') }}"></script>
  </head>

  <body>
    <noscript>
      <strong>We are sorry but Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="loading-bg">
        <div class="loading-logo">
            <img src="/images/logo/logo.png" alt="Logo">
        </div>
        <div class="loading">
            <div class="effect-1 effects"></div>
            <div class="effect-2 effects"></div>
            <div class="effect-3 effects"></div>
        </div>
        <div class="loading-text">
            <span>Please wait...</span>
        </div>

    </div>
    <div id="app">
    </div>

    <script src="{{ asset(mix('js/app.js')) }}"></script>
    {{-- stimulsoft REPORT --}}
    {{-- <link rel="stylesheet" type="text/css" href="{{ asset('js/stimulsoft/stimulsoft.viewer.office2013.whiteblue.css') }}"> --}}
    {{-- <script type="text/javascript" src="{{ asset('js/stimulsoft/stimulsoft.reports.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/stimulsoft/stimulsoft.viewer.js') }}"></script> --}}
  </body>
</html>
