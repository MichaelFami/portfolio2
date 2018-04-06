/*
 * VenoBox - jQuery Plugin
 * version: 1.7.3
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
 *
 */
! function(e) {
    function a() {
        e.ajax({
            url: m,
            cache: !1
        }).done(function(e) {
            f.html('<div class="vbox-inline">' + e + "</div>"), c()
        }).fail(function() {
            f.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), r()
        })
    }

    function o() {
        f.html('<iframe class="venoframe" src="' + m + '"></iframe>'), r()
    }

    function t(e, a) {
        var o, t, s = e ? "?rel=0&autoplay=1" : "?rel=0";
        if ("vimeo" == a) {
            o = "https://player.vimeo.com/video/";
            var c = m.split("/");
            t = c[c.length - 1]
        } else o = "https://www.youtube.com/embed/", t = i(m);
        f.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="' + o + t + s + '"></iframe>'), r()
    }

    function i(e) {
        var a = "";
        return e = e.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/), void 0 !== e[2] ? (a = e[2].split(/[^0-9a-z_\-]/i), a = a[0]) : a = e, a
    }

    function s() {
        f.html('<div class="vbox-inline">' + e(m).html() + "</div>"), r()
    }

    function c() {
        images = e(".vbox-content").find("img"), images.length ? images.each(function() {
            e(this).one("load", function() {
                r()
            })
        }) : r()
    }

    function r() {
        b.html(q), f.find(">:first-child").addClass("figlio"), e(".figlio").css("width", g).css("height", x).css("padding", u).css("background", d), n(Q, H), f.animate({
            opacity: "1"
        }, "slow", I(f, v, b))
    }

    function n() {
        Q = f.outerHeight(), H = e(window).height(), H > Q + 30 ? (_ = (H - Q) / 2, f.css("margin-top", _), f.css("margin-bottom", _)) : (f.css("margin-top", "30px"), f.css("margin-bottom", "30px")), J(f, v, b)
    }
    var l, d, v, b, u, p, k, f, m, h, g, x, y, w, C, _, B, j, z, q, P, D, E, H, Q, T, A, F, G, I, J;
    e.fn.extend({
        venobox: function(i) {
            var r = {
                    arrowsColor: "#B6B6B6",
                    autoplay: !1,
                    bgcolor: "#fff",
                    border: "0",
                    closeBackground: "#161617",
                    closeColor: "#d2d2d2",
                    framewidth: "",
                    frameheight: "",
                    infinigall: !1,
                    numeratio: !1,
                    numerationBackground: "#161617",
                    numerationColor: "#d2d2d2",
                    numerationPosition: "top",
                    overlayClose: !0,
                    overlayColor: "rgba(23,23,23,0.85)",
                    spinner: "double-bounce",
                    spinColor: "#d2d2d2",
                    titleattr: "title",
                    titleBackground: "#161617",
                    titleColor: "#d2d2d2",
                    titlePosition: "top",
                    pre_open_callback: function() {
                        return !0
                    },
                    post_open_callback: function() {},
                    pre_close_callback: function() {
                        return !0
                    },
                    post_close_callback: function() {},
                    post_resize_callback: function() {}
                },
                n = e.extend(r, i);
            return this.each(function() {
                var i = e(this);
                return i.data("venobox") ? !0 : (i.addClass("vbox-item"), i.data("framewidth", n.framewidth), i.data("frameheight", n.frameheight), i.data("border", n.border), i.data("bgcolor", n.bgcolor), i.data("numeratio", n.numeratio), i.data("infinigall", n.infinigall), i.data("overlaycolor", n.overlayColor), i.data("titleattr", n.titleattr), I = n.post_open_callback, J = n.post_resize_callback, i.data("venobox", !0), void i.on("click", function(r) {
                    function _() {
                        P = i.data("gall"), B = i.data("numeratio"), y = i.data("infinigall"), w = e('.vbox-item[data-gall="' + P + '"]'), w.length > 1 && B === !0 ? (v.html(w.index(i) + 1 + " / " + w.length), v.show()) : v.hide(), D = w.eq(w.index(i) + 1), E = w.eq(w.index(i) - 1), "" !== q ? b.show() : b.hide(), w.length > 1 && y === !0 ? (T = !0, A = !0, D.length < 1 && (D = w.eq(0)), w.index(i) < 1 && (E = w.eq(w.index(w.length)))) : (D.length > 0 ? (e(".vbox-next").css("display", "block"), T = !0) : (e(".vbox-next").css("display", "none"), T = !1), w.index(i) > 0 ? (e(".vbox-prev").css("display", "block"), A = !0) : (e(".vbox-prev").css("display", "none"), A = !1))
                    }

                    function H(e) {
                        27 === e.keyCode && Q()
                    }

                    function Q() {
                        var a = n.pre_close_callback(i, f, v, b);
                        (void 0 == a || a) && (e("body").removeClass("vbox-open"), e("body").off("keydown", H), z.animate({
                            opacity: 0
                        }, 500, function() {
                            z.remove(), C = !1, i.focus(), n.post_close_callback(i, f, v, b)
                        }))
                    }
                    r.preventDefault(), i = e(this);
                    var I = n.pre_open_callback(i);
                    if (void 0 == I || I) {
                        switch (j = i.data("overlay") || i.data("overlaycolor"), g = i.data("framewidth"), x = i.data("frameheight"), l = i.data("autoplay") || n.autoplay, u = i.data("border"), d = i.data("bgcolor"), T = !1, A = !1, C = !1, m = i.data("href") || i.attr("href"), h = i.data("css") || "", q = i.attr(i.data("titleattr")) || "", e("body").addClass("vbox-open"), F = '<div class="vbox-preloader">', n.spinner) {
                            case "rotating-plane":
                                F += '<div class="sk-rotating-plane"></div>';
                                break;
                            case "double-bounce":
                                F += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                                break;
                            case "wave":
                                F += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                                break;
                            case "wandering-cubes":
                                F += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                                break;
                            case "spinner-pulse":
                                F += '<div class="sk-spinner sk-spinner-pulse"></div>';
                                break;
                            case "three-bounce":
                                F += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                                break;
                            case "cube-grid":
                                F += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>'
                        }
                        F += "</div>", G = '<a class="vbox-next"><span>next</span></a><a class="vbox-prev"><span>prev</span></a>', vbheader = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">&times;</div>', p = '<div class="vbox-overlay ' + h + '" style="background:' + j + '">' + F + '<div class="vbox-container"><div class="vbox-content"></div></div>' + vbheader + G + "</div>", e("body").append(p), e(".vbox-preloader .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", n.spinColor), z = e(".vbox-overlay"), k = e(".vbox-container"), f = e(".vbox-content"), v = e(".vbox-num"), b = e(".vbox-title"), b.css(n.titlePosition, "-1px"), b.css({
                            color: n.titleColor,
                            "background-color": n.titleBackground
                        }), e(".vbox-close").css({
                            color: n.closeColor,
                            "background-color": n.closeBackground
                        }), e(".vbox-num").css(n.numerationPosition, "-1px"), e(".vbox-num").css({
                            color: n.numerationColor,
                            "background-color": n.numerationBackground
                        }), e(".vbox-next span, .vbox-prev span").css({
                            "border-top-color": n.arrowsColor,
                            "border-right-color": n.arrowsColor
                        }), f.html(""), f.css("opacity", "0"), _(), z.animate({
                            opacity: 1
                        }, 250, function() {
                            "iframe" == i.data("vbtype") ? o() : "inline" == i.data("vbtype") ? s() : "ajax" == i.data("vbtype") ? a() : "vimeo" == i.data("vbtype") ? t(l, "vimeo") : "youtube" == i.data("vbtype") ? t(l, "youtube") : (f.html('<img src="' + m + '">'), c())
                        });
                        var J = {
                            prev: function() {
                                C || (C = !0, j = E.data("overlay") || E.data("overlaycolor"), g = E.data("framewidth"), x = E.data("frameheight"), u = E.data("border"), d = E.data("bgcolor"), m = E.data("href") || E.attr("href"), l = E.data("autoplay"), q = E.attr(E.data("titleattr")) || "", f.animate({
                                    opacity: 0
                                }, 500, function() {
                                    z.css("background", j), "iframe" == E.data("vbtype") ? o() : "inline" == E.data("vbtype") ? s() : "ajax" == E.data("vbtype") ? a() : "youtube" == E.data("vbtype") ? t(l, "youtube") : "vimeo" == E.data("vbtype") ? t(l, "vimeo") : (f.html('<img src="' + m + '">'), c()), i = E, _(), C = !1
                                }))
                            },
                            next: function() {
                                C || (C = !0, j = D.data("overlay") || D.data("overlaycolor"), g = D.data("framewidth"), x = D.data("frameheight"), u = D.data("border"), d = D.data("bgcolor"), m = D.data("href") || D.attr("href"), l = D.data("autoplay"), q = D.attr(D.data("titleattr")) || "", f.animate({
                                    opacity: 0
                                }, 500, function() {
                                    z.css("background", j), "iframe" == D.data("vbtype") ? o() : "inline" == D.data("vbtype") ? s() : "ajax" == D.data("vbtype") ? a() : "youtube" == D.data("vbtype") ? t(l, "youtube") : "vimeo" == D.data("vbtype") ? t(l, "vimeo") : (f.html('<img src="' + m + '">'), c()), i = D, _(), C = !1
                                }))
                            }
                        };
                        e("body").keydown(function(e) {
                            37 == e.keyCode && 1 == A && J.prev(), 39 == e.keyCode && 1 == T && J.next()
                        }), e(".vbox-prev").click(function() {
                            J.prev()
                        }), e(".vbox-next").click(function() {
                            J.next()
                        });
                        var K = ".vbox-overlay";
                        return n.overlayClose || (K = ".vbox-close"), e(K).click(function(a) {
                            (e(a.target).is(".vbox-overlay") || e(a.target).is(".vbox-content") || e(a.target).is(".vbox-close") || e(a.target).is(".vbox-preloader")) && Q()
                        }), e("body").keydown(H), !1
                    }
                }))
            })
        }
    }), e(window).resize(function() {
        e(".vbox-content").length && setTimeout(n(), 800)
    })
}(jQuery);
