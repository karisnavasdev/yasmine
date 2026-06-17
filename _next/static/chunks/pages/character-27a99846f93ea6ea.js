(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11597],
  {
    22034: (e) => {
      e.exports = {
        character_box: "select_character_box__Rzm5X",
        character__select: "select_character__select__q4FsB",
        enlistmentGuideLink: "select_enlistmentGuideLink___DLyv",
        logo: "select_logo__E8Iix",
        text: "select_text__fNenQ",
        adjustLink: "select_adjustLink__cDC8m",
        new: "select_new___87aa",
        blink: "select_blink__2A8sx",
        character__select__title1: "select_character__select__title1__azqw0",
        character__select__title2: "select_character__select__title2__bq_yp",
        character__select__list: "select_character__select__list__PP9yQ",
      };
    },
    82673: (e, r, c) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/character",
        function () {
          return c(84e3);
        },
      ]);
    },
    84e3: (e, r, c) => {
      "use strict";
      c.r(r), c.d(r, { __N_SSG: () => o, default: () => m });
      var s = c(66162),
        a = c(69996),
        n = c(12350),
        t = c(86130),
        l = c(14376),
        i = c.n(l),
        h = c(44922),
        x = c(22034),
        j = c.n(x),
        d = c(42650),
        _ = c(42223),
        u = c(92674),
        f = c(47573);
      let p = () => {
        let e,
          { t: r, lang: c } = (0, a.A)("character");
        (0, a.A)("common");
        let n = (0, h.useRef)(!1),
          t = (() => {
            switch (c) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, s.jsx)(f.uY, {});
              case "fr":
                return (0, s.jsx)(f.Rj, {});
              case "it":
                return (0, s.jsx)(f.MW, {});
              case "de":
                return (0, s.jsx)(f.qE, {});
              case "es-es":
              case "es-us":
                return (0, s.jsx)(f.ne, {});
              case "pt-br":
                return (0, s.jsx)(f.H, {});
              default:
                return (0, s.jsx)(f.n, {});
            }
          })();
        switch (c) {
          case "en-us":
          case "en-uk":
          case "en-asia":
            e = "en";
            break;
          default:
            e = c;
        }
        let l = (() => {
          switch (c) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              return (0, s.jsx)(f.LA, {});
            case "fr":
              return (0, s.jsx)(f.OO, {});
            case "it":
              return (0, s.jsx)(f.f3, {});
            case "de":
              return (0, s.jsx)(f.TQ, {});
            case "es-es":
            case "es-us":
              return (0, s.jsx)(f.Ur, {});
            case "pt-br":
              return (0, s.jsx)(f.Yn, {});
            default:
              return (0, s.jsx)(f.zl, {});
          }
        })();
        d.os.registerPlugin(u.ScrollTrigger);
        let x = (0, h.useRef)(),
          p = (0, h.useRef)(),
          o = (0, h.useRef)(),
          m = (0, h.useRef)([]);
        return (
          (0, h.useEffect)(() => {
            !1 === n.current &&
              ((n.current = !0),
              (() => {
                d.os.to(x.current, 1, { alpha: 1, ease: _.G6.easeOut }),
                  d.os.from([p.current, o.current], 1, {
                    y: "40",
                    stagger: 0.1,
                    ease: _.G6.easeOut,
                  }),
                  d.os.to([p.current, o.current], 1, {
                    alpha: 1,
                    stagger: 0.1,
                    ease: _.G6.easeOut,
                  });
                let e = m.current.reverse();
                d.os.from(e, 1.5, {
                  y: "40",
                  alpha: 0,
                  stagger: 0.09,
                  ease: _.G6.easeOut,
                });
              })());
          }, []),
          (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)("article", {
              className: j().character_box,
              ref: x,
              children: (0, s.jsx)("div", {
                className: j().character,
                children: (0, s.jsxs)("section", {
                  className: j().character__select,
                  children: [
                    (0, s.jsxs)("h1", {
                      children: [
                        (0, s.jsx)("div", {
                          className: j().character__select__title1,
                          ref: p,
                          children: t,
                        }),
                        (0, s.jsx)("div", {
                          className: j().character__select__title2,
                          ref: o,
                          children: l,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "".concat(j().adjustLink),
                      children: (0, s.jsxs)("a", {
                        href: "/6/buckler/".concat(e, "/battle_change"),
                        "data-gtm-click": ["battle_change"],
                        children: [
                          (0, s.jsx)("div", { className: j().logo }),
                          (0, s.jsx)("div", {
                            className: j().text,
                            children: (0, s.jsx)("p", {
                              children: r("[t]adjust_link_text"),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: j().character__select__list,
                      children: (0, s.jsxs)("ul", {
                        children: [
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[0] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/ryu",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[1] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/luke",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[2] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/jamie",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[3] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/chunli",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[4] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/guile",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[5] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/kimberly",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[6] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/juri",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[7] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/ken",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[8] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/blanka",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[9] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/dhalsim",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[10] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/ehonda",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[11] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/deejay",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[12] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/manon",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[13] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/marisa",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[14] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/jp",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[15] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/zangief",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[16] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/lily",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[17] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/cammy",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[18] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/rashid",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[19] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/aki",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[20] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/ed",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[21] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/gouki_akuma",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[22] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/vega_mbison",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[23] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/terry",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[24] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/mai",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[25] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/elena",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[26] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/sagat",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[27] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/cviper",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[28] = e),
                            children: (0, s.jsx)(i(), {
                              href: "character/alex",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                          (0, s.jsx)("li", {
                            ref: (e) => (m.current[29] = e),
                            className: j().new,
                            children: (0, s.jsx)(i(), {
                              href: "character/ingrid",
                              children: (0, s.jsx)("span", {}),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      var o = !0;
      let m = () => {
        let { t: e, lang: r } = (0, a.A)("character");
        return (0, s.jsxs)(t.A, {
          children: [
            (0, s.jsx)(n.A, {
              pageTitle: e("[t]title"),
              pageDescription: e("[t]description"),
              pageOgType: "website",
            }),
            (0, s.jsx)("div", {
              className: "contents page__character",
              children: (0, s.jsx)(p, {}),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    e.O(0, [36742, 88649, 42650, 86130, 90636, 46593, 38792], () =>
      e((e.s = 82673))
    ),
      (_N_E = e.O());
  },
]);
