(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94172],
  {
    4298: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "minute",
          e = /[+-]\d\d(?::?\d\d)?/g,
          n = /([+-]|\d\d)/g;
        return function (i, s, _) {
          var a = s.prototype;
          (_.utc = function (t) {
            var e = { date: t, utc: !0, args: arguments };
            return new s(e);
          }),
            (a.utc = function (e) {
              var n = _(this.toDate(), { locale: this.$L, utc: !0 });
              return e ? n.add(this.utcOffset(), t) : n;
            }),
            (a.local = function () {
              return _(this.toDate(), { locale: this.$L, utc: !1 });
            });
          var r = a.parse;
          a.parse = function (t) {
            t.utc && (this.$u = !0),
              this.$utils().u(t.$offset) || (this.$offset = t.$offset),
              r.call(this, t);
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
          a.utcOffset = function (i, s) {
            var _ = this.$utils().u;
            if (_(i))
              return this.$u
                ? 0
                : _(this.$offset)
                ? c.call(this)
                : this.$offset;
            if (
              "string" == typeof i &&
              null ===
                (i = (function (t) {
                  void 0 === t && (t = "");
                  var i = t.match(e);
                  if (!i) return null;
                  var s = ("" + i[0]).match(n) || ["-", 0, 0],
                    _ = s[0],
                    a = 60 * s[1] + +s[2];
                  return 0 === a ? 0 : "+" === _ ? a : -a;
                })(i))
            )
              return this;
            var a = 16 >= Math.abs(i) ? 60 * i : i,
              r = this;
            if (s) return (r.$offset = a), (r.$u = 0 === i), r;
            if (0 !== i) {
              var l = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              ((r = this.local().add(a + l, t)).$offset = a),
                (r.$x.$localOffset = l);
            } else r = this.utc();
            return r;
          };
          var o = a.format;
          (a.format = function (t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return o.call(this, e);
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
          var u = a.toDate;
          a.toDate = function (t) {
            return "s" === t && this.$offset
              ? _(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
              : u.call(this);
          };
          var h = a.diff;
          a.diff = function (t, e, n) {
            if (t && this.$u === t.$u) return h.call(this, t, e, n);
            var i = this.local(),
              s = _(t).local();
            return h.call(i, s, e, n);
          };
        };
      })();
    },
    9511: (t) => {
      t.exports = {
        headtab: "heading_headtab__PYg_L",
        inner: "heading_inner__KUhLw",
        current: "heading_current__7Eyqw",
        heading: "heading_heading__qyktR",
        titleText: "heading_titleText__bOzM8",
        title: "heading_title__gtGcN",
        title__ja: "heading_title__ja__n78q5",
        heading__columnTabs: "heading_heading__columnTabs__1ybXE",
        categoryList: "heading_categoryList__1mvgr",
        all: "heading_all__dETgJ",
        categoryList__back: "heading_categoryList__back__i1DjE",
        categoryList__open: "heading_categoryList__open__tgDC5",
        openBtn: "heading_openBtn__Zcytc",
        heading__columnTabs2: "heading_heading__columnTabs2__V3y7G",
        arrow: "heading_arrow___uSU8",
        link: "heading_link__F8Kfr",
        heading__detail: "heading_heading__detail__geMOY",
        blink: "heading_blink__RWSxg",
      };
    },
    14603: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => f });
      var i = n(66162),
        s = n(66833),
        _ = n(14376),
        a = n.n(_),
        r = n(56709),
        l = n.n(r),
        c = n(69996),
        o = n(44922),
        u = n(9511),
        h = n.n(u),
        d = n(69505);
      let f = () => {
        let { t, lang: e } = (0, c.A)("column");
        (0, c.A)("common");
        let n = (0, s.useRouter)(),
          _ = encodeURI(n.asPath),
          r = (0, o.useContext)(d.g).column,
          u = [];
        u =
          "ja-jp" === e
            ? [
                "wtm_resident",
                "effect_secret",
                "ui_diary",
                "sound_diary",
                "wt_battle",
                "fgc",
                "lighting",
                "guest",
                "sf6_pr",
                "data",
              ]
            : [
                "wtm_resident",
                "effect_secret",
                "ui_diary",
                "sound_diary",
                "wt_battle",
                "guest",
                "sf6_pr",
              ];
        let f = n.query.category ? String(n.query.category) : "",
          m = u.indexOf(f) > -1 ? u.indexOf(f) : 0,
          g = _.includes("/detail/") ? r.categorySlug : u[m],
          [$, p] = (0, o.useState)(!1),
          y = () => {
            p(!$);
          },
          v = _.includes("/detail/")
            ? "".concat(h().heading, " ").concat(h().heading__detail)
            : h().heading;
        return (0, i.jsx)("article", {
          className: v,
          children: (0, i.jsxs)("div", {
            className: h().inner,
            children: [
              (0, i.jsxs)("h1", {
                children: [
                  (0, i.jsx)("span", {
                    className: h().titleText,
                    children:
                      "ja-jp" === e
                        ? t("[t]title__page__ja")
                        : t("[t]title__page"),
                  }),
                  (0, i.jsx)("span", { className: h().title }),
                  "ja-jp" == e &&
                    (0, i.jsx)("span", { className: h().title__ja }),
                ],
              }),
              (0, i.jsxs)("aside", {
                className: h().heading__columnTabs,
                children: [
                  _.includes("all")
                    ? (0, i.jsx)("h2", { children: t("[t]column__tab__all") })
                    : (0, i.jsx)("h2", {
                        children: t("[t]column__tab__".concat(g)),
                      }),
                  (0, i.jsx)("div", {
                    className: h().categoryList,
                    children: (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          className: h().all,
                          children: (0, i.jsx)(a(), {
                            href: "/column/all/1",
                            children: t("[t]column__tab__all"),
                          }),
                        }),
                        u.map((t, e) =>
                          (0, i.jsx)(
                            "li",
                            {
                              children: (0, i.jsx)(a(), {
                                href: "/column/".concat(t, "/1"),
                                className: h()[t],
                                children: (0, i.jsx)(l(), {
                                  src: "/6/assets/images/column/icon/".concat(
                                    t,
                                    ".jpg"
                                  ),
                                  width: "60",
                                  height: "60",
                                  layout: "responsive",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            },
                            e
                          )
                        ),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("aside", {
                className: h().heading__columnTabs2,
                children: [
                  (0, i.jsxs)("div", {
                    className: h().openBtn,
                    onClick: y,
                    children: [
                      _.includes("all")
                        ? (0, i.jsx)("h2", {
                            children: t("[t]column__tab__all"),
                          })
                        : (0, i.jsx)("h2", {
                            children: t("[t]column__tab__".concat(g)),
                          }),
                      (0, i.jsx)("div", { className: h().arrow }),
                    ],
                  }),
                  $ &&
                    (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)("div", {
                          className: h().categoryList__back,
                          onClick: y,
                        }),
                        (0, i.jsxs)("ul", {
                          className: h().categoryList__open,
                          children: [
                            (0, i.jsx)("li", {
                              className: h().all,
                              children: (0, i.jsx)(a(), {
                                href: "/column/all/1",
                                onClick: y,
                                children: t("[t]column__tab__all"),
                              }),
                            }),
                            u.map((e, n) =>
                              (0, i.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, i.jsx)(a(), {
                                      href: "/column/".concat(e, "/1"),
                                      className: h().link,
                                      onClick: y,
                                      children: (0, i.jsx)(l(), {
                                        src: "/6/assets/images/column/icon/".concat(
                                          e,
                                          ".jpg"
                                        ),
                                        width: "165",
                                        height: "165",
                                        layout: "responsive",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      }),
                                    }),
                                    (0, i.jsx)(a(), {
                                      href: "/column/".concat(e, "/1"),
                                      onClick: y,
                                      children: (0, i.jsx)("p", {
                                        children: t(
                                          "[t]column__tab__".concat(e)
                                        ),
                                      }),
                                    }),
                                  ],
                                },
                                n
                              )
                            ),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    38672: (t) => {
      t.exports = {
        column: "column_list_column__zuFhk",
        author: "column_list_author__y3_I4",
        date: "column_list_date__5ocxK",
        column__list: "column_list_column__list__WtQm8",
        image: "column_list_image__KL96i",
        textArea: "column_list_textArea__oDPMw",
        category: "column_list_category__2SZAK",
        title: "column_list_title__MDEfI",
        title__sp: "column_list_title__sp__JHoOp",
        content__top: "column_list_content__top__GBoQD",
        attention: "column_list_attention__iJrIE",
        content__sub: "column_list_content__sub__cG_52",
        special: "column_list_special__osx_7",
        titleArea: "column_list_titleArea__qmbEs",
        content__usual: "column_list_content__usual__n4bvN",
        column__news: "column_list_column__news__ap7xn",
        list: "column_list_list__p_H8v",
        link: "column_list_link__oaCus",
        info: "column_list_info__Mm1pX",
        new: "column_list_new__HC_TA",
        news__list__item__info: "column_list_news__list__item__info__YL_J3",
        blink: "column_list_blink__LMj1Q",
        column__news__sp: "column_list_column__news__sp__He581",
        column__pagination: "column_list_column__pagination__Mxcal",
        column__detail: "column_list_column__detail__TpQPI",
        wtm_resident: "column_list_wtm_resident__ARb_s",
        effect_secret: "column_list_effect_secret__jJOpO",
        ui_diary: "column_list_ui_diary___t8jB",
        sound_diary: "column_list_sound_diary__v6EOw",
        wt_battle: "column_list_wt_battle__THIbH",
        sf_goods: "column_list_sf_goods__HF5Hh",
        fgc: "column_list_fgc__WOmDX",
        lighting: "column_list_lighting__Cl6F0",
        guest: "column_list_guest__sc1_O",
        sf6_pr: "column_list_sf6_pr__I1lnM",
        data: "column_list_data__mj2r1",
        snsArea: "column_list_snsArea__RM_dH",
        x: "column_list_x__JDl0G",
        facebook: "column_list_facebook___LBxV",
        reddit: "column_list_reddit__BMlyz",
        column__detail__article: "column_list_column__detail__article__b9Wqh",
        column__detail__article__content:
          "column_list_column__detail__article__content__B_fa6",
        area__category: "column_list_area__category__iEPan",
        icon: "column_list_icon__mrw1K",
        text: "column_list_text__B4wU_",
        area__title: "column_list_area__title__w5fWR",
        area__topImage: "column_list_area__topImage__vIDua",
        area__detail: "column_list_area__detail__Pr8za",
        detailArea: "column_list_detailArea__XtFfk",
        area__body: "column_list_area__body__PE7bL",
        area__author: "column_list_area__author__tv6Pg",
        edit: "column_list_edit__IWLPq",
        name: "column_list_name__F88BN",
        area__sns: "column_list_area__sns__I5gz2",
        column__detail__article__postLink:
          "column_list_column__detail__article__postLink__oKN1X",
        detail: "column_list_detail__BTmUM",
        prev: "column_list_prev__zI41Y",
        next: "column_list_next__i29Ic",
        column__detail__article__categoryList:
          "column_list_column__detail__article__categoryList__mlC_n",
        topTitle: "column_list_topTitle__RW1m6",
        column__detail__sideList: "column_list_column__detail__sideList__1U2xH",
      };
    },
    50158: (t, e, n) => {
      "use strict";
      n.d(e, { A: () => u });
      var i = n(66162),
        s = n(14376),
        _ = n.n(s),
        a = n(66833),
        r = n(69996),
        l = n(9511),
        c = n.n(l),
        o = n(47573);
      let u = () => {
        let { t, lang: e } = (0, r.A)("column"),
          n = (0, r.A)("news"),
          s = encodeURI((0, a.useRouter)().asPath),
          l = (() => {
            switch (e) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, i.jsx)(o.fj, {});
              case "fr":
                return (0, i.jsx)(o.On, {});
              case "it":
                return (0, i.jsx)(o.Pc, {});
              case "de":
                return (0, i.jsx)(o.Jg, {});
              case "es-es":
                return (0, i.jsx)(o._$, {});
              case "es-us":
                return (0, i.jsx)(o.iz, {});
              case "pt-br":
                return (0, i.jsx)(o.Gj, {});
              default:
                return (0, i.jsx)(o.oO, {});
            }
          })();
        return (0, i.jsx)("article", {
          className: c().headtab,
          children: (0, i.jsxs)("div", {
            className: c().inner,
            children: [
              (0, i.jsx)("h1", { children: l }),
              (0, i.jsxs)("ul", {
                children: [
                  (0, i.jsx)("li", {
                    className: s.match(/news/) ? c().current : "",
                    children: (0, i.jsx)(_(), {
                      href: "/news/all/1",
                      children: n.t("[t]news__tab__news"),
                    }),
                  }),
                  (0, i.jsx)("li", {
                    className: s.match(/column/) ? c().current : "",
                    children: (0, i.jsx)(_(), {
                      href: "/column/all/1",
                      children: n.t("[t]news__tab__column"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    69505: (t, e, n) => {
      "use strict";
      n.d(e, { g: () => i });
      let i = (0, n(44922).createContext)("");
    },
    77290: (t, e, n) => {
      "use strict";
      n.d(e, { Gl: () => r });
      var i = n(82259),
        s = n.n(i),
        _ = n(4298),
        a = n.n(_);
      let r = function (t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD HH:mm:ss",
          n = arguments.length > 2 ? arguments[2] : void 0;
        return (
          s().extend(a()),
          void 0 == n
            ? s()(1e3 * t).format(e)
            : s()(
                s()
                  .utc(1e3 * t)
                  .format("YYYY-MM-DD HH:mm:ss")
              )
                .add(n, "h")
                .format("YYYY-MM-DD HH:mm")
        );
      };
    },
    82259: function (t) {
      t.exports = (function () {
        "use strict";
        var t = "millisecond",
          e = "second",
          n = "minute",
          i = "hour",
          s = "week",
          _ = "month",
          a = "quarter",
          r = "year",
          l = "date",
          c = "Invalid Date",
          o =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          u =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          h = function (t, e, n) {
            var i = String(t);
            return !i || i.length >= e
              ? t
              : "" + Array(e + 1 - i.length).join(n) + t;
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
              n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
          },
        };
        var m = function (t) {
            return t instanceof y;
          },
          g = function t(e, n, i) {
            var s;
            if (!e) return d;
            if ("string" == typeof e) {
              var _ = e.toLowerCase();
              f[_] && (s = _), n && ((f[_] = n), (s = _));
              var a = e.split("-");
              if (!s && a.length > 1) return t(a[0]);
            } else {
              var r = e.name;
              (f[r] = e), (s = r);
            }
            return !i && s && (d = s), s || (!i && d);
          },
          $ = function (t, e) {
            if (m(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return (n.date = t), (n.args = arguments), new y(n);
          },
          p = {
            s: h,
            z: function (t) {
              var e = -t.utcOffset(),
                n = Math.abs(e);
              return (
                (e <= 0 ? "+" : "-") +
                h(Math.floor(n / 60), 2, "0") +
                ":" +
                h(n % 60, 2, "0")
              );
            },
            m: function t(e, n) {
              if (e.date() < n.date()) return -t(n, e);
              var i = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                s = e.clone().add(i, _),
                a = n - s < 0,
                r = e.clone().add(i + (a ? -1 : 1), _);
              return +(-(i + (n - s) / (a ? s - r : r - s)) || 0);
            },
            a: function (t) {
              return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
            },
            p: function (c) {
              return (
                {
                  M: _,
                  y: r,
                  w: s,
                  d: "day",
                  D: l,
                  h: i,
                  m: n,
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
        (p.l = g),
          (p.i = m),
          (p.w = function (t, e) {
            return $(t, {
              locale: e.$L,
              utc: e.$u,
              x: e.$x,
              $offset: e.$offset,
            });
          });
        var y = (function () {
            function h(t) {
              (this.$L = g(t.locale, null, !0)), this.parse(t);
            }
            var d = h.prototype;
            return (
              (d.parse = function (t) {
                (this.$d = (function (t) {
                  var e = t.date,
                    n = t.utc;
                  if (null === e) return new Date(NaN);
                  if (p.u(e)) return new Date();
                  if (e instanceof Date) return new Date(e);
                  if ("string" == typeof e && !/Z$/i.test(e)) {
                    var i = e.match(o);
                    if (i) {
                      var s = i[2] - 1 || 0,
                        _ = (i[7] || "0").substring(0, 3);
                      return n
                        ? new Date(
                            Date.UTC(
                              i[1],
                              s,
                              i[3] || 1,
                              i[4] || 0,
                              i[5] || 0,
                              i[6] || 0,
                              _
                            )
                          )
                        : new Date(
                            i[1],
                            s,
                            i[3] || 1,
                            i[4] || 0,
                            i[5] || 0,
                            i[6] || 0,
                            _
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
                return p;
              }),
              (d.isValid = function () {
                return this.$d.toString() !== c;
              }),
              (d.isSame = function (t, e) {
                var n = $(t);
                return this.startOf(e) <= n && n <= this.endOf(e);
              }),
              (d.isAfter = function (t, e) {
                return $(t) < this.startOf(e);
              }),
              (d.isBefore = function (t, e) {
                return this.endOf(e) < $(t);
              }),
              (d.$g = function (t, e, n) {
                return p.u(t) ? this[e] : this.set(n, t);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (t, a) {
                var c = this,
                  o = !!p.u(a) || a,
                  u = p.p(t),
                  h = function (t, e) {
                    var n = p.w(
                      c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t),
                      c
                    );
                    return o ? n : n.endOf("day");
                  },
                  d = function (t, e) {
                    return p.w(
                      c
                        .toDate()
                        [t].apply(
                          c.toDate("s"),
                          (o ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                        ),
                      c
                    );
                  },
                  f = this.$W,
                  m = this.$M,
                  g = this.$D,
                  $ = "set" + (this.$u ? "UTC" : "");
                switch (u) {
                  case r:
                    return o ? h(1, 0) : h(31, 11);
                  case _:
                    return o ? h(1, m) : h(0, m + 1);
                  case s:
                    var y = this.$locale().weekStart || 0,
                      v = (f < y ? f + 7 : f) - y;
                    return h(o ? g - v : g + (6 - v), m);
                  case "day":
                  case l:
                    return d($ + "Hours", 0);
                  case i:
                    return d($ + "Minutes", 1);
                  case n:
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
              (d.$set = function (s, a) {
                var c,
                  o = p.p(s),
                  u = "set" + (this.$u ? "UTC" : ""),
                  h = (((c = {}).day = u + "Date"),
                  (c[l] = u + "Date"),
                  (c[_] = u + "Month"),
                  (c[r] = u + "FullYear"),
                  (c[i] = u + "Hours"),
                  (c[n] = u + "Minutes"),
                  (c[e] = u + "Seconds"),
                  (c[t] = u + "Milliseconds"),
                  c)[o],
                  d = "day" === o ? this.$D + (a - this.$W) : a;
                if (o === _ || o === r) {
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
                return this[p.p(t)]();
              }),
              (d.add = function (t, a) {
                var l,
                  c = this;
                t = Number(t);
                var o = p.p(a),
                  u = function (e) {
                    var n = $(c);
                    return p.w(n.date(n.date() + Math.round(e * t)), c);
                  };
                if (o === _) return this.set(_, this.$M + t);
                if (o === r) return this.set(r, this.$y + t);
                if ("day" === o) return u(1);
                if (o === s) return u(7);
                var h =
                    (((l = {})[n] = 6e4), (l[i] = 36e5), (l[e] = 1e3), l)[o] ||
                    1,
                  d = this.$d.getTime() + t * h;
                return p.w(d, this);
              }),
              (d.subtract = function (t, e) {
                return this.add(-1 * t, e);
              }),
              (d.format = function (t) {
                var e = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || c;
                var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                  s = p.z(this),
                  _ = this.$H,
                  a = this.$m,
                  r = this.$M,
                  l = n.weekdays,
                  o = n.months,
                  h = function (t, n, s, _) {
                    return (t && (t[n] || t(e, i))) || s[n].slice(0, _);
                  },
                  d = function (t) {
                    return p.s(_ % 12 || 12, t, "0");
                  },
                  f =
                    n.meridiem ||
                    function (t, e, n) {
                      var i = t < 12 ? "AM" : "PM";
                      return n ? i.toLowerCase() : i;
                    },
                  m = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: r + 1,
                    MM: p.s(r + 1, 2, "0"),
                    MMM: h(n.monthsShort, r, o, 3),
                    MMMM: h(o, r),
                    D: this.$D,
                    DD: p.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: h(n.weekdaysMin, this.$W, l, 2),
                    ddd: h(n.weekdaysShort, this.$W, l, 3),
                    dddd: l[this.$W],
                    H: String(_),
                    HH: p.s(_, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: f(_, a, !0),
                    A: f(_, a, !1),
                    m: String(a),
                    mm: p.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: p.s(this.$s, 2, "0"),
                    SSS: p.s(this.$ms, 3, "0"),
                    Z: s,
                  };
                return i.replace(u, function (t, e) {
                  return e || m[t] || s.replace(":", "");
                });
              }),
              (d.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (d.diff = function (t, l, c) {
                var o,
                  u = p.p(l),
                  h = $(t),
                  d = (h.utcOffset() - this.utcOffset()) * 6e4,
                  f = this - h,
                  m = p.m(this, h);
                return (
                  (m =
                    (((o = {})[r] = m / 12),
                    (o[_] = m),
                    (o[a] = m / 3),
                    (o[s] = (f - d) / 6048e5),
                    (o.day = (f - d) / 864e5),
                    (o[i] = f / 36e5),
                    (o[n] = f / 6e4),
                    (o[e] = f / 1e3),
                    o)[u] || f),
                  c ? m : p.a(m)
                );
              }),
              (d.daysInMonth = function () {
                return this.endOf(_).$D;
              }),
              (d.$locale = function () {
                return f[this.$L];
              }),
              (d.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(),
                  i = g(t, e, !0);
                return i && (n.$L = i), n;
              }),
              (d.clone = function () {
                return p.w(this.$d, this);
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
          v = y.prototype;
        return (
          ($.prototype = v),
          [
            ["$ms", t],
            ["$s", e],
            ["$m", n],
            ["$H", i],
            ["$W", "day"],
            ["$M", _],
            ["$y", r],
            ["$D", l],
          ].forEach(function (t) {
            v[t[1]] = function (e) {
              return this.$g(e, t[0], t[1]);
            };
          }),
          ($.extend = function (t, e) {
            return t.$i || (t(e, y, $), (t.$i = !0)), $;
          }),
          ($.locale = g),
          ($.isDayjs = m),
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
