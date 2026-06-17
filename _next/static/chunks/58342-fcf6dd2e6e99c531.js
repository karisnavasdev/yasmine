(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [58342],
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
        return function (n, i, a) {
          var r = i.prototype;
          (a.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new i(e);
          }),
            (r.utc = function (e) {
              var s = a(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? s.add(this.utcOffset(), t) : s;
            }),
            (r.local = function () {
              return a(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var l = r.parse;
          r.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              l.call(this, t);
          };
          var c = r.init;
          r.init = function () {
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
            } else c.call(this);
          };
          var _ = r.utcOffset;
          r.utcOffset = function (n, i) {
            var a = this.$utils().u;
            if (a(n))
              return this.$u
                ? 0
                : a(this.$offset)
                ? _.call(this)
                : this.$offset;
            if (
              "string" == typeof n &&
              null ===
                (n = (function (t) {
                  void 0 === t && (t = "");
                  var n = t.match(e);
                  if (!n) return null;
                  var i = ("" + n[0]).match(s) || ["-", 0, 0],
                    a = i[0],
                    r = 60 * i[1] + +i[2];
                  return 0 === r ? 0 : "+" === a ? r : -r;
                })(n))
            )
              return this;
            var r = 16 >= Math.abs(n) ? 60 * n : n,
              l = this;
            if (i) return (l.$offset = r), (l.$u = 0 === n), l;
            if (0 !== n) {
              var c = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((l = this.local().add(r + c, t)).$offset = r),
                (l.$x.$localOffset = c);
            } else l = this.utc();
            return l;
          };
          var u = r.format;
          (r.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return u.call(this, e);
          }),
            (r.valueOf = function () {
              var t = this.$utils().u(this.$offset)
                ? 0
                : this.$offset +
                  (this.$x.$localOffset || this.$d.getTimezoneOffset());
              return this.$d.valueOf() - 6e4 * t;
            }),
            (r.isUTC = function () {
              return !!this.$u;
            }),
            (r.toISOString = function () {
              return this.toDate().toISOString();
            }),
            (r.toString = function () {
              return this.toDate().toUTCString();
            });
          var o = r.toDate;
          r.toDate = function (t) {
            return "s" === t && this.$offset
              ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : o.call(this);
          };
          var h = r.diff;
          r.diff = function (t, e, s) {
            if (t && this.$u === t.$u) return h.call(this, t, e, s);
            var n = this.local(),
              i = a(t).local();
            return h.call(n, i, e, s);
          };
        };
      })();
    },
    5344: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => _ });
      var n = s(66162),
        i = s(69996),
        a = s(89386),
        r = s(78720),
        l = s.n(r),
        c = s(47573);
      let _ = () => {
        let { t, lang: e } = (0, i.A)("news"),
          s = (0, i.A)("common"),
          r = (() => {
            switch (e) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, n.jsx)(c.e_, {});
              case "fr":
                return (0, n.jsx)(c.dr, {});
              case "it":
                return (0, n.jsx)(c.yP, {});
              case "de":
                return (0, n.jsx)(c.on, {});
              case "es-es":
              case "es-us":
                return (0, n.jsx)(c.Z3, {});
              case "pt-br":
                return (0, n.jsx)(c.Pq, {});
              default:
                return (0, n.jsx)(c.Ps, {});
            }
          })(),
          _ = (0, a.X)(e),
          u = Object.keys(_).map((t, e) => {
            if ("nlSmall" === t && "true" === _[t]) {
              let e = "sns__".concat(t);
              return (0, n.jsx)(
                "li",
                {
                  className: l()[e],
                  id: "cusacrmwidget",
                  children: (0, n.jsx)("span", {
                    children: s.t("[t]sns__".concat(t)),
                  }),
                },
                e
              );
            }
            if ("" !== _[t]) {
              let e = "sns__".concat(t);
              return (0, n.jsx)(
                "li",
                {
                  className: l()[e],
                  children: (0, n.jsxs)("a", {
                    href: _[t],
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                      "nl" !== t && "nlSmall" !== t
                        ? s.t("[t]sns__".concat(t, "_account"))
                        : s.t("[t]sns__".concat(t)),
                      " ",
                    ],
                  }),
                },
                e
              );
            }
          });
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("article", {
            className: l().heading,
            children: [
              (0, n.jsx)("div", {
                className: l().heading__bg__title,
                children: r,
              }),
              (0, n.jsx)("h1", { children: r }),
              (0, n.jsxs)("dl", {
                className: l().heading__sns,
                children: [
                  (0, n.jsx)("dt", {
                    className: l().heading__sns__title,
                    children: "FOLLOW US!",
                  }),
                  (0, n.jsx)("dd", {
                    className: l().heading__sns__list,
                    children: (0, n.jsx)("ul", {
                      className: l().sns__list,
                      children: u,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    57385: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => o });
      var n = s(66162),
        i = s(14376),
        a = s.n(i),
        r = s(66833),
        l = s(69996),
        c = s(78720),
        _ = s.n(c),
        u = s(47573);
      let o = () => {
        let { t, lang: e } = (0, l.A)("news"),
          s = encodeURI((0, r.useRouter)().asPath),
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
          className: _().headtab,
          children: (0, n.jsxs)("div", {
            className: _().inner,
            children: [
              (0, n.jsx)("h1", { children: i }),
              (0, n.jsxs)("ul", {
                children: [
                  (0, n.jsx)("li", {
                    className: s.match(/news/) ? _().current : "",
                    children: (0, n.jsx)(a(), {
                      href: "/news/all/1",
                      children: t("[t]news__tab__news"),
                    }),
                  }),
                  (0, n.jsx)("li", {
                    className: s.match(/column/) ? _().current : "",
                    children: (0, n.jsx)(a(), {
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
    64464: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => a });
      var n = s(66162),
        i = s(66833);
      let a = (t) => {
        let {
            currentPage: e = 1,
            totalItems: s = 1,
            perPage: a = 5,
            changePage: r,
            toTop: l = "wrapper",
          } = t,
          c = encodeURI((0, i.useRouter)().asPath.split("/")[1]),
          _ = Math.ceil(s / a);
        if (_ <= 1) return (0, n.jsx)(n.Fragment, {});
        let u = Math.floor(3.5),
          o = 1,
          h = 7,
          d = (() => {
            _ > 7
              ? ((o = e - u),
                (h = e + u),
                o < 1 && ((o = 1), (h = 7)),
                h > _ && ((h = _), (o = _ - 6)))
              : ((o = 1), (h = _));
            let t = [];
            for (let s = o; s <= h; s++)
              s === e
                ? t.push(
                    (0, n.jsx)(
                      "li",
                      { className: "active", children: s },
                      "page".concat(s)
                    )
                  )
                : t.push(
                    (0, n.jsx)(
                      "li",
                      {
                        onClick: () => {
                          r(s), f();
                        },
                        children: s,
                      },
                      "page".concat(s)
                    )
                  );
            return t;
          })(),
          f = () => {
            let t = document.getElementById(l).getBoundingClientRect().top,
              e = window.pageYOffset + t;
            window.scroll({ top: e, behavior: "smooth" });
          };
        return (0, n.jsxs)("ul", {
          className: "pagination ".concat(c),
          children: [
            (0, n.jsx)("li", {
              className: "first ".concat(1 === e ? "disabled" : ""),
              onClick: () => {
                r(1), f();
              },
            }),
            (0, n.jsx)("li", {
              className: "prev ".concat(1 === e ? "disabled" : ""),
              onClick: () => {
                r(e - 1), f();
              },
            }),
            d,
            (0, n.jsx)("li", {
              className: "next ".concat(e === _ ? "disabled" : ""),
              onClick: () => {
                r(e + 1), f();
              },
            }),
            (0, n.jsx)("li", {
              className: "last ".concat(e === _ ? "disabled" : ""),
              onClick: () => {
                r(_), f();
              },
            }),
          ],
        });
      };
    },
    72087: (t, e, s) => {
      "use strict";
      s.d(e, { A: () => m });
      var n = s(66162),
        i = s(66833),
        a = s(14376),
        r = s.n(a),
        l = s(56709),
        c = s.n(l),
        _ = s(69996),
        u = s(44922),
        o = s(77290),
        h = s(64464),
        d = s(732),
        f = s(78774),
        g = s.n(f);
      let m = () => {
        let { t, lang: e } = (0, _.A)("news"),
          s = (0, _.A)("common"),
          a = void 0,
          l = (0, i.useRouter)(),
          f = (0, u.useContext)(d.D),
          m = ["", "game", "esports", "goods", "event", "campaign"],
          $ = l.query.category ? String(l.query.category) : "",
          w = m.indexOf($) > -1 ? m.indexOf($) : 0,
          v = m[w],
          [x, p] = (0, u.useState)(v),
          j = (t) => {
            l.push({ pathname: "/news/" + t + "/1/" }), p(t);
          },
          y = l.query.page ? Number(l.query.page) : 1,
          [D, M] = (0, u.useState)(y),
          S = f.max_page,
          b = Math.ceil(f.total_num / S),
          O = f.news_list,
          [N, k] = (0, u.useState)([]);
        return (
          (0, u.useEffect)(() => {
            let t = [];
            f.news_list.forEach((e, n) => {
              t.push((0, o.Gl)(e.releaseDate, s.t("[t]YYYY/MM/DD"), a));
            }),
              k(t);
          }, [f]),
          (0, n.jsxs)("article", {
            className: g().news,
            children: [
              (0, n.jsx)("aside", {
                className: g().news__tabs,
                children: (0, n.jsxs)("ul", {
                  children: [
                    (0, n.jsx)("li", {
                      className: "" === x ? g().active : "",
                      onClick: () => {
                        j("all"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__all"),
                      }),
                    }),
                    (0, n.jsx)("li", {
                      className: "game" === x ? g().active : "",
                      onClick: () => {
                        j("game"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__game"),
                      }),
                    }),
                    (0, n.jsx)("li", {
                      className: "esports" === x ? g().active : "",
                      onClick: () => {
                        j("esports"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__esports"),
                      }),
                    }),
                    (0, n.jsx)("li", {
                      className: "goods" === x ? g().active : "",
                      onClick: () => {
                        j("goods"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__goods"),
                      }),
                    }),
                    (0, n.jsx)("li", {
                      className: "event" === x ? g().active : "",
                      onClick: () => {
                        j("event"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__event"),
                      }),
                    }),
                    (0, n.jsx)("li", {
                      className: "campaign" === x ? g().active : "",
                      onClick: () => {
                        j("campaign"), M(1);
                      },
                      children: (0, n.jsx)("span", {
                        children: t("[t]news__nav__campaign"),
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                className: g().news__list,
                children: (0, n.jsx)("ul", {
                  children: O.map((t, e) => {
                    if (!t) return;
                    let s = t.externalUrl
                        ? t.externalUrl
                        : "/news/detail/".concat(t.slug),
                      i = t.externalUrl ? "_blank" : "";
                    return (0, n.jsx)(
                      "li",
                      {
                        className: g()[t.categorySlug],
                        children: (0, n.jsxs)(r(), {
                          href: s,
                          target: i,
                          children: [
                            (0, n.jsx)("div", {
                              className: g().image,
                              children: (0, n.jsx)(c(), {
                                src: t.eyecatch
                                  ? t.eyecatch
                                  : "/6/assets/images/news/blank.png",
                                width: "292",
                                height: "292",
                                layout: "responsive",
                                alt: t.seoTitle,
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("p", {
                              className: g().text,
                              dangerouslySetInnerHTML: { __html: t.title },
                            }),
                            (0, n.jsxs)("dl", {
                              className: g().info,
                              children: [
                                (0, n.jsx)("dt", { children: t.category }),
                                (0, n.jsx)("dd", { children: N[e] }),
                              ],
                            }),
                          ],
                        }),
                      },
                      "all".concat(e)
                    );
                  }),
                }),
              }),
              (0, n.jsx)("section", {
                className: g().news__pagination,
                children:
                  O.length > 0 &&
                  (0, n.jsx)(h.A, {
                    currentPage: D,
                    totalItems: f.total_num,
                    perPage: b,
                    changePage: (t) => {
                      let e = l.pathname;
                      l.push({ pathname: e, query: { ...l.query, page: t } }),
                        M(t);
                    },
                  }),
              }),
            ],
          })
        );
      };
    },
    77290: (t, e, s) => {
      "use strict";
      s.d(e, { Gl: () => l });
      var n = s(82259),
        i = s.n(n),
        a = s(4298),
        r = s.n(a);
      let l = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD HH:mm:ss",
          s = arguments.length > 2 ? arguments[2] : void 0;
        return (
          i().extend(r()),
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
    82259: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "millisecond",
          e = "second",
          s = "minute",
          n = "hour",
          i = "week",
          a = "month",
          r = "quarter",
          l = "year",
          c = "date",
          _ = "Invalid Date",
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
          m = function t(e, s, n) {
            var i;
            if (!e) return d;
            if ("string" == typeof e) {
              var a = e.toLowerCase();
              f[a] && (i = a), s && ((f[a] = s), (i = a));
              var r = e.split("-");
              if (!i && r.length > 1) return t(r[0]);
            } else {
              var l = e.name;
              (f[l] = e), (i = l);
            }
            return !n && i && (d = i), i || (!n && d);
          },
          $ = function (t, e) {
            if (g(t)) return t.clone();
            var s = "object" == typeof e ? e : {};
            return (s.date = t), (s.args = arguments), new v(s);
          },
          w = {
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
                i = e.clone().add(n, a),
                r = s - i < 0,
                l = e.clone().add(n + (r ? -1 : 1), a);
              return +(-(n + (s - i) / (r ? i - l : l - i)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (_) {
              return (
                {
                  M: a,
                  y: l,
                  w: i,
                  d: "day",
                  D: c,
                  h: n,
                  m: s,
                  s: e,
                  ms: t,
                  Q: r,
                }[_] ||
                String(_ || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (t) {
              return void 0 === t;
            },
          };
        (w.l = m),
          (w.i = g),
          (w.w = function (t, e) {
            return $(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var v = (function () {
            function h(t) {
              (this.$L = m(t.locale, null, !0)), this.parse(t);
            }
            var d = h.prototype;
            return (
              (d.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    s = t.utc;
                  if (null === e) return new Date(NaN);
                  if (w.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var n = e.match(u);
                    if (n) {
                      var i = n[2] - 1 || 0,
                        a = (n[7] || "0").substring(0, 3);
                      return s
                        ? new Date(
                            Date.UTC(
                              n[1],
                              i,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            n[1],
                            i,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            a
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
                return w;
              }),
              (d.isValid = function () {
                return this.$d.toString() !== _;
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
                return w.u(t) ? this[e] : this.set(s, t);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (t, r) {
                var _ = this,
                  u = !!w.u(r) || r,
                  o = w.p(t),
                  h = function (t, e) {
                    var s = w.w(
                      _.$u ? Date.UTC(_.$y, e, t) : new Date(_.$y, e, t),
                      _
                    );
                    return u ? s : s.endOf("day");
                  },
                  d = function (t, e) {
                    return w.w(
                      _.toDate()[t].apply(
                        _.toDate("s"),
                        (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                      ),
                      _
                    );
                  },
                  f = this.$W,
                  g = this.$M,
                  m = this.$D,
                  $ = "set" + (this.$u ? "UTC" : "");
                switch (o) {
                  case l:
                    return u ? h(1, 0) : h(31, 11);
                  case a:
                    return u ? h(1, g) : h(0, g + 1);
                  case i:
                    var v = this.$locale().weekStart || 0,
                      x = (f < v ? f + 7 : f) - v;
                    return h(u ? m - x : m + (6 - x), g);
                  case "day":
                  case c:
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
              (d.$set = function (i, r) {
                var _,
                  u = w.p(i),
                  o = "set" + (this.$u ? "UTC" : ""),
                  h = (((_ = {}).day = o + "Date"),
                  (_[c] = o + "Date"),
                  (_[a] = o + "Month"),
                  (_[l] = o + "FullYear"),
                  (_[n] = o + "Hours"),
                  (_[s] = o + "Minutes"),
                  (_[e] = o + "Seconds"),
                  (_[t] = o + "Milliseconds"),
                  _)[u],
                  d = "day" === u ? this.$D + (r - this.$W) : r;
                if (u === a || u === l) {
                  var f = this.clone().set(c, 1);
                  f.$d[h](d),
                    f.init(),
                    (this.$d = f.set(c, Math.min(this.$D, f.daysInMonth())).$d);
                } else h && this.$d[h](d);
                return this.init(), this;
              }),
              (d.set = function (t, e) {
                return this.clone().$set(t, e);
              }),
              (d.get = function (t) {
                return this[w.p(t)]();
              }),
              (d.add = function (t, r) {
                var c,
                  _ = this;
                t = Number(t);
                var u = w.p(r),
                  o = function (e) {
                    var s = $(_);
                    return w.w(s.date(s.date() + Math.round(e * t)), _);
                  };
                if (u === a) return this.set(a, this.$M + t);
                if (u === l) return this.set(l, this.$y + t);
                if ("day" === u) return o(1);
                if (u === i) return o(7);
                var h =
                    (((c = {})[s] = 6e4), (c[n] = 36e5), (c[e] = 1e3), c)[u] ||
                    1,
                  d = this.$d.getTime() + t * h;
                return w.w(d, this);
              }),
              (d.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (d.format = function (t) {
                var e = this,
                  s = this.$locale();
                if (!this.isValid()) return s.invalidDate || _;
                var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                  i = w.z(this),
                  a = this.$H,
                  r = this.$m,
                  l = this.$M,
                  c = s.weekdays,
                  u = s.months,
                  h = function (t, s, i, a) {
                    return (t && (t[s] || t(e, n))) || i[s].slice(0, a);
                  },
                  d = function (t) {
                    return w.s(a % 12 || 12, t, "0");
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
                    M: l + 1,
                    MM: w.s(l + 1, 2, "0"),
                    MMM: h(s.monthsShort, l, u, 3),
                    MMMM: h(u, l),
                    D: this.$D,
                    DD: w.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(s.weekdaysMin, this.$W, c, 2),
                    ddd: h(s.weekdaysShort, this.$W, c, 3),
                    dddd: c[this.$W],
                    H: String(a),
                    HH: w.s(a, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: f(a, r, !0),
                    A: f(a, r, !1),
                    m: String(r),
                    mm: w.s(r, 2, "0"),
                    s: String(this.$s),
                    ss: w.s(this.$s, 2, "0"),
                    SSS: w.s(this.$ms, 3, "0"),
                    Z: i,
                  };
                return n.replace(o, function (t, e) {
                  return e || g[t] || i.replace(":", "");
                });
              }),
              (d.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (d.diff = function (t, c, _) {
                var u,
                  o = w.p(c),
                  h = $(t),
                  d = (h.utcOffset() - this.utcOffset()) * 6e4,
                  f = this - h,
                  g = w.m(this, h);
                return (
                  (g =
                    (((u = {})[l] = g / 12),
                    (u[a] = g),
                    (u[r] = g / 3),
                    (u[i] = (f - d) / 6048e5),
                    (u.day = (f - d) / 864e5),
                    (u[n] = f / 36e5),
                    (u[s] = f / 6e4),
                    (u[e] = f / 1e3),
                    u)[o] || f),
                  _ ? g : w.a(g)
                );
              }),
              (d.daysInMonth = function () {
                return this.endOf(a).$D;
              }),
              (d.$locale = function () {
                return f[this.$L];
              }),
              (d.locale = function (t, e) {
                if (!t) return this.$L;
                var s = this.clone(),
                  n = m(t, e, !0);
                return n && (s.$L = n), s;
              }),
              (d.clone = function () {
                return w.w(this.$d, this);
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
          x = v.prototype;
        return (
          ($.prototype = x),
          [
            ["$ms", t],
            ["$s", e],
            ["$m", s],
            ["$H", n],
            ["$W", "day"],
            ["$M", a],
            ["$y", l],
            ["$D", c],
          ].forEach(function (t) {
            x[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          ($.extend = function (t, e) {
            return t.$i || (t(e, v, $), (t.$i = !0)), $;
          }),
          ($.locale = m),
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
]);
