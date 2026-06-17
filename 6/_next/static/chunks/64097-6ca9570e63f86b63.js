"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [64097],
  {
    732: (e, s, t) => {
      t.d(s, { D: () => l });
      let l = (0, t(44922).createContext)("");
    },
    64097: (e, s, t) => {
      t.d(s, { A: () => p });
      var l = t(66162),
        a = t(66833),
        i = t(14376),
        n = t.n(i),
        c = t(56709),
        r = t.n(c),
        d = t(69996),
        o = t(44922),
        h = t(77290),
        u = t(64464),
        m = t(69505),
        g = t(732),
        x = t(38672),
        j = t.n(x);
      let p = (e) => {
        let { banner: s } = e,
          { t, lang: i } = (0, d.A)("column"),
          c = (0, d.A)("common"),
          x = (0, d.A)("index"),
          p = void 0,
          y = (0, a.useRouter)(),
          [_, N] = (0, o.useState)(),
          [v, f] = (0, o.useState)(),
          [w, S] = (0, o.useState)(5),
          z = (0, o.useContext)(m.g),
          k = (0, o.useContext)(g.D).latest_news_list,
          Y = [""],
          M = y.query.category ? String(y.query.category) : "",
          b = Y.indexOf(M) > -1 ? Y.indexOf(M) : 0,
          D = Y[b],
          [T, A] = (0, o.useState)(D),
          C = y.query.page ? Number(y.query.page) : 1,
          [I, U] = (0, o.useState)(C),
          G = z.max_page,
          H = Math.ceil(z.total_num / G),
          L = z.column_list;
        function P(e, s) {
          return {
            link: e.externalUrl
              ? e.externalUrl
              : "/".concat(s, "/detail/").concat(e.slug),
            target: e.externalUrl ? "_blank" : "",
          };
        }
        function q(e, s) {
          return e.includes("Scenario Team")
            ? "wtm_resident"
            : e.includes("おせったい")
            ? "wtm_resident2"
            : e.includes("かわらそば")
            ? "wtm_resident3"
            : e.includes("Effects Team")
            ? "effect_secret"
            : e.includes("UI Team")
            ? "ui_diary"
            : e.includes("Sound Team")
            ? "sound_diary"
            : e.includes("Sanko, Planning Team")
            ? "wt_battle"
            : e.includes("Yoshi")
            ? "wt_battle2"
            : e.includes("かげっち")
            ? "fgc"
            : e.includes("ライティングチーム")
            ? "lighting"
            : e.includes("Guest")
            ? "guest"
            : e.includes("sf6team")
            ? "sf6team"
            : e.includes("SF6 PR")
            ? "sf6_pr"
            : s;
        }
        return (
          (0, o.useEffect)(() => {
            let e = y.asPath,
              s = e.includes("1");
            "/column/all/1" === e
              ? (N(!0), f(!0), S(5))
              : s
              ? (N(!1), f(!0), S(1))
              : (N(!1), f(!1), S(0));
          }, []),
          (0, l.jsxs)("article", {
            className: j().column,
            children: [
              v
                ? (0, l.jsx)("section", {
                    className: j().column__list,
                    children: (0, l.jsxs)("div", {
                      className: j().content__top,
                      children: [
                        (0, l.jsx)("p", {
                          className: j().attention,
                          children: t("[t]column__attention"),
                        }),
                        (0, l.jsx)("ul", {
                          children: L.slice(0, 1).map((e, s) => {
                            if (!e) return;
                            let t = P(e, "column"),
                              a = q(e.author, e.categorySlug);
                            return (0, l.jsx)(
                              "li",
                              {
                                className: j()[e.categorySlug],
                                children: (0, l.jsxs)(n(), {
                                  href: t.link,
                                  target: t.target,
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: j().image,
                                      children: e.eyecatch
                                        ? (0, l.jsx)(r(), {
                                            src: e.eyecatch
                                              ? e.eyecatch
                                              : "/6/assets/images/news/blank.jpg",
                                            width: "913",
                                            height: "507",
                                            layout: "responsive",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          })
                                        : null,
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: j().textArea,
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: ""
                                            .concat(j().category, " ")
                                            .concat(j()[e.categorySlug]),
                                          children: [
                                            (0, l.jsx)("div", {
                                              children: (0, l.jsx)(r(), {
                                                src: "/6/assets/images/column/icon/".concat(
                                                  e.categorySlug,
                                                  ".jpg"
                                                ),
                                                width: "68",
                                                height: "68",
                                                layout: "responsive",
                                                alt: "",
                                                loading: "lazy",
                                                unoptimized: !0,
                                              }),
                                            }),
                                            (0, l.jsx)("p", {
                                              children: e.category,
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)("p", {
                                          className: j().date,
                                          children: (0, h.Gl)(
                                            e.releaseDate,
                                            c.t("[t]YYYY/MM/DD"),
                                            p
                                          ),
                                        }),
                                        (0, l.jsx)("h3", {
                                          className: j().title,
                                          dangerouslySetInnerHTML: {
                                            __html: e.title,
                                          },
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: j().author,
                                          children: [
                                            (0, l.jsx)("div", {
                                              children: (0, l.jsx)(r(), {
                                                src: "/6/assets/images/column/author/".concat(
                                                  a,
                                                  ".png"
                                                ),
                                                width: "190",
                                                height: "190",
                                                layout: "responsive",
                                                alt: e.category,
                                                loading: "lazy",
                                                unoptimized: !0,
                                              }),
                                            }),
                                            (0, l.jsx)("p", {
                                              children: e.author,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              "column".concat(s)
                            );
                          }),
                        }),
                      ],
                    }),
                  })
                : "",
              _
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("section", {
                        className: j().column__list,
                        children: (0, l.jsxs)("div", {
                          className: j().content__sub,
                          children: [
                            (0, l.jsx)("ul", {
                              children: L.slice(1, 5).map((e, s) => {
                                if (!e) return;
                                let t = P(e, "column"),
                                  a = q(e.author, e.categorySlug);
                                return (0, l.jsx)(
                                  "li",
                                  {
                                    className: j()[e.categorySlug],
                                    children: (0, l.jsxs)(n(), {
                                      href: t.link,
                                      target: t.target,
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: j().image,
                                          children: (0, l.jsx)(r(), {
                                            src: e.eyecatch
                                              ? e.eyecatch
                                              : "/6/assets/images/column/blank.jpg",
                                            width: "913",
                                            height: "507",
                                            layout: "responsive",
                                            alt: e.seoTitle,
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: j().textArea,
                                          children: [
                                            (0, l.jsxs)("div", {
                                              className: j().category,
                                              children: [
                                                (0, l.jsx)("div", {
                                                  children: (0, l.jsx)(r(), {
                                                    src: "/6/assets/images/column/icon/".concat(
                                                      e.categorySlug,
                                                      ".jpg"
                                                    ),
                                                    width: "68",
                                                    height: "68",
                                                    layout: "responsive",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, l.jsx)("p", {
                                                  children: e.category,
                                                }),
                                              ],
                                            }),
                                            (0, l.jsx)("p", {
                                              className: j().date,
                                              children: (0, h.Gl)(
                                                e.releaseDate,
                                                c.t("[t]YYYY/MM/DD"),
                                                p
                                              ),
                                            }),
                                            (0, l.jsx)("h3", {
                                              className: j().title,
                                              dangerouslySetInnerHTML: {
                                                __html: e.title,
                                              },
                                            }),
                                            (0, l.jsx)("h3", {
                                              className: j().title__sp,
                                              dangerouslySetInnerHTML: {
                                                __html: e.title,
                                              },
                                            }),
                                            (0, l.jsxs)("div", {
                                              className: j().author,
                                              children: [
                                                (0, l.jsx)("div", {
                                                  children: (0, l.jsx)(r(), {
                                                    src: "/6/assets/images/column/author/".concat(
                                                      a,
                                                      ".png"
                                                    ),
                                                    width: "190",
                                                    height: "190",
                                                    layout: "responsive",
                                                    alt: e.category,
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                "sf6team" === e.author
                                                  ? (0, l.jsx)("p", {
                                                      children: "Guest",
                                                    })
                                                  : (0, l.jsx)("p", {
                                                      children: e.author,
                                                    }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  "column".concat(s)
                                );
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: j().special,
                              children: [
                                (0, l.jsx)("div", {
                                  className: j().titleArea,
                                  children: (0, l.jsx)("h4", {
                                    children: t("[t]column__subTitle"),
                                  }),
                                }),
                                (0, l.jsx)("ul", {
                                  children: s.map((e, s) => {
                                    let t = e.externalUrl.indexOf("https");
                                    return (
                                      (t =
                                        t >= 0
                                          ? t
                                          : e.externalUrl.indexOf("/6/")),
                                      (0, l.jsx)(
                                        "li",
                                        {
                                          children:
                                            t >= 0
                                              ? (0, l.jsx)("a", {
                                                  href: e.externalUrl,
                                                  target:
                                                    t >= 0 ? "_blank" : "",
                                                  children: (0, l.jsx)("div", {
                                                    className: j().image,
                                                    children: (0, l.jsx)(r(), {
                                                      src: e.eyecatch,
                                                      width: "640",
                                                      height: "640",
                                                      layout: "responsive",
                                                      alt: e.title,
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                })
                                              : (0, l.jsx)(n(), {
                                                  href: e.externalUrl,
                                                  children: (0, l.jsx)("div", {
                                                    className: j().image,
                                                    children: (0, l.jsx)(r(), {
                                                      src: e.eyecatch,
                                                      width: "640",
                                                      height: "640",
                                                      layout: "responsive",
                                                      alt: e.title,
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                }),
                                        },
                                        "banner".concat(s)
                                      )
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("article", {
                        className: j().column__news,
                        children: (0, l.jsxs)("section", {
                          className: j().list,
                          children: [
                            (0, l.jsxs)("div", {
                              className: j().titleArea,
                              children: [
                                (0, l.jsx)("h2", {
                                  children: x.t("[t]news__title"),
                                }),
                                (0, l.jsx)("div", {
                                  className: j().link,
                                  children: (0, l.jsx)(n(), {
                                    href: "/news/all/1",
                                    children: c.t("[t]more"),
                                  }),
                                }),
                              ],
                            }),
                            (0, l.jsx)("ul", {
                              children: k.map((e, s) => {
                                if (!e) return;
                                let t = P(e, "news");
                                return (0, l.jsx)(
                                  "li",
                                  {
                                    className: j()[e.categorySlug],
                                    children: (0, l.jsxs)(n(), {
                                      href: t.link,
                                      target: t.target,
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: j().image,
                                          children: (0, l.jsx)(r(), {
                                            src: e.eyecatch
                                              ? e.eyecatch
                                              : "/6/assets/images/news/blank.jpg",
                                            width: "292",
                                            height: "292",
                                            layout: "responsive",
                                            alt: e.seoTitle,
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: j().textArea,
                                          children: [
                                            (0, l.jsx)("h3", {
                                              className: j().title,
                                              dangerouslySetInnerHTML: {
                                                __html: e.title,
                                              },
                                            }),
                                            (0, l.jsxs)("dl", {
                                              className: j().info,
                                              children: [
                                                (0, l.jsx)("dt", {
                                                  children: e.category,
                                                }),
                                                (0, l.jsx)("dd", {
                                                  children: (0, h.Gl)(
                                                    e.releaseDate,
                                                    c.t("[t]YYYY/MM/DD"),
                                                    p
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  "all".concat(s)
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("article", {
                        className: j().column__news__sp,
                        children: (0, l.jsxs)("section", {
                          className: j().list,
                          children: [
                            (0, l.jsx)("div", {
                              className: j().titleArea,
                              children: (0, l.jsx)("h2", {
                                children: x.t("[t]news__title"),
                              }),
                            }),
                            (0, l.jsx)("ul", {
                              children: k.map((e, s) => {
                                if (!e) return;
                                let t = P(e, "news");
                                return (0, l.jsx)(
                                  "li",
                                  {
                                    className: j()[e.categorySlug],
                                    children: (0, l.jsxs)(n(), {
                                      href: t.link,
                                      target: t.target,
                                      children: [
                                        (0, l.jsxs)("div", {
                                          className: j().textArea,
                                          children: [
                                            (0, l.jsxs)("dl", {
                                              className: j().info,
                                              children: [
                                                (0, l.jsx)("dd", {
                                                  children: (0, h.Gl)(
                                                    e.releaseDate,
                                                    c.t("[t]YYYY/MM/DD"),
                                                    p
                                                  ),
                                                }),
                                                (0, l.jsx)("dt", {
                                                  children: e.category,
                                                }),
                                              ],
                                            }),
                                            (0, l.jsx)("h3", {
                                              className: j().title,
                                              dangerouslySetInnerHTML: {
                                                __html: e.title,
                                              },
                                            }),
                                          ],
                                        }),
                                        (0, l.jsx)("div", {
                                          className: j().image,
                                          children: (0, l.jsx)(r(), {
                                            src: e.eyecatch
                                              ? e.eyecatch
                                              : "/6/assets/images/news/blank.jpg",
                                            width: "292",
                                            height: "292",
                                            layout: "responsive",
                                            alt: e.seoTitle,
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  "all".concat(s)
                                );
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: j().link,
                              children: (0, l.jsx)(n(), {
                                href: "/news/all/1",
                                children: c.t("[t]more"),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : "",
              (0, l.jsx)("section", {
                className: j().column__list,
                children: (0, l.jsx)("div", {
                  className: j().content__usual,
                  children: (0, l.jsx)("ul", {
                    children: L.slice(w, 10).map((e, s) => {
                      if (!e) return;
                      let t = P(e, "column"),
                        a = q(e.author, e.categorySlug);
                      return (0, l.jsx)(
                        "li",
                        {
                          className: j()[e.categorySlug],
                          children: (0, l.jsxs)(n(), {
                            href: t.link,
                            target: t.target,
                            children: [
                              (0, l.jsx)("div", {
                                className: j().image,
                                children: e.eyecatch
                                  ? (0, l.jsx)(r(), {
                                      src: e.eyecatch,
                                      width: "292",
                                      height: "165",
                                      layout: "responsive",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    })
                                  : null,
                              }),
                              (0, l.jsxs)("div", {
                                className: j().textArea,
                                children: [
                                  (0, l.jsxs)("div", {
                                    className: j().category,
                                    children: [
                                      (0, l.jsx)("div", {
                                        children: (0, l.jsx)(r(), {
                                          src: "/6/assets/images/column/icon/".concat(
                                            e.categorySlug,
                                            ".jpg"
                                          ),
                                          width: "68",
                                          height: "68",
                                          layout: "responsive",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, l.jsx)("p", { children: e.category }),
                                    ],
                                  }),
                                  (0, l.jsx)("p", {
                                    className: j().date,
                                    children: (0, h.Gl)(
                                      e.releaseDate,
                                      c.t("[t]YYYY/MM/DD"),
                                      p
                                    ),
                                  }),
                                  (0, l.jsx)("h3", {
                                    className: j().title,
                                    dangerouslySetInnerHTML: {
                                      __html: e.title,
                                    },
                                  }),
                                  (0, l.jsx)("h3", {
                                    className: j().title__sp,
                                    dangerouslySetInnerHTML: {
                                      __html: e.title,
                                    },
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: j().author,
                                    children: [
                                      (0, l.jsx)("div", {
                                        children: (0, l.jsx)(r(), {
                                          src: "/6/assets/images/column/author/".concat(
                                            a,
                                            ".png"
                                          ),
                                          width: "190",
                                          height: "190",
                                          layout: "responsive",
                                          alt: e.category,
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, l.jsx)("p", { children: e.author }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        "column".concat(s)
                      );
                    }),
                  }),
                }),
              }),
              (0, l.jsx)("section", {
                className: j().column__pagination,
                children:
                  L.length > 0 &&
                  (0, l.jsx)(u.A, {
                    currentPage: I,
                    totalItems: z.total_num,
                    perPage: H,
                    changePage: (e) => {
                      let s = y.pathname;
                      y.push({ pathname: s, query: { ...y.query, page: e } }),
                        U(e);
                      let t = s.includes("all");
                      t && 1 === e
                        ? (N(!0), f(!0), S(5))
                        : t || 1 !== e
                        ? (N(!1), f(!1), S(0))
                        : (N(!1), f(!0), S(1));
                    },
                  }),
              }),
            ],
          })
        );
      };
    },
    64464: (e, s, t) => {
      t.d(s, { A: () => i });
      var l = t(66162),
        a = t(66833);
      let i = (e) => {
        let {
            currentPage: s = 1,
            totalItems: t = 1,
            perPage: i = 5,
            changePage: n,
            toTop: c = "wrapper",
          } = e,
          r = encodeURI((0, a.useRouter)().asPath.split("/")[1]),
          d = Math.ceil(t / i);
        if (d <= 1) return (0, l.jsx)(l.Fragment, {});
        let o = Math.floor(3.5),
          h = 1,
          u = 7,
          m = (() => {
            d > 7
              ? ((h = s - o),
                (u = s + o),
                h < 1 && ((h = 1), (u = 7)),
                u > d && ((u = d), (h = d - 6)))
              : ((h = 1), (u = d));
            let e = [];
            for (let t = h; t <= u; t++)
              t === s
                ? e.push(
                    (0, l.jsx)(
                      "li",
                      { className: "active", children: t },
                      "page".concat(t)
                    )
                  )
                : e.push(
                    (0, l.jsx)(
                      "li",
                      {
                        onClick: () => {
                          n(t), g();
                        },
                        children: t,
                      },
                      "page".concat(t)
                    )
                  );
            return e;
          })(),
          g = () => {
            let e = document.getElementById(c).getBoundingClientRect().top,
              s = window.pageYOffset + e;
            window.scroll({ top: s, behavior: "smooth" });
          };
        return (0, l.jsxs)("ul", {
          className: "pagination ".concat(r),
          children: [
            (0, l.jsx)("li", {
              className: "first ".concat(1 === s ? "disabled" : ""),
              onClick: () => {
                n(1), g();
              },
            }),
            (0, l.jsx)("li", {
              className: "prev ".concat(1 === s ? "disabled" : ""),
              onClick: () => {
                n(s - 1), g();
              },
            }),
            m,
            (0, l.jsx)("li", {
              className: "next ".concat(s === d ? "disabled" : ""),
              onClick: () => {
                n(s + 1), g();
              },
            }),
            (0, l.jsx)("li", {
              className: "last ".concat(s === d ? "disabled" : ""),
              onClick: () => {
                n(d), g();
              },
            }),
          ],
        });
      };
    },
  },
]);
