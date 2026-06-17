(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [62641],
  {
    732: (t, e, s) => {
      "use strict";
      s.d(e, { D: () => n });
      let n = (0, s(44922).createContext)("");
    },
    4298: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "minute",
          e = /[+-]\d\d(?::?\d\d)?/g,
          s = /([+-]|\d\d)/g;
        return function (n, i, r) {
          var a = i.prototype;
          (r.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new i(e);
          }),
            (a.utc = function (e) {
              var s = r(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? s.add(this.utcOffset(), t) : s;
            }),
            (a.local = function () {
              return r(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var _ = a.parse;
          a.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              _.call(this, t);
          };
          var l = a.init;
          a.init = function () {
            if (this.$u) {
              var t = this.$d;
              (this.$y = t.getUTCFullYear()),
                (this.$M = t.getUTCMonth()),
                (this.$D = t.getUTCDate()),
                (this.$W = t.getUTCDay()),
                (this.$H = t.getUTCHours()),
                (this.$m = t.getUTCMinutes()),
                (this.$s = t.getUTCSeconds()),
                (this.$ms = t.getUTCMilliseconds());
            } else l.call(this);
          };
          var c = a.utcOffset;
          a.utcOffset = function (n, i) {
            var r = this.$utils().u;
            if (r(n))
              return this.$u
                ? 0
                : r(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof n &&
              null ===
                (n = (function (t) {
                  void 0 === t && (t = "");
                  var n = t.match(e);
                  if (!n) return null;
                  var i = ("" + n[0]).match(s) || ["-", 0, 0],
                    r = i[0],
                    a = 60 * i[1] + +i[2];
                  return 0 === a ? 0 : "+" === r ? a : -a;
                })(n))
            )
              return this;
            var a = 16 >= Math.abs(n) ? 60 * n : n,
              _ = this;
            if (i) return (_.$offset = a), (_.$u = 0 === n), _;
            if (0 !== n) {
              var l = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((_ = this.local().add(a + l, t)).$offset = a),
                (_.$x.$localOffset = l);
            } else _ = this.utc();
            return _;
          };
          var u = a.format;
          (a.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, e);
          }),
            (a.valueOf = function () {
              var t = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * t;
            }),
            (a.isUTC = function () {
              return !!this.$u;
            }),
            (a.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (a.toString = function () {
              return this.toDate().toUTCString();
            });
          var o = a.toDate;
          a.toDate = function (t) {
            return "s" === t && this.$offset
              ? r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : o.call(this);
          };
          var h = a.diff;
          a.diff = function (t, e, s) {
            if (t && this.$u === t.$u) return h.call(this, t, e, s);
            var n = this.local(),
              i = r(t).local();
            return h.call(n, i, e, s);
          };
        };
      })();
    },
    44794: (t, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/detail/[slug]",
        function () {
          return s(79905);
        },
      ]);
    },
    57385: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => o });
      var n = s(66162),
        i = s(14376),
        r = s.n(i),
        a = s(66833),
        _ = s(69996),
        l = s(78720),
        c = s.n(l),
        u = s(47573);
      let o = () => {
        let { t, lang: e } = (0, _.A)("news"),
          s = encodeURI((0, a.useRouter)().asPath),
          i = (() => {
            switch (e) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, n.jsx)(u.fj, {});
              case "fr":
                return (0, n.jsx)(u.On, {});
              case "it":
                return (0, n.jsx)(u.Pc, {});
              case "de":
                return (0, n.jsx)(u.Jg, {});
              case "es-es":
                return (0, n.jsx)(u._$, {});
              case "es-us":
                return (0, n.jsx)(u.iz, {});
              case "pt-br":
                return (0, n.jsx)(u.Gj, {});
              default:
                return (0, n.jsx)(u.oO, {});
            }
          })();
        return (0, n.jsx)("article", {
          className: c().headtab,
          children: (0, n.jsxs)("div", {
            className: c().inner,
            children: [
              (0, n.jsx)("h1", { children: i }),
              (0, n.jsxs)("ul", {
                children: [
                  (0, n.jsx)("li", {
                    className: s.match(/news/) ? c().current : "",
                    children: (0, n.jsx)(r(), {
                      href: "/news/all/1",
                      children: t("[t]news__tab__news"),
                    }),
                  }),
                  (0, n.jsx)("li", {
                    className: s.match(/column/) ? c().current : "",
                    children: (0, n.jsx)(r(), {
                      href: "/column/all/1",
                      children: t("[t]news__tab__column"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    77290: (t, e, s) => {
      "use strict";
      s.d(e, { Gl: () => _ });
      var n = s(82259),
        i = s.n(n),
        r = s(4298),
        a = s.n(r);
      let _ = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD HH:mm:ss",
          s = arguments.length > 2 ? arguments[2] : void 0;
        return (
          i().extend(a()),
          void 0 == s
            ? i()(1e3 * t).format(e)
            : i()(
                i()
                  .utc(1e3 * t)
                  .format("YYYY-MM-DD HH:mm:ss")
              )
                .add(s, "h")
                .format("YYYY-MM-DD HH:mm")
        );
      };
    },
    78720: (t) => {
      t.exports = {
        headtab: "heading_headtab___RPVe",
        inner: "heading_inner__3Ktoo",
        current: "heading_current__Fa6WU",
        heading: "heading_heading__QDBrV",
        heading__bg__title: "heading_heading__bg__title__QF__l",
        heading__sns: "heading_heading__sns__3G8a3",
        heading__sns__title: "heading_heading__sns__title__Uz_dW",
        heading__sns__list: "heading_heading__sns__list__w3Sjb",
        sns__list: "heading_sns__list__4Dl80",
        sns__dc: "heading_sns__dc__7BBOz",
        sns__tw: "heading_sns__tw__NKgV4",
        sns__ig: "heading_sns__ig__urA1u",
        sns__yt: "heading_sns__yt__LkJc_",
        sns__fb: "heading_sns__fb__gHAkl",
        sns__nl: "heading_sns__nl__UzGFq",
        sns__nlSmall: "heading_sns__nlSmall__v8c5e",
        blink: "heading_blink__vkXda",
      };
    },
    78774: (t) => {
      t.exports = {
        news: "news_list_news__kap_B",
        news__tabs: "news_list_news__tabs__SDfIk",
        active: "news_list_active__uMnbk",
        news__list: "news_list_news__list__7g_yw",
        image: "news_list_image__654LA",
        text: "news_list_text__njyUK",
        info: "news_list_info__0Hvc_",
        new: "news_list_new__sWCqN",
        news__list__item__info: "news_list_news__list__item__info__1E3z5",
        blink: "news_list_blink__K6u3j",
        news__pagination: "news_list_news__pagination__x_1OU",
        news__detail: "news_list_news__detail__A4Uz5",
        news__detail__left: "news_list_news__detail__left__ZHL9i",
        sns: "news_list_sns__EULOg",
        twitter: "news_list_twitter__vcov6",
        facebook: "news_list_facebook__DMCdV",
        reddit: "news_list_reddit__ASoKp",
        news__detail__right: "news_list_news__detail__right__BxrgD",
        titleArea: "news_list_titleArea__QlH7u",
        subArea: "news_list_subArea__P_xvp",
        date: "news_list_date__RE5xu",
        line: "news_list_line__xsdNZ",
        category_btn: "news_list_category_btn__UAFfp",
        body: "news_list_body__NnZz5",
        link: "news_list_link__Cze_Y",
      };
    },
    79905: (t, e, s) => {
      "use strict";
      s.r(e), s.d(e, { __N_SSG: () => v, default: () => p });
      var n = s(66162),
        i = s(69996),
        r = s(12350),
        a = s(86130),
        _ = s(732),
        l = s(57385),
        c = s(66833),
        u = s(14376),
        o = s.n(u),
        h = s(56709),
        d = s.n(h),
        f = s(44922),
        g = s(77290),
        w = s(78774),
        $ = s.n(w);
      let m = () => {
        let { t, lang: e } = (0, i.A)("news"),
          s = (0, i.A)("common"),
          r = (0, f.useRef)(!1),
          a = (0, c.useRouter)(),
          l = (0, f.useContext)(_.D).news,
          [u, h] = (0, f.useState)(l.categorySlug);
        return (
          (0, f.useEffect)(() => {
            if (!r.current) {
              r.current = !0;
              let t = l.css,
                e = Function(l.javascript),
                s = document.getElementById("wrapper");
              s &&
                s.insertAdjacentHTML(
                  "beforebegin",
                  "<style>".concat(t, "</style>")
                ),
                e();
            }
          }),
          (0, n.jsx)("article", {
            className: $().news,
            children: (0, n.jsxs)("section", {
              className: $().news__detail,
              children: [
                (0, n.jsxs)("div", {
                  className: $().news__detail__left,
                  children: [
                    (0, n.jsx)("div", {
                      className: $().image,
                      children: (0, n.jsx)(d(), {
                        src: l.eyecatch
                          ? l.eyecatch
                          : "/6/assets/images/news/blank.png",
                        width: "500",
                        height: "500",
                        layout: "responsive",
                        alt: l.seoTitle,
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: $().sns,
                      children: (0, n.jsxs)("ul", {
                        children: [
                          (0, n.jsx)("li", {
                            className: $().twitter,
                            children: (0, n.jsx)(o(), {
                              href: "https://x.com/intent/tweet?url=https://www.streetfighter.com/6/"
                                .concat(e)
                                .concat(a.asPath, "&text=")
                                .concat(l.seoTitle),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            className: $().facebook,
                            children: (0, n.jsx)(o(), {
                              href: "https://www.facebook.com/sharer/sharer.php?u=https://www.streetfighter.com/6/"
                                .concat(e, "/")
                                .concat(a.asPath),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          }),
                          (0, n.jsx)("li", {
                            className: $().reddit,
                            children: (0, n.jsx)(o(), {
                              href: "https://www.reddit.com/submit?url=https://www.streetfighter.com/6/"
                                .concat(e, "/")
                                .concat(a.asPath, "&text=")
                                .concat(l.seoTitle),
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: $().news__detail__right,
                  children: [
                    (0, n.jsxs)("div", {
                      className: $().titleArea,
                      children: [
                        (0, n.jsx)("h2", {
                          dangerouslySetInnerHTML: { __html: l.title },
                        }),
                        (0, n.jsxs)("div", {
                          className: $().subArea,
                          children: [
                            (0, n.jsx)("p", {
                              className: $().date,
                              children: (0, g.Gl)(
                                l.releaseDate,
                                s.t("[t]YYYY/MM/DD"),
                                void 0
                              ),
                            }),
                            (0, n.jsx)("p", { className: $().line }),
                            (0, n.jsx)("p", {
                              className: $().category_btn,
                              children: (0, n.jsx)(o(), {
                                href: "/news/".concat(l.categorySlug, "/1"),
                                children: l.category,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: $().body,
                      dangerouslySetInnerHTML: { __html: l.body },
                    }),
                    (0, n.jsx)("div", {
                      className: $().link,
                      children: (0, n.jsxs)(o(), {
                        href: "/news/all/1",
                        children: [
                          t("[t]title__page"),
                          "\xa0",
                          t("[t]news__tolist"),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var v = !0;
      let p = (t) => {
        let { t: e, lang: s } = (0, i.A)("news"),
          c = new Date(1e3 * t.news.releaseDate).toISOString(),
          u = new Date(1e3 * t.news.modifiedDate).toISOString(),
          o = {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            headline: t.news.seoTitle,
            image: t.news.eyecatch,
            datePublished: c,
            dateModified: u,
            author: {
              "@type": "Organization",
              name: "STREET FIGHTER 6 Team, CAPCOM",
              url: "https://www.streetfighter.com/6",
            },
          };
        return (0, n.jsxs)(a.A, {
          children: [
            (0, n.jsx)(r.A, {
              pageTitle: ""
                .concat(t.news.seoTitle)
                .concat("ja-jp" === s ? "｜" : " | ")
                .concat(e("[t]title")),
              pageDescription: t.news.seoDescription,
              pageOgUrl: "https://www.streetfighter.com/6/"
                .concat(s, "/news/detail/")
                .concat(t.news.slug),
              pageOgImg: t.news.eyecatch,
            }),
            (0, n.jsx)("div", {
              className: "contents page__news",
              children: (0, n.jsxs)(_.D.Provider, {
                value: t,
                children: [
                  (0, n.jsx)(l.A, {}),
                  (0, n.jsx)(
                    "script",
                    {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: { __html: JSON.stringify(o) },
                    },
                    "json-ld"
                  ),
                  (0, n.jsx)(m, {}),
                ],
              }),
            }),
          ],
        });
      };
    },
    82259: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "millisecond",
          e = "second",
          s = "minute",
          n = "hour",
          i = "week",
          r = "month",
          a = "quarter",
          _ = "year",
          l = "date",
          c = "Invalid Date",
          u =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          o =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = function (t, e, s) {
            var n = String(t);
            return !n || n.length >= e
              ? t
              : "" + Array(e + 1 - n.length).join(s) + t;
          },
          d = "en",
          f = {};
        f[d] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (t) {
            var e = ["th", "st", "nd", "rd"],
              s = t % 100;
            return "[" + t + (e[(s - 20) % 10] || e[s] || e[0]) + "]";
          },
        };
        var g = function (t) {
            return t instanceof v;
          },
          w = function t(e, s, n) {
            var i;
            if (!e) return d;
            if ("string" == typeof e) {
              var r = e.toLowerCase();
              f[r] && (i = r), s && ((f[r] = s), (i = r));
              var a = e.split("-");
              if (!i && a.length > 1) return t(a[0]);
            } else {
              var _ = e.name;
              (f[_] = e), (i = _);
            }
            return !n && i && (d = i), i || (!n && d);
          },
          $ = function (t, e) {
            if (g(t)) return t.clone();
            var s = "object" == typeof e ? e : {};
            return (s.date = t), (s.args = arguments), new v(s);
          },
          m = {
            s: h,
            z: function (t) {
              var e = -t.utcOffset(),
                s = Math.abs(e);
              return (
                (e <= 0 ? "+" : "-") +
                h(Math.floor(s / 60), 2, "0") +
                ":" +
                h(s % 60, 2, "0")
              );
            },
            m: function t(e, s) {
              if (e.date() < s.date()) return -t(s, e);
              var n = 12 * (s.year() - e.year()) + (s.month() - e.month()),
                i = e.clone().add(n, r),
                a = s - i < 0,
                _ = e.clone().add(n + (a ? -1 : 1), r);
              return +(-(n + (s - i) / (a ? i - _ : _ - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (c) {
              return (
                {
                  M: r,
                  y: _,
                  w: i,
                  d: "day",
                  D: l,
                  h: n,
                  m: s,
                  s: e,
                  ms: t,
                  Q: a,
                }[c] ||
                String(c || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (m.l = w),
          (m.i = g),
          (m.w = function (t, e) {
            return $(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var v = (function () {
            function h(t) {
              (this.$L = w(t.locale, null, !0)), this.parse(t);
            }
            var d = h.prototype;
            return (
              (d.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    s = t.utc;
                  if (null === e) return new Date(NaN);
                  if (m.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var n = e.match(u);
                    if (n) {
                      var i = n[2] - 1 || 0,
                        r = (n[7] || "0").substring(0, 3);
                      return s
                        ? new Date(
                            Date.UTC(
                              n[1],
                              i,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              r
                            )
                          )
                        : new Date(
                            n[1],
                            i,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            r
                          );
                    }
                  }
                  return new Date(e);
                })(t)),
                  (this.$x = t.x || {}),
                  this.init();
              }),
              (d.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (d.$utils = function () {
                return m;
              }),
              (d.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (d.isSame = function (t, e) {
                var s = $(t);
                return this.startOf(e) <= s && s <= this.endOf(e);
              }),
              (d.isAfter = function (t, e) {
                return $(t) < this.startOf(e);
              }),
              (d.isBefore = function (t, e) {
                return this.endOf(e) < $(t);
              }),
              (d.$g = function (t, e, s) {
                return m.u(t) ? this[e] : this.set(s, t);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (t, a) {
                var c = this,
                  u = !!m.u(a) || a,
                  o = m.p(t),
                  h = function (t, e) {
                    var s = m.w(
                      c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t),
                      c
                    );
                    return u ? s : s.endOf("day");
                  },
                  d = function (t, e) {
                    return m.w(
                      c
                        .toDate()
                        [t].apply(
                          c.toDate("s"),
                          (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      c
                    );
                  },
                  f = this.$W,
                  g = this.$M,
                  w = this.$D,
                  $ = "set" + (this.$u ? "UTC" : "");
                switch (o) {
                  case _:
                    return u ? h(1, 0) : h(31, 11);
                  case r:
                    return u ? h(1, g) : h(0, g + 1);
                  case i:
                    var v = this.$locale().weekStart || 0,
                      p = (f < v ? f + 7 : f) - v;
                    return h(u ? w - p : w + (6 - p), g);
                  case "day":
                  case l:
                    return d($ + "Hours", 0);
                  case n:
                    return d($ + "Minutes", 1);
                  case s:
                    return d($ + "Seconds", 2);
                  case e:
                    return d($ + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (d.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (d.$set = function (i, a) {
                var c,
                  u = m.p(i),
                  o = "set" + (this.$u ? "UTC" : ""),
                  h = (((c = {}).day = o + "Date"),
                  (c[l] = o + "Date"),
                  (c[r] = o + "Month"),
                  (c[_] = o + "FullYear"),
                  (c[n] = o + "Hours"),
                  (c[s] = o + "Minutes"),
                  (c[e] = o + "Seconds"),
                  (c[t] = o + "Milliseconds"),
                  c)[u],
                  d = "day" === u ? this.$D + (a - this.$W) : a;
                if (u === r || u === _) {
                  var f = this.clone().set(l, 1);
                  f.$d[h](d),
                    f.init(),
                    (this.$d = f.set(l, Math.min(this.$D, f.daysInMonth())).$d);
                } else h && this.$d[h](d);
                return this.init(), this;
              }),
              (d.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (d.get = function (t) {
                return this[m.p(t)]();
              }),
              (d.add = function (t, a) {
                var l,
                  c = this;
                t = Number(t);
                var u = m.p(a),
                  o = function (e) {
                    var s = $(c);
                    return m.w(s.date(s.date() + Math.round(e * t)), c);
                  };
                if (u === r) return this.set(r, this.$M + t);
                if (u === _) return this.set(_, this.$y + t);
                if ("day" === u) return o(1);
                if (u === i) return o(7);
                var h =
                    (((l = {})[s] = 6e4), (l[n] = 36e5), (l[e] = 1e3), l)[u] ||
                    1,
                  d = this.$d.getTime() + t * h;
                return m.w(d, this);
              }),
              (d.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (d.format = function (t) {
                var e = this,
                  s = this.$locale();
                if (!this.isValid()) return s.invalidDate || c;
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = m.z(this),
                  r = this.$H,
                  a = this.$m,
                  _ = this.$M,
                  l = s.weekdays,
                  u = s.months,
                  h = function (t, s, i, r) {
                    return (t && (t[s] || t(e, n))) || i[s].slice(0, r);
                  },
                  d = function (t) {
                    return m.s(r % 12 || 12, t, "0");
                  },
                  f =
                    s.meridiem ||
                    function (t, e, s) {
                      var n = t < 12 ? "AM" : "PM";
                      return s ? n.toLowerCase() : n;
                    },
                  g = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: _ + 1,
                    MM: m.s(_ + 1, 2, "0"),
                    MMM: h(s.monthsShort, _, u, 3),
                    MMMM: h(u, _),
                    D: this.$D,
                    DD: m.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(s.weekdaysMin, this.$W, l, 2),
                    ddd: h(s.weekdaysShort, this.$W, l, 3),
                    dddd: l[this.$W],
                    H: String(r),
                    HH: m.s(r, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: f(r, a, !0),
                    A: f(r, a, !1),
                    m: String(a),
                    mm: m.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: m.s(this.$s, 2, "0"),
                    SSS: m.s(this.$ms, 3, "0"),
                    Z: i,
                  };
                return n.replace(o, function (t, e) {
                  return e || g[t] || i.replace(":", "");
                });
              }),
              (d.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (d.diff = function (t, l, c) {
                var u,
                  o = m.p(l),
                  h = $(t),
                  d = (h.utcOffset() - this.utcOffset()) * 6e4,
                  f = this - h,
                  g = m.m(this, h);
                return (
                  (g =
                    (((u = {})[_] = g / 12),
                    (u[r] = g),
                    (u[a] = g / 3),
                    (u[i] = (f - d) / 6048e5),
                    (u.day = (f - d) / 864e5),
                    (u[n] = f / 36e5),
                    (u[s] = f / 6e4),
                    (u[e] = f / 1e3),
                    u)[o] || f),
                  c ? g : m.a(g)
                );
              }),
              (d.daysInMonth = function () {
                return this.endOf(r).$D;
              }),
              (d.$locale = function () {
                return f[this.$L];
              }),
              (d.locale = function (t, e) {
                if (!t) return this.$L;
                var s = this.clone(),
                  n = w(t, e, !0);
                return n && (s.$L = n), s;
              }),
              (d.clone = function () {
                return m.w(this.$d, this);
              }),
              (d.toDate = function () {
                return new Date(this.valueOf());
              }),
              (d.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (d.toISOString = function () {
                return this.$d.toISOString();
              }),
              (d.toString = function () {
                return this.$d.toUTCString();
              }),
              h
            );
          })(),
          p = v.prototype;
        return (
          ($.prototype = p),
          [
            ["$ms", t],
            ["$s", e],
            ["$m", s],
            ["$H", n],
            ["$W", "day"],
            ["$M", r],
            ["$y", _],
            ["$D", l],
          ].forEach(function (t) {
            p[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          ($.extend = function (t, e) {
            return t.$i || (t(e, v, $), (t.$i = !0)), $;
          }),
          ($.locale = w),
          ($.isDayjs = g),
          ($.unix = function (t) {
            return $(1e3 * t);
          }),
          ($.en = f[d]),
          ($.Ls = f),
          ($.p = {}),
          $
        );
      })();
    },
  },
  (t) => {
    t.O(0, [88649, 86130, 33213, 90636, 46593, 38792], () => t((t.s = 44794))),
      (_N_E = t.O());
  },
]);
