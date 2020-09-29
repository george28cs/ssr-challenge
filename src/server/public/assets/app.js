!(function (e) {
  function t(t) {
    for (
      var a, o, n = t[0], l = t[1], i = t[2], c = 0, d = [];
      c < n.length;
      c++
    ) {
      (o = n[c]),
      Object.prototype.hasOwnProperty.call(D, o) && D[o] && d.push(D[o][0]),
      (D[o] = 0);
    }
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    for (U && U(t); d.length;) d.shift()();
    return z.push.apply(z, i || []), r();
  }
  function r() {
    for (var e, t = 0; t < z.length; t++) {
      for (var r = z[t], a = !0, o = 1; o < r.length; o++) {
        const n = r[o];
        D[n] !== 0 && (a = !1);
      }
      a && (z.splice(t--, 1), (e = A((A.s = r[0]))));
    }
    return e;
  }
  const a = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, t) {
    !(function (e, t) {
      if (!L[e] || !P[e]) return;
      for (const r in ((P[e] = !1), t)) Object.prototype.hasOwnProperty.call(t, r) && (h[r] = t[r]);
      --y == 0 && g === 0 && E();
    })(e, t),
    a && a(e, t);
  };
  let o,
    n = !0,
    l = '58b2ea24d9dd7a98ae7d',
    i = {},
    c = [],
    d = [];
  function s(t) {
    var r = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: o !== t,
      active: !0,
      accept(e, t) {
        if (void 0 === e) r._selfAccepted = !0;
        else if (typeof e === 'function') r._selfAccepted = e;
        else if (typeof e === 'object') for (let a = 0; a < e.length; a++) r._acceptedDependencies[e[a]] = t || function () {};
        else r._acceptedDependencies[e] = t || function () {};
      },
      decline(e) {
        if (void 0 === e) r._selfDeclined = !0;
        else if (typeof e === 'object') for (let t = 0; t < e.length; t++) r._declinedDependencies[e[t]] = !0;
        else r._declinedDependencies[e] = !0;
      },
      dispose(e) {
        r._disposeHandlers.push(e);
      },
      addDisposeHandler(e) {
        r._disposeHandlers.push(e);
      },
      removeDisposeHandler(e) {
        const t = r._disposeHandlers.indexOf(e);
        t >= 0 && r._disposeHandlers.splice(t, 1);
      },
      invalidate() {
        switch (((this._selfInvalidated = !0), f)) {
          case 'idle':
            ((h = {})[t] = e[t]), p('ready');
            break;
          case 'ready':
            M(t);
            break;
          case 'prepare':
          case 'check':
          case 'dispose':
          case 'apply':
            (v = v || []).push(t);
        }
      },
      check: j,
      apply: O,
      status(e) {
        if (!e) return f;
        u.push(e);
      },
      addStatusHandler(e) {
        u.push(e);
      },
      removeStatusHandler(e) {
        const t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      },
      data: i[t],
    };
    return (o = void 0), r;
  }
  var u = [],
    f = 'idle';
  function p(e) {
    f = e;
    for (let t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var b,
    h,
    m,
    v,
    y = 0,
    g = 0,
    H = {},
    P = {},
    L = {};
  function G(e) {
    return `${+e}` === e ? +e : e;
  }
  function j(e) {
    if (f !== 'idle') throw new Error('check() is only allowed in idle status');
    return (
      (n = e),
      p('check'),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(((e, r) => {
        if (typeof XMLHttpRequest === 'undefined') return r(new Error('No browser support'));
        try {
          var a = new XMLHttpRequest(),
            o = `${A.p}${l}.hot-update.json`;
          a.open('GET', o, !0), (a.timeout = t), a.send(null);
        } catch (e) {
          return r(e);
        }
        a.onreadystatechange = function () {
          if (a.readyState === 4) {
            if (a.status === 0) r(new Error(`Manifest request to ${o} timed out.`));
            else if (a.status === 404) e();
            else if (a.status !== 200 && a.status !== 304) r(new Error(`Manifest request to ${o} failed.`));
            else {
              try {
                var t = JSON.parse(a.responseText);
              } catch (e) {
                return void r(e);
              }
              e(t);
            }
          }
        };
      }))).then((e) => {
        if (!e) return p(w() ? 'ready' : 'idle'), null;
        (P = {}), (H = {}), (L = e.c), (m = e.h), p('prepare');
        const t = new Promise(((e, t) => {
          b = { resolve: e, reject: t };
        }));
        for (const r in ((h = {}), D)) S(r);
        return f === 'prepare' && g === 0 && y === 0 && E(), t;
      })
    );
    let t;
  }
  function S(e) {
    L[e] ?
      ((P[e] = !0),
      y++,
      (function (e) {
        const t = document.createElement('script');
        (t.charset = 'utf-8'),
        (t.src = `${A.p}${e}.${l}.hot-update.js`),
        document.head.appendChild(t);
      })(e)) :
      (H[e] = !0);
  }
  function E() {
    p('ready');
    const e = b;
    if (((b = null), e)) {
      if (n) {
        Promise.resolve()
          .then(() => {
            return O(n);
          })
          .then(
            (t) => {
              e.resolve(t);
            },
            (t) => {
              e.reject(t);
            },
          );
      } else {
        const t = [];
        for (const r in h) Object.prototype.hasOwnProperty.call(h, r) && t.push(G(r));
        e.resolve(t);
      }
    }
  }
  function O(t) {
    if (f !== 'ready') throw new Error('apply() is only allowed in ready status');
    return (function t(r) {
      let a,
        n,
        d,
        s,
        u;
      function f(e) {
        for (
          var t = [e],
            r = {},
            a = t.map((e) => {
              return { chain: [e], id: e };
            });
          a.length > 0;

        ) {
          const o = a.pop(),
            n = o.id,
            l = o.chain;
          if ((s = k[n]) && (!s.hot._selfAccepted || s.hot._selfInvalidated)) {
            if (s.hot._selfDeclined) return { type: 'self-declined', chain: l, moduleId: n };
            if (s.hot._main) return { type: 'unaccepted', chain: l, moduleId: n };
            for (let i = 0; i < s.parents.length; i++) {
              const c = s.parents[i],
                d = k[c];
              if (d) {
                if (d.hot._declinedDependencies[n]) {
                  return {
                    type: 'declined',
                    chain: l.concat([c]),
                    moduleId: n,
                    parentId: c,
                  };
                }
                t.indexOf(c) === -1 &&
                  (d.hot._acceptedDependencies[n] ?
                    (r[c] || (r[c] = []), b(r[c], [n])) :
                    (delete r[c],
                    t.push(c),
                    a.push({ chain: l.concat([c]), id: c })));
              }
            }
          }
        }
        return {
          type: 'accepted',
          moduleId: e,
          outdatedModules: t,
          outdatedDependencies: r,
        };
      }
      function b(e, t) {
        for (let r = 0; r < t.length; r++) {
          const a = t[r];
          e.indexOf(a) === -1 && e.push(a);
        }
      }
      w();
      const y = {},
        g = [],
        H = {},
        P = function () {
          console.warn(
            `[HMR] unexpected require(${S.moduleId}) to disposed module`,
          );
        };
      for (const j in h) {
        if (Object.prototype.hasOwnProperty.call(h, j)) {
          var S;
          (u = G(j)), (S = h[j] ? f(u) : { type: 'disposed', moduleId: j });
          let E = !1,
            O = !1,
            M = !1,
            z = '';
          switch (
            (S.chain && (z = `\nUpdate propagation: ${S.chain.join(' -> ')}`),
            S.type)
          ) {
            case 'self-declined':
              r.onDeclined && r.onDeclined(S),
              r.ignoreDeclined ||
                  (E = new Error(
                    `Aborted because of self decline: ${S.moduleId}${z}`,
                  ));
              break;
            case 'declined':
              r.onDeclined && r.onDeclined(S),
              r.ignoreDeclined ||
                  (E = new Error(
                    `Aborted because of declined dependency: ${
                      S.moduleId
                    } in ${
                      S.parentId
                    }${z}`,
                  ));
              break;
            case 'unaccepted':
              r.onUnaccepted && r.onUnaccepted(S),
              r.ignoreUnaccepted ||
                  (E = new Error(
                    `Aborted because ${u} is not accepted${z}`,
                  ));
              break;
            case 'accepted':
              r.onAccepted && r.onAccepted(S), (O = !0);
              break;
            case 'disposed':
              r.onDisposed && r.onDisposed(S), (M = !0);
              break;
            default:
              throw new Error(`Unexception type ${S.type}`);
          }
          if (E) return p('abort'), Promise.reject(E);
          if (O) {
            for (u in ((H[u] = h[u]),
            b(g, S.outdatedModules),
            S.outdatedDependencies)) {
              Object.prototype.hasOwnProperty.call(S.outdatedDependencies, u) &&
                (y[u] || (y[u] = []), b(y[u], S.outdatedDependencies[u]));
            }
          }
          M && (b(g, [S.moduleId]), (H[u] = P));
        }
      }
      let x,
        C = [];
      for (n = 0; n < g.length; n++) {
        (u = g[n]),
        k[u] &&
            k[u].hot._selfAccepted &&
            H[u] !== P &&
            !k[u].hot._selfInvalidated &&
            C.push({
              module: u,
              parents: k[u].parents.slice(),
              errorHandler: k[u].hot._selfAccepted,
            });
      }
      p('dispose'),
      Object.keys(L).forEach((e) => {
        !1 === L[e] &&
            (function (e) {
              delete D[e];
            })(e);
      });
      let _,
        U,
        R = g.slice();
      for (; R.length > 0;) {
        if (((u = R.pop()), (s = k[u]))) {
          const I = {},
            N = s.hot._disposeHandlers;
          for (d = 0; d < N.length; d++) (a = N[d])(I);
          for (
            i[u] = I, s.hot.active = !1, delete k[u], delete y[u], d = 0;
            d < s.children.length;
            d++
          ) {
            const T = k[s.children[d]];
            T && (x = T.parents.indexOf(u)) >= 0 && T.parents.splice(x, 1);
          }
        }
      }
      for (u in y) {
        if (Object.prototype.hasOwnProperty.call(y, u) && (s = k[u])) {
          for (U = y[u], d = 0; d < U.length; d++) {
            (_ = U[d]),
            (x = s.children.indexOf(_)) >= 0 && s.children.splice(x, 1);
          }
        }
      }
      p('apply'), void 0 !== m && ((l = m), (m = void 0));
      for (u in ((h = void 0), H)) Object.prototype.hasOwnProperty.call(H, u) && (e[u] = H[u]);
      let q = null;
      for (u in y) {
        if (Object.prototype.hasOwnProperty.call(y, u) && (s = k[u])) {
          U = y[u];
          const F = [];
          for (n = 0; n < U.length; n++) {
            if (((_ = U[n]), (a = s.hot._acceptedDependencies[_]))) {
              if (F.indexOf(a) !== -1) continue;
              F.push(a);
            }
          }
          for (n = 0; n < F.length; n++) {
            a = F[n];
            try {
              a(U);
            } catch (e) {
              r.onErrored &&
                r.onErrored({
                  type: 'accept-errored',
                  moduleId: u,
                  dependencyId: U[n],
                  error: e,
                }),
              r.ignoreErrored || q || (q = e);
            }
          }
        }
      }
      for (n = 0; n < C.length; n++) {
        const $ = C[n];
        (u = $.module), (c = $.parents), (o = u);
        try {
          A(u);
        } catch (e) {
          if (typeof $.errorHandler === 'function') {
            try {
              $.errorHandler(e);
            } catch (t) {
              r.onErrored &&
                r.onErrored({
                  type: 'self-accept-error-handler-errored',
                  moduleId: u,
                  error: t,
                  originalError: e,
                }),
              r.ignoreErrored || q || (q = t),
              q || (q = e);
            }
          } else {
            r.onErrored &&
              r.onErrored({
                type: 'self-accept-errored',
                moduleId: u,
                error: e,
              }),
            r.ignoreErrored || q || (q = e);
          }
        }
      }
      if (q) return p('fail'), Promise.reject(q);
      if (v) {
        return t(r).then((e) => {
          return (
            g.forEach((t) => {
              e.indexOf(t) < 0 && e.push(t);
            }),
            e
          );
        });
      }
      return (
        p('idle'),
        new Promise(((e) => {
          e(g);
        }))
      );
    })((t = t || {}));
  }
  function w() {
    if (v) return h || (h = {}), v.forEach(M), (v = void 0), !0;
  }
  function M(t) {
    Object.prototype.hasOwnProperty.call(h, t) || (h[t] = e[t]);
  }
  var k = {},
    D = { 0: 0 },
    z = [];
  function A(t) {
    if (k[t]) return k[t].exports;
    const r = (k[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: s(t),
      parents: ((d = c), (c = []), d),
      children: [],
    });
    return (
      e[t].call(
        r.exports,
        r,
        r.exports,
        (function (e) {
          const t = k[e];
          if (!t) return A;
          const r = function (r) {
              return (
                t.hot.active ?
                  (k[r] ?
                    k[r].parents.indexOf(e) === -1 && k[r].parents.push(e) :
                    ((c = [e]), (o = r)),
                  t.children.indexOf(r) === -1 && t.children.push(r)) :
                  (console.warn(
                    `[HMR] unexpected require(${
                      r
                    }) from disposed module ${
                      e}`,
                  ),
                  (c = [])),
                A(r)
              );
            },
            a = function (e) {
              return {
                configurable: !0,
                enumerable: !0,
                get() {
                  return A[e];
                },
                set(t) {
                  A[e] = t;
                },
              };
            };
          for (const n in A) {
            Object.prototype.hasOwnProperty.call(A, n) &&
              n !== 'e' &&
              n !== 't' &&
              Object.defineProperty(r, n, a(n));
          }
          return (
            (r.e = function (e) {
              return (
                f === 'ready' && p('prepare'),
                g++,
                A.e(e).then(t, (e) => {
                  throw (t(), e);
                })
              );
              function t() {
                g--,
                f === 'prepare' && (H[e] || S(e), g === 0 && y === 0 && E());
              }
            }),
            (r.t = function (e, t) {
              return 1 & t && (e = r(e)), A.t(e, -2 & t);
            }),
            r
          );
        })(t),
      ),
      (r.l = !0),
      r.exports
    );
  }
  (A.m = e),
  (A.c = k),
  (A.d = function (e, t, r) {
    A.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }),
  (A.r = function (e) {
    typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
    Object.defineProperty(e, '__esModule', { value: !0 });
  }),
  (A.t = function (e, t) {
    if ((1 & t && (e = A(e)), 8 & t)) return e;
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
    const r = Object.create(null);
    if (
      (A.r(r),
      Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
      2 & t && typeof e !== 'string')
    ) {
      for (const a in e) {
        A.d(
          r,
          a,
          ((t) => {
            return e[t];
          }).bind(null, a),
        );
      }
    }
    return r;
  }),
  (A.n = function (e) {
    const t =
        e && e.__esModule ?
          function () {
            return e.default;
          } :
          function () {
            return e;
          };
    return A.d(t, 'a', t), t;
  }),
  (A.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }),
  (A.p = '/'),
  (A.h = function () {
    return l;
  });
  let x = (window.webpackJsonp = window.webpackJsonp || []),
    C = x.push.bind(x);
  (x.push = t), (x = x.slice());
  for (let _ = 0; _ < x.length; _++) t(x[_]);
  var U = C;
  z.push([32, 1]), r();
})({
  22(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(11),
        i = r(2),
        c = r(23),
        d = r(26),
        s = r(27),
        u = r(30);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let f,
        p,
        b = function () {
          return n.a.createElement(
            l.a,
            null,
            n.a.createElement(
              s.a,
              null,
              n.a.createElement(
                i.c,
                null,
                n.a.createElement(i.a, {
                  exact: !0,
                  path: '/',
                  component: c.a,
                }),
                n.a.createElement(i.a, {
                  exact: !0,
                  path: '/checkout',
                  component: d.a,
                }),
                n.a.createElement(i.a, { component: u.a }),
              ),
            ),
          );
        },
        h = b;
      (t.a = h),
      (f =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (f.register(
            b,
            'App',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\routes\\App.jsx',
          ),
          f.register(
            h,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\routes\\App.jsx',
          )),
      (p =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && p(e);
    }.call(this, r(6)(e)));
  },
  23(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(24);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let i,
        c,
        d = function () {
          return n.a.createElement(l.a, null);
        },
        s = d;
      (t.a = s),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            d,
            'Home',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Home.jsx',
          ),
          i.register(
            s,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Home.jsx',
          )),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && c(e);
    }.call(this, r(6)(e)));
  },
  24(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(8),
        i = r(25);
      r(40);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        d,
        s = function (e) {
          const t = e.products;
          return n.a.createElement(
            'div',
            { className: 'Products' },
            n.a.createElement(
              'div',
              { className: 'Products-items' },
              t.map((t) => {
                return n.a.createElement(
                  'div',
                  { className: 'Products-item', key: t.id },
                  n.a.createElement('img', { src: t.image, alt: t.title }),
                  n.a.createElement(
                    'div',
                    { className: 'Products-item-info' },
                    n.a.createElement(
                      'h2',
                      null,
                      t.title,
                      n.a.createElement('span', null, '$', t.price),
                    ),
                    n.a.createElement('p', null, t.description),
                  ),
                  n.a.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick() {
                        return (function (t) {
                          e.addToCart(t);
                        })(t);
                      },
                    },
                    'Comprar',
                  ),
                );
              }),
            ),
          );
        },
        u = function (e) {
          return { products: e.products };
        },
        f = { addToCart: i.a },
        p = Object(l.b)(u, f)(s);
      (t.a = p),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            s,
            'Products',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          c.register(
            u,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          c.register(
            f,
            'mapDispatchToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          c.register(
            p,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          )),
      (d =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && d(e);
    }.call(this, r(6)(e)));
  },
  25(e, t, r) {
    'use strict';

    (function (e) {
      let a;
      r.d(t, 'a', () => {
        return l;
      }),
      (a =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.enterModule :
            void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      var o,
        n,
        l = function (e) {
          return { type: 'ADD_TO_CART', payload: e };
        };
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.default :
          void 0) &&
        o.register(
          l,
          'addToCart',
          'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\actions\\index.js',
        ),
      (n =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && n(e);
    }.call(this, r(6)(e)));
  },
  26(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(8);
      r(41);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let i,
        c,
        d = function (e) {
          const t = e.cart;
          return n.a.createElement(
            'div',
            { className: 'Checkout' },
            n.a.createElement(
              'div',
              { className: 'Checkout-content' },
              t.length > 0 ?
                n.a.createElement('h3', null, 'Lista de Pedidos:') :
                n.a.createElement('h2', null, 'Sin Pedidos'),
              t.map((e) => {
                return n.a.createElement(
                  'div',
                  { className: 'Checkout-item' },
                  n.a.createElement(
                    'div',
                    { className: 'Checkout-element' },
                    n.a.createElement('h4', null, e.title),
                    n.a.createElement('span', null, '$', e.price),
                  ),
                  n.a.createElement('i', { className: 'fas fa-trash-alt' }),
                );
              }),
            ),
            t.length > 0 &&
              n.a.createElement(
                'div',
                { className: 'Checkout-sidebar' },
                n.a.createElement('h3', null, 'Precio Total:'),
                n.a.createElement('h4', null, '$'),
              ),
          );
        },
        s = function (e) {
          return { cart: e.cart };
        },
        u = Object(l.b)(s, null)(d);
      (t.a = u),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            d,
            'Checkout',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          ),
          i.register(
            s,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          ),
          i.register(
            u,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          )),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && c(e);
    }.call(this, r(6)(e)));
  },
  27(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(28),
        i = r(29);
      r(44);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        d,
        s = function (e) {
          const t = e.children;
          return n.a.createElement(
            'div',
            { className: 'Main' },
            n.a.createElement(l.a, null),
            t,
            n.a.createElement(i.a, null),
          );
        },
        u = s;
      (t.a = u),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            s,
            'Layout',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Layout.jsx',
          ),
          c.register(
            u,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Layout.jsx',
          )),
      (d =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && d(e);
    }.call(this, r(6)(e)));
  },
  28(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o),
        l = r(11),
        i = r(8);
      r(42);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        d,
        s = function (e) {
          return n.a.createElement(
            'div',
            { className: 'Header' },
            n.a.createElement(
              l.b,
              { to: '/' },
              n.a.createElement('h1', null, 'Platzi Store'),
            ),
            n.a.createElement(
              'div',
              { className: 'Header-checkout' },
              n.a.createElement(
                l.b,
                { to: '/checkout' },
                n.a.createElement('i', { className: 'fas fa-shopping-basket' }),
              ),
              e.cart.length > 0 &&
                n.a.createElement(
                  'div',
                  { className: 'Header-alert' },
                  e.cart.length,
                ),
            ),
          );
        },
        u = function (e) {
          return { cart: e.cart };
        },
        f = Object(i.b)(u, null)(s);
      (t.a = f),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            s,
            'Header',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Header.jsx',
          ),
          c.register(
            u,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Header.jsx',
          ),
          c.register(
            f,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Header.jsx',
          )),
      (d =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && d(e);
    }.call(this, r(6)(e)));
  },
  29(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let l,
        i,
        c = function () {
          return n.a.createElement(
            'div',
            null,
            n.a.createElement('p', null, 'Todos los Izquierdos Reservados'),
          );
        },
        d = c;
      (t.a = d),
      (l =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (l.register(
            c,
            'Footer',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Footer.jsx',
          ),
          l.register(
            d,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Footer.jsx',
          )),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && i(e);
    }.call(this, r(6)(e)));
  },
  30(e, t, r) {
    'use strict';

    (function (e) {
      let a,
        o = r(0),
        n = r.n(o);
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && a(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let l,
        i,
        c = function () {
          return n.a.createElement('h1', null, 'No Encontrado');
        },
        d = c;
      (t.a = d),
      (l =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (l.register(
            c,
            'NotFound',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\NotFound.jsx',
          ),
          l.register(
            d,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\NotFound.jsx',
          )),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && i(e);
    }.call(this, r(6)(e)));
  },
  31(e, t, r) {
    'use strict';

    (function (e) {
      let r;
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if (typeof e === 'string') return o(e, t);
            let r = Object.prototype.toString.call(e).slice(8, -1);
            r === 'Object' && e.constructor && (r = e.constructor.name);
            if (r === 'Map' || r === 'Set') return Array.from(e);
            if (
              r === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ) return o(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function o(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
        return a;
      }
      function n(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, a);
        }
        return r;
      }
      function l(e) {
        for (let t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {};
          t % 2 ?
            n(Object(r), !0).forEach((t) => {
              i(e, t, r[t]);
            }) :
            Object.getOwnPropertyDescriptors ?
              Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) :
              n(Object(r)).forEach((t) => {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function i(e, t, r) {
        return (
          t in e ?
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }) :
            (e[t] = r),
          e
        );
      }
      (r =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && r(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        d,
        s = function (e, t) {
          switch (t.type) {
            case 'ADD_TO_CART':
              return l(
                l({}, e),
                {},
                { cart: [].concat(a(e.cart), [t.payload]) },
              );
            default:
              return e;
          }
        },
        u = s;
      (t.a = u),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            s,
            'reducer',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\reducers\\index.js',
          ),
          c.register(
            u,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\reducers\\index.js',
          )),
      (d =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && d(e);
    }.call(this, r(6)(e)));
  },
  32(e, t, r) {
    'use strict';

    r.r(t),
    function (e) {
      let t,
        a = r(0),
        o = r.n(a),
        n = r(12),
        l = r(8),
        i = r(14),
        c = r(22),
        d = r(31);
      (t =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.enterModule :
            void 0) && t(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
          reactHotLoaderGlobal.default.signature;
      let s,
        u,
        f = {
          cart: [],
          products: [
            {
              id: '1',
              image: 'https://arepa.s3.amazonaws.com/camiseta.png',
              title: 'Camiseta',
              price: 25,
              description: 'bla bla bla bla bla',
            },
            {
              id: '3',
              image: 'https://arepa.s3.amazonaws.com/mug.png',
              title: 'Mug',
              price: 10,
              description: 'bla bla bla bla bla',
            },
            {
              id: '4',
              image: 'https://arepa.s3.amazonaws.com/pin.png',
              title: 'Pin',
              price: 4,
              description: 'bla bla bla bla bla',
            },
            {
              id: '5',
              image: 'https://arepa.s3.amazonaws.com/stickers1.png',
              title: 'Stickers',
              price: 2,
              description: 'bla bla bla bla bla',
            },
            {
              id: '6',
              image: 'https://arepa.s3.amazonaws.com/stickers2.png',
              title: 'Stickers',
              price: 2,
              description: 'bla bla bla bla bla',
            },
            {
              id: '7',
              image: 'https://arepa.s3.amazonaws.com/hoodie.png',
              title: 'Hoodie',
              price: 35,
              description: 'bla bla bla bla bla',
            },
          ],
        },
        p = Object(i.b)(d.a, f);
      Object(n.hydrate)(
        o.a.createElement(l.a, { store: p }, o.a.createElement(c.a, null)),
        document.getElementById('app'),
      ),
      (s =
            typeof reactHotLoaderGlobal !== 'undefined' ?
              reactHotLoaderGlobal.default :
              void 0) &&
            (s.register(
              f,
              'initialState',
              'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\index.js',
            ),
            s.register(
              p,
              'store',
              'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\index.js',
            )),
      (u =
            typeof reactHotLoaderGlobal !== 'undefined' ?
              reactHotLoaderGlobal.leaveModule :
              void 0) && u(e);
    }.call(this, r(6)(e));
  },
  40(e, t, r) {},
  41(e, t, r) {},
  42(e, t, r) {},
  44(e, t, r) {},
});
//# sourceMappingURL=app.js.map
