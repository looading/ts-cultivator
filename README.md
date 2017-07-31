# ts-cultivator

In order to compile .ts file to .js file, and then run .js automatically.

However you does`nt  neet to care about what your file structure are.

Just neet to export a Variable `open(boolean)` and a Function container `runner`.

`ts-cultivator` will exec the Function `runner` if the Variable `open(boolean)` is true.

Drop files on `src/sample`, then you can make ts exercise unfettered。


## Usage

How to use?

1. Dowmload this repository.

2. Install dependencies by npm.

3. Run scripts

- npm run compile (first)

- npm run test (second)

4. write you .ts file on `src/sample`

``` bash
vim src/sample/1.ts
```

``` typescript
export const open = true;
export const runner = () => {
  console.log('the file 1.ts');
};
```

## Result

- compiler window 

``` bash
09:49:55 - Compilation complete. Watching for file changes.


09:53:10 - File change detected. Starting incremental compilation...


09:53:10 - Compilation complete. Watching for file changes.


10:03:09 - File change detected. Starting incremental compilation...


10:03:10 - Compilation complete. Watching for file changes.
```

- test window

``` bash
> nodemon dist/index.js

[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node dist/index.js`
---------------------------------------------

the file 1.ts
running sample/1.js : 1.881ms
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node dist/index.js`
---------------------------------------------

the file 1.ts
running sample/1.js : 2.107ms
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node dist/index.js`
---------------------------------------------

the file 1.ts
running sample/1.js : 2.534ms
[nodemon] clean exit - waiting for changes before restart
```