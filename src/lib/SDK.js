/** @preserve Powered by linktop(https://www.linktop.com)*/
!(function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e();
  else if ('function' == typeof define && define.amd) define([], e);
  else {
    var r = e();
    for (var n in r) ('object' == typeof exports ? exports : t)[n] = r[n];
  }
})(self, function () {
  return (function () {
    var t = {
        7228: function (t) {
          t.exports = function (t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          };
        },
        2858: function (t) {
          t.exports = function (t) {
            if (Array.isArray(t)) return t;
          };
        },
        3646: function (t, e, r) {
          var n = r(7228);
          t.exports = function (t) {
            if (Array.isArray(t)) return n(t);
          };
        },
        1506: function (t) {
          t.exports = function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          };
        },
        8926: function (t) {
          function e(t, e, r, n, i, a, o) {
            try {
              var s = t[a](o),
                u = s.value;
            } catch (t) {
              return void r(t);
            }
            s.done ? e(u) : Promise.resolve(u).then(n, i);
          }
          t.exports = function (t) {
            return function () {
              var r = this,
                n = arguments;
              return new Promise(function (i, a) {
                var o = t.apply(r, n);
                function s(t) {
                  e(o, i, a, s, u, 'next', t);
                }
                function u(t) {
                  e(o, i, a, s, u, 'throw', t);
                }
                s(void 0);
              });
            };
          };
        },
        4575: function (t) {
          t.exports = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          };
        },
        3913: function (t) {
          function e(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          t.exports = function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        },
        9713: function (t) {
          t.exports = function (t, e, r) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = r),
              t
            );
          };
        },
        9754: function (t) {
          function e(r) {
            return (
              (t.exports = e =
                Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    }),
              e(r)
            );
          }
          t.exports = e;
        },
        2205: function (t, e, r) {
          var n = r(9489);
          t.exports = function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {value: t, writable: !0, configurable: !0},
            })),
              e && n(t, e);
          };
        },
        6860: function (t) {
          t.exports = function (t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t);
          };
        },
        3884: function (t) {
          t.exports = function (t, e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var o, s = t[Symbol.iterator]();
                  !(n = (o = s.next()).done) &&
                  (r.push(o.value), !e || r.length !== e);
                  n = !0
                );
              } catch (t) {
                (i = !0), (a = t);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return r;
            }
          };
        },
        521: function (t) {
          t.exports = function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          };
        },
        8206: function (t) {
          t.exports = function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          };
        },
        8585: function (t, e, r) {
          var n = r(8),
            i = r(1506);
          t.exports = function (t, e) {
            return !e || ('object' !== n(e) && 'function' != typeof e)
              ? i(t)
              : e;
          };
        },
        9489: function (t) {
          function e(r, n) {
            return (
              (t.exports = e =
                Object.setPrototypeOf ||
                function (t, e) {
                  return (t.__proto__ = e), t;
                }),
              e(r, n)
            );
          }
          t.exports = e;
        },
        3038: function (t, e, r) {
          var n = r(2858),
            i = r(3884),
            a = r(379),
            o = r(521);
          t.exports = function (t, e) {
            return n(t) || i(t, e) || a(t, e) || o();
          };
        },
        319: function (t, e, r) {
          var n = r(3646),
            i = r(6860),
            a = r(379),
            o = r(8206);
          t.exports = function (t) {
            return n(t) || i(t) || a(t) || o();
          };
        },
        8: function (t) {
          function e(r) {
            return (
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? (t.exports = e =
                    function (t) {
                      return typeof t;
                    })
                : (t.exports = e =
                    function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    }),
              e(r)
            );
          }
          t.exports = e;
        },
        379: function (t, e, r) {
          var n = r(7228);
          t.exports = function (t, e) {
            if (t) {
              if ('string' == typeof t) return n(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === r && t.constructor && (r = t.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(t)
                  : 'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(t, e)
                  : void 0
              );
            }
          };
        },
        7757: function (t, e, r) {
          t.exports = r(5666);
        },
        3274: function (t, e, r) {
          'use strict';
          r.r(e),
            r.d(e, {
              default: function () {
                return Er;
              },
            });
          r(2222),
            r(1539),
            r(9714),
            r(1038),
            r(6992),
            r(7042),
            r(9575),
            r(1532),
            r(8783),
            r(7145),
            r(2472),
            r(2990),
            r(8927),
            r(3105),
            r(5035),
            r(4345),
            r(7174),
            r(2846),
            r(4731),
            r(7209),
            r(6319),
            r(8867),
            r(7789),
            r(3739),
            r(9368),
            r(4483),
            r(2056),
            r(3462),
            r(678),
            r(7462),
            r(3824),
            r(5021),
            r(2974),
            r(5016),
            r(3948);
          var n,
            i = r(7757),
            a = r.n(i),
            o = (r(5666), r(8926)),
            s = r.n(o),
            u = r(319),
            c = r.n(u),
            f = r(4575),
            h = r.n(f),
            l = r(3913),
            p = r.n(l);
          !(function (t) {
            (t[(t.HZ125 = 125)] = 'HZ125'),
              (t[(t.HZ250 = 250)] = 'HZ250'),
              (t[(t.HZ500 = 500)] = 'HZ500');
          })(n || (n = {}));
          var v,
            y,
            d,
            g = -3,
            A = 'package lose',
            m = 'invalid data',
            T = 'leak',
            E = 'data length not match';
          !(function (t) {
            (t.BP = 'Blood Pressure'),
              (t.BT = 'Blood Temperature'),
              (t.BG = 'Blood Glucose'),
              (t.OX = 'Blood Oxygen'),
              (t.ECG = 'Electrocardiogram'),
              (t.HRV = 'Heart Rate Variability'),
              (t.CHOL = 'Cholestenone'),
              (t.UA = 'Uric Acid'),
              (t.BATTERY = 'Battery');
          })(v || (v = {})),
            (function (t) {
              (t[(t.START = 0)] = 'START'),
                (t[(t.RESUME = 1)] = 'RESUME'),
                (t[(t.OPERATION = 2)] = 'OPERATION'),
                (t[(t.RUNNING = 3)] = 'RUNNING'),
                (t[(t.PAUSE = 4)] = 'PAUSE'),
                (t[(t.END = 5)] = 'END'),
                (t[(t.BP_CAL_TEMP = 6)] = 'BP_CAL_TEMP'),
                (t[(t.BP_CAL_ZERO = 7)] = 'BP_CAL_ZERO'),
                (t[(t.BP_START_QUICK_GAS = 8)] = 'BP_START_QUICK_GAS'),
                (t[(t.BP_CHANGE_CHARGING_SPEED = 9)] =
                  'BP_CHANGE_CHARGING_SPEED'),
                (t[(t.BP_START_PWM_GAS_ARM = 10)] = 'BP_START_PWM_GAS_ARM'),
                (t[(t.BP_START_PWM_GAS_WRIST = 11)] = 'BP_START_PWM_GAS_WRIST');
            })(y || (y = {})),
            (function (t) {
              (t[(t.GLOBAL = 0)] = 'GLOBAL'), (t[(t.PART = 1)] = 'PART');
            })(d || (d = {}));
          var b = (function () {
              function t() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 'exception',
                  r = arguments.length > 1 ? arguments[1] : void 0,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : d.PART,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : '';
                h()(this, t),
                  (this.type = void 0),
                  (this.code = void 0),
                  (this.grade = void 0),
                  (this.message = void 0),
                  (this.type = e),
                  (this.code = r),
                  (this.grade = n),
                  (this.message = i);
              }
              return (
                p()(t, [
                  {
                    key: 'toString',
                    value: function () {
                      return 'type='
                        .concat(this.type, ',code=')
                        .concat(this.code, ',grade=')
                        .concat(this.grade, ',message=')
                        .concat(this.message);
                    },
                  },
                ]),
                t
              );
            })(),
            S = function t(e, r, n) {
              h()(this, t),
                (this.type = void 0),
                (this.length = void 0),
                (this.data = void 0),
                (this.type = e),
                (this.length = r),
                (this.data = n);
            };
          function P(t, e) {
            var r;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return _(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === r && t.constructor && (r = t.constructor.name);
                  if ('Map' === r || 'Set' === r) return Array.from(t);
                  if (
                    'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return _(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                r && (t = r);
                var n = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return n >= t.length
                      ? {done: !0}
                      : {done: !1, value: t[n++]};
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var a,
              o = !0,
              s = !1;
            return {
              s: function () {
                r = t[Symbol.iterator]();
              },
              n: function () {
                var t = r.next();
                return (o = t.done), t;
              },
              e: function (t) {
                (s = !0), (a = t);
              },
              f: function () {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              },
            };
          }
          function _(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          function w() {
            return (w = s()(
              a().mark(function t(e) {
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!(e.byteLength < 9)) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return', !1);
                      case 2:
                        return t.abrupt('return', !1);
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )).apply(this, arguments);
          }
          var x = {
              encryHead: function (t) {
                if (5 !== t.byteLength)
                  throw Error('Encry Head Error,byteLength not eq 5');
                var e,
                  r = 0,
                  n = P(new Int8Array(t));
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    (r ^= 255 & e.value), (r &= 65535);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return r;
              },
              encryTail: function (t) {
                if (t.byteLength < 6)
                  throw Error('Encry Tail Error,byteLength l eq 6');
                var e,
                  r = 65535,
                  n = P(new Int8Array(t));
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var i = e.value;
                    (r = ((r >> 8) & 255) | (r << 8)),
                      (r &= 65535),
                      (r ^= 255 & i),
                      (r &= 65535),
                      (r ^= (255 & r) >> 4),
                      (r &= 65535),
                      (r ^= (r << 8) << 4),
                      (r &= 65535),
                      (r ^= ((255 & r) << 4) << 1),
                      (r &= 65535);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                return r;
              },
              verifyEffective: function (t) {
                return w.apply(this, arguments);
              },
            },
            R = (function () {
              function t() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {mode: 'development', analyze: !1};
                h()(this, t),
                  (this.options = void 0),
                  (this.cache = new Map()),
                  (this.preType = null),
                  (this.options = e);
              }
              var e;
              return (
                p()(t, [
                  {
                    key: 'commonPackageParse',
                    value: function (t) {
                      var e = t.byteLength,
                        r = new DataView(t),
                        n = r.getInt8(0),
                        i = r.getInt16(1, !0),
                        a = r.getInt8(3),
                        o = r.getUint8(4);
                      if (132 == o || 15 == o)
                        return this.generalUnpackRawDataOx(t);
                      if (e < 9 || i > 11) return null;
                      var s = 6 + i + 2;
                      if (s > e || s < 0)
                        return new b(m, 3, d.PART, 'Invalid Data');
                      var u = r.getUint8(6 + i + 2);
                      return 2 !== n || 4 !== a || 255 !== u
                        ? new b(m, 3, d.PART, 'Invalid Data')
                        : new S(
                            o,
                            i,
                            Array.from(new Int8Array(r.buffer.slice(6, 6 + i))),
                          );
                    },
                  },
                  {
                    key: 'generalUnpackRawData',
                    value: function (t) {
                      var e = t.byteLength;
                      if (e < 9) return new b(m, 3, d.PART, 'Invalid Data');
                      var r = new DataView(t),
                        n = r.getUint8(0),
                        i = r.getUint16(1, !0),
                        a = r.getUint8(3),
                        o = r.getUint8(4);
                      if (132 == o) return this.generalUnpackRawDataOx(t), null;
                      var s,
                        u,
                        f = r.getUint8(5);
                      i > 0 &&
                        i <= 11 &&
                        ((s = r.getUint16(g + i + 9, !0)),
                        (u = r.getUint8(-1 + i + 9)));
                      var h = 2 === n && 4 === a && i <= e - 9 && i > 0,
                        l = h || (!h && 2 === n && 4 === a),
                        p = h || (!h && !l);
                      if (!h) {
                        if (l)
                          return this.cache.has(o)
                            ? new b(A, 2, d.PART, 'loose tail package')
                            : ((this.preType = o), this.cache.set(o, t), null);
                        if (p) {
                          if (
                            null === this.preType ||
                            !this.cache.has(this.preType)
                          )
                            return (
                              null !== this.preType &&
                                (this.cache.delete(this.preType),
                                (this.preType = null)),
                              new b(A, 1, d.PART, 'lose head package')
                            );
                          var v = new Uint8Array(this.cache.get(this.preType)),
                            y = new Uint8Array(t);
                          (e = (r = new DataView(
                            new Uint8Array([].concat(c()(v), c()(y))).buffer,
                          )).byteLength),
                            (n = r.getUint8(0)),
                            (i = r.getUint16(1, !0)),
                            (a = r.getUint8(3)),
                            (o = r.getUint8(4)),
                            (f = r.getUint8(5)),
                            (s = r.getUint16(g + e, !0)),
                            (u = r.getUint8(-1 + e)),
                            this.cache.delete(this.preType),
                            (this.preType = null);
                        }
                      }
                      if (!0 === this.options.analyze) {
                        if (!(2 === n && 4 === a && 255 === u))
                          return new b(m, 3, d.PART, 'Invalid Data');
                        var T = x.encryHead(r.buffer.slice(0, 5)),
                          E = x.encryTail(r.buffer.slice(0, e + g));
                        if (T !== f || E !== s)
                          return new b(m, 4, d.PART, 'Secry Error');
                      }
                      return new S(
                        o,
                        i,
                        Array.from(
                          new Uint8Array(r.buffer.slice(6, 6 + i + 1)),
                        ),
                      );
                    },
                  },
                  {
                    key: 'generalUnpackRawDataOx',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          var r, n, i, o, s, u, f, h, l, p, v, y, T, E, P;
                          return a().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!((r = e.byteLength) < 9)) {
                                      t.next = 3;
                                      break;
                                    }
                                    return t.abrupt(
                                      'return',
                                      new b(m, 3, d.PART, 'Invalid Data'),
                                    );
                                  case 3:
                                    if (
                                      ((n = new DataView(e)),
                                      (i = n.getUint8(0)),
                                      (o = n.getUint16(1, !0)),
                                      (s = n.getUint8(3)),
                                      (u = n.getUint8(4)),
                                      (f = n.getUint8(5)),
                                      (h = n.getUint16(g + r, !0)),
                                      (l = n.getUint8(-1 + r)),
                                      (v = 255 === l),
                                      (p = 2 === i && 4 === s) &&
                                        v &&
                                        r <= r - 9)
                                    ) {
                                      t.next = 38;
                                      break;
                                    }
                                    if (!p) {
                                      t.next = 20;
                                      break;
                                    }
                                    return (
                                      this.cache.has(u) &&
                                        new b(
                                          A,
                                          2,
                                          d.PART,
                                          'loose tail package',
                                        ),
                                      (this.preType = u),
                                      this.cache.set(u, e),
                                      t.abrupt('return', null)
                                    );
                                  case 20:
                                    if (!v) {
                                      t.next = 38;
                                      break;
                                    }
                                    if (
                                      null !== this.preType &&
                                      this.cache.has(this.preType)
                                    ) {
                                      t.next = 25;
                                      break;
                                    }
                                    return (
                                      new b(A, 1, d.PART, 'lose head package'),
                                      null !== this.preType &&
                                        (this.cache.delete(this.preType),
                                        (this.preType = null)),
                                      t.abrupt('return', null)
                                    );
                                  case 25:
                                    (y = new Uint8Array(
                                      this.cache.get(this.preType),
                                    )),
                                      (T = new Uint8Array(e)),
                                      (n = new DataView(
                                        new Uint8Array(
                                          [].concat(c()(y), c()(T)),
                                        ).buffer,
                                      )),
                                      (r = n.byteLength),
                                      (i = n.getUint8(0)),
                                      (o = n.getUint16(1, !0)),
                                      (s = n.getUint8(3)),
                                      (u = n.getUint8(4)),
                                      (f = n.getUint8(5)),
                                      (h = n.getUint16(g + r, !0)),
                                      (l = n.getUint8(-1 + r)),
                                      this.cache.delete(this.preType),
                                      (this.preType = null);
                                  case 38:
                                    if (!0 !== this.options.analyze) {
                                      t.next = 46;
                                      break;
                                    }
                                    if (2 === i && 4 === s && 255 === l) {
                                      t.next = 42;
                                      break;
                                    }
                                    return t.abrupt(
                                      'return',
                                      new b(m, 3, d.PART, 'Invalid Data'),
                                    );
                                  case 42:
                                    if (
                                      ((E = x.encryHead(n.buffer.slice(0, 5))),
                                      (P = x.encryTail(
                                        n.buffer.slice(0, r + g),
                                      )),
                                      E === f && P === h)
                                    ) {
                                      t.next = 46;
                                      break;
                                    }
                                    return t.abrupt(
                                      'return',
                                      new b(m, 4, d.PART, 'Secry Error'),
                                    );
                                  case 46:
                                    return t.abrupt(
                                      'return',
                                      new S(
                                        u,
                                        o,
                                        Array.from(
                                          new Uint8Array(
                                            n.buffer.slice(6, 6 + o + 1),
                                          ),
                                        ),
                                      ),
                                    );
                                  case 47:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this,
                          );
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                ]),
                t
              );
            })(),
            I = (r(6572), r(2205)),
            D = r.n(I),
            C = r(8585),
            O = r.n(C),
            N = r(9754),
            k = r.n(N),
            L = function t(e, r, n) {
              h()(this, t),
                (this.ps = void 0),
                (this.pd = void 0),
                (this.hr = void 0),
                (this.ps = e),
                (this.pd = r),
                (this.hr = n);
            },
            B =
              (r(8264),
              (function () {
                function t() {
                  h()(this, t);
                }
                return (
                  p()(t, [
                    {
                      key: 'startDetect',
                      value: function (t) {
                        switch (t) {
                          case v.BP:
                            return this.obtainCommandData(1, Array.of(1));
                          case v.BT:
                            return this.obtainCommandData(2, Array.of(0));
                          case v.OX:
                            return this.obtainCommandData(4, Array.of(0));
                          case v.ECG:
                            return this.obtainCommandData(5, Array.of(1));
                          case v.BG:
                            return this.obtainCommandData(3, Array.of(1));
                          case v.HRV:
                          case v.CHOL:
                          case v.UA:
                            return this.obtainCommandData(4, Array.of(0));
                          case v.BATTERY:
                            return this.obtainCommandData(15, Array.of(0));
                          default:
                            return new ArrayBuffer(10);
                        }
                      },
                    },
                    {
                      key: 'stopDetect',
                      value: function (t) {
                        switch (t) {
                          case v.BP:
                            return this.obtainCommandData(1, Array.of(7));
                          case v.OX:
                            return this.obtainCommandData(4, Array.of(1));
                          case v.ECG:
                            return this.obtainCommandData(5, Array.of(2));
                          case v.BT:
                            return this.obtainCommandData(4, Array.of(1));
                          case v.BG:
                            return this.obtainCommandData(3, Array.of(4));
                          case v.HRV:
                          case v.CHOL:
                          case v.UA:
                          default:
                            return null;
                        }
                      },
                    },
                    {
                      key: 'obtainCommandData',
                      value: function (t, e) {
                        var r = 9 + e.length,
                          n = new ArrayBuffer(r),
                          i = new DataView(n);
                        i.setUint8(0, 1),
                          i.setUint16(1, e.length, !0),
                          i.setUint8(3, 4),
                          i.setUint8(4, t);
                        var a = x.encryHead(n.slice(0, 5));
                        i.setUint8(5, a);
                        for (var o = 0; o < e.length; o++)
                          i.setUint8(6 + o, e[o]);
                        var s = x.encryTail(n.slice(0, r + g));
                        return (
                          i.setUint16(r + g, s, !0), i.setUint8(r + -1, 255), n
                        );
                      },
                    },
                  ]),
                  t
                );
              })()),
            M = (r(7327), r(9554), r(6699), r(2023), r(4747), r(9713)),
            G = r.n(M);
          function F(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(t);
              e &&
                (n = n.filter(function (e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function U(t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? F(Object(r), !0).forEach(function (e) {
                    G()(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : F(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e),
                    );
                  });
            }
            return t;
          }
          var j,
            V,
            H,
            W,
            Y,
            z,
            K = {mode: null, data: null},
            X = Array.of(),
            Z = Array.of(),
            q = Array.of(),
            Q = Array.of(),
            $ = Array.of(),
            J = Array.of(),
            tt = Array.of(),
            et = function (t) {
              X.includes(t) || X.push(t);
            },
            rt = function (t) {
              X.includes(t) &&
                (X = X.filter(function (e) {
                  return e !== t;
                }));
            },
            nt = function (t) {
              (K = U(U({}, K), {}, {mode: t})),
                X.forEach(function (e) {
                  e.onModeChange(t);
                });
            },
            it = function (t) {
              (K = U(U({}, K), {}, {data: t})),
                X.forEach(function (e) {
                  e.onDataPost(t);
                });
            },
            at = function (t) {
              (V = U(U({}, V), {}, {process: t})),
                Z.forEach(function (e) {
                  e.onProcess(t);
                });
            },
            ot = function (t) {
              (j = U(U({}, j), {}, {process: t})),
                Z.forEach(function (e) {
                  return e.onProcess(t);
                });
            },
            st = function (t) {
              (j = U(U({}, j), {}, {error: t})),
                q.forEach(function (e) {
                  return e.onException(t);
                });
            },
            ut = function (t) {
              (H = U(U({}, H), {}, {process: t})),
                Q.forEach(function (e) {
                  return e.onProcess(t);
                });
            },
            ct = function (t) {
              (H = U(U({}, H), {}, {error: t})),
                Q.forEach(function (e) {
                  return e.onException(t);
                });
            },
            ft = function (t) {
              (H = U(U({}, H), {}, {finger: t})),
                Q.forEach(function (e) {
                  return e.onFinger(t);
                });
            },
            ht = function (t) {
              (z = U(U({}, z), {}, {process: t})),
                tt.forEach(function (e) {
                  return e.onProcess(t);
                });
            },
            lt = function (t) {
              (W = U(U({}, W), {}, {process: t})),
                $.forEach(function (e) {
                  return e.onProcess(t);
                });
            },
            pt = function (t) {
              (W = U(U({}, W), {}, {error: t})),
                $.forEach(function (e) {
                  return e.onException(t);
                });
            },
            vt = function (t) {
              (W = U(U({}, W), {}, {filter: t})),
                $.forEach(function (e) {
                  return e.onFilterResult(t.data, t.start);
                });
            },
            yt = function (t) {
              (W = U(U({}, W), {}, {raw: t})),
                $.forEach(function (e) {
                  return e.onRawResult(t);
                });
            },
            dt = function (t) {
              (W = U(U({}, W), {}, {result: t})),
                $.forEach(function (e) {
                  return e.onResult(t);
                });
            },
            gt = function (t) {
              (W = U(U({}, W), {}, {touch: t})),
                $.forEach(function (e) {
                  return e.onFingerdetection(t);
                });
            },
            At = function (t) {
              (Y = U(U({}, Y), {}, {process: t})),
                J.forEach(function (e) {
                  return e.onProcess(t);
                });
            },
            mt = function (t, e) {
              (Y = U(U({}, Y), {}, {code: t, state: e})),
                J.forEach(function (r) {
                  return r.onPaperState(t, e);
                });
            },
            Tt = function (t) {
              (Y = U(U({}, Y), {}, {result: t})),
                J.forEach(function (e) {
                  return e.onResult(t);
                });
            },
            Et =
              (K.mode,
              (function () {
                function t() {
                  h()(this, t);
                }
                return (
                  p()(t, [
                    {
                      key: 'postMessage',
                      value: function (t) {
                        var e =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : '',
                          r =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : null;
                        self.postMessage({url: t, message: e, data: r});
                      },
                    },
                  ]),
                  t
                );
              })()),
            bt = Array.of(0.4066693, 0, -0.8133387, 0, 0.4066693),
            St = Array.of(1, -0.7759901, -0.2342935, 0.008078268, 0.203421),
            Pt = Array.of(
              0.0002348661,
              3579679e-11,
              0.0001204414,
              0.0001884837,
              -6242249e-12,
              0.0002218728,
              6214719e-11,
              7115943e-11,
              0.0002147019,
              -2496524e-11,
              0.0001925316,
              9202572e-11,
              1406779e-11,
              0.0002292334,
              -38221e-9,
              0.0001434054,
              0.0001233144,
              -5050677e-11,
              0.0002261791,
              -4476452e-11,
              7071e-8,
              0.0001519877,
              -120647e-9,
              0.0001978181,
              -4338013e-11,
              -280142e-10,
              0.0001716167,
              -0.0001920693,
              0.0001358374,
              -3360166e-11,
              -0.0001520273,
              0.0001734017,
              -0.0002579471,
              3329581e-11,
              -1661238e-11,
              -0.0002957414,
              0.0001469428,
              -0.0003094817,
              -0.0001129544,
              3949796e-12,
              -0.0004477384,
              8182312e-11,
              -0.0003372024,
              -0.0002998137,
              2159107e-11,
              -590817e-9,
              -3008892e-11,
              -332808e-9,
              -0.0005159737,
              2723975e-11,
              -0.0007032771,
              -0.0001919057,
              -0.0002912101,
              -0.0007409751,
              1037225e-11,
              -0.0007614335,
              -0.0003990034,
              -0.0002123438,
              -0.0009457193,
              -3900806e-11,
              -743114e-9,
              -0.0006368808,
              -0.0001022957,
              -0.001094683,
              -0.0001277316,
              -0.0006316733,
              -0.0008801728,
              2662565e-11,
              -0.001149821,
              -0.0002565498,
              -0.0004198941,
              -0.001093316,
              0.0001570958,
              -0.001075851,
              -0.0004174896,
              -0.0001130736,
              -0.001233171,
              0.0002692479,
              -0.0008463203,
              -0.0005920923,
              269363e-9,
              -0.001253641,
              0.0003441574,
              -0.0004496392,
              -0.0007511295,
              0.0006942162,
              -0.001111986,
              367839e-9,
              0.0001058785,
              -0.0008562468,
              0.001117068,
              -0.0007762084,
              0.0003350786,
              0.0007888941,
              -0.0008637464,
              0.001486941,
              -0.0002325984,
              0.0002523385,
              0.001544629,
              -0.0007303911,
              0.001752611,
              0.0005076565,
              0.0001390146,
              0.002297637,
              -0.0004207584,
              0.001869806,
              0.001403939,
              2649056e-11,
              0.00295785,
              846678e-10,
              0.001808301,
              0.002384762,
              -452753e-10,
              0.003429513,
              0.0007817441,
              0.001557819,
              0.003350152,
              -3353404e-11,
              0.003622189,
              0.001636464,
              0.001131702,
              0.004178167,
              9959928e-11,
              0.003462627,
              0.002581486,
              567565e-9,
              0.004735316,
              0.0003784851,
              0.002906052,
              0.003516381,
              -7552721e-11,
              0.00489015,
              0.0008054359,
              0.001945372,
              0.004312184,
              -0.0007233228,
              0.004528741,
              0.001353602,
              0.0006169565,
              0.004820367,
              -0.001295589,
              0.003570448,
              0.001962486,
              -0.0009980288,
              0.004885743,
              -0.001717298,
              0.001982167,
              0.002537068,
              -0.002777214,
              0.004362241,
              -0.001930488,
              -0.0002106866,
              0.002951058,
              -0.00456541,
              0.003130009,
              -0.001905348,
              -0.002917859,
              0.003054252,
              -0.006186975,
              0.001111955,
              -0.001649126,
              -0.005983473,
              0.002683219,
              -0.007460694,
              -0.001712278,
              -0.001211789,
              -0.009190752,
              0.001673779,
              -0.008215142,
              -0.005296779,
              -0.0006879771,
              -0.01227118,
              -0.0001271827,
              -0.008301913,
              -0.009525783,
              -0.0002157863,
              -0.01491541,
              -0.002854298,
              -0.007603449,
              -0.01421694,
              2545399e-11,
              -0.01678069,
              -0.006626808,
              -0.006030723,
              -0.01913161,
              -186898e-9,
              -0.01748419,
              -0.01157427,
              -0.003501818,
              -0.02399153,
              -0.001138292,
              -0.01655643,
              -0.01791523,
              0.0001216042,
              -0.02850049,
              -0.003251833,
              -0.01327762,
              -0.02618687,
              0.005218366,
              -0.03236898,
              -0.007359677,
              -0.006089196,
              -0.03804661,
              0.0130758,
              -0.0353392,
              -0.01593082,
              0.01025505,
              -0.06047155,
              0.02983333,
              -0.03720814,
              -0.04359466,
              0.07608758,
              -0.1727133,
              0.1882178,
              0.7623485,
              0.1882178,
              -0.1727133,
              0.07608758,
              -0.04359466,
              -0.03720814,
              0.02983333,
              -0.06047155,
              0.01025505,
              -0.01593082,
              -0.0353392,
              0.0130758,
              -0.03804661,
              -0.006089196,
              -0.007359677,
              -0.03236898,
              0.005218366,
              -0.02618687,
              -0.01327762,
              -0.003251833,
              -0.02850049,
              0.0001216042,
              -0.01791523,
              -0.01655643,
              -0.001138292,
              -0.02399153,
              -0.003501818,
              -0.01157427,
              -0.01748419,
              -186898e-9,
              -0.01913161,
              -0.006030723,
              -0.006626808,
              -0.01678069,
              2545399e-11,
              -0.01421694,
              -0.007603449,
              -0.002854298,
              -0.01491541,
              -0.0002157863,
              -0.009525783,
              -0.008301913,
              -0.0001271827,
              -0.01227118,
              -0.0006879771,
              -0.005296779,
              -0.008215142,
              0.001673779,
              -0.009190752,
              -0.001211789,
              -0.001712278,
              -0.007460694,
              0.002683219,
              -0.005983473,
              -0.001649126,
              0.001111955,
              -0.006186975,
              0.003054252,
              -0.002917859,
              -0.001905348,
              0.003130009,
              -0.00456541,
              0.002951058,
              -0.0002106866,
              -0.001930488,
              0.004362241,
              -0.002777214,
              0.002537068,
              0.001982167,
              -0.001717298,
              0.004885743,
              -0.0009980288,
              0.001962486,
              0.003570448,
              -0.001295589,
              0.004820367,
              0.0006169565,
              0.001353602,
              0.004528741,
              -0.0007233228,
              0.004312184,
              0.001945372,
              0.0008054359,
              0.00489015,
              -7552721e-11,
              0.003516381,
              0.002906052,
              0.0003784851,
              0.004735316,
              567565e-9,
              0.002581486,
              0.003462627,
              9959928e-11,
              0.004178167,
              0.001131702,
              0.001636464,
              0.003622189,
              -3353404e-11,
              0.003350152,
              0.001557819,
              0.0007817441,
              0.003429513,
              -452753e-10,
              0.002384762,
              0.001808301,
              846678e-10,
              0.00295785,
              2649056e-11,
              0.001403939,
              0.001869806,
              -0.0004207584,
              0.002297637,
              0.0001390146,
              0.0005076565,
              0.001752611,
              -0.0007303911,
              0.001544629,
              0.0002523385,
              -0.0002325984,
              0.001486941,
              -0.0008637464,
              0.0007888941,
              0.0003350786,
              -0.0007762084,
              0.001117068,
              -0.0008562468,
              0.0001058785,
              367839e-9,
              -0.001111986,
              0.0006942162,
              -0.0007511295,
              -0.0004496392,
              0.0003441574,
              -0.001253641,
              269363e-9,
              -0.0005920923,
              -0.0008463203,
              0.0002692479,
              -0.001233171,
              -0.0001130736,
              -0.0004174896,
              -0.001075851,
              0.0001570958,
              -0.001093316,
              -0.0004198941,
              -0.0002565498,
              -0.001149821,
              2662565e-11,
              -0.0008801728,
              -0.0006316733,
              -0.0001277316,
              -0.001094683,
              -0.0001022957,
              -0.0006368808,
              -743114e-9,
              -3900806e-11,
              -0.0009457193,
              -0.0002123438,
              -0.0003990034,
              -0.0007614335,
              1037225e-11,
              -0.0007409751,
              -0.0002912101,
              -0.0001919057,
              -0.0007032771,
              2723975e-11,
              -0.0005159737,
              -332808e-9,
              -3008892e-11,
              -590817e-9,
              2159107e-11,
              -0.0002998137,
              -0.0003372024,
              8182312e-11,
              -0.0004477384,
              3949796e-12,
              -0.0001129544,
              -0.0003094817,
              0.0001469428,
              -0.0002957414,
              -1661238e-11,
              3329581e-11,
              -0.0002579471,
              0.0001734017,
              -0.0001520273,
              -3360166e-11,
              0.0001358374,
              -0.0001920693,
              0.0001716167,
              -280142e-10,
              -4338013e-11,
              0.0001978181,
              -120647e-9,
              0.0001519877,
              7071e-8,
              -4476452e-11,
              0.0002261791,
              -5050677e-11,
              0.0001233144,
              0.0001434054,
              -38221e-9,
              0.0002292334,
              1406779e-11,
              9202572e-11,
              0.0001925316,
              -2496524e-11,
              0.0002147019,
              7115943e-11,
              6214719e-11,
              0.0002218728,
              -6242249e-12,
              0.0001884837,
              0.0001204414,
              3579679e-11,
              0.0002348661,
            );
          function _t(t, e) {
            for (var r = 0, n = 0; n < e; n++) r += t[n];
            return r;
          }
          function wt(t) {
            return 'NaN' !== parseFloat(t).toString();
          }
          var xt = {
              averageFilter: function (t, e, r, n, i) {
                var a = 0,
                  o = n,
                  s = 0;
                if (0 === r) {
                  for (a = 0; a < i; a++) t[a] = e[a];
                  a = i;
                } else a = r - i;
                for (; a < n - i; a++)
                  (s = _t(e.slice(a - i), 2 * i)),
                    (t[a] = Math.floor(s / (2 * i)));
                for (a = n - i; a < n; a++) t[a] = e[a];
                return o;
              },
              firBandPass218: function (t, e, r, n) {
                for (var i = 0; i < n; i++)
                  if (i >= r) {
                    for (var a = 0, o = 0; o < 429; o++)
                      i >= o && (a += Pt[o] * e[i - o]);
                    t[i] = a;
                  } else t[i] = 0;
                return n;
              },
              gaussianProcess: function (t, e, r) {
                var n = 0,
                  i = 0,
                  a = 0,
                  o = 0;
                for (n = e - 1; n > 0; n--)
                  if (t[n] >= t[n + 1]) {
                    if (1.1 * t[n] < t[n + 2]) {
                      t[n] < t[n + 2] / 2
                        ? (t[n + 1] = (0.2 * t[n] + 0.8 * t[n + 2] + 1) / 1)
                        : (t[n + 1] =
                            (0.2 * t[n] + 0.5 * t[n + 1] + 0.8 * t[n + 2] + 1) /
                            1.5);
                      continue;
                    }
                    for (; t[n] >= t[n + 1] && t[n] > 1; ) {
                      for (i = 1, o = t[n]; n - i > 0 && t[n - i] >= t[n + 1]; )
                        i++;
                      for (
                        n - i > 0 &&
                          t[n - i] < t[n - i - 1] / 2 &&
                          (t[n - i] =
                            (0.2 * t[n - i] +
                              0.2 * t[n - i - 1] +
                              0.8 * t[n - i + 1] +
                              1) /
                            1.2),
                          a = 0;
                        a < i;
                        a++
                      )
                        n - a >= 0 &&
                          (t[n - a] =
                            (0.8 * t[n - a - 1] +
                              0.5 * t[n - a] +
                              0.2 * t[n - a + 1] -
                              1) /
                            1.5);
                      if (o === t[n]) break;
                    }
                  }
                for (n = e; n < r; n++)
                  if (t[n + 1] >= t[n] - 1) {
                    if (
                      1.1 * t[n + 1] + 2 < t[n - 1] ||
                      t[n] < (7 * t[n - 1]) / 10
                    ) {
                      t[n] < t[n - 1] / 2
                        ? (t[n] = (0.8 * t[n - 1] + 0.2 * t[n + 1]) / 1)
                        : (t[n] =
                            (0.8 * t[n - 1] + 0.2 * t[n] + 0.2 * t[n + 1] + 1) /
                            1.2);
                      continue;
                    }
                    for (; t[n + 1] >= t[n] - 1 && t[n] > 1; ) {
                      for (
                        i = 1, o = t[n + 1];
                        n + i + 1 < r - 1 &&
                        t[n + i + 1] * (1 + 0.05 * (i + 1)) >= t[n] &&
                        1.2 * t[n + i + 1] >= t[n];

                      )
                        i++;
                      for (a = 0; a < i; a++)
                        t[n + a + 1] =
                          (0.2 * t[n + a] +
                            0.5 * t[n + a + 1] +
                            0.8 * t[n + a + 2] -
                            3 -
                            i +
                            a) /
                          1.5;
                      if (o === t[n + 1]) break;
                    }
                  }
              },
              iirBandPass: function (t, e, r, n) {
                for (var i = n, a = r; a < n; a++) {
                  for (var o = 0, s = 0; s < 5; s++)
                    a >= s && (o += bt[s] * e[a - s]);
                  for (var u = 1; u < 5; u++)
                    wt(t[a - u]) && a >= u && (o -= St[u] * t[a - u]);
                  t[a] = o;
                }
                return i;
              },
            },
            Rt = (function () {
              function t() {
                h()(this, t),
                  (this.max = 0),
                  (this.length = 0),
                  (this.tempA = void 0),
                  (this.tempB = void 0),
                  (this.tempC = void 0),
                  (this.heightNum = 0),
                  (this.heightNumPre = 0),
                  (this.heightNumFlag = 0),
                  (this.filterNum = 0),
                  (this.DATA_RES = Array.of()),
                  (this.DATA_AVE = Array.of()),
                  (this.DATA_SAM = Array.of()),
                  (this.DATA_SAM_2 = Array.of()),
                  (this.DATA_SAM_3 = Array.of()),
                  (this.DATA_FIR = Array.of()),
                  (this.DATA_IIR = Array.of(0, 0, 0, 0, 0)),
                  (this.resLen = 0),
                  (this.aveLen = 0),
                  (this.aveSecLen = 0),
                  (this.firLen = 0),
                  (this.iirLen = 0),
                  (this.DATA_AVE_SEC = Array.of()),
                  (this.DATA_AVE_THIR = Array.of()),
                  (this.DATA = Array.of());
              }
              return (
                p()(t, [
                  {
                    key: 'initBpParam',
                    value: function () {
                      (this.firLen = 0),
                        (this.iirLen = 0),
                        (this.resLen = 0),
                        (this.aveLen = 0),
                        (this.aveSecLen = 0),
                        (this.max = 0),
                        (this.heightNum = 0),
                        (this.heightNumPre = 0),
                        (this.heightNumFlag = 0),
                        (this.length = 0);
                    },
                  },
                  {
                    key: 'ras',
                    value: function (t, e) {
                      this.filterNum = t;
                      var r = 0,
                        n = this.filterNum / 1;
                      0 === this.aveLen
                        ? ((r = 0), (this.aveLen = n))
                        : ((r = this.aveLen), (this.aveLen = n)),
                        xt.averageFilter(
                          this.DATA_AVE,
                          e,
                          r,
                          this.filterNum,
                          5,
                        ),
                        this.sample(
                          this.DATA_SAM,
                          this.DATA_AVE,
                          this.filterNum,
                        );
                    },
                  },
                  {
                    key: 'fag',
                    value: function () {
                      var t = this,
                        e = 0;
                      0 === this.firLen
                        ? ((e = 428), (this.firLen = this.filterNum / 1))
                        : ((e = this.firLen),
                          (this.firLen = this.filterNum / 1)),
                        xt.firBandPass218(
                          this.DATA_FIR,
                          this.DATA_AVE,
                          e,
                          this.filterNum / 1,
                        );
                      var r = 0;
                      0 === this.aveSecLen
                        ? ((r = 0), (this.aveSecLen = this.filterNum / 1))
                        : ((r = this.aveSecLen),
                          (this.aveSecLen = this.filterNum / 1)),
                        xt.averageFilter(
                          this.DATA_AVE_SEC,
                          this.DATA_FIR,
                          r,
                          this.filterNum,
                          5,
                        ),
                        xt.averageFilter(
                          this.DATA_AVE_THIR,
                          this.DATA_FIR,
                          r,
                          this.filterNum,
                          10,
                        ),
                        this.getCrest2(
                          this.DATA_AVE_THIR,
                          this.filterNum / 1,
                          this.DATA,
                        ),
                        (this.length = 0),
                        this.DATA.forEach(function (e) {
                          e > 0 && (t.length += 1);
                        }),
                        this.getArrays();
                    },
                  },
                  {
                    key: 'getHR',
                    value: function () {
                      return this.heightNum >= 30
                        ? (5860 * (this.heightNum - 15)) /
                            (this.DATA[this.heightNum - 5] - this.DATA[10])
                        : this.heightNum >= 20
                        ? (5860 * (this.heightNum - 13)) /
                          (this.DATA[this.heightNum - 3] - this.DATA[10])
                        : this.heightNum >= 10
                        ? (5860 * (this.heightNum - 6)) /
                          (this.DATA[this.heightNum - 2] - this.DATA[4])
                        : this.heightNum >= 4
                        ? (5860 * (this.heightNum - 3)) /
                          (this.DATA[this.heightNum - 1] - this.DATA[2])
                        : 60;
                    },
                  },
                  {
                    key: 'getPS',
                    value: function () {
                      if (this.heightNum < 3) return 0;
                      var t = this.getKs(this.tempA[this.max]),
                        e = (this.tempB[this.max] * t) & 255,
                        r = 1;
                      if (
                        this.tempB[this.max] < 10 ||
                        this.tempB[this.heightNum - 1] >= e ||
                        this.max === this.heightNum - 1 ||
                        this.max + 2 > this.heightNum ||
                        (this.tempB[this.heightNum - 1] >
                          this.tempB[this.heightNum - 2] &&
                          this.tempB[this.heightNum - 2] >
                            this.tempB[this.heightNum - 3])
                      )
                        return 0;
                      for (
                        ;
                        this.tempB[this.max + r] > e &&
                        this.max + r + 1 < this.heightNum;

                      )
                        r++;
                      return this.max + r + 1 === this.heightNum
                        ? 0
                        : this.tempA[this.max + r];
                    },
                  },
                  {
                    key: 'getPD',
                    value: function () {
                      for (
                        var t = this.getKd(this.tempA[this.max]),
                          e = (this.tempB[this.max] * t) & 255,
                          r = this.max;
                        this.tempB[r] >= e && r > 0;

                      )
                        r--;
                      if (r > 0 && this.tempB[r - 1] >= e)
                        for (r--; this.tempB[r] >= e && r > 0; ) r--;
                      if (this.tempB[r] > e) {
                        for (
                          var n, i = 1;
                          this.tempB[this.max + i] > e &&
                          this.max + i + 1 < this.heightNum;

                        )
                          i++;
                        return (n =
                          this.DATA[this.max] -
                          (this.DATA[this.max + i] - this.DATA[this.max])) > 214
                          ? this.DATA_SAM[n - 214]
                          : this.tempA[this.max] - this.tempA[this.max] / 10;
                      }
                      return 0 === r
                        ? this.tempA[r] - this.tempA[r] / 10
                        : this.tempA[r - 1];
                    },
                  },
                  {
                    key: 'getPsLast',
                    value: function () {
                      for (var t = 0; t < this.heightNum; t++)
                        this.tempC[t] = this.tempB[t];
                      xt.gaussianProcess(this.tempB, this.max, this.heightNum);
                      for (
                        var e = this.getKs(this.tempA[this.max]),
                          r = (this.tempB[this.max] * e) & 255,
                          n = 1;
                        this.tempB[this.max + n] > r &&
                        this.max + n + 1 < this.heightNum;

                      )
                        n++;
                      if (
                        this.max + n + 1 < this.heightNum &&
                        this.tempB[this.max + n + 1] > r
                      )
                        for (
                          n++;
                          this.tempB[this.max + n] > r &&
                          this.max + n + 1 < this.heightNum;

                        )
                          n++;
                      return (
                        (this.tempB[this.max + n] === r ||
                          this.tempB[this.max + n] === r + 1) &&
                          this.max + n + 1 < this.heightNum &&
                          this.tempB[this.max + n] - 2 <
                            (this.tempB[this.max + n - 1] +
                              this.tempB[this.max + n + 1]) /
                              2 &&
                          n++,
                        this.tempA[this.max + n]
                      );
                    },
                  },
                  {
                    key: 'getHeighNumFalg',
                    value: function () {
                      return this.heightNumFlag;
                    },
                  },
                  {
                    key: 'getKd',
                    value: function (t) {
                      var e = t / 100;
                      return e > 180
                        ? 0.6
                        : e > 140 || e > 120
                        ? 0.65
                        : e > 60 && e <= 90
                        ? 0.7
                        : e > 90 && e <= 100
                        ? (0.77 * (100 - (e - 90))) / 100
                        : e > 100
                        ? 0.77 * 0.8
                        : e > 50
                        ? 0.6
                        : 0.5;
                    },
                  },
                  {
                    key: 'getKs',
                    value: function (t) {
                      var e = t / 100;
                      return e > 200
                        ? 0.54
                        : e > 150
                        ? 0.55
                        : e > 135
                        ? 0.58
                        : e > 120
                        ? 0.6
                        : e > 110
                        ? 0.7
                        : e > 90
                        ? 0.74
                        : e > 70
                        ? 0.72
                        : 0.65;
                    },
                  },
                  {
                    key: 'preciseSumPressure',
                    value: function () {
                      var t = 0,
                        e = 0;
                      this.sample2(
                        this.DATA_SAM_2,
                        this.DATA_AVE,
                        this.filterNum,
                      ),
                        0 === this.iirLen
                          ? ((t = 5),
                            (this.iirLen = Math.floor(this.filterNum / 10)))
                          : ((t = this.iirLen),
                            (this.iirLen = Math.floor(this.filterNum / 10))),
                        xt.iirBandPass(
                          this.DATA_IIR,
                          this.DATA_SAM_2,
                          t,
                          Math.floor(this.filterNum / 10),
                        );
                      for (var r = 0; r < this.iirLen; r++)
                        this.DATA_SAM_3[r] =
                          this.DATA_SAM_2[r] - this.DATA_IIR[r];
                      for (var n = 0; n < 10; n++) {
                        this.iirLen - 10 + n >= 0 &&
                          (e += this.DATA_SAM_3[this.iirLen - 10 + n]);
                      }
                      return e;
                    },
                  },
                  {
                    key: 'sample',
                    value: function (t, e, r) {
                      for (var n = r / 1, i = 0; i < r; i++) t[i / 1] = e[i];
                      return n;
                    },
                  },
                  {
                    key: 'sample2',
                    value: function (t, e, r) {
                      for (var n = 0; n < r; n++)
                        n % 10 == 0 && (t[n / 10] = e[n]);
                      return r;
                    },
                  },
                  {
                    key: 'getCrest2',
                    value: function (t, e, r) {
                      for (
                        var n = Array.of(), i = 0, a = Array.of(), o = 0, s = 0;
                        s < e;
                        s++
                      )
                        if (t[s] >= 0)
                          o !== t[s] &&
                            ((o = t[s]),
                            n.push([s, t[s]]),
                            a.push(''.concat(t[s], ',')));
                        else if (n.length > 10) {
                          a.length = 0;
                          for (var u = n[0], c = 1; c < n.length; c++) {
                            var f = n[c];
                            f[1] > u[1] && (u = f);
                          }
                          if (((n.length = 0), i >= 2)) {
                            var h = t[r[i - 2]],
                              l = t[r[i - 1]],
                              p = t[u[0]];
                            (l + 3 < h || l + 3 < p) &&
                              l / h < 0.6 &&
                              p / h >= 0.6 &&
                              i--;
                          }
                          r[i++] = u[0];
                        }
                      (this.heightNum = i),
                        this.heightNum !== this.heightNumPre
                          ? ((this.heightNumFlag = 0),
                            (this.heightNumPre = this.heightNum))
                          : this.heightNumFlag++;
                    },
                  },
                  {
                    key: 'getArrays',
                    value: function () {
                      (this.tempA = Array.of()),
                        (this.tempB = Array.of()),
                        (this.tempC = Array.of());
                      for (var t = 0; t < this.heightNum; t++) {
                        this.DATA[t] - 214 >= 0 &&
                          ((this.tempA[t] = this.DATA_SAM[this.DATA[t] - 214]),
                          (this.tempB[t] = this.DATA_AVE_SEC[this.DATA[t]]));
                        for (var e = 0; e < this.heightNum; e++)
                          this.DATA_AVE_SEC[this.DATA[this.max]] <
                            this.DATA_AVE_SEC[this.DATA[e]] && (this.max = e);
                      }
                    },
                  },
                ]),
                t
              );
            })();
          function It(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = k()(t);
              if (e) {
                var i = k()(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return O()(this, r);
            };
          }
          Rt.s1 = void 0;
          var Dt = (function (t) {
              D()(n, t);
              var e,
                r = It(n);
              function n() {
                var t;
                return (
                  h()(this, n),
                  ((t = r.call(this)).calculate = null),
                  (t.c1 = 0),
                  (t.c2 = 0),
                  (t.c3 = 0),
                  (t.c4 = 0),
                  (t.c5 = 0),
                  (t.zero = 0),
                  (t.spt25x = 0),
                  (t.s = Array.of()),
                  (t.data = Array.of()),
                  (t.stageFlag = 0),
                  (t.hr = 0),
                  (t.pd = 0),
                  (t.ps = 0),
                  (t.sumBP = 0),
                  (t.sumZero = 0),
                  (t.equipType = 0),
                  (t.BpDataList = [0, 0, 0, 0, 0]),
                  (t.preAveragePressure = 0),
                  (t.nowAveragePressure = 0),
                  (t.preSpeedPressure = 0),
                  (t.nowSpeedPressure = 0),
                  (t.prePWM = 0),
                  (t.pwmChange = 0),
                  (t.startTs = 0),
                  (t.isStop = !1),
                  (t.s1Count = 0),
                  (t.sCount = 0),
                  (t.commandEngine = new B()),
                  t
                );
              }
              return (
                p()(n, [
                  {
                    key: 'run',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          var r;
                          return a().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (0 !== (r = e.data).length) {
                                      t.next = 4;
                                      break;
                                    }
                                    throw (
                                      (st(
                                        new b(
                                          'invalid data',
                                          17,
                                          d.PART,
                                          'Invalid Data',
                                        ),
                                      ),
                                      Error('Invalid Data Of Blood Pressure!'))
                                    );
                                  case 4:
                                    (t.t0 = 255 & r[0]),
                                      (t.next =
                                        1 === t.t0
                                          ? 7
                                          : 2 === t.t0
                                          ? 9
                                          : 3 === t.t0
                                          ? 11
                                          : 13);
                                    break;
                                  case 7:
                                    return (
                                      this.calibrateParameter(r),
                                      t.abrupt('break', 14)
                                    );
                                  case 9:
                                    return (
                                      this.calibrateTemperature(r),
                                      t.abrupt('break', 14)
                                    );
                                  case 11:
                                    return (
                                      this.handlePressureData(r),
                                      t.abrupt('break', 14)
                                    );
                                  case 13:
                                    return t.abrupt('break', 14);
                                  case 14:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this,
                          );
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                  {
                    key: 'calibrateParameter',
                    value: function (t) {
                      t.length < 7 ||
                        ((this.c1 = ((255 & t[1]) << 6) + ((255 & t[2]) >> 2)),
                        (this.c2 = ((3 & t[2]) << 4) + ((255 & t[3]) >> 4)),
                        (this.c3 =
                          ((15 & t[3]) << 9) +
                          ((255 & t[4]) << 1) +
                          ((255 & t[5]) >> 7)),
                        (this.c4 = ((127 & t[5]) << 2) + ((255 & t[6]) >> 6)),
                        (this.c5 = 63 & t[6]),
                        this.init(),
                        it(
                          this.commandEngine.obtainCommandData(1, Array.of(2)),
                        ),
                        ot(y.BP_CAL_TEMP));
                    },
                  },
                  {
                    key: 'calibrateTemperature',
                    value: function (t) {
                      if (!(t.length < 3)) {
                        var e = (255 & t[1]) + ((255 & t[2]) << 8),
                          r = 50 * Math.pow(2, 14) * this.c5 + 26214400,
                          n = 322150 + (196600 * (this.c3 - 4096)) / 8192,
                          i = (30720 + 40 * this.c4) * (10 * e - n) + r,
                          a = Math.round(i / Math.pow(2, 20)),
                          o = Math.round(r / Math.pow(2, 20));
                        i += 84 * (a - (500 - o)) * (a - o);
                        var s = (Math.round(i) - o) / Math.pow(2, 20),
                          u = (-36 * (this.c2 + 32) * s) / 160,
                          c = Math.pow(2, 16) + u,
                          f = 13312 * (this.c1 + 24576);
                        (this.spt25x = (f / c) * 25),
                          (this.zero = 32016),
                          it(
                            this.commandEngine.obtainCommandData(
                              1,
                              Array.of(3),
                            ),
                          ),
                          ot(y.BP_CAL_ZERO),
                          (this.startTs = 1),
                          (this.stageFlag = 1),
                          (this.sCount = 0),
                          (this.sumBP = 0),
                          (this.sumZero = 0),
                          null === this.calculate &&
                            (this.calculate = new Rt()),
                          this.calculate.initBpParam();
                      }
                    },
                  },
                  {
                    key: 'handlePressureData',
                    value: function (t) {
                      if (!(!0 === this.isStop || t.length < 11))
                        for (
                          var e = 0, r = 0;
                          r < this.BpDataList.length;
                          r++
                        ) {
                          if (
                            ((this.BpDataList[r] =
                              ((255 & t[2 * r + 1]) << 8) +
                              (255 & t[2 * r + 2])),
                            this.sumBP < 30
                              ? (this.sumBP > 9 &&
                                  (this.sumZero += this.BpDataList[r]),
                                (this.zero = this.BpDataList[r]))
                              : 30 === this.sumBP &&
                                (it(
                                  this.commandEngine.obtainCommandData(
                                    1,
                                    Array.of(4),
                                  ),
                                ),
                                ot(y.BP_START_QUICK_GAS),
                                (this.zero = Math.floor(this.sumZero / 20))),
                            (this.BpDataList[r] = Math.floor(
                              (this.spt25x *
                                Math.abs(this.BpDataList[r] - this.zero)) /
                                Math.pow(2, 16),
                            )),
                            (e = this.BpDataList[r]),
                            this.sumBP++,
                            this.sumBP > 30 && 0 === this.equipType)
                          )
                            if (!1 === this.forArmBpTest(r)) return;
                          new Date().getMilliseconds() - this.startTs >= 8e3 &&
                            e < 500 &&
                            (this.stop(),
                            st(new b(T, 7, d.PART, 'No-load leak')));
                        }
                    },
                  },
                  {
                    key: 'init',
                    value: function () {
                      (this.isStop = !1),
                        (this.startTs = new Date().getMilliseconds());
                    },
                  },
                  {
                    key: 'forArmBpTest',
                    value: function (t) {
                      var e = this,
                        r = 0;
                      if (
                        (this.BpDataList[t] > 2800 &&
                          1 === this.stageFlag &&
                          ((this.stageFlag = 2),
                          (this.preAveragePressure = 0),
                          (this.nowAveragePressure = 0),
                          (this.preSpeedPressure = 0),
                          (this.nowSpeedPressure = 0),
                          (this.prePWM = 0),
                          (this.pwmChange = 0),
                          this.controlAeration()),
                        this.BpDataList[t] > 3e3 &&
                          2 === this.stageFlag &&
                          (this.stageFlag = 3),
                        this.stageFlag >= 3 &&
                          ((this.s[this.sCount] = this.BpDataList[t]),
                          this.sCount++,
                          (this.sCount > 6550 || this.BpDataList[t] > 3e4) &&
                            this.stop()),
                        this.sCount % 100 == 0 && this.stageFlag >= 3)
                      ) {
                        var n;
                        this.s1Count = this.sCount;
                        var i,
                          a = 0;
                        console.log(' this.sCount ='.concat(this.sCount)),
                          this.calculate.ras(this.sCount, this.s),
                          (n = this.s[this.s1Count - 1]);
                        for (var o = 0; o < 10; o++)
                          n < this.s[this.s1Count - 1 - o] &&
                            (n = this.s[this.s1Count - 1 - o]);
                        var s = Math.floor(this.calculate.preciseSumPressure());
                        if (
                          (0 === this.nowAveragePressure
                            ? (this.nowAveragePressure = Math.floor(s / 10))
                            : (0 !== this.nowSpeedPressure &&
                                0 !== this.preSpeedPressure &&
                                (this.prePWM =
                                  this.nowSpeedPressure -
                                  this.preSpeedPressure),
                              (this.preAveragePressure =
                                this.nowAveragePressure),
                              (this.nowAveragePressure = Math.floor(s / 10)),
                              (this.preSpeedPressure = this.nowSpeedPressure),
                              (this.nowSpeedPressure =
                                this.nowAveragePressure -
                                this.preAveragePressure)),
                          (i =
                            this.nowAveragePressure - this.preAveragePressure),
                          0 !== this.preAveragePressure &&
                            0 !== this.nowAveragePressure &&
                            0 === this.preSpeedPressure)
                        ) {
                          var u = this.intToByte(
                            Math.floor((2 * (i - 500)) / 100),
                          );
                          0 !== (r = Math.floor((2 * (i - 500)) / 100)) &&
                            ((this.pwmChange = 1),
                            u < 0 &&
                              (it(
                                this.commandEngine.obtainCommandData(
                                  1,
                                  Array.of(8, u),
                                ),
                              ),
                              ot(y.BP_CHANGE_CHARGING_SPEED)));
                        } else if (
                          0 !== this.preAveragePressure &&
                          0 !== this.nowAveragePressure &&
                          0 !== this.preSpeedPressure
                        )
                          if (i <= 400) {
                            var c = this.intToByte(
                              Math.floor(
                                (2 * this.nowSpeedPressure +
                                  this.preSpeedPressure -
                                  1400) /
                                  100,
                              ),
                            );
                            0 !==
                              (r = Math.floor(
                                (2 * this.nowSpeedPressure +
                                  this.preSpeedPressure -
                                  1400) /
                                  100,
                              )) &&
                              c < 0 &&
                              (it(
                                this.commandEngine.obtainCommandData(
                                  1,
                                  Array.of(8, c),
                                ),
                              ),
                              ot(y.BP_CHANGE_CHARGING_SPEED));
                          } else if (i > 400 && i <= 500) {
                            var f = Math.floor(
                                (4 *
                                  (this.nowSpeedPressure -
                                    this.preSpeedPressure +
                                    this.prePWM)) /
                                  200,
                              ),
                              h = this.intToByte(
                                Math.floor(
                                  (2 * this.nowSpeedPressure +
                                    this.preSpeedPressure -
                                    1650) /
                                    100 +
                                    f,
                                ),
                              );
                            0 !==
                              (r = Math.floor(
                                (2 * this.nowSpeedPressure +
                                  this.preSpeedPressure -
                                  1600) /
                                  100 +
                                  f,
                              )) &&
                              h < 0 &&
                              (it(
                                this.commandEngine.obtainCommandData(
                                  1,
                                  Array.of(8, h),
                                ),
                              ),
                              ot(y.BP_CHANGE_CHARGING_SPEED));
                          } else if (i > 500 && i <= 680) {
                            (r = Math.floor(
                              (this.nowSpeedPressure -
                                this.preSpeedPressure +
                                this.prePWM) /
                                50,
                            )),
                              (r *= 2);
                            var l = this.intToByte(r);
                            i > 550 &&
                              r < 0 &&
                              ((r = Math.floor(
                                (2 *
                                  (this.nowSpeedPressure -
                                    this.preSpeedPressure) +
                                  this.prePWM) /
                                  75,
                              )),
                              (r *= 2),
                              (l = this.intToByte(r))),
                              i < 525 &&
                                r >= 0 &&
                                ((r = Math.floor(
                                  (2 *
                                    (this.nowSpeedPressure -
                                      this.preSpeedPressure) +
                                    this.prePWM) /
                                    50,
                                )),
                                (r *= 2),
                                (l = this.intToByte(r))),
                              0 === this.pwmChange && 0 !== r
                                ? ((this.pwmChange = 1),
                                  l < 0 &&
                                    (it(
                                      this.commandEngine.obtainCommandData(
                                        1,
                                        Array.of(8, l),
                                      ),
                                    ),
                                    ot(y.BP_CHANGE_CHARGING_SPEED)))
                                : (this.pwmChange = 0);
                          } else if (i > 680) {
                            var p = this.intToByte(
                              Math.floor(
                                (2 * this.nowSpeedPressure +
                                  this.preSpeedPressure -
                                  1400) /
                                  100,
                              ),
                            );
                            0 !==
                              (r = Math.floor(
                                (2 * this.nowSpeedPressure +
                                  this.preSpeedPressure -
                                  1400) /
                                  100,
                              )) &&
                              p < 0 &&
                              (it(
                                this.commandEngine.obtainCommandData(
                                  1,
                                  Array.of(8, p),
                                ),
                              ),
                              ot(y.BP_CHANGE_CHARGING_SPEED));
                          }
                        if (
                          (i > 1200 || i < 50) &&
                          0 !== this.preAveragePressure &&
                          0 !== this.nowAveragePressure
                        )
                          return (
                            this.stop(),
                            i < 50 && (a = 8),
                            i > 1200 && (a = 9),
                            st(new b(T, a, d.PART, 'blood pressure leak')),
                            !1
                          );
                        n > 1e4 &&
                          3 === this.stageFlag &&
                          ((this.stageFlag = 4),
                          this.calculateBP(),
                          this.s1Count > 5550 && (this.stageFlag = 5)),
                          5 === this.stageFlag &&
                            ((this.stageFlag = 6),
                            this.stop(),
                            setTimeout(function () {
                              (e.stageFlag = 0),
                                e.calculate.ras(e.sCount, e.s),
                                e.calculate.fag();
                              var t,
                                r = e.calculate.getPsLast();
                              0 !== r && (e.ps = r),
                                (e.ps /= 100),
                                (e.hr = e.calculate.getHR()),
                                (e.pd = e.calculate.getPD() / 100),
                                e.ps <= e.pd || e.ps - e.pd < 10
                                  ? st(
                                      new b(
                                        'error result',
                                        16,
                                        d.PART,
                                        'invalid result',
                                      ),
                                    )
                                  : ((t = new L(e.ps, e.pd, e.hr)),
                                    (j = U(U({}, j), {}, {result: t})),
                                    q.forEach(function (e) {
                                      return e.onResult(t);
                                    }));
                            }, 1e3));
                      }
                      return !0;
                    },
                  },
                  {
                    key: 'intToByte',
                    value: function (t) {
                      var e = 255 & t;
                      return e >= 128 ? -1 * (128 - (e % 128)) : e;
                    },
                  },
                  {
                    key: 'controlAeration',
                    value: function () {
                      0 === this.equipType
                        ? this.startPwmArm()
                        : this.startPwmWrist();
                    },
                  },
                  {
                    key: 'startPwmArm',
                    value: function () {
                      it(
                        this.commandEngine.obtainCommandData(
                          1,
                          Array.of(5, 85),
                        ),
                      ),
                        ot(y.BP_START_PWM_GAS_ARM);
                    },
                  },
                  {
                    key: 'startPwmWrist',
                    value: function () {
                      it(
                        this.commandEngine.obtainCommandData(
                          1,
                          Array.of(6, 85),
                        ),
                      ),
                        ot(y.BP_START_PWM_GAS_WRIST);
                    },
                  },
                  {
                    key: 'stop',
                    value: function () {
                      var t = this;
                      (this.isStop = !0),
                        setTimeout(function () {
                          it(t.commandEngine.stopDetect(v.BP)),
                            ot(y.END),
                            nt(null);
                        }, 1e3);
                    },
                  },
                  {
                    key: 'calculateBP',
                    value: function () {
                      this.calculate.ras(this.sCount, this.s),
                        this.calculate.fag(),
                        (this.ps = this.calculate.getPS()),
                        0 !== this.ps
                          ? (this.stageFlag = 5)
                          : (this.stageFlag = 3),
                        this.calculate.getHeighNumFalg() > 3 &&
                          (this.stageFlag = 5);
                    },
                  },
                ]),
                n
              );
            })(Et),
            Ct = function t(e, r, n, i) {
              h()(this, t),
                (this.index = void 0),
                (this.low = void 0),
                (this.vertical = void 0),
                (this.alternating = void 0),
                (this.index = e),
                (this.low = r),
                (this.vertical = n),
                (this.alternating = i);
            },
            Ot = function t(e, r, n) {
              h()(this, t),
                (this.min = void 0),
                (this.max = void 0),
                (this.wave = void 0),
                (this.min = e),
                (this.max = r),
                (this.wave = n);
            },
            Nt = r(3038),
            kt = r.n(Nt);
          function Lt(t, e) {
            var r;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return Bt(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === r && t.constructor && (r = t.constructor.name);
                  if ('Map' === r || 'Set' === r) return Array.from(t);
                  if (
                    'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return Bt(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                r && (t = r);
                var n = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return n >= t.length
                      ? {done: !0}
                      : {done: !1, value: t[n++]};
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var a,
              o = !0,
              s = !1;
            return {
              s: function () {
                r = t[Symbol.iterator]();
              },
              n: function () {
                var t = r.next();
                return (o = t.done), t;
              },
              e: function (t) {
                (s = !0), (a = t);
              },
              f: function () {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              },
            };
          }
          function Bt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          var Mt = (function () {
            function t() {
              h()(this, t);
            }
            return (
              p()(t, null, [
                {
                  key: 'lowPassFilter',
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 125,
                      r = 0,
                      n = this.LOW_PASS_COEFFICIENT_125;
                    if (
                      (500 === e && (n = this.LOW_PASS_COEFFICIENT_500),
                      n.length > t.length)
                    )
                      throw (
                        (ct(new b(E, 20, d.PART, 'The Data not match')),
                        Error(
                          'IllegallyParameter,The Length Of Array is not match!',
                        ))
                      );
                    var i,
                      a = Lt(n.entries());
                    try {
                      for (a.s(); !(i = a.n()).done; ) {
                        var o = kt()(i.value, 2),
                          s = o[0],
                          u = o[1];
                        r += u * t[s];
                      }
                    } catch (t) {
                      a.e(t);
                    } finally {
                      a.f();
                    }
                    return r;
                  },
                },
                {
                  key: 'applyAvg',
                  value: function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) e += t[r];
                    return e / t.length;
                  },
                },
              ]),
              t
            );
          })();
          (Mt.LOW_PASS_COEFFICIENT_125 = Array.of(
            0.001024,
            0.001008,
            948e-6,
            762e-6,
            337e-6,
            -436e-6,
            -0.001633,
            -0.003248,
            -0.005169,
            -0.007157,
            -0.008847,
            -0.009776,
            -0.009433,
            -0.007321,
            -0.003038,
            0.003653,
            0.012764,
            0.02404,
            0.036957,
            0.050754,
            0.064489,
            0.077136,
            0.087688,
            0.095268,
            0.09923,
            0.09923,
            0.095268,
            0.087688,
            0.077136,
            0.064489,
            0.050754,
            0.036957,
            0.02404,
            0.012764,
            0.003653,
            -0.003038,
            -0.007321,
            -0.009433,
            -0.009776,
            -0.008847,
            -0.007157,
            -0.005169,
            -0.003248,
            -0.001633,
            -436e-6,
            337e-6,
            762e-6,
            948e-6,
            0.001008,
            0.001024,
          )),
            (Mt.LOW_PASS_COEFFICIENT_500 = Array.of(
              -30864e-8,
              -43513e-8,
              -27284e-8,
              -30833e-8,
              -33506e-8,
              -34896e-8,
              -34538e-8,
              -31918e-8,
              -26464e-8,
              -17558e-8,
              -4551e-8,
              1323e-7,
              36486e-8,
              6593e-7,
              0.0010227,
              0.0014618,
              0.0019833,
              0.0025933,
              0.0032971,
              0.0040995,
              0.0050042,
              0.0060139,
              0.0071301,
              0.0083528,
              0.0096808,
              0.011111,
              0.01264,
              0.014261,
              0.015967,
              0.017748,
              0.019595,
              0.021494,
              0.023433,
              0.025396,
              0.027369,
              0.029334,
              0.031275,
              0.033174,
              0.035013,
              0.036774,
              0.03844,
              0.039995,
              0.041421,
              0.042705,
              0.043832,
              0.044791,
              0.045571,
              0.046163,
              0.046562,
              0.046763,
              0.046763,
              0.046562,
              0.046163,
              0.045571,
              0.044791,
              0.043832,
              0.042705,
              0.041421,
              0.039995,
              0.03844,
              0.036774,
              0.035013,
              0.033174,
              0.031275,
              0.029334,
              0.027369,
              0.025396,
              0.023433,
              0.021494,
              0.019595,
              0.017748,
              0.015967,
              0.014261,
              0.01264,
              0.011111,
              0.0096808,
              0.0083528,
              0.0071301,
              0.0060139,
              0.0050042,
              0.0040995,
              0.0032971,
              0.0025933,
              0.0019833,
              0.0014618,
              0.0010227,
              6593e-7,
              36486e-8,
              1323e-7,
              -4551e-8,
              -0.00175558,
              -26464e-8,
              -31918e-8,
              -34538e-8,
              -34896e-8,
              -33506e-8,
              -30833e-8,
              -27284e-8,
              -43513e-8,
              -30864e-8,
            ));
          var Gt = function t(e, r) {
            h()(this, t),
              (this.ppi = void 0),
              (this.r = void 0),
              (this.ppi = e),
              (this.r = r);
          };
          function Ft(t, e) {
            var r;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return Ut(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === r && t.constructor && (r = t.constructor.name);
                  if ('Map' === r || 'Set' === r) return Array.from(t);
                  if (
                    'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return Ut(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                r && (t = r);
                var n = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return n >= t.length
                      ? {done: !0}
                      : {done: !1, value: t[n++]};
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var a,
              o = !0,
              s = !1;
            return {
              s: function () {
                r = t[Symbol.iterator]();
              },
              n: function () {
                var t = r.next();
                return (o = t.done), t;
              },
              e: function (t) {
                (s = !0), (a = t);
              },
              f: function () {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              },
            };
          }
          function Ut(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          var jt = (function () {
              function t() {
                h()(this, t),
                  (this.data = void 0),
                  (this.preTendency = 0),
                  (this.findFirstPeek = void 0),
                  (this.prePeek = void 0),
                  (this.errorCount = void 0),
                  (this.result = void 0),
                  (this.data = Array.of()),
                  (this.preTendency = 0),
                  (this.findFirstPeek = !1),
                  (this.preTendency = null),
                  (this.errorCount = 0),
                  (this.result = null),
                  (this.prePeek = null);
              }
              return (
                p()(t, [
                  {
                    key: 'findPPIAndR',
                    value: function (t) {
                      var e = t.alternating > 0 ? 1 : -1;
                      if (0 !== this.preTendency)
                        if (e === this.preTendency)
                          1 === e && this.data.push(t);
                        else {
                          if (-1 === e) {
                            var r = null;
                            if (this.data.length > 22) {
                              var n,
                                i = Ft(this.data.entries());
                              try {
                                for (i.s(); !(n = i.n()).done; ) {
                                  var a = kt()(n.value, 2),
                                    o = a[0],
                                    s = a[1];
                                  (null === r ||
                                    t.alternating > s.alternating) &&
                                    (r = [o, s]);
                                }
                              } catch (t) {
                                i.e(t);
                              } finally {
                                i.f();
                              }
                              if (!0 === this.findFirstPeek)
                                if (
                                  null === this.prePeek ||
                                  this.verifyPPI(
                                    r[1].index,
                                    this.prePeek[1].index,
                                  )
                                ) {
                                  if (null !== this.prePeek) {
                                    var u = r[1].index - this.prePeek[1].index,
                                      c = r[1].alternating / r[1].vertical;
                                    this.result = new Gt(u, c);
                                  }
                                  (this.prePeek = r), (this.errorCount = 0);
                                } else
                                  (this.errorCount += 1),
                                    this.errorCount >= 3 &&
                                      ((this.prePeek = null),
                                      (this.result = null));
                              else this.findFirstPeek = !0;
                            }
                          }
                          (this.data = null), (this.data = Array.of());
                        }
                      this.preTendency = e;
                    },
                  },
                  {
                    key: 'applyResult',
                    value: function () {
                      return this.result;
                    },
                  },
                  {
                    key: 'verifyPPI',
                    value: function (t, e) {
                      var r = Math.abs(t - e);
                      return r >= 38 && r <= 260;
                    },
                  },
                ]),
                t
              );
            })(),
            Vt = 0;
          var Ht,
            Wt = {
              obtainOX: function (t, e, r) {
                var n = (function (t) {
                    var e = 7500 / t;
                    return e > 200 && (e = 200), e < 30 && (e = 30), e;
                  })(t),
                  i = n - Vt;
                return (
                  (Vt > 100 || Vt < 60) && n < 100 && n > 60 && (Vt = n),
                  0 !== Vt && i > -8 && i < 8
                    ? ((Vt = n),
                      {
                        spo2: (function (t, e) {
                          var r = t / e,
                            n = 104.5 + -7 * r + -9 * r * r;
                          return n < 10 && (n = 10), n > 99.9 && (n = 99.9), n;
                        })(e, r),
                        hr: n,
                      })
                    : (0 === Vt && (Vt = n), null)
                );
              },
              initData: function () {
                Vt = 0;
              },
            },
            Yt = 15e4,
            zt = 0,
            Kt = (function () {
              function t() {
                h()(this, t),
                  (this.ORIGIN_RED = void 0),
                  (this.ORIGIN_IR = void 0),
                  (this.LOW_RED = void 0),
                  (this.LOW_IR = void 0),
                  (this.IR_ARRAY = void 0),
                  (this.RANGE_RED = void 0),
                  (this.RANGE_IR = void 0),
                  (this.redWave = void 0),
                  (this.irWave = void 0),
                  (this.sigalCount = 0),
                  (this.IR_FINGER_PASS = 0),
                  (this.isTouch = !0),
                  (this.commandEngine = new B()),
                  this.init();
              }
              return (
                p()(t, [
                  {
                    key: 'init',
                    value: function () {
                      (this.ORIGIN_RED = Array.of()),
                        (this.ORIGIN_IR = Array.of()),
                        (this.LOW_RED = Array.of()),
                        (this.LOW_IR = Array.of()),
                        (this.IR_ARRAY = Array.of()),
                        (this.RANGE_RED = null),
                        (this.RANGE_IR = null),
                        (this.sigalCount = 0),
                        (this.IR_FINGER_PASS = 0),
                        (this.redWave = new jt()),
                        (this.irWave = new jt()),
                        (this.isTouch = !0),
                        (zt = 0),
                        Wt.initData();
                    },
                  },
                  {
                    key: 'addSignalData',
                    value: function (t, e) {
                      this.ORIGIN_RED.push(t),
                        this.ORIGIN_IR.push(e),
                        this.ORIGIN_RED.length >= 50 &&
                          this.ORIGIN_IR.length > 50 &&
                          (this.fingerDetection(e), this.handleSignal());
                    },
                  },
                  {
                    key: 'fingerDetection',
                    value: function (t) {
                      this.IR_ARRAY.length < 100
                        ? (this.IR_ARRAY.push(t),
                          t >= Yt && this.IR_FINGER_PASS++)
                        : (this.IR_FINGER_PASS / this.IR_ARRAY.length < 0.7 &&
                          this.isTouch
                            ? ((this.isTouch = !1),
                              ft(!1),
                              it(this.commandEngine.stopDetect(v.OX)),
                              ut(y.END),
                              nt(null))
                            : ft(!0),
                          this.IR_ARRAY.shift() >= Yt && this.IR_FINGER_PASS--);
                    },
                  },
                  {
                    key: 'handleSignal',
                    value: function () {
                      if (
                        !(
                          this.ORIGIN_IR.length < 50 ||
                          this.ORIGIN_RED.length < 50
                        )
                      ) {
                        var t = Mt.lowPassFilter(this.ORIGIN_RED),
                          e = Mt.lowPassFilter(this.ORIGIN_IR);
                        this.LOW_RED.push(t),
                          this.LOW_IR.push(e),
                          this.LOW_RED.length > 80 && this.LOW_RED.shift(),
                          this.LOW_IR.length > 80 && this.LOW_IR.shift();
                        var r = Mt.applyAvg(this.LOW_RED),
                          n = Mt.applyAvg(this.LOW_IR),
                          i = t - r,
                          a = e - n;
                        null === this.RANGE_RED
                          ? (this.RANGE_RED = [i, i])
                          : (this.RANGE_RED[0] > i && (this.RANGE_RED[0] = i),
                            this.RANGE_RED[1] < i && (this.RANGE_RED[1] = i)),
                          null === this.RANGE_IR
                            ? (this.RANGE_IR = [a, a])
                            : (this.RANGE_IR[0] > a && (this.RANGE_IR[0] = a),
                              this.RANGE_IR[1] < a && (this.RANGE_IR[1] = a)),
                          this.ORIGIN_RED.shift(),
                          this.ORIGIN_IR.shift();
                        var o,
                          s = this.sigalCount++;
                        (o = {
                          red: new Ot(this.RANGE_RED[0], this.RANGE_RED[1], i),
                          ir: new Ot(this.RANGE_IR[0], this.RANGE_IR[1], a),
                        }),
                          (H = U(U({}, H), {}, {wave: o})),
                          Q.forEach(function (t) {
                            return t.onRawResult(o.red, o.ir);
                          }),
                          this.redWave.findPPIAndR(new Ct(s, t, r, i)),
                          this.irWave.findPPIAndR(new Ct(s, e, n, a));
                        var u = this.redWave.applyResult(),
                          c = this.irWave.applyResult();
                        if (
                          null != u &&
                          null != c &&
                          null !== (Ht = Wt.obtainOX(c.ppi, u.r, c.r))
                        ) {
                          var f = Ht;
                          !(function (t) {
                            (H = U(U({}, H), {}, {result: t})),
                              Q.forEach(function (e) {
                                return e.onResult(t.spo2, t.hr);
                              });
                          })({spo2: f.spo2, hr: f.hr});
                        }
                        ++zt > 4e3 &&
                          (it(this.commandEngine.stopDetect(v.OX)),
                          ut(y.END),
                          nt(null),
                          this.init());
                      }
                    },
                  },
                ]),
                t
              );
            })();
          function Xt(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = k()(t);
              if (e) {
                var i = k()(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return O()(this, r);
            };
          }
          var Zt = (function (t) {
              D()(i, t);
              var e,
                r,
                n = Xt(i);
              function i() {
                var t;
                return (
                  h()(this, i),
                  ((t = n.call(this)).calculate = void 0),
                  t.init(),
                  t
                );
              }
              return (
                p()(i, [
                  {
                    key: 'init',
                    value: function () {
                      (this.calculate = new Kt()), this.calculate.init();
                    },
                  },
                  {
                    key: 'run',
                    value:
                      ((r = s()(
                        a().mark(function t(e) {
                          var r, n;
                          return a().wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.next = 2), this.resolveData(e.data)
                                    );
                                  case 2:
                                    for (
                                      r = t.sent, n = 0;
                                      n < r.length;
                                      n += 2
                                    )
                                      this.calculate.addSignalData(
                                        r[n],
                                        r[n + 1],
                                      );
                                  case 4:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            this,
                          );
                        }),
                      )),
                      function (t) {
                        return r.apply(this, arguments);
                      }),
                  },
                  {
                    key: 'resolveData',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          var r, n, i, o, s;
                          return a().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (!(e.length <= 30)) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw (
                                    (ct(
                                      new b(
                                        'Incomplete data',
                                        19,
                                        d.PART,
                                        'The Data Is Incomplete',
                                      ),
                                    ),
                                    Error(
                                      'Invalid Data,The Data Is Incomplete!',
                                    ))
                                  );
                                case 3:
                                  for (r = Array.of(), n = 0; n < 30; n += 3)
                                    (i = (255 & e[n]) << 16),
                                      (o = (255 & e[n + 1]) << 8),
                                      (s = 255 & e[n + 2]),
                                      r.push(i + o + s);
                                  return t.abrupt('return', r);
                                case 6:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                ]),
                i
              );
            })(Et),
            qt =
              (r(2772),
              r(3689),
              r(9653),
              (function () {
                function t() {
                  h()(this, t);
                }
                return (
                  p()(t, null, [
                    {
                      key: 'translateFun',
                      value: function (t, e) {
                        switch (t) {
                          case 50:
                          case 51:
                          case 52:
                            return e + 9.9;
                          case 53:
                          case 54:
                            return e + 9.8;
                          case 55:
                          case 56:
                            return e + 9.7;
                          case 57:
                          case 58:
                          case 59:
                            return e + 9.6;
                          case 60:
                          case 61:
                            return e + 9.5;
                          case 62:
                          case 63:
                          case 64:
                            return e + 9.4;
                          case 65:
                          case 66:
                            return e + 9.3;
                          case 67:
                          case 68:
                          case 69:
                            return e + 9.2;
                          case 70:
                          case 71:
                          case 72:
                            return e + 9.1;
                          case 73:
                          case 74:
                            return e + 9;
                          case 75:
                          case 76:
                            return e + 8.9;
                          case 77:
                          case 78:
                          case 79:
                            return e + 8.8;
                          case 80:
                          case 81:
                          case 82:
                            return e + 8.7;
                          case 83:
                          case 84:
                            return e + 8.6;
                          case 85:
                          case 86:
                            return e + 8.5;
                          case 87:
                          case 88:
                          case 89:
                            return e + 8.4;
                          case 90:
                          case 91:
                            return e + 8.3;
                          case 92:
                          case 93:
                          case 94:
                            return e + 8.2;
                          case 95:
                          case 96:
                          case 97:
                            return e + 8.1;
                          case 98:
                          case 99:
                            return e + 8;
                          case 100:
                          case 101:
                            return e + 7.9;
                          case 102:
                          case 103:
                          case 104:
                            return e + 7.8;
                          case 105:
                          case 106:
                            return e + 7.7;
                          case 107:
                          case 108:
                          case 109:
                            return e + 7.6;
                          case 110:
                          case 111:
                          case 112:
                            return e + 7.5;
                          case 113:
                          case 114:
                            return e + 7.4;
                          case 115:
                          case 116:
                            return e + 7.3;
                          case 117:
                          case 118:
                          case 119:
                            return e + 7.2;
                          case 120:
                          case 121:
                            return e + 7.1;
                          case 122:
                          case 123:
                          case 124:
                            return e + 7;
                          case 125:
                            return e + 6.9;
                          case 126:
                          case 127:
                            return e + 6.8;
                          case 128:
                          case 129:
                            return e + 6.7;
                          case 130:
                            return e + 6.6;
                          case 131:
                          case 132:
                            return e + 6.5;
                          case 133:
                          case 134:
                            return e + 6.4;
                          case 135:
                          case 136:
                            return e + 6.3;
                          case 137:
                          case 138:
                          case 139:
                            return e + 6.2;
                          case 140:
                          case 141:
                            return e + 6.1;
                          case 142:
                          case 143:
                          case 144:
                            return e + 6;
                          case 145:
                            return e + 5.9;
                          case 146:
                          case 147:
                            return e + 5.8;
                          case 148:
                          case 149:
                            return e + 5.7;
                          case 150:
                          case 151:
                            return e + 5.6;
                          case 152:
                          case 153:
                          case 154:
                            return e + 5.5;
                          case 155:
                            return e + 5.4;
                          case 156:
                          case 157:
                            return e + 5.3;
                          case 158:
                          case 159:
                            return e + 5.2;
                          case 160:
                          case 161:
                          case 162:
                            return e + 5.1;
                          case 163:
                          case 164:
                            return e + 5;
                          case 165:
                          case 166:
                            return e + 4.9;
                          case 167:
                          case 168:
                          case 169:
                            return e + 4.8;
                          case 170:
                            return e + 4.7;
                          case 171:
                            return e + 4.6;
                          case 172:
                            return e + 4.5;
                          case 173:
                            return e + 4.4;
                          case 174:
                            return e + 4.3;
                          case 175:
                            return e + 4.2;
                          case 176:
                            return e + 4.1;
                          case 177:
                            return e + 4;
                          case 178:
                            return e + 3.9;
                          case 179:
                            return e + 3.8;
                          case 180:
                            return e + 3.7;
                          case 181:
                            return e + 3.5;
                          case 182:
                            return e + 3.3;
                          case 183:
                            return e + 3.1;
                          case 184:
                            return e + 2.9;
                          case 185:
                            return e + 2.7;
                          case 186:
                            return e + 2.6;
                          case 187:
                            return e + 2.5;
                          case 188:
                            return e + 2.4;
                          case 189:
                            return e + 2.3;
                          case 190:
                            return e + 2.2;
                          case 191:
                            return e + 2.1;
                          case 192:
                            return e + 2;
                          case 193:
                            return e + 1.9;
                          case 194:
                            return e + 1.8;
                          case 195:
                          case 196:
                            return e + 1.7;
                          case 197:
                          case 198:
                          case 199:
                            return e + 1.6;
                          case 200:
                          case 201:
                            return e + 1.5;
                          case 202:
                          case 203:
                            return e + 1.4;
                          case 204:
                            return e + 1.3;
                          case 205:
                          case 206:
                            return e + 1.2;
                          case 207:
                          case 208:
                          case 209:
                            return e + 1.1;
                          case 210:
                            return e + 1;
                          case 211:
                          case 212:
                          case 213:
                            return e + 0.9;
                          case 214:
                          case 215:
                          case 216:
                          case 217:
                          case 218:
                          case 219:
                          case 220:
                            return e + 0.8;
                          case 221:
                          case 222:
                          case 223:
                            return e + 0.7;
                          case 224:
                          case 225:
                          case 226:
                          case 227:
                          case 228:
                          case 229:
                          case 230:
                          case 231:
                          case 232:
                          case 233:
                          case 234:
                            return e + 0.6;
                          case 235:
                          case 236:
                          case 237:
                          case 238:
                          case 239:
                          case 240:
                          case 241:
                            return e + 0.5;
                          case 242:
                          case 243:
                          case 244:
                          case 245:
                            return e + 0.4;
                          case 246:
                          case 247:
                          case 248:
                          case 249:
                          case 250:
                          case 251:
                          case 252:
                          case 253:
                          case 254:
                            return e + 0.3;
                          case 255:
                          case 256:
                          case 257:
                            return e + 0.2;
                          case 258:
                          case 259:
                          case 260:
                          case 261:
                            return e + 0.1;
                          case 262:
                          case 263:
                          case 264:
                          case 265:
                          case 266:
                          case 267:
                          case 268:
                          case 269:
                          case 270:
                          case 271:
                            return e;
                          case 272:
                          case 273:
                          case 274:
                            return e - 0.1;
                          case 275:
                          case 276:
                          case 277:
                            return e - 0.2;
                          case 278:
                          case 279:
                            return e - 0.3;
                          case 280:
                          case 281:
                            return e - 0.4;
                          case 282:
                          case 283:
                          case 284:
                            return e - 0.5;
                          case 285:
                          case 286:
                            return e - 0.6;
                          case 287:
                          case 288:
                            return e - 0.7;
                          case 289:
                            return e - 0.8;
                          case 290:
                            return e - 0.9;
                          case 291:
                            return e - 1;
                          case 292:
                            return e - 1.1;
                          case 293:
                            return e - 1.2;
                          case 294:
                            return e - 1.3;
                          case 295:
                          case 296:
                          case 297:
                          case 298:
                          case 299:
                            return e - 1.4;
                          case 300:
                          case 301:
                          case 302:
                          case 303:
                          case 304:
                            return e - 1.5;
                          case 305:
                          case 306:
                          case 307:
                          case 308:
                          case 309:
                            return e - 1.6;
                          case 310:
                          case 311:
                          case 312:
                          case 313:
                          case 314:
                            return e - 1.7;
                          case 315:
                          case 316:
                          case 317:
                          case 318:
                          case 319:
                            return e - 1.8;
                          case 320:
                          case 321:
                          case 322:
                          case 323:
                          case 324:
                          case 325:
                          case 326:
                          case 327:
                          case 328:
                          case 329:
                            return e - 1.9;
                          case 330:
                          case 331:
                          case 332:
                          case 333:
                          case 334:
                            return e - 2;
                          case 335:
                          case 336:
                          case 337:
                          case 338:
                          case 339:
                            return e - 2.1;
                          case 340:
                          case 341:
                          case 342:
                          case 343:
                          case 344:
                          case 345:
                          case 346:
                            return e - 2.2;
                          case 347:
                          case 348:
                          case 349:
                            return e - 2.3;
                          case 350:
                          case 351:
                          case 352:
                            return e - 2.4;
                          case 353:
                          case 354:
                            return e - 2.5;
                          case 355:
                          case 356:
                            return e - 2.6;
                          case 357:
                          case 358:
                          case 359:
                            return e - 2.7;
                          case 360:
                          case 361:
                          case 362:
                            return e - 2.8;
                          case 363:
                          case 364:
                            return e - 2.9;
                          case 365:
                          case 366:
                          case 367:
                            return e - 3;
                          case 368:
                          case 369:
                            return e - 3.1;
                          case 370:
                          case 371:
                          case 372:
                            return e - 3.2;
                          case 373:
                          case 374:
                            return e - 3.3;
                          case 375:
                          case 376:
                            return e - 3.4;
                          case 377:
                          case 378:
                          case 379:
                            return e - 3.5;
                          case 380:
                          case 381:
                          case 382:
                            return e - 3.6;
                          case 383:
                          case 384:
                            return e - 3.7;
                          case 385:
                          case 386:
                            return e - 3.8;
                          case 387:
                          case 388:
                          case 389:
                            return e - 3.9;
                          case 390:
                          case 391:
                          case 392:
                            return e - 4;
                          case 393:
                          case 394:
                            return e - 4.1;
                          case 395:
                          case 396:
                            return e - 4.2;
                          case 397:
                          case 398:
                          case 399:
                            return e - 4.3;
                          case 400:
                            return e - 4.4;
                          default:
                            return t > 400 ? e - 4.4 : e + 10.7;
                        }
                      },
                    },
                    {
                      key: 'randomTemp',
                      value: function (t, e) {
                        return t[Math.floor(Math.random() * e)];
                      },
                    },
                    {
                      key: 'translateFunc2',
                      value: function (e) {
                        switch (e) {
                          case 412:
                            return 43.9;
                          case 411:
                            return t.randomTemp([43.8, 43.7], 2);
                          case 410:
                            return t.randomTemp([43.6, 43.5], 2);
                          case 409:
                            return 43.3;
                          case 408:
                            return 43.2;
                          case 407:
                            return t.randomTemp([43.2, 43.1, 43], 3);
                          case 406:
                            return t.randomTemp([43, 42.9], 2);
                          case 405:
                            return t.randomTemp([42.9, 42.8], 2);
                          case 404:
                            return t.randomTemp([42.7, 42.6], 2);
                          case 403:
                            return t.randomTemp([42.6, 42.5], 2);
                          case 402:
                            return t.randomTemp([42.4, 42.3], 2);
                          case 401:
                            return 42.2;
                          case 400:
                            return t.randomTemp([42.1, 42], 2);
                          case 399:
                            return 41.9;
                          case 398:
                            return t.randomTemp([41.8, 41.7], 2);
                          case 397:
                            return t.randomTemp([41.7, 41.6, 41.5], 3);
                          case 396:
                            return 41.4;
                          case 395:
                            return 41.3;
                          case 394:
                            return t.randomTemp([41.2, 41.1], 2);
                          case 393:
                            return 41;
                          case 392:
                            return t.randomTemp([40.9, 40.8], 2);
                          case 391:
                            return 40.7;
                          case 390:
                            return t.randomTemp([40.6, 40.5], 2);
                          case 389:
                            return t.randomTemp([40.5, 40.4], 2);
                          case 388:
                            return t.randomTemp([40.3, 40.2], 2);
                          case 387:
                          case 386:
                          case 385:
                          case 384:
                          case 383:
                            return 40.1;
                          case 382:
                            return t.randomTemp([40, 39.9], 2);
                          case 381:
                            return 39.9;
                          case 380:
                            return 39.8;
                          case 379:
                            return 39.7;
                          case 378:
                          case 377:
                            return 39.6;
                          case 376:
                            return t.randomTemp([39.5, 39.4], 2);
                          case 375:
                            return 39.4;
                          case 374:
                          case 373:
                            return 39.3;
                          case 372:
                            return t.randomTemp([39.2, 39.1], 2);
                          case 371:
                            return 39.1;
                          case 370:
                            return 39;
                          case 369:
                            return 38.9;
                          case 368:
                            return 38.8;
                          case 367:
                          case 366:
                            return 38.7;
                          case 365:
                            return 38.5;
                          case 364:
                          case 363:
                            return 38.4;
                          case 362:
                            return 38.3;
                          case 361:
                            return 38.2;
                          case 360:
                            return 38.1;
                          case 359:
                            return 38;
                          case 358:
                            return t.randomTemp([38, 37.9], 2);
                          case 357:
                            return t.randomTemp([37.9, 37.8], 2);
                          case 356:
                            return 37.8;
                          case 355:
                            return 37.7;
                          case 354:
                            return t.randomTemp([37.7, 37.6], 2);
                          case 353:
                            return 37.6;
                          case 352:
                            return 37.5;
                          case 351:
                            return 37.4;
                          case 350:
                            return t.randomTemp([37.4, 37.3], 2);
                          case 349:
                            return 37.3;
                          case 348:
                          case 347:
                            return 37.2;
                          case 346:
                          case 345:
                            return 37.1;
                          case 344:
                          case 343:
                            return 37;
                          case 342:
                            return t.randomTemp([37, 36.9], 2);
                          case 341:
                          case 340:
                          case 339:
                            return 36.9;
                          case 338:
                          case 337:
                          case 336:
                          case 335:
                          case 334:
                          case 333:
                            return 36.8;
                          case 332:
                          case 331:
                          case 330:
                          case 329:
                          case 328:
                          case 327:
                          case 326:
                          case 325:
                          case 324:
                          case 323:
                            return 36.7;
                          case 322:
                            return t.randomTemp([36.7, 36.6], 2);
                          case 321:
                          case 320:
                            return 36.6;
                          case 319:
                            return t.randomTemp([36.6, 36.5], 2);
                          case 318:
                            return 36.5;
                          case 317:
                          case 316:
                            return 36.4;
                          case 315:
                            return t.randomTemp([36.3, 36.2], 2);
                          case 314:
                            return t.randomTemp([36.2, 36.1], 2);
                          case 313:
                            return 36.1;
                          case 312:
                            return t.randomTemp([36, 35.9], 2);
                          case 311:
                            return t.randomTemp([35.8, 35.7, 35.6], 3);
                          case 310:
                            return t.randomTemp([35.5, 35.4], 2);
                          case 309:
                            return t.randomTemp([35.4, 35.3, 35.2], 3);
                          case 308:
                            return t.randomTemp([35.1, 35], 2);
                          case 307:
                            return 34.7;
                          case 306:
                            return t.randomTemp([34.5, 34.4], 2);
                          default:
                            return -1;
                        }
                      },
                    },
                    {
                      key: 'getTemp',
                      value: function (e) {
                        var r = Math.trunc(10 * e),
                          n = t.translateFunc2(r);
                        return -1 === n ? e : n;
                      },
                    },
                    {
                      key: 'getBodyTemp',
                      value: function (e, r) {
                        var n = t.translateFun(Math.trunc(10 * e), r),
                          i = t.getTemp(n);
                        return -1 === i ? r : i;
                      },
                    },
                    {
                      key: 'dealData',
                      value: function (e) {
                        var r,
                          n = ((255 & e[1]) << 8) + (255 & e[0]),
                          i = ((255 & e[3]) << 8) + (255 & e[2]),
                          a = ((255 & e[5]) << 8) + (255 & e[4]),
                          o = ((255 & e[7]) << 8) + (255 & e[6]);
                        if (
                          (this.ETList.push(i),
                          this.BTList.push(n),
                          this.ETList.push(o),
                          this.BTList.push(a),
                          6 === this.ETList.length)
                        ) {
                          var s = t.getLTemp(this.BTList),
                            u = t.getLTemp(this.ETList),
                            c = t.transferTemp(s),
                            f = t.transferTemp(u);
                          (t.isNotANumber(c) && t.isNotANumber(f)) ||
                            ((r = new b(
                              'invalid data',
                              18,
                              d.PART,
                              'Invalid Data',
                            )),
                            (V = U(U({}, V), {}, {error: r})),
                            Z.forEach(function (t) {
                              return t.onException(r);
                            })),
                            (this.ETList = []),
                            (this.BTList = []),
                            (function (t) {
                              (V = U(U({}, V), {}, {result: t})),
                                Z.forEach(function (e) {
                                  return e.onResult(t);
                                });
                            })(t.sendBtData(t.getBodyTemp(f, c)));
                        }
                      },
                    },
                    {
                      key: 'getLTemp',
                      value: function (t) {
                        for (var e = new Array(100), r = 2; r < t.length; r++)
                          e[r - 2] = t[r];
                        for (var n = 0, i = 0; i < t.length - 2; i++)
                          for (var a = 0; a < t.length - 2 - 1 - i; a++)
                            e[a] > e[a + 1] &&
                              ((n = e[a]), (e[a] = e[a + 1]), (e[a + 1] = n));
                        return e[(t.length - 2) / 2 + 1];
                      },
                    },
                    {
                      key: 'sendBtData',
                      value: function (t) {
                        var e = String(t),
                          r = e.indexOf('.');
                        return Number(e.slice(0, r + 3));
                      },
                    },
                    {
                      key: 'transferTemp',
                      value: function (t) {
                        return 0.02 * t - 273.15;
                      },
                    },
                    {
                      key: 'isNotANumber',
                      value: function (t) {
                        return 'NaN' !== parseFloat(t).toString();
                      },
                    },
                  ]),
                  t
                );
              })());
          function Qt(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = k()(t);
              if (e) {
                var i = k()(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return O()(this, r);
            };
          }
          (qt.BTList = Array.of()), (qt.ETList = Array.of());
          var $t = (function (t) {
              D()(n, t);
              var e,
                r = Qt(n);
              function n() {
                return h()(this, n), r.call(this);
              }
              return (
                p()(n, [
                  {
                    key: 'run',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          return a().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  qt.dealData(e.data);
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                ]),
                n
              );
            })(Et),
            Jt = (function () {
              function t() {
                h()(this, t);
              }
              return (
                p()(t, null, [
                  {
                    key: 'dealData',
                    value: function (t) {
                      var e = [255, 255];
                      switch (t[0]) {
                        case this.QUERY:
                          var r = ((255 & t[1]) << 8) + (255 & t[2]);
                          (e[0] = this.QUERY), (e[1] = this.getLevel(r));
                          break;
                        case this.CHARGING:
                          e[0] = this.CHARGING;
                          break;
                        case this.FULLY:
                          e[0] = this.FULLY;
                      }
                      this.sendBatteryData(e);
                    },
                  },
                  {
                    key: 'sendBatteryData',
                    value: function (t) {
                      switch (t[0]) {
                        case this.QUERY:
                          (this.power = t[1]),
                            (this.isCharging = !1),
                            (r = this.power),
                            (z = U(U({}, z), {}, {result: r})),
                            tt.forEach(function (t) {
                              return t.onPowerResult(r);
                            });
                          break;
                        case this.CHARGING:
                          (this.isCharging = !0),
                            (e = this.isCharging),
                            (z = U({}, z)),
                            tt.forEach(function (t) {
                              return t.onPowerChange(e);
                            });
                          break;
                        case this.FULLY:
                          (this.power = 100),
                            (this.isCharging = !1),
                            (z = U({}, z)),
                            tt.forEach(function (t) {
                              return t.onPowerFull();
                            });
                      }
                      var e, r;
                    },
                  },
                  {
                    key: 'getLevel',
                    value: function (t) {
                      return (t = (t / 8191) * 3.3 * 3 * 1e3) >= 4196
                        ? 100
                        : t < 4196 && t >= 4168
                        ? 99
                        : t < 4168 && t >= 4140
                        ? 98
                        : t < 4140 && t >= 4112
                        ? 96
                        : t < 4112 && t >= 4084
                        ? 93
                        : t < 4084 && t >= 4056
                        ? 90
                        : t < 4056 && t >= 4028
                        ? 87
                        : t < 4028 && t >= 4e3
                        ? 85
                        : t < 4e3 && t >= 3972
                        ? 81
                        : t < 3972 && t >= 3944
                        ? 77
                        : t < 3944 && t >= 3916
                        ? 73
                        : t < 3916 && t >= 3888
                        ? 69
                        : t < 3888 && t >= 3860
                        ? 65
                        : t < 3860 && t > 3832
                        ? 61
                        : t < 3832 && t > 3804
                        ? 56
                        : t < 3804 && t > 3776
                        ? 50
                        : t < 3776 && t > 3748
                        ? 42
                        : t < 3748 && t > 3720
                        ? 30
                        : t < 3720 && t > 3692
                        ? 19
                        : t < 3692 && t > 3664
                        ? 15
                        : t < 3664 && t > 3636
                        ? 11
                        : t < 3636 && t > 3608
                        ? 8
                        : t < 3608 && t > 3580
                        ? 7
                        : t < 3580 && t > 3524
                        ? 6
                        : t < 3524 && t > 3468
                        ? 5
                        : t < 3468 && t > 3300
                        ? 4
                        : 0;
                    },
                  },
                  {
                    key: 'postMessage',
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : '',
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                      self.postMessage({url: t, message: e, data: r});
                    },
                  },
                ]),
                t
              );
            })();
          function te(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = k()(t);
              if (e) {
                var i = k()(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return O()(this, r);
            };
          }
          (Jt.QUERY = 0),
            (Jt.CHARGING = 1),
            (Jt.FULLY = 2),
            (Jt.power = 0),
            (Jt.isCharging = !1);
          var ee = (function (t) {
              D()(n, t);
              var e,
                r = te(n);
              function n() {
                return h()(this, n), r.call(this);
              }
              return (
                p()(n, [
                  {
                    key: 'run',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          return a().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  Jt.dealData(e.data);
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                ]),
                n
              );
            })(Et),
            re = (r(3161), r(1249), r(5827), r(561), 1.953125),
            ne = Array.of(),
            ie = 0,
            ae = 0,
            oe = 0,
            se = 0,
            ue = 0,
            ce = 0,
            fe = 0,
            he = -1;
          function le(t) {
            for (var e = t[0], r = 0, n = 0; n < t.length; n++)
              e < t[n] && ((e = t[n]), (r = n));
            return {value_max: e, index_max: r};
          }
          function pe(t) {
            return Math.floor(6e4 / t);
          }
          var ve = function (t) {
            for (var e = t.length, r = 0, n = 0; n < e; n++) r += 1 * t[n];
            return r / e;
          };
          function ye(t) {
            for (
              var e = Math.round(100 * ve(t)) / 100,
                r = t.length,
                n = new Array(r),
                i = 0;
              i < r;
              i++
            ) {
              var a = parseFloat(t[i].toString()) - e;
              n[i] = Math.pow(a, 2);
            }
            for (var o = 0, s = 0; s < n.length; s++)
              ('' === n[s].toString() && null == n[s].toString()) ||
                (o = parseFloat(o.toString()) + parseFloat(n[s].toString()));
            var u =
              Math.round(
                100 *
                  Math.sqrt(
                    parseFloat(o.toString()) / parseFloat(r.toString()),
                  ),
              ) / 100;
            return Math.floor(u);
          }
          function de(t) {
            var e = Math.floor((ye(t) / ve(t)) * 1e3);
            return (
              console.log(
                'czq hrv='
                  .concat(e, ' standardDeviation(arr)=')
                  .concat(ye(t), '  avg(arr)=')
                  .concat(ve(t), '  arr.len=')
                  .concat(t.length, '   arr=')
                  .concat(t),
              ),
              Math.floor((ye(t) / ve(t)) * 1e3)
            );
          }
          function ge(t) {
            for (var e = Array.of(), r = 0; r < t.length - 1; r++) {
              var n = t[r + 1] - t[r];
              e.push(n);
            }
            return e;
          }
          var Ae = function (t) {
              return ye(t);
            },
            me = function (t) {
              var e = ge(t);
              return Math.floor(
                (function (t) {
                  var e =
                    t
                      .map(function (t) {
                        return t * t;
                      })
                      .reduce(function (t, e) {
                        return t + e;
                      }) / t.length;
                  return Math.sqrt(e);
                })(e) * re,
              );
            },
            Te = function (t) {
              return Math.floor(ve(t));
            },
            Ee = function (t) {
              return ye(t);
            },
            be = function (t) {
              return ye(ge(t));
            };
          function Se() {
            var t = new Array(),
              e = document.createElement('DIV');
            return (
              (e.style.cssText =
                'width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden'),
              document.body.appendChild(e),
              (t[0] = parseInt(e.offsetWidth.toString())),
              (t[1] = parseInt(e.offsetHeight.toString())),
              (t[0] > 0 && t[1] > 0) ||
                pt(new b('Unable to get DPI', 22, d.PART, 'Invalid Data')),
              e.parentNode.removeChild(e),
              t
            );
          }
          var Pe = {
            getMaxIndexAndValue: le,
            getPPI: function (t) {
              return t * re;
            },
            getHeartRate: pe,
            avg: ve,
            getHRV: de,
            sdnn: Ae,
            rmssd: me,
            mean: Te,
            std: Ee,
            sdnnIndex: be,
            calPeak: function (t, e) {
              var r = null;
              if (t <= 0) {
                if (ne.length > 0) {
                  var n = le(ne),
                    i = n.value_max,
                    a = n.index_max;
                  if (
                    (i > 1500
                      ? 0 !== ie
                        ? ((ae = (oe += a + 1) - se),
                          (se = oe),
                          e.push(ae * re),
                          10 === e.length &&
                            (function (t) {
                              for (var e = ve(t), r = 0; r < t.length; r++) {
                                var n = t[r];
                                (n / e <= 0.88 || n / e >= 1.12) &&
                                  (t.splice(r, 1), r--);
                              }
                            })(e),
                          (ce = Date.now() - ue),
                          (ue = Date.now()),
                          (ce < he || -1 == he) && ce > 500 && (he = ce),
                          ce > fe && ce < 1200 && (fe = ce))
                        : ((ue = Date.now()), ie++, (oe = ne.length - a - 1))
                      : 0 !== oe && (oe += ne.length),
                    10 === e.length)
                  ) {
                    var o = ve(e),
                      s = pe(o),
                      u = de(e),
                      c = me(e),
                      f = Ae(e),
                      h = Te(e),
                      l = Ee(e),
                      p = be(e);
                    e.shift(),
                      (r = {
                        ppi: parseInt(o.toString()),
                        hr: s,
                        hrv: u,
                        rmssd: c,
                        sdnn: f,
                        mean: h,
                        std: l,
                        sdnnIndex: p,
                        rr: ce,
                        rrMax: fe,
                        rrMin: he,
                      });
                  }
                }
                0 !== oe && oe++, (ne = []);
              } else t > 0 && ne.push(t);
              return r;
            },
            pxConversionMm: function (t) {
              return 25.4 * (t / Se()[0]);
            },
            mmConversionPx: function (t) {
              return (t / 25.4) * Se()[0];
            },
          };
          function _e(t, e) {
            var r;
            if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (r = (function (t, e) {
                  if (!t) return;
                  if ('string' == typeof t) return we(t, e);
                  var r = Object.prototype.toString.call(t).slice(8, -1);
                  'Object' === r && t.constructor && (r = t.constructor.name);
                  if ('Map' === r || 'Set' === r) return Array.from(t);
                  if (
                    'Arguments' === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  )
                    return we(t, e);
                })(t)) ||
                (e && t && 'number' == typeof t.length)
              ) {
                r && (t = r);
                var n = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return n >= t.length
                      ? {done: !0}
                      : {done: !1, value: t[n++]};
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            }
            var a,
              o = !0,
              s = !1;
            return {
              s: function () {
                r = t[Symbol.iterator]();
              },
              n: function () {
                var t = r.next();
                return (o = t.done), t;
              },
              e: function (t) {
                (s = !0), (a = t);
              },
              f: function () {
                try {
                  o || null == r.return || r.return();
                } finally {
                  if (s) throw a;
                }
              },
            };
          }
          function we(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
            return n;
          }
          var xe,
            Re,
            Ie,
            De = 0,
            Ce = 0,
            Oe = 0,
            Ne = !1,
            ke = !1,
            Le = Array.of(),
            Be = 0,
            Me = [
              11230602022823787e-21, 1741405467116793e-20, 1992311660133903e-20,
              863324333038816e-20, -2323429422384725e-20, -7490808736717846e-20,
              -0.00013262618686504132, -0.00016801372487440915,
              -0.00014350264224290696, -2602913804540145e-20,
              0.00019336238080452125, 0.0004804900974705826,
              0.0007489959214994697, 0.0008704160823750469,
              0.0007080864927566608, 0.00017096157468321493,
              -0.0007264968461074453, -0.0018207073366716922,
              -0.002795766619587094, -0.003238034473495555,
              -0.002749639848182966, -0.0010999707178020724,
              0.0016267992129106244, 0.004942335579964867, 0.007973346261684932,
              0.009617177490576077, 0.008823652153488277, 0.004948803438525256,
              -0.0019105714761323122, -0.010708187744430818,
              -0.01945712722546388, -0.02550203104008801, -0.026032125516017003,
              -0.0187397976127071, -0.002473568943712142, 0.02228580650056501,
              0.053271460298298136, 0.08667492571950017, 0.11776860761519668,
              0.14178687635268927, 0.1548730352675138, 0.1548730352675138,
              0.14178687635268927, 0.11776860761519668, 0.08667492571950017,
              0.053271460298298136, 0.02228580650056501, -0.002473568943712142,
              -0.0187397976127071, -0.026032125516017003, -0.02550203104008801,
              -0.01945712722546388, -0.010708187744430818,
              -0.0019105714761323122, 0.004948803438525256,
              0.008823652153488277, 0.009617177490576077, 0.007973346261684932,
              0.004942335579964867, 0.0016267992129106244,
              -0.0010999707178020724, -0.002749639848182966,
              -0.003238034473495555, -0.002795766619587094,
              -0.0018207073366716922, -0.0007264968461074453,
              0.00017096157468321493, 0.0007080864927566608,
              0.0008704160823750469, 0.0007489959214994697,
              0.0004804900974705826, 0.00019336238080452125,
              -2602913804540145e-20, -0.00014350264224290696,
              -0.00016801372487440915, -0.00013262618686504132,
              -7490808736717846e-20, -2323429422384725e-20, 863324333038816e-20,
              1992311660133903e-20, 1741405467116793e-20, 11230602022823787e-21,
            ],
            Ge = Array.of();
          function Fe(t) {
            if (!Number.isInteger(t))
              throw (
                (pt(new b('invalid data', 21, d.PART, 'The Data Is invalid')),
                Error('IllegalParameter Exception'))
              );
            return 255 & t;
          }
          function Ue(t) {
            var e = 0;
            return (
              Le.push(t),
              Le.length > 81 && Le.shift(),
              81 === Le.length &&
                (e =
                  (function (t) {
                    for (var e = t.length, r = 0, n = 0; n < e; n++) r += t[n];
                    return r / e;
                  })(Le) - Le[40]),
              e
            );
          }
          var je = Array.of();
          function Ve(t) {
            var e = 0,
              r = (function (t) {
                return je.push(t), je.length > 82 && je.shift(), je;
              })(t);
            if (82 === r.length)
              for (var n = 0; n < r.length; n++) e += Me[n] * r[n];
            return e;
          }
          function He(t, e) {
            return We.apply(this, arguments);
          }
          function We() {
            return (We = s()(
              a().mark(function t(e, r) {
                var n;
                return a().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        0 === r && (Ge = Array.of()),
                          null !== (n = Pe.calPeak(e, Ge)) &&
                            n.ppi >= 333 &&
                            n.ppi <= 2e3 &&
                            dt(n);
                      case 3:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              }),
            )).apply(this, arguments);
          }
          var Ye = {
              dealEcg: function (t) {
                var e,
                  r = _e(new Int8Array(t));
                try {
                  for (r.s(); !(e = r.n()).done; ) {
                    var n = Fe(e.value);
                    if (0 === De) 170 === n && De++;
                    else if (1 === De) 170 === n ? De++ : (De = 0);
                    else if (2 === De) 18 === n ? De++ : (De = 0);
                    else if (3 === De) 2 === n ? De++ : (De = 0);
                    else if (4 === De)
                      0 === n ? (Ie = !1) : 200 === n && ((Oe = 0), (Ie = !0)),
                        gt(Ie),
                        De++;
                    else if (De >= 5 && De <= 21) De++;
                    else if (De >= 22 && De <= 1045) {
                      if (De % 2 == 0) Ce = n << 8;
                      else if (((Ce += n) >= 32768 && (Ce -= 65536), ke))
                        Ie &&
                          (Ne
                            ? (Oe % 128 == 0 && ((Oe = 0), (xe = Array(128))),
                              (xe[Oe] = Ce),
                              128 === ++Oe && yt(xe))
                            : yt(Ce));
                      else if (Ie) {
                        var i = Ve(Ce);
                        if (0 !== i) {
                          var a = Ue(i);
                          0 !== a &&
                            (vt({data: a, start: Be}), He(a, Be), Be++);
                        }
                      }
                      De = 1045 === De ? 0 : De + 1;
                    } else De = 0;
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
              },
              startEcg: function () {
                return (Ne = !1), (ke = !1), (De = 0), (Be = 0), (Re = 1);
              },
              stopEcg: function () {
                Ie && (Ie = !1), (Re = 0), (De = 0), (Be = 0);
              },
              parameter: {DATA_PER_SEC: 512},
              ecgStep: Re,
              getStep: function () {
                return Re;
              },
            },
            ze =
              (r(6977),
              {
                bsRe: [
                  3, 9.5, 15.2, 20.2, 25.2, 26, 27, 28, 29, 30.5, 31, 32, 33,
                  34, 35.5, 36, 37, 38, 39, 40.1, 41, 42, 43, 44, 45.3, 46, 47,
                  48, 49, 50, 50.8, 52, 53, 54, 55.4, 56, 57, 58, 59, 60, 60.8,
                  62, 63, 64, 65.6, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
                  77, 78, 79, 80.3, 81, 82, 83, 84, 85.4, 86, 87, 88, 89, 90.6,
                  91, 92, 93, 94, 95.4, 96, 97, 98, 99, 100.2, 105.1, 110.5,
                  115.4, 120.3, 125.1, 130.4, 135.1, 140.1, 145.5, 148, 150.6,
                  153, 155.2, 158, 160.2, 163, 165.6, 167, 170.2, 173, 175.3,
                  178, 180.1, 183, 185.5, 188, 190.2, 193, 195.3, 198, 200.2,
                  203, 205.3, 208, 210.3, 213, 215.6, 218, 220.2, 223, 225.5,
                  228, 230.2, 233, 235.2, 238, 240.4, 243, 245.4, 248, 250.7,
                  253, 255.6, 258, 260.1, 263, 265.1, 268, 270.2, 273, 275.3,
                  278, 280.1, 283, 285.6, 288, 290.4, 293, 295.6, 297, 300.1,
                  305, 310.3, 315, 320.3, 325, 330.1, 335, 340.1, 345, 350.4,
                  355, 360.1, 365, 370.2, 375, 380.1, 385, 390.1, 395, 400.2,
                  405, 410.3, 415, 420.2, 425, 430.5, 435, 440.2, 445, 450.4,
                  455, 460.3, 465, 470.1, 480.2, 485, 490.4, 495, 500.1, 510.2,
                  515, 520.1, 530, 540.1, 545, 550.4, 555, 560.1, 570, 580.2,
                  590.3, 600.1, 610.2, 620.5, 630.3, 640.4, 650.4, 660.5, 670.5,
                  680.3, 690.5, 700.2, 710.3, 720.4, 730.5, 740.2, 750.5, 760.5,
                  770.1, 780.5, 790.4, 800.4, 810.1, 820.6, 825, 830.2, 840,
                  850.2, 860.1, 865, 870.5, 880.1,
                ],
                pageData: [
                  [
                    28.1, 28.1, 47.2, 9.1, 88.3, 85.5, 81.7, 79.1, 76.3, 72.5,
                    71.3, 69.2, 67.2, 65, 62.6, 61.4, 59.7, 58.2, 56.6, 55.6,
                    54, 52.6, 51.4, 50.2, 48.8, 48, 47, 46.2, 45.2, 44.2, 43.6,
                    42.7, 41.7, 40.9, 39.8, 39.5, 38.7, 38.2, 37.4, 36.9, 36.7,
                    35.9, 35.2, 34.6, 33.7, 33.6, 33.1, 32.6, 32.1, 31.6, 31.2,
                    30.8, 30.3, 30, 29.5, 29.1, 28.9, 28.3, 28, 27.7, 27.3,
                    27.1, 26.6, 26.3, 26, 25.8, 25.4, 25.1, 24.9, 24.6, 24.4,
                    24.2, 23.8, 23.6, 23.3, 23.1, 22.8, 22.6, 22.3, 22.1, 21.1,
                    20.1, 19.1, 18.4, 17.8, 16.9, 16.4, 15.8, 15.3, 15, 14.7,
                    14.4, 14.2, 14, 13.8, 13.6, 13.4, 13.1, 12.9, 12.7, 12.6,
                    12.4, 12.3, 12.1, 12, 11.7, 11.6, 11.5, 11.4, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.5,
                    8.5, 8.4, 8.4, 8.3, 8.3, 8.2, 8.2, 8, 7.9, 7.8, 7.7, 7.7,
                    7.7, 7.6, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.6, 5.6,
                    5.6, 5.5, 5.4, 5.3, 5.3, 5.2, 5, 5, 5, 4.9, 4.8, 4.8, 4.7,
                    4.7, 4.6, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.2, 4.2, 4.1,
                    4, 3.9, 3.9, 3.9, 3.9, 3.9, 3.8, 3.7, 3.6, 3.5, 3.5, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.9, 2.8,
                    2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.7, 2.6,
                    2.5, 2.4,
                  ],
                  [
                    28, 28, 47.7, 9.2, 88.5, 85.4, 81.8, 79, 76.3, 72.7, 71.2,
                    69.1, 67.2, 64.9, 63.1, 61.6, 59.7, 58.3, 56.8, 55.4, 53.9,
                    52.6, 51.6, 50.1, 49.1, 47.9, 46.9, 46, 45.1, 44.3, 43.7,
                    42.6, 41.7, 41.1, 40.5, 39.6, 38.9, 38.2, 37.5, 36.8, 36.7,
                    35.8, 35.2, 34.6, 33.8, 33.5, 32.9, 32.6, 32.1, 31.6, 31.1,
                    30.8, 30.3, 29.9, 29.4, 29.2, 28.8, 28.3, 27.9, 27.7, 27.3,
                    27, 26.7, 26.4, 25.8, 25.7, 25.5, 25.2, 24.8, 24.6, 24.2,
                    24, 23.8, 23.6, 23.2, 23.1, 22.7, 22.6, 22.4, 22.1, 21.1,
                    20, 19.2, 18.5, 17.8, 17, 16.4, 15.8, 15.2, 14.9, 14.6,
                    14.4, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 12.9, 12.7, 12.6,
                    12.4, 12.3, 12.1, 12, 11.8, 11.7, 11.4, 11.3, 11.2, 11.1,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 9.9, 9.8,
                    9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.9, 8.8, 8.7,
                    8.6, 8.5, 8.4, 8.4, 8.3, 8.3, 8.2, 8.1, 8, 7.9, 7.8, 7.7,
                    7.7, 7.7, 7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.6,
                    5.5, 5.5, 5.4, 5.3, 5.3, 5.3, 5.2, 5.1, 5.1, 5.1, 5, 4.9,
                    4.8, 4.7, 4.7, 4.6, 4.6, 4.6, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3,
                    4.2, 4.1, 4, 4, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.5, 3.4,
                    3.4, 3.3, 3.3, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.9,
                    2.9, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.6, 2.7, 2.7,
                    2.6, 2.5, 2.4,
                  ],
                  [
                    28, 28, 47.5, 9.1, 88.2, 85.3, 81.6, 79, 76.2, 72.6, 71.3,
                    69.1, 67.2, 65, 62.6, 61.7, 59.7, 58.2, 56.7, 55.2, 53.8,
                    52.5, 51.5, 50.1, 50.2, 47.9, 46.7, 46.1, 45.3, 44.3, 43.7,
                    42.6, 41.7, 41.1, 40.8, 39.5, 38.7, 38.2, 37.4, 36.9, 36.5,
                    35.8, 35.2, 34.6, 33.9, 33.6, 32.9, 32.6, 31.9, 31.6, 31.1,
                    30.8, 30.2, 30, 29.6, 29.2, 28.8, 28.5, 28, 27.8, 27.2, 27,
                    26.7, 26.3, 26.1, 25.7, 25.5, 25.1, 24.9, 24.6, 24.3, 24.1,
                    23.7, 23.6, 23.2, 23, 22.8, 22.7, 22.3, 22.1, 21.2, 20,
                    19.2, 18.5, 17.8, 16.9, 16.4, 15.8, 15.2, 15, 14.8, 14.4,
                    14.1, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8, 12.7, 12.4,
                    12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.1, 11, 10.9,
                    10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.2, 8.2, 8.1, 8, 7.9, 7.8, 7.7, 7.7,
                    7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.5,
                    6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7, 5.6, 5.5,
                    5.4, 5.4, 5.3, 5.3, 5.2, 5.2, 5.1, 5.1, 5, 4.9, 4.8, 4.7,
                    4.7, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.4, 4.4, 4.3, 4.2, 4.1,
                    4, 4, 4, 4, 3.9, 3.9, 3.8, 3.7, 3.6, 3.5, 3.5, 3.4, 3.4,
                    3.4, 3.3, 3.2, 3.2, 3.2, 3.1, 3, 3, 3, 2.9, 2.9, 2.8, 2.8,
                    2.8, 2.8, 2.8, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6,
                  ],
                  [
                    28.1, 28.1, 46.9, 8.9, 88.3, 85.3, 81.9, 79.2, 76.3, 72.7,
                    71.3, 69.1, 67.2, 64.8, 62.7, 61.7, 59.8, 58.3, 56.7, 55.4,
                    54, 52.5, 51.5, 50.3, 49.5, 47.9, 46.7, 46.1, 45.2, 44.4,
                    43.7, 42.7, 41.7, 40.9, 40.4, 39.5, 38.7, 38.3, 37.5, 36.8,
                    36.7, 35.7, 35.2, 34.5, 33.9, 33.6, 33, 32.4, 32.1, 31.6,
                    31.1, 30.8, 30.3, 29.9, 29.6, 29.2, 28.8, 28.3, 27.9, 27.7,
                    27.3, 27, 26.7, 26.3, 26, 25.8, 25.4, 25.2, 24.9, 24.6,
                    24.3, 24.1, 23.8, 23.6, 23.2, 23.1, 22.8, 22.7, 22.4, 22.1,
                    21.1, 20.1, 19.1, 18.4, 17.8, 17.1, 16.3, 15.7, 15.2, 14.9,
                    14.7, 14.4, 14.2, 14, 13.8, 13.6, 13.4, 13.1, 12.9, 12.7,
                    12.6, 12.4, 12.3, 11.9, 11.8, 11.7, 11.6, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.9, 7.8,
                    7.8, 7.7, 7.6, 7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7,
                    5.6, 5.5, 5.4, 5.3, 5.3, 5.2, 5.2, 5.1, 5.1, 5.1, 5.1, 5,
                    4.9, 4.8, 4.7, 4.7, 4.7, 4.6, 4.6, 4.5, 4.5, 4.5, 4.4, 4.3,
                    4.2, 4.2, 4.1, 4.1, 4.1, 4.1, 3.9, 3.9, 3.8, 3.8, 3.7, 3.6,
                    3.6, 3.5, 3.4, 3.4, 3.4, 3.3, 3.3, 3.3, 3.2, 3.2, 3.1, 3,
                    2.9, 2.9, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7,
                    2.6, 2.6, 2.6, 2.6, 2.6,
                  ],
                  [
                    28, 28.1, 47.8, 9.1, 88.2, 85.3, 82, 79.2, 76.2, 72.8, 71.3,
                    69.1, 67.2, 64.9, 62.9, 61.6, 59.8, 58.2, 56.6, 56, 54,
                    52.6, 51.4, 50.2, 49.4, 47.9, 46.8, 45.9, 45.2, 44.4, 43.7,
                    42.7, 41.8, 41, 39.8, 39.6, 38.9, 38.3, 37.4, 36.8, 36.8,
                    35.8, 35.2, 34.3, 34, 33.6, 33.1, 32.4, 32.1, 31.6, 31.2,
                    30.8, 30.4, 29.9, 29.5, 29.1, 28.8, 28.3, 28, 27.7, 27.4,
                    27.1, 26.7, 26.3, 26, 25.8, 25.5, 25.1, 24.9, 24.4, 24.2,
                    24.1, 23.7, 23.6, 23.3, 23.1, 22.8, 22.6, 22.2, 22.1, 21,
                    20.1, 19.2, 18.4, 17.7, 17, 16.3, 15.8, 15.1, 14.9, 14.7,
                    14.4, 14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8, 12.7,
                    12.4, 12.3, 12.1, 12, 11.7, 11.6, 11.5, 11.4, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10, 9.9,
                    9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.8, 8.7,
                    8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.2, 8.2, 8.1, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.6, 7.5, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 5, 4.9, 4.8,
                    4.7, 4.7, 4.6, 4.6, 4.6, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.1,
                    4.1, 4.1, 4, 4, 3.9, 3.8, 3.9, 3.8, 3.7, 3.7, 3.6, 3.4, 3.4,
                    3.4, 3.4, 3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3, 2.9, 2.9, 2.9,
                    2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6,
                    2.4, 2.4,
                  ],
                  [
                    27.9, 28.1, 47.9, 9.2, 88.2, 85.3, 81.9, 79.2, 76.1, 72.8,
                    71.3, 69.1, 67.2, 64.9, 62.7, 61.6, 59.9, 58.2, 56.7, 55.7,
                    53.9, 52.7, 51.6, 50.2, 50.5, 47.9, 46.6, 45.9, 45.3, 44.5,
                    43.8, 42.6, 41.7, 41.1, 40.8, 39.5, 38.8, 38.2, 37.4, 36.8,
                    36.9, 35.7, 35.1, 34.6, 34, 33.6, 33.1, 32.6, 32.2, 31.6,
                    31.2, 30.7, 30.2, 30, 29.4, 29.1, 28.7, 28.4, 27.8, 27.7,
                    27.3, 27.1, 26.8, 26.4, 26.1, 25.7, 25.5, 25.2, 24.9, 24.7,
                    24.3, 24.1, 23.7, 23.6, 23.3, 23.1, 22.8, 22.7, 22.4, 22.1,
                    21.1, 20, 19.2, 18.4, 17.7, 16.9, 16.4, 15.8, 15.2, 14.9,
                    14.7, 14.4, 14.2, 14, 13.7, 13.5, 13.3, 13.1, 13, 12.7,
                    12.5, 12.4, 12.3, 12, 11.9, 11.7, 11.6, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.2, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 9, 8.9, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8, 7.7,
                    7.6, 7.5, 7.5, 7.4, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7, 5.6,
                    5.5, 5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5.1, 5.1, 5, 4.9, 4.8,
                    4.8, 4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.2,
                    4.1, 4.1, 4, 4, 4, 3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.6, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3.1, 3.1, 3, 2.9, 2.9,
                    2.9, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6,
                    2.6, 2.5,
                  ],
                  [
                    27.9, 27.9, 48.3, 9.2, 88.2, 85.5, 81.7, 79.3, 76.1, 72.9,
                    71.3, 69, 67.1, 65, 62.8, 61.6, 59.9, 58.2, 56.7, 54.6, 54,
                    52.6, 51.4, 50.3, 49.7, 47.8, 46.8, 46.2, 45.2, 44.3, 44.6,
                    42.5, 41.7, 40.9, 40.3, 39.5, 38.8, 38.3, 37.3, 36.9, 36.7,
                    35.9, 35.1, 34.5, 33.5, 33.6, 33.2, 32.6, 32, 31.6, 31.2,
                    30.8, 30.4, 29.9, 29.6, 29.2, 28.9, 28.4, 28, 27.8, 27.2,
                    27, 26.7, 26.2, 26.2, 25.8, 25.5, 25.1, 24.9, 24.6, 24.3,
                    24.1, 23.7, 23.5, 23.2, 23.1, 22.8, 22.6, 22.3, 21.9, 21.1,
                    20, 19.3, 18.4, 17.7, 17, 16.3, 15.8, 15.2, 15, 14.8, 14.4,
                    14.2, 13.9, 13.7, 13.5, 13.4, 13.2, 13, 12.8, 12.6, 12.4,
                    12.3, 12, 11.9, 11.8, 11.7, 11.5, 11.4, 11.2, 11.1, 10.9,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.8, 8.7, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.8, 7.8, 7.7, 7.6, 7.5,
                    7.5, 7.4, 7.3, 7.2, 7.2, 7.1, 7, 6.9, 6.8, 6.6, 6.5, 6.4,
                    6.3, 6.2, 6.1, 6, 5.9, 5.9, 5.9, 5.8, 5.7, 5.6, 5.5, 5.4,
                    5.4, 5.3, 5.2, 5.2, 5.2, 5.1, 5, 4.9, 4.9, 4.8, 4.8, 4.8,
                    4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.3, 4.2, 4.1, 4.1,
                    4, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6, 3.5, 3.4, 3.3,
                    3.3, 3.2, 3.2, 3.1, 3, 3.1, 3, 2.9, 2.9, 2.9, 2.8, 2.8, 2.7,
                    2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.5,
                  ],
                  [
                    27.9, 27.9, 47.7, 9.1, 88.2, 85.4, 82.1, 79.3, 76.2, 72.9,
                    71.3, 69.1, 67, 65, 62.7, 61.5, 59.9, 58.2, 56.8, 56.3,
                    53.9, 52.4, 51.4, 50.1, 50.2, 47.9, 46.8, 46.1, 45.2, 44.2,
                    43.8, 42.6, 41.7, 41.1, 40.5, 39.6, 38.7, 38.2, 37.4, 36.9,
                    37.4, 35.9, 35.1, 34.5, 33.5, 33.5, 33.1, 32.5, 32.1, 31.6,
                    31.2, 30.8, 30.1, 30, 29.6, 29.2, 28.7, 28.3, 27.9, 27.9,
                    27.4, 27, 26.7, 26.3, 26.2, 25.7, 25.4, 25.2, 24.8, 24.6,
                    24.3, 24.1, 23.8, 23.6, 23.2, 23, 22.8, 22.6, 22.3, 22.2,
                    21.1, 20.1, 19.3, 18.4, 17.6, 16.8, 16.4, 15.8, 15.3, 14.9,
                    14.6, 14.4, 14.2, 13.9, 13.7, 13.5, 13.3, 13.1, 12.9, 12.7,
                    12.6, 12.4, 12.3, 12, 11.9, 11.7, 11.6, 11.5, 11.4, 11.2,
                    11.1, 10.9, 10.8, 10.7, 10.6, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8,
                    7.7, 7.6, 7.5, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7, 5.6,
                    5.5, 5.5, 5.4, 5.3, 5.2, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.9, 4.8,
                    4.7, 4.7, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.2, 4.2,
                    4.1, 4.1, 4.1, 4, 3.9, 3.9, 3.9, 3.8, 3.7, 3.6, 3.6, 3.4,
                    3.4, 3.4, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3.1, 3, 2.9,
                    2.9, 2.9, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    28, 27.9, 48.1, 9.3, 88.2, 85.2, 82.1, 79.3, 76.3, 72.9,
                    71.3, 69.1, 67.2, 65, 62.4, 61.5, 59.9, 58.3, 56.6, 55.1,
                    53.9, 52.6, 51.5, 50.2, 49.7, 48, 47.1, 46.2, 45.1, 44.2,
                    44.7, 42.6, 41.8, 41, 40.6, 39.6, 38.7, 38.3, 37.4, 36.9,
                    36.8, 35.7, 35.1, 34.5, 34.5, 33.6, 32.9, 32.6, 32.1, 31.6,
                    31.3, 30.7, 30.2, 29.9, 29.6, 29.1, 28.7, 28.4, 27.9, 27.9,
                    27.2, 26.9, 26.6, 26.4, 26.4, 25.7, 25.5, 25.2, 24.8, 24.4,
                    24.3, 24.1, 23.8, 23.6, 23.2, 22.9, 22.8, 22.6, 22.3, 22.1,
                    21.1, 19.9, 19.2, 18.4, 17.7, 16.9, 16.4, 15.9, 15.2, 14.9,
                    14.7, 14.5, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 13, 12.8,
                    12.7, 12.4, 12.3, 12.1, 12, 11.7, 11.6, 11.4, 11.3, 11.2,
                    11.1, 10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.1, 10, 9.9,
                    9.8, 9.7, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.8, 8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.5, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5.1, 5.1, 5,
                    4.9, 4.8, 4.8, 4.8, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.4, 4.4,
                    4.3, 4.2, 4.1, 4.1, 4, 4, 3.9, 3.9, 3.7, 3.7, 3.6, 3.6, 3.6,
                    3.6, 3.5, 3.4, 3.4, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3.1, 3, 3,
                    2.9, 2.9, 2.9, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    28, 27.9, 48.7, 9.2, 88.2, 85.6, 81.8, 79.3, 76.3, 72.8,
                    71.4, 69.2, 67.2, 65, 63.1, 61.4, 60, 58.2, 56.7, 56.4,
                    54.1, 52.6, 51.6, 50.4, 49.8, 47.9, 46.9, 46.2, 45.2, 44.3,
                    43.7, 42.6, 41.8, 41, 40.2, 39.6, 38.7, 38.2, 37.5, 36.9,
                    36.8, 35.9, 35.1, 34.5, 34.9, 33.6, 32.9, 32.6, 32.1, 31.7,
                    31.3, 30.8, 30.3, 29.9, 29.4, 29.1, 28.8, 28.4, 27.9, 27.8,
                    27.3, 27, 26.7, 26.4, 26.3, 25.8, 25.5, 25.2, 24.8, 24.5,
                    24.4, 24.1, 23.7, 23.4, 23.3, 23.1, 22.8, 22.6, 22.4, 21.9,
                    21.1, 20.1, 19.3, 18.4, 17.7, 17, 16.5, 15.8, 15.1, 14.9,
                    14.7, 14.4, 14.2, 14, 13.8, 13.5, 13.4, 13.2, 12.9, 12.8,
                    12.7, 12.4, 12.3, 11.9, 11.8, 11.8, 11.7, 11.5, 11.4, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7,
                    8.7, 8.6, 8.5, 8.4, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8,
                    7.7, 7.6, 7.5, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5, 5, 5, 5, 5, 4.9, 4.9, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.2, 4.1, 4, 4,
                    3.9, 3.9, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5, 3.5, 3.4,
                    3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3, 2.9, 2.9, 2.9, 2.8, 2.8,
                    2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6,
                    2.5,
                  ],
                  [
                    28, 28, 48.8, 9.3, 88.1, 85.6, 82.2, 79.2, 76.2, 72.9, 71.3,
                    69.2, 67.1, 64.9, 62.9, 61.4, 60, 58.3, 56.7, 55.7, 54,
                    52.6, 51.4, 50.2, 49.6, 47.9, 46.9, 46.2, 45.2, 44.2, 43.7,
                    42.6, 41.7, 41.1, 40.1, 39.6, 38.8, 38.3, 37.4, 36.8, 36.6,
                    35.9, 35.2, 34.6, 34, 33.6, 33.1, 32.4, 32, 31.7, 31.2,
                    30.9, 30.3, 30, 29.4, 29.2, 28.7, 28.4, 27.8, 27.9, 27.3,
                    27, 26.7, 26.3, 26.3, 25.7, 25.5, 25.2, 24.8, 24.6, 24.3,
                    24.2, 23.8, 23.6, 23.2, 23.1, 22.8, 22.6, 22.3, 22.1, 21.1,
                    20, 19.3, 18.3, 17.8, 17, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.4, 14.2, 14, 13.8, 13.5, 13.4, 13.2, 13, 12.9, 12.8,
                    12.4, 12.3, 12.1, 12, 11.7, 11.6, 11.4, 11.3, 11.2, 11.1,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.1, 10, 9.9, 9.8, 9.7,
                    9.7, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.8, 8.7, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.2, 8.1, 8, 8, 7.9, 7.8, 7.8, 7.7, 7.7,
                    7.6, 7.6, 7.5, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.8, 6.7, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.1, 5.9, 5.8, 5.7, 5.7, 5.7, 5.6, 5.6,
                    5.5, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 5, 4.9, 4.9, 4.8, 4.8,
                    4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.2, 4.1, 4.1, 4.1,
                    4, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.5, 3.4, 3.4, 3.4,
                    3.3, 3.3, 3.2, 3.2, 3.1, 3, 2.9, 2.9, 2.9, 2.9, 2.9, 2.9,
                    2.9, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.5, 2.5, 2.5, 2.5,
                  ],
                  [
                    28, 28.2, 48.9, 9.2, 88.2, 85.6, 82.1, 79.3, 76.3, 72.9,
                    71.3, 69, 67.3, 64.9, 63.1, 61.4, 59.9, 58.3, 56.7, 56.3,
                    53.9, 52.6, 51.4, 50.2, 49.9, 47.9, 47.1, 46.2, 45.3, 44.4,
                    43.9, 42.7, 41.7, 41.1, 40.2, 39.4, 38.7, 38.2, 37.4, 36.8,
                    36.7, 35.9, 35.3, 34.7, 34.2, 33.6, 33, 32.6, 32, 31.7,
                    31.2, 30.7, 30.3, 29.9, 29.4, 29.1, 28.7, 28.5, 27.9, 27.9,
                    27.4, 27.1, 26.7, 26.4, 26.4, 25.7, 25.4, 25.2, 25, 24.5,
                    24.2, 24.1, 23.8, 23.5, 23.3, 22.9, 22.7, 22.6, 22.4, 22,
                    21.2, 19.9, 19.2, 18.4, 17.7, 17.1, 16.3, 15.8, 15.3, 14.9,
                    14.6, 14.4, 14.3, 13.9, 13.7, 13.5, 13.4, 13.2, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.6, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7, 5.6,
                    5.5, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 5, 4.9, 4.9,
                    4.8, 4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.3, 4.2,
                    4.1, 4.1, 4.1, 4, 3.9, 3.8, 3.8, 3.7, 3.7, 3.7, 3.6, 3.5,
                    3.4, 3.4, 3.3, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3.1, 3,
                    2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.5,
                    2.5, 2.5, 2.5,
                  ],
                  [
                    28, 28.1, 48.6, 9.2, 88.2, 85.4, 82.3, 79.3, 76.3, 72.9,
                    71.3, 69.2, 67.2, 64.9, 63, 61.5, 59.9, 58.4, 56.7, 54.9,
                    53.9, 52.4, 51.4, 50.1, 49.8, 48.1, 47.1, 45.9, 45.2, 44.4,
                    43.8, 42.7, 41.8, 41, 40.2, 39.6, 38.8, 38.2, 37.5, 36.9,
                    36.6, 35.8, 35.2, 34.5, 33.1, 33.6, 33, 32.6, 32.1, 31.7,
                    31.2, 30.7, 30.2, 29.8, 29.4, 29.2, 28.8, 28.4, 27.8, 27.9,
                    27.4, 27.1, 26.7, 26.3, 26.3, 25.7, 25.5, 25.2, 24.9, 24.5,
                    24.3, 24.1, 23.8, 23.6, 23.3, 23, 22.8, 22.6, 22.4, 22.1,
                    21.2, 19.9, 19.3, 18.6, 17.7, 16.9, 16.3, 15.8, 15.3, 14.9,
                    14.7, 14.5, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 13, 12.8,
                    12.6, 12.4, 12.3, 12, 11.9, 11.7, 11.6, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8,
                    7.8, 7.7, 7.6, 7.5, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.4, 6.3, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7,
                    5.6, 5.6, 5.6, 5.5, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 5, 4.9,
                    4.9, 4.8, 4.8, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.2,
                    4.2, 4.2, 4.1, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5,
                    3.5, 3.5, 3.4, 3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3.1, 3,
                    2.9, 2.9, 2.9, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6,
                    2.6, 2.6, 2.4, 2.4,
                  ],
                  [
                    28.1, 27.9, 48.9, 9.3, 88.1, 85.6, 82.4, 79.3, 76.4, 72.4,
                    71.3, 69.1, 67.2, 64.9, 63.2, 61.5, 60, 58.3, 56.7, 55.9,
                    54.1, 52.6, 51.5, 50.2, 49.5, 48, 47, 46, 45.1, 44.2, 44.8,
                    42.6, 41.6, 40.9, 40.7, 39.6, 38.8, 38.3, 37.5, 36.9, 36.8,
                    35.9, 35.1, 34.5, 34.2, 33.5, 33, 32.5, 32, 31.7, 31.1,
                    30.8, 30.3, 29.9, 29.4, 29.2, 28.7, 28.3, 28.1, 27.9, 27.4,
                    27.1, 26.8, 26.4, 26.3, 25.7, 25.4, 25.2, 24.8, 24.5, 24.3,
                    24.1, 23.7, 23.7, 23.2, 23, 22.7, 22.6, 22.3, 22, 21.2,
                    20.1, 19.3, 18.4, 17.7, 16.9, 16.4, 15.8, 15.3, 14.9, 14.6,
                    14.4, 14.2, 14, 13.8, 13.5, 13.4, 13.2, 13.1, 12.9, 12.7,
                    12.3, 12.2, 12, 11.9, 11.7, 11.6, 11.4, 11.3, 11.2, 11.1,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.1, 9, 8.9, 8.8, 8.7, 8.6,
                    8.6, 8.5, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.9, 7.8, 7.7,
                    7.6, 7.6, 7.5, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.5,
                    6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.6, 5.5, 5.4,
                    5.4, 5.4, 5.3, 5.2, 5.2, 5.2, 5.1, 5.1, 5.1, 4.9, 4.9, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.2, 4.2, 4.1,
                    4.1, 4, 3.9, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3.1, 3, 3, 3, 2.9, 2.9,
                    2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.7, 2.7,
                    2.5,
                  ],
                  [
                    28, 28.1, 49.1, 9.5, 88.1, 85.6, 82.1, 79.3, 76.3, 72.9,
                    71.3, 69.1, 67.2, 65, 63, 61.4, 60, 58.2, 56.6, 55.7, 53.9,
                    52.6, 51.5, 50.2, 50.6, 47.9, 47, 46.2, 45.3, 44.4, 43.8,
                    42.6, 41.8, 41, 40.3, 39.5, 38.8, 38.3, 37.3, 36.8, 36.2,
                    35.8, 35.2, 34.6, 34, 33.4, 33, 32.4, 31.9, 31.7, 31.2,
                    30.8, 30.2, 30, 29.5, 29.2, 28.7, 28.3, 28.1, 28, 27.4,
                    26.9, 26.6, 26.4, 26.3, 25.7, 25.5, 25.1, 24.9, 24.4, 24.4,
                    24.1, 23.7, 23.6, 23.3, 23.1, 22.8, 22.6, 22.4, 22.1, 21.1,
                    20.1, 19.3, 18.4, 17.8, 17, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.5, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 13, 12.8, 12.7,
                    12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.1, 9, 8.9, 8.8, 8.7, 8.7,
                    8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8, 7.8,
                    7.7, 7.6, 7.5, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 5.9, 5.9, 5.7, 5.7, 5.7,
                    5.6, 5.6, 5.5, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 5, 4.9, 4.9,
                    4.8, 4.7, 4.6, 4.5, 4.5, 4.5, 4.4, 4.3, 4.3, 4.3, 4.3, 4.2,
                    4.1, 4.1, 4.1, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6,
                    3.5, 3.4, 3.4, 3.3, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.9,
                    2.9, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6,
                    2.5, 2.4, 2.4,
                  ],
                  [
                    27.9, 28, 49.2, 9.4, 88.1, 85.7, 82, 79.2, 76.3, 72.9, 71.2,
                    69.2, 67.1, 64.9, 62.9, 61.4, 59.9, 58.2, 56.7, 55.7, 53.9,
                    52.6, 51.6, 50.1, 50.2, 48.1, 47, 46.1, 45.3, 44.3, 43.8,
                    42.6, 41.7, 41, 40.3, 39.7, 38.9, 38.3, 37.4, 36.8, 36.8,
                    35.9, 35.1, 34.5, 33.8, 33.5, 33, 32.6, 32, 31.7, 31.3,
                    30.7, 30.2, 29.9, 29.6, 29.2, 28.8, 28.3, 27.9, 28, 27.4,
                    27.1, 26.7, 26.4, 26.2, 25.8, 25.5, 25.1, 24.9, 24.6, 24.3,
                    24, 23.7, 23.6, 23.2, 23.1, 22.8, 22.6, 22.4, 22.2, 21.2,
                    20, 19.2, 18.4, 17.7, 17.1, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.5, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 12.9, 12.7, 12.6,
                    12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.5, 11.4, 11, 10.9,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 8.9, 8.8, 8.7, 8.7,
                    8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8, 7.7,
                    7.7, 7.7, 7.6, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 5.9, 5.8, 5.8, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 4.9, 4.9, 4.9,
                    4.8, 4.8, 4.6, 4.6, 4.6, 4.6, 4.6, 4.4, 4.3, 4.3, 4.2, 4.1,
                    4.1, 4.1, 4.1, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6,
                    3.5, 3.4, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.9, 2.9,
                    2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6,
                    2.5, 2.4, 2.4,
                  ],
                  [
                    28.1, 28, 49.1, 9.4, 88.2, 85.6, 82.2, 79.3, 76.3, 72.8,
                    71.3, 69.2, 67.2, 64.8, 63.1, 61.6, 59.9, 58.3, 56.8, 56.2,
                    54, 52.6, 51.4, 50.3, 49.3, 48, 46.9, 46.2, 45.3, 44.3,
                    43.4, 42.6, 41.7, 41.1, 40.7, 39.5, 38.9, 38.1, 37.4, 36.8,
                    37.6, 35.8, 35.1, 34.6, 34.2, 33.6, 32.9, 32.4, 31.9, 31.6,
                    31.2, 30.8, 30.3, 29.9, 29.4, 29.2, 28.8, 28.3, 28, 28,
                    27.3, 27.1, 26.7, 26.3, 26.1, 25.8, 25.5, 25.1, 24.9, 24.6,
                    24.3, 24.2, 23.8, 23.6, 23.3, 23.1, 22.8, 22.6, 22.3, 22.1,
                    21.2, 20.1, 19.2, 18.3, 17.7, 17, 16.4, 15.8, 15.2, 14.9,
                    14.7, 14.5, 14.3, 14, 13.7, 13.5, 13.3, 13.1, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.5, 11.4, 11.2,
                    11.1, 10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.1, 9, 9, 8.9, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8, 7.8,
                    7.7, 7.7, 7.6, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.6,
                    5.5, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.2, 5, 5, 5, 4.9, 4.8,
                    4.7, 4.7, 4.6, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.2, 4.2,
                    4.1, 4.1, 4.1, 4, 3.9, 3.8, 3.7, 3.7, 3.7, 3.6, 3.6, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.9,
                    2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    28, 28, 49.3, 9.4, 88.3, 85.5, 82.3, 79.1, 76.4, 72.8, 71.3,
                    69.1, 67.2, 64.9, 63.1, 61.6, 59.9, 58.3, 56.7, 55.7, 54,
                    52.6, 51.5, 50.3, 50.4, 47.9, 46.7, 46, 45.2, 44.3, 43.8,
                    42.5, 41.7, 41, 40.5, 39.5, 38.9, 38.3, 37.4, 36.9, 37.7,
                    35.9, 35, 34.6, 34.1, 33.5, 33.1, 32.5, 32.1, 31.6, 31.2,
                    30.9, 30.3, 30, 29.4, 29.2, 28.8, 28.4, 27.9, 28, 27.3,
                    27.1, 26.7, 26.3, 26.2, 25.8, 25.4, 25.2, 24.9, 24.6, 24.3,
                    24, 23.7, 23.5, 23.3, 22.9, 22.8, 22.6, 22.3, 22.2, 21.2,
                    19.9, 19.2, 18.4, 17.7, 17.1, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.5, 14.2, 14, 13.8, 13.5, 13.4, 13.2, 13, 12.8, 12.7,
                    12.4, 12.3, 12, 11.9, 11.6, 11.5, 11.4, 11.3, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 9.9, 9.8,
                    9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.1, 9, 8.9, 8.8, 8.7,
                    8.6, 8.5, 8.4, 8.4, 8.3, 8.3, 8.2, 8.2, 8.1, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.5, 7.4, 7.3, 7.3, 7.2, 7.1, 7, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6.1, 6, 5.9, 5.8, 5.7, 5.6,
                    5.6, 5.6, 5.5, 5.4, 5.3, 5.2, 5.2, 5.2, 5.1, 5.1, 5, 4.9,
                    4.9, 4.8, 4.7, 4.6, 4.6, 4.6, 4.5, 4.5, 4.4, 4.4, 4.3, 4.2,
                    4.1, 4.1, 4.1, 4, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.5,
                    3.5, 3.4, 3.3, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.9,
                    2.9, 2.9, 2.9, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    28.1, 28.1, 49.2, 9.6, 88.1, 85.4, 82.2, 78.9, 76.4, 72.9,
                    71.4, 69.2, 67.2, 65, 63.7, 61.6, 59.9, 58.2, 56.6, 56.2,
                    54.1, 52.6, 51.4, 50.2, 49.9, 48, 46.7, 46.1, 45.3, 44.2,
                    43.8, 42.6, 41.8, 41, 40.2, 39.4, 38.9, 38.3, 37.5, 36.8,
                    35.4, 35.8, 34.9, 34.4, 34.9, 33.6, 33, 32.5, 31.9, 31.6,
                    31.3, 30.8, 30.2, 29.8, 29.6, 29.2, 28.8, 28.3, 28.1, 28,
                    27.4, 27, 26.9, 26.3, 26.3, 25.7, 25.5, 25.2, 24.8, 24.6,
                    24.3, 24.1, 23.7, 23.5, 23.3, 23.1, 22.9, 22.7, 22.4, 22.1,
                    21.1, 20.1, 19.3, 18.5, 17.8, 16.9, 16.4, 15.9, 15.3, 14.9,
                    14.6, 14.4, 14.2, 14, 13.8, 13.5, 13.3, 13.2, 13.1, 12.9,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.5, 11.4, 11.2,
                    11.1, 10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8,
                    7.7, 7.7, 7.6, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 5, 4.9, 4.8,
                    4.7, 4.7, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.2, 4.2,
                    4.1, 4.1, 4, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5, 3.4,
                    3.3, 3.3, 3.3, 3.3, 3.3, 3.2, 3.2, 3.1, 3, 3, 3, 2.9, 2.8,
                    2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.5,
                  ],
                  [
                    28.1, 28.1, 49.2, 9.5, 88.2, 85.6, 82, 78.9, 76.3, 72.9,
                    71.3, 69.2, 67.3, 65, 62.7, 61.4, 60, 58.2, 56.7, 56.6,
                    53.9, 52.6, 51.5, 50.2, 49.8, 47.8, 46.8, 46.2, 45.2, 44.3,
                    44.3, 42.7, 41.6, 41.1, 39.4, 39.6, 38.9, 38.2, 37.4, 36.8,
                    36.8, 35.8, 35.1, 34.5, 34, 33.5, 32.9, 32.6, 32, 31.6,
                    31.2, 30.9, 30.3, 29.9, 29.4, 29.1, 28.7, 28.4, 27.9, 28,
                    27.4, 27.1, 26.7, 26.4, 26.3, 25.8, 25.4, 25.2, 24.9, 24.5,
                    24.4, 24.1, 23.8, 23.6, 23.2, 23, 22.8, 22.6, 22.2, 22.1,
                    21.1, 19.9, 19.3, 18.4, 17.8, 17.1, 16.4, 15.8, 15.2, 14.9,
                    14.7, 14.5, 14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.7, 11.6, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.2, 8.1, 8.1, 8, 7.9, 7.8,
                    7.8, 7.7, 7.7, 7.6, 7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 6, 5.9, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.3, 5.2, 5.2, 5.2, 5.2, 5.1, 5, 4.9, 4.8,
                    4.8, 4.8, 4.8, 4.7, 4.6, 4.5, 4.4, 4.4, 4.4, 4.3, 4.3, 4.3,
                    4.2, 4.1, 4.1, 4.1, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.7, 3.6,
                    3.5, 3.4, 3.4, 3.3, 3.3, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3.1,
                    3, 2.9, 2.9, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6,
                    2.6, 2.6, 2.5, 2.5,
                  ],
                  [
                    28, 28.1, 49.2, 9.5, 88.3, 85.6, 82.1, 78.9, 76.5, 73, 71.4,
                    69.2, 67.1, 64.9, 63.2, 61.6, 59.9, 58.2, 56.7, 56.2, 54,
                    52.6, 51.5, 50.3, 49.9, 47.8, 46.8, 45.9, 45.3, 44.3, 43.8,
                    42.6, 41.6, 40.9, 40.8, 39.7, 38.8, 38.2, 37.4, 36.7, 36.9,
                    35.9, 35.1, 34.4, 34.1, 33.6, 33.1, 32.6, 31.9, 31.7, 31.2,
                    30.8, 30.4, 29.9, 29.5, 29.2, 28.8, 28.3, 27.9, 28, 27.3,
                    27.1, 26.6, 26.4, 26.2, 25.8, 25.4, 25.1, 24.9, 24.6, 24.4,
                    24.1, 23.8, 23.6, 23.2, 23, 22.9, 22.6, 22.3, 22.1, 21.2,
                    20, 19.3, 18.5, 17.8, 16.9, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.5, 14.3, 14, 13.7, 13.5, 13.3, 13.1, 13, 12.8, 12.7,
                    12.4, 12.3, 12.1, 12, 11.8, 11.7, 11.4, 11.3, 11.2, 11.1,
                    10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9.1, 9, 8.9, 8.8, 8.7, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8, 7.7, 7.7,
                    7.6, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.5,
                    6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7, 5.6, 5.5,
                    5.4, 5.3, 5.2, 5.2, 5.2, 5.2, 5.1, 5, 5, 4.9, 4.8, 4.8, 4.8,
                    4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.2, 4.1, 4.1,
                    4.1, 4, 4, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6, 3.5, 3.4, 3.4,
                    3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3, 2.9, 2.9, 2.8, 2.8, 2.8,
                    2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.5,
                  ],
                  [
                    28.1, 28, 48.8, 9.3, 88.4, 85.4, 82.2, 78.9, 76.6, 73.1,
                    71.4, 69.2, 67.1, 64.9, 63.1, 61.6, 60, 58.3, 56.6, 56.4,
                    54.1, 52.4, 51.6, 50.3, 51.7, 47.8, 46.9, 45.9, 45.3, 44.2,
                    43.8, 42.7, 41.7, 41.1, 40.8, 39.5, 38.8, 38.3, 37.6, 36.9,
                    37.3, 35.7, 35.1, 34.6, 34.4, 33.4, 33.1, 32.6, 32, 31.6,
                    31.2, 30.7, 30.4, 29.9, 29.5, 29.2, 28.8, 28.4, 28, 27.9,
                    27.3, 26.9, 26.6, 26.4, 26.3, 25.8, 25.5, 25.2, 24.9, 24.6,
                    24.4, 24.1, 23.7, 23.5, 23.3, 23.1, 22.8, 22.6, 22.4, 22,
                    21.1, 20.1, 19.3, 18.4, 17.7, 17, 16.5, 15.8, 15.2, 14.9,
                    14.6, 14.4, 14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.8, 8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8,
                    7.8, 7.7, 7.7, 7.6, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6, 5.9, 5.8, 5.7, 5.7,
                    5.7, 5.6, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5.1, 5, 4.9,
                    4.9, 4.8, 4.7, 4.7, 4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3,
                    4.2, 4.2, 4.1, 4.1, 4, 3.9, 3.9, 3.8, 3.8, 3.7, 3.7, 3.6,
                    3.6, 3.5, 3.4, 3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3.1, 3.1,
                    3, 2.9, 2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6,
                    2.6, 2.6, 2.6, 2.6, 2.5,
                  ],
                  [
                    0, 28.1, 49.1, 9.4, 88.3, 85.5, 82.2, 78.9, 76.4, 73, 71.3,
                    69.1, 67.2, 65, 63.1, 61.6, 60, 58.3, 56.7, 56.7, 54.1,
                    52.7, 51.6, 50.2, 49.9, 47.8, 46.8, 45.8, 45.2, 44.3, 43.9,
                    42.6, 41.7, 41, 40.8, 39.6, 38.8, 38.2, 37.6, 36.9, 36.9,
                    35.8, 35, 34.6, 33.9, 33.6, 33.1, 32.6, 32.1, 31.6, 31.4,
                    30.8, 30.3, 30, 29.5, 29.2, 28.7, 28.3, 28, 28, 27.3, 27.1,
                    26.7, 26.4, 26.3, 25.6, 25.4, 25.2, 24.8, 24.5, 24.4, 24,
                    23.7, 23.7, 23.3, 2.9, 22.9, 22.7, 22.4, 22.1, 21.1, 20,
                    19.3, 18.4, 17.8, 16.9, 16.4, 15.8, 15.2, 14.9, 14.7, 14.4,
                    14.2, 14, 13.8, 13.6, 13.4, 13.2, 12.9, 12.8, 12.7, 12.3,
                    12.2, 12, 11.9, 11.8, 11.7, 11.5, 11.4, 11.2, 11.1, 10.8,
                    10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.6,
                    8.5, 8.5, 8.4, 8.3, 8.2, 8, 7.9, 7.9, 7.8, 7.8, 7.7, 7.7,
                    7.6, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.5,
                    6.4, 6.3, 6.2, 6.1, 5.9, 5.8, 5.8, 5.8, 5.7, 5.6, 5.6, 5.6,
                    5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 4.9, 4.8, 4.8, 4.7, 4.7,
                    4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.2, 4.1, 4, 4,
                    4, 4, 3.9, 3.8, 3.7, 3.7, 3.6, 3.5, 3.4, 3.4, 3.4, 3.4, 3.3,
                    3.2, 3.1, 3.1, 3.1, 3.1, 3.1, 3, 2.9, 2.9, 2.8, 2.8, 2.8,
                    2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.5, 2.5,
                  ],
                  [
                    0, 28.5, 49.2, 9.5, 88.5, 85.4, 82.3, 78.9, 76.6, 72.9,
                    71.4, 69.1, 67.2, 64.9, 63.2, 61.6, 59.9, 58.2, 56.7, 55.7,
                    54, 52.5, 51.6, 50.3, 49.8, 47.8, 46.9, 45.9, 45.3, 44.2,
                    43.5, 42.7, 41.7, 41.1, 40.9, 39.6, 38.8, 38.2, 37.4, 37,
                    37.6, 36, 35.2, 34.6, 34.1, 33.6, 33.1, 32.4, 32, 31.6,
                    31.3, 30.8, 30.3, 29.9, 29.4, 29.2, 28.8, 28.3, 27.9, 27.9,
                    27.3, 27.1, 26.6, 26.4, 26.4, 25.8, 25.5, 25.1, 24.9, 24.4,
                    24.3, 24.2, 23.7, 23.6, 23.2, 23.1, 22.7, 22.6, 22.4, 22.1,
                    21.1, 20.1, 19.3, 18.4, 17.7, 17, 16.4, 15.8, 15.2, 14.9,
                    14.7, 14.5, 14.3, 14, 13.7, 13.5, 13.3, 13.1, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2,
                    11.1, 10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7,
                    8.7, 8.6, 8.6, 8.5, 8.4, 8.3, 8.3, 8.2, 8.1, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.5, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7,
                    5.7, 5.6, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 4.9, 4.9,
                    4.8, 4.7, 4.7, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.2, 4.2,
                    4.2, 4.1, 4.1, 4, 4, 3.9, 3.8, 3.7, 3.7, 3.7, 3.6, 3.5, 3.5,
                    3.5, 3.4, 3.4, 3.4, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.9,
                    2.9, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    0, 28.1, 49.3, 9.5, 88.4, 85.4, 82.4, 78.9, 76.6, 73.2,
                    71.3, 69, 67.2, 65, 63.4, 61.6, 59.9, 58.3, 56.6, 55.8, 54,
                    52.6, 51.4, 50.3, 49.7, 47.9, 46.9, 45.9, 45.3, 44.3, 43.8,
                    42.5, 41.6, 41.1, 40.9, 39.5, 38.7, 38.1, 37.5, 36.8, 36.9,
                    35.8, 35.1, 34.6, 33.6, 33.5, 33, 32.4, 32, 31.6, 31.3,
                    30.8, 30.4, 30, 29.5, 29.2, 28.9, 28.4, 27.9, 28.1, 27.3,
                    27, 26.7, 26.4, 26.3, 25.7, 25.4, 25.2, 24.9, 24.5, 24.4,
                    24, 23.7, 23.6, 23.3, 23.1, 22.7, 22.6, 22.3, 22.1, 21.1,
                    20.1, 19.3, 18.6, 17.8, 16.9, 16.4, 15.8, 15.3, 14.9, 14.7,
                    14.5, 14.3, 14, 13.7, 13.5, 13.3, 13.1, 13, 12.8, 12.7,
                    12.3, 12.2, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.8,
                    8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8, 7.7,
                    7.7, 7.6, 7.6, 7.4, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6.1, 5.9, 5.8, 5.7, 5.6, 5.5,
                    5.5, 5.4, 5.4, 5.3, 5.2, 5.2, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.9,
                    4.8, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.1,
                    4.1, 4, 4, 3.9, 3.9, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5, 3.4, 3.4,
                    3.4, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.8, 2.8, 2.8,
                    2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.8,
                    2.8,
                  ],
                  [
                    0, 28.1, 49.4, 9.4, 88.4, 85.4, 82.4, 78.9, 76.5, 73.1,
                    71.4, 69.1, 67.3, 64.9, 63.2, 61.6, 59.9, 58.3, 56.7, 56.2,
                    54.1, 52.7, 51.5, 50.3, 49.9, 47.8, 46.9, 45.9, 45.2, 44.2,
                    43.7, 42.5, 41.6, 41, 40.6, 39.7, 38.8, 38.2, 37.6, 36.9,
                    37.5, 35.9, 34.9, 34.6, 34.2, 33.5, 33, 32.6, 31.9, 31.6,
                    31.3, 30.8, 30.3, 29.9, 29.4, 29.2, 28.9, 28.4, 27.9, 27.9,
                    27.3, 27, 26.7, 26.3, 26.3, 25.7, 25.4, 25.2, 24.9, 24.6,
                    24.4, 24, 23.8, 23.6, 23.3, 23.1, 22.8, 22.6, 22.3, 22.1,
                    21.2, 20.1, 19.3, 18.4, 17.8, 17, 16.4, 15.9, 15.2, 14.8,
                    14.6, 14.4, 14.3, 14, 13.8, 13.6, 13.3, 13.1, 13, 12.8,
                    12.7, 12.3, 12.2, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.8, 8.7, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.8, 7.8,
                    7.7, 7.7, 7.6, 7.6, 7.5, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.2, 6.1, 6.1, 5.9, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.2, 5.1, 5, 4.9, 4.9,
                    4.8, 4.8, 4.8, 4.7, 4.6, 4.5, 4.5, 4.5, 4.4, 4.4, 4.4, 4.3,
                    4.2, 4, 4, 4, 4, 3.9, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.5,
                    3.4, 3.4, 3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3, 3, 2.9, 2.9,
                    2.8, 2.8, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.6, 2.5,
                  ],
                  [
                    0, 27.9, 49.4, 9.6, 88.5, 85.4, 82.3, 78.9, 76.5, 73, 71.3,
                    69.2, 67.3, 65, 63.1, 61.4, 60, 58.2, 56.7, 56.1, 54, 52.6,
                    51.4, 50.4, 48.8, 47.8, 46.8, 46, 45.3, 44.3, 43.8, 42.6,
                    41.7, 41.1, 40.7, 39.6, 38.8, 38.3, 37.4, 36.9, 37, 36.1,
                    35.1, 34.7, 33.3, 33.5, 33, 32.6, 32, 31.7, 31.3, 30.8,
                    30.3, 29.9, 29.5, 29.2, 28.9, 28.4, 28, 27.9, 27.4, 26.9,
                    26.7, 26.3, 26.4, 25.8, 25.5, 25.2, 24.8, 24.6, 24.4, 24.2,
                    23.8, 23.6, 23.3, 23, 22.8, 22.6, 22.4, 22.1, 21.1, 20.1,
                    19.2, 18.4, 17.7, 16.9, 16.4, 15.9, 15.2, 14.9, 14.7, 14.5,
                    14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8, 12.7, 12.4,
                    12.3, 12, 11.9, 11.7, 11.6, 11.4, 11.3, 11.1, 11, 10.9,
                    10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.8, 8.7, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8, 7.8, 7.7, 7.7,
                    7.6, 7.5, 7.4, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.1, 5.9, 5.8, 5.7, 5.6, 5.6, 5.5, 5.5,
                    5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.9, 4.8, 4.8, 4.8,
                    4.7, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.3, 4.3, 4.2, 4.1, 4.1,
                    4, 3.9, 3.9, 3.9, 3.8, 3.7, 3.7, 3.7, 3.7, 3.5, 3.4, 3.4,
                    3.3, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.9, 2.9, 2.8,
                    2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.4,
                    2.4,
                  ],
                  [
                    0, 28, 49.4, 9.7, 88.4, 85.7, 82.2, 79.1, 76.6, 73.1, 71.4,
                    69.2, 67.2, 65, 63.1, 61.6, 60, 58.3, 56.7, 56.3, 54.1,
                    52.6, 51.5, 50.3, 49.7, 47.9, 46.9, 46, 45.3, 44.2, 43.8,
                    42.4, 41.8, 41, 40.2, 39.3, 38.9, 38.3, 37.4, 36.9, 37.2,
                    36, 35.2, 34.6, 34.3, 33.6, 33, 32.5, 32, 31.6, 31.4, 30.8,
                    30.3, 29.9, 29.5, 29.2, 28.8, 28.3, 28, 27.9, 27.4, 27.1,
                    26.7, 26.4, 26.4, 25.7, 25.4, 25.2, 24.8, 24.6, 24.3, 24,
                    23.8, 23.5, 23.3, 23, 22.8, 22.7, 22.3, 22.1, 21.2, 20,
                    19.2, 18.5, 17.7, 16.9, 16.4, 15.8, 15.2, 14.9, 14.7, 14.4,
                    14.2, 14, 13.8, 13.5, 13.2, 13.1, 12.9, 12.7, 12.6, 12.4,
                    12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2, 11.1, 10.9,
                    10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.5, 9.4, 9.3, 9.2, 9.1, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.9, 7.8, 7.8, 7.7, 7.6,
                    7.5, 7.5, 7.4, 7.3, 7.2, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.1, 6.1, 5.9, 5.8, 5.7, 5.7, 5.6, 5.5,
                    5.4, 5.3, 5.3, 5.3, 5.2, 5.2, 5.1, 5, 4.9, 4.9, 4.8, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.6, 4.5, 4.4, 4.3, 4.2, 4.2, 4.2, 4.1,
                    4.1, 4, 3.9, 3.9, 3.9, 3.8, 3.8, 3.7, 3.6, 3.5, 3.5, 3.4,
                    3.3, 3.3, 3.3, 3.3, 3.2, 3.1, 3.1, 3.1, 3, 3, 2.9, 2.9, 2.9,
                    2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6,
                    2.5,
                  ],
                  [
                    0, 28.1, 49.4, 9.7, 88.6, 85.6, 82.3, 78.9, 76.6, 73.1,
                    71.3, 69.1, 67.2, 64.9, 63.1, 61.7, 59.9, 58.2, 56.7, 55.1,
                    53.9, 52.7, 51.6, 50.3, 49.8, 47.9, 46.9, 46.2, 45.2, 44.2,
                    43.9, 42.6, 41.8, 40.9, 40.3, 39.5, 38.9, 38.2, 37.5, 36.9,
                    36.7, 36, 35.1, 34.4, 35.3, 33.6, 33.1, 32.6, 32.1, 31.7,
                    31.3, 30.8, 30.3, 29.9, 29.5, 29.2, 28.9, 28.4, 28, 28,
                    27.4, 27.1, 26.7, 26.3, 26.3, 25.7, 25.5, 25.2, 24.9, 24.6,
                    24.3, 24.1, 23.8, 23.5, 23.3, 23, 22.8, 22.7, 22.3, 22.1,
                    21.2, 20.1, 19.3, 18.4, 17.7, 17.1, 16.4, 15.9, 15.2, 14.9,
                    14.7, 14.5, 14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8,
                    12.6, 12.4, 12.3, 11.9, 11.8, 11.7, 11.6, 11.5, 11.4, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.6, 8.5, 8.4, 8.3, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.8,
                    7.7, 7.6, 7.5, 7.5, 7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.8,
                    6.7, 6.5, 6.4, 6.3, 6.3, 6.2, 6.1, 5.9, 5.8, 5.8, 5.7, 5.6,
                    5.5, 5.5, 5.4, 5.3, 5.2, 5.1, 5.1, 5.1, 5, 5, 4.9, 4.9, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.6, 4.5, 4.4, 4.4, 4.4, 4.3, 4.3, 4.2,
                    4.1, 4.1, 4.1, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5,
                    3.4, 3.4, 3.4, 3.4, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3, 2.8,
                    2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.6, 2.6, 2.5,
                  ],
                  [
                    0, 28.1, 49.4, 9.6, 88.4, 85.6, 82.5, 79.1, 76.6, 73, 71.4,
                    69.1, 67.3, 65, 63, 61.7, 60, 58.2, 56.7, 55.7, 54, 52.6,
                    51.6, 50.3, 50.4, 47.8, 46.9, 46.1, 45.3, 44.3, 43.7, 42.6,
                    41.7, 41.1, 40.7, 39.6, 38.7, 38.2, 37.3, 36.8, 36.8, 35.9,
                    35.1, 34.6, 33.7, 33.6, 33, 32.4, 32, 31.7, 31.4, 30.7,
                    30.3, 30, 29.4, 29.2, 28.7, 28.4, 27.9, 27.9, 27.4, 26.9,
                    26.7, 26.4, 26.3, 25.7, 25.4, 25.2, 24.9, 24.4, 24.3, 24.1,
                    23.7, 23.6, 23.2, 23.1, 22.8, 22.7, 22.4, 22.2, 21.3, 20.1,
                    19.2, 18.6, 17.7, 16.9, 16.3, 15.8, 15.2, 14.9, 14.7, 14.5,
                    14.3, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8, 12.7, 12.4,
                    12.3, 12, 11.9, 11.8, 11.7, 11.3, 11.2, 11.1, 11, 10.8,
                    10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.6,
                    8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.8, 7.8, 7.7, 7.7, 7.6,
                    7.5, 7.4, 7.3, 7.2, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.4,
                    6.3, 6.2, 6.1, 6, 5.9, 5.9, 5.8, 5.7, 5.6, 5.6, 5.6, 5.5,
                    5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.9, 4.8, 4.8, 4.7, 4.6,
                    4.6, 4.6, 4.5, 4.4, 4.4, 4.3, 4.3, 4.3, 4.2, 4.1, 4.1, 4, 4,
                    3.9, 3.9, 3.8, 3.7, 3.7, 3.7, 3.6, 3.5, 3.4, 3.4, 3.3, 3.3,
                    3.2, 3.2, 3.1, 3.1, 3, 3, 3, 3, 2.9, 2.8, 2.8, 2.8, 2.7,
                    2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6, 2.6, 2.5,
                  ],
                  [
                    0, 27.9, 49.4, 9.6, 88.4, 85.5, 82.2, 79.2, 76.4, 73, 71.3,
                    69.1, 67.3, 64.9, 63.1, 61.7, 59.9, 58.3, 56.7, 55.7, 53.9,
                    52.5, 51.4, 50.4, 49.8, 47.9, 46.8, 46.2, 45.2, 44.3, 43.7,
                    42.6, 41.7, 41, 40.4, 39.4, 38.8, 38.2, 37.4, 36.8, 36.4,
                    35.9, 35, 34.4, 34.7, 33.6, 33.1, 32.6, 32, 31.7, 31.3,
                    30.9, 30.4, 29.9, 29.4, 29.2, 28.8, 28.4, 27.9, 27.9, 27.3,
                    27, 26.7, 26.4, 26.4, 25.8, 25.4, 25.2, 24.8, 24.6, 24.4,
                    24.2, 23.8, 23.4, 23.2, 23.1, 22.9, 22.6, 22.4, 22.1, 21.1,
                    20, 19.3, 18.4, 17.7, 16.9, 16.4, 16, 15.3, 14.9, 14.7,
                    14.5, 14.3, 14, 13.8, 13.5, 13.3, 13.1, 13, 12.8, 12.7,
                    12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2, 11.1,
                    10.9, 10.8, 10.7, 10.6, 10.3, 10.2, 10.1, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7,
                    8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 8, 7.9, 7.9, 7.8, 7.8, 7.7,
                    7.6, 7.5, 7.5, 7.4, 7.3, 7.2, 7.2, 7, 6.9, 6.8, 6.8, 6.6,
                    6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7, 5.6,
                    5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 4.9, 4.9, 4.8, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.4, 4.4, 4.3, 4.3, 4.2, 4.1,
                    4.1, 4, 4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5, 3.4, 3.3,
                    3.3, 3.3, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 3, 2.9, 2.9, 2.8, 2.8,
                    2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.5, 2.4, 2.4,
                  ],
                  [
                    0, 27.9, 49.5, 9.7, 88.4, 85.6, 82.2, 79, 76.4, 73.1, 71.4,
                    69.2, 67.3, 65, 63, 61.7, 60, 58.3, 56.7, 56.1, 54, 52.6,
                    51.5, 50.3, 51.1, 47.9, 46.9, 46.2, 45.3, 44.3, 43.8, 42.7,
                    41.6, 41, 40.4, 39.6, 38.8, 38.3, 37.5, 36.8, 36.7, 35.9,
                    35.1, 34.6, 35.2, 33.5, 32.9, 32.6, 31.9, 31.7, 31.3, 30.8,
                    30.4, 30, 29.4, 29.2, 28.7, 28.4, 28, 28.1, 27.4, 26.9,
                    26.7, 26.3, 26.3, 25.8, 25.5, 25.2, 24.9, 24.6, 24.4, 24.1,
                    23.6, 23.5, 23.2, 23, 22.8, 22.6, 22.2, 22, 21.2, 20, 19.2,
                    18.5, 17.7, 16.9, 16.4, 15.9, 15.1, 14.8, 14.6, 14.4, 14.3,
                    14, 13.7, 13.5, 13.3, 13.1, 13, 12.8, 12.6, 12.4, 12.3, 12,
                    11.9, 11.8, 11.7, 11.4, 11.3, 11.2, 11.1, 10.9, 10.8, 10.6,
                    10.5, 10.4, 10.3, 10.2, 10.1, 10, 9.9, 9.8, 9.7, 9.6, 9.5,
                    9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6, 8.5, 8.4, 8.4,
                    8.3, 8.3, 8.1, 8, 7.9, 7.9, 7.8, 7.8, 7.7, 7.6, 7.5, 7.5,
                    7.4, 7.3, 7.2, 7.1, 7, 6.9, 6.8, 6.7, 6.6, 6.5, 6.4, 6.3,
                    6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.6, 5.5, 5.4, 5.4, 5.3,
                    5.3, 5.3, 5.2, 5.2, 5.1, 4.9, 4.8, 4.8, 4.8, 4.8, 4.8, 4.7,
                    4.7, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.2, 4.2, 4.1, 4.1,
                    4, 3.9, 3.8, 3.8, 3.8, 3.7, 3.6, 3.6, 3.5, 3.4, 3.4, 3.4,
                    3.3, 3.2, 3.2, 3.1, 3.1, 3, 3, 3, 2.9, 2.9, 2.8, 2.8, 2.8,
                    2.8, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.5, 2.5, 2.5, 2.5,
                  ],
                  [
                    0, 28.1, 49.2, 9.6, 88.2, 85.6, 82.2, 78.9, 76.5, 72.8,
                    71.5, 69.2, 67.2, 64.9, 63.1, 61.7, 60, 58.3, 56.7, 55.7,
                    53.8, 52.7, 51.6, 50.3, 50.7, 47.8, 47, 46.2, 45.3, 44.3,
                    43.8, 42.7, 41.7, 41.1, 40.8, 39.6, 38.9, 38.2, 37.4, 36.8,
                    36.8, 35.9, 35, 34.6, 34.9, 33.5, 32.9, 32.6, 32, 31.6,
                    31.3, 30.8, 30.4, 29.9, 29.3, 29.2, 28.9, 28.4, 28, 28,
                    27.4, 27.1, 26.7, 26.4, 26.4, 25.7, 25.3, 25.3, 24.8, 24.5,
                    24.4, 24.1, 23.7, 23.6, 23.3, 22.9, 22.9, 22.5, 22.3, 22.1,
                    21.1, 20, 19.3, 18.4, 17.7, 17, 16.4, 15.8, 15.2, 14.9,
                    14.7, 14.4, 14.2, 14, 13.8, 13.6, 13.4, 13.2, 13, 12.8,
                    12.7, 12.4, 12.3, 12, 11.9, 11.8, 11.7, 11.4, 11.3, 11.2,
                    11.1, 10.9, 10.8, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 10,
                    9.9, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8,
                    8.7, 8.6, 8.6, 8.5, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.8,
                    7.7, 7.6, 7.6, 7.5, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8,
                    6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7,
                    5.7, 5.6, 5.5, 5.4, 5.4, 5.3, 5.3, 5.2, 5.1, 5, 5, 4.9, 4.9,
                    4.8, 4.8, 4.8, 4.7, 4.6, 4.5, 4.4, 4.4, 4.4, 4.3, 4.3, 4.2,
                    4.1, 4.1, 4.1, 4, 4, 3.8, 3.8, 3.8, 3.7, 3.7, 3.6, 3.6, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.2, 3.1, 3.1, 3.1, 3.1, 3.1, 3.1, 3,
                    2.9, 2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6,
                    2.6, 2.5, 2.5,
                  ],
                  [
                    0, 28, 49.2, 9.6, 88.2, 85.6, 82.3, 78.9, 76.6, 73.1, 71.3,
                    69.2, 67.2, 65.1, 63, 61.7, 60, 58.3, 56.7, 55.6, 54.1,
                    52.6, 51.5, 50.4, 50.5, 47.9, 47.1, 46.4, 45.3, 44.2, 43.8,
                    42.6, 41.8, 41.1, 40.5, 39.6, 38.9, 38.2, 37.5, 36.9, 36.8,
                    36, 35.2, 34.6, 34.1, 33.5, 33.1, 32.6, 32, 31.7, 31.3,
                    30.7, 30.3, 29.8, 29.6, 29.2, 28.8, 28.4, 28, 27.9, 27.4,
                    27, 26.7, 26.3, 26.3, 25.8, 25.4, 25.2, 24.9, 24.5, 24.2,
                    23.9, 23.8, 23.6, 23.2, 23, 22.8, 22.6, 22.2, 22, 21.1,
                    20.1, 19.3, 18.4, 17.8, 16.9, 16.4, 15.8, 15.2, 14.9, 14.7,
                    14.4, 14.2, 14, 13.9, 13.5, 13.3, 13.1, 13, 12.8, 12.7,
                    12.4, 12.3, 12.1, 12, 11.7, 11.6, 11.4, 11.3, 11.2, 11.1,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.1, 10, 9.9, 9.8, 9.7,
                    9.6, 9.5, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7, 8.6,
                    8.5, 8.5, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 8, 7.9, 7.8, 7.7, 7.6,
                    7.5, 7.5, 7.4, 7.4, 7.3, 7.2, 7, 6.9, 6.8, 6.7, 6.6, 6.5,
                    6.4, 6.3, 6.2, 6.2, 6.1, 6, 5.9, 5.8, 5.7, 5.6, 5.6, 5.5,
                    5.4, 5.4, 5.3, 5.2, 5.2, 5.2, 5.1, 5.1, 5, 4.9, 4.8, 4.8,
                    4.8, 4.7, 4.6, 4.5, 4.4, 4.4, 4.4, 4.3, 4.3, 4.2, 4.2, 4.1,
                    4, 4, 4, 4, 3.9, 3.8, 3.7, 3.7, 3.6, 3.6, 3.6, 3.5, 3.4,
                    3.4, 3.3, 3.3, 3.3, 3.2, 3.2, 3.1, 3, 2.9, 2.9, 2.9, 2.8,
                    2.8, 2.8, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.5,
                  ],
                  [
                    0, 28.1, 49.1, 9.7, 88, 85.4, 82.1, 79, 76.6, 73.1, 71.3,
                    69.1, 67.2, 65.1, 62.9, 61.6, 60.1, 58.3, 56.8, 56.5, 54.1,
                    52.6, 51.5, 50.3, 51.4, 47.9, 47.1, 46.3, 45.2, 44.3, 43.7,
                    42.7, 41.7, 41, 40.6, 39.4, 38.8, 38.3, 37.4, 36.8, 35.4,
                    36, 35.1, 34.6, 34.6, 33.6, 33.1, 32.6, 31.9, 31.6, 31.3,
                    30.8, 30.3, 30, 29.7, 29.2, 28.8, 28.4, 28.1, 27.9, 27.3,
                    26.9, 26.7, 26.4, 26.3, 25.8, 25.5, 25.2, 24.9, 24.5, 24.4,
                    24.1, 23.8, 23.6, 23.3, 23.1, 22.7, 22.6, 22.3, 22.2, 21.2,
                    20, 19.2, 18.3, 17.8, 17.1, 16.4, 15.9, 15.3, 15, 14.8,
                    14.4, 14.2, 14, 13.8, 13.5, 13.3, 13.1, 13, 12.8, 12.6,
                    12.3, 12.2, 12.1, 12, 11.8, 11.7, 11.4, 11.3, 11.1, 11,
                    10.9, 10.8, 10.7, 10.6, 10.4, 10.3, 10.2, 10.1, 10, 9.9,
                    9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7,
                    8.6, 8.5, 8.4, 8.4, 8.3, 8.2, 8.1, 8.1, 8, 7.9, 7.8, 7.8,
                    7.7, 7.7, 7.6, 7.5, 7.4, 7.4, 7.2, 7.1, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 5.9, 5.8, 5.8, 5.7, 5.7,
                    5.6, 5.5, 5.4, 5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.8, 4.8,
                    4.8, 4.8, 4.7, 4.6, 4.6, 4.5, 4.5, 4.4, 4.3, 4.3, 4.2, 4.2,
                    4.1, 4.1, 4, 4, 3.9, 3.9, 3.8, 3.8, 3.7, 3.7, 3.6, 3.5, 3.5,
                    3.4, 3.3, 3.3, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.9,
                    2.9, 2.8, 2.8, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.5, 2.5,
                    2.4, 2.4,
                  ],
                  [
                    0, 27.9, 49.1, 9.6, 88.2, 85.4, 82.2, 79, 76.4, 73, 71.3,
                    69.1, 67.2, 65, 62.9, 61.6, 60, 58.3, 56.7, 54.8, 53.9,
                    52.7, 51.5, 50.4, 51.5, 48, 47, 46.2, 45.2, 44.2, 43.8,
                    42.6, 41.8, 41, 40.7, 39.5, 38.9, 38.2, 37.6, 36.9, 35.7,
                    35.9, 35.1, 34.7, 34.1, 33.6, 33, 32.6, 32, 31.7, 31.4,
                    30.8, 30.4, 29.9, 29.5, 29.2, 28.8, 28.3, 28, 28, 27.3,
                    26.9, 26.7, 26.4, 26.3, 25.8, 25.5, 25.2, 24.9, 24.5, 24.3,
                    23.9, 23.7, 23.6, 23.2, 23, 22.8, 22.6, 22.3, 22.2, 21.2,
                    20.1, 19.4, 18.4, 17.8, 17, 16.4, 15.9, 15.3, 14.9, 14.7,
                    14.5, 14.3, 14, 13.7, 13.5, 13.3, 13.1, 12.9, 12.8, 12.7,
                    12.3, 12.2, 12, 11.9, 11.6, 11.5, 11.4, 11.3, 11.2, 11.1,
                    10.8, 10.7, 10.6, 10.5, 10.4, 10.3, 10.2, 10.1, 9.9, 9.8,
                    9.7, 9.6, 9.5, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.9, 8.8, 8.7,
                    8.6, 8.6, 8.5, 8.4, 8.3, 8.2, 8.1, 8, 7.9, 7.9, 7.8, 7.8,
                    7.7, 7.6, 7.5, 7.5, 7.4, 7.3, 7.3, 7.2, 7, 6.9, 6.8, 6.7,
                    6.6, 6.5, 6.4, 6.3, 6.2, 6.1, 6, 6, 5.9, 5.9, 5.8, 5.7, 5.6,
                    5.6, 5.5, 5.4, 5.3, 5.2, 5.1, 5.1, 5, 5, 4.9, 4.8, 4.8, 4.8,
                    4.8, 4.7, 4.6, 4.6, 4.5, 4.4, 4.3, 4.3, 4.3, 4.2, 4.1, 4,
                    3.9, 3.9, 3.9, 3.9, 3.8, 3.8, 3.7, 3.7, 3.6, 3.5, 3.5, 3.5,
                    3.4, 3.4, 3.3, 3.2, 3.2, 3.2, 3.2, 3.1, 3.1, 3, 2.9, 2.9,
                    2.8, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.7, 2.6, 2.6, 2.6, 2.6,
                    2.6, 2.5,
                  ],
                ],
              }),
            Ke = (function () {
              function t() {
                h()(this, t);
              }
              return (
                p()(t, null, [
                  {
                    key: 'setModuleExist',
                    value: function (t) {
                      this.isModuleExist = t;
                    },
                  },
                  {
                    key: 'init',
                    value: function () {
                      (this.bsStage = this.TEST_PAPER_STAGE_GET_VER),
                        (this.bgVer = 0),
                        (this.bgValCounts = 0),
                        (this.bgValCalCounts = 0),
                        (this.getvercounts = 0),
                        (this.bgPaperOk = 0),
                        (this.dataType = 0),
                        (this.bgData.length = 0),
                        (this.mCalculating = !1);
                    },
                  },
                  {
                    key: 'setPaperIndex',
                    value: function (t) {
                      this.pageColumnIndex = t;
                    },
                  },
                  {
                    key: 'checkBsPaper',
                    value: function () {
                      (this.bsStage = this.TEST_PAPER_STAGE_CHECK_PAPER),
                        it(
                          this.commandEngine.obtainCommandData(3, Array.of(2)),
                        );
                    },
                  },
                  {
                    key: 'stop',
                    value: function () {
                      (this.bsStage = this.TEST_PAPER_STAGE_IDLE),
                        (this.bsStageCheckPaperSub =
                          this.TEST_PAPER_STAGE_CHECK_PAPER_SUBIDLE),
                        this.stopBgAdc();
                    },
                  },
                  {
                    key: 'stopBgAdc',
                    value: function () {
                      it(this.commandEngine.obtainCommandData(3, Array.of(4)));
                    },
                  },
                  {
                    key: 'startBsAdc',
                    value: function () {
                      (this.bsStage = this.TEST_PAPER_STAGE_CHECK_BLOOD),
                        it(
                          this.commandEngine.obtainCommandData(3, Array.of(3)),
                        );
                    },
                  },
                  {
                    key: 'checkPaperStage',
                    value: function (t) {
                      switch (this.bsStageCheckPaperSub) {
                        case this.TEST_PAPER_STAGE_CHECK_PAPER_SUBIDLE:
                          t === this.EXCEPTION_PAPER_OUT
                            ? this.stop()
                            : this.startBsAdc(),
                            this.testPaperState(t);
                          break;
                        case this.TEST_PAPER_STAGE_CHECK_PAPER_SUBHAS:
                        case this.TEST_PAPER_STAGE_CHECK_PAPER_SUBNO:
                          t === this.EVENT_PAPER_IN && this.startBsAdc();
                      }
                    },
                  },
                  {
                    key: 'testPaperState',
                    value: function (t) {
                      t === this.EVENT_PAPER_IN
                        ? mt(1, 'Test strip inserted.')
                        : mt(2, 'The test paper is not inserted.');
                    },
                  },
                  {
                    key: 'paperStatusChange',
                    value: function (t) {
                      switch (this.bsStage) {
                        case this.TEST_PAPER_STAGE_CHECK_PAPER:
                          this.checkPaperStage(t);
                          break;
                        case this.TEST_PAPER_STAGE_CHECK_BLOOD:
                        case this.TEST_PAPER_STAGE_CAL:
                          t === this.EXCEPTION_PAPER_OUT &&
                            ((this.bsStage = this.TEST_PAPER_STAGE_IDLE),
                            (this.bsStageCheckPaperSub =
                              this.TEST_PAPER_STAGE_CHECK_PAPER_SUBIDLE),
                            this.stop());
                      }
                    },
                  },
                  {
                    key: 'paperReady',
                    value: function () {
                      mt(
                        3,
                        'Please drop the blood sample into the test paper.',
                      );
                    },
                  },
                  {
                    key: 'dealBsVal',
                    value: function (t) {
                      var e = 0,
                        r = (t[0] << 8) + (255 & t[1]);
                      if ((this.bgValCounts++, this.bgValCounts < 11))
                        this.bgPaperOk += r;
                      else if (11 === this.bgValCounts)
                        (this.bgPaperOk = (this.bgPaperOk + 4) / 10),
                          this.bgPaperOk === this.bgVer
                            ? this.paperReady()
                            : ((e =
                                (110 * this.bgVer) /
                                (this.bgPaperOk - this.bgVer)),
                              Math.abs(e) < 2e3
                                ? (mt(
                                    4,
                                    'The test paper has been used, please replace it with a new one.',
                                  ),
                                  this.stop())
                                : this.paperReady());
                      else if (
                        this.bgValCounts < 1200 &&
                        this.bsStage === this.TEST_PAPER_STAGE_CHECK_BLOOD
                      ) {
                        if (
                          (r - this.bgVer != 0 &&
                            (e = (110 * this.bgVer) / (r - this.bgVer)),
                          e < 4e3 && e > 0)
                        ) {
                          (this.bsStage = this.TEST_PAPER_STAGE_CAL),
                            mt(
                              5,
                              'A blood sample has been collected and the value is being calculated. Please wait.',
                            );
                          var n = this;
                          this.isStartCount ||
                            ((this.isStartCount = !0),
                            (this.countCount = setTimeout(function () {
                              n.timeout();
                            }, 18e4)));
                        }
                      } else if (this.bsStage === this.TEST_PAPER_STAGE_CAL) {
                        if (this.mCalculating) return;
                        this.bgValCalCounts++,
                          r - this.bgVer != 0 &&
                            (e = (110 * this.bgVer) / (r - this.bgVer)),
                          !this.getLongData &&
                            e < 4e3 &&
                            e > 0 &&
                            (this.bgData.length > 0 &&
                              e < Math.min.apply(null, this.bgData) &&
                              (this.bgData.length = 0),
                            this.bgData.push(e),
                            this.bgData.length === this.maxDataSize &&
                              (this.calBg(this.bgData),
                              (this.mCalculating = !0)),
                            1200 === this.bgValCalCounts &&
                              (this.isStartCount &&
                                ((this.isStartCount = !1),
                                clearTimeout(this.countCount)),
                              Tt(0),
                              this.stop()));
                      }
                    },
                  },
                  {
                    key: 'timeout',
                    value: function () {
                      this.stop(), mt(6, 'Calculate sample value timeout');
                    },
                  },
                  {
                    key: 'calBg',
                    value: function (t) {
                      var e = this.newCalBs(t);
                      this.isStartCount &&
                        ((this.isStartCount = !1),
                        clearTimeout(this.countCount)),
                        Tt(e),
                        this.stop();
                    },
                  },
                  {
                    key: 'newCalBs',
                    value: function (t) {
                      for (var e = 0, r = t[0], n = 96; n < 105; n++) e += t[n];
                      var i = 9.25 * ((e /= 9) - r) + r,
                        a = this.getBsValueResult(i);
                      return (
                        a >= 10 ? (a *= 0.75) : a >= 5 && (a *= 0.8),
                        Number(a.toFixed(1))
                      );
                    },
                  },
                  {
                    key: 'getBsValueResult',
                    value: function (t) {
                      var e = this.getBgValue(t);
                      return ze.pageData[this.pageColumnIndex][e];
                    },
                  },
                  {
                    key: 'getBgValue',
                    value: function (t) {
                      var e;
                      for (
                        e = 0;
                        e < this.ARRAY_SIZE && !(t < ze.bsRe[e]);
                        e++
                      );
                      return (
                        e > 0 &&
                          e < this.ARRAY_SIZE &&
                          ze.bsRe[e] - t > t - ze.bsRe[e - 1] &&
                          (e -= 1),
                        e < this.ARRAY_SIZE ? e : 300
                      );
                    },
                  },
                  {
                    key: 'dealData',
                    value: function (t) {
                      var e = this;
                      switch (t[0]) {
                        case 0:
                          this.setModuleExist(1 === t[1]);
                          break;
                        case 1:
                          (this.bgVer = (t[1] << 8) + (255 & t[2])),
                            this.bsStage === this.TEST_PAPER_STAGE_GET_VER &&
                              this.checkBsPaper();
                          break;
                        case 2:
                          it(
                            this.commandEngine.obtainCommandData(
                              16,
                              Array.of(131, t[1]),
                            ),
                          ),
                            setTimeout(function () {
                              e.paperStatusChange(t[1]);
                            }, 200);
                          break;
                        case 3:
                          this.dataType === this.TEST_PAPER_DATA_TYPE_NORMAL
                            ? (this.bsStage !==
                                this.TEST_PAPER_STAGE_CHECK_BLOOD &&
                                this.bsStage !== this.TEST_PAPER_STAGE_CAL) ||
                              ((this.dataParse = t.slice(1, 3)),
                              0 === this.bgVer && (this.bgVer = 619),
                              this.dealBsVal(this.dataParse))
                            : this.dataType ===
                              this.TEST_PAPER_DATA_TYPE_SET_VER
                            ? ((this.dataParse = t.slice(1, 3)),
                              this.dealBgValSetVer(this.dataParse))
                            : this.dataType ===
                                this.TEST_PAPER_DATA_TYPE_JIAOYAN &&
                              ((this.dataParse = t.slice(1, 3)),
                              this.dealBsValCalibration(this.dataParse));
                      }
                    },
                  },
                  {
                    key: 'dealBgValSetVer',
                    value: function (t) {
                      var e = (t[0] << 8) + (255 & t[1]);
                      this.bgValCounts++,
                        this.bgValCounts < 11
                          ? (this.bgVer += e)
                          : 11 === this.bgValCounts &&
                            ((this.bgVer = (this.bgVer + 4) / 10),
                            console.log('dealBgValSetVer', this.bgVer),
                            this.stopBgAdc());
                    },
                  },
                  {
                    key: 'dealBsValCalibration',
                    value: function (t) {
                      var e = 0;
                      if ((this.bgValCounts++, 1 === this.bgValCounts)) {
                        this.stopBgAdc();
                        var r = (t[0] << 8) + (255 & t[1]);
                        r - this.bgVer != 0 &&
                          (e = (110 * this.bgVer) / (r - this.bgVer)),
                          console.log('bgResistance=', e);
                      }
                    },
                  },
                  {
                    key: 'isNotANumber',
                    value: function (t) {
                      return 'NaN' !== parseFloat(t).toString();
                    },
                  },
                  {
                    key: 'postMessage',
                    value: function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : '',
                        r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                      self.postMessage({url: t, message: e, data: r});
                    },
                  },
                ]),
                t
              );
            })();
          function Xe(t) {
            var e = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ('function' == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = k()(t);
              if (e) {
                var i = k()(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return O()(this, r);
            };
          }
          (Ke.TEST_PAPER_STAGE_IDLE = 0),
            (Ke.EXCEPTION_PAPER_OUT = 0),
            (Ke.TEST_PAPER_STAGE_CHECK_PAPER_SUBIDLE = 0),
            (Ke.TEST_PAPER_DATA_TYPE_NORMAL = 0),
            (Ke.TEST_PAPER_STAGE_GET_VER = 1),
            (Ke.EVENT_PAPER_IN = 1),
            (Ke.TEST_PAPER_DATA_TYPE_SET_VER = 1),
            (Ke.TEST_PAPER_STAGE_CHECK_PAPER_SUBHAS = 1),
            (Ke.TEST_PAPER_STAGE_CHECK_PAPER = 2),
            (Ke.TEST_PAPER_STAGE_CHECK_PAPER_SUBNO = 2),
            (Ke.TEST_PAPER_DATA_TYPE_JIAOYAN = 2),
            (Ke.TEST_PAPER_STAGE_CHECK_BLOOD = 3),
            (Ke.TEST_PAPER_STAGE_CAL = 4),
            (Ke.dataParse = Array.of()),
            (Ke.bgData = Array.of()),
            (Ke.isModuleExist = !1),
            (Ke.getLongData = !1),
            (Ke.bgVer = 0),
            (Ke.bsStage = 0),
            (Ke.bgValCounts = 0),
            (Ke.bgValCalCounts = 0),
            (Ke.getvercounts = 0),
            (Ke.bgPaperOk = 0),
            (Ke.dataType = 0),
            (Ke.bsStageCheckPaperSub = 0),
            (Ke.maxDataSize = 110),
            (Ke.ARRAY_SIZE = 233),
            (Ke.pageColumnIndex = 0),
            (Ke.isStartCount = !1),
            (Ke.countCount = null),
            (Ke.mCalculating = !1),
            (Ke.commandEngine = new B());
          var Ze = (function (t) {
              D()(n, t);
              var e,
                r = Xe(n);
              function n() {
                return h()(this, n), r.call(this);
              }
              return (
                p()(n, [
                  {
                    key: 'init',
                    value: function () {
                      Ke.init();
                    },
                  },
                  {
                    key: 'setPaperModel',
                    value: function (t) {
                      Ke.setPaperIndex(t);
                    },
                  },
                  {
                    key: 'run',
                    value:
                      ((e = s()(
                        a().mark(function t(e) {
                          return a().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  Ke.dealData(e.data);
                                case 1:
                                case 'end':
                                  return t.stop();
                              }
                          }, t);
                        }),
                      )),
                      function (t) {
                        return e.apply(this, arguments);
                      }),
                  },
                ]),
                n
              );
            })(Et),
            qe = null,
            Qe = new B(),
            $e = new R(),
            Je = new Dt(),
            tr = new $t(),
            er = new Zt(),
            rr = new Ze(),
            nr = new ee(),
            ir = null,
            ar = null,
            or = null,
            sr = null,
            ur = null,
            cr = null,
            fr = null,
            hr = null,
            lr = function () {
              null !== hr && (rt(hr), (hr = null));
            },
            pr = function (t) {
              if ((console.log('stop Detect mode='.concat(qe)), null === qe))
                return !0;
              switch ((it(Qe.stopDetect(t)), t)) {
                case v.BP:
                  ot(y.END);
                  break;
                case v.BT:
                  at(y.END);
                  break;
                case v.OX:
                  ut(y.END);
                  break;
                case v.ECG:
                  lt(y.END), Ye.stopEcg();
                  break;
                case v.BG:
                  At(y.END);
                  break;
                case v.BATTERY:
                  ht(y.END);
              }
              return nt(null), !0;
            },
            vr = function () {
              null != ir && (rt(ir), (ir = null));
            },
            yr = function () {
              var t;
              null != ar &&
                ((t = ar),
                q.includes(t) &&
                  (q = q.filter(function (e) {
                    return e !== t;
                  })),
                (ar = null));
            },
            dr = function () {
              var t;
              null !== or &&
                ((t = or),
                Z.includes(t) &&
                  (Z = Z.filter(function (e) {
                    return e !== t;
                  })),
                (or = null));
            },
            gr = function () {
              var t;
              null !== sr &&
                ((t = sr),
                Q.includes(t) &&
                  (Q = Q.filter(function (e) {
                    return e !== t;
                  })),
                (sr = null));
            },
            Ar = function () {
              var t;
              null !== ur &&
                ((t = ur),
                $.includes(t) &&
                  ($ = $.filter(function (e) {
                    return e !== t;
                  })),
                (ur = null));
            },
            mr = function () {
              var t;
              null != cr &&
                ((t = cr),
                J.includes(t) &&
                  (J = J.filter(function (e) {
                    return e !== t;
                  })));
            },
            Tr = function () {
              var t;
              null != fr &&
                ((t = fr),
                tt.includes(t) &&
                  (tt = tt.filter(function (e) {
                    return e !== t;
                  })));
            },
            Er = {
              initSdk: function (t) {
                return (
                  (ir = t),
                  null != hr && lr(),
                  et(
                    (hr = {
                      onModeChange: function (t) {
                        var e;
                        (qe = t),
                          null === (e = ir) ||
                            void 0 === e ||
                            e.onModeChange(t);
                      },
                      onDataPost: function (t) {
                        var e;
                        return null === (e = ir) || void 0 === e
                          ? void 0
                          : e.onDataPost(t);
                      },
                      onException: function (t) {
                        return ir.onException(t);
                      },
                    }),
                  ),
                  'V3.1'
                );
              },
              unInitSdk: lr,
              startDetect: function (t) {
                switch (
                  (console.log('startDetect:'.concat(t, ',origin:').concat(qe)),
                  null !== qe && pr(qe),
                  it(Qe.startDetect(t)),
                  t)
                ) {
                  case v.BP:
                    ot(y.START);
                    break;
                  case v.BT:
                    at(y.START);
                    break;
                  case v.OX:
                    ut(y.START), er.init();
                    break;
                  case v.ECG:
                    lt(y.START), Ye.startEcg();
                    break;
                  case v.BG:
                    At(y.START), rr.init();
                    break;
                  case v.BATTERY:
                    ht(y.START);
                }
                return nt(t), !0;
              },
              stopDetect: pr,
              pushRawData: function (t) {
                if (qe !== v.ECG) {
                  var e = $e.generalUnpackRawData(t);
                  if (e instanceof S)
                    switch (e.type) {
                      case 132:
                        er.run(e);
                        break;
                      case 129:
                        Je.run(e);
                        break;
                      case 130:
                        tr.run(e);
                        break;
                      case 131:
                        rr.run(e);
                        break;
                      case 143:
                        nr.run(e);
                    }
                  else
                    e instanceof b
                      ? console.log('happen the error '.concat(e.toString()))
                      : console.log('have not data result=' + e);
                } else Ye.dealEcg(t);
              },
              setTestPaperModel: function (t) {
                rr.setPaperModel(t);
              },
              registerBPListener: function (t) {
                var e;
                yr(), (e = ar = t), q.includes(e) || q.push(e);
              },
              unRegisterBPListener: yr,
              registerBTListener: function (t) {
                var e;
                dr(), (e = or = t), Z.includes(e) || Z.push(e);
              },
              unRegisterBTListener: dr,
              registerOXListener: function (t) {
                var e;
                gr(), (e = sr = t), Q.includes(e) || Q.push(e);
              },
              unRegisterOXListener: gr,
              registerECGListener: function (t) {
                var e;
                Ar(), (e = ur = t), $.includes(e) || $.push(e);
              },
              unRegisterECGListener: Ar,
              registerAPPListener: function (t) {
                vr(), et((ir = t));
              },
              unRegisterAPPListener: vr,
              registerBGListener: function (t) {
                mr(),
                  (cr = t),
                  (function (t) {
                    J.includes(t) || J.push(t);
                  })(t);
              },
              unRegisterBGListener: mr,
              registerBatteryListener: function (t) {
                var e;
                Tr(), (fr = t), (e = t), tt.includes(e) || tt.push(e);
              },
              unRegisterBatteryListener: Tr,
            };
        },
        3099: function (t) {
          t.exports = function (t) {
            if ('function' != typeof t)
              throw TypeError(String(t) + ' is not a function');
            return t;
          };
        },
        6077: function (t, e, r) {
          var n = r(111);
          t.exports = function (t) {
            if (!n(t) && null !== t)
              throw TypeError("Can't set " + String(t) + ' as a prototype');
            return t;
          };
        },
        1223: function (t, e, r) {
          var n = r(5112),
            i = r(30),
            a = r(3070),
            o = n('unscopables'),
            s = Array.prototype;
          null == s[o] && a.f(s, o, {configurable: !0, value: i(null)}),
            (t.exports = function (t) {
              s[o][t] = !0;
            });
        },
        5787: function (t) {
          t.exports = function (t, e, r) {
            if (!(t instanceof e))
              throw TypeError('Incorrect ' + (r ? r + ' ' : '') + 'invocation');
            return t;
          };
        },
        9670: function (t, e, r) {
          var n = r(111);
          t.exports = function (t) {
            if (!n(t)) throw TypeError(String(t) + ' is not an object');
            return t;
          };
        },
        4019: function (t) {
          t.exports =
            'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView;
        },
        260: function (t, e, r) {
          'use strict';
          var n,
            i = r(4019),
            a = r(9781),
            o = r(7854),
            s = r(111),
            u = r(6656),
            c = r(648),
            f = r(8880),
            h = r(1320),
            l = r(3070).f,
            p = r(9518),
            v = r(7674),
            y = r(5112),
            d = r(9711),
            g = o.Int8Array,
            A = g && g.prototype,
            m = o.Uint8ClampedArray,
            T = m && m.prototype,
            E = g && p(g),
            b = A && p(A),
            S = Object.prototype,
            P = S.isPrototypeOf,
            _ = y('toStringTag'),
            w = d('TYPED_ARRAY_TAG'),
            x = i && !!v && 'Opera' !== c(o.opera),
            R = !1,
            I = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8,
            },
            D = {BigInt64Array: 8, BigUint64Array: 8},
            C = function (t) {
              if (!s(t)) return !1;
              var e = c(t);
              return u(I, e) || u(D, e);
            };
          for (n in I) o[n] || (x = !1);
          if (
            (!x || 'function' != typeof E || E === Function.prototype) &&
            ((E = function () {
              throw TypeError('Incorrect invocation');
            }),
            x)
          )
            for (n in I) o[n] && v(o[n], E);
          if ((!x || !b || b === S) && ((b = E.prototype), x))
            for (n in I) o[n] && v(o[n].prototype, b);
          if ((x && p(T) !== b && v(T, b), a && !u(b, _)))
            for (n in ((R = !0),
            l(b, _, {
              get: function () {
                return s(this) ? this[w] : void 0;
              },
            }),
            I))
              o[n] && f(o[n], w, n);
          t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: x,
            TYPED_ARRAY_TAG: R && w,
            aTypedArray: function (t) {
              if (C(t)) return t;
              throw TypeError('Target is not a typed array');
            },
            aTypedArrayConstructor: function (t) {
              if (v) {
                if (P.call(E, t)) return t;
              } else
                for (var e in I)
                  if (u(I, n)) {
                    var r = o[e];
                    if (r && (t === r || P.call(r, t))) return t;
                  }
              throw TypeError('Target is not a typed array constructor');
            },
            exportTypedArrayMethod: function (t, e, r) {
              if (a) {
                if (r)
                  for (var n in I) {
                    var i = o[n];
                    i && u(i.prototype, t) && delete i.prototype[t];
                  }
                (b[t] && !r) || h(b, t, r ? e : (x && A[t]) || e);
              }
            },
            exportTypedArrayStaticMethod: function (t, e, r) {
              var n, i;
              if (a) {
                if (v) {
                  if (r) for (n in I) (i = o[n]) && u(i, t) && delete i[t];
                  if (E[t] && !r) return;
                  try {
                    return h(E, t, r ? e : (x && g[t]) || e);
                  } catch (t) {}
                }
                for (n in I) !(i = o[n]) || (i[t] && !r) || h(i, t, e);
              }
            },
            isView: function (t) {
              if (!s(t)) return !1;
              var e = c(t);
              return 'DataView' === e || u(I, e) || u(D, e);
            },
            isTypedArray: C,
            TypedArray: E,
            TypedArrayPrototype: b,
          };
        },
        3331: function (t, e, r) {
          'use strict';
          var n = r(7854),
            i = r(9781),
            a = r(4019),
            o = r(8880),
            s = r(2248),
            u = r(7293),
            c = r(5787),
            f = r(9958),
            h = r(7466),
            l = r(7067),
            p = r(1179),
            v = r(9518),
            y = r(7674),
            d = r(8006).f,
            g = r(3070).f,
            A = r(1285),
            m = r(8003),
            T = r(9909),
            E = T.get,
            b = T.set,
            S = 'ArrayBuffer',
            P = 'DataView',
            _ = 'Wrong index',
            w = n.ArrayBuffer,
            x = w,
            R = n.DataView,
            I = R && R.prototype,
            D = Object.prototype,
            C = n.RangeError,
            O = p.pack,
            N = p.unpack,
            k = function (t) {
              return [255 & t];
            },
            L = function (t) {
              return [255 & t, (t >> 8) & 255];
            },
            B = function (t) {
              return [
                255 & t,
                (t >> 8) & 255,
                (t >> 16) & 255,
                (t >> 24) & 255,
              ];
            },
            M = function (t) {
              return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
            },
            G = function (t) {
              return O(t, 23, 4);
            },
            F = function (t) {
              return O(t, 52, 8);
            },
            U = function (t, e) {
              g(t.prototype, e, {
                get: function () {
                  return E(this)[e];
                },
              });
            },
            j = function (t, e, r, n) {
              var i = l(r),
                a = E(t);
              if (i + e > a.byteLength) throw C(_);
              var o = E(a.buffer).bytes,
                s = i + a.byteOffset,
                u = o.slice(s, s + e);
              return n ? u : u.reverse();
            },
            V = function (t, e, r, n, i, a) {
              var o = l(r),
                s = E(t);
              if (o + e > s.byteLength) throw C(_);
              for (
                var u = E(s.buffer).bytes,
                  c = o + s.byteOffset,
                  f = n(+i),
                  h = 0;
                h < e;
                h++
              )
                u[c + h] = f[a ? h : e - h - 1];
            };
          if (a) {
            if (
              !u(function () {
                w(1);
              }) ||
              !u(function () {
                new w(-1);
              }) ||
              u(function () {
                return new w(), new w(1.5), new w(NaN), w.name != S;
              })
            ) {
              for (
                var H,
                  W = ((x = function (t) {
                    return c(this, x), new w(l(t));
                  }).prototype = w.prototype),
                  Y = d(w),
                  z = 0;
                Y.length > z;

              )
                (H = Y[z++]) in x || o(x, H, w[H]);
              W.constructor = x;
            }
            y && v(I) !== D && y(I, D);
            var K = new R(new x(2)),
              X = I.setInt8;
            K.setInt8(0, 2147483648),
              K.setInt8(1, 2147483649),
              (!K.getInt8(0) && K.getInt8(1)) ||
                s(
                  I,
                  {
                    setInt8: function (t, e) {
                      X.call(this, t, (e << 24) >> 24);
                    },
                    setUint8: function (t, e) {
                      X.call(this, t, (e << 24) >> 24);
                    },
                  },
                  {unsafe: !0},
                );
          } else
            (x = function (t) {
              c(this, x, S);
              var e = l(t);
              b(this, {bytes: A.call(new Array(e), 0), byteLength: e}),
                i || (this.byteLength = e);
            }),
              (R = function (t, e, r) {
                c(this, R, P), c(t, x, P);
                var n = E(t).byteLength,
                  a = f(e);
                if (a < 0 || a > n) throw C('Wrong offset');
                if (a + (r = void 0 === r ? n - a : h(r)) > n)
                  throw C('Wrong length');
                b(this, {buffer: t, byteLength: r, byteOffset: a}),
                  i ||
                    ((this.buffer = t),
                    (this.byteLength = r),
                    (this.byteOffset = a));
              }),
              i &&
                (U(x, 'byteLength'),
                U(R, 'buffer'),
                U(R, 'byteLength'),
                U(R, 'byteOffset')),
              s(R.prototype, {
                getInt8: function (t) {
                  return (j(this, 1, t)[0] << 24) >> 24;
                },
                getUint8: function (t) {
                  return j(this, 1, t)[0];
                },
                getInt16: function (t) {
                  var e = j(
                    this,
                    2,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0,
                  );
                  return (((e[1] << 8) | e[0]) << 16) >> 16;
                },
                getUint16: function (t) {
                  var e = j(
                    this,
                    2,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0,
                  );
                  return (e[1] << 8) | e[0];
                },
                getInt32: function (t) {
                  return M(
                    j(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
                  );
                },
                getUint32: function (t) {
                  return (
                    M(
                      j(
                        this,
                        4,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0,
                      ),
                    ) >>> 0
                  );
                },
                getFloat32: function (t) {
                  return N(
                    j(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
                    23,
                  );
                },
                getFloat64: function (t) {
                  return N(
                    j(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
                    52,
                  );
                },
                setInt8: function (t, e) {
                  V(this, 1, t, k, e);
                },
                setUint8: function (t, e) {
                  V(this, 1, t, k, e);
                },
                setInt16: function (t, e) {
                  V(
                    this,
                    2,
                    t,
                    L,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
                setUint16: function (t, e) {
                  V(
                    this,
                    2,
                    t,
                    L,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
                setInt32: function (t, e) {
                  V(
                    this,
                    4,
                    t,
                    B,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
                setUint32: function (t, e) {
                  V(
                    this,
                    4,
                    t,
                    B,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
                setFloat32: function (t, e) {
                  V(
                    this,
                    4,
                    t,
                    G,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
                setFloat64: function (t, e) {
                  V(
                    this,
                    8,
                    t,
                    F,
                    e,
                    arguments.length > 2 ? arguments[2] : void 0,
                  );
                },
              });
          m(x, S), m(R, P), (t.exports = {ArrayBuffer: x, DataView: R});
        },
        1048: function (t, e, r) {
          'use strict';
          var n = r(7908),
            i = r(1400),
            a = r(7466),
            o = Math.min;
          t.exports =
            [].copyWithin ||
            function (t, e) {
              var r = n(this),
                s = a(r.length),
                u = i(t, s),
                c = i(e, s),
                f = arguments.length > 2 ? arguments[2] : void 0,
                h = o((void 0 === f ? s : i(f, s)) - c, s - u),
                l = 1;
              for (
                c < u && u < c + h && ((l = -1), (c += h - 1), (u += h - 1));
                h-- > 0;

              )
                c in r ? (r[u] = r[c]) : delete r[u], (u += l), (c += l);
              return r;
            };
        },
        1285: function (t, e, r) {
          'use strict';
          var n = r(7908),
            i = r(1400),
            a = r(7466);
          t.exports = function (t) {
            for (
              var e = n(this),
                r = a(e.length),
                o = arguments.length,
                s = i(o > 1 ? arguments[1] : void 0, r),
                u = o > 2 ? arguments[2] : void 0,
                c = void 0 === u ? r : i(u, r);
              c > s;

            )
              e[s++] = t;
            return e;
          };
        },
        8533: function (t, e, r) {
          'use strict';
          var n = r(2092).forEach,
            i = r(9341),
            a = r(9207),
            o = i('forEach'),
            s = a('forEach');
          t.exports =
            o && s
              ? [].forEach
              : function (t) {
                  return n(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0,
                  );
                };
        },
        8457: function (t, e, r) {
          'use strict';
          var n = r(9974),
            i = r(7908),
            a = r(3411),
            o = r(7659),
            s = r(7466),
            u = r(6135),
            c = r(1246);
          t.exports = function (t) {
            var e,
              r,
              f,
              h,
              l,
              p,
              v = i(t),
              y = 'function' == typeof this ? this : Array,
              d = arguments.length,
              g = d > 1 ? arguments[1] : void 0,
              A = void 0 !== g,
              m = c(v),
              T = 0;
            if (
              (A && (g = n(g, d > 2 ? arguments[2] : void 0, 2)),
              null == m || (y == Array && o(m)))
            )
              for (r = new y((e = s(v.length))); e > T; T++)
                (p = A ? g(v[T], T) : v[T]), u(r, T, p);
            else
              for (
                l = (h = m.call(v)).next, r = new y();
                !(f = l.call(h)).done;
                T++
              )
                (p = A ? a(h, g, [f.value, T], !0) : f.value), u(r, T, p);
            return (r.length = T), r;
          };
        },
        1318: function (t, e, r) {
          var n = r(5656),
            i = r(7466),
            a = r(1400),
            o = function (t) {
              return function (e, r, o) {
                var s,
                  u = n(e),
                  c = i(u.length),
                  f = a(o, c);
                if (t && r != r) {
                  for (; c > f; ) if ((s = u[f++]) != s) return !0;
                } else
                  for (; c > f; f++)
                    if ((t || f in u) && u[f] === r) return t || f || 0;
                return !t && -1;
              };
            };
          t.exports = {includes: o(!0), indexOf: o(!1)};
        },
        2092: function (t, e, r) {
          var n = r(9974),
            i = r(8361),
            a = r(7908),
            o = r(7466),
            s = r(5417),
            u = [].push,
            c = function (t) {
              var e = 1 == t,
                r = 2 == t,
                c = 3 == t,
                f = 4 == t,
                h = 6 == t,
                l = 7 == t,
                p = 5 == t || h;
              return function (v, y, d, g) {
                for (
                  var A,
                    m,
                    T = a(v),
                    E = i(T),
                    b = n(y, d, 3),
                    S = o(E.length),
                    P = 0,
                    _ = g || s,
                    w = e ? _(v, S) : r || l ? _(v, 0) : void 0;
                  S > P;
                  P++
                )
                  if ((p || P in E) && ((m = b((A = E[P]), P, T)), t))
                    if (e) w[P] = m;
                    else if (m)
                      switch (t) {
                        case 3:
                          return !0;
                        case 5:
                          return A;
                        case 6:
                          return P;
                        case 2:
                          u.call(w, A);
                      }
                    else
                      switch (t) {
                        case 4:
                          return !1;
                        case 7:
                          u.call(w, A);
                      }
                return h ? -1 : c || f ? f : w;
              };
            };
          t.exports = {
            forEach: c(0),
            map: c(1),
            filter: c(2),
            some: c(3),
            every: c(4),
            find: c(5),
            findIndex: c(6),
            filterOut: c(7),
          };
        },
        6583: function (t, e, r) {
          'use strict';
          var n = r(5656),
            i = r(9958),
            a = r(7466),
            o = r(9341),
            s = r(9207),
            u = Math.min,
            c = [].lastIndexOf,
            f = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
            h = o('lastIndexOf'),
            l = s('indexOf', {ACCESSORS: !0, 1: 0}),
            p = f || !h || !l;
          t.exports = p
            ? function (t) {
                if (f) return c.apply(this, arguments) || 0;
                var e = n(this),
                  r = a(e.length),
                  o = r - 1;
                for (
                  arguments.length > 1 && (o = u(o, i(arguments[1]))),
                    o < 0 && (o = r + o);
                  o >= 0;
                  o--
                )
                  if (o in e && e[o] === t) return o || 0;
                return -1;
              }
            : c;
        },
        1194: function (t, e, r) {
          var n = r(7293),
            i = r(5112),
            a = r(7392),
            o = i('species');
          t.exports = function (t) {
            return (
              a >= 51 ||
              !n(function () {
                var e = [];
                return (
                  ((e.constructor = {})[o] = function () {
                    return {foo: 1};
                  }),
                  1 !== e[t](Boolean).foo
                );
              })
            );
          };
        },
        9341: function (t, e, r) {
          'use strict';
          var n = r(7293);
          t.exports = function (t, e) {
            var r = [][t];
            return (
              !!r &&
              n(function () {
                r.call(
                  null,
                  e ||
                    function () {
                      throw 1;
                    },
                  1,
                );
              })
            );
          };
        },
        9207: function (t, e, r) {
          var n = r(9781),
            i = r(7293),
            a = r(6656),
            o = Object.defineProperty,
            s = {},
            u = function (t) {
              throw t;
            };
          t.exports = function (t, e) {
            if (a(s, t)) return s[t];
            e || (e = {});
            var r = [][t],
              c = !!a(e, 'ACCESSORS') && e.ACCESSORS,
              f = a(e, 0) ? e[0] : u,
              h = a(e, 1) ? e[1] : void 0;
            return (s[t] =
              !!r &&
              !i(function () {
                if (c && !n) return !0;
                var t = {length: -1};
                c ? o(t, 1, {enumerable: !0, get: u}) : (t[1] = 1),
                  r.call(t, f, h);
              }));
          };
        },
        3671: function (t, e, r) {
          var n = r(3099),
            i = r(7908),
            a = r(8361),
            o = r(7466),
            s = function (t) {
              return function (e, r, s, u) {
                n(r);
                var c = i(e),
                  f = a(c),
                  h = o(c.length),
                  l = t ? h - 1 : 0,
                  p = t ? -1 : 1;
                if (s < 2)
                  for (;;) {
                    if (l in f) {
                      (u = f[l]), (l += p);
                      break;
                    }
                    if (((l += p), t ? l < 0 : h <= l))
                      throw TypeError(
                        'Reduce of empty array with no initial value',
                      );
                  }
                for (; t ? l >= 0 : h > l; l += p)
                  l in f && (u = r(u, f[l], l, c));
                return u;
              };
            };
          t.exports = {left: s(!1), right: s(!0)};
        },
        5417: function (t, e, r) {
          var n = r(111),
            i = r(3157),
            a = r(5112)('species');
          t.exports = function (t, e) {
            var r;
            return (
              i(t) &&
                ('function' != typeof (r = t.constructor) ||
                (r !== Array && !i(r.prototype))
                  ? n(r) && null === (r = r[a]) && (r = void 0)
                  : (r = void 0)),
              new (void 0 === r ? Array : r)(0 === e ? 0 : e)
            );
          };
        },
        3411: function (t, e, r) {
          var n = r(9670),
            i = r(9212);
          t.exports = function (t, e, r, a) {
            try {
              return a ? e(n(r)[0], r[1]) : e(r);
            } catch (e) {
              throw (i(t), e);
            }
          };
        },
        7072: function (t, e, r) {
          var n = r(5112)('iterator'),
            i = !1;
          try {
            var a = 0,
              o = {
                next: function () {
                  return {done: !!a++};
                },
                return: function () {
                  i = !0;
                },
              };
            (o[n] = function () {
              return this;
            }),
              Array.from(o, function () {
                throw 2;
              });
          } catch (t) {}
          t.exports = function (t, e) {
            if (!e && !i) return !1;
            var r = !1;
            try {
              var a = {};
              (a[n] = function () {
                return {
                  next: function () {
                    return {done: (r = !0)};
                  },
                };
              }),
                t(a);
            } catch (t) {}
            return r;
          };
        },
        4326: function (t) {
          var e = {}.toString;
          t.exports = function (t) {
            return e.call(t).slice(8, -1);
          };
        },
        648: function (t, e, r) {
          var n = r(1694),
            i = r(4326),
            a = r(5112)('toStringTag'),
            o =
              'Arguments' ==
              i(
                (function () {
                  return arguments;
                })(),
              );
          t.exports = n
            ? i
            : function (t) {
                var e, r, n;
                return void 0 === t
                  ? 'Undefined'
                  : null === t
                  ? 'Null'
                  : 'string' ==
                    typeof (r = (function (t, e) {
                      try {
                        return t[e];
                      } catch (t) {}
                    })((e = Object(t)), a))
                  ? r
                  : o
                  ? i(e)
                  : 'Object' == (n = i(e)) && 'function' == typeof e.callee
                  ? 'Arguments'
                  : n;
              };
        },
        5631: function (t, e, r) {
          'use strict';
          var n = r(3070).f,
            i = r(30),
            a = r(2248),
            o = r(9974),
            s = r(5787),
            u = r(408),
            c = r(654),
            f = r(6340),
            h = r(9781),
            l = r(2423).fastKey,
            p = r(9909),
            v = p.set,
            y = p.getterFor;
          t.exports = {
            getConstructor: function (t, e, r, c) {
              var f = t(function (t, n) {
                  s(t, f, e),
                    v(t, {
                      type: e,
                      index: i(null),
                      first: void 0,
                      last: void 0,
                      size: 0,
                    }),
                    h || (t.size = 0),
                    null != n && u(n, t[c], {that: t, AS_ENTRIES: r});
                }),
                p = y(e),
                d = function (t, e, r) {
                  var n,
                    i,
                    a = p(t),
                    o = g(t, e);
                  return (
                    o
                      ? (o.value = r)
                      : ((a.last = o =
                          {
                            index: (i = l(e, !0)),
                            key: e,
                            value: r,
                            previous: (n = a.last),
                            next: void 0,
                            removed: !1,
                          }),
                        a.first || (a.first = o),
                        n && (n.next = o),
                        h ? a.size++ : t.size++,
                        'F' !== i && (a.index[i] = o)),
                    t
                  );
                },
                g = function (t, e) {
                  var r,
                    n = p(t),
                    i = l(e);
                  if ('F' !== i) return n.index[i];
                  for (r = n.first; r; r = r.next) if (r.key == e) return r;
                };
              return (
                a(f.prototype, {
                  clear: function () {
                    for (var t = p(this), e = t.index, r = t.first; r; )
                      (r.removed = !0),
                        r.previous && (r.previous = r.previous.next = void 0),
                        delete e[r.index],
                        (r = r.next);
                    (t.first = t.last = void 0),
                      h ? (t.size = 0) : (this.size = 0);
                  },
                  delete: function (t) {
                    var e = this,
                      r = p(e),
                      n = g(e, t);
                    if (n) {
                      var i = n.next,
                        a = n.previous;
                      delete r.index[n.index],
                        (n.removed = !0),
                        a && (a.next = i),
                        i && (i.previous = a),
                        r.first == n && (r.first = i),
                        r.last == n && (r.last = a),
                        h ? r.size-- : e.size--;
                    }
                    return !!n;
                  },
                  forEach: function (t) {
                    for (
                      var e,
                        r = p(this),
                        n = o(
                          t,
                          arguments.length > 1 ? arguments[1] : void 0,
                          3,
                        );
                      (e = e ? e.next : r.first);

                    )
                      for (n(e.value, e.key, this); e && e.removed; )
                        e = e.previous;
                  },
                  has: function (t) {
                    return !!g(this, t);
                  },
                }),
                a(
                  f.prototype,
                  r
                    ? {
                        get: function (t) {
                          var e = g(this, t);
                          return e && e.value;
                        },
                        set: function (t, e) {
                          return d(this, 0 === t ? 0 : t, e);
                        },
                      }
                    : {
                        add: function (t) {
                          return d(this, (t = 0 === t ? 0 : t), t);
                        },
                      },
                ),
                h &&
                  n(f.prototype, 'size', {
                    get: function () {
                      return p(this).size;
                    },
                  }),
                f
              );
            },
            setStrong: function (t, e, r) {
              var n = e + ' Iterator',
                i = y(e),
                a = y(n);
              c(
                t,
                e,
                function (t, e) {
                  v(this, {
                    type: n,
                    target: t,
                    state: i(t),
                    kind: e,
                    last: void 0,
                  });
                },
                function () {
                  for (
                    var t = a(this), e = t.kind, r = t.last;
                    r && r.removed;

                  )
                    r = r.previous;
                  return t.target && (t.last = r = r ? r.next : t.state.first)
                    ? 'keys' == e
                      ? {value: r.key, done: !1}
                      : 'values' == e
                      ? {value: r.value, done: !1}
                      : {value: [r.key, r.value], done: !1}
                    : ((t.target = void 0), {value: void 0, done: !0});
                },
                r ? 'entries' : 'values',
                !r,
                !0,
              ),
                f(e);
            },
          };
        },
        7710: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7854),
            a = r(4705),
            o = r(1320),
            s = r(2423),
            u = r(408),
            c = r(5787),
            f = r(111),
            h = r(7293),
            l = r(7072),
            p = r(8003),
            v = r(9587);
          t.exports = function (t, e, r) {
            var y = -1 !== t.indexOf('Map'),
              d = -1 !== t.indexOf('Weak'),
              g = y ? 'set' : 'add',
              A = i[t],
              m = A && A.prototype,
              T = A,
              E = {},
              b = function (t) {
                var e = m[t];
                o(
                  m,
                  t,
                  'add' == t
                    ? function (t) {
                        return e.call(this, 0 === t ? 0 : t), this;
                      }
                    : 'delete' == t
                    ? function (t) {
                        return !(d && !f(t)) && e.call(this, 0 === t ? 0 : t);
                      }
                    : 'get' == t
                    ? function (t) {
                        return d && !f(t)
                          ? void 0
                          : e.call(this, 0 === t ? 0 : t);
                      }
                    : 'has' == t
                    ? function (t) {
                        return !(d && !f(t)) && e.call(this, 0 === t ? 0 : t);
                      }
                    : function (t, r) {
                        return e.call(this, 0 === t ? 0 : t, r), this;
                      },
                );
              };
            if (
              a(
                t,
                'function' != typeof A ||
                  !(
                    d ||
                    (m.forEach &&
                      !h(function () {
                        new A().entries().next();
                      }))
                  ),
              )
            )
              (T = r.getConstructor(e, t, y, g)), (s.REQUIRED = !0);
            else if (a(t, !0)) {
              var S = new T(),
                P = S[g](d ? {} : -0, 1) != S,
                _ = h(function () {
                  S.has(1);
                }),
                w = l(function (t) {
                  new A(t);
                }),
                x =
                  !d &&
                  h(function () {
                    for (var t = new A(), e = 5; e--; ) t[g](e, e);
                    return !t.has(-0);
                  });
              w ||
                (((T = e(function (e, r) {
                  c(e, T, t);
                  var n = v(new A(), e, T);
                  return null != r && u(r, n[g], {that: n, AS_ENTRIES: y}), n;
                })).prototype = m),
                (m.constructor = T)),
                (_ || x) && (b('delete'), b('has'), y && b('get')),
                (x || P) && b(g),
                d && m.clear && delete m.clear;
            }
            return (
              (E[t] = T),
              n({global: !0, forced: T != A}, E),
              p(T, t),
              d || r.setStrong(T, t, y),
              T
            );
          };
        },
        9920: function (t, e, r) {
          var n = r(6656),
            i = r(3887),
            a = r(1236),
            o = r(3070);
          t.exports = function (t, e) {
            for (var r = i(e), s = o.f, u = a.f, c = 0; c < r.length; c++) {
              var f = r[c];
              n(t, f) || s(t, f, u(e, f));
            }
          };
        },
        4964: function (t, e, r) {
          var n = r(5112)('match');
          t.exports = function (t) {
            var e = /./;
            try {
              '/./'[t](e);
            } catch (r) {
              try {
                return (e[n] = !1), '/./'[t](e);
              } catch (t) {}
            }
            return !1;
          };
        },
        8544: function (t, e, r) {
          var n = r(7293);
          t.exports = !n(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        4994: function (t, e, r) {
          'use strict';
          var n = r(3383).IteratorPrototype,
            i = r(30),
            a = r(9114),
            o = r(8003),
            s = r(7497),
            u = function () {
              return this;
            };
          t.exports = function (t, e, r) {
            var c = e + ' Iterator';
            return (
              (t.prototype = i(n, {next: a(1, r)})),
              o(t, c, !1, !0),
              (s[c] = u),
              t
            );
          };
        },
        8880: function (t, e, r) {
          var n = r(9781),
            i = r(3070),
            a = r(9114);
          t.exports = n
            ? function (t, e, r) {
                return i.f(t, e, a(1, r));
              }
            : function (t, e, r) {
                return (t[e] = r), t;
              };
        },
        9114: function (t) {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        6135: function (t, e, r) {
          'use strict';
          var n = r(7593),
            i = r(3070),
            a = r(9114);
          t.exports = function (t, e, r) {
            var o = n(e);
            o in t ? i.f(t, o, a(0, r)) : (t[o] = r);
          };
        },
        654: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(4994),
            a = r(9518),
            o = r(7674),
            s = r(8003),
            u = r(8880),
            c = r(1320),
            f = r(5112),
            h = r(1913),
            l = r(7497),
            p = r(3383),
            v = p.IteratorPrototype,
            y = p.BUGGY_SAFARI_ITERATORS,
            d = f('iterator'),
            g = 'keys',
            A = 'values',
            m = 'entries',
            T = function () {
              return this;
            };
          t.exports = function (t, e, r, f, p, E, b) {
            i(r, e, f);
            var S,
              P,
              _,
              w = function (t) {
                if (t === p && C) return C;
                if (!y && t in I) return I[t];
                switch (t) {
                  case g:
                  case A:
                  case m:
                    return function () {
                      return new r(this, t);
                    };
                }
                return function () {
                  return new r(this);
                };
              },
              x = e + ' Iterator',
              R = !1,
              I = t.prototype,
              D = I[d] || I['@@iterator'] || (p && I[p]),
              C = (!y && D) || w(p),
              O = ('Array' == e && I.entries) || D;
            if (
              (O &&
                ((S = a(O.call(new t()))),
                v !== Object.prototype &&
                  S.next &&
                  (h ||
                    a(S) === v ||
                    (o ? o(S, v) : 'function' != typeof S[d] && u(S, d, T)),
                  s(S, x, !0, !0),
                  h && (l[x] = T))),
              p == A &&
                D &&
                D.name !== A &&
                ((R = !0),
                (C = function () {
                  return D.call(this);
                })),
              (h && !b) || I[d] === C || u(I, d, C),
              (l[e] = C),
              p)
            )
              if (((P = {values: w(A), keys: E ? C : w(g), entries: w(m)}), b))
                for (_ in P) (y || R || !(_ in I)) && c(I, _, P[_]);
              else n({target: e, proto: !0, forced: y || R}, P);
            return P;
          };
        },
        9781: function (t, e, r) {
          var n = r(7293);
          t.exports = !n(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        317: function (t, e, r) {
          var n = r(7854),
            i = r(111),
            a = n.document,
            o = i(a) && i(a.createElement);
          t.exports = function (t) {
            return o ? a.createElement(t) : {};
          };
        },
        8324: function (t) {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        5268: function (t, e, r) {
          var n = r(4326),
            i = r(7854);
          t.exports = 'process' == n(i.process);
        },
        8113: function (t, e, r) {
          var n = r(5005);
          t.exports = n('navigator', 'userAgent') || '';
        },
        7392: function (t, e, r) {
          var n,
            i,
            a = r(7854),
            o = r(8113),
            s = a.process,
            u = s && s.versions,
            c = u && u.v8;
          c
            ? (i = (n = c.split('.'))[0] + n[1])
            : o &&
              (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
              (n = o.match(/Chrome\/(\d+)/)) &&
              (i = n[1]),
            (t.exports = i && +i);
        },
        748: function (t) {
          t.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
          ];
        },
        2109: function (t, e, r) {
          var n = r(7854),
            i = r(1236).f,
            a = r(8880),
            o = r(1320),
            s = r(3505),
            u = r(9920),
            c = r(4705);
          t.exports = function (t, e) {
            var r,
              f,
              h,
              l,
              p,
              v = t.target,
              y = t.global,
              d = t.stat;
            if ((r = y ? n : d ? n[v] || s(v, {}) : (n[v] || {}).prototype))
              for (f in e) {
                if (
                  ((l = e[f]),
                  (h = t.noTargetGet ? (p = i(r, f)) && p.value : r[f]),
                  !c(y ? f : v + (d ? '.' : '#') + f, t.forced) && void 0 !== h)
                ) {
                  if (typeof l == typeof h) continue;
                  u(l, h);
                }
                (t.sham || (h && h.sham)) && a(l, 'sham', !0), o(r, f, l, t);
              }
          };
        },
        7293: function (t) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        6677: function (t, e, r) {
          var n = r(7293);
          t.exports = !n(function () {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        },
        9974: function (t, e, r) {
          var n = r(3099);
          t.exports = function (t, e, r) {
            if ((n(t), void 0 === e)) return t;
            switch (r) {
              case 0:
                return function () {
                  return t.call(e);
                };
              case 1:
                return function (r) {
                  return t.call(e, r);
                };
              case 2:
                return function (r, n) {
                  return t.call(e, r, n);
                };
              case 3:
                return function (r, n, i) {
                  return t.call(e, r, n, i);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          };
        },
        5005: function (t, e, r) {
          var n = r(857),
            i = r(7854),
            a = function (t) {
              return 'function' == typeof t ? t : void 0;
            };
          t.exports = function (t, e) {
            return arguments.length < 2
              ? a(n[t]) || a(i[t])
              : (n[t] && n[t][e]) || (i[t] && i[t][e]);
          };
        },
        1246: function (t, e, r) {
          var n = r(648),
            i = r(7497),
            a = r(5112)('iterator');
          t.exports = function (t) {
            if (null != t) return t[a] || t['@@iterator'] || i[n(t)];
          };
        },
        7854: function (t, e, r) {
          var n = function (t) {
            return t && t.Math == Math && t;
          };
          t.exports =
            n('object' == typeof globalThis && globalThis) ||
            n('object' == typeof window && window) ||
            n('object' == typeof self && self) ||
            n('object' == typeof r.g && r.g) ||
            (function () {
              return this;
            })() ||
            Function('return this')();
        },
        6656: function (t) {
          var e = {}.hasOwnProperty;
          t.exports = function (t, r) {
            return e.call(t, r);
          };
        },
        3501: function (t) {
          t.exports = {};
        },
        490: function (t, e, r) {
          var n = r(5005);
          t.exports = n('document', 'documentElement');
        },
        4664: function (t, e, r) {
          var n = r(9781),
            i = r(7293),
            a = r(317);
          t.exports =
            !n &&
            !i(function () {
              return (
                7 !=
                Object.defineProperty(a('div'), 'a', {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        1179: function (t) {
          var e = 1 / 0,
            r = Math.abs,
            n = Math.pow,
            i = Math.floor,
            a = Math.log,
            o = Math.LN2;
          t.exports = {
            pack: function (t, s, u) {
              var c,
                f,
                h,
                l = new Array(u),
                p = 8 * u - s - 1,
                v = (1 << p) - 1,
                y = v >> 1,
                d = 23 === s ? n(2, -24) - n(2, -77) : 0,
                g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
                A = 0;
              for (
                (t = r(t)) != t || t === e
                  ? ((f = t != t ? 1 : 0), (c = v))
                  : ((c = i(a(t) / o)),
                    t * (h = n(2, -c)) < 1 && (c--, (h *= 2)),
                    (t += c + y >= 1 ? d / h : d * n(2, 1 - y)) * h >= 2 &&
                      (c++, (h /= 2)),
                    c + y >= v
                      ? ((f = 0), (c = v))
                      : c + y >= 1
                      ? ((f = (t * h - 1) * n(2, s)), (c += y))
                      : ((f = t * n(2, y - 1) * n(2, s)), (c = 0)));
                s >= 8;
                l[A++] = 255 & f, f /= 256, s -= 8
              );
              for (
                c = (c << s) | f, p += s;
                p > 0;
                l[A++] = 255 & c, c /= 256, p -= 8
              );
              return (l[--A] |= 128 * g), l;
            },
            unpack: function (t, r) {
              var i,
                a = t.length,
                o = 8 * a - r - 1,
                s = (1 << o) - 1,
                u = s >> 1,
                c = o - 7,
                f = a - 1,
                h = t[f--],
                l = 127 & h;
              for (h >>= 7; c > 0; l = 256 * l + t[f], f--, c -= 8);
              for (
                i = l & ((1 << -c) - 1), l >>= -c, c += r;
                c > 0;
                i = 256 * i + t[f], f--, c -= 8
              );
              if (0 === l) l = 1 - u;
              else {
                if (l === s) return i ? NaN : h ? -1 / 0 : e;
                (i += n(2, r)), (l -= u);
              }
              return (h ? -1 : 1) * i * n(2, l - r);
            },
          };
        },
        8361: function (t, e, r) {
          var n = r(7293),
            i = r(4326),
            a = ''.split;
          t.exports = n(function () {
            return !Object('z').propertyIsEnumerable(0);
          })
            ? function (t) {
                return 'String' == i(t) ? a.call(t, '') : Object(t);
              }
            : Object;
        },
        9587: function (t, e, r) {
          var n = r(111),
            i = r(7674);
          t.exports = function (t, e, r) {
            var a, o;
            return (
              i &&
                'function' == typeof (a = e.constructor) &&
                a !== r &&
                n((o = a.prototype)) &&
                o !== r.prototype &&
                i(t, o),
              t
            );
          };
        },
        2788: function (t, e, r) {
          var n = r(5465),
            i = Function.toString;
          'function' != typeof n.inspectSource &&
            (n.inspectSource = function (t) {
              return i.call(t);
            }),
            (t.exports = n.inspectSource);
        },
        2423: function (t, e, r) {
          var n = r(3501),
            i = r(111),
            a = r(6656),
            o = r(3070).f,
            s = r(9711),
            u = r(6677),
            c = s('meta'),
            f = 0,
            h =
              Object.isExtensible ||
              function () {
                return !0;
              },
            l = function (t) {
              o(t, c, {value: {objectID: 'O' + ++f, weakData: {}}});
            },
            p = (t.exports = {
              REQUIRED: !1,
              fastKey: function (t, e) {
                if (!i(t))
                  return 'symbol' == typeof t
                    ? t
                    : ('string' == typeof t ? 'S' : 'P') + t;
                if (!a(t, c)) {
                  if (!h(t)) return 'F';
                  if (!e) return 'E';
                  l(t);
                }
                return t[c].objectID;
              },
              getWeakData: function (t, e) {
                if (!a(t, c)) {
                  if (!h(t)) return !0;
                  if (!e) return !1;
                  l(t);
                }
                return t[c].weakData;
              },
              onFreeze: function (t) {
                return u && p.REQUIRED && h(t) && !a(t, c) && l(t), t;
              },
            });
          n[c] = !0;
        },
        9909: function (t, e, r) {
          var n,
            i,
            a,
            o = r(8536),
            s = r(7854),
            u = r(111),
            c = r(8880),
            f = r(6656),
            h = r(5465),
            l = r(6200),
            p = r(3501),
            v = s.WeakMap;
          if (o) {
            var y = h.state || (h.state = new v()),
              d = y.get,
              g = y.has,
              A = y.set;
            (n = function (t, e) {
              return (e.facade = t), A.call(y, t, e), e;
            }),
              (i = function (t) {
                return d.call(y, t) || {};
              }),
              (a = function (t) {
                return g.call(y, t);
              });
          } else {
            var m = l('state');
            (p[m] = !0),
              (n = function (t, e) {
                return (e.facade = t), c(t, m, e), e;
              }),
              (i = function (t) {
                return f(t, m) ? t[m] : {};
              }),
              (a = function (t) {
                return f(t, m);
              });
          }
          t.exports = {
            set: n,
            get: i,
            has: a,
            enforce: function (t) {
              return a(t) ? i(t) : n(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var r;
                if (!u(e) || (r = i(e)).type !== t)
                  throw TypeError('Incompatible receiver, ' + t + ' required');
                return r;
              };
            },
          };
        },
        7659: function (t, e, r) {
          var n = r(5112),
            i = r(7497),
            a = n('iterator'),
            o = Array.prototype;
          t.exports = function (t) {
            return void 0 !== t && (i.Array === t || o[a] === t);
          };
        },
        3157: function (t, e, r) {
          var n = r(4326);
          t.exports =
            Array.isArray ||
            function (t) {
              return 'Array' == n(t);
            };
        },
        4705: function (t, e, r) {
          var n = r(7293),
            i = /#|\.prototype\./,
            a = function (t, e) {
              var r = s[o(t)];
              return (
                r == c || (r != u && ('function' == typeof e ? n(e) : !!e))
              );
            },
            o = (a.normalize = function (t) {
              return String(t).replace(i, '.').toLowerCase();
            }),
            s = (a.data = {}),
            u = (a.NATIVE = 'N'),
            c = (a.POLYFILL = 'P');
          t.exports = a;
        },
        8730: function (t, e, r) {
          var n = r(111),
            i = Math.floor;
          t.exports = function (t) {
            return !n(t) && isFinite(t) && i(t) === t;
          };
        },
        111: function (t) {
          t.exports = function (t) {
            return 'object' == typeof t ? null !== t : 'function' == typeof t;
          };
        },
        1913: function (t) {
          t.exports = !1;
        },
        7850: function (t, e, r) {
          var n = r(111),
            i = r(4326),
            a = r(5112)('match');
          t.exports = function (t) {
            var e;
            return n(t) && (void 0 !== (e = t[a]) ? !!e : 'RegExp' == i(t));
          };
        },
        408: function (t, e, r) {
          var n = r(9670),
            i = r(7659),
            a = r(7466),
            o = r(9974),
            s = r(1246),
            u = r(9212),
            c = function (t, e) {
              (this.stopped = t), (this.result = e);
            };
          t.exports = function (t, e, r) {
            var f,
              h,
              l,
              p,
              v,
              y,
              d,
              g = r && r.that,
              A = !(!r || !r.AS_ENTRIES),
              m = !(!r || !r.IS_ITERATOR),
              T = !(!r || !r.INTERRUPTED),
              E = o(e, g, 1 + A + T),
              b = function (t) {
                return f && u(f), new c(!0, t);
              },
              S = function (t) {
                return A
                  ? (n(t), T ? E(t[0], t[1], b) : E(t[0], t[1]))
                  : T
                  ? E(t, b)
                  : E(t);
              };
            if (m) f = t;
            else {
              if ('function' != typeof (h = s(t)))
                throw TypeError('Target is not iterable');
              if (i(h)) {
                for (l = 0, p = a(t.length); p > l; l++)
                  if ((v = S(t[l])) && v instanceof c) return v;
                return new c(!1);
              }
              f = h.call(t);
            }
            for (y = f.next; !(d = y.call(f)).done; ) {
              try {
                v = S(d.value);
              } catch (t) {
                throw (u(f), t);
              }
              if ('object' == typeof v && v && v instanceof c) return v;
            }
            return new c(!1);
          };
        },
        9212: function (t, e, r) {
          var n = r(9670);
          t.exports = function (t) {
            var e = t.return;
            if (void 0 !== e) return n(e.call(t)).value;
          };
        },
        3383: function (t, e, r) {
          'use strict';
          var n,
            i,
            a,
            o = r(9518),
            s = r(8880),
            u = r(6656),
            c = r(5112),
            f = r(1913),
            h = c('iterator'),
            l = !1;
          [].keys &&
            ('next' in (a = [].keys())
              ? (i = o(o(a))) !== Object.prototype && (n = i)
              : (l = !0)),
            null == n && (n = {}),
            f ||
              u(n, h) ||
              s(n, h, function () {
                return this;
              }),
            (t.exports = {IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: l});
        },
        7497: function (t) {
          t.exports = {};
        },
        133: function (t, e, r) {
          var n = r(7293);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !n(function () {
              return !String(Symbol());
            });
        },
        8536: function (t, e, r) {
          var n = r(7854),
            i = r(2788),
            a = n.WeakMap;
          t.exports = 'function' == typeof a && /native code/.test(i(a));
        },
        3929: function (t, e, r) {
          var n = r(7850);
          t.exports = function (t) {
            if (n(t))
              throw TypeError("The method doesn't accept regular expressions");
            return t;
          };
        },
        30: function (t, e, r) {
          var n,
            i = r(9670),
            a = r(6048),
            o = r(748),
            s = r(3501),
            u = r(490),
            c = r(317),
            f = r(6200),
            h = f('IE_PROTO'),
            l = function () {},
            p = function (t) {
              return '<script>' + t + '</' + 'script>';
            },
            v = function () {
              try {
                n = document.domain && new ActiveXObject('htmlfile');
              } catch (t) {}
              var t, e;
              v = n
                ? (function (t) {
                    t.write(p('')), t.close();
                    var e = t.parentWindow.Object;
                    return (t = null), e;
                  })(n)
                : (((e = c('iframe')).style.display = 'none'),
                  u.appendChild(e),
                  (e.src = String('javascript:')),
                  (t = e.contentWindow.document).open(),
                  t.write(p('document.F=Object')),
                  t.close(),
                  t.F);
              for (var r = o.length; r--; ) delete v.prototype[o[r]];
              return v();
            };
          (s[h] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var r;
                return (
                  null !== t
                    ? ((l.prototype = i(t)),
                      (r = new l()),
                      (l.prototype = null),
                      (r[h] = t))
                    : (r = v()),
                  void 0 === e ? r : a(r, e)
                );
              });
        },
        6048: function (t, e, r) {
          var n = r(9781),
            i = r(3070),
            a = r(9670),
            o = r(1956);
          t.exports = n
            ? Object.defineProperties
            : function (t, e) {
                a(t);
                for (var r, n = o(e), s = n.length, u = 0; s > u; )
                  i.f(t, (r = n[u++]), e[r]);
                return t;
              };
        },
        3070: function (t, e, r) {
          var n = r(9781),
            i = r(4664),
            a = r(9670),
            o = r(7593),
            s = Object.defineProperty;
          e.f = n
            ? s
            : function (t, e, r) {
                if ((a(t), (e = o(e, !0)), a(r), i))
                  try {
                    return s(t, e, r);
                  } catch (t) {}
                if ('get' in r || 'set' in r)
                  throw TypeError('Accessors not supported');
                return 'value' in r && (t[e] = r.value), t;
              };
        },
        1236: function (t, e, r) {
          var n = r(9781),
            i = r(5296),
            a = r(9114),
            o = r(5656),
            s = r(7593),
            u = r(6656),
            c = r(4664),
            f = Object.getOwnPropertyDescriptor;
          e.f = n
            ? f
            : function (t, e) {
                if (((t = o(t)), (e = s(e, !0)), c))
                  try {
                    return f(t, e);
                  } catch (t) {}
                if (u(t, e)) return a(!i.f.call(t, e), t[e]);
              };
        },
        8006: function (t, e, r) {
          var n = r(6324),
            i = r(748).concat('length', 'prototype');
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return n(t, i);
            };
        },
        5181: function (t, e) {
          e.f = Object.getOwnPropertySymbols;
        },
        9518: function (t, e, r) {
          var n = r(6656),
            i = r(7908),
            a = r(6200),
            o = r(8544),
            s = a('IE_PROTO'),
            u = Object.prototype;
          t.exports = o
            ? Object.getPrototypeOf
            : function (t) {
                return (
                  (t = i(t)),
                  n(t, s)
                    ? t[s]
                    : 'function' == typeof t.constructor &&
                      t instanceof t.constructor
                    ? t.constructor.prototype
                    : t instanceof Object
                    ? u
                    : null
                );
              };
        },
        6324: function (t, e, r) {
          var n = r(6656),
            i = r(5656),
            a = r(1318).indexOf,
            o = r(3501);
          t.exports = function (t, e) {
            var r,
              s = i(t),
              u = 0,
              c = [];
            for (r in s) !n(o, r) && n(s, r) && c.push(r);
            for (; e.length > u; )
              n(s, (r = e[u++])) && (~a(c, r) || c.push(r));
            return c;
          };
        },
        1956: function (t, e, r) {
          var n = r(6324),
            i = r(748);
          t.exports =
            Object.keys ||
            function (t) {
              return n(t, i);
            };
        },
        5296: function (t, e) {
          'use strict';
          var r = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor,
            i = n && !r.call({1: 2}, 1);
          e.f = i
            ? function (t) {
                var e = n(this, t);
                return !!e && e.enumerable;
              }
            : r;
        },
        7674: function (t, e, r) {
          var n = r(9670),
            i = r(6077);
          t.exports =
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function () {
                  var t,
                    e = !1,
                    r = {};
                  try {
                    (t = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      '__proto__',
                    ).set).call(r, []),
                      (e = r instanceof Array);
                  } catch (t) {}
                  return function (r, a) {
                    return n(r), i(a), e ? t.call(r, a) : (r.__proto__ = a), r;
                  };
                })()
              : void 0);
        },
        288: function (t, e, r) {
          'use strict';
          var n = r(1694),
            i = r(648);
          t.exports = n
            ? {}.toString
            : function () {
                return '[object ' + i(this) + ']';
              };
        },
        3887: function (t, e, r) {
          var n = r(5005),
            i = r(8006),
            a = r(5181),
            o = r(9670);
          t.exports =
            n('Reflect', 'ownKeys') ||
            function (t) {
              var e = i.f(o(t)),
                r = a.f;
              return r ? e.concat(r(t)) : e;
            };
        },
        857: function (t, e, r) {
          var n = r(7854);
          t.exports = n;
        },
        2248: function (t, e, r) {
          var n = r(1320);
          t.exports = function (t, e, r) {
            for (var i in e) n(t, i, e[i], r);
            return t;
          };
        },
        1320: function (t, e, r) {
          var n = r(7854),
            i = r(8880),
            a = r(6656),
            o = r(3505),
            s = r(2788),
            u = r(9909),
            c = u.get,
            f = u.enforce,
            h = String(String).split('String');
          (t.exports = function (t, e, r, s) {
            var u,
              c = !!s && !!s.unsafe,
              l = !!s && !!s.enumerable,
              p = !!s && !!s.noTargetGet;
            'function' == typeof r &&
              ('string' != typeof e || a(r, 'name') || i(r, 'name', e),
              (u = f(r)).source ||
                (u.source = h.join('string' == typeof e ? e : ''))),
              t !== n
                ? (c ? !p && t[e] && (l = !0) : delete t[e],
                  l ? (t[e] = r) : i(t, e, r))
                : l
                ? (t[e] = r)
                : o(e, r);
          })(Function.prototype, 'toString', function () {
            return ('function' == typeof this && c(this).source) || s(this);
          });
        },
        7066: function (t, e, r) {
          'use strict';
          var n = r(9670);
          t.exports = function () {
            var t = n(this),
              e = '';
            return (
              t.global && (e += 'g'),
              t.ignoreCase && (e += 'i'),
              t.multiline && (e += 'm'),
              t.dotAll && (e += 's'),
              t.unicode && (e += 'u'),
              t.sticky && (e += 'y'),
              e
            );
          };
        },
        4488: function (t) {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
          };
        },
        3505: function (t, e, r) {
          var n = r(7854),
            i = r(8880);
          t.exports = function (t, e) {
            try {
              i(n, t, e);
            } catch (r) {
              n[t] = e;
            }
            return e;
          };
        },
        6340: function (t, e, r) {
          'use strict';
          var n = r(5005),
            i = r(3070),
            a = r(5112),
            o = r(9781),
            s = a('species');
          t.exports = function (t) {
            var e = n(t),
              r = i.f;
            o &&
              e &&
              !e[s] &&
              r(e, s, {
                configurable: !0,
                get: function () {
                  return this;
                },
              });
          };
        },
        8003: function (t, e, r) {
          var n = r(3070).f,
            i = r(6656),
            a = r(5112)('toStringTag');
          t.exports = function (t, e, r) {
            t &&
              !i((t = r ? t : t.prototype), a) &&
              n(t, a, {configurable: !0, value: e});
          };
        },
        6200: function (t, e, r) {
          var n = r(2309),
            i = r(9711),
            a = n('keys');
          t.exports = function (t) {
            return a[t] || (a[t] = i(t));
          };
        },
        5465: function (t, e, r) {
          var n = r(7854),
            i = r(3505),
            a = '__core-js_shared__',
            o = n[a] || i(a, {});
          t.exports = o;
        },
        2309: function (t, e, r) {
          var n = r(1913),
            i = r(5465);
          (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {});
          })('versions', []).push({
            version: '3.8.2',
            mode: n ? 'pure' : 'global',
            copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
          });
        },
        6707: function (t, e, r) {
          var n = r(9670),
            i = r(3099),
            a = r(5112)('species');
          t.exports = function (t, e) {
            var r,
              o = n(t).constructor;
            return void 0 === o || null == (r = n(o)[a]) ? e : i(r);
          };
        },
        8710: function (t, e, r) {
          var n = r(9958),
            i = r(4488),
            a = function (t) {
              return function (e, r) {
                var a,
                  o,
                  s = String(i(e)),
                  u = n(r),
                  c = s.length;
                return u < 0 || u >= c
                  ? t
                    ? ''
                    : void 0
                  : (a = s.charCodeAt(u)) < 55296 ||
                    a > 56319 ||
                    u + 1 === c ||
                    (o = s.charCodeAt(u + 1)) < 56320 ||
                    o > 57343
                  ? t
                    ? s.charAt(u)
                    : a
                  : t
                  ? s.slice(u, u + 2)
                  : o - 56320 + ((a - 55296) << 10) + 65536;
              };
            };
          t.exports = {codeAt: a(!1), charAt: a(!0)};
        },
        8415: function (t, e, r) {
          'use strict';
          var n = r(9958),
            i = r(4488);
          t.exports =
            ''.repeat ||
            function (t) {
              var e = String(i(this)),
                r = '',
                a = n(t);
              if (a < 0 || a == 1 / 0)
                throw RangeError('Wrong number of repetitions');
              for (; a > 0; (a >>>= 1) && (e += e)) 1 & a && (r += e);
              return r;
            };
        },
        3111: function (t, e, r) {
          var n = r(4488),
            i = '[' + r(1361) + ']',
            a = RegExp('^' + i + i + '*'),
            o = RegExp(i + i + '*$'),
            s = function (t) {
              return function (e) {
                var r = String(n(e));
                return (
                  1 & t && (r = r.replace(a, '')),
                  2 & t && (r = r.replace(o, '')),
                  r
                );
              };
            };
          t.exports = {start: s(1), end: s(2), trim: s(3)};
        },
        863: function (t, e, r) {
          var n = r(4326);
          t.exports = function (t) {
            if ('number' != typeof t && 'Number' != n(t))
              throw TypeError('Incorrect invocation');
            return +t;
          };
        },
        1400: function (t, e, r) {
          var n = r(9958),
            i = Math.max,
            a = Math.min;
          t.exports = function (t, e) {
            var r = n(t);
            return r < 0 ? i(r + e, 0) : a(r, e);
          };
        },
        7067: function (t, e, r) {
          var n = r(9958),
            i = r(7466);
          t.exports = function (t) {
            if (void 0 === t) return 0;
            var e = n(t),
              r = i(e);
            if (e !== r) throw RangeError('Wrong length or index');
            return r;
          };
        },
        5656: function (t, e, r) {
          var n = r(8361),
            i = r(4488);
          t.exports = function (t) {
            return n(i(t));
          };
        },
        9958: function (t) {
          var e = Math.ceil,
            r = Math.floor;
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
          };
        },
        7466: function (t, e, r) {
          var n = r(9958),
            i = Math.min;
          t.exports = function (t) {
            return t > 0 ? i(n(t), 9007199254740991) : 0;
          };
        },
        7908: function (t, e, r) {
          var n = r(4488);
          t.exports = function (t) {
            return Object(n(t));
          };
        },
        4590: function (t, e, r) {
          var n = r(3002);
          t.exports = function (t, e) {
            var r = n(t);
            if (r % e) throw RangeError('Wrong offset');
            return r;
          };
        },
        3002: function (t, e, r) {
          var n = r(9958);
          t.exports = function (t) {
            var e = n(t);
            if (e < 0) throw RangeError("The argument can't be less than 0");
            return e;
          };
        },
        7593: function (t, e, r) {
          var n = r(111);
          t.exports = function (t, e) {
            if (!n(t)) return t;
            var r, i;
            if (
              e &&
              'function' == typeof (r = t.toString) &&
              !n((i = r.call(t)))
            )
              return i;
            if ('function' == typeof (r = t.valueOf) && !n((i = r.call(t))))
              return i;
            if (
              !e &&
              'function' == typeof (r = t.toString) &&
              !n((i = r.call(t)))
            )
              return i;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        1694: function (t, e, r) {
          var n = {};
          (n[r(5112)('toStringTag')] = 'z'),
            (t.exports = '[object z]' === String(n));
        },
        9843: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7854),
            a = r(9781),
            o = r(3832),
            s = r(260),
            u = r(3331),
            c = r(5787),
            f = r(9114),
            h = r(8880),
            l = r(7466),
            p = r(7067),
            v = r(4590),
            y = r(7593),
            d = r(6656),
            g = r(648),
            A = r(111),
            m = r(30),
            T = r(7674),
            E = r(8006).f,
            b = r(7321),
            S = r(2092).forEach,
            P = r(6340),
            _ = r(3070),
            w = r(1236),
            x = r(9909),
            R = r(9587),
            I = x.get,
            D = x.set,
            C = _.f,
            O = w.f,
            N = Math.round,
            k = i.RangeError,
            L = u.ArrayBuffer,
            B = u.DataView,
            M = s.NATIVE_ARRAY_BUFFER_VIEWS,
            G = s.TYPED_ARRAY_TAG,
            F = s.TypedArray,
            U = s.TypedArrayPrototype,
            j = s.aTypedArrayConstructor,
            V = s.isTypedArray,
            H = 'BYTES_PER_ELEMENT',
            W = 'Wrong length',
            Y = function (t, e) {
              for (var r = 0, n = e.length, i = new (j(t))(n); n > r; )
                i[r] = e[r++];
              return i;
            },
            z = function (t, e) {
              C(t, e, {
                get: function () {
                  return I(this)[e];
                },
              });
            },
            K = function (t) {
              var e;
              return (
                t instanceof L ||
                'ArrayBuffer' == (e = g(t)) ||
                'SharedArrayBuffer' == e
              );
            },
            X = function (t, e) {
              return (
                V(t) &&
                'symbol' != typeof e &&
                e in t &&
                String(+e) == String(e)
              );
            },
            Z = function (t, e) {
              return X(t, (e = y(e, !0))) ? f(2, t[e]) : O(t, e);
            },
            q = function (t, e, r) {
              return !(X(t, (e = y(e, !0))) && A(r) && d(r, 'value')) ||
                d(r, 'get') ||
                d(r, 'set') ||
                r.configurable ||
                (d(r, 'writable') && !r.writable) ||
                (d(r, 'enumerable') && !r.enumerable)
                ? C(t, e, r)
                : ((t[e] = r.value), t);
            };
          a
            ? (M ||
                ((w.f = Z),
                (_.f = q),
                z(U, 'buffer'),
                z(U, 'byteOffset'),
                z(U, 'byteLength'),
                z(U, 'length')),
              n(
                {target: 'Object', stat: !0, forced: !M},
                {getOwnPropertyDescriptor: Z, defineProperty: q},
              ),
              (t.exports = function (t, e, r) {
                var a = t.match(/\d+$/)[0] / 8,
                  s = t + (r ? 'Clamped' : '') + 'Array',
                  u = 'get' + t,
                  f = 'set' + t,
                  y = i[s],
                  d = y,
                  g = d && d.prototype,
                  _ = {},
                  w = function (t, e) {
                    C(t, e, {
                      get: function () {
                        return (function (t, e) {
                          var r = I(t);
                          return r.view[u](e * a + r.byteOffset, !0);
                        })(this, e);
                      },
                      set: function (t) {
                        return (function (t, e, n) {
                          var i = I(t);
                          r &&
                            (n = (n = N(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                            i.view[f](e * a + i.byteOffset, n, !0);
                        })(this, e, t);
                      },
                      enumerable: !0,
                    });
                  };
                M
                  ? o &&
                    ((d = e(function (t, e, r, n) {
                      return (
                        c(t, d, s),
                        R(
                          A(e)
                            ? K(e)
                              ? void 0 !== n
                                ? new y(e, v(r, a), n)
                                : void 0 !== r
                                ? new y(e, v(r, a))
                                : new y(e)
                              : V(e)
                              ? Y(d, e)
                              : b.call(d, e)
                            : new y(p(e)),
                          t,
                          d,
                        )
                      );
                    })),
                    T && T(d, F),
                    S(E(y), function (t) {
                      t in d || h(d, t, y[t]);
                    }),
                    (d.prototype = g))
                  : ((d = e(function (t, e, r, n) {
                      c(t, d, s);
                      var i,
                        o,
                        u,
                        f = 0,
                        h = 0;
                      if (A(e)) {
                        if (!K(e)) return V(e) ? Y(d, e) : b.call(d, e);
                        (i = e), (h = v(r, a));
                        var y = e.byteLength;
                        if (void 0 === n) {
                          if (y % a) throw k(W);
                          if ((o = y - h) < 0) throw k(W);
                        } else if ((o = l(n) * a) + h > y) throw k(W);
                        u = o / a;
                      } else (u = p(e)), (i = new L((o = u * a)));
                      for (
                        D(t, {
                          buffer: i,
                          byteOffset: h,
                          byteLength: o,
                          length: u,
                          view: new B(i),
                        });
                        f < u;

                      )
                        w(t, f++);
                    })),
                    T && T(d, F),
                    (g = d.prototype = m(U))),
                  g.constructor !== d && h(g, 'constructor', d),
                  G && h(g, G, s),
                  (_[s] = d),
                  n({global: !0, forced: d != y, sham: !M}, _),
                  H in d || h(d, H, a),
                  H in g || h(g, H, a),
                  P(s);
              }))
            : (t.exports = function () {});
        },
        3832: function (t, e, r) {
          var n = r(7854),
            i = r(7293),
            a = r(7072),
            o = r(260).NATIVE_ARRAY_BUFFER_VIEWS,
            s = n.ArrayBuffer,
            u = n.Int8Array;
          t.exports =
            !o ||
            !i(function () {
              u(1);
            }) ||
            !i(function () {
              new u(-1);
            }) ||
            !a(function (t) {
              new u(), new u(null), new u(1.5), new u(t);
            }, !0) ||
            i(function () {
              return 1 !== new u(new s(2), 1, void 0).length;
            });
        },
        7321: function (t, e, r) {
          var n = r(7908),
            i = r(7466),
            a = r(1246),
            o = r(7659),
            s = r(9974),
            u = r(260).aTypedArrayConstructor;
          t.exports = function (t) {
            var e,
              r,
              c,
              f,
              h,
              l,
              p = n(t),
              v = arguments.length,
              y = v > 1 ? arguments[1] : void 0,
              d = void 0 !== y,
              g = a(p);
            if (null != g && !o(g))
              for (l = (h = g.call(p)).next, p = []; !(f = l.call(h)).done; )
                p.push(f.value);
            for (
              d && v > 2 && (y = s(y, arguments[2], 2)),
                r = i(p.length),
                c = new (u(this))(r),
                e = 0;
              r > e;
              e++
            )
              c[e] = d ? y(p[e], e) : p[e];
            return c;
          };
        },
        9711: function (t) {
          var e = 0,
            r = Math.random();
          t.exports = function (t) {
            return (
              'Symbol(' +
              String(void 0 === t ? '' : t) +
              ')_' +
              (++e + r).toString(36)
            );
          };
        },
        3307: function (t, e, r) {
          var n = r(133);
          t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
        },
        5112: function (t, e, r) {
          var n = r(7854),
            i = r(2309),
            a = r(6656),
            o = r(9711),
            s = r(133),
            u = r(3307),
            c = i('wks'),
            f = n.Symbol,
            h = u ? f : (f && f.withoutSetter) || o;
          t.exports = function (t) {
            return (
              a(c, t) ||
                (s && a(f, t) ? (c[t] = f[t]) : (c[t] = h('Symbol.' + t))),
              c[t]
            );
          };
        },
        1361: function (t) {
          t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff';
        },
        8264: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7854),
            a = r(3331),
            o = r(6340),
            s = 'ArrayBuffer',
            u = a.ArrayBuffer;
          n({global: !0, forced: i.ArrayBuffer !== u}, {ArrayBuffer: u}), o(s);
        },
        9575: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7293),
            a = r(3331),
            o = r(9670),
            s = r(1400),
            u = r(7466),
            c = r(6707),
            f = a.ArrayBuffer,
            h = a.DataView,
            l = f.prototype.slice;
          n(
            {
              target: 'ArrayBuffer',
              proto: !0,
              unsafe: !0,
              forced: i(function () {
                return !new f(2).slice(1, void 0).byteLength;
              }),
            },
            {
              slice: function (t, e) {
                if (void 0 !== l && void 0 === e) return l.call(o(this), t);
                for (
                  var r = o(this).byteLength,
                    n = s(t, r),
                    i = s(void 0 === e ? r : e, r),
                    a = new (c(this, f))(u(i - n)),
                    p = new h(this),
                    v = new h(a),
                    y = 0;
                  n < i;

                )
                  v.setUint8(y++, p.getUint8(n++));
                return a;
              },
            },
          );
        },
        2222: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7293),
            a = r(3157),
            o = r(111),
            s = r(7908),
            u = r(7466),
            c = r(6135),
            f = r(5417),
            h = r(1194),
            l = r(5112),
            p = r(7392),
            v = l('isConcatSpreadable'),
            y = 9007199254740991,
            d = 'Maximum allowed index exceeded',
            g =
              p >= 51 ||
              !i(function () {
                var t = [];
                return (t[v] = !1), t.concat()[0] !== t;
              }),
            A = h('concat'),
            m = function (t) {
              if (!o(t)) return !1;
              var e = t[v];
              return void 0 !== e ? !!e : a(t);
            };
          n(
            {target: 'Array', proto: !0, forced: !g || !A},
            {
              concat: function (t) {
                var e,
                  r,
                  n,
                  i,
                  a,
                  o = s(this),
                  h = f(o, 0),
                  l = 0;
                for (e = -1, n = arguments.length; e < n; e++)
                  if (m((a = -1 === e ? o : arguments[e]))) {
                    if (l + (i = u(a.length)) > y) throw TypeError(d);
                    for (r = 0; r < i; r++, l++) r in a && c(h, l, a[r]);
                  } else {
                    if (l >= y) throw TypeError(d);
                    c(h, l++, a);
                  }
                return (h.length = l), h;
              },
            },
          );
        },
        7327: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(2092).filter,
            a = r(1194),
            o = r(9207),
            s = a('filter'),
            u = o('filter');
          n(
            {target: 'Array', proto: !0, forced: !s || !u},
            {
              filter: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          );
        },
        9554: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(8533);
          n(
            {target: 'Array', proto: !0, forced: [].forEach != i},
            {forEach: i},
          );
        },
        1038: function (t, e, r) {
          var n = r(2109),
            i = r(8457);
          n(
            {
              target: 'Array',
              stat: !0,
              forced: !r(7072)(function (t) {
                Array.from(t);
              }),
            },
            {from: i},
          );
        },
        6699: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(1318).includes,
            a = r(1223);
          n(
            {
              target: 'Array',
              proto: !0,
              forced: !r(9207)('indexOf', {ACCESSORS: !0, 1: 0}),
            },
            {
              includes: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          ),
            a('includes');
        },
        2772: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(1318).indexOf,
            a = r(9341),
            o = r(9207),
            s = [].indexOf,
            u = !!s && 1 / [1].indexOf(1, -0) < 0,
            c = a('indexOf'),
            f = o('indexOf', {ACCESSORS: !0, 1: 0});
          n(
            {target: 'Array', proto: !0, forced: u || !c || !f},
            {
              indexOf: function (t) {
                return u
                  ? s.apply(this, arguments) || 0
                  : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          );
        },
        6992: function (t, e, r) {
          'use strict';
          var n = r(5656),
            i = r(1223),
            a = r(7497),
            o = r(9909),
            s = r(654),
            u = 'Array Iterator',
            c = o.set,
            f = o.getterFor(u);
          (t.exports = s(
            Array,
            'Array',
            function (t, e) {
              c(this, {type: u, target: n(t), index: 0, kind: e});
            },
            function () {
              var t = f(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
              return !e || n >= e.length
                ? ((t.target = void 0), {value: void 0, done: !0})
                : 'keys' == r
                ? {value: n, done: !1}
                : 'values' == r
                ? {value: e[n], done: !1}
                : {value: [n, e[n]], done: !1};
            },
            'values',
          )),
            (a.Arguments = a.Array),
            i('keys'),
            i('values'),
            i('entries');
        },
        1249: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(2092).map,
            a = r(1194),
            o = r(9207),
            s = a('map'),
            u = o('map');
          n(
            {target: 'Array', proto: !0, forced: !s || !u},
            {
              map: function (t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
              },
            },
          );
        },
        6572: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(7293),
            a = r(6135);
          n(
            {
              target: 'Array',
              stat: !0,
              forced: i(function () {
                function t() {}
                return !(Array.of.call(t) instanceof t);
              }),
            },
            {
              of: function () {
                for (
                  var t = 0,
                    e = arguments.length,
                    r = new ('function' == typeof this ? this : Array)(e);
                  e > t;

                )
                  a(r, t, arguments[t++]);
                return (r.length = e), r;
              },
            },
          );
        },
        5827: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(3671).left,
            a = r(9341),
            o = r(9207),
            s = r(7392),
            u = r(5268),
            c = a('reduce'),
            f = o('reduce', {1: 0});
          n(
            {
              target: 'Array',
              proto: !0,
              forced: !c || !f || (!u && s > 79 && s < 83),
            },
            {
              reduce: function (t) {
                return i(
                  this,
                  t,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : void 0,
                );
              },
            },
          );
        },
        7042: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(111),
            a = r(3157),
            o = r(1400),
            s = r(7466),
            u = r(5656),
            c = r(6135),
            f = r(5112),
            h = r(1194),
            l = r(9207),
            p = h('slice'),
            v = l('slice', {ACCESSORS: !0, 0: 0, 1: 2}),
            y = f('species'),
            d = [].slice,
            g = Math.max;
          n(
            {target: 'Array', proto: !0, forced: !p || !v},
            {
              slice: function (t, e) {
                var r,
                  n,
                  f,
                  h = u(this),
                  l = s(h.length),
                  p = o(t, l),
                  v = o(void 0 === e ? l : e, l);
                if (
                  a(h) &&
                  ('function' != typeof (r = h.constructor) ||
                  (r !== Array && !a(r.prototype))
                    ? i(r) && null === (r = r[y]) && (r = void 0)
                    : (r = void 0),
                  r === Array || void 0 === r)
                )
                  return d.call(h, p, v);
                for (
                  n = new (void 0 === r ? Array : r)(g(v - p, 0)), f = 0;
                  p < v;
                  p++, f++
                )
                  p in h && c(n, f, h[p]);
                return (n.length = f), n;
              },
            },
          );
        },
        561: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(1400),
            a = r(9958),
            o = r(7466),
            s = r(7908),
            u = r(5417),
            c = r(6135),
            f = r(1194),
            h = r(9207),
            l = f('splice'),
            p = h('splice', {ACCESSORS: !0, 0: 0, 1: 2}),
            v = Math.max,
            y = Math.min,
            d = 9007199254740991,
            g = 'Maximum allowed length exceeded';
          n(
            {target: 'Array', proto: !0, forced: !l || !p},
            {
              splice: function (t, e) {
                var r,
                  n,
                  f,
                  h,
                  l,
                  p,
                  A = s(this),
                  m = o(A.length),
                  T = i(t, m),
                  E = arguments.length;
                if (
                  (0 === E
                    ? (r = n = 0)
                    : 1 === E
                    ? ((r = 0), (n = m - T))
                    : ((r = E - 2), (n = y(v(a(e), 0), m - T))),
                  m + r - n > d)
                )
                  throw TypeError(g);
                for (f = u(A, n), h = 0; h < n; h++)
                  (l = T + h) in A && c(f, h, A[l]);
                if (((f.length = n), r < n)) {
                  for (h = T; h < m - n; h++)
                    (p = h + r), (l = h + n) in A ? (A[p] = A[l]) : delete A[p];
                  for (h = m; h > m - n + r; h--) delete A[h - 1];
                } else if (r > n)
                  for (h = m - n; h > T; h--)
                    (p = h + r - 1),
                      (l = h + n - 1) in A ? (A[p] = A[l]) : delete A[p];
                for (h = 0; h < r; h++) A[h + T] = arguments[h + 2];
                return (A.length = m - n + r), f;
              },
            },
          );
        },
        1532: function (t, e, r) {
          'use strict';
          var n = r(7710),
            i = r(5631);
          t.exports = n(
            'Map',
            function (t) {
              return function () {
                return t(this, arguments.length ? arguments[0] : void 0);
              };
            },
            i,
          );
        },
        3689: function (t, e, r) {
          var n = r(2109),
            i = Math.ceil,
            a = Math.floor;
          n(
            {target: 'Math', stat: !0},
            {
              trunc: function (t) {
                return (t > 0 ? a : i)(t);
              },
            },
          );
        },
        9653: function (t, e, r) {
          'use strict';
          var n = r(9781),
            i = r(7854),
            a = r(4705),
            o = r(1320),
            s = r(6656),
            u = r(4326),
            c = r(9587),
            f = r(7593),
            h = r(7293),
            l = r(30),
            p = r(8006).f,
            v = r(1236).f,
            y = r(3070).f,
            d = r(3111).trim,
            g = 'Number',
            A = i.Number,
            m = A.prototype,
            T = u(l(m)) == g,
            E = function (t) {
              var e,
                r,
                n,
                i,
                a,
                o,
                s,
                u,
                c = f(t, !1);
              if ('string' == typeof c && c.length > 2)
                if (43 === (e = (c = d(c)).charCodeAt(0)) || 45 === e) {
                  if (88 === (r = c.charCodeAt(2)) || 120 === r) return NaN;
                } else if (48 === e) {
                  switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                      (n = 2), (i = 49);
                      break;
                    case 79:
                    case 111:
                      (n = 8), (i = 55);
                      break;
                    default:
                      return +c;
                  }
                  for (o = (a = c.slice(2)).length, s = 0; s < o; s++)
                    if ((u = a.charCodeAt(s)) < 48 || u > i) return NaN;
                  return parseInt(a, n);
                }
              return +c;
            };
          if (a(g, !A(' 0o1') || !A('0b1') || A('+0x1'))) {
            for (
              var b,
                S = function (t) {
                  var e = arguments.length < 1 ? 0 : t,
                    r = this;
                  return r instanceof S &&
                    (T
                      ? h(function () {
                          m.valueOf.call(r);
                        })
                      : u(r) != g)
                    ? c(new A(E(e)), r, S)
                    : E(e);
                },
                P = n
                  ? p(A)
                  : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range'.split(
                      ',',
                    ),
                _ = 0;
              P.length > _;
              _++
            )
              s(A, (b = P[_])) && !s(S, b) && y(S, b, v(A, b));
            (S.prototype = m), (m.constructor = S), o(i, g, S);
          }
        },
        3161: function (t, e, r) {
          r(2109)({target: 'Number', stat: !0}, {isInteger: r(8730)});
        },
        6977: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(9958),
            a = r(863),
            o = r(8415),
            s = r(7293),
            u = (1).toFixed,
            c = Math.floor,
            f = function (t, e, r) {
              return 0 === e
                ? r
                : e % 2 == 1
                ? f(t, e - 1, r * t)
                : f(t * t, e / 2, r);
            };
          n(
            {
              target: 'Number',
              proto: !0,
              forced:
                (u &&
                  ('0.000' !== (8e-5).toFixed(3) ||
                    '1' !== (0.9).toFixed(0) ||
                    '1.25' !== (1.255).toFixed(2) ||
                    '1000000000000000128' !==
                      (0xde0b6b3a7640080).toFixed(0))) ||
                !s(function () {
                  u.call({});
                }),
            },
            {
              toFixed: function (t) {
                var e,
                  r,
                  n,
                  s,
                  u = a(this),
                  h = i(t),
                  l = [0, 0, 0, 0, 0, 0],
                  p = '',
                  v = '0',
                  y = function (t, e) {
                    for (var r = -1, n = e; ++r < 6; )
                      (n += t * l[r]), (l[r] = n % 1e7), (n = c(n / 1e7));
                  },
                  d = function (t) {
                    for (var e = 6, r = 0; --e >= 0; )
                      (r += l[e]), (l[e] = c(r / t)), (r = (r % t) * 1e7);
                  },
                  g = function () {
                    for (var t = 6, e = ''; --t >= 0; )
                      if ('' !== e || 0 === t || 0 !== l[t]) {
                        var r = String(l[t]);
                        e = '' === e ? r : e + o.call('0', 7 - r.length) + r;
                      }
                    return e;
                  };
                if (h < 0 || h > 20)
                  throw RangeError('Incorrect fraction digits');
                if (u != u) return 'NaN';
                if (u <= -1e21 || u >= 1e21) return String(u);
                if ((u < 0 && ((p = '-'), (u = -u)), u > 1e-21))
                  if (
                    ((r =
                      (e =
                        (function (t) {
                          for (var e = 0, r = t; r >= 4096; )
                            (e += 12), (r /= 4096);
                          for (; r >= 2; ) (e += 1), (r /= 2);
                          return e;
                        })(u * f(2, 69, 1)) - 69) < 0
                        ? u * f(2, -e, 1)
                        : u / f(2, e, 1)),
                    (r *= 4503599627370496),
                    (e = 52 - e) > 0)
                  ) {
                    for (y(0, r), n = h; n >= 7; ) y(1e7, 0), (n -= 7);
                    for (y(f(10, n, 1), 0), n = e - 1; n >= 23; )
                      d(1 << 23), (n -= 23);
                    d(1 << n), y(1, 1), d(2), (v = g());
                  } else y(0, r), y(1 << -e, 0), (v = g() + o.call('0', h));
                return (v =
                  h > 0
                    ? p +
                      ((s = v.length) <= h
                        ? '0.' + o.call('0', h - s) + v
                        : v.slice(0, s - h) + '.' + v.slice(s - h))
                    : p + v);
              },
            },
          );
        },
        1539: function (t, e, r) {
          var n = r(1694),
            i = r(1320),
            a = r(288);
          n || i(Object.prototype, 'toString', a, {unsafe: !0});
        },
        9714: function (t, e, r) {
          'use strict';
          var n = r(1320),
            i = r(9670),
            a = r(7293),
            o = r(7066),
            s = 'toString',
            u = RegExp.prototype,
            c = u.toString,
            f = a(function () {
              return '/a/b' != c.call({source: 'a', flags: 'b'});
            }),
            h = c.name != s;
          (f || h) &&
            n(
              RegExp.prototype,
              s,
              function () {
                var t = i(this),
                  e = String(t.source),
                  r = t.flags;
                return (
                  '/' +
                  e +
                  '/' +
                  String(
                    void 0 === r && t instanceof RegExp && !('flags' in u)
                      ? o.call(t)
                      : r,
                  )
                );
              },
              {unsafe: !0},
            );
        },
        2023: function (t, e, r) {
          'use strict';
          var n = r(2109),
            i = r(3929),
            a = r(4488);
          n(
            {target: 'String', proto: !0, forced: !r(4964)('includes')},
            {
              includes: function (t) {
                return !!~String(a(this)).indexOf(
                  i(t),
                  arguments.length > 1 ? arguments[1] : void 0,
                );
              },
            },
          );
        },
        8783: function (t, e, r) {
          'use strict';
          var n = r(8710).charAt,
            i = r(9909),
            a = r(654),
            o = 'String Iterator',
            s = i.set,
            u = i.getterFor(o);
          a(
            String,
            'String',
            function (t) {
              s(this, {type: o, string: String(t), index: 0});
            },
            function () {
              var t,
                e = u(this),
                r = e.string,
                i = e.index;
              return i >= r.length
                ? {value: void 0, done: !0}
                : ((t = n(r, i)), (e.index += t.length), {value: t, done: !1});
            },
          );
        },
        2990: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(1048),
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('copyWithin', function (t, e) {
            return i.call(
              a(this),
              t,
              e,
              arguments.length > 2 ? arguments[2] : void 0,
            );
          });
        },
        8927: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).every,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('every', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3105: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(1285),
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('fill', function (t) {
            return i.apply(a(this), arguments);
          });
        },
        5035: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).filter,
            a = r(6707),
            o = n.aTypedArray,
            s = n.aTypedArrayConstructor;
          (0, n.exportTypedArrayMethod)('filter', function (t) {
            for (
              var e = i(
                  o(this),
                  t,
                  arguments.length > 1 ? arguments[1] : void 0,
                ),
                r = a(this, this.constructor),
                n = 0,
                u = e.length,
                c = new (s(r))(u);
              u > n;

            )
              c[n] = e[n++];
            return c;
          });
        },
        7174: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).findIndex,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('findIndex', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        4345: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).find,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('find', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        2846: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).forEach,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('forEach', function (t) {
            i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        4731: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(1318).includes,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('includes', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        7209: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(1318).indexOf,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('indexOf', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        7145: function (t, e, r) {
          r(9843)('Int8', function (t) {
            return function (e, r, n) {
              return t(this, e, r, n);
            };
          });
        },
        6319: function (t, e, r) {
          'use strict';
          var n = r(7854),
            i = r(260),
            a = r(6992),
            o = r(5112)('iterator'),
            s = n.Uint8Array,
            u = a.values,
            c = a.keys,
            f = a.entries,
            h = i.aTypedArray,
            l = i.exportTypedArrayMethod,
            p = s && s.prototype[o],
            v = !!p && ('values' == p.name || null == p.name),
            y = function () {
              return u.call(h(this));
            };
          l('entries', function () {
            return f.call(h(this));
          }),
            l('keys', function () {
              return c.call(h(this));
            }),
            l('values', y, !v),
            l(o, y, !v);
        },
        8867: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = n.aTypedArray,
            a = n.exportTypedArrayMethod,
            o = [].join;
          a('join', function (t) {
            return o.apply(i(this), arguments);
          });
        },
        7789: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(6583),
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('lastIndexOf', function (t) {
            return i.apply(a(this), arguments);
          });
        },
        3739: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).map,
            a = r(6707),
            o = n.aTypedArray,
            s = n.aTypedArrayConstructor;
          (0, n.exportTypedArrayMethod)('map', function (t) {
            return i(
              o(this),
              t,
              arguments.length > 1 ? arguments[1] : void 0,
              function (t, e) {
                return new (s(a(t, t.constructor)))(e);
              },
            );
          });
        },
        4483: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(3671).right,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('reduceRight', function (t) {
            return i(
              a(this),
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0,
            );
          });
        },
        9368: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(3671).left,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('reduce', function (t) {
            return i(
              a(this),
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0,
            );
          });
        },
        2056: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = n.aTypedArray,
            a = n.exportTypedArrayMethod,
            o = Math.floor;
          a('reverse', function () {
            for (var t, e = this, r = i(e).length, n = o(r / 2), a = 0; a < n; )
              (t = e[a]), (e[a++] = e[--r]), (e[r] = t);
            return e;
          });
        },
        3462: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(7466),
            a = r(4590),
            o = r(7908),
            s = r(7293),
            u = n.aTypedArray;
          (0, n.exportTypedArrayMethod)(
            'set',
            function (t) {
              u(this);
              var e = a(arguments.length > 1 ? arguments[1] : void 0, 1),
                r = this.length,
                n = o(t),
                s = i(n.length),
                c = 0;
              if (s + e > r) throw RangeError('Wrong length');
              for (; c < s; ) this[e + c] = n[c++];
            },
            s(function () {
              new Int8Array(1).set({});
            }),
          );
        },
        678: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(6707),
            a = r(7293),
            o = n.aTypedArray,
            s = n.aTypedArrayConstructor,
            u = n.exportTypedArrayMethod,
            c = [].slice;
          u(
            'slice',
            function (t, e) {
              for (
                var r = c.call(o(this), t, e),
                  n = i(this, this.constructor),
                  a = 0,
                  u = r.length,
                  f = new (s(n))(u);
                u > a;

              )
                f[a] = r[a++];
              return f;
            },
            a(function () {
              new Int8Array(1).slice();
            }),
          );
        },
        7462: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(2092).some,
            a = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('some', function (t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
          });
        },
        3824: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = n.aTypedArray,
            a = n.exportTypedArrayMethod,
            o = [].sort;
          a('sort', function (t) {
            return o.call(i(this), t);
          });
        },
        5021: function (t, e, r) {
          'use strict';
          var n = r(260),
            i = r(7466),
            a = r(1400),
            o = r(6707),
            s = n.aTypedArray;
          (0, n.exportTypedArrayMethod)('subarray', function (t, e) {
            var r = s(this),
              n = r.length,
              u = a(t, n);
            return new (o(r, r.constructor))(
              r.buffer,
              r.byteOffset + u * r.BYTES_PER_ELEMENT,
              i((void 0 === e ? n : a(e, n)) - u),
            );
          });
        },
        2974: function (t, e, r) {
          'use strict';
          var n = r(7854),
            i = r(260),
            a = r(7293),
            o = n.Int8Array,
            s = i.aTypedArray,
            u = i.exportTypedArrayMethod,
            c = [].toLocaleString,
            f = [].slice,
            h =
              !!o &&
              a(function () {
                c.call(new o(1));
              });
          u(
            'toLocaleString',
            function () {
              return c.apply(h ? f.call(s(this)) : s(this), arguments);
            },
            a(function () {
              return [1, 2].toLocaleString() != new o([1, 2]).toLocaleString();
            }) ||
              !a(function () {
                o.prototype.toLocaleString.call([1, 2]);
              }),
          );
        },
        5016: function (t, e, r) {
          'use strict';
          var n = r(260).exportTypedArrayMethod,
            i = r(7293),
            a = r(7854).Uint8Array,
            o = (a && a.prototype) || {},
            s = [].toString,
            u = [].join;
          i(function () {
            s.call({});
          }) &&
            (s = function () {
              return u.call(this);
            });
          var c = o.toString != s;
          n('toString', s, c);
        },
        2472: function (t, e, r) {
          r(9843)('Uint8', function (t) {
            return function (e, r, n) {
              return t(this, e, r, n);
            };
          });
        },
        4747: function (t, e, r) {
          var n = r(7854),
            i = r(8324),
            a = r(8533),
            o = r(8880);
          for (var s in i) {
            var u = n[s],
              c = u && u.prototype;
            if (c && c.forEach !== a)
              try {
                o(c, 'forEach', a);
              } catch (t) {
                c.forEach = a;
              }
          }
        },
        3948: function (t, e, r) {
          var n = r(7854),
            i = r(8324),
            a = r(6992),
            o = r(8880),
            s = r(5112),
            u = s('iterator'),
            c = s('toStringTag'),
            f = a.values;
          for (var h in i) {
            var l = n[h],
              p = l && l.prototype;
            if (p) {
              if (p[u] !== f)
                try {
                  o(p, u, f);
                } catch (t) {
                  p[u] = f;
                }
              if ((p[c] || o(p, c, h), i[h]))
                for (var v in a)
                  if (p[v] !== a[v])
                    try {
                      o(p, v, a[v]);
                    } catch (t) {
                      p[v] = a[v];
                    }
            }
          }
        },
        5666: function (t) {
          var e = (function (t) {
            'use strict';
            var e,
              r = Object.prototype,
              n = r.hasOwnProperty,
              i = 'function' == typeof Symbol ? Symbol : {},
              a = i.iterator || '@@iterator',
              o = i.asyncIterator || '@@asyncIterator',
              s = i.toStringTag || '@@toStringTag';
            function u(t, e, r) {
              return (
                Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                t[e]
              );
            }
            try {
              u({}, '');
            } catch (t) {
              u = function (t, e, r) {
                return (t[e] = r);
              };
            }
            function c(t, e, r, n) {
              var i = e && e.prototype instanceof d ? e : d,
                a = Object.create(i.prototype),
                o = new R(n || []);
              return (
                (a._invoke = (function (t, e, r) {
                  var n = h;
                  return function (i, a) {
                    if (n === p)
                      throw new Error('Generator is already running');
                    if (n === v) {
                      if ('throw' === i) throw a;
                      return D();
                    }
                    for (r.method = i, r.arg = a; ; ) {
                      var o = r.delegate;
                      if (o) {
                        var s = _(o, r);
                        if (s) {
                          if (s === y) continue;
                          return s;
                        }
                      }
                      if ('next' === r.method) r.sent = r._sent = r.arg;
                      else if ('throw' === r.method) {
                        if (n === h) throw ((n = v), r.arg);
                        r.dispatchException(r.arg);
                      } else 'return' === r.method && r.abrupt('return', r.arg);
                      n = p;
                      var u = f(t, e, r);
                      if ('normal' === u.type) {
                        if (((n = r.done ? v : l), u.arg === y)) continue;
                        return {value: u.arg, done: r.done};
                      }
                      'throw' === u.type &&
                        ((n = v), (r.method = 'throw'), (r.arg = u.arg));
                    }
                  };
                })(t, r, o)),
                a
              );
            }
            function f(t, e, r) {
              try {
                return {type: 'normal', arg: t.call(e, r)};
              } catch (t) {
                return {type: 'throw', arg: t};
              }
            }
            t.wrap = c;
            var h = 'suspendedStart',
              l = 'suspendedYield',
              p = 'executing',
              v = 'completed',
              y = {};
            function d() {}
            function g() {}
            function A() {}
            var m = {};
            m[a] = function () {
              return this;
            };
            var T = Object.getPrototypeOf,
              E = T && T(T(I([])));
            E && E !== r && n.call(E, a) && (m = E);
            var b = (A.prototype = d.prototype = Object.create(m));
            function S(t) {
              ['next', 'throw', 'return'].forEach(function (e) {
                u(t, e, function (t) {
                  return this._invoke(e, t);
                });
              });
            }
            function P(t, e) {
              function r(i, a, o, s) {
                var u = f(t[i], t, a);
                if ('throw' !== u.type) {
                  var c = u.arg,
                    h = c.value;
                  return h && 'object' == typeof h && n.call(h, '__await')
                    ? e.resolve(h.__await).then(
                        function (t) {
                          r('next', t, o, s);
                        },
                        function (t) {
                          r('throw', t, o, s);
                        },
                      )
                    : e.resolve(h).then(
                        function (t) {
                          (c.value = t), o(c);
                        },
                        function (t) {
                          return r('throw', t, o, s);
                        },
                      );
                }
                s(u.arg);
              }
              var i;
              this._invoke = function (t, n) {
                function a() {
                  return new e(function (e, i) {
                    r(t, n, e, i);
                  });
                }
                return (i = i ? i.then(a, a) : a());
              };
            }
            function _(t, r) {
              var n = t.iterator[r.method];
              if (n === e) {
                if (((r.delegate = null), 'throw' === r.method)) {
                  if (
                    t.iterator.return &&
                    ((r.method = 'return'),
                    (r.arg = e),
                    _(t, r),
                    'throw' === r.method)
                  )
                    return y;
                  (r.method = 'throw'),
                    (r.arg = new TypeError(
                      "The iterator does not provide a 'throw' method",
                    ));
                }
                return y;
              }
              var i = f(n, t.iterator, r.arg);
              if ('throw' === i.type)
                return (
                  (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y
                );
              var a = i.arg;
              return a
                ? a.done
                  ? ((r[t.resultName] = a.value),
                    (r.next = t.nextLoc),
                    'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                    (r.delegate = null),
                    y)
                  : a
                : ((r.method = 'throw'),
                  (r.arg = new TypeError('iterator result is not an object')),
                  (r.delegate = null),
                  y);
            }
            function w(t) {
              var e = {tryLoc: t[0]};
              1 in t && (e.catchLoc = t[1]),
                2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                this.tryEntries.push(e);
            }
            function x(t) {
              var e = t.completion || {};
              (e.type = 'normal'), delete e.arg, (t.completion = e);
            }
            function R(t) {
              (this.tryEntries = [{tryLoc: 'root'}]),
                t.forEach(w, this),
                this.reset(!0);
            }
            function I(t) {
              if (t) {
                var r = t[a];
                if (r) return r.call(t);
                if ('function' == typeof t.next) return t;
                if (!isNaN(t.length)) {
                  var i = -1,
                    o = function r() {
                      for (; ++i < t.length; )
                        if (n.call(t, i))
                          return (r.value = t[i]), (r.done = !1), r;
                      return (r.value = e), (r.done = !0), r;
                    };
                  return (o.next = o);
                }
              }
              return {next: D};
            }
            function D() {
              return {value: e, done: !0};
            }
            return (
              (g.prototype = b.constructor = A),
              (A.constructor = g),
              (g.displayName = u(A, s, 'GeneratorFunction')),
              (t.isGeneratorFunction = function (t) {
                var e = 'function' == typeof t && t.constructor;
                return (
                  !!e &&
                  (e === g || 'GeneratorFunction' === (e.displayName || e.name))
                );
              }),
              (t.mark = function (t) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, A)
                    : ((t.__proto__ = A), u(t, s, 'GeneratorFunction')),
                  (t.prototype = Object.create(b)),
                  t
                );
              }),
              (t.awrap = function (t) {
                return {__await: t};
              }),
              S(P.prototype),
              (P.prototype[o] = function () {
                return this;
              }),
              (t.AsyncIterator = P),
              (t.async = function (e, r, n, i, a) {
                void 0 === a && (a = Promise);
                var o = new P(c(e, r, n, i), a);
                return t.isGeneratorFunction(r)
                  ? o
                  : o.next().then(function (t) {
                      return t.done ? t.value : o.next();
                    });
              }),
              S(b),
              u(b, s, 'Generator'),
              (b[a] = function () {
                return this;
              }),
              (b.toString = function () {
                return '[object Generator]';
              }),
              (t.keys = function (t) {
                var e = [];
                for (var r in t) e.push(r);
                return (
                  e.reverse(),
                  function r() {
                    for (; e.length; ) {
                      var n = e.pop();
                      if (n in t) return (r.value = n), (r.done = !1), r;
                    }
                    return (r.done = !0), r;
                  }
                );
              }),
              (t.values = I),
              (R.prototype = {
                constructor: R,
                reset: function (t) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = e),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = e),
                    this.tryEntries.forEach(x),
                    !t)
                  )
                    for (var r in this)
                      't' === r.charAt(0) &&
                        n.call(this, r) &&
                        !isNaN(+r.slice(1)) &&
                        (this[r] = e);
                },
                stop: function () {
                  this.done = !0;
                  var t = this.tryEntries[0].completion;
                  if ('throw' === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (t) {
                  if (this.done) throw t;
                  var r = this;
                  function i(n, i) {
                    return (
                      (s.type = 'throw'),
                      (s.arg = t),
                      (r.next = n),
                      i && ((r.method = 'next'), (r.arg = e)),
                      !!i
                    );
                  }
                  for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                      s = o.completion;
                    if ('root' === o.tryLoc) return i('end');
                    if (o.tryLoc <= this.prev) {
                      var u = n.call(o, 'catchLoc'),
                        c = n.call(o, 'finallyLoc');
                      if (u && c) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                      } else if (u) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      } else {
                        if (!c)
                          throw new Error(
                            'try statement without catch or finally',
                          );
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (t, e) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (
                      i.tryLoc <= this.prev &&
                      n.call(i, 'finallyLoc') &&
                      this.prev < i.finallyLoc
                    ) {
                      var a = i;
                      break;
                    }
                  }
                  a &&
                    ('break' === t || 'continue' === t) &&
                    a.tryLoc <= e &&
                    e <= a.finallyLoc &&
                    (a = null);
                  var o = a ? a.completion : {};
                  return (
                    (o.type = t),
                    (o.arg = e),
                    a
                      ? ((this.method = 'next'), (this.next = a.finallyLoc), y)
                      : this.complete(o)
                  );
                },
                complete: function (t, e) {
                  if ('throw' === t.type) throw t.arg;
                  return (
                    'break' === t.type || 'continue' === t.type
                      ? (this.next = t.arg)
                      : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                    y
                  );
                },
                finish: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t)
                      return this.complete(r.completion, r.afterLoc), x(r), y;
                  }
                },
                catch: function (t) {
                  for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                      var n = r.completion;
                      if ('throw' === n.type) {
                        var i = n.arg;
                        x(r);
                      }
                      return i;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function (t, r, n) {
                  return (
                    (this.delegate = {
                      iterator: I(t),
                      resultName: r,
                      nextLoc: n,
                    }),
                    'next' === this.method && (this.arg = e),
                    y
                  );
                },
              }),
              t
            );
          })(t.exports);
          try {
            regeneratorRuntime = e;
          } catch (t) {
            Function('r', 'regeneratorRuntime = r')(e);
          }
        },
      },
      e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var i = (e[n] = {exports: {}});
      return t[n](i, i.exports, r), i.exports;
    }
    return (
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, {a: e}), e;
      }),
      (r.d = function (t, e) {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, {enumerable: !0, get: e[n]});
      }),
      (r.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (t) {
          if ('object' == typeof window) return window;
        }
      })()),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}),
          Object.defineProperty(t, '__esModule', {value: !0});
      }),
      r(3274)
    );
  })();
});
