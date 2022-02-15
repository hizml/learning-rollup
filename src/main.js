var arr = [1, 2, 3, 4]
console.log(arr)
//
/**
 * 对于浏览器：
 * # compile to a <script> containing a self-executing function ('iife')
 * rollup main.js --file bundle.js --format iife
 *
 * 对于 Node.js：
 * # compile to a CommonJS module ('cjs')
 * rollup main.js --file bundle.js --format cjs
 *
 * 对于浏览器和 Node.js：
 * # UMD format requires a bundle name
 * rollup main.js --file bundle.js --format umd --name "myBundle"
 */
