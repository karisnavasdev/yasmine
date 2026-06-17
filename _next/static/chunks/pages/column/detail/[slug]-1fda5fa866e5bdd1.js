(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [80446],
  {
    76500: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/column/detail/[slug]",
        function () {
          return t(92795);
        },
      ]);
    },
    92795: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { __N_SSG: () => w, default: () => N });
      var a = t(66162),
        c = t(69996),
        l = t(12350),
        n = t(86130),
        i = t(69505),
        r = t(50158),
        o = t(14603),
        d = t(66833),
        h = t(14376),
        u = t.n(h),
        m = t(56709),
        g = t.n(m),
        _ = t(44922),
        x = t(77290),
        j = t(38672),
        p = t.n(j);
      let y = () => {
        let e,
          s,
          t,
          { t: l, lang: n } = (0, c.A)("column"),
          r = (0, c.A)("common");
        (0, c.A)("news");
        let o = (0, _.useRef)(!1),
          h = void 0,
          m = (0, d.useRouter)(),
          j = (0, _.useContext)(i.g),
          y = j.column,
          w = j.recommended,
          N = j.recommended_by_category,
          f = y.nextPost,
          v = y.previousPost;
        function T(e, s) {
          return {
            link: e.externalUrl
              ? e.externalUrl
              : "/".concat(s, "/detail/").concat(e.slug),
            target: e.externalUrl ? "_blank" : "",
          };
        }
        function S(e, s) {
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
          (e = y.author.includes("Scenario Team")
            ? "wtm_resident"
            : y.author.includes("おせったい")
            ? "wtm_resident2"
            : y.author.includes("かわらそば")
            ? "wtm_resident3"
            : y.author.includes("Effects Team")
            ? "effect_secret"
            : y.author.includes("UI Team")
            ? "ui_diary"
            : y.author.includes("Sound Team")
            ? "sound_diary"
            : y.author.includes("Sanko, Planning Team")
            ? "wt_battle"
            : y.author.includes("Yoshi")
            ? "wt_battle2"
            : y.author.includes("かげっち")
            ? "fgc"
            : y.author.includes("ライティングチーム")
            ? "lighting"
            : y.author.includes("Guest")
            ? "guest"
            : y.author.includes("sf6team")
            ? "sf6team"
            : y.author.includes("SF6 PR")
            ? "sf6_pr"
            : y.categorySlug),
          "ja-jp" == n
            ? ((s = y.category.replace(/[ ＼／]/g, "")),
              (t = "#SF6 #スト6 #".concat(s)))
            : ((s = y.category.replace(/[ ,'!]/g, "")),
              (t = "#SF6 #".concat(s))),
          (0, _.useEffect)(() => {
            if (!o.current) {
              o.current = !0;
              let e = y.css,
                s = Function(y.javascript),
                t = document.getElementById("wrapper");
              t &&
                t.insertAdjacentHTML(
                  "beforebegin",
                  "<style>".concat(e, "</style>")
                ),
                s();
            }
          }),
          (0, a.jsx)("article", {
            className: p().column,
            children: (0, a.jsxs)("section", {
              className: ""
                .concat(p().column__detail, " ")
                .concat(p()[y.categorySlug]),
              children: [
                (0, a.jsxs)("div", {
                  className: p().column__detail__article,
                  children: [
                    (0, a.jsxs)("div", {
                      className: p().column__detail__article__content,
                      children: [
                        (0, a.jsxs)("div", {
                          className: p().area__category,
                          children: [
                            (0, a.jsxs)("div", {
                              className: p().icon,
                              children: [
                                (0, a.jsx)("p", {
                                  children: (0, a.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                      __html: l(
                                        "[t]column__detail__".concat(
                                          y.categorySlug
                                        )
                                      ),
                                    },
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  children: (0, a.jsx)(g(), {
                                    src: "/6/assets/images/column/icon/".concat(
                                      y.categorySlug,
                                      ".jpg"
                                    ),
                                    width: "190",
                                    height: "190",
                                    layout: "responsive",
                                    alt: y.category,
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: p().text,
                              children: y.category,
                            }),
                          ],
                        }),
                        (0, a.jsx)("h2", {
                          className: p().area__title,
                          dangerouslySetInnerHTML: { __html: y.title },
                        }),
                        (0, a.jsx)("div", {
                          className: p().area__topImage,
                          children: y.eyecatch
                            ? (0, a.jsx)(g(), {
                                src: y.eyecatch
                                  ? y.eyecatch
                                  : "/6/assets/images/news/blank.png",
                                width: "913",
                                height: "507",
                                layout: "responsive",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              })
                            : null,
                        }),
                        (0, a.jsxs)("div", {
                          className: p().area__detail,
                          children: [
                            (0, a.jsxs)("div", {
                              className: p().detailArea,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: p().author,
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsx)(g(), {
                                        src: "/6/assets/images/column/author/".concat(
                                          e,
                                          ".png"
                                        ),
                                        width: "190",
                                        height: "190",
                                        layout: "responsive",
                                        alt: y.category,
                                        loading: "lazy",
                                        unoptimized: !0,
                                      }),
                                    }),
                                    "sf6team" === y.author
                                      ? (0, a.jsx)("p", { children: "Guest" })
                                      : (0, a.jsx)("p", { children: y.author }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: p().date,
                                  children: (0, x.Gl)(
                                    y.releaseDate,
                                    r.t("[t]YYYY/MM/DD"),
                                    h
                                  ),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("ul", {
                              className: p().snsArea,
                              children: [
                                (0, a.jsx)("li", {
                                  className: p().x,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://x.com/intent/tweet?url=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath, "&text=")
                                      .concat(
                                        encodeURIComponent(
                                          y.seoTitle + "\n" + t + "\n"
                                        )
                                      ),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__1"),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: p().facebook,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://www.facebook.com/sharer/sharer.php?u=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__2"),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: p().reddit,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://www.reddit.com/submit?url=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath, "&text=")
                                      .concat(y.seoTitle),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__1"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: p().area__body,
                          dangerouslySetInnerHTML: { __html: y.body },
                        }),
                        (0, a.jsxs)("div", {
                          className: p().area__author,
                          children: [
                            (0, a.jsx)("div", {
                              className: p().icon,
                              children: (0, a.jsx)(g(), {
                                src: "/6/assets/images/column/author/".concat(
                                  e,
                                  ".png"
                                ),
                                width: "170",
                                height: "170",
                                layout: "responsive",
                                alt: y.category,
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: p().text,
                              children: [
                                (0, a.jsxs)("p", {
                                  className: p().edit,
                                  children: [
                                    "【",
                                    l("[t]column__text__2"),
                                    "】",
                                  ],
                                }),
                                "sf6team" === y.author
                                  ? (0, a.jsx)("p", {
                                      className: p().name,
                                      children: "Guest",
                                    })
                                  : (0, a.jsx)("p", {
                                      className: p().name,
                                      children: y.author,
                                    }),
                                (0, a.jsx)("p", {
                                  dangerouslySetInnerHTML: {
                                    __html: l("[t]column__author__".concat(e)),
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: p().area__sns,
                          children: [
                            (0, a.jsx)("h4", {
                              children: l("[t]column__text__1"),
                            }),
                            (0, a.jsxs)("ul", {
                              className: p().snsArea,
                              children: [
                                (0, a.jsx)("li", {
                                  className: p().x,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://x.com/intent/tweet?url=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath, "&text=")
                                      .concat(
                                        encodeURIComponent(
                                          y.seoTitle + "\n" + t + "\n"
                                        )
                                      ),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__1"),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: p().facebook,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://www.facebook.com/sharer/sharer.php?u=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__2"),
                                    }),
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: p().reddit,
                                  children: (0, a.jsx)(u(), {
                                    href: "https://www.reddit.com/submit?url=https://www.streetfighter.com/6/"
                                      .concat(n)
                                      .concat(m.asPath, "&text=")
                                      .concat(y.seoTitle),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, a.jsx)("span", {
                                      children: l("[t]column__snsText__1"),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    v || f
                      ? (0, a.jsxs)("ul", {
                          className: p().column__detail__article__postLink,
                          children: [
                            (0, a.jsx)("li", {
                              className: p().prev,
                              children:
                                v &&
                                (0, a.jsxs)(u(), {
                                  href: "/column/detail/".concat(v.slug),
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className: p().title,
                                      dangerouslySetInnerHTML: {
                                        __html: v.title,
                                      },
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: p().detail,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: p().icon,
                                          children: (0, a.jsx)(g(), {
                                            src: "/6/assets/images/column/icon/".concat(
                                              v.category_slug,
                                              ".jpg"
                                            ),
                                            width: "190",
                                            height: "190",
                                            layout: "responsive",
                                            alt: v.category,
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: p().category,
                                          children: v.category,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                            (0, a.jsx)("li", {
                              className: p().next,
                              children:
                                f &&
                                (0, a.jsxs)(u(), {
                                  href: "/column/detail/".concat(f.slug),
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className: p().title,
                                      dangerouslySetInnerHTML: {
                                        __html: f.title,
                                      },
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: p().detail,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: p().icon,
                                          children: (0, a.jsx)(g(), {
                                            src: "/6/assets/images/column/icon/".concat(
                                              f.category_slug,
                                              ".jpg"
                                            ),
                                            width: "190",
                                            height: "190",
                                            layout: "responsive",
                                            alt: f.category,
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, a.jsx)("p", {
                                          className: p().category,
                                          children: f.category,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        })
                      : "",
                    (0, a.jsxs)("div", {
                      className: p().column__detail__article__categoryList,
                      children: [
                        (0, a.jsx)("div", {
                          className: p().topTitle,
                          children: (0, a.jsxs)("h3", {
                            children: [
                              (0, a.jsxs)("span", {
                                children: ["「", y.category, "」"],
                              }),
                              (0, a.jsx)("span", {
                                children: l("[t]column__text__4"),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("ul", {
                          children: N.slice(0, 6).map((e, s) => {
                            if (!e) return;
                            let t = T(e, "column"),
                              c = S(e.author, e.categorySlug);
                            return (0, a.jsx)(
                              "li",
                              {
                                className: p()[e.categorySlug],
                                children: (0, a.jsxs)(u(), {
                                  href: t.link,
                                  target: t.target,
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: p().image,
                                      children: (0, a.jsx)(g(), {
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
                                    (0, a.jsxs)("div", {
                                      className: p().textArea,
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className: p().category,
                                          children: [
                                            (0, a.jsx)("div", {
                                              children: (0, a.jsx)(g(), {
                                                src: "/6/assets/images/column/icon/".concat(
                                                  e.categorySlug,
                                                  ".jpg"
                                                ),
                                                width: "312",
                                                height: "174",
                                                layout: "responsive",
                                                alt: "",
                                                loading: "lazy",
                                                unoptimized: !0,
                                              }),
                                            }),
                                            (0, a.jsx)("p", {
                                              children: e.category,
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("p", {
                                          className: p().date,
                                          children: (0, x.Gl)(
                                            e.releaseDate,
                                            r.t("[t]YYYY/MM/DD"),
                                            h
                                          ),
                                        }),
                                        (0, a.jsx)("h3", {
                                          className: p().title,
                                          dangerouslySetInnerHTML: {
                                            __html: e.title,
                                          },
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: p().author,
                                          children: [
                                            (0, a.jsx)("div", {
                                              children: (0, a.jsx)(g(), {
                                                src: "/6/assets/images/column/author/".concat(
                                                  c,
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
                                              ? (0, a.jsx)("p", {
                                                  children: "Guest",
                                                })
                                              : (0, a.jsx)("p", {
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
                        (0, a.jsx)("div", {
                          className: p().link,
                          children: (0, a.jsxs)(u(), {
                            href: "/column/".concat(y.categorySlug, "/1"),
                            children: [y.category, " ", l("[t]column__tolist")],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: p().column__detail__sideList,
                  children: [
                    (0, a.jsxs)("h3", {
                      className: p().topTitle,
                      children: [
                        l("[t]column__text__3"),
                        "ja-jp" === n &&
                          (0, a.jsx)("span", { children: "Latest Columns" }),
                      ],
                    }),
                    (0, a.jsx)("ul", {
                      children: w.slice(0, 6).map((e, s) => {
                        if (!e) return;
                        let t = T(e, "column"),
                          c = S(e.author, e.categorySlug);
                        return (0, a.jsx)(
                          "li",
                          {
                            className: p()[e.categorySlug],
                            children: (0, a.jsxs)(u(), {
                              href: t.link,
                              target: t.target,
                              children: [
                                (0, a.jsx)("div", {
                                  className: p().image,
                                  children: e.eyecatch
                                    ? (0, a.jsx)(g(), {
                                        src: e.eyecatch,
                                        width: "100",
                                        height: "100",
                                        layout: "responsive",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, a.jsxs)("div", {
                                  className: p().textArea,
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: p().date,
                                      children: (0, x.Gl)(
                                        e.releaseDate,
                                        r.t("[t]YYYY/MM/DD"),
                                        h
                                      ),
                                    }),
                                    (0, a.jsx)("h3", {
                                      className: p().title,
                                      dangerouslySetInnerHTML: {
                                        __html: e.title,
                                      },
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: p().author,
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)(g(), {
                                            src: "/6/assets/images/column/author/".concat(
                                              c,
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
                                          ? (0, a.jsx)("p", {
                                              children: "Guest",
                                            })
                                          : (0, a.jsx)("p", {
                                              children: e.author,
                                            }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: p().category,
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)(g(), {
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
                                        (0, a.jsx)("p", {
                                          children: e.category,
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
                    (0, a.jsx)("div", {
                      className: p().link,
                      children: (0, a.jsx)(u(), {
                        href: "/column/all/1",
                        children: (0, a.jsx)("span", {
                          children: l("[t]column__toTopPage"),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var w = !0;
      let N = (e) => {
        let { t: s, lang: t } = (0, c.A)("column"),
          d = new Date(1e3 * e.column.releaseDate).toISOString(),
          h = new Date(1e3 * e.column.modifiedDate).toISOString(),
          u = {
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            headline: e.column.seoTitle,
            image: e.column.eyecatch,
            datePublished: d,
            dateModified: h,
            author: { "@type": "Person", name: e.column.author },
          };
        return (0, a.jsxs)(n.A, {
          children: [
            (0, a.jsx)(l.A, {
              pageTitle: ""
                .concat(e.column.seoTitle)
                .concat("ja-jp" === t ? "｜" : " | ")
                .concat(s("[t]title")),
              pageDescription: e.column.seoDescription,
              pageOgUrl: "https://www.streetfighter.com/6/"
                .concat(t, "/column/detail/")
                .concat(e.column.slug),
              pageOgImg: e.column.eyecatch,
            }),
            (0, a.jsx)("div", {
              className: "contents page__column",
              children: (0, a.jsxs)(i.g.Provider, {
                value: e,
                children: [
                  (0, a.jsx)(r.A, {}),
                  (0, a.jsx)(
                    "script",
                    {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: { __html: JSON.stringify(u) },
                    },
                    "json-ld"
                  ),
                  (0, a.jsx)(o.A, {}),
                  (0, a.jsx)(y, {}),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    e.O(0, [88649, 86130, 94172, 90636, 46593, 38792], () => e((e.s = 76500))),
      (_N_E = e.O());
  },
]);
