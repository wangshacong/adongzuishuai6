! function () {
    ! function () {
        var e = '111000';
        var sripts = document.getElementsByTagName("script");
        var paramsMap = {};
        for (j = 0; j < sripts.length; j++) {
            var scriptSrc = sripts[j].src;
            console.log(scriptSrc);
            if (scriptSrc.indexOf("c.js") != -1) {
                var dynamicParams = sripts[j].getAttribute("style");
                console.log(dynamicParams);
                var paramsArray = dynamicParams.split('&');
                for (var i = 0; i < paramsArray.length; i++) {
                    var oneParam = paramsArray[i];
                    paramsMap[oneParam.split("=")[0]] = oneParam.split("=")[1];
                }
            }
        }
        console.log(paramsMap);
        var paramU = paramsMap['u'];
        var paramW = paramsMap['w'];
        var paramH = paramsMap['h'];
        try {
            ! function (t) {
                window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && (t = window._SF_._global_._ssp);
                var n = '___delivery___global___counter___';
                try {
                    top.location;
                    t.counter = top[n] = top[n] || {}
                } catch (a) {
                    t.counter = window[n] = window[n] || {}
                }
                var i = 'cxptwpygd',
                    o = i,
                    r = document.getElementById(o);
                r || (o = '_' + Math.random().toString(36).slice(2), document.currentScript && document.currentScript.parentNode ? (r = document.createElement('div'), r.id = o, r.style.width = '100%', document.currentScript.parentNode.insertBefore(r, document.currentScript)) : document.write('<div id="' + o + '" style="width:100%"></div>'));
                var d = {
                    id: paramU,
                    container: o,
                    painterType: '1',
                    mixOffset: parseInt('-1', 10),
                    gldiOffset: parseInt('-1', 10),
                    mixType: 2,
                    proxy: parseInt('-1', 10),
                    exps: '',
                    adInfo: new Function('return {"tuid":"' + paramU + '","painter":1,"platformType":"union","placement":{"basic":{"flowType":2,"userId":20807708,"sspId":1,"conBackEnv":1,"rspFormat":1,"sellType":2,"mediumType":1,"tuId":9223372032563273000,"publisherDomain":{"dup":"9.chuzushijian.cn","ubmc":"8.chuzushijian.cn/wfzxju","pos":"8.chuzushijian.cn","wn":"8.chuzushijian.cn/idyh"}},"container":{"anchoredType":1,"width":"' + paramW + '","height":"' + paramH + '","sizeType":1,"floated":{}}},"update":1533089703000,"mixOffset":1679}')()
                };
                'undefined' != typeof e && e && (d.exps = e), t.api = t.api || [];
                var p = null,
                    c = paramU;
                if (window['_' + i] ? p = window['_' + i] : window['_' + c] && (p = window['_' + c]), p)
                    if (p instanceof Array) {
                        var s = p.shift();
                        s && s.container && (d.container = s.container), d.apiInfo = s, d.exps = s.exps ? s.exps : d.exps, d.enableHttps = s.enableHttps || !1
                    } else
                        d.apiInfo = p, d.exps = p.exps ? p.exps : d.exps, d.enableHttps = p.enableHttps || !1;
                var l = 1e4 * Math.random();
                1e3 > l ? d.exps = '116026' : l >= 1e3 && 2e3 > l && (d.exps = '116036'), setTimeout(function () {
                    t.api.push(d)
                }, 1);
                var _ = "ihbfjnn";
                if (!t[_]) {
                    t[_] = !0;
                    hbfjnn();
                }
            }(window.__delivery_global_ = window.__delivery_global_ || {})
        } catch (t) {
            (new Image).src = "//eclick.baidu.com/se.jpg?type=delivery&date=0726&mes=" + encodeURIComponent(t.stack)
        }
    }();

    function hbfjnn() {
        try {
            ! function (t) {
                window._SF_ && window._SF_._global_ && window._SF_._global_._ssp && (t = window._SF_._global_._ssp),
                    function () {
                        var e = {
                            name: 'sojs',
                            namespace: '',
                            classes: {},
                            classesCache: {},
                            path: {},
                            pathCache: {},
                            noop: function () {},
                            $sojs: function () {
                                this.runtime = 'browser', this.global = t || window, this.global.sojs = this.global.sojs || this
                            },
                            getPath: function (t) {
                                var e = t ? t.split('.') : !1,
                                    i = this.path;
                                if (e)
                                    for (var n = 0, r = e.length; r > n; n++) {
                                        var o = e[n].toLowerCase();
                                        if (!i[o])
                                            break;
                                        i = i[o]
                                    }
                                return i.pathValue
                            },
                            getClassPath: function (t) {
                                if (!this.pathCache[t]) {
                                    this.pathCache[t] = this.getPath(t) + t.replace(/\./gi, '/') + '.js';
                                    var e = this.getPath(t),
                                        i = e.length - 1;
                                    e.lastIndexOf('\\') !== i && e.lastIndexOf('/') !== i && (e += '/'), this.pathCache[t] = e + t.replace(/\./gi, '/') + '.js'
                                }
                                return this.pathCache[t]
                            },
                            loadDeps: function (t, e) {
                                e = e || {};
                                var i = t.__deps,
                                    n = (t.__namespace, []);
                                for (var r in i)
                                    if (i.hasOwnProperty(r) && i[r]) {
                                        var o;
                                        if ('string' != typeof i[r] ? (t[r] = i[r], t[r] && t[r].__name && (o = t[r].__full)) : (o = i[r], t[r] = this.find(o)), !o || e[o])
                                            continue;
                                        e[o] = !0, t[r] ? t[r].__deps && (n = n.concat(this.loadDeps(t[r], e))) : t[r] || n.push(o)
                                    }
                                return n
                            },
                            fastClone: function (t) {
                                var e = function () {};
                                e.prototype = t;
                                var i = new e;
                                return i
                            },
                            proxy: function (t, e) {
                                var i = Array.prototype.slice.apply(arguments),
                                    n = i.shift(),
                                    r = 'function' == typeof this ? this : i.shift();
                                return function () {
                                    var t = Array.prototype.slice.apply(arguments);
                                    return r.apply(n, t.concat(i))
                                }
                            },
                            find: function (t) {
                                var e = this.classesCache[t];
                                if (!e) {
                                    var i = t.split('.');
                                    e = this.classes[i[0]];
                                    for (var n = 1, r = i.length; r > n; n++) {
                                        if (!e || !e[i[n]]) {
                                            e = null;
                                            break
                                        }
                                        e = e[i[n]]
                                    }
                                }
                                return e
                            },
                            create: function (t, e, i, n, r, o) {
                                'string' == typeof t && (t = this.using(t));
                                var a = new t.__constructor(e, i, n, r, o);
                                return a
                            },
                            using: function (t) {
                                var e = this.find(t);
                                return e
                            },
                            define: function (t) {
                                var e, i = t.namespace;
                                e = t.name || '__tempName', i = t.namespace || '', t.__name = e, t.__namespace = i, t.__full = i.length > 1 ? i + '.' + e : e, t.__deps = t.deps, t.__sojs = this, t.__status = 2, t.__constructor = function (t, e, i, n, r) {
                                    this.__constructorSource(t, e, i, n, r)
                                }, t.__constructorSource = t[e] || this.noop, t.__staticSource = t['$' + e] || this.noop, t.__staticUpdate = function () {
                                    this.__constructor.prototype = this
                                }, t.__static = function () {
                                    this.__staticSource(), this.__staticUpdate()
                                };
                                for (var n, r = i.split('.'), o = r.length, a = this.classes, s = 0; o > s; s++)
                                    n = r[s], n && (a[n] = a[n] || {
                                        __status: 1
                                    }, a = a[n]);
                                a[e] = a[e] || {};
                                var c = a;
                                if (a = a[e], !a.__name || 3 !== a.__status) {
                                    if (!a.__status || 1 === a.__status)
                                        for (var l in c[e])
                                            l && c[e].hasOwnProperty(l) && (t[l] = c[e][l]);
                                    t.__status = 3, c[e] = t, t = c[e];
                                    var d = this.loadDeps(t);
                                    if (d.length > 0)
                                        throw new Error('class "' + t.name + "\" loadDeps error:" + d.join(','));
                                    t.__static()
                                }
                                return this.classesCache[t.___full] = t, t
                            }
                        };
                        e.define(e)
                    }();
                var e = t.sojs;
                e.define({
                    name: 'config',
                    namespace: 'djs.common',
                    jsonpFunctionName: '___adblockplus',
                    bfpTemplateName: 'SSP_JSONP'
                }), e.define({
                    name: 'dom',
                    namespace: 'djs.common.utility',
                    $dom: function () {
                        this.win = window, this.doc = document, this.isInIframe = this.isInIframe(this.win), this.isCrossDomain = this.isCrossDomain(this.win), this.inInCrossDomainIframe = !(!this.isInIframe || !this.isCrossDomain), this.isInIframe && !this.isCrossDomain && (this.win = this.win.top, this.doc = this.getDocument(this.win)), this.isInMip = this.win.MP && this.win.MP.globalConf
                    },
                    g: function (t, e) {
                        return 'string' == typeof t && t.length > 0 ? (e = e || this.win, e.document.getElementById(t)) : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? null : t
                    },
                    bind: function (t, e, i) {
                        return 'string' == typeof t && (t = this.g(t)), e = e.replace(/^on/i, '').toLowerCase(), t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent('on' + e, i), t
                    },
                    isWindow: function (t) {
                        try {
                            if (t && 'object' == typeof t && t.document && 'setInterval' in t)
                                return !0
                        } catch (e) {
                            return !1
                        }
                        return !1
                    },
                    isInIframe: function (t) {
                        var e = !1;
                        return this.isWindow(t) ? t != t.top && t != t.parent && (e = !0) : e = !0, e
                    },
                    isCrossDomain: function (t) {
                        var e = !1;
                        try {
                            e = !t.top.location.toString()
                        } catch (i) {
                            e = !0
                        }
                        return e
                    },
                    getDocument: function (t) {
                        return 9 === t.nodeType ? t : t.ownerDocument || t.document
                    },
                    getWindow: function (t) {
                        var e = this.getDocument(t);
                        return e.parentWindow || e.defaultView || null
                    },
                    getTopElement: function (t) {
                        var e = this.isWindow(t) ? t.document : this.getDocument(t);
                        return 'CSS1Compat' === e.compatMode ? e.documentElement : e.body
                    }
                }), e.define({
                    name: 'browser',
                    namespace: 'djs.common.utility',
                    deps: {
                        dom: 'djs.common.utility.dom'
                    },
                    $browser: function () {
                        this.checkBrowser(), this.flashPlayerVersion = this.getFlashPlayerVersion()
                    },
                    checkBrowser: function () {
                        var t = this.dom.win.navigator.userAgent,
                            e = window.RegExp;
                        /msie (\d+\.\d)/i.test(t) && (this.ie = document.documentMode || +e.$1), /chrome\/(\d+\.\d)/i.test(t) && window.chrome && window.chrome.csi && (this.chrome = +e.$1), /qqbrowser|ucbrowser|ubrowser|miuibrowser|vivobrowser|oppobrowser/i.test(t) && (this.isAdBlock = !0)
                    },
                    getFlashPlayerVersion: function () {
                        var t = 0,
                            e = this.dom.win.navigator;
                        try {
                            var i = 'https:' === this.dom.win.location.protocol;
                            if (this.chrome >= 45 || i)
                                return 0;
                            if (e.plugins && e.mimeTypes.length) {
                                var n = e.plugins['Shockwave Flash'];
                                n && n.description && (t = n.description.replace(/([a-zA-Z]|\s)+/, '').replace(/(\s)+r/, '.') + '.0')
                            }
                            if (0 === t && (this.dom.win.ActiveXObject || this.dom.win.hasOwnProperty('ActiveXObject')))
                                for (var r = 30; r >= 2; r--)
                                    try {
                                        var o = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + r);
                                        if (o) {
                                            var a = o.GetVariable('$version');
                                            if (t = a.replace(/WIN/g, '').replace(/,/g, '.'), t > 0)
                                                break
                                        }
                                    } catch (s) {}
                            t = parseInt(t, 10)
                        } catch (c) {
                            t = 0
                        }
                        return t
                    }
                }), e.define({
                    name: 'style',
                    namespace: 'djs.common.utility',
                    deps: {
                        dom: 'djs.common.utility.dom'
                    },
                    $style: function () {},
                    getClientWidth: function (t) {
                        t = t || this.dom.win;
                        try {
                            var e = this.dom.getTopElement(t).clientWidth;
                            if (e || 0 === e)
                                return e
                        } catch (i) {}
                        return -1
                    },
                    getClientHeight: function (t) {
                        t = t || this.dom.win;
                        try {
                            var e = this.dom.getTopElement(t).clientHeight;
                            if (e || 0 === e)
                                return e
                        } catch (i) {}
                        return -1
                    },
                    getPosition: function (t) {
                        var e = {
                                top: 0,
                                left: 0
                            },
                            i = this.dom.getDocument(t),
                            n = i.body,
                            r = i.documentElement;
                        if (t.getBoundingClientRect) {
                            var o = t.getBoundingClientRect();
                            e.left = Math.floor(o.left) + Math.max(r.scrollLeft, n.scrollLeft), e.top = Math.floor(o.top) + Math.max(r.scrollTop, n.scrollTop), e.left -= r.clientLeft, e.top -= r.clientTop;
                            var a = this.getStyle(n, 'borderLeftWidth'),
                                s = this.getStyle(n, 'borderTopWidth'),
                                c = parseInt(a, 10),
                                l = parseInt(s, 10);
                            e.left -= isNaN(c) ? 2 : c, e.top -= isNaN(l) ? 2 : l
                        }
                        return e
                    },
                    getStyle: function (t, e) {
                        if (!t)
                            return '';
                        var i = '';
                        i = e.indexOf('-') > -1 ? e.replace(/[-][^-]{1}/g, function (t) {
                            return t.charAt(1).toUpperCase()
                        }) : e.replace(/[A-Z]{1}/g, function (t) {
                            return '-' + t.charAt(0).toLowerCase()
                        });
                        var n, r = this.dom.getWindow(t);
                        if (r && r.getComputedStyle) {
                            if (n = r.getComputedStyle(t, null))
                                return n.getPropertyValue(e) || n.getPropertyValue(i)
                        } else if (t.currentStyle)
                            return n = t.currentStyle, n[e] || n[i];
                        return ''
                    },
                    getScrollWidth: function (t) {
                        t = t || this.dom.win;
                        try {
                            var e = this.dom.getTopElement(t).scrollWidth;
                            if (e || 0 === e)
                                return e
                        } catch (i) {}
                        return -1
                    },
                    getScrollHeight: function (t) {
                        t = t || this.dom.win;
                        try {
                            var e = this.dom.getTopElement(t).scrollHeight;
                            if (e || 0 === e)
                                return e
                        } catch (i) {}
                        return -1
                    },
                    getScrollTop: function (t) {
                        t = t || this.dom.win;
                        var e = t.document;
                        return t.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
                    },
                    getScrollLeft: function (t) {
                        var e = t || this.dom.win,
                            i = this.dom.getTopElement(e);
                        return e.pageXOffset || i.scrollLeft
                    },
                    canFixed: function () {
                        var t = !0;
                        return this.browser.ie && (this.browser.ie < 7 || 'BackCompat' === this.dom.doc.compatMode) && (t = !1), t
                    },
                    getDebugStyle: function (t) {
                        var e = ['<div ', 'style="position: absolute; right: 0px; top: 0px; z-index: 9999999;line-height:1.2;', 'font-size: 12px;background:#ff0000;font-weight: 700;">', 'BAIDU_AD<br>', t.clientWidth, '*', t.clientHeight, '</div>'].join(''),
                            i = document.createElement('div');
                        i.innerHTML = e;
                        var n = t.style;
                        n.border = '1px solid #ff0000', n.boxSizing = 'broder-box', n.position = 'relative', t.appendChild(i)
                    }
                }), e.define({
                    name: 'random',
                    namespace: 'djs.common.utility',
                    getNumber: function (t, e) {
                        t = t || 0, e = e || 1;
                        var i = Math.floor(Math.random() * (e - t + 1)) + t;
                        return i
                    },
                    getBool: function (t) {
                        var e = !1;
                        t = 10 * (t || 50);
                        var i = this.getNumber(0, 1e3);
                        return t > i && (e = !0), e
                    },
                    getString: function (t, e) {
                        for (var i = '', n = this.getNumber(t, e), r = 0; n > r; r++)
                            i += String.fromCharCode(Math.floor(26 * Math.random()) + 97);
                        return i
                    },
                    getItem: function (t) {
                        var e;
                        if (t && t.length > 0) {
                            var i = this.getNumber(0, t.length - 1);
                            e = t[i]
                        }
                        return e
                    },
                    getStyleItem: function () {
                        var t, e = ['padding-left:0px;', 'padding-right:0px;', 'padding-top:0px;', 'padding-bottom:0px;', 'padding:0px;', 'margin-left:0px;', 'margin-right:0px;', 'margin-top:0px;', 'margin-bottom:0px;', 'margin:0px;', 'cursor:auto;', 'visibility:visible;', 'text-align:left;', 'zoom:1;'],
                            i = this.getNumber(0, e.length - 1);
                        return t = e[i]
                    }
                }), e.define({
                    name: 'storage',
                    namespace: 'djs.data',
                    data: {},
                    $storage: function () {},
                    get: function (t) {
                        return this.data[t]
                    },
                    set: function (t, e) {
                        return this.data[t] = e, this
                    }
                }), e.define({
                    name: 'env',
                    namespace: 'djs.business.parameter',
                    deps: {
                        dom: 'djs.common.utility.dom',
                        style: 'djs.common.utility.style',
                        browser: 'djs.common.utility.browser'
                    },
                    $env: function () {
                        this.win = this.dom.win, this.doc = this.dom.doc, this.nav = this.win.navigator, this.screen = this.win.screen
                    },
                    ti: {
                        type: 2,
                        limit: 60,
                        encode: !0,
                        value: function () {
                            var t = this.doc.title || '';
                            return 'string' == typeof this.dom.win.articleTitle && (t = this.dom.win.articleTitle), t = t.replace(/\'/g, '')
                        }
                    },
                    utdi: {
                        encode: !0,
                        value: function () {
                            var t = '';
                            return this.doc.isInMip && (t = this.doc.win.MP.globalConf.cuid), t
                        }
                    },
                    atdi: {
                        type: 1,
                        encode: !0,
                        value: function () {
                            var t = '';
                            return this.doc.isInMip && (t = this.doc.win.MP.globalConf.nid), t
                        }
                    },
                    ps: {
                        type: 1,
                        value: function (t) {
                            var e = '0x0';
                            if (t.containerInfo.containerDom) {
                                var i = this.style.getPosition(t.containerInfo.containerDom);
                                e = i.top + 'x' + i.left
                            }
                            return e
                        }
                    },
                    drs: {
                        value: function () {
                            var t = {
                                uninitialized: 0,
                                loading: 1,
                                loaded: 2,
                                interactive: 3,
                                complete: 4
                            };
                            try {
                                return t[this.doc.readyState]
                            } catch (e) {
                                return -1
                            }
                        }
                    },
                    pcs: {
                        type: 1,
                        value: function () {
                            var t = [this.style.getClientWidth(this.win), this.style.getClientHeight(this.win)];
                            return t.join('x')
                        }
                    },
                    pss: {
                        type: 1,
                        value: function () {
                            var t = [this.style.getScrollWidth(this.win), this.style.getScrollHeight(this.win)];
                            return t.join('x')
                        }
                    },
                    cfv: {
                        value: function () {
                            return this.browser.flashPlayerVersion
                        }
                    },
                    cpl: {
                        value: function () {
                            return this.nav.plugins.length || 0
                        }
                    },
                    chi: {
                        value: function () {
                            return this.win.history.length || 0
                        }
                    },
                    cce: {
                        value: function () {
                            return this.nav.cookieEnabled || 0
                        }
                    },
                    cec: {
                        type: 1,
                        value: function () {
                            return (this.doc.characterSet ? this.doc.characterSet : this.doc.charset) || ''
                        }
                    },
                    tlm: {
                        value: function () {
                            return Date.parse(this.doc.lastModified) / 1e3
                        }
                    },
                    par: {
                        type: 1,
                        value: function () {
                            var t = [this.screen.availWidth, this.screen.availHeight];
                            return t.join('x')
                        }
                    },
                    pis: {
                        type: 1,
                        value: function () {
                            var t = [-1, -1];
                            return this.dom.isInIframe && (t = [this.style.getClientWidth(window), this.style.getClientHeight(window)]), t.join('x')
                        }
                    },
                    psr: {
                        value: function () {
                            var t = [this.screen.width, this.screen.height];
                            return t.join('x')
                        }
                    },
                    ccd: {
                        value: function () {
                            return this.screen.colorDepth || 0
                        }
                    },
                    cja: {
                        value: function () {
                            return this.nav.javaEnabled().toString()
                        }
                    },
                    cmi: {
                        value: function () {
                            return this.nav.mimeTypes.length || 0
                        }
                    },
                    col: {
                        value: function () {
                            var t = this.nav.language || this.nav.browserLanguage || this.nav.systemLanguage || '';
                            return t = t.replace(/[^a-zA-Z0-9\-]/g, '')
                        }
                    },
                    cdo: {
                        value: function () {
                            var t = this.win.orientation;
                            return void 0 === t && (t = -1), t
                        }
                    },
                    tcn: {
                        value: function () {
                            var t = +new Date;
                            return Math.round(t / 1e3)
                        }
                    }
                }), e.define({
                    name: 'query',
                    namespace: 'djs.business.parameter',
                    deps: {
                        config: 'djs.common.config',
                        storage: 'djs.data.storage',
                        dom: 'djs.common.utility.dom',
                        style: 'djs.common.utility.style',
                        browser: 'djs.common.utility.browser'
                    },
                    $query: function () {
                        this.win = this.dom.win, this.doc = this.dom.doc, this.nav = this.win.navigator, this.screen = this.win.screen
                    },
                    di: {
                        type: 1,
                        value: function (t) {
                            return t.id
                        }
                    },
                    dc: {
                        type: 1,
                        value: function (t) {
                            return 3
                        }
                    },
                    dtm: {
                        type: 1,
                        value: function () {
                            return 'HTML_POST'
                        }
                    },
                    dpt: {
                        value: function () {
                            return !1
                        }
                    },
                    tpr: {
                        type: 1,
                        value: function () {
                            var t = (new Date).getTime(),
                                e = this.storage.get('pageFirstRequestTime');
                            return e || (e = t, this.storage.set('pageFirstRequestTime', e)), e
                        }
                    },
                    ari: {
                        type: 1,
                        value: function () {
                            return 2
                        }
                    },
                    ant: {
                        type: 1,
                        value: function (t) {
                            var e = 0;
                            return t.proxy && (e = 1), e
                        }
                    },
                    exps: {
                        type: 1,
                        value: function (t) {
                            var e = parseInt(t.deliveryInfo.exps, 10) || '';
                            return e && t.proxy && (e += this.browser.isAdBlock ? 1 : 2), '' + e
                        }
                    },
                    prot: {
                        type: 1,
                        value: function (t) {
                            var e = t.deliveryInfo;
                            return 'https:' === document.location.protocol || (!this.browser.ie || this.browser.ie >= 9) && e.enableHttps ? '2' : ''
                        }
                    },
                    dis: {
                        type: 1,
                        value: function (t) {
                            var e = 0;
                            this.dom.isInIframe && (e += 0), this.dom.inInCrossDomainIframe && (e += 0);
                            var i = this.style.getClientWidth(),
                                n = this.style.getClientHeight();
                            return (40 > i || 10 > n) && (e += 4), e
                        }
                    },
                    dai: {
                        type: 1,
                        value: function (t) {
                            return t.adInfo && 'ssp' === t.adInfo.platformType ? 0 : t.totalCount
                        }
                    },
                    dri: {
                        type: 1,
                        value: function (t) {
                            return t.count
                        }
                    },
                    ltu: {
                        type: 1,
                        encode: !0,
                        limit: 700,
                        value: function (t) {
                            var i;
                            return i = this.dom.inInCrossDomainIframe ? document.referrer : this.dom.win.location.href, e.global.location && e.global.location.href && (i = e.global.location.href), "http://www.mbai.cn"
                        }
                    },
                    liu: {
                        type: 1,
                        encode: !0,
                        limit: 700,
                        value: function () {
                            var t = '';
                            return this.dom.isInIframe && (t = window.document.URL), t
                        }
                    },
                    ltr: {
                        encode: !0,
                        limit: 300,
                        value: function () {
                            var t = '';
                            try {
                                t = this.win.opener ? this.win.opener.document.location.href : ''
                            } catch (e) {}
                            return t || this.doc.referrer
                        }
                    }
                }), e.define({
                    name: 'api',
                    namespace: 'djs.business.parameter',
                    list: {
                        clid: {
                            key: 'apdi',
                            encode: !0
                        },
                        cuid: {
                            key: 'udi',
                            encode: !0
                        },
                        ctkey: {
                            key: 'lcdi',
                            encode: !0
                        },
                        acid: {
                            key: 'acid',
                            encode: !0
                        }
                    }
                }), e.define({
                    name: 'cipher',
                    namespace: 'djs.business',
                    $cipher: function () {
                        this.mappingCache = this.mappingCache || {}, this.posCache = this.posCache || {}
                    },
                    getKeyMapping: function (t) {
                        var e, i = t % 25 + 1,
                            n = 'key' + i;
                        if (e = this.mappingCache[n], !e) {
                            e = {};
                            for (var r = 97; 122 >= r; r++) {
                                var o = String.fromCharCode(r),
                                    a = r + i;
                                a = a > 122 ? a - 26 : a;
                                var s = String.fromCharCode(a);
                                e[o] = s
                            }
                            this.mappingCache[n] = e
                        }
                        return e
                    },
                    getValueMapping: function (t) {
                        var e, i = t % 64 + 1,
                            n = 'v' + i,
                            r = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.';
                        if (e = this.mappingCache[n], !e) {
                            e = {};
                            for (var o = 0; o < r.length; o++) {
                                var a = r[o],
                                    s = o + i,
                                    c = s >= 65 ? r[s - 65] : r[s];
                                e[a] = c
                            }
                            this.mappingCache[n] = e
                        }
                        return e
                    },
                    getUrl: function (t, e) {
                        if (0 >= t)
                            return e;
                        e = e.replace(/\./g, '%_'), e = e.replace(/\%/g, '.');
                        for (var i = '', n = this.getKeyMapping(t), r = this.getValueMapping(t), o = e.split('&'), a = {}, s = 0; s < o.length; s++) {
                            var c = o[s].split('=');
                            a[c[0]] = c[1]
                        }
                        var l = [];
                        for (var d in a)
                            if (a.hasOwnProperty(d) && a[d]) {
                                for (var h = '', u = 0; u < d.length; u++) {
                                    var p = d[u];
                                    h += n[p]
                                }
                                h += '=';
                                for (var m = a[d], f = 0; f < m.length; f++) {
                                    var g = m[f];
                                    h += r[g] ? r[g] : g
                                }
                                l.push(h)
                            }
                        return i = l.join('&')
                    }
                }), e.define({
                    name: 'log',
                    namespace: 'djs.business',
                    $log: function () {},
                    send: function (t) {
                        var e = new Image,
                            i = (new Date).getDate(),
                            n = 'baidu_ds_log_' + i;
                        window[n] = e, e.onload = e.onerror = e.onabort = function () {
                            try {
                                delete window[n]
                            } catch (t) {
                                window[n] = void 0
                            }
                            e = null
                        }, t += t.indexOf('?') > -1 ? '&' : '?', t += 'stamp=' + Math.random(), e.src = t
                    }
                }), e.define({
                    name: 'material',
                    namespace: 'djs.business',
                    $material: function () {
                        var t = this;
                        this.materialFactory = {}, this.materialFactory.text = function (e) {
                            var i = "font-size:{size:number}{unit:string};color:{defaultColor:string};font-weight:{defaultBold:string};font-style:{defaultItalic:string};text-decoration:{defaultUnderline:string};",
                                n = "<span style=\"word-wrap:break-word;\"><a href=\"{clickUrl:string}\" target=\"{target:string}\" style=\"" + i + "\"{events}>{text:string}</a></span>",
                                r = /\{events\}/;
                            if (1 === e.version)
                                n = n.replace(r, '');
                            else if (2 === e.version) {
                                var o = "this.style.color='{defaultColor:string}';this.style.fontWeight='{defaultBold:string}';this.style.fontStyle='{defaultItalic:string}';this.style.textDecoration='{defaultUnderline:string}';",
                                    a = "this.style.color='{hoverColor:string}';this.style.fontWeight='{hoverBold:string}';this.style.fontStyle='{hoverItalic:string}';this.style.textDecoration='{hoverUnderline:string}';",
                                    s = ' onmouseover="' + a + '" onmouseout="' + o + '"';
                                n = n.replace(r, s);
                                for (var c = ['default', 'hover'], l = 0; l < c.length; l++) {
                                    var d = c[l],
                                        h = d + 'Color',
                                        u = d + 'Bold',
                                        p = d + 'Italic',
                                        m = d + 'Underline';
                                    e[h] = '#' + e[h], e[u] = e[u] ? 'bold' : 'normal', e[p] = e[p] ? 'italic' : 'normal', e[m] = e[m] ? 'underline' : 'none'
                                }
                            }
                            return t.format(n, e)
                        }, this.materialFactory.image = "<a href=\"{clickUrl:string}\" target=\"{target:string}\"><img src=\"{src:string}\" title=\"{title:html}\" alt=\"{title:html}\" border=\"0\" height=\"{height:number}\" width=\"{width:number}\" /></a>", this.materialFactory.flash = function (e) {
                            var i = '';
                            return i = 0 === t.isFlash() && 1 === e.flag ? t.createImg(e) : t.createFlash(e), t.format(i, e)
                        }, this.materialFactory.rich = function (t) {
                            return t.content
                        }, this.materialFactory.url = function (t) {
                            return t.content
                        }, this.materialFactory.slide = function (e, i) {
                            for (var n = "<div id=\"bd_ec_clb_asp\" style=\"width:{width:number}px;height:{height:number}px;overflow:hidden;\">{html:string}</div><script>(function(){var d = document;function G(id) { return d.getElementById(id); };var container = G(\"bd_ec_clb_asp\");var pages = container.childNodes;var pl = 0;for (var i = 0; i < pages.length; i++) {if (pages[i].nodeType === 1) {pl++;}}var cp = 0;function showPage(pn) { pages[pn].style.display = \"\"; };function hidePages() {for (var i = 0; i < pl; i++) {pages[i].style.display = \"none\";}};function roll() {hidePages();showPage(cp);cp == (pages.length - 1) ? cp = 0 : cp++;};var autoRoll;function setRoll() { autoRoll = window.setInterval(function() { roll(); }, {interval:number});};roll();setRoll();container.onmouseover = function() { window.clearInterval(autoRoll); };container.onmouseout = function() {setRoll(); };})();</script>", r = [], o = e.materials, a = 0; a < o.length; a++) {
                                var s = o[a];
                                'string' != typeof s && (s = t.formatMaterial(s, i, !0)), r.push(s)
                            }
                            return e.html = '<div>' + r.join('</div><div>') + '</div>', t.format(n, e)
                        }
                    },
                    createImg: function (t) {
                        var e = '<a href="' + t.clickurl + '" target="' + t.target + '"><img src="' + t.imageClickUrl + '" border="0" ';
                        return t.imageWidth > 0 && (e += ' width="' + t.width + '"'), t.imageHeight > 0 && (e += ' height="' + t.height + '"'), e + ' /></a>'
                    },
                    createFlash: function (t) {
                        var e = (new Date).getTime(),
                            i = 'BAIDU_CLB_FLASH' + e,
                            n = 'BAIDU_CLB_FLASH_N' + e;
                        t.wmode = t.wmode ? 'opaque' : 'transparent', t.width <= 0 && (t.width = '100%'), t.height <= 0 && (t.height = '100%'), 'none' === t.clickTAG && (t.clickTAG = ''), t.imageClickUrl = t.clickUrl, t.hasLink || (t.clickUrl = '');
                        var r = "<a style=\"position:absolute;top:0;left:0;bottom:0;right:0;display:block;width:100%;height:" + t.height + 'px;filter:alpha(opacity=0);opacity:0;background:#FFF;" href="' + t.clickUrl + '" target="' + t.target + '"></a>';
                        return '<div style="font-size:0;position:relative;width:' + t.width + 'px;height:' + t.height + 'px;">' + (t.clickTAG ? '' : r) + "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0\"  id=\"" + i + '" width="' + t.width + '" height="' + t.height + "\" align=\"middle\"><param name=\"allowScriptAccess\" value=\"never\"><param name=\"quality\" value=\"high\"><param name=\"wmode\" value=\"" + t.wmode + "\"><param name=\"movie\" value=\"" + t.src + '">' + (t.clickTAG ? '<param name="flashvars" value="' + t.clickTAG + '=' + t.clickurl + '">' : '') + '<embed ' + (t.clickTAG ? 'flashvars="' + t.clickTAG + '=' + t.clickurl + '" ' : '') + 'wmode="' + t.wmode + '" name="' + n + '" src="' + t.src + '" quality="high" width="' + t.width + '" height="' + t.height + "\" align=\"middle\" allowScriptAccess=\"never\" type=\"application/x-shockwave-flash\" pluginspage=\"//www.macromedia.com/go/getflashplayer\"></object></div>"
                    },
                    format: function (t, e) {
                        var i = /\{(\w+)\:(\w+)\}/g,
                            n = this;
                        return t.replace(i, function (t, i, r) {
                            var o = e[i];
                            switch (r) {
                                case 'number':
                                    o = +o || 0;
                                    break;
                                case 'boolean':
                                    o = !!o;
                                    break;
                                case 'html':
                                    o = n.encodeHTML(o)
                            }
                            return o
                        })
                    },
                    encodeHTML: function (t) {
                        var e = {
                            '"': '&quot;',
                            '>': '&gt;',
                            '<': '&lt;',
                            '&': '&amp;'
                        };
                        return t.replace(/[\"<>\&]/g, function (t) {
                            return e[t]
                        })
                    },
                    isFlash: function () {
                        var t = navigator;
                        if (t.plugins && t.mimeTypes.length) {
                            var e = t.plugins['Shockwave Flash'];
                            return !!e
                        }
                        if (window.ActiveXObject && !window.opera)
                            for (var i = 12; i >= 2; i--)
                                try {
                                    var n = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + i);
                                    if (n)
                                        return !0
                                } catch (r) {}
                        return !1
                    },
                    formatMaterial: function (t, e, i) {
                        if ('string' == typeof t)
                            return t;
                        if (!t.type)
                            return '';
                        var n = this.materialFactory[t.type];
                        if (n) {
                            var r = 'string' == typeof n ? this.format(n, t) : n(t, e);
                            return i || 'url' === t.type ? r : '<!DOCTYPE html><body style="margin:0;padding:0;">' + r
                        }
                        return ''
                    }
                }), e.define({
                    name: 'parameter',
                    namespace: 'djs.business',
                    deps: {
                        envParam: 'djs.business.parameter.env',
                        queryParam: 'djs.business.parameter.query',
                        apiParam: 'djs.business.parameter.api'
                    },
                    $parameter: function () {
                        this.mappingCache = this.mappingCache || {}
                    },
                    setSize: function (t) {
                        var e = t.containerInfo.sizeInfo;
                        t.parameterInfo.url = 'wid=' + e.width + '&' + t.parameterInfo.url, t.parameterInfo.url = 'hei=' + e.height + '&' + t.parameterInfo.url
                    },
                    addForge: function (t, e) {
                        if (!e)
                            return t;
                        for (var i = Math.floor(Math.random() * e) % 6, n = 0; i > n; n++) {
                            var r = e % 2 === 0 ? 4 : 3,
                                o = Math.random().toString(36).substring(2, r) || 'p',
                                a = o + Math.ceil(10 * Math.random()),
                                s = Math.random().toString(36).slice(8);
                            t += '&' + a + '=' + s
                        }
                        return t
                    },
                    getMapping: function (t) {
                        var e, i = 'x' + t;
                        if (e = this.mappingCache[i], !e) {
                            e = {};
                            for (var n = 97; 122 >= n; n++) {
                                var r = String.fromCharCode(n),
                                    o = n + t;
                                o = o > 122 ? o - 26 : o;
                                var a = String.fromCharCode(o);
                                e[r] = a
                            }
                            for (var s = 65; 90 >= s; s++) {
                                var r = String.fromCharCode(s),
                                    o = s + t;
                                o = o > 90 ? o - 26 : o;
                                var a = String.fromCharCode(o);
                                e[r] = a
                            }
                            this.mappingCache[i] = e
                        }
                        return e
                    },
                    encrypt: function (t, e, i) {
                        if (0 >= t)
                            return e;
                        for (var n = '', r = this.getMapping(t), o = 0; o < e.length; o++) {
                            var a = e.charAt(o),
                                s = e.charCodeAt(o);
                            r[a] ? n += r[a] : (i && 1 === i && s >= 48 && 57 >= s && (a = parseInt(a, 10), a = (t + a + o) % 10), n += a)
                        }
                        return n
                    },
                    getParameter: function (t) {
                        var i = [],
                            n = {
                                env: {},
                                query: {},
                                api: {},
                                url: ''
                            },
                            r = 0;
                        t.proxy && (r = 1);
                        var o = t.apiInfo;
                        if (o) {
                            var a = this.apiParam.list;
                            for (var s in a)
                                if (s && a.hasOwnProperty(s)) {
                                    var c = a[s];
                                    if ('undefined' != typeof o[s]) {
                                        var l = c.key ? c.key : s;
                                        n.api[l] = c.encode ? encodeURIComponent(o[s]) : o[s], i.push(l + '=' + n.api[l])
                                    }
                                }
                        }
                        var d = this.envParam;
                        for (var s in d)
                            if (s && d.hasOwnProperty(s)) {
                                var c = d[s];
                                if (r && 1 !== c.type)
                                    continue;
                                if ('object' == typeof c && 'function' == typeof c.value) {
                                    c.value = e.proxy(d, c.value);
                                    var h;
                                    try {
                                        h = c.value(t)
                                    } catch (u) {
                                        h = null
                                    }
                                    'string' == typeof h && (c.limit && (h = h.substring(0, c.limit)), c.encode && (h = encodeURIComponent(h))), (h || 0 === h) && (n.env[s] = h, i.push(s + '=' + h))
                                }
                            }
                        var p = this.queryParam;
                        for (var s in p)
                            if (s && p.hasOwnProperty(s)) {
                                var c = p[s];
                                if (r && 1 !== c.type)
                                    continue;
                                if ('object' == typeof c && 'function' == typeof c.value) {
                                    c.value = e.proxy(p, c.value);
                                    var h = c.value(t);
                                    'string' == typeof h && (c.limit && (h = h.substring(0, c.limit)), c.encode && (h = encodeURIComponent(h))), (h || 0 === h) && (n.query[s] = h, 'di' !== s && 'ltu' !== s && i.push(s + '=' + h))
                                }
                            }
                        for (var m = i.length; m > 0; m--) {
                            var f = Math.floor(Math.random() * m),
                                g = i[m - 1];
                            i[m - 1] = i[f], i[f] = g
                        }
                        return n.url = 'di=' + n.query.di + '&ltu=' + n.query.ltu + '&' + i.join('&'), n
                    }
                }), e.define({
                    name: 'slot',
                    namespace: 'djs.business',
                    deps: {
                        dom: 'djs.common.utility.dom',
                        browser: 'djs.common.utility.browser'
                    },
                    $slot: function () {
                        this.counter = t.counter, this.counter = this.counter || {}, this.counter.slotTotalCount = this.counter.slotTotalCount || 1, this.counter.slotCountIndex = this.counter.slotCountIndex || {}
                    },
                    getSlotInfo: function (t) {
                        var e = {},
                            i = t.id;
                        e.id = i, this.counter.slotCountIndex[i] = this.counter.slotCountIndex[i] || 0;
                        var n = this.counter.slotCountIndex[i];
                        this.counter.slotCountIndex[i]++, e.totalCount = this.counter.slotTotalCount || 0, this.counter.slotTotalCount++, e.count = n, e.index = i + '_' + n;
                        var r = t.container,
                            o = document.getElementById(r);
                        if (!o)
                            return !1;
                        e.containerInfo = {}, e.containerInfo.containerId = r, e.containerInfo.containerDom = o, e.deliveryInfo = t, e.adInfo = t.adInfo, e.apiInfo = t.apiInfo || null, e.adInfo = e.adInfo || {}, e.adInfo.placement = e.adInfo.placement || {}, e.adInfo.placement.basic = e.adInfo.placement.basic || {}, e.adInfo.placement.basic.publisherDomain = e.adInfo.placement.basic.publisherDomain || {};
                        var a = e.adInfo.placement.basic.publisherDomain;
                        return e.domainInfo = {
                            defaultValue: {
                                pos: 'pos.baidu.com',
                                dup: 'cpro.baidustatic.com'
                            },
                            proxy: {
                                pos: a.pos,
                                dup: a.dup
                            }
                        }, e.domainInfo.pos = e.domainInfo.proxy.pos, e.domainInfo.dup = e.domainInfo.proxy.dup, (!this.browser.ie || this.browser.ie >= 9) && t.enableHttps ? e.domainInfo.protocol = 'https://' : e.domainInfo.protocol = 'https:' === this.dom.doc.location.protocol.toLowerCase() ? 'https://' : 'http://', e
                    },
                    getParameterInfo: function (t) {
                        4 !== t.adInfo.placement.basic.conBackEnv && (this.parameter = e.using('djs.business.parameter'), t.parameterInfo = this.parameter.getParameter(t))
                    }
                }), e.define({
                    name: 'painterFactory',
                    namespace: 'djs.business',
                    create: function (t) {
                        var i, n, r = t.adInfo || {},
                            o = r.placement || {},
                            a = o.basic,
                            s = o.container;
                        if (r.painter)
                            switch (r.painter = parseInt(r.painter, 10), r.painter) {
                                case 1:
                                    n = 'djs.ui.painter.mobile.inlay';
                                    break;
                                case 2:
                                    n = 'djs.ui.painter.mobile.float';
                                    break;
                                case 100:
                                    n = 'djs.ui.painter.app.inlay';
                                    break;
                                default:
                                    n = 'djs.ui.painter.mobile.inlay'
                            }
                        else
                            a && 2 === a.flowType && (n = 1 === a.rspFormat && 1 === s.anchoredType ? 'djs.ui.painter.mobile.inlay' : 'djs.ui.painter.mobile.float');
                        return i = e.using(n)
                    }
                }), e.define({
                    name: 'inlay',
                    namespace: 'djs.ui.painter.mobile',
                    deps: {
                        dom: 'djs.common.utility.dom',
                        style: 'djs.common.utility.style',
                        browser: 'djs.common.utility.browser',
                        random: 'djs.common.utility.random',
                        log: 'djs.business.log',
                        material: 'djs.business.material',
                        parameter: 'djs.business.parameter',
                        cipher: 'djs.business.cipher'
                    },
                    getClientWidth: function () {
                        var t = -1;
                        return t = Math.max(320, Math.min(this.dom.win.innerWidth, this.dom.win.innerHeight)), isNaN(t) && (t = Math.min(this.style.getClientWidth(), this.style.getClientHeight())), t
                    },
                    getHiddenDom: function () {
                        var t = ['div', 'abbr', 'span', 'ins', 'em'],
                            e = this.random.getItem(t),
                            i = '';
                        this.random.getBool(20) && (i = ' id="' + this.random.getString(5, 10) + '" ');
                        var n = '';
                        this.random.getBool(20) && (n = ' class="' + this.random.getString(6, 15) + '" ');
                        var r = ['display:none;', 'width:0px;height:0px;'],
                            o = this.random.getItem(r);
                        this.random.getBool(50) && (o += this.random.getStyleItem()), o = ' style="' + o + '" ';
                        var a = '<{tagname} {idString} {classString} {styleString}></{tagname}>',
                            s = this.template(a, {
                                tagname: e,
                                idString: i,
                                classString: n,
                                styleString: o
                            });
                        return s
                    },
                    getWrapDom: function () {
                        var t = '';
                        this.random.getBool(30) && (t = ' id="' + this.random.getString(5, 10) + '" ');
                        var e = '';
                        this.random.getBool(60) && (e = ' style="' + this.random.getStyleItem() + '" ');
                        var i = '<div {idString} {styleString}>',
                            n = this.template(i, {
                                idString: t,
                                styleString: e
                            });
                        return n
                    },
                    template: function (t, e) {
                        var i = /{(.*?)}/g;
                        return t.replace(i, function (t, i, n, r) {
                            return e[i] || ''
                        })
                    },
                    getContainerWidth: function (t) {
                        var e, i = t.containerInfo.containerDom,
                            n = t.adInfo.placement.container,
                            r = n.sizeType;
                        return e = 1 === r || 7 === r ? n.width : 2 === r || 3 === r ? this.getClientWidth() : i.parentElement.clientWidth || window.screen.width, Math.abs(e)
                    },
                    getContainerHeight: function (t) {
                        var e, i = t.containerInfo.containerDom,
                            n = t.adInfo.placement.container,
                            r = n.sizeType;
                        if (1 === r || 3 === r || 6 === r)
                            e = n.height;
                        else if (7 === r || 8 === r)
                            e = i.parentElement.clientHeight;
                        else {
                            var o = this.getContainerWidth(t);
                            e = Math.ceil(o / n.width * n.height)
                        }
                        return Math.abs(e)
                    },
                    render: function (t) {
                        var i = (this.dom.win, this.dom.doc, {
                                width: -1,
                                height: -1,
                                widthScale: -1,
                                heightScale: -1
                            }),
                            n = t.containerInfo.containerDom,
                            r = (t.adInfo.placement.container, t.deliveryInfo);
                        i.width = this.getContainerWidth(t), i.height = this.getContainerHeight(t), t.containerInfo.sizeInfo = i, this.parameter.setSize(t), this.random.getBool(30) && !r.enableHttps && r.exps.indexOf('118004') < 0 && r.exps.indexOf('118014') < 0 && (t.domainInfo.protocol = '//');
                        var o = t.domainInfo.protocol + t.domainInfo.pos;
                        r = r || {};
                        var a = r.mixType || 0,
                            s = r.offset,
                            c = r.mixOffset,
                            l = r.gldiOffset,
                            d = t.parameterInfo.url,
                            h = this.random.getString(4, 10),
                            u = t.deliveryInfo.exps;
                        t.proxy && !this.browser.ie ? 2 === a && c && c > -1 ? (o = o + '/' + h + '?' + this.cipher.getUrl(c, d), o = this.parameter.addForge(o, c), '116026' !== u && (o += '&swt=1')) : o += 1 !== a && 'undefined' != typeof s && s > -1 ? 'undefined' != typeof l && l > -1 ? '/ns?' + this.parameter.encrypt(l, d, 0) : '/a?' + this.parameter.encrypt(s, d, 0) : '/s?' + t.parameterInfo.url : o += '/s?' + t.parameterInfo.url;
                        var p = "<iframe width=\"{width}\" frameborder=\"0\" height=\"{height}\" scrolling=\"no\" src=\"{url}\"></iframe>",
                            m = {
                                width: i.width,
                                height: i.height,
                                url: o
                            },
                            f = this.template(p, m);
                        if (this.random.getBool(20) && (f = this.getHiddenDom() + f), this.random.getBool(20) && (f += this.getHiddenDom()), this.random.getBool(20)) {
                            for (var g = '', v = '', y = this.random.getNumber(1, 3), w = 0; y > w; w++)
                                g += this.getWrapDom(), v += '</div>';
                            f = g + f + v
                        }
                        if (n.innerHTML = f, this.random.getBool(30) && n.removeAttribute && n.removeAttribute('id'), this.random.getBool(80) && n.removeAttribute && n.removeAttribute('style'), window.location.href.indexOf('DUP_DEBUG_FLAG') > -1 && this.style.getDebugStyle(n), t.adInfo && (this.browser.ie > 8 || this.browser.chrome))
                            try {
                                window.postMessage && this.dom.bind(window, 'message', e.proxy(this, this.messageHandler, t))
                            } catch (b) {
                                (new Image).src = "//eclick.baidu.com/se.jpg?type=remote&pos=event&date=20180309&mes=" + encodeURIComponent(b) + '&stack=' + encodeURIComponent(b.stack)
                            }
                        return !0
                    },
                    messageHandler: function (t, e) {
                        try {
                            if ((this.browser.ie > 8 || this.browser.chrome) && t && e && t.data) {
                                var i = t.data,
                                    n = e.id + '_' + e.count;
                                if (i && i.placement && i.placement.update && i.queryid && i.tuid && n === i.tuid) {
                                    var r = e.containerInfo.containerDom,
                                        o = i.pdb_deliv || {},
                                        a = i.order_deliv || {},
                                        s = i.rtb_deliv || {},
                                        c = o.deliv_des || {},
                                        l = c._html || '',
                                        d = l.type || {},
                                        h = i.placement.complement_type || 0;
                                    if (l.height = e.containerInfo.sizeInfo.height || l.height, l.width = e.containerInfo.sizeInfo.width || l.width, a && '0' !== a.deliv_id && '0' === i.noadx);
                                    else if (s && '0' !== s.deliv_id && '0' === i.noadx);
                                    else if (o && c && l) {
                                        var u = this.material.formatMaterial(l, i);
                                        if ('rich' === d || 'slide' === d) {
                                            var p = document.createElement('iframe');
                                            p.width = l.width, p.height = l.height, p.scrolling = 'no', p.style.cssText = 'border:0;vertical-align:bottom;margin:0;overflow:hidden;', r.innerHTML = '', r.appendChild(p), u.indexOf('<body>') < 0 && (u = '<!DOCTYPE html><body style="margin:0;padding:0;">' + u);
                                            var m = p.contentWindow.document;
                                            m.open(), m.write(u), m.body && (m.body.style.backgroundColor = 'transparent')
                                        } else if ('url' === d) {
                                            var f = r.getElementsByTagName('iframe');
                                            f && f.length > 0 && (f[0].src = u)
                                        } else
                                            r.innerHTML = u
                                    } else
                                        7 === h && '3' !== i.noadx && '0' !== i.noadx && (r.innerHTML = '', r.style.height = '0')
                                }
                            }
                        } catch (t) {
                            (new Image).src = "//eclick.baidu.com/se.jpg?type=remote&pos=message&date=20180309&mes=" + encodeURIComponent(t) + '&stack=' + encodeURIComponent(t.stack)
                        }
                    }
                }), e.define({
                    name: 'api',
                    namespace: 'djs.ui',
                    deps: {
                        slot: 'djs.business.slot',
                        painterFactory: 'djs.business.painterFactory',
                        browser: 'djs.common.utility.browser'
                    },
                    isCheckLoaded: !1,
                    $api: function () {
                        t.api = t.api || [];
                        var e = t.api;
                        t.api = this;
                        for (var i = 0, n = e.length; n > i; i++)
                            this.push(e[i])
                    },
                    push: function (t) {
                        var e = this.slot.getSlotInfo(t);
                        e && (this.launch(e), this.check(e))
                    },
                    setProxy: function (t) {
                        var e = t.deliveryInfo.proxy;
                        if (-1 === e || 'undefined' == typeof e) {
                            var i = t.proxy;
                            if (-1 === i || 'undefined' == typeof i) {
                                var n = this.proxy; - 1 === n || 'undefined' == typeof n ? this.browser.isAdBlock ? t.proxy = 1 : t.proxyCheck = 1 : t.proxy = n
                            } else
                                t.proxy = i
                        } else
                            t.proxy = e;
                        return t.domainInfo.proxy && t.domainInfo.proxy.pos || (t.proxy = 0), t.proxy ? (t.domainInfo.pos = t.domainInfo.proxy.pos, t.domainInfo.dup = t.domainInfo.proxy.dup) : (t.domainInfo.pos = t.domainInfo.defaultValue.pos, t.domainInfo.dup = t.domainInfo.defaultValue.dup), t
                    },
                    doHttpsExperiment: function (t) {
                        var e, i = 1e4 * Math.random();
                        if (1e3 > i ? e = '118004' : i >= 1e3 && 2e3 > i && (e = '118014'), e) {
                            var n = t.parameterInfo.url;
                            '118004' === e && (n += '&prot=2', t.domainInfo.protocol = 'https://');
                            var r = t.deliveryInfo.exps;
                            r ? r += ',' + e : r = e, t.deliveryInfo.exps = r;
                            var o = n.indexOf('exps=');
                            o >= 0 ? n = n.replace(/exps=([0-9,]*)/, 'exps=' + r) : n += '&exps=' + r, t.parameterInfo.url = n
                        }
                    },
                    launch: function (t) {
                        this.setProxy(t), this.slot.getParameterInfo(t), 'http://' === t.domainInfo.protocol && (!this.browser.ie || this.browser.ie >= 9) && this.doHttpsExperiment(t);
                        var e = this.painterFactory.create(t);
                        e.render(t)
                    },
                    check: function (t) {
                        if (!t.proxy && t.proxyCheck) {
                            if (!this.isCheckLoaded) {
                                this.isCheckLoaded = !0;
                                var i = document.createElement('script');
                                i.type = 'text/javascript', i.async = !0, i.src = ('https:' === document.location.protocol ? 'https:' : 'http:') + '//cpro.baidustatic.com/cpro/ui/pr.js';
                                var n = document.getElementsByTagName('script')[0];
                                n.parentNode.insertBefore(i, n)
                            }
                            setTimeout(e.proxy(this, function (t) {
                                'object' != typeof window.__baidu_dup_jobruner ? (this.proxy = 1, this.launch(t)) : this.proxy = 0
                            }, t), 800)
                        }
                    }
                })
            }(window.__delivery_global_ = window.__delivery_global_ || {})
        } catch (e) {
            (new Image).src = "//eclick.baidu.com/se.jpg?type=remote&date=0727&mes=" + encodeURIComponent(e.stack)
        }
    }
}();