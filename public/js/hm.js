(function () {
    var h = {},
        mt = {},
        c = {
            id: "5550e6f871d64d0f3c4adad2b866f4a3",
            dm: ["y3600.com", "y3600.cn", "p.y3600.cn", "p1.y3600.cn", "img.y3600.cn", "y3600.co", "m.y3600.co", "p.y3600.co", "p1.y3600.co", "m.y3600.cn"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            icon: '',
            ctrk: false,
            align: -1,
            nv: 0,
            vdur: 1800000,
            age: 31536000000,
            rec: 1,
            rp: [],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            kbtrk: 0,
            pt: 0,
            aet: '',
            conv: 0,
            med: 0,
            cvcc: '',
            cvcf: [],
            apps: ''
        };
    var r = void 0,
        s = !0,
        t = null,
        u = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, a, d) {
        var l;
        d.W && (l = new Date, l.setTime(l.getTime() + d.W));
        document.cookie = b + "=" + a + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (l ? "; expires=" + l.toGMTString() : "") + (d.Jb ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : t
    };
    mt.lang = {};
    mt.lang.d = function (b, a) {
        return "[object " + a + "]" === {}.toString.call(b)
    };
    mt.lang.va = function (b) {
        return mt.lang.d(b, "Number") && isFinite(b)
    };
    mt.lang.ba = function () {
        return mt.lang.d(c.aet, "String")
    };
    mt.lang.j = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.C = function (b, a) {
        var d = u;
        if (b == t || !mt.lang.d(b, "Array") || a === r) return d;
        if (Array.prototype.indexOf) d = -1 !== b.indexOf(a);
        else
            for (var l = 0; l < b.length; l++)
                if (b[l] === a) {
                    d = s;
                    break
                } return d
    };
    (function () {
        var b = mt.lang;
        mt.e = {};
        mt.e.qa = function (a) {
            return document.getElementById(a)
        };
        mt.e.$ = function (a, d) {
            var b = [],
                f = [];
            if (!a) return f;
            for (; a.parentNode != t;) {
                for (var k = 0, n = 0, m = a.parentNode.childNodes.length, e = 0; e < m; e++) {
                    var g = a.parentNode.childNodes[e];
                    if (g.nodeName === a.nodeName && (k++, g === a && (n = k), 0 < n && 1 < k)) break
                }
                if ((m = "" !== a.id) && d) {
                    b.unshift("#" + encodeURIComponent(a.id));
                    break
                } else m && (m = "#" + encodeURIComponent(a.id), m = 0 < b.length ? m + ">" + b.join(">") : m, f.push(m)), b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) +
                    (1 < k ? "[" + n + "]" : ""));
                a = a.parentNode
            }
            f.push(b.join(">"));
            return f
        };
        mt.e.Va = function (a) {
            return (a = mt.e.$(a, s)) && a.length ? String(a[0]) : ""
        };
        mt.e.Eb = function (a) {
            return mt.e.$(a, u)
        };
        mt.e.Cb = function (a, b) {
            for (b = b.toUpperCase();
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == b) return a;
            return t
        };
        mt.e.Qa = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.e.Db = function (a) {
            var b = {
                top: 0,
                left: 0
            };
            if (!a) return b;
            var l = mt.e.Qa(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || l.scrollTop) - (l.clientTop || 0),
                left: b.left + (window.pageXOffset || l.scrollLeft) - (l.clientLeft || 0)
            }
        };
        mt.e.getAttribute = function (a, b) {
            var l = a.getAttribute && a.getAttribute(b) || t;
            if (!l && a.attributes && a.attributes.length)
                for (var f = a.attributes, k = f.length, n = 0; n < k; n++) f[n].nodeName === b && (l = f[n].nodeValue);
            return l
        };
        mt.e.K = function (a) {
            var b = "document";
            a.tagName !== r && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.e.Xa = function (a) {
            var d = "";
            a.textContent ? d = b.trim(a.textContent) :
                a.innerText && (d = b.trim(a.innerText));
            d && (d = d.replace(/\s+/g, " ").substring(0, 255));
            return d
        };
        mt.e.Ra = function (a) {
            var b = mt.e.K(a);
            "input" === b && ("button" === a.type || "submit" === a.type) ? a = a.value || "" : "img" === b ? (b = mt.e.getAttribute, a = b(a, "alt") || b(a, "title") || b(a, "src")) : a = "body" === b || "html" === b ? ["(hm-default-content-for-", b, ")"].join("") : mt.e.Xa(a);
            return String(a).substring(0, 255)
        };
        (function () {
            (mt.e.za = function () {
                function a() {
                    if (!a.N) {
                        a.N = s;
                        for (var b = 0, d = f.length; b < d; b++) f[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (l) {
                        setTimeout(b,
                            1);
                        return
                    }
                    a()
                }
                var l = u,
                    f = [],
                    k;
                document.addEventListener ? k = function () {
                    document.removeEventListener("DOMContentLoaded", k, u);
                    a()
                } : document.attachEvent && (k = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", k), a())
                });
                (function () {
                    if (!l)
                        if (l = s, "complete" === document.readyState) a.N = s;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", k, u), window.addEventListener("load", a, u);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange",
                            k);
                        window.attachEvent("onload", a);
                        var f = u;
                        try {
                            f = window.frameElement == t
                        } catch (m) {}
                        document.documentElement.doScroll && f && b()
                    }
                })();
                return function (b) {
                    a.N ? b() : f.push(b)
                }
            }()).N = u
        })();
        return mt.e
    })();
    mt.event = {};
    mt.event.c = function (b, a, d) {
        b.attachEvent ? b.attachEvent("on" + a, function (a) {
            d.call(b, a)
        }) : b.addEventListener && b.addEventListener(a, d, u)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = u
    };
    (function () {
        var b = mt.event;
        mt.g = {};
        mt.g.ua = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.g.fb = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : r;
        mt.g.cookieEnabled = navigator.cookieEnabled;
        mt.g.javaEnabled = navigator.javaEnabled();
        mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.g.jb = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.g.colorDepth = window.screen.colorDepth || 0;
        mt.g.L = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.g.B = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.g.orientation = 0;
        (function () {
            function a() {
                var a = 0;
                window.orientation !== r && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== r) && (a = screen.orientation.angle);
                mt.g.orientation = a
            }
            a();
            b.c(window, "orientationchange", a)
        })();
        return mt.g
    })();
    mt.m = {};
    mt.m.parse = function () {
        return (new Function('return (" + source + ")'))()
    };
    mt.m.stringify = function () {
        function b(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = d[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function a(a) {
            return 10 > a ? "0" + a : a
        }
        var d = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function (d) {
            switch (typeof d) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "string":
                    return b(d);
                case "boolean":
                    return String(d);
                default:
                    if (d === t) return "null";
                    if (d instanceof Array) {
                        var f = ["["],
                            k = d.length,
                            n, m, e;
                        for (m = 0; m < k; m++) switch (e = d[m], typeof e) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                n && f.push(","), f.push(mt.m.stringify(e)), n = 1
                        }
                        f.push("]");
                        return f.join("")
                    }
                    if (d instanceof Date) return '"' + d.getFullYear() + "-" + a(d.getMonth() + 1) + "-" + a(d.getDate()) + "T" + a(d.getHours()) + ":" + a(d.getMinutes()) + ":" + a(d.getSeconds()) + '"';
                    n = ["{"];
                    m = mt.m.stringify;
                    for (k in d)
                        if (Object.prototype.hasOwnProperty.call(d, k)) switch (e =
                            d[k], typeof e) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                f && n.push(","), f = 1, n.push(m(k) + ":" + m(e))
                        }
                    n.push("}");
                    return n.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.Q = function () {
        if (!mt.localStorage.i) try {
            mt.localStorage.i = document.createElement("input"), mt.localStorage.i.type = "hidden", mt.localStorage.i.style.display = "none", mt.localStorage.i.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)
        } catch (b) {
            return u
        }
        return s
    };
    mt.localStorage.set = function (b, a, d) {
        var l = new Date;
        l.setTime(l.getTime() + d || 31536E6);
        try {
            window.localStorage ? (a = l.getTime() + "|" + a, window.localStorage.setItem(b, a)) : mt.localStorage.Q() && (mt.localStorage.i.expires = l.toUTCString(), mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.setAttribute(b, a), mt.localStorage.i.save(document.location.hostname))
        } catch (f) {}
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var a = b.indexOf("|"),
                    d = b.substring(0, a) - 0;
                if (d && d > (new Date).getTime()) return b.substring(a + 1)
            }
        } else if (mt.localStorage.Q()) try {
            return mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.getAttribute(b)
        } catch (l) {}
        return t
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b);
        else if (mt.localStorage.Q()) try {
            mt.localStorage.i.load(document.location.hostname), mt.localStorage.i.removeAttribute(b), mt.localStorage.i.save(document.location.hostname)
        } catch (a) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, a) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(b, a)
        } catch (d) {}
    };
    mt.sessionStorage.get = function (b) {
        return window.sessionStorage ? window.sessionStorage.getItem(b) : t
    };
    mt.sessionStorage.remove = function (b) {
        window.sessionStorage && window.sessionStorage.removeItem(b)
    };
    mt.Aa = {};
    mt.Aa.log = function (b, a) {
        var d = new Image,
            l = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[l] = d;
        d.onload = d.onerror = d.onabort = function () {
            d.onload = d.onerror = d.onabort = t;
            d = window[l] = t;
            a && a(b)
        };
        d.src = b
    };
    mt.ha = {};
    mt.ha.Ya = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var a = navigator.plugins["Shockwave Flash"];
            a && a.description && (b = a.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b = a.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {}
        return b
    };
    mt.ha.Bb = function (b, a, d, l, f) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + d + '" height="' + l + '"><param name="movie" value="' + a + '" /><param name="flashvars" value="' + (f || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + d + '" height="' + l + '" src="' + a + '" flashvars="' + (f || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.k = function (b, a) {
        var d = b.match(RegExp("(^|&|\\?|#)(" + a + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : t
    };
    mt.url.Fb = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : t
    };
    mt.url.Ta = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : t
    };
    mt.url.Z = function (b) {
        return (b = mt.url.Ta(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.$ = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : t
    };
    (function () {
        function b() {
            for (var a = u, b = document.getElementsByTagName("script"), l = b.length, l = 100 < l ? 100 : l, f = 0; f < l; f++) {
                var k = b[f].src;
                if (k && 0 === k.indexOf("https://hm.baidu.com/h")) {
                    a = s;
                    break
                }
            }
            return a
        }
        return h.Pa = b
    })();
    var A = h.Pa;
    h.l = {
        Gb: "http://tongji.baidu.com/hm-web/welcome/ico",
        ya: "hm.baidu.com/hm.gif",
        Fa: "tongji.baidu.com",
        bb: "hmmd",
        cb: "hmpl",
        vb: "utm_medium",
        ab: "hmkw",
        xb: "utm_term",
        Za: "hmci",
        ub: "utm_content",
        eb: "hmsr",
        wb: "utm_source",
        $a: "hmcu",
        tb: "utm_campaign",
        z: 0,
        o: Math.round(+new Date / 1E3),
        A: Math.round(+new Date / 1E3) % 65535,
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        da: A() || "https:" === document.location.protocol ? "https:" : "http:",
        Hb: 0,
        zb: 6E5,
        hb: 6E5,
        Ib: 5E3,
        Ab: 5,
        U: 1024,
        yb: 1,
        G: 2147483647,
        Ba: "kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" "),
        D: s,
        na: ["a", "input", "button"],
        Ha: {
            id: "data-hm-id",
            T: "data-hm-class",
            ka: "data-hm-xpath",
            content: "data-hm-content",
            P: "data-hm-tag",
            link: "data-hm-link"
        },
        ma: "data-hm-enabled",
        la: "data-hm-disabled"
    };
    (function () {
        var b = {
            s: {},
            c: function (a, b) {
                this.s[a] = this.s[a] || [];
                this.s[a].push(b)
            },
            J: function (a, b) {
                this.s[a] = this.s[a] || [];
                for (var l = this.s[a].length, f = 0; f < l; f++) this.s[a][f](b)
            }
        };
        return h.r = b
    })();
    (function () {
        function b(b, l) {
            var f = document.createElement("script");
            f.charset = "utf-8";
            a.d(l, "Function") && (f.readyState ? f.onreadystatechange = function () {
                if ("loaded" === f.readyState || "complete" === f.readyState) f.onreadystatechange = t, l()
            } : f.onload = function () {
                l()
            });
            f.src = b;
            var k = document.getElementsByTagName("script")[0];
            k.parentNode.insertBefore(f, k)
        }
        var a = mt.lang;
        return h.load = b
    })();
    (function () {
        function b() {
            var b = "";
            h.a.b.nv ? (b = encodeURIComponent(document.referrer), window.sessionStorage ? d.set("Hm_from_" + c.id, b) : a.set("Hm_from_" + c.id, b, 864E5)) : b = (window.sessionStorage ? d.get("Hm_from_" + c.id) : a.get("Hm_from_" + c.id)) || "";
            return b
        }
        var a = mt.localStorage,
            d = mt.sessionStorage;
        return h.pa = b
    })();
    (function () {
        var b = mt.lang,
            a = mt.e,
            d = mt.event,
            l = mt.g,
            f = h.l,
            k = h.r,
            n = +new Date,
            m = [],
            e = {
                oa: function () {
                    return function (g) {
                        if (h.a && h.a.D && c.aet && c.aet.length) {
                            var d = g.target || g.srcElement;
                            if (d) {
                                var p = h.a.na,
                                    q = a.getAttribute(d, f.ma) != t ? s : u;
                                if (a.getAttribute(d, f.la) == t)
                                    if (q) e.R(e.Y(d, g));
                                    else {
                                        var k = a.K(d);
                                        if (b.C(p, "*") || b.C(p, k)) e.R(e.Y(d, g));
                                        else
                                            for (; d.parentNode != t;) {
                                                var q = d.parentNode,
                                                    k = a.K(q),
                                                    l = "a" === k && b.C(p, "a") ? s : u,
                                                    k = "button" === k && b.C(p, "button") ? s : u,
                                                    y = a.getAttribute(q, f.ma) != t ? s : u;
                                                if (a.getAttribute(q,
                                                        f.la) == t && (l || k || y)) {
                                                    e.R(e.Y(q, g));
                                                    break
                                                }
                                                d = d.parentNode
                                            }
                                    }
                            }
                        }
                    }
                },
                Y: function (g, d) {
                    var p = {},
                        q = f.Ha;
                    p.id = a.getAttribute(g, q.id) || a.getAttribute(g, "id") || "";
                    p.T = a.getAttribute(g, q.T) || a.getAttribute(g, "class") || "";
                    p.ka = a.getAttribute(g, q.ka) || a.Va(g);
                    p.content = a.getAttribute(g, q.content) || a.Ra(g);
                    p.P = a.getAttribute(g, q.P) || a.K(g);
                    p.link = a.getAttribute(g, q.link) || a.getAttribute(g, "href") || "";
                    p.type = d.type || "click";
                    q = b.va(g.offsetTop) ? g.offsetTop : 0;
                    "click" === d.type ? q = l.ua ? d.clientY + Math.max(document.documentElement.scrollTop,
                        document.body.scrollTop) : d.pageY : "touchend" === d.type && (d.ea && b.d(d.ea.changedTouches, "Array") && d.ea.changedTouches.length) && (q = d.ea.changedTouches[0].pageY);
                    p.rb = q;
                    return p
                },
                R: function (g) {
                    var a = b.j,
                        a = [+new Date - (h.a.w !== r ? h.a.w : n), a(g.id), a(g.T), a(g.P), a(g.ka), a(g.link), a(g.content), g.type, g.rb].join("*");
                    e.S(a);
                    b.C(["a"], g.P) && b.d(this.H(), "Function") && this.H()()
                },
                S: function (a) {
                    a.length > f.U || (encodeURIComponent(m.join("!") + a).length > f.U && (e.I(m.join("!")), m = []), m.push(a))
                },
                I: function (a) {
                    h.a.b.et =
                        5;
                    h.a.b.ep = a;
                    h.a.h()
                },
                H: function () {
                    return function () {
                        m && m.length && (e.I(m.join("!")), m = [])
                    }
                }
            };
        b.ba() && "" !== c.aet && k.c("pv-b", function () {
            d.c(document, "click", e.oa());
            "ontouchend" in document && d.c(window, "touchend", e.oa());
            d.c(window, "unload", e.H())
        });
        return e
    })();
    (function () {
        var b = mt.event,
            a = mt.g,
            d = h.l,
            l = h.r,
            f = +new Date,
            k = [],
            n = t,
            m = {
                La: function () {
                    return function () {
                        h.a && (h.a.D && c.aet && c.aet.length) && (window.clearTimeout(n), n = window.setTimeout(function () {
                            m.Da(a.L() + a.B())
                        }, 150))
                    }
                },
                Da: function (a) {
                    m.S([+new Date - (h.a.w !== r ? h.a.w : f), a].join("*"))
                },
                S: function (a) {
                    if (encodeURIComponent(k.join("!") + a).length > d.U || 5 < k.length) m.I(k.join("!")), k = [];
                    k.push(a)
                },
                I: function (b) {
                    h.a.b.et = 6;
                    h.a.b.vh = a.B();
                    h.a.b.ep = b;
                    h.a.h()
                },
                H: function () {
                    return function () {
                        k && k.length && (m.I(k.join("!")),
                            k = [])
                    }
                }
            };
        mt.lang.ba() && "" !== c.aet && l.c("pv-b", function () {
            b.c(window, "scroll", m.La());
            b.c(window, "unload", m.H())
        });
        return m
    })();
    (function () {
        var b = mt.e,
            a = h.l,
            d = h.load,
            l = h.pa;
        h.r.c("pv-b", function () {
            var f = a.protocol + "//crs.baidu.com/";
            c.rec && b.za(function () {
                for (var k = 0, n = c.rp.length; k < n; k++) {
                    var m = c.rp[k][0],
                        e = c.rp[k][1],
                        g = b.qa("hm_t_" + m);
                    if (e && !(2 == e && !g || g && "" !== g.innerHTML)) g = "", g = Math.round(Math.random() * a.G), g = 4 == e ? f + "hl.js?" + ["siteId=" + c.id, "planId=" + m, "rnd=" + g].join("&") : f + "t.js?" + ["siteId=" + c.id, "planId=" + m, "from=" + l(), "referer=" + encodeURIComponent(document.referrer), "title=" + encodeURIComponent(document.title), "rnd=" +
                        g
                    ].join("&"), d(g)
                }
            })
        })
    })();
    (function () {
        var b = h.l,
            a = h.load,
            d = h.pa;
        h.r.c("pv-b", function () {
            if (c.trust && c.vcard) {
                var l = "https://tag.baidu.com/vcard/v.js?" + ["siteid=" + c.vcard, "url=" + encodeURIComponent(document.location.href), "source=" + d(), "rnd=" + Math.round(Math.random() * b.G), "hm=1"].join("&");
                a(l)
            }
        })
    })();
    (function () {
        function b() {
            return function () {
                h.a.b.nv = 0;
                h.a.b.st = 4;
                h.a.b.et = 3;
                h.a.b.ep = h.V.Ua() + "," + h.V.Sa();
                h.a.h()
            }
        }

        function a() {
            clearTimeout(z);
            var b;
            w && (b = "visible" == document[w]);
            y && (b = !document[y]);
            m = "undefined" == typeof b ? s : b;
            if ((!n || !e) && m && g) x = s, p = +new Date;
            else if (n && e && (!m || !g)) x = u, q += +new Date - p;
            n = m;
            e = g;
            z = setTimeout(a, 100)
        }

        function d(a) {
            var g = document,
                b = "";
            if (a in g) b = a;
            else
                for (var p = ["webkit", "ms", "moz", "o"], d = 0; d < p.length; d++) {
                    var q = p[d] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (q in g) {
                        b =
                            q;
                        break
                    }
                }
            return b
        }

        function l(b) {
            if (!("focus" == b.type || "blur" == b.type) || !(b.target && b.target != window)) g = "focus" == b.type || "focusin" == b.type ? s : u, a()
        }
        var f = mt.event,
            k = h.r,
            n = s,
            m = s,
            e = s,
            g = s,
            v = +new Date,
            p = v,
            q = 0,
            x = s,
            w = d("visibilityState"),
            y = d("hidden"),
            z;
        a();
        (function () {
            var g = w.replace(/[vV]isibilityState/, "visibilitychange");
            f.c(document, g, a);
            f.c(window, "pageshow", a);
            f.c(window, "pagehide", a);
            "object" == typeof document.onfocusin ? (f.c(document, "focusin", l), f.c(document, "focusout", l)) : (f.c(window, "focus", l),
                f.c(window, "blur", l))
        })();
        h.V = {
            Ua: function () {
                return +new Date - v
            },
            Sa: function () {
                return x ? +new Date - p + q : q
            }
        };
        k.c("pv-b", function () {
            f.c(window, "unload", b())
        });
        return h.V
    })();
    (function () {
        var b = mt.lang,
            a = h.l,
            d = h.load,
            l = {
                gb: function (f) {
                    if ((window._dxt === r || b.d(window._dxt, "Array")) && "undefined" !== typeof h.a) {
                        var k = h.a.X();
                        d([a.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(k)].join(""), f)
                    }
                },
                qb: function (a) {
                    if (b.d(a, "String") || b.d(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
                }
            };
        return h.Ja = l
    })();
    (function () {
        function b(a, b, p, d) {
            if (!(a === r || b === r || d === r)) {
                if ("" === a) return [b, p, d].join("*");
                a = String(a).split("!");
                for (var e, k = u, f = 0; f < a.length; f++)
                    if (e = a[f].split("*"), String(b) === e[0]) {
                        e[1] = p;
                        e[2] = d;
                        a[f] = e.join("*");
                        k = s;
                        break
                    } k || a.push([b, p, d].join("*"));
                return a.join("!")
            }
        }

        function a(b) {
            for (var e in b)
                if ({}.hasOwnProperty.call(b, e)) {
                    var p = b[e];
                    d.d(p, "Object") || d.d(p, "Array") ? a(p) : b[e] = String(p)
                }
        }
        var d = mt.lang,
            l = mt.m,
            f = mt.g,
            k = h.l,
            n = h.r,
            m = h.Ja,
            e = {
                F: [],
                O: 0,
                wa: u,
                p: {
                    ia: "",
                    page: ""
                },
                init: function () {
                    e.f =
                        0;
                    n.c("pv-b", function () {
                        e.Ka();
                        e.Na()
                    });
                    n.c("pv-d", function () {
                        e.Oa();
                        e.p.page = ""
                    });
                    n.c("stag-b", function () {
                        h.a.b.api = e.f || e.O ? e.f + "_" + e.O : "";
                        h.a.b.ct = [decodeURIComponent(h.a.getData("Hm_ct_" + c.id) || ""), e.p.ia, e.p.page].join("!")
                    });
                    n.c("stag-d", function () {
                        h.a.b.api = 0;
                        e.f = 0;
                        e.O = 0
                    })
                },
                Ka: function () {
                    var a = window._hmt || [];
                    if (!a || d.d(a, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var g = arguments[b];
                                d.d(g, "Array") && (a.cmd[a.id].push(g), "_setAccount" ===
                                    g[0] && (1 < g.length && /^[0-9a-f]{32}$/.test(g[1])) && (g = g[1], a.id = g, a.cmd[g] = a.cmd[g] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                },
                Na: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order|RTEvent)$/, q = 0, k = b.length; q < k; q++) {
                            var f = b[q];
                            d.test(f[0]) ? e.F.push(f) : e.fa(f)
                        }
                    a.cmd[c.id] = {
                        push: e.fa
                    }
                },
                Oa: function () {
                    if (0 < e.F.length)
                        for (var a = 0, b = e.F.length; a < b; a++) e.fa(e.F[a]);
                    e.F = t
                },
                fa: function (a) {
                    var b = a[0];
                    if (e.hasOwnProperty(b) &&
                        d.d(e[b], "Function")) e[b](a)
                },
                _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{32}$/.test(a[1]) && (e.f |= 1)
                },
                _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) e.f |= 2, h.a.sa = a
                },
                _trackPageview: function (a) {
                    if (1 < a.length && a[1].charAt && "/" === a[1].charAt(0)) {
                        e.f |= 4;
                        h.a.b.et = 0;
                        h.a.b.ep = "";
                        h.a.b.vl = f.L() + f.B();
                        h.a.b.kb = 0;
                        h.a.aa ? (h.a.b.nv = 0, h.a.b.st = 4) : h.a.aa = s;
                        var b = h.a.b.u,
                            d = h.a.b.su;
                        h.a.b.u = k.protocol + "//" + document.location.host + a[1];
                        e.wa || (h.a.b.su = document.location.href);
                        h.a.h();
                        h.a.b.u = b;
                        h.a.b.su = d;
                        h.a.w = +new Date
                    }
                },
                _trackEvent: function (a) {
                    2 < a.length && (e.f |= 8, h.a.b.nv = 0, h.a.b.st = 4, h.a.b.et = 4, h.a.b.ep = d.j(a[1]) + "*" + d.j(a[2]) + (a[3] ? "*" + d.j(a[3]) : "") + (a[4] ? "*" + d.j(a[4]) : ""), h.a.h())
                },
                _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1],
                            p = a[4] || 3;
                        if (0 < b && 6 > b && 0 < p && 4 > p) {
                            e.O++;
                            for (var q = (h.a.b.cv || "*").split("!"), f = q.length; f < b - 1; f++) q.push("*");
                            q[b - 1] = p + "*" + d.j(a[2]) + "*" + d.j(a[3]);
                            h.a.b.cv = q.join("!");
                            a = h.a.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? h.a.setData("Hm_cv_" +
                                c.id, encodeURIComponent(a), c.age) : h.a.ib("Hm_cv_" + c.id)
                        }
                    }
                },
                _setUserTag: function (a) {
                    if (!(3 > a.length)) {
                        var e = d.j(a[1]);
                        a = d.j(a[2]);
                        if (e !== r && a !== r) {
                            var p = decodeURIComponent(h.a.getData("Hm_ct_" + c.id) || ""),
                                p = b(p, e, 1, a);
                            h.a.setData("Hm_ct_" + c.id, encodeURIComponent(p), c.age)
                        }
                    }
                },
                _setVisitTag: function (a) {
                    if (!(3 > a.length)) {
                        var f = d.j(a[1]);
                        a = d.j(a[2]);
                        if (f !== r && a !== r) {
                            var p = e.p.ia,
                                p = b(p, f, 2, a);
                            e.p.ia = p
                        }
                    }
                },
                _setPageTag: function (a) {
                    if (!(3 > a.length)) {
                        var f = d.j(a[1]);
                        a = d.j(a[2]);
                        if (f !== r && a !== r) {
                            var p = e.p.page,
                                p = b(p, f, 3, a);
                            e.p.page = p
                        }
                    }
                },
                _setReferrerOverride: function (a) {
                    1 < a.length && (h.a.b.su = a[1].charAt && "/" === a[1].charAt(0) ? k.protocol + "//" + window.location.host + a[1] : a[1], e.wa = s)
                },
                _trackOrder: function (b) {
                    b = b[1];
                    d.d(b, "Object") && (a(b), e.f |= 16, h.a.b.nv = 0, h.a.b.st = 4, h.a.b.et = 94, h.a.b.ep = l.stringify(b), h.a.h())
                },
                _trackMobConv: function (a) {
                    if (a = {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        } [a[1]]) e.f |= 32, h.a.b.et = 93, h.a.b.ep = a, h.a.h()
                },
                _trackRTPageview: function (b) {
                    b = b[1];
                    d.d(b, "Object") && (a(b), b = l.stringify(b),
                        512 >= encodeURIComponent(b).length && (e.f |= 64, h.a.b.rt = b))
                },
                _trackRTEvent: function (b) {
                    b = b[1];
                    if (d.d(b, "Object")) {
                        a(b);
                        b = encodeURIComponent(l.stringify(b));
                        var f = function (a) {
                                var b = h.a.b.rt;
                                e.f |= 128;
                                h.a.b.et = 90;
                                h.a.b.rt = a;
                                h.a.h();
                                h.a.b.rt = b
                            },
                            p = b.length;
                        if (900 >= p) f.call(this, b);
                        else
                            for (var p = Math.ceil(p / 900), q = "block|" + Math.round(Math.random() * k.G).toString(16) + "|" + p + "|", n = [], w = 0; w < p; w++) n.push(w), n.push(b.substring(900 * w, 900 * w + 900)), f.call(this, q + n.join("|")), n = []
                    }
                },
                _setUserId: function (a) {
                    a = a[1];
                    m.gb();
                    m.qb(a)
                },
                _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) h.a.ta = a
                },
                _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], u === a || s === a)) h.a.D = a
                }
            };
        e.init();
        h.Ga = e;
        return h.Ga
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = s, this.b = {}, this.ta = this.sa = s, this.D = g.D, this.na = f.ba() && 0 < c.aet.length ? c.aet.split(",") : "", this.aa = u, this.init())
        }
        var a = mt.url,
            d = mt.Aa,
            l = mt.ha,
            f = mt.lang,
            k = mt.cookie,
            n = mt.g,
            m = mt.localStorage,
            e = mt.sessionStorage,
            g = h.l,
            v = h.r;
        b.prototype = {
            ca: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            },
            xa: function (a, b) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(b)
            },
            M: function (b) {
                for (var d = 0; d < c.dm.length; d++)
                    if (-1 < c.dm[d].indexOf("/")) {
                        if (this.xa(b, c.dm[d])) return s
                    } else {
                        var e = a.Z(b);
                        if (e && this.ca(e, c.dm[d])) return s
                    } return u
            },
            X: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                    if (this.ca(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            },
            ra: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.xa(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") +
                        "/"
                }
                return "/"
            },
            Wa: function () {
                if (!document.referrer) return g.o - g.z > c.vdur ? 1 : 4;
                var b = u;
                this.M(document.referrer) && this.M(document.location.href) ? b = s : (b = a.Z(document.referrer), b = this.ca(b || "", document.location.hostname));
                return b ? g.o - g.z > c.vdur ? 1 : 4 : 3
            },
            getData: function (a) {
                try {
                    return k.get(a) || e.get(a) || m.get(a)
                } catch (b) {}
            },
            setData: function (a, b, d) {
                try {
                    k.set(a, b, {
                        domain: this.X(),
                        path: this.ra(),
                        W: d
                    }), d ? m.set(a, b, d) : e.set(a, b)
                } catch (g) {}
            },
            ib: function (a) {
                try {
                    k.set(a, "", {
                            domain: this.X(),
                            path: this.ra(),
                            W: -1
                        }),
                        e.remove(a), m.remove(a)
                } catch (b) {}
            },
            ob: function () {
                var a, b, d, e, f;
                g.z = this.getData("Hm_lpvt_" + c.id) || 0;
                13 === g.z.length && (g.z = Math.round(g.z / 1E3));
                b = this.Wa();
                a = 4 !== b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    e = d.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] / 1E3));
                    for (; 2592E3 < g.o - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(g.o); 4 < e.length;) e.shift();
                    d = e.join(",");
                    e = e[e.length - 1]
                } else d = g.o, e = "", f = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id,
                    g.o);
                d = g.o === this.getData("Hm_lpvt_" + c.id) ? "1" : "0";
                if (0 === c.nv && this.M(document.location.href) && ("" === document.referrer || this.M(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            },
            nb: function () {
                for (var a = [], b = this.b.et, d = +new Date, e = 0, f = g.Ba.length; e < f; e++) {
                    var k = g.Ba[e],
                        l = this.b[k];
                    "undefined" !== typeof l && "" !== l && ("tt" !== k || "tt" === k && 0 === b) && (("ct" !== k || "ct" === k && 0 === b) && ("kb" !== k || "kb" === k && 3 === b)) && a.push(k + "=" + encodeURIComponent(l))
                }
                switch (b) {
                    case 0:
                        a.push("sn=" +
                            g.A);
                        this.b.rt && a.push("rt=" + encodeURIComponent(this.b.rt));
                        break;
                    case 3:
                        a.push("sn=" + g.A);
                        break;
                    case 5:
                        a.push("sn=" + g.A);
                        a.push("_lpt=" + this.w);
                        a.push("_ct=" + d);
                        break;
                    case 6:
                        a.push("sn=" + g.A);
                        a.push("_lpt=" + this.w);
                        a.push("_ct=" + d);
                        break;
                    case 85:
                        a.push("sn=" + g.A);
                        break;
                    case 90:
                        this.b.rt && a.push("rt=" + this.b.rt)
                }
                return a.join("&")
            },
            pb: function () {
                this.ob();
                this.b.si = c.id;
                this.b.su = document.referrer;
                this.b.ds = n.jb;
                this.b.cl = n.colorDepth + "-bit";
                this.b.ln = String(n.language).toLowerCase();
                this.b.ja = n.javaEnabled ?
                    1 : 0;
                this.b.ck = n.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = l.Ya();
                this.b.v = "1.2.38";
                this.b.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = n.L() + n.B();
                var b = document.location.href;
                this.b.cm = a.k(b, g.bb) || "";
                this.b.cp = a.k(b, g.cb) || a.k(b, g.vb) || "";
                this.b.cw = a.k(b, g.ab) || a.k(b, g.xb) || "";
                this.b.ci = a.k(b, g.Za) || a.k(b, g.ub) || "";
                this.b.cf = a.k(b, g.eb) || a.k(b, g.wb) || "";
                this.b.cu = a.k(b, g.$a) || a.k(b, g.tb) || ""
            },
            init: function () {
                try {
                    this.pb(),
                        0 === this.b.nv ? this.mb() : this.ga(".*"), h.a = this, this.Ia(), v.J("pv-b"), this.lb()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(g.da + "//" + g.ya + "?" + b.join("&"))
                }
            },
            lb: function () {
                function a() {
                    v.J("pv-d")
                }
                this.sa ? (this.aa = s, this.b.et = 0, this.b.ep = "", this.b.vl = n.L() + n.B(), this.h(a)) : a();
                this.w = +new Date
            },
            h: function (a) {
                if (this.ta) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * g.G);
                    v.J("stag-b");
                    var e = g.da + "//" + g.ya + "?" + b.nb();
                    v.J("stag-d");
                    b.Ea(e);
                    d.log(e, function (d) {
                        b.ga(d);
                        f.d(a, "Function") && a.call(b)
                    })
                }
            },
            Ia: function () {
                var b = document.location.hash.substring(1),
                    d = RegExp(c.id),
                    e = a.Z(document.referrer) === g.Fa ? 1 : 0,
                    f = a.k(b, "jn"),
                    k = /^heatlink$|^select$|^pageclick$/.test(f);
                b && (d.test(b) && e && k) && (this.b.rnd = Math.round(Math.random() * g.G), b = document.createElement("script"), b.setAttribute("type", "text/javascript"), b.setAttribute("charset", "utf-8"), b.setAttribute("src", g.protocol + "//" +
                    c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(b, f))
            },
            Ea: function (a) {
                var b = e.get("Hm_unsent_" + c.id) || "",
                    d = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href),
                    b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b : "");
                e.set("Hm_unsent_" + c.id, b)
            },
            ga: function (a) {
                var b = e.get("Hm_unsent_" + c.id) || "";
                b && (a = encodeURIComponent(a.replace(/^https?:\/\//, "")), a = RegExp(a.replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), (b = b.replace(a, "").replace(/,$/,
                    "")) ? e.set("Hm_unsent_" + c.id, b) : e.remove("Hm_unsent_" + c.id))
            },
            mb: function () {
                var a = this,
                    b = e.get("Hm_unsent_" + c.id);
                if (b)
                    for (var b = b.split(","), f = function (b) {
                            d.log(g.da + "//" + decodeURIComponent(b), function (b) {
                                a.ga(b)
                            })
                        }, k = 0, l = b.length; k < l; k++) f(b[k])
            }
        };
        return new b
    })();
    (function () {
        var b = mt.event,
            a = mt.lang,
            d = h.l;
        if (c.kbtrk && "undefined" !== typeof h.a) {
            h.a.b.kb = a.va(h.a.b.kb) ? h.a.b.kb : 0;
            var l = function () {
                h.a.b.et = 85;
                h.a.b.ep = h.a.b.kb;
                h.a.h()
            };
            b.c(document, "keyup", function () {
                h.a.b.kb++
            });
            b.c(window, "unload", function () {
                l()
            });
            setInterval(l, d.hb)
        }
    })();
    var B = h.l,
        C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.event,
            a = mt.m;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.a) {
                var d = function (a) {
                        var b = performance.timing,
                            d = b[a + "Start"] ? b[a + "Start"] : 0;
                        a = b[a + "End"] ? b[a + "End"] : 0;
                        return {
                            start: d,
                            end: a,
                            value: 0 < a - d ? a - d : 0
                        }
                    },
                    l = function () {
                        var b;
                        b = d("navigation");
                        var f = d("request");
                        b = {
                            netAll: f.start - b.start,
                            netDns: d("domainLookup").value,
                            netTcp: d("connect").value,
                            srv: d("response").start - f.start,
                            dom: performance.timing.domInteractive - performance.timing.fetchStart,
                            loadEvent: d("loadEvent").end -
                                b.start
                        };
                        h.a.b.et = 87;
                        h.a.b.ep = a.stringify(b);
                        h.a.h()
                    };
                b.c(window, "load", function () {
                    setTimeout(l, 500)
                })
            }
        } catch (f) {}
    })();
    (function () {
        var b = mt.g,
            a = mt.lang,
            d = mt.event,
            l = mt.m;
        if ("undefined" !== typeof h.a && (c.med || (!b.ua || 7 < b.fb) && c.cvcc)) {
            var f, k, n, m, e = function (a) {
                    if (a.item) {
                        for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                        return d
                    }
                    return [].slice.call(a)
                },
                g = function (a, b) {
                    for (var d in a)
                        if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === u) return u
                },
                v = function (b, d) {
                    var e = {};
                    e.n = f;
                    e.t = "clk";
                    e.v = b;
                    if (d) {
                        var g = d.getAttribute("href"),
                            k = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : t,
                            m = d.getAttribute("id") || "";
                        n.test(g) ? (e.sn = "mediate",
                            e.snv = g) : a.d(k, "String") && n.test(k) && (e.sn = "wrap", e.snv = k);
                        e.id = m
                    }
                    h.a.b.et = 86;
                    h.a.b.ep = l.stringify(e);
                    h.a.h();
                    for (e = +new Date; 400 >= +new Date - e;);
                };
            if (c.med) k = "/zoosnet", f = "swt", n = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, m = {
                click: function () {
                    for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g = 0, k = b.length; g < k; g++) d = b[g], f = d.getAttribute("onclick"),
                        d = d.getAttribute("href"), (n.test(f) || n.test(d)) && a.push(b[g]);
                    return a
                }
            };
            else if (c.cvcc) {
                k = "/other-comm";
                f = "other";
                n = c.cvcc.q || r;
                var p = c.cvcc.id || r;
                m = {
                    click: function () {
                        for (var a = [], b = e(document.getElementsByTagName("a")), b = [].concat.apply(b, e(document.getElementsByTagName("area"))), b = [].concat.apply(b, e(document.getElementsByTagName("img"))), d, f, g, k = 0, l = b.length; k < l; k++) d = b[k], n !== r ? (f = d.getAttribute("onclick"), g = d.getAttribute("href"), p ? (d = d.getAttribute("id"), (n.test(f) || n.test(g) || p.test(d)) &&
                            a.push(b[k])) : (n.test(f) || n.test(g)) && a.push(b[k])) : p !== r && (d = d.getAttribute("id"), p.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof m && "undefined" !== typeof n) {
                var q;
                k += /\/$/.test(k) ? "" : "/";
                var x = function (b, d) {
                    if (q === d) return v(k + b, d), u;
                    if (a.d(d, "Array") || a.d(d, "NodeList"))
                        for (var e = 0, f = d.length; e < f; e++)
                            if (q === d[e]) return v(k + b + "/" + (e + 1), d[e]), u
                };
                d.c(document, "mousedown", function (b) {
                    b = b || window.event;
                    q = b.target || b.srcElement;
                    var d = {};
                    for (g(m, function (b, e) {
                            d[b] = a.d(e, "Function") ? e() : document.getElementById(e)
                        }); q &&
                        q !== document && g(d, x) !== u;) q = q.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.e,
            a = mt.lang,
            d = mt.event,
            l = mt.m;
        if ("undefined" !== typeof h.a && a.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var f = {
                Ca: function () {
                    for (var a = c.cvcf.length, l, m = 0; m < a; m++)(l = b.qa(decodeURIComponent(c.cvcf[m]))) && d.c(l, "click", f.Ma())
                },
                Ma: function () {
                    return function () {
                        h.a.b.et = 86;
                        var a = {
                            n: "form",
                            t: "clk"
                        };
                        a.id = this.id;
                        h.a.b.ep = l.stringify(a);
                        h.a.h()
                    }
                }
            };
            b.za(function () {
                f.Ca()
            })
        }
    })();
    (function () {
        var b = mt.event,
            a = mt.m;
        if (c.med && "undefined" !== typeof h.a) {
            var d = +new Date,
                l = {
                    n: "anti",
                    sb: 0,
                    kb: 0,
                    clk: 0
                },
                f = function () {
                    h.a.b.et = 86;
                    h.a.b.ep = a.stringify(l);
                    h.a.h()
                };
            b.c(document, "click", function () {
                l.clk++
            });
            b.c(document, "keyup", function () {
                l.kb = 1
            });
            b.c(window, "scroll", function () {
                l.sb++
            });
            b.c(window, "unload", function () {
                l.t = +new Date - d;
                f()
            });
            b.c(window, "load", function () {
                setTimeout(f, 5E3)
            })
        }
    })();
})();