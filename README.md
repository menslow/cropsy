# cropsy

> Image Cropper prototype built with Ember, Yeoman, and Foundation.

## Getting Started

This app was build using [Yeoman](http://yeoman.io), the Web's scaffolding tool. The Yeoman workflow combines three tools:

1. Yo
2. Grunt
3. Bower

To get started, clone this repository and ````cd```` into your newly created directory:

```shell
cd cropsy
```

This prototype requires that you have Yeoman installed. To do so, run:

```shell
npm install -g yo
```

Install the necessary gem dependancies:

```shell
bundle install
```

Install Bower dependancies:

```shell
bower install
```

Lastly, install the Node dependancies:

```shell
npm install
```

To start your server run:

```shell
grunt serve
```

## Building Cropsy for Production

Yeoman is great for development because it allows you to work in unconcatinated and unminified files which makes development easier. When you're ready to prepare your application for distribution, run:

```shell
grunt build
```

Grunt will take care of concatenating and minifying your JavaScript and CSS files so they're ready for deploying to your production web server. Your production ready application is placed in the /dist folder.


## Deployment

Cropsy is configured to use the [rsync-deploy](https://github.com/rosszurowski/deploy) gem. To deploy this app to a remote web serve, add your web server configuration do the following:

1. Rename /deploy-sample.yml to /deploy.yml
2. Open deploy.yml in your favorite text editor and add your web server host, user, and remote path.

Then run:

```shell
deploy
```

