!(function (e) {
  function t(t) {
    for (
      var o, a, n = t[0], l = t[1], c = t[2], i = 0, d = [];
      i < n.length;
      i++
    ) {
      (a = n[i]),
      Object.prototype.hasOwnProperty.call(k, a) && k[a] && d.push(k[a][0]),
      (k[a] = 0);
    }
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (U && U(t); d.length;) d.shift()();
    return z.push.apply(z, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < z.length; t++) {
      for (var r = z[t], o = !0, a = 1; a < r.length; a++) {
        const n = r[a];
        k[n] !== 0 && (o = !1);
      }
      o && (z.splice(t--, 1), (e = A((A.s = r[0]))));
    }
    return e;
  }
  const o = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, t) {
    !(function (e, t) {
      if (!L[e] || !P[e]) return;
      for (const r in ((P[e] = !1), t)) Object.prototype.hasOwnProperty.call(t, r) && (b[r] = t[r]);
      --y == 0 && g === 0 && O();
    })(e, t),
    o && o(e, t);
  };
  let a,
    n = !0,
    l = '77f0584a4be56bbf4b3b',
    c = {},
    i = [],
    d = [];
  function s(t) {
    var r = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: a !== t,
      active: !0,
      accept(e, t) {
        if (void 0 === e) r._selfAccepted = !0;
        else if (typeof e === 'function') r._selfAccepted = e;
        else if (typeof e === 'object') for (let o = 0; o < e.length; o++) r._acceptedDependencies[e[o]] = t || function () {};
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
            ((b = {})[t] = e[t]), p('ready');
            break;
          case 'ready':
            w(t);
            break;
          case 'prepare':
          case 'check':
          case 'dispose':
          case 'apply':
            (v = v || []).push(t);
        }
      },
      check: j,
      apply: S,
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
      data: c[t],
    };
    return (a = void 0), r;
  }
  var u = [],
    f = 'idle';
  function p(e) {
    f = e;
    for (let t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var h,
    b,
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
          var o = new XMLHttpRequest(),
            a = `${A.p}${l}.hot-update.json`;
          o.open('GET', a, !0), (o.timeout = t), o.send(null);
        } catch (e) {
          return r(e);
        }
        o.onreadystatechange = function () {
          if (o.readyState === 4) {
            if (o.status === 0) r(new Error(`Manifest request to ${a} timed out.`));
            else if (o.status === 404) e();
            else if (o.status !== 200 && o.status !== 304) r(new Error(`Manifest request to ${a} failed.`));
            else {
              try {
                var t = JSON.parse(o.responseText);
              } catch (e) {
                return void r(e);
              }
              e(t);
            }
          }
        };
      }))).then((e) => {
        if (!e) return p(M() ? 'ready' : 'idle'), null;
        (P = {}), (H = {}), (L = e.c), (m = e.h), p('prepare');
        const t = new Promise(((e, t) => {
          h = { resolve: e, reject: t };
        }));
        for (const r in ((b = {}), k)) E(r);
        return f === 'prepare' && g === 0 && y === 0 && O(), t;
      })
    );
    let t;
  }
  function E(e) {
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
  function O() {
    p('ready');
    const e = h;
    if (((h = null), e)) {
      if (n) {
        Promise.resolve()
          .then(() => {
            return S(n);
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
        for (const r in b) Object.prototype.hasOwnProperty.call(b, r) && t.push(G(r));
        e.resolve(t);
      }
    }
  }
  function S(t) {
    if (f !== 'ready') throw new Error('apply() is only allowed in ready status');
    return (function t(r) {
      let o,
        n,
        d,
        s,
        u;
      function f(e) {
        for (
          var t = [e],
            r = {},
            o = t.map((e) => {
              return { chain: [e], id: e };
            });
          o.length > 0;

        ) {
          const a = o.pop(),
            n = a.id,
            l = a.chain;
          if ((s = D[n]) && (!s.hot._selfAccepted || s.hot._selfInvalidated)) {
            if (s.hot._selfDeclined) return { type: 'self-declined', chain: l, moduleId: n };
            if (s.hot._main) return { type: 'unaccepted', chain: l, moduleId: n };
            for (let c = 0; c < s.parents.length; c++) {
              const i = s.parents[c],
                d = D[i];
              if (d) {
                if (d.hot._declinedDependencies[n]) {
                  return {
                    type: 'declined',
                    chain: l.concat([i]),
                    moduleId: n,
                    parentId: i,
                  };
                }
                t.indexOf(i) === -1 &&
                  (d.hot._acceptedDependencies[n] ?
                    (r[i] || (r[i] = []), h(r[i], [n])) :
                    (delete r[i],
                    t.push(i),
                    o.push({ chain: l.concat([i]), id: i })));
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
      function h(e, t) {
        for (let r = 0; r < t.length; r++) {
          const o = t[r];
          e.indexOf(o) === -1 && e.push(o);
        }
      }
      M();
      const y = {},
        g = [],
        H = {},
        P = function () {
          console.warn(
            `[HMR] unexpected require(${E.moduleId}) to disposed module`,
          );
        };
      for (const j in b) {
        if (Object.prototype.hasOwnProperty.call(b, j)) {
          var E;
          (u = G(j)), (E = b[j] ? f(u) : { type: 'disposed', moduleId: j });
          let O = !1,
            S = !1,
            w = !1,
            z = '';
          switch (
            (E.chain && (z = `\nUpdate propagation: ${E.chain.join(' -> ')}`),
            E.type)
          ) {
            case 'self-declined':
              r.onDeclined && r.onDeclined(E),
              r.ignoreDeclined ||
                  (O = new Error(
                    `Aborted because of self decline: ${E.moduleId}${z}`,
                  ));
              break;
            case 'declined':
              r.onDeclined && r.onDeclined(E),
              r.ignoreDeclined ||
                  (O = new Error(
                    `Aborted because of declined dependency: ${
                      E.moduleId
                    } in ${
                      E.parentId
                    }${z}`,
                  ));
              break;
            case 'unaccepted':
              r.onUnaccepted && r.onUnaccepted(E),
              r.ignoreUnaccepted ||
                  (O = new Error(
                    `Aborted because ${u} is not accepted${z}`,
                  ));
              break;
            case 'accepted':
              r.onAccepted && r.onAccepted(E), (S = !0);
              break;
            case 'disposed':
              r.onDisposed && r.onDisposed(E), (w = !0);
              break;
            default:
              throw new Error(`Unexception type ${E.type}`);
          }
          if (O) return p('abort'), Promise.reject(O);
          if (S) {
            for (u in ((H[u] = b[u]),
            h(g, E.outdatedModules),
            E.outdatedDependencies)) {
              Object.prototype.hasOwnProperty.call(E.outdatedDependencies, u) &&
                (y[u] || (y[u] = []), h(y[u], E.outdatedDependencies[u]));
            }
          }
          w && (h(g, [E.moduleId]), (H[u] = P));
        }
      }
      let x,
        C = [];
      for (n = 0; n < g.length; n++) {
        (u = g[n]),
        D[u] &&
            D[u].hot._selfAccepted &&
            H[u] !== P &&
            !D[u].hot._selfInvalidated &&
            C.push({
              module: u,
              parents: D[u].parents.slice(),
              errorHandler: D[u].hot._selfAccepted,
            });
      }
      p('dispose'),
      Object.keys(L).forEach((e) => {
        !1 === L[e] &&
            (function (e) {
              delete k[e];
            })(e);
      });
      let _,
        U,
        R = g.slice();
      for (; R.length > 0;) {
        if (((u = R.pop()), (s = D[u]))) {
          const I = {},
            N = s.hot._disposeHandlers;
          for (d = 0; d < N.length; d++) (o = N[d])(I);
          for (
            c[u] = I, s.hot.active = !1, delete D[u], delete y[u], d = 0;
            d < s.children.length;
            d++
          ) {
            const T = D[s.children[d]];
            T && (x = T.parents.indexOf(u)) >= 0 && T.parents.splice(x, 1);
          }
        }
      }
      for (u in y) {
        if (Object.prototype.hasOwnProperty.call(y, u) && (s = D[u])) {
          for (U = y[u], d = 0; d < U.length; d++) {
            (_ = U[d]),
            (x = s.children.indexOf(_)) >= 0 && s.children.splice(x, 1);
          }
        }
      }
      p('apply'), void 0 !== m && ((l = m), (m = void 0));
      for (u in ((b = void 0), H)) Object.prototype.hasOwnProperty.call(H, u) && (e[u] = H[u]);
      let q = null;
      for (u in y) {
        if (Object.prototype.hasOwnProperty.call(y, u) && (s = D[u])) {
          U = y[u];
          const F = [];
          for (n = 0; n < U.length; n++) {
            if (((_ = U[n]), (o = s.hot._acceptedDependencies[_]))) {
              if (F.indexOf(o) !== -1) continue;
              F.push(o);
            }
          }
          for (n = 0; n < F.length; n++) {
            o = F[n];
            try {
              o(U);
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
        (u = $.module), (i = $.parents), (a = u);
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
  function M() {
    if (v) return b || (b = {}), v.forEach(w), (v = void 0), !0;
  }
  function w(t) {
    Object.prototype.hasOwnProperty.call(b, t) || (b[t] = e[t]);
  }
  var D = {},
    k = { 0: 0 },
    z = [];
  function A(t) {
    if (D[t]) return D[t].exports;
    const r = (D[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: s(t),
      parents: ((d = i), (i = []), d),
      children: [],
    });
    return (
      e[t].call(
        r.exports,
        r,
        r.exports,
        (function (e) {
          const t = D[e];
          if (!t) return A;
          const r = function (r) {
              return (
                t.hot.active ?
                  (D[r] ?
                    D[r].parents.indexOf(e) === -1 && D[r].parents.push(e) :
                    ((i = [e]), (a = r)),
                  t.children.indexOf(r) === -1 && t.children.push(r)) :
                  (console.warn(
                    `[HMR] unexpected require(${
                      r
                    }) from disposed module ${
                      e}`,
                  ),
                  (i = [])),
                A(r)
              );
            },
            o = function (e) {
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
              Object.defineProperty(r, n, o(n));
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
                f === 'prepare' && (H[e] || E(e), g === 0 && y === 0 && O());
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
  (A.c = D),
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
      for (const o in e) {
        A.d(
          r,
          o,
          ((t) => {
            return e[t];
          }).bind(null, o),
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
})([,,,,,,,,, , , , , , , , ,








  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(8);
      r(41);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        i,
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
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            d,
            'Checkout',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          ),
          c.register(
            s,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          ),
          c.register(
            u,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Checkout.jsx',
          )),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && i(e);
    }.call(this, r(6)(e)));
  },,,, , ,

  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(11),
        c = r(2),
        i = r(24),
        d = r(17),
        s = r(27),
        u = r(30);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let f,
        p,
        h = function () {
          return n.a.createElement(
            l.a,
            null,
            n.a.createElement(
              s.a,
              null,
              n.a.createElement(
                c.c,
                null,
                n.a.createElement(c.a, {
                  exact: !0,
                  path: '/',
                  component: i.a,
                }),
                n.a.createElement(c.a, {
                  exact: !0,
                  path: '/checkout',
                  component: d.a,
                }),
                n.a.createElement(c.a, {
                  exact: !0,
                  path: '/test',
                  component: d.a,
                }),
                n.a.createElement(c.a, { component: u.a }),
              ),
            ),
          );
        },
        b = h;
      (t.a = b),
      (f =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (f.register(
            h,
            'App',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\routes\\App.jsx',
          ),
          f.register(
            b,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\routes\\App.jsx',
          )),
      (p =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && p(e);
    }.call(this, r(6)(e)));
  },
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(25);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let c,
        i,
        d = function () {
          return n.a.createElement(l.a, null);
        },
        s = d;
      (t.a = s),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (c.register(
            d,
            'Home',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Home.jsx',
          ),
          c.register(
            s,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\Home.jsx',
          )),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && i(e);
    }.call(this, r(6)(e)));
  },
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(8),
        c = r(26);
      r(40);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let i,
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
        f = { addToCart: c.a },
        p = Object(l.b)(u, f)(s);
      (t.a = p),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            s,
            'Products',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          i.register(
            u,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          i.register(
            f,
            'mapDispatchToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Products.jsx',
          ),
          i.register(
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
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o;
      r.d(t, 'a', () => {
        return l;
      }),
      (o =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.enterModule :
            void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      var a,
        n,
        l = function (e) {
          return { type: 'ADD_TO_CART', payload: e };
        };
      (a =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.default :
          void 0) &&
        a.register(
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
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(28),
        c = r(29);
      r(44);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let i,
        d,
        s = function (e) {
          const t = e.children;
          return n.a.createElement(
            'div',
            { className: 'Main' },
            n.a.createElement(l.a, null),
            t,
            n.a.createElement(c.a, null),
          );
        },
        u = s;
      (t.a = u),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            s,
            'Layout',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Layout.jsx',
          ),
          i.register(
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
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a),
        l = r(11),
        c = r(8);
      r(42);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let i,
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
        f = Object(c.b)(u, null)(s);
      (t.a = f),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            s,
            'Header',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Header.jsx',
          ),
          i.register(
            u,
            'mapStateToProps',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Header.jsx',
          ),
          i.register(
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
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let l,
        c,
        i = function () {
          return n.a.createElement(
            'div',
            null,
            n.a.createElement('p', null, 'Todos los Izquierdos Reservados'),
          );
        },
        d = i;
      (t.a = d),
      (l =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (l.register(
            i,
            'Footer',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Footer.jsx',
          ),
          l.register(
            d,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\components\\Footer.jsx',
          )),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && c(e);
    }.call(this, r(6)(e)));
  },
  function (e, t, r) {
    'use strict';

    (function (e) {
      let o,
        a = r(0),
        n = r.n(a);
      (o =
        typeof reactHotLoaderGlobal !== 'undefined' ?
          reactHotLoaderGlobal.enterModule :
          void 0) && o(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
        reactHotLoaderGlobal.default.signature;
      let l,
        c,
        i = function () {
          return n.a.createElement('h1', null, 'No Encontrado');
        },
        d = i;
      (t.a = d),
      (l =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (l.register(
            i,
            'NotFound',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\NotFound.jsx',
          ),
          l.register(
            d,
            'default',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\containers\\NotFound.jsx',
          )),
      (c =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.leaveModule :
            void 0) && c(e);
    }.call(this, r(6)(e)));
  },
  function (e, t, r) {
    'use strict';

    (function (e) {
      let r;
      function o(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return a(e);
          })(e) ||
          (function (e) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if (typeof e === 'string') return a(e, t);
            let r = Object.prototype.toString.call(e).slice(8, -1);
            r === 'Object' && e.constructor && (r = e.constructor.name);
            if (r === 'Map' || r === 'Set') return Array.from(e);
            if (
              r === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ) return a(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function a(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
        return o;
      }
      function n(e, t) {
        const r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter((t) => {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (let t = 1; t < arguments.length; t++) {
          var r = arguments[t] != null ? arguments[t] : {};
          t % 2 ?
            n(Object(r), !0).forEach((t) => {
              c(e, t, r[t]);
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
      function c(e, t, r) {
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
      let i,
        d,
        s = function (e, t) {
          switch (t.type) {
            case 'ADD_TO_CART':
              return l(
                l({}, e),
                {},
                { cart: [].concat(o(e.cart), [t.payload]) },
              );
            default:
              return e;
          }
        },
        u = s;
      (t.a = u),
      (i =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.default :
            void 0) &&
          (i.register(
            s,
            'reducer',
            'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\reducers\\index.js',
          ),
          i.register(
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
  function (e, t, r) {
    'use strict';

    r.r(t),
    function (e) {
      let t,
        o = r(0),
        a = r.n(o),
        n = r(12),
        l = r(8),
        c = r(14),
        i = r(23),
        d = r(31);
      (t =
          typeof reactHotLoaderGlobal !== 'undefined' ?
            reactHotLoaderGlobal.enterModule :
            void 0) && t(e);
      typeof reactHotLoaderGlobal !== 'undefined' &&
          reactHotLoaderGlobal.default.signature;
      let s,
        u,
        f = fetch('https://platiz-store-jc.herokuapp.com/api/products', {
          method: 'GET',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
        });
      f
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          return { cart: [], products: e.data };
        })
        .then((e) => {
          console.log(e);
          const t = Object(c.b)(d.a, e);
          Object(n.hydrate)(
            a.a.createElement(
              l.a,
              { store: t },
              a.a.createElement(i.a, null),
            ),
            document.getElementById('app'),
          );
        }),
      (s =
            typeof reactHotLoaderGlobal !== 'undefined' ?
              reactHotLoaderGlobal.default :
              void 0) &&
            s.register(
              f,
              'dbProducts',
              'C:\\Users\\Administrator\\Desktop\\Platzi\\Platzi Master\\SSR-challenge\\src\\frontend\\index.js',
            ),
      (u =
            typeof reactHotLoaderGlobal !== 'undefined' ?
              reactHotLoaderGlobal.leaveModule :
              void 0) && u(e);
    }.call(this, r(6)(e));
  },,,,, , , ,

  function (e, t, r) {},
  function (e, t, r) {},
  function (e, t, r) {},,
  function (e, t, r) {},
]);
//# sourceMappingURL=app.js.map
