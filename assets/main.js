! function (a, b) {
    function c(a) {
        var b, c, d = L[a] = {};
        for (a = a.split(/\s+/), b = 0, c = a.length; b < c; b++) d[a[b]] = !0;
        return d
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(O, "-$1").toLowerCase();
            if ("string" == typeof (d = a.getAttribute(e))) {
                try {
                    d = "true" === d || "false" !== d && ("null" === d ? null : K.isNumeric(d) ? parseFloat(d) : N.test(d) ? K.parseJSON(d) : d)
                } catch (a) {}
                K.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        for (var b in a)
            if (("data" !== b || !K.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function f(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            f = b + "mark",
            g = K._data(a, d);
        !g || "queue" !== c && K._data(a, e) || "mark" !== c && K._data(a, f) || setTimeout(function () {
            K._data(a, e) || K._data(a, f) || (K.removeData(a, d, !0), g.fire())
        }, 0)
    }

    function g() {
        return !1
    }

    function h() {
        return !0
    }

    function i(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function j(a, b, c) {
        if (b = b || 0, K.isFunction(b)) return K.grep(a, function (a, d) {
            return !!b.call(a, d, a) === c
        });
        if (b.nodeType) return K.grep(a, function (a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = K.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (la.test(b)) return K.filter(b, d, !c);
            b = K.filter(b, d)
        }
        return K.grep(a, function (a, d) {
            return K.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = pa.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function l(a, b) {
        return K.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a, b) {
        if (1 === b.nodeType && K.hasData(a)) {
            var c, d, e, f = K._data(a),
                g = K._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) K.event.add(b, c + (h[c][d].namespace ? "." : "") + h[c][d].namespace, h[c][d], h[c][d].data)
            }
            g.data && (g.data = K.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(K.expando))
    }

    function o(a) {
        return void 0 !== a.getElementsByTagName ? a.getElementsByTagName("*") : void 0 !== a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        "checkbox" !== a.type && "radio" !== a.type || (a.defaultChecked = a.checked)
    }

    function q(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? p(a) : "script" !== b && void 0 !== a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), p)
    }

    function r(a) {
        var b = H.createElement("div");
        return Da.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function s(a, b) {
        b.src ? K.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : K.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ba, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function t(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? Oa : Pa,
            f = 0,
            g = e.length;
        if (d > 0) {
            if ("border" !== c)
                for (; f < g; f++) c || (d -= parseFloat(K.css(a, "padding" + e[f])) || 0), "margin" === c ? d += parseFloat(K.css(a, c + e[f])) || 0 : d -= parseFloat(K.css(a, "border" + e[f] + "Width")) || 0;
            return d + "px"
        }
        if (d = Ea(a, b, b), (d < 0 || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c)
            for (; f < g; f++) d += parseFloat(K.css(a, "padding" + e[f])) || 0, "padding" !== c && (d += parseFloat(K.css(a, "border" + e[f] + "Width")) || 0), "margin" === c && (d += parseFloat(K.css(a, c + e[f])) || 0);
        return d + "px"
    }

    function u(a) {
        return function (b, c) {
            if ("string" != typeof b && (c = b, b = "*"), K.isFunction(c))
                for (var d, e, f, g = b.toLowerCase().split(cb), h = 0, i = g.length; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function v(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === gb; j < k && (l || !h); j++) "string" == typeof (h = i[j](c, d, e)) && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = v(a, c, d, e, h, g)));
        return !l && h || g["*"] || (h = v(a, c, d, e, "*", g)), h
    }

    function w(a, c) {
        var d, e, f = K.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && K.extend(!0, a, e)
    }

    function x(a, b, c, d) {
        if (K.isArray(b)) K.each(b, function (b, e) {
            c || Ta.test(a) ? d(a, e) : x(a + "[" + ("object" == typeof e || K.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else
            for (var e in b) x(a + "[" + e + "]", b[e], c, d)
    }

    function y(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                } if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }

    function z(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k, l = a.dataTypes,
            m = {},
            n = l.length,
            o = l[0];
        for (d = 1; d < n; d++) {
            if (1 === d)
                for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (g = o, "*" === (o = l[d])) o = g;
            else if ("*" !== g && g !== o) {
                if (h = g + " " + o, !(i = m[h] || m["* " + o])) {
                    k = b;
                    for (j in m)
                        if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                            j = m[j], !0 === j ? i = k : !0 === k && (i = j);
                            break
                        }
                }
                i || k || K.error("No conversion from " + h.replace(" ", " to ")), !0 !== i && (c = i ? i(c) : k(j(c)))
            }
        }
        return c
    }

    function A() {
        try {
            return new a.XMLHttpRequest
        } catch (a) {}
    }

    function B() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    }

    function C() {
        return setTimeout(D, 0), rb = K.now()
    }

    function D() {
        rb = b
    }

    function E(a, b) {
        var c = {};
        return K.each(vb.concat.apply([], vb.slice(0, b)), function () {
            c[this] = a
        }), c
    }

    function F(a) {
        if (!sb[a]) {
            var b = H.body,
                c = K("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove(), "none" !== d && "" !== d || (ob || (ob = H.createElement("iframe"), ob.frameBorder = ob.width = ob.height = 0), b.appendChild(ob), pb && ob.createElement || (pb = (ob.contentWindow || ob.contentDocument).document, pb.write(("CSS1Compat" === H.compatMode ? "<!doctype html>" : "") + "<html><body>"), pb.close()), c = pb.createElement(a), pb.body.appendChild(c), d = K.css(c, "display"), b.removeChild(ob)), sb[a] = d
        }
        return sb[a]
    }

    function G(a) {
        return K.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var H = a.document,
        I = a.navigator,
        J = a.location,
        K = function () {
            function c() {
                if (!h.isReady) {
                    try {
                        H.documentElement.doScroll("left")
                    } catch (a) {
                        return void setTimeout(c, 1)
                    }
                    h.ready()
                }
            }
            var d, e, f, g, h = function (a, b) {
                    return new h.fn.init(a, b, d)
                },
                i = a.jQuery,
                j = a.$,
                k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                s = /(?:^|:|,)(?:\s*\[)+/g,
                t = /(webkit)[ \/]([\w.]+)/,
                u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                x = /-([a-z]|[0-9])/gi,
                y = /^-ms-/,
                z = function (a, b) {
                    return (b + "").toUpperCase()
                },
                A = I.userAgent,
                B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                G = Array.prototype.indexOf,
                J = {};
            return h.fn = h.prototype = {
                constructor: h,
                init: function (a, c, d) {
                    var e, f, g, i;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && H.body) return this.context = H, this[0] = H.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : k.exec(a)) || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : H, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [H.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                        if ((f = H.getElementById(e[2])) && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = H, this.selector = a, this
                    }
                    return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return E.call(this, 0)
                },
                get: function (a) {
                    return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function (a, b) {
                    return h.each(this, a, b)
                },
                ready: function (a) {
                    return h.bindReady(), f.add(a), this
                },
                eq: function (a) {
                    return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(h.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function () {
                var a, c, d, e, f, g, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" == typeof i || h.isFunction(i) || (i = {}), k === j && (i = this, --j); j < k; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                return i
            }, h.extend({
                noConflict: function (b) {
                    return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? h.readyWait++ : h.ready(!0)
                },
                ready: function (a) {
                    if (!0 === a && !--h.readyWait || !0 !== a && !h.isReady) {
                        if (!H.body) return setTimeout(h.ready, 1);
                        if (h.isReady = !0, !0 !== a && --h.readyWait > 0) return;
                        f.fireWith(H, [h]), h.fn.trigger && h(H).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!f) {
                        if (f = h.Callbacks("once memory"), "complete" === H.readyState) return setTimeout(h.ready, 1);
                        if (H.addEventListener) H.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                        else if (H.attachEvent) {
                            H.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (a) {}
                            H.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function (a) {
                    return "function" === h.type(a)
                },
                isArray: Array.isArray || function (a) {
                    return "array" === h.type(a)
                },
                isWindow: function (a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return null == a ? String(a) : J[B.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (a) {
                        return !1
                    }
                    var c;
                    for (c in a);
                    return c === b || C.call(a, c)
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
                },
                parseXML: function (c) {
                    var d, e;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (a) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + c), d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && l.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(y, "ms-").replace(x, z)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        i = g === b || h.isFunction(a);
                    if (d)
                        if (i) {
                            for (e in a)
                                if (!1 === c.apply(a[e], d)) break
                        } else
                            for (; f < g && !1 !== c.apply(a[f++], d););
                    else if (i) {
                        for (e in a)
                            if (!1 === c.call(a[e], e, a[e])) break
                    } else
                        for (; f < g && !1 !== c.call(a[f], f, a[f++]););
                    return a
                },
                trim: F ? function (a) {
                    return null == a ? "" : F.call(a)
                } : function (a) {
                    return null == a ? "" : a.toString().replace(m, "").replace(n, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = h.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (G) return G.call(b, a, c);
                        for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function (a, b, c) {
                    var d, e = [];
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function (a, c, d) {
                    var e, f, g = [],
                        i = 0,
                        j = a.length;
                    if (a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a)))
                        for (; i < j; i++) null != (e = c(a[i], i, d)) && (g[g.length] = e);
                    else
                        for (f in a) null != (e = c(a[f], f, d)) && (g[g.length] = e);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function (a, c) {
                    if ("string" == typeof c) {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!h.isFunction(a)) return b;
                    var e = E.call(arguments, 2),
                        f = function () {
                            return a.apply(c, e.concat(E.call(arguments)))
                        };
                    return f.guid = a.guid = a.guid || f.guid || h.guid++, f
                },
                access: function (a, c, d, e, f, g) {
                    var i = a.length;
                    if ("object" == typeof c) {
                        for (var j in c) h.access(a, j, c[j], e, f, d);
                        return a
                    }
                    if (d !== b) {
                        e = !g && e && h.isFunction(d);
                        for (var k = 0; k < i; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                        return a
                    }
                    return i ? f(a[0], c) : b
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
                        return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(H);
                    return a
                },
                browser: {}
            }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(H), H.addEventListener ? g = function () {
                H.removeEventListener("DOMContentLoaded", g, !1), h.ready()
            } : H.attachEvent && (g = function () {
                "complete" === H.readyState && (H.detachEvent("onreadystatechange", g), h.ready())
            }), h
        }(),
        L = {};
    K.Callbacks = function (a) {
        a = a ? L[a] || c(a) : {};
        var d, e, f, g, h, i = [],
            j = [],
            k = function (b) {
                var c, d, e, f;
                for (c = 0, d = b.length; c < d; c++) e = b[c], f = K.type(e), "array" === f ? k(e) : "function" === f && (a.unique && m.has(e) || i.push(e))
            },
            l = function (b, c) {
                for (c = c || [], d = !a.memory || [b, c], e = !0, h = f || 0, f = 0, g = i.length; i && h < g; h++)
                    if (!1 === i[h].apply(b, c) && a.stopOnFalse) {
                        d = !0;
                        break
                    } e = !1, i && (a.once ? !0 === d ? m.disable() : i = [] : j && j.length && (d = j.shift(), m.fireWith(d[0], d[1])))
            },
            m = {
                add: function () {
                    if (i) {
                        var a = i.length;
                        k(arguments), e ? g = i.length : d && !0 !== d && (f = a, l(d[0], d[1]))
                    }
                    return this
                },
                remove: function () {
                    if (i)
                        for (var b = arguments, c = 0, d = b.length; c < d; c++)
                            for (var f = 0; f < i.length && (b[c] !== i[f] || (e && f <= g && (g--, f <= h && h--), i.splice(f--, 1), !a.unique)); f++);
                    return this
                },
                has: function (a) {
                    if (i)
                        for (var b = 0, c = i.length; b < c; b++)
                            if (a === i[b]) return !0;
                    return !1
                },
                empty: function () {
                    return i = [], this
                },
                disable: function () {
                    return i = j = d = b, this
                },
                disabled: function () {
                    return !i
                },
                lock: function () {
                    return j = b, d && !0 !== d || m.disable(), this
                },
                locked: function () {
                    return !j
                },
                fireWith: function (b, c) {
                    return j && (e ? a.once || j.push([b, c]) : a.once && d || l(b, c)), this
                },
                fire: function () {
                    return m.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return m
    };
    var M = [].slice;
    K.extend({
        Deferred: function (a) {
            var b, c = K.Callbacks("once memory"),
                d = K.Callbacks("once memory"),
                e = K.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: c,
                    reject: d,
                    notify: e
                },
                h = {
                    done: c.add,
                    fail: d.add,
                    progress: e.add,
                    state: function () {
                        return f
                    },
                    isResolved: c.fired,
                    isRejected: d.fired,
                    then: function (a, b, c) {
                        return i.done(a).fail(b).progress(c), this
                    },
                    always: function () {
                        return i.done.apply(i, arguments).fail.apply(i, arguments), this
                    },
                    pipe: function (a, b, c) {
                        return K.Deferred(function (d) {
                            K.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c, e = b[0],
                                    f = b[1];
                                K.isFunction(e) ? i[a](function () {
                                    c = e.apply(this, arguments), c && K.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
                                }) : i[a](d[f])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({});
            for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
            return i.done(function () {
                f = "resolved"
            }, d.disable, e.lock).fail(function () {
                f = "rejected"
            }, c.disable, e.lock), a && a.call(i, i), i
        },
        when: function (a) {
            function b(a) {
                return function (b) {
                    d[a] = arguments.length > 1 ? M.call(arguments, 0) : b, --h || i.resolveWith(i, d)
                }
            }

            function c(a) {
                return function (b) {
                    g[a] = arguments.length > 1 ? M.call(arguments, 0) : b, i.notifyWith(j, g)
                }
            }
            var d = M.call(arguments, 0),
                e = 0,
                f = d.length,
                g = new Array(f),
                h = f,
                i = f <= 1 && a && K.isFunction(a.promise) ? a : K.Deferred(),
                j = i.promise();
            if (f > 1) {
                for (; e < f; e++) d[e] && d[e].promise && K.isFunction(d[e].promise) ? d[e].promise().then(b(e), i.reject, c(e)) : --h;
                h || i.resolveWith(i, d)
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j
        }
    }), K.support = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m, n = H.createElement("div");
        H.documentElement;
        if (n.setAttribute("className", "t"), n.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
        e = H.createElement("select"), f = e.appendChild(H.createElement("option")), g = n.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === n.firstChild.nodeType,
            tbody: !n.getElementsByTagName("tbody").length,
            htmlSerialize: !!n.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== n.className,
            enctype: !!H.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete n.test
        } catch (a) {
            b.deleteExpando = !1
        }
        if (!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", function () {
                b.noCloneEvent = !1
            }), n.cloneNode(!0).fireEvent("onclick")), g = H.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), n.appendChild(g), i = H.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, i.removeChild(g), i.appendChild(n), n.innerHTML = "", a.getComputedStyle && (h = H.createElement("div"), h.style.width = "0", h.style.marginRight = "0", n.style.width = "2px", n.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), n.attachEvent)
            for (l in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) k = "on" + l, m = k in n, m || (n.setAttribute(k, "return;"), m = "function" == typeof n[k]), b[l + "Bubbles"] = m;
        return i.removeChild(n), i = e = f = h = n = g = null, K(function () {
            var a, c, d, e, f, g, h, i, k, l, o = H.getElementsByTagName("body")[0];
            o && (g = 1, h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", i = "visibility:hidden;border:0;", k = "style='" + h + "border:5px solid #000;padding:0;'", l = "<div " + k + "><div></div></div><table " + k + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = H.createElement("div"), a.style.cssText = i + "width:0;height:0;position:static;top:0;margin-top:" + g + "px", o.insertBefore(a, o.firstChild), n = H.createElement("div"), a.appendChild(n), n.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", j = n.getElementsByTagName("td"), m = 0 === j[0].offsetHeight, j[0].style.display = "", j[1].style.display = "none", b.reliableHiddenOffsets = m && 0 === j[0].offsetHeight, n.innerHTML = "", n.style.width = n.style.paddingLeft = "1px", K.boxModel = b.boxModel = 2 === n.offsetWidth, void 0 !== n.style.zoom && (n.style.display = "inline", n.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === n.offsetWidth, n.style.display = "", n.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== n.offsetWidth), n.style.cssText = h + i, n.innerHTML = l, c = n.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, f = {
                doesNotAddBorder: 5 !== d.offsetTop,
                doesAddBorderForTableAndCells: 5 === e.offsetTop
            }, d.style.position = "fixed", d.style.top = "20px", f.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", f.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, f.doesNotIncludeMarginInBodyOffset = o.offsetTop !== g, o.removeChild(a), n = a = null, K.extend(b, f))
        }), b
    }();
    var N = /^(?:\{.*\}|\[.*\])$/,
        O = /([A-Z])/g;
    K.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            return !!(a = a.nodeType ? K.cache[a[K.expando]] : a[K.expando]) && !e(a)
        },
        data: function (a, c, d, e) {
            if (K.acceptData(a)) {
                var f, g, h, i = K.expando,
                    j = "string" == typeof c,
                    k = a.nodeType,
                    l = k ? K.cache : a,
                    m = k ? a[i] : a[i] && i,
                    n = "events" === c;
                if (m && l[m] && (n || e || l[m].data) || !j || d !== b) return m || (k ? a[i] = m = ++K.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = K.noop)), "object" != typeof c && "function" != typeof c || (e ? l[m] = K.extend(l[m], c) : l[m].data = K.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[K.camelCase(c)] = d), n && !g[c] ? f.events : (j ? null == (h = g[c]) && (h = g[K.camelCase(c)]) : h = g, h)
            }
        },
        removeData: function (a, b, c) {
            if (K.acceptData(a)) {
                var d, f, g, h = K.expando,
                    i = a.nodeType,
                    j = i ? K.cache : a,
                    k = i ? a[h] : h;
                if (j[k]) {
                    if (b && (d = c ? j[k] : j[k].data)) {
                        K.isArray(b) || (b in d ? b = [b] : (b = K.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; f < g; f++) delete d[b[f]];
                        if (!(c ? e : K.isEmptyObject)(d)) return
                    }(c || (delete j[k].data, e(j[k]))) && (K.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (K.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null))
                }
            }
        },
        _data: function (a, b, c) {
            return K.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = K.noData[a.nodeName.toLowerCase()];
                if (b) return !(!0 === b || a.getAttribute("classid") !== b)
            }
            return !0
        }
    }), K.fn.extend({
        data: function (a, c) {
            var e, f, g, h = null;
            if (void 0 === a) {
                if (this.length && (h = K.data(this[0]), 1 === this[0].nodeType && !K._data(this[0], "parsedAttrs"))) {
                    f = this[0].attributes;
                    for (var i = 0, j = f.length; i < j; i++) g = f[i].name, 0 === g.indexOf("data-") && (g = K.camelCase(g.substring(5)), d(this[0], g, h[g]));
                    K._data(this[0], "parsedAttrs", !0)
                }
                return h
            }
            return "object" == typeof a ? this.each(function () {
                K.data(this, a)
            }) : (e = a.split("."), e[1] = e[1] ? "." + e[1] : "", c === b ? (h = this.triggerHandler("getData" + e[1] + "!", [e[0]]), h === b && this.length && (h = K.data(this[0], a), h = d(this[0], a, h)), h === b && e[1] ? this.data(e[0]) : h) : this.each(function () {
                var b = K(this),
                    d = [e[0], c];
                b.triggerHandler("setData" + e[1] + "!", d), K.data(this, a, c), b.triggerHandler("changeData" + e[1] + "!", d)
            }))
        },
        removeData: function (a) {
            return this.each(function () {
                K.removeData(this, a)
            })
        }
    }), K.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", K._data(a, b, (K._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            if (!0 !== a && (c = b, b = a, a = !1), b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (K._data(b, d) || 1) - 1;
                e ? K._data(b, d, e) : (K.removeData(b, d, !0), f(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = K._data(a, b), c && (!d || K.isArray(c) ? d = K._data(a, b, K.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = K.queue(a, b),
                d = c.shift(),
                e = {};
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), K._data(a, b + ".run", e), d.call(a, function () {
                K.dequeue(a, b)
            }, e)), c.length || (K.removeData(a, b + "queue " + b + ".run", !0), f(a, b, "queue"))
        }
    }), K.fn.extend({
        queue: function (a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? K.queue(this[0], a) : this.each(function () {
                var b = K.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && K.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                K.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = K.fx ? K.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function d() {
                --i || f.resolveWith(g, [g])
            }
            "string" != typeof a && (a, a = b), a = a || "fx";
            for (var e, f = K.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = K.data(g[h], j, b, !0) || (K.data(g[h], k, b, !0) || K.data(g[h], l, b, !0)) && K.data(g[h], j, K.Callbacks("once memory"), !0)) && (i++, e.add(d));
            return d(), f.promise()
        }
    });
    var P, Q, R, S = /[\n\t\r]/g,
        T = /\s+/,
        U = /\r/g,
        V = /^(?:button|input)$/i,
        W = /^(?:button|input|object|select|textarea)$/i,
        X = /^a(?:rea)?$/i,
        Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Z = K.support.getSetAttribute;
    K.fn.extend({
        attr: function (a, b) {
            return K.access(this, a, b, !0, K.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                K.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return K.access(this, a, b, !0, K.prop)
        },
        removeProp: function (a) {
            return a = K.propFix[a] || a, this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (a) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, f, g, h;
            if (K.isFunction(a)) return this.each(function (b) {
                K(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(T), c = 0, d = this.length; c < d; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; g < h; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = K.trim(f)
                        } else e.className = a;
            return this
        },
        removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (K.isFunction(a)) return this.each(function (b) {
                K(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(T), d = 0, e = this.length; d < e; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            for (g = (" " + f.className + " ").replace(S, " "), h = 0, i = c.length; h < i; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = K.trim(g)
                        } else f.className = "";
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return K.isFunction(a) ? this.each(function (c) {
                K(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)
                    for (var e, f = 0, g = K(this), h = b, i = a.split(T); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else "undefined" !== c && "boolean" !== c || (this.className && K._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(S, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function (a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = K.isFunction(a), this.each(function (d) {
                    var f, g = K(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : K.isArray(f) && (f = K.map(f, function (a) {
                        return null == a ? "" : a + ""
                    })), (c = K.valHooks[this.nodeName.toLowerCase()] || K.valHooks[this.type]) && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return (c = K.valHooks[f.nodeName.toLowerCase()] || K.valHooks[f.type]) && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(U, "") : null == d ? "" : d)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = "select-one" === a.type;
                    if (f < 0) return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; c < d; c++)
                        if (e = h[c], e.selected && (K.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !K.nodeName(e.parentNode, "optgroup"))) {
                            if (b = K(e).val(), i) return b;
                            g.push(b)
                        } return i && !g.length && h.length ? K(h[f]).val() : g
                },
                set: function (a, b) {
                    var c = K.makeArray(b);
                    return K(a).find("option").each(function () {
                        this.selected = K.inArray(K(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) return e && c in K.attrFn ? K(a)[c](d) : void 0 === a.getAttribute ? K.prop(a, c, d) : (h = 1 !== i || !K.isXMLDoc(a), h && (c = c.toLowerCase(), g = K.attrHooks[c] || (Y.test(c) ? Q : P)), d !== b ? null === d ? void K.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function (a, b) {
            var c, d, e, f, g = 0;
            if (b && 1 === a.nodeType)
                for (d = b.toLowerCase().split(T), f = d.length; g < f; g++)(e = d[g]) && (c = K.propFix[e] || e, K.attr(a, e, ""), a.removeAttribute(Z ? e : c), Y.test(e) && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (V.test(a.nodeName) && a.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === b && K.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function (a, b) {
                    return P && K.nodeName(a, "button") ? P.get(a, b) : b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (P && K.nodeName(a, "button")) return P.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !K.isXMLDoc(a), g && (c = K.propFix[c] || c, f = K.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : W.test(a.nodeName) || X.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), K.attrHooks.tabindex = K.propHooks.tabIndex, Q = {
        get: function (a, c) {
            var d, e = K.prop(a, c);
            return !0 === e || "boolean" != typeof e && (d = a.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            return !1 === b ? K.removeAttr(a, c) : (d = K.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Z || (R = {
        name: !0,
        id: !0
    }, P = K.valHooks.button = {
        get: function (a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (R[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = H.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
        }
    }, K.attrHooks.tabindex.set = P.set, K.each(["width", "height"], function (a, b) {
        K.attrHooks[b] = K.extend(K.attrHooks[b], {
            set: function (a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        })
    }), K.attrHooks.contenteditable = {
        get: P.get,
        set: function (a, b, c) {
            "" === b && (b = "false"), P.set(a, b, c)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function (a, c) {
        K.attrHooks[c] = K.extend(K.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = {
            get: function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), K.each(["radio", "checkbox"], function () {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function (a, b) {
                if (K.isArray(b)) return a.checked = K.inArray(K(a).val(), b) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        _ = /^([^\.]*)?(?:\.(.+))?$/,
        aa = /\bhover(\.\S+)?\b/,
        ba = /^key/,
        ca = /^(?:mouse|contextmenu)|click/,
        da = /^(?:focusinfocus|focusoutblur)$/,
        ea = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        fa = function (a) {
            var b = ea.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        },
        ga = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c.class || {}).value))
        },
        ha = function (a) {
            return K.event.special.hover ? a : a.replace(aa, "mouseenter$1 mouseleave$1")
        };
    K.event = {
            add: function (a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = K._data(a))) {
                    for (d.handler && (o = d, d = o.handler), d.guid || (d.guid = K.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
                            return void 0 === K || a && K.event.triggered === a.type ? b : K.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = a), c = K.trim(ha(c)).split(" "), j = 0; j < c.length; j++) k = _.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = K.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = K.event.special[l] || {}, n = K.extend({
                        type: l,
                        origType: k[1],
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        quick: fa(f),
                        namespace: m.join(".")
                    }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && !1 !== q.setup.call(a, e, m, h) || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), K.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r = K.hasData(a) && K._data(a);
                if (r && (m = r.events)) {
                    for (b = K.trim(ha(b || "")).split(" "), f = 0; f < b.length; f++)
                        if (g = _.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                            for (n = K.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], !e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q));
                            0 === p.length && k !== p.length && (n.teardown && !1 !== n.teardown.call(a, j) || K.removeEvent(a, h, r.handle), delete m[h])
                        } else
                            for (h in m) K.event.remove(a, h + b[f], c, d, !0);
                    K.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), K.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                        r = [];
                    if (!da.test(q + K.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !K.event.customEvent[q] || K.event.global[q]))
                        if (c = "object" == typeof c ? c[K.expando] ? c : new K.Event(q, c) : new K.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
                            if (c.result = b, c.target || (c.target = e), d = null != d ? K.makeArray(d) : [], d.unshift(c), m = K.event.special[q] || {}, !m.trigger || !1 !== m.trigger.apply(e, d)) {
                                if (o = [
                                        [e, m.bindType || q]
                                    ], !f && !m.noBubble && !K.isWindow(e)) {
                                    for (p = m.delegateType || q, j = da.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                                    k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                                }
                                for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (K._data(j, "events") || {})[c.type] && K._data(j, "handle"), n && n.apply(j, d), (n = l && j[l]) && K.acceptData(j) && !1 === n.apply(j, d) && c.preventDefault();
                                return c.type = q, f || c.isDefaultPrevented() || m._default && !1 !== m._default.apply(e.ownerDocument, d) || "click" === q && K.nodeName(e, "a") || !K.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !K.isWindow(e) && (k = e[l], k && (e[l] = null), K.event.triggered = q, e[q](), K.event.triggered = b, k && (e[l] = k)), c.result
                            }
                        } else {
                            g = K.cache;
                            for (i in g) g[i].events && g[i].events[q] && K.event.trigger(c, d, g[i].handle.elem, !0)
                        }
                }
            },
            dispatch: function (c) {
                c = K.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m, n = (K._data(this, "events") || {})[c.type] || [],
                    o = n.delegateCount,
                    p = [].slice.call(arguments, 0),
                    q = !c.exclusive && !c.namespace,
                    r = [];
                if (p[0] = c, c.delegateTarget = this, o && !c.target.disabled && (!c.button || "click" !== c.type))
                    for (g = K(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this) {
                        for (i = {}, k = [], g[0] = f, d = 0; d < o; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? ga(f, l.quick) : g.is(m)), i[m] && k.push(l);
                        k.length && r.push({
                            elem: f,
                            matches: k
                        })
                    }
                for (n.length > o && r.push({
                        elem: this,
                        matches: n.slice(o)
                    }), d = 0; d < r.length && !c.isPropagationStopped(); d++)
                    for (j = r[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, (h = ((K.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p)) !== b && (c.result = h, !1 === h && (c.preventDefault(), c.stopPropagation())));
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            fix: function (a) {
                if (a[K.expando]) return a;
                var c, d, e = a,
                    f = K.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                for (a = K.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
                return a.target || (a.target = e.srcElement || H), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
            },
            special: {
                ready: {
                    setup: K.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (a, b, c) {
                        K.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function (a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = K.extend(new K.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? K.event.trigger(e, null, b) : K.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = H.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, K.Event = function (a, b) {
            if (!(this instanceof K.Event)) return new K.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? h : g) : this.type = a, b && K.extend(this, b), this.timeStamp = a && a.timeStamp || K.now(), this[K.expando] = !0
        }, K.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = h;
                var a = this.originalEvent;
                a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = h;
                var a = this.originalEvent;
                a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = h, this.stopPropagation()
            },
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (a, b) {
            K.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector;
                    return e && (e === d || K.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function () {
                if (K.nodeName(this, "form")) return !1;
                K.event.add(this, "click._submit keypress._submit", function (a) {
                    var c = a.target,
                        d = K.nodeName(c, "input") || K.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (K.event.add(d, "submit._submit", function (a) {
                        this.parentNode && !a.isTrigger && K.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function () {
                if (K.nodeName(this, "form")) return !1;
                K.event.remove(this, "._submit")
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function () {
                if ($.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (K.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1, K.event.simulate("change", this, a, !0))
                })), !1;
                K.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    $.test(b.nodeName) && !b._change_attached && (K.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || K.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function (a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return K.event.remove(this, "._change"), $.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = 0,
                d = function (a) {
                    K.event.simulate(b, a.target, K.event.fix(a), !0)
                };
            K.event.special[b] = {
                setup: function () {
                    0 == c++ && H.addEventListener(a, d, !0)
                },
                teardown: function () {
                    0 == --c && H.removeEventListener(a, d, !0)
                }
            }
        }), K.fn.extend({
            on: function (a, c, d, e, f) {
                var h, i;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = c, c = b);
                    for (i in a) this.on(i, c, d, a[i], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), !1 === e) e = g;
                else if (!e) return this;
                return 1 === f && (h = e, e = function (a) {
                    return K().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = K.guid++)), this.each(function () {
                    K.event.add(this, a, e, d, c)
                })
            },
            one: function (a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    return K(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler), this
                }
                if ("object" == typeof a) {
                    for (var f in a) this.off(f, c, a[f]);
                    return this
                }
                return !1 !== c && "function" != typeof c || (d = c, c = b), !1 === d && (d = g), this.each(function () {
                    K.event.remove(this, a, d, c)
                })
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            live: function (a, b, c) {
                return K(this.context).on(a, this.selector, b, c), this
            },
            die: function (a, b) {
                return K(this.context).off(a, this.selector || "**", b), this
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    K.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                if (this[0]) return K.event.trigger(a, b, this[0], !0)
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || K.guid++,
                    d = 0,
                    e = function (c) {
                        var e = (K._data(this, "lastToggle" + a.guid) || 0) % d;
                        return K._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                    };
                for (e.guid = c; d < b.length;) b[d++].guid = c;
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            K.fn[b] = function (a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, K.attrFn && (K.attrFn[b] = !0), ba.test(b) && (K.event.fixHooks[b] = K.event.keyHooks), ca.test(b) && (K.event.fixHooks[b] = K.event.mouseHooks)
        }),
        function () {
            function a(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; h < i; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 !== j.nodeType || g || (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }

            function c(a, b, c, d, f, g) {
                for (var h = 0, i = d.length; h < i; h++) {
                    var j = d[h];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j[e] === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 === j.nodeType)
                                if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[h] = k
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = "sizcache" + (Math.random() + "").replace(".", ""),
                f = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function () {
                return i = !1, 0
            });
            var m = function (a, b, c, e) {
                c = c || [], b = b || H;
                var f = b;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" != typeof a) return c;
                var h, i, j, k, l, n, q, r, t = !0,
                    u = m.isXML(b),
                    w = [],
                    x = a;
                do {
                    if (d.exec(""), (h = d.exec(x)) && (x = h[3], w.push(h[1]), h[2])) {
                        k = h[3];
                        break
                    }
                } while (h);
                if (w.length > 1 && p.exec(a))
                    if (2 === w.length && o.relative[w[0]]) i = v(w[0] + w[1], b, e);
                    else
                        for (i = o.relative[w[0]] ? [b] : m(w.shift(), b); w.length;) a = w.shift(), o.relative[a] && (a += w.shift()), i = v(a, i, e);
                else if (!e && w.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (l = m.find(w.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                    for (l = e ? {
                            expr: w.pop(),
                            set: s(e)
                        } : m.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, w.length > 0 ? j = s(i) : t = !1; w.length;) n = w.pop(), q = n, o.relative[n] ? q = w.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
                else j = w = [];
                if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                    if (t)
                        if (b && 1 === b.nodeType)
                            for (r = 0; null != j[r]; r++) j[r] && (!0 === j[r] || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                        else
                            for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                else c.push.apply(c, j);
                else s(j, c);
                return k && (m(k, f, c, e), m.uniqueSort(c)), c
            };
            m.uniqueSort = function (a) {
                if (t && (h = i, a.sort(t), h))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            }, m.matches = function (a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function (a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function (a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; e < f; e++)
                    if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), null != (d = o.find[h](g, b, c))))) {
                        a = a.replace(o.match[h], "");
                        break
                    } return d || (d = void 0 !== b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                    set: d,
                    expr: a
                }
            }, m.filter = function (a, c, d, e) {
                for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                    for (h in o.filter)
                        if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                            if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                            if (s === r && (r = []), o.preFilter[h])
                                if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                    if (!0 === f) continue
                                } else g = i = !0;
                            if (f)
                                for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                break
                            }
                        } if (a === q) {
                        if (null != g) break;
                        m.error(a)
                    }
                    q = a
                }
                return s
            }, m.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function (a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (1 === d || 9 === d) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (3 === d || 4 === d) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        class: "className",
                        for: "htmlFor"
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        },
                        type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = "string" == typeof b,
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f, g = 0, h = a.length; g < h; g++)
                                if (f = a[g]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                } e && m.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                for (b = b.toLowerCase(); e < f; e++)
                                    if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b && g
                                    }
                            } else {
                                for (; e < f; e++)(c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function (b, d, e) {
                            var g, h = f++,
                                i = c;
                            "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("parentNode", d, h, b, g, e)
                        },
                        "~": function (b, d, e) {
                            var g, h = f++,
                                i = c;
                            "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("previousSibling", d, h, b, g, e)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (void 0 !== b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function (a, b) {
                            if (void 0 !== b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            if (void 0 !== b.getElementsByTagName) return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            if (a = " " + a[1].replace(j, "") + " ", f) return a;
                            for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function (a) {
                            if ("nth" === a[1]) {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            return a[0] = f++, a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                        },
                        PSEUDO: function (a, b, c, e, f) {
                            if ("not" === a[1]) {
                                if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                    var g = m.filter(a[3], b, c, !0 ^ f);
                                    return c || e.push.apply(e, g), !1
                                }
                                a[3] = m(a[3], null, null, b)
                            } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function (a) {
                            return a.unshift(!0), a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return !1 === a.disabled && "hidden" !== a.type
                        },
                        disabled: function (a) {
                            return !0 === a.disabled
                        },
                        checked: function (a) {
                            return !0 === a.checked
                        },
                        selected: function (a) {
                            return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                        },
                        radio: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                        },
                        checkbox: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                        },
                        file: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "file" === a.type
                        },
                        password: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "password" === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "submit" === a.type
                        },
                        image: function (a) {
                            return "input" === a.nodeName.toLowerCase() && "image" === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return ("input" === b || "button" === b) && "reset" === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return 0 === b
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 == 0
                        },
                        odd: function (a, b) {
                            return b % 2 == 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function (a, b) {
                            var c, d, f, g, h, i, j = b[1],
                                k = a;
                            switch (j) {
                                case "only":
                                case "first":
                                    for (; k = k.previousSibling;)
                                        if (1 === k.nodeType) return !1;
                                    if ("first" === j) return !0;
                                    k = a;
                                case "last":
                                    for (; k = k.nextSibling;)
                                        if (1 === k.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                    if (f = b[0], (g = a.parentNode) && (g[e] !== f || !a.nodeIndex)) {
                                        for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                        g[e] = f
                                    }
                                    return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c == 0 && i / c >= 0
                            }
                        },
                        ID: function (a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function (a, b) {
                            return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f && (e === g || e.substr(0, g.length + 1) === g + "-") : e && !1 !== d
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                p = o.match.POS,
                q = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function (a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(H.documentElement.childNodes, 0)[0].nodeType
            } catch (a) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length)
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var t, u;
            H.documentElement.compareDocumentPosition ? t = function (a, b) {
                    return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (t = function (a, b) {
                    if (a === b) return h = !0, 0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return u(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j), j = j.parentNode;
                    for (j = i; j;) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return u(e[k], f[k]);
                    return k === c ? u(a, f[k], -1) : u(e[k], b, 1)
                }, u = function (a, b, c) {
                    if (a === b) {
                        return c;
                        var d
                    }
                    for (; d;) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function () {
                    var a = H.createElement("div"),
                        c = "script" + (new Date).getTime(),
                        d = H.documentElement;
                    a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), H.getElementById(c) && (o.find.ID = function (a, c, d) {
                        if (void 0 !== c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || void 0 !== e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function (a, b) {
                        var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }), d.removeChild(a), d = a = null
                }(),
                function () {
                    var a = H.createElement("div");
                    a.appendChild(H.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && void 0 !== a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function (a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), H.querySelectorAll && function () {
                    var a = m,
                        b = H.createElement("div");
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        m = function (b, c, d, e) {
                            if (c = c || H, !e && !m.isXML(c)) {
                                var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (f && (1 === c.nodeType || 9 === c.nodeType)) {
                                    if (f[1]) return s(c.getElementsByTagName(b), d);
                                    if (f[2] && o.find.CLASS && c.getElementsByClassName) return s(c.getElementsByClassName(f[2]), d)
                                }
                                if (9 === c.nodeType) {
                                    if ("body" === b && c.body) return s([c.body], d);
                                    if (f && f[3]) {
                                        var g = c.getElementById(f[3]);
                                        if (!g || !g.parentNode) return s([], d);
                                        if (g.id === f[3]) return s([g], d)
                                    }
                                    try {
                                        return s(c.querySelectorAll(b), d)
                                    } catch (a) {}
                                } else if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                                    var h = c,
                                        i = c.getAttribute("id"),
                                        j = i || "__sizzle__",
                                        k = c.parentNode,
                                        l = /^\s*[+~]/.test(b);
                                    i ? j = j.replace(/'/g, "\\$&") : c.setAttribute("id", j), l && k && (c = c.parentNode);
                                    try {
                                        if (!l || k) return s(c.querySelectorAll("[id='" + j + "'] " + b), d)
                                    } catch (a) {} finally {
                                        i || h.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, c, d, e)
                        };
                        for (var c in a) m[c] = a[c];
                        b = null
                    }
                }(),
                function () {
                    var a = H.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var c = !b.call(H.createElement("div"), "div"),
                            d = !1;
                        try {
                            b.call(H.documentElement, "[test!='']:sizzle")
                        } catch (a) {
                            d = !0
                        }
                        m.matchesSelector = function (a, e) {
                            if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                    var f = b.call(a, e);
                                    if (f || !c || a.document && 11 !== a.document.nodeType) return f
                                }
                            } catch (a) {}
                            return m(e, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = H.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                        if (void 0 !== b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
                    }, a = null))
                }(), H.documentElement.contains ? m.contains = function (a, b) {
                    return a !== b && (!a.contains || a.contains(b))
                } : H.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                } : m.contains = function () {
                    return !1
                }, m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return !!b && "HTML" !== b.nodeName
                };
            var v = function (a, b, c) {
                for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = K.attr, m.selectors.attrMap = {}, K.find = m, K.expr = m.selectors, K.expr[":"] = K.expr.filters, K.unique = m.uniqueSort, K.text = m.getText, K.isXMLDoc = m.isXML, K.contains = m.contains
        }();
    var ia = /Until$/,
        ja = /^(?:parents|prevUntil|prevAll)/,
        ka = /,/,
        la = /^.[^:#\[\.,]*$/,
        ma = Array.prototype.slice,
        na = K.expr.match.POS,
        oa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function (a) {
            var b, c, d = this;
            if ("string" != typeof a) return K(a).filter(function () {
                for (b = 0, c = d.length; b < c; b++)
                    if (K.contains(d[b], this)) return !0
            });
            var e, f, g, h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++)
                if (e = h.length, K.find(a, this[b], h), b > 0)
                    for (f = e; f < h.length; f++)
                        for (g = 0; g < e; g++)
                            if (h[g] === h[f]) {
                                h.splice(f--, 1);
                                break
                            } return h
        },
        has: function (a) {
            var b = K(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (K.contains(this, b[a])) return !0
            })
        },
        not: function (a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && ("string" == typeof a ? na.test(a) ? K(a, this.context).index(this[0]) >= 0 : K.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c, d, e = [],
                f = this[0];
            if (K.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b;) {
                    for (c = 0; c < a.length; c++) K(f).is(a[c]) && e.push({
                        selector: a[c],
                        elem: f,
                        level: g
                    });
                    f = f.parentNode, g++
                }
                return e
            }
            var h = na.test(a) || "string" != typeof a ? K(a, b || this.context) : 0;
            for (c = 0, d = this.length; c < d; c++)
                for (f = this[c]; f;) {
                    if (h ? h.index(f) > -1 : K.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (!(f = f.parentNode) || !f.ownerDocument || f === b || 11 === f.nodeType) break
                }
            return e = e.length > 1 ? K.unique(e) : e, this.pushStack(e, "closest", a)
        },
        index: function (a) {
            return a ? "string" == typeof a ? K.inArray(this[0], K(a)) : K.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? K(a, b) : K.makeArray(a && a.nodeType ? [a] : a),
                d = K.merge(this.get(), c);
            return this.pushStack(i(c[0]) || i(d[0]) ? d : K.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), K.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return K.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return K.dir(a, "parentNode", c)
        },
        next: function (a) {
            return K.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return K.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return K.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return K.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return K.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return K.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return K.sibling(a.parentNode.firstChild, a)
        },
        children: function (a) {
            return K.sibling(a.firstChild)
        },
        contents: function (a) {
            return K.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : K.makeArray(a.childNodes)
        }
    }, function (a, b) {
        K.fn[a] = function (c, d) {
            var e = K.map(this, b, c);
            return ia.test(a) || (d = c), d && "string" == typeof d && (e = K.filter(d, e)), e = this.length > 1 && !oa[a] ? K.unique(e) : e, (this.length > 1 || ka.test(d)) && ja.test(a) && (e = e.reverse()), this.pushStack(e, a, ma.call(arguments).join(","))
        }
    }), K.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? K.find.matchesSelector(b[0], a) ? [b[0]] : [] : K.find.matches(a, b)
        },
        dir: function (a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !K(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var pa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qa = / jQuery\d+="(?:\d+|null)"/g,
        ra = /^\s+/,
        sa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ta = /<([\w:]+)/,
        ua = /<tbody/i,
        va = /<|&#?\w+;/,
        wa = /<(?:script|style)/i,
        xa = /<(?:script|object|embed|option|style)/i,
        ya = new RegExp("<(?:" + pa + ")", "i"),
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /\/(java|ecma)script/i,
        Ba = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Ca = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Da = k(H);
    Ca.optgroup = Ca.option, Ca.tbody = Ca.tfoot = Ca.colgroup = Ca.caption = Ca.thead, Ca.th = Ca.td, K.support.htmlSerialize || (Ca._default = [1, "div<div>", "</div>"]), K.fn.extend({
        text: function (a) {
            return K.isFunction(a) ? this.each(function (b) {
                var c = K(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a)) : K.text(this)
        },
        wrapAll: function (a) {
            if (K.isFunction(a)) return this.each(function (b) {
                K(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = K(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return K.isFunction(a) ? this.each(function (b) {
                K(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = K(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = K.isFunction(a);
            return this.each(function (c) {
                K(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = K.clean(arguments);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, K.clean(arguments)), a
            }
        },
        remove: function (a, b) {
            for (var c, d = 0; null != (c = this[d]); d++) a && !K.filter(a, [c]).length || (b || 1 !== c.nodeType || (K.cleanData(c.getElementsByTagName("*")), K.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && K.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return K.clone(this, a, b)
            })
        },
        html: function (a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(qa, "") : null;
            if ("string" != typeof a || wa.test(a) || !K.support.leadingWhitespace && ra.test(a) || Ca[(ta.exec(a) || ["", ""])[1].toLowerCase()]) K.isFunction(a) ? this.each(function (b) {
                var c = K(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(sa, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) 1 === this[c].nodeType && (K.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (b) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function (a) {
            return this[0] && this[0].parentNode ? K.isFunction(a) ? this.each(function (b) {
                var c = K(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = K(a).detach()), this.each(function () {
                var b = this.nextSibling,
                    c = this.parentNode;
                K(this).remove(), b ? K(b).before(a) : K(c).append(a)
            })) : this.length ? this.pushStack(K(K.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!K.support.checkClone && 3 === arguments.length && "string" == typeof i && za.test(i)) return this.each(function () {
                K(this).domManip(a, c, d, !0)
            });
            if (K.isFunction(i)) return this.each(function (e) {
                var f = K(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = K.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : K.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild) {
                    c = c && K.nodeName(f, "tr");
                    for (var k = 0, m = this.length, n = m - 1; k < m; k++) d.call(c ? l(this[k], f) : this[k], e.cacheable || m > 1 && k < n ? K.clone(g, !0, !0) : g)
                }
                j.length && K.each(j, s)
            }
            return this
        }
    }), K.buildFragment = function (a, b, c) {
        var d, e, f, g, h = a[0];
        return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = H), !(1 === a.length && "string" == typeof h && h.length < 512 && g === H && "<" === h.charAt(0)) || xa.test(h) || !K.support.checkClone && za.test(h) || !K.support.html5Clone && ya.test(h) || (e = !0, (f = K.fragments[h]) && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), K.clean(a, g, d, c)), e && (K.fragments[h] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, K.fragments = {}, K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        K.fn[a] = function (c) {
            var d = [],
                e = K(c),
                f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var g = 0, h = e.length; g < h; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                K(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), K.extend({
        clone: function (a, b, c) {
            var d, e, f, g = K.support.html5Clone || !ya.test("<" + a.nodeName) ? a.cloneNode(!0) : r(a);
            if (!(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || K.isXMLDoc(a)))
                for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))
                for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
            return d = e = null, g
        },
        clean: function (a, b, c, d) {
            var e;
            b = b || H, void 0 === b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || H);
            for (var f, g, h = [], i = 0; null != (g = a[i]); i++)
                if ("number" == typeof g && (g += ""), g) {
                    if ("string" == typeof g)
                        if (va.test(g)) {
                            g = g.replace(sa, "<$1></$2>");
                            var j = (ta.exec(g) || ["", ""])[1].toLowerCase(),
                                l = Ca[j] || Ca._default,
                                m = l[0],
                                n = b.createElement("div");
                            for (b === H ? Da.appendChild(n) : k(b).appendChild(n), n.innerHTML = l[1] + g + l[2]; m--;) n = n.lastChild;
                            if (!K.support.tbody) {
                                var o = ua.test(g),
                                    p = "table" !== j || o ? "<table>" !== l[1] || o ? [] : n.childNodes : n.firstChild && n.firstChild.childNodes;
                                for (f = p.length - 1; f >= 0; --f) K.nodeName(p[f], "tbody") && !p[f].childNodes.length && p[f].parentNode.removeChild(p[f])
                            }!K.support.leadingWhitespace && ra.test(g) && n.insertBefore(b.createTextNode(ra.exec(g)[0]), n.firstChild), g = n.childNodes
                        } else g = b.createTextNode(g);
                    var r;
                    if (!K.support.appendChecked)
                        if (g[0] && "number" == typeof (r = g.length))
                            for (f = 0; f < r; f++) q(g[f]);
                        else q(g);
                    g.nodeType ? h.push(g) : h = K.merge(h, g)
                } if (c)
                for (e = function (a) {
                        return !a.type || Aa.test(a.type)
                    }, i = 0; h[i]; i++)
                    if (!d || !K.nodeName(h[i], "script") || h[i].type && "text/javascript" !== h[i].type.toLowerCase()) {
                        if (1 === h[i].nodeType) {
                            var s = K.grep(h[i].getElementsByTagName("script"), e);
                            h.splice.apply(h, [i + 1, 0].concat(s))
                        }
                        c.appendChild(h[i])
                    } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
            return h
        },
        cleanData: function (a) {
            for (var b, c, d, e = K.cache, f = K.event.special, g = K.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                if ((!d.nodeName || !K.noData[d.nodeName.toLowerCase()]) && (c = d[K.expando])) {
                    if ((b = e[c]) && b.events) {
                        for (var i in b.events) f[i] ? K.event.remove(d, i) : K.removeEvent(d, i, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete d[K.expando] : d.removeAttribute && d.removeAttribute(K.expando), delete e[c]
                }
        }
    });
    var Ea, Fa, Ga, Ha = /alpha\([^)]*\)/i,
        Ia = /opacity=([^)]*)/,
        Ja = /([A-Z]|^ms)/g,
        Ka = /^-?\d+(?:px)?$/i,
        La = /^-?\d/,
        Ma = /^([\-+])=([\-+.\de]+)/,
        Na = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Oa = ["Left", "Right"],
        Pa = ["Top", "Bottom"];
    K.fn.css = function (a, c) {
        return 2 === arguments.length && c === b ? this : K.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? K.style(a, c, d) : K.css(a, c)
        })
    }, K.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ea(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h = K.camelCase(c),
                    i = a.style,
                    j = K.cssHooks[h];
                if (c = K.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                if (!(g = typeof d, "string" === g && (f = Ma.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(K.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || K.cssNumber[h] || (d += "px"), j && "set" in j && (d = j.set(a, d)) === b))) try {
                    i[c] = d
                } catch (a) {}
            }
        },
        css: function (a, c, d) {
            var e, f;
            return c = K.camelCase(c), f = K.cssHooks[c], c = K.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Ea ? Ea(a, c) : void 0
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), K.curCSS = K.css, K.each(["height", "width"], function (a, b) {
        K.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) return 0 !== a.offsetWidth ? t(a, b, d) : (K.swap(a, Na, function () {
                    e = t(a, b, d)
                }), e)
            },
            set: function (a, b) {
                return Ka.test(b) ? (b = parseFloat(b)) >= 0 ? b + "px" : void 0 : b
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function (a, b) {
            return Ia.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = K.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === K.trim(f.replace(Ha, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ha.test(f) ? f.replace(Ha, e) : f + " " + e)
        }
    }), K(function () {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                return K.swap(a, {
                    display: "inline-block"
                }, function () {
                    c = b ? Ea(a, "margin-right", "marginRight") : a.style.marginRight
                }), c
            }
        })
    }), H.defaultView && H.defaultView.getComputedStyle && (Fa = function (a, b) {
        var c, d, e;
        return b = b.replace(Ja, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && ("" !== (c = e.getPropertyValue(b)) || K.contains(a.ownerDocument.documentElement, a) || (c = K.style(a, b))), c
    }), H.documentElement.currentStyle && (Ga = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return null === f && g && (e = g[b]) && (f = e), !Ka.test(f) && La.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
    }), Ea = Fa || Ga, K.expr && K.expr.filters && (K.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !K.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || K.css(a, "display"))
    }, K.expr.filters.visible = function (a) {
        return !K.expr.filters.hidden(a)
    });
    var Qa, Ra, Sa = /%20/g,
        Ta = /\[\]$/,
        Ua = /\r?\n/g,
        Va = /#.*$/,
        Wa = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ya = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Za = /^(?:GET|HEAD)$/,
        $a = /^\/\//,
        _a = /\?/,
        ab = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bb = /^(?:select|textarea)/i,
        cb = /\s+/,
        db = /([?&])_=[^&]*/,
        eb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        fb = K.fn.load,
        gb = {},
        hb = {},
        ib = ["*/"] + ["*"];
    try {
        Qa = J.href
    } catch (a) {
        Qa = H.createElement("a"), Qa.href = "", Qa = Qa.href
    }
    Ra = eb.exec(Qa.toLowerCase()) || [], K.fn.extend({
        load: function (a, c, d) {
            if ("string" != typeof a && fb) return fb.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (K.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = K.param(c, K.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return K.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), h.html(f ? K("<div>").append(c.replace(ab, "")).find(f) : c)), d && h.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function () {
            return K.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bb.test(this.nodeName) || Xa.test(this.type))
            }).map(function (a, b) {
                var c = K(this).val();
                return null == c ? null : K.isArray(c) ? K.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Ua, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Ua, "\r\n")
                }
            }).get()
        }
    }), K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        K.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), K.each(["get", "post"], function (a, c) {
        K[c] = function (a, d, e, f) {
            return K.isFunction(d) && (f = f || e, e = d, d = b), K.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), K.extend({
        getScript: function (a, c) {
            return K.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return K.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            return b ? w(a, K.ajaxSettings) : (b = a, a = K.ajaxSettings), w(a, b), a
        },
        ajaxSettings: {
            url: Qa,
            isLocal: Ya.test(Ra[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ib
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: u(gb),
        ajaxTransport: u(hb),
        ajax: function (a, c) {
            function d(a, c, d, g) {
                if (2 !== u) {
                    u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0;
                    var j, l, s, t, v, x = c,
                        A = d ? y(m, w, d) : b;
                    if (a >= 200 && a < 300 || 304 === a)
                        if (m.ifModified && ((t = w.getResponseHeader("Last-Modified")) && (K.lastModified[e] = t), (v = w.getResponseHeader("Etag")) && (K.etag[e] = v)), 304 === a) x = "notmodified", j = !0;
                        else try {
                            l = z(m, A), x = "success", j = !0
                        } catch (a) {
                            x = "parsererror", s = a
                        } else s = x, x && !a || (x = "error", a < 0 && (a = 0));
                    w.status = a, w.statusText = "" + (c || x), j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --K.active || K.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = K.ajaxSetup({}, c),
                n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof K) ? K(n) : K.event,
                p = K.Deferred(),
                q = K.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                w = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a, s[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === u ? f : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (2 === u) {
                            if (!g)
                                for (g = {}; c = Wa.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        return u || (m.mimeType = a), this
                    },
                    abort: function (a) {
                        return a = a || "abort", h && h.abort(a), d(0, a), this
                    }
                };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function (a) {
                    if (a) {
                        var b;
                        if (u < 2)
                            for (b in a) r[b] = [r[b], a[b]];
                        else b = a[w.status], w.then(b, b)
                    }
                    return this
                }, m.url = ((a || m.url) + "").replace(Va, "").replace($a, Ra[1] + "//"), m.dataTypes = K.trim(m.dataType || "*").toLowerCase().split(cb), null == m.crossDomain && (j = eb.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] == Ra[1] && j[2] == Ra[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (Ra[3] || ("http:" === Ra[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = K.param(m.data, m.traditional)), v(gb, m, c, w), 2 === u) return !1;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Za.test(m.type), k && 0 == K.active++ && K.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (_a.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, !1 === m.cache)) {
                var x = K.now(),
                    A = m.url.replace(db, "$1_=" + x);
                m.url = A + (A === m.url ? (_a.test(m.url) ? "&" : "?") + "_=" + x : "")
            }(m.data && m.hasContent && !1 !== m.contentType || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, K.lastModified[e] && w.setRequestHeader("If-Modified-Since", K.lastModified[e]), K.etag[e] && w.setRequestHeader("If-None-Match", K.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ib + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (!1 === m.beforeSend.call(n, w, m) || 2 === u)) return w.abort(), !1;
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (h = v(hb, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, h.send(s, d)
                } catch (a) {
                    if (!(u < 2)) throw a;
                    d(-1, a)
                }
            } else d(-1, "No Transport");
            return w
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = K.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = K.ajaxSettings.traditional), K.isArray(a) || a.jquery && !K.isPlainObject(a)) K.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (var f in a) x(f, a[f], c, e);
            return d.join("&").replace(Sa, "+")
        }
    }), K.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var jb = K.now(),
        kb = /(\=)\?(&|$)|\?\?/i;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return K.expando + "_" + jb++
        }
    }), K.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || !1 !== b.jsonp && (kb.test(b.url) || e && kb.test(b.data))) {
            var f, g = b.jsonpCallback = K.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                i = b.url,
                j = b.data,
                k = "$1" + g + "$2";
            return !1 !== b.jsonp && (i = i.replace(kb, k), b.url === i && (e && (j = j.replace(kb, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function (a) {
                f = [a]
            }, d.always(function () {
                a[g] = h, f && K.isFunction(h) && a[g](f[0])
            }), b.converters["script json"] = function () {
                return f || K.error(g + " was not called"), f[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                return K.globalEval(a), a
            }
        }
    }), K.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), K.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
            return {
                send: function (e, f) {
                    c = H.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function () {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var lb, mb = !!a.ActiveXObject && function () {
            for (var a in lb) lb[a](0, 1)
        },
        nb = 0;
    K.ajaxSettings.xhr = a.ActiveXObject ? function () {
            return !this.isLocal && A() || B()
        } : A,
        function (a) {
            K.extend(K.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function (c) {
            if (!c.crossDomain || K.support.cors) {
                var d;
                return {
                    send: function (e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (a) {}
                        i.send(c.hasContent && c.data || null), d = function (a, e) {
                            var h, j, k, l, m;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = K.noop, mb && delete lb[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m), l.text = i.responseText;
                                        try {
                                            j = i.statusText
                                        } catch (a) {
                                            j = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (a) {
                                e || f(-1, a)
                            }
                            l && f(h, j, l, k)
                        }, c.async && 4 !== i.readyState ? (g = ++nb, mb && (lb || (lb = {}, K(a).unload(mb)), lb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var ob, pb, qb, rb, sb = {},
        tb = /^(?:toggle|show|hide)$/,
        ub = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        vb = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    K.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || 0 === a) return this.animate(E("show", 3), a, b, c);
            for (var f = 0, g = this.length; f < g; f++) d = this[f], d.style && (e = d.style.display, K._data(d, "olddisplay") || "none" !== e || (e = d.style.display = ""), "" === e && "none" === K.css(d, "display") && K._data(d, "olddisplay", F(d.nodeName)));
            for (f = 0; f < g; f++) d = this[f], d.style && ("" !== (e = d.style.display) && "none" !== e || (d.style.display = K._data(d, "olddisplay") || ""));
            return this
        },
        hide: function (a, b, c) {
            if (a || 0 === a) return this.animate(E("hide", 3), a, b, c);
            for (var d, e, f = 0, g = this.length; f < g; f++) d = this[f], d.style && ("none" === (e = K.css(d, "display")) || K._data(d, "olddisplay") || K._data(d, "olddisplay", e));
            for (f = 0; f < g; f++) this[f].style && (this[f].style.display = "none");
            return this
        },
        _toggle: K.fn.toggle,
        toggle: function (a, b, c) {
            var d = "boolean" == typeof a;
            return K.isFunction(a) && K.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function () {
                var b = d ? a : K(this).is(":hidden");
                K(this)[b ? "show" : "hide"]()
            }) : this.animate(E("toggle", 3), a, b, c), this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function e() {
                !1 === f.queue && K._mark(this);
                var b, c, d, e, g, h, i, j, k, l = K.extend({}, f),
                    m = 1 === this.nodeType,
                    n = m && K(this).is(":hidden");
                l.animatedProperties = {};
                for (d in a) {
                    if (b = K.camelCase(d), d !== b && (a[b] = a[d], delete a[d]), c = a[b], K.isArray(c) ? (l.animatedProperties[b] = c[1], c = a[b] = c[0]) : l.animatedProperties[b] = l.specialEasing && l.specialEasing[b] || l.easing || "swing", "hide" === c && n || "show" === c && !n) return l.complete.call(this);
                    !m || "height" !== b && "width" !== b || (l.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === K.css(this, "display") && "none" === K.css(this, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== F(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != l.overflow && (this.style.overflow = "hidden");
                for (d in a) e = new K.fx(this, l, d), c = a[d], tb.test(c) ? (k = K._data(this, "toggle" + d) || ("toggle" === c ? n ? "show" : "hide" : 0), k ? (K._data(this, "toggle" + d, "show" === k ? "hide" : "show"), e[k]()) : e[c]()) : (g = ub.exec(c), h = e.cur(), g ? (i = parseFloat(g[2]), j = g[3] || (K.cssNumber[d] ? "" : "px"), "px" !== j && (K.style(this, d, (i || 1) + j), h = (i || 1) / e.cur() * h, K.style(this, d, h + j)), g[1] && (i = ("-=" === g[1] ? -1 : 1) * i + h), e.custom(h, i, j)) : e.custom(h, c, ""));
                return !0
            }
            var f = K.speed(b, c, d);
            return K.isEmptyObject(a) ? this.each(f.complete, [!1]) : (a = K.extend({}, a), !1 === f.queue ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function (a, c, d) {
            return "string" != typeof a && (d = c, c = a, a = b), c && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                function b(a, b, c) {
                    var e = b[c];
                    K.removeData(a, c, !0), e.stop(d)
                }
                var c, e = !1,
                    f = K.timers,
                    g = K._data(this);
                if (d || K._unmark(!0, this), null == a)
                    for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                d && e || K.dequeue(this, a)
            })
        }
    }), K.each({
        slideDown: E("show", 1),
        slideUp: E("hide", 1),
        slideToggle: E("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        K.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), K.extend({
        speed: function (a, b, c) {
            var d = a && "object" == typeof a ? K.extend({}, a) : {
                complete: c || !c && b || K.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !K.isFunction(b) && b
            };
            return d.duration = K.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in K.fx.speeds ? K.fx.speeds[d.duration] : K.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function (a) {
                K.isFunction(d.old) && d.old.call(this), d.queue ? K.dequeue(this, d.queue) : !1 !== a && K._unmark(this)
            }, d
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), K.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (K.fx.step[this.prop] || K.fx.step._default)(this)
        },
        cur: function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = K.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        custom: function (a, c, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
                g = K.fx;
            this.startTime = rb || C(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (K.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function () {
                f.options.hide && K._data(f.elem, "fxshow" + f.prop) === b && K._data(f.elem, "fxshow" + f.prop, f.start)
            }, e() && K.timers.push(e) && !qb && (qb = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = K._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || K.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), K(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = K._data(this.elem, "fxshow" + this.prop) || K.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = rb || C(),
                f = !0,
                g = this.elem,
                h = this.options;
            if (a || e >= h.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), h.animatedProperties[this.prop] = !0;
                for (b in h.animatedProperties) !0 !== h.animatedProperties[b] && (f = !1);
                if (f) {
                    if (null == h.overflow || K.support.shrinkWrapBlocks || K.each(["", "X", "Y"], function (a, b) {
                            g.style["overflow" + b] = h.overflow[a]
                        }), h.hide && K(g).hide(), h.hide || h.show)
                        for (b in h.animatedProperties) K.style(g, b, h.orig[b]), K.removeData(g, "fxshow" + b, !0), K.removeData(g, "toggle" + b, !0);
                    d = h.complete, d && (h.complete = !1, d.call(g))
                }
                return !1
            }
            return h.duration == 1 / 0 ? this.now = e : (c = e - this.startTime, this.state = c / h.duration, this.pos = K.easing[h.animatedProperties[this.prop]](this.state, c, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, K.extend(K.fx, {
        tick: function () {
            for (var a, b = K.timers, c = 0; c < b.length; c++)(a = b[c])() || b[c] !== a || b.splice(c--, 1);
            b.length || K.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(qb), qb = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                K.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), K.each(["width", "height"], function (a, b) {
        K.fx.step[b] = function (a) {
            K.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), K.expr && K.expr.filters && (K.expr.filters.animated = function (a) {
        return K.grep(K.timers, function (b) {
            return a === b.elem
        }).length
    });
    var wb = /^t(?:able|d|h)$/i,
        xb = /^(?:body|html)$/i;
    "getBoundingClientRect" in H.documentElement ? K.fn.offset = function (a) {
        var b, c = this[0];
        if (a) return this.each(function (b) {
            K.offset.setOffset(this, a, b)
        });
        if (!c || !c.ownerDocument) return null;
        if (c === c.ownerDocument.body) return K.offset.bodyOffset(c);
        try {
            b = c.getBoundingClientRect()
        } catch (a) {}
        var d = c.ownerDocument,
            e = d.documentElement;
        if (!b || !K.contains(e, c)) return b ? {
            top: b.top,
            left: b.left
        } : {
            top: 0,
            left: 0
        };
        var f = d.body,
            g = G(d),
            h = e.clientTop || f.clientTop || 0,
            i = e.clientLeft || f.clientLeft || 0,
            j = g.pageYOffset || K.support.boxModel && e.scrollTop || f.scrollTop,
            k = g.pageXOffset || K.support.boxModel && e.scrollLeft || f.scrollLeft;
        return {
            top: b.top + j - h,
            left: b.left + k - i
        }
    } : K.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            K.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
        for (var c, d = b.offsetParent, e = b.ownerDocument, f = e.documentElement, g = e.body, h = e.defaultView, i = h ? h.getComputedStyle(b, null) : b.currentStyle, j = b.offsetTop, k = b.offsetLeft;
            (b = b.parentNode) && b !== g && b !== f && (!K.support.fixedPosition || "fixed" !== i.position);) c = h ? h.getComputedStyle(b, null) : b.currentStyle, j -= b.scrollTop, k -= b.scrollLeft, b === d && (j += b.offsetTop, k += b.offsetLeft, !K.support.doesNotAddBorder || K.support.doesAddBorderForTableAndCells && wb.test(b.nodeName) || (j += parseFloat(c.borderTopWidth) || 0, k += parseFloat(c.borderLeftWidth) || 0), d, d = b.offsetParent), K.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (j += parseFloat(c.borderTopWidth) || 0, k += parseFloat(c.borderLeftWidth) || 0), i = c;
        return "relative" !== i.position && "static" !== i.position || (j += g.offsetTop, k += g.offsetLeft), K.support.fixedPosition && "fixed" === i.position && (j += Math.max(f.scrollTop, g.scrollTop), k += Math.max(f.scrollLeft, g.scrollLeft)), {
            top: j,
            left: k
        }
    }, K.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(K.css(a, "marginTop")) || 0, c += parseFloat(K.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = K.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = K(a),
                h = g.offset(),
                i = K.css(a, "top"),
                j = K.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && K.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), K.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, K.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = xb.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(K.css(a, "marginTop")) || 0, c.left -= parseFloat(K.css(a, "marginLeft")) || 0, d.top += parseFloat(K.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(K.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || H.body; a && !xb.test(a.nodeName) && "static" === K.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), K.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        K.fn[d] = function (c) {
            var e, f;
            return c === b ? (e = this[0]) ? (f = G(e), f ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : K.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d]) : null : this.each(function () {
                f = G(this), f ? f.scrollTo(a ? K(f).scrollLeft() : c, a ? c : K(f).scrollTop()) : this[d] = c
            })
        }
    }), K.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        K.fn["inner" + c] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(K.css(a, d, "padding")) : this[d]() : null
        }, K.fn["outer" + c] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(K.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, K.fn[d] = function (a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (K.isFunction(a)) return this.each(function (b) {
                var c = K(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (K.isWindow(e)) {
                var f = e.document.documentElement["client" + c],
                    g = e.document.body;
                return "CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var h = K.css(e, d),
                    i = parseFloat(h);
                return K.isNumeric(i) ? i : h
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    }), a.jQuery = a.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return K
    })
}(window),
function (a) {
    var b, c, d = a.event;
    b = d.special.debouncedresize = {
        setup: function () {
            a(this).on("resize", b.handler)
        },
        teardown: function () {
            a(this).off("resize", b.handler)
        },
        handler: function (a, e) {
            var f = this,
                g = arguments,
                h = function () {
                    a.type = "debouncedresize", d.dispatch.apply(f, g)
                };
            c && clearTimeout(c), e ? h() : c = setTimeout(h, b.threshold)
        },
        threshold: 150
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function (a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function (a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function (a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function (a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function (a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function (a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function (a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function (a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function (a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function (a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function (a, b, c, d, e) {
            return b == e ? c + d : d * (1 - Math.pow(2, -10 * b / e)) + c
        },
        easeInOutExpo: function (a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (2 - Math.pow(2, -10 * --b)) + c
        },
        easeInCirc: function (a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function (a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function (a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) + c
        },
        easeOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function (a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * -.5 + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
        },
        easeInBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function (a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158),
                (b /= e / 2) < 1 ? d / 2 * (b * b * ((1 + (f *= 1.525)) * b - f)) + c : d / 2 * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c
        },
        easeInBounce: function (a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function (a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function (a, b, c, d, e) {
            return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function (a) {
        a.flexslider = function (b, c) {
            var d = a(b),
                e = a.extend({}, a.flexslider.defaults, c),
                f = e.namespace,
                g = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
                h = g ? "touchend" : "click",
                i = "vertical" === e.direction,
                j = e.reverse,
                k = e.itemWidth > 0,
                l = "fade" === e.animation,
                m = "" !== e.asNavFor,
                n = {};
            a.data(b, "flexslider", d), n = {
                init: function () {
                    d.animating = !1, d.currentSlide = e.startAt, d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = e.selector.substr(0, e.selector.search(" ")), d.slides = a(e.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = a(e.sync).length > 0, "slide" === e.animation && (e.animation = "swing"), d.prop = i ? "top" : "marginLeft", d.args = {}, d.manualPause = !1, d.transitions = !e.video && !l && e.useCSS && function () {
                        var a = document.createElement("div"),
                            b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var c in b)
                            if (void 0 !== a.style[b[c]]) return d.pfx = b[c].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", !0;
                        return !1
                    }(), "" !== e.controlsContainer && (d.controlsContainer = a(e.controlsContainer).length > 0 && a(e.controlsContainer)), "" !== e.manualControls && (d.manualControls = a(e.manualControls).length > 0 && a(e.manualControls)), e.randomize && (d.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    }), d.container.empty().append(d.slides)), d.doMath(), m && n.asNav.setup(), d.setup("init"), e.controlNav && n.controlNav.setup(), e.directionNav && n.directionNav.setup(), e.keyboard && (1 === a(d.containerSelector).length || e.multipleKeyboard) && a(document).bind("keyup", function (a) {
                        var b = a.keyCode;
                        if (!d.animating && (39 === b || 37 === b)) {
                            var c = 39 === b ? d.getTarget("next") : 37 === b && d.getTarget("prev");
                            d.flexAnimate(c, e.pauseOnAction)
                        }
                    }), e.mousewheel && d.bind("mousewheel", function (a, b, c, f) {
                        a.preventDefault();
                        var g = b < 0 ? d.getTarget("next") : d.getTarget("prev");
                        d.flexAnimate(g, e.pauseOnAction)
                    }), e.pausePlay && n.pausePlay.setup(), e.slideshow && (e.pauseOnHover && d.hover(function () {
                        d.pause()
                    }, function () {
                        d.manualPause || d.play()
                    }), e.initDelay > 0 ? setTimeout(d.play, e.initDelay) : d.play()), g && e.touch && n.touch(), (!l || l && e.smoothHeight) && a(window).bind("resize focus", n.resize), setTimeout(function () {
                        e.start(d)
                    }, 200)
                },
                asNav: {
                    setup: function () {
                        d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), d.slides.click(function (b) {
                            b.preventDefault();
                            var c = a(this),
                                f = c.index();
                            a(e.asNavFor).data("flexslider").animating || c.hasClass("active") || (d.direction = d.currentItem < f ? "next" : "prev", d.flexAnimate(f, e.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function () {
                        d.manualControls ? n.controlNav.setupManual() : n.controlNav.setupPaging()
                    },
                    setupPaging: function () {
                        var b, c = "thumbnails" === e.controlNav ? "control-thumbs" : "control-paging",
                            i = 1;
                        if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + c + '"></ol>'), d.pagingCount > 1)
                            for (var j = 0; j < d.pagingCount; j++) b = "thumbnails" === e.controlNav ? '<img src="' + d.slides.eq(j).attr("data-thumb") + '"/>' : "<a>" + i + "</a>", d.controlNavScaffold.append("<li>" + b + "</li>"), i++;
                        d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), n.controlNav.set(), n.controlNav.active(), d.controlNavScaffold.delegate("a, img", h, function (b) {
                            b.preventDefault();
                            var c = a(this),
                                g = d.controlNav.index(c);
                            c.hasClass(f + "active") || (d.direction = g > d.currentSlide ? "next" : "prev", d.flexAnimate(g, e.pauseOnAction))
                        }), g && d.controlNavScaffold.delegate("a", "click touchstart", function (a) {
                            a.preventDefault()
                        })
                    },
                    setupManual: function () {
                        d.controlNav = d.manualControls, n.controlNav.active(), d.controlNav.live(h, function (b) {
                            b.preventDefault();
                            var c = a(this),
                                g = d.controlNav.index(c);
                            c.hasClass(f + "active") || (g > d.currentSlide ? d.direction = "next" : d.direction = "prev", d.flexAnimate(g, e.pauseOnAction))
                        }), g && d.controlNav.live("click touchstart", function (a) {
                            a.preventDefault()
                        })
                    },
                    set: function () {
                        var b = "thumbnails" === e.controlNav ? "img" : "a";
                        d.controlNav = a("." + f + "control-nav li " + b, d.controlsContainer ? d.controlsContainer : d)
                    },
                    active: function () {
                        d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
                    },
                    update: function (b, c) {
                        d.pagingCount > 1 && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), n.controlNav.set(), d.pagingCount > 1 && d.pagingCount !== d.controlNav.length ? d.update(c, b) : n.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function () {
                        var b = a('<ul class="' + f + 'direction-nav"><li><a class="' + f + 'prev" href="#">' + e.prevText + '</a></li><li><a class="' + f + 'next" href="#">' + e.nextText + "</a></li></ul>");
                        d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), n.directionNav.update(), d.directionNav.bind(h, function (b) {
                            b.preventDefault();
                            var c = a(this).hasClass(f + "next") ? d.getTarget("next") : d.getTarget("prev");
                            d.flexAnimate(c, e.pauseOnAction)
                        }), g && d.directionNav.bind("click touchstart", function (a) {
                            a.preventDefault()
                        })
                    },
                    update: function () {
                        var a = f + "disabled";
                        e.animationLoop || (1 === d.pagingCount ? d.directionNav.addClass(a) : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a) : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a) : d.directionNav.removeClass(a))
                    }
                },
                pausePlay: {
                    setup: function () {
                        var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
                        d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), n.pausePlay.update(e.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(h, function (b) {
                            b.preventDefault(), a(this).hasClass(f + "pause") ? (d.pause(), d.manualPause = !0) : (d.play(), d.manualPause = !1)
                        }), g && d.pausePlay.bind("click touchstart", function (a) {
                            a.preventDefault()
                        })
                    },
                    update: function (a) {
                        "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").text(e.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").text(e.pauseText)
                    }
                },
                touch: function () {
                    function a(a) {
                        d.animating ? a.preventDefault() : 1 === a.touches.length && (d.pause(), n = i ? d.h : d.w, p = Number(new Date), m = k && j && d.animatingTo === d.last ? 0 : k && j ? d.limit - (d.itemW + e.itemMargin) * d.move * d.animatingTo : k && d.currentSlide === d.last ? d.limit : k ? (d.itemW + e.itemMargin) * d.move * d.currentSlide : j ? (d.last - d.currentSlide + d.cloneOffset) * n : (d.currentSlide + d.cloneOffset) * n, g = i ? a.touches[0].pageY : a.touches[0].pageX, h = i ? a.touches[0].pageX : a.touches[0].pageY, b.addEventListener("touchmove", c, !1), b.addEventListener("touchend", f, !1))
                    }

                    function c(a) {
                        o = i ? g - a.touches[0].pageY : g - a.touches[0].pageX, (!(q = i ? Math.abs(o) < Math.abs(a.touches[0].pageX - h) : Math.abs(o) < Math.abs(a.touches[0].pageY - h)) || Number(new Date) - p > 500) && (a.preventDefault(), !l && d.transitions && (e.animationLoop || (o /= 0 === d.currentSlide && o < 0 || d.currentSlide === d.last && o > 0 ? Math.abs(o) / n + 2 : 1), d.setProps(m + o, "setTouch")))
                    }

                    function f(a) {
                        if (d.animatingTo === d.currentSlide && !q && null !== o) {
                            var i = j ? -o : o,
                                k = i > 0 ? d.getTarget("next") : d.getTarget("prev");
                            d.canAdvance(k) && (Number(new Date) - p < 550 && Math.abs(i) > 20 || Math.abs(i) > n / 2) ? d.flexAnimate(k, e.pauseOnAction) : d.flexAnimate(d.currentSlide, e.pauseOnAction, !0)
                        }
                        b.removeEventListener("touchmove", c, !1), b.removeEventListener("touchend", f, !1), g = null, h = null, o = null, m = null
                    }
                    var g, h, m, n, o, p, q = !1;
                    b.addEventListener("touchstart", a, !1)
                },
                resize: function () {
                    !d.animating && d.is(":visible") && (k || d.doMath(), l ? n.smoothHeight() : k ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : i ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (e.smoothHeight && n.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
                },
                smoothHeight: function (a) {
                    if (!i || l) {
                        var b = l ? d : d.viewport;
                        a ? b.animate({
                            height: d.slides.eq(d.animatingTo).height()
                        }, a) : b.height(d.slides.eq(d.animatingTo).height())
                    }
                },
                sync: function (b) {
                    var c = a(e.sync).data("flexslider"),
                        f = d.animatingTo;
                    switch (b) {
                        case "animate":
                            c.flexAnimate(f, e.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            c.playing || c.asNav || c.play();
                            break;
                        case "pause":
                            c.pause()
                    }
                }
            }, d.flexAnimate = function (b, c, g, h, o) {
                if (!d.animating && (d.canAdvance(b) || g) && d.is(":visible")) {
                    if (m && h) {
                        var p = a(e.asNavFor).data("flexslider");
                        if (d.atEnd = 0 === b || b === d.count - 1, p.flexAnimate(b, !0, !1, !0, o), d.direction = d.currentItem < b ? "next" : "prev", p.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
                        d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
                    }
                    if (d.animating = !0, d.animatingTo = b, e.before(d), c && d.pause(), d.syncExists && !o && n.sync("animate"), e.controlNav && n.controlNav.active(), k || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, e.directionNav && n.directionNav.update(), b === d.last && (e.end(d), e.animationLoop || d.pause()), l) d.slides.eq(d.currentSlide).fadeOut(e.animationSpeed, e.easing), d.slides.eq(b).fadeIn(e.animationSpeed, e.easing, d.wrapup);
                    else {
                        var q, r, s, t = i ? d.slides.filter(":first").height() : d.computedW;
                        k ? (q = e.itemWidth > d.w ? 2 * e.itemMargin : e.itemMargin, s = (d.itemW + q) * d.move * d.animatingTo, r = s > d.limit && 1 !== d.visible ? d.limit : s) : r = 0 === d.currentSlide && b === d.count - 1 && e.animationLoop && "next" !== d.direction ? j ? (d.count + d.cloneOffset) * t : 0 : d.currentSlide === d.last && 0 === b && e.animationLoop && "prev" !== d.direction ? j ? 0 : (d.count + 1) * t : j ? (d.count - 1 - b + d.cloneOffset) * t : (b + d.cloneOffset) * t, d.setProps(r, "", e.animationSpeed), d.transitions ? (e.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function () {
                            d.wrapup(t)
                        })) : d.container.animate(d.args, e.animationSpeed, e.easing, function () {
                            d.wrapup(t)
                        })
                    }
                    e.smoothHeight && n.smoothHeight(e.animationSpeed)
                }
            }, d.wrapup = function (a) {
                l || k || (0 === d.currentSlide && d.animatingTo === d.last && e.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && e.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, e.after(d)
            }, d.animateSlides = function () {
                d.animating || d.flexAnimate(d.getTarget("next"))
            }, d.pause = function () {
                clearInterval(d.animatedSlides), d.playing = !1, e.pausePlay && n.pausePlay.update("play"), d.syncExists && n.sync("pause")
            }, d.play = function () {
                d.animatedSlides = setInterval(d.animateSlides, e.slideshowSpeed), d.playing = !0, e.pausePlay && n.pausePlay.update("pause"), d.syncExists && n.sync("play")
            }, d.canAdvance = function (a) {
                var b = m ? d.pagingCount - 1 : d.last;
                return (!m || 0 !== d.currentItem || a !== d.pagingCount - 1 || "next" === d.direction) && (!(a === d.currentSlide && !m) && (!!e.animationLoop || (!d.atEnd || 0 !== d.currentSlide || a !== b || "next" === d.direction) && (!d.atEnd || d.currentSlide !== b || 0 !== a || "next" !== d.direction)))
            }, d.getTarget = function (a) {
                return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
            }, d.setProps = function (a, b, c) {
                var f = function () {
                    var c = a || (d.itemW + e.itemMargin) * d.move * d.animatingTo;
                    return -1 * function () {
                        if (k) return "setTouch" === b ? a : j && d.animatingTo === d.last ? 0 : j ? d.limit - (d.itemW + e.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : c;
                        switch (b) {
                            case "setTotal":
                                return j ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
                            case "setTouch":
                                return a;
                            case "jumpEnd":
                                return j ? a : d.count * a;
                            case "jumpStart":
                                return j ? d.count * a : a;
                            default:
                                return a
                        }
                    }() + "px"
                }();
                d.transitions && (f = i ? "translate3d(0," + f + ",0)" : "translate3d(" + f + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c)), d.args[d.prop] = f, (d.transitions || void 0 === c) && d.container.css(d.args)
            }, d.setup = function (b) {
                if (l) d.slides.css({
                    width: "100%",
                    float: "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === b && d.slides.eq(d.currentSlide).fadeIn(e.animationSpeed, e.easing), e.smoothHeight && n.smoothHeight();
                else {
                    var c, g;
                    "init" === b && (d.viewport = a('<div class="flex-viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, j && (g = a.makeArray(d.slides).reverse(), d.slides = a(g), d.container.empty().append(d.slides))), e.animationLoop && !k && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), d.container.append(d.slides.first().clone().addClass("clone")).prepend(d.slides.last().clone().addClass("clone"))), d.newSlides = a(e.selector, d), c = j ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, i && !k ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                        d.newSlides.css({
                            display: "block"
                        }), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
                    }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function () {
                        d.doMath(), d.newSlides.css({
                            width: d.computedW,
                            float: "left",
                            display: "block"
                        }), e.smoothHeight && n.smoothHeight()
                    }, "init" === b ? 100 : 0))
                }
                k || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide")
            }, d.doMath = function () {
                var a = d.slides.first(),
                    b = e.itemMargin,
                    c = e.minItems,
                    f = e.maxItems;
                d.w = d.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), k ? (d.itemT = e.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = f ? f * d.itemT : d.w, d.itemW = d.minW > d.w ? (d.w - b * c) / c : d.maxW < d.w ? (d.w - b * f) / f : e.itemWidth > d.w ? d.w : e.itemWidth, d.visible = Math.floor(d.w / (d.itemW + b)), d.move = e.move > 0 && e.move < d.visible ? e.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : e.itemWidth > d.w ? (d.itemW + 2 * b) * d.count - d.w - b : (d.itemW + b) * d.count - d.w) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
            }, d.update = function (a, b) {
                d.doMath(), k || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), e.controlNav && !d.manualControls && ("add" === b && !k || d.pagingCount > d.controlNav.length ? n.controlNav.update("add") : ("remove" === b && !k || d.pagingCount < d.controlNav.length) && (k && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), n.controlNav.update("remove", d.last))), e.directionNav && n.directionNav.update()
            }, d.addSlide = function (b, c) {
                var f = a(b);
                d.count += 1, d.last = d.count - 1, i && j ? void 0 !== c ? d.slides.eq(d.count - c).after(f) : d.container.prepend(f) : void 0 !== c ? d.slides.eq(c).before(f) : d.container.append(f), d.update(c, "add"), d.slides = a(e.selector + ":not(.clone)", d), d.setup(), e.added(d)
            }, d.removeSlide = function (b) {
                var c = isNaN(b) ? d.slides.index(a(b)) : b;
                d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : i && j ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(e.selector + ":not(.clone)", d), d.setup(), e.removed(d)
            }, n.init()
        }, a.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 0,
            maxItems: 0,
            move: 0,
            start: function () {},
            before: function () {},
            after: function () {},
            end: function () {},
            added: function () {},
            removed: function () {}
        }, a.fn.flexslider = function (b) {
            if ("object" == typeof (b = 0 === b ? 0 : b || {})) return this.each(function () {
                var c = a(this),
                    d = b.selector ? b.selector : ".slides > li",
                    e = c.find(d);
                1 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
            });
            var c = a(this).data("flexslider");
            switch (b) {
                case "play":
                    c.play();
                    break;
                case "pause":
                    c.pause();
                    break;
                case "next":
                    c.flexAnimate(c.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    c.flexAnimate(c.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof b && c.flexAnimate(b, !0)
            }
        }
    }(jQuery),
    function (a) {
        function b() {
            return setTimeout(c, 0), h = a.now()
        }

        function c() {
            h = void 0
        }

        function d(b) {
            if (!j[b]) {
                var c = document.body,
                    d = a("<" + b + ">").appendTo(c),
                    g = d.css("display");
                d.remove(), "none" !== g && "" !== g || (e || (e = document.createElement("iframe"), e.frameBorder = e.width = e.height = 0), c.appendChild(e), f && e.createElement || (f = (e.contentWindow || e.contentDocument).document, f.write((a.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), f.close()), d = f.createElement(b), f.body.appendChild(d), g = a.css(d, "display"), c.removeChild(e)), j[b] = g
            }
            return j[b]
        }
        var e, f, g, h, i, j = {},
            k = /^(?:toggle|show|hide)$/,
            l = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            m = document.createElement("div"),
            n = m.style,
            o = "Transition",
            p = "cubic-bezier(";
        a.support.transition = "Moz" + o in n ? "Moz" + o : "Webkit" + o in n && "Webkit" + o, a.cssNumber.color = a.cssNumber.backgroundColor = !0, i = {
            linear: "linear",
            swing: "ease-out",
            bounce: p + "0,.35,.5,1.3)",
            easeInQuad: p + ".55,.085,.68,.53)",
            easeInCubic: p + ".55,.055,.675,.19)",
            easeInQuart: p + ".895,.03,.685,.22)",
            easeInQuint: p + ".755,.05,.855,.06)",
            easeInSine: p + ".47,0,.745,.715)",
            easeInExpo: p + ".95,.05,.795,.035)",
            easeInCirc: p + ".6,.04,.98,.335)",
            easeOutQuad: p + ".25,.46,.45,.94)",
            easeOutCubic: p + ".215,.61,.355,1)",
            easeOutQuart: p + ".165,.84,.44,1)",
            easeOutQuint: p + ".23,1,.32,1)",
            easeOutSine: p + ".39,.575,.565,1)",
            easeOutExpo: p + ".19,1,.22,1)",
            easeOutCirc: p + ".075,.82,.165,1)",
            easeInOutQuad: p + ".455,.03,.515,.955)",
            easeInOutCubic: p + ".645,.045,.355,1)",
            easeInOutQuart: p + ".77,0,.175,1)",
            easeInOutQuint: p + ".86,0,.07,1)",
            easeInOutSine: p + ".445,.05,.55,.95)",
            easeInOutExpo: p + "1,0,0,1)",
            easeInOutCirc: p + ".785,.135,.15,.86)"
        }, a.fn.extend({
            animate: function (b, c, e, f) {
                function g() {
                    !1 === h.queue && a._mark(this);
                    var c, e, f, g, j, m, n, o, p, q, r, s, t, u, v, w, x = a.extend({}, h),
                        y = 1 === this.nodeType,
                        z = y && a(this).is(":hidden"),
                        A = a.cssProps,
                        B = !x.step && a.support.transition,
                        C = [];
                    x.animatedProperties = {}, x.transition = {};
                    for (f in b)
                        if (c = a.camelCase(f), f !== c && (b[c] = b[f], delete b[f]), (j = a.cssHooks[c]) && "expand" in j) {
                            m = j.expand(b[c]), delete b[c];
                            for (f in m) f in b || (b[f] = m[f])
                        } for (c in b) {
                        if (e = b[c], a.isArray(e) ? (t = x.animatedProperties[c] = e[1], e = b[c] = e[0]) : t = x.animatedProperties[c] = x.specialEasing && x.specialEasing[c] || x.easing || "swing", s = B && y && x.duration > 0 && c.indexOf("scroll") && i[t], s && (u = A[c] || c, v = u.replace(/([A-Z])/g, "-$1").toLowerCase(), s = v + " " + x.duration + "ms " + s, x.transition[c] = {
                                lower: v,
                                real: u
                            }, C.push(s)), "hide" === e && z || "show" === e && !z) return x.complete.call(this);
                        !y || "height" !== c && "width" !== c || (x.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === a.css(this, "display") && "none" === a.css(this, "float") && (a.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != x.overflow && (this.style.overflow = "hidden");
                    for (f in b) g = new a.fx(this, x, f), e = b[f], k.test(e) ? (r = a._data(this, "toggle" + f) || ("toggle" === e ? z ? "show" : "hide" : 0), r ? (a._data(this, "toggle" + f, "show" === r ? "hide" : "show"), g[r]()) : g[e]()) : (n = l.exec(e), o = g.cur(), n ? (p = parseFloat(n[2]), q = n[3] || (a.cssNumber[f] ? "" : "px"), "px" !== q && "opacity" !== f && (a.style(this, f, (p || 1) + q), o = (p || 1) / g.cur() * o, a.style(this, f, o + q)), n[1] && (p = ("-=" === n[1] ? -1 : 1) * p + o), g.custom(o, p, q)) : g.custom(o, e, ""));
                    if (B && C.length) {
                        s = this.style[B], w = window.getComputedStyle(this), this.style[B] = C.join() + (s && s.indexOf("none") ? "," + s : "");
                        for (f in x.transition) w[f], a.style.apply(null, x.transition[f].styleToSet)
                    }
                    return !0
                }
                var h = a.speed(c, e, f);
                return a.isEmptyObject(b) ? this.each(h.complete, [!1]) : (b = a.extend({}, b), !1 === h.queue ? this.each(g) : this.queue(h.queue, g))
            },
            stop: function (b, c, d) {
                return "string" != typeof b && (d = c, c = b, b = void 0), c && !1 !== b && this.queue(b || "fx", []), this.each(function () {
                    function c(b, c, e) {
                        var f = c[e];
                        a.removeData(b, e, !0), f.stop(d)
                    }
                    var e, f = !1,
                        g = a.timers,
                        h = a._data(this),
                        i = a.support.transition;
                    if (d || a._unmark(!0, this), null == b)
                        for (e in h) h[e] && h[e].stop && e.indexOf(".run") === e.length - 4 && c(this, h, e);
                    else h[e = b + ".run"] && h[e].stop && c(this, h, e);
                    for (e = g.length; e--;) g[e].elem !== this || null != b && g[e].queue !== b || ((d || i) && g[e](d), d || g[e].saveState(), f = !0, g.splice(e, 1));
                    d && f || a.dequeue(this, b)
                })
            }
        }), a.extend(a.fx.prototype, {
            cur: function () {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var b, c = a.css(this.elem, this.prop);
                return isNaN(b = parseFloat(c)) ? c && "auto" !== c ? c : 0 : b
            },
            custom: function (c, d, e) {
                function f(a) {
                    return i.step(a)
                }
                var i = this,
                    j = a.fx,
                    k = i.options.transition,
                    l = this.prop;
                this.startTime = h || b(), this.end = d, this.now = this.start = c, this.pos = this.state = 0, this.unit = e || this.unit || (a.cssNumber[l] ? "" : "px"), f.queue = this.options.queue, f.elem = this.elem, f.saveState = function () {
                    void 0 === a._data(i.elem, "fxshow" + i.prop) && (i.options.hide ? a._data(i.elem, "fxshow" + i.prop, i.start) : i.options.show && a._data(i.elem, "fxshow" + i.prop, i.end))
                }, (f.transition = k[l]) ? (a.timers.push(f), "transform" != l && (i.elem.style[k[l].real] = c + i.unit), a.fx.step[l] && (d = Math.max(0, d)), k[l].styleToSet = [i.elem, l, d + i.unit], k[l].timeout = setTimeout(function () {
                    a.timers.splice(a.timers.indexOf(f), 1), i.step(!0)
                }, i.options.duration + 30)) : f() && a.timers.push(f) && !g && (g = setInterval(j.tick, j.interval))
            },
            step: function (c) {
                var d, e, f, g = h || b(),
                    i = !0,
                    j = this.elem,
                    k = this.options,
                    l = k.transition[this.prop],
                    m = g >= k.duration + this.startTime,
                    n = a.support.transition;
                if (l || c || m) {
                    l ? (clearTimeout(l.timeout), c || m || (this.elem.style[l.real] = a.css(this.elem, l.real))) : (this.now = this.end, this.pos = this.state = 1, this.update()), k.animatedProperties[this.prop] = !0;
                    for (d in k.animatedProperties) !0 !== k.animatedProperties[d] && (i = !1);
                    if (i) {
                        if (null == k.overflow || a.support.shrinkWrapBlocks || a.each(["", "X", "Y"], function (a, b) {
                                j.style["overflow" + b] = k.overflow[a]
                            }), k.hide && a(j).hide(), l) {
                            l = "," + j.style[n];
                            for (d in k.transition) l = l.split(k.transition[d].lower).join("_");
                            l = l.replace(/, ?_[^,]*/g, "").substr(1), j.style[n] = l || "none", !l && (j.style[n] = l)
                        }
                        if (k.hide || k.show)
                            for (d in k.animatedProperties)(c || m) && a.style(j, d, k.orig[d]), a.removeData(j, "fxshow" + d, !0), a.removeData(j, "toggle" + d, !0);
                        f = k.complete, f && (c || m) && (k.complete = !1, f.call(j))
                    }
                    return !1
                }
                return k.duration == 1 / 0 ? this.now = g : (e = g - this.startTime, this.state = e / k.duration, this.pos = a.easing[k.animatedProperties[this.prop]](this.state, e, 0, 1, k.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
            }
        }), a.extend(a.fx, {
            tick: function () {
                for (var b, c = a.timers, d = 0; d < c.length; d++) b = c[d], b.transition || b() || c[d] !== b || c.splice(d--, 1);
                c.length || a.fx.stop()
            }
        })
    }(jQuery),
    function (a) {
        var b = {
                colors: 1,
                values: 1,
                backgroundColor: 1,
                scaleColors: 1,
                normalizeFunction: 1,
                enableZoom: 1,
                showTooltip: 1,
                borderColor: 1,
                borderWidth: 1,
                borderOpacity: 1,
                selectedRegion: 1
            },
            c = {
                onLabelShow: "labelShow",
                onRegionOver: "regionMouseOver",
                onRegionOut: "regionMouseOut",
                onRegionClick: "regionClick"
            };
        a.fn.vectorMap = function (d) {
            var f, g = {
                map: "world_en",
                backgroundColor: "#a5bfdd",
                color: "#f4f3f0",
                hoverColor: "#c9dfaf",
                selectedColor: "#c9dfaf",
                scaleColors: ["#b6d6ff", "#005ace"],
                normalizeFunction: "linear",
                enableZoom: !0,
                showTooltip: !0,
                borderColor: "#818181",
                borderWidth: 1,
                borderOpacity: .25,
                selectedRegion: null
            };
            if ("addMap" === d) e.maps[arguments[1]] = arguments[2];
            else if ("set" === d && b[arguments[1]]) this.data("mapObject")["set" + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(this.data("mapObject"), Array.prototype.slice.call(arguments, 2));
            else {
                a.extend(g, d), g.container = this, this.css({
                    position: "relative",
                    overflow: "hidden"
                }), f = new e(g), this.data("mapObject", f);
                for (var h in c) g[h] && this.bind(c[h] + ".jqvmap", g[h])
            }
        };
        var d = function (a, b, c) {
            if (this.mode = window.SVGAngle ? "svg" : "vml", this.params = c, "svg" == this.mode) this.createSvgNode = function (a) {
                return document.createElementNS(this.svgns, a)
            };
            else {
                try {
                    document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), this.createVmlNode = function (a) {
                        return document.createElement("<rvml:" + a + ' class="rvml">')
                    }
                } catch (a) {
                    this.createVmlNode = function (a) {
                        return document.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                    }
                }
                document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)")
            }
            "svg" == this.mode ? this.canvas = this.createSvgNode("svg") : (this.canvas = this.createVmlNode("group"), this.canvas.style.position = "absolute"), this.setSize(a, b)
        };
        d.prototype = {
            svgns: "http://www.w3.org/2000/svg",
            mode: "svg",
            width: 0,
            height: 0,
            canvas: null,
            setSize: function (a, b) {
                if ("svg" == this.mode) this.canvas.setAttribute("width", a), this.canvas.setAttribute("height", b);
                else if (this.canvas.style.width = a + "px", this.canvas.style.height = b + "px", this.canvas.coordsize = a + " " + b, this.canvas.coordorigin = "0 0", this.rootGroup) {
                    for (var c = this.rootGroup.getElementsByTagName("shape"), d = 0, e = c.length; d < e; d++) c[d].coordsize = a + " " + b, c[d].style.width = a + "px", c[d].style.height = b + "px";
                    this.rootGroup.coordsize = a + " " + b, this.rootGroup.style.width = a + "px", this.rootGroup.style.height = b + "px"
                }
                this.width = a, this.height = b
            },
            createPath: function (a) {
                var b;
                if ("svg" == this.mode) b = this.createSvgNode("path"), b.setAttribute("d", a.path), null !== this.params.borderColor && b.setAttribute("stroke", this.params.borderColor), this.params.borderWidth > 0 && (b.setAttribute("stroke-width", this.params.borderWidth), b.setAttribute("stroke-linecap", "round"), b.setAttribute("stroke-linejoin", "round")), this.params.borderOpacity > 0 && b.setAttribute("stroke-opacity", this.params.borderOpacity), b.setFill = function (a) {
                    this.setAttribute("fill", a), null === this.getAttribute("original") && this.setAttribute("original", a)
                }, b.getFill = function (a) {
                    return this.getAttribute("fill")
                }, b.getOriginalFill = function () {
                    return this.getAttribute("original")
                }, b.setOpacity = function (a) {
                    this.setAttribute("fill-opacity", a)
                };
                else {
                    b = this.createVmlNode("shape"), b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height, b.style.width = this.width + "px", b.style.height = this.height + "px", b.fillcolor = e.defaultFillColor, b.stroked = !1, b.path = d.pathSvgToVml(a.path);
                    var c = this.createVmlNode("skew");
                    c.on = !0, c.matrix = "0.01,0,0,0.01,0,0", c.offset = "0,0", b.appendChild(c);
                    var f = this.createVmlNode("fill");
                    b.appendChild(f), b.setFill = function (a) {
                        this.getElementsByTagName("fill")[0].color = a
                    }, b.getFill = function (a) {
                        return this.getElementsByTagName("fill")[0].color
                    }, b.setOpacity = function (a) {
                        this.getElementsByTagName("fill")[0].opacity = parseInt(100 * a, 10) + "%"
                    }
                }
                return b
            },
            createGroup: function (a) {
                var b;
                return "svg" == this.mode ? b = this.createSvgNode("g") : (b = this.createVmlNode("group"), b.style.width = this.width + "px", b.style.height = this.height + "px", b.style.left = "0px", b.style.top = "0px", b.coordorigin = "0 0", b.coordsize = this.width + " " + this.height), a && (this.rootGroup = b), b
            },
            applyTransformParams: function (a, b, c) {
                "svg" == this.mode ? this.rootGroup.setAttribute("transform", "scale(" + a + ") translate(" + b + ", " + c + ")") : (this.rootGroup.coordorigin = this.width - b + "," + (this.height - c), this.rootGroup.coordsize = this.width / a + "," + this.height / a)
            }
        }, d.pathSvgToVml = function (a) {
            var b, c, d = 0,
                e = 0;
            return a.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function (a, f, g, h) {
                g = g.replace(/(\d)-/g, "$1,-").replace(/\s+/g, ",").split(","), g[0] || g.shift();
                for (var i = 0, j = g.length; i < j; i++) g[i] = Math.round(100 * g[i]);
                switch (f) {
                    case "m":
                        return d += g[0], e += g[1], "t" + g.join(",");
                    case "M":
                        return d = g[0], e = g[1], "m" + g.join(",");
                    case "l":
                        return d += g[0], e += g[1], "r" + g.join(",");
                    case "L":
                        return d = g[0], e = g[1], "l" + g.join(",");
                    case "h":
                        return d += g[0], "r" + g[0] + ",0";
                    case "H":
                        return "l" + (d = g[0]) + "," + e;
                    case "v":
                        return e += g[0], "r0," + g[0];
                    case "V":
                        return e = g[0], "l" + d + "," + e;
                    case "c":
                        return b = d + g[g.length - 4], c = e + g[g.length - 3], d += g[g.length - 2], e += g[g.length - 1], "v" + g.join(",");
                    case "C":
                        return b = g[g.length - 4], c = g[g.length - 3], d = g[g.length - 2], e = g[g.length - 1], "c" + g.join(",");
                    case "s":
                        return g.unshift(e - c), g.unshift(d - b), b = d + g[g.length - 4], c = e + g[g.length - 3], d += g[g.length - 2], e += g[g.length - 1], "v" + g.join(",");
                    case "S":
                        return g.unshift(e + e - c), g.unshift(d + d - b), b = g[g.length - 4], c = g[g.length - 3], d = g[g.length - 2], e = g[g.length - 1], "c" + g.join(",");
                    default:
                        return !1
                }
                return ""
            }).replace(/z/g, "")
        };
        var e = function (b) {
            b = b || {};
            var c = this,
                g = e.maps[b.map];
            this.container = b.container, this.defaultWidth = g.width, this.defaultHeight = g.height, this.color = b.color, this.hoverColor = b.hoverColor, this.setBackgroundColor(b.backgroundColor), this.width = b.container.width(), this.height = b.container.height(), this.resize(), jQuery(window).resize(function () {
                c.width = b.container.width(), c.height = b.container.height(), c.resize(), c.canvas.setSize(c.width, c.height), c.applyTransform()
            }), this.canvas = new d(this.width, this.height, b), b.container.append(this.canvas.canvas), this.makeDraggable(), this.rootGroup = this.canvas.createGroup(!0), this.index = e.mapIndex, this.label = jQuery("<div/>").addClass("jqvmap-label").appendTo(jQuery("body")), b.enableZoom && (jQuery("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(b.container), jQuery("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(b.container)), c.countries = [];
            for (var h in g.pathes) {
                var i = this.canvas.createPath({
                    path: g.pathes[h].path
                });
                i.setFill(this.color), i.id = "jqvmap" + c.index + "_" + h, c.countries[h] = i, jQuery(this.rootGroup).append(i), i.setAttribute("class", "jqvmap-region"), null !== b.selectedRegion && h.toLowerCase() == b.selectedRegion.toLowerCase() && i.setFill(b.selectedColor)
            }
            jQuery(b.container).delegate("svg" == this.canvas.mode ? "path" : "shape", "mouseover mouseout", function (d) {
                var e = d.target,
                    f = d.target.id.split("_").pop(),
                    h = a.Event("labelShow.jqvmap"),
                    i = a.Event("regionMouseOver.jqvmap");
                "mouseover" == d.type ? (jQuery(b.container).trigger(i, [f, g.pathes[f].name]), i.isDefaultPrevented() || (b.hoverOpacity ? e.setOpacity(b.hoverOpacity) : b.hoverColor && (e.currentFillColor = e.getFill() + "", e.setFill(b.hoverColor))), b.showTooltip && (c.label.text(g.pathes[f].name), jQuery(b.container).trigger(h, [c.label, f]), h.isDefaultPrevented() || (c.label.show(), c.labelWidth = c.label.width(), c.labelHeight = c.label.height()))) : (e.setOpacity(1), e.currentFillColor && e.setFill(e.currentFillColor), c.label.hide(), jQuery(b.container).trigger("regionMouseOut.jqvmap", [f, g.pathes[f].name]))
            }), jQuery(b.container).delegate("svg" == this.canvas.mode ? "path" : "shape", "click", function (d) {
                for (var e in g.pathes) c.countries[e].currentFillColor = c.countries[e].getOriginalFill(), c.countries[e].setFill(c.countries[e].getOriginalFill());
                var f = d.target,
                    h = d.target.id.split("_").pop();
                void 0 !== {
                    az: "#2B2B2B",
                    ca: "#2B2B2B",
                    co: "#2B2B2B",
                    fl: "#2B2B2B",
                    hi: "#2B2B2B",
                    ne: "#2B2B2B",
                    nv: "#2B2B2B",
                    or: "#2B2B2B",
                    tx: "#2B2B2B",
                    wa: "#2B2B2B"
                } [h] && b.iPad && (console.log(b.isIpad), f.currentFillColor = b.selectedColor, f.setFill(b.selectedColor), a("#states_list").find("ul li").removeClass("active"), a("#states_list").find("#" + h).addClass("active"), setTimeout(function () {
                    f.currentFillColor = "2B2B2B", f.setFill("#2B2B2B"), a("#states_list").find("ul li").removeClass("active")
                }, 1e3))
            }), b.showTooltip && b.container.mousemove(function (a) {
                c.label.is(":visible") && c.label.css({
                    left: a.pageX - 15 - c.labelWidth,
                    top: a.pageY - 15 - c.labelHeight
                })
            }), this.setColors(b.colors), this.canvas.canvas.appendChild(this.rootGroup), this.applyTransform(), this.colorScale = new f(b.scaleColors, b.normalizeFunction, b.valueMin, b.valueMax), b.values && (this.values = b.values, this.setValues(b.values)), this.bindZoomButtons(), e.mapIndex++
        };
        e.prototype = {
            transX: 0,
            transY: 0,
            scale: 1,
            baseTransX: 0,
            baseTransY: 0,
            baseScale: 1,
            width: 0,
            height: 0,
            countries: {},
            countriesColors: {},
            countriesData: {},
            zoomStep: 1.4,
            zoomMaxStep: 4,
            zoomCurStep: 1,
            setColors: function (a, b) {
                if ("string" == typeof a) this.countries[a].setFill(b), this.countries[a].setAttribute("original", b);
                else {
                    var c = a;
                    for (var d in c) this.countries[d] && (this.countries[d].setFill(c[d]), this.countries[d].setAttribute("original", c[d]))
                }
            },
            setValues: function (a) {
                var b, c = 0,
                    d = Number.MAX_VALUE;
                for (var e in a) b = parseFloat(a[e]), b > c && (c = a[e]), b && b < d && (d = b);
                this.colorScale.setMin(d),
                    this.colorScale.setMax(c);
                var f = {};
                for (e in a) b = parseFloat(a[e]), f[e] = b ? this.colorScale.getColor(b) : this.color;
                this.setColors(f), this.values = a
            },
            setBackgroundColor: function (a) {
                this.container.css("background-color", a)
            },
            setScaleColors: function (a) {
                this.colorScale.setColors(a), this.values && this.setValues(this.values)
            },
            setNormalizeFunction: function (a) {
                this.colorScale.setNormalizeFunction(a), this.values && this.setValues(this.values)
            },
            resize: function () {
                var a = this.baseScale;
                this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / a, this.transX *= this.baseScale / a, this.transY *= this.baseScale / a
            },
            reset: function () {
                this.countryTitle.reset();
                for (var a in this.countries) this.countries[a].setFill(e.defaultColor);
                this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform()
            },
            applyTransform: function () {
                var a, b, c, d;
                this.defaultWidth * this.scale <= this.width ? (a = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), c = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (a = 0, c = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (b = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), d = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (b = 0, d = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > b ? this.transY = b : this.transY < d && (this.transY = d), this.transX > a ? this.transX = a : this.transX < c && (this.transX = c), this.canvas.applyTransformParams(this.scale, this.transX, this.transY)
            },
            makeDraggable: function () {
                var a, b, c = !1,
                    d = this;
                this.container.mousemove(function (e) {
                    if (c) {
                        d.transX, d.transY;
                        d.transX -= (a - e.pageX) / d.scale, d.transY -= (b - e.pageY) / d.scale, d.applyTransform(), a = e.pageX, b = e.pageY
                    }
                    return !1
                }).mousedown(function (d) {
                    return c = !0, a = d.pageX, b = d.pageY, !1
                }).mouseup(function () {
                    return c = !1, !1
                })
            },
            bindZoomButtons: function () {
                var a = this,
                    b = (jQuery("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);
                this.container.find(".jqvmap-zoomin").click(function () {
                    if (a.zoomCurStep < a.zoomMaxStep) {
                        a.transX, a.transY, a.scale;
                        a.transX -= (a.width / a.scale - a.width / (a.scale * a.zoomStep)) / 2, a.transY -= (a.height / a.scale - a.height / (a.scale * a.zoomStep)) / 2, a.setScale(a.scale * a.zoomStep), a.zoomCurStep++, jQuery("#zoomSlider").css("top", parseInt(jQuery("#zoomSlider").css("top"), 10) - b)
                    }
                }), this.container.find(".jqvmap-zoomout").click(function () {
                    if (a.zoomCurStep > 1) {
                        a.transX, a.transY, a.scale;
                        a.transX += (a.width / (a.scale / a.zoomStep) - a.width / a.scale) / 2, a.transY += (a.height / (a.scale / a.zoomStep) - a.height / a.scale) / 2, a.setScale(a.scale / a.zoomStep), a.zoomCurStep--, jQuery("#zoomSlider").css("top", parseInt(jQuery("#zoomSlider").css("top"), 10) + b)
                    }
                })
            },
            setScale: function (a) {
                this.scale = a, this.applyTransform()
            },
            getCountryPath: function (a) {
                return jQuery("#" + a)[0]
            }
        }, e.xlink = "http://www.w3.org/1999/xlink", e.mapIndex = 1, e.maps = {};
        var f = function (a, b, c, d) {
            a && this.setColors(a), b && this.setNormalizeFunction(b), c && this.setMin(c), c && this.setMax(d)
        };
        f.prototype = {
            colors: [],
            setMin: function (a) {
                this.clearMinValue = a, "function" == typeof this.normalize ? this.minValue = this.normalize(a) : this.minValue = a
            },
            setMax: function (a) {
                this.clearMaxValue = a, "function" == typeof this.normalize ? this.maxValue = this.normalize(a) : this.maxValue = a
            },
            setColors: function (a) {
                for (var b = 0; b < a.length; b++) a[b] = f.rgbToArray(a[b]);
                this.colors = a
            },
            setNormalizeFunction: function (a) {
                "polynomial" === a ? this.normalize = function (a) {
                    return Math.pow(a, .2)
                } : "linear" === a ? delete this.normalize : this.normalize = a, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
            },
            getColor: function (a) {
                "function" == typeof this.normalize && (a = this.normalize(a));
                for (var b, c = [], d = 0, e = 0; e < this.colors.length - 1; e++) b = this.vectorLength(this.vectorSubtract(this.colors[e + 1], this.colors[e])), c.push(b), d += b;
                var f = (this.maxValue - this.minValue) / d;
                for (e = 0; e < c.length; e++) c[e] *= f;
                for (e = 0, a -= this.minValue; a - c[e] >= 0;) a -= c[e], e++;
                var g;
                for (g = e == this.colors.length - 1 ? this.vectorToNum(this.colors[e]).toString(16) : this.vectorToNum(this.vectorAdd(this.colors[e], this.vectorMult(this.vectorSubtract(this.colors[e + 1], this.colors[e]), a / c[e]))).toString(16); g.length < 6;) g = "0" + g;
                return "#" + g
            },
            vectorToNum: function (a) {
                for (var b = 0, c = 0; c < a.length; c++) b += Math.round(a[c]) * Math.pow(256, a.length - c - 1);
                return b
            },
            vectorSubtract: function (a, b) {
                for (var c = [], d = 0; d < a.length; d++) c[d] = a[d] - b[d];
                return c
            },
            vectorAdd: function (a, b) {
                for (var c = [], d = 0; d < a.length; d++) c[d] = a[d] + b[d];
                return c
            },
            vectorMult: function (a, b) {
                for (var c = [], d = 0; d < a.length; d++) c[d] = a[d] * b;
                return c
            },
            vectorLength: function (a) {
                for (var b = 0, c = 0; c < a.length; c++) b += a[c] * a[c];
                return Math.sqrt(b)
            }
        }, f.arrayToRgb = function (a) {
            for (var b, c = "#", d = 0; d < a.length; d++) b = a[d].toString(16), c += 1 == b.length ? "0" + b : b;
            return c
        }, f.rgbToArray = function (a) {
            return a = a.substr(1), [parseInt(a.substr(0, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(4, 2), 16)]
        }
    }(jQuery), jQuery.fn.vectorMap("addMap", "usa_en", {
        width: 959,
        height: 593,
        pathes: {
            hi: {
                path: "m244.66,512.25c-2.48,3.8 2.23,4.04 4.74,5.38 3.06,0.16 3.51,-4.28 2.66,-6.56 -2.72,-0.77 -5.01,-0.19 -7.41,1.19z m-9.31,3.97c-4.02,5.11 3.64,0.48 0.63,-0.09l-0.5,0.07 -0.14,0.02z m39.69,7.97c-0.62,2.09 1.91,6.73 4.39,6.2 2.41,-1.46 3.73,1.73 6.48,0.56 1.23,-1.48 -3.77,-3.2 -3.7,-6.08 -0.95,-3.8 -3.28,-3.2 -5.96,-1.28 -0.41,0.2 -0.81,0.4 -1.22,0.6z m19.94,10.03c3.58,0.95 7.91,2.99 11.25,0.47 -1.05,-1.63 -5.06,-0.59 -7.1,-0.86 -1.44,0.01 -3.54,-1.63 -4.15,0.39z m12.13,4.38c2.33,2.45 3.64,6.83 7.24,7.4 2.36,-0.69 6.84,-0.66 7.32,-3.43 -2.09,-2.51 -5.77,-3.35 -8.88,-4.29 -2.53,-1.2 -4.11,-3.25 -5.68,0.33z m-7.06,1c-0.29,3.69 5.55,3.98 3.67,0.55 -0.27,-1.25 -3.83,-1.74 -3.67,-0.55z m23.66,14.69c0.27,2.45 3.18,3.93 0.47,6.15 -0.65,2.42 -5.54,2.87 -2.52,5.53 2.36,1.46 2.01,4.85 2.92,7.14 -0.72,2.69 -1.43,6.78 1.72,8.06 2.8,2.95 4.5,-1.93 6.19,-3.68 1.27,-1.69 3.85,-4.1 5.94,-2.59 3.04,-0.81 6.3,-2.42 7.78,-5.22 -2.79,-1.31 -4.88,-3.19 -5.57,-6.29 -2.4,-5.33 -8.95,-6.26 -13.58,-8.98 -1.29,-0.52 -2.26,-1.62 -3.34,-0.11z",
                name: "Hawaii"
            },
            ak: {
                path: "m107.84,436.56c-2.27,0.55 -4.87,0.32 -6.84,-0.34 -2.41,1.22 -5.63,4.03 -8.25,1.88 -3.1,0.93 -3.51,3.84 -5.22,5.97 -1.82,2.52 -4.21,3.65 -7.31,3.14 -2.5,-0.94 -5.49,-1.15 -7.5,0.98 2.03,4.34 6.39,8.13 5.82,13.23 -1.85,2.94 6.31,2.99 2.68,5.02 0.15,2.8 3.07,5.68 2.91,7.88 -2.35,2.21 -5.24,-0.38 -7.71,-1.06 -3.24,-0.64 -2.73,-3.35 -0.82,-5.22 -1.57,-1.51 -7.35,-1.81 -6.51,1.12 -2.01,0.04 -3.81,-1.66 -6.27,-0.77 -3.72,-0.44 -5.97,0.65 -2.94,4.05 3.68,1.45 1.06,4.72 1.17,7.57 0.76,2.63 3.66,4.89 6.67,4.17 3.2,-0.06 5.87,3.59 9.21,1.65 2.16,-1.3 5.33,-0.99 4.79,1.89 -2.53,2.07 -1.36,6.13 -2.78,8.75 -1.96,1.88 -4.53,1.59 -6.59,0.16 -1.52,1.37 -4.7,3.68 -6.28,2.22 0.72,-3.71 -4.77,-3.63 -5.51,-0.61 -1.21,3.97 -6.27,4.46 -8.31,7.63 -0.7,2.42 -1.55,6.7 1.74,6.3 1.26,1.11 -1.2,4.8 -2.77,5.52 1.62,2.19 2.65,4.59 2.72,7.34 1.71,1.55 6.35,1.98 7.5,-0.16 2.45,-0.95 1.79,4.1 2.08,5.97 2.47,2.95 -4.02,1.28 -1.61,4.56 -0.85,2.93 -1.76,5.02 2,2.72 2.76,-0.47 5.11,-0.69 5.66,2.09 2.59,-3.91 2.26,2.78 3.25,4.66 0.59,-0.75 1.3,-5.69 3.94,-3.06 -0.17,4.52 5.33,-0.45 5.78,-0.04 0.54,2.92 -1.63,4.24 -2.86,6.41 -1.51,2.24 -2.07,5.63 -4.21,7.17 -3.87,-0.42 -3.37,4.1 -5.5,5.02 -2.65,-0.72 -5.73,0.71 -8.44,1.41 -1.35,2.41 -3.61,4.2 -5.78,1.81 -2.56,0.05 -5.63,0.68 -7.63,2.33 -2.48,2.43 -6.32,3.11 -9.66,2.29 -2.78,-1.91 -7.11,3.41 -3.11,2.31 2.5,-1.91 4.66,0.64 7.25,0.63 2.21,-1.15 4.17,-2.75 6.84,-2.06 2.32,-3.35 5.1,-0.32 7.92,-1.16 2.31,-0.39 7.01,-3.91 5.26,0.66 0.09,-2.91 3.42,-2.73 5.54,-2.04 4.21,0.96 0.29,-3.16 2.08,-3.43 3.47,-2.05 7.52,-2.41 11.2,-3.72 5.48,-3.19 11.62,-5.7 16.21,-10.1 4.27,-2.97 -2.78,-3.48 -1.21,-6.32 1.68,-2.43 4.58,-3.81 7.47,-4.5 1.5,-3.07 3.53,-6.11 5.88,-8.52 2.49,-1.32 4.83,-3.39 7.83,-2.32 2.67,0.71 3.74,5.32 -0.52,3.66 -1.27,-1.88 -5.56,-0.09 -5.25,2.41 -0.21,2.44 -2.56,4.22 -3.06,6.66 4.79,0.85 0.24,3.54 -1.38,3.8 1.67,1.91 5.66,0.6 7.57,-1.14 1.25,-1.85 3.43,-3.8 5.41,-4.22 1.81,2.8 5.1,-1.16 5.74,2.72 0.71,2.78 6.02,-4.86 3.34,-3.1 -3.03,3.11 -3.78,2.86 -1.94,-1.24 1.43,-4.85 -1.76,6.17 -1.45,0.81 -0.81,-3.19 -0.93,-6.03 3.05,-6.4 2.7,-0.86 5.37,-0.87 5.79,2.52 0.42,3.48 3.8,2.84 5.95,4.76 2.41,2.2 4.76,1.95 7.8,1.78 4.34,-0.47 8.01,4.04 12.28,3.17 2.49,-0.42 5.1,-5.2 4.29,-0.23 -2.26,2.83 -0.02,4.12 2.5,5.41 3.13,1.35 5.87,3.14 7.94,5.85 1.31,3.02 6.05,0.28 6.18,2.43 -3.83,1.25 -1.23,3.54 0.21,5.47 1.81,1.95 0.33,5.72 3.64,5.82 1.14,1.28 3.49,7.44 4.01,5.38 -0.35,-2.32 -0.7,-7.86 1.61,-3.76 0.37,1.42 1.04,8.7 2.07,4.74 1.07,-4.88 3.18,0.18 2.22,2.93 3.33,1.69 -1.23,3.33 0.69,4.88 0.69,-3.24 1.31,-0.36 2.16,1.56 1.05,1 1.54,3.94 3.13,3.72 -1.68,-1.72 -2.94,-6.23 0.4,-3 2.42,2.79 4.05,2.12 2.74,-1.66 -2.65,-2.66 0.28,-4.96 2.58,-2.29 3.12,-0.05 2.84,5.21 5.28,4.53 3.31,-3.17 1.5,-7.87 0.69,-11.7 -3.3,-1.55 -7.04,-2.54 -10.22,-4.06 -1.5,-5.33 -6.29,-8.69 -8.4,-13.77 -0.44,-3.33 -4.71,-2.62 -5.75,-5.23 -2.32,-1.72 -2.7,-4.4 -4.56,-6.35 -1.65,-1.53 -5.22,0.95 -5.51,2.94 0.59,3.09 -3.23,3.04 -5.06,4.72 0.05,-4.27 -4.3,-6.15 -6.7,-9.1 -1.33,-1.99 -1.32,-5.36 -4.45,-2.34 -2.37,0.24 -6.38,-0.31 -5.34,-3.62 0.1,-27.7 0.2,-55.4 0.31,-83.09 -2.75,-1.88 -5.88,-4.17 -9.15,-4.4 -2.52,1.72 -5.07,1.09 -7.39,-0.62 -2.72,0.23 -5.12,-0.65 -7.7,-2.89 -3.08,-2.74 -8.58,0.17 -10.98,-3.65 1.13,-3.56 -3.22,-4.83 -5,-2.09 -2.09,0.26 -0.65,-4.31 -3.64,-4.93 -2.57,-2.85 -4.01,-1.28 -5.86,1.21z M36.38,480.63c-0.67,3.11 4.27,1.31 4.72,4.66 0.24,3.82 5.37,3.9 2.34,-0.08 -0.1,-3.22 -3.92,-1.83 -5.06,-4.43 -0.76,-2.02 -0.9,-1.86 -2,-0.16z m-17.16,23.16c2.57,4.06 1.45,1.37 0.13,-1.28 -0.36,0.01 0,1 -0.13,1.28z m21.84,14.81c1.27,1.79 4.99,5.58 6.22,2.03 2.26,-3.3 -3.27,-2.89 -5.23,-3.68 -1.83,-0.9 -0.88,0.54 -0.99,1.65z m91.72,18.78c0.06,3.21 2.81,-1.98 0,0z m-31.47,14.69c-3.2,2.91 -7.24,4.67 -10.56,7.38 0.22,2.75 0.99,7.64 4.67,5.15 2.5,-1.44 4.98,-2.9 7.45,-4.37 -1.84,-3.31 -0.81,-3.15 -4.55,-3.48 -4.15,0.09 1.06,-3.73 2.64,-1.62 3.74,-1.04 3.95,-2.36 1.5,-3.66 0.7,-1.08 -1,0.61 -1.16,0.59z M55.75,570.75c1.42,2.83 3.53,-1.99 0,0z m-35.78,0.34c0.53,2.46 -4.04,4.84 1.05,3.59 4.2,0.47 3.46,-4.35 0.01,-3.84 -0.35,0.08 -0.7,0.16 -1.06,0.24z m62.19,0.69c1.57,2.91 1.31,-2.03 0,0z M58.63,573.13c3.23,0.49 0.99,-3.05 0,0z m-49,0.09c-4.84,2.56 -0.44,1.81 2.29,0.58 2.89,0.16 5.05,-0.48 0.84,-1.46 -1.04,0.29 -2.08,0.58 -3.13,0.88z m7.25,1.38c1.28,0.21 -2.23,-0.59 0,0z",
                name: "Alaska"
            },
            fl: {
                path: "m748.38,439.94c1.69,2.92 1.5,6.12 1.16,9.34 -4.12,0.54 -2.15,-4.69 -5.56,-3.99 -6.18,-0.07 -12.34,1.13 -18.54,1.19 -10.09,0.29 -20.37,2.14 -30.33,0.64 -2.57,-1.57 -2.84,-6.15 -6.5,-5.33 -9.12,-0.12 -18.18,1.79 -27.26,2.55 -5.82,0.63 -11.62,1.37 -17.43,2.12 -1.42,3.25 2.6,4.37 4.06,6.34 0.8,2.28 -1.56,8.42 2.19,7.1 4.11,-1.2 8.08,-2.93 12.48,-2.72 3.34,-0.82 6.63,-0.73 9.89,0.45 4.09,0.8 7.77,3.09 11.41,4.98 1.77,1.94 5.5,1.87 5.97,5 -0.14,3.27 4.32,-0.94 6.5,0.53 3.19,-0.8 5.24,-3.68 7.69,-5.5 4.86,1.69 0.62,-2.9 3.27,-3.97 3.13,-0.83 6.62,-1.39 9.35,0.79 3.04,0.57 5.43,2 6.57,4.99 3.68,0.02 2.88,4.13 5.48,5.3 2.96,0.49 2.98,4.52 6.3,4.3 2.91,0.36 5.45,1.15 5.84,4.45 2.05,2.11 3.92,4.26 3.09,7.41 0.18,3.68 0.12,7.33 -1.44,10.75 0.39,3.68 1.37,7.94 3.28,10.78 2.25,-3.46 0.17,-3.87 -1.74,-6.03 2.19,-1.76 4.86,-0.22 7.3,0.16 0.82,3.15 -2.16,5.6 -3.48,8.19 -3.3,2.21 1.65,4.09 2.73,6.3 3.11,3.34 4.35,7.94 7.53,11.26 0.78,2.29 2.51,7.47 4.63,3.09 2.54,-0.24 3.88,3.44 5.28,5.41 -0.02,2.26 1.93,7.04 3.59,6.44 2.88,-0.8 6.04,0.65 8.28,2.59 2.56,3.3 4.58,6.98 4.56,11.27 1.37,2.73 4.55,0.44 5.81,-1.14 3.74,0.45 7.26,-1.25 9.22,-4.47 -1.01,-2.36 -0.57,-4.83 -0.32,-7.17 -0.04,-2.18 4.33,-3.19 2.25,-6.51 -0.98,-6.33 -0.19,-12.96 -1.87,-19.25 -2.46,-6.93 -7.54,-12.74 -10.4,-19.56 -1.51,-2.41 -4.24,-3.92 -4.62,-7.04 -0.94,-2.28 -2.67,-4.95 -0.07,-6.71 -0.39,-3.56 -4.86,-5.42 -6.84,-8.41 -5.38,-5.57 -8.29,-12.94 -12.35,-19.44 -2.15,-5.53 -4.29,-11.07 -5.91,-16.78 -3.43,0.07 -7.3,-1.03 -10.46,-0.35l-0.34,0.37 -0.26,0.29z m52.91,109.22c-1.9,4.58 0.72,0.38 0.66,-1.91 -0.22,0.64 -0.44,1.27 -0.66,1.91z m-4.69,9.91c2.56,-1.97 3.68,-6.84 1.04,-1.68 -0.35,0.56 -0.69,1.12 -1.04,1.68z m-2.25,2.22c1.46,-1.22 2.04,-2.07 0.18,-0.18l-0.18,0.18z m-5.72,4.16c-5.23,3.69 4.03,-2.14 0.33,-0.19l-0.33,0.19z m-10.72,3.22c-3.41,3.16 5.71,-0.32 4.1,-0.81 -1.8,-0.56 -2.56,-0.71 -4.1,0.81z m-4.59,3.16c0.08,0.16 0.4,-0.3 0,0z",
                name: "Florida"
            },
            nh: {
                path: "m862.56,94c-1.4,-0.41 -3.87,-0.72 -3.05,3 0.22,3.63 -0.73,7.84 2.23,10.59 0.33,2.78 0.08,5.36 -2.17,7.29 -0.19,2.83 -5.98,2.58 -3.35,5.32 1.16,7.35 -0.56,15.03 -0.62,22.51 1.2,1.95 0.98,4.39 0.76,6.75 -1.07,3.79 4.84,-0.05 6.89,0.06 3.93,-1.29 8.46,-1.74 12.04,-3.54 0.77,-3.1 4.37,-2.75 5.94,-4.96 2.59,-3.52 -3.01,-2.73 -2,-6.59 -3.83,0.01 -4.27,-2.46 -4.66,-5.62 -3.84,-11.98 -7.32,-24.45 -11.49,-36.1 -0.18,0.43 -0.35,0.85 -0.53,1.28z",
                name: "New Hampshire"
            },
            mi: {
                path: "M697.86,177.24L694.63,168.99L692.36,159.94L689.94,156.71L687.35,154.93L685.74,156.06L681.86,157.84L679.92,162.85L677.17,166.57L676.04,167.21L674.58,166.57C674.58,166.57 671.99,165.11 672.16,164.47C672.32,163.82 672.64,159.45 672.64,159.45L676.04,158.16L676.84,154.77L677.49,152.18L679.92,150.56L679.59,140.54L677.98,138.28L676.68,137.47L675.87,135.37L676.68,134.56L678.3,134.88L678.46,133.27L676.04,131L674.74,128.42L672.16,128.42L667.63,126.96L662.13,123.57L659.38,123.57L658.74,124.21L657.77,123.73L654.7,121.46L651.79,123.24L648.88,125.51L649.2,129.06L650.17,129.39L652.27,129.87L652.76,130.68L650.17,131.49L647.58,131.81L646.13,133.59L645.81,135.69L646.13,137.31L646.45,142.8L642.9,144.9L642.25,144.74L642.25,140.54L643.54,138.12L644.19,135.69L643.38,134.88L641.44,135.69L640.47,139.89L637.72,141.02L635.94,142.96L635.78,143.93L636.43,144.74L635.78,147.33L633.52,147.81L633.52,148.95L634.33,151.37L633.2,157.51L631.58,161.56L632.23,166.24L632.71,167.38L631.9,169.8L631.58,170.61L631.26,173.36L634.81,179.34L637.72,185.8L639.18,190.65L638.37,195.34L637.4,201.32L634.97,206.5L634.65,209.25L631.39,212.33L635.8,212.17L657.22,209.91L664.5,208.92L664.59,210.58L671.45,209.37L681.74,207.87L685.6,207.41L685.74,206.82L685.9,205.37L688,201.65L690,199.91L689.78,194.86L691.37,193.26L692.46,192.92L692.69,189.36L694.22,186.33L695.27,186.94L695.44,187.58L696.24,187.74L698.18,186.77L697.86,177.24z M581.62,82.06L583.45,80L585.62,79.2L590.99,75.31L593.28,74.74L593.74,75.2L588.59,80.34L585.28,82.29L583.22,83.2L581.62,82.06z M667.79,114.19L668.44,116.69L671.67,116.85L672.97,115.64C672.97,115.64 672.89,114.19 672.56,114.03C672.24,113.86 670.95,112.17 670.95,112.17L668.76,112.41L667.15,112.57L666.82,113.7L667.79,114.19z M567.49,111.21L568.21,110.63L570.96,109.82L574.51,107.56L574.51,106.59L575.16,105.94L581.14,104.97L583.57,103.03L587.93,100.93L588.09,99.64L590.03,96.73L591.81,95.92L593.1,94.14L595.37,91.88L599.73,89.46L604.42,88.97L605.55,90.1L605.23,91.07L601.51,92.04L600.06,95.11L597.79,95.92L597.31,98.35L594.88,101.58L594.56,104.17L595.37,104.65L596.34,103.52L599.89,100.61L601.19,101.9L603.45,101.9L606.68,102.87L608.14,104L609.59,107.08L612.34,109.82L616.22,109.66L617.68,108.69L619.29,109.99L620.91,110.47L622.2,109.66L623.33,109.66L624.95,108.69L628.99,105.14L632.39,104L639.02,103.68L643.54,101.74L646.13,100.45L647.58,100.61L647.58,106.27L648.07,106.59L650.98,107.4L652.92,106.91L659.06,105.3L660.19,104.17L661.65,104.65L661.65,111.6L664.88,114.67L666.17,115.32L667.47,116.29L666.17,116.61L665.37,116.29L661.65,115.81L659.55,116.45L657.28,116.29L654.05,117.75L652.27,117.75L646.45,116.45L641.28,116.61L639.34,119.2L632.39,119.85L629.96,120.66L628.83,123.73L627.54,124.86L627.05,124.7L625.6,123.08L621.07,125.51L620.42,125.51L619.29,123.89L618.48,124.05L616.54,128.42L615.57,132.46L612.39,139.46L611.22,138.42L609.85,137.39L607.9,127.1L604.36,125.73L602.31,123.45L590.19,120.7L587.33,119.67L579.1,117.5L571.21,116.36L567.49,111.21z",
                name: "Michigan"
            },
            vt: {
                path: "m833.16,106.59c0.19,6 4.65,11.21 3.72,17.28 -2.48,4.23 4.52,7.29 2.22,11.58 0.9,1.59 4.66,1.96 4.06,5.25 1.08,4.21 2.86,8.34 1.84,12.76 3.35,-0.51 7.06,-1.17 10.13,-1.97 -0.21,-2.13 1.51,-5.75 -0.53,-7.81 0.2,-7.64 1.01,-15.26 1.13,-22.91 -3.25,-2.41 0.32,-3.79 2.12,-5.18 1.96,-2.28 3.9,-5.07 2.6,-8.1 -2.62,-1.63 -1.02,-5.94 -2.39,-7.22 -8.3,2.1 -16.59,4.21 -24.89,6.31z",
                name: "Vermont"
            },
            me: {
                path: "m889.88,40.22c-2.16,1.31 -3.69,2.74 -4.84,4.69 -2.29,0.6 -4.99,-1.37 -4.88,-3.94 -2.97,-0.82 -3.33,3.68 -4.37,5.71 -1.09,4.29 -3.27,8.39 -3.97,12.69 -0.06,3.04 1,6.63 -1.35,9.09 0.08,2.92 -0.75,6.18 2,8.16 -1.37,5.7 -6.23,10.36 -5.41,16.56 -4.27,-2.21 -1.74,2.47 -1.09,4.73 3.51,11.08 7.19,22.16 10.25,33.35 0.21,3.01 5.81,1.35 4.53,5.7 2.9,2 2.06,-3.92 2.66,-5.87 -1.01,-3.29 2.7,-4.63 0.66,-7.62 0.94,-1.05 2.92,-5.9 4.61,-3.46 2.03,1.03 5.28,-1.89 6.74,-3.19 -0.98,-4.02 4.21,-1.75 4.73,-5.32 -1.11,-2.61 0.74,-5.45 -0.57,-7.44 -2.42,-1.59 3.53,-4.63 3.31,-0.78 2.27,0.48 2.15,2.8 3.66,3.93 1.94,-2.82 -2.15,-3.81 0.35,-6.03 2.43,-0.81 3.1,-3.96 6,-3.31 -0.17,1.46 1.03,3.34 2.26,1.38 2.94,-2.9 5.24,-7.08 9.37,-8.34 1.17,-2.61 3.34,-5.74 0.71,-8.24 -0.55,-1.64 -3.68,-4.84 -4.15,-2.58 -0.75,2.6 -4.66,-0.65 -4.92,-2.22 0.1,-2.8 0.29,-7.17 -3.8,-5.81 -3.96,1.36 -3.64,-3.04 -4.69,-5.61C905.22,58.3 902.75,50.15 900.28,42c-2.86,-1.25 -5.71,-2.92 -8.81,-3.38 -0.53,0.53 -1.06,1.06 -1.59,1.59z m20.47,61c-2.81,1.7 1.87,5.16 1.13,1.22 1.48,-0.9 0.13,-2.4 -1.13,-1.22z m-7.81,7.81c3.16,6.67 2.63,-3.59 0,0z",
                name: "Maine"
            },
            ri: {
                path: "m871,164.28c1.15,4.66 2.29,9.31 3.44,13.97 2.56,-0.49 4.66,-2.29 5.84,-4.56 4.17,0.76 4,-2.64 1.51,-4.97 -1.79,-1.94 -3.16,-5.31 -5.74,-5.92 -1.68,0.49 -3.37,0.99 -5.05,1.48z",
                name: "Rhode Island"
            },
            ny: {
                path: "m825.56,108.66c-2.7,1.12 -5.45,1.68 -8.33,1.43 -5.07,0.72 -10.17,2.73 -12.92,7.31 -2.84,3.43 -4.89,7.49 -7.18,11.2 -1.65,2.36 -5.82,3.73 -5.55,6.84 -0.17,3.56 5.77,0.73 4.43,4.38 -2.69,2.3 0.8,4.23 0.56,6.59 0.5,3.47 -4.26,1.99 -5.36,4 -1.62,2.71 -3.35,6.62 -7.22,6.05 -3.04,-0.43 -5.35,2.05 -7.98,2.63 -2.5,-0.75 -4.7,-2.05 -7.59,-1.31 -5.31,0.21 -10.62,1.98 -15.23,4.53 -0.29,1.77 0.61,6.25 3.17,6.14 1.55,2.48 2.09,4.96 -0.63,6.72 -1.51,1.76 -1.8,4.25 -4.16,5.3 -1.93,1.14 -2.68,3.51 -4.8,4.54 0.33,3.07 -0.22,7.29 4.08,5.12 22.14,-4.26 44.26,-8.68 66.23,-13.74 0.98,3.85 5.67,1.32 6.44,4 0.64,2.93 1.36,7.4 5.33,6.88 3.14,1.9 6.9,3.68 10.69,4.22 2.71,0.47 7.18,1.43 6.44,5.06 -0.33,1.97 -1.62,7.56 1.97,5.93 5.3,-1.65 10.96,-2.84 15.06,-6.85 3.23,-2.49 6.76,-4.64 9.35,-7.86 -2.99,-2.44 -4.65,0.46 -6.81,2.42 -2.91,1.56 -6.01,3.51 -9.16,4.32 -2.6,-0.63 -4.83,-0.86 -6.18,2.07 -1.03,2.04 -4.86,2.98 -3.98,-0.15 4.26,-1.87 -2.17,-3.97 -0.33,-6.21 1.19,-3.13 0.56,-6.87 0.42,-10.21 -1.43,-7.38 -3.69,-14.76 -2.54,-22.36 -0.08,-4.46 1.55,-8.97 -0.51,-13.21 -1.22,-2.56 -0.47,-6.83 -4.05,-7.34 -2.99,-0.66 0.75,-4.31 -1.57,-6.2 -1.7,-2.43 -3.17,-4.91 -1.54,-7.81 0.38,-5.77 -3.83,-10.57 -3.55,-16.35 -2.32,0.65 -4.65,1.29 -6.97,1.94z",
                name: "New York"
            },
            pa: {
                path: "m798.88,181.63c-17.5,3.38 -34.87,7.42 -52.47,10.28 -0.61,-2 0.48,-8.42 -2.41,-4.31 -2.18,2.73 -5.48,3.74 -8.09,5.97 1.52,9.75 2.63,19.57 5.44,29.05 1.14,6.09 2.27,12.17 3.41,18.26 8.85,-1.42 17.79,-2.25 26.51,-4.41 16.39,-3.45 33.03,-6.46 49.33,-9.87 2.48,-3.07 8.03,-1.69 8.97,-6.19 0.64,-2.36 4.86,-3.99 4.33,-5.9 -2.3,-1.89 -5.94,-2.77 -6.39,-6.13 -3.14,1.09 -4.42,-3.94 -3.12,-5.32 3.86,-1.1 -0.49,-3.68 0.55,-5.96 2.52,-1.88 1.12,-5.15 2.81,-7.07 3.87,-2.7 -2.98,-1.1 -3.72,-3.99 -1.35,-2.18 -0.28,-7.24 -4.16,-5.92 -2.34,-1.13 -3.87,-3.75 -7.09,-1.7 -4.64,1.07 -9.28,2.15 -13.92,3.22z",
                name: "Pennsylvania"
            },
            nj: {
                path: "m827.84,191.34c1.03,2.99 -1.82,4.8 -2.06,7.47 2.86,1.63 0.49,4.87 -0.92,5.73 -0.41,3.86 4.01,1.68 4.16,5.14 1.37,2.19 4.72,3.02 6.26,4.94 -0.15,2.61 -3.85,3.5 -4.69,6.06 -0.26,3.07 -4.09,3.19 -4.18,5.96 -0.99,2.38 -0.74,5.09 1.7,6.47 2.85,2.76 6.86,3.99 10.73,4.38 0.48,1.55 -1.84,7.18 1.1,3.59 1.5,-2.42 0.59,-5.95 3.11,-8.01 2.5,-4.08 5.03,-8.84 4.88,-13.61 -1.35,-4.07 0.8,-9.01 -1.81,-12.82 -1.1,1.32 -6.17,1.23 -4.13,-0.8 2.39,-1.39 3.37,-3.62 2.39,-6.31 0.21,-2.31 1.58,-5.42 -1.69,-6.19 -4.35,-1.15 -8.82,-2.13 -12.88,-4.26 -0.66,0.75 -1.31,1.5 -1.97,2.25z",
                name: "New Jersey"
            },
            de: {
                path: "m824.88,225.34c-3.72,0.25 -3.47,3.52 -1.91,6.13 3.35,6.89 3.86,14.58 6.03,21.81 3.45,0.11 6.81,-0.49 10.16,-1.25 -1.2,-2.17 -0.68,-6.38 -3.32,-6.38 -2.9,-1.2 -4.17,-3.69 -4.9,-6.58 -0.91,-3.11 -3.62,-4.96 -5.48,-7.35 -1.85,-1.82 0.94,-5.5 -0.26,-6.47l-0.33,0.09z",
                name: "Delaware"
            },
            md: {
                path: "m813.59,229.19c-17.31,3.18 -34.53,6.83 -51.78,10.28 0.74,3.02 1.31,6.08 1.78,9.16 2.14,-1.9 3.29,-5.35 6.59,-5.34 2.14,-1.85 2.67,-5.25 5.77,-3.55 3.46,0.18 5.43,-5.35 9.01,-3.85 2.63,1.63 5.66,2.79 7.34,5.59 4.19,0.11 3.68,3.73 5.74,4.96 2.73,1.11 5.02,1.18 6.38,-0.53 4.29,1.38 2.24,3.74 1.44,6.9 0.09,2.97 -3.7,4.92 -1.66,7.97 3.1,1.31 6.4,1.2 9.63,1.4 2.17,1.58 6.83,1.03 3.79,-2.1 0.41,-2.74 -3.08,-3.35 -3.32,-6.04 -1.7,-2.67 -1.42,-5.47 -0.36,-8.32 1.68,-2.42 -2.83,-3.82 -0.4,-5.41 1.25,-1.53 0.43,-4.16 2.98,-4.7 1.62,-3.02 5.1,-1.45 2.35,1.02 -2.54,2.98 -0.81,4.5 0.57,6.3 1.41,3.55 -0.68,5.07 -1.53,7.31 -0.22,-0.81 3.62,-1.01 3.22,1.79 -3.15,1.64 -1.45,6.12 1.09,7.31 2.98,0.99 5.58,-1.8 6.98,2.14 1.5,3.75 4.92,0.81 7.41,-0.02 2.74,-1.21 3.47,-4.93 2.78,-7.7 -1.13,-1.58 -4.82,0.92 -7.13,0.4 -3.86,1.26 -4.9,-1.25 -5.28,-4.64 -1.68,-5.97 -2.14,-12.33 -5.16,-17.9 -0.04,-4.32 -2.71,-4.2 -6.07,-2.91 -0.73,0.16 -1.45,0.31 -2.18,0.47z m10.94,32.59c1.32,0.99 0.59,4.97 2.06,4.63 -0.48,-1.31 -0.36,-4.99 -2.06,-4.63z",
                name: "Maryland"
            },
            va: {
                path: "m792.88,242.88c-0.16,1.46 0.24,5.89 -2.4,4.29 -2.58,-0.67 -6.42,-3.2 -8.23,-2.73 0.7,3.72 -1.46,6.77 -2.99,9.94 -3.05,1.14 -2.29,5.83 -5.84,5.58 -1.62,1.74 -1.47,5.31 -2.45,7.73 -3.09,1.14 -5.37,-0.48 -7.28,-1.75 0.11,6.5 -3.72,11.95 -5.91,17.84 -1.69,1.73 1.19,3.8 -0.74,5.77 -1.35,3.56 -3.79,2.72 -6.19,4.19 -2.72,1.1 -4.9,0.5 -5.4,4.61 -2.07,1.14 -4.83,2.63 -6.91,0.47 -2.38,1.51 -5.02,3.21 -7.81,1.6 -2.69,-0.01 -3.9,-6.55 -6.07,-2.94 -3.27,4.09 -7.89,7.48 -10.21,12.09 0.43,3.25 -4.46,3.32 -6.42,5.15 -4.27,1.95 3.62,-0.11 5.16,-0.07 5.56,-0.79 11.14,-1.37 16.76,-1.36 1.95,-2.65 4.98,-1.81 7.77,-1.65 7.86,-0.32 15.65,-2.12 23.48,-2.99 12.85,-1.4 25.44,-4.27 38.04,-7.05 11.65,-2.52 23.3,-5.03 34.96,-7.55 -1.64,-2.66 -2.75,-6.67 -6.42,-4.14 -1.99,2.03 -6.61,-1.82 -2.7,-2.48 2.65,-1.62 -1.75,-4.07 -1.8,-5.97 -2.73,-0.62 -2.88,-5.12 0.54,-3.6 -0.17,-1.37 -1.24,-3.62 -1.62,-5.68 1.47,-3.51 -0.84,-4.97 -3.72,-5.16 0.31,-3.42 -2.9,-2.93 -5.22,-3.97 -3.33,0.21 -7.06,-0.25 -9.91,-1.66 -1.22,-2.41 -0.91,-5.12 1.25,-6.88 1.39,-2.83 -0.28,-5.7 -3.3,-6.27 -2.65,-0.83 -6.97,-0.29 -5.73,-4.3 -0.83,-0.3 -2.05,-1.06 -2.69,-1.06z m39.16,21.59c0.44,4.71 -3.15,8.7 -2.62,13.48 -0.34,4.11 2.64,5.72 3.48,0.92 1.71,-3.04 -0.23,-6.47 0.8,-9.73 0.4,-2.53 3.66,-3.88 3.52,-6.73 -1.73,0.69 -3.46,1.38 -5.19,2.06z",
                name: "Virginia"
            },
            wv: {
                path: "m739.75,223.25c-1.6,2.23 1.3,5.02 0.25,7.75 -0.18,4.04 -0.63,8.11 -0.84,12.13 -1.94,3.58 -4.43,7.35 -8.16,9.13 -3.15,-1.33 -3.92,3.25 -5.76,4.98 -1.56,2.28 2.64,4.93 -0.3,6.69 -2.57,3.58 -2.6,-4.8 -4.46,-0.71 -1.32,2.59 0.02,6.02 -1.35,8.33 -1.82,1.54 -0.53,5.19 -4.16,4.81 -2.23,0.13 -1.45,6.19 1,6.81 2.24,1.47 2.49,4.74 5.5,5.92 1.92,1.96 2.28,5.18 5.39,6.05 1.64,2.19 3.07,4.96 6.25,4.88 2.63,0.5 4.77,-3.86 7.22,-1.35 1.49,0.81 3.93,-0.57 4.58,-1.83 0.43,-4.57 3.42,-2.71 6.03,-4.39 2.39,-0.94 4.82,-0.98 5.62,-4.44 -1.26,-2.59 0.3,-5 1.56,-7.64 2.23,-4.81 4.72,-9.61 4.67,-15.05 2.65,-2.31 3.72,3.56 7.05,1.41 1.64,-1.77 1.12,-5.67 2.6,-7.59 3.47,0.39 2.97,-3.96 5.76,-5.21 2.29,-3.11 3.52,-6.8 3.06,-10.7 1.06,-1.29 5.1,1.62 7.23,2.15 3.3,3.35 4.34,-1.98 2.85,-4.05 -2,-2.28 -5.12,-3.7 -7.62,-4.75 -3.31,0.98 -5.44,5.47 -9.38,3.97 -1.86,-0.23 -2.38,3.98 -4.86,3.88 -2.89,0.71 -3.79,4.38 -6.03,6.22 -1.1,-0.06 -0.99,-4.82 -1.62,-6.64 -0.01,-3.93 -1.77,-5.3 -5.48,-3.82 -4.21,0.6 -8.41,1.23 -12.61,1.91 -1.17,-6.45 -2.29,-12.92 -3.44,-19.38l-0.35,0.35 -0.18,0.18z",
                name: "West Virginia"
            },
            oh: {
                path: "m729.5,197.78c-4.85,2.06 -7.38,6.9 -11.47,9.97 -4.08,0.86 -8.09,1.75 -11.72,3.88 -3.41,1.61 -4.39,-4.09 -7.67,-2.63 -3.13,1.35 -5.49,-1.1 -8.11,-2.41 -8.6,1.15 -17.15,2.64 -25.66,4.38 1.45,17.83 4.12,35.53 5.87,53.33 -0.69,3.82 4.06,2.26 6.23,1.48 2.74,0.41 4.83,2.16 5.48,4.94 1.26,2.48 5.82,-0.87 6.96,2.54 2.19,1.53 4.46,-2.33 7.03,-0.58 2.52,0.04 5.62,1.51 6.84,-1.56 1.49,-0.55 5.37,-3.85 5.41,-0.71 0.38,2.53 3.82,3.57 5.77,4.7 3.53,0.63 2.32,-3.91 4.21,-5.51 -0.11,-2.74 0.21,-5.73 1.39,-8.13 2.53,-2.81 3.8,4.53 4.98,0.39 -2.02,-2.27 -0.99,-5.41 0.93,-7.41 1.07,-4.06 4.05,-2.41 6.5,-4.39 2.93,-3.16 6.59,-6.57 5.97,-11.27 0.44,-4.71 1.18,-9.75 -0.53,-14.23 1.47,-2.48 2.58,-4.29 0.96,-7.33 -2.04,-7.53 -2.56,-15.37 -3.93,-23.04 -1.81,1.2 -3.63,2.4 -5.44,3.59z",
                name: "Ohio"
            },
            in: {
                path: "m658.66,210.31c-9.12,0.93 -18.35,1.98 -27.41,2.68 -2.6,0.39 -4.21,5.08 -6.89,2.98 -3.83,-2.84 -2.64,1.83 -2.41,4.45 1.1,14.81 2.73,29.61 3.44,44.42 -0.76,3.69 -1.39,7.89 1.36,10.91 0.1,2.99 1.4,6.28 -1.14,8.65 -1.83,2.73 -2.55,6.09 -5.02,8.42 0.09,2.08 -2.02,8.2 1.63,5.16 3.49,-0.6 7.25,-1.53 10.69,-1.34 2.36,4.08 2.67,-0.62 5.26,-1.29 2.03,-2.62 4.78,2.05 5.34,1.04 -1.26,-3.41 3.05,-3.77 5.1,-5.22 1.09,0.63 6.05,3.38 5.3,-0.64 -0.46,-2.47 2.02,-4.71 3.65,-6.34 3.11,-1.39 4.33,-3.9 4.16,-7.23 1.83,-1 4.93,-1.01 6.97,-2.47 4.23,-1.03 0.26,-3.48 1.22,-5.92 -0.83,-12.56 -2.8,-25.13 -4.08,-37.69 -0.85,-6.99 -1.44,-14.01 -2.14,-21.02 -1.68,0.16 -3.35,0.31 -5.03,0.47z",
                name: "Indiana"
            },
            il: {
                path: "m569.75,200.44c-0.29,2.58 4.2,1.83 3.73,5.07 2.07,2.09 5.71,4.21 4.38,7.77 -0.31,3.04 -2.61,5.44 -3.08,8.4 -2.38,2.71 -6.06,2.98 -9.31,3.94 -1.61,2.47 -1.05,4.91 1.28,6.47 0.63,3.25 -1.08,5.07 -2.74,7.38 1.41,3.63 -2.39,2.86 -3.56,5.02 1.08,3.12 -2.11,3.8 -2.53,6.64 0.19,3.95 1.33,8.21 3.28,11.58 3.68,3.96 7.38,7.9 12.21,10.47 -0.61,2.88 -0.64,6.7 3.43,5.71 2.05,0 6.18,0.38 6.26,2.68 -0.19,4.39 -3.6,8.24 -3.28,12.53 1.6,3.83 5.33,6.26 8.59,8.42 3.37,-0.29 5.36,1.27 5.9,4.6 1.01,2.64 3.84,4.73 1.73,7.67 0.55,1.74 2.58,7.7 4.31,4.05 1.21,-2.98 5.41,-4.78 8.07,-2.46 3.1,2.46 5.94,0.47 3.13,-2.8 -0.98,-3.39 2.61,-4.96 5.37,-5.33 1.01,-1.55 -1.6,-4.46 1.4,-5.97 1.8,-3.97 -0.56,-9.39 3.32,-12.49 1.43,-2.97 3.23,-5.97 4.4,-8.97 0.13,-3 -0.7,-5.7 -2.34,-8.16 -0.45,-4.59 1.31,-9.09 0.02,-13.65 -1.16,-15 -2.22,-30.05 -3.67,-45.01 -1.02,-3.1 -1.61,-6.46 -4.04,-8.77 -2.27,-1.83 -0.51,-5.93 -1.97,-7.32 -14.76,0.83 -29.52,1.67 -44.28,2.5z",
                name: "Illinois"
            },
            ct: {
                path: "m865.78,165.41c-6.91,1.54 -13.81,3.08 -20.72,4.63 2.17,6.2 2.74,12.83 2.44,19.34 -2.62,4.3 2.61,2.38 3.97,-0.21 2.09,-1.89 4.19,-3.71 5.99,-5.88 2.06,1.35 4.78,-1.86 7.44,-1.46 2.98,-0.68 5.69,-2.24 8.56,-3.26 -1.15,-4.67 -2.29,-9.33 -3.44,-14 -1.42,0.28 -2.83,0.56 -4.25,0.84z",
                name: "Connecticut"
            },
            wi: {
                path: "m559.53,104.97c-4.06,2.75 -8.71,4.92 -13.53,5.84 -2.88,-1.08 -5.54,-1.12 -5.57,2.68 -0.48,3.34 0.51,7.03 -0.47,10.17 -2.02,3.26 -6.91,4.03 -7.36,8.38 -2.63,2.78 2.21,3.06 2.23,5.53 1.79,2.9 -2.13,4.74 -1.33,7.65 0.29,2.93 -0.4,6.49 1.14,8.93 1.33,3.48 5.88,0.21 6.64,3.93 1.56,2.26 5.47,1.03 6.19,4.78 2.15,5.1 9.7,4.85 11.21,10.39 0.68,3.38 0.35,7.34 1.94,10.32 3.26,1.05 1.94,4.34 0.25,6.21 -0.79,3.96 2.53,8.34 6.75,8.25 2.28,1.6 4.86,1.65 7.83,1.19 13.03,-0.77 26.07,-1.53 39.1,-2.3 -0.02,-4.45 -1.98,-8.61 -1.86,-13.13 -1.7,-2.04 -0.86,-4.17 -0.04,-6.39 0.32,-2.84 3.07,-4.93 1.51,-7.87 -1.05,-2.94 -0.88,-6.21 1.73,-8.27 -0.2,-2.83 -0.5,-5.03 -0.16,-7.93 -1.14,-4.2 2.64,-7.5 3.69,-11.36 0.92,-1.13 3.15,-8.34 0.73,-4.93 -2.65,3.81 -4.99,8.01 -8.18,11.29 -0.86,2.06 -3.21,4.55 -5.21,4.5 -2.57,-1.26 0.28,-4.49 0.9,-6.41 0.47,-2.94 3.2,-4.25 4.09,-6.85 -3.31,-1.29 -2.77,-5.03 -3.54,-7.92 0.02,-3.09 -1.23,-5.08 -4.29,-5.57 -2.14,-3.67 -7.04,-2.78 -10.59,-4.12 -7.13,-1.87 -14.21,-4.39 -21.67,-4.99 -2.48,-0.54 -2.84,-5.51 -5.51,-4.73 -1.71,-1.54 -3.85,-0.7 -5.82,0.13 -2.8,-1.32 0.68,-4.59 1.5,-6.38 2.18,-1.34 -1.53,-2.14 -2.31,-1z",
                name: "Wisconsin"
            },
            nc: {
                path: "m830.06,295.97c-18.3,3.8 -36.53,8 -54.86,11.65 -12.74,1.51 -25.38,4.07 -38.18,4.94 -3.32,-0.82 -1.17,3.72 -2.5,5.53 -2.62,1.34 -3.49,4.59 -5.03,6.38 -3.24,-1.36 -5.07,1.46 -6.34,3.97 -1.09,-0.57 -2.96,0.03 -3.41,-1.41 -2.02,1.96 -4.37,3.73 -4.31,6.81 -3.66,1.1 -6.31,3.82 -9.28,5.96 -2.64,0.94 -5.76,2.16 -7.4,4.35 0.73,4.06 -2.98,3.3 -5.1,5.29 -1.98,4.69 2.74,2.66 5.58,2.5 6.41,-1.19 13.32,-0.49 19.18,-3.73 5.04,-1.9 9.41,-5.9 15.06,-5.67 6.5,-0.64 13.15,-0.6 19.62,-0.69 2.99,0.53 3.36,4.79 5.58,5.01 5.37,-0.81 10.87,-1.67 16.25,-1.79 5.38,1.36 9.61,5.45 14.52,7.93 3.59,2.64 6.93,5.66 10.43,8.44 3.15,-0.86 6.32,-1.58 9.59,-1.72 1.06,-4.55 2.04,-9.29 5.39,-12.78 4.2,-4.27 9.23,-8.29 15.33,-9.29 2.91,1.95 3.69,-2.9 5.27,-4.53 2.72,-5 -2.44,3.91 -2.46,-1.22 -3.87,0.7 -5.43,-0.26 -3.29,-4 2.77,-4.25 -2.73,-2.51 -2.12,-6.02 -1.42,-3.76 2.84,2.19 5.06,0.81 2.81,0.12 5.1,-1.87 5.59,-4.6 0.45,-2.9 4.59,-2.7 3.28,-6.48 -4.02,-2.43 4.25,-0.66 0.4,-3.93 -3.52,-3.44 -5.24,-8.33 -7.23,-12.76 -1.54,0.35 -3.08,0.71 -4.63,1.06z m17.13,23.72c1.55,2.61 -4.64,4.26 -0.52,2.69 1.38,-1.92 0.21,-5.22 0.24,-7.62 -0.74,-2.05 0.37,4.57 0.28,4.94z",
                name: "North Carolina"
            },
            dc: {
                path: "m803.44,248.16c2.67,3.43 3.85,-1.02 0.55,-0.75l-0.29,0.4 -0.25,0.35z",
                name: "District of Columbia"
            },
            ma: {
                path: "m877.59,144.41c-1.04,3.1 -4.01,3.5 -6.79,4.13 -8.62,2.32 -17.17,4.6 -25.96,6.12 -0.11,4.77 -1.17,9.59 -0.03,14.31 10.66,-2.6 21.54,-4.29 32,-7.44 3.57,2.81 6.01,6.73 8.28,10.59 2.13,-0.78 0.01,-5.15 3.77,-5.38 2.93,-3.28 1.83,4.78 3.17,2.62 2.13,-3.09 6.1,-3.9 9.41,-5.21 -0.11,-3.41 -2.21,-8.55 -6.38,-7.53 1.64,-0.1 4.89,0.87 4.91,3.82 0.85,2.24 -2.55,3.71 -4.35,4.24 -3.37,0.51 -4.99,-1.76 -6.32,-4.47 -1.38,-2.05 -3.58,-6.56 -6.3,-3.6 -1.89,-1.72 -3.13,-4.04 -1.33,-6.3 2.3,-2.34 1.23,-6.2 -1.28,-7.16 -0.93,0.41 -1.86,0.82 -2.79,1.24z M902.25,172.69c-1.6,2.76 3.05,-2.44 0.08,-0.32l-0.08,0.32z m-11.28,1.28c1.59,0.78 6.09,-2.26 1.78,-2.03 -0.59,0.68 -1.19,1.35 -1.78,2.03z",
                name: "Massachusetts"
            },
            tn: {
                path: "m730.41,314.34c-8.87,-0.11 -17.76,1.5 -26.57,2.73 -10.24,2.86 -20.99,2.66 -31.48,4.02 -16.34,1.45 -32.65,3.29 -48.96,4.95 -4.57,-1.71 -0.43,5.74 -5.06,4.14 -6.97,0.06 -13.87,1.23 -20.84,0.71 -0.95,4.26 -1.37,9.04 -3.6,12.76 -3.45,1.82 -4.01,5.81 -4.43,9.33 -3.1,1.1 -4.68,2.61 -2.53,5.59 -1.75,3.9 -0.58,5.24 3.51,3.98 33.91,-3.26 67.83,-6.53 101.74,-9.79 -0.23,-2.54 0.72,-5.31 3.53,-5.69 3.11,-0.4 0.99,-5.41 4.88,-5.81 2.77,-2.02 6.49,-2.19 8.62,-5.18 1.76,-2.26 6.31,-1.64 5.78,-5.38 1.19,-1.77 3.1,-3.84 5.03,-4.85 1.04,-0.39 0.28,1.78 1.72,1.19 2.38,0.56 2.2,-4.36 5.22,-3.86 3.3,1.27 2.68,-2.92 4.96,-4.18 2.05,-0.94 3.81,-6.68 0.92,-6.59 -0.81,0.64 -1.63,1.27 -2.44,1.91z",
                name: "Tennessee"
            },
            ar: {
                path: "m509.47,335.31c1.73,4.9 1.5,10.02 1.53,15.12 2.15,12.21 1.13,24.64 1.47,36.97 0.02,3.71 0.04,7.42 0.06,11.13 2.06,3.2 5.05,-1.45 7.69,1.47 1.53,1.76 -0.88,7.54 2.97,6.49 17.61,-0.36 35.23,-0.72 52.84,-1.08 1.97,-2.6 0.41,-5.9 -1.28,-8.22 3.3,-1.61 -1.59,-3.96 0.84,-6.53 0.75,-2.77 0.62,-6.34 3.78,-7.69 -1.88,-3.07 2.08,-5.24 3.19,-7.88 3.77,-0.38 1.58,-3.3 2.64,-5.42 1.12,-2.67 2.56,-5.28 4.85,-6.58 1.2,-4.12 0.21,-2.67 -1.53,-5.61 -2.76,-3.32 1.95,-3.96 2.36,-6.84 -0.05,-1.94 3.31,-6.69 1.22,-6.75 -2.65,0.85 -5.34,-0.18 -8.02,-0.33 -0.09,-3.38 4.4,-3.88 4.22,-7.3 0.58,-3.87 -3.58,-3.68 -6.34,-3.26 -24.17,0.77 -48.34,1.54 -72.5,2.31z",
                name: "Arkansas"
            },
            mo: {
                path: "m490.44,245.63c-2.39,-0.46 -0.19,4.05 0.07,5.6 2.45,3.32 4.51,7.86 8.55,9.22 2.81,-0.24 3.61,2.67 2.79,4.84 -3.22,1.64 -1.72,5.03 0.19,7.07 0.9,2.55 4.61,3.05 4.89,5.61 2.1,12.97 1.12,26.14 1.51,39.22 0,5.72 0.08,11.44 0.72,17.13 24.99,-0.94 49.98,-1.8 74.97,-2.51 3.02,-1.12 4.35,1.72 5.31,3.98 0.52,3.48 -2.86,4.46 -4.14,6.86 2.37,0.64 5.57,0.65 8.21,-0.08 1.46,-3.59 1.87,-7.45 2.38,-11.22 0.84,-2.83 5.27,-2.89 4.61,-6.03 1.37,-2.94 0.14,-4.6 -2.22,-4.28 -2.15,-1.81 -2.84,-5.03 -2.86,-7.6 1.45,-2.84 -2.08,-5.07 -2.44,-7.89 -0.66,-3.24 -5.34,-0.87 -6.89,-3.66 -2.64,-2.34 -6.24,-3.94 -6.91,-7.76 -0.94,-3.21 1.52,-6.47 2.17,-9.64 2.2,-3.53 -1.34,-4.7 -4.33,-4.5 -2.66,0.39 -5.34,-1.15 -4.81,-4.1 0.86,-4.07 -4.71,-4.05 -6.43,-6.93 -2.7,-3.4 -6.72,-6.05 -7.25,-10.67 -1.1,-3.16 -2.12,-6.86 -0.62,-10.06 -2.3,-1.34 -2.28,-5.77 -5.37,-4.89 -20.69,0.77 -41.38,1.53 -62.06,2.3z",
                name: "Missouri"
            },
            ga: {
                path: "m672.78,356c-0.74,7.06 4.28,12.69 5.29,19.4 1.36,6.57 3.44,12.96 5.03,19.44 0.94,4.88 2.17,9.95 5.53,13.75 -0.85,3.5 3.37,3.17 2.59,6.44 -1.89,4.45 -3.57,9.65 -0.84,14.13 0.05,2.63 0.94,5.4 -0.38,7.88 2.95,0.94 1.45,4.01 3.07,6.01 1.35,2.67 3.68,4.75 6.83,4 12.35,-0.01 24.69,-1.31 37.03,-1.92 3.32,-0.58 6.67,-0.74 10.04,-0.59 -0.78,4.24 3.04,4.15 2.09,-0.09 -0.9,-2.14 -2.94,-6.23 0.59,-6.62 3.2,0.5 6.42,0.91 9.66,1.02 -0.84,-3.8 -0.8,-7.57 0.5,-11.27 0.2,-3.54 2.62,-6.73 2.21,-10.21 -0.72,-2.93 3.26,-5.26 2.85,-8.05 -2.19,1.37 -5.29,-0.71 -5.34,-3.19 -0.56,-3.12 -2.71,-5.83 -6.03,-6.06 -1.33,-3.9 -2.62,-8.17 -4.99,-11.43 -3.12,-1.07 -6.13,-2.99 -7.17,-6.29 -2.06,-2.33 -5.23,-3.21 -6.66,-6.16 -2.08,-2.2 -5.24,-2.83 -7.66,-4.19 -0.76,-2.53 -3.21,-4.09 -3.94,-6.67 -1.36,-2.63 -2.97,-4.65 -6.15,-3.77 -2.33,-1.57 -7.15,-3.38 -5.31,-6.97 2.02,-2.01 3.76,-4.11 -0.8,-3.11 -12.68,1.51 -25.37,3.01 -38.05,4.52z",
                name: "Georgia"
            },
            sc: {
                path: "m737.03,343.19c-4.26,0.4 -8.64,0.43 -12.24,3.07 -3.2,1.75 -6.48,3.19 -9.88,4.49 2.21,3.31 -4.28,2.74 -2.34,6.44 2.27,2.24 5.2,4.13 8.5,3.28 2.53,3.15 3.83,6.94 6.53,9.88 0.91,2.76 5.13,2.06 6.85,4.46 2.18,1.38 2.96,4.25 5.62,5.01 2.99,1.95 3.36,6.38 7.26,7.24 3.61,0.62 3.77,4.77 5.34,7.38 0.38,3.35 2.02,4.84 4.79,5.96 3.36,1.79 1.76,7.23 5.67,8.16 3.63,-1.38 5.8,-4.63 8.38,-7.34 -2.35,-3.93 0.29,-3.32 3.01,-4.44 1.95,-2.4 5.02,-3.3 6.25,-6.28 2.17,-2 3.86,-4.52 5.4,-6.9 2.81,-0.17 3.42,-3.58 4.92,-5.03 -0.28,-4.13 1.3,-7.89 3.12,-11.47 1.03,-2.11 7.03,-4.5 3.47,-6.34 -5.97,-5.35 -12.78,-9.5 -19.71,-13.47 -4.45,-2.68 -9.74,-0.07 -14.57,-0.06 -2.57,-0.23 -6.63,2.48 -7.32,-1.28 -1.66,-4.5 -6.93,-2.82 -10.63,-2.96 -2.8,0.07 -5.61,0.14 -8.41,0.21z",
                name: "South Carolina"
            },
            ky: {
                path: "m675,267.5c-2.76,-0.77 -6,1.11 -3.38,3.78 1.52,3.15 -3.12,4.12 -5.19,5.27 -2.94,0.53 -4.71,1.29 -4.3,4.82 -1.15,2.66 -5.3,3.24 -6.32,6.32 -2.16,1.4 0.74,6.22 -2.84,5.92 -3.06,0.61 -4.36,-2.79 -7.09,0.11 -2.26,0.51 -1.1,6.98 -3.85,3.1 -2.27,-2.54 -5.57,0.14 -6.16,2.81 -1.91,1.07 -3.4,-3.73 -6.02,-1.91 -3.32,0.61 -7.48,0.47 -9.92,2.91 0.08,2.65 -3.39,3.78 -1.7,6.05 2.34,2.66 -2.23,2.68 -3.86,3.3 -3.57,1.35 -0.68,4.35 -0.76,6.72 0.33,3.45 -3.76,1.44 -5.49,0.72 -2.5,-2.29 -6.26,-0.38 -7.13,2.53 2.86,2.28 -0.04,4.76 0.41,7.66 -3.47,2.04 -3.19,2.73 0.94,2.35 5.84,0.01 11.64,-0.95 17.5,-0.76 -0.7,-3.74 0.98,-4.99 4.56,-4.19 24.33,-3.01 48.82,-4.7 73.16,-7.43 4.3,-0.7 8.2,-2.38 11.75,-4.88 3.3,-0.8 4.04,-2.71 5.12,-5.35 3.46,-4.09 7.13,-8.06 10.79,-12 -3.27,-1.24 -3.03,-5.51 -6.21,-6.95 -2.6,-1.25 -2.07,-4.66 -5.16,-5.36 -2.38,-2.64 0.8,-7.28 -3.02,-8.87 -3.02,-0.01 -2.37,-4.65 -4.57,-3.51 -2.95,0.61 -3.67,4.78 -7.02,3.29 -2.69,-0.23 -5.51,-1.19 -7.82,0.71 -3,0.83 -3.99,-3.61 -7.44,-2.06 -3.51,0.82 -2.17,-5.19 -5.65,-5.26C677.17,266.43 676.21,267.17 675,267.5z",
                name: "Kentucky"
            },
            al: {
                path: "m628.53,359.63c-0.2,14.37 0.12,28.75 -0.54,43.12 -0.04,9.01 -0.88,18.1 -0.07,27.07 1.55,10 2.94,20.01 3.85,30.09 3.07,1.09 3.69,-1.92 4.4,-4.18 -0.3,-3.89 4.27,-3.02 4.89,-0.04 0.72,2.06 4.08,5.27 0.77,6.65 -0.15,0.92 6.17,-0.9 5.88,-2.89 -0.44,-3.01 0.64,-6.86 -2.87,-8.19 -2.29,-0.88 -3.03,-5.59 -0.32,-5.67 14.08,-1.86 28.21,-3.59 42.35,-4.8 2.7,1.07 6.76,-0.25 2.97,-2.5 -1.8,-2 0.95,-5.03 -0.27,-7.65 -0.31,-3.1 -2.63,-5.9 -1.31,-9.15 0.01,-2.92 2.49,-5.36 1.93,-8.3 -3.52,-0.45 -1.34,-5.11 -4.26,-6.7 -3.48,-5.82 -3.36,-13.04 -5.96,-19.21 -2.02,-8.09 -3.34,-16.41 -7.25,-23.88 -0.51,-2.39 -1.08,-4.85 -0.72,-7.31 -14.49,1.18 -28.98,2.35 -43.47,3.53z",
                name: "Alabama"
            },
            la: {
                path: "m521.09,407.28c0.1,7.53 -0.24,15.32 1.67,22.61 2.08,2.49 2.82,5.51 3.15,8.67 1.87,2.78 5.27,4.95 4.59,8.72 1.61,2.18 -0.21,5.69 0.08,8.38 0.42,2.64 -4.36,4.89 -2.01,7.12 1.07,2.26 -0.92,5.31 -0.53,7.95 0.38,3.22 -2.37,5.7 -1.55,8.93 5.18,-2.4 10.98,-0.86 16.47,-1.09 5.72,1.7 11.56,4.87 17.56,4.26 2.93,-2.25 5.94,0.36 8.98,0.93 1.08,-3.4 -4.22,-0.81 -5.8,-2.2 -1.91,-0.36 -2.89,-2.3 -1.17,-3.4 2.08,-1.1 4.08,-1.09 5.66,0.04 2.15,-1.39 5.6,-0.24 6.26,2.38 -0.33,3.62 3.42,1.7 5.28,3.15 3.83,1.5 -1.41,4.07 0.83,5.37 2.88,0.97 5.73,2.94 8.62,3.29 3.51,-0.05 2.81,-4.53 6.47,-4.17 1.83,-2.9 4.44,-0.25 4.39,2.31 1.53,1.64 4,-3.68 1.98,-3.66 0.22,-3.37 2.17,-3.21 4.31,-5.41 1.59,0.95 0.91,2.82 1.41,4.16 3.33,0.39 7.44,1.09 9.34,4.06 2.79,0.08 5.17,1.1 5.56,-2.56 -2.68,-0.27 -4.15,-3.88 -7.35,-3.19 -2.31,0.06 -6.3,-1.62 -6.15,-3.77 1.62,-3.62 2.23,-1.74 2.03,-4.38 2.88,1.09 5.69,-2.27 3.22,-4.47 0.46,-4.62 -3.73,-0.15 -3.34,2.19 -1.36,1.21 -6.35,-0.96 -4.6,-3.27 1.71,-1.84 4.2,-4.5 2.19,-6.95 -0.13,-3.26 -2.69,-5.21 -4.47,-7.38 0.52,-2.7 2.26,-7.35 -2.36,-5.46 -10.43,1.28 -20.97,0.69 -31.45,1.12 -1.61,-3.72 -0.02,-7.76 0.16,-11.59 2.66,-4.86 5.46,-9.65 8.25,-14.44 -2.04,-2.82 3.52,-4.45 -0.74,-6.48 -0.53,-2.15 -1.29,-4.65 -2.32,-6.83 -0.08,-3.1 0.9,-7.3 -3.62,-5.79 -17,0.28 -34,0.57 -51,0.85z",
                name: "Louisiana"
            },
            ms: {
                path: "m591.03,363.5c-1.45,1.74 -4.03,3.15 -4.63,6.03 -1.4,2.22 1.43,5.74 -2.69,6.07 -1.48,1.97 -4.77,4.42 -3.4,7.17 -1.36,1.83 -3.59,3.95 -3.48,7.01 -2.16,2.66 1.55,5.28 -0.27,7.12 -0.45,1.84 2.25,4.42 1.35,7.03 -1.92,2.71 -1.63,6.55 -0.61,9.53 1.6,2.4 0.78,5.54 3.73,6.94 -0.95,2.53 -1.41,3.75 -1.87,6.31 -2.55,4.96 -6.07,9.62 -7.89,14.84 0.01,2.98 -1.44,6.14 -0.14,8.97 11.4,-0.36 22.87,0.25 34.19,-1.5 2.75,2.21 -2.19,6.39 1.33,8.15 2.82,1.62 2.28,5.18 3.89,7.63 2.07,-1.86 2.51,-6.19 5.82,-4.07 3.21,-0.67 6.85,-3.02 9.89,-0.64 3.62,0.73 6.01,-0.27 4.42,-4.26 -0.81,-10.1 -2.99,-20.07 -3.84,-30.15 0.14,-21.99 1.48,-43.98 0.64,-65.97 -12.15,1.26 -24.29,2.52 -36.44,3.78z",
                name: "Mississippi"
            },
            ia: {
                path: "m476.25,181.16c-3.42,-0.05 -2.16,5.68 0.72,6.29 0.54,2.07 -0.75,5.06 -1.41,7.35 -2.13,2.82 -0.93,5.45 1.04,7.92 1.22,4.34 2.24,8.85 4.05,13.06 0.6,3.22 1.29,6.38 3.41,9 0.02,3.49 1.27,6.69 2.3,9.91 -0.04,3.54 0.03,7.05 2.08,10.09 22.2,-1.02 44.44,-1.75 66.66,-2.63 0.77,1.43 3.25,7.11 4.37,4.25 -0.96,-2.5 1.19,-4.52 3.57,-4.72 -0.88,-2.62 1.19,-4.59 2.5,-6.28 1.27,-2.92 -1.39,-4.02 -2.41,-6.31 0.69,-2.9 1.79,-5.3 5.13,-5.46 2.88,-0.83 6.57,-1.81 6.65,-5.41 1.76,-3.04 3.73,-8.01 -0.26,-10.18 -2.74,-1.06 -1.75,-5.27 -5.21,-5.14 -0.64,-1.97 -0.85,-4.76 -4.19,-4.21 -2.75,-0.8 -4.55,-3.47 -5.37,-6 -1.36,-2.89 2.01,-4.72 1.65,-7.28 -3.82,-0.4 -1.19,-6.5 -5.03,-5.47 -26.75,0.41 -53.5,0.81 -80.25,1.22z",
                name: "Iowa"
            },
            mn: {
                path: "m497.03,53.84c-0.69,2.52 0.93,7.42 -1.31,8.34 -9.65,-0.01 -19.29,-0.02 -28.94,-0.03 1.16,2.87 2.18,5.76 0.97,8.81 0.05,5.74 -0.79,11.86 2.51,16.95 2.04,3.78 0.64,8.47 1.5,12.6 0.82,6.84 1.76,13.67 3.55,20.32 0.05,3.83 0.88,7.8 0.03,11.53 -1.57,1.74 -4.91,3.29 -2.22,5.78 1.89,1.83 5.05,2.94 4.58,6.1 0.28,11.9 0.25,23.83 0.42,35.75 26.72,-0.38 53.44,-0.75 80.16,-1.13 -0.15,-3.62 -0.46,-7.93 -4.36,-9.47 -3.02,-1.66 -6.24,-3.1 -7.63,-6.5 -0.72,-3.61 -5.32,-1.16 -6.05,-4.61 -1.56,-2.09 -5.29,-0.37 -6.57,-3.78 -1.66,-2.1 -0.52,-5.5 -1.1,-8.1 -1.34,-2.93 1.65,-4.99 1.47,-7.54 -0.2,-3.22 -5.36,-3.85 -2.24,-7.43 0.41,-4.47 5.39,-5.33 7.61,-8.59 0.24,-3.87 -0.73,-8.14 0.52,-11.77 1.76,-3.14 5.17,-5.1 8.28,-6.26 1.92,-2.08 3.66,-4.57 6.13,-5.81 2.54,-4.97 6.04,-9.99 11.81,-11.4 4.55,-1.98 9.12,-3.92 13.6,-6.04 0.73,-3.15 -3.7,-0.18 -5.06,0.03 -0.82,-3.87 -4.2,-3.09 -7.28,-2.87 -2.25,-0.87 -5.34,2.83 -6,-0.66 -1.13,-3.5 -4.51,0.72 -5.88,2.13 -2.33,1.63 -6.22,1.16 -8.06,-0.56 0.94,-3.05 -4.61,-0.39 -4.53,-3.96 -0.16,-2.3 -3.48,1.3 -5.77,-1.2 -3.04,-0.91 -5.5,-3.22 -8.29,-4.38 -2.49,0.4 -5.86,-2.38 -6.7,1.5 -1.17,0.79 -7.15,1.83 -5.93,-1.54 -2.99,0.03 -6.03,-0.05 -7.53,-1.75 -2.6,0.59 -5.72,-0.41 -5.9,-3.43 -0.88,-3.28 -1.44,-6.61 -1.88,-9.98 -1.23,-0.6 -2.54,-1.02 -3.91,-1.06z",
                name: "Minnesota"
            },
            ok: {
                path: "m363.31,330.03c17.51,1.12 35.04,1.73 52.56,2.47 -1.37,13.62 -2.89,27.23 -2.83,40.93 -0.92,3.93 3.48,5.78 6.14,7.66 0.56,-5.56 2.96,1.46 4.25,-1.31 0.93,-1.5 5.57,1.68 3.39,4.42 1.59,0.66 4.76,0.51 6.73,1.82 2.79,-0.99 5.16,3.32 7.03,1.26 1.82,-1.93 5.59,-0.31 6.5,2.02 2.44,0.79 1.71,5.84 4.76,3.05 1.39,-1.65 6.25,-1.17 6.69,1.21 1.28,1.5 5.69,3.72 7.39,1.92 0.33,-2.75 3.38,-5.95 4.59,-1.83 3.59,0.38 6.96,2 10.46,3 2.28,-1.86 2.44,-4.68 6.53,-3.41 2.53,1.92 3.8,-1.41 6.31,-1.16 0.85,2.42 5.2,2.41 6.19,-0.5 3.2,-0.2 3.66,3.71 6.55,4.35 1.86,0.4 6.31,3.63 5.36,0.18 -0.32,-12.27 0.1,-24.59 -0.7,-36.82 -1.15,-6.03 -1.01,-12.18 -1.43,-18.25 -1.32,-5.29 -2.05,-10.73 -2.07,-16.18 -20.01,0.66 -40.04,-0.04 -60.06,-0.22 -27.85,-1.32 -55.73,-2.3 -83.53,-4.56 -0.27,3.31 -0.54,6.63 -0.81,9.94z",
                name: "Oklahoma"
            },
            tx: {
                path: "m359.47,330.97c2.34,-0.11 -0.86,-1.81 0,0z m0.72,18.31c-1.64,20.84 -2.52,41.75 -4.68,62.55 -0.51,4.33 -0.99,8.66 -1.51,12.98 -17.84,-0.87 -35.67,-1.93 -53.42,-3.89 -4.16,-0.41 -8.32,-0.76 -12.48,-1.11 -0.67,3.74 2.27,3.68 4.04,6.12 2.26,1.83 1.13,6.03 4.65,6.5 3.52,0.48 2.9,4.6 5.45,6.34 3.38,3.15 5.5,7.91 10.27,9.06 1.91,1.27 4,3.22 4.53,5.46 0.69,3.96 4.53,7.02 3.47,11.33 -0.88,5.15 2.22,9.63 5.93,12.88 2.18,2.95 5.14,4.76 8.63,5.78 1.88,1.95 3.01,3.88 5.72,4.88 2.59,0.18 5.38,4.34 7.35,1.18 2.59,-3.14 5.48,-6.41 6.05,-10.55 1.26,-2.82 3.58,-4.32 6.5,-5.06 2.72,-1.59 5.32,-2.13 7.47,0.62 4.91,0.57 10.2,0.53 14.79,2.22 2.83,1.43 2.56,4.53 5.17,6.33 1.73,2.05 4.83,3.37 5.81,5.82 1.37,2.07 2.66,4.26 2.69,7.03 1.62,4.34 4.17,8.51 5.31,12.94 -0.24,2.77 4.65,2.49 4.95,5.51 2.24,4.08 4.37,9.17 9.21,10.49 3.28,2 0.03,5.04 0.91,7.5 3.28,0.87 -0.01,4.68 0.94,6.67 2.53,1.36 4.37,3.2 4.22,6.44 0.39,3.34 2.13,6.83 5.69,7.54 3.01,1.93 6.69,2.13 9.87,3.4 2.28,1.79 5.15,4.09 8.16,2.83 3.46,0.46 6.77,1.29 9.37,3.75 1.43,2.54 6.51,-0.91 4.31,-2.89 -2.04,-3.39 -1.3,-7.79 -2.83,-11.46 -0.63,-3.07 -2.39,-5.95 -0.99,-9.1 1.17,-4.9 2.87,-9.76 4.04,-14.71 -3.37,-1.01 -2.07,-5.47 1.21,-4.71 3.99,0.42 3.65,-6.43 7.81,-6.05 5.25,-1.56 9.07,-6 14.16,-8.05 6.91,-2.81 13.62,-6.46 18.72,-12.05 2.58,-2.98 7.09,-3.95 8.69,-7.75 5,-2.22 9.8,-4.93 15.22,-6 -0.97,-2.64 0.52,-4.86 1.32,-7.22 0.39,-2.99 0.19,-6.07 1.18,-8.94 -3.15,-2.27 0.38,-4.91 1.38,-7.41 -0.2,-2.8 1.42,-6.25 0.09,-8.66 0.3,-2.93 -1.49,-5.14 -3.35,-7.29 -2.46,-2.64 -1.11,-6.91 -3.87,-9.52 -2.53,-4.57 -1.59,-10.19 -2.25,-15.22 0.02,-5 0.19,-10 -0.5,-14.97 -2.63,-2.31 -5.52,2.33 -7.52,-1.37 -3.1,-2.07 -7.66,-2.1 -9.73,-5.68 -2.31,-2.48 -3.82,2.84 -7.18,0.96 -1.91,-2.73 -3.59,0.03 -5.98,0.18 -2.27,-1.15 -6.07,-1.48 -6.09,1.76 -2.76,2.37 -5.95,-0.93 -8.94,-1.28 -3,1.38 -5.23,-3.83 -6.3,-1.87 -0.15,2.66 -2.52,5.1 -5.13,3.34 -3.23,-0.15 -4.91,-2.49 -6.57,-3.89 -2.95,-1.74 -4.3,2.32 -6.94,0.88 -1.48,-1.39 -1.87,-3.6 -3.92,-5.65 -3.06,-2.83 -5.03,3.17 -7.13,0.23 -2.05,-2.11 -5.57,-0.83 -7.94,-2.69 -3.56,0.59 -5.54,-0.24 -4.13,-4.11 -1.89,-1.85 -2.28,1.21 -4.77,-0.14 -0.59,-0.41 -3.45,1.78 -5,-1.11 -1.9,-1.9 -5.13,-3.22 -4.18,-6.45 0.03,-10.58 0.25,-21.15 1.66,-31.65 0.3,-2.99 0.6,-5.98 0.89,-8.98 -17.65,-0.63 -35.3,-1.27 -52.94,-2.22 -0.52,6.07 -1.04,12.15 -1.56,18.22z M466.53,518.63c-5.2,7.17 2.93,-3.27 0,0z",
                name: "Texas"
            },
            nm: {
                path: "m242.72,428.78c4.82,0.63 9.65,1.25 14.47,1.88 0.43,-3.33 0.85,-6.67 1.28,-10 9.7,0.89 19.4,1.86 29.09,2.78 -0.9,-3.14 -1.39,-5.98 2.84,-4.5 18.29,1.28 36.48,3.79 54.81,4.49 2.45,-0.6 7.66,2.13 7.99,-1.01 3.06,-22.93 3.75,-46.09 5.59,-69.14 0.54,-7.79 1.39,-15.56 2.02,-23.34 3.21,0.65 1.17,-4.81 2.07,-6.86 1.79,-4.38 -2.87,-3.37 -5.73,-3.85 -32.35,-3.3 -64.71,-6.59 -97.06,-9.89 -5.79,39.81 -11.58,79.63 -17.38,119.44z",
                name: "New Mexico"
            },
            ks: {
                path: "m380.53,320.34c25.06,1.17 50.11,2.71 75.19,3.35 17.22,0.07 34.44,0.63 51.66,0.18 -0.25,-12.69 0.23,-25.42 -0.47,-38.08 -0.61,-2.83 -0.17,-6.27 -1.38,-8.74 -3.04,-2.03 -6.02,-5.19 -6.68,-8.77 -0.43,-2.51 4.3,-4.59 1.29,-6.64 -3.02,0.54 -4.05,-3.34 -7.17,-2.43 -36.21,-0.82 -72.43,-1.33 -108.63,-2.5 -1.27,21.21 -2.54,42.42 -3.81,63.63z",
                name: "Kansas"
            },
            ne: {
                path: "m353.38,230.59c10.76,0.96 21.27,2.72 32.03,3.66 -0.37,7.11 -0.71,14.23 -1.06,21.34 36.49,1.29 73,1.84 109.5,2.56 -0.31,-1.17 -3.13,-4.05 -4.03,-6.15 -1.99,-2.11 -0.36,-5.13 -2.45,-7.34 -2.42,-3.19 -1.66,-7.14 -2.2,-10.79 -1.66,-2.86 -1.45,-6.25 -2.29,-9.26 -2.94,-2.85 -2.34,-7.01 -3.95,-10.49 -1.13,-3.1 -2.18,-6.19 -2.62,-9.47 -3.51,1.32 -2.89,-3.07 -4.85,-4.29 -2.4,-1.68 -5.57,-1.85 -7.72,-3.93 -3.79,0.07 -7.65,1.04 -11.13,1.94 -2.52,-2.2 -6.03,-3.13 -7.91,-6.06 -13.61,0.96 -27.23,-0.49 -40.83,-1.11 -15.5,-1.05 -31.02,-1.79 -46.51,-2.86 -1.67,14.08 -2.83,28.17 -4,42.25z",
                name: "Nebraska"
            },
            sd: {
                path: "m357.44,187.41c25.68,1.58 51.37,3.15 77.06,4.26 3.58,-0.01 7.34,-0.51 10.81,-0.23 1.8,2.9 5.24,3.85 7.69,6 3.55,-1.45 7.52,-1.89 11.25,-1.91 2.45,2.67 7.26,2.29 9.15,5.33 1.32,4.76 3.27,1.86 0.18,-1.15 -1.53,-2.17 1.46,-4.6 1.56,-6.99 1.2,-2.87 1.38,-5.28 -1.58,-6.75 -0.5,-2.04 -0.73,-6.65 2.41,-5.84 2.62,-0.28 0.39,-5.28 1.06,-7.5 -0.32,-9.7 0.19,-19.47 -0.64,-29.13 -0.24,-3.58 -6.26,-4.19 -5.42,-8.4 1.09,-1.22 5.81,-4.38 2.75,-5.4 -27.23,-0.89 -54.5,-1.01 -81.67,-3.15 -9.79,-0.62 -19.57,-1.24 -29.36,-1.86 -1.75,20.91 -3.5,41.81 -5.25,62.72z",
                name: "South Dakota"
            },
            nd: {
                path: "m362.88,123.72c26.46,1.49 52.89,3.7 79.4,3.91 10.84,0.26 21.67,0.52 32.51,0.78 0.01,-5.53 -1.38,-10.82 -2.5,-16.17 -1.27,-7.42 -2.05,-14.89 -2.13,-22.42 -2.61,-4.16 -4.11,-9 -3.48,-13.94 -0.44,-3.25 0.67,-6.57 0.3,-9.7 -0.15,-4.01 -2.83,-4.61 -6.31,-4.12 -25.15,-0.47 -50.33,-1.05 -75.41,-3.06 -5.17,-0.49 -10.33,-0.98 -15.5,-1.47 -2.29,22.06 -4.58,44.13 -6.88,66.19z",
                name: "North Dakota"
            },
            wy: {
                path: "m240.16,217.84c37.4,4.49 74.29,8.23 111.69,12.72 2.5,-29.2 5.5,-57.65 8,-86.84 -35.26,-4.45 -70.52,-8.9 -105.78,-13.34 -4.64,29.16 -9.27,58.31 -13.91,87.47z",
                name: "Wyoming"
            },
            mt: {
                path: "m192.59,52.19c0.84,2.76 3.25,5.4 3.2,8.23 -1.5,2.79 -1,5.49 0.52,8.15 3.4,0.39 4.18,3.44 5.26,6.16 1.43,3.34 2.55,6.88 5.37,9.34 0.88,2.21 5.27,1.18 4.34,4.72 -2.23,6.21 -5.45,12.23 -7.06,18.56 0.02,3.34 3.4,5.25 5.73,2.22 1.61,-2.43 5.63,-3.04 4.69,0.97 -0.5,5.3 1.81,10.35 2.59,15.53 1.9,2 5.27,3.44 5.68,6.31 -0.71,1.91 -0.39,8.78 2.32,5.14 1.85,-1.89 4.93,-0.29 6.85,0.86 3.28,-1.63 7.26,-1.21 10.34,0.69 3.69,0.41 1.52,-5 5.95,-4.08 2.71,-0.42 2.01,6.69 3.21,4.1 0.56,-3.26 1.09,-6.54 1.68,-9.8 35.57,4.49 71.15,8.96 106.72,13.44 2.9,-28.44 5.79,-56.88 8.69,-85.31 -28.84,-2.29 -57.55,-5.91 -86.19,-9.99 -26.71,-4.12 -53.36,-8.71 -79.73,-14.68 -3.05,-0.61 -6.99,-2.59 -6.53,2.19 -1.21,5.75 -2.42,11.51 -3.62,17.26z",
                name: "Montana"
            },
            co: {
                path: "m260.17,308.53c39.89,4.09 79.51,8.26 119.39,11.91 1.61,-28.46 3.23,-56.92 4.84,-85.38 -37.47,-4.17 -74.94,-8.33 -112.41,-12.5 -4.03,28.98 -7.8,56.99 -11.83,85.97z",
                name: "Colorado"
            },
            id: {
                path: "m169.84,91.72c0.52,3.07 2.27,5.25 4.94,6.78 0.4,3.02 -0.61,5.46 -3.03,7.31 -2.3,2.7 -4.38,5.97 -6.09,8.83 0.39,2.93 -2.57,3.54 -4.23,4.8 -1.77,2.31 -4.28,4.3 -3.93,7.5 -0.64,2.43 4.69,0.57 4.09,4.34 -5.19,11.17 -6.78,23.51 -10.13,35.32 -0.79,3.16 -1.22,4.91 -2.01,8.08 56.92,12.84 62.26,13.45 93.58,19.41 2.75,-17.6 5.5,-35.21 8.25,-52.81 -2.66,-0.84 -0.58,-6.52 -4.23,-4.97 -1.24,1.7 -1.62,4.95 -5.17,3.47 -3.11,-1.99 -6.81,-1.34 -10.13,-0.56 -2.53,-1.76 -5.91,-2.01 -7.69,0.88 -1.75,-0.05 -3.29,-3.39 -2.79,-5.36 1.91,-3.98 -2.85,-5.89 -5.05,-8.27 -0.98,-5.88 -3.48,-11.64 -2.5,-17.69 -1.86,-0.01 -4.25,2.69 -6.47,3.63 -2.21,0.18 -4.52,-3.09 -4.1,-5.31 1.19,-5.37 4.07,-10.37 5.88,-15.6 1.95,-2.64 1.12,-5.57 -2.41,-5.62 -1.55,-3.37 -4.92,-5.66 -5.61,-9.53 -1.31,-2.63 -1.42,-6.47 -5.06,-6.76 -0.99,-1.85 -3.18,-4.47 -1.91,-6.73 2.09,-2.98 -0.34,-5.7 -1.53,-8.5 -2.13,-3.05 0.55,-6.68 0.67,-10.01 0.9,-4.35 1.8,-8.69 2.69,-13.04 -4.18,-0.78 -8.35,-1.56 -12.53,-2.34 -4.5,20.92 -9,41.83 -13.5,62.75z",
                name: "Idaho"
            },
            ut: {
                path: "m176.34,297.78c27.57,3.92 55.15,7.83 82.72,11.75 4.04,-29.08 8.08,-58.17 12.13,-87.25 -10.83,-1.14 -21.65,-2.33 -32.47,-3.59 1.43,-7.93 2.82,-15.85 3.84,-23.84 -15.27,-2.85 -30.54,-5.71 -45.81,-8.56 -6.8,37.17 -13.6,74.33 -20.41,111.5z",
                name: "Utah"
            },
            az: {
                path: "m173.19,314.66c-2.49,-0.06 -3.05,4.43 -6.38,2.94 -0.74,-2.87 -3.59,-2.82 -5.59,-4.22 -3.74,0.74 -2.37,4.58 -2.68,7.41 -0.52,5.04 -0.42,10.21 -0.89,15.22 -2.19,2.33 -2.44,5.78 -0.24,8.19 2.32,2.62 0.58,7.52 4.09,9.09 0.98,3.59 -2.89,4.83 -5.41,6.09 -3.29,2.46 -3.28,6.86 -3.88,10.47 -1.25,2.44 -4.81,2.39 -4.92,4.97 0.47,2.18 6.18,0.38 3.42,4.54 -0.65,2.75 -3.14,3.45 -5.62,3.78 -3.6,1.45 -2.69,4.7 0.77,5.44 14.69,7.84 28.52,17.13 43.01,25.32 5.79,3.19 11.27,7.21 17.27,9.88 11.71,2.83 23.75,3.45 35.68,4.87 5.71,-39.38 11.42,-78.75 17.13,-118.13 -27.58,-3.93 -55.17,-7.85 -82.75,-11.78 -1,5.31 -2,10.63 -3,15.94z",
                name: "Arizona"
            },
            nv: {
                path: "m84.84,232.41c22.96,34.61 45.92,69.23 68.88,103.84 3.66,2.65 3.19,-3.47 3.27,-5.71 0.37,-5.43 0.36,-11.24 1.08,-16.44 2.05,-2.03 4.26,-2 6.08,-0.39 2.62,-0.16 3.86,5.9 6.03,1.27 2.74,-0.82 2.66,-3.64 3.13,-6.41 7.5,-40.87 15,-81.75 22.51,-122.62 -30.72,-6.81 -61.44,-13.63 -92.16,-20.44 -6.27,22.3 -12.54,44.6 -18.81,66.91z",
                name: "Nevada"
            },
            or: {
                path: "M67.16,62.81C64.24,70.42 62.73,78.57 58.5,85.63c-2.86,8.53 -5.96,16.93 -10.17,24.89 -3.06,6.61 -8,12.31 -11.32,18.7 -1.03,6.5 -0.64,13.05 -0.36,19.6 37.23,8.7 74.46,16.69 111.69,25.39 3.45,-13.15 6.51,-25.75 10.19,-38.81 1.2,-2.48 3.15,-6.06 -1.1,-5.42 -2.58,-1.78 -0.23,-4.45 -0.38,-6.91 2.3,-2.82 4.36,-5.82 7.47,-7.75 1.75,-5.08 5.43,-9.19 9.03,-13.06 1.66,-3.48 -2.46,-3.92 -3.39,-6.47 -0.25,-3.79 -3.56,-4.26 -6.62,-4.99 -7.63,-2.2 -15.38,-4.2 -23.21,-5.54 -4.9,0.03 -9.79,0.06 -14.69,0.09 -0.95,-2.84 -4.67,1.86 -7.11,0.5 -2.61,0.82 -4.42,-2.63 -6.57,-1.28 -2.61,-0.06 -5.23,0.11 -7.15,-1.87 -3.09,-1.53 -6.33,-1.81 -9.5,-3.1 -1.87,3.03 -5.69,1.22 -8.53,1.31 -1.65,-1.64 -5.79,-3.02 -6.03,-4.81 1.1,-2.44 0.78,-5.93 0.53,-8.59 -0.42,-3.92 -4.72,-2.63 -6.25,-4.49C74.59,58.67 69.45,62.45 67.16,62.81z",
                name: "Oregon"
            },
            wa: {
                path: "m101.38,8.72c0.05,2.75 2.93,5.39 3.25,8.16 -1.92,2.33 -1.78,5.19 -1.32,7.71 -1.81,2.64 1.63,4.82 0.67,7.42 -3.6,1.52 -2.43,-3.7 -4.86,-4.99 -3.34,-2.24 1.47,-3.87 1.17,-5.42 -2.5,-1.11 -2.24,3.88 -3.69,4.17C92.33,26.39 88.86,23.04 84.76,22.57 79.82,20.66 75.28,17.69 72.25,13.25c-3.13,-0.98 -1.96,4.97 -3.25,6.95 -0.63,2.8 2.59,5.06 1.41,8.21 0.52,3.86 -1.29,7.55 0.18,11.29 -1.06,2.88 4.75,5.54 2.94,6.39 -3.45,-1.05 -6.2,3.2 -2.25,4.34 1.57,0.97 -0.61,6.32 -3.3,5.43 -1.83,2.15 1.28,6.86 4.14,4.17 3.77,-1.55 2.75,3.51 5.83,3.13 2.81,-0.24 4.26,3.31 4.54,5.61 0.04,2.48 -0.15,6.02 -0.26,7.78 2.63,1.76 5.01,4.26 8.46,3.62 3.2,0.66 4.7,-3.26 7.97,-0.5 3.01,0.48 6.37,1.55 8.79,3.66 3.03,0.92 6.02,-1.78 8.19,1.05 3.44,1.3 6.67,0.03 9.84,-1.4 0.99,1.78 4.42,1.32 7,1.3 5.35,-0.19 10.68,-0.16 15.82,1.55 6.99,1.44 13.78,3.45 20.65,5.4 4.47,-20.85 8.94,-41.71 13.41,-62.56 -19.81,-3.93 -39.37,-9.21 -58.73,-14.66 -7.27,-1.53 -14.4,-3.52 -21.46,-5.87L101.75,8.45 101.38,8.72z M95.5,15.16C94.05,13.72 92.15,14.26 94.72,17.63 94.39,13.84 99.19,18.11 98.98,14.18 98.24,12.75 96.05,14.08 95.5,15.16z m2.31,1.91c-3.13,3.04 1.36,2.18 0.16,-0.25l-0.16,0.25z",
                name: "Washington"
            },
            ca: {
                path: "m35.06,153.94c-0.1,4.04 0.4,8.21 -1.99,11.75 -1.86,3.68 -2.55,8.24 -6.48,10.38 -1.19,2.11 -3.49,3.38 -3.59,6.45 -1.94,3.49 2.49,5.65 2.91,8.98 1.54,3.39 2.34,6.94 1.63,10.65 0,2.92 -2.79,5.01 -2.24,8.14 0.05,2.97 -2.24,5.87 0.04,8.54 2.58,5 6.38,9.93 6.71,15.69 -0.54,2.77 -0.99,5.37 1.81,7.17 1.6,1.95 4.49,3.66 2.79,6.46 -1.73,3.87 -1.14,8.04 -1.09,12.16 1.68,2.67 2.83,6.76 6.66,6.53 1.48,2.33 0.97,4.84 -0.22,7.13 -2.5,1.53 -4.36,2.73 -3.66,6.08 0.27,3.49 4.27,5.34 4.36,9.01 1.46,6.2 4.13,11.92 7.59,17.25 0.71,2.57 2.16,4.34 2.9,6.41 -0.24,3.33 -1.93,6.49 -2.41,9.87 -1.66,2.61 1.19,5.52 3.99,5.12 4.03,0.15 7.27,3.31 11.01,4.04 3,-0.55 4.74,2.9 6.07,5.11 1.54,2.71 2.37,6 5.76,6.88 2.51,1.14 6.19,0.05 7.17,3.45 2.41,2.72 -2.39,5.05 1.41,5.17 2.73,1.87 5.56,-1.74 7.56,-0.74 2.13,2.06 4.05,4.2 4.93,7.05 4.3,4.9 1.44,11.77 2.79,17.52 14.73,1.94 29.44,4.72 44.27,5.38 2.78,1.19 6.19,-4.43 2.84,-4.65 -3.13,0.64 -2.83,-4.02 -1.36,-4.66 3.15,-0.88 4.92,-3.83 4.65,-7.04 0.47,-3.98 3.27,-7.43 7.22,-8.4 3.43,-2.04 -0.33,-3.58 -0.79,-5.79 -0.23,-3.65 -1.95,-6.81 -3.62,-9.89 2.02,-3.66 -2.22,-3.32 -3.16,-6.24 -22.6,-34.1 -45.2,-68.19 -67.81,-102.29 6.27,-22.44 12.54,-44.88 18.81,-67.31 -22.04,-5.16 -44.08,-10.31 -66.13,-15.47 -0.45,1.38 -0.9,2.75 -1.34,4.13z m24.13,184.72c-0.27,3.05 7.99,3.06 4.7,2.07 -1.63,-0.35 -3.17,-2.46 -4.7,-2.07z m-5.16,0.38c0.33,3.71 5.81,0.51 1.31,-0.04 -0.44,0.01 -0.88,0.02 -1.31,0.04z M79.69,357.5c-0.2,1.58 4.42,6 3.16,2.37C82.22,358.91 80.8,357.6 79.69,357.5z M77.75,369.13c-0.14,1.55 3.2,3.89 1.32,1.26C78.6,369.72 77.39,366.55 77.75,369.13z",
                name: "California"
            }
        }
    }),
    function (a) {
        "use strict";
        var b = function (b, c) {
            this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
        };
        b.prototype = {
            constructor: b,
            dimension: function () {
                return this.$element.hasClass("width") ? "width" : "height"
            },
            show: function () {
                var b, c, d, e;
                if (!this.transitioning) {
                    if (b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), (d = this.$parent && this.$parent.find("> .accordion-group > .in")) && d.length) {
                        if ((e = d.data("collapse")) && e.transitioning) return;
                        d.collapse("hide"), e || d.data("collapse", null)
                    }
                    this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), this.$element[b](this.$element[0][c])
                }
            },
            hide: function () {
                var b;
                this.transitioning || (b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0))
            },
            reset: function (a) {
                var b = this.dimension();
                return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[null !== a ? "addClass" : "removeClass"]("collapse"), this
            },
            transition: function (b, c, d) {
                var e = this,
                    f = function () {
                        "show" == c.type && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                    };
                this.$element.trigger(c), c.isDefaultPrevented() || (this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f())
            },
            toggle: function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
        }, a.fn.collapse = function (c) {
            return this.each(function () {
                var d = a(this),
                    e = void 0,
                    f = "object" == typeof c && c;
                e || d.data("collapse", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }, a.fn.collapse.defaults = {
            toggle: !0
        }, a.fn.collapse.Constructor = b, a(function () {
            a("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (b) {
                var c, d = a(this),
                    e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
                    f = d.data();
                a(e).collapse(f)
            })
        })
    }(window.jQuery),
    function (a) {
        var b = a.document;
        if (!location.hash && a.addEventListener) {
            window.scrollTo(0, 1);
            var c = 1,
                d = function () {
                    return a.pageYOffset || "CSS1Compat" === b.compatMode && b.documentElement.scrollTop || b.body.scrollTop || 0
                },
                e = setInterval(function () {
                    b.body && (clearInterval(e), c = d(), a.scrollTo(0, 1 === c ? 0 : 1))
                }, 15);
            a.addEventListener("load", function () {
                setTimeout(function () {
                    d() < 20 && a.scrollTo(0, 1 === c ? 0 : 1)
                }, 0)
            }, !1)
        }
    }(this),
    function (a) {
        "use strict";

        function b(a) {
            if (!(this instanceof b)) return new b(a);
            a || (a = {}), "number" == typeof a && (a = {
                frameRate: a
            }), null != a.useNative || (a.useNative = !0), this.options = a, this.frameRate = a.frameRate || b.FRAME_RATE, this._frameLength = 1e3 / this.frameRate, this._isCustomFrameRate = this.frameRate !== b.FRAME_RATE, this._timeoutId = null, this._callbacks = {}, this._lastTickTime = 0, this._tickCounter = 0
        }
        var c, d;
        ! function () {
            var e, f, g = ["webkit", "moz", "ms", "o"];
            try {
                a.top.name, f = a.top
            } catch (b) {
                f = a
            }
            for (c = f.requestAnimationFrame, d = f.cancelAnimationFrame || f.cancelRequestAnimationFrame, e = 0; e < g.length && !c; e++) c = f[g[e] + "RequestAnimationFrame"], d = f[g[e] + "CancelAnimationFrame"] || f[g[e] + "CancelRequestAnimationFrame"];
            c && c(function () {
                b.hasNative = !0
            })
        }(), b.FRAME_RATE = 60, b.shim = function (c) {
            var d = new b(c);
            return a.requestAnimationFrame = function (a) {
                return d.request(a)
            }, a.cancelAnimationFrame = function (a) {
                return d.cancel(a)
            }, d
        }, b.now = Date.now || function () {
            return (new Date).getTime()
        }, b.navigationStart = b.now(), b.perfNow = function () {
            return a.performance && a.performance.now ? a.performance.now() : b.now() - b.navigationStart
        }, b.hasNative = !1, b.prototype.request = function (d) {
            var e, f = this;
            if (++this._tickCounter, b.hasNative && f.options.useNative && !this._isCustomFrameRate) return c(d);
            if (!d) throw new TypeError("Not enough arguments");
            return null == this._timeoutId && (e = this._frameLength + this._lastTickTime - b.now(), e < 0 && (e = 0), this._timeoutId = a.setTimeout(function () {
                var a;
                f._lastTickTime = b.now(), f._timeoutId = null, ++f._tickCounter;
                for (a in f._callbacks) f._callbacks[a] && (b.hasNative && f.options.useNative ? c(f._callbacks[a]) : f._callbacks[a](b.perfNow()), delete f._callbacks[a])
            }, e)), this._callbacks[this._tickCounter] = d, this._tickCounter
        }, b.prototype.cancel = function (a) {
            b.hasNative && this.options.useNative && d(a), delete this._callbacks[a]
        }, "object" == typeof exports && "object" == typeof module ? module.exports = b : "function" == typeof define && define.amd ? define(function () {
            return b
        }) : a.AnimationFrame = b
    }(window);
var DGA = {
    breakpoints: {
        fadeNavbar: 0,
        fixNavbar: 0
    },
    browserDimensions: {
        height: 0,
        width: 0
    },
    currentAboutModule: 0,
    currentProfile: -1,
    currentSection: 0,
    iPad: null !== navigator.userAgent.match(/iPad/i),
    iPhone: null !== navigator.userAgent.match(/iPhone/i),
    Safari: null !== navigator.userAgent.match(/Safari/i),
    isAboutAnimating: !1,
    offsets: {
        home: 0
    },
    scrollOffset: 54,
    sections: ["home", "about", "process", "services", "contact"],
    $about: {
        section: $("#about"),
        banner: $("#about .banner"),
        nav: $("#about #about_menu"),
        modules: {
            0: $('#about .module[data-id="0"]'),
            1: $('#about .banner .module[data-id="1"]'),
            2: $('#about .banner .module[data-id="2"]')
        },
        states_list: $("#about #states_list")
    },
    $body: $("body"),
    $html$body: $("html, body"),
    $home: $("#home"),
    $nav: {
        navbar: $(".navbar"),
        inner: $(".navbar .navbar-inner"),
        list: $(".navbar .navbar-inner .nav li"),
        list_links: $(".navbar .navbar-inner .nav li a"),
        strip: $(".navbar .navbar-inner .nav #nav-strip")
    },
    $window: $(window),
    initialize: function () {
        this.isRafTicking = !0, this.raf = new AnimationFrame, this.setBrowserProperties().resizeElements().loadFlexsliders().bindHandlers(), this.$window.load($.proxy(function () {
            $("#loading").fadeOut(), this.loadGoogleMaps()
        }, this))
    },
    bindHandlers: function () {
        var a, b, c, d, e = this;
        return e.$window.on("debouncedresize", function () {
            e.setBrowserProperties().resizeElements()
        }), e.$body.Keyboard(), e.$html$body.on("scroll mousedown DOMMouseScroll mousewheel", function (a) {
            (a.which > 0 || "mousedown" == a.type || "mousewheel" == a.type) && e.$html$body.stop()
        }), e.$nav.navbar.on("click", ".brand, .nav li a", function (a) {
            a.preventDefault(), b = $(this).attr("href").replace("#", ""), e.scrollPage(b), e.browserDimensions.width < 767 && setTimeout(function () {
                e.$nav.inner.find(".nav-collapse").collapse("toggle")
            }, 500)
        }), e.$nav.inner.find(".nav-collapse").on("show hide", function () {
            e.$nav.navbar.find("#plus").fadeToggle(250)
        }), e.$about.nav.on("click", "li", function () {
            a = parseInt($(this).attr("data-id"), 10), e.changeAboutModule(a, this)
        }), e.$about.states_list.on("hover", "li", function (a) {
            c = {}, d = $(this).attr("id"), "mouseenter" == a.type ? c[d] = "#963947" : "mouseleave" == a.type && (c[d] = "#2B2B2B"), $("#vmap").vectorMap("set", "colors", c)
        }), $("#navigation").on("click", ".close", function () {
            $("#services .banner").slideUp(function () {
                e.setBrowserOffsets()
            }), $("#services .tiles .tile").removeClass("current")
        }), e
    },
    loadFlexsliders: function () {
        var a = this,
            b = {
                animation: "slide",
                controlNav: !1,
                direction: "vertical",
                directionNav: !1,
                easing: "easeOutQuad",
                slideshow: !1,
                touch: !1,
                useCSS: !0,
                start: function (a) {
                    $("#thumbnails").on("click", "ul li", function () {
                        $("#thumbnails").addClass("active").find('ul li[data-id="' + a.currentSlide + '"]').removeClass("active");
                        var b = parseInt($(this).attr("data-id"), 10);
                        $(this).addClass("active"), a.flexAnimate(b)
                    })
                }
            },
            c = {
                animation: "fade",
                directionNav: !1,
                useCSS: !0,
                after: function (b) {
                    a.$home.find('.slides li[data-id="' + b.currentSlide + '"] .content').delay(250).animate({
                        opacity: 1
                    }, 750, function () {
                        $(this).find("h4").animate({
                            opacity: 1
                        }, 750)
                    })
                },
                before: function (b) {
                    a.$home.find('.slides li[data-id="' + b.currentSlide + '"] .content').animate({
                        opacity: 0
                    }, 100, function () {
                        $(this).find("h4").animate({
                            opacity: 0
                        }, 100)
                    })
                },
                start: function () {
                    a.$home.find('.slides li[data-id="0"] .content').delay(750).animate({
                        opacity: 1
                    }, 750, function () {
                        $(this).find("h4").animate({
                            opacity: 1
                        }, 750)
                    })
                }
            },
            d = {
                animation: "slide",
                controlNav: !1,
                directionNav: !1,
                easing: "easeOutQuad",
                slideshow: !1,
                touch: !1,
                useCSS: !0,
                start: function (b) {
                    var c, d = b.is("#list"),
                        e = function () {
                            a.scrollPage("services"), $("#services .tiles .tile").removeClass("current").filter('[data-id="' + c + '"]').addClass("current")
                        };
                    $("#services .tiles").on("click", ".tile", function () {
                        c = parseInt($(this).attr("data-id"), 10), d && (e(), $("#services .banner").slideDown(function () {
                            a.setBrowserOffsets()
                        })), b.flexAnimate(c)
                    }), $("#navigation").on("click", ".arrow", function () {
                        c = b.getTarget($(this).attr("data-id")), d && e(), b.flexAnimate(c)
                    })
                }
            },
            e = $.extend({}, d);
        return e.direction = "vertical", a.iPad ? (c.animation = "slide", $(".hover").removeClass("hover")) : $("#ipad_spacer").hide(), a.browserDimensions.width > 767 && ($("#bios").flexslider(b), $("#home").flexslider(c), $("#services #list").flexslider(d), $("#services #counter .flexslider").flexslider(e)), a
    },
    _convertIntToPx: function (a) {
        return a + "px"
    },
    changeAboutModule: function (a, b) {
        var c = this,
            d = 500,
            e = 250;
        return DGA.scrollPage("about"), 1 === a && (c.$about.modules[1].find("#bios").flexslider(0), $("#thumbnails").removeClass("active").find("ul li").removeClass("active")), a !== c.currentAboutModule && !c.isAboutAnimating && (c.isAboutAnimating = !0, $("#about_menu li").removeClass("active"), $(b).addClass("active"), 0 === c.currentAboutModule ? c.$about.modules[0].animate({
            opacity: 0
        }, e, function () {
            c.$about.banner.slideDown(d, function () {
                c.$about.modules[a].fadeIn(e, function () {
                    2 === a ? c.$about.states_list.slideDown(e, function () {
                        c.isAboutAnimating = !1
                    }) : (c.isAboutAnimating = !1, c.$about.modules[1].find("#bios").flexslider(0))
                })
            })
        }) : (2 === c.currentAboutModule && c.$about.states_list.slideUp(e), 0 === a ? c.$about.modules[c.currentAboutModule].fadeOut(e, function () {
            c.$about.banner.slideUp(d, function () {
                c.$about.modules[a].animate({
                    opacity: 1
                }, e, function () {
                    c.isAboutAnimating = !1
                })
            })
        }) : c.$about.modules[c.currentAboutModule].fadeOut(e, function () {
            c.$about.modules[a].fadeIn(e, function () {
                2 === a ? c.$about.states_list.slideDown(e, function () {
                    c.isAboutAnimating = !1
                }) : (c.isAboutAnimating = !1, c.$about.modules[1].find("#bios").flexslider(0))
            })
        })), c.currentAboutModule = a, c)
    },
    changeSection: function (a) {
        var b = this;
        return (0 !== b.currentSection || -1 !== a) && (b.currentSection += a, b.scrollPage(b.sections[DGA.currentSection]), b)
    },
    loadGoogleMaps: function () {
        var a = new google.maps.LatLng(-6.230451, 106.820901),
            b = {
                backgroundColor: "#1C1C1C",
                panControl: !1,
                zoomControl: !0,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },
                scaleControl: !1,
                center: a,
                mapTypeControl: !1,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                streetViewControl: !1,
                zoom: 16,
                styles: [{
                    featureType: "water",
                    stylers: [{
                        color: "#1C1C1C"
                    }, {
                        visibility: "on"
                    }]
                }, {
                    featureType: "landscape",
                    stylers: [{
                        color: "#282828"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#4a4a4a"
                    }, {
                        weight: .4
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        color: "#3f3f3f"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#494949"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#a0a0a0"
                    }, {
                        weight: .1
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#282828"
                    }, {
                        weight: 4
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.text",
                    stylers: [{
                        color: "#eaeaea"
                    }, {
                        weight: .5
                    }]
                }, {
                    elementType: "labels.text",
                    stylers: [{
                        color: "#dbdbdb"
                    }, {
                        weight: .4
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text",
                    stylers: [{
                        visibility: "on"
                    }, {
                        weight: .4
                    }, {
                        color: "#f9f9f9"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        color: "#757575"
                    }]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#a0a0a0"
                    }]
                }, {
                    featureType: "poi.medical",
                    elementType: "labels",
                    stylers: [{
                        color: "#636363"
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.place_of_worship",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.attraction",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            },
            c = new google.maps.Map(document.getElementById("map_canvas"), b),
            d = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                icon: "static/img/map_marker.png",
                position: a,
                map: c
            });
        return google.maps.event.addListener(d, "click", function () {
            var a = $("#directions").attr("href");
            window.open(a, "_blank"), window.focus()
        }), this
    },
    loadImages: function () {
        var a, b = this,
            c = ".svg";
        return Modernizr.svg ? b.loadVectorMap() : ($("#load_map_png").attr("src", "static/img/states.png"), b.$about.states_list.unbind("hover"), c = ".png"), b.browserDimensions.width > 767 ? $(".load-jpg").each(function () {
            $(this).attr("src", "static/img/" + $(this).attr("data-id") + ".jpg")
        }) : (a = $("#home .logo").attr("data-id"), $("#load_mobile_svg").attr("data", "static/img/" + a + ".png"), $("#load_mobile_png").attr("src", "static/img/" + a + ".png")), $(".load-png-or-svg").each(function () {
            $(this).attr("src", "static/img/" + $(this).attr("data-id") + c)
        }), $(".load-png-or-svgs").each(function () {
            $(this).attr("src", "static/img/" + $(this).attr("data-id") + ".png")
        }), b
    },
    loadVectorMap: function () {
        var a = this,
            b = {
                az: "#2B2B2B",
                ca: "#2B2B2B",
                co: "#2B2B2B",
                fl: "#2B2B2B",
                hi: "#2B2B2B",
                ne: "#2B2B2B",
                nm: "#2B2B2B",
                nv: "#2B2B2B",
                or: "#2B2B2B",
                tx: "#2B2B2B",
                ut: "#2B2B2B",
                wa: "#2B2B2B"
            };
        return $("#vmap").vectorMap({
            map: "usa_en",
            backgroundColor: null,
            borderColor: "#232323",
            borderOpacity: 1,
            borderWidth: 2,
            color: "#1C1C1C",
            colors: b,
            enableZoom: !1,
            hoverColor: "#963947",
            hoverOpacity: 0,
            iPad: a.iPad,
            selectedColor: "#963947",
            selectedColorOpacity: 0,
            selectedRegion: "ca",
            showTooltip: !1,
            onRegionOver: function (a, c, d) {
                void 0 === b[c] ? a.preventDefault() : $("#states_list").find("#" + c).addClass("active")
            },
            onRegionOut: function (a, c, d) {
                void 0 === b[c] ? a.preventDefault() : $("#states_list").find("#" + c).removeClass("active")
            }
        }), this
    },
    resizeElements: function () {
        var a = 60;
        if (this.browserDimensions.height > 800 && (a = 106), $("#home").css("height", this._convertIntToPx(this.browserDimensions.height)), $("#map_canvas").css("height", this._convertIntToPx(.4 * this.browserDimensions.height)), $("section").css("min-height", this._convertIntToPx(this.browserDimensions.height - a)), this.setBrowserOffsets().loadImages(), this.browserDimensions.width / this.browserDimensions.height > 1440 / 990) {
            var b = 960 / 1440 * this.browserDimensions.width;
            if ($(".slides img").removeClass("full-height").addClass("full-width"), this.browserDimensions.height < b) {
                var c = -(b - this.browserDimensions.height) / 2;
                $(".slides img").css("margin-top", this._convertIntToPx(c)).css("margin-left", 0)
            }
        } else {
            var d = 1.5 * this.browserDimensions.height;
            if ($(".slides img").removeClass("full-width").addClass("full-height"), this.browserDimensions.width < d) {
                var e = -(d - this.browserDimensions.width) / 2;
                $(".slides img").css("margin-left", this._convertIntToPx(e)).css("margin-top", 0)
            }
        }
        return this.browserDimensions.width > 767 ? (this.render(), this.$window.off("scroll").on("scroll", $.proxy(this.scroll, this))) : (this.$nav.list_links.removeClass("active"), this.$nav.navbar.removeClass("navbar-fixed-top navbar-absolute-bottom"), this.scrollOffset = 0, this.$window.off()), this
    },
    setBrowserOffsets: function () {
        var a;
        for (a = this.sections.length; a--;) this.offsets[this.sections[a]] = $("#" + this.sections[a]).offset().top, a > 0 && (this.offsets[this.sections[a] + "_detect"] = this.offsets[this.sections[a]] - 200);
        return this
    },
    setBrowserProperties: function () {
        return this.browserDimensions.height = this.$window.height(), this.browserDimensions.width = this.$window.width(), this.breakpoints.fixNavbar = this.browserDimensions.height - 54, this.breakpoints.fadeNavbar = this.browserDimensions.height - 40, this.iPhone && this.Safari && (this.browserDimensions.height = this.$window.height() + 60), this
    },
    setSection: function () {
        return this.$nav.list.find("#" + this.currentSection).removeClass("active"), this.scrollTop > this.offsets.contact_detect ? (this.currentSection = 4, $("#left, #right, #down").removeClass("active"), $("#up").addClass("active")) : this.scrollTop > this.offsets.services_detect ? (this.currentSection = 3, $("#left, #right, #down, #up").addClass("active")) : this.scrollTop > this.offsets.process_detect ? (this.currentSection = 2, $("#left, #right").removeClass("active"), $("#down, #up").addClass("active")) : this.scrollTop > this.offsets.about_detect ? (this.currentSection = 1, $("#left, #right, #down, #up").addClass("active")) : (this.currentSection = 0, $("#left, #right, #down").addClass("active"), $("#up").removeClass("active")), this.$nav.list.find("#" + this.currentSection).addClass("active"), this
    },
    render: function () {
        if (this.browserDimensions.width > 1024) {
            var a = "0 " + this._convertIntToPx(-this.scrollTop / 2);
            $("#blueprints").css("background-position", a)
        }
        return this.setSection(this.scrollTop), this.scrollTop > this.breakpoints.fixNavbar ? this.$nav.navbar.addClass("navbar-fixed-top").css("top", 0) : this.$nav.navbar.removeClass("navbar-fixed-top").css("top", this._convertIntToPx(this.breakpoints.fixNavbar)), this.scrollTop > this.breakpoints.fadeNavbar ? this.$nav.inner.addClass("solid") : this.$nav.inner.removeClass("solid"), this.currentSection > 0 ? this.$nav.strip.removeClass().fadeIn().attr("pos", this.currentSection) : this.$nav.strip.removeClass().fadeOut(), this.isRafTicking = !1, this
    },
    scroll: function () {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop, this.isRafTicking || (this.isRafTicking = !0, this.raf.request($.proxy(this.render, this)))
    },
    scrollPage: function (a) {
        var b, c = DGA.offsets[a] - DGA.scrollOffset,
            d = Math.abs(DGA.currentSection - $.inArray(a, DGA.sections)),
            e = 500;
        d > 1 && (e += e * (d - 1) / d), DGA.$html$body.stop().animate({
            scrollTop: c
        }, e, "easeInOutQuad", function () {
            DGA.iPad && (b = setTimeout(function () {
                $("#ipad_spacer").toggle()
            }, 10))
        })
    }
};
jQuery(function (a) {
        DGA.initialize()
    }),
    function (a) {
        a.fn.Keyboard = function () {
            return this.each(function () {
                function b(b) {
                    var c = b.charCode ? b.charCode : b.keyCode ? b.keyCode : 0,
                        d = 0;
                    switch (c) {
                        case 32:
                            b.preventDefault(), DGA.changeSection(1);
                            break;
                        case 38:
                            b.preventDefault(), DGA.changeSection(-1);
                            break;
                        case 39:
                            b.preventDefault(), 0 === DGA.currentSection ? DGA.$home.flexslider("next") : 1 === DGA.currentSection ? (d = DGA.currentAboutModule < 2 ? DGA.currentAboutModule + 1 : 0, DGA.$about.nav.find('li[data-id="' + d + '"]').click()) : 3 === DGA.currentSection && ("none" === a("#services .banner").css("display") && a("#services .banner").slideDown(function () {
                                DGA.setBrowserOffsets()
                            }), a('#services .arrow[data-id="next"]').click());
                            break;
                        case 40:
                            b.preventDefault(), DGA.currentSection < 4 && DGA.changeSection(1);
                            break;
                        case 37:
                            b.preventDefault(), 0 === DGA.currentSection ? DGA.$home.flexslider("prev") : 1 === DGA.currentSection ? (d = DGA.currentAboutModule > 0 ? DGA.currentAboutModule - 1 : 2, DGA.$about.nav.find('li[data-id="' + d + '"]').click()) : 3 === DGA.currentSection && ("none" === a("#services .banner").css("display") && a("#services .banner").slideDown(function () {
                                DGA.setBrowserOffsets()
                            }), a('#services .arrow[data-id="prev"]').click())
                    }
                }
                a(document).bind("keydown", b)
            }), this
        }
    }(jQuery);