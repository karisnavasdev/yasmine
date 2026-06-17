(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93332],
  {
    732: (e, s, t) => {
      "use strict";
      t.d(s, { D: () => _ });
      let _ = (0, t(44922).createContext)("");
    },
    16446: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { __N_SSG: () => H, default: () => C });
      var _ = t(66162),
        n = t(69996),
        l = t(12350),
        i = t(86130),
        r = t(732),
        a = t(69505),
        c = t(44922),
        d = t(56709),
        o = t.n(d),
        m = t(49715),
        u = t(42650),
        h = t(42223),
        x = t(23254),
        j = t(31965);
      t(30346), t(2066);
      var g = t(50456),
        p = t.n(g);
      let f = (e) => {
          let { isVisible: s, handleChangeOnlinePlayVisible: t } = e,
            { t: l, lang: i } = (0, n.A)("index");
          if (!s) return null;
          document.querySelector("html").classList.add("no_scroll");
          let r = document.getElementById("wrapper");
          return (0, m.createPortal)(
            (0, _.jsxs)("article", {
              className: "modal",
              children: [
                (0, _.jsx)("div", { className: "modal__bg" }),
                (0, _.jsxs)("section", {
                  children: [
                    (0, _.jsx)("div", {
                      className: p().modal__notice,
                      children: (0, _.jsxs)("div", {
                        className: p().modal__notice__block,
                        children: [
                          (0, _.jsx)("h3", {
                            children: l("[t]modal__notice_h3"),
                          }),
                          (0, _.jsx)("ul", {
                            className: p().list,
                            children: (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("p", {
                                  children: l("[t]modal__notice_li01_p"),
                                }),
                                (0, _.jsxs)("ul", {
                                  children: [
                                    (0, _.jsx)("li", {
                                      children: l("[t]modal__notice_li01_li01"),
                                    }),
                                    (0, _.jsx)("li", {
                                      children: l("[t]modal__notice_li01_li02"),
                                    }),
                                    (0, _.jsx)("li", {
                                      dangerouslySetInnerHTML: {
                                        __html: l("[t]modal__notice_li02_p"),
                                      },
                                    }),
                                    (0, _.jsx)("li", {
                                      children: l("[t]modal__notice_li02_li01"),
                                    }),
                                    (0, _.jsx)("li", {
                                      children: l("[t]modal__notice_li02_li02"),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("p", {
                      className: "close",
                      onClick: () => {
                        t(!1);
                      },
                      children: (0, _.jsx)(o(), {
                        src: "/6/assets/images/common/close_interface.png",
                        width: "65",
                        height: "67",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            r
          );
        },
        w = (e) => {
          let { top_banner: s } = e,
            { t, lang: l } = (0, n.A)("index");
          (0, n.A)("common");
          let i = (0, c.useRef)(!1),
            [r, a] = (0, c.useState)(!1),
            d = (0, c.useRef)(null),
            o = (0, c.useRef)(),
            m = (0, c.useRef)(),
            g = (0, c.useRef)(u.os.timeline());
          return (
            (0, c.useEffect)(() => {
              !1 === i.current &&
                ((i.current = !0),
                u.os.set(o.current, { scale: 1.1 }),
                g.current
                  .to(o.current, { duration: 1, opacity: 1, scale: 1 })
                  .to(
                    [m.current],
                    {
                      duration: 0.6,
                      delay: 0,
                      alpha: 1,
                      x: 0,
                      ease: h.G6.easeOut,
                    },
                    "<"
                  ));
            }, []),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("article", {
                  className: "".concat(p().image_box, " image_box"),
                  children: (0, _.jsxs)("section", {
                    className: p().image,
                    children: [
                      (0, _.jsx)("div", {
                        className: p().image__main,
                        children: (0, _.jsxs)("div", {
                          className: p().visual,
                          ref: o,
                          children: [
                            (0, _.jsx)(x.RC, {
                              modules: [j.Vx, j.dK, j._R, j.Ij],
                              slidesPerView: 1,
                              centeredSlides: !0,
                              loop: !0,
                              speed: 500,
                              autoplay: {
                                delay: 2500,
                                disableOnInteraction: !1,
                              },
                              navigation: {
                                nextEl: ".slide-next",
                                prevEl: ".slide-prev",
                              },
                              pagination: {
                                type: "fraction",
                                formatFractionCurrent: (e) =>
                                  e < 10 ? "0".concat(e) : e,
                                formatFractionTotal: (e) =>
                                  e < 10 ? "0".concat(e) : e,
                              },
                              effect: "fade",
                              ref: d,
                              children: s.map((e, s) =>
                                (0, _.jsx)(
                                  x.qr,
                                  {
                                    className: p().slider_item,
                                    children: (0, _.jsx)("div", {
                                      className: "slide_inner",
                                      dangerouslySetInnerHTML: {
                                        __html: e.body,
                                      },
                                    }),
                                  },
                                  "slide".concat(s)
                                )
                              ),
                            }),
                            (0, _.jsx)("aside", {
                              className: p().nav,
                              children: (0, _.jsxs)("ul", {
                                className: p().nav_arrow,
                                children: [
                                  (0, _.jsx)("li", {
                                    className: "".concat(
                                      p().prev,
                                      " slide-prev"
                                    ),
                                  }),
                                  (0, _.jsx)("li", {
                                    className: "".concat(
                                      p().next,
                                      " slide-next"
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: p().image__notice,
                        ref: m,
                        onClick: () => {
                          a(!0);
                        },
                        children: (0, _.jsx)("p", {
                          children: (0, _.jsx)("span", {
                            children: t("[t]image__notice"),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(f, {
                  isVisible: r,
                  handleChangeOnlinePlayVisible: (e) => {
                    document
                      .querySelector("html")
                      .classList.remove("no_scroll"),
                      a(e);
                  },
                }),
              ],
            })
          );
        };
      var y = t(14376),
        N = t.n(y),
        b = t(60293),
        v = t.n(b),
        S = t(47573);
      let k = () => {
        let e,
          { t: s, lang: t } = (0, n.A)("index"),
          l = (0, n.A)("common");
        switch (t) {
          case "en-us":
          case "en-uk":
          case "en-asia":
            e = "en";
            break;
          default:
            e = t;
        }
        let i = (() => {
          switch (t) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              return (0, _.jsx)(S.tv, {});
            case "fr":
              return (0, _.jsx)(S.KE, {});
            case "it":
              return (0, _.jsx)(S.Lx, {});
            case "de":
              return (0, _.jsx)(S.jq, {});
            case "es-es":
            case "es-us":
              return (0, _.jsx)(S.mK, {});
            case "pt-br":
              return (0, _.jsx)(S.q, {});
            default:
              return (0, _.jsx)(S.kv, {});
          }
        })();
        return (0, _.jsxs)("article", {
          className: v().product_box,
          children: [
            (0, _.jsxs)("section", {
              className: v().product,
              children: [
                (0, _.jsxs)("div", {
                  className: v().buy,
                  children: [
                    (0, _.jsx)("h2", {
                      children: (0, _.jsx)("span", {
                        children: l.t("[t]now__on__sale"),
                      }),
                    }),
                    (0, _.jsx)("p", {
                      className: v().btn,
                      children: (0, _.jsx)(N(), {
                        href: "/product",
                        children: (0, _.jsx)("span", { children: i }),
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)("ul", {
                  className: v().yearpass,
                  children: (0, _.jsx)("li", {
                    children: (0, _.jsx)(N(), {
                      href: "/product?p=dlc&y=4",
                      children: (0, _.jsx)(o(), {
                        src: "/6/assets/images/index/products_year4.png",
                        width: "786",
                        height: "526",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, _.jsxs)("section", {
              className: v().evaluation,
              children: [
                (0, _.jsx)("h3", {
                  dangerouslySetInnerHTML: {
                    __html: "".concat(s("[t]patch_100")),
                  },
                }),
                (0, _.jsxs)("div", {
                  className: v().patch_list,
                  children: [
                    (0, _.jsxs)("ul", {
                      className: v().patch,
                      children: [
                        "ja-jp" === t
                          ? (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_jga_2024_2.png",
                                    width: "149",
                                    height: "150",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_jga_2024_1.png",
                                    width: "149",
                                    height: "150",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              ],
                            })
                          : null,
                        (0, _.jsx)("li", {
                          children: (0, _.jsx)(o(), {
                            src: "/6/assets/images/index/patch/patch_tga2023_2.png",
                            width: "191",
                            height: "193",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, _.jsx)("li", {
                          children: (0, _.jsx)(o(), {
                            src: "/6/assets/images/index/patch/patch_dice.png",
                            width: "191",
                            height: "193",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        "ja-jp" === t
                          ? (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_jea.png",
                                    width: "170",
                                    height: "173",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_amd.png",
                                    width: "191",
                                    height: "193",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_famitu.png",
                                    width: "191",
                                    height: "193",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_partner.png",
                                    width: "173",
                                    height: "136",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, _.jsx)("li", {
                                  children: (0, _.jsx)(o(), {
                                    src: "/6/assets/images/index/patch/patch_special.png",
                                    width: "173",
                                    height: "136",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    "ja-jp" !== t
                      ? (0, _.jsxs)("ul", {
                          className: v().point,
                          children: [
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "9/10" }),
                                "IGN",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "9/10" }),
                                "GAMESPOT",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "9/10" }),
                                "IGN JAPAN",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "9.5/10" }),
                                "GAME INFORMER",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "10/10" }),
                                "GOD IS A GEEK",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "10/10" }),
                                "INVERSE",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "10/10" }),
                                "NOISY PIXEL",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "VG247",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "GAMESRADAR+",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "THE GUARDIAN",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "SCREEN RANT",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "COMICBOOK",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "TECHRADAR",
                              ],
                            }),
                            (0, _.jsxs)("li", {
                              children: [
                                (0, _.jsx)("span", { children: "5/5" }),
                                "GAMESBEAT",
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              ],
            }),
            (0, _.jsx)("section", {
              className: v().bnr_area,
              children: (0, _.jsxs)("ul", {
                children: [
                  (0, _.jsxs)("li", {
                    children: [
                      (0, _.jsx)("span", {
                        children: s("[t]product_bnr_area1"),
                      }),
                      (0, _.jsx)("a", {
                        href: "/6/buckler/".concat(e),
                        children: (0, _.jsx)("div", {
                          className: v().image,
                          children: (0, _.jsx)(o(), {
                            src: "/6/assets/images/index/bnr_bbc.jpg",
                            width: "500",
                            height: "209",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                  "ja-jp" === t
                    ? (0, _.jsxs)("li", {
                        children: [
                          (0, _.jsx)("span", {
                            children: s("[t]product_bnr_area2"),
                          }),
                          (0, _.jsx)(N(), {
                            href: "/news/event/1",
                            children: (0, _.jsx)("div", {
                              className: v().image,
                              children: (0, _.jsx)(o(), {
                                src: "/6/assets/images/index/bnr_event.jpg",
                                width: "500",
                                height: "209",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          }),
                        ],
                      })
                    : null,
                  (0, _.jsxs)("li", {
                    children: [
                      (0, _.jsx)("span", {
                        children: s("[t]product_bnr_area3"),
                      }),
                      (0, _.jsx)(N(), {
                        href: "/guide",
                        children: (0, _.jsx)("div", {
                          className: v().image,
                          children: (0, _.jsx)(o(), {
                            src: "/6/assets/images/index/bnr_guide_".concat(
                              "ja-jp" === t ? "ja-jp" : "en-us",
                              ".jpg"
                            ),
                            width: "500",
                            height: "209",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var A = t(77290),
        R = t(92674),
        z = t(89386),
        E = t(34099),
        G = t.n(E);
      let P = () => {
        let { t: e, lang: s } = (0, n.A)("index"),
          t = (0, n.A)("common"),
          l = void 0,
          i = (0, c.useRef)(!1),
          d = (0, c.useContext)(r.D),
          m = (0, c.useContext)(a.g),
          g = [...d],
          p = [...m],
          f = (() => {
            switch (s) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, _.jsx)(S.PC, {});
              case "fr":
                return (0, _.jsx)(S.sr, {});
              case "it":
                return (0, _.jsx)(S.LF, {});
              case "de":
                return (0, _.jsx)(S.TY, {});
              case "es-es":
              case "es-us":
                return (0, _.jsx)(S.Ww, {});
              case "pt-br":
                return (0, _.jsx)(S.a, {});
              default:
                return (0, _.jsx)(S.IP, {});
            }
          })(),
          w = (0, _.jsx)(S.Pd, {}),
          y = (0, _.jsx)(S.MK, {}),
          b = (0, _.jsx)(S.E6, {}),
          v = (0, z.X)(s),
          k = Object.keys(v).map((e, s) => {
            if ("nlSmall" === e && "true" === v[e]) {
              let s = "sns__".concat(e);
              return (0, _.jsx)(
                "li",
                {
                  id: "cusacrmwidget",
                  className: G()[s],
                  children: (0, _.jsx)("span", {
                    children: t.t("[t]sns__".concat(e)),
                  }),
                },
                s
              );
            }
            if ("" !== v[e]) {
              let s = "sns__".concat(e);
              return (0, _.jsx)(
                "li",
                {
                  className: G()[s],
                  children: (0, _.jsx)(N(), {
                    href: v[e],
                    target: "_blank",
                    rel: "noreferrer",
                    children:
                      "nl" !== e && "nlSmall" !== e
                        ? t.t("[t]sns__".concat(e, "_account"))
                        : t.t("[t]sns__".concat(e)),
                  }),
                },
                s
              );
            }
          }),
          E = (0, c.useRef)(null);
        u.os.registerPlugin(R.ScrollTrigger);
        let P = (0, c.useRef)(),
          T = (0, c.useRef)(),
          I = (0, c.useRef)(),
          O = (0, c.useRef)(),
          M = (0, c.useRef)(),
          L = (0, c.useRef)(),
          D = (0, c.useRef)(),
          Y = (0, c.useRef)(u.os.timeline()),
          H = (0, c.useRef)(),
          C = (0, c.useRef)(),
          F = (0, c.useRef)(),
          U = (0, c.useRef)(),
          X = (0, c.useRef)(),
          K = (0, c.useRef)(),
          V = (0, c.useRef)(u.os.timeline()),
          [q, W] = (0, c.useState)([]),
          [Q, B] = (0, c.useState)([]);
        return (
          (0, c.useEffect)(() => {
            !1 === i.current &&
              ((i.current = !0),
              u.os.to(P.current, {
                duration: 0.5,
                opacity: 1,
                scrollTrigger: {
                  trigger: P.current,
                  start: "top+=100 bottom",
                  once: !0,
                  onEnter: () =>
                    void (
                      I.current &&
                      O.current &&
                      E.current &&
                      M.current &&
                      L.current &&
                      D.current &&
                      Y.current
                        .from(
                          I.current,
                          {
                            duration: 1,
                            delay: 0.4,
                            alpha: 0,
                            scaleX: 2,
                            ease: h.G6.easeOut,
                          },
                          "0"
                        )
                        .from(
                          O.current,
                          {
                            duration: 1,
                            delay: 0.2,
                            opacity: 0,
                            x: "-100",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          E.current,
                          {
                            duration: 1,
                            delay: 0.2,
                            opacity: 0,
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          M.current,
                          {
                            duration: 1,
                            delay: 0.1,
                            opacity: 0,
                            x: "50",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          L.current,
                          {
                            duration: 1,
                            delay: 0.1,
                            opacity: 0,
                            x: "50",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          D.current,
                          {
                            duration: 1,
                            delay: 0.2,
                            opacity: 0,
                            x: "-100",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                    ),
                },
              }),
              u.os.to(T.current, {
                duration: 0.5,
                opacity: 1,
                scrollTrigger: {
                  trigger: T.current,
                  start: "top+=100 bottom",
                  once: !0,
                  onEnter: () =>
                    void (
                      H.current &&
                      C.current &&
                      F.current &&
                      U.current &&
                      X.current &&
                      K.current &&
                      V.current
                        .from(
                          H.current,
                          {
                            duration: 1,
                            delay: 0.4,
                            opacity: 0,
                            scaleX: 2,
                            ease: h.G6.easeOut,
                          },
                          "0"
                        )
                        .from(
                          C.current,
                          {
                            duration: 1,
                            delay: 0.2,
                            opacity: 0,
                            x: "100",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          F.current,
                          {
                            duration: 1,
                            delay: 0.1,
                            opacity: 0,
                            x: "-100",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          U.current,
                          {
                            duration: 1,
                            delay: 0.1,
                            opacity: 0,
                            x: "50",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          X.current,
                          {
                            duration: 1,
                            delay: 0.1,
                            opacity: 0,
                            x: "50",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                        .from(
                          K.current,
                          {
                            duration: 1,
                            delay: 0.2,
                            opacity: 0,
                            x: "100",
                            ease: h.G6.easeOut,
                          },
                          "<"
                        )
                    ),
                },
              }));
            let e = [];
            g.forEach((s, _) => {
              e.push((0, A.Gl)(s.releaseDate, t.t("[t]YYYY/MM/DD"), l));
            }),
              W(e);
            let s = [];
            p.forEach((e, _) => {
              s.push((0, A.Gl)(e.releaseDate, t.t("[t]YYYY/MM/DD"), l));
            }),
              B(s);
          }, []),
          (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)("article", {
              className: "".concat(G().news_box, " news_box"),
              children: [
                (0, _.jsxs)("section", {
                  className: G().news,
                  ref: P,
                  children: [
                    (0, _.jsx)("div", {
                      className: G().news__bg__title,
                      ref: I,
                      children: f,
                    }),
                    (0, _.jsxs)("h2", {
                      className: G().news__title,
                      ref: O,
                      children: [
                        f,
                        "ja-jp" === s &&
                          (0, _.jsx)("p", { children: "／　ニュース" }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: G().news__side,
                      children: (0, _.jsxs)("ul", {
                        className: G().news__side__sns,
                        ref: E,
                        onClick: () => {
                          E.current.classList.contains("".concat(G().active))
                            ? E.current.classList.remove("".concat(G().active))
                            : E.current.classList.add("".concat(G().active));
                        },
                        children: [
                          (0, _.jsx)("span", {
                            className: G().news__side__sns__toggle,
                          }),
                          k,
                          (0, _.jsx)("li", {
                            className: G().sns__ss,
                            children: (0, _.jsx)(N(), {
                              href: "https://www.streetfighter.com/",
                              target: "_blank",
                              rel: "noreferrer",
                              children: t.t("[t]sns__ss"),
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(x.RC, {
                      modules: [j.Vx],
                      slidesPerView: "auto",
                      centeredSlides: !1,
                      loop: !1,
                      speed: 500,
                      navigation: !0,
                      className: G().news__slider,
                      ref: M,
                      children: g.slice(0, 9).map((e, s) => {
                        if (s > 9) return null;
                        let t = e.externalUrl
                            ? e.externalUrl
                            : "/news/detail/".concat(e.slug),
                          n = e.externalUrl ? "_blank" : "";
                        return (0, _.jsx)(
                          x.qr,
                          {
                            className: G().news__slider__item,
                            children: (0, _.jsxs)(N(), {
                              href: t,
                              target: n,
                              children: [
                                (0, _.jsx)("div", {
                                  className: G().image,
                                  children: e.eyecatch
                                    ? (0, _.jsx)(o(), {
                                        src: e.eyecatch,
                                        width: "292",
                                        height: "292",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, _.jsx)("p", {
                                  className: G().news__slider__item__text,
                                  dangerouslySetInnerHTML: { __html: e.title },
                                }),
                                (0, _.jsxs)("dl", {
                                  className: G().news__slider__item__info,
                                  children: [
                                    (0, _.jsx)("dt", { children: e.category }),
                                    (0, _.jsx)("dd", { children: q[s] }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.slug
                        );
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: G().news__sliderSP,
                      ref: L,
                      children: g.slice(0, 4).map((e, s) => {
                        if (s > 4) return null;
                        let t = e.externalUrl
                            ? e.externalUrl
                            : "/news/detail/".concat(e.slug),
                          n = e.externalUrl ? "_blank" : "";
                        return (0, _.jsx)(
                          "div",
                          {
                            className: G().news__sliderSP__item,
                            children: (0, _.jsxs)(N(), {
                              href: t,
                              target: n,
                              children: [
                                (0, _.jsx)("div", {
                                  className: G().image,
                                  children: e.eyecatch
                                    ? (0, _.jsx)(o(), {
                                        src: e.eyecatch,
                                        width: "292",
                                        height: "292",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, _.jsx)("p", {
                                  className: G().news__sliderSP__item__text,
                                  dangerouslySetInnerHTML: { __html: e.title },
                                }),
                                (0, _.jsxs)("dl", {
                                  className: G().news__sliderSP__item__info,
                                  children: [
                                    (0, _.jsx)("dt", { children: e.category }),
                                    (0, _.jsx)("dd", { children: q[s] }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.slug
                        );
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: G().news__link,
                      ref: D,
                      children: (0, _.jsx)(N(), {
                        href: "/news/all/1",
                        children: t.t("[t]more"),
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("section", {
                  className: G().column,
                  ref: T,
                  children: [
                    (0, _.jsxs)("div", {
                      className: G().column__bg__title,
                      ref: H,
                      children: [
                        (0, _.jsx)("span", { className: G().pc, children: y }),
                        (0, _.jsx)("span", { className: G().sp, children: w }),
                      ],
                    }),
                    (0, _.jsxs)("h2", {
                      className: G().column__title,
                      ref: C,
                      children: [
                        (0, _.jsx)("span", {
                          className: G().subTitle,
                          children: b,
                        }),
                        (0, _.jsx)("span", { className: G().pc, children: y }),
                        (0, _.jsx)("span", { className: G().sp, children: w }),
                        "ja-jp" === s &&
                          (0, _.jsx)("p", { children: "／　開発コラム" }),
                      ],
                    }),
                    (0, _.jsx)("ul", {
                      className: G().column__topArticle,
                      ref: F,
                      children: p.slice(0, 1).map((e, s) => {
                        if (s > 1) return null;
                        let t = e.externalUrl
                            ? e.externalUrl
                            : "/column/detail/".concat(e.slug),
                          n = e.externalUrl ? "_blank" : "";
                        return (0, _.jsx)(
                          "li",
                          {
                            className: G().column__topArticle__item,
                            children: (0, _.jsxs)(N(), {
                              href: t,
                              target: n,
                              children: [
                                (0, _.jsx)("div", {
                                  className:
                                    G().column__topArticle__item__image,
                                  children: e.eyecatch
                                    ? (0, _.jsx)(o(), {
                                        src: e.eyecatch,
                                        width: "292",
                                        height: "292",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, _.jsx)("div", {
                                  className:
                                    G().column__topArticle__item__category,
                                  children: (0, _.jsx)(o(), {
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
                                (0, _.jsx)("p", {
                                  className: G().column__topArticle__item__text,
                                  dangerouslySetInnerHTML: { __html: e.title },
                                }),
                                (0, _.jsx)("p", {
                                  className: G().column__topArticle__item__date,
                                  children: Q[s],
                                }),
                              ],
                            }),
                          },
                          e.slug
                        );
                      }),
                    }),
                    (0, _.jsx)("ul", {
                      className: G().column__slider,
                      ref: U,
                      children: p.slice(1, 5).map((e, s) => {
                        if (s > 4) return null;
                        let t = e.externalUrl
                            ? e.externalUrl
                            : "/column/detail/".concat(e.slug),
                          n = e.externalUrl ? "_blank" : "";
                        return (0, _.jsx)(
                          "li",
                          {
                            className: G().column__slider__item,
                            children: (0, _.jsxs)(N(), {
                              href: t,
                              target: n,
                              children: [
                                (0, _.jsx)("div", {
                                  className: G().column__slider__item__image,
                                  children: e.eyecatch
                                    ? (0, _.jsx)(o(), {
                                        src: e.eyecatch,
                                        width: "292",
                                        height: "292",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, _.jsx)("div", {
                                  className: G().column__slider__item__category,
                                  children: (0, _.jsx)(o(), {
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
                                (0, _.jsx)("p", {
                                  className: G().column__slider__item__text,
                                  dangerouslySetInnerHTML: { __html: e.title },
                                }),
                                (0, _.jsx)("p", {
                                  className: G().column__slider__item__date,
                                  children: Q[s + 1],
                                }),
                              ],
                            }),
                          },
                          e.slug
                        );
                      }),
                    }),
                    (0, _.jsx)("ul", {
                      className: G().column__sliderSP,
                      ref: X,
                      children: p.slice(1, 4).map((e, s) => {
                        if (s > 3) return null;
                        let t = e.externalUrl
                            ? e.externalUrl
                            : "/column/detail/".concat(e.slug),
                          n = e.externalUrl ? "_blank" : "";
                        return (0, _.jsx)(
                          "li",
                          {
                            className: G().column__sliderSP__item,
                            children: (0, _.jsxs)(N(), {
                              href: t,
                              target: n,
                              children: [
                                (0, _.jsx)("div", {
                                  className: G().column__sliderSP__item__image,
                                  children: e.eyecatch
                                    ? (0, _.jsx)(o(), {
                                        src: e.eyecatch,
                                        width: "292",
                                        height: "292",
                                        alt: "",
                                        loading: "lazy",
                                        unoptimized: !0,
                                      })
                                    : null,
                                }),
                                (0, _.jsxs)("div", {
                                  className:
                                    G().column__sliderSP__item__textArea,
                                  children: [
                                    (0, _.jsx)("p", {
                                      className: G().text,
                                      dangerouslySetInnerHTML: {
                                        __html: e.title,
                                      },
                                    }),
                                    (0, _.jsxs)("div", {
                                      className: G().subArea,
                                      children: [
                                        (0, _.jsx)("div", {
                                          className: G().category,
                                          children: (0, _.jsx)(o(), {
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
                                        (0, _.jsx)("p", {
                                          className: G().date,
                                          children: Q[s + 1],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.slug
                        );
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: G().column__link,
                      ref: K,
                      children: (0, _.jsx)(N(), {
                        href: "/column/all/1",
                        children: t.t("[t]more"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var T = t(66833),
        I = t(95983),
        O = t.n(I);
      let M = () => {
        let { t: e, lang: s } = (0, n.A)("index"),
          t = (0, c.useRef)(!1),
          l = (0, T.useRouter)(),
          i = (() => {
            switch (s) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, _.jsx)(S.em, {});
              case "fr":
                return (0, _.jsx)(S.PQ, {});
              case "it":
                return (0, _.jsx)(S.c8, {});
              case "de":
                return (0, _.jsx)(S.Qj, {});
              case "es-es":
              case "es-us":
                return (0, _.jsx)(S.lv, {});
              case "pt-br":
                return (0, _.jsx)(S.jQ, {});
              default:
                return (0, _.jsx)(S.X0, {});
            }
          })(),
          r = (() => {
            switch (s) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, _.jsx)(S.LC, {});
              case "fr":
                return (0, _.jsx)(S.oD, {});
              case "it":
                return (0, _.jsx)(S.Zy, {});
              case "de":
                return (0, _.jsx)(S.PA, {});
              case "es-es":
                return (0, _.jsx)(S.SI, {});
              case "es-us":
                return (0, _.jsx)(S.yA, {});
              case "pt-br":
                return (0, _.jsx)(S.Sm, {});
              default:
                return (0, _.jsx)(S.m0, {});
            }
          })();
        u.os.registerPlugin(R.ScrollTrigger);
        let a = (0, c.useRef)(),
          d = (0, c.useRef)(),
          m = (0, c.useRef)(),
          x = (0, c.useRef)(),
          j = (0, c.useRef)(),
          g = (0, c.useRef)(),
          p = (0, c.useRef)(),
          f = (0, c.useRef)(),
          w = (0, c.useRef)(),
          y = (0, c.useRef)(),
          N = (0, c.useRef)(),
          b = (0, c.useRef)(),
          v = (0, c.useRef)(),
          k = (0, c.useRef)(u.os.timeline());
        return (
          (0, c.useEffect)(
            () => (
              !1 === t.current &&
                ((t.current = !0),
                u.os.to(a.current, {
                  duration: 0.5,
                  opacity: 1,
                  scrollTrigger: {
                    trigger: a.current,
                    start: "center-=200 bottom",
                    once: !0,
                    onEnter: () =>
                      (() => {
                        if (!document.querySelector(".page__index")) return;
                        u.os.set(d.current, { alpha: 0 }),
                          u.os.set(m.current, { alpha: 0 }),
                          k.current
                            .from([x.current, j.current, g.current], {
                              duration: 1.3,
                              delay: 0.2,
                              alpha: 0,
                              x: "160",
                              stagger: 0.07,
                              ease: h.G6.easeOut,
                            })
                            .from(
                              f.current,
                              {
                                duration: 0.5,
                                alpha: 0,
                                scaleX: 0.1,
                                scaleY: 7,
                                ease: h.G6.easeInOut,
                              },
                              "-=1.5"
                            )
                            .from(
                              [p.current, w.current],
                              {
                                duration: 0.5,
                                alpha: 0,
                                scaleX: 7,
                                scaleY: 0.1,
                                stagger: 0.1,
                                ease: h.G6.easeInOut,
                              },
                              "-=1.4"
                            )
                            .from(
                              [N.current, b.current, v.current],
                              {
                                duration: 1.3,
                                x: "-50",
                                alpha: 0,
                                stagger: 0.1,
                                ease: h.G6.easeOut,
                              },
                              "-=1.3"
                            );
                        let e = m.current.getAttribute("video-path");
                        m.current.setAttribute("src", e),
                          m.current.addEventListener("loadeddata", (e) => s());
                        let s = () => {
                          u.os.to(m.current, { duration: 1, alpha: 1 }),
                            m.current.play();
                        };
                        N.current.addEventListener("click", (e) =>
                          t(e, N.current)
                        ),
                          b.current.addEventListener("click", (e) =>
                            t(e, b.current)
                          ),
                          v.current.addEventListener("click", (e) =>
                            t(e, v.current)
                          );
                        let t = (e, s) => {
                          u.os.to(d.current, { duration: 0.01, alpha: 1 }),
                            u.os.killTweensOf([
                              p.current,
                              f.current,
                              w.current,
                              x.current,
                              j.current,
                              g.current,
                              N.current,
                              b.current,
                              v.current,
                            ]),
                            u.os.set(
                              [
                                p.current,
                                f.current,
                                w.current,
                                x.current,
                                j.current,
                                g.current,
                                N.current,
                                b.current,
                                v.current,
                              ],
                              { alpha: 0 }
                            ),
                            y.current.classList.add(O().hide);
                          let t = s
                              .querySelector("a")
                              .getAttribute("href-path"),
                            _ = s.querySelector("a").getAttribute("video-path");
                          d.current.setAttribute("src", _),
                            d.current.addEventListener("ended", () => {
                              l.push(t);
                            });
                        };
                      })(),
                  },
                })),
              () => {
                R.ScrollTrigger.refresh();
              }
            ),
            []
          ),
          (0, _.jsx)("article", {
            className: O().mode_box,
            ref: a,
            children: (0, _.jsxs)("section", {
              className: O().mode,
              children: [
                (0, _.jsxs)("div", {
                  className: O().mode__bg,
                  children: [
                    (0, _.jsxs)("div", {
                      className: O().mode__bg__mv,
                      children: [
                        (0, _.jsx)("video", {
                          className: O().mode_loop,
                          ref: m,
                          "video-path": "/6/assets/images/index/mode_loop.mp4",
                          src: "",
                          loop: !0,
                          autoPlay: !0,
                          muted: !0,
                          playsInline: !0,
                        }),
                        (0, _.jsx)("video", {
                          className: O().mode_select,
                          ref: d,
                          src: "",
                          autoPlay: !0,
                          muted: !0,
                          playsInline: !0,
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: O().mode__bg__rect01,
                      ref: p,
                      children: (0, _.jsx)(o(), {
                        src: "/6/assets/images/index/rect01.png",
                        width: "406",
                        height: "293",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: O().mode__bg__rect02,
                      ref: f,
                      children: (0, _.jsx)(o(), {
                        src: "/6/assets/images/index/rect02.png",
                        width: "240",
                        height: "378",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: O().mode__bg__rect03,
                      ref: w,
                      children: (0, _.jsx)(o(), {
                        src: "/6/assets/images/index/rect03.png",
                        width: "328",
                        height: "194",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("h2", {
                  className: O().mode__main,
                  children: [
                    (0, _.jsx)("div", {
                      className: O().mode__main__title,
                      ref: x,
                      children: i,
                    }),
                    (0, _.jsx)("div", {
                      className: O().mode__main__intro,
                      ref: j,
                      children: r,
                    }),
                    (0, _.jsx)("span", {
                      className: O().mode__main__text,
                      ref: g,
                      children:
                        "ja-jp" === s ||
                        "ko-kr" === s ||
                        "zh-hans" === s ||
                        "zh-hant" === s
                          ? (0, _.jsx)(_.Fragment, {
                              children: e("[t]mode__main__text"),
                            })
                          : null,
                    }),
                  ],
                }),
                (0, _.jsxs)("ul", {
                  className: O().mode__select,
                  ref: y,
                  children: [
                    (0, _.jsx)("li", {
                      className: O().mode__select__fg,
                      ref: N,
                      children: (0, _.jsx)("a", {
                        "href-path": "/mode/fightingground",
                        "video-path": "/6/assets/images/index/mode_fg.mp4",
                        children: (0, _.jsx)(S.j_, {}),
                      }),
                    }),
                    (0, _.jsx)("li", {
                      className: O().mode__select__bh,
                      ref: b,
                      children: (0, _.jsx)("a", {
                        "href-path": "/mode/battlehub",
                        "video-path": "/6/assets/images/index/mode_bh.mp4",
                        children: (0, _.jsx)(S.eN, {}),
                      }),
                    }),
                    (0, _.jsx)("li", {
                      className: O().mode__select__wt,
                      ref: v,
                      children: (0, _.jsx)("a", {
                        "href-path": "/mode/worldtour",
                        "video-path": "/6/assets/images/index/mode_wt.mp4",
                        children: (0, _.jsx)(S.pN, {}),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var L = t(21579),
        D = t.n(L);
      let Y = () => {
        let e,
          { t: s, lang: t } = (0, n.A)("index"),
          l = (0, n.A)("common"),
          i = (0, c.useRef)(!1);
        switch (((0, T.useRouter)(), t)) {
          case "en-us":
          case "en-uk":
          case "en-asia":
            e = "en";
            break;
          default:
            e = t;
        }
        u.os.config({ nullTargetWarn: !1 }),
          u.os.registerPlugin(R.ScrollTrigger);
        let r = (0, c.useRef)(),
          a = (0, c.useRef)(),
          d = (0, c.useRef)(u.os.timeline());
        return (
          (0, c.useEffect)(() => {
            !1 === i.current &&
              ((i.current = !0),
              r.current &&
                a.current &&
                d.current &&
                (() => {
                  let e = document.getElementById("enlistmentGuide");
                  u.os.to(e, {
                    duration: 0.5,
                    opacity: 1,
                    scrollTrigger: {
                      trigger: e,
                      start: "center bottom",
                      once: !0,
                      onEnter: () =>
                        void d.current.to(a.current, {
                          duration: 1,
                          alpha: 1,
                          y: "0",
                          ease: h.G6.easeOut,
                        }),
                    },
                  });
                })());
          }, []),
          (0, _.jsxs)("article", {
            className: D().enlistment_guide,
            ref: r,
            id: "enlistmentGuide",
            children: [
              (0, _.jsxs)("h2", {
                children: [
                  l.t("[t]title"),
                  "ja-jp" === t
                    ? (0, _.jsx)("span", {
                        children: l.t("[t]header__nav__service"),
                      })
                    : (0, _.jsx)("span", {
                        children: l.t("[t]header__nav__buckler"),
                      }),
                ],
              }),
              (0, _.jsx)("div", {
                className: D().inner,
                ref: a,
                children: (0, _.jsxs)("section", {
                  children: [
                    (0, _.jsx)("div", {
                      className: D().logo,
                      children: (0, _.jsx)("span", {
                        dangerouslySetInnerHTML: {
                          __html: s("[t]top_enlistmentGuide_title"),
                        },
                      }),
                    }),
                    (0, _.jsx)("p", {
                      className: D().catch,
                      dangerouslySetInnerHTML: {
                        __html: s("[t]top_enlistmentGuide_catch"),
                      },
                    }),
                    (0, _.jsx)("p", {
                      className: D().text,
                      dangerouslySetInnerHTML: {
                        __html: s("[t]top_enlistmentGuide_text"),
                      },
                    }),
                    (0, _.jsx)("p", {
                      className: D().link,
                      children: (0, _.jsx)("a", {
                        href: "/6/buckler/".concat(e, "/welcome"),
                        children: s("[t]top_enlistmentGuide_link"),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var H = !0;
      let C = (e) => {
        let { t: s, lang: t } = (0, n.A)("index");
        return (0, _.jsxs)(i.A, {
          children: [
            (0, _.jsx)(l.A, {
              pageTitle: s("[t]title"),
              pageDescription: s("[t]description"),
              pageOgType: "website",
            }),
            (0, _.jsx)("div", {
              className: "contents page__index",
              children: (0, _.jsx)(r.D.Provider, {
                value: e.news_list,
                children: (0, _.jsxs)(a.g.Provider, {
                  value: e.column_list,
                  children: [
                    (0, _.jsx)(w, { top_banner: e.top_banner }),
                    (0, _.jsx)(k, {}),
                    (0, _.jsx)(P, {}),
                    (0, _.jsx)(M, {}),
                    (0, _.jsx)(Y, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
    16760: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(16446);
        },
      ]);
    },
    21579: (e) => {
      e.exports = {
        enlistment_guide: "enlistmentGuide_enlistment_guide__J5vuH",
        inner: "enlistmentGuide_inner__PTOdm",
        logo: "enlistmentGuide_logo__Rcut0",
        catch: "enlistmentGuide_catch__l8PLr",
        text: "enlistmentGuide_text__WMVGi",
        link: "enlistmentGuide_link__if_x8",
        blink: "enlistmentGuide_blink__q0iXR",
      };
    },
    34099: (e) => {
      e.exports = {
        news_box: "news_news_box__EuCBV",
        news: "news_news__Lr1QO",
        news__bg__title: "news_news__bg__title__tFi4v",
        news__title: "news_news__title__JM7_Z",
        news__side: "news_news__side__Y5w2r",
        news__side__sns: "news_news__side__sns__3kOj7",
        active: "news_active__t37fC",
        news__side__sns__toggle: "news_news__side__sns__toggle__eFFpS",
        sns__dc: "news_sns__dc__hGdey",
        sns__tw: "news_sns__tw__MadoQ",
        sns__ig: "news_sns__ig__xa4yT",
        sns__yt: "news_sns__yt___F1f6",
        sns__fb: "news_sns__fb__RyACO",
        sns__nl: "news_sns__nl___gx57",
        sns__nlSmall: "news_sns__nlSmall__ZIFpy",
        sns__ss: "news_sns__ss__jP5FI",
        news__slider: "news_news__slider__NC0Nk",
        news__slider__item: "news_news__slider__item__VSlN6",
        image: "news_image__dbQ8h",
        blank: "news_blank__is1vV",
        news__slider__item__text: "news_news__slider__item__text__Iy5Pm",
        news__slider__item__info: "news_news__slider__item__info__OBpqW",
        new: "news_new__j_fsD",
        news__slider__list__item__info:
          "news_news__slider__list__item__info__XsOry",
        blink: "news_blink__Zg3jB",
        news__sliderSP: "news_news__sliderSP__RwwJ4",
        news__sliderSP__item: "news_news__sliderSP__item__k7ylW",
        news__sliderSP__item__text: "news_news__sliderSP__item__text__3WNEe",
        news__sliderSP__item__info: "news_news__sliderSP__item__info__uqjIP",
        news__link: "news_news__link__wMAEd",
        column: "news_column__ooUj2",
        column__bg__title: "news_column__bg__title__925IE",
        sp: "news_sp__U6TIB",
        pc: "news_pc__jjwZT",
        column__title: "news_column__title__WQ2kD",
        subTitle: "news_subTitle__sx0Ff",
        column__topArticle: "news_column__topArticle__QEl4P",
        column__topArticle__item: "news_column__topArticle__item__VkRxu",
        column__topArticle__item__image:
          "news_column__topArticle__item__image__JvzhI",
        column__topArticle__item__category:
          "news_column__topArticle__item__category__d8poT",
        column__topArticle__item__text:
          "news_column__topArticle__item__text__oOrzo",
        column__topArticle__item__date:
          "news_column__topArticle__item__date__ip2ZH",
        column__slider: "news_column__slider__NYLZL",
        column__slider__item: "news_column__slider__item__Go_qu",
        column__slider__item__image: "news_column__slider__item__image__W_YHi",
        column__slider__item__category:
          "news_column__slider__item__category__OrAdT",
        column__slider__item__text: "news_column__slider__item__text__2YZf3",
        column__slider__item__date: "news_column__slider__item__date__Jc6Fe",
        column__sliderSP: "news_column__sliderSP__6HUrN",
        column__sliderSP__item: "news_column__sliderSP__item__a93v0",
        column__sliderSP__item__image:
          "news_column__sliderSP__item__image__tGgWk",
        column__sliderSP__item__textArea:
          "news_column__sliderSP__item__textArea__WKWBE",
        text: "news_text___NxmX",
        subArea: "news_subArea__zfaaT",
        category: "news_category__1_v5M",
        date: "news_date___36eI",
        column__link: "news_column__link__xEPJg",
      };
    },
    50456: (e) => {
      e.exports = {
        image_box: "images_image_box__G_zvK",
        image: "images_image__xRIs_",
        image__main: "images_image__main__K1xMM",
        visual: "images_visual__4FyqL",
        nav: "images_nav__61KFz",
        nav_arrow: "images_nav_arrow__INTYv",
        prev: "images_prev__EE96z",
        next: "images_next__dDskV",
        image__notice: "images_image__notice__GSDa2",
        modal__notice: "images_modal__notice__unB69",
        modal__notice__block: "images_modal__notice__block__NtGss",
        list: "images_list__FrkGR",
        blink: "images_blink__gpflI",
      };
    },
    60293: (e) => {
      e.exports = {
        product_box: "product_product_box__PD9wy",
        product: "product_product__jexaE",
        buy: "product_buy__0KRAr",
        btn: "product_btn__7VOWE",
        buyText: "product_buyText__7TFDA",
        yearpass: "product_yearpass__yzAcN",
        evaluation: "product_evaluation__ME3G5",
        patch_list: "product_patch_list__f5gzR",
        patch: "product_patch__dw46x",
        point: "product_point__jdTDt",
        bnr_area: "product_bnr_area__owpKX",
        image: "product_image__31Dr6",
        blink: "product_blink__b53_N",
      };
    },
    69505: (e, s, t) => {
      "use strict";
      t.d(s, { g: () => _ });
      let _ = (0, t(44922).createContext)("");
    },
    77290: (e, s, t) => {
      "use strict";
      t.d(s, { Gl: () => r });
      var _ = t(82259),
        n = t.n(_),
        l = t(4298),
        i = t.n(l);
      let r = function (e) {
        let s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD HH:mm:ss",
          t = arguments.length > 2 ? arguments[2] : void 0;
        return (
          n().extend(i()),
          void 0 == t
            ? n()(1e3 * e).format(s)
            : n()(
                n()
                  .utc(1e3 * e)
                  .format("YYYY-MM-DD HH:mm:ss")
              )
                .add(t, "h")
                .format("YYYY-MM-DD HH:mm")
        );
      };
    },
    95983: (e) => {
      e.exports = {
        mode_box: "mode_mode_box__Wa8EX",
        mode__bg: "mode_mode__bg__x7KdD",
        mode__bg__mv: "mode_mode__bg__mv__gx1gX",
        mode__bg__rect01: "mode_mode__bg__rect01__r4K5r",
        mode__bg__rect02: "mode_mode__bg__rect02__9lSMP",
        mode__bg__rect03: "mode_mode__bg__rect03__2KGkk",
        mode__main: "mode_mode__main__VmXd_",
        mode__main__title: "mode_mode__main__title__YjeHl",
        mode__main__intro: "mode_mode__main__intro__pNgAQ",
        mode__main__text: "mode_mode__main__text__bm3hd",
        mode__select: "mode_mode__select__XFexy",
        mode__select__fg: "mode_mode__select__fg___fT8_",
        mode__select__bh: "mode_mode__select__bh__ovtHQ",
        mode__select__wt: "mode_mode__select__wt__vzx8u",
        hide: "mode_hide__ERKgQ",
        blink: "mode_blink__3665q",
      };
    },
  },
  (e) => {
    e.O(0, [36742, 88649, 42650, 20285, 86130, 90636, 46593, 38792], () =>
      e((e.s = 16760))
    ),
      (_N_E = e.O());
  },
]);
