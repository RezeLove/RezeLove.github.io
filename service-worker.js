/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "95fb489c5a3957742ccfef2e75eb890f"
  },
  {
    "url": "assets/css/0.styles.86a9e901.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e37a647d.js",
    "revision": "a8c0eae407d9a44339ca14665f3bfc51"
  },
  {
    "url": "assets/js/10.72a0c63d.js",
    "revision": "7844e9ca6fc444cd2fc5415e2ebb9be4"
  },
  {
    "url": "assets/js/14.07628750.js",
    "revision": "2731f1910c4a08022f8e18c263f677c9"
  },
  {
    "url": "assets/js/15.53ffd730.js",
    "revision": "4fee6eb3d0f29739140c1e5b26a81fe5"
  },
  {
    "url": "assets/js/16.d4232655.js",
    "revision": "c3d73cfffbeb3659b519d0683ea96cb4"
  },
  {
    "url": "assets/js/17.68996020.js",
    "revision": "e2cebc83a08708d343a192fab59e4cf9"
  },
  {
    "url": "assets/js/18.fae8d999.js",
    "revision": "8b781fb012a2cd18a83a8936967b5b60"
  },
  {
    "url": "assets/js/19.395195d8.js",
    "revision": "03dab1a8897c9780b525184d2ce7de6b"
  },
  {
    "url": "assets/js/2.cd145c68.js",
    "revision": "dec3d5bba80211d5cb3cfc4539685265"
  },
  {
    "url": "assets/js/20.82f01be1.js",
    "revision": "f7c25d6449b8f0ab8de06d1545643ad2"
  },
  {
    "url": "assets/js/21.f2ccef69.js",
    "revision": "0bf2788e0e5f4d41a848b8a42a4ecbb9"
  },
  {
    "url": "assets/js/22.c8016968.js",
    "revision": "d9ec110c0b238590eb9f60a0e3b1410f"
  },
  {
    "url": "assets/js/23.2ff5ceb4.js",
    "revision": "cacacb5e74fc04fdd95d55de7e6f1de3"
  },
  {
    "url": "assets/js/24.8198d308.js",
    "revision": "ca2dedcb26b2d36f8eb4a2cc482ee083"
  },
  {
    "url": "assets/js/25.639e5ca4.js",
    "revision": "259493a2b5e6325d58e58a2ebabfed84"
  },
  {
    "url": "assets/js/26.ada0f298.js",
    "revision": "4905885e7e84ba6dc957711a6786dfc0"
  },
  {
    "url": "assets/js/27.0a893db0.js",
    "revision": "f872ef2b3183d67881d7081dcc50d71a"
  },
  {
    "url": "assets/js/28.cf46b2f6.js",
    "revision": "defa2e39914327eb2e11a48b87b3ed3d"
  },
  {
    "url": "assets/js/29.2d39703b.js",
    "revision": "91383bb75ca2c854e108be41457837fd"
  },
  {
    "url": "assets/js/3.692df1d5.js",
    "revision": "ce8de060ed6e7bcd8515588ef003d0b6"
  },
  {
    "url": "assets/js/30.2da82914.js",
    "revision": "ac4f39039fae5e82a822ffc5e773b176"
  },
  {
    "url": "assets/js/31.a84fef17.js",
    "revision": "d695c8d42b8fd234d3c1927e5067dc44"
  },
  {
    "url": "assets/js/32.41f87350.js",
    "revision": "34b4013bf600ce43809d16f203cfad9b"
  },
  {
    "url": "assets/js/33.b5975388.js",
    "revision": "62b1d857c123093370ea6104d4e31921"
  },
  {
    "url": "assets/js/34.9286622a.js",
    "revision": "e516dc17931f4ab5749140ff87190634"
  },
  {
    "url": "assets/js/35.5fe1da19.js",
    "revision": "0c7b127a7da8b53c4b8a2cbaa55300c1"
  },
  {
    "url": "assets/js/36.2388060c.js",
    "revision": "f7eee0aec3465c10f44010fa2559cf3d"
  },
  {
    "url": "assets/js/37.9c6e6cee.js",
    "revision": "03ae3a5d52923d07d494a0f87b58d093"
  },
  {
    "url": "assets/js/38.ff9a177d.js",
    "revision": "3bda664ff55e72d0507d5fb4d4f735d1"
  },
  {
    "url": "assets/js/39.d79f291e.js",
    "revision": "1a40a98d640e643c689a3f90f7935adf"
  },
  {
    "url": "assets/js/4.fad730e6.js",
    "revision": "098093e538490885624b928863f62bd2"
  },
  {
    "url": "assets/js/40.ea9567a1.js",
    "revision": "5f53febc9137d64081edddaee73dab5c"
  },
  {
    "url": "assets/js/41.ba0c5b12.js",
    "revision": "4a7306198ac55bcb93e46b07a649d038"
  },
  {
    "url": "assets/js/42.9a2ae23e.js",
    "revision": "19e4265ff64d541ea6ee96478ac8e1cd"
  },
  {
    "url": "assets/js/43.acb279f1.js",
    "revision": "7fb44ad81e7a1a006b8c947b0fbd9f94"
  },
  {
    "url": "assets/js/44.0025b28c.js",
    "revision": "84cffb16528ef209c78fb7f60e97275f"
  },
  {
    "url": "assets/js/45.60cb1a62.js",
    "revision": "5cbb8e2aa142ef02b8a89e28d0ede8b0"
  },
  {
    "url": "assets/js/5.f346aaac.js",
    "revision": "c90886d662fba0c40ebabe6e7083138c"
  },
  {
    "url": "assets/js/6.78043dd4.js",
    "revision": "5e73cc19e0512825baab9bc59016713e"
  },
  {
    "url": "assets/js/7.16fe4920.js",
    "revision": "4c840dab30c793b86020a5fe026c7b07"
  },
  {
    "url": "assets/js/8.1f9f2c18.js",
    "revision": "3558cf36a290c03637c0133af94e9fc0"
  },
  {
    "url": "assets/js/9.2fe5ad50.js",
    "revision": "6e1ced4c78850161dfeb189a69e28b14"
  },
  {
    "url": "assets/js/app.b0e6b83a.js",
    "revision": "d64d4dfb3f465f8223318820beeb235b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.8539314b.js",
    "revision": "f5ddd53d0c15c877b8c6ebf65f2d825c"
  },
  {
    "url": "assets/js/vendors~flowchart.44c0e8af.js",
    "revision": "67fbceafa5e13887572d7d94a154d71f"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "9d0e820be1f1a060edc5924b75864fb5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a9e9c226a25acbe8b27e6490148e89f8"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e7640c52839548ffe334ea226d33cc67"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "afd85a2462d7dd45c2635e9d43beb9ba"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dfbe7f0b4928abfac2389d16bb82f0f6"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "772219b7b4394487a80d24d334e877ed"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "b5c3e599dc0cf27db9a06ae66cea6a29"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "defef1c8e2848d839ad4985a99bcdc10"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "8c0b3c08564ac2d8a05d0a306b099f65"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ce725e5b7c3ac816c508df84716778a3"
  },
  {
    "url": "tags/js/index.html",
    "revision": "02ec2785f8ea6e03cbe555f3848e52b3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "51e93fb1d90ff9cae534f684fa552976"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2cfe63f61dc0c72773a2f9f87c1b5d66"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7d09233bf8c5b6a8f1a58a3732fc1095"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1436a29c811f50b73195b7830c84dcbe"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0680b868c741f130a8f2c5089edadf84"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e5610451d983ab43cc658c8efc7e6595"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fa691137abdf9ab9589c09bffa9201b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "c54f1482bf11b6e0c993688c960fe621"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a6eb916425d4a67c9caeb0d9431fcf2c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3ffbfb9fa5a19185221709f30f4827ac"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "54e0978301338b59c753f5a6423c9479"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5b4f70e5cbb1465d920f7b1de5aa64e2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "42b3b7267dfa2478f1947149b8791319"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
