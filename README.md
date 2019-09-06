# Laravel Paket

![cog-laravel-paket](https://user-images.githubusercontent.com/1849174/55282087-15cfb880-534e-11e9-9187-a99215bd8c4d.png)

<p align="center">
<a href="https://github.com/cybercog/laravel-paket/releases"><img src="https://img.shields.io/github/release/cybercog/laravel-paket.svg?style=flat-square" alt="Releases"></a>
<a href="https://travis-ci.org/cybercog/laravel-paket"><img src="https://img.shields.io/travis/cybercog/laravel-paket/master.svg?style=flat-square" alt="Build Status"></a>
<a href="https://styleci.io/repos/194345461"><img src="https://styleci.io/repos/194345461/shield" alt="StyleCI"></a>
<a href="https://scrutinizer-ci.com/g/cybercog/laravel-paket/?branch=master"><img src="https://img.shields.io/scrutinizer/g/cybercog/laravel-paket.svg?style=flat-square" alt="Code Quality"></a>
<a href="https://github.com/cybercog/laravel-paket/blob/master/LICENSE"><img src="https://img.shields.io/github/license/cybercog/laravel-paket.svg?style=flat-square" alt="License"></a>
</p>

## Introduction

Laravel Paket satisfies application requirements. Manage Laravel dependencies without switching to command line!

## Official Documentation

Documentation can be found in [Laravel Paket Guide](https://laravel-paket.readme.io/docs).

## Installation

Pull in the package through Composer.

```sh
$ composer require cybercog/laravel-paket --dev
```

Run Artisan `paket:setup` command to publish Paket assets to `public/vendor/paket` directory & create `storage/paket` directory for terminal job logs.

```sh
$ php artisan paket:setup
```

## Upgrading

When upgrading Paket, you should re-publish assets to `public/vendor/paket` directory with force setup command.

```sh
$ php artisan paket:setup --force
```

## Quick Start

Run local development server.
    
```sh
$ php artisan serve 
```

Go to URL [http://localhost:8000/paket](http://localhost:8000/paket) in your browser.

You will only be able to access this dashboard when `APP_ENV=local` is set in `.env` file.

### Dashboard

![Laravel Paket Dashboard](https://user-images.githubusercontent.com/1849174/64429858-9fcf3a80-d0bf-11e9-8edf-0f1dda30b1ad.png)

### Laravel Ecosystem

![Laravel Ecosystem](https://user-images.githubusercontent.com/1849174/64427431-e4f06e00-d0b9-11e9-81d0-ffdf8cbeb18a.png)

### Composer Requirements

![Laravel Paket Requirements](https://user-images.githubusercontent.com/1849174/64429876-aa89cf80-d0bf-11e9-939e-20107f6bab62.png)

### Terminal Jobs

![Laravel Paket Jobs](https://user-images.githubusercontent.com/1849174/64429896-b4abce00-d0bf-11e9-8c8b-4dff92740146.png)

### Terminal Job Details

![Laravel Paket Job](https://user-images.githubusercontent.com/1849174/64429914-bc6b7280-d0bf-11e9-95be-8de111295838.png)

## License

- `Laravel Paket` package is open-sourced software licensed under the [MIT License](LICENSE) by [Anton Komarev].
- `Shipping` logo image licensed under [Creative Commons 3.0](https://creativecommons.org/licenses/by/3.0/us/) by Gan Khoon Lay.

## About CyberCog

[CyberCog](https://cybercog.ru) is a Social Unity of enthusiasts. Research best solutions in product & software development is our passion.

- [Follow us on Twitter](https://twitter.com/cybercog)

<a href="https://cybercog.ru"><img src="https://cloud.githubusercontent.com/assets/1849174/18418932/e9edb390-7860-11e6-8a43-aa3fad524664.png" alt="CyberCog"></a>

[Anton Komarev]: https://komarev.com
