if (!self.define) {
  let e,
    i = {};
  const s = (s, r) => (
    (s = new URL(s + '.js', r).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, o) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (i[t]) return;
    let c = {};
    const n = (e) => s(e, t),
      d = { module: { uri: t }, exports: c, require: n };
    i[t] = Promise.all(r.map((e) => d[e] || n(e))).then((e) => (o(...e), c));
  };
}
define(['./workbox-6da860f9'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: '3rdpartylicenses.txt',
          revision: '5c665dc36bcf6c89599a8291ed1611c2',
        },
        { url: 'favicon.ico', revision: 'd4d62b2ac4cfa63ade7f1766fb098bc5' },
        { url: 'index.html', revision: 'be025671eb142d7ed55082773aa55a92' },
        {
          url: 'main.46e0785e1a2b2061.esm.js',
          revision: '0b129fc997c817a5eff947df12f012ac',
        },
        {
          url: 'main.46e0785e1a2b2061.esm.js.LICENSE.txt',
          revision: 'b114cc85da504a772f040e3f40f8e46a',
        },
        {
          url: 'polyfills.2bb508989d75ba49.esm.js',
          revision: 'df2348ce19b57d65258307d04933279a',
        },
        { url: 'robots.txt', revision: 'fa1ded1ed7c11438a9b0385b1e112850' },
        {
          url: 'runtime.c1411f2a2fb6c6b8.esm.js',
          revision: 'b34634b1d93b3d249ac331df75a29690',
        },
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
