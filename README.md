# check-env
[![CircleCI](https://circleci.com/gh/ekmartin/check-env.svg?style=svg)](https://circleci.com/gh/ekmartin/check-env)

> Makes sure that all required environment variables are set. 


## Install

```sh
$ npm install --save check-env
```


## Usage

```js
var checkEnv = require('check-env');
checkEnv(['REQUIRED_VAR', 'OTHER_VAR', 'ENV_VAR']);
// => Throws an error if one of the variables aren't set.
```

## CLI Usage

1. Install as a project dependency as above
2. Add to a [lifecycle script](https://docs.npmjs.com/misc/scripts) such as
   `prestart`
3. `npm start` will bail out (`exit(1)`) with a hard to miss error message if environment variables are not set

### Example:

In package.json:

```json
{
  "prestart": "check-env AWS_KEY MONGO_URL",
  "start": "node index.js"
}
```


```
$ echo $MONGO_URL
# (nothing)

$ npm start
 ________________________________________
< Missing environment variable MONGO_URL >
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ echo $?
1
```

## License

(The MIT License)

Copyright (c) 2017 Martin Ek <mail@ekmartin.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
