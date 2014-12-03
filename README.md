JSBin integration for GitBook
==============

### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-jsbin --save
```
### 2. add the plugin to `book.json` config
```
{
    "plugins": [ "jsbin"],
    "pluginsConfig": {
        "url": "customurl.com\/.+"// option if you host jsbin in your own domain.
    }
}
```
### 3. paste jsbin embedded code to you book something like
`[source code](http://jsbin.com/xezun/1/embed?js,console)`

will be rendered like [my book](http://jcouyang.gitbooks.io/functional-javascript/zh/functor_&_monad/functor.html) does

