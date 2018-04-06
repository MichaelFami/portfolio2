/*
 *  Bootstrap Auto-Hiding Navbar - v1.0.5
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by IstvÃƒÂ¡n Ujj-MÃƒÂ©szÃƒÂ¡ros
 *  Under Apache License v2.0 License
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.element = a(b), this.settings = a.extend({}, w, c), this._defaults = w, this._name = m, this.init()
    }

    function f(b) {
        v && (b.element.addClass("navbar-hidden").animate({
            top: -1 * parseInt(b.element.css("height"), 10) + b.settings.navbarOffset
        }, {
            queue: !1,
            duration: b.settings.animationDuration
        }), a(".dropdown.open .dropdown-toggle", b.element).dropdown("toggle"), v = !1, b.element.trigger("hide.autoHidingNavbar"))
    }

    function g(a) {
        v || (a.element.removeClass("navbar-hidden").animate({
            top: 0
        }, {
            queue: !1,
            duration: a.settings.animationDuration
        }), v = !0, a.element.trigger("show.autoHidingNavbar"))
    }

    function h(a) {
        var b = n.scrollTop(),
            c = b - t;
        if (t = b, 0 > c) {
            if (v) return;
            (a.settings.showOnUpscroll || l >= b) && g(a)
        } else if (c > 0) {
            if (!v) return void(a.settings.showOnBottom && b + u === o.height() && g(a));
            b >= l && f(a)
        }
    }

    function i(a) {
        a.settings.disableAutohide || (s = (new Date).getTime(), h(a))
    }

    function j(a) {
        o.on("scroll." + m, function() {
            (new Date).getTime() - s > r ? i(a) : (clearTimeout(p), p = setTimeout(function() {
                i(a)
            }, r))
        }), n.on("resize." + m, function() {
            clearTimeout(q), q = setTimeout(function() {
                u = n.height()
            }, r)
        })
    }

    function k() {
        o.off("." + m), n.off("." + m)
    }
    var l, m = "autoHidingNavbar",
        n = a(b),
        o = a(c),
        p = null,
        q = null,
        r = 70,
        s = 0,
        t = null,
        u = n.height(),
        v = !0,
        w = {
            disableAutohide: !1,
            showOnUpscroll: !0,
            showOnBottom: !0,
            hideOffset: "auto",
            animationDuration: 200,
            navbarOffset: 0
        };
    e.prototype = {
        init: function() {
            return this.elements = {
                navbar: this.element
            }, this.setDisableAutohide(this.settings.disableAutohide), this.setShowOnUpscroll(this.settings.showOnUpscroll), this.setShowOnBottom(this.settings.showOnBottom), this.setHideOffset(this.settings.hideOffset), this.setAnimationDuration(this.settings.animationDuration), l = "auto" === this.settings.hideOffset ? parseInt(this.element.css("height"), 10) : this.settings.hideOffset, j(this), this.element
        },
        setDisableAutohide: function(a) {
            return this.settings.disableAutohide = a, this.element
        },
        setShowOnUpscroll: function(a) {
            return this.settings.showOnUpscroll = a, this.element
        },
        setShowOnBottom: function(a) {
            return this.settings.showOnBottom = a, this.element
        },
        setHideOffset: function(a) {
            return this.settings.hideOffset = a, this.element
        },
        setAnimationDuration: function(a) {
            return this.settings.animationDuration = a, this.element
        },
        show: function() {
            return g(this), this.element
        },
        hide: function() {
            return f(this), this.element
        },
        destroy: function() {
            return k(this), g(this), a.data(this, "plugin_" + m, null), this.element
        }
    }, a.fn[m] = function(b) {
        var c = arguments;
        if (b === d || "object" == typeof b) return this.each(function() {
            a.data(this, "plugin_" + m) || a.data(this, "plugin_" + m, new e(this, b))
        });
        if ("string" == typeof b && "_" !== b[0] && "init" !== b) {
            var f;
            return this.each(function() {
                var d = a.data(this, "plugin_" + m);
                d instanceof e && "function" == typeof d[b] && (f = d[b].apply(d, Array.prototype.slice.call(c, 1)))
            }), f !== d ? f : this
        }
    }
}(jQuery, window, document);
