# esm-mock
example showing difficulties in mocking modules with esm loader

## 1. node 12 commonjs
the master branch is the baseline. running `npm run test` works as expected.

## 2. node 14 esm
the first iteration is the branch [`esm-module`](https://github.com/rompetroll/esm-mock/compare/esm-module?w=1). The test breaks because of esm issues within tap.
![](https://user-images.githubusercontent.com/674691/94142685-f7794900-fe6e-11ea-9722-744083ef0a71.png)
[The internet](https://github.com/tapjs/node-tap/issues/653) suggests that this will be resolved in the next `tap` version, v15. For now the `--no-esm` parameter should help.

## 3. fix tap
So the second intertion here is branch [`no-esm`](https://github.com/rompetroll/esm-mock/compare/esm-module...no-esm?w=1). While `--no-esm` fixes our previous issue, we get a new one: ![](https://user-images.githubusercontent.com/674691/94142566-c6007d80-fe6e-11ea-817e-6d8344c76bd3.png)

## 4. rewiremock
Apparently sinon cannot mock dependencies in esm modules, because esm [imports are immutable](https://exploringjs.com/es6/ch_modules.html#_imports-are-read-only-views-on-exports). Again, the internet has [suggestions to help](https://stackoverflow.com/questions/50763323/stub-a-function-from-a-es6-module-without-babel): try a [link seam](https://sinonjs.org/how-to/link-seams-commonjs/). `rewiremock` is one link-seam capable mock loader so let's try in branch [`rewiremock`](https://github.com/rompetroll/esm-mock/compare/no-esm...rewiremock)
Unfortunately rewiremock won't load though
![](https://user-images.githubusercontent.com/674691/94148602-1d0a5080-fe77-11ea-9dc6-87d0c1d7dc63.png)
