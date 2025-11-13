
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => { // webpackBootstrap
var __webpack_modules__ = ({
487: (function () {
"use strict";
/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */ /*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */ /* prettier-ignore */ 
window.tram = function(a) {
    function b(a, b) {
        var c = new M.Bare;
        return c.init(a, b);
    }
    function c(a) {
        return a.replace(/[A-Z]/g, function(a) {
            return "-" + a.toLowerCase();
        });
    }
    function d(a) {
        var b = parseInt(a.slice(1), 16), c = b >> 16 & 255, d = b >> 8 & 255, e = 255 & b;
        return [
            c,
            d,
            e
        ];
    }
    function e(a, b, c) {
        return "#" + (1 << 24 | a << 16 | b << 8 | c).toString(16).slice(1);
    }
    function f() {}
    function g(a, b) {
        j("Type warning: Expected: [" + a + "] Got: [" + typeof b + "] " + b);
    }
    function h(a, b, c) {
        j("Units do not match [" + a + "]: " + b + ", " + c);
    }
    function i(a, b, c) {
        if (void 0 !== b && (c = b), void 0 === a) return c;
        var d = c;
        return $.test(a) || !_.test(a) ? d = parseInt(a, 10) : _.test(a) && (d = 1e3 * parseFloat(a)), 0 > d && (d = 0), d === d ? d : c;
    }
    function j(a) {
        U.debug && window && window.console.warn(a);
    }
    function k(a) {
        for(var b = -1, c = a ? a.length : 0, d = []; ++b < c;){
            var e = a[b];
            e && d.push(e);
        }
        return d;
    }
    var l = function(a, b, c) {
        function d(a) {
            return "object" == typeof a;
        }
        function e(a) {
            return "function" == typeof a;
        }
        function f() {}
        function g(h, i) {
            function j() {
                var a = new k;
                return e(a.init) && a.init.apply(a, arguments), a;
            }
            function k() {}
            i === c && (i = h, h = Object), j.Bare = k;
            var l, m = f[a] = h[a], n = k[a] = j[a] = new f;
            return n.constructor = j, j.mixin = function(b) {
                return k[a] = j[a] = g(j, b)[a], j;
            }, j.open = function(a) {
                if (l = {}, e(a) ? l = a.call(j, n, m, j, h) : d(a) && (l = a), d(l)) for(var c in l)b.call(l, c) && (n[c] = l[c]);
                return e(n.init) || (n.init = h), j;
            }, j.open(i);
        }
        return g;
    }("prototype", {}.hasOwnProperty), m = {
        ease: [
            "ease",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-2.75 * f * e + 11 * e * e + -15.5 * f + 8 * e + .25 * a);
            }
        ],
        "ease-in": [
            "ease-in",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (-1 * f * e + 3 * e * e + -3 * f + 2 * e);
            }
        ],
        "ease-out": [
            "ease-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (.3 * f * e + -1.6 * e * e + 2.2 * f + -1.8 * e + 1.9 * a);
            }
        ],
        "ease-in-out": [
            "ease-in-out",
            function(a, b, c, d) {
                var e = (a /= d) * a, f = e * a;
                return b + c * (2 * f * e + -5 * e * e + 2 * f + 2 * e);
            }
        ],
        linear: [
            "linear",
            function(a, b, c, d) {
                return c * a / d + b;
            }
        ],
        "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function(a, b, c, d) {
                return c * (a /= d) * a + b;
            }
        ],
        "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function(a, b, c, d) {
                return -c * (a /= d) * (a - 2) + b;
            }
        ],
        "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
            }
        ],
        "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a + b;
            }
        ],
        "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a + 1) + b;
            }
        ],
        "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b;
            }
        ],
        "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a + b;
            }
        ],
        "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function(a, b, c, d) {
                return -c * ((a = a / d - 1) * a * a * a - 1) + b;
            }
        ],
        "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b;
            }
        ],
        "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function(a, b, c, d) {
                return c * (a /= d) * a * a * a * a + b;
            }
        ],
        "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function(a, b, c, d) {
                return c * ((a = a / d - 1) * a * a * a * a + 1) + b;
            }
        ],
        "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b;
            }
        ],
        "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function(a, b, c, d) {
                return -c * Math.cos(a / d * (Math.PI / 2)) + c + b;
            }
        ],
        "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function(a, b, c, d) {
                return c * Math.sin(a / d * (Math.PI / 2)) + b;
            }
        ],
        "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function(a, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b;
            }
        ],
        "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function(a, b, c, d) {
                return 0 === a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b;
            }
        ],
        "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function(a, b, c, d) {
                return a === d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b;
            }
        ],
        "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function(a, b, c, d) {
                return 0 === a ? b : a === d ? b + c : (a /= d / 2) < 1 ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b;
            }
        ],
        "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function(a, b, c, d) {
                return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b;
            }
        ],
        "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function(a, b, c, d) {
                return c * Math.sqrt(1 - (a = a / d - 1) * a) + b;
            }
        ],
        "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function(a, b, c, d) {
                return (a /= d / 2) < 1 ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b;
            }
        ],
        "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * (a /= d) * a * ((e + 1) * a - e) + b;
            }
        ],
        "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), c * ((a = a / d - 1) * a * ((e + 1) * a + e) + 1) + b;
            }
        ],
        "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function(a, b, c, d, e) {
                return void 0 === e && (e = 1.70158), (a /= d / 2) < 1 ? c / 2 * a * a * (((e *= 1.525) + 1) * a - e) + b : c / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + b;
            }
        ]
    }, n = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
    }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = [
        "Webkit",
        "Moz",
        "O",
        "ms"
    ], E = [
        "-webkit-",
        "-moz-",
        "-o-",
        "-ms-"
    ], F = function(a) {
        if (a in C.style) return {
            dom: a,
            css: a
        };
        var b, c, d = "", e = a.split("-");
        for(b = 0; b < e.length; b++)d += e[b].charAt(0).toUpperCase() + e[b].slice(1);
        for(b = 0; b < D.length; b++)if (c = D[b] + d, c in C.style) return {
            dom: c,
            css: E[b] + a
        };
    }, G = b.support = {
        bind: Function.prototype.bind,
        transform: F("transform"),
        transition: F("transition"),
        backface: F("backface-visibility"),
        timing: F("transition-timing-function")
    };
    if (G.transition) {
        var H = G.timing.dom;
        if (C.style[H] = m["ease-in-back"][0], !C.style[H]) for(var I in n)m[I][0] = n[I];
    }
    var J = b.frame = function() {
        var a = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
        return a && G.bind ? a.bind(p) : function(a) {
            p.setTimeout(a, 16);
        };
    }(), K = b.now = function() {
        var a = p.performance, b = a && (a.now || a.webkitNow || a.msNow || a.mozNow);
        return b && G.bind ? b.bind(a) : Date.now || function() {
            return +new Date;
        };
    }(), L = l(function(b) {
        function d(a, b) {
            var c = k(("" + a).split(B)), d = c[0];
            b = b || {};
            var e = Y[d];
            if (!e) return j("Unsupported property: " + d);
            if (!b.weak || !this.props[d]) {
                var f = e[0], g = this.props[d];
                return g || (g = this.props[d] = new f.Bare), g.init(this.$el, c, e, b), g;
            }
        }
        function e(a, b, c) {
            if (a) {
                var e = typeof a;
                if (b || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == e && b) return this.timer = new S({
                    duration: a,
                    context: this,
                    complete: h
                }), void (this.active = !0);
                if ("string" == e && b) {
                    switch(a){
                        case "hide":
                            o.call(this);
                            break;
                        case "stop":
                            l.call(this);
                            break;
                        case "redraw":
                            p.call(this);
                            break;
                        default:
                            d.call(this, a, c && c[1]);
                    }
                    return h.call(this);
                }
                if ("function" == e) return void a.call(this, this);
                if ("object" == e) {
                    var f = 0;
                    u.call(this, a, function(a, b) {
                        a.span > f && (f = a.span), a.stop(), a.animate(b);
                    }, function(a) {
                        "wait" in a && (f = i(a.wait, 0));
                    }), t.call(this), f > 0 && (this.timer = new S({
                        duration: f,
                        context: this
                    }), this.active = !0, b && (this.timer.complete = h));
                    var g = this, j = !1, k = {};
                    J(function() {
                        u.call(g, a, function(a) {
                            a.active && (j = !0, k[a.name] = a.nextStyle);
                        }), j && g.$el.css(k);
                    });
                }
            }
        }
        function f(a) {
            a = i(a, 0), this.active ? this.queue.push({
                options: a
            }) : (this.timer = new S({
                duration: a,
                context: this,
                complete: h
            }), this.active = !0);
        }
        function g(a) {
            return this.active ? (this.queue.push({
                options: a,
                args: arguments
            }), void (this.timer.complete = h)) : j("No active transition timer. Use start() or wait() before then().");
        }
        function h() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                var a = this.queue.shift();
                e.call(this, a.options, !0, a.args);
            }
        }
        function l(a) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var b;
            "string" == typeof a ? (b = {}, b[a] = 1) : b = "object" == typeof a && null != a ? a : this.props, u.call(this, b, v), t.call(this);
        }
        function m(a) {
            l.call(this, a), u.call(this, a, w, x);
        }
        function n(a) {
            "string" != typeof a && (a = "block"), this.el.style.display = a;
        }
        function o() {
            l.call(this), this.el.style.display = "none";
        }
        function p() {
            this.el.offsetHeight;
        }
        function r() {
            l.call(this), a.removeData(this.el, q), this.$el = this.el = null;
        }
        function t() {
            var a, b, c = [];
            this.upstream && c.push(this.upstream);
            for(a in this.props)b = this.props[a], b.active && c.push(b.string);
            c = c.join(","), this.style !== c && (this.style = c, this.el.style[G.transition.dom] = c);
        }
        function u(a, b, e) {
            var f, g, h, i, j = b !== v, k = {};
            for(f in a)h = a[f], f in Z ? (k.transform || (k.transform = {}), k.transform[f] = h) : (s.test(f) && (f = c(f)), f in Y ? k[f] = h : (i || (i = {}), i[f] = h));
            for(f in k){
                if (h = k[f], g = this.props[f], !g) {
                    if (!j) continue;
                    g = d.call(this, f);
                }
                b.call(this, g, h);
            }
            e && i && e.call(this, i);
        }
        function v(a) {
            a.stop();
        }
        function w(a, b) {
            a.set(b);
        }
        function x(a) {
            this.$el.css(a);
        }
        function y(a, c) {
            b[a] = function() {
                return this.children ? A.call(this, c, arguments) : (this.el && c.apply(this, arguments), this);
            };
        }
        function A(a, b) {
            var c, d = this.children.length;
            for(c = 0; d > c; c++)a.apply(this.children[c], b);
            return this;
        }
        b.init = function(b) {
            if (this.$el = a(b), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, U.keepInherited && !U.fallback) {
                var c = W(this.el, "transition");
                c && !z.test(c) && (this.upstream = c);
            }
            G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
        }, y("add", d), y("start", e), y("wait", f), y("then", g), y("next", h), y("stop", l), y("set", m), y("show", n), y("hide", o), y("redraw", p), y("destroy", r);
    }), M = l(L, function(b) {
        function c(b, c) {
            var d = a.data(b, q) || a.data(b, q, new L.Bare);
            return d.el || d.init(b), c ? d.start(c) : d;
        }
        b.init = function(b, d) {
            var e = a(b);
            if (!e.length) return this;
            if (1 === e.length) return c(e[0], d);
            var f = [];
            return e.each(function(a, b) {
                f.push(c(b, d));
            }), this.children = f, this;
        };
    }), N = l(function(a) {
        function b() {
            var a = this.get();
            this.update("auto");
            var b = this.get();
            return this.update(a), b;
        }
        function c(a, b, c) {
            return void 0 !== b && (c = b), a in m ? a : c;
        }
        function d(a) {
            var b = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);
            return (b ? e(b[1], b[2], b[3]) : a).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
        }
        var f = {
            duration: 500,
            ease: "ease",
            delay: 0
        };
        a.init = function(a, b, d, e) {
            this.$el = a, this.el = a[0];
            var g = b[0];
            d[2] && (g = d[2]), X[g] && (g = X[g]), this.name = g, this.type = d[1], this.duration = i(b[1], this.duration, f.duration), this.ease = c(b[2], this.ease, f.ease), this.delay = i(b[3], this.delay, f.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e.unit || this.unit || U.defaultUnit, this.angle = e.angle || this.angle || U.defaultAngle, U.fallback || e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
        }, a.set = function(a) {
            a = this.convert(a, this.type), this.update(a), this.redraw();
        }, a.transition = function(a) {
            this.active = !0, a = this.convert(a, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a && (a = b.call(this))), this.nextStyle = a;
        }, a.fallback = function(a) {
            var c = this.el.style[this.name] || this.convert(this.get(), this.type);
            a = this.convert(a, this.type), this.auto && ("auto" == c && (c = this.convert(this.get(), this.type)), "auto" == a && (a = b.call(this))), this.tween = new R({
                from: c,
                to: a,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.get = function() {
            return W(this.el, this.name);
        }, a.update = function(a) {
            V(this.el, this.name, a);
        }, a.stop = function() {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, V(this.el, this.name, this.get()));
            var a = this.tween;
            a && a.context && a.destroy();
        }, a.convert = function(a, b) {
            if ("auto" == a && this.auto) return a;
            var c, e = "number" == typeof a, f = "string" == typeof a;
            switch(b){
                case t:
                    if (e) return a;
                    if (f && "" === a.replace(r, "")) return +a;
                    c = "number(unitless)";
                    break;
                case u:
                    if (f) {
                        if ("" === a && this.original) return this.original;
                        if (b.test(a)) return "#" == a.charAt(0) && 7 == a.length ? a : d(a);
                    }
                    c = "hex or rgb string";
                    break;
                case v:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit)";
                    break;
                case w:
                    if (e) return a + this.unit;
                    if (f && b.test(a)) return a;
                    c = "number(px) or string(unit or %)";
                    break;
                case x:
                    if (e) return a + this.angle;
                    if (f && b.test(a)) return a;
                    c = "number(deg) or string(angle)";
                    break;
                case y:
                    if (e) return a;
                    if (f && w.test(a)) return a;
                    c = "number(unitless) or string(unit or %)";
            }
            return g(c, a), a;
        }, a.redraw = function() {
            this.el.offsetHeight;
        };
    }), O = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
        };
    }), P = l(N, function(a, b) {
        a.init = function() {
            b.init.apply(this, arguments), this.animate = this.fallback;
        }, a.get = function() {
            return this.$el[this.name]();
        }, a.update = function(a) {
            this.$el[this.name](a);
        };
    }), Q = l(N, function(a, b) {
        function c(a, b) {
            var c, d, e, f, g;
            for(c in a)f = Z[c], e = f[0], d = f[1] || c, g = this.convert(a[c], e), b.call(this, d, g, e);
        }
        a.init = function() {
            b.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
        }, a.set = function(a) {
            c.call(this, a, function(a, b) {
                this.current[a] = b;
            }), V(this.el, this.name, this.style(this.current)), this.redraw();
        }, a.transition = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
            });
            var c, d = {};
            for(c in this.current)d[c] = c in b ? b[c] : this.current[c];
            this.active = !0, this.nextStyle = this.style(d);
        }, a.fallback = function(a) {
            var b = this.values(a);
            this.tween = new T({
                current: this.current,
                values: b,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
            });
        }, a.update = function() {
            V(this.el, this.name, this.style(this.current));
        }, a.style = function(a) {
            var b, c = "";
            for(b in a)c += b + "(" + a[b] + ") ";
            return c;
        }, a.values = function(a) {
            var b, d = {};
            return c.call(this, a, function(a, c, e) {
                d[a] = c, void 0 === this.current[a] && (b = 0, ~a.indexOf("scale") && (b = 1), this.current[a] = this.convert(b, e));
            }), d;
        };
    }), R = l(function(b) {
        function c(a) {
            1 === n.push(a) && J(g);
        }
        function g() {
            var a, b, c, d = n.length;
            if (d) for(J(g), b = K(), a = d; a--;)c = n[a], c && c.render(b);
        }
        function i(b) {
            var c, d = a.inArray(b, n);
            d >= 0 && (c = n.slice(d + 1), n.length = d, c.length && (n = n.concat(c)));
        }
        function j(a) {
            return Math.round(a * o) / o;
        }
        function k(a, b, c) {
            return e(a[0] + c * (b[0] - a[0]), a[1] + c * (b[1] - a[1]), a[2] + c * (b[2] - a[2]));
        }
        var l = {
            ease: m.ease[1],
            from: 0,
            to: 1
        };
        b.init = function(a) {
            this.duration = a.duration || 0, this.delay = a.delay || 0;
            var b = a.ease || l.ease;
            m[b] && (b = m[b][1]), "function" != typeof b && (b = l.ease), this.ease = b, this.update = a.update || f, this.complete = a.complete || f, this.context = a.context || this, this.name = a.name;
            var c = a.from, d = a.to;
            void 0 === c && (c = l.from), void 0 === d && (d = l.to), this.unit = a.unit || "", "number" == typeof c && "number" == typeof d ? (this.begin = c, this.change = d - c) : this.format(d, c), this.value = this.begin + this.unit, this.start = K(), a.autoplay !== !1 && this.play();
        }, b.play = function() {
            this.active || (this.start || (this.start = K()), this.active = !0, c(this));
        }, b.stop = function() {
            this.active && (this.active = !1, i(this));
        }, b.render = function(a) {
            var b, c = a - this.start;
            if (this.delay) {
                if (c <= this.delay) return;
                c -= this.delay;
            }
            if (c < this.duration) {
                var d = this.ease(c, 0, 1, this.duration);
                return b = this.startRGB ? k(this.startRGB, this.endRGB, d) : j(this.begin + d * this.change), this.value = b + this.unit, void this.update.call(this.context, this.value);
            }
            b = this.endHex || this.begin + this.change, this.value = b + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
        }, b.format = function(a, b) {
            if (b += "", a += "", "#" == a.charAt(0)) return this.startRGB = d(b), this.endRGB = d(a), this.endHex = a, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
                var c = b.replace(r, ""), e = a.replace(r, "");
                c !== e && h("tween", b, a), this.unit = c;
            }
            b = parseFloat(b), a = parseFloat(a), this.begin = this.value = b, this.change = a - b;
        }, b.destroy = function() {
            this.stop(), this.context = null, this.ease = this.update = this.complete = f;
        };
        var n = [], o = 1e3;
    }), S = l(R, function(a) {
        a.init = function(a) {
            this.duration = a.duration || 0, this.complete = a.complete || f, this.context = a.context, this.play();
        }, a.render = function(a) {
            var b = a - this.start;
            b < this.duration || (this.complete.call(this.context), this.destroy());
        };
    }), T = l(R, function(a, b) {
        a.init = function(a) {
            this.context = a.context, this.update = a.update, this.tweens = [], this.current = a.current;
            var b, c;
            for(b in a.values)c = a.values[b], this.current[b] !== c && this.tweens.push(new R({
                name: b,
                from: this.current[b],
                to: c,
                duration: a.duration,
                delay: a.delay,
                ease: a.ease,
                autoplay: !1
            }));
            this.play();
        }, a.render = function(a) {
            var b, c, d = this.tweens.length, e = !1;
            for(b = d; b--;)c = this.tweens[b], c.context && (c.render(a), this.current[c.name] = c.value, e = !0);
            return e ? void (this.update && this.update.call(this.context)) : this.destroy();
        }, a.destroy = function() {
            if (b.destroy.call(this), this.tweens) {
                var a, c = this.tweens.length;
                for(a = c; a--;)this.tweens[a].destroy();
                this.tweens = null, this.current = null;
            }
        };
    }), U = b.config = {
        debug: !1,
        defaultUnit: "px",
        defaultAngle: "deg",
        keepInherited: !1,
        hideBackface: !1,
        perspective: "",
        fallback: !G.transition,
        agentTests: []
    };
    b.fallback = function(a) {
        if (!G.transition) return U.fallback = !0;
        U.agentTests.push("(" + a + ")");
        var b = new RegExp(U.agentTests.join("|"), "i");
        U.fallback = b.test(navigator.userAgent);
    }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a) {
        return new R(a);
    }, b.delay = function(a, b, c) {
        return new S({
            complete: b,
            duration: a,
            context: c
        });
    }, a.fn.tram = function(a) {
        return b.call(null, this, a);
    };
    var V = a.style, W = a.css, X = {
        transform: G.transform && G.transform.css
    }, Y = {
        color: [
            O,
            u
        ],
        background: [
            O,
            u,
            "background-color"
        ],
        "outline-color": [
            O,
            u
        ],
        "border-color": [
            O,
            u
        ],
        "border-top-color": [
            O,
            u
        ],
        "border-right-color": [
            O,
            u
        ],
        "border-bottom-color": [
            O,
            u
        ],
        "border-left-color": [
            O,
            u
        ],
        "border-width": [
            N,
            v
        ],
        "border-top-width": [
            N,
            v
        ],
        "border-right-width": [
            N,
            v
        ],
        "border-bottom-width": [
            N,
            v
        ],
        "border-left-width": [
            N,
            v
        ],
        "border-spacing": [
            N,
            v
        ],
        "letter-spacing": [
            N,
            v
        ],
        margin: [
            N,
            v
        ],
        "margin-top": [
            N,
            v
        ],
        "margin-right": [
            N,
            v
        ],
        "margin-bottom": [
            N,
            v
        ],
        "margin-left": [
            N,
            v
        ],
        padding: [
            N,
            v
        ],
        "padding-top": [
            N,
            v
        ],
        "padding-right": [
            N,
            v
        ],
        "padding-bottom": [
            N,
            v
        ],
        "padding-left": [
            N,
            v
        ],
        "outline-width": [
            N,
            v
        ],
        opacity: [
            N,
            t
        ],
        top: [
            N,
            w
        ],
        right: [
            N,
            w
        ],
        bottom: [
            N,
            w
        ],
        left: [
            N,
            w
        ],
        "font-size": [
            N,
            w
        ],
        "text-indent": [
            N,
            w
        ],
        "word-spacing": [
            N,
            w
        ],
        width: [
            N,
            w
        ],
        "min-width": [
            N,
            w
        ],
        "max-width": [
            N,
            w
        ],
        height: [
            N,
            w
        ],
        "min-height": [
            N,
            w
        ],
        "max-height": [
            N,
            w
        ],
        "line-height": [
            N,
            y
        ],
        "scroll-top": [
            P,
            t,
            "scrollTop"
        ],
        "scroll-left": [
            P,
            t,
            "scrollLeft"
        ]
    }, Z = {};
    G.transform && (Y.transform = [
        Q
    ], Z = {
        x: [
            w,
            "translateX"
        ],
        y: [
            w,
            "translateY"
        ],
        rotate: [
            x
        ],
        rotateX: [
            x
        ],
        rotateY: [
            x
        ],
        scale: [
            t
        ],
        scaleX: [
            t
        ],
        scaleY: [
            t
        ],
        skew: [
            x
        ],
        skewX: [
            x
        ],
        skewY: [
            x
        ]
    }), G.transform && G.backface && (Z.z = [
        w,
        "translateZ"
    ], Z.rotateZ = [
        x
    ], Z.scaleZ = [
        t
    ], Z.perspective = [
        v
    ]);
    var $ = /ms/, _ = /s|\./;
    return a.tram = b;
}(window.jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW0tbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIVxuICogdHJhbS5qcyB2MC44LjItZ2xvYmFsXG4gKiBDcm9zcy1icm93c2VyIENTUzMgdHJhbnNpdGlvbnMgaW4gSmF2YVNjcmlwdFxuICogaHR0cHM6Ly9naXRodWIuY29tL2Jrd2xkL3RyYW1cbiAqIE1JVCBMaWNlbnNlXG4gKi9cbi8qIHByZXR0aWVyLWlnbm9yZSAqL1xud2luZG93LnRyYW09ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihhLGIpe3ZhciBjPW5ldyBNLkJhcmU7cmV0dXJuIGMuaW5pdChhLGIpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGEucmVwbGFjZSgvW0EtWl0vZyxmdW5jdGlvbihhKXtyZXR1cm5cIi1cIithLnRvTG93ZXJDYXNlKCl9KTt9ZnVuY3Rpb24gZChhKXt2YXIgYj1wYXJzZUludChhLnNsaWNlKDEpLDE2KSxjPWI+PjE2JjI1NSxkPWI+PjgmMjU1LGU9MjU1JmI7cmV0dXJuW2MsZCxlXX1mdW5jdGlvbiBlKGEsYixjKXtyZXR1cm5cIiNcIisoMTw8MjR8YTw8MTZ8Yjw8OHxjKS50b1N0cmluZygxNikuc2xpY2UoMSl9ZnVuY3Rpb24gZigpe31mdW5jdGlvbiBnKGEsYil7aihcIlR5cGUgd2FybmluZzogRXhwZWN0ZWQ6IFtcIithK1wiXSBHb3Q6IFtcIit0eXBlb2YgYitcIl0gXCIrYil9ZnVuY3Rpb24gaChhLGIsYyl7aihcIlVuaXRzIGRvIG5vdCBtYXRjaCBbXCIrYStcIl06IFwiK2IrXCIsIFwiK2MpfWZ1bmN0aW9uIGkoYSxiLGMpe2lmKHZvaWQgMCE9PWImJihjPWIpLHZvaWQgMD09PWEpcmV0dXJuIGM7dmFyIGQ9YztyZXR1cm4gJC50ZXN0KGEpfHwhXy50ZXN0KGEpP2Q9cGFyc2VJbnQoYSwxMCk6Xy50ZXN0KGEpJiYoZD0xZTMqcGFyc2VGbG9hdChhKSksMD5kJiYoZD0wKSxkPT09ZD9kOmN9ZnVuY3Rpb24gaihhKXtVLmRlYnVnJiZ3aW5kb3cmJndpbmRvdy5jb25zb2xlLndhcm4oYSl9ZnVuY3Rpb24gayhhKXtmb3IodmFyIGI9LTEsYz1hP2EubGVuZ3RoOjAsZD1bXTsrK2I8Yzspe3ZhciBlPWFbYl07ZSYmZC5wdXNoKGUpfXJldHVybiBkfXZhciBsPWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhfWZ1bmN0aW9uIGUoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYX1mdW5jdGlvbiBmKCl7fWZ1bmN0aW9uIGcoaCxpKXtmdW5jdGlvbiBqKCl7dmFyIGE9bmV3IGs7cmV0dXJuIGUoYS5pbml0KSYmYS5pbml0LmFwcGx5KGEsYXJndW1lbnRzKSxhfWZ1bmN0aW9uIGsoKXt9aT09PWMmJihpPWgsaD1PYmplY3QpLGouQmFyZT1rO3ZhciBsLG09ZlthXT1oW2FdLG49a1thXT1qW2FdPW5ldyBmO3JldHVybiBuLmNvbnN0cnVjdG9yPWosai5taXhpbj1mdW5jdGlvbihiKXtyZXR1cm4ga1thXT1qW2FdPWcoaixiKVthXSxqfSxqLm9wZW49ZnVuY3Rpb24oYSl7aWYobD17fSxlKGEpP2w9YS5jYWxsKGosbixtLGosaCk6ZChhKSYmKGw9YSksZChsKSlmb3IodmFyIGMgaW4gbCliLmNhbGwobCxjKSYmKG5bY109bFtjXSk7cmV0dXJuIGUobi5pbml0KXx8KG4uaW5pdD1oKSxqfSxqLm9wZW4oaSl9cmV0dXJuIGd9KFwicHJvdG90eXBlXCIse30uaGFzT3duUHJvcGVydHkpLG09e2Vhc2U6W1wiZWFzZVwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKC0yLjc1KmYqZSsxMSplKmUrLTE1LjUqZis4KmUrLjI1KmEpfV0sXCJlYXNlLWluXCI6W1wiZWFzZS1pblwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKC0xKmYqZSszKmUqZSstMypmKzIqZSl9XSxcImVhc2Utb3V0XCI6W1wiZWFzZS1vdXRcIixmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT0oYS89ZCkqYSxmPWUqYTtyZXR1cm4gYitjKiguMypmKmUrLTEuNiplKmUrMi4yKmYrLTEuOCplKzEuOSphKX1dLFwiZWFzZS1pbi1vdXRcIjpbXCJlYXNlLWluLW91dFwiLGZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPShhLz1kKSphLGY9ZSphO3JldHVybiBiK2MqKDIqZiplKy01KmUqZSsyKmYrMiplKX1dLGxpbmVhcjpbXCJsaW5lYXJcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyphL2QrYn1dLFwiZWFzZS1pbi1xdWFkXCI6W1wiY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKihhLz1kKSphK2J9XSxcImVhc2Utb3V0LXF1YWRcIjpbXCJjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuLWMqKGEvPWQpKihhLTIpK2J9XSxcImVhc2UtaW4tb3V0LXF1YWRcIjpbXCJjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMwLCAwLjUxNSwgMC45NTUpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphK2I6LWMvMiooLS1hKihhLTIpLTEpK2J9XSxcImVhc2UtaW4tY3ViaWNcIjpbXCJjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKGEvPWQpKmEqYStifV0sXCJlYXNlLW91dC1jdWJpY1wiOltcImN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKigoYT1hL2QtMSkqYSphKzEpK2J9XSxcImVhc2UtaW4tb3V0LWN1YmljXCI6W1wiY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphKmErYjpjLzIqKChhLT0yKSphKmErMikrYn1dLFwiZWFzZS1pbi1xdWFydFwiOltcImN1YmljLWJlemllcigwLjg5NSwgMC4wMzAsIDAuNjg1LCAwLjIyMClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYyooYS89ZCkqYSphKmErYn1dLFwiZWFzZS1vdXQtcXVhcnRcIjpbXCJjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYyooKGE9YS9kLTEpKmEqYSphLTEpK2J9XSxcImVhc2UtaW4tb3V0LXF1YXJ0XCI6W1wiY3ViaWMtYmV6aWVyKDAuNzcwLCAwLCAwLjE3NSwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxP2MvMiphKmEqYSphK2I6LWMvMiooKGEtPTIpKmEqYSphLTIpK2J9XSxcImVhc2UtaW4tcXVpbnRcIjpbXCJjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGMqKGEvPWQpKmEqYSphKmErYn1dLFwiZWFzZS1vdXQtcXVpbnRcIjpbXCJjdWJpYy1iZXppZXIoMC4yMzAsIDEsIDAuMzIwLCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKigoYT1hL2QtMSkqYSphKmEqYSsxKStifV0sXCJlYXNlLWluLW91dC1xdWludFwiOltcImN1YmljLWJlemllcigwLjg2MCwgMCwgMC4wNzAsIDEpXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuKGEvPWQvMik8MT9jLzIqYSphKmEqYSphK2I6Yy8yKigoYS09MikqYSphKmEqYSsyKStifV0sXCJlYXNlLWluLXNpbmVcIjpbXCJjdWJpYy1iZXppZXIoMC40NzAsIDAsIDAuNzQ1LCAwLjcxNSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYypNYXRoLmNvcyhhL2QqKE1hdGguUEkvMikpK2MrYn1dLFwiZWFzZS1vdXQtc2luZVwiOltcImN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxKVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBjKk1hdGguc2luKGEvZCooTWF0aC5QSS8yKSkrYn1dLFwiZWFzZS1pbi1vdXQtc2luZVwiOltcImN1YmljLWJlemllcigwLjQ0NSwgMC4wNTAsIDAuNTUwLCAwLjk1MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYy8yKihNYXRoLmNvcyhNYXRoLlBJKmEvZCktMSkrYn1dLFwiZWFzZS1pbi1leHBvXCI6W1wiY3ViaWMtYmV6aWVyKDAuOTUwLCAwLjA1MCwgMC43OTUsIDAuMDM1KVwiLGZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiAwPT09YT9iOmMqTWF0aC5wb3coMiwxMCooYS9kLTEpKStifV0sXCJlYXNlLW91dC1leHBvXCI6W1wiY3ViaWMtYmV6aWVyKDAuMTkwLCAxLCAwLjIyMCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYT09PWQ/YitjOmMqKC1NYXRoLnBvdygyLC0xMCphL2QpKzEpK2J9XSxcImVhc2UtaW4tb3V0LWV4cG9cIjpbXCJjdWJpYy1iZXppZXIoMSwgMCwgMCwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gMD09PWE/YjphPT09ZD9iK2M6KGEvPWQvMik8MT9jLzIqTWF0aC5wb3coMiwxMCooYS0xKSkrYjpjLzIqKC1NYXRoLnBvdygyLC0xMCotLWEpKzIpK2J9XSxcImVhc2UtaW4tY2lyY1wiOltcImN1YmljLWJlemllcigwLjYwMCwgMC4wNDAsIDAuOTgwLCAwLjMzNSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4tYyooTWF0aC5zcXJ0KDEtKGEvPWQpKmEpLTEpK2J9XSxcImVhc2Utb3V0LWNpcmNcIjpbXCJjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIwLCAwLjE2NSwgMSlcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYypNYXRoLnNxcnQoMS0oYT1hL2QtMSkqYSkrYn1dLFwiZWFzZS1pbi1vdXQtY2lyY1wiOltcImN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUwLCAwLjg2MClcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4oYS89ZC8yKTwxPy1jLzIqKE1hdGguc3FydCgxLWEqYSktMSkrYjpjLzIqKE1hdGguc3FydCgxLShhLT0yKSphKSsxKStifV0sXCJlYXNlLWluLWJhY2tcIjpbXCJjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KVwiLGZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPTEuNzAxNTgpLGMqKGEvPWQpKmEqKChlKzEpKmEtZSkrYn1dLFwiZWFzZS1vdXQtYmFja1wiOltcImN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjI3NSlcIixmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0xLjcwMTU4KSxjKigoYT1hL2QtMSkqYSooKGUrMSkqYStlKSsxKStifV0sXCJlYXNlLWluLW91dC1iYWNrXCI6W1wiY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MClcIixmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0xLjcwMTU4KSwoYS89ZC8yKTwxP2MvMiphKmEqKCgoZSo9MS41MjUpKzEpKmEtZSkrYjpjLzIqKChhLT0yKSphKigoKGUqPTEuNTI1KSsxKSphK2UpKzIpK2J9XX0sbj17XCJlYXNlLWluLWJhY2tcIjpcImN1YmljLWJlemllcigwLjYwMCwgMCwgMC43MzUsIDAuMDQ1KVwiLFwiZWFzZS1vdXQtYmFja1wiOlwiY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpXCIsXCJlYXNlLWluLW91dC1iYWNrXCI6XCJjdWJpYy1iZXppZXIoMC42ODAsIDAsIDAuMjY1LCAxKVwifSxvPWRvY3VtZW50LHA9d2luZG93LHE9XCJia3dsZC10cmFtXCIscj0vW1xcLVxcLjAtOV0vZyxzPS9bQS1aXS8sdD1cIm51bWJlclwiLHU9L14ocmdifCMpLyx2PS8oZW18Y218bW18aW58cHR8cGN8cHgpJC8sdz0vKGVtfGNtfG1tfGlufHB0fHBjfHB4fCUpJC8seD0vKGRlZ3xyYWR8dHVybikkLyx5PVwidW5pdGxlc3NcIix6PS8oYWxsfG5vbmUpIDBzIGVhc2UgMHMvLEE9L14od2lkdGh8aGVpZ2h0KSQvLEI9XCIgXCIsQz1vLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLEQ9W1wiV2Via2l0XCIsXCJNb3pcIixcIk9cIixcIm1zXCJdLEU9W1wiLXdlYmtpdC1cIixcIi1tb3otXCIsXCItby1cIixcIi1tcy1cIl0sRj1mdW5jdGlvbihhKXtpZihhIGluIEMuc3R5bGUpcmV0dXJue2RvbTphLGNzczphfTt2YXIgYixjLGQ9XCJcIixlPWEuc3BsaXQoXCItXCIpO2ZvcihiPTA7YjxlLmxlbmd0aDtiKyspZCs9ZVtiXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlW2JdLnNsaWNlKDEpO2ZvcihiPTA7YjxELmxlbmd0aDtiKyspaWYoYz1EW2JdK2QsYyBpbiBDLnN0eWxlKXJldHVybntkb206Yyxjc3M6RVtiXSthfX0sRz1iLnN1cHBvcnQ9e2JpbmQ6RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQsdHJhbnNmb3JtOkYoXCJ0cmFuc2Zvcm1cIiksdHJhbnNpdGlvbjpGKFwidHJhbnNpdGlvblwiKSxiYWNrZmFjZTpGKFwiYmFja2ZhY2UtdmlzaWJpbGl0eVwiKSx0aW1pbmc6RihcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCIpfTtpZihHLnRyYW5zaXRpb24pe3ZhciBIPUcudGltaW5nLmRvbTtpZihDLnN0eWxlW0hdPW1bXCJlYXNlLWluLWJhY2tcIl1bMF0sIUMuc3R5bGVbSF0pZm9yKHZhciBJIGluIG4pbVtJXVswXT1uW0ldfXZhciBKPWIuZnJhbWU9ZnVuY3Rpb24oKXt2YXIgYT1wLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8cC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHAubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxwLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHAubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7cmV0dXJuIGEmJkcuYmluZD9hLmJpbmQocCk6ZnVuY3Rpb24oYSl7cC5zZXRUaW1lb3V0KGEsMTYpfX0oKSxLPWIubm93PWZ1bmN0aW9uKCl7dmFyIGE9cC5wZXJmb3JtYW5jZSxiPWEmJihhLm5vd3x8YS53ZWJraXROb3d8fGEubXNOb3d8fGEubW96Tm93KTtyZXR1cm4gYiYmRy5iaW5kP2IuYmluZChhKTpEYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9fSgpLEw9bChmdW5jdGlvbihiKXtmdW5jdGlvbiBkKGEsYil7dmFyIGM9aygoXCJcIithKS5zcGxpdChCKSksZD1jWzBdO2I9Ynx8e307dmFyIGU9WVtkXTtpZighZSlyZXR1cm4gaihcIlVuc3VwcG9ydGVkIHByb3BlcnR5OiBcIitkKTtpZighYi53ZWFrfHwhdGhpcy5wcm9wc1tkXSl7dmFyIGY9ZVswXSxnPXRoaXMucHJvcHNbZF07cmV0dXJuIGd8fChnPXRoaXMucHJvcHNbZF09bmV3IGYuQmFyZSksZy5pbml0KHRoaXMuJGVsLGMsZSxiKSxnfX1mdW5jdGlvbiBlKGEsYixjKXtpZihhKXt2YXIgZT10eXBlb2YgYTtpZihifHwodGhpcy50aW1lciYmdGhpcy50aW1lci5kZXN0cm95KCksdGhpcy5xdWV1ZT1bXSx0aGlzLmFjdGl2ZT0hMSksXCJudW1iZXJcIj09ZSYmYilyZXR1cm4gdGhpcy50aW1lcj1uZXcgUyh7ZHVyYXRpb246YSxjb250ZXh0OnRoaXMsY29tcGxldGU6aH0pLHZvaWQodGhpcy5hY3RpdmU9ITApO2lmKFwic3RyaW5nXCI9PWUmJmIpe3N3aXRjaChhKXtjYXNlXCJoaWRlXCI6by5jYWxsKHRoaXMpO2JyZWFrO2Nhc2VcInN0b3BcIjpsLmNhbGwodGhpcyk7YnJlYWs7Y2FzZVwicmVkcmF3XCI6cC5jYWxsKHRoaXMpO2JyZWFrO2RlZmF1bHQ6ZC5jYWxsKHRoaXMsYSxjJiZjWzFdKX1yZXR1cm4gaC5jYWxsKHRoaXMpfWlmKFwiZnVuY3Rpb25cIj09ZSlyZXR1cm4gdm9pZCBhLmNhbGwodGhpcyx0aGlzKTtpZihcIm9iamVjdFwiPT1lKXt2YXIgZj0wO3UuY2FsbCh0aGlzLGEsZnVuY3Rpb24oYSxiKXthLnNwYW4+ZiYmKGY9YS5zcGFuKSxhLnN0b3AoKSxhLmFuaW1hdGUoYil9LGZ1bmN0aW9uKGEpe1wid2FpdFwiaW4gYSYmKGY9aShhLndhaXQsMCkpfSksdC5jYWxsKHRoaXMpLGY+MCYmKHRoaXMudGltZXI9bmV3IFMoe2R1cmF0aW9uOmYsY29udGV4dDp0aGlzfSksdGhpcy5hY3RpdmU9ITAsYiYmKHRoaXMudGltZXIuY29tcGxldGU9aCkpO3ZhciBnPXRoaXMsaj0hMSxrPXt9O0ooZnVuY3Rpb24oKXt1LmNhbGwoZyxhLGZ1bmN0aW9uKGEpe2EuYWN0aXZlJiYoaj0hMCxrW2EubmFtZV09YS5uZXh0U3R5bGUpfSksaiYmZy4kZWwuY3NzKGspfSl9fX1mdW5jdGlvbiBmKGEpe2E9aShhLDApLHRoaXMuYWN0aXZlP3RoaXMucXVldWUucHVzaCh7b3B0aW9uczphfSk6KHRoaXMudGltZXI9bmV3IFMoe2R1cmF0aW9uOmEsY29udGV4dDp0aGlzLGNvbXBsZXRlOmh9KSx0aGlzLmFjdGl2ZT0hMCl9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gdGhpcy5hY3RpdmU/KHRoaXMucXVldWUucHVzaCh7b3B0aW9uczphLGFyZ3M6YXJndW1lbnRzfSksdm9pZCh0aGlzLnRpbWVyLmNvbXBsZXRlPWgpKTpqKFwiTm8gYWN0aXZlIHRyYW5zaXRpb24gdGltZXIuIFVzZSBzdGFydCgpIG9yIHdhaXQoKSBiZWZvcmUgdGhlbigpLlwiKX1mdW5jdGlvbiBoKCl7aWYodGhpcy50aW1lciYmdGhpcy50aW1lci5kZXN0cm95KCksdGhpcy5hY3RpdmU9ITEsdGhpcy5xdWV1ZS5sZW5ndGgpe3ZhciBhPXRoaXMucXVldWUuc2hpZnQoKTtlLmNhbGwodGhpcyxhLm9wdGlvbnMsITAsYS5hcmdzKX19ZnVuY3Rpb24gbChhKXt0aGlzLnRpbWVyJiZ0aGlzLnRpbWVyLmRlc3Ryb3koKSx0aGlzLnF1ZXVlPVtdLHRoaXMuYWN0aXZlPSExO3ZhciBiO1wic3RyaW5nXCI9PXR5cGVvZiBhPyhiPXt9LGJbYV09MSk6Yj1cIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9YT9hOnRoaXMucHJvcHMsdS5jYWxsKHRoaXMsYix2KSx0LmNhbGwodGhpcyl9ZnVuY3Rpb24gbShhKXtsLmNhbGwodGhpcyxhKSx1LmNhbGwodGhpcyxhLHcseCl9ZnVuY3Rpb24gbihhKXtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGE9XCJibG9ja1wiKSx0aGlzLmVsLnN0eWxlLmRpc3BsYXk9YX1mdW5jdGlvbiBvKCl7bC5jYWxsKHRoaXMpLHRoaXMuZWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn1mdW5jdGlvbiBwKCl7dGhpcy5lbC5vZmZzZXRIZWlnaHR9ZnVuY3Rpb24gcigpe2wuY2FsbCh0aGlzKSxhLnJlbW92ZURhdGEodGhpcy5lbCxxKSx0aGlzLiRlbD10aGlzLmVsPW51bGx9ZnVuY3Rpb24gdCgpe3ZhciBhLGIsYz1bXTt0aGlzLnVwc3RyZWFtJiZjLnB1c2godGhpcy51cHN0cmVhbSk7Zm9yKGEgaW4gdGhpcy5wcm9wcyliPXRoaXMucHJvcHNbYV0sYi5hY3RpdmUmJmMucHVzaChiLnN0cmluZyk7Yz1jLmpvaW4oXCIsXCIpLHRoaXMuc3R5bGUhPT1jJiYodGhpcy5zdHlsZT1jLHRoaXMuZWwuc3R5bGVbRy50cmFuc2l0aW9uLmRvbV09Yyl9ZnVuY3Rpb24gdShhLGIsZSl7dmFyIGYsZyxoLGksaj1iIT09dixrPXt9O2ZvcihmIGluIGEpaD1hW2ZdLGYgaW4gWj8oay50cmFuc2Zvcm18fChrLnRyYW5zZm9ybT17fSksay50cmFuc2Zvcm1bZl09aCk6KHMudGVzdChmKSYmKGY9YyhmKSksZiBpbiBZP2tbZl09aDooaXx8KGk9e30pLGlbZl09aCkpO2ZvcihmIGluIGspe2lmKGg9a1tmXSxnPXRoaXMucHJvcHNbZl0sIWcpe2lmKCFqKWNvbnRpbnVlO2c9ZC5jYWxsKHRoaXMsZil9Yi5jYWxsKHRoaXMsZyxoKX1lJiZpJiZlLmNhbGwodGhpcyxpKX1mdW5jdGlvbiB2KGEpe2Euc3RvcCgpfWZ1bmN0aW9uIHcoYSxiKXthLnNldChiKX1mdW5jdGlvbiB4KGEpe3RoaXMuJGVsLmNzcyhhKX1mdW5jdGlvbiB5KGEsYyl7YlthXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNoaWxkcmVuP0EuY2FsbCh0aGlzLGMsYXJndW1lbnRzKToodGhpcy5lbCYmYy5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcyl9fWZ1bmN0aW9uIEEoYSxiKXt2YXIgYyxkPXRoaXMuY2hpbGRyZW4ubGVuZ3RoO2ZvcihjPTA7ZD5jO2MrKylhLmFwcGx5KHRoaXMuY2hpbGRyZW5bY10sYik7cmV0dXJuIHRoaXN9Yi5pbml0PWZ1bmN0aW9uKGIpe2lmKHRoaXMuJGVsPWEoYiksdGhpcy5lbD10aGlzLiRlbFswXSx0aGlzLnByb3BzPXt9LHRoaXMucXVldWU9W10sdGhpcy5zdHlsZT1cIlwiLHRoaXMuYWN0aXZlPSExLFUua2VlcEluaGVyaXRlZCYmIVUuZmFsbGJhY2spe3ZhciBjPVcodGhpcy5lbCxcInRyYW5zaXRpb25cIik7YyYmIXoudGVzdChjKSYmKHRoaXMudXBzdHJlYW09Yyl9Ry5iYWNrZmFjZSYmVS5oaWRlQmFja2ZhY2UmJlYodGhpcy5lbCxHLmJhY2tmYWNlLmNzcyxcImhpZGRlblwiKX0seShcImFkZFwiLGQpLHkoXCJzdGFydFwiLGUpLHkoXCJ3YWl0XCIsZikseShcInRoZW5cIixnKSx5KFwibmV4dFwiLGgpLHkoXCJzdG9wXCIsbCkseShcInNldFwiLG0pLHkoXCJzaG93XCIsbikseShcImhpZGVcIixvKSx5KFwicmVkcmF3XCIscCkseShcImRlc3Ryb3lcIixyKX0pLE09bChMLGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYixjKXt2YXIgZD1hLmRhdGEoYixxKXx8YS5kYXRhKGIscSxuZXcgTC5CYXJlKTtyZXR1cm4gZC5lbHx8ZC5pbml0KGIpLGM/ZC5zdGFydChjKTpkfWIuaW5pdD1mdW5jdGlvbihiLGQpe3ZhciBlPWEoYik7aWYoIWUubGVuZ3RoKXJldHVybiB0aGlzO2lmKDE9PT1lLmxlbmd0aClyZXR1cm4gYyhlWzBdLGQpO3ZhciBmPVtdO3JldHVybiBlLmVhY2goZnVuY3Rpb24oYSxiKXtmLnB1c2goYyhiLGQpKX0pLHRoaXMuY2hpbGRyZW49Zix0aGlzfX0pLE49bChmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGE9dGhpcy5nZXQoKTt0aGlzLnVwZGF0ZShcImF1dG9cIik7dmFyIGI9dGhpcy5nZXQoKTtyZXR1cm4gdGhpcy51cGRhdGUoYSksYn1mdW5jdGlvbiBjKGEsYixjKXtyZXR1cm4gdm9pZCAwIT09YiYmKGM9YiksYSBpbiBtP2E6Y31mdW5jdGlvbiBkKGEpe3ZhciBiPS9yZ2JhP1xcKChcXGQrKSxcXHMqKFxcZCspLFxccyooXFxkKykvLmV4ZWMoYSk7cmV0dXJuIChiP2UoYlsxXSxiWzJdLGJbM10pOmEpLnJlcGxhY2UoLyMoXFx3KShcXHcpKFxcdykkLyxcIiMkMSQxJDIkMiQzJDNcIik7fXZhciBmPXtkdXJhdGlvbjo1MDAsZWFzZTpcImVhc2VcIixkZWxheTowfTthLmluaXQ9ZnVuY3Rpb24oYSxiLGQsZSl7dGhpcy4kZWw9YSx0aGlzLmVsPWFbMF07dmFyIGc9YlswXTtkWzJdJiYoZz1kWzJdKSxYW2ddJiYoZz1YW2ddKSx0aGlzLm5hbWU9Zyx0aGlzLnR5cGU9ZFsxXSx0aGlzLmR1cmF0aW9uPWkoYlsxXSx0aGlzLmR1cmF0aW9uLGYuZHVyYXRpb24pLHRoaXMuZWFzZT1jKGJbMl0sdGhpcy5lYXNlLGYuZWFzZSksdGhpcy5kZWxheT1pKGJbM10sdGhpcy5kZWxheSxmLmRlbGF5KSx0aGlzLnNwYW49dGhpcy5kdXJhdGlvbit0aGlzLmRlbGF5LHRoaXMuYWN0aXZlPSExLHRoaXMubmV4dFN0eWxlPW51bGwsdGhpcy5hdXRvPUEudGVzdCh0aGlzLm5hbWUpLHRoaXMudW5pdD1lLnVuaXR8fHRoaXMudW5pdHx8VS5kZWZhdWx0VW5pdCx0aGlzLmFuZ2xlPWUuYW5nbGV8fHRoaXMuYW5nbGV8fFUuZGVmYXVsdEFuZ2xlLFUuZmFsbGJhY2t8fGUuZmFsbGJhY2s/dGhpcy5hbmltYXRlPXRoaXMuZmFsbGJhY2s6KHRoaXMuYW5pbWF0ZT10aGlzLnRyYW5zaXRpb24sdGhpcy5zdHJpbmc9dGhpcy5uYW1lK0IrdGhpcy5kdXJhdGlvbitcIm1zXCIrKFwiZWFzZVwiIT10aGlzLmVhc2U/QittW3RoaXMuZWFzZV1bMF06XCJcIikrKHRoaXMuZGVsYXk/Qit0aGlzLmRlbGF5K1wibXNcIjpcIlwiKSl9LGEuc2V0PWZ1bmN0aW9uKGEpe2E9dGhpcy5jb252ZXJ0KGEsdGhpcy50eXBlKSx0aGlzLnVwZGF0ZShhKSx0aGlzLnJlZHJhdygpfSxhLnRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dGhpcy5hY3RpdmU9ITAsYT10aGlzLmNvbnZlcnQoYSx0aGlzLnR5cGUpLHRoaXMuYXV0byYmKFwiYXV0b1wiPT10aGlzLmVsLnN0eWxlW3RoaXMubmFtZV0mJih0aGlzLnVwZGF0ZSh0aGlzLmdldCgpKSx0aGlzLnJlZHJhdygpKSxcImF1dG9cIj09YSYmKGE9Yi5jYWxsKHRoaXMpKSksdGhpcy5uZXh0U3R5bGU9YX0sYS5mYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYz10aGlzLmVsLnN0eWxlW3RoaXMubmFtZV18fHRoaXMuY29udmVydCh0aGlzLmdldCgpLHRoaXMudHlwZSk7YT10aGlzLmNvbnZlcnQoYSx0aGlzLnR5cGUpLHRoaXMuYXV0byYmKFwiYXV0b1wiPT1jJiYoYz10aGlzLmNvbnZlcnQodGhpcy5nZXQoKSx0aGlzLnR5cGUpKSxcImF1dG9cIj09YSYmKGE9Yi5jYWxsKHRoaXMpKSksdGhpcy50d2Vlbj1uZXcgUih7ZnJvbTpjLHRvOmEsZHVyYXRpb246dGhpcy5kdXJhdGlvbixkZWxheTp0aGlzLmRlbGF5LGVhc2U6dGhpcy5lYXNlLHVwZGF0ZTp0aGlzLnVwZGF0ZSxjb250ZXh0OnRoaXN9KX0sYS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gVyh0aGlzLmVsLHRoaXMubmFtZSl9LGEudXBkYXRlPWZ1bmN0aW9uKGEpe1YodGhpcy5lbCx0aGlzLm5hbWUsYSl9LGEuc3RvcD1mdW5jdGlvbigpeyh0aGlzLmFjdGl2ZXx8dGhpcy5uZXh0U3R5bGUpJiYodGhpcy5hY3RpdmU9ITEsdGhpcy5uZXh0U3R5bGU9bnVsbCxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuZ2V0KCkpKTt2YXIgYT10aGlzLnR3ZWVuO2EmJmEuY29udGV4dCYmYS5kZXN0cm95KCl9LGEuY29udmVydD1mdW5jdGlvbihhLGIpe2lmKFwiYXV0b1wiPT1hJiZ0aGlzLmF1dG8pcmV0dXJuIGE7dmFyIGMsZT1cIm51bWJlclwiPT10eXBlb2YgYSxmPVwic3RyaW5nXCI9PXR5cGVvZiBhO3N3aXRjaChiKXtjYXNlIHQ6aWYoZSlyZXR1cm4gYTtpZihmJiZcIlwiPT09YS5yZXBsYWNlKHIsXCJcIikpcmV0dXJuK2E7Yz1cIm51bWJlcih1bml0bGVzcylcIjticmVhaztjYXNlIHU6aWYoZil7aWYoXCJcIj09PWEmJnRoaXMub3JpZ2luYWwpcmV0dXJuIHRoaXMub3JpZ2luYWw7aWYoYi50ZXN0KGEpKXJldHVyblwiI1wiPT1hLmNoYXJBdCgwKSYmNz09YS5sZW5ndGg/YTpkKGEpfWM9XCJoZXggb3IgcmdiIHN0cmluZ1wiO2JyZWFrO2Nhc2UgdjppZihlKXJldHVybiBhK3RoaXMudW5pdDtpZihmJiZiLnRlc3QoYSkpcmV0dXJuIGE7Yz1cIm51bWJlcihweCkgb3Igc3RyaW5nKHVuaXQpXCI7YnJlYWs7Y2FzZSB3OmlmKGUpcmV0dXJuIGErdGhpcy51bml0O2lmKGYmJmIudGVzdChhKSlyZXR1cm4gYTtjPVwibnVtYmVyKHB4KSBvciBzdHJpbmcodW5pdCBvciAlKVwiO2JyZWFrO2Nhc2UgeDppZihlKXJldHVybiBhK3RoaXMuYW5nbGU7aWYoZiYmYi50ZXN0KGEpKXJldHVybiBhO2M9XCJudW1iZXIoZGVnKSBvciBzdHJpbmcoYW5nbGUpXCI7YnJlYWs7Y2FzZSB5OmlmKGUpcmV0dXJuIGE7aWYoZiYmdy50ZXN0KGEpKXJldHVybiBhO2M9XCJudW1iZXIodW5pdGxlc3MpIG9yIHN0cmluZyh1bml0IG9yICUpXCJ9cmV0dXJuIGcoYyxhKSxhfSxhLnJlZHJhdz1mdW5jdGlvbigpe3RoaXMuZWwub2Zmc2V0SGVpZ2h0fX0pLE89bChOLGZ1bmN0aW9uKGEsYil7YS5pbml0PWZ1bmN0aW9uKCl7Yi5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLm9yaWdpbmFsfHwodGhpcy5vcmlnaW5hbD10aGlzLmNvbnZlcnQodGhpcy5nZXQoKSx1KSl9fSksUD1sKE4sZnVuY3Rpb24oYSxiKXthLmluaXQ9ZnVuY3Rpb24oKXtiLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuYW5pbWF0ZT10aGlzLmZhbGxiYWNrfSxhLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRlbFt0aGlzLm5hbWVdKCl9LGEudXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMuJGVsW3RoaXMubmFtZV0oYSl9fSksUT1sKE4sZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWY9WltjXSxlPWZbMF0sZD1mWzFdfHxjLGc9dGhpcy5jb252ZXJ0KGFbY10sZSksYi5jYWxsKHRoaXMsZCxnLGUpfWEuaW5pdD1mdW5jdGlvbigpe2IuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyksdGhpcy5jdXJyZW50fHwodGhpcy5jdXJyZW50PXt9LFoucGVyc3BlY3RpdmUmJlUucGVyc3BlY3RpdmUmJih0aGlzLmN1cnJlbnQucGVyc3BlY3RpdmU9VS5wZXJzcGVjdGl2ZSxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSksdGhpcy5yZWRyYXcoKSkpfSxhLnNldD1mdW5jdGlvbihhKXtjLmNhbGwodGhpcyxhLGZ1bmN0aW9uKGEsYil7dGhpcy5jdXJyZW50W2FdPWJ9KSxWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSksdGhpcy5yZWRyYXcoKX0sYS50cmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMudmFsdWVzKGEpO3RoaXMudHdlZW49bmV3IFQoe2N1cnJlbnQ6dGhpcy5jdXJyZW50LHZhbHVlczpiLGR1cmF0aW9uOnRoaXMuZHVyYXRpb24sZGVsYXk6dGhpcy5kZWxheSxlYXNlOnRoaXMuZWFzZX0pO3ZhciBjLGQ9e307Zm9yKGMgaW4gdGhpcy5jdXJyZW50KWRbY109YyBpbiBiP2JbY106dGhpcy5jdXJyZW50W2NdO3RoaXMuYWN0aXZlPSEwLHRoaXMubmV4dFN0eWxlPXRoaXMuc3R5bGUoZCl9LGEuZmFsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy52YWx1ZXMoYSk7dGhpcy50d2Vlbj1uZXcgVCh7Y3VycmVudDp0aGlzLmN1cnJlbnQsdmFsdWVzOmIsZHVyYXRpb246dGhpcy5kdXJhdGlvbixkZWxheTp0aGlzLmRlbGF5LGVhc2U6dGhpcy5lYXNlLHVwZGF0ZTp0aGlzLnVwZGF0ZSxjb250ZXh0OnRoaXN9KX0sYS51cGRhdGU9ZnVuY3Rpb24oKXtWKHRoaXMuZWwsdGhpcy5uYW1lLHRoaXMuc3R5bGUodGhpcy5jdXJyZW50KSl9LGEuc3R5bGU9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiO2ZvcihiIGluIGEpYys9YitcIihcIithW2JdK1wiKSBcIjtyZXR1cm4gY30sYS52YWx1ZXM9ZnVuY3Rpb24oYSl7dmFyIGIsZD17fTtyZXR1cm4gYy5jYWxsKHRoaXMsYSxmdW5jdGlvbihhLGMsZSl7ZFthXT1jLHZvaWQgMD09PXRoaXMuY3VycmVudFthXSYmKGI9MCx+YS5pbmRleE9mKFwic2NhbGVcIikmJihiPTEpLHRoaXMuY3VycmVudFthXT10aGlzLmNvbnZlcnQoYixlKSl9KSxkfX0pLFI9bChmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEpezE9PT1uLnB1c2goYSkmJkooZyl9ZnVuY3Rpb24gZygpe3ZhciBhLGIsYyxkPW4ubGVuZ3RoO2lmKGQpZm9yKEooZyksYj1LKCksYT1kO2EtLTspYz1uW2FdLGMmJmMucmVuZGVyKGIpfWZ1bmN0aW9uIGkoYil7dmFyIGMsZD1hLmluQXJyYXkoYixuKTtkPj0wJiYoYz1uLnNsaWNlKGQrMSksbi5sZW5ndGg9ZCxjLmxlbmd0aCYmKG49bi5jb25jYXQoYykpKX1mdW5jdGlvbiBqKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqbykvb31mdW5jdGlvbiBrKGEsYixjKXtyZXR1cm4gZShhWzBdK2MqKGJbMF0tYVswXSksYVsxXStjKihiWzFdLWFbMV0pLGFbMl0rYyooYlsyXS1hWzJdKSl9dmFyIGw9e2Vhc2U6bS5lYXNlWzFdLGZyb206MCx0bzoxfTtiLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5kdXJhdGlvbj1hLmR1cmF0aW9ufHwwLHRoaXMuZGVsYXk9YS5kZWxheXx8MDt2YXIgYj1hLmVhc2V8fGwuZWFzZTttW2JdJiYoYj1tW2JdWzFdKSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiJiYoYj1sLmVhc2UpLHRoaXMuZWFzZT1iLHRoaXMudXBkYXRlPWEudXBkYXRlfHxmLHRoaXMuY29tcGxldGU9YS5jb21wbGV0ZXx8Zix0aGlzLmNvbnRleHQ9YS5jb250ZXh0fHx0aGlzLHRoaXMubmFtZT1hLm5hbWU7dmFyIGM9YS5mcm9tLGQ9YS50bzt2b2lkIDA9PT1jJiYoYz1sLmZyb20pLHZvaWQgMD09PWQmJihkPWwudG8pLHRoaXMudW5pdD1hLnVuaXR8fFwiXCIsXCJudW1iZXJcIj09dHlwZW9mIGMmJlwibnVtYmVyXCI9PXR5cGVvZiBkPyh0aGlzLmJlZ2luPWMsdGhpcy5jaGFuZ2U9ZC1jKTp0aGlzLmZvcm1hdChkLGMpLHRoaXMudmFsdWU9dGhpcy5iZWdpbit0aGlzLnVuaXQsdGhpcy5zdGFydD1LKCksYS5hdXRvcGxheSE9PSExJiZ0aGlzLnBsYXkoKX0sYi5wbGF5PWZ1bmN0aW9uKCl7dGhpcy5hY3RpdmV8fCh0aGlzLnN0YXJ0fHwodGhpcy5zdGFydD1LKCkpLHRoaXMuYWN0aXZlPSEwLGModGhpcykpfSxiLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLmFjdGl2ZSYmKHRoaXMuYWN0aXZlPSExLGkodGhpcykpfSxiLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYixjPWEtdGhpcy5zdGFydDtpZih0aGlzLmRlbGF5KXtpZihjPD10aGlzLmRlbGF5KXJldHVybjtjLT10aGlzLmRlbGF5fWlmKGM8dGhpcy5kdXJhdGlvbil7dmFyIGQ9dGhpcy5lYXNlKGMsMCwxLHRoaXMuZHVyYXRpb24pO3JldHVybiBiPXRoaXMuc3RhcnRSR0I/ayh0aGlzLnN0YXJ0UkdCLHRoaXMuZW5kUkdCLGQpOmoodGhpcy5iZWdpbitkKnRoaXMuY2hhbmdlKSx0aGlzLnZhbHVlPWIrdGhpcy51bml0LHZvaWQgdGhpcy51cGRhdGUuY2FsbCh0aGlzLmNvbnRleHQsdGhpcy52YWx1ZSl9Yj10aGlzLmVuZEhleHx8dGhpcy5iZWdpbit0aGlzLmNoYW5nZSx0aGlzLnZhbHVlPWIrdGhpcy51bml0LHRoaXMudXBkYXRlLmNhbGwodGhpcy5jb250ZXh0LHRoaXMudmFsdWUpLHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbnRleHQpLHRoaXMuZGVzdHJveSgpfSxiLmZvcm1hdD1mdW5jdGlvbihhLGIpe2lmKGIrPVwiXCIsYSs9XCJcIixcIiNcIj09YS5jaGFyQXQoMCkpcmV0dXJuIHRoaXMuc3RhcnRSR0I9ZChiKSx0aGlzLmVuZFJHQj1kKGEpLHRoaXMuZW5kSGV4PWEsdGhpcy5iZWdpbj0wLHZvaWQodGhpcy5jaGFuZ2U9MSk7aWYoIXRoaXMudW5pdCl7dmFyIGM9Yi5yZXBsYWNlKHIsXCJcIiksZT1hLnJlcGxhY2UocixcIlwiKTtjIT09ZSYmaChcInR3ZWVuXCIsYixhKSx0aGlzLnVuaXQ9Y31iPXBhcnNlRmxvYXQoYiksYT1wYXJzZUZsb2F0KGEpLHRoaXMuYmVnaW49dGhpcy52YWx1ZT1iLHRoaXMuY2hhbmdlPWEtYn0sYi5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5zdG9wKCksdGhpcy5jb250ZXh0PW51bGwsdGhpcy5lYXNlPXRoaXMudXBkYXRlPXRoaXMuY29tcGxldGU9Zn07dmFyIG49W10sbz0xZTN9KSxTPWwoUixmdW5jdGlvbihhKXthLmluaXQ9ZnVuY3Rpb24oYSl7dGhpcy5kdXJhdGlvbj1hLmR1cmF0aW9ufHwwLHRoaXMuY29tcGxldGU9YS5jb21wbGV0ZXx8Zix0aGlzLmNvbnRleHQ9YS5jb250ZXh0LHRoaXMucGxheSgpfSxhLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYj1hLXRoaXMuc3RhcnQ7Yjx0aGlzLmR1cmF0aW9ufHwodGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29udGV4dCksdGhpcy5kZXN0cm95KCkpfX0pLFQ9bChSLGZ1bmN0aW9uKGEsYil7YS5pbml0PWZ1bmN0aW9uKGEpe3RoaXMuY29udGV4dD1hLmNvbnRleHQsdGhpcy51cGRhdGU9YS51cGRhdGUsdGhpcy50d2VlbnM9W10sdGhpcy5jdXJyZW50PWEuY3VycmVudDt2YXIgYixjO2ZvcihiIGluIGEudmFsdWVzKWM9YS52YWx1ZXNbYl0sdGhpcy5jdXJyZW50W2JdIT09YyYmdGhpcy50d2VlbnMucHVzaChuZXcgUih7bmFtZTpiLGZyb206dGhpcy5jdXJyZW50W2JdLHRvOmMsZHVyYXRpb246YS5kdXJhdGlvbixkZWxheTphLmRlbGF5LGVhc2U6YS5lYXNlLGF1dG9wbGF5OiExfSkpO3RoaXMucGxheSgpfSxhLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy50d2VlbnMubGVuZ3RoLGU9ITE7Zm9yKGI9ZDtiLS07KWM9dGhpcy50d2VlbnNbYl0sYy5jb250ZXh0JiYoYy5yZW5kZXIoYSksdGhpcy5jdXJyZW50W2MubmFtZV09Yy52YWx1ZSxlPSEwKTtyZXR1cm4gZT92b2lkKHRoaXMudXBkYXRlJiZ0aGlzLnVwZGF0ZS5jYWxsKHRoaXMuY29udGV4dCkpOnRoaXMuZGVzdHJveSgpfSxhLmRlc3Ryb3k9ZnVuY3Rpb24oKXtpZihiLmRlc3Ryb3kuY2FsbCh0aGlzKSx0aGlzLnR3ZWVucyl7dmFyIGEsYz10aGlzLnR3ZWVucy5sZW5ndGg7Zm9yKGE9YzthLS07KXRoaXMudHdlZW5zW2FdLmRlc3Ryb3koKTt0aGlzLnR3ZWVucz1udWxsLHRoaXMuY3VycmVudD1udWxsfX19KSxVPWIuY29uZmlnPXtkZWJ1ZzohMSxkZWZhdWx0VW5pdDpcInB4XCIsZGVmYXVsdEFuZ2xlOlwiZGVnXCIsa2VlcEluaGVyaXRlZDohMSxoaWRlQmFja2ZhY2U6ITEscGVyc3BlY3RpdmU6XCJcIixmYWxsYmFjazohRy50cmFuc2l0aW9uLGFnZW50VGVzdHM6W119O2IuZmFsbGJhY2s9ZnVuY3Rpb24oYSl7aWYoIUcudHJhbnNpdGlvbilyZXR1cm4gVS5mYWxsYmFjaz0hMDtVLmFnZW50VGVzdHMucHVzaChcIihcIithK1wiKVwiKTt2YXIgYj1uZXcgUmVnRXhwKFUuYWdlbnRUZXN0cy5qb2luKFwifFwiKSxcImlcIik7VS5mYWxsYmFjaz1iLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCl9LGIuZmFsbGJhY2soXCI2LjAuWzItNV0gU2FmYXJpXCIpLGIudHdlZW49ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBSKGEpfSxiLmRlbGF5PWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IFMoe2NvbXBsZXRlOmIsZHVyYXRpb246YSxjb250ZXh0OmN9KX0sYS5mbi50cmFtPWZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwobnVsbCx0aGlzLGEpfTt2YXIgVj1hLnN0eWxlLFc9YS5jc3MsWD17dHJhbnNmb3JtOkcudHJhbnNmb3JtJiZHLnRyYW5zZm9ybS5jc3N9LFk9e2NvbG9yOltPLHVdLGJhY2tncm91bmQ6W08sdSxcImJhY2tncm91bmQtY29sb3JcIl0sXCJvdXRsaW5lLWNvbG9yXCI6W08sdV0sXCJib3JkZXItY29sb3JcIjpbTyx1XSxcImJvcmRlci10b3AtY29sb3JcIjpbTyx1XSxcImJvcmRlci1yaWdodC1jb2xvclwiOltPLHVdLFwiYm9yZGVyLWJvdHRvbS1jb2xvclwiOltPLHVdLFwiYm9yZGVyLWxlZnQtY29sb3JcIjpbTyx1XSxcImJvcmRlci13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXRvcC13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCI6W04sdl0sXCJib3JkZXItYm90dG9tLXdpZHRoXCI6W04sdl0sXCJib3JkZXItbGVmdC13aWR0aFwiOltOLHZdLFwiYm9yZGVyLXNwYWNpbmdcIjpbTix2XSxcImxldHRlci1zcGFjaW5nXCI6W04sdl0sbWFyZ2luOltOLHZdLFwibWFyZ2luLXRvcFwiOltOLHZdLFwibWFyZ2luLXJpZ2h0XCI6W04sdl0sXCJtYXJnaW4tYm90dG9tXCI6W04sdl0sXCJtYXJnaW4tbGVmdFwiOltOLHZdLHBhZGRpbmc6W04sdl0sXCJwYWRkaW5nLXRvcFwiOltOLHZdLFwicGFkZGluZy1yaWdodFwiOltOLHZdLFwicGFkZGluZy1ib3R0b21cIjpbTix2XSxcInBhZGRpbmctbGVmdFwiOltOLHZdLFwib3V0bGluZS13aWR0aFwiOltOLHZdLG9wYWNpdHk6W04sdF0sdG9wOltOLHddLHJpZ2h0OltOLHddLGJvdHRvbTpbTix3XSxsZWZ0OltOLHddLFwiZm9udC1zaXplXCI6W04sd10sXCJ0ZXh0LWluZGVudFwiOltOLHddLFwid29yZC1zcGFjaW5nXCI6W04sd10sd2lkdGg6W04sd10sXCJtaW4td2lkdGhcIjpbTix3XSxcIm1heC13aWR0aFwiOltOLHddLGhlaWdodDpbTix3XSxcIm1pbi1oZWlnaHRcIjpbTix3XSxcIm1heC1oZWlnaHRcIjpbTix3XSxcImxpbmUtaGVpZ2h0XCI6W04seV0sXCJzY3JvbGwtdG9wXCI6W1AsdCxcInNjcm9sbFRvcFwiXSxcInNjcm9sbC1sZWZ0XCI6W1AsdCxcInNjcm9sbExlZnRcIl19LFo9e307Ry50cmFuc2Zvcm0mJihZLnRyYW5zZm9ybT1bUV0sWj17eDpbdyxcInRyYW5zbGF0ZVhcIl0seTpbdyxcInRyYW5zbGF0ZVlcIl0scm90YXRlOlt4XSxyb3RhdGVYOlt4XSxyb3RhdGVZOlt4XSxzY2FsZTpbdF0sc2NhbGVYOlt0XSxzY2FsZVk6W3RdLHNrZXc6W3hdLHNrZXdYOlt4XSxza2V3WTpbeF19KSxHLnRyYW5zZm9ybSYmRy5iYWNrZmFjZSYmKFouej1bdyxcInRyYW5zbGF0ZVpcIl0sWi5yb3RhdGVaPVt4XSxaLnNjYWxlWj1bdF0sWi5wZXJzcGVjdGl2ZT1bdl0pO3ZhciAkPS9tcy8sXz0vc3xcXC4vO3JldHVybiBhLnRyYW09Yn0od2luZG93LmpRdWVyeSk7XG4iXSwibmFtZXMiOlsid2luZG93IiwidHJhbSIsImEiLCJiIiwiYyIsIk0iLCJCYXJlIiwiaW5pdCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImQiLCJwYXJzZUludCIsInNsaWNlIiwiZSIsInRvU3RyaW5nIiwiZiIsImciLCJqIiwiaCIsImkiLCIkIiwidGVzdCIsIl8iLCJwYXJzZUZsb2F0IiwiVSIsImRlYnVnIiwiY29uc29sZSIsIndhcm4iLCJrIiwibGVuZ3RoIiwicHVzaCIsImwiLCJhcHBseSIsImFyZ3VtZW50cyIsIk9iamVjdCIsIm0iLCJuIiwiY29uc3RydWN0b3IiLCJtaXhpbiIsIm9wZW4iLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJlYXNlIiwibGluZWFyIiwiTWF0aCIsImNvcyIsIlBJIiwic2luIiwicG93Iiwic3FydCIsIm8iLCJkb2N1bWVudCIsInAiLCJxIiwiciIsInMiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiQSIsIkIiLCJDIiwiY3JlYXRlRWxlbWVudCIsIkQiLCJFIiwiRiIsInN0eWxlIiwiZG9tIiwiY3NzIiwic3BsaXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsIkciLCJzdXBwb3J0IiwiYmluZCIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImJhY2tmYWNlIiwidGltaW5nIiwiSCIsIkkiLCJKIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiSyIsIm5vdyIsInBlcmZvcm1hbmNlIiwid2Via2l0Tm93IiwibXNOb3ciLCJtb3pOb3ciLCJEYXRlIiwiTCIsIlkiLCJ3ZWFrIiwicHJvcHMiLCIkZWwiLCJ0aW1lciIsImRlc3Ryb3kiLCJxdWV1ZSIsImFjdGl2ZSIsIlMiLCJkdXJhdGlvbiIsImNvbnRleHQiLCJjb21wbGV0ZSIsInNwYW4iLCJzdG9wIiwiYW5pbWF0ZSIsIndhaXQiLCJuYW1lIiwibmV4dFN0eWxlIiwib3B0aW9ucyIsImFyZ3MiLCJzaGlmdCIsImVsIiwiZGlzcGxheSIsIm9mZnNldEhlaWdodCIsInJlbW92ZURhdGEiLCJ1cHN0cmVhbSIsInN0cmluZyIsImpvaW4iLCJaIiwic2V0IiwiY2hpbGRyZW4iLCJrZWVwSW5oZXJpdGVkIiwiZmFsbGJhY2siLCJXIiwiaGlkZUJhY2tmYWNlIiwiViIsImRhdGEiLCJzdGFydCIsImVhY2giLCJOIiwiZ2V0IiwidXBkYXRlIiwiZXhlYyIsImRlbGF5IiwiWCIsInR5cGUiLCJhdXRvIiwidW5pdCIsImRlZmF1bHRVbml0IiwiYW5nbGUiLCJkZWZhdWx0QW5nbGUiLCJjb252ZXJ0IiwicmVkcmF3IiwidHdlZW4iLCJSIiwiZnJvbSIsInRvIiwib3JpZ2luYWwiLCJPIiwiUCIsIlEiLCJjdXJyZW50IiwicGVyc3BlY3RpdmUiLCJ2YWx1ZXMiLCJUIiwiaW5kZXhPZiIsInJlbmRlciIsImluQXJyYXkiLCJjb25jYXQiLCJyb3VuZCIsImJlZ2luIiwiY2hhbmdlIiwiZm9ybWF0IiwidmFsdWUiLCJhdXRvcGxheSIsInBsYXkiLCJzdGFydFJHQiIsImVuZFJHQiIsImVuZEhleCIsInR3ZWVucyIsImNvbmZpZyIsImFnZW50VGVzdHMiLCJSZWdFeHAiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJmbiIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsInBhZGRpbmciLCJvcGFjaXR5IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2tldyIsInNrZXdYIiwic2tld1kiLCJyb3RhdGVaIiwic2NhbGVaIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQsR0FDdkQsa0JBQWtCLEdBQ2xCOzs7OztDQUtDLEdBQ0QsbUJBQW1CO0FBQ25CQSxPQUFPQyxJQUFJLEdBQUMsU0FBU0MsQ0FBQztJQUFFLFNBQVNDLEVBQUVELENBQUMsRUFBQ0MsQ0FBQztRQUFFLElBQUlDLElBQUUsSUFBSUMsRUFBRUMsSUFBSTtRQUFDLE9BQU9GLEVBQUVHLElBQUksQ0FBQ0wsR0FBRUM7SUFBRTtJQUFDLFNBQVNDLEVBQUVGLENBQUM7UUFBRSxPQUFPQSxFQUFFTSxPQUFPLENBQUMsVUFBUyxTQUFTTixDQUFDO1lBQUUsT0FBTSxNQUFJQSxFQUFFTyxXQUFXO1FBQUU7SUFBRztJQUFDLFNBQVNDLEVBQUVSLENBQUM7UUFBRSxJQUFJQyxJQUFFUSxTQUFTVCxFQUFFVSxLQUFLLENBQUMsSUFBRyxLQUFJUixJQUFFRCxLQUFHLEtBQUcsS0FBSU8sSUFBRVAsS0FBRyxJQUFFLEtBQUlVLElBQUUsTUFBSVY7UUFBRSxPQUFNO1lBQUNDO1lBQUVNO1lBQUVHO1NBQUU7SUFBQTtJQUFDLFNBQVNBLEVBQUVYLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUUsT0FBTSxNQUFJLEFBQUMsQ0FBQSxLQUFHLEtBQUdGLEtBQUcsS0FBR0MsS0FBRyxJQUFFQyxDQUFBQSxFQUFHVSxRQUFRLENBQUMsSUFBSUYsS0FBSyxDQUFDO0lBQUU7SUFBQyxTQUFTRyxLQUFJO0lBQUMsU0FBU0MsRUFBRWQsQ0FBQyxFQUFDQyxDQUFDO1FBQUVjLEVBQUUsOEJBQTRCZixJQUFFLGFBQVcsT0FBT0MsSUFBRSxPQUFLQTtJQUFFO0lBQUMsU0FBU2UsRUFBRWhCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDQyxDQUFDO1FBQUVhLEVBQUUs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

}),
756: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
// Include tram for frame-throttling
/* globals window */ 
var $ = window.$;
var tram = __webpack_require__(487) && $.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */ /**
 * Webflow custom build of Underscore.js 1.6.0
 * https://github.com/jashkenas/underscore/tree/1.6.0
 *
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 */ module.exports = function() {
    var _ = {};
    // Current version.
    _.VERSION = '1.6.0-Webflow';
    // Establish the object that gets returned to break out of a loop iteration.
    var breaker = {};
    // Save bytes in the minified (but not gzipped) version:
    /* eslint-disable one-var */ var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
    /* eslint-enable one-var */ // Create quick reference variables for speed access to core prototypes.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // All **ECMAScript 5** native function implementations that we hope to use
    // are declared here.
    /* eslint-disable one-var, unused-imports/no-unused-vars */ var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
    /* eslint-enable one-var, unused-imports/no-unused-vars */ // Collection Functions
    // --------------------
    // The cornerstone, an `each` implementation, aka `forEach`.
    // Handles objects with the built-in `forEach`, arrays, and raw objects.
    // Delegates to **ECMAScript 5**'s native `forEach` if available.
    var each = _.each = _.forEach = function(obj, iterator, context) {
        /* jshint shadow:true */ if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        // eslint-disable-next-line no-implicit-coercion
        } else if (obj.length === +obj.length) {
            for(var i = 0, length = obj.length; i < length; i++){
                if (iterator.call(context, obj[i], i, obj) === breaker) return;
            }
        } else {
            var keys = _.keys(obj);
            // eslint-disable-next-line no-redeclare
            for(var i = 0, length = keys.length; i < length; i++){
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            }
        }
        return obj;
    };
    // Return the results of applying the iterator to each element.
    // Delegates to **ECMAScript 5**'s native `map` if available.
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
        each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        });
        return results;
    };
    // Return the first value which passes a truth test. Aliased as `detect`.
    _.find = _.detect = function(obj, predicate, context) {
        var result;
        any(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) {
                result = value;
                return true;
            }
        });
        return result;
    };
    // Return all the elements that pass a truth test.
    // Delegates to **ECMAScript 5**'s native `filter` if available.
    // Aliased as `select`.
    _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        if (obj == null) return results;
        if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
        each(obj, function(value, index, list) {
            if (predicate.call(context, value, index, list)) results.push(value);
        });
        return results;
    };
    // Determine if at least one element in the object matches a truth test.
    // Delegates to **ECMAScript 5**'s native `some` if available.
    // Aliased as `any`.
    var any = _.some = _.any = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = false;
        if (obj == null) return result;
        if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
        each(obj, function(value, index, list) {
            if (result || (result = predicate.call(context, value, index, list))) return breaker;
        });
        return !!result; // eslint-disable-line no-implicit-coercion
    };
    // Determine if the array or object contains a given value (using `===`).
    // Aliased as `include`.
    _.contains = _.include = function(obj, target) {
        if (obj == null) return false;
        if (nativeIndexOf && obj.indexOf === nativeIndexOf) // eslint-disable-next-line eqeqeq
        return obj.indexOf(target) != -1;
        return any(obj, function(value) {
            return value === target;
        });
    };
    // Function (ahem) Functions
    // --------------------
    // Delays a function for the given number of milliseconds, and then calls
    // it with the arguments supplied.
    _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    };
    // Defers a function, scheduling it to run after the current call stack has
    // cleared.
    _.defer = function(func) {
        return _.delay.apply(_, [
            func,
            1
        ].concat(slice.call(arguments, 1)));
    };
    // Returns a function, that, when invoked, will only be triggered once every
    // browser animation frame - using tram's requestAnimationFrame polyfill.
    _.throttle = function(func) {
        // eslint-disable-next-line one-var
        var wait, args, context;
        return function() {
            if (wait) return;
            wait = true;
            args = arguments;
            context = this;
            tram.frame(function() {
                wait = false;
                func.apply(context, args);
            });
        };
    };
    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    _.debounce = function(func, wait, immediate) {
        // eslint-disable-next-line one-var
        var timeout, args, context, timestamp, result;
        var later = function() {
            var last = _.now() - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    context = args = null;
                }
            }
        };
        return function() {
            context = this;
            args = arguments;
            timestamp = _.now();
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    };
    // Object Functions
    // ----------------
    // Fill in a given object with default properties.
    _.defaults = function(obj) {
        if (!_.isObject(obj)) return obj;
        for(var i = 1, length = arguments.length; i < length; i++){
            var source = arguments[i];
            for(var prop in source){
                // eslint-disable-next-line no-void
                if (obj[prop] === void 0) obj[prop] = source[prop];
            }
        }
        return obj;
    };
    // Retrieve the names of an object's properties.
    // Delegates to **ECMAScript 5**'s native `Object.keys`
    _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for(var key in obj)if (_.has(obj, key)) keys.push(key);
        return keys;
    };
    // Shortcut function for checking if an object has a given property directly
    // on itself (in other words, not on a prototype).
    _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    };
    // Is a given variable an object?
    _.isObject = function(obj) {
        return obj === Object(obj);
    };
    // Utility Functions
    // -----------------
    // A (possibly faster) way to get the current timestamp as an integer.
    _.now = Date.now || function() {
        return new Date().getTime();
    };
    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;
    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    var escapeChar = function(match) {
        return '\\' + escapes[match];
    };
    // In order to prevent third-party code injection through
    // `_.templateSettings.variable`, we test it against the following regular
    // expression. It is intentionally a bit more liberal than just matching valid
    // identifiers, but still prevents possible loopholes through defaults or
    // destructuring assignment.
    var bareIdentifier = /^\s*(\w|\$)+\s*$/;
    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    _.template = function(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = _.defaults({}, settings, _.templateSettings);
        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');
        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
            } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
            } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
            }
            // Adobe VMs need the match returned to produce the correct offset.
            return match;
        });
        source += "';\n";
        var argument = settings.variable;
        if (argument) {
            // Insure against third-party code injection. (CVE-2021-23358)
            if (!bareIdentifier.test(argument)) throw new Error('variable is not a bare identifier: ' + argument);
        } else {
            // If a variable is not specified, place data values in local scope.
            source = 'with(obj||{}){\n' + source + '}\n';
            argument = 'obj';
        }
        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
        var render;
        try {
            // eslint-disable-next-line no-new-func
            render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function(data) {
            return render.call(this, data, _);
        };
        // Provide the compiled source as a convenience for precompilation.
        template.source = 'function(' + argument + '){\n' + source + '}';
        return template;
    };
    // Export underscore
    return _;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZGVyc2NvcmUtY3VzdG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdHJhbSBmb3IgZnJhbWUtdGhyb3R0bGluZ1xuLyogZ2xvYmFscyB3aW5kb3cgKi9cblxudmFyICQgPSB3aW5kb3cuJDtcbnZhciB0cmFtID0gcmVxdWlyZSgnLi90cmFtLW1pbicpICYmICQudHJhbTtcblxuLyohXG4gKiBXZWJmbG93Ll8gKGFrYSkgVW5kZXJzY29yZS5qcyAxLjYuMCAoY3VzdG9tIGJ1aWxkKVxuICpcbiAqIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4gKiAoYykgMjAwOS0yMDEzIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbi8qKlxuICogV2ViZmxvdyBjdXN0b20gYnVpbGQgb2YgVW5kZXJzY29yZS5qcyAxLjYuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL3RyZWUvMS42LjBcbiAqXG4gKiBfLmVhY2hcbiAqIF8ubWFwXG4gKiBfLmZpbmRcbiAqIF8uZmlsdGVyXG4gKiBfLmFueVxuICogXy5jb250YWluc1xuICogXy5kZWxheVxuICogXy5kZWZlclxuICogXy50aHJvdHRsZSAod2ViZmxvdylcbiAqIF8uZGVib3VuY2VcbiAqIF8ua2V5c1xuICogXy5oYXNcbiAqIF8ubm93XG4gKiBfLnRlbXBsYXRlICh3ZWJmbG93OiB1cGdyYWRlZCB0byAxLjEzLjYpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIF8gPSB7fTtcblxuICAvLyBDdXJyZW50IHZlcnNpb24uXG4gIF8uVkVSU0lPTiA9ICcxLjYuMC1XZWJmbG93JztcblxuICAvLyBFc3RhYmxpc2ggdGhlIG9iamVjdCB0aGF0IGdldHMgcmV0dXJuZWQgdG8gYnJlYWsgb3V0IG9mIGEgbG9vcCBpdGVyYXRpb24uXG4gIHZhciBicmVha2VyID0ge307XG5cbiAgLy8gU2F2ZSBieXRlcyBpbiB0aGUgbWluaWZpZWQgKGJ1dCBub3QgZ3ppcHBlZCkgdmVyc2lvbjpcbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciAqL1xuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBPYmpQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgRnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICAvKiBlc2xpbnQtZW5hYmxlIG9uZS12YXIgKi9cblxuICAvLyBDcmVhdGUgcXVpY2sgcmVmZXJlbmNlIHZhcmlhYmxlcyBmb3Igc3BlZWQgYWNjZXNzIHRvIGNvcmUgcHJvdG90eXBlcy5cbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIHB1c2ggPSBBcnJheVByb3RvLnB1c2gsXG4gICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgIGNvbmNhdCA9IEFycmF5UHJvdG8uY29uY2F0LFxuICAgIHRvU3RyaW5nID0gT2JqUHJvdG8udG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmpQcm90by5oYXNPd25Qcm9wZXJ0eTtcbiAgLyogZXNsaW50LWVuYWJsZSBvbmUtdmFyLCB1bnVzZWQtaW1wb3J0cy9uby11bnVzZWQtdmFycyAqL1xuXG4gIC8vIEFsbCAqKkVDTUFTY3JpcHQgNSoqIG5hdGl2ZSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbnMgdGhhdCB3ZSBob3BlIHRvIHVzZVxuICAvLyBhcmUgZGVjbGFyZWQgaGVyZS5cbiAgLyogZXNsaW50LWRpc2FibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cbiAgdmFyIG5hdGl2ZUZvckVhY2ggPSBBcnJheVByb3RvLmZvckVhY2gsXG4gICAgbmF0aXZlTWFwID0gQXJyYXlQcm90by5tYXAsXG4gICAgbmF0aXZlUmVkdWNlID0gQXJyYXlQcm90by5yZWR1Y2UsXG4gICAgbmF0aXZlUmVkdWNlUmlnaHQgPSBBcnJheVByb3RvLnJlZHVjZVJpZ2h0LFxuICAgIG5hdGl2ZUZpbHRlciA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgIG5hdGl2ZUV2ZXJ5ID0gQXJyYXlQcm90by5ldmVyeSxcbiAgICBuYXRpdmVTb21lID0gQXJyYXlQcm90by5zb21lLFxuICAgIG5hdGl2ZUluZGV4T2YgPSBBcnJheVByb3RvLmluZGV4T2YsXG4gICAgbmF0aXZlTGFzdEluZGV4T2YgPSBBcnJheVByb3RvLmxhc3RJbmRleE9mLFxuICAgIG5hdGl2ZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIG5hdGl2ZUtleXMgPSBPYmplY3Qua2V5cyxcbiAgICBuYXRpdmVCaW5kID0gRnVuY1Byb3RvLmJpbmQ7XG4gIC8qIGVzbGludC1lbmFibGUgb25lLXZhciwgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnMgKi9cblxuICAvLyBDb2xsZWN0aW9uIEZ1bmN0aW9uc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFRoZSBjb3JuZXJzdG9uZSwgYW4gYGVhY2hgIGltcGxlbWVudGF0aW9uLCBha2EgYGZvckVhY2hgLlxuICAvLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYGZvckVhY2hgIGlmIGF2YWlsYWJsZS5cbiAgdmFyIGVhY2ggPVxuICAgIChfLmVhY2ggPVxuICAgIF8uZm9yRWFjaCA9XG4gICAgICBmdW5jdGlvbiAob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICAgICAgICAvKiBqc2hpbnQgc2hhZG93OnRydWUgKi9cbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gb2JqO1xuICAgICAgICBpZiAobmF0aXZlRm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gbmF0aXZlRm9yRWFjaCkge1xuICAgICAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0KTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cbiAgICAgICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSArb2JqLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKSA9PT0gYnJlYWtlcikgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIga2V5cyA9IF8ua2V5cyhvYmopO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleXNbaV1dLCBrZXlzW2ldLCBvYmopID09PSBicmVha2VyKVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9KTtcblxuICAvLyBSZXR1cm4gdGhlIHJlc3VsdHMgb2YgYXBwbHlpbmcgdGhlIGl0ZXJhdG9yIHRvIGVhY2ggZWxlbWVudC5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYG1hcGAgaWYgYXZhaWxhYmxlLlxuICBfLm1hcCA9IF8uY29sbGVjdCA9IGZ1bmN0aW9uIChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHRzO1xuICAgIGlmIChuYXRpdmVNYXAgJiYgb2JqLm1hcCA9PT0gbmF0aXZlTWFwKSByZXR1cm4gb2JqLm1hcChpdGVyYXRvciwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvci5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgdmFsdWUgd2hpY2ggcGFzc2VzIGEgdHJ1dGggdGVzdC4gQWxpYXNlZCBhcyBgZGV0ZWN0YC5cbiAgXy5maW5kID0gXy5kZXRlY3QgPSBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGFueShvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSB7XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIHRoYXQgcGFzcyBhIHRydXRoIHRlc3QuXG4gIC8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmaWx0ZXJgIGlmIGF2YWlsYWJsZS5cbiAgLy8gQWxpYXNlZCBhcyBgc2VsZWN0YC5cbiAgXy5maWx0ZXIgPSBfLnNlbGVjdCA9IGZ1bmN0aW9uIChvYmosIHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKG9iaiA9PSBudWxsKSByZXR1cm4gcmVzdWx0cztcbiAgICBpZiAobmF0aXZlRmlsdGVyICYmIG9iai5maWx0ZXIgPT09IG5hdGl2ZUZpbHRlcilcbiAgICAgIHJldHVybiBvYmouZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgZWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGxpc3QpIHtcbiAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwgaW5kZXgsIGxpc3QpKSByZXN1bHRzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8vIERldGVybWluZSBpZiBhdCBsZWFzdCBvbmUgZWxlbWVudCBpbiB0aGUgb2JqZWN0IG1hdGNoZXMgYSB0cnV0aCB0ZXN0LlxuICAvLyBEZWxlZ2F0ZXMgdG8gKipFQ01BU2NyaXB0IDUqKidzIG5hdGl2ZSBgc29tZWAgaWYgYXZhaWxhYmxlLlxuICAvLyBBbGlhc2VkIGFzIGBhbnlgLlxuICB2YXIgYW55ID1cbiAgICAoXy5zb21lID1cbiAgICBfLmFueSA9XG4gICAgICBmdW5jdGlvbiAob2JqLCBwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICAgICAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBfLmlkZW50aXR5KTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBpZiAob2JqID09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgICAgIGlmIChuYXRpdmVTb21lICYmIG9iai5zb21lID09PSBuYXRpdmVTb21lKVxuICAgICAgICAgIHJldHVybiBvYmouc29tZShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgICAgICBlYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgbGlzdCkge1xuICAgICAgICAgIGlmIChyZXN1bHQgfHwgKHJlc3VsdCA9IHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHZhbHVlLCBpbmRleCwgbGlzdCkpKVxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrZXI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISFyZXN1bHQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8taW1wbGljaXQtY29lcmNpb25cbiAgICAgIH0pO1xuXG4gIC8vIERldGVybWluZSBpZiB0aGUgYXJyYXkgb3Igb2JqZWN0IGNvbnRhaW5zIGEgZ2l2ZW4gdmFsdWUgKHVzaW5nIGA9PT1gKS5cbiAgLy8gQWxpYXNlZCBhcyBgaW5jbHVkZWAuXG4gIF8uY29udGFpbnMgPSBfLmluY2x1ZGUgPSBmdW5jdGlvbiAob2JqLCB0YXJnZXQpIHtcbiAgICBpZiAob2JqID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBvYmouaW5kZXhPZiA9PT0gbmF0aXZlSW5kZXhPZilcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICAgIHJldHVybiBvYmouaW5kZXhPZih0YXJnZXQpICE9IC0xO1xuICAgIHJldHVybiBhbnkob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIChhaGVtKSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBEZWxheXMgYSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIGFuZCB0aGVuIGNhbGxzXG4gIC8vIGl0IHdpdGggdGhlIGFyZ3VtZW50cyBzdXBwbGllZC5cbiAgXy5kZWxheSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0KSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgd2FpdCk7XG4gIH07XG5cbiAgLy8gRGVmZXJzIGEgZnVuY3Rpb24sIHNjaGVkdWxpbmcgaXQgdG8gcnVuIGFmdGVyIHRoZSBjdXJyZW50IGNhbGwgc3RhY2sgaGFzXG4gIC8vIGNsZWFyZWQuXG4gIF8uZGVmZXIgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgIHJldHVybiBfLmRlbGF5LmFwcGx5KF8sIFtmdW5jLCAxXS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCB3aGVuIGludm9rZWQsIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZSBldmVyeVxuICAvLyBicm93c2VyIGFuaW1hdGlvbiBmcmFtZSAtIHVzaW5nIHRyYW0ncyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwuXG4gIF8udGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvbmUtdmFyXG4gICAgdmFyIHdhaXQsIGFyZ3MsIGNvbnRleHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3YWl0KSByZXR1cm47XG4gICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgIHRyYW0uZnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAgLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICAvLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgXy5kZWJvdW5jZSA9IGZ1bmN0aW9uIChmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb25lLXZhclxuICAgIHZhciB0aW1lb3V0LCBhcmdzLCBjb250ZXh0LCB0aW1lc3RhbXAsIHJlc3VsdDtcblxuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsYXN0ID0gXy5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHRpbWVzdGFtcCA9IF8ubm93KCk7XG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyBPYmplY3QgRnVuY3Rpb25zXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBGaWxsIGluIGEgZ2l2ZW4gb2JqZWN0IHdpdGggZGVmYXVsdCBwcm9wZXJ0aWVzLlxuICBfLmRlZmF1bHRzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmICghXy5pc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdm9pZFxuICAgICAgICBpZiAob2JqW3Byb3BdID09PSB2b2lkIDApIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvLyBSZXRyaWV2ZSB0aGUgbmFtZXMgb2YgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gRGVsZWdhdGVzIHRvICoqRUNNQVNjcmlwdCA1KioncyBuYXRpdmUgYE9iamVjdC5rZXlzYFxuICBfLmtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKCFfLmlzT2JqZWN0KG9iaikpIHJldHVybiBbXTtcbiAgICBpZiAobmF0aXZlS2V5cykgcmV0dXJuIG5hdGl2ZUtleXMob2JqKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChfLmhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzO1xuICB9O1xuXG4gIC8vIFNob3J0Y3V0IGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHkgZGlyZWN0bHlcbiAgLy8gb24gaXRzZWxmIChpbiBvdGhlciB3b3Jkcywgbm90IG9uIGEgcHJvdG90eXBlKS5cbiAgXy5oYXMgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gSXMgYSBnaXZlbiB2YXJpYWJsZSBhbiBvYmplY3Q/XG4gIF8uaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG5cbiAgLy8gVXRpbGl0eSBGdW5jdGlvbnNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBIChwb3NzaWJseSBmYXN0ZXIpIHdheSB0byBnZXQgdGhlIGN1cnJlbnQgdGltZXN0YW1wIGFzIGFuIGludGVnZXIuXG4gIF8ubm93ID1cbiAgICBEYXRlLm5vdyB8fFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuXG4gIC8vIEJ5IGRlZmF1bHQsIFVuZGVyc2NvcmUgdXNlcyBFUkItc3R5bGUgdGVtcGxhdGUgZGVsaW1pdGVycywgY2hhbmdlIHRoZVxuICAvLyBmb2xsb3dpbmcgdGVtcGxhdGUgc2V0dGluZ3MgdG8gdXNlIGFsdGVybmF0aXZlIGRlbGltaXRlcnMuXG4gIF8udGVtcGxhdGVTZXR0aW5ncyA9IHtcbiAgICBldmFsdWF0ZTogLzwlKFtcXHNcXFNdKz8pJT4vZyxcbiAgICBpbnRlcnBvbGF0ZTogLzwlPShbXFxzXFxTXSs/KSU+L2csXG4gICAgZXNjYXBlOiAvPCUtKFtcXHNcXFNdKz8pJT4vZyxcbiAgfTtcblxuICAvLyBXaGVuIGN1c3RvbWl6aW5nIGB0ZW1wbGF0ZVNldHRpbmdzYCwgaWYgeW91IGRvbid0IHdhbnQgdG8gZGVmaW5lIGFuXG4gIC8vIGludGVycG9sYXRpb24sIGV2YWx1YXRpb24gb3IgZXNjYXBpbmcgcmVnZXgsIHdlIG5lZWQgb25lIHRoYXQgaXNcbiAgLy8gZ3VhcmFudGVlZCBub3QgdG8gbWF0Y2guXG4gIHZhciBub01hdGNoID0gLyguKV4vO1xuXG4gIC8vIENlcnRhaW4gY2hhcmFjdGVycyBuZWVkIHRvIGJlIGVzY2FwZWQgc28gdGhhdCB0aGV5IGNhbiBiZSBwdXQgaW50byBhXG4gIC8vIHN0cmluZyBsaXRlcmFsLlxuICB2YXIgZXNjYXBlcyA9IHtcbiAgICBcIidcIjogXCInXCIsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJ1xccic6ICdyJyxcbiAgICAnXFxuJzogJ24nLFxuICAgICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgICAnXFx1MjAyOSc6ICd1MjAyOScsXG4gIH07XG5cbiAgdmFyIGVzY2FwZVJlZ0V4cCA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuICB2YXIgZXNjYXBlQ2hhciA9IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGVzW21hdGNoXTtcbiAgfTtcblxuICAvLyBJbiBvcmRlciB0byBwcmV2ZW50IHRoaXJkLXBhcnR5IGNvZGUgaW5qZWN0aW9uIHRocm91Z2hcbiAgLy8gYF8udGVtcGxhdGVTZXR0aW5ncy52YXJpYWJsZWAsIHdlIHRlc3QgaXQgYWdhaW5zdCB0aGUgZm9sbG93aW5nIHJlZ3VsYXJcbiAgLy8gZXhwcmVzc2lvbi4gSXQgaXMgaW50ZW50aW9uYWxseSBhIGJpdCBtb3JlIGxpYmVyYWwgdGhhbiBqdXN0IG1hdGNoaW5nIHZhbGlkXG4gIC8vIGlkZW50aWZpZXJzLCBidXQgc3RpbGwgcHJldmVudHMgcG9zc2libGUgbG9vcGhvbGVzIHRocm91Z2ggZGVmYXVsdHMgb3JcbiAgLy8gZGVzdHJ1Y3R1cmluZyBhc3NpZ25tZW50LlxuICB2YXIgYmFyZUlkZW50aWZpZXIgPSAvXlxccyooXFx3fFxcJCkrXFxzKiQvO1xuXG4gIC8vIEphdmFTY3JpcHQgbWljcm8tdGVtcGxhdGluZywgc2ltaWxhciB0byBKb2huIFJlc2lnJ3MgaW1wbGVtZW50YXRpb24uXG4gIC8vIFVuZGVyc2NvcmUgdGVtcGxhdGluZyBoYW5kbGVzIGFyYml0cmFyeSBkZWxpbWl0ZXJzLCBwcmVzZXJ2ZXMgd2hpdGVzcGFjZSxcbiAgLy8gYW5kIGNvcnJlY3RseSBlc2NhcGVzIHF1b3RlcyB3aXRoaW4gaW50ZXJwb2xhdGVkIGNvZGUuXG4gIC8vIE5COiBgb2xkU2V0dGluZ3NgIG9ubHkgZXhpc3RzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgXy50ZW1wbGF0ZSA9IGZ1bmN0aW9uICh0ZXh0LCBzZXR0aW5ncywgb2xkU2V0dGluZ3MpIHtcbiAgICBpZiAoIXNldHRpbmdzICYmIG9sZFNldHRpbmdzKSBzZXR0aW5ncyA9IG9sZFNldHRpbmdzO1xuICAgIHNldHRpbmdzID0gXy5kZWZhdWx0cyh7fSwgc2V0dGluZ3MsIF8udGVtcGxhdGVTZXR0aW5ncyk7XG5cbiAgICAvLyBDb21iaW5lIGRlbGltaXRlcnMgaW50byBvbmUgcmVndWxhciBleHByZXNzaW9uIHZpYSBhbHRlcm5hdGlvbi5cbiAgICB2YXIgbWF0Y2hlciA9IFJlZ0V4cChcbiAgICAgIFtcbiAgICAgICAgKHNldHRpbmdzLmVzY2FwZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAgIChzZXR0aW5ncy5pbnRlcnBvbGF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICAgIChzZXR0aW5ncy5ldmFsdWF0ZSB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgICBdLmpvaW4oJ3wnKSArICd8JCcsXG4gICAgICAnZydcbiAgICApO1xuXG4gICAgLy8gQ29tcGlsZSB0aGUgdGVtcGxhdGUgc291cmNlLCBlc2NhcGluZyBzdHJpbmcgbGl0ZXJhbHMgYXBwcm9wcmlhdGVseS5cbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICAgIHRleHQucmVwbGFjZShcbiAgICAgIG1hdGNoZXIsXG4gICAgICBmdW5jdGlvbiAobWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICAgICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZShlc2NhcGVSZWdFeHAsIGVzY2FwZUNoYXIpO1xuICAgICAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcblxuICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl8uZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgICAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkb2JlIFZNcyBuZWVkIHRoZSBtYXRjaCByZXR1cm5lZCB0byBwcm9kdWNlIHRoZSBjb3JyZWN0IG9mZnNldC5cbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgICk7XG4gICAgc291cmNlICs9IFwiJztcXG5cIjtcblxuICAgIHZhciBhcmd1bWVudCA9IHNldHRpbmdzLnZhcmlhYmxlO1xuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgLy8gSW5zdXJlIGFnYWluc3QgdGhpcmQtcGFydHkgY29kZSBpbmplY3Rpb24uIChDVkUtMjAyMS0yMzM1OClcbiAgICAgIGlmICghYmFyZUlkZW50aWZpZXIudGVzdChhcmd1bWVudCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndmFyaWFibGUgaXMgbm90IGEgYmFyZSBpZGVudGlmaWVyOiAnICsgYXJndW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiBhIHZhcmlhYmxlIGlzIG5vdCBzcGVjaWZpZWQsIHBsYWNlIGRhdGEgdmFsdWVzIGluIGxvY2FsIHNjb3BlLlxuICAgICAgc291cmNlID0gJ3dpdGgob2JqfHx7fSl7XFxuJyArIHNvdXJjZSArICd9XFxuJztcbiAgICAgIGFyZ3VtZW50ID0gJ29iaic7XG4gICAgfVxuXG4gICAgc291cmNlID1cbiAgICAgIFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLFwiICtcbiAgICAgIFwicHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG5cIiArXG4gICAgICBzb3VyY2UgK1xuICAgICAgJ3JldHVybiBfX3A7XFxuJztcblxuICAgIHZhciByZW5kZXI7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgcmVuZGVyID0gbmV3IEZ1bmN0aW9uKHNldHRpbmdzLnZhcmlhYmxlIHx8ICdvYmonLCAnXycsIHNvdXJjZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIHZhciB0ZW1wbGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgXyk7XG4gICAgfTtcblxuICAgIC8vIFByb3ZpZGUgdGhlIGNvbXBpbGVkIHNvdXJjZSBhcyBhIGNvbnZlbmllbmNlIGZvciBwcmVjb21waWxhdGlvbi5cbiAgICB0ZW1wbGF0ZS5zb3VyY2UgPSAnZnVuY3Rpb24oJyArIGFyZ3VtZW50ICsgJyl7XFxuJyArIHNvdXJjZSArICd9JztcblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfTtcblxuICAvLyBFeHBvcnQgdW5kZXJzY29yZVxuICByZXR1cm4gXztcbn0pKCk7XG4iXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInRyYW0iLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl8iLCJWRVJTSU9OIiwiYnJlYWtlciIsIkFycmF5UHJvdG8iLCJBcnJheSIsInByb3RvdHlwZSIsIk9ialByb3RvIiwiT2JqZWN0IiwiRnVuY1Byb3RvIiwiRnVuY3Rpb24iLCJwdXNoIiwic2xpY2UiLCJjb25jYXQiLCJ0b1N0cmluZyIsImhhc093blByb3BlcnR5IiwibmF0aXZlRm9yRWFjaCIsImZvckVhY2giLCJuYXRpdmVNYXAiLCJtYXAiLCJuYXRpdmVSZWR1Y2UiLCJyZWR1Y2UiLCJuYXRpdmVSZWR1Y2VSaWdodCIsInJlZHVjZVJpZ2h0IiwibmF0aXZlRmlsdGVyIiwiZmlsdGVyIiwibmF0aXZlRXZlcnkiLCJldmVyeSIsIm5hdGl2ZVNvbWUiLCJzb21lIiwibmF0aXZlSW5kZXhPZiIsImluZGV4T2YiLCJuYXRpdmVMYXN0SW5kZXhPZiIsImxhc3RJbmRleE9mIiwibmF0aXZlSXNBcnJheSIsImlzQXJyYXkiLCJuYXRpdmVLZXlzIiwia2V5cyIsIm5hdGl2ZUJpbmQiLCJiaW5kIiwiZWFjaCIsIm9iaiIsIml0ZXJhdG9yIiwiY29udGV4dCIsImxlbmd0aCIsImkiLCJjYWxsIiwiY29sbGVjdCIsInJlc3VsdHMiLCJ2YWx1ZSIsImluZGV4IiwibGlzdCIsImZpbmQiLCJkZXRlY3QiLCJwcmVkaWNhdGUiLCJyZXN1bHQiLCJhbnkiLCJzZWxlY3QiLCJpZGVudGl0eSIsImNvbnRhaW5zIiwiaW5jbHVkZSIsInRhcmdldCIsImRlbGF5IiwiZnVuYyIsIndhaXQiLCJhcmdzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsImFwcGx5IiwiZGVmZXIiLCJ0aHJvdHRsZSIsImZyYW1lIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwidGltZXN0YW1wIiwibGF0ZXIiLCJsYXN0Iiwibm93IiwiY2FsbE5vdyIsImRlZmF1bHRzIiwiaXNPYmplY3QiLCJzb3VyY2UiLCJwcm9wIiwia2V5IiwiaGFzIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZW1wbGF0ZVNldHRpbmdzIiwiZXZhbHVhdGUiLCJpbnRlcnBvbGF0ZSIsImVzY2FwZSIsIm5vTWF0Y2giLCJlc2NhcGVzIiwiZXNjYXBlUmVnRXhwIiwiZXNjYXBlQ2hhciIsIm1hdGNoIiwiYmFyZUlkZW50aWZpZXIiLCJ0ZW1wbGF0ZSIsInRleHQiLCJzZXR0aW5ncyIsIm9sZFNldHRpbmdzIiwibWF0Y2hlciIsIlJlZ0V4cCIsImpvaW4iLCJyZXBsYWNlIiwib2Zmc2V0IiwiYXJndW1lbnQiLCJ2YXJpYWJsZSIsInRlc3QiLCJFcnJvciIsInJlbmRlciIsImUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBRWxCLElBQUlBLElBQUlDLE9BQU9ELENBQUM7QUFDaEIsSUFBSUUsT0FBT0MsUUFBUSxpQkFBaUJILEVBQUVFLElBQUk7QUFFMUM7Ozs7Ozs7Q0FPQyxHQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkMsR0FDREUsT0FBT0MsT0FBTyxHQUFHLEFBQUM7SUFDaEIsSUFBSUMsSUFBSSxDQUFDO0lBRVQsbUJBQW1CO0lBQ25CQSxFQUFFQyxPQUFPLEdBQUc7SUFFWiw0RUFBNEU7SUFDNUUsSUFBSUMsVUFBVSxDQUFDO0lBRWYsd0RBQXdEO0lBQ3hELDBCQUEwQixHQUMxQixJQUFJQyxhQUFhQyxNQUFNQyxTQUFTLEVBQzlCQyxXQUFXQyxPQUFPRixTQUFTLEVBQzNCRyxZQUFZQyxTQUFTSixTQUFTO0lBQ2hDLHlCQUF5QixHQUV6Qix3RUFBd0U7SUFDeEUseURBQXlELEdBQ3pELElBQUlLLE9BQU9QLFdBQVdPLElBQUksRUFDeEJDLFFBQVFSLFdBQVdRLEtBQUssRUFDeEJDLFNBQVNULFdBQVdTLE1BQU0sRUFDMUJDLFdBQVdQLFNBQVNPLFFBQVEsRUFDNUJDLGlCQUFpQlIsU0FBU1EsY0FBYztJQUMxQyx3REFBd0QsR0FFeEQsMkVBQTJFO0lBQzNFLHFCQUFxQjtJQUNyQix5REFBeUQsR0FDekQsSUFBSUMsZ0JBQWdCWixXQUFXYSxPQUFPLEVBQ3BDQyxZQUFZZCxXQUFXZSxHQUFHLEVBQzFC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

}),
461: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals document, window, navigator */ /**
 * Webflow: Brand pages on the subdomain
 */ 
var Webflow = __webpack_require__(949);
Webflow.define('brand', module.exports = function($) {
    var api = {};
    var doc = document;
    var $html = $('html');
    var $body = $('body');
    var namespace = '.w-webflow-badge';
    var location = window.location;
    var isPhantom = /PhantomJS/i.test(navigator.userAgent);
    var fullScreenEvents = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
    var brandElement;
    // -----------------------------------
    // Module methods
    api.ready = function() {
        var shouldBrand = $html.attr('data-wf-status');
        var publishedDomain = $html.attr('data-wf-domain') || '';
        if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
            shouldBrand = true;
        }
        if (shouldBrand && !isPhantom) {
            brandElement = brandElement || createBadge();
            ensureBrand();
            setTimeout(ensureBrand, 500);
            $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
        }
    };
    function onFullScreenChange() {
        var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
        $(brandElement).attr('style', fullScreen ? 'display: none !important;' : '');
    }
    function createBadge() {
        var $brand = $('<a class="w-webflow-badge"></a>').attr('href', 'https://webflow.com?utm_campaign=brandjs');
        var $logoArt = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg').attr('alt', '').css({
            marginRight: '4px',
            width: '26px'
        });
        var $logoText = $('<img>').attr('src', 'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg').attr('alt', 'Made in Webflow');
        $brand.append($logoArt, $logoText);
        return $brand[0];
    }
    function ensureBrand() {
        var found = $body.children(namespace);
        var match = found.length && found.get(0) === brandElement;
        var inEditor = Webflow.env('editor');
        if (match) {
            // Remove brand when Editor is active
            if (inEditor) {
                found.remove();
            }
            // Exit early, brand is in place
            return;
        }
        // Remove any invalid brand elements
        if (found.length) {
            found.remove();
        }
        // Append the brand (unless Editor is active)
        if (!inEditor) {
            $body.append(brandElement);
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctYnJhbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgd2luZG93LCBuYXZpZ2F0b3IgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBCcmFuZCBwYWdlcyBvbiB0aGUgc3ViZG9tYWluXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnYnJhbmQnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIHZhciBhcGkgPSB7fTtcbiAgICB2YXIgZG9jID0gZG9jdW1lbnQ7XG4gICAgdmFyICRodG1sID0gJCgnaHRtbCcpO1xuICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICB2YXIgbmFtZXNwYWNlID0gJy53LXdlYmZsb3ctYmFkZ2UnO1xuICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgaXNQaGFudG9tID0gL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIGZ1bGxTY3JlZW5FdmVudHMgPVxuICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2Ugd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBtb3pmdWxsc2NyZWVuY2hhbmdlIG1zZnVsbHNjcmVlbmNoYW5nZSc7XG4gICAgdmFyIGJyYW5kRWxlbWVudDtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTW9kdWxlIG1ldGhvZHNcblxuICAgIGFwaS5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaG91bGRCcmFuZCA9ICRodG1sLmF0dHIoJ2RhdGEtd2Ytc3RhdHVzJyk7XG4gICAgICB2YXIgcHVibGlzaGVkRG9tYWluID0gJGh0bWwuYXR0cignZGF0YS13Zi1kb21haW4nKSB8fCAnJztcbiAgICAgIGlmIChcbiAgICAgICAgL1xcLndlYmZsb3dcXC5pbyQvaS50ZXN0KHB1Ymxpc2hlZERvbWFpbikgJiZcbiAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgIT09IHB1Ymxpc2hlZERvbWFpblxuICAgICAgKSB7XG4gICAgICAgIHNob3VsZEJyYW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRCcmFuZCAmJiAhaXNQaGFudG9tKSB7XG4gICAgICAgIGJyYW5kRWxlbWVudCA9IGJyYW5kRWxlbWVudCB8fCBjcmVhdGVCYWRnZSgpO1xuICAgICAgICBlbnN1cmVCcmFuZCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGVuc3VyZUJyYW5kLCA1MDApO1xuXG4gICAgICAgICQoZG9jKVxuICAgICAgICAgIC5vZmYoZnVsbFNjcmVlbkV2ZW50cywgb25GdWxsU2NyZWVuQ2hhbmdlKVxuICAgICAgICAgIC5vbihmdWxsU2NyZWVuRXZlbnRzLCBvbkZ1bGxTY3JlZW5DaGFuZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UoKSB7XG4gICAgICB2YXIgZnVsbFNjcmVlbiA9XG4gICAgICAgIGRvYy5mdWxsU2NyZWVuIHx8XG4gICAgICAgIGRvYy5tb3pGdWxsU2NyZWVuIHx8XG4gICAgICAgIGRvYy53ZWJraXRJc0Z1bGxTY3JlZW4gfHxcbiAgICAgICAgZG9jLm1zRnVsbHNjcmVlbkVsZW1lbnQgfHxcbiAgICAgICAgQm9vbGVhbihkb2Mud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQpO1xuICAgICAgJChicmFuZEVsZW1lbnQpLmF0dHIoXG4gICAgICAgICdzdHlsZScsXG4gICAgICAgIGZ1bGxTY3JlZW4gPyAnZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OycgOiAnJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCYWRnZSgpIHtcbiAgICAgIHZhciAkYnJhbmQgPSAkKCc8YSBjbGFzcz1cInctd2ViZmxvdy1iYWRnZVwiPjwvYT4nKS5hdHRyKFxuICAgICAgICAnaHJlZicsXG4gICAgICAgICdodHRwczovL3dlYmZsb3cuY29tP3V0bV9jYW1wYWlnbj1icmFuZGpzJ1xuICAgICAgKTtcblxuICAgICAgdmFyICRsb2dvQXJ0ID0gJCgnPGltZz4nKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAnaHR0cHM6Ly9kM2U1NHYxMDNqOHFiYi5jbG91ZGZyb250Lm5ldC9pbWcvd2ViZmxvdy1iYWRnZS1pY29uLWQyLjg5ZTEyYzMyMmUuc3ZnJ1xuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdhbHQnLCAnJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICc0cHgnLFxuICAgICAgICAgIHdpZHRoOiAnMjZweCcsXG4gICAgICAgIH0pO1xuXG4gICAgICB2YXIgJGxvZ29UZXh0ID0gJCgnPGltZz4nKVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAnaHR0cHM6Ly9kM2U1NHYxMDNqOHFiYi5jbG91ZGZyb250Lm5ldC9pbWcvd2ViZmxvdy1iYWRnZS10ZXh0LWQyLmM4MmNlYzNiNzguc3ZnJ1xuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdhbHQnLCAnTWFkZSBpbiBXZWJmbG93Jyk7XG5cbiAgICAgICRicmFuZC5hcHBlbmQoJGxvZ29BcnQsICRsb2dvVGV4dCk7XG4gICAgICByZXR1cm4gJGJyYW5kWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuc3VyZUJyYW5kKCkge1xuICAgICAgdmFyIGZvdW5kID0gJGJvZHkuY2hpbGRyZW4obmFtZXNwYWNlKTtcbiAgICAgIHZhciBtYXRjaCA9IGZvdW5kLmxlbmd0aCAmJiBmb3VuZC5nZXQoMCkgPT09IGJyYW5kRWxlbWVudDtcbiAgICAgIHZhciBpbkVkaXRvciA9IFdlYmZsb3cuZW52KCdlZGl0b3InKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAvLyBSZW1vdmUgYnJhbmQgd2hlbiBFZGl0b3IgaXMgYWN0aXZlXG4gICAgICAgIGlmIChpbkVkaXRvcikge1xuICAgICAgICAgIGZvdW5kLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4aXQgZWFybHksIGJyYW5kIGlzIGluIHBsYWNlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBhbnkgaW52YWxpZCBicmFuZCBlbGVtZW50c1xuICAgICAgaWYgKGZvdW5kLmxlbmd0aCkge1xuICAgICAgICBmb3VuZC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIC8vIEFwcGVuZCB0aGUgYnJhbmQgKHVubGVzcyBFZGl0b3IgaXMgYWN0aXZlKVxuICAgICAgaWYgKCFpbkVkaXRvcikge1xuICAgICAgICAkYm9keS5hcHBlbmQoYnJhbmRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsImFwaSIsImRvYyIsImRvY3VtZW50IiwiJGh0bWwiLCIkYm9keSIsIm5hbWVzcGFjZSIsImxvY2F0aW9uIiwid2luZG93IiwiaXNQaGFudG9tIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImZ1bGxTY3JlZW5FdmVudHMiLCJicmFuZEVsZW1lbnQiLCJyZWFkeSIsInNob3VsZEJyYW5kIiwiYXR0ciIsInB1Ymxpc2hlZERvbWFpbiIsImhvc3RuYW1lIiwiY3JlYXRlQmFkZ2UiLCJlbnN1cmVCcmFuZCIsInNldFRpbWVvdXQiLCJvZmYiLCJvbkZ1bGxTY3JlZW5DaGFuZ2UiLCJvbiIsImZ1bGxTY3JlZW4iLCJtb3pGdWxsU2NyZWVuIiwid2Via2l0SXNGdWxsU2NyZWVuIiwibXNGdWxsc2NyZWVuRWxlbWVudCIsIkJvb2xlYW4iLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsIiRicmFuZCIsIiRsb2dvQXJ0IiwiY3NzIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsIiRsb2dvVGV4dCIsImFwcGVuZCIsImZvdW5kIiwiY2hpbGRyZW4iLCJtYXRjaCIsImxlbmd0aCIsImdldCIsImluRWRpdG9yIiwiZW52IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUMsR0FFdkM7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUM7SUFDM0IsSUFBSUMsTUFBTSxDQUFDO0lBQ1gsSUFBSUMsTUFBTUM7SUFDVixJQUFJQyxRQUFRSixFQUFFO0lBQ2QsSUFBSUssUUFBUUwsRUFBRTtJQUNkLElBQUlNLFlBQVk7SUFDaEIsSUFBSUMsV0FBV0MsT0FBT0QsUUFBUTtJQUM5QixJQUFJRSxZQUFZLGFBQWFDLElBQUksQ0FBQ0MsVUFBVUMsU0FBUztJQUNyRCxJQUFJQyxtQkFDRjtJQUNGLElBQUlDO0lBRUosc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUVqQmIsSUFBSWMsS0FBSyxHQUFHO1FBQ1YsSUFBSUMsY0FBY1osTUFBTWEsSUFBSSxDQUFDO1FBQzdCLElBQUlDLGtCQUFrQmQsTUFBTWEsSUFBSSxDQUFDLHFCQUFxQjtRQUN0RCxJQUNFLGtCQUFrQlAsSUFBSSxDQUFDUSxvQkFDdkJYLFNBQVNZLFFBQVEsS0FBS0QsaUJBQ3RCO1lBQ0FGLGNBQWM7UUFDaEI7UUFDQSxJQUFJQSxlQUFlLENBQUNQLFdBQVc7WUFDN0JLLGVBQWVBLGdCQUFnQk07WUFDL0JDO1lBQ0FDLFdBQVdELGFBQWE7WUFFeEJyQixFQUFFRSxLQUNDcUIsR0FBRyxDQUFDVixrQkFBa0JXLG9CQUN0QkMsRUFBRSxDQUFDWixrQkFBa0JXO1FBQzFCO0lBQ0Y7SUFFQSxTQUFTQTtRQUNQLElBQUlFLGFBQ0Z4QixJQUFJd0IsVUFBVSxJQUNkeEIsSUFBSXlCLGFBQWEsSUFDakJ6QixJQUFJMEIsa0JBQWtCLElBQ3RCMUIsSUFBSTJCLG1CQUFtQixJQUN2QkMsUUFBUTVCLElBQUk2Qix1QkFBdUI7UUFDckMvQixFQUFFYyxjQUFjRyxJQUFJLENBQ2xCLFNBQ0FTLGFBQWEsOEJBQThCO0lBRS9DO0lBRUEsU0FBU047UUFDUCxJQUFJWSxTQUFTaEMsRUFBRSxtQ0FBbUNpQixJQUFJLENBQ3BELFFBQ0E7UUFHRixJQUFJZ0IsV0FBV2pDLEVBQUUsU0FDZGlCLElBQUksQ0FDSCxPQUNBLGtGQUVEQSxJQUFJLENBQUMsT0FBTyxJQUNaaUIsR0FBRyxDQUFDO1lBQ0hDLGFBQWE7WUFDYkMsT0FBTztRQUNUO1FBRUYsSUFBSUMsWUFBWXJDLEVBQUUsU0FDZmlCLElBQUksQ0FDSCxPQUNBLGtGQUVEQSxJQUFJLENBQUMsT0FBTztRQUVmZSxPQUFPTSxNQUFNLENBQUNMLFVBQVVJO1FBQ3hCLE9BQU9MLE1BQU0sQ0FBQyxFQUFFO0lBQ2xCO0lBRUEsU0FBU1g7UUFDUCxJQUFJa0IsUUFBUWxDLE1BQU1tQyxRQUFRLENBQUNsQztRQUMzQixJQUFJbUMsUUFBUUYsTUFBTUcsTUFBTSxJQUFJSCxNQUFNSSxHQUFHLENBQUMsT0FBTzdCO1FBQzdDLElBQUk4QixXQUFXakQsUUFBUWtELEdBQUcsQ0FBQztRQUMzQixJQUFJSixPQUFPO1lBQ1QscUNBQXFDO1lBQ3JDLElBQUlHLFVBQVU7Z0JBQ1pMLE1BQU1PLE1BQU07WUFDZDtZQUNBLGdDQUFnQztZQUNoQztRQUNGO1FBQ0Esb0NBQW9DO1FBQ3BDLElBQUlQLE1BQU1HLE1BQU0sRUFBRTtZQUNoQkgsTUFBTU8sTUFBTTtRQUNkO1FBQ0EsNkNBQTZDO1FBQzdDLElBQUksQ0FBQ0YsVUFBVTtZQUNidkMsTUFBTWlDLE1BQU0sQ0FBQ3hCO1FBQ2Y7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixPQUFPYjtBQUNUIn0=

}),
338: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ /**
 * Webflow: focus-visible
 */ 
var Webflow = __webpack_require__(949);
/*
 * This polyfill comes from https://github.com/WICG/focus-visible
 */ Webflow.define('focus-visible', module.exports = function() {
    /**
     * Applies the :focus-visible polyfill at the given scope.
     * A scope in this case is either the top-level Document or a Shadow Root.
     *
     * @param {(Document|ShadowRoot)} scope
     * @see https://github.com/WICG/focus-visible
     */ function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
        var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true
        };
        /**
       * Helper function for legacy browsers and iframes which sometimes focus
       * elements like document, body, and non-interactive SVG.
       * @param {Element} el
       */ function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
                return true;
            }
            return false;
        }
        /**
       * Computes whether the given element should automatically trigger the
       * `focus-visible` class being added, i.e. whether it should always match
       * `:focus-visible` when focused.
       * @param {Element} el
       * @return {boolean}
       */ function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
            }
            if (tagName === 'TEXTAREA' && !el.readOnly) {
                return true;
            }
            if (el.isContentEditable) {
                return true;
            }
            return false;
        }
        function addFocusVisibleAttribute(el) {
            if (el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.setAttribute('data-wf-focus-visible', 'true');
        }
        function removeFocusVisibleAttribute(el) {
            if (!el.getAttribute('data-wf-focus-visible')) {
                return;
            }
            el.removeAttribute('data-wf-focus-visible');
        }
        /**
       * If the most recent user interaction was via the keyboard;
       * and the key press did not include a meta, alt/option, or control key;
       * then the modality is keyboard. Otherwise, the modality is not keyboard.
       * Apply `focus-visible` to any current active element and keep track
       * of our keyboard modality state with `hadKeyboardEvent`.
       * @param {KeyboardEvent} e
       */ function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
            }
            if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
            }
            hadKeyboardEvent = true;
        }
        /**
       * If at any point a user clicks with a pointing device, ensure that we change
       * the modality away from keyboard.
       * This avoids the situation where a user presses a key on an already focused
       * element, and then clicks on a different element, focusing it with a
       * pointing device, while we still think we're in keyboard modality.
       * @param {Event} e
       */ function onPointerDown() {
            hadKeyboardEvent = false;
        }
        /**
       * On `focus`, add the `focus-visible` class to the target if:
       * - the target received focus as a result of keyboard navigation, or
       * - the event target is an element that will likely require interaction
       *   via the keyboard (e.g. a text box)
       * @param {Event} e
       */ function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
            }
        }
        /**
       * On `blur`, remove the `focus-visible` class from the target.
       * @param {Event} e
       */ function onBlur(e) {
            if (!isValidFocusTarget(e.target)) {
                return;
            }
            if (e.target.hasAttribute('data-wf-focus-visible')) {
                // To detect a tab/window switch, we look for a blur event followed
                // rapidly by a visibility change.
                // If we don't see a visibility change within 100ms, it's probably a
                // regular focus change.
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                    hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
            }
        }
        /**
       * If the user changes tabs, keep track of whether or not the previously
       * focused element had .focus-visible.
       * @param {Event} e
       */ function onVisibilityChange() {
            if (document.visibilityState === 'hidden') {
                // If the tab becomes active again, the browser will handle calling focus
                // on the element (Safari actually calls it twice).
                // If this tab change caused a blur on an element with focus-visible,
                // re-apply the class when the user switches back to the tab.
                if (hadFocusVisibleRecently) {
                    hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
            }
        }
        /**
       * Add a group of listeners to detect usage of any pointing devices.
       * These listeners will be added when the polyfill first loads, and anytime
       * the window is blurred, so that they are active when the window regains
       * focus.
       */ function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
        }
        /**
       * When the polfyill first loads, assume the user is in keyboard modality.
       * If any event is received from a pointing device (e.g. mouse, pointer,
       * touch), turn off keyboard modality.
       * This accounts for situations where focus enters the page from the URL bar.
       * @param {Event} e
       */ function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
                return;
            }
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
        }
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
        document.addEventListener('visibilitychange', onVisibilityChange, true);
        addInitialPointerMoveListeners();
        // For focus and blur, we specifically care about state changes in the local
        // scope. This is because focus / blur events that originate from within a
        // shadow root are not re-dispatched from the host element if it was already
        // the active element in its own scope:
        scope.addEventListener('focus', onFocus, true);
        scope.addEventListener('blur', onBlur, true);
    }
    function ready() {
        if (typeof document !== 'undefined') {
            try {
                // check for native support; this will throw if the selector is not considered valid
                document.querySelector(':focus-visible');
            } catch (e) {
                // :focus-visible pseudo-selector is not supported natively
                applyFocusVisiblePolyfill(document);
            }
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9jdXMtdmlzaWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdywgZG9jdW1lbnQgKi9cblxuLyoqXG4gKiBXZWJmbG93OiBmb2N1cy12aXNpYmxlXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbi8qXG4gKiBUaGlzIHBvbHlmaWxsIGNvbWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZVxuICovXG5XZWJmbG93LmRlZmluZShcbiAgJ2ZvY3VzLXZpc2libGUnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgOmZvY3VzLXZpc2libGUgcG9seWZpbGwgYXQgdGhlIGdpdmVuIHNjb3BlLlxuICAgICAqIEEgc2NvcGUgaW4gdGhpcyBjYXNlIGlzIGVpdGhlciB0aGUgdG9wLWxldmVsIERvY3VtZW50IG9yIGEgU2hhZG93IFJvb3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyhEb2N1bWVudHxTaGFkb3dSb290KX0gc2NvcGVcbiAgICAgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKHNjb3BlKSB7XG4gICAgICB2YXIgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICB2YXIgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSBmYWxzZTtcbiAgICAgIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSBudWxsO1xuXG4gICAgICB2YXIgaW5wdXRUeXBlc0FsbG93bGlzdCA9IHtcbiAgICAgICAgdGV4dDogdHJ1ZSxcbiAgICAgICAgc2VhcmNoOiB0cnVlLFxuICAgICAgICB1cmw6IHRydWUsXG4gICAgICAgIHRlbDogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICAgIHBhc3N3b3JkOiB0cnVlLFxuICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgIG1vbnRoOiB0cnVlLFxuICAgICAgICB3ZWVrOiB0cnVlLFxuICAgICAgICB0aW1lOiB0cnVlLFxuICAgICAgICBkYXRldGltZTogdHJ1ZSxcbiAgICAgICAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBsZWdhY3kgYnJvd3NlcnMgYW5kIGlmcmFtZXMgd2hpY2ggc29tZXRpbWVzIGZvY3VzXG4gICAgICAgKiBlbGVtZW50cyBsaWtlIGRvY3VtZW50LCBib2R5LCBhbmQgbm9uLWludGVyYWN0aXZlIFNWRy5cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gaXNWYWxpZEZvY3VzVGFyZ2V0KGVsKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlbCAmJlxuICAgICAgICAgIGVsICE9PSBkb2N1bWVudCAmJlxuICAgICAgICAgIGVsLm5vZGVOYW1lICE9PSAnSFRNTCcgJiZcbiAgICAgICAgICBlbC5ub2RlTmFtZSAhPT0gJ0JPRFknICYmXG4gICAgICAgICAgJ2NsYXNzTGlzdCcgaW4gZWwgJiZcbiAgICAgICAgICAnY29udGFpbnMnIGluIGVsLmNsYXNzTGlzdFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICAgICAgICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICAgICAgICogYDpmb2N1cy12aXNpYmxlYCB3aGVuIGZvY3VzZWQuXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBmb2N1c1RyaWdnZXJzS2V5Ym9hcmRNb2RhbGl0eShlbCkge1xuICAgICAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblxuICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBpbnB1dFR5cGVzQWxsb3dsaXN0W3R5cGVdICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIWVsLnJlYWRPbmx5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlKGVsKSB7XG4gICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2YtZm9jdXMtdmlzaWJsZScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlKGVsKSB7XG4gICAgICAgIGlmICghZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXdmLWZvY3VzLXZpc2libGUnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2YtZm9jdXMtdmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBtb3N0IHJlY2VudCB1c2VyIGludGVyYWN0aW9uIHdhcyB2aWEgdGhlIGtleWJvYXJkO1xuICAgICAgICogYW5kIHRoZSBrZXkgcHJlc3MgZGlkIG5vdCBpbmNsdWRlIGEgbWV0YSwgYWx0L29wdGlvbiwgb3IgY29udHJvbCBrZXk7XG4gICAgICAgKiB0aGVuIHRoZSBtb2RhbGl0eSBpcyBrZXlib2FyZC4gT3RoZXJ3aXNlLCB0aGUgbW9kYWxpdHkgaXMgbm90IGtleWJvYXJkLlxuICAgICAgICogQXBwbHkgYGZvY3VzLXZpc2libGVgIHRvIGFueSBjdXJyZW50IGFjdGl2ZSBlbGVtZW50IGFuZCBrZWVwIHRyYWNrXG4gICAgICAgKiBvZiBvdXIga2V5Ym9hcmQgbW9kYWxpdHkgc3RhdGUgd2l0aCBgaGFkS2V5Ym9hcmRFdmVudGAuXG4gICAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWYWxpZEZvY3VzVGFyZ2V0KHNjb3BlLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlKHNjb3BlLmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYXQgYW55IHBvaW50IGEgdXNlciBjbGlja3Mgd2l0aCBhIHBvaW50aW5nIGRldmljZSwgZW5zdXJlIHRoYXQgd2UgY2hhbmdlXG4gICAgICAgKiB0aGUgbW9kYWxpdHkgYXdheSBmcm9tIGtleWJvYXJkLlxuICAgICAgICogVGhpcyBhdm9pZHMgdGhlIHNpdHVhdGlvbiB3aGVyZSBhIHVzZXIgcHJlc3NlcyBhIGtleSBvbiBhbiBhbHJlYWR5IGZvY3VzZWRcbiAgICAgICAqIGVsZW1lbnQsIGFuZCB0aGVuIGNsaWNrcyBvbiBhIGRpZmZlcmVudCBlbGVtZW50LCBmb2N1c2luZyBpdCB3aXRoIGFcbiAgICAgICAqIHBvaW50aW5nIGRldmljZSwgd2hpbGUgd2Ugc3RpbGwgdGhpbmsgd2UncmUgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oKSB7XG4gICAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBgZm9jdXNgLCBhZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgdGFyZ2V0IGlmOlxuICAgICAgICogLSB0aGUgdGFyZ2V0IHJlY2VpdmVkIGZvY3VzIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIG5hdmlnYXRpb24sIG9yXG4gICAgICAgKiAtIHRoZSBldmVudCB0YXJnZXQgaXMgYW4gZWxlbWVudCB0aGF0IHdpbGwgbGlrZWx5IHJlcXVpcmUgaW50ZXJhY3Rpb25cbiAgICAgICAqICAgdmlhIHRoZSBrZXlib2FyZCAoZS5nLiBhIHRleHQgYm94KVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgICAgLy8gUHJldmVudCBJRSBmcm9tIGZvY3VzaW5nIHRoZSBkb2N1bWVudCBvciBIVE1MIGVsZW1lbnQuXG4gICAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KGUudGFyZ2V0KSkge1xuICAgICAgICAgIGFkZEZvY3VzVmlzaWJsZUF0dHJpYnV0ZShlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPbiBgYmx1cmAsIHJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIHRhcmdldC5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy12aXNpYmxlJykpIHtcbiAgICAgICAgICAvLyBUbyBkZXRlY3QgYSB0YWIvd2luZG93IHN3aXRjaCwgd2UgbG9vayBmb3IgYSBibHVyIGV2ZW50IGZvbGxvd2VkXG4gICAgICAgICAgLy8gcmFwaWRseSBieSBhIHZpc2liaWxpdHkgY2hhbmdlLlxuICAgICAgICAgIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gICAgICAgICAgLy8gcmVndWxhciBmb2N1cyBjaGFuZ2UuXG4gICAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSB0cnVlO1xuICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgcmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSB1c2VyIGNoYW5nZXMgdGFicywga2VlcCB0cmFjayBvZiB3aGV0aGVyIG9yIG5vdCB0aGUgcHJldmlvdXNseVxuICAgICAgICogZm9jdXNlZCBlbGVtZW50IGhhZCAuZm9jdXMtdmlzaWJsZS5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgICAgICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAgICAgICAvLyBvbiB0aGUgZWxlbWVudCAoU2FmYXJpIGFjdHVhbGx5IGNhbGxzIGl0IHR3aWNlKS5cbiAgICAgICAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAgICAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgICAgICAgaWYgKGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5KSB7XG4gICAgICAgICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBncm91cCBvZiBsaXN0ZW5lcnMgdG8gZGV0ZWN0IHVzYWdlIG9mIGFueSBwb2ludGluZyBkZXZpY2VzLlxuICAgICAgICogVGhlc2UgbGlzdGVuZXJzIHdpbGwgYmUgYWRkZWQgd2hlbiB0aGUgcG9seWZpbGwgZmlyc3QgbG9hZHMsIGFuZCBhbnl0aW1lXG4gICAgICAgKiB0aGUgd2luZG93IGlzIGJsdXJyZWQsIHNvIHRoYXQgdGhleSBhcmUgYWN0aXZlIHdoZW4gdGhlIHdpbmRvdyByZWdhaW5zXG4gICAgICAgKiBmb2N1cy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIHBvbGZ5aWxsIGZpcnN0IGxvYWRzLCBhc3N1bWUgdGhlIHVzZXIgaXMgaW4ga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBJZiBhbnkgZXZlbnQgaXMgcmVjZWl2ZWQgZnJvbSBhIHBvaW50aW5nIGRldmljZSAoZS5nLiBtb3VzZSwgcG9pbnRlcixcbiAgICAgICAqIHRvdWNoKSwgdHVybiBvZmYga2V5Ym9hcmQgbW9kYWxpdHkuXG4gICAgICAgKiBUaGlzIGFjY291bnRzIGZvciBzaXR1YXRpb25zIHdoZXJlIGZvY3VzIGVudGVycyB0aGUgcGFnZSBmcm9tIHRoZSBVUkwgYmFyLlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBvbkluaXRpYWxQb2ludGVyTW92ZShlKSB7XG4gICAgICAgIC8vIFdvcmsgYXJvdW5kIGEgU2FmYXJpIHF1aXJrIHRoYXQgZmlyZXMgYSBtb3VzZW1vdmUgb24gPGh0bWw+IHdoZW5ldmVyIHRoZVxuICAgICAgICAvLyB3aW5kb3cgYmx1cnMsIGV2ZW4gaWYgeW91J3JlIHRhYmJpbmcgb3V0IG9mIHRoZSBwYWdlLiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgJiYgZS50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IGZhbHNlO1xuICAgICAgICByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRm9yIHNvbWUga2luZHMgb2Ygc3RhdGUsIHdlIGFyZSBpbnRlcmVzdGVkIGluIGNoYW5nZXMgYXQgdGhlIGdsb2JhbCBzY29wZVxuICAgICAgLy8gb25seS4gRm9yIGV4YW1wbGUsIGdsb2JhbCBwb2ludGVyIGlucHV0LCBnbG9iYWwga2V5IHByZXNzZXMgYW5kIGdsb2JhbFxuICAgICAgLy8gdmlzaWJpbGl0eSBjaGFuZ2Ugc2hvdWxkIGFmZmVjdCB0aGUgc3RhdGUgYXQgZXZlcnkgc2NvcGU6XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblBvaW50ZXJEb3duLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xuXG4gICAgICBhZGRJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgLy8gRm9yIGZvY3VzIGFuZCBibHVyLCB3ZSBzcGVjaWZpY2FsbHkgY2FyZSBhYm91dCBzdGF0ZSBjaGFuZ2VzIGluIHRoZSBsb2NhbFxuICAgICAgLy8gc2NvcGUuIFRoaXMgaXMgYmVjYXVzZSBmb2N1cyAvIGJsdXIgZXZlbnRzIHRoYXQgb3JpZ2luYXRlIGZyb20gd2l0aGluIGFcbiAgICAgIC8vIHNoYWRvdyByb290IGFyZSBub3QgcmUtZGlzcGF0Y2hlZCBmcm9tIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgd2FzIGFscmVhZHlcbiAgICAgIC8vIHRoZSBhY3RpdmUgZWxlbWVudCBpbiBpdHMgb3duIHNjb3BlOlxuICAgICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzLCB0cnVlKTtcbiAgICAgIHNjb3BlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIsIHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBjaGVjayBmb3IgbmF0aXZlIHN1cHBvcnQ7IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgc2VsZWN0b3IgaXMgbm90IGNvbnNpZGVyZWQgdmFsaWRcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMtdmlzaWJsZScpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gOmZvY3VzLXZpc2libGUgcHNldWRvLXNlbGVjdG9yIGlzIG5vdCBzdXBwb3J0ZWQgbmF0aXZlbHlcbiAgICAgICAgICBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4ge3JlYWR5fTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwbHlGb2N1c1Zpc2libGVQb2x5ZmlsbCIsInNjb3BlIiwiaGFkS2V5Ym9hcmRFdmVudCIsImhhZEZvY3VzVmlzaWJsZVJlY2VudGx5IiwiaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0IiwiaW5wdXRUeXBlc0FsbG93bGlzdCIsInRleHQiLCJzZWFyY2giLCJ1cmwiLCJ0ZWwiLCJlbWFpbCIsInBhc3N3b3JkIiwibnVtYmVyIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsInRpbWUiLCJkYXRldGltZSIsImlzVmFsaWRGb2N1c1RhcmdldCIsImVsIiwiZG9jdW1lbnQiLCJub2RlTmFtZSIsImNsYXNzTGlzdCIsImZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5IiwidHlwZSIsInRhZ05hbWUiLCJyZWFkT25seSIsImlzQ29udGVudEVkaXRhYmxlIiwiYWRkRm9jdXNWaXNpYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRm9jdXNWaXNpYmxlQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwib25LZXlEb3duIiwiZSIsIm1ldGFLZXkiLCJhbHRLZXkiLCJjdHJsS2V5IiwiYWN0aXZlRWxlbWVudCIsIm9uUG9pbnRlckRvd24iLCJvbkZvY3VzIiwidGFyZ2V0Iiwib25CbHVyIiwiaGFzQXR0cmlidXRlIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInZpc2liaWxpdHlTdGF0ZSIsImFkZEluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkluaXRpYWxQb2ludGVyTW92ZSIsInJlbW92ZUluaXRpYWxQb2ludGVyTW92ZUxpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b0xvd2VyQ2FzZSIsInJlYWR5IiwicXVlcnlTZWxlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0Qjs7Q0FFQyxHQUNERCxRQUFRRSxNQUFNLENBQ1osaUJBQ0NDLE9BQU9DLE9BQU8sR0FBRztJQUNoQjs7Ozs7O0tBTUMsR0FDRCxTQUFTQywwQkFBMEJDLEtBQUs7UUFDdEMsSUFBSUMsbUJBQW1CO1FBQ3ZCLElBQUlDLDBCQUEwQjtRQUM5QixJQUFJQyxpQ0FBaUM7UUFFckMsSUFBSUMsc0JBQXNCO1lBQ3hCQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWLGtCQUFrQjtRQUNwQjtRQUVBOzs7O09BSUMsR0FDRCxTQUFTQyxtQkFBbUJDLEVBQUU7WUFDNUIsSUFDRUEsTUFDQUEsT0FBT0MsWUFDUEQsR0FBR0UsUUFBUSxLQUFLLFVBQ2hCRixHQUFHRSxRQUFRLEtBQUssVUFDaEIsZUFBZUYsTUFDZixjQUFjQSxHQUFHRyxTQUFTLEVBQzFCO2dCQUNBLE9BQU87WUFDVDtZQUNBLE9BQU87UUFDVDtRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNDLDhCQUE4QkosRUFBRTtZQUN2QyxJQUFJSyxPQUFPTCxHQUFHSyxJQUFJO1lBQ2xCLElBQUlDLFVBQVVOLEdBQUdNLE9BQU87WUFFeEIsSUFBSUEsWUFBWSxXQUFXcEIsbUJBQW1CLENBQUNtQixLQUFLLElBQUksQ0FBQ0wsR0FBR08sUUFBUSxFQUFFO2dCQUNwRSxPQUFPO1lBQ1Q7WUFFQSxJQUFJRCxZQUFZLGNBQWMsQ0FBQ04sR0FBR08sUUFBUSxFQUFFO2dCQUMxQyxPQUFPO1lBQ1Q7WUFFQSxJQUFJUCxHQUFHUSxpQkFBaUIsRUFBRTtnQkFDeEIsT0FBTztZQUNUO1lBRUEsT0FBTztRQUNUO1FBRUEsU0FBU0MseUJBQXlCVCxFQUFFO1lBQ2xDLElBQUlBLEdBQUdVLFlBQVksQ0FBQywwQkFBMEI7Z0JBQzVDO1lBQ0Y7WUFDQVYsR0FBR1csWUFBWSxDQUFDLHlCQUF5QjtRQUMzQztRQUVBLFNBQVNDLDRCQUE0QlosRUFBRTtZQUNyQyxJQUFJLENBQUNBLEdBQUdVLFlBQVksQ0FBQywwQkFBMEI7Z0JBQzdDO1lBQ0Y7WUFDQVYsR0FBR2EsZUFBZSxDQUFDO1FBQ3JCO1FBRUE7Ozs7Ozs7T0FPQyxHQUNELFNBQVNDLFVBQVVDLENBQUM7WUFDbEIsSUFBSUEsRUFBRUMsT0FBTyxJQUFJRCxFQUFFRSxNQUFNLElBQUlGLEVBQUVHLE9BQU8sRUFBRTtnQkFDdEM7WUFDRjtZQUVBLElBQUluQixtQkFBbUJqQixNQUFNcUMsYUFBYSxHQUFHO2dCQUMzQ1YseUJBQXlCM0IsTUFBTXFDLGFBQWE7WUFDOUM7WUFFQXBDLG1CQUFtQjtRQUNyQjtRQUVBOzs7Ozs7O09BT0MsR0FDRCxTQUFTcUM7WUFDUHJDLG1CQUFtQjtRQUNyQjtRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNzQyxRQUFRTixDQUFDO1lBQ2hCLHlEQUF5RDtZQUN6RCxJQUFJLENBQUNoQixtQkFBbUJnQixFQUFFTyxNQUFNLEdBQUc7Z0JBQ2pDO1lBQ0Y7WUFFQSxJQUFJdkMsb0JBQW9CcUIsOEJBQThCVyxFQUFFTyxNQUFNLEdBQUc7Z0JBQy9EYix5QkFBeUJNLEVBQUVPLE1BQU07WUFDbkM7UUFDRjtRQUVBOzs7T0FHQyxHQUNELFNBQVNDLE9BQU9SLENBQUM7WUFDZixJQUFJLENBQUNoQixtQkFBbUJnQixFQUFFTyxNQUFNLEdBQUc7Z0JBQ2pDO1lBQ0Y7WUFFQSxJQUFJUCxFQUFFTyxNQUFNLENBQUNFLFlBQVksQ0FBQywwQkFBMEI7Z0JBQ2xELG1FQUFtRTtnQkFDbkUsa0NBQWtDO2dCQUNsQyxvRUFBb0U7Z0JBQ3BFLHdCQUF3QjtnQkFDeEJ4QywwQkFBMEI7Z0JBQzFCeUMsT0FBT0MsWUFBWSxDQUFDekM7Z0JBQ3BCQSxpQ0FBaUN3QyxPQUFPRSxVQUFVLENBQUM7b0JBQ2pEM0MsMEJBQTBCO2dCQUM1QixHQUFHO2dCQUNINEIsNEJBQTRCRyxFQUFFTyxNQUFNO1lBQ3RDO1FBQ0Y7UUFFQTs7OztPQUlDLEdBQ0QsU0FBU007WUFDUCxJQUFJM0IsU0FBUzRCLGVBQWUsS0FBSyxVQUFVO2dCQUN6Qyx5RUFBeUU7Z0JBQ3pFLG1EQUFtRDtnQkFDbkQscUVBQXFFO2dCQUNyRSw2REFBNkQ7Z0JBQzdELElBQUk3Qyx5QkFBeUI7b0JBQzNCRCxtQkFBbUI7Z0JBQ3JCO2dCQUNBK0M7WUFDRjtRQUNGO1FBRUE7Ozs7O09BS0MsR0FDRCxTQUFTQTtZQUNQN0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLFdBQVdDO1lBQ3JDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVDO1lBQ3pDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVDO1lBQ3pDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGFBQWFDO1lBQ3ZDL0IsU0FBUzhCLGdCQUFnQixDQUFDLGNBQWNDO1lBQ3hDL0IsU0FBUzhCLGdCQUFnQixDQUFDLFlBQVlDO1FBQ3hDO1FBRUEsU0FBU0M7WUFDUGhDLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxXQUFXRjtZQUN4Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxlQUFlRjtZQUM1Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxlQUFlRjtZQUM1Qy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxhQUFhRjtZQUMxQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxjQUFjRjtZQUMzQy9CLFNBQVNpQyxtQkFBbUIsQ0FBQyxZQUFZRjtRQUMzQztRQUVBOzs7Ozs7T0FNQyxHQUNELFNBQVNBLHFCQUFxQmpCLENBQUM7WUFDN0IsMkVBQTJFO1lBQzNFLGtFQUFrRTtZQUNsRSxJQUFJQSxFQUFFTyxNQUFNLENBQUNwQixRQUFRLElBQUlhLEVBQUVPLE1BQU0sQ0FBQ3BCLFFBQVEsQ0FBQ2lDLFdBQVcsT0FBTyxRQUFRO2dCQUNuRTtZQUNGO1lBRUFwRCxtQkFBbUI7WUFDbkJrRDtRQUNGO1FBRUEsNEVBQTRFO1FBQzVFLHlFQUF5RTtRQUN6RSw0REFBNEQ7UUFDNURoQyxTQUFTOEIsZ0JBQWdCLENBQUMsV0FBV2pCLFdBQVc7UUFDaERiLFNBQVM4QixnQkFBZ0IsQ0FBQyxhQUFhWCxlQUFlO1FBQ3REbkIsU0FBUzhCLGdCQUFnQixDQUFDLGVBQWVYLGVBQWU7UUFDeERuQixTQUFTOEIsZ0JBQWdCLENBQUMsY0FBY1gsZUFBZTtRQUN2RG5CLFNBQVM4QixnQkFBZ0IsQ0FBQyxvQkFBb0JILG9CQUFvQjtRQUVsRUU7UUFFQSw0RUFBNEU7UUFDNUUsMEVBQTBFO1FBQzFFLDRFQUE0RTtRQUM1RSx1Q0FBdUM7UUFDdkNoRCxNQUFNaUQsZ0JBQWdCLENBQUMsU0FBU1YsU0FBUztRQUN6Q3ZDLE1BQU1pRCxnQkFBZ0IsQ0FBQyxRQUFRUixRQUFRO0lBQ3pDO0lBRUEsU0FBU2E7UUFDUCxJQUFJLE9BQU9uQyxhQUFhLGFBQWE7WUFDbkMsSUFBSTtnQkFDRixvRkFBb0Y7Z0JBQ3BGQSxTQUFTb0MsYUFBYSxDQUFDO1lBQ3pCLEVBQUUsT0FBT3RCLEdBQUc7Z0JBQ1YsMkRBQTJEO2dCQUMzRGxDLDBCQUEwQm9CO1lBQzVCO1FBQ0Y7SUFDRjtJQUVBLGdCQUFnQjtJQUNoQixPQUFPO1FBQUNtQztJQUFLO0FBQ2YifQ==

}),
334: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals document, MouseEvent */ /**
 * Webflow: focus
 */ 
var Webflow = __webpack_require__(949);
/*
 * Safari has a weird bug where it doesn't support :focus for links with hrefs,
 * buttons, and input[type=button|submit], so we listen for mousedown events
 * instead and force the element to emit a focus event in those cases.

 * See these webkit bugs for reference:
 * https://bugs.webkit.org/show_bug.cgi?id=22261
 * https://bugs.webkit.org/show_bug.cgi?id=229895
 */ Webflow.define('focus', module.exports = function() {
    var capturedEvents = [];
    var capturing = false;
    function captureEvent(e) {
        if (capturing) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            capturedEvents.unshift(e);
        }
    }
    /*
     * The only mousedown events we care about here are ones emanating from
     * (A) anchor links with href attribute,
     * (B) non-disabled buttons,
     * (C) non-disabled textarea,
     * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
     * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
     * (F) audio elements
     * (G) video elements with controls attribute
     */ function isPolyfilledFocusEvent(e) {
        var el = e.target;
        var tag = el.tagName;
        return /^a$/i.test(tag) && el.href != null || // (A)
        /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
        /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
        !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
        /^audio$/i.test(tag) || // (F)
        /^video$/i.test(tag) && el.controls === true // (G)
        ;
    }
    function handler(e) {
        if (isPolyfilledFocusEvent(e)) {
            // start capturing possible out-of-order mouse events
            capturing = true;
            /*
         * enqueue the focus event _after_ the current batch of events, which
         * includes any blur events. The correct order of events is:
         *
         * [this element] MOUSEDOWN               <-- this event
         * [previously active element] BLUR
         * [previously active element] FOCUSOUT
         * [this element] FOCUS                   <-- forced event
         * [this element] FOCUSIN                 <-- forced event
         * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
         * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
         */ setTimeout(()=>{
                // stop capturing possible out-of-order mouse events
                capturing = false;
                // trigger focus event
                e.target.focus();
                // re-dispatch captured mouse events in order
                while(capturedEvents.length > 0){
                    var event = capturedEvents.pop();
                    event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
            }, 0);
        }
    }
    function ready() {
        if (typeof document !== 'undefined' && document.body.hasAttribute('data-wf-focus-within') && Webflow.env.safari) {
            document.addEventListener('mousedown', handler, true);
            document.addEventListener('mouseup', captureEvent, true);
            document.addEventListener('click', captureEvent, true);
        }
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9jdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgTW91c2VFdmVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IGZvY3VzXG4gKi9cblxudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG5cbi8qXG4gKiBTYWZhcmkgaGFzIGEgd2VpcmQgYnVnIHdoZXJlIGl0IGRvZXNuJ3Qgc3VwcG9ydCA6Zm9jdXMgZm9yIGxpbmtzIHdpdGggaHJlZnMsXG4gKiBidXR0b25zLCBhbmQgaW5wdXRbdHlwZT1idXR0b258c3VibWl0XSwgc28gd2UgbGlzdGVuIGZvciBtb3VzZWRvd24gZXZlbnRzXG4gKiBpbnN0ZWFkIGFuZCBmb3JjZSB0aGUgZWxlbWVudCB0byBlbWl0IGEgZm9jdXMgZXZlbnQgaW4gdGhvc2UgY2FzZXMuXG5cbiAqIFNlZSB0aGVzZSB3ZWJraXQgYnVncyBmb3IgcmVmZXJlbmNlOlxuICogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIyMjYxXG4gKiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjI5ODk1XG4gKi9cbldlYmZsb3cuZGVmaW5lKFxuICAnZm9jdXMnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhcHR1cmVkRXZlbnRzID0gW107XG4gICAgdmFyIGNhcHR1cmluZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICAgIGlmIChjYXB0dXJpbmcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYXB0dXJlZEV2ZW50cy51bnNoaWZ0KGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICogVGhlIG9ubHkgbW91c2Vkb3duIGV2ZW50cyB3ZSBjYXJlIGFib3V0IGhlcmUgYXJlIG9uZXMgZW1hbmF0aW5nIGZyb21cbiAgICAgKiAoQSkgYW5jaG9yIGxpbmtzIHdpdGggaHJlZiBhdHRyaWJ1dGUsXG4gICAgICogKEIpIG5vbi1kaXNhYmxlZCBidXR0b25zLFxuICAgICAqIChDKSBub24tZGlzYWJsZWQgdGV4dGFyZWEsXG4gICAgICogKEQpIG5vbi1kaXNhYmxlZCBpbnB1dHMgb2YgdHlwZSBcImJ1dHRvblwiLCBcInJlc2V0XCIsIFwiY2hlY2tib3hcIiwgXCJyYWRpb1wiLCBcInN1Ym1pdFwiXG4gICAgICogKEUpIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cyAoYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCkgdGhhdCBoYXZlIGEgdGFiaW5kZXggd2l0aCBhIG51bWVyaWMgdmFsdWVcbiAgICAgKiAoRikgYXVkaW8gZWxlbWVudHNcbiAgICAgKiAoRykgdmlkZW8gZWxlbWVudHMgd2l0aCBjb250cm9scyBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1BvbHlmaWxsZWRGb2N1c0V2ZW50KGUpIHtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIHRhZyA9IGVsLnRhZ05hbWU7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoL15hJC9pLnRlc3QodGFnKSAmJiBlbC5ocmVmICE9IG51bGwpIHx8IC8vIChBKVxuICAgICAgICAoL14oYnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KHRhZykgJiYgZWwuZGlzYWJsZWQgIT09IHRydWUpIHx8IC8vIChCKSAoQylcbiAgICAgICAgKC9eaW5wdXQkL2kudGVzdCh0YWcpICYmXG4gICAgICAgICAgL14oYnV0dG9ufHJlc2V0fHN1Ym1pdHxyYWRpb3xjaGVja2JveCkkL2kudGVzdChlbC50eXBlKSAmJlxuICAgICAgICAgICFlbC5kaXNhYmxlZCkgfHwgLy8gKEQpXG4gICAgICAgICghL14oYnV0dG9ufGlucHV0fHRleHRhcmVhfHNlbGVjdHxhKSQvaS50ZXN0KHRhZykgJiZcbiAgICAgICAgICAhTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUZsb2F0KGVsLnRhYkluZGV4KSkpIHx8IC8vIChFKVxuICAgICAgICAvXmF1ZGlvJC9pLnRlc3QodGFnKSB8fCAvLyAoRilcbiAgICAgICAgKC9edmlkZW8kL2kudGVzdCh0YWcpICYmIGVsLmNvbnRyb2xzID09PSB0cnVlKSAvLyAoRylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihlKSB7XG4gICAgICBpZiAoaXNQb2x5ZmlsbGVkRm9jdXNFdmVudChlKSkge1xuICAgICAgICAvLyBzdGFydCBjYXB0dXJpbmcgcG9zc2libGUgb3V0LW9mLW9yZGVyIG1vdXNlIGV2ZW50c1xuICAgICAgICBjYXB0dXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGVucXVldWUgdGhlIGZvY3VzIGV2ZW50IF9hZnRlcl8gdGhlIGN1cnJlbnQgYmF0Y2ggb2YgZXZlbnRzLCB3aGljaFxuICAgICAgICAgKiBpbmNsdWRlcyBhbnkgYmx1ciBldmVudHMuIFRoZSBjb3JyZWN0IG9yZGVyIG9mIGV2ZW50cyBpczpcbiAgICAgICAgICpcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gTU9VU0VET1dOICAgICAgICAgICAgICAgPC0tIHRoaXMgZXZlbnRcbiAgICAgICAgICogW3ByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnRdIEJMVVJcbiAgICAgICAgICogW3ByZXZpb3VzbHkgYWN0aXZlIGVsZW1lbnRdIEZPQ1VTT1VUXG4gICAgICAgICAqIFt0aGlzIGVsZW1lbnRdIEZPQ1VTICAgICAgICAgICAgICAgICAgIDwtLSBmb3JjZWQgZXZlbnRcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gRk9DVVNJTiAgICAgICAgICAgICAgICAgPC0tIGZvcmNlZCBldmVudFxuICAgICAgICAgKiBbdGhpcyBlbGVtZW50XSBNT1VTRVVQICAgICAgICAgICAgICAgICA8LS0gcG9zc2libHkgY2FwdHVyZWQgZXZlbnQgKGl0IG1heSBoYXZlIGZpcmVkIF9iZWZvcmVfIHRoZSBGT0NVUyBldmVudClcbiAgICAgICAgICogW3RoaXMgZWxlbWVudF0gQ0xJQ0sgICAgICAgICAgICAgICAgICAgPC0tIHBvc3NpYmx5IGNhcHR1cmVkIGV2ZW50IChpdCBtYXkgaGF2ZSBmaXJlZCBfYmVmb3JlXyB0aGUgRk9DVVMgZXZlbnQpXG4gICAgICAgICAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBzdG9wIGNhcHR1cmluZyBwb3NzaWJsZSBvdXQtb2Ytb3JkZXIgbW91c2UgZXZlbnRzXG4gICAgICAgICAgY2FwdHVyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyB0cmlnZ2VyIGZvY3VzIGV2ZW50XG4gICAgICAgICAgZS50YXJnZXQuZm9jdXMoKTtcblxuICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIGNhcHR1cmVkIG1vdXNlIGV2ZW50cyBpbiBvcmRlclxuICAgICAgICAgIHdoaWxlIChjYXB0dXJlZEV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBjYXB0dXJlZEV2ZW50cy5wb3AoKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIGV2ZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS13Zi1mb2N1cy13aXRoaW4nKSAmJlxuICAgICAgICBXZWJmbG93LmVudi5zYWZhcmlcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNhcHR1cmVFdmVudCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FwdHVyZUV2ZW50LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIHtyZWFkeX07XG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJyZXF1aXJlIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhcHR1cmVkRXZlbnRzIiwiY2FwdHVyaW5nIiwiY2FwdHVyZUV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwidW5zaGlmdCIsImlzUG9seWZpbGxlZEZvY3VzRXZlbnQiLCJlbCIsInRhcmdldCIsInRhZyIsInRhZ05hbWUiLCJ0ZXN0IiwiaHJlZiIsImRpc2FibGVkIiwidHlwZSIsIk51bWJlciIsImlzTmFOIiwicGFyc2VGbG9hdCIsInRhYkluZGV4IiwiY29udHJvbHMiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImZvY3VzIiwibGVuZ3RoIiwiZXZlbnQiLCJwb3AiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsInJlYWR5IiwiZG9jdW1lbnQiLCJib2R5IiwiaGFzQXR0cmlidXRlIiwiZW52Iiwic2FmYXJpIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDLEdBRWhDOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0Qjs7Ozs7Ozs7Q0FRQyxHQUNERCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCLElBQUlDLGlCQUFpQixFQUFFO0lBQ3ZCLElBQUlDLFlBQVk7SUFFaEIsU0FBU0MsYUFBYUMsQ0FBQztRQUNyQixJQUFJRixXQUFXO1lBQ2JFLEVBQUVDLGNBQWM7WUFDaEJELEVBQUVFLGVBQWU7WUFDakJGLEVBQUVHLHdCQUF3QjtZQUMxQk4sZUFBZU8sT0FBTyxDQUFDSjtRQUN6QjtJQUNGO0lBRUE7Ozs7Ozs7OztLQVNDLEdBQ0QsU0FBU0ssdUJBQXVCTCxDQUFDO1FBQy9CLElBQUlNLEtBQUtOLEVBQUVPLE1BQU07UUFDakIsSUFBSUMsTUFBTUYsR0FBR0csT0FBTztRQUNwQixPQUNFLEFBQUMsT0FBT0MsSUFBSSxDQUFDRixRQUFRRixHQUFHSyxJQUFJLElBQUksUUFBUyxNQUFNO1FBQzlDLHVCQUF1QkQsSUFBSSxDQUFDRixRQUFRRixHQUFHTSxRQUFRLEtBQUssUUFBUyxVQUFVO1FBQ3ZFLFdBQVdGLElBQUksQ0FBQ0YsUUFDZiwwQ0FBMENFLElBQUksQ0FBQ0osR0FBR08sSUFBSSxLQUN0RCxDQUFDUCxHQUFHTSxRQUFRLElBQUssTUFBTTtRQUN4QixDQUFDLHNDQUFzQ0YsSUFBSSxDQUFDRixRQUMzQyxDQUFDTSxPQUFPQyxLQUFLLENBQUNELE9BQU9FLFVBQVUsQ0FBQ1YsR0FBR1csUUFBUSxNQUFPLE1BQU07UUFDMUQsV0FBV1AsSUFBSSxDQUFDRixRQUFRLE1BQU07UUFDN0IsV0FBV0UsSUFBSSxDQUFDRixRQUFRRixHQUFHWSxRQUFRLEtBQUssS0FBTSxNQUFNOztJQUV6RDtJQUVBLFNBQVNDLFFBQVFuQixDQUFDO1FBQ2hCLElBQUlLLHVCQUF1QkwsSUFBSTtZQUM3QixxREFBcUQ7WUFDckRGLFlBQVk7WUFFWjs7Ozs7Ozs7Ozs7U0FXQyxHQUNEc0IsV0FBVztnQkFDVCxvREFBb0Q7Z0JBQ3BEdEIsWUFBWTtnQkFFWixzQkFBc0I7Z0JBQ3RCRSxFQUFFTyxNQUFNLENBQUNjLEtBQUs7Z0JBRWQsNkNBQTZDO2dCQUM3QyxNQUFPeEIsZUFBZXlCLE1BQU0sR0FBRyxFQUFHO29CQUNoQyxJQUFJQyxRQUFRMUIsZUFBZTJCLEdBQUc7b0JBQzlCRCxNQUFNaEIsTUFBTSxDQUFDa0IsYUFBYSxDQUFDLElBQUlDLFdBQVdILE1BQU1WLElBQUksRUFBRVU7Z0JBQ3hEO1lBQ0YsR0FBRztRQUNMO0lBQ0Y7SUFFQSxTQUFTSTtRQUNQLElBQ0UsT0FBT0MsYUFBYSxlQUNwQkEsU0FBU0MsSUFBSSxDQUFDQyxZQUFZLENBQUMsMkJBQzNCdEMsUUFBUXVDLEdBQUcsQ0FBQ0MsTUFBTSxFQUNsQjtZQUNBSixTQUFTSyxnQkFBZ0IsQ0FBQyxhQUFhZCxTQUFTO1lBQ2hEUyxTQUFTSyxnQkFBZ0IsQ0FBQyxXQUFXbEMsY0FBYztZQUNuRDZCLFNBQVNLLGdCQUFnQixDQUFDLFNBQVNsQyxjQUFjO1FBQ25EO0lBQ0Y7SUFFQSxnQkFBZ0I7SUFDaEIsT0FBTztRQUFDNEI7SUFBSztBQUNmIn0=

}),
199: (function (module) {
"use strict";
/* globals window */ /**
 * Webflow: IX Event triggers for other modules
 */ 
var $ = window.jQuery;
var api = {};
var eventQueue = [];
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        el.__wf_intro = null;
    },
    intro: function(i, el) {
        if (el.__wf_intro) {
            return;
        }
        el.__wf_intro = true;
        $(el).triggerHandler(api.types.INTRO);
    },
    outro: function(i, el) {
        if (!el.__wf_intro) {
            return;
        }
        el.__wf_intro = null;
        $(el).triggerHandler(api.types.OUTRO);
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
// Trigger any events in queue + restore trigger methods
api.init = function() {
    var count = eventQueue.length;
    for(var i = 0; i < count; i++){
        var memo = eventQueue[i];
        memo[0](0, memo[1]);
    }
    eventQueue = [];
    $.extend(api.triggers, eventTriggers);
};
// Replace all triggers with async wrapper to queue events until init
api.async = function() {
    for(var key in eventTriggers){
        var func = eventTriggers[key];
        if (!eventTriggers.hasOwnProperty(key)) {
            continue;
        }
        // Replace trigger method with async wrapper
        api.triggers[key] = function(i, el) {
            eventQueue.push([
                func,
                el
            ]);
        };
    }
};
// Default triggers to async queue
api.async();
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctaXgtZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93ICovXG5cbi8qKlxuICogV2ViZmxvdzogSVggRXZlbnQgdHJpZ2dlcnMgZm9yIG90aGVyIG1vZHVsZXNcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciAkID0gd2luZG93LmpRdWVyeTtcbnZhciBhcGkgPSB7fTtcbnZhciBldmVudFF1ZXVlID0gW107XG52YXIgbmFtZXNwYWNlID0gJy53LWl4JztcblxudmFyIGV2ZW50VHJpZ2dlcnMgPSB7XG4gIHJlc2V0OiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBlbC5fX3dmX2ludHJvID0gbnVsbDtcbiAgfSxcbiAgaW50cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIGlmIChlbC5fX3dmX2ludHJvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLl9fd2ZfaW50cm8gPSB0cnVlO1xuICAgICQoZWwpLnRyaWdnZXJIYW5kbGVyKGFwaS50eXBlcy5JTlRSTyk7XG4gIH0sXG4gIG91dHJvOiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBpZiAoIWVsLl9fd2ZfaW50cm8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuX193Zl9pbnRybyA9IG51bGw7XG4gICAgJChlbCkudHJpZ2dlckhhbmRsZXIoYXBpLnR5cGVzLk9VVFJPKTtcbiAgfSxcbn07XG5cbmFwaS50cmlnZ2VycyA9IHt9O1xuXG5hcGkudHlwZXMgPSB7XG4gIElOVFJPOiAndy1peC1pbnRybycgKyBuYW1lc3BhY2UsXG4gIE9VVFJPOiAndy1peC1vdXRybycgKyBuYW1lc3BhY2UsXG59O1xuXG4vLyBUcmlnZ2VyIGFueSBldmVudHMgaW4gcXVldWUgKyByZXN0b3JlIHRyaWdnZXIgbWV0aG9kc1xuYXBpLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb3VudCA9IGV2ZW50UXVldWUubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICB2YXIgbWVtbyA9IGV2ZW50UXVldWVbaV07XG4gICAgbWVtb1swXSgwLCBtZW1vWzFdKTtcbiAgfVxuICBldmVudFF1ZXVlID0gW107XG4gICQuZXh0ZW5kKGFwaS50cmlnZ2VycywgZXZlbnRUcmlnZ2Vycyk7XG59O1xuXG4vLyBSZXBsYWNlIGFsbCB0cmlnZ2VycyB3aXRoIGFzeW5jIHdyYXBwZXIgdG8gcXVldWUgZXZlbnRzIHVudGlsIGluaXRcbmFwaS5hc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIga2V5IGluIGV2ZW50VHJpZ2dlcnMpIHtcbiAgICB2YXIgZnVuYyA9IGV2ZW50VHJpZ2dlcnNba2V5XTtcbiAgICBpZiAoIWV2ZW50VHJpZ2dlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSB0cmlnZ2VyIG1ldGhvZCB3aXRoIGFzeW5jIHdyYXBwZXJcbiAgICBhcGkudHJpZ2dlcnNba2V5XSA9IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgICAgZXZlbnRRdWV1ZS5wdXNoKFtmdW5jLCBlbF0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8vIERlZmF1bHQgdHJpZ2dlcnMgdG8gYXN5bmMgcXVldWVcbmFwaS5hc3luYygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaTtcbiJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwialF1ZXJ5IiwiYXBpIiwiZXZlbnRRdWV1ZSIsIm5hbWVzcGFjZSIsImV2ZW50VHJpZ2dlcnMiLCJyZXNldCIsImkiLCJlbCIsIl9fd2ZfaW50cm8iLCJpbnRybyIsInRyaWdnZXJIYW5kbGVyIiwidHlwZXMiLCJJTlRSTyIsIm91dHJvIiwiT1VUUk8iLCJ0cmlnZ2VycyIsImluaXQiLCJjb3VudCIsImxlbmd0aCIsIm1lbW8iLCJleHRlbmQiLCJhc3luYyIsImtleSIsImZ1bmMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsR0FFbEI7O0NBRUMsR0FFRDtBQUVBLElBQUlBLElBQUlDLE9BQU9DLE1BQU07QUFDckIsSUFBSUMsTUFBTSxDQUFDO0FBQ1gsSUFBSUMsYUFBYSxFQUFFO0FBQ25CLElBQUlDLFlBQVk7QUFFaEIsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxPQUFPLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtRQUNwQkEsR0FBR0MsVUFBVSxHQUFHO0lBQ2xCO0lBQ0FDLE9BQU8sU0FBVUgsQ0FBQyxFQUFFQyxFQUFFO1FBQ3BCLElBQUlBLEdBQUdDLFVBQVUsRUFBRTtZQUNqQjtRQUNGO1FBQ0FELEdBQUdDLFVBQVUsR0FBRztRQUNoQlYsRUFBRVMsSUFBSUcsY0FBYyxDQUFDVCxJQUFJVSxLQUFLLENBQUNDLEtBQUs7SUFDdEM7SUFDQUMsT0FBTyxTQUFVUCxDQUFDLEVBQUVDLEVBQUU7UUFDcEIsSUFBSSxDQUFDQSxHQUFHQyxVQUFVLEVBQUU7WUFDbEI7UUFDRjtRQUNBRCxHQUFHQyxVQUFVLEdBQUc7UUFDaEJWLEVBQUVTLElBQUlHLGNBQWMsQ0FBQ1QsSUFBSVUsS0FBSyxDQUFDRyxLQUFLO0lBQ3RDO0FBQ0Y7QUFFQWIsSUFBSWMsUUFBUSxHQUFHLENBQUM7QUFFaEJkLElBQUlVLEtBQUssR0FBRztJQUNWQyxPQUFPLGVBQWVUO0lBQ3RCVyxPQUFPLGVBQWVYO0FBQ3hCO0FBRUEsd0RBQXdEO0FBQ3hERixJQUFJZSxJQUFJLEdBQUc7SUFDVCxJQUFJQyxRQUFRZixXQUFXZ0IsTUFBTTtJQUM3QixJQUFLLElBQUlaLElBQUksR0FBR0EsSUFBSVcsT0FBT1gsSUFBSztRQUM5QixJQUFJYSxPQUFPakIsVUFBVSxDQUFDSSxFQUFFO1FBQ3hCYSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUdBLElBQUksQ0FBQyxFQUFFO0lBQ3BCO0lBQ0FqQixhQUFhLEVBQUU7SUFDZkosRUFBRXNCLE1BQU0sQ0FBQ25CLElBQUljLFFBQVEsRUFBRVg7QUFDekI7QUFFQSxxRUFBcUU7QUFDckVILElBQUlvQixLQUFLLEdBQUc7SUFDVixJQUFLLElBQUlDLE9BQU9sQixjQUFlO1FBQzdCLElBQUltQixPQUFPbkIsYUFBYSxDQUFDa0IsSUFBSTtRQUM3QixJQUFJLENBQUNsQixjQUFjb0IsY0FBYyxDQUFDRixNQUFNO1lBQ3RDO1FBQ0Y7UUFFQSw0Q0FBNEM7UUFDNUNyQixJQUFJYyxRQUFRLENBQUNPLElBQUksR0FBRyxTQUFVaEIsQ0FBQyxFQUFFQyxFQUFFO1lBQ2pDTCxXQUFXdUIsSUFBSSxDQUFDO2dCQUFDRjtnQkFBTWhCO2FBQUc7UUFDNUI7SUFDRjtBQUNGO0FBRUEsa0NBQWtDO0FBQ2xDTixJQUFJb0IsS0FBSztBQUVUSyxPQUFPQyxPQUFPLEdBQUcxQiJ9

}),
134: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ 
var IXEvents = __webpack_require__(199);
function dispatchCustomEvent(element, eventName) {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, null);
    element.dispatchEvent(event);
}
/**
 * Webflow: IX Event triggers for other modules
 */ var $ = window.jQuery;
var api = {};
var namespace = '.w-ix';
var eventTriggers = {
    reset: function(i, el) {
        IXEvents.triggers.reset(i, el);
    },
    intro: function(i, el) {
        IXEvents.triggers.intro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_ACTIVE');
    },
    outro: function(i, el) {
        IXEvents.triggers.outro(i, el);
        dispatchCustomEvent(el, 'COMPONENT_INACTIVE');
    }
};
api.triggers = {};
api.types = {
    INTRO: 'w-ix-intro' + namespace,
    OUTRO: 'w-ix-outro' + namespace
};
$.extend(api.triggers, eventTriggers);
module.exports = api;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctaXgyLWV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdywgZG9jdW1lbnQgKi9cblxuJ3VzZSBzdHJpY3QnO1xudmFyIElYRXZlbnRzID0gcmVxdWlyZSgnLi93ZWJmbG93LWl4LWV2ZW50cycpO1xuXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSkge1xuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgbnVsbCk7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbi8qKlxuICogV2ViZmxvdzogSVggRXZlbnQgdHJpZ2dlcnMgZm9yIG90aGVyIG1vZHVsZXNcbiAqL1xuXG52YXIgJCA9IHdpbmRvdy5qUXVlcnk7XG52YXIgYXBpID0ge307XG52YXIgbmFtZXNwYWNlID0gJy53LWl4JztcblxudmFyIGV2ZW50VHJpZ2dlcnMgPSB7XG4gIHJlc2V0OiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBJWEV2ZW50cy50cmlnZ2Vycy5yZXNldChpLCBlbCk7XG4gIH0sXG4gIGludHJvOiBmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICBJWEV2ZW50cy50cmlnZ2Vycy5pbnRybyhpLCBlbCk7XG4gICAgZGlzcGF0Y2hDdXN0b21FdmVudChlbCwgJ0NPTVBPTkVOVF9BQ1RJVkUnKTtcbiAgfSxcbiAgb3V0cm86IGZ1bmN0aW9uIChpLCBlbCkge1xuICAgIElYRXZlbnRzLnRyaWdnZXJzLm91dHJvKGksIGVsKTtcbiAgICBkaXNwYXRjaEN1c3RvbUV2ZW50KGVsLCAnQ09NUE9ORU5UX0lOQUNUSVZFJyk7XG4gIH0sXG59O1xuXG5hcGkudHJpZ2dlcnMgPSB7fTtcblxuYXBpLnR5cGVzID0ge1xuICBJTlRSTzogJ3ctaXgtaW50cm8nICsgbmFtZXNwYWNlLFxuICBPVVRSTzogJ3ctaXgtb3V0cm8nICsgbmFtZXNwYWNlLFxufTtcblxuJC5leHRlbmQoYXBpLnRyaWdnZXJzLCBldmVudFRyaWdnZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcGk7XG4iXSwibmFtZXMiOlsiSVhFdmVudHMiLCJyZXF1aXJlIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsImVsZW1lbnQiLCJldmVudE5hbWUiLCJldmVudCIsImRvY3VtZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiJCIsIndpbmRvdyIsImpRdWVyeSIsImFwaSIsIm5hbWVzcGFjZSIsImV2ZW50VHJpZ2dlcnMiLCJyZXNldCIsImkiLCJlbCIsInRyaWdnZXJzIiwiaW50cm8iLCJvdXRybyIsInR5cGVzIiwiSU5UUk8iLCJPVVRSTyIsImV4dGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QixHQUU1QjtBQUNBLElBQUlBLFdBQVdDLFFBQVE7QUFFdkIsU0FBU0Msb0JBQW9CQyxPQUFPLEVBQUVDLFNBQVM7SUFDN0MsSUFBSUMsUUFBUUMsU0FBU0MsV0FBVyxDQUFDO0lBQ2pDRixNQUFNRyxlQUFlLENBQUNKLFdBQVcsTUFBTSxNQUFNO0lBQzdDRCxRQUFRTSxhQUFhLENBQUNKO0FBQ3hCO0FBRUE7O0NBRUMsR0FFRCxJQUFJSyxJQUFJQyxPQUFPQyxNQUFNO0FBQ3JCLElBQUlDLE1BQU0sQ0FBQztBQUNYLElBQUlDLFlBQVk7QUFFaEIsSUFBSUMsZ0JBQWdCO0lBQ2xCQyxPQUFPLFNBQVVDLENBQUMsRUFBRUMsRUFBRTtRQUNwQmxCLFNBQVNtQixRQUFRLENBQUNILEtBQUssQ0FBQ0MsR0FBR0M7SUFDN0I7SUFDQUUsT0FBTyxTQUFVSCxDQUFDLEVBQUVDLEVBQUU7UUFDcEJsQixTQUFTbUIsUUFBUSxDQUFDQyxLQUFLLENBQUNILEdBQUdDO1FBQzNCaEIsb0JBQW9CZ0IsSUFBSTtJQUMxQjtJQUNBRyxPQUFPLFNBQVVKLENBQUMsRUFBRUMsRUFBRTtRQUNwQmxCLFNBQVNtQixRQUFRLENBQUNFLEtBQUssQ0FBQ0osR0FBR0M7UUFDM0JoQixvQkFBb0JnQixJQUFJO0lBQzFCO0FBQ0Y7QUFFQUwsSUFBSU0sUUFBUSxHQUFHLENBQUM7QUFFaEJOLElBQUlTLEtBQUssR0FBRztJQUNWQyxPQUFPLGVBQWVUO0lBQ3RCVSxPQUFPLGVBQWVWO0FBQ3hCO0FBRUFKLEVBQUVlLE1BQU0sQ0FBQ1osSUFBSU0sUUFBUSxFQUFFSjtBQUV2QlcsT0FBT0MsT0FBTyxHQUFHZCJ9

}),
949: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document, navigator, WEBFLOW_ENV_TEST */ /**
 * Webflow: Core site library
 */ 
var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = Webflow._ = __webpack_require__(756);
var tram = Webflow.tram = __webpack_require__(487) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;
/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} [options]
 * @return {object}
 */ Webflow.define = function(name, factory, options) {
    if (modules[name]) {
        unbindModule(modules[name]);
    }
    var instance = modules[name] = factory($, _, options) || {};
    bindModule(instance);
    return instance;
};
/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */ Webflow.require = function(name) {
    return modules[name];
};
function bindModule(module1) {
    // If running in Webflow app, subscribe to design/preview events
    if (Webflow.env()) {
        isFunction(module1.design) && $win.on('__wf_design', module1.design);
        isFunction(module1.preview) && $win.on('__wf_preview', module1.preview);
    }
    // Subscribe to front-end destroy event
    isFunction(module1.destroy) && $win.on('__wf_destroy', module1.destroy);
    // Look for ready method on module
    if (module1.ready && isFunction(module1.ready)) {
        addReady(module1);
    }
}
function addReady(module1) {
    // If domready has already happened, run ready method
    if (domready) {
        module1.ready();
        return;
    }
    // Otherwise add ready method to the primary queue (only once)
    if (_.contains(primary, module1.ready)) {
        return;
    }
    primary.push(module1.ready);
}
function unbindModule(module1) {
    // Unsubscribe module from window events
    isFunction(module1.design) && $win.off('__wf_design', module1.design);
    isFunction(module1.preview) && $win.off('__wf_preview', module1.preview);
    isFunction(module1.destroy) && $win.off('__wf_destroy', module1.destroy);
    // Remove ready method from primary queue
    if (module1.ready && isFunction(module1.ready)) {
        removeReady(module1);
    }
}
function removeReady(module1) {
    primary = _.filter(primary, function(readyFn) {
        return readyFn !== module1.ready;
    });
}
/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */ Webflow.push = function(ready) {
    // If domready has already happened, invoke handler
    if (domready) {
        isFunction(ready) && ready();
        return;
    }
    // Otherwise push into secondary queue
    secondary.push(ready);
};
/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */ Webflow.env = function(mode) {
    var designFlag = window.__wf_design;
    var inApp = typeof designFlag !== 'undefined';
    if (!mode) {
        return inApp;
    }
    if (mode === 'design') {
        return inApp && designFlag;
    }
    if (mode === 'preview') {
        return inApp && !designFlag;
    }
    if (mode === 'slug') {
        return inApp && window.__wf_slug;
    }
    if (mode === 'editor') {
        return window.WebflowEditor;
    }
    if (mode === 'test') {
        return  false || window.__wf_test;
    }
    if (mode === 'frame') {
        return window !== window.top;
    }
};
// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function(evt) {
    touchTarget = evt.target;
});
/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */ Webflow.validClick = touch ? function(clickTarget) {
    return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function() {
    return true;
};
/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */ var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy();
// Create a proxy instance for throttled events
function eventProxy(target, types) {
    // Set up throttled method (using custom frame-based _.throttle)
    var handlers = [];
    var proxy = {};
    proxy.up = _.throttle(function(evt) {
        _.each(handlers, function(h) {
            h(evt);
        });
    });
    // Bind events to target
    if (target && types) {
        target.on(types, proxy.up);
    }
    /**
   * Add an event handler
   * @param  {function} handler
   */ proxy.on = function(handler) {
        if (typeof handler !== 'function') {
            return;
        }
        if (_.contains(handlers, handler)) {
            return;
        }
        handlers.push(handler);
    };
    /**
   * Remove an event handler
   * @param  {function} handler
   */ proxy.off = function(handler) {
        // If no arguments supplied, clear all handlers
        if (!arguments.length) {
            handlers = [];
            return;
        }
        // Otherwise, remove handler from the list
        handlers = _.filter(handlers, function(h) {
            return h !== handler;
        });
    };
    return proxy;
}
// Webflow.location - Wrap window.location in api
Webflow.location = function(url) {
    window.location = url;
};
if (Webflow.env()) {
    // Ignore redirects inside a Webflow design/edit environment
    Webflow.location = function() {};
}
// Webflow.ready - Call primary and secondary handlers
Webflow.ready = function() {
    domready = true;
    // Restore modules after destroy
    if (destroyed) {
        restoreModules();
    // Otherwise run primary ready methods
    } else {
        _.each(primary, callReady);
    }
    // Run secondary ready methods
    _.each(secondary, callReady);
    // Trigger resize
    Webflow.resize.up();
};
function callReady(readyFn) {
    isFunction(readyFn) && readyFn();
}
function restoreModules() {
    destroyed = false;
    _.each(modules, bindModule);
}
/**
 * Webflow.load - Add a window load handler that will run even if load event has already happened
 * @param  {function} handler
 */ var deferLoad;
Webflow.load = function(handler) {
    deferLoad.then(handler);
};
function bindLoad() {
    // Reject any previous deferred (to support destroy)
    if (deferLoad) {
        deferLoad.reject();
        $win.off('load', deferLoad.resolve);
    }
    // Create deferred and bind window load event
    deferLoad = new $.Deferred();
    $win.on('load', deferLoad.resolve);
}
// Webflow.destroy - Trigger a destroy event for all modules
Webflow.destroy = function(options) {
    options = options || {};
    destroyed = true;
    $win.triggerHandler('__wf_destroy');
    // Allow domready reset for tests
    if (options.domready != null) {
        domready = options.domready;
    }
    // Unbind modules
    _.each(modules, unbindModule);
    // Clear any proxy event handlers
    Webflow.resize.off();
    Webflow.scroll.off();
    Webflow.redraw.off();
    // Clear any queued ready methods
    primary = [];
    secondary = [];
    // If load event has not yet fired, replace the deferred
    if (deferLoad.state() === 'pending') {
        bindLoad();
    }
};
// Listen for domready
$(Webflow.ready);
// Listen for window.onload and resolve deferred
bindLoad();
// Export commonjs module
module.exports = window.Webflow = Webflow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbGliLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCwgbmF2aWdhdG9yLCBXRUJGTE9XX0VOVl9URVNUICovXG5cbi8qKlxuICogV2ViZmxvdzogQ29yZSBzaXRlIGxpYnJhcnlcbiAqL1xudmFyIFdlYmZsb3cgPSB7fTtcbnZhciBtb2R1bGVzID0ge307XG52YXIgcHJpbWFyeSA9IFtdO1xudmFyIHNlY29uZGFyeSA9IHdpbmRvdy5XZWJmbG93IHx8IFtdO1xudmFyICQgPSB3aW5kb3cualF1ZXJ5O1xudmFyICR3aW4gPSAkKHdpbmRvdyk7XG52YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xudmFyIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG52YXIgXyA9IChXZWJmbG93Ll8gPSByZXF1aXJlKCcuL3VuZGVyc2NvcmUtY3VzdG9tJykpO1xudmFyIHRyYW0gPSAoV2ViZmxvdy50cmFtID0gcmVxdWlyZSgnLi90cmFtLW1pbicpICYmICQudHJhbSk7XG52YXIgZG9tcmVhZHkgPSBmYWxzZTtcbnZhciBkZXN0cm95ZWQgPSBmYWxzZTtcblxudHJhbS5jb25maWcuaGlkZUJhY2tmYWNlID0gZmFsc2U7XG50cmFtLmNvbmZpZy5rZWVwSW5oZXJpdGVkID0gdHJ1ZTtcblxuLyoqXG4gKiBXZWJmbG93LmRlZmluZSAtIERlZmluZSBhIG5hbWVkIG1vZHVsZVxuICogQHBhcmFtICB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gZmFjdG9yeVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuV2ViZmxvdy5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZmFjdG9yeSwgb3B0aW9ucykge1xuICBpZiAobW9kdWxlc1tuYW1lXSkge1xuICAgIHVuYmluZE1vZHVsZShtb2R1bGVzW25hbWVdKTtcbiAgfVxuICB2YXIgaW5zdGFuY2UgPSAobW9kdWxlc1tuYW1lXSA9IGZhY3RvcnkoJCwgXywgb3B0aW9ucykgfHwge30pO1xuICBiaW5kTW9kdWxlKGluc3RhbmNlKTtcbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBXZWJmbG93LnJlcXVpcmUgLSBSZXF1aXJlIGEgbmFtZWQgbW9kdWxlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuV2ViZmxvdy5yZXF1aXJlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG1vZHVsZXNbbmFtZV07XG59O1xuXG5mdW5jdGlvbiBiaW5kTW9kdWxlKG1vZHVsZSkge1xuICAvLyBJZiBydW5uaW5nIGluIFdlYmZsb3cgYXBwLCBzdWJzY3JpYmUgdG8gZGVzaWduL3ByZXZpZXcgZXZlbnRzXG4gIGlmIChXZWJmbG93LmVudigpKSB7XG4gICAgaXNGdW5jdGlvbihtb2R1bGUuZGVzaWduKSAmJiAkd2luLm9uKCdfX3dmX2Rlc2lnbicsIG1vZHVsZS5kZXNpZ24pO1xuICAgIGlzRnVuY3Rpb24obW9kdWxlLnByZXZpZXcpICYmICR3aW4ub24oJ19fd2ZfcHJldmlldycsIG1vZHVsZS5wcmV2aWV3KTtcbiAgfVxuICAvLyBTdWJzY3JpYmUgdG8gZnJvbnQtZW5kIGRlc3Ryb3kgZXZlbnRcbiAgaXNGdW5jdGlvbihtb2R1bGUuZGVzdHJveSkgJiYgJHdpbi5vbignX193Zl9kZXN0cm95JywgbW9kdWxlLmRlc3Ryb3kpO1xuICAvLyBMb29rIGZvciByZWFkeSBtZXRob2Qgb24gbW9kdWxlXG4gIGlmIChtb2R1bGUucmVhZHkgJiYgaXNGdW5jdGlvbihtb2R1bGUucmVhZHkpKSB7XG4gICAgYWRkUmVhZHkobW9kdWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSZWFkeShtb2R1bGUpIHtcbiAgLy8gSWYgZG9tcmVhZHkgaGFzIGFscmVhZHkgaGFwcGVuZWQsIHJ1biByZWFkeSBtZXRob2RcbiAgaWYgKGRvbXJlYWR5KSB7XG4gICAgbW9kdWxlLnJlYWR5KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIE90aGVyd2lzZSBhZGQgcmVhZHkgbWV0aG9kIHRvIHRoZSBwcmltYXJ5IHF1ZXVlIChvbmx5IG9uY2UpXG4gIGlmIChfLmNvbnRhaW5zKHByaW1hcnksIG1vZHVsZS5yZWFkeSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJpbWFyeS5wdXNoKG1vZHVsZS5yZWFkeSk7XG59XG5cbmZ1bmN0aW9uIHVuYmluZE1vZHVsZShtb2R1bGUpIHtcbiAgLy8gVW5zdWJzY3JpYmUgbW9kdWxlIGZyb20gd2luZG93IGV2ZW50c1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXNpZ24pICYmICR3aW4ub2ZmKCdfX3dmX2Rlc2lnbicsIG1vZHVsZS5kZXNpZ24pO1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5wcmV2aWV3KSAmJiAkd2luLm9mZignX193Zl9wcmV2aWV3JywgbW9kdWxlLnByZXZpZXcpO1xuICBpc0Z1bmN0aW9uKG1vZHVsZS5kZXN0cm95KSAmJiAkd2luLm9mZignX193Zl9kZXN0cm95JywgbW9kdWxlLmRlc3Ryb3kpO1xuICAvLyBSZW1vdmUgcmVhZHkgbWV0aG9kIGZyb20gcHJpbWFyeSBxdWV1ZVxuICBpZiAobW9kdWxlLnJlYWR5ICYmIGlzRnVuY3Rpb24obW9kdWxlLnJlYWR5KSkge1xuICAgIHJlbW92ZVJlYWR5KG1vZHVsZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVhZHkobW9kdWxlKSB7XG4gIHByaW1hcnkgPSBfLmZpbHRlcihwcmltYXJ5LCBmdW5jdGlvbiAocmVhZHlGbikge1xuICAgIHJldHVybiByZWFkeUZuICE9PSBtb2R1bGUucmVhZHk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdlYmZsb3cucHVzaCAtIEFkZCBhIHJlYWR5IGhhbmRsZXIgaW50byBzZWNvbmRhcnkgcXVldWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlYWR5ICBDYWxsYmFjayB0byBpbnZva2Ugb24gZG9tcmVhZHlcbiAqL1xuV2ViZmxvdy5wdXNoID0gZnVuY3Rpb24gKHJlYWR5KSB7XG4gIC8vIElmIGRvbXJlYWR5IGhhcyBhbHJlYWR5IGhhcHBlbmVkLCBpbnZva2UgaGFuZGxlclxuICBpZiAoZG9tcmVhZHkpIHtcbiAgICBpc0Z1bmN0aW9uKHJlYWR5KSAmJiByZWFkeSgpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBPdGhlcndpc2UgcHVzaCBpbnRvIHNlY29uZGFyeSBxdWV1ZVxuICBzZWNvbmRhcnkucHVzaChyZWFkeSk7XG59O1xuXG4vKipcbiAqIFdlYmZsb3cuZW52IC0gR2V0IHRoZSBzdGF0ZSBvZiB0aGUgV2ViZmxvdyBhcHBcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIFtvcHRpb25hbF1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbldlYmZsb3cuZW52ID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgdmFyIGRlc2lnbkZsYWcgPSB3aW5kb3cuX193Zl9kZXNpZ247XG4gIHZhciBpbkFwcCA9IHR5cGVvZiBkZXNpZ25GbGFnICE9PSAndW5kZWZpbmVkJztcbiAgaWYgKCFtb2RlKSB7XG4gICAgcmV0dXJuIGluQXBwO1xuICB9XG4gIGlmIChtb2RlID09PSAnZGVzaWduJykge1xuICAgIHJldHVybiBpbkFwcCAmJiBkZXNpZ25GbGFnO1xuICB9XG4gIGlmIChtb2RlID09PSAncHJldmlldycpIHtcbiAgICByZXR1cm4gaW5BcHAgJiYgIWRlc2lnbkZsYWc7XG4gIH1cbiAgaWYgKG1vZGUgPT09ICdzbHVnJykge1xuICAgIHJldHVybiBpbkFwcCAmJiB3aW5kb3cuX193Zl9zbHVnO1xuICB9XG4gIGlmIChtb2RlID09PSAnZWRpdG9yJykge1xuICAgIHJldHVybiB3aW5kb3cuV2ViZmxvd0VkaXRvcjtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIFdFQkZMT1dfRU5WX1RFU1QgfHwgd2luZG93Ll9fd2ZfdGVzdDtcbiAgfVxuICBpZiAobW9kZSA9PT0gJ2ZyYW1lJykge1xuICAgIHJldHVybiB3aW5kb3cgIT09IHdpbmRvdy50b3A7XG4gIH1cbn07XG5cbi8vIEZlYXR1cmUgZGV0ZWN0cyArIGJyb3dzZXIgc25pZmZzICDgsqBf4LKgXG5cbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgdG91Y2ggPSAoV2ViZmxvdy5lbnYudG91Y2ggPVxuICAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKTtcbnZhciBjaHJvbWUgPSAoV2ViZmxvdy5lbnYuY2hyb21lID1cbiAgL2Nocm9tZS8udGVzdCh1c2VyQWdlbnQpICYmXG4gIC9Hb29nbGUvLnRlc3QobmF2aWdhdG9yLnZlbmRvcikgJiZcbiAgcGFyc2VJbnQodXNlckFnZW50Lm1hdGNoKC9jaHJvbWVcXC8oXFxkKylcXC4vKVsxXSwgMTApKTtcbnZhciBpb3MgPSAoV2ViZmxvdy5lbnYuaW9zID0gLyhpcG9kfGlwaG9uZXxpcGFkKS8udGVzdCh1c2VyQWdlbnQpKTtcbldlYmZsb3cuZW52LnNhZmFyaSA9IC9zYWZhcmkvLnRlc3QodXNlckFnZW50KSAmJiAhY2hyb21lICYmICFpb3M7XG5cbi8vIE1haW50YWluIGN1cnJlbnQgdG91Y2ggdGFyZ2V0IHRvIHByZXZlbnQgbGF0ZSBjbGlja3Mgb24gdG91Y2ggZGV2aWNlc1xudmFyIHRvdWNoVGFyZ2V0O1xuLy8gTGlzdGVuIGZvciBib3RoIGV2ZW50cyB0byBzdXBwb3J0IHRvdWNoL21vdXNlIGh5YnJpZCBkZXZpY2VzXG50b3VjaCAmJlxuICAkZG9jLm9uKCd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB0b3VjaFRhcmdldCA9IGV2dC50YXJnZXQ7XG4gIH0pO1xuXG4vKipcbiAqIFdlYmZsb3cudmFsaWRDbGljayAtIHZhbGlkYXRlIGNsaWNrIHRhcmdldCBhZ2FpbnN0IGN1cnJlbnQgdG91Y2ggdGFyZ2V0XG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gY2xpY2tUYXJnZXQgIEVsZW1lbnQgYmVpbmcgY2xpY2tlZFxuICogQHJldHVybiB7Qm9vbGVhbn0gIFRydWUgaWYgY2xpY2sgdGFyZ2V0IGlzIHZhbGlkIChhbHdheXMgdHJ1ZSBvbiBub24tdG91Y2gpXG4gKi9cbldlYmZsb3cudmFsaWRDbGljayA9IHRvdWNoXG4gID8gZnVuY3Rpb24gKGNsaWNrVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBjbGlja1RhcmdldCA9PT0gdG91Y2hUYXJnZXQgfHwgJC5jb250YWlucyhjbGlja1RhcmdldCwgdG91Y2hUYXJnZXQpXG4gICAgICApO1xuICAgIH1cbiAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4vKipcbiAqIFdlYmZsb3cucmVzaXplLCBXZWJmbG93LnNjcm9sbCAtIHRocm90dGxlZCBldmVudCBwcm94aWVzXG4gKi9cblxudmFyIHJlc2l6ZUV2ZW50cyA9ICdyZXNpemUud2ViZmxvdyBvcmllbnRhdGlvbmNoYW5nZS53ZWJmbG93IGxvYWQud2ViZmxvdyc7XG52YXIgc2Nyb2xsRXZlbnRzID0gJ3Njcm9sbC53ZWJmbG93ICcgKyByZXNpemVFdmVudHM7XG5XZWJmbG93LnJlc2l6ZSA9IGV2ZW50UHJveHkoJHdpbiwgcmVzaXplRXZlbnRzKTtcbldlYmZsb3cuc2Nyb2xsID0gZXZlbnRQcm94eSgkd2luLCBzY3JvbGxFdmVudHMpO1xuV2ViZmxvdy5yZWRyYXcgPSBldmVudFByb3h5KCk7XG5cbi8vIENyZWF0ZSBhIHByb3h5IGluc3RhbmNlIGZvciB0aHJvdHRsZWQgZXZlbnRzXG5mdW5jdGlvbiBldmVudFByb3h5KHRhcmdldCwgdHlwZXMpIHtcbiAgLy8gU2V0IHVwIHRocm90dGxlZCBtZXRob2QgKHVzaW5nIGN1c3RvbSBmcmFtZS1iYXNlZCBfLnRocm90dGxlKVxuXG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICB2YXIgcHJveHkgPSB7fTtcbiAgcHJveHkudXAgPSBfLnRocm90dGxlKGZ1bmN0aW9uIChldnQpIHtcbiAgICBfLmVhY2goaGFuZGxlcnMsIGZ1bmN0aW9uIChoKSB7XG4gICAgICBoKGV2dCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEJpbmQgZXZlbnRzIHRvIHRhcmdldFxuICBpZiAodGFyZ2V0ICYmIHR5cGVzKSB7XG4gICAgdGFyZ2V0Lm9uKHR5cGVzLCBwcm94eS51cCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHByb3h5Lm9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKF8uY29udGFpbnMoaGFuZGxlcnMsIGhhbmRsZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyXG4gICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBwcm94eS5vZmYgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIC8vIElmIG5vIGFyZ3VtZW50cyBzdXBwbGllZCwgY2xlYXIgYWxsIGhhbmRsZXJzXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBoYW5kbGVycyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBoYW5kbGVyIGZyb20gdGhlIGxpc3RcbiAgICBoYW5kbGVycyA9IF8uZmlsdGVyKGhhbmRsZXJzLCBmdW5jdGlvbiAoaCkge1xuICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufVxuXG4vLyBXZWJmbG93LmxvY2F0aW9uIC0gV3JhcCB3aW5kb3cubG9jYXRpb24gaW4gYXBpXG5XZWJmbG93LmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG59O1xuXG5pZiAoV2ViZmxvdy5lbnYoKSkge1xuICAvLyBJZ25vcmUgcmVkaXJlY3RzIGluc2lkZSBhIFdlYmZsb3cgZGVzaWduL2VkaXQgZW52aXJvbm1lbnRcbiAgV2ViZmxvdy5sb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xufVxuXG4vLyBXZWJmbG93LnJlYWR5IC0gQ2FsbCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgaGFuZGxlcnNcbldlYmZsb3cucmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gIGRvbXJlYWR5ID0gdHJ1ZTtcblxuICAvLyBSZXN0b3JlIG1vZHVsZXMgYWZ0ZXIgZGVzdHJveVxuICBpZiAoZGVzdHJveWVkKSB7XG4gICAgcmVzdG9yZU1vZHVsZXMoKTtcblxuICAgIC8vIE90aGVyd2lzZSBydW4gcHJpbWFyeSByZWFkeSBtZXRob2RzXG4gIH0gZWxzZSB7XG4gICAgXy5lYWNoKHByaW1hcnksIGNhbGxSZWFkeSk7XG4gIH1cblxuICAvLyBSdW4gc2Vjb25kYXJ5IHJlYWR5IG1ldGhvZHNcbiAgXy5lYWNoKHNlY29uZGFyeSwgY2FsbFJlYWR5KTtcblxuICAvLyBUcmlnZ2VyIHJlc2l6ZVxuICBXZWJmbG93LnJlc2l6ZS51cCgpO1xufTtcblxuZnVuY3Rpb24gY2FsbFJlYWR5KHJlYWR5Rm4pIHtcbiAgaXNGdW5jdGlvbihyZWFkeUZuKSAmJiByZWFkeUZuKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVNb2R1bGVzKCkge1xuICBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgXy5lYWNoKG1vZHVsZXMsIGJpbmRNb2R1bGUpO1xufVxuXG4vKipcbiAqIFdlYmZsb3cubG9hZCAtIEFkZCBhIHdpbmRvdyBsb2FkIGhhbmRsZXIgdGhhdCB3aWxsIHJ1biBldmVuIGlmIGxvYWQgZXZlbnQgaGFzIGFscmVhZHkgaGFwcGVuZWRcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbnZhciBkZWZlckxvYWQ7XG5XZWJmbG93LmxvYWQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICBkZWZlckxvYWQudGhlbihoYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRMb2FkKCkge1xuICAvLyBSZWplY3QgYW55IHByZXZpb3VzIGRlZmVycmVkICh0byBzdXBwb3J0IGRlc3Ryb3kpXG4gIGlmIChkZWZlckxvYWQpIHtcbiAgICBkZWZlckxvYWQucmVqZWN0KCk7XG4gICAgJHdpbi5vZmYoJ2xvYWQnLCBkZWZlckxvYWQucmVzb2x2ZSk7XG4gIH1cbiAgLy8gQ3JlYXRlIGRlZmVycmVkIGFuZCBiaW5kIHdpbmRvdyBsb2FkIGV2ZW50XG4gIGRlZmVyTG9hZCA9IG5ldyAkLkRlZmVycmVkKCk7XG4gICR3aW4ub24oJ2xvYWQnLCBkZWZlckxvYWQucmVzb2x2ZSk7XG59XG5cbi8vIFdlYmZsb3cuZGVzdHJveSAtIFRyaWdnZXIgYSBkZXN0cm95IGV2ZW50IGZvciBhbGwgbW9kdWxlc1xuV2ViZmxvdy5kZXN0cm95ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGRlc3Ryb3llZCA9IHRydWU7XG4gICR3aW4udHJpZ2dlckhhbmRsZXIoJ19fd2ZfZGVzdHJveScpO1xuXG4gIC8vIEFsbG93IGRvbXJlYWR5IHJlc2V0IGZvciB0ZXN0c1xuICBpZiAob3B0aW9ucy5kb21yZWFkeSAhPSBudWxsKSB7XG4gICAgZG9tcmVhZHkgPSBvcHRpb25zLmRvbXJlYWR5O1xuICB9XG5cbiAgLy8gVW5iaW5kIG1vZHVsZXNcbiAgXy5lYWNoKG1vZHVsZXMsIHVuYmluZE1vZHVsZSk7XG5cbiAgLy8gQ2xlYXIgYW55IHByb3h5IGV2ZW50IGhhbmRsZXJzXG4gIFdlYmZsb3cucmVzaXplLm9mZigpO1xuICBXZWJmbG93LnNjcm9sbC5vZmYoKTtcbiAgV2ViZmxvdy5yZWRyYXcub2ZmKCk7XG5cbiAgLy8gQ2xlYXIgYW55IHF1ZXVlZCByZWFkeSBtZXRob2RzXG4gIHByaW1hcnkgPSBbXTtcbiAgc2Vjb25kYXJ5ID0gW107XG5cbiAgLy8gSWYgbG9hZCBldmVudCBoYXMgbm90IHlldCBmaXJlZCwgcmVwbGFjZSB0aGUgZGVmZXJyZWRcbiAgaWYgKGRlZmVyTG9hZC5zdGF0ZSgpID09PSAncGVuZGluZycpIHtcbiAgICBiaW5kTG9hZCgpO1xuICB9XG59O1xuXG4vLyBMaXN0ZW4gZm9yIGRvbXJlYWR5XG4kKFdlYmZsb3cucmVhZHkpO1xuXG4vLyBMaXN0ZW4gZm9yIHdpbmRvdy5vbmxvYWQgYW5kIHJlc29sdmUgZGVmZXJyZWRcbmJpbmRMb2FkKCk7XG5cbi8vIEV4cG9ydCBjb21tb25qcyBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gd2luZG93LldlYmZsb3cgPSBXZWJmbG93O1xuIl0sIm5hbWVzIjpbIldlYmZsb3ciLCJtb2R1bGVzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsIndpbmRvdyIsIiQiLCJqUXVlcnkiLCIkd2luIiwiJGRvYyIsImRvY3VtZW50IiwiaXNGdW5jdGlvbiIsIl8iLCJyZXF1aXJlIiwidHJhbSIsImRvbXJlYWR5IiwiZGVzdHJveWVkIiwiY29uZmlnIiwiaGlkZUJhY2tmYWNlIiwia2VlcEluaGVyaXRlZCIsImRlZmluZSIsIm5hbWUiLCJmYWN0b3J5Iiwib3B0aW9ucyIsInVuYmluZE1vZHVsZSIsImluc3RhbmNlIiwiYmluZE1vZHVsZSIsIm1vZHVsZSIsImVudiIsImRlc2lnbiIsIm9uIiwicHJldmlldyIsImRlc3Ryb3kiLCJyZWFkeSIsImFkZFJlYWR5IiwiY29udGFpbnMiLCJwdXNoIiwib2ZmIiwicmVtb3ZlUmVhZHkiLCJmaWx0ZXIiLCJyZWFkeUZuIiwibW9kZSIsImRlc2lnbkZsYWciLCJfX3dmX2Rlc2lnbiIsImluQXBwIiwiX193Zl9zbHVnIiwiV2ViZmxvd0VkaXRvciIsIldFQkZMT1dfRU5WX1RFU1QiLCJfX3dmX3Rlc3QiLCJ0b3AiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInRvdWNoIiwiRG9jdW1lbnRUb3VjaCIsImNocm9tZSIsInRlc3QiLCJ2ZW5kb3IiLCJwYXJzZUludCIsIm1hdGNoIiwiaW9zIiwic2FmYXJpIiwidG91Y2hUYXJnZXQiLCJldnQiLCJ0YXJnZXQiLCJ2YWxpZENsaWNrIiwiY2xpY2tUYXJnZXQiLCJyZXNpemVFdmVudHMiLCJzY3JvbGxFdmVudHMiLCJyZXNpemUiLCJldmVudFByb3h5Iiwic2Nyb2xsIiwicmVkcmF3IiwidHlwZXMiLCJoYW5kbGVycyIsInByb3h5IiwidXAiLCJ0aHJvdHRsZSIsImVhY2giLCJoIiwiaGFuZGxlciIsImFyZ3VtZW50cyIsImxlbmd0aCIsImxvY2F0aW9uIiwidXJsIiwicmVzdG9yZU1vZHVsZXMiLCJjYWxsUmVhZHkiLCJkZWZlckxvYWQiLCJsb2FkIiwidGhlbiIsImJpbmRMb2FkIiwicmVqZWN0IiwicmVzb2x2ZSIsIkRlZmVycmVkIiwidHJpZ2dlckhhbmRsZXIiLCJzdGF0ZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RCxHQUV6RDs7Q0FFQztBQUNELElBQUlBLFVBQVUsQ0FBQztBQUNmLElBQUlDLFVBQVUsQ0FBQztBQUNmLElBQUlDLFVBQVUsRUFBRTtBQUNoQixJQUFJQyxZQUFZQyxPQUFPSixPQUFPLElBQUksRUFBRTtBQUNwQyxJQUFJSyxJQUFJRCxPQUFPRSxNQUFNO0FBQ3JCLElBQUlDLE9BQU9GLEVBQUVEO0FBQ2IsSUFBSUksT0FBT0gsRUFBRUk7QUFDYixJQUFJQyxhQUFhTCxFQUFFSyxVQUFVO0FBQzdCLElBQUlDLElBQUtYLFFBQVFXLENBQUMsR0FBR0MsUUFBUTtBQUM3QixJQUFJQyxPQUFRYixRQUFRYSxJQUFJLEdBQUdELFFBQVEsaUJBQWlCUCxFQUFFUSxJQUFJO0FBQzFELElBQUlDLFdBQVc7QUFDZixJQUFJQyxZQUFZO0FBRWhCRixLQUFLRyxNQUFNLENBQUNDLFlBQVksR0FBRztBQUMzQkosS0FBS0csTUFBTSxDQUFDRSxhQUFhLEdBQUc7QUFFNUI7Ozs7OztDQU1DLEdBQ0RsQixRQUFRbUIsTUFBTSxHQUFHLFNBQVVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPO0lBQy9DLElBQUlyQixPQUFPLENBQUNtQixLQUFLLEVBQUU7UUFDakJHLGFBQWF0QixPQUFPLENBQUNtQixLQUFLO0lBQzVCO0lBQ0EsSUFBSUksV0FBWXZCLE9BQU8sQ0FBQ21CLEtBQUssR0FBR0MsUUFBUWhCLEdBQUdNLEdBQUdXLFlBQVksQ0FBQztJQUMzREcsV0FBV0Q7SUFDWCxPQUFPQTtBQUNUO0FBRUE7Ozs7Q0FJQyxHQUNEeEIsUUFBUVksT0FBTyxHQUFHLFNBQVVRLElBQUk7SUFDOUIsT0FBT25CLE9BQU8sQ0FBQ21CLEtBQUs7QUFDdEI7QUFFQSxTQUFTSyxXQUFXQyxPQUFNO0lBQ3hCLGdFQUFnRTtJQUNoRSxJQUFJMUIsUUFBUTJCLEdBQUcsSUFBSTtRQUNqQmpCLFdBQVdnQixRQUFPRSxNQUFNLEtBQUtyQixLQUFLc0IsRUFBRSxDQUFDLGVBQWVILFFBQU9FLE1BQU07UUFDakVsQixXQUFXZ0IsUUFBT0ksT0FBTyxLQUFLdkIsS0FBS3NCLEVBQUUsQ0FBQyxnQkFBZ0JILFFBQU9JLE9BQU87SUFDdEU7SUFDQSx1Q0FBdUM7SUFDdkNwQixXQUFXZ0IsUUFBT0ssT0FBTyxLQUFLeEIsS0FBS3NCLEVBQUUsQ0FBQyxnQkFBZ0JILFFBQU9LLE9BQU87SUFDcEUsa0NBQWtDO0lBQ2xDLElBQUlMLFFBQU9NLEtBQUssSUFBSXRCLFdBQVdnQixRQUFPTSxLQUFLLEdBQUc7UUFDNUNDLFNBQVNQO0lBQ1g7QUFDRjtBQUVBLFNBQVNPLFNBQVNQLE9BQU07SUFDdEIscURBQXFEO0lBQ3JELElBQUlaLFVBQVU7UUFDWlksUUFBT00sS0FBSztRQUNaO0lBQ0Y7SUFDQSw4REFBOEQ7SUFDOUQsSUFBSXJCLEVBQUV1QixRQUFRLENBQUNoQyxTQUFTd0IsUUFBT00sS0FBSyxHQUFHO1FBQ3JDO0lBQ0Y7SUFDQTlCLFFBQVFpQyxJQUFJLENBQUNULFFBQU9NLEtBQUs7QUFDM0I7QUFFQSxTQUFTVCxhQUFhRyxPQUFNO0lBQzFCLHdDQUF3QztJQUN4Q2hCLFdBQVdnQixRQUFPRSxNQUFNLEtBQUtyQixLQUFLNkIsR0FBRyxDQUFDLGVBQWVWLFFBQU9FLE1BQU07SUFDbEVsQixXQUFXZ0IsUUFBT0ksT0FBTyxLQUFLdkIsS0FBSzZCLEdBQUcsQ0FBQyxnQkFBZ0JWLFFBQU9JLE9BQU87SUFDckVwQixXQUFXZ0IsUUFBT0ssT0FBTyxLQUFLeEIsS0FBSzZCLEdBQUcsQ0FBQyxnQkFBZ0JWLFFBQU9LLE9BQU87SUFDckUseUNBQXlDO0lBQ3pDLElBQUlMLFFBQU9NLEtBQUssSUFBSXRCLFdBQVdnQixRQUFPTSxLQUFLLEdBQUc7UUFDNUNLLFlBQVlYO0lBQ2Q7QUFDRjtBQUVBLFNBQVNXLFlBQVlYLE9BQU07SUFDekJ4QixVQUFVUyxFQUFFMkIsTUFBTSxDQUFDcEMsU0FBUyxTQUFVcUMsT0FBTztRQUMzQyxPQUFPQSxZQUFZYixRQUFPTSxLQUFLO0lBQ2pDO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDRGhDLFFBQVFtQyxJQUFJLEdBQUcsU0FBVUgsS0FBSztJQUM1QixtREFBbUQ7SUFDbkQsSUFBSWxCLFVBQVU7UUFDWkosV0FBV3NCLFVBQVVBO1FBQ3JCO0lBQ0Y7SUFDQSxzQ0FBc0M7SUFDdEM3QixVQUFVZ0MsSUFBSSxDQUFDSDtBQUNqQjtBQUVBOzs7O0NBSUMsR0FDRGhDLFFBQVEyQixHQUFHLEdBQUcsU0FBVWEsSUFBSTtJQUMxQixJQUFJQyxhQUFhckMsT0FBT3NDLFdBQVc7SUFDbkMsSUFBSUMsUUFBUSxPQUFPRixlQUFlO0lBQ2xDLElBQUksQ0FBQ0QsTUFBTTtRQUNULE9BQU9HO0lBQ1Q7SUFDQSxJQUFJSCxTQUFTLFVBQVU7UUFDckIsT0FBT0csU0FBU0Y7SUFDbEI7SUFDQSxJQUFJRCxTQUFTLFdBQVc7UUFDdEIsT0FBT0csU0FBUyxDQUFDRjtJQUNuQjtJQUNBLElBQUlELFNBQVMsUUFBUTtRQUNuQixPQUFPRyxTQUFTdkMsT0FBT3dDLFNBQVM7SUFDbEM7SUFDQSxJQUFJSixTQUFTLFVBQVU7UUFDckIsT0FBT3BDLE9BQU95QyxhQUFhO0lBQzdCO0lBQ0EsSUFBSUwsU0FBUyxRQUFRO1FBQ25CLE9BQU9NLG9CQUFvQjFDLE9BQU8yQyxTQUFTO0lBQzdDO0lBQ0EsSUFBSVAsU0FBUyxTQUFTO1FBQ3BCLE9BQU9wQyxXQUFXQSxPQUFPNEMsR0FBRztJQUM5QjtBQUNGO0FBRUEsd0NBQXdDO0FBRXhDLElBQUlDLFlBQVlDLFVBQVVELFNBQVMsQ0FBQ0UsV0FBVztBQUMvQyxJQUFJQyxRQUFTcEQsUUFBUTJCLEdBQUcsQ0FBQ3lCLEtBQUssR0FDNUIsa0JBQWtCaEQsVUFDakJBLE9BQU9pRCxhQUFhLElBQUk1QyxvQkFBb0JMLE9BQU9pRCxhQUFhO0FBQ25FLElBQUlDLFNBQVV0RCxRQUFRMkIsR0FBRyxDQUFDMkIsTUFBTSxHQUM5QixTQUFTQyxJQUFJLENBQUNOLGNBQ2QsU0FBU00sSUFBSSxDQUFDTCxVQUFVTSxNQUFNLEtBQzlCQyxTQUFTUixVQUFVUyxLQUFLLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFO0FBQ2xELElBQUlDLE1BQU8zRCxRQUFRMkIsR0FBRyxDQUFDZ0MsR0FBRyxHQUFHLHFCQUFxQkosSUFBSSxDQUFDTjtBQUN2RGpELFFBQVEyQixHQUFHLENBQUNpQyxNQUFNLEdBQUcsU0FBU0wsSUFBSSxDQUFDTixjQUFjLENBQUNLLFVBQVUsQ0FBQ0s7QUFFN0Qsd0VBQXdFO0FBQ3hFLElBQUlFO0FBQ0osK0RBQStEO0FBQy9EVCxTQUNFNUMsS0FBS3FCLEVBQUUsQ0FBQyx3QkFBd0IsU0FBVWlDLEdBQUc7SUFDM0NELGNBQWNDLElBQUlDLE1BQU07QUFDMUI7QUFFRjs7OztDQUlDLEdBQ0QvRCxRQUFRZ0UsVUFBVSxHQUFHWixRQUNqQixTQUFVYSxXQUFXO0lBQ25CLE9BQ0VBLGdCQUFnQkosZUFBZXhELEVBQUU2QixRQUFRLENBQUMrQixhQUFhSjtBQUUzRCxJQUNBO0lBQ0UsT0FBTztBQUNUO0FBRUo7O0NBRUMsR0FFRCxJQUFJSyxlQUFlO0FBQ25CLElBQUlDLGVBQWUsb0JBQW9CRDtBQUN2Q2xFLFFBQVFvRSxNQUFNLEdBQUdDLFdBQVc5RCxNQUFNMkQ7QUFDbENsRSxRQUFRc0UsTUFBTSxHQUFHRCxXQUFXOUQsTUFBTTREO0FBQ2xDbkUsUUFBUXVFLE1BQU0sR0FBR0Y7QUFFakIsK0NBQStDO0FBQy9DLFNBQVNBLFdBQVdOLE1BQU0sRUFBRVMsS0FBSztJQUMvQixnRUFBZ0U7SUFFaEUsSUFBSUMsV0FBVyxFQUFFO0lBQ2pCLElBQUlDLFFBQVEsQ0FBQztJQUNiQSxNQUFNQyxFQUFFLEdBQUdoRSxFQUFFaUUsUUFBUSxDQUFDLFNBQVVkLEdBQUc7UUFDakNuRCxFQUFFa0UsSUFBSSxDQUFDSixVQUFVLFNBQVVLLENBQUM7WUFDMUJBLEVBQUVoQjtRQUNKO0lBQ0Y7SUFFQSx3QkFBd0I7SUFDeEIsSUFBSUMsVUFBVVMsT0FBTztRQUNuQlQsT0FBT2xDLEVBQUUsQ0FBQzJDLE9BQU9FLE1BQU1DLEVBQUU7SUFDM0I7SUFFQTs7O0dBR0MsR0FDREQsTUFBTTdDLEVBQUUsR0FBRyxTQUFVa0QsT0FBTztRQUMxQixJQUFJLE9BQU9BLFlBQVksWUFBWTtZQUNqQztRQUNGO1FBQ0EsSUFBSXBFLEVBQUV1QixRQUFRLENBQUN1QyxVQUFVTSxVQUFVO1lBQ2pDO1FBQ0Y7UUFDQU4sU0FBU3RDLElBQUksQ0FBQzRDO0lBQ2hCO0lBRUE7OztHQUdDLEdBQ0RMLE1BQU10QyxHQUFHLEdBQUcsU0FBVTJDLE9BQU87UUFDM0IsK0NBQStDO1FBQy9DLElBQUksQ0FBQ0MsVUFBVUMsTUFBTSxFQUFFO1lBQ3JCUixXQUFXLEVBQUU7WUFDYjtRQUNGO1FBQ0EsMENBQTBDO1FBQzFDQSxXQUFXOUQsRUFBRTJCLE1BQU0sQ0FBQ21DLFVBQVUsU0FBVUssQ0FBQztZQUN2QyxPQUFPQSxNQUFNQztRQUNmO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsaURBQWlEO0FBQ2pEMUUsUUFBUWtGLFFBQVEsR0FBRyxTQUFVQyxHQUFHO0lBQzlCL0UsT0FBTzhFLFFBQVEsR0FBR0M7QUFDcEI7QUFFQSxJQUFJbkYsUUFBUTJCLEdBQUcsSUFBSTtJQUNqQiw0REFBNEQ7SUFDNUQzQixRQUFRa0YsUUFBUSxHQUFHLFlBQWE7QUFDbEM7QUFFQSxzREFBc0Q7QUFDdERsRixRQUFRZ0MsS0FBSyxHQUFHO0lBQ2RsQixXQUFXO0lBRVgsZ0NBQWdDO0lBQ2hDLElBQUlDLFdBQVc7UUFDYnFFO0lBRUEsc0NBQXNDO0lBQ3hDLE9BQU87UUFDTHpFLEVBQUVrRSxJQUFJLENBQUMzRSxTQUFTbUY7SUFDbEI7SUFFQSw4QkFBOEI7SUFDOUIxRSxFQUFFa0UsSUFBSSxDQUFDMUUsV0FBV2tGO0lBRWxCLGlCQUFpQjtJQUNqQnJGLFFBQVFvRSxNQUFNLENBQUNPLEVBQUU7QUFDbkI7QUFFQSxTQUFTVSxVQUFVOUMsT0FBTztJQUN4QjdCLFdBQVc2QixZQUFZQTtBQUN6QjtBQUVBLFNBQVM2QztJQUNQckUsWUFBWTtJQUNaSixFQUFFa0UsSUFBSSxDQUFDNUUsU0FBU3dCO0FBQ2xCO0FBRUE7OztDQUdDLEdBQ0QsSUFBSTZEO0FBQ0p0RixRQUFRdUYsSUFBSSxHQUFHLFNBQVVSLE9BQU87SUFDOUJPLFVBQVVFLElBQUksQ0FBQ1Q7QUFDakI7QUFFQSxTQUFTVTtJQUNQLG9EQUFvRDtJQUNwRCxJQUFJSCxXQUFXO1FBQ2JBLFVBQVVJLE1BQU07UUFDaEJuRixLQUFLNkIsR0FBRyxDQUFDLFFBQVFrRCxVQUFVSyxPQUFPO0lBQ3BDO0lBQ0EsNkNBQTZDO0lBQzdDTCxZQUFZLElBQUlqRixFQUFFdUYsUUFBUTtJQUMxQnJGLEtBQUtzQixFQUFFLENBQUMsUUFBUXlELFVBQVVLLE9BQU87QUFDbkM7QUFFQSw0REFBNEQ7QUFDNUQzRixRQUFRK0IsT0FBTyxHQUFHLFNBQVVULE9BQU87SUFDakNBLFVBQVVBLFdBQVcsQ0FBQztJQUN0QlAsWUFBWTtJQUNaUixLQUFLc0YsY0FBYyxDQUFDO0lBRXBCLGlDQUFpQztJQUNqQyxJQUFJdkUsUUFBUVIsUUFBUSxJQUFJLE1BQU07UUFDNUJBLFdBQVdRLFFBQVFSLFFBQVE7SUFDN0I7SUFFQSxpQkFBaUI7SUFDakJILEVBQUVrRSxJQUFJLENBQUM1RSxTQUFTc0I7SUFFaEIsaUNBQWlDO0lBQ2pDdkIsUUFBUW9FLE1BQU0sQ0FBQ2hDLEdBQUc7SUFDbEJwQyxRQUFRc0UsTUFBTSxDQUFDbEMsR0FBRztJQUNsQnBDLFFBQVF1RSxNQUFNLENBQUNuQyxHQUFHO0lBRWxCLGlDQUFpQztJQUNqQ2xDLFVBQVUsRUFBRTtJQUNaQyxZQUFZLEVBQUU7SUFFZCx3REFBd0Q7SUFDeEQsSUFBSW1GLFVBQVVRLEtBQUssT0FBTyxXQUFXO1FBQ25DTDtJQUNGO0FBQ0Y7QUFFQSxzQkFBc0I7QUFDdEJwRixFQUFFTCxRQUFRZ0MsS0FBSztBQUVmLGdEQUFnRDtBQUNoRHlEO0FBRUEseUJBQXlCO0FBQ3pCL0QsT0FBT3FFLE9BQU8sR0FBRzNGLE9BQU9KLE9BQU8sR0FBR0EifQ==

}),
624: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ /**
 * Webflow: Auto-select links to current page or section
 */ 
var Webflow = __webpack_require__(949);
Webflow.define('links', module.exports = function($, _) {
    var api = {};
    var $win = $(window);
    var designer;
    var inApp = Webflow.env();
    var location = window.location;
    var tempLink = document.createElement('a');
    var linkCurrent = 'w--current';
    var indexPage = /index\.(html|php)$/;
    var dirList = /\/$/;
    var anchors;
    var slug;
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        slug = Webflow.env('slug') || location.pathname || '';
        // Reset scroll listener, init anchors
        Webflow.scroll.off(scroll);
        anchors = [];
        // Test all links for a selectable href
        var links = document.links;
        for(var i = 0; i < links.length; ++i){
            select(links[i]);
        }
        // Listen for scroll if any anchors exist
        if (anchors.length) {
            Webflow.scroll.on(scroll);
            scroll();
        }
    }
    function select(link) {
        // Ignore localized links
        if (link.getAttribute('hreflang')) {
            return;
        }
        var href = designer && link.getAttribute('href-disabled') || link.getAttribute('href');
        tempLink.href = href;
        // Ignore any hrefs with a colon to safely avoid all uri schemes
        if (href.indexOf(':') >= 0) {
            return;
        }
        var $link = $(link);
        // Check for all links with hash (eg (this-host)(/this-path)#section) to this page
        if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
            // Ignore any hrefs with Google Translate type hash
            // Example: jQuery can't parse $('#googtrans(en|es)')
            // https://forum.webflow.com/t/dropdown-menus-not-working-on-site/87140
            if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
            }
            var $section = $(tempLink.hash);
            $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
            });
            return;
        }
        // Ignore empty # links
        if (href === '#' || href === '') {
            return;
        }
        // Determine whether the link should be selected
        var match = !inApp && tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
        setClass($link, linkCurrent, match);
    }
    function scroll() {
        var viewTop = $win.scrollTop();
        var viewHeight = $win.height();
        // Check each anchor for a section in view
        _.each(anchors, function(anchor) {
            // Ignore localized links
            if (anchor.link.attr('hreflang')) {
                return;
            }
            var $link = anchor.link;
            var $section = anchor.sec;
            var top = $section.offset().top;
            var height = $section.outerHeight();
            var offset = viewHeight * 0.5;
            var active = $section.is(':visible') && top + height - offset >= viewTop && top + offset <= viewTop + viewHeight;
            if (anchor.active === active) {
                return;
            }
            anchor.active = active;
            setClass($link, linkCurrent, active);
        });
    }
    function setClass($elem, className, add) {
        var exists = $elem.hasClass(className);
        if (add && exists) {
            return;
        }
        if (!add && !exists) {
            return;
        }
        add ? $elem.addClass(className) : $elem.removeClass(className);
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbGlua3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyB3aW5kb3csIGRvY3VtZW50ICovXG5cbi8qKlxuICogV2ViZmxvdzogQXV0by1zZWxlY3QgbGlua3MgdG8gY3VycmVudCBwYWdlIG9yIHNlY3Rpb25cbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdsaW5rcycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgdmFyIGFwaSA9IHt9O1xuICAgIHZhciAkd2luID0gJCh3aW5kb3cpO1xuICAgIHZhciBkZXNpZ25lcjtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgdGVtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIGxpbmtDdXJyZW50ID0gJ3ctLWN1cnJlbnQnO1xuICAgIHZhciBpbmRleFBhZ2UgPSAvaW5kZXhcXC4oaHRtbHxwaHApJC87XG4gICAgdmFyIGRpckxpc3QgPSAvXFwvJC87XG4gICAgdmFyIGFuY2hvcnM7XG4gICAgdmFyIHNsdWc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBhcGkuZGVzaWduID0gYXBpLnByZXZpZXcgPSBpbml0O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBkZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcbiAgICAgIHNsdWcgPSBXZWJmbG93LmVudignc2x1ZycpIHx8IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcnO1xuXG4gICAgICAvLyBSZXNldCBzY3JvbGwgbGlzdGVuZXIsIGluaXQgYW5jaG9yc1xuICAgICAgV2ViZmxvdy5zY3JvbGwub2ZmKHNjcm9sbCk7XG4gICAgICBhbmNob3JzID0gW107XG5cbiAgICAgIC8vIFRlc3QgYWxsIGxpbmtzIGZvciBhIHNlbGVjdGFibGUgaHJlZlxuICAgICAgdmFyIGxpbmtzID0gZG9jdW1lbnQubGlua3M7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHNlbGVjdChsaW5rc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3Igc2Nyb2xsIGlmIGFueSBhbmNob3JzIGV4aXN0XG4gICAgICBpZiAoYW5jaG9ycy5sZW5ndGgpIHtcbiAgICAgICAgV2ViZmxvdy5zY3JvbGwub24oc2Nyb2xsKTtcbiAgICAgICAgc2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0KGxpbmspIHtcbiAgICAgIC8vIElnbm9yZSBsb2NhbGl6ZWQgbGlua3NcbiAgICAgIGlmIChsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZmxhbmcnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBocmVmID1cbiAgICAgICAgKGRlc2lnbmVyICYmIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmLWRpc2FibGVkJykpIHx8XG4gICAgICAgIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB0ZW1wTGluay5ocmVmID0gaHJlZjtcblxuICAgICAgLy8gSWdub3JlIGFueSBocmVmcyB3aXRoIGEgY29sb24gdG8gc2FmZWx5IGF2b2lkIGFsbCB1cmkgc2NoZW1lc1xuICAgICAgaWYgKGhyZWYuaW5kZXhPZignOicpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgJGxpbmsgPSAkKGxpbmspO1xuXG4gICAgICAvLyBDaGVjayBmb3IgYWxsIGxpbmtzIHdpdGggaGFzaCAoZWcgKHRoaXMtaG9zdCkoL3RoaXMtcGF0aCkjc2VjdGlvbikgdG8gdGhpcyBwYWdlXG4gICAgICBpZiAoXG4gICAgICAgIHRlbXBMaW5rLmhhc2gubGVuZ3RoID4gMSAmJlxuICAgICAgICB0ZW1wTGluay5ob3N0ICsgdGVtcExpbmsucGF0aG5hbWUgPT09IGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgKSB7XG4gICAgICAgIC8vIElnbm9yZSBhbnkgaHJlZnMgd2l0aCBHb29nbGUgVHJhbnNsYXRlIHR5cGUgaGFzaFxuICAgICAgICAvLyBFeGFtcGxlOiBqUXVlcnkgY2FuJ3QgcGFyc2UgJCgnI2dvb2d0cmFucyhlbnxlcyknKVxuICAgICAgICAvLyBodHRwczovL2ZvcnVtLndlYmZsb3cuY29tL3QvZHJvcGRvd24tbWVudXMtbm90LXdvcmtpbmctb24tc2l0ZS84NzE0MFxuICAgICAgICBpZiAoIS9eI1thLXpBLVowLTlcXC1cXF9dKyQvLnRlc3QodGVtcExpbmsuaGFzaCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHNlY3Rpb24gPSAkKHRlbXBMaW5rLmhhc2gpO1xuICAgICAgICAkc2VjdGlvbi5sZW5ndGggJiZcbiAgICAgICAgICBhbmNob3JzLnB1c2goe1xuICAgICAgICAgICAgbGluazogJGxpbmssXG4gICAgICAgICAgICBzZWM6ICRzZWN0aW9uLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZW1wdHkgIyBsaW5rc1xuICAgICAgaWYgKGhyZWYgPT09ICcjJyB8fCBocmVmID09PSAnJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIHRoZSBsaW5rIHNob3VsZCBiZSBzZWxlY3RlZFxuICAgICAgdmFyIG1hdGNoID1cbiAgICAgICAgKCFpbkFwcCAmJiB0ZW1wTGluay5ocmVmID09PSBsb2NhdGlvbi5ocmVmKSB8fFxuICAgICAgICBocmVmID09PSBzbHVnIHx8XG4gICAgICAgIChpbmRleFBhZ2UudGVzdChocmVmKSAmJiBkaXJMaXN0LnRlc3Qoc2x1ZykpO1xuICAgICAgc2V0Q2xhc3MoJGxpbmssIGxpbmtDdXJyZW50LCBtYXRjaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgdmFyIHZpZXdUb3AgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIHZpZXdIZWlnaHQgPSAkd2luLmhlaWdodCgpO1xuXG4gICAgICAvLyBDaGVjayBlYWNoIGFuY2hvciBmb3IgYSBzZWN0aW9uIGluIHZpZXdcbiAgICAgIF8uZWFjaChhbmNob3JzLCBmdW5jdGlvbiAoYW5jaG9yKSB7XG4gICAgICAgIC8vIElnbm9yZSBsb2NhbGl6ZWQgbGlua3NcbiAgICAgICAgaWYgKGFuY2hvci5saW5rLmF0dHIoJ2hyZWZsYW5nJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGxpbmsgPSBhbmNob3IubGluaztcbiAgICAgICAgdmFyICRzZWN0aW9uID0gYW5jaG9yLnNlYztcbiAgICAgICAgdmFyIHRvcCA9ICRzZWN0aW9uLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIGhlaWdodCA9ICRzZWN0aW9uLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB2aWV3SGVpZ2h0ICogMC41O1xuICAgICAgICB2YXIgYWN0aXZlID1cbiAgICAgICAgICAkc2VjdGlvbi5pcygnOnZpc2libGUnKSAmJlxuICAgICAgICAgIHRvcCArIGhlaWdodCAtIG9mZnNldCA+PSB2aWV3VG9wICYmXG4gICAgICAgICAgdG9wICsgb2Zmc2V0IDw9IHZpZXdUb3AgKyB2aWV3SGVpZ2h0O1xuICAgICAgICBpZiAoYW5jaG9yLmFjdGl2ZSA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFuY2hvci5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIHNldENsYXNzKCRsaW5rLCBsaW5rQ3VycmVudCwgYWN0aXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldENsYXNzKCRlbGVtLCBjbGFzc05hbWUsIGFkZCkge1xuICAgICAgdmFyIGV4aXN0cyA9ICRlbGVtLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG4gICAgICBpZiAoYWRkICYmIGV4aXN0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWFkZCAmJiAhZXhpc3RzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFkZCA/ICRlbGVtLmFkZENsYXNzKGNsYXNzTmFtZSkgOiAkZWxlbS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCBtb2R1bGVcbiAgICByZXR1cm4gYXBpO1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiXyIsImFwaSIsIiR3aW4iLCJ3aW5kb3ciLCJkZXNpZ25lciIsImluQXBwIiwiZW52IiwibG9jYXRpb24iLCJ0ZW1wTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImxpbmtDdXJyZW50IiwiaW5kZXhQYWdlIiwiZGlyTGlzdCIsImFuY2hvcnMiLCJzbHVnIiwicmVhZHkiLCJkZXNpZ24iLCJwcmV2aWV3IiwiaW5pdCIsInBhdGhuYW1lIiwic2Nyb2xsIiwib2ZmIiwibGlua3MiLCJpIiwibGVuZ3RoIiwic2VsZWN0Iiwib24iLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwiaHJlZiIsImluZGV4T2YiLCIkbGluayIsImhhc2giLCJob3N0IiwidGVzdCIsIiRzZWN0aW9uIiwicHVzaCIsInNlYyIsImFjdGl2ZSIsIm1hdGNoIiwic2V0Q2xhc3MiLCJ2aWV3VG9wIiwic2Nyb2xsVG9wIiwidmlld0hlaWdodCIsImhlaWdodCIsImVhY2giLCJhbmNob3IiLCJhdHRyIiwidG9wIiwib2Zmc2V0Iiwib3V0ZXJIZWlnaHQiLCJpcyIsIiRlbGVtIiwiY2xhc3NOYW1lIiwiYWRkIiwiZXhpc3RzIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUMsRUFBRUMsQ0FBQztJQUM5QixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxPQUFPSCxFQUFFSTtJQUNiLElBQUlDO0lBQ0osSUFBSUMsUUFBUVgsUUFBUVksR0FBRztJQUN2QixJQUFJQyxXQUFXSixPQUFPSSxRQUFRO0lBQzlCLElBQUlDLFdBQVdDLFNBQVNDLGFBQWEsQ0FBQztJQUN0QyxJQUFJQyxjQUFjO0lBQ2xCLElBQUlDLFlBQVk7SUFDaEIsSUFBSUMsVUFBVTtJQUNkLElBQUlDO0lBQ0osSUFBSUM7SUFFSixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBRWpCZCxJQUFJZSxLQUFLLEdBQUdmLElBQUlnQixNQUFNLEdBQUdoQixJQUFJaUIsT0FBTyxHQUFHQztJQUV2QyxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBRWxCLFNBQVNBO1FBQ1BmLFdBQVdDLFNBQVNYLFFBQVFZLEdBQUcsQ0FBQztRQUNoQ1MsT0FBT3JCLFFBQVFZLEdBQUcsQ0FBQyxXQUFXQyxTQUFTYSxRQUFRLElBQUk7UUFFbkQsc0NBQXNDO1FBQ3RDMUIsUUFBUTJCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDRDtRQUNuQlAsVUFBVSxFQUFFO1FBRVosdUNBQXVDO1FBQ3ZDLElBQUlTLFFBQVFkLFNBQVNjLEtBQUs7UUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlELE1BQU1FLE1BQU0s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

}),
286: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ /**
 * Webflow: Smooth scroll
 */ 
var Webflow = __webpack_require__(949);
Webflow.define('scroll', module.exports = function($) {
    /**
     * A collection of namespaced events found in this module.
     * Namespaced events encapsulate our code, and make it safer and easier
     * for designers to apply custom code overrides.
     * @see https://api.jquery.com/on/#event-names
     * @typedef {Object.<string>} NamespacedEventsCollection
     */ var NS_EVENTS = {
        WF_CLICK_EMPTY: 'click.wf-empty-link',
        WF_CLICK_SCROLL: 'click.wf-scroll'
    };
    var loc = window.location;
    var history = inIframe() ? null : window.history;
    var $win = $(window);
    var $doc = $(document);
    var $body = $(document.body);
    var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
        window.setTimeout(fn, 15);
    };
    var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
    var headerSelector = 'header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])';
    var emptyHrefSelector = 'a[href="#"]';
    /**
     * Select only links whose href:
     * - contains a #
     * - is not one of our namespaced TabLink elements
     * - is not _only_ a #
     */ var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ')';
    var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
    var focusStylesEl = document.createElement('style');
    focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
    function inIframe() {
        try {
            return Boolean(window.frameElement);
        } catch (e) {
            return true;
        }
    }
    var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
    /**
     * Determine if link navigates to current page
     * @param {HTMLAnchorElement} link
     */ function linksToCurrentPage(link) {
        return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
    }
    /**
     * Check if the designer has indicated that this page should
     * have no scroll animation, or if the end user has set
     * prefers-reduced-motion in their OS
     */ const reducedMotionMediaQuery = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)');
    function reducedMotionEnabled() {
        return document.body.getAttribute('data-wf-scroll-motion') === 'none' || reducedMotionMediaQuery.matches;
    }
    function setFocusable($el, action) {
        var initialTabindex;
        switch(action){
            case 'add':
                initialTabindex = $el.attr('tabindex');
                if (initialTabindex) {
                    $el.attr('data-wf-tabindex-swap', initialTabindex);
                } else {
                    $el.attr('tabindex', '-1');
                }
                break;
            case 'remove':
                initialTabindex = $el.attr('data-wf-tabindex-swap');
                if (initialTabindex) {
                    $el.attr('tabindex', initialTabindex);
                    $el.removeAttr('data-wf-tabindex-swap');
                } else {
                    $el.removeAttr('tabindex');
                }
                break;
        }
        $el.toggleClass('wf-force-outline-none', action === 'add');
    }
    /**
     * Determine if we should execute custom scroll
     */ function validateScroll(evt) {
        var target = evt.currentTarget;
        if (// Bail if in Designer
        Webflow.env('design') || // Ignore links being used by jQuery mobile
        window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)) {
            return;
        }
        var hash = linksToCurrentPage(target) ? target.hash : '';
        if (hash === '') return;
        var $el = $(hash);
        if (!$el.length) {
            return;
        }
        if (evt) {
            evt.preventDefault();
            evt.stopPropagation();
        }
        updateHistory(hash, evt);
        window.setTimeout(function() {
            scroll($el, function setFocus() {
                setFocusable($el, 'add');
                $el.get(0).focus({
                    preventScroll: true
                });
                setFocusable($el, 'remove');
            });
        }, evt ? 0 : 300);
    }
    function updateHistory(hash) {
        // Push new history state
        if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
        !(Webflow.env.chrome && loc.protocol === 'file:')) {
            var oldHash = history.state && history.state.hash;
            if (oldHash !== hash) {
                history.pushState({
                    hash
                }, '', hash);
            }
        }
    }
    function scroll($targetEl, cb) {
        var start = $win.scrollTop();
        var end = calculateScrollEndPosition($targetEl);
        if (start === end) return;
        var duration = calculateScrollDuration($targetEl, start, end);
        var clock = Date.now();
        var step = function() {
            var elapsed = Date.now() - clock;
            window.scroll(0, getY(start, end, elapsed, duration));
            if (elapsed <= duration) {
                animate(step);
            } else if (typeof cb === 'function') {
                cb();
            }
        };
        animate(step);
    }
    function calculateScrollEndPosition($targetEl) {
        // If a fixed header exists, offset for the height
        var $header = $(headerSelector);
        var offsetY = $header.css('position') === 'fixed' ? $header.outerHeight() : 0;
        var end = $targetEl.offset().top - offsetY;
        // If specified, scroll so that the element ends up in the middle of the viewport
        if ($targetEl.data('scroll') === 'mid') {
            var available = $win.height() - offsetY;
            var elHeight = $targetEl.outerHeight();
            if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
            }
        }
        return end;
    }
    function calculateScrollDuration($targetEl, start, end) {
        if (reducedMotionEnabled()) return 0;
        var mult = 1;
        // Check for custom time multiplier on the body and the scroll target
        $body.add($targetEl).each(function(_, el) {
            var time = parseFloat(el.getAttribute('data-scroll-time'));
            if (!isNaN(time) && time >= 0) {
                mult = time;
            }
        });
        return (472.143 * Math.log(Math.abs(start - end) + 125) - 2000) * mult;
    }
    function getY(start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        return start + (end - start) * ease(elapsed / duration);
    }
    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    function ready() {
        var { WF_CLICK_EMPTY, WF_CLICK_SCROLL } = NS_EVENTS;
        $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
        /**
       * Prevent empty hash links from triggering scroll.
       * Legacy feature to preserve: use the default "#" link
       * to trigger an interaction, and do not want the page
       * to scroll to the top.
       */ $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
            e.preventDefault();
        });
        document.head.insertBefore(focusStylesEl, document.head.firstChild);
    }
    // Export module
    return {
        ready
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IFNtb290aCBzY3JvbGxcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4vd2ViZmxvdy1saWInKTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdzY3JvbGwnLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxuICAgICAqIEEgY29sbGVjdGlvbiBvZiBuYW1lc3BhY2VkIGV2ZW50cyBmb3VuZCBpbiB0aGlzIG1vZHVsZS5cbiAgICAgKiBOYW1lc3BhY2VkIGV2ZW50cyBlbmNhcHN1bGF0ZSBvdXIgY29kZSwgYW5kIG1ha2UgaXQgc2FmZXIgYW5kIGVhc2llclxuICAgICAqIGZvciBkZXNpZ25lcnMgdG8gYXBwbHkgY3VzdG9tIGNvZGUgb3ZlcnJpZGVzLlxuICAgICAqIEBzZWUgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9vbi8jZXZlbnQtbmFtZXNcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0LjxzdHJpbmc+fSBOYW1lc3BhY2VkRXZlbnRzQ29sbGVjdGlvblxuICAgICAqL1xuICAgIHZhciBOU19FVkVOVFMgPSB7XG4gICAgICBXRl9DTElDS19FTVBUWTogJ2NsaWNrLndmLWVtcHR5LWxpbmsnLFxuICAgICAgV0ZfQ0xJQ0tfU0NST0xMOiAnY2xpY2sud2Ytc2Nyb2xsJyxcbiAgICB9O1xuXG4gICAgdmFyIGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgaGlzdG9yeSA9IGluSWZyYW1lKCkgPyBudWxsIDogd2luZG93Lmhpc3Rvcnk7XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgdmFyIGFuaW1hdGUgPVxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCAxNSk7XG4gICAgICB9O1xuICAgIHZhciByb290VGFnID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpID8gJy53LWVkaXRvci1ib2R5JyA6ICdib2R5JztcbiAgICB2YXIgaGVhZGVyU2VsZWN0b3IgPVxuICAgICAgJ2hlYWRlciwgJyArXG4gICAgICByb290VGFnICtcbiAgICAgICcgPiAuaGVhZGVyLCAnICtcbiAgICAgIHJvb3RUYWcgK1xuICAgICAgJyA+IC53LW5hdjpub3QoW2RhdGEtbm8tc2Nyb2xsXSknO1xuXG4gICAgdmFyIGVtcHR5SHJlZlNlbGVjdG9yID0gJ2FbaHJlZj1cIiNcIl0nO1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IG9ubHkgbGlua3Mgd2hvc2UgaHJlZjpcbiAgICAgKiAtIGNvbnRhaW5zIGEgI1xuICAgICAqIC0gaXMgbm90IG9uZSBvZiBvdXIgbmFtZXNwYWNlZCBUYWJMaW5rIGVsZW1lbnRzXG4gICAgICogLSBpcyBub3QgX29ubHlfIGEgI1xuICAgICAqL1xuICAgIHZhciBsb2NhbEhyZWZTZWxlY3RvciA9XG4gICAgICAnYVtocmVmKj1cIiNcIl06bm90KC53LXRhYi1saW5rKTpub3QoJyArIGVtcHR5SHJlZlNlbGVjdG9yICsgJyknO1xuXG4gICAgdmFyIHNjcm9sbFRhcmdldE91dGxpbmVDU1MgPVxuICAgICAgJy53Zi1mb3JjZS1vdXRsaW5lLW5vbmVbdGFiaW5kZXg9XCItMVwiXTpmb2N1c3tvdXRsaW5lOm5vbmU7fSc7XG5cbiAgICB2YXIgZm9jdXNTdHlsZXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgZm9jdXNTdHlsZXNFbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzY3JvbGxUYXJnZXRPdXRsaW5lQ1NTKSk7XG5cbiAgICBmdW5jdGlvbiBpbklmcmFtZSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHdpbmRvdy5mcmFtZUVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsaWRIYXNoID0gL14jW2EtekEtWjAtOV1bXFx3Oi4tXSokLztcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiBsaW5rIG5hdmlnYXRlcyB0byBjdXJyZW50IHBhZ2VcbiAgICAgKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBsaW5rXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlua3NUb0N1cnJlbnRQYWdlKGxpbmspIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHZhbGlkSGFzaC50ZXN0KGxpbmsuaGFzaCkgJiZcbiAgICAgICAgbGluay5ob3N0ICsgbGluay5wYXRobmFtZSA9PT0gbG9jLmhvc3QgKyBsb2MucGF0aG5hbWVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGRlc2lnbmVyIGhhcyBpbmRpY2F0ZWQgdGhhdCB0aGlzIHBhZ2Ugc2hvdWxkXG4gICAgICogaGF2ZSBubyBzY3JvbGwgYW5pbWF0aW9uLCBvciBpZiB0aGUgZW5kIHVzZXIgaGFzIHNldFxuICAgICAqIHByZWZlcnMtcmVkdWNlZC1tb3Rpb24gaW4gdGhlaXIgT1NcbiAgICAgKi9cbiAgICBjb25zdCByZWR1Y2VkTW90aW9uTWVkaWFRdWVyeSA9XG4gICAgICB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpO1xuICAgIGZ1bmN0aW9uIHJlZHVjZWRNb3Rpb25FbmFibGVkKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2Ytc2Nyb2xsLW1vdGlvbicpID09PSAnbm9uZScgfHxcbiAgICAgICAgcmVkdWNlZE1vdGlvbk1lZGlhUXVlcnkubWF0Y2hlc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRGb2N1c2FibGUoJGVsLCBhY3Rpb24pIHtcbiAgICAgIHZhciBpbml0aWFsVGFiaW5kZXg7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2FkZCc6XG4gICAgICAgICAgaW5pdGlhbFRhYmluZGV4ID0gJGVsLmF0dHIoJ3RhYmluZGV4Jyk7XG5cbiAgICAgICAgICBpZiAoaW5pdGlhbFRhYmluZGV4KSB7XG4gICAgICAgICAgICAkZWwuYXR0cignZGF0YS13Zi10YWJpbmRleC1zd2FwJywgaW5pdGlhbFRhYmluZGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgaW5pdGlhbFRhYmluZGV4ID0gJGVsLmF0dHIoJ2RhdGEtd2YtdGFiaW5kZXgtc3dhcCcpO1xuICAgICAgICAgIGlmIChpbml0aWFsVGFiaW5kZXgpIHtcbiAgICAgICAgICAgICRlbC5hdHRyKCd0YWJpbmRleCcsIGluaXRpYWxUYWJpbmRleCk7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQXR0cignZGF0YS13Zi10YWJpbmRleC1zd2FwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbC5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgJGVsLnRvZ2dsZUNsYXNzKCd3Zi1mb3JjZS1vdXRsaW5lLW5vbmUnLCBhY3Rpb24gPT09ICdhZGQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGV4ZWN1dGUgY3VzdG9tIHNjcm9sbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlU2Nyb2xsKGV2dCkge1xuICAgICAgdmFyIHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICAvLyBCYWlsIGlmIGluIERlc2lnbmVyXG4gICAgICAgIFdlYmZsb3cuZW52KCdkZXNpZ24nKSB8fFxuICAgICAgICAvLyBJZ25vcmUgbGlua3MgYmVpbmcgdXNlZCBieSBqUXVlcnkgbW9iaWxlXG4gICAgICAgICh3aW5kb3cuJC5tb2JpbGUgJiYgLyg/Ol58XFxzKXVpLWxpbmsoPzokfFxccykvLnRlc3QodGFyZ2V0LmNsYXNzTmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFzaCA9IGxpbmtzVG9DdXJyZW50UGFnZSh0YXJnZXQpID8gdGFyZ2V0Lmhhc2ggOiAnJztcbiAgICAgIGlmIChoYXNoID09PSAnJykgcmV0dXJuO1xuXG4gICAgICB2YXIgJGVsID0gJChoYXNoKTtcbiAgICAgIGlmICghJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlSGlzdG9yeShoYXNoLCBldnQpO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNjcm9sbCgkZWwsIGZ1bmN0aW9uIHNldEZvY3VzKCkge1xuICAgICAgICAgICAgc2V0Rm9jdXNhYmxlKCRlbCwgJ2FkZCcpO1xuICAgICAgICAgICAgJGVsLmdldCgwKS5mb2N1cyh7cHJldmVudFNjcm9sbDogdHJ1ZX0pO1xuICAgICAgICAgICAgc2V0Rm9jdXNhYmxlKCRlbCwgJ3JlbW92ZScpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBldnQgPyAwIDogMzAwXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUhpc3RvcnkoaGFzaCkge1xuICAgICAgLy8gUHVzaCBuZXcgaGlzdG9yeSBzdGF0ZVxuICAgICAgaWYgKFxuICAgICAgICBsb2MuaGFzaCAhPT0gaGFzaCAmJlxuICAgICAgICBoaXN0b3J5ICYmXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlICYmXG4gICAgICAgIC8vIE5hdmlnYXRpb24gYnJlYWtzIENocm9tZSB3aGVuIHRoZSBwcm90b2NvbCBpcyBgZmlsZTpgLlxuICAgICAgICAhKFdlYmZsb3cuZW52LmNocm9tZSAmJiBsb2MucHJvdG9jb2wgPT09ICdmaWxlOicpXG4gICAgICApIHtcbiAgICAgICAgdmFyIG9sZEhhc2ggPSBoaXN0b3J5LnN0YXRlICYmIGhpc3Rvcnkuc3RhdGUuaGFzaDtcbiAgICAgICAgaWYgKG9sZEhhc2ggIT09IGhhc2gpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7aGFzaH0sICcnLCBoYXNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbCgkdGFyZ2V0RWwsIGNiKSB7XG4gICAgICB2YXIgc3RhcnQgPSAkd2luLnNjcm9sbFRvcCgpO1xuICAgICAgdmFyIGVuZCA9IGNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uKCR0YXJnZXRFbCk7XG5cbiAgICAgIGlmIChzdGFydCA9PT0gZW5kKSByZXR1cm47XG5cbiAgICAgIHZhciBkdXJhdGlvbiA9IGNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uKCR0YXJnZXRFbCwgc3RhcnQsIGVuZCk7XG5cbiAgICAgIHZhciBjbG9jayA9IERhdGUubm93KCk7XG4gICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gY2xvY2s7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgZ2V0WShzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbikpO1xuXG4gICAgICAgIGlmIChlbGFwc2VkIDw9IGR1cmF0aW9uKSB7XG4gICAgICAgICAgYW5pbWF0ZShzdGVwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBhbmltYXRlKHN0ZXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uKCR0YXJnZXRFbCkge1xuICAgICAgLy8gSWYgYSBmaXhlZCBoZWFkZXIgZXhpc3RzLCBvZmZzZXQgZm9yIHRoZSBoZWlnaHRcbiAgICAgIHZhciAkaGVhZGVyID0gJChoZWFkZXJTZWxlY3Rvcik7XG4gICAgICB2YXIgb2Zmc2V0WSA9XG4gICAgICAgICRoZWFkZXIuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnID8gJGhlYWRlci5vdXRlckhlaWdodCgpIDogMDtcbiAgICAgIHZhciBlbmQgPSAkdGFyZ2V0RWwub2Zmc2V0KCkudG9wIC0gb2Zmc2V0WTtcblxuICAgICAgLy8gSWYgc3BlY2lmaWVkLCBzY3JvbGwgc28gdGhhdCB0aGUgZWxlbWVudCBlbmRzIHVwIGluIHRoZSBtaWRkbGUgb2YgdGhlIHZpZXdwb3J0XG4gICAgICBpZiAoJHRhcmdldEVsLmRhdGEoJ3Njcm9sbCcpID09PSAnbWlkJykge1xuICAgICAgICB2YXIgYXZhaWxhYmxlID0gJHdpbi5oZWlnaHQoKSAtIG9mZnNldFk7XG4gICAgICAgIHZhciBlbEhlaWdodCA9ICR0YXJnZXRFbC5vdXRlckhlaWdodCgpO1xuICAgICAgICBpZiAoZWxIZWlnaHQgPCBhdmFpbGFibGUpIHtcbiAgICAgICAgICBlbmQgLT0gTWF0aC5yb3VuZCgoYXZhaWxhYmxlIC0gZWxIZWlnaHQpIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU2Nyb2xsRHVyYXRpb24oJHRhcmdldEVsLCBzdGFydCwgZW5kKSB7XG4gICAgICBpZiAocmVkdWNlZE1vdGlvbkVuYWJsZWQoKSkgcmV0dXJuIDA7XG5cbiAgICAgIHZhciBtdWx0ID0gMTtcbiAgICAgIC8vIENoZWNrIGZvciBjdXN0b20gdGltZSBtdWx0aXBsaWVyIG9uIHRoZSBib2R5IGFuZCB0aGUgc2Nyb2xsIHRhcmdldFxuICAgICAgJGJvZHkuYWRkKCR0YXJnZXRFbCkuZWFjaChmdW5jdGlvbiAoXywgZWwpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBwYXJzZUZsb2F0KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zY3JvbGwtdGltZScpKTtcbiAgICAgICAgaWYgKCFpc05hTih0aW1lKSAmJiB0aW1lID49IDApIHtcbiAgICAgICAgICBtdWx0ID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoNDcyLjE0MyAqIE1hdGgubG9nKE1hdGguYWJzKHN0YXJ0IC0gZW5kKSArIDEyNSkgLSAyMDAwKSAqIG11bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0WShzdGFydCwgZW5kLCBlbGFwc2VkLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gZW5kO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogZWFzZShlbGFwc2VkIC8gZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVhc2UodCkge1xuICAgICAgcmV0dXJuIHQgPCAwLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgIHZhciB7V0ZfQ0xJQ0tfRU1QVFksIFdGX0NMSUNLX1NDUk9MTH0gPSBOU19FVkVOVFM7XG5cbiAgICAgICRkb2Mub24oV0ZfQ0xJQ0tfU0NST0xMLCBsb2NhbEhyZWZTZWxlY3RvciwgdmFsaWRhdGVTY3JvbGwpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFByZXZlbnQgZW1wdHkgaGFzaCBsaW5rcyBmcm9tIHRyaWdnZXJpbmcgc2Nyb2xsLlxuICAgICAgICogTGVnYWN5IGZlYXR1cmUgdG8gcHJlc2VydmU6IHVzZSB0aGUgZGVmYXVsdCBcIiNcIiBsaW5rXG4gICAgICAgKiB0byB0cmlnZ2VyIGFuIGludGVyYWN0aW9uLCBhbmQgZG8gbm90IHdhbnQgdGhlIHBhZ2VcbiAgICAgICAqIHRvIHNjcm9sbCB0byB0aGUgdG9wLlxuICAgICAgICovXG4gICAgICAkZG9jLm9uKFdGX0NMSUNLX0VNUFRZLCBlbXB0eUhyZWZTZWxlY3RvciwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKGZvY3VzU3R5bGVzRWwsIGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IG1vZHVsZVxuICAgIHJldHVybiB7cmVhZHl9O1xuICB9KVxuKTtcbiJdLCJuYW1lcyI6WyJXZWJmbG93IiwicmVxdWlyZSIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiTlNfRVZFTlRTIiwiV0ZfQ0xJQ0tfRU1QVFkiLCJXRl9DTElDS19TQ1JPTEwiLCJsb2MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhpc3RvcnkiLCJpbklmcmFtZSIsIiR3aW4iLCIkZG9jIiwiZG9jdW1lbnQiLCIkYm9keSIsImJvZHkiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm4iLCJzZXRUaW1lb3V0Iiwicm9vdFRhZyIsImVudiIsImhlYWRlclNlbGVjdG9yIiwiZW1wdHlIcmVmU2VsZWN0b3IiLCJsb2NhbEhyZWZTZWxlY3RvciIsInNjcm9sbFRhcmdldE91dGxpbmVDU1MiLCJmb2N1c1N0eWxlc0VsIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJCb29sZWFuIiwiZnJhbWVFbGVtZW50IiwiZSIsInZhbGlkSGFzaCIsImxpbmtzVG9DdXJyZW50UGFnZSIsImxpbmsiLCJ0ZXN0IiwiaGFzaCIsImhvc3QiLCJwYXRobmFtZSIsInJlZHVjZWRNb3Rpb25NZWRpYVF1ZXJ5IiwibWF0Y2hNZWRpYSIsInJlZHVjZWRNb3Rpb25FbmFibGVkIiwiZ2V0QXR0cmlidXRlIiwibWF0Y2hlcyIsInNldEZvY3VzYWJsZSIsIiRlbCIsImFjdGlvbiIsImluaXRpYWxUYWJpbmRleCIsImF0dHIiLCJyZW1vdmVBdHRyIiwidG9nZ2xlQ2xhc3MiLCJ2YWxpZGF0ZVNjcm9sbCIsImV2dCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtb2JpbGUiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInVwZGF0ZUhpc3RvcnkiLCJzY3JvbGwiLCJzZXRGb2N1cyIsImdldCIsImZvY3VzIiwicHJldmVudFNjcm9sbCIsInB1c2hTdGF0ZSIsImNocm9tZSIsInByb3RvY29sIiwib2xkSGFzaCIsInN0YXRlIiwiJHRhcmdldEVsIiwiY2IiLCJzdGFydCIsInNjcm9sbFRvcCIsImVuZCIsImNhbGN1bGF0ZVNjcm9sbEVuZFBvc2l0aW9uIiwiZHVyYXRpb24iLCJjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbiIsImNsb2NrIiwiRGF0ZSIsIm5vdyIsInN0ZXAiLCJlbGFwc2VkIiwiZ2V0WSIsIiRoZWFkZXIiLCJvZmZzZXRZIiwiY3NzIiwib3V0ZXJIZWlnaHQiLCJvZmZzZXQiLCJ0b3AiLCJkYXRhIiwiYXZhaWxhYmxlIiwiaGVpZ2h0IiwiZWxIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJtdWx0IiwiYWRkIiwiZWFjaCIsIl8iLCJlbCIsInRpbWUiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJsb2ciLCJhYnMiLCJlYXNlIiwidCIsInJlYWR5Iiwib24iLCJoZWFkIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOztDQUVDO0FBRUQsSUFBSUEsVUFBVUMsUUFBUTtBQUV0QkQsUUFBUUUsTUFBTSxDQUNaLFVBQ0NDLE9BQU9DLE9BQU8sR0FBRyxTQUFVQyxDQUFDO0lBQzNCOzs7Ozs7S0FNQyxHQUNELElBQUlDLFlBQVk7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxpQkFBaUI7SUFDbkI7SUFFQSxJQUFJQyxNQUFNQyxPQUFPQyxRQUFRO0lBQ3pCLElBQUlDLFVBQVVDLGFBQWEsT0FBT0gsT0FBT0UsT0FBTztJQUNoRCxJQUFJRSxPQUFPVCxFQUFFSztJQUNiLElBQUlLLE9BQU9WLEVBQUVXO0lBQ2IsSUFBSUMsUUFBUVosRUFBRVcsU0FBU0UsSUFBSTtJQUUzQixJQUFJQyxVQUNGVCxPQUFPVSxxQkFBcUIsSUFDNUJWLE9BQU9XLHdCQUF3QixJQUMvQlgsT0FBT1ksMkJBQTJCLElBQ2xDLFNBQVVDLEVBQUU7UUFDVmIsT0FBT2MsVUFBVSxDQUFDRCxJQUFJO0lBQ3hCO0lBQ0YsSUFBSUUsVUFBVXpCLFFBQVEwQixHQUFHLENBQUMsWUFBWSxtQkFBbUI7SUFDekQsSUFBSUMsaUJBQ0YsYUFDQUYsVUFDQSxpQkFDQUEsVUFDQTtJQUVGLElBQUlHLG9CQUFvQjtJQUV4Qjs7Ozs7S0FLQyxHQUNELElBQUlDLG9CQUNGLHVDQUF1Q0Qsb0JBQW9CO0lBRTdELElBQUlFLHlCQUNGO0lBRUYsSUFBSUMsZ0JBQWdCZixTQUFTZ0IsYUFBYSxDQUFDO0lBQzNDRCxjQUFjRSxXQUFXLENBQUNqQixTQUFTa0IsY0FBYyxDQUFD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

}),
695: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals document, window */ /**
 * Webflow: Touch events
 * Supports legacy 'tap' event
 * Adds a 'swipe' event to desktop and mobile
 */ 
var Webflow = __webpack_require__(949);
Webflow.define('touch', module.exports = function($) {
    var api = {};
    var getSelection = window.getSelection;
    // Delegate all legacy 'tap' events to 'click'
    $.event.special.tap = {
        bindType: 'click',
        delegateType: 'click'
    };
    api.init = function(el) {
        el = typeof el === 'string' ? $(el).get(0) : el;
        return el ? new Touch(el) : null;
    };
    function Touch(el) {
        var active = false;
        var useTouch = false;
        var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
        var startX;
        var lastX;
        el.addEventListener('touchstart', start, false);
        el.addEventListener('touchmove', move, false);
        el.addEventListener('touchend', end, false);
        el.addEventListener('touchcancel', cancel, false);
        el.addEventListener('mousedown', start, false);
        el.addEventListener('mousemove', move, false);
        el.addEventListener('mouseup', end, false);
        el.addEventListener('mouseout', cancel, false);
        function start(evt) {
            // We don’t handle multi-touch events yet.
            var touches = evt.touches;
            if (touches && touches.length > 1) {
                return;
            }
            active = true;
            if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
            } else {
                startX = evt.clientX;
            }
            lastX = startX;
        }
        function move(evt) {
            if (!active) {
                return;
            }
            if (useTouch && evt.type === 'mousemove') {
                evt.preventDefault();
                evt.stopPropagation();
                return;
            }
            var touches = evt.touches;
            var x = touches ? touches[0].clientX : evt.clientX;
            var velocityX = x - lastX;
            lastX = x;
            // Allow swipes while pointer is down, but prevent them during text selection
            if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
                triggerEvent('swipe', evt, {
                    direction: velocityX > 0 ? 'right' : 'left'
                });
                cancel();
            }
        }
        function end(evt) {
            if (!active) {
                return;
            }
            active = false;
            if (useTouch && evt.type === 'mouseup') {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
            }
        }
        function cancel() {
            active = false;
        }
        function destroy() {
            el.removeEventListener('touchstart', start, false);
            el.removeEventListener('touchmove', move, false);
            el.removeEventListener('touchend', end, false);
            el.removeEventListener('touchcancel', cancel, false);
            el.removeEventListener('mousedown', start, false);
            el.removeEventListener('mousemove', move, false);
            el.removeEventListener('mouseup', end, false);
            el.removeEventListener('mouseout', cancel, false);
            el = null;
        }
        // Public instance methods
        this.destroy = destroy;
    }
    // Wrap native event to supoprt preventdefault + stopPropagation
    function triggerEvent(type, evt, data) {
        var newEvent = $.Event(type, {
            originalEvent: evt
        });
        $(evt.target).trigger(newEvent, data);
    }
    // Listen for touch events on all nodes by default.
    api.instance = api.init(document);
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctdG91Y2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFscyBkb2N1bWVudCwgd2luZG93ICovXG5cbi8qKlxuICogV2ViZmxvdzogVG91Y2ggZXZlbnRzXG4gKiBTdXBwb3J0cyBsZWdhY3kgJ3RhcCcgZXZlbnRcbiAqIEFkZHMgYSAnc3dpcGUnIGV2ZW50IHRvIGRlc2t0b3AgYW5kIG1vYmlsZVxuICovXG5cbnZhciBXZWJmbG93ID0gcmVxdWlyZSgnLi93ZWJmbG93LWxpYicpO1xuXG5XZWJmbG93LmRlZmluZShcbiAgJ3RvdWNoJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQpIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyIGdldFNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb247XG5cbiAgICAvLyBEZWxlZ2F0ZSBhbGwgbGVnYWN5ICd0YXAnIGV2ZW50cyB0byAnY2xpY2snXG4gICAgJC5ldmVudC5zcGVjaWFsLnRhcCA9IHtiaW5kVHlwZTogJ2NsaWNrJywgZGVsZWdhdGVUeXBlOiAnY2xpY2snfTtcblxuICAgIGFwaS5pbml0ID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyAkKGVsKS5nZXQoMCkgOiBlbDtcbiAgICAgIHJldHVybiBlbCA/IG5ldyBUb3VjaChlbCkgOiBudWxsO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBUb3VjaChlbCkge1xuICAgICAgdmFyIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIHVzZVRvdWNoID0gZmFsc2U7XG4gICAgICB2YXIgdGhyZXNob2xkWCA9IE1hdGgubWluKE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAwLjA0KSwgNDApO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBsYXN0WDtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3ZlLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGVuZCwgZmFsc2UpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBjYW5jZWwsIGZhbHNlKTtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kLCBmYWxzZSk7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbmNlbCwgZmFsc2UpO1xuXG4gICAgICBmdW5jdGlvbiBzdGFydChldnQpIHtcbiAgICAgICAgLy8gV2UgZG9u4oCZdCBoYW5kbGUgbXVsdGktdG91Y2ggZXZlbnRzIHlldC5cbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQudG91Y2hlcztcbiAgICAgICAgaWYgKHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgIHVzZVRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydFggPSB0b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRYID0gZXZ0LmNsaWVudFg7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0WCA9IHN0YXJ0WDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbW92ZShldnQpIHtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlVG91Y2ggJiYgZXZ0LnR5cGUgPT09ICdtb3VzZW1vdmUnKSB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b3VjaGVzID0gZXZ0LnRvdWNoZXM7XG4gICAgICAgIHZhciB4ID0gdG91Y2hlcyA/IHRvdWNoZXNbMF0uY2xpZW50WCA6IGV2dC5jbGllbnRYO1xuICAgICAgICB2YXIgdmVsb2NpdHlYID0geCAtIGxhc3RYO1xuXG4gICAgICAgIGxhc3RYID0geDtcblxuICAgICAgICAvLyBBbGxvdyBzd2lwZXMgd2hpbGUgcG9pbnRlciBpcyBkb3duLCBidXQgcHJldmVudCB0aGVtIGR1cmluZyB0ZXh0IHNlbGVjdGlvblxuICAgICAgICBpZiAoXG4gICAgICAgICAgTWF0aC5hYnModmVsb2NpdHlYKSA+IHRocmVzaG9sZFggJiZcbiAgICAgICAgICBnZXRTZWxlY3Rpb24gJiZcbiAgICAgICAgICBTdHJpbmcoZ2V0U2VsZWN0aW9uKCkpID09PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0cmlnZ2VyRXZlbnQoJ3N3aXBlJywgZXZ0LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246IHZlbG9jaXR5WCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGVuZChldnQpIHtcbiAgICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHVzZVRvdWNoICYmIGV2dC50eXBlID09PSAnbW91c2V1cCcpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdXNlVG91Y2ggPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG1vdmUsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlbmQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBjYW5jZWwsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSwgZmFsc2UpO1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kLCBmYWxzZSk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2FuY2VsLCBmYWxzZSk7XG4gICAgICAgIGVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gUHVibGljIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgIHRoaXMuZGVzdHJveSA9IGRlc3Ryb3k7XG4gICAgfVxuXG4gICAgLy8gV3JhcCBuYXRpdmUgZXZlbnQgdG8gc3Vwb3BydCBwcmV2ZW50ZGVmYXVsdCArIHN0b3BQcm9wYWdhdGlvblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJFdmVudCh0eXBlLCBldnQsIGRhdGEpIHtcbiAgICAgIHZhciBuZXdFdmVudCA9ICQuRXZlbnQodHlwZSwge29yaWdpbmFsRXZlbnQ6IGV2dH0pO1xuICAgICAgJChldnQudGFyZ2V0KS50cmlnZ2VyKG5ld0V2ZW50LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHRvdWNoIGV2ZW50cyBvbiBhbGwgbm9kZXMgYnkgZGVmYXVsdC5cbiAgICBhcGkuaW5zdGFuY2UgPSBhcGkuaW5pdChkb2N1bWVudCk7XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsImFwaSIsImdldFNlbGVjdGlvbiIsIndpbmRvdyIsImV2ZW50Iiwic3BlY2lhbCIsInRhcCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaW5pdCIsImVsIiwiZ2V0IiwiVG91Y2giLCJhY3RpdmUiLCJ1c2VUb3VjaCIsInRocmVzaG9sZFgiLCJNYXRoIiwibWluIiwicm91bmQiLCJpbm5lcldpZHRoIiwic3RhcnRYIiwibGFzdFgiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwiY2FuY2VsIiwiZXZ0IiwidG91Y2hlcyIsImxlbmd0aCIsImNsaWVudFgiLCJ0eXBlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ4IiwidmVsb2NpdHlYIiwiYWJzIiwiU3RyaW5nIiwidHJpZ2dlckV2ZW50IiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkYXRhIiwibmV3RXZlbnQiLCJFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXQiLCJ0cmlnZ2VyIiwiaW5zdGFuY2UiLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCLEdBRTVCOzs7O0NBSUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBRXRCRCxRQUFRRSxNQUFNLENBQ1osU0FDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUM7SUFDM0IsSUFBSUMsTUFBTSxDQUFDO0lBQ1gsSUFBSUMsZUFBZUMsT0FBT0QsWUFBWTtJQUV0Qyw4Q0FBOEM7SUFDOUNGLEVBQUVJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEdBQUc7UUFBQ0MsVUFBVTtRQUFTQyxjQUFjO0lBQU87SUFFL0RQLElBQUlRLElBQUksR0FBRyxTQUFVQyxFQUFFO1FBQ3JCQSxLQUFLLE9BQU9BLE9BQU8sV0FBV1YsRUFBRVUsSUFBSUMsR0FBRyxDQUFDLEtBQUtEO1FBQzdDLE9BQU9BLEtBQUssSUFBSUUsTUFBTUYsTUFBTTtJQUM5QjtJQUVBLFNBQVNFLE1BQU1GLEVBQUU7UUFDZixJQUFJRyxTQUFTO1FBQ2IsSUFBSUMsV0FBVztRQUNmLElBQUlDLGFBQWFDLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsS0FBSyxDQUFDZixPQUFPZ0IsVUFBVSxHQUFHLE9BQU87UUFDaEUsSUFBSUM7UUFDSixJQUFJQztRQUVKWCxHQUFHWSxnQkFBZ0IsQ0FBQyxjQUFjQyxPQUFPO1FBQ3pDYixHQUFHWSxnQkFBZ0IsQ0FBQyxhQUFhRSxNQUFNO1FBQ3ZDZCxHQUFHWSxnQkFBZ0IsQ0FBQyxZQUFZRyxLQUFLO1FBQ3JDZixHQUFHWSxnQkFBZ0IsQ0FBQyxlQUFlSSxRQUFRO1FBQzNDaEIsR0FBR1ksZ0JBQWdCLENBQUMsYUFBYUMsT0FBTztRQUN4Q2IsR0FBR1ksZ0JBQWdCLENBQUMsYUFBYUUsTUFBTTtRQUN2Q2QsR0FBR1ksZ0JBQWdCLENBQUMsV0FBV0csS0FBSztRQUNwQ2YsR0FBR1ksZ0JBQWdCLENBQUMsWUFBWUksUUFBUTtRQUV4QyxTQUFTSCxNQUFNSSxHQUFHO1lBQ2hCLDBDQUEwQztZQUMxQyxJQUFJQyxVQUFVRCxJQUFJQyxPQUFPO1lBQ3pCLElBQUlBLFdBQVdBLFFBQVFDLE1BQU0sR0FBRyxHQUFHO2dCQUNqQztZQUNGO1lBRUFoQixTQUFTO1lBRVQsSUFBSWUsU0FBUztnQkFDWGQsV0FBVztnQkFDWE0sU0FBU1EsT0FBTyxDQUFDLEVBQUUsQ0FBQ0UsT0FBTztZQUM3QixPQUFPO2dCQUNMVixTQUFTTyxJQUFJRyxPQUFPO1lBQ3RCO1lBRUFULFFBQVFEO1FBQ1Y7UUFFQSxTQUFTSSxLQUFLRyxHQUFHO1lBQ2YsSUFBSSxDQUFDZCxRQUFRO2dCQUNYO1lBQ0Y7WUFFQSxJQUFJQyxZQUFZYSxJQUFJSSxJQUFJLEtBQUssYUFBYTtnQkFDeENKLElBQUlLLGNBQWM7Z0JBQ2xCTCxJQUFJTSxlQUFlO2dCQUNuQjtZQUNGO1lBRUEsSUFBSUwsVUFBVUQsSUFBSUMsT0FBTztZQUN6QixJQUFJTSxJQUFJTixVQUFVQSxPQUFPLENBQUMsRUFBRSxDQUFDRSxPQUFPLEdBQUdILElBQUlHLE9BQU87WUFDbEQsSUFBSUssWUFBWUQsSUFBSWI7WUFFcEJBLFFBQVFhO1lBRVIsNkVBQTZFO1lBQzdFLElBQ0VsQixLQUFLb0IsR0FBRyxDQUFDRCxhQUFhcEIsY0FDdEJiLGdCQUNBbUMsT0FBT25DLG9CQUFvQixJQUMzQjtnQkFDQW9DLGFBQWEsU0FBU1gsS0FBSztvQkFDekJZLFdBQVdKLFlBQVksSUFBSSxVQUFVO2dCQUN2QztnQkFDQVQ7WUFDRjtRQUNGO1FBRUEsU0FBU0QsSUFBSUUsR0FBRztZQUNkLElBQUksQ0FBQ2QsUUFBUTtnQkFDWDtZQUNGO1lBQ0FBLFNBQVM7WUFFVCxJQUFJQyxZQUFZYSxJQUFJSSxJQUFJLEtBQUssV0FBVztnQkFDdENKLElBQUlLLGNBQWM7Z0JBQ2xCTCxJQUFJTSxlQUFlO2dCQUNuQm5CLFdBQVc7Z0JBQ1g7WUFDRjtRQUNGO1FBRUEsU0FBU1k7WUFDUGIsU0FBUztRQUNYO1FBRUEsU0FBUzJCO1lBQ1A5QixHQUFHK0IsbUJBQW1CLENBQUMsY0FBY2xCLE9BQU87WUFDNUNiLEdBQUcrQixtQkFBbUIsQ0FBQyxhQUFhakIsTUFBTTtZQUMxQ2QsR0FBRytCLG1CQUFtQixDQUFDLFlBQVloQixLQUFLO1lBQ3hDZixHQUFHK0IsbUJBQW1CLENBQUMsZUFBZWYsUUFBUTtZQUM5Q2hCLEdBQUcrQixtQkFBbUIsQ0FBQyxhQUFhbEIsT0FBTztZQUMzQ2IsR0FBRytCLG1CQUFtQixDQUFDLGFBQWFqQixNQUFNO1lBQzFDZCxHQUFHK0IsbUJBQW1CLENBQUMsV0FBV2hCLEtBQUs7WUFDdkNmLEdBQUcrQixtQkFBbUIsQ0FBQyxZQUFZZixRQUFRO1lBQzNDaEIsS0FBSztRQUNQO1FBRUEsMEJBQTBCO1FBQzFCLElBQUksQ0FBQzhCLE9BQU8sR0FBR0E7SUFDakI7SUFFQSxnRUFBZ0U7SUFDaEUsU0FBU0YsYUFBYVAsSUFBSSxFQUFFSixHQUFHLEVBQUVlLElBQUk7UUFDbkMsSUFBSUMsV0FBVzNDLEVBQUU0QyxLQUFLLENBQUNiLE1BQU07WUFBQ2MsZUFBZWxCO1FBQUc7UUFDaEQzQixFQUFFMkIsSUFBSW1CLE1BQU0sRUFBRUMsT0FBTyxDQUFDSixVQUFVRDtJQUNsQztJQUVBLG1EQUFtRDtJQUNuRHpDLElBQUkrQyxRQUFRLEdBQUcvQyxJQUFJUSxJQUFJLENBQUN3QztJQUV4QixnQkFBZ0I7SUFDaEIsT0FBT2hEO0FBQ1QifQ==

}),
527: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals
  window,
  document,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST,
  WEBFLOW_EXPORT_MODE,
  turnstile
*/ /**
 * Webflow: Forms
 */ 
var Webflow = __webpack_require__(949);
const renderTurnstileCaptcha = (siteKey, formElement, cb, errorCallback // () => void | boolean
)=>{
    const captchaContainer = document.createElement('div');
    formElement.appendChild(captchaContainer);
    // Render the captcha
    turnstile.render(captchaContainer, {
        sitekey: siteKey,
        callback: function(token) {
            cb(token);
        },
        'error-callback': function() {
            errorCallback();
        }
    });
};
Webflow.define('forms', module.exports = function($, _) {
    const TURNSTILE_LOADED_EVENT = 'TURNSTILE_LOADED';
    var api = {};
    var $doc = $(document);
    var $forms;
    var loc = window.location;
    var retro = window.XDomainRequest && !window.atob;
    var namespace = '.w-form';
    var siteId;
    var emailField = /e(-)?mail/i;
    var emailValue = /^\S+@\S+$/;
    var alert = window.alert;
    var inApp = Webflow.env();
    var listening;
    var formUrl;
    var signFileUrl;
    const turnstileSiteKey = $doc.find('[data-turnstile-sitekey]').data('turnstile-sitekey');
    let turnstileScript;
    // MailChimp domains: list-manage.com + mirrors
    var chimpRegex = /list-manage[1-9]?.com/i;
    var disconnected = _.debounce(function() {
        console.warn('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
    }, 100);
    api.ready = api.design = api.preview = function() {
        // start by loading the turnstile script (if the user has the feature enabled)
        loadTurnstileScript();
        // Init forms
        init();
        // Wire document events on published and in preview workflow only once
        if ((!inApp || Webflow.env('preview')) && !listening) {
            addListeners();
        }
    };
    function init() {
        siteId = $('html').attr('data-wf-site');
        formUrl = "https://webflow.com" + '/api/v1/form/' + siteId;
        // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
        if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
            formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
        }
        signFileUrl = `${formUrl}/signFile`;
        $forms = $(namespace + ' form');
        if (!$forms.length) {
            return;
        }
        $forms.each(build);
    }
    function loadTurnstileScript() {
        if (turnstileSiteKey) {
            // Create script tag for turnstile
            turnstileScript = document.createElement('script');
            turnstileScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            document.head.appendChild(turnstileScript);
            turnstileScript.onload = ()=>{
                // after the script loads, emit an event that we listen to below.
                // this enables us to listen for the event on each form on the page and render the turnstile token for each of them.
                $doc.trigger(TURNSTILE_LOADED_EVENT);
            };
        }
    }
    function build(i, el) {
        // Store form state using namespace
        var $el = $(el);
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                form: $el
            });
        } // data.form
        reset(data);
        var wrap = $el.closest('div.w-form');
        data.done = wrap.find('> .w-form-done');
        data.fail = wrap.find('> .w-form-fail');
        data.fileUploads = wrap.find('.w-file-upload');
        data.fileUploads.each(function(j) {
            initFileUpload(j, data);
        });
        if (turnstileSiteKey) {
            // Once all custom fonts are loaded, set the button state to indicate Turnstile is loading
            setButtonToTurnstileLoading(data);
            // Add loading state to the form wrapper
            setFormLoadingState($el, true);
            // this is probably overkill, but if the turnstile script has already loaded and we reached this point then
            // we'll fire the callback below immediately. Otherwise we'll wait for the TURNSTILE_LOADED_EVENT to fire.
            $doc.on(typeof turnstile !== 'undefined' ? 'ready' : TURNSTILE_LOADED_EVENT, function() {
                // render the hidden input with the turnstile token for each form on the page
                renderTurnstileCaptcha(turnstileSiteKey, el, (token)=>{
                    // The turnstile token gets automatically attached to the form as a hidden input field & sent on submission to the server.
                    // Here we are using this `data.turnstileToken` value to decide whether or not the submit button should be enabled.
                    data.turnstileToken = token;
                    // enable the submit button and restore text once turnstile is done rendering
                    reset(data);
                    setFormLoadingState($el, false);
                }, ()=>{
                    // If Turnstile fails, keep the button disabled but restore original state (tooltip, etc.)
                    reset(data);
                    // Ensure button is definitely disabled if reset didn't handle it (e.g., if turnstileSiteKey logic changes)
                    if (data.btn) {
                        data.btn.prop('disabled', true);
                    }
                    setFormLoadingState($el, false);
                });
            });
        }
        // Accessibility fixes
        var formName = data.form.attr('aria-label') || data.form.attr('data-name') || 'Form';
        if (!data.done.attr('aria-label')) {
            data.form.attr('aria-label', formName);
        }
        data.done.attr('tabindex', '-1');
        data.done.attr('role', 'region');
        if (!data.done.attr('aria-label')) {
            data.done.attr('aria-label', formName + ' success');
        }
        data.fail.attr('tabindex', '-1');
        data.fail.attr('role', 'region');
        if (!data.fail.attr('aria-label')) {
            data.fail.attr('aria-label', formName + ' failure');
        }
        var action = data.action = $el.attr('action');
        data.handler = null;
        data.redirect = $el.attr('data-redirect');
        // MailChimp form
        if (chimpRegex.test(action)) {
            data.handler = submitMailChimp;
            return;
        }
        // Custom form action
        if (action) {
            return;
        }
        // Webflow forms for hosting accounts
        if (siteId) {
            data.handler =  true ? exportedSubmitWebflow : 0;
            return;
        }
        // Alert for disconnected Webflow forms
        disconnected();
    }
    function addListeners() {
        listening = true;
        $doc.on('submit', namespace + ' form', function(evt) {
            var data = $.data(this, namespace);
            if (data.handler) {
                data.evt = evt;
                data.handler(data);
            }
        });
        // handle checked ui for custom checkbox and radio button
        const CHECKBOX_CLASS_NAME = '.w-checkbox-input';
        const RADIO_INPUT_CLASS_NAME = '.w-radio-input';
        const CHECKED_CLASS = 'w--redirected-checked';
        const FOCUSED_CLASS = 'w--redirected-focus';
        const FOCUSED_VISIBLE_CLASS = 'w--redirected-focus-visible';
        const focusVisibleSelectors = ':focus-visible, [data-wf-focus-visible]';
        const CUSTOM_CONTROLS = [
            [
                'checkbox',
                CHECKBOX_CLASS_NAME
            ],
            [
                'radio',
                RADIO_INPUT_CLASS_NAME
            ]
        ];
        $doc.on('change', namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ')', (evt)=>{
            $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
        });
        $doc.on('change', namespace + ` form input[type="radio"]`, (evt)=>{
            $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el)=>$(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
            const $target = $(evt.target);
            if (!$target.hasClass('w-radio-input')) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
            }
        });
        CUSTOM_CONTROLS.forEach(([controlType, customControlClassName])=>{
            $doc.on('focus', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
            });
            $doc.on('blur', namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ')', (evt)=>{
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
            });
        });
    }
    // Reset data common to all submit handlers
    function reset(data) {
        var btn = data.btn = data.form.find(':input[type="submit"]');
        data.wait = data.btn.attr('data-wait') || null;
        data.success = false;
        // Determine if the button should be disabled
        const isDisabled = Boolean(turnstileSiteKey && !data.turnstileToken);
        btn.prop('disabled', isDisabled);
        btn.removeClass('w-form-loading');
        data.label && btn.val(data.label);
    }
    // Disable submit button during actual submission
    function disableBtn(data) {
        var btn = data.btn;
        var wait = data.wait; // Use the value from data-wait attribute
        btn.prop('disabled', true);
        // Show wait text and store previous label
        if (wait) {
            data.label = btn.val(); // Store the current label before overwriting
            btn.val(wait);
        }
    }
    // Set button state while Turnstile script is loading
    function setButtonToTurnstileLoading(data) {
        const btn = data.btn || data.form.find(':input[type="submit"]');
        if (!data.btn) data.btn = btn;
        btn.prop('disabled', true);
        btn.addClass('w-form-loading');
    }
    // Add/remove loading class from the form wrapper
    function setFormLoadingState($formEl, isLoading) {
        const $wrapper = $formEl.closest('.w-form');
        if (isLoading) {
            $wrapper.addClass('w-form-loading');
        } else {
            $wrapper.removeClass('w-form-loading');
        }
    }
    // Find form fields, validate, and set value pairs
    function findFields(form, result) {
        var status = null;
        result = result || {};
        // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
        form.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, el) {
            var field = $(el);
            var type = field.attr('type');
            var name = field.attr('data-name') || field.attr('name') || 'Field ' + (i + 1);
            // Encoding the field name will prevent fields that have brackets
            // in their name from being parsed by `bodyParser.urlencoded` as
            // objects which would have unintended consequences like not saving
            // the content of the field.
            // https://webflow.atlassian.net/browse/CMSAUTH-2495
            name = encodeURIComponent(name);
            var value = field.val();
            if (type === 'checkbox') {
                value = field.is(':checked');
            } else if (type === 'radio') {
                // Radio group value already processed
                if (result[name] === null || typeof result[name] === 'string') {
                    return;
                }
                value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
            }
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
            status = status || getStatus(field, type, name, value);
        });
        return status;
    }
    function findFileUploads(form) {
        var result = {};
        form.find(':input[type="file"]').each(function(i, el) {
            var field = $(el);
            var name = field.attr('data-name') || field.attr('name') || 'File ' + (i + 1);
            var value = field.attr('data-value');
            if (typeof value === 'string') {
                value = $.trim(value);
            }
            result[name] = value;
        });
        return result;
    }
    const trackingCookieNameMap = {
        _mkto_trk: 'marketo'
    };
    function collectEnterpriseTrackingCookies() {
        const cookies = document.cookie.split('; ').reduce(function(acc, cookie) {
            const splitCookie = cookie.split('=');
            const name = splitCookie[0];
            if (name in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name];
                const value = splitCookie.slice(1).join('=');
                acc[mappedName] = value;
            }
            return acc;
        }, {});
        return cookies;
    }
    function getStatus(field, type, name, value) {
        var status = null;
        if (type === 'password') {
            status = 'Passwords cannot be submitted.';
        } else if (field.attr('required')) {
            if (!value) {
                status = 'Please fill out the required field: ' + name;
            } else if (emailField.test(field.attr('type'))) {
                if (!emailValue.test(value)) {
                    status = 'Please enter a valid email address for: ' + name;
                }
            }
        } else if (name === 'g-recaptcha-response' && !value) {
            status = "Please confirm you're not a robot.";
        }
        return status;
    }
    function exportedSubmitWebflow(data) {
        preventDefault(data);
        afterSubmit(data);
    }
    // Submit form to MailChimp
    function submitMailChimp(data) {
        reset(data);
        var form = data.form;
        var payload = {};
        // Skip Ajax submission if http/s mismatch, fallback to POST instead
        if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
            form.attr('method', 'post');
            return;
        }
        preventDefault(data);
        // Find & populate all fields
        var status = findFields(form, payload);
        if (status) {
            return alert(status);
        }
        // Disable submit button
        disableBtn(data);
        // Use special format for MailChimp params
        var fullName;
        _.each(payload, function(value, key) {
            if (emailField.test(key)) {
                payload.EMAIL = value;
            }
            if (/^((full[ _-]?)?name)$/i.test(key)) {
                fullName = value;
            }
            if (/^(first[ _-]?name)$/i.test(key)) {
                payload.FNAME = value;
            }
            if (/^(last[ _-]?name)$/i.test(key)) {
                payload.LNAME = value;
            }
        });
        if (fullName && !payload.FNAME) {
            fullName = fullName.split(' ');
            payload.FNAME = fullName[0];
            payload.LNAME = payload.LNAME || fullName[1];
        }
        // Use the (undocumented) MailChimp jsonp api
        var url = data.action.replace('/post?', '/post-json?') + '&c=?';
        // Add special param to prevent bot signups
        var userId = url.indexOf('u=') + 2;
        userId = url.substring(userId, url.indexOf('&', userId));
        var listId = url.indexOf('id=') + 3;
        listId = url.substring(listId, url.indexOf('&', listId));
        payload['b_' + userId + '_' + listId] = '';
        $.ajax({
            url,
            data: payload,
            dataType: 'jsonp'
        }).done(function(resp) {
            data.success = resp.result === 'success' || /already/.test(resp.msg);
            if (!data.success) {
                console.info('MailChimp error: ' + resp.msg);
            }
            afterSubmit(data);
        }).fail(function() {
            afterSubmit(data);
        });
    }
    // Common callback which runs after all Ajax submissions
    function afterSubmit(data) {
        var form = data.form;
        var redirect = data.redirect;
        var success = data.success;
        // Redirect to a success url if defined
        if (success && redirect) {
            Webflow.location(redirect);
            return;
        }
        // Show or hide status divs
        data.done.toggle(success);
        data.fail.toggle(!success);
        if (success) {
            data.done.focus();
        } else {
            data.fail.focus();
        }
        // Hide form on success
        form.toggle(!success);
        // Reset data and enable submit button
        reset(data);
    }
    function preventDefault(data) {
        data.evt && data.evt.preventDefault();
        data.evt = null;
    }
    function initFileUpload(i, form) {
        if (!form.fileUploads || !form.fileUploads[i]) {
            return;
        }
        var file;
        var $el = $(form.fileUploads[i]);
        var $defaultWrap = $el.find('> .w-file-upload-default');
        var $uploadingWrap = $el.find('> .w-file-upload-uploading');
        var $successWrap = $el.find('> .w-file-upload-success');
        var $errorWrap = $el.find('> .w-file-upload-error');
        var $input = $defaultWrap.find('.w-file-upload-input');
        var $label = $defaultWrap.find('.w-file-upload-label');
        var $labelChildren = $label.children();
        var $errorMsgEl = $errorWrap.find('.w-file-upload-error-msg');
        var $fileEl = $successWrap.find('.w-file-upload-file');
        var $removeEl = $successWrap.find('.w-file-remove-link');
        var $fileNameEl = $fileEl.find('.w-file-upload-file-name');
        var sizeErrMsg = $errorMsgEl.attr('data-w-size-error');
        var typeErrMsg = $errorMsgEl.attr('data-w-type-error');
        var genericErrMsg = $errorMsgEl.attr('data-w-generic-error');
        // Accessibility fixes
        // The file upload Input is not stylable by the designer, so we are
        // going to pretend the Label is the input. ¯\_(ツ)_/¯
        if (!inApp) {
            $label.on('click keydown', function(e) {
                if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) {
                    return;
                }
                e.preventDefault();
                $input.click();
            });
        }
        // Both of these are added through CSS
        $label.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true');
        $removeEl.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true');
        if (!inApp) {
            $removeEl.on('click keydown', function(e) {
                if (e.type === 'keydown') {
                    if (e.which !== 13 && e.which !== 32) {
                        return;
                    }
                    e.preventDefault();
                }
                $input.removeAttr('data-value');
                $input.val('');
                $fileNameEl.html('');
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
            });
            $input.on('change', function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                    return;
                }
                // Show uploading
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                // Set filename
                $fileNameEl.text(file.name);
                // Disable submit button
                if (!isUploading()) {
                    disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
            });
            // Setting input width 1px and height equal label
            // This is so the browser required error will show up
            var height = $label.outerHeight();
            $input.height(height);
            $input.width(1);
        } else {
            $input.on('click', function(e) {
                e.preventDefault();
            });
            $label.on('click', function(e) {
                e.preventDefault();
            });
            $labelChildren.on('click', function(e) {
                e.preventDefault();
            });
        }
        function parseError(err) {
            var errorMsg = err.responseJSON && err.responseJSON.msg;
            var userError = genericErrMsg;
            if (typeof errorMsg === 'string' && errorMsg.indexOf('InvalidFileTypeError') === 0) {
                userError = typeErrMsg;
            } else if (typeof errorMsg === 'string' && errorMsg.indexOf('MaxFileSizeError') === 0) {
                userError = sizeErrMsg;
            }
            $errorMsgEl.text(userError);
            $input.removeAttr('data-value');
            $input.val('');
            $uploadingWrap.toggle(false);
            $defaultWrap.toggle(true);
            $errorWrap.toggle(true);
            $errorWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function afterSign(err, data) {
            if (err) {
                return parseError(err);
            }
            var fileName = data.fileName;
            var postData = data.postData;
            var fileId = data.fileId;
            var s3Url = data.s3Url;
            $input.attr('data-value', fileId);
            uploadS3(s3Url, postData, file, fileName, afterUpload);
        }
        function afterUpload(err) {
            if (err) {
                return parseError(err);
            }
            // Show success
            $uploadingWrap.toggle(false);
            $successWrap.css('display', 'inline-block');
            $successWrap.focus();
            form.fileUploads[i].uploading = false;
            if (!isUploading()) {
                reset(form);
            }
        }
        function isUploading() {
            var uploads = form.fileUploads && form.fileUploads.toArray() || [];
            return uploads.some(function(value) {
                return value.uploading;
            });
        }
    }
    function signFile(file, cb) {
        var payload = new URLSearchParams({
            name: file.name,
            size: file.size
        });
        $.ajax({
            type: 'GET',
            url: `${signFileUrl}?${payload}`,
            crossDomain: true
        }).done(function(data) {
            cb(null, data);
        }).fail(function(err) {
            cb(err);
        });
    }
    function uploadS3(url, data, file, fileName, cb) {
        var formData = new FormData();
        for(var k in data){
            formData.append(k, data[k]);
        }
        formData.append('file', file, fileName);
        $.ajax({
            type: 'POST',
            url,
            data: formData,
            processData: false,
            contentType: false
        }).done(function() {
            cb(null);
        }).fail(function(err) {
            cb(err);
        });
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctZm9ybXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsc1xuICB3aW5kb3csXG4gIGRvY3VtZW50LFxuICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gIFdFQkZMT1dfRk9STV9PTERJRV9IT1NULFxuICBXRUJGTE9XX0VYUE9SVF9NT0RFLFxuICB0dXJuc3RpbGVcbiovXG5cbi8qKlxuICogV2ViZmxvdzogRm9ybXNcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xuXG5jb25zdCByZW5kZXJUdXJuc3RpbGVDYXB0Y2hhID0gKFxuICBzaXRlS2V5LCAvLyBzdHJpbmdcbiAgZm9ybUVsZW1lbnQsIC8vIEhUTUxGb3JtRWxlbWVudFxuICBjYiwgLy8gKHRva2VuOiBzdHJpbmcpID0+IHZvaWRcbiAgZXJyb3JDYWxsYmFjayAvLyAoKSA9PiB2b2lkIHwgYm9vbGVhblxuKSA9PiB7XG4gIGNvbnN0IGNhcHRjaGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FwdGNoYUNvbnRhaW5lcik7XG5cbiAgLy8gUmVuZGVyIHRoZSBjYXB0Y2hhXG4gIHR1cm5zdGlsZS5yZW5kZXIoY2FwdGNoYUNvbnRhaW5lciwge1xuICAgIHNpdGVrZXk6IHNpdGVLZXksXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgY2IodG9rZW4pO1xuICAgIH0sXG4gICAgJ2Vycm9yLWNhbGxiYWNrJzogZnVuY3Rpb24gKCkge1xuICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgIH0sXG4gIH0pO1xufTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdmb3JtcycsXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkLCBfKSB7XG4gICAgY29uc3QgVFVSTlNUSUxFX0xPQURFRF9FVkVOVCA9ICdUVVJOU1RJTEVfTE9BREVEJztcbiAgICB2YXIgYXBpID0ge307XG5cbiAgICB2YXIgJGRvYyA9ICQoZG9jdW1lbnQpO1xuICAgIHZhciAkZm9ybXM7XG4gICAgdmFyIGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICB2YXIgcmV0cm8gPSB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgIXdpbmRvdy5hdG9iO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctZm9ybSc7XG4gICAgdmFyIHNpdGVJZDtcbiAgICB2YXIgZW1haWxGaWVsZCA9IC9lKC0pP21haWwvaTtcbiAgICB2YXIgZW1haWxWYWx1ZSA9IC9eXFxTK0BcXFMrJC87XG4gICAgdmFyIGFsZXJ0ID0gd2luZG93LmFsZXJ0O1xuICAgIHZhciBpbkFwcCA9IFdlYmZsb3cuZW52KCk7XG4gICAgdmFyIGxpc3RlbmluZztcblxuICAgIHZhciBmb3JtVXJsO1xuICAgIHZhciBzaWduRmlsZVVybDtcblxuICAgIGNvbnN0IHR1cm5zdGlsZVNpdGVLZXkgPSAkZG9jXG4gICAgICAuZmluZCgnW2RhdGEtdHVybnN0aWxlLXNpdGVrZXldJylcbiAgICAgIC5kYXRhKCd0dXJuc3RpbGUtc2l0ZWtleScpO1xuICAgIGxldCB0dXJuc3RpbGVTY3JpcHQ7XG5cbiAgICAvLyBNYWlsQ2hpbXAgZG9tYWluczogbGlzdC1tYW5hZ2UuY29tICsgbWlycm9yc1xuICAgIHZhciBjaGltcFJlZ2V4ID0gL2xpc3QtbWFuYWdlWzEtOV0/LmNvbS9pO1xuXG4gICAgdmFyIGRpc2Nvbm5lY3RlZCA9IF8uZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnT29wcyEgVGhpcyBwYWdlIGhhcyBpbXByb3Blcmx5IGNvbmZpZ3VyZWQgZm9ybXMuIFBsZWFzZSBjb250YWN0IHlvdXIgd2Vic2l0ZSBhZG1pbmlzdHJhdG9yIHRvIGZpeCB0aGlzIGlzc3VlLidcbiAgICAgICk7XG4gICAgfSwgMTAwKTtcblxuICAgIGFwaS5yZWFkeSA9XG4gICAgICBhcGkuZGVzaWduID1cbiAgICAgIGFwaS5wcmV2aWV3ID1cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHN0YXJ0IGJ5IGxvYWRpbmcgdGhlIHR1cm5zdGlsZSBzY3JpcHQgKGlmIHRoZSB1c2VyIGhhcyB0aGUgZmVhdHVyZSBlbmFibGVkKVxuICAgICAgICAgIGxvYWRUdXJuc3RpbGVTY3JpcHQoKTtcblxuICAgICAgICAgIC8vIEluaXQgZm9ybXNcbiAgICAgICAgICBpbml0KCk7XG5cbiAgICAgICAgICAvLyBXaXJlIGRvY3VtZW50IGV2ZW50cyBvbiBwdWJsaXNoZWQgYW5kIGluIHByZXZpZXcgd29ya2Zsb3cgb25seSBvbmNlXG4gICAgICAgICAgaWYgKCghaW5BcHAgfHwgV2ViZmxvdy5lbnYoJ3ByZXZpZXcnKSkgJiYgIWxpc3RlbmluZykge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHNpdGVJZCA9ICQoJ2h0bWwnKS5hdHRyKCdkYXRhLXdmLXNpdGUnKTtcblxuICAgICAgZm9ybVVybCA9IFdFQkZMT1dfRk9STV9BUElfSE9TVCArICcvYXBpL3YxL2Zvcm0vJyArIHNpdGVJZDtcblxuICAgICAgLy8gV29yayBhcm91bmQgc2FtZS1wcm90b2NvbCBJRSBYRFIgbGltaXRhdGlvbiAtIHdpdGhvdXQgdGhpcyBJRTkgYW5kIGJlbG93IGZvcm1zIHdvbid0IHN1Ym1pdFxuICAgICAgaWYgKHJldHJvICYmIGZvcm1VcmwuaW5kZXhPZihXRUJGTE9XX0ZPUk1fQVBJX0hPU1QpID49IDApIHtcbiAgICAgICAgZm9ybVVybCA9IGZvcm1VcmwucmVwbGFjZShcbiAgICAgICAgICBXRUJGTE9XX0ZPUk1fQVBJX0hPU1QsXG4gICAgICAgICAgV0VCRkxPV19GT1JNX09MRElFX0hPU1RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc2lnbkZpbGVVcmwgPSBgJHtmb3JtVXJsfS9zaWduRmlsZWA7XG5cbiAgICAgICRmb3JtcyA9ICQobmFtZXNwYWNlICsgJyBmb3JtJyk7XG4gICAgICBpZiAoISRmb3Jtcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJGZvcm1zLmVhY2goYnVpbGQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUdXJuc3RpbGVTY3JpcHQoKSB7XG4gICAgICBpZiAodHVybnN0aWxlU2l0ZUtleSkge1xuICAgICAgICAvLyBDcmVhdGUgc2NyaXB0IHRhZyBmb3IgdHVybnN0aWxlXG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0dXJuc3RpbGVTY3JpcHQuc3JjID1cbiAgICAgICAgICAnaHR0cHM6Ly9jaGFsbGVuZ2VzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS92MC9hcGkuanMnO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHR1cm5zdGlsZVNjcmlwdCk7XG4gICAgICAgIHR1cm5zdGlsZVNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNjcmlwdCBsb2FkcywgZW1pdCBhbiBldmVudCB0aGF0IHdlIGxpc3RlbiB0byBiZWxvdy5cbiAgICAgICAgICAvLyB0aGlzIGVuYWJsZXMgdXMgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnQgb24gZWFjaCBmb3JtIG9uIHRoZSBwYWdlIGFuZCByZW5kZXIgdGhlIHR1cm5zdGlsZSB0b2tlbiBmb3IgZWFjaCBvZiB0aGVtLlxuICAgICAgICAgICRkb2MudHJpZ2dlcihUVVJOU1RJTEVfTE9BREVEX0VWRU5UKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBidWlsZChpLCBlbCkge1xuICAgICAgLy8gU3RvcmUgZm9ybSBzdGF0ZSB1c2luZyBuYW1lc3BhY2VcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgIHZhciBkYXRhID0gJC5kYXRhKGVsLCBuYW1lc3BhY2UpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSwge2Zvcm06ICRlbH0pO1xuICAgICAgfSAvLyBkYXRhLmZvcm1cblxuICAgICAgcmVzZXQoZGF0YSk7XG4gICAgICB2YXIgd3JhcCA9ICRlbC5jbG9zZXN0KCdkaXYudy1mb3JtJyk7XG4gICAgICBkYXRhLmRvbmUgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1kb25lJyk7XG4gICAgICBkYXRhLmZhaWwgPSB3cmFwLmZpbmQoJz4gLnctZm9ybS1mYWlsJyk7XG4gICAgICBkYXRhLmZpbGVVcGxvYWRzID0gd3JhcC5maW5kKCcudy1maWxlLXVwbG9hZCcpO1xuXG4gICAgICBkYXRhLmZpbGVVcGxvYWRzLmVhY2goZnVuY3Rpb24gKGopIHtcbiAgICAgICAgaW5pdEZpbGVVcGxvYWQoaiwgZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR1cm5zdGlsZVNpdGVLZXkpIHtcbiAgICAgICAgLy8gT25jZSBhbGwgY3VzdG9tIGZvbnRzIGFyZSBsb2FkZWQsIHNldCB0aGUgYnV0dG9uIHN0YXRlIHRvIGluZGljYXRlIFR1cm5zdGlsZSBpcyBsb2FkaW5nXG4gICAgICAgIHNldEJ1dHRvblRvVHVybnN0aWxlTG9hZGluZyhkYXRhKTtcblxuICAgICAgICAvLyBBZGQgbG9hZGluZyBzdGF0ZSB0byB0aGUgZm9ybSB3cmFwcGVyXG4gICAgICAgIHNldEZvcm1Mb2FkaW5nU3RhdGUoJGVsLCB0cnVlKTtcblxuICAgICAgICAvLyB0aGlzIGlzIHByb2JhYmx5IG92ZXJraWxsLCBidXQgaWYgdGhlIHR1cm5zdGlsZSBzY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkIGFuZCB3ZSByZWFjaGVkIHRoaXMgcG9pbnQgdGhlblxuICAgICAgICAvLyB3ZSdsbCBmaXJlIHRoZSBjYWxsYmFjayBiZWxvdyBpbW1lZGlhdGVseS4gT3RoZXJ3aXNlIHdlJ2xsIHdhaXQgZm9yIHRoZSBUVVJOU1RJTEVfTE9BREVEX0VWRU5UIHRvIGZpcmUuXG4gICAgICAgICRkb2Mub24oXG4gICAgICAgICAgdHlwZW9mIHR1cm5zdGlsZSAhPT0gJ3VuZGVmaW5lZCcgPyAncmVhZHknIDogVFVSTlNUSUxFX0xPQURFRF9FVkVOVCxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIGhpZGRlbiBpbnB1dCB3aXRoIHRoZSB0dXJuc3RpbGUgdG9rZW4gZm9yIGVhY2ggZm9ybSBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgcmVuZGVyVHVybnN0aWxlQ2FwdGNoYShcbiAgICAgICAgICAgICAgdHVybnN0aWxlU2l0ZUtleSxcbiAgICAgICAgICAgICAgZWwsXG4gICAgICAgICAgICAgICh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFRoZSB0dXJuc3RpbGUgdG9rZW4gZ2V0cyBhdXRvbWF0aWNhbGx5IGF0dGFjaGVkIHRvIHRoZSBmb3JtIGFzIGEgaGlkZGVuIGlucHV0IGZpZWxkICYgc2VudCBvbiBzdWJtaXNzaW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgLy8gSGVyZSB3ZSBhcmUgdXNpbmcgdGhpcyBgZGF0YS50dXJuc3RpbGVUb2tlbmAgdmFsdWUgdG8gZGVjaWRlIHdoZXRoZXIgb3Igbm90IHRoZSBzdWJtaXQgYnV0dG9uIHNob3VsZCBiZSBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGRhdGEudHVybnN0aWxlVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAvLyBlbmFibGUgdGhlIHN1Ym1pdCBidXR0b24gYW5kIHJlc3RvcmUgdGV4dCBvbmNlIHR1cm5zdGlsZSBpcyBkb25lIHJlbmRlcmluZ1xuICAgICAgICAgICAgICAgIHJlc2V0KGRhdGEpO1xuICAgICAgICAgICAgICAgIHNldEZvcm1Mb2FkaW5nU3RhdGUoJGVsLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBUdXJuc3RpbGUgZmFpbHMsIGtlZXAgdGhlIGJ1dHRvbiBkaXNhYmxlZCBidXQgcmVzdG9yZSBvcmlnaW5hbCBzdGF0ZSAodG9vbHRpcCwgZXRjLilcbiAgICAgICAgICAgICAgICByZXNldChkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgYnV0dG9uIGlzIGRlZmluaXRlbHkgZGlzYWJsZWQgaWYgcmVzZXQgZGlkbid0IGhhbmRsZSBpdCAoZS5nLiwgaWYgdHVybnN0aWxlU2l0ZUtleSBsb2dpYyBjaGFuZ2VzKVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmJ0bikge1xuICAgICAgICAgICAgICAgICAgZGF0YS5idG4ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0Rm9ybUxvYWRpbmdTdGF0ZSgkZWwsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgZml4ZXNcbiAgICAgIHZhciBmb3JtTmFtZSA9XG4gICAgICAgIGRhdGEuZm9ybS5hdHRyKCdhcmlhLWxhYmVsJykgfHwgZGF0YS5mb3JtLmF0dHIoJ2RhdGEtbmFtZScpIHx8ICdGb3JtJztcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmZvcm0uYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5kb25lLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICBkYXRhLmRvbmUuYXR0cigncm9sZScsICdyZWdpb24nKTtcbiAgICAgIGlmICghZGF0YS5kb25lLmF0dHIoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICBkYXRhLmRvbmUuYXR0cignYXJpYS1sYWJlbCcsIGZvcm1OYW1lICsgJyBzdWNjZXNzJyk7XG4gICAgICB9XG4gICAgICBkYXRhLmZhaWwuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIGRhdGEuZmFpbC5hdHRyKCdyb2xlJywgJ3JlZ2lvbicpO1xuICAgICAgaWYgKCFkYXRhLmZhaWwuYXR0cignYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgIGRhdGEuZmFpbC5hdHRyKCdhcmlhLWxhYmVsJywgZm9ybU5hbWUgKyAnIGZhaWx1cmUnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjdGlvbiA9IChkYXRhLmFjdGlvbiA9ICRlbC5hdHRyKCdhY3Rpb24nKSk7XG4gICAgICBkYXRhLmhhbmRsZXIgPSBudWxsO1xuICAgICAgZGF0YS5yZWRpcmVjdCA9ICRlbC5hdHRyKCdkYXRhLXJlZGlyZWN0Jyk7XG5cbiAgICAgIC8vIE1haWxDaGltcCBmb3JtXG4gICAgICBpZiAoY2hpbXBSZWdleC50ZXN0KGFjdGlvbikpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gc3VibWl0TWFpbENoaW1wO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEN1c3RvbSBmb3JtIGFjdGlvblxuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFdlYmZsb3cgZm9ybXMgZm9yIGhvc3RpbmcgYWNjb3VudHNcbiAgICAgIGlmIChzaXRlSWQpIHtcbiAgICAgICAgZGF0YS5oYW5kbGVyID0gV0VCRkxPV19FWFBPUlRfTU9ERVxuICAgICAgICAgID8gZXhwb3J0ZWRTdWJtaXRXZWJmbG93XG4gICAgICAgICAgOiAoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBob3N0ZWRTdWJtaXRIYW5kbGVyID1cbiAgICAgICAgICAgICAgICByZXF1aXJlKCcuL3dlYmZsb3ctZm9ybXMtaG9zdGVkJykuZGVmYXVsdDtcbiAgICAgICAgICAgICAgcmV0dXJuIGhvc3RlZFN1Ym1pdEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgcmVzZXQsXG4gICAgICAgICAgICAgICAgbG9jLFxuICAgICAgICAgICAgICAgIFdlYmZsb3csXG4gICAgICAgICAgICAgICAgY29sbGVjdEVudGVycHJpc2VUcmFja2luZ0Nvb2tpZXMsXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQsXG4gICAgICAgICAgICAgICAgZmluZEZpZWxkcyxcbiAgICAgICAgICAgICAgICBhbGVydCxcbiAgICAgICAgICAgICAgICBmaW5kRmlsZVVwbG9hZHMsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUJ0bixcbiAgICAgICAgICAgICAgICBzaXRlSWQsXG4gICAgICAgICAgICAgICAgYWZ0ZXJTdWJtaXQsXG4gICAgICAgICAgICAgICAgJCxcbiAgICAgICAgICAgICAgICBmb3JtVXJsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFsZXJ0IGZvciBkaXNjb25uZWN0ZWQgV2ViZmxvdyBmb3Jtc1xuICAgICAgZGlzY29ubmVjdGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgbGlzdGVuaW5nID0gdHJ1ZTtcblxuICAgICAgJGRvYy5vbignc3VibWl0JywgbmFtZXNwYWNlICsgJyBmb3JtJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZGF0YSA9ICQuZGF0YSh0aGlzLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoZGF0YS5oYW5kbGVyKSB7XG4gICAgICAgICAgZGF0YS5ldnQgPSBldnQ7XG4gICAgICAgICAgZGF0YS5oYW5kbGVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gaGFuZGxlIGNoZWNrZWQgdWkgZm9yIGN1c3RvbSBjaGVja2JveCBhbmQgcmFkaW8gYnV0dG9uXG4gICAgICBjb25zdCBDSEVDS0JPWF9DTEFTU19OQU1FID0gJy53LWNoZWNrYm94LWlucHV0JztcbiAgICAgIGNvbnN0IFJBRElPX0lOUFVUX0NMQVNTX05BTUUgPSAnLnctcmFkaW8taW5wdXQnO1xuICAgICAgY29uc3QgQ0hFQ0tFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWNoZWNrZWQnO1xuICAgICAgY29uc3QgRk9DVVNFRF9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzJztcbiAgICAgIGNvbnN0IEZPQ1VTRURfVklTSUJMRV9DTEFTUyA9ICd3LS1yZWRpcmVjdGVkLWZvY3VzLXZpc2libGUnO1xuICAgICAgY29uc3QgZm9jdXNWaXNpYmxlU2VsZWN0b3JzID0gJzpmb2N1cy12aXNpYmxlLCBbZGF0YS13Zi1mb2N1cy12aXNpYmxlXSc7XG5cbiAgICAgIGNvbnN0IENVU1RPTV9DT05UUk9MUyA9IFtcbiAgICAgICAgWydjaGVja2JveCcsIENIRUNLQk9YX0NMQVNTX05BTUVdLFxuICAgICAgICBbJ3JhZGlvJywgUkFESU9fSU5QVVRfQ0xBU1NfTkFNRV0sXG4gICAgICBdO1xuXG4gICAgICAkZG9jLm9uKFxuICAgICAgICAnY2hhbmdlJyxcbiAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICBgIGZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChgICtcbiAgICAgICAgICBDSEVDS0JPWF9DTEFTU19OQU1FICtcbiAgICAgICAgICAnKScsXG4gICAgICAgIChldnQpID0+IHtcbiAgICAgICAgICAkKGV2dC50YXJnZXQpXG4gICAgICAgICAgICAuc2libGluZ3MoQ0hFQ0tCT1hfQ0xBU1NfTkFNRSlcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhDSEVDS0VEX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgJGRvYy5vbignY2hhbmdlJywgbmFtZXNwYWNlICsgYCBmb3JtIGlucHV0W3R5cGU9XCJyYWRpb1wiXWAsIChldnQpID0+IHtcbiAgICAgICAgJChgaW5wdXRbbmFtZT1cIiR7ZXZ0LnRhcmdldC5uYW1lfVwiXTpub3QoJHtDSEVDS0JPWF9DTEFTU19OQU1FfSlgKS5tYXAoXG4gICAgICAgICAgKGksIGVsKSA9PlxuICAgICAgICAgICAgJChlbCkuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkucmVtb3ZlQ2xhc3MoQ0hFQ0tFRF9DTEFTUylcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldnQudGFyZ2V0KTtcblxuICAgICAgICBpZiAoISR0YXJnZXQuaGFzQ2xhc3MoJ3ctcmFkaW8taW5wdXQnKSkge1xuICAgICAgICAgICR0YXJnZXQuc2libGluZ3MoUkFESU9fSU5QVVRfQ0xBU1NfTkFNRSkuYWRkQ2xhc3MoQ0hFQ0tFRF9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBDVVNUT01fQ09OVFJPTFMuZm9yRWFjaCgoW2NvbnRyb2xUeXBlLCBjdXN0b21Db250cm9sQ2xhc3NOYW1lXSkgPT4ge1xuICAgICAgICAkZG9jLm9uKFxuICAgICAgICAgICdmb2N1cycsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLmFkZENsYXNzKEZPQ1VTRURfQ0xBU1MpO1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuZmlsdGVyKGZvY3VzVmlzaWJsZVNlbGVjdG9ycylcbiAgICAgICAgICAgICAgLnNpYmxpbmdzKGN1c3RvbUNvbnRyb2xDbGFzc05hbWUpXG4gICAgICAgICAgICAgIC5hZGRDbGFzcyhGT0NVU0VEX1ZJU0lCTEVfQ0xBU1MpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgJGRvYy5vbihcbiAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgbmFtZXNwYWNlICtcbiAgICAgICAgICAgIGAgZm9ybSBpbnB1dFt0eXBlPVwiJHtjb250cm9sVHlwZX1cIl06bm90KGAgK1xuICAgICAgICAgICAgY3VzdG9tQ29udHJvbENsYXNzTmFtZSArXG4gICAgICAgICAgICAnKScsXG4gICAgICAgICAgKGV2dCkgPT4ge1xuICAgICAgICAgICAgJChldnQudGFyZ2V0KVxuICAgICAgICAgICAgICAuc2libGluZ3MoY3VzdG9tQ29udHJvbENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke0ZPQ1VTRURfQ0xBU1N9ICR7Rk9DVVNFRF9WSVNJQkxFX0NMQVNTfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGRhdGEgY29tbW9uIHRvIGFsbCBzdWJtaXQgaGFuZGxlcnNcbiAgICBmdW5jdGlvbiByZXNldChkYXRhKSB7XG4gICAgICB2YXIgYnRuID0gKGRhdGEuYnRuID0gZGF0YS5mb3JtLmZpbmQoJzppbnB1dFt0eXBlPVwic3VibWl0XCJdJykpO1xuICAgICAgZGF0YS53YWl0ID0gZGF0YS5idG4uYXR0cignZGF0YS13YWl0JykgfHwgbnVsbDtcbiAgICAgIGRhdGEuc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWRcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBCb29sZWFuKHR1cm5zdGlsZVNpdGVLZXkgJiYgIWRhdGEudHVybnN0aWxlVG9rZW4pO1xuICAgICAgYnRuLnByb3AoJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gICAgICBidG4ucmVtb3ZlQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICBkYXRhLmxhYmVsICYmIGJ0bi52YWwoZGF0YS5sYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uIGR1cmluZyBhY3R1YWwgc3VibWlzc2lvblxuICAgIGZ1bmN0aW9uIGRpc2FibGVCdG4oZGF0YSkge1xuICAgICAgdmFyIGJ0biA9IGRhdGEuYnRuO1xuICAgICAgdmFyIHdhaXQgPSBkYXRhLndhaXQ7IC8vIFVzZSB0aGUgdmFsdWUgZnJvbSBkYXRhLXdhaXQgYXR0cmlidXRlXG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAvLyBTaG93IHdhaXQgdGV4dCBhbmQgc3RvcmUgcHJldmlvdXMgbGFiZWxcbiAgICAgIGlmICh3YWl0KSB7XG4gICAgICAgIGRhdGEubGFiZWwgPSBidG4udmFsKCk7IC8vIFN0b3JlIHRoZSBjdXJyZW50IGxhYmVsIGJlZm9yZSBvdmVyd3JpdGluZ1xuICAgICAgICBidG4udmFsKHdhaXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBidXR0b24gc3RhdGUgd2hpbGUgVHVybnN0aWxlIHNjcmlwdCBpcyBsb2FkaW5nXG4gICAgZnVuY3Rpb24gc2V0QnV0dG9uVG9UdXJuc3RpbGVMb2FkaW5nKGRhdGEpIHtcbiAgICAgIGNvbnN0IGJ0biA9IGRhdGEuYnRuIHx8IGRhdGEuZm9ybS5maW5kKCc6aW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgaWYgKCFkYXRhLmJ0bikgZGF0YS5idG4gPSBidG47XG5cbiAgICAgIGJ0bi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgYnRuLmFkZENsYXNzKCd3LWZvcm0tbG9hZGluZycpO1xuICAgIH1cblxuICAgIC8vIEFkZC9yZW1vdmUgbG9hZGluZyBjbGFzcyBmcm9tIHRoZSBmb3JtIHdyYXBwZXJcbiAgICBmdW5jdGlvbiBzZXRGb3JtTG9hZGluZ1N0YXRlKCRmb3JtRWwsIGlzTG9hZGluZykge1xuICAgICAgY29uc3QgJHdyYXBwZXIgPSAkZm9ybUVsLmNsb3Nlc3QoJy53LWZvcm0nKTtcbiAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgJHdyYXBwZXIuYWRkQ2xhc3MoJ3ctZm9ybS1sb2FkaW5nJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkd3JhcHBlci5yZW1vdmVDbGFzcygndy1mb3JtLWxvYWRpbmcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaW5kIGZvcm0gZmllbGRzLCB2YWxpZGF0ZSwgYW5kIHNldCB2YWx1ZSBwYWlyc1xuICAgIGZ1bmN0aW9uIGZpbmRGaWVsZHMoZm9ybSwgcmVzdWx0KSB7XG4gICAgICB2YXIgc3RhdHVzID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCB7fTtcblxuICAgICAgLy8gVGhlIFwiOmlucHV0XCIgc2VsZWN0b3IgaXMgYSBqUXVlcnkgc2hvcnRjdXQgdG8gc2VsZWN0IGFsbCBpbnB1dHMsIHNlbGVjdHMsIHRleHRhcmVhc1xuICAgICAgZm9ybVxuICAgICAgICAuZmluZChcbiAgICAgICAgICAnOmlucHV0Om5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KFt0eXBlPVwiZmlsZVwiXSk6bm90KFt0eXBlPVwiYnV0dG9uXCJdKSdcbiAgICAgICAgKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSAkKGVsKTtcbiAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkLmF0dHIoJ3R5cGUnKTtcbiAgICAgICAgICB2YXIgbmFtZSA9XG4gICAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpZWxkICcgKyAoaSArIDEpO1xuICAgICAgICAgIC8vIEVuY29kaW5nIHRoZSBmaWVsZCBuYW1lIHdpbGwgcHJldmVudCBmaWVsZHMgdGhhdCBoYXZlIGJyYWNrZXRzXG4gICAgICAgICAgLy8gaW4gdGhlaXIgbmFtZSBmcm9tIGJlaW5nIHBhcnNlZCBieSBgYm9keVBhcnNlci51cmxlbmNvZGVkYCBhc1xuICAgICAgICAgIC8vIG9iamVjdHMgd2hpY2ggd291bGQgaGF2ZSB1bmludGVuZGVkIGNvbnNlcXVlbmNlcyBsaWtlIG5vdCBzYXZpbmdcbiAgICAgICAgICAvLyB0aGUgY29udGVudCBvZiB0aGUgZmllbGQuXG4gICAgICAgICAgLy8gaHR0cHM6Ly93ZWJmbG93LmF0bGFzc2lhbi5uZXQvYnJvd3NlL0NNU0FVVEgtMjQ5NVxuICAgICAgICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmllbGQudmFsKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBmaWVsZC5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIC8vIFJhZGlvIGdyb3VwIHZhbHVlIGFscmVhZHkgcHJvY2Vzc2VkXG4gICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHRbbmFtZV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUgPVxuICAgICAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W25hbWU9XCInICsgZmllbGQuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJylcbiAgICAgICAgICAgICAgICAudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSAkLnRyaW0odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBzdGF0dXMgPSBzdGF0dXMgfHwgZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRGaWxlVXBsb2Fkcyhmb3JtKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgIGZvcm0uZmluZCgnOmlucHV0W3R5cGU9XCJmaWxlXCJdJykuZWFjaChmdW5jdGlvbiAoaSwgZWwpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gJChlbCk7XG4gICAgICAgIHZhciBuYW1lID1cbiAgICAgICAgICBmaWVsZC5hdHRyKCdkYXRhLW5hbWUnKSB8fCBmaWVsZC5hdHRyKCduYW1lJykgfHwgJ0ZpbGUgJyArIChpICsgMSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZpZWxkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YWx1ZSA9ICQudHJpbSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFja2luZ0Nvb2tpZU5hbWVNYXAgPSB7XG4gICAgICBfbWt0b190cms6ICdtYXJrZXRvJyxcbiAgICAgIC8vIF9faHN0YzogJ2h1YnNwb3QnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0RW50ZXJwcmlzZVRyYWNraW5nQ29va2llcygpIHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykucmVkdWNlKGZ1bmN0aW9uIChcbiAgICAgICAgYWNjLFxuICAgICAgICBjb29raWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBzcGxpdENvb2tpZSA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgICBjb25zdCBuYW1lID0gc3BsaXRDb29raWVbMF07XG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNraW5nQ29va2llTmFtZU1hcCkge1xuICAgICAgICAgIGNvbnN0IG1hcHBlZE5hbWUgPSB0cmFja2luZ0Nvb2tpZU5hbWVNYXBbbmFtZV07XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGxpdENvb2tpZS5zbGljZSgxKS5qb2luKCc9Jyk7XG4gICAgICAgICAgYWNjW21hcHBlZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgcmV0dXJuIGNvb2tpZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKGZpZWxkLCB0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXR1cyA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgIHN0YXR1cyA9ICdQYXNzd29yZHMgY2Fubm90IGJlIHN1Ym1pdHRlZC4nO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZC5hdHRyKCdyZXF1aXJlZCcpKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnUGxlYXNlIGZpbGwgb3V0IHRoZSByZXF1aXJlZCBmaWVsZDogJyArIG5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZW1haWxGaWVsZC50ZXN0KGZpZWxkLmF0dHIoJ3R5cGUnKSkpIHtcbiAgICAgICAgICBpZiAoIWVtYWlsVmFsdWUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzIGZvcjogJyArIG5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdnLXJlY2FwdGNoYS1yZXNwb25zZScgJiYgIXZhbHVlKSB7XG4gICAgICAgIHN0YXR1cyA9IFwiUGxlYXNlIGNvbmZpcm0geW91J3JlIG5vdCBhIHJvYm90LlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydGVkU3VibWl0V2ViZmxvdyhkYXRhKSB7XG4gICAgICBwcmV2ZW50RGVmYXVsdChkYXRhKTtcbiAgICAgIGFmdGVyU3VibWl0KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFN1Ym1pdCBmb3JtIHRvIE1haWxDaGltcFxuICAgIGZ1bmN0aW9uIHN1Ym1pdE1haWxDaGltcChkYXRhKSB7XG4gICAgICByZXNldChkYXRhKTtcblxuICAgICAgdmFyIGZvcm0gPSBkYXRhLmZvcm07XG4gICAgICB2YXIgcGF5bG9hZCA9IHt9O1xuXG4gICAgICAvLyBTa2lwIEFqYXggc3VibWlzc2lvbiBpZiBodHRwL3MgbWlzbWF0Y2gsIGZhbGxiYWNrIHRvIFBPU1QgaW5zdGVhZFxuICAgICAgaWYgKC9eaHR0cHMvLnRlc3QobG9jLmhyZWYpICYmICEvXmh0dHBzLy50ZXN0KGRhdGEuYWN0aW9uKSkge1xuICAgICAgICBmb3JtLmF0dHIoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcHJldmVudERlZmF1bHQoZGF0YSk7XG5cbiAgICAgIC8vIEZpbmQgJiBwb3B1bGF0ZSBhbGwgZmllbGRzXG4gICAgICB2YXIgc3RhdHVzID0gZmluZEZpZWxkcyhmb3JtLCBwYXlsb2FkKTtcbiAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHN0YXR1cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvblxuICAgICAgZGlzYWJsZUJ0bihkYXRhKTtcblxuICAgICAgLy8gVXNlIHNwZWNpYWwgZm9ybWF0IGZvciBNYWlsQ2hpbXAgcGFyYW1zXG4gICAgICB2YXIgZnVsbE5hbWU7XG4gICAgICBfLmVhY2gocGF5bG9hZCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGVtYWlsRmllbGQudGVzdChrZXkpKSB7XG4gICAgICAgICAgcGF5bG9hZC5FTUFJTCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXigoZnVsbFsgXy1dPyk/bmFtZSkkL2kudGVzdChrZXkpKSB7XG4gICAgICAgICAgZnVsbE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoL14oZmlyc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkZOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eKGxhc3RbIF8tXT9uYW1lKSQvaS50ZXN0KGtleSkpIHtcbiAgICAgICAgICBwYXlsb2FkLkxOQU1FID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZnVsbE5hbWUgJiYgIXBheWxvYWQuRk5BTUUpIHtcbiAgICAgICAgZnVsbE5hbWUgPSBmdWxsTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBwYXlsb2FkLkZOQU1FID0gZnVsbE5hbWVbMF07XG4gICAgICAgIHBheWxvYWQuTE5BTUUgPSBwYXlsb2FkLkxOQU1FIHx8IGZ1bGxOYW1lWzFdO1xuICAgICAgfVxuXG4gICAgICAvLyBVc2UgdGhlICh1bmRvY3VtZW50ZWQpIE1haWxDaGltcCBqc29ucCBhcGlcbiAgICAgIHZhciB1cmwgPSBkYXRhLmFjdGlvbi5yZXBsYWNlKCcvcG9zdD8nLCAnL3Bvc3QtanNvbj8nKSArICcmYz0/JztcbiAgICAgIC8vIEFkZCBzcGVjaWFsIHBhcmFtIHRvIHByZXZlbnQgYm90IHNpZ251cHNcbiAgICAgIHZhciB1c2VySWQgPSB1cmwuaW5kZXhPZigndT0nKSArIDI7XG4gICAgICB1c2VySWQgPSB1cmwuc3Vic3RyaW5nKHVzZXJJZCwgdXJsLmluZGV4T2YoJyYnLCB1c2VySWQpKTtcbiAgICAgIHZhciBsaXN0SWQgPSB1cmwuaW5kZXhPZignaWQ9JykgKyAzO1xuICAgICAgbGlzdElkID0gdXJsLnN1YnN0cmluZyhsaXN0SWQsIHVybC5pbmRleE9mKCcmJywgbGlzdElkKSk7XG4gICAgICBwYXlsb2FkWydiXycgKyB1c2VySWQgKyAnXycgKyBsaXN0SWRdID0gJyc7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29ucCcsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgIGRhdGEuc3VjY2VzcyA9IHJlc3AucmVzdWx0ID09PSAnc3VjY2VzcycgfHwgL2FscmVhZHkvLnRlc3QocmVzcC5tc2cpO1xuICAgICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ01haWxDaGltcCBlcnJvcjogJyArIHJlc3AubXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWZ0ZXJTdWJtaXQoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhZnRlclN1Ym1pdChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ29tbW9uIGNhbGxiYWNrIHdoaWNoIHJ1bnMgYWZ0ZXIgYWxsIEFqYXggc3VibWlzc2lvbnNcbiAgICBmdW5jdGlvbiBhZnRlclN1Ym1pdChkYXRhKSB7XG4gICAgICB2YXIgZm9ybSA9IGRhdGEuZm9ybTtcbiAgICAgIHZhciByZWRpcmVjdCA9IGRhdGEucmVkaXJlY3Q7XG4gICAgICB2YXIgc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcblxuICAgICAgLy8gUmVkaXJlY3QgdG8gYSBzdWNjZXNzIHVybCBpZiBkZWZpbmVkXG4gICAgICBpZiAoc3VjY2VzcyAmJiByZWRpcmVjdCkge1xuICAgICAgICBXZWJmbG93LmxvY2F0aW9uKHJlZGlyZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IG9yIGhpZGUgc3RhdHVzIGRpdnNcbiAgICAgIGRhdGEuZG9uZS50b2dnbGUoc3VjY2Vzcyk7XG4gICAgICBkYXRhLmZhaWwudG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgZGF0YS5kb25lLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLmZhaWwuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSBmb3JtIG9uIHN1Y2Nlc3NcbiAgICAgIGZvcm0udG9nZ2xlKCFzdWNjZXNzKTtcblxuICAgICAgLy8gUmVzZXQgZGF0YSBhbmQgZW5hYmxlIHN1Ym1pdCBidXR0b25cbiAgICAgIHJlc2V0KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGRhdGEpIHtcbiAgICAgIGRhdGEuZXZ0ICYmIGRhdGEuZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkYXRhLmV2dCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEZpbGVVcGxvYWQoaSwgZm9ybSkge1xuICAgICAgaWYgKCFmb3JtLmZpbGVVcGxvYWRzIHx8ICFmb3JtLmZpbGVVcGxvYWRzW2ldKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGU7XG4gICAgICB2YXIgJGVsID0gJChmb3JtLmZpbGVVcGxvYWRzW2ldKTtcbiAgICAgIHZhciAkZGVmYXVsdFdyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1kZWZhdWx0Jyk7XG4gICAgICB2YXIgJHVwbG9hZGluZ1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC11cGxvYWRpbmcnKTtcbiAgICAgIHZhciAkc3VjY2Vzc1dyYXAgPSAkZWwuZmluZCgnPiAudy1maWxlLXVwbG9hZC1zdWNjZXNzJyk7XG4gICAgICB2YXIgJGVycm9yV3JhcCA9ICRlbC5maW5kKCc+IC53LWZpbGUtdXBsb2FkLWVycm9yJyk7XG4gICAgICB2YXIgJGlucHV0ID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWlucHV0Jyk7XG4gICAgICB2YXIgJGxhYmVsID0gJGRlZmF1bHRXcmFwLmZpbmQoJy53LWZpbGUtdXBsb2FkLWxhYmVsJyk7XG4gICAgICB2YXIgJGxhYmVsQ2hpbGRyZW4gPSAkbGFiZWwuY2hpbGRyZW4oKTtcbiAgICAgIHZhciAkZXJyb3JNc2dFbCA9ICRlcnJvcldyYXAuZmluZCgnLnctZmlsZS11cGxvYWQtZXJyb3ItbXNnJyk7XG4gICAgICB2YXIgJGZpbGVFbCA9ICRzdWNjZXNzV3JhcC5maW5kKCcudy1maWxlLXVwbG9hZC1maWxlJyk7XG4gICAgICB2YXIgJHJlbW92ZUVsID0gJHN1Y2Nlc3NXcmFwLmZpbmQoJy53LWZpbGUtcmVtb3ZlLWxpbmsnKTtcbiAgICAgIHZhciAkZmlsZU5hbWVFbCA9ICRmaWxlRWwuZmluZCgnLnctZmlsZS11cGxvYWQtZmlsZS1uYW1lJyk7XG5cbiAgICAgIHZhciBzaXplRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXNpemUtZXJyb3InKTtcbiAgICAgIHZhciB0eXBlRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LXR5cGUtZXJyb3InKTtcbiAgICAgIHZhciBnZW5lcmljRXJyTXNnID0gJGVycm9yTXNnRWwuYXR0cignZGF0YS13LWdlbmVyaWMtZXJyb3InKTtcblxuICAgICAgLy8gQWNjZXNzaWJpbGl0eSBmaXhlc1xuICAgICAgLy8gVGhlIGZpbGUgdXBsb2FkIElucHV0IGlzIG5vdCBzdHlsYWJsZSBieSB0aGUgZGVzaWduZXIsIHNvIHdlIGFyZVxuICAgICAgLy8gZ29pbmcgdG8gcHJldGVuZCB0aGUgTGFiZWwgaXMgdGhlIGlucHV0LiDCr1xcXyjjg4QpXy/Cr1xuICAgICAgaWYgKCFpbkFwcCkge1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrIGtleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXlkb3duJyAmJiBlLndoaWNoICE9PSAxMyAmJiBlLndoaWNoICE9PSAzMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkaW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJvdGggb2YgdGhlc2UgYXJlIGFkZGVkIHRocm91Z2ggQ1NTXG4gICAgICAkbGFiZWwuZmluZCgnLnctaWNvbi1maWxlLXVwbG9hZC1pY29uJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgJHJlbW92ZUVsLmZpbmQoJy53LWljb24tZmlsZS11cGxvYWQtcmVtb3ZlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICBpZiAoIWluQXBwKSB7XG4gICAgICAgICRyZW1vdmVFbC5vbignY2xpY2sga2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICBpZiAoZS53aGljaCAhPT0gMTMgJiYgZS53aGljaCAhPT0gMzIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgICAkaW5wdXQudmFsKCcnKTtcbiAgICAgICAgICAkZmlsZU5hbWVFbC5odG1sKCcnKTtcbiAgICAgICAgICAkZGVmYXVsdFdyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAgICRzdWNjZXNzV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICRsYWJlbC5mb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkaW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZmlsZSA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNob3cgdXBsb2FkaW5nXG4gICAgICAgICAgJGRlZmF1bHRXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICAgJGVycm9yV3JhcC50b2dnbGUoZmFsc2UpO1xuICAgICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICAkdXBsb2FkaW5nV3JhcC5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gU2V0IGZpbGVuYW1lXG4gICAgICAgICAgJGZpbGVOYW1lRWwudGV4dChmaWxlLm5hbWUpO1xuXG4gICAgICAgICAgLy8gRGlzYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgICBkaXNhYmxlQnRuKGZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtLmZpbGVVcGxvYWRzW2ldLnVwbG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICBzaWduRmlsZShmaWxlLCBhZnRlclNpZ24pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXR0aW5nIGlucHV0IHdpZHRoIDFweCBhbmQgaGVpZ2h0IGVxdWFsIGxhYmVsXG4gICAgICAgIC8vIFRoaXMgaXMgc28gdGhlIGJyb3dzZXIgcmVxdWlyZWQgZXJyb3Igd2lsbCBzaG93IHVwXG4gICAgICAgIHZhciBoZWlnaHQgPSAkbGFiZWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgJGlucHV0LmhlaWdodChoZWlnaHQpO1xuICAgICAgICAkaW5wdXQud2lkdGgoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkbGFiZWxDaGlsZHJlbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHBhcnNlRXJyb3IoZXJyKSB7XG4gICAgICAgIHZhciBlcnJvck1zZyA9IGVyci5yZXNwb25zZUpTT04gJiYgZXJyLnJlc3BvbnNlSlNPTi5tc2c7XG4gICAgICAgIHZhciB1c2VyRXJyb3IgPSBnZW5lcmljRXJyTXNnO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIGVycm9yTXNnID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIGVycm9yTXNnLmluZGV4T2YoJ0ludmFsaWRGaWxlVHlwZUVycm9yJykgPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXNlckVycm9yID0gdHlwZUVyck1zZztcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgZXJyb3JNc2cgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgZXJyb3JNc2cuaW5kZXhPZignTWF4RmlsZVNpemVFcnJvcicpID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHVzZXJFcnJvciA9IHNpemVFcnJNc2c7XG4gICAgICAgIH1cblxuICAgICAgICAkZXJyb3JNc2dFbC50ZXh0KHVzZXJFcnJvcik7XG5cbiAgICAgICAgJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRkZWZhdWx0V3JhcC50b2dnbGUodHJ1ZSk7XG4gICAgICAgICRlcnJvcldyYXAudG9nZ2xlKHRydWUpO1xuICAgICAgICAkZXJyb3JXcmFwLmZvY3VzKCk7XG5cbiAgICAgICAgZm9ybS5maWxlVXBsb2Fkc1tpXS51cGxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFpc1VwbG9hZGluZygpKSB7XG4gICAgICAgICAgcmVzZXQoZm9ybSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJTaWduKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmaWxlTmFtZSA9IGRhdGEuZmlsZU5hbWU7XG4gICAgICAgIHZhciBwb3N0RGF0YSA9IGRhdGEucG9zdERhdGE7XG4gICAgICAgIHZhciBmaWxlSWQgPSBkYXRhLmZpbGVJZDtcbiAgICAgICAgdmFyIHMzVXJsID0gZGF0YS5zM1VybDtcbiAgICAgICAgJGlucHV0LmF0dHIoJ2RhdGEtdmFsdWUnLCBmaWxlSWQpO1xuXG4gICAgICAgIHVwbG9hZFMzKHMzVXJsLCBwb3N0RGF0YSwgZmlsZSwgZmlsZU5hbWUsIGFmdGVyVXBsb2FkKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gYWZ0ZXJVcGxvYWQoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VFcnJvcihlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBzdWNjZXNzXG4gICAgICAgICR1cGxvYWRpbmdXcmFwLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICRzdWNjZXNzV3JhcC5mb2N1cygpO1xuXG4gICAgICAgIGZvcm0uZmlsZVVwbG9hZHNbaV0udXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICghaXNVcGxvYWRpbmcoKSkge1xuICAgICAgICAgIHJlc2V0KGZvcm0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzVXBsb2FkaW5nKCkge1xuICAgICAgICB2YXIgdXBsb2FkcyA9IChmb3JtLmZpbGVVcGxvYWRzICYmIGZvcm0uZmlsZVVwbG9hZHMudG9BcnJheSgpKSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIHVwbG9hZHMuc29tZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUudXBsb2FkaW5nO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaWduRmlsZShmaWxlLCBjYikge1xuICAgICAgdmFyIHBheWxvYWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICB9KTtcblxuICAgICAgJC5hamF4KHt0eXBlOiAnR0VUJywgdXJsOiBgJHtzaWduRmlsZVVybH0/JHtwYXlsb2FkfWAsIGNyb3NzRG9tYWluOiB0cnVlfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwbG9hZFMzKHVybCwgZGF0YSwgZmlsZSwgZmlsZU5hbWUsIGNiKSB7XG4gICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvciAodmFyIGsgaW4gZGF0YSkge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaywgZGF0YVtrXSk7XG4gICAgICB9XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlTmFtZSk7XG5cbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgdXJsLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2IobnVsbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJyZW5kZXJUdXJuc3RpbGVDYXB0Y2hhIiwic2l0ZUtleSIsImZvcm1FbGVtZW50IiwiY2IiLCJlcnJvckNhbGxiYWNrIiwiY2FwdGNoYUNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHVybnN0aWxlIiwicmVuZGVyIiwic2l0ZWtleSIsImNhbGxiYWNrIiwidG9rZW4iLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiJCIsIl8iLCJUVVJOU1RJTEVfTE9BREVEX0VWRU5UIiwiYXBpIiwiJGRvYyIsIiRmb3JtcyIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmV0cm8iLCJYRG9tYWluUmVxdWVzdCIsImF0b2IiLCJuYW1lc3BhY2UiLCJzaXRlSWQiLCJlbWFpbEZpZWxkIiwiZW1haWxWYWx1ZSIsImFsZXJ0IiwiaW5BcHAiLCJlbnYiLCJsaXN0ZW5pbmciLCJmb3JtVXJsIiwic2lnbkZpbGVVcmwiLCJ0dXJuc3RpbGVTaXRlS2V5IiwiZmluZCIsImRhdGEiLCJ0dXJuc3RpbGVTY3JpcHQiLCJjaGltcFJlZ2V4IiwiZGlzY29ubmVjdGVkIiwiZGVib3VuY2UiLCJjb25zb2xlIiwid2FybiIsInJlYWR5IiwiZGVzaWduIiwicHJldmlldyIsImxvYWRUdXJuc3RpbGVTY3JpcHQiLCJpbml0IiwiYWRkTGlzdGVuZXJzIiwiYXR0ciIsIldFQkZMT1dfRk9STV9BUElfSE9TVCIsImluZGV4T2YiLCJyZXBsYWNlIiwiV0VCRkxPV19GT1JNX09MRElFX0hPU1QiLCJsZW5ndGgiLCJlYWNoIiwiYnVpbGQiLCJzcmMiLCJoZWFkIiwib25sb2FkIiwidHJpZ2dlciIsImkiLCJlbCIsIiRlbCIsImZvcm0iLCJyZXNldCIsIndyYXAiLCJjbG9zZXN0IiwiZG9uZSIsImZhaWwiLCJmaWxlVXBsb2FkcyIsImoiLCJpbml0RmlsZVVwbG9hZCIsInNldEJ1dHRvblRvVHVybnN0aWxlTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nU3RhdGUiLCJvbiIsInR1cm5zdGlsZVRva2VuIiwiYnRuIiwicHJvcCIsImZvcm1OYW1lIiwiYWN0aW9uIiwiaGFuZGxlciIsInJlZGlyZWN0IiwidGVzdCIsInN1Ym1pdE1haWxDaGltcCIsIldFQkZMT1dfRVhQT1JUX01PREUiLCJleHBvcnRlZFN1Ym1pdFdlYmZsb3ciLCJob3N0ZWRTdWJtaXRIYW5kbGVyIiwiZGVmYXVsdCIsImNvbGxlY3RFbnRlcnByaXNlVHJhY2tpbmdDb29raWVzIiwicHJldmVudERlZmF1bHQiLCJmaW5kRmllbGRzIiwiZmluZEZpbGVVcGxvYWRzIiwiZGlzYWJsZUJ0biIsImFmdGVyU3VibWl0IiwiZXZ0IiwiQ0hFQ0tCT1hfQ0xBU1NfTkFNRSIsIlJBRElPX0lOUFVUX0NMQVNTX05BTUUiLCJDSEVDS0VEX0NMQVNTIiwiRk9DVVNFRF9DTEFTUyIsIkZPQ1VTRURfVklTSUJMRV9DTEFTUyIsImZvY3VzVmlzaWJsZVNlbGVjdG9ycyIsIkNVU1RPTV9DT05UUk9MUyIsInRhcmdldCIsInNpYmxpbmdzIiwidG9nZ2xlQ2xhc3MiLCJuYW1lIiwibWFwIiwicmVtb3ZlQ2xhc3MiLCIkdGFyZ2V0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImZvckVhY2giLCJjb250cm9sVHlwZSIsImN1c3RvbUNvbnRyb2xDbGFzc05hbWUiLCJmaWx0ZXIiLCJ3YWl0Iiwic3VjY2VzcyIsImlzRGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWwiLCJ2YWwiLCIkZm9ybUVsIiwiaXNMb2FkaW5nIiwiJHdyYXBwZXIiLCJyZXN1bHQiLCJzdGF0dXMiLCJmaWVsZCIsInR5cGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2YWx1ZSIsImlzIiwidHJpbSIsImdldFN0YXR1cyIsInRyYWNraW5nQ29va2llTmFtZU1hcCIsIl9ta3RvX3RyayIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsInJlZHVjZSIsImFjYyIsInNwbGl0Q29va2llIiwibWFwcGVkTmFtZSIsInNsaWNlIiwiam9pbiIsInBheWxvYWQiLCJocmVmIiwiZnVsbE5hbWUiLCJrZXkiLCJFTUFJTCIsIkZOQU1FIiwiTE5BTUUiLCJ1cmwiLCJ1c2VySWQiLCJzdWJzdHJpbmciLCJsaXN0SWQiLCJhamF4IiwiZGF0YVR5cGUiLCJyZXNwIiwibXNnIiwiaW5mbyIsInRvZ2dsZSIsImZvY3VzIiwiZmlsZSIsIiRkZWZhdWx0V3JhcCIsIiR1cGxvYWRpbmdXcmFwIiwiJHN1Y2Nlc3NXcmFwIiwiJGVycm9yV3JhcCIsIiRpbnB1dCIsIiRsYWJlbCIsIiRsYWJlbENoaWxkcmVuIiwiY2hpbGRyZW4iLCIkZXJyb3JNc2dFbCIsIiRmaWxlRWwiLCIkcmVtb3ZlRWwiLCIkZmlsZU5hbWVFbCIsInNpemVFcnJNc2ciLCJ0eXBlRXJyTXNnIiwiZ2VuZXJpY0Vyck1zZyIsImUiLCJ3aGljaCIsImNsaWNrIiwicmVtb3ZlQXR0ciIsImh0bWwiLCJmaWxlcyIsInRleHQiLCJpc1VwbG9hZGluZyIsInVwbG9hZGluZyIsInNpZ25GaWxlIiwiYWZ0ZXJTaWduIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJ3aWR0aCIsInBhcnNlRXJyb3IiLCJlcnIiLCJlcnJvck1zZyIsInJlc3BvbnNlSlNPTiIsInVzZXJFcnJvciIsImZpbGVOYW1lIiwicG9zdERhdGEiLCJmaWxlSWQiLCJzM1VybCIsInVwbG9hZFMzIiwiYWZ0ZXJVcGxvYWQiLCJjc3MiLCJ1cGxvYWRzIiwidG9BcnJheSIsInNvbWUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzaXplIiwiY3Jvc3NEb21haW4iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwi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

}),
655: (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
/* globals window, document */ /**
 * Webflow: Navbar component
 */ 
var Webflow = __webpack_require__(949);
var IXEvents = __webpack_require__(134);
const KEY_CODES = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ESCAPE: 27,
    SPACE: 32,
    ENTER: 13,
    HOME: 36,
    END: 35
};
Webflow.define('navbar', module.exports = function($, _) {
    var api = {};
    var tram = $.tram;
    var $win = $(window);
    var $doc = $(document);
    var debounce = _.debounce;
    var $body;
    var $navbars;
    var designer;
    var inEditor;
    var inApp = Webflow.env();
    var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
    var namespace = '.w-nav';
    var navbarOpenedButton = 'w--open';
    var navbarOpenedDropdown = 'w--nav-dropdown-open';
    var navbarOpenedDropdownToggle = 'w--nav-dropdown-toggle-open';
    var navbarOpenedDropdownList = 'w--nav-dropdown-list-open';
    var navbarOpenedLink = 'w--nav-link-open';
    var ix = IXEvents.triggers;
    var menuSibling = $();
    // -----------------------------------
    // Module methods
    api.ready = api.design = api.preview = init;
    api.destroy = function() {
        menuSibling = $();
        removeListeners();
        if ($navbars && $navbars.length) {
            $navbars.each(teardown);
        }
    };
    // -----------------------------------
    // Private methods
    function init() {
        designer = inApp && Webflow.env('design');
        inEditor = Webflow.env('editor');
        $body = $(document.body);
        // Find all instances on the page
        $navbars = $doc.find(namespace);
        if (!$navbars.length) {
            return;
        }
        $navbars.each(build);
        // Wire events
        removeListeners();
        addListeners();
    }
    function removeListeners() {
        Webflow.resize.off(resizeAll);
    }
    function addListeners() {
        Webflow.resize.on(resizeAll);
    }
    function resizeAll() {
        $navbars.each(resize);
    }
    function build(i, el) {
        var $el = $(el);
        // Store state in data
        var data = $.data(el, namespace);
        if (!data) {
            data = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
            });
        }
        data.menu = $el.find('.w-nav-menu');
        data.links = data.menu.find('.w-nav-link');
        data.dropdowns = data.menu.find('.w-dropdown');
        data.dropdownToggle = data.menu.find('.w-dropdown-toggle');
        data.dropdownList = data.menu.find('.w-dropdown-list');
        data.button = $el.find('.w-nav-button');
        data.container = $el.find('.w-container');
        data.overlayContainerId = 'w-nav-overlay-' + i;
        data.outside = outside(data);
        //   If the brand links exists and is set to link to the homepage, the
        // default setting, then add an aria-label
        var navBrandLink = $el.find('.w-nav-brand');
        if (navBrandLink && navBrandLink.attr('href') === '/' && navBrandLink.attr('aria-label') == null) {
            navBrandLink.attr('aria-label', 'home');
        }
        //   VoiceOver bug, when items that disallow user selection are focused
        // VoiceOver gets confused and scrolls to the end of the page. ¯\_(ツ)_/¯
        data.button.attr('style', '-webkit-user-select: text;');
        // Add attributes to toggle element
        if (data.button.attr('aria-label') == null) {
            data.button.attr('aria-label', 'menu');
        }
        data.button.attr('role', 'button');
        data.button.attr('tabindex', '0');
        data.button.attr('aria-controls', data.overlayContainerId);
        data.button.attr('aria-haspopup', 'menu');
        data.button.attr('aria-expanded', 'false');
        // Remove old events
        data.el.off(namespace);
        data.button.off(namespace);
        data.menu.off(namespace);
        // Set config from data attributes
        configure(data);
        // Add events based on mode
        if (designer) {
            removeOverlay(data);
            data.el.on('setting' + namespace, handler(data));
        } else {
            addOverlay(data);
            data.button.on('click' + namespace, toggle(data));
            data.menu.on('click' + namespace, 'a', navigate(data));
            data.button.on('keydown' + namespace, makeToggleButtonKeyboardHandler(data));
            data.el.on('keydown' + namespace, makeLinksKeyboardHandler(data));
        }
        // Trigger initial resize
        resize(i, el);
    }
    function teardown(i, el) {
        var data = $.data(el, namespace);
        if (data) {
            removeOverlay(data);
            $.removeData(el, namespace);
        }
    }
    function removeOverlay(data) {
        if (!data.overlay) {
            return;
        }
        close(data, true);
        data.overlay.remove();
        data.overlay = null;
    }
    function addOverlay(data) {
        if (data.overlay) {
            return;
        }
        data.overlay = $(overlay).appendTo(data.el);
        data.overlay.attr('id', data.overlayContainerId);
        data.parent = data.menu.parent();
        close(data, true);
    }
    function configure(data) {
        var config = {};
        var old = data.config || {};
        // Set config options from data attributes
        var animation = config.animation = data.el.attr('data-animation') || 'default';
        config.animOver = /^over/.test(animation);
        config.animDirect = /left$/.test(animation) ? -1 : 1;
        // Re-open menu if the animation type changed
        if (old.animation !== animation) {
            data.open && _.defer(reopen, data);
        }
        config.easing = data.el.attr('data-easing') || 'ease';
        config.easing2 = data.el.attr('data-easing2') || 'ease';
        var duration = data.el.attr('data-duration');
        config.duration = duration != null ? Number(duration) : 400;
        config.docHeight = data.el.attr('data-doc-height');
        // Store config in data
        data.config = config;
    }
    function handler(data) {
        return function(evt, options) {
            options = options || {};
            var winWidth = $win.width();
            configure(data);
            options.open === true && open(data, true);
            options.open === false && close(data, true);
            // Reopen if media query changed after setting
            data.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                    reopen(data);
                }
            });
        };
    }
    function makeToggleButtonKeyboardHandler(data) {
        return function(evt) {
            switch(evt.keyCode){
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER:
                    {
                        // Toggle returns a function
                        toggle(data)();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (!data.open) {
                            evt.preventDefault();
                            return evt.stopPropagation();
                        }
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function makeLinksKeyboardHandler(data) {
        return function(evt) {
            if (!data.open) {
                return;
            }
            // Realign selectedIdx with the menu item that is currently in focus.
            // We need this because we do not track the `Tab` key activity!
            data.selectedIdx = data.links.index(document.activeElement);
            switch(evt.keyCode){
                case KEY_CODES.HOME:
                case KEY_CODES.END:
                    {
                        if (evt.keyCode === KEY_CODES.END) {
                            data.selectedIdx = data.links.length - 1;
                        } else {
                            data.selectedIdx = 0;
                        }
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ESCAPE:
                    {
                        close(data);
                        // Focus toggle button
                        data.button.focus();
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP:
                    {
                        data.selectedIdx = Math.max(-1, data.selectedIdx - 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                    {
                        data.selectedIdx = Math.min(data.links.length - 1, data.selectedIdx + 1);
                        focusSelectedLink(data);
                        evt.preventDefault();
                        return evt.stopPropagation();
                    }
            }
        };
    }
    function focusSelectedLink(data) {
        if (data.links[data.selectedIdx]) {
            var selectedElement = data.links[data.selectedIdx];
            selectedElement.focus();
            navigate(selectedElement);
        }
    }
    function reopen(data) {
        if (!data.open) {
            return;
        }
        close(data, true);
        open(data, true);
    }
    function toggle(data) {
        // Debounce toggle to wait for accurate open state
        return debounce(function() {
            data.open ? close(data) : open(data);
        });
    }
    function navigate(data) {
        return function(evt) {
            var link = $(this);
            var href = link.attr('href');
            // Avoid late clicks on touch devices
            if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
            }
            // Close when navigating to an in-page anchor
            if (href && href.indexOf('#') === 0 && data.open) {
                close(data);
            }
        };
    }
    function outside(data) {
        // Unbind previous click handler if it exists
        if (data.outside) {
            $doc.off('click' + namespace, data.outside);
        }
        return function(evt) {
            var $target = $(evt.target);
            // Ignore clicks on Editor overlay UI
            if (inEditor && $target.closest('.w-editor-bem-EditorOverlay').length) {
                return;
            }
            // Close menu when clicked outside, debounced to wait for state
            outsideDebounced(data, $target);
        };
    }
    var outsideDebounced = debounce(function(data, $target) {
        if (!data.open) {
            return;
        }
        var menu = $target.closest('.w-nav-menu');
        if (!data.menu.is(menu)) {
            close(data);
        }
    });
    function resize(i, el) {
        var data = $.data(el, namespace);
        // Check for collapsed state based on button display
        var collapsed = data.collapsed = data.button.css('display') !== 'none';
        // Close menu if button is no longer visible (and not in designer)
        if (data.open && !collapsed && !designer) {
            close(data, true);
        }
        // Set max-width of links + dropdowns to match container
        if (data.container.length) {
            var updateEachMax = updateMax(data);
            data.links.each(updateEachMax);
            data.dropdowns.each(updateEachMax);
        }
        // If currently open, update height to match body
        if (data.open) {
            setOverlayHeight(data);
        }
    }
    var maxWidth = 'max-width';
    function updateMax(data) {
        // Set max-width of each element to match container
        var containMax = data.container.css(maxWidth);
        if (containMax === 'none') {
            containMax = '';
        }
        return function(i, link) {
            link = $(link);
            link.css(maxWidth, '');
            // Don't set the max-width if an upstream value exists
            if (link.css(maxWidth) === 'none') {
                link.css(maxWidth, containMax);
            }
        };
    }
    function addMenuOpen(i, el) {
        el.setAttribute('data-nav-menu-open', '');
    }
    function removeMenuOpen(i, el) {
        el.removeAttribute('data-nav-menu-open');
    }
    function open(data, immediate) {
        if (data.open) {
            return;
        }
        data.open = true;
        data.menu.each(addMenuOpen);
        data.links.addClass(navbarOpenedLink);
        data.dropdowns.addClass(navbarOpenedDropdown);
        data.dropdownToggle.addClass(navbarOpenedDropdownToggle);
        data.dropdownList.addClass(navbarOpenedDropdownList);
        data.button.addClass(navbarOpenedButton);
        var config = data.config;
        var animation = config.animation;
        if (animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        var bodyHeight = setOverlayHeight(data);
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        var navbarEl = data.el[0];
        resize(0, navbarEl);
        ix.intro(0, navbarEl);
        Webflow.redraw.up();
        // Listen for click outside events
        if (!designer) {
            $doc.on('click' + namespace, data.outside);
        }
        // No transition for immediate
        if (immediate) {
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;
        // Add menu to overlay
        if (data.overlay) {
            menuSibling = data.menu.prev();
            data.overlay.show().append(data.menu);
        }
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
            }).start({
                x: 0
            }).then(complete);
            data.overlay && data.overlay.width(menuWidth);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).set({
            y: -offsetY
        }).start({
            y: 0
        }).then(complete);
        function complete() {
            data.button.attr('aria-expanded', 'true');
        }
    }
    function setOverlayHeight(data) {
        var config = data.config;
        var bodyHeight = config.docHeight ? $doc.height() : $body.height();
        if (config.animOver) {
            data.menu.height(bodyHeight);
        } else if (data.el.css('position') !== 'fixed') {
            bodyHeight -= data.el.outerHeight(true);
        }
        data.overlay && data.overlay.height(bodyHeight);
        return bodyHeight;
    }
    function close(data, immediate) {
        if (!data.open) {
            return;
        }
        data.open = false;
        data.button.removeClass(navbarOpenedButton);
        var config = data.config;
        if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) {
            immediate = true;
        }
        ix.outro(0, data.el[0]);
        // Stop listening for click outside events
        $doc.off('click' + namespace, data.outside);
        if (immediate) {
            tram(data.menu).stop();
            complete();
            return;
        }
        var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
        var menuHeight = data.menu.outerHeight(true);
        var menuWidth = data.menu.outerWidth(true);
        var navHeight = data.el.height();
        // Over left/right
        if (config.animOver) {
            tram(data.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
            }).then(complete);
            return;
        }
        // Drop Down
        var offsetY = navHeight + menuHeight;
        tram(data.menu).add(transConfig).start({
            y: -offsetY
        }).then(complete);
        function complete() {
            data.menu.height('');
            tram(data.menu).set({
                x: 0,
                y: 0
            });
            data.menu.each(removeMenuOpen);
            data.links.removeClass(navbarOpenedLink);
            data.dropdowns.removeClass(navbarOpenedDropdown);
            data.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
            data.dropdownList.removeClass(navbarOpenedDropdownList);
            if (data.overlay && data.overlay.children().length) {
                // Move menu back to parent at the original location
                menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                data.overlay.attr('style', '').hide();
            }
            // Trigger event so other components can hook in (dropdown)
            data.el.triggerHandler('w-close');
            data.button.attr('aria-expanded', 'false');
        }
    }
    // Export module
    return api;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93LCBkb2N1bWVudCAqL1xuXG4vKipcbiAqIFdlYmZsb3c6IE5hdmJhciBjb21wb25lbnRcbiAqL1xuXG52YXIgV2ViZmxvdyA9IHJlcXVpcmUoJy4uL0Jhc2VTaXRlTW9kdWxlcy93ZWJmbG93LWxpYicpO1xudmFyIElYRXZlbnRzID0gcmVxdWlyZSgnLi4vQmFzZVNpdGVNb2R1bGVzL3dlYmZsb3ctaXgyLWV2ZW50cycpO1xuXG5jb25zdCBLRVlfQ09ERVMgPSB7XG4gIEFSUk9XX0xFRlQ6IDM3LFxuICBBUlJPV19VUDogMzgsXG4gIEFSUk9XX1JJR0hUOiAzOSxcbiAgQVJST1dfRE9XTjogNDAsXG4gIEVTQ0FQRTogMjcsXG4gIFNQQUNFOiAzMixcbiAgRU5URVI6IDEzLFxuICBIT01FOiAzNixcbiAgRU5EOiAzNSxcbn07XG5cbldlYmZsb3cuZGVmaW5lKFxuICAnbmF2YmFyJyxcbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCQsIF8pIHtcbiAgICB2YXIgYXBpID0ge307XG4gICAgdmFyIHRyYW0gPSAkLnRyYW07XG4gICAgdmFyICR3aW4gPSAkKHdpbmRvdyk7XG4gICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcbiAgICB2YXIgZGVib3VuY2UgPSBfLmRlYm91bmNlO1xuICAgIHZhciAkYm9keTtcbiAgICB2YXIgJG5hdmJhcnM7XG4gICAgdmFyIGRlc2lnbmVyO1xuICAgIHZhciBpbkVkaXRvcjtcbiAgICB2YXIgaW5BcHAgPSBXZWJmbG93LmVudigpO1xuICAgIHZhciBvdmVybGF5ID0gJzxkaXYgY2xhc3M9XCJ3LW5hdi1vdmVybGF5XCIgZGF0YS13Zi1pZ25vcmUgLz4nO1xuICAgIHZhciBuYW1lc3BhY2UgPSAnLnctbmF2JztcbiAgICB2YXIgbmF2YmFyT3BlbmVkQnV0dG9uID0gJ3ctLW9wZW4nO1xuICAgIHZhciBuYXZiYXJPcGVuZWREcm9wZG93biA9ICd3LS1uYXYtZHJvcGRvd24tb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duVG9nZ2xlID0gJ3ctLW5hdi1kcm9wZG93bi10b2dnbGUtb3Blbic7XG4gICAgdmFyIG5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCA9ICd3LS1uYXYtZHJvcGRvd24tbGlzdC1vcGVuJztcbiAgICB2YXIgbmF2YmFyT3BlbmVkTGluayA9ICd3LS1uYXYtbGluay1vcGVuJztcbiAgICB2YXIgaXggPSBJWEV2ZW50cy50cmlnZ2VycztcbiAgICB2YXIgbWVudVNpYmxpbmcgPSAkKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1vZHVsZSBtZXRob2RzXG5cbiAgICBhcGkucmVhZHkgPSBhcGkuZGVzaWduID0gYXBpLnByZXZpZXcgPSBpbml0O1xuXG4gICAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51U2libGluZyA9ICQoKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgaWYgKCRuYXZiYXJzICYmICRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICAkbmF2YmFycy5lYWNoKHRlYXJkb3duKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICBkZXNpZ25lciA9IGluQXBwICYmIFdlYmZsb3cuZW52KCdkZXNpZ24nKTtcbiAgICAgIGluRWRpdG9yID0gV2ViZmxvdy5lbnYoJ2VkaXRvcicpO1xuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpO1xuXG4gICAgICAvLyBGaW5kIGFsbCBpbnN0YW5jZXMgb24gdGhlIHBhZ2VcbiAgICAgICRuYXZiYXJzID0gJGRvYy5maW5kKG5hbWVzcGFjZSk7XG4gICAgICBpZiAoISRuYXZiYXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkbmF2YmFycy5lYWNoKGJ1aWxkKTtcblxuICAgICAgLy8gV2lyZSBldmVudHNcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub2ZmKHJlc2l6ZUFsbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgV2ViZmxvdy5yZXNpemUub24ocmVzaXplQWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNpemVBbGwoKSB7XG4gICAgICAkbmF2YmFycy5lYWNoKHJlc2l6ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYnVpbGQoaSwgZWwpIHtcbiAgICAgIHZhciAkZWwgPSAkKGVsKTtcblxuICAgICAgLy8gU3RvcmUgc3RhdGUgaW4gZGF0YVxuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlLCB7XG4gICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgZWw6ICRlbCxcbiAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgIHNlbGVjdGVkSWR4OiAtMSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkYXRhLm1lbnUgPSAkZWwuZmluZCgnLnctbmF2LW1lbnUnKTtcbiAgICAgIGRhdGEubGlua3MgPSBkYXRhLm1lbnUuZmluZCgnLnctbmF2LWxpbmsnKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duJyk7XG4gICAgICBkYXRhLmRyb3Bkb3duVG9nZ2xlID0gZGF0YS5tZW51LmZpbmQoJy53LWRyb3Bkb3duLXRvZ2dsZScpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QgPSBkYXRhLm1lbnUuZmluZCgnLnctZHJvcGRvd24tbGlzdCcpO1xuICAgICAgZGF0YS5idXR0b24gPSAkZWwuZmluZCgnLnctbmF2LWJ1dHRvbicpO1xuICAgICAgZGF0YS5jb250YWluZXIgPSAkZWwuZmluZCgnLnctY29udGFpbmVyJyk7XG4gICAgICBkYXRhLm92ZXJsYXlDb250YWluZXJJZCA9ICd3LW5hdi1vdmVybGF5LScgKyBpO1xuICAgICAgZGF0YS5vdXRzaWRlID0gb3V0c2lkZShkYXRhKTtcblxuICAgICAgLy8gICBJZiB0aGUgYnJhbmQgbGlua3MgZXhpc3RzIGFuZCBpcyBzZXQgdG8gbGluayB0byB0aGUgaG9tZXBhZ2UsIHRoZVxuICAgICAgLy8gZGVmYXVsdCBzZXR0aW5nLCB0aGVuIGFkZCBhbiBhcmlhLWxhYmVsXG4gICAgICB2YXIgbmF2QnJhbmRMaW5rID0gJGVsLmZpbmQoJy53LW5hdi1icmFuZCcpO1xuICAgICAgaWYgKFxuICAgICAgICBuYXZCcmFuZExpbmsgJiZcbiAgICAgICAgbmF2QnJhbmRMaW5rLmF0dHIoJ2hyZWYnKSA9PT0gJy8nICYmXG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJykgPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIG5hdkJyYW5kTGluay5hdHRyKCdhcmlhLWxhYmVsJywgJ2hvbWUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gICBWb2ljZU92ZXIgYnVnLCB3aGVuIGl0ZW1zIHRoYXQgZGlzYWxsb3cgdXNlciBzZWxlY3Rpb24gYXJlIGZvY3VzZWRcbiAgICAgIC8vIFZvaWNlT3ZlciBnZXRzIGNvbmZ1c2VkIGFuZCBzY3JvbGxzIHRvIHRoZSBlbmQgb2YgdGhlIHBhZ2UuIMKvXFxfKOODhClfL8KvXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdzdHlsZScsICctd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0OycpO1xuXG4gICAgICAvLyBBZGQgYXR0cmlidXRlcyB0byB0b2dnbGUgZWxlbWVudFxuICAgICAgaWYgKGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnKSA9PSBudWxsKSB7XG4gICAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtbGFiZWwnLCAnbWVudScpO1xuICAgICAgfVxuXG4gICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cigndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1jb250cm9scycsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCAnbWVudScpO1xuICAgICAgZGF0YS5idXR0b24uYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgICAvLyBSZW1vdmUgb2xkIGV2ZW50c1xuICAgICAgZGF0YS5lbC5vZmYobmFtZXNwYWNlKTtcbiAgICAgIGRhdGEuYnV0dG9uLm9mZihuYW1lc3BhY2UpO1xuICAgICAgZGF0YS5tZW51Lm9mZihuYW1lc3BhY2UpO1xuXG4gICAgICAvLyBTZXQgY29uZmlnIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICBjb25maWd1cmUoZGF0YSk7XG5cbiAgICAgIC8vIEFkZCBldmVudHMgYmFzZWQgb24gbW9kZVxuICAgICAgaWYgKGRlc2lnbmVyKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgIGRhdGEuZWwub24oJ3NldHRpbmcnICsgbmFtZXNwYWNlLCBoYW5kbGVyKGRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZE92ZXJsYXkoZGF0YSk7XG5cbiAgICAgICAgZGF0YS5idXR0b24ub24oJ2NsaWNrJyArIG5hbWVzcGFjZSwgdG9nZ2xlKGRhdGEpKTtcbiAgICAgICAgZGF0YS5tZW51Lm9uKCdjbGljaycgKyBuYW1lc3BhY2UsICdhJywgbmF2aWdhdGUoZGF0YSkpO1xuXG4gICAgICAgIGRhdGEuYnV0dG9uLm9uKFxuICAgICAgICAgICdrZXlkb3duJyArIG5hbWVzcGFjZSxcbiAgICAgICAgICBtYWtlVG9nZ2xlQnV0dG9uS2V5Ym9hcmRIYW5kbGVyKGRhdGEpXG4gICAgICAgICk7XG4gICAgICAgIGRhdGEuZWwub24oJ2tleWRvd24nICsgbmFtZXNwYWNlLCBtYWtlTGlua3NLZXlib2FyZEhhbmRsZXIoZGF0YSkpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmlnZ2VyIGluaXRpYWwgcmVzaXplXG4gICAgICByZXNpemUoaSwgZWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlYXJkb3duKGksIGVsKSB7XG4gICAgICB2YXIgZGF0YSA9ICQuZGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlbW92ZU92ZXJsYXkoZGF0YSk7XG4gICAgICAgICQucmVtb3ZlRGF0YShlbCwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vdmVybGF5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgZGF0YS5vdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZGF0YS5vdmVybGF5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRPdmVybGF5KGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm92ZXJsYXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGF0YS5vdmVybGF5ID0gJChvdmVybGF5KS5hcHBlbmRUbyhkYXRhLmVsKTtcbiAgICAgIGRhdGEub3ZlcmxheS5hdHRyKCdpZCcsIGRhdGEub3ZlcmxheUNvbnRhaW5lcklkKTtcbiAgICAgIGRhdGEucGFyZW50ID0gZGF0YS5tZW51LnBhcmVudCgpO1xuICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlKGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSB7fTtcbiAgICAgIHZhciBvbGQgPSBkYXRhLmNvbmZpZyB8fCB7fTtcblxuICAgICAgLy8gU2V0IGNvbmZpZyBvcHRpb25zIGZyb20gZGF0YSBhdHRyaWJ1dGVzXG4gICAgICB2YXIgYW5pbWF0aW9uID0gKGNvbmZpZy5hbmltYXRpb24gPVxuICAgICAgICBkYXRhLmVsLmF0dHIoJ2RhdGEtYW5pbWF0aW9uJykgfHwgJ2RlZmF1bHQnKTtcbiAgICAgIGNvbmZpZy5hbmltT3ZlciA9IC9eb3Zlci8udGVzdChhbmltYXRpb24pO1xuICAgICAgY29uZmlnLmFuaW1EaXJlY3QgPSAvbGVmdCQvLnRlc3QoYW5pbWF0aW9uKSA/IC0xIDogMTtcblxuICAgICAgLy8gUmUtb3BlbiBtZW51IGlmIHRoZSBhbmltYXRpb24gdHlwZSBjaGFuZ2VkXG4gICAgICBpZiAob2xkLmFuaW1hdGlvbiAhPT0gYW5pbWF0aW9uKSB7XG4gICAgICAgIGRhdGEub3BlbiAmJiBfLmRlZmVyKHJlb3BlbiwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbmZpZy5lYXNpbmcgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nJykgfHwgJ2Vhc2UnO1xuICAgICAgY29uZmlnLmVhc2luZzIgPSBkYXRhLmVsLmF0dHIoJ2RhdGEtZWFzaW5nMicpIHx8ICdlYXNlJztcblxuICAgICAgdmFyIGR1cmF0aW9uID0gZGF0YS5lbC5hdHRyKCdkYXRhLWR1cmF0aW9uJyk7XG4gICAgICBjb25maWcuZHVyYXRpb24gPSBkdXJhdGlvbiAhPSBudWxsID8gTnVtYmVyKGR1cmF0aW9uKSA6IDQwMDtcblxuICAgICAgY29uZmlnLmRvY0hlaWdodCA9IGRhdGEuZWwuYXR0cignZGF0YS1kb2MtaGVpZ2h0Jyk7XG5cbiAgICAgIC8vIFN0b3JlIGNvbmZpZyBpbiBkYXRhXG4gICAgICBkYXRhLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVyKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgd2luV2lkdGggPSAkd2luLndpZHRoKCk7XG4gICAgICAgIGNvbmZpZ3VyZShkYXRhKTtcbiAgICAgICAgb3B0aW9ucy5vcGVuID09PSB0cnVlICYmIG9wZW4oZGF0YSwgdHJ1ZSk7XG4gICAgICAgIG9wdGlvbnMub3BlbiA9PT0gZmFsc2UgJiYgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICAgIC8vIFJlb3BlbiBpZiBtZWRpYSBxdWVyeSBjaGFuZ2VkIGFmdGVyIHNldHRpbmdcbiAgICAgICAgZGF0YS5vcGVuICYmXG4gICAgICAgICAgXy5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAod2luV2lkdGggIT09ICR3aW4ud2lkdGgoKSkge1xuICAgICAgICAgICAgICByZW9wZW4oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VUb2dnbGVCdXR0b25LZXlib2FyZEhhbmRsZXIoZGF0YSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLlNQQUNFOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVOVEVSOiB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgcmV0dXJucyBhIGZ1bmN0aW9uXG4gICAgICAgICAgICB0b2dnbGUoZGF0YSkoKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkVTQ0FQRToge1xuICAgICAgICAgICAgY2xvc2UoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19SSUdIVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19ET1dOOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERVMuRU5EKSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBkYXRhLmxpbmtzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvY3VzU2VsZWN0ZWRMaW5rKGRhdGEpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VMaW5rc0tleWJvYXJkSGFuZGxlcihkYXRhKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoIWRhdGEub3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlYWxpZ24gc2VsZWN0ZWRJZHggd2l0aCB0aGUgbWVudSBpdGVtIHRoYXQgaXMgY3VycmVudGx5IGluIGZvY3VzLlxuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYmVjYXVzZSB3ZSBkbyBub3QgdHJhY2sgdGhlIGBUYWJgIGtleSBhY3Rpdml0eSFcbiAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkhPTUU6XG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuRU5EOiB7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTkQpIHtcbiAgICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IGRhdGEubGlua3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5FU0NBUEU6IHtcbiAgICAgICAgICAgIGNsb3NlKGRhdGEpO1xuXG4gICAgICAgICAgICAvLyBGb2N1cyB0b2dnbGUgYnV0dG9uXG4gICAgICAgICAgICBkYXRhLmJ1dHRvbi5mb2N1cygpO1xuXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBLRVlfQ09ERVMuQVJST1dfTEVGVDpcbiAgICAgICAgICBjYXNlIEtFWV9DT0RFUy5BUlJPV19VUDoge1xuICAgICAgICAgICAgZGF0YS5zZWxlY3RlZElkeCA9IE1hdGgubWF4KC0xLCBkYXRhLnNlbGVjdGVkSWR4IC0gMSk7XG4gICAgICAgICAgICBmb2N1c1NlbGVjdGVkTGluayhkYXRhKTtcblxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX1JJR0hUOlxuICAgICAgICAgIGNhc2UgS0VZX0NPREVTLkFSUk9XX0RPV046IHtcbiAgICAgICAgICAgIGRhdGEuc2VsZWN0ZWRJZHggPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgZGF0YS5saW5rcy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICBkYXRhLnNlbGVjdGVkSWR4ICsgMVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9jdXNTZWxlY3RlZExpbmsoZGF0YSk7XG5cbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXNTZWxlY3RlZExpbmsoZGF0YSkge1xuICAgICAgaWYgKGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF0pIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkRWxlbWVudCA9IGRhdGEubGlua3NbZGF0YS5zZWxlY3RlZElkeF07XG5cbiAgICAgICAgc2VsZWN0ZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIG5hdmlnYXRlKHNlbGVjdGVkRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVvcGVuKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNsb3NlKGRhdGEsIHRydWUpO1xuICAgICAgb3BlbihkYXRhLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUoZGF0YSkge1xuICAgICAgLy8gRGVib3VuY2UgdG9nZ2xlIHRvIHdhaXQgZm9yIGFjY3VyYXRlIG9wZW4gc3RhdGVcbiAgICAgIHJldHVybiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRhdGEub3BlbiA/IGNsb3NlKGRhdGEpIDogb3BlbihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5hdmlnYXRlKGRhdGEpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAvLyBBdm9pZCBsYXRlIGNsaWNrcyBvbiB0b3VjaCBkZXZpY2VzXG4gICAgICAgIGlmICghV2ViZmxvdy52YWxpZENsaWNrKGV2dC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIHdoZW4gbmF2aWdhdGluZyB0byBhbiBpbi1wYWdlIGFuY2hvclxuICAgICAgICBpZiAoaHJlZiAmJiBocmVmLmluZGV4T2YoJyMnKSA9PT0gMCAmJiBkYXRhLm9wZW4pIHtcbiAgICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlKGRhdGEpIHtcbiAgICAgIC8vIFVuYmluZCBwcmV2aW91cyBjbGljayBoYW5kbGVyIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKGRhdGEub3V0c2lkZSkge1xuICAgICAgICAkZG9jLm9mZignY2xpY2snICsgbmFtZXNwYWNlLCBkYXRhLm91dHNpZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZ0LnRhcmdldCk7XG4gICAgICAgIC8vIElnbm9yZSBjbGlja3Mgb24gRWRpdG9yIG92ZXJsYXkgVUlcbiAgICAgICAgaWYgKGluRWRpdG9yICYmICR0YXJnZXQuY2xvc2VzdCgnLnctZWRpdG9yLWJlbS1FZGl0b3JPdmVybGF5JykubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsb3NlIG1lbnUgd2hlbiBjbGlja2VkIG91dHNpZGUsIGRlYm91bmNlZCB0byB3YWl0IGZvciBzdGF0ZVxuICAgICAgICBvdXRzaWRlRGVib3VuY2VkKGRhdGEsICR0YXJnZXQpO1xuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG91dHNpZGVEZWJvdW5jZWQgPSBkZWJvdW5jZShmdW5jdGlvbiAoZGF0YSwgJHRhcmdldCkge1xuICAgICAgaWYgKCFkYXRhLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIG1lbnUgPSAkdGFyZ2V0LmNsb3Nlc3QoJy53LW5hdi1tZW51Jyk7XG4gICAgICBpZiAoIWRhdGEubWVudS5pcyhtZW51KSkge1xuICAgICAgICBjbG9zZShkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJlc2l6ZShpLCBlbCkge1xuICAgICAgdmFyIGRhdGEgPSAkLmRhdGEoZWwsIG5hbWVzcGFjZSk7XG4gICAgICAvLyBDaGVjayBmb3IgY29sbGFwc2VkIHN0YXRlIGJhc2VkIG9uIGJ1dHRvbiBkaXNwbGF5XG4gICAgICB2YXIgY29sbGFwc2VkID0gKGRhdGEuY29sbGFwc2VkID0gZGF0YS5idXR0b24uY3NzKCdkaXNwbGF5JykgIT09ICdub25lJyk7XG4gICAgICAvLyBDbG9zZSBtZW51IGlmIGJ1dHRvbiBpcyBubyBsb25nZXIgdmlzaWJsZSAoYW5kIG5vdCBpbiBkZXNpZ25lcilcbiAgICAgIGlmIChkYXRhLm9wZW4gJiYgIWNvbGxhcHNlZCAmJiAhZGVzaWduZXIpIHtcbiAgICAgICAgY2xvc2UoZGF0YSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGxpbmtzICsgZHJvcGRvd25zIHRvIG1hdGNoIGNvbnRhaW5lclxuICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICB2YXIgdXBkYXRlRWFjaE1heCA9IHVwZGF0ZU1heChkYXRhKTtcbiAgICAgICAgZGF0YS5saW5rcy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgICBkYXRhLmRyb3Bkb3ducy5lYWNoKHVwZGF0ZUVhY2hNYXgpO1xuICAgICAgfVxuICAgICAgLy8gSWYgY3VycmVudGx5IG9wZW4sIHVwZGF0ZSBoZWlnaHQgdG8gbWF0Y2ggYm9keVxuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtYXhXaWR0aCA9ICdtYXgtd2lkdGgnO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU1heChkYXRhKSB7XG4gICAgICAvLyBTZXQgbWF4LXdpZHRoIG9mIGVhY2ggZWxlbWVudCB0byBtYXRjaCBjb250YWluZXJcbiAgICAgIHZhciBjb250YWluTWF4ID0gZGF0YS5jb250YWluZXIuY3NzKG1heFdpZHRoKTtcbiAgICAgIGlmIChjb250YWluTWF4ID09PSAnbm9uZScpIHtcbiAgICAgICAgY29udGFpbk1heCA9ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpLCBsaW5rKSB7XG4gICAgICAgIGxpbmsgPSAkKGxpbmspO1xuICAgICAgICBsaW5rLmNzcyhtYXhXaWR0aCwgJycpO1xuICAgICAgICAvLyBEb24ndCBzZXQgdGhlIG1heC13aWR0aCBpZiBhbiB1cHN0cmVhbSB2YWx1ZSBleGlzdHNcbiAgICAgICAgaWYgKGxpbmsuY3NzKG1heFdpZHRoKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgbGluay5jc3MobWF4V2lkdGgsIGNvbnRhaW5NYXgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1lbnVPcGVuKGksIGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2LW1lbnUtb3BlbicsICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNZW51T3BlbihpLCBlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5hdi1tZW51LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuKGRhdGEsIGltbWVkaWF0ZSkge1xuICAgICAgaWYgKGRhdGEub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkYXRhLm9wZW4gPSB0cnVlO1xuICAgICAgZGF0YS5tZW51LmVhY2goYWRkTWVudU9wZW4pO1xuICAgICAgZGF0YS5saW5rcy5hZGRDbGFzcyhuYXZiYXJPcGVuZWRMaW5rKTtcbiAgICAgIGRhdGEuZHJvcGRvd25zLmFkZENsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duKTtcbiAgICAgIGRhdGEuZHJvcGRvd25Ub2dnbGUuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25Ub2dnbGUpO1xuICAgICAgZGF0YS5kcm9wZG93bkxpc3QuYWRkQ2xhc3MobmF2YmFyT3BlbmVkRHJvcGRvd25MaXN0KTtcbiAgICAgIGRhdGEuYnV0dG9uLmFkZENsYXNzKG5hdmJhck9wZW5lZEJ1dHRvbik7XG4gICAgICB2YXIgY29uZmlnID0gZGF0YS5jb25maWc7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbjtcbiAgICAgIGlmIChcbiAgICAgICAgYW5pbWF0aW9uID09PSAnbm9uZScgfHxcbiAgICAgICAgIXRyYW0uc3VwcG9ydC50cmFuc2Zvcm0gfHxcbiAgICAgICAgY29uZmlnLmR1cmF0aW9uIDw9IDBcbiAgICAgICkge1xuICAgICAgICBpbW1lZGlhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGJvZHlIZWlnaHQgPSBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpO1xuICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkYXRhLm1lbnUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB2YXIgbWVudVdpZHRoID0gZGF0YS5tZW51Lm91dGVyV2lkdGgodHJ1ZSk7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gZGF0YS5lbC5oZWlnaHQoKTtcbiAgICAgIHZhciBuYXZiYXJFbCA9IGRhdGEuZWxbMF07XG4gICAgICByZXNpemUoMCwgbmF2YmFyRWwpO1xuICAgICAgaXguaW50cm8oMCwgbmF2YmFyRWwpO1xuICAgICAgV2ViZmxvdy5yZWRyYXcudXAoKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjbGljayBvdXRzaWRlIGV2ZW50c1xuICAgICAgaWYgKCFkZXNpZ25lcikge1xuICAgICAgICAkZG9jLm9uKCdjbGljaycgKyBuYW1lc3BhY2UsIGRhdGEub3V0c2lkZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vIHRyYW5zaXRpb24gZm9yIGltbWVkaWF0ZVxuICAgICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgICBjb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFuc0NvbmZpZyA9ICd0cmFuc2Zvcm0gJyArIGNvbmZpZy5kdXJhdGlvbiArICdtcyAnICsgY29uZmlnLmVhc2luZztcblxuICAgICAgLy8gQWRkIG1lbnUgdG8gb3ZlcmxheVxuICAgICAgaWYgKGRhdGEub3ZlcmxheSkge1xuICAgICAgICBtZW51U2libGluZyA9IGRhdGEubWVudS5wcmV2KCk7XG4gICAgICAgIGRhdGEub3ZlcmxheS5zaG93KCkuYXBwZW5kKGRhdGEubWVudSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE92ZXIgbGVmdC9yaWdodFxuICAgICAgaWYgKGNvbmZpZy5hbmltT3Zlcikge1xuICAgICAgICB0cmFtKGRhdGEubWVudSlcbiAgICAgICAgICAuYWRkKHRyYW5zQ29uZmlnKVxuICAgICAgICAgIC5zZXQoe3g6IGNvbmZpZy5hbmltRGlyZWN0ICogbWVudVdpZHRoLCBoZWlnaHQ6IGJvZHlIZWlnaHR9KVxuICAgICAgICAgIC5zdGFydCh7eDogMH0pXG4gICAgICAgICAgLnRoZW4oY29tcGxldGUpO1xuICAgICAgICBkYXRhLm92ZXJsYXkgJiYgZGF0YS5vdmVybGF5LndpZHRoKG1lbnVXaWR0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRHJvcCBEb3duXG4gICAgICB2YXIgb2Zmc2V0WSA9IG5hdkhlaWdodCArIG1lbnVIZWlnaHQ7XG4gICAgICB0cmFtKGRhdGEubWVudSlcbiAgICAgICAgLmFkZCh0cmFuc0NvbmZpZylcbiAgICAgICAgLnNldCh7eTogLW9mZnNldFl9KVxuICAgICAgICAuc3RhcnQoe3k6IDB9KVxuICAgICAgICAudGhlbihjb21wbGV0ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBkYXRhLmJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPdmVybGF5SGVpZ2h0KGRhdGEpIHtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIHZhciBib2R5SGVpZ2h0ID0gY29uZmlnLmRvY0hlaWdodCA/ICRkb2MuaGVpZ2h0KCkgOiAkYm9keS5oZWlnaHQoKTtcbiAgICAgIGlmIChjb25maWcuYW5pbU92ZXIpIHtcbiAgICAgICAgZGF0YS5tZW51LmhlaWdodChib2R5SGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5lbC5jc3MoJ3Bvc2l0aW9uJykgIT09ICdmaXhlZCcpIHtcbiAgICAgICAgYm9keUhlaWdodCAtPSBkYXRhLmVsLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgfVxuICAgICAgZGF0YS5vdmVybGF5ICYmIGRhdGEub3ZlcmxheS5oZWlnaHQoYm9keUhlaWdodCk7XG4gICAgICByZXR1cm4gYm9keUhlaWdodDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZShkYXRhLCBpbW1lZGlhdGUpIHtcbiAgICAgIGlmICghZGF0YS5vcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRhdGEub3BlbiA9IGZhbHNlO1xuICAgICAgZGF0YS5idXR0b24ucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkQnV0dG9uKTtcbiAgICAgIHZhciBjb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgIGlmIChcbiAgICAgICAgY29uZmlnLmFuaW1hdGlvbiA9PT0gJ25vbmUnIHx8XG4gICAgICAgICF0cmFtLnN1cHBvcnQudHJhbnNmb3JtIHx8XG4gICAgICAgIGNvbmZpZy5kdXJhdGlvbiA8PSAwXG4gICAgICApIHtcbiAgICAgICAgaW1tZWRpYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGl4Lm91dHJvKDAsIGRhdGEuZWxbMF0pO1xuXG4gICAgICAvLyBTdG9wIGxpc3RlbmluZyBmb3IgY2xpY2sgb3V0c2lkZSBldmVudHNcbiAgICAgICRkb2Mub2ZmKCdjbGljaycgKyBuYW1lc3BhY2UsIGRhdGEub3V0c2lkZSk7XG5cbiAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpLnN0b3AoKTtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhbnNDb25maWcgPSAndHJhbnNmb3JtICcgKyBjb25maWcuZHVyYXRpb24gKyAnbXMgJyArIGNvbmZpZy5lYXNpbmcyO1xuICAgICAgdmFyIG1lbnVIZWlnaHQgPSBkYXRhLm1lbnUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICB2YXIgbWVudVdpZHRoID0gZGF0YS5tZW51Lm91dGVyV2lkdGgodHJ1ZSk7XG4gICAgICB2YXIgbmF2SGVpZ2h0ID0gZGF0YS5lbC5oZWlnaHQoKTtcblxuICAgICAgLy8gT3ZlciBsZWZ0L3JpZ2h0XG4gICAgICBpZiAoY29uZmlnLmFuaW1PdmVyKSB7XG4gICAgICAgIHRyYW0oZGF0YS5tZW51KVxuICAgICAgICAgIC5hZGQodHJhbnNDb25maWcpXG4gICAgICAgICAgLnN0YXJ0KHt4OiBtZW51V2lkdGggKiBjb25maWcuYW5pbURpcmVjdH0pXG4gICAgICAgICAgLnRoZW4oY29tcGxldGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIERyb3AgRG93blxuICAgICAgdmFyIG9mZnNldFkgPSBuYXZIZWlnaHQgKyBtZW51SGVpZ2h0O1xuICAgICAgdHJhbShkYXRhLm1lbnUpLmFkZCh0cmFuc0NvbmZpZykuc3RhcnQoe3k6IC1vZmZzZXRZfSkudGhlbihjb21wbGV0ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBkYXRhLm1lbnUuaGVpZ2h0KCcnKTtcbiAgICAgICAgdHJhbShkYXRhLm1lbnUpLnNldCh7eDogMCwgeTogMH0pO1xuICAgICAgICBkYXRhLm1lbnUuZWFjaChyZW1vdmVNZW51T3Blbik7XG4gICAgICAgIGRhdGEubGlua3MucmVtb3ZlQ2xhc3MobmF2YmFyT3BlbmVkTGluayk7XG4gICAgICAgIGRhdGEuZHJvcGRvd25zLnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duKTtcbiAgICAgICAgZGF0YS5kcm9wZG93blRvZ2dsZS5yZW1vdmVDbGFzcyhuYXZiYXJPcGVuZWREcm9wZG93blRvZ2dsZSk7XG4gICAgICAgIGRhdGEuZHJvcGRvd25MaXN0LnJlbW92ZUNsYXNzKG5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCk7XG4gICAgICAgIGlmIChkYXRhLm92ZXJsYXkgJiYgZGF0YS5vdmVybGF5LmNoaWxkcmVuKCkubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gTW92ZSBtZW51IGJhY2sgdG8gcGFyZW50IGF0IHRoZSBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgIG1lbnVTaWJsaW5nLmxlbmd0aFxuICAgICAgICAgICAgPyBkYXRhLm1lbnUuaW5zZXJ0QWZ0ZXIobWVudVNpYmxpbmcpXG4gICAgICAgICAgICA6IGRhdGEubWVudS5wcmVwZW5kVG8oZGF0YS5wYXJlbnQpO1xuICAgICAgICAgIGRhdGEub3ZlcmxheS5hdHRyKCdzdHlsZScsICcnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcmlnZ2VyIGV2ZW50IHNvIG90aGVyIGNvbXBvbmVudHMgY2FuIGhvb2sgaW4gKGRyb3Bkb3duKVxuICAgICAgICBkYXRhLmVsLnRyaWdnZXJIYW5kbGVyKCd3LWNsb3NlJyk7XG4gICAgICAgIGRhdGEuYnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvcnQgbW9kdWxlXG4gICAgcmV0dXJuIGFwaTtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJJWEV2ZW50cyIsIktFWV9DT0RFUyIsIkFSUk9XX0xFRlQiLCJBUlJPV19VUCIsIkFSUk9XX1JJR0hUIiwiQVJST1dfRE9XTiIsIkVTQ0FQRSIsIlNQQUNFIiwiRU5URVIiLCJIT01FIiwiRU5EIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJfIiwiYXBpIiwidHJhbSIsIiR3aW4iLCJ3aW5kb3ciLCIkZG9jIiwiZG9jdW1lbnQiLCJkZWJvdW5jZSIsIiRib2R5IiwiJG5hdmJhcnMiLCJkZXNpZ25lciIsImluRWRpdG9yIiwiaW5BcHAiLCJlbnYiLCJvdmVybGF5IiwibmFtZXNwYWNlIiwibmF2YmFyT3BlbmVkQnV0dG9uIiwibmF2YmFyT3BlbmVkRHJvcGRvd24iLCJuYXZiYXJPcGVuZWREcm9wZG93blRvZ2dsZSIsIm5hdmJhck9wZW5lZERyb3Bkb3duTGlzdCIsIm5hdmJhck9wZW5lZExpbmsiLCJpeCIsInRyaWdnZXJzIiwibWVudVNpYmxpbmciLCJyZWFkeSIsImRlc2lnbiIsInByZXZpZXciLCJpbml0IiwiZGVzdHJveSIsInJlbW92ZUxpc3RlbmVycyIsImxlbmd0aCIsImVhY2giLCJ0ZWFyZG93biIsImJvZHkiLCJmaW5kIiwiYnVpbGQiLCJhZGRMaXN0ZW5lcnMiLCJyZXNpemUiLCJvZmYiLCJyZXNpemVBbGwiLCJvbiIsImkiLCJlbCIsIiRlbCIsImRhdGEiLCJvcGVuIiwiY29uZmlnIiwic2VsZWN0ZWRJZHgiLCJtZW51IiwibGlua3MiLCJkcm9wZG93bnMiLCJkcm9wZG93blRvZ2dsZSIsImRyb3Bkb3duTGlzdCIsImJ1dHRvbiIsImNvbnRhaW5lciIsIm92ZXJsYXlDb250YWluZXJJZCIsIm91dHNpZGUiLCJuYXZCcmFuZExpbmsiLCJhdHRyIiwiY29uZmlndXJlIiwicmVtb3ZlT3ZlcmxheSIsImhhbmRsZXIiLCJhZGRPdmVybGF5IiwidG9nZ2xlIiwibmF2aWdhdGUiLCJtYWtlVG9nZ2xlQnV0dG9uS2V5Ym9hcmRIYW5kbGVyIiwibWFrZUxpbmtzS2V5Ym9hcmRIYW5kbGVyIiwicmVtb3ZlRGF0YSIsImNsb3NlIiwicmVtb3ZlIiwiYXBwZW5kVG8iLCJwYXJlbnQiLCJvbGQiLCJhbmltYXRpb24iLCJhbmltT3ZlciIsInRlc3QiLCJhbmltRGlyZWN0IiwiZGVmZXIiLCJyZW9wZW4iLCJlYXNpbmciLCJlYXNpbmcyIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJkb2NIZWlnaHQiLCJldnQiLCJvcHRpb25zIiwid2luV2lkdGgiLCJ3aWR0aCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImZvY3VzU2VsZWN0ZWRMaW5rIiwiaW5kZXgiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJNYXRoIiwibWF4IiwibWluIiwic2VsZWN0ZWRFbGVtZW50IiwibGluayIsImhyZWYiLCJ2YWxpZENsaWNrIiwiY3VycmVudFRhcmdldCIsImluZGV4T2YiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiY2xvc2VzdCIsIm91dHNpZGVEZWJvdW5jZWQiLCJpcyIsImNvbGxhcHNlZCIsImNzcyIsInVwZGF0ZUVhY2hNYXgiLCJ1cGRhdGVNYXgiLCJzZXRPdmVybGF5SGVpZ2h0IiwibWF4V2lkdGgiLCJjb250YWluTWF4IiwiYWRkTWVudU9wZW4iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVNZW51T3BlbiIsInJlbW92ZUF0dHJpYnV0ZSIsImltbWVkaWF0ZSIsImFkZENsYXNzIiwic3VwcG9ydCIsInRyYW5zZm9ybSIsImJvZHlIZWlnaHQiLCJtZW51SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJtZW51V2lkdGgiLCJvdXRlcldpZHRoIiwibmF2SGVpZ2h0IiwiaGVpZ2h0IiwibmF2YmFyRWwiLCJpbnRybyIsInJlZHJhdyIsInVwIiwiY29tcGxldGUiLCJ0cmFuc0NvbmZpZyIsInByZXYiLCJzaG93IiwiYXBwZW5kIiwiYWRkIiwic2V0IiwieCIsInN0YXJ0IiwidGhlbiIsIm9mZnNldFkiLCJ5IiwicmVtb3ZlQ2xhc3MiLCJvdXRybyIsInN0b3AiLCJjaGlsZHJlbiIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiaGlkZSIsInRyaWdnZXJIYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsR0FFNUI7O0NBRUM7QUFFRCxJQUFJQSxVQUFVQyxRQUFRO0FBQ3RCLElBQUlDLFdBQVdELFFBQVE7QUFFdkIsTUFBTUUsWUFBWTtJQUNoQkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLEtBQUs7QUFDUDtBQUVBWixRQUFRYSxNQUFNLENBQ1osVUFDQ0MsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLENBQUMsRUFBRUMsQ0FBQztJQUM5QixJQUFJQyxNQUFNLENBQUM7SUFDWCxJQUFJQyxPQUFPSCxFQUFFRyxJQUFJO0lBQ2pCLElBQUlDLE9BQU9KLEVBQUVLO0lBQ2IsSUFBSUMsT0FBT04sRUFBRU87SUFDYixJQUFJQyxXQUFXUCxFQUFFTyxRQUFRO0lBQ3pCLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDO0lBQ0os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

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.3.9")
})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.3.9";

})();
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__(461);__webpack_require__(624);__webpack_require__(286);__webpack_require__(334);__webpack_require__(338);__webpack_require__(695);__webpack_require__(655);__webpack_require__(527);
})();

})()
;