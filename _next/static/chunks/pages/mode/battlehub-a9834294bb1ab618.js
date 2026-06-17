(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15151],
  {
    1696: (e, s, a) => {
      var t = a(6094),
        i = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, t(e) + 1).replace(i, "") : e;
      };
    },
    6094: (e) => {
      var s = /\s/;
      e.exports = function (e) {
        for (var a = e.length; a-- && s.test(e.charAt(a)); );
        return a;
      };
    },
    13616: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { __N_SSG: () => z, default: () => k });
      var t = a(66162),
        i = a(69996),
        n = a(44922),
        l = a(12350),
        c = a(86130),
        r = a(56709),
        o = a.n(r),
        m = a(42650),
        _ = a(42223),
        h = a(70243),
        d = a.n(h),
        j = a(47573);
      let x = (e) => {
        let { setModalVisible: s } = e,
          { t: a, lang: l } = (0, i.A)("mode/battlehub"),
          c = (0, n.useRef)(!1),
          r = (0, n.useRef)([]),
          h = (0, n.useRef)([]);
        m.os.config({ nullTargetWarn: !1 });
        let x = (() => {
          switch (l) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              return (0, t.jsx)(j.em, {});
            case "fr":
              return (0, t.jsx)(j.PQ, {});
            case "it":
              return (0, t.jsx)(j.c8, {});
            case "de":
              return (0, t.jsx)(j.Qj, {});
            case "es-es":
            case "es-us":
              return (0, t.jsx)(j.lv, {});
            case "pt-br":
              return (0, t.jsx)(j.jQ, {});
            default:
              return (0, t.jsx)(j.X0, {});
          }
        })();
        return (
          (0, n.useEffect)(() => {
            !1 === c.current && (c.current = !0),
              (() => {
                let e = document.querySelector(".contents");
                m.os.to(e, 1, { opacity: 1, ease: _.G6.easeOut }),
                  m.os.to(h.current, 1.5, { y: 0, ease: _.G6.easeOut }),
                  m.os.to(r.current, 1.7, {
                    scale: 1,
                    opacity: 1,
                    ease: _.G6.easeOut,
                  });
              })();
          }, []),
          (0, t.jsxs)("article", {
            className: d().page__battlehub__image,
            children: [
              (0, t.jsx)("div", {
                className: d().page__battlehub__image__mv,
                ref: r,
                children: (0, t.jsx)("div", {
                  className: d().mainImage__btn,
                  onClick: () => {
                    s(!0);
                  },
                  children: (0, t.jsx)("div", {
                    className: d().image,
                    children: (0, t.jsx)(o(), {
                      src: "/6/assets/images/common/icon_modal.png",
                      width: "30",
                      height: "30",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: d().page__battlehub__image__contents,
                ref: h,
                children: (0, t.jsxs)("div", {
                  className: d().image__contents,
                  children: [
                    (0, t.jsx)("div", {
                      className: d().image__contents__bg__title,
                      children: (0, t.jsx)(j.eN, {}),
                    }),
                    (0, t.jsxs)("h1", {
                      children: [
                        (0, t.jsx)("span", { children: x }),
                        (0, t.jsx)(j.eN, {}),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className: d().image__contents__text,
                      children: a("[t]image__contents__text"),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var g = a(92674),
        p = a(83075),
        u = a.n(p);
      let b = () => {
        let { t: e, lang: s } = (0, i.A)("mode/battlehub"),
          a = (0, n.useRef)(!1),
          l = (0, n.useRef)("");
        m.os.config({ nullTargetWarn: !1 }),
          m.os.registerPlugin(g.ScrollTrigger);
        let c = [],
          r = () => {
            let e = window.innerWidth,
              s = document.querySelectorAll(".page_article"),
              a = document.getElementById("battlehubNav"),
              t = a.querySelector("ul");
            t &&
              s.forEach((s, i) => {
                g.ScrollTrigger.create({
                  trigger: s,
                  id: s.id,
                  start: "top 10%",
                  end: "bottom",
                  toggleClass: {
                    targets: t,
                    className: ((e) => {
                      switch (e) {
                        case "hub":
                          return d().hub;
                        case "fightingstand":
                          return d().fightingstand;
                        case "avatarbattle":
                          return d().avatarbattle;
                        case "cfn":
                          return d().cfn;
                        case "eventcounter":
                          return d().eventcounter;
                        case "gamecenter":
                          return d().gamecenter;
                        case "hubgoodsshop":
                          return d().hubgoodsshop;
                        default:
                          return "";
                      }
                    })(s.id),
                  },
                  onEnter: () => {
                    e <= 767 &&
                      a.scroll({
                        left: 0.15 * t.clientWidth * i,
                        behavior: "smooth",
                      });
                  },
                  onEnterBack: () => {
                    e <= 767 &&
                      a.scroll({
                        left: 0.15 * t.clientWidth * i,
                        behavior: "smooth",
                      });
                  },
                });
              });
          },
          o = (e) => {
            e.preventDefault();
            let s = e.currentTarget.getAttribute("href"),
              a = document.querySelector(s),
              t = document.querySelector("header"),
              i = a.getBoundingClientRect(),
              n = window.pageYOffset + i.top - t.clientHeight;
            window.scrollTo({ top: n, behavior: "smooth" });
          };
        return (
          (0, n.useEffect)(() => {
            !1 === a.current && (a.current = !0),
              l.current &&
                ((() => {
                  let e = document.querySelector("header"),
                    s = document.getElementById("battlehubNav"),
                    a = s.getBoundingClientRect(),
                    t = window.pageYOffset + a.top - e.clientHeight;
                  g.ScrollTrigger.create({
                    trigger: "#wrapper",
                    start: "top+=".concat(t),
                    toggleClass: { targets: s, className: d().small },
                  });
                })(),
                r());
            let e = u()(() => {
              g.ScrollTrigger.refresh();
            }, 200);
            return (
              window.addEventListener("resize", e),
              () => {
                c.forEach((e) => e.kill()),
                  e.cancel(),
                  window.removeEventListener("resize", e);
              }
            );
          }, [r]),
          (0, t.jsx)("article", {
            className: d().page__battlehub__nav,
            ref: l,
            id: "battlehubNav",
            children: (0, t.jsx)("div", {
              className: d().page__battlehub__nav__inner,
              children: (0, t.jsxs)("ul", {
                className: d().page_link,
                children: [
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#hub",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e("[t]image__contents__interface__hub"),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "ハブ",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#fightingstand",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e(
                            "[t]image__contents__interface__fightingstand"
                          ),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "対戦台",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#avatarbattle",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e(
                            "[t]image__contents__interface__avatarbattle"
                          ),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "アバターバトル",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#cfn",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e("[t]image__contents__interface__cfn"),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "Capcom Fighters Network",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#eventcounter",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e(
                            "[t]image__contents__interface__eventcounter"
                          ),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "イベントカウンター",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#gamecenter",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e(
                            "[t]image__contents__interface__gamecenter"
                          ),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "ゲームセンター",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, t.jsx)("li", {
                    children: (0, t.jsxs)("a", {
                      href: "#hubgoodsshop",
                      onClick: o,
                      children: [
                        (0, t.jsx)("span", {
                          className: d().main,
                          children: e(
                            "[t]image__contents__interface__hubgoodsshop"
                          ),
                        }),
                        "ja-jp" === s
                          ? (0, t.jsx)("span", {
                              className: d().sub,
                              children: "グッズ・ショップ",
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      var f = a(34829);
      let N = () => {
        let { t: e, lang: s } = (0, i.A)("mode/battlehub"),
          a = (0, n.useRef)(!1),
          l = (0, n.useRef)(null),
          c = {
            arrows: !0,
            bars: !0,
            autoplay: !0,
            autoplaySpeed: 4600,
            flick: !0,
            overlapping: !0,
          },
          r = (e) => {
            let s = e.currentTarget,
              a = Array.from(s.parentElement.children),
              t = a.indexOf(s);
            a.forEach((e, s) => {
              e.classList.toggle("".concat(d().active), s === t);
            }),
              l.current &&
                Array.from(l.current.children).forEach((e, s) => {
                  e.classList.toggle("".concat(d().active), s === t);
                });
          };
        return (
          (0, n.useEffect)(() => {
            !1 === a.current && (a.current = !0);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("article", {
                id: "hub",
                className: "".concat(d().page__battlehub__hub, " page_article"),
                children: [
                  (0, t.jsxs)("section", {
                    className: d().headding,
                    children: [
                      (0, t.jsxs)("h2", {
                        children: [
                          (0, t.jsx)("span", { children: "HUB" }),
                          (0, t.jsx)("span", { children: "HUB" }),
                          (0, t.jsx)("span", { children: "HUB" }),
                          (0, t.jsx)("span", { children: "HUB" }),
                          (0, t.jsx)("span", { children: "HUB" }),
                          (0, t.jsx)("span", { children: "HUB" }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children: (0, t.jsx)("span", {
                          children: e("[t]hub__text"),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("section", {
                    className: d().floor,
                    children: [
                      (0, t.jsxs)("div", {
                        className: d().floor__left,
                        children: [
                          (0, t.jsxs)("div", {
                            className: d().floor__left__bg,
                            children: [
                              (0, t.jsxs)("ul", {
                                children: [
                                  (0, t.jsx)("li", {
                                    children: e("[t]floor__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]floor__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]floor__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]floor__title"),
                                  }),
                                ],
                              }),
                              (0, t.jsx)("span", { className: d().hex1 }),
                              (0, t.jsx)("span", { className: d().hex2 }),
                              (0, t.jsx)("span", { className: d().box1 }),
                              (0, t.jsx)("span", { className: d().box2 }),
                            ],
                          }),
                          (0, t.jsxs)("h2", {
                            children: [
                              e("[t]floor__title"),
                              "ja-jp" === s
                                ? (0, t.jsx)("span", { children: "／ フロア" })
                                : null,
                            ],
                          }),
                          (0, t.jsx)("span", {
                            className: d().floor__left__rect,
                          }),
                          (0, t.jsx)("p", { children: e("[t]floor__text") }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: d().floor__slider,
                        children: (0, t.jsx)(f.A, {
                          settings: c,
                          contentName: "battlehub",
                          children: (0, t.jsxs)(n.Fragment, {
                            children: [
                              (0, t.jsx)(
                                "li",
                                {
                                  className: ""
                                    .concat(d().slides__item, " ")
                                    .concat(d().active),
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor1.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss1"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor2.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss2"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor3.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss3"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor4.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss4"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor5.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss5"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/floor6.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss6"
                              ),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("section", {
                    className: d().communication,
                    children: [
                      (0, t.jsxs)("div", {
                        className: d().communication__right,
                        children: [
                          (0, t.jsxs)("div", {
                            className: d().communication__right__bg,
                            children: [
                              (0, t.jsxs)("ul", {
                                children: [
                                  (0, t.jsx)("li", {
                                    children: e("[t]communication__bg__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]communication__bg__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]communication__bg__title"),
                                  }),
                                  (0, t.jsx)("li", {
                                    children: e("[t]communication__bg__title"),
                                  }),
                                ],
                              }),
                              (0, t.jsx)("span", { className: d().hex1 }),
                              (0, t.jsx)("span", { className: d().hex2 }),
                              (0, t.jsx)("span", { className: d().box1 }),
                              (0, t.jsx)("span", { className: d().box2 }),
                            ],
                          }),
                          (0, t.jsxs)("h2", {
                            children: [
                              e("[t]communication__title"),
                              "ja-jp" === s
                                ? (0, t.jsx)("span", {
                                    children: "／ コミュニケーション",
                                  })
                                : null,
                            ],
                          }),
                          (0, t.jsx)("span", {
                            className: d().communication__right__rect,
                          }),
                          (0, t.jsx)("p", {
                            children: e("[t]communication__text"),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: d().communication__slider,
                        children: (0, t.jsx)(f.A, {
                          settings: c,
                          contentName: "battlehub",
                          children: (0, t.jsxs)(n.Fragment, {
                            children: [
                              (0, t.jsx)(
                                "li",
                                {
                                  className: ""
                                    .concat(d().slides__item, " ")
                                    .concat(d().active),
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/communication1.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss1"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/communication2_".concat(
                                      "ja-jp" !== s ? "en" : "ja",
                                      ".jpg"
                                    ),
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss2"
                              ),
                              (0, t.jsx)(
                                "li",
                                {
                                  className: d().slides__item,
                                  children: (0, t.jsx)(o(), {
                                    src: "/6/assets/images/mode/bh/communication3.jpg",
                                    width: "979",
                                    height: "549",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss3"
                              ),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("article", {
                id: "fightingstand",
                className: "".concat(
                  d().page__battlehub__fightingstand,
                  " page_article"
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: d().bg,
                    children: [
                      (0, t.jsx)("span", { className: d().hex }),
                      (0, t.jsx)("span", { className: d().rect }),
                      (0, t.jsx)("span", { className: d().box1 }),
                      (0, t.jsx)("span", { className: d().box2 }),
                      (0, t.jsx)("span", { className: d().box3 }),
                      (0, t.jsx)("span", { className: d().box4 }),
                      (0, t.jsx)("span", { className: d().box5 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: d().left,
                    children: [
                      (0, t.jsxs)("h2", {
                        children: [
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]fightingstand__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]fightingstand__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]fightingstand__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]fightingstand__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]fightingstand__title"),
                          }),
                          "ja-jp" === s
                            ? (0, t.jsx)("span", {
                                className: d().sub,
                                children: "／対戦台",
                              })
                            : null,
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children: (0, t.jsx)("span", {
                          children: e("[t]fightingstand__text"),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("ul", {
                    className: d().images,
                    children: [
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/fs_pic1.png",
                          width: "1224",
                          height: "679",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/fs_pic2.png",
                          width: "777",
                          height: "442",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("article", {
                id: "avatarbattle",
                className: "".concat(
                  d().page__battlehub__avatarbattle,
                  " page_article"
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: d().bg,
                    children: [
                      (0, t.jsx)("span", { className: d().hex }),
                      (0, t.jsx)("span", { className: d().rect }),
                      (0, t.jsx)("span", { className: d().box1 }),
                      (0, t.jsx)("span", { className: d().box2 }),
                      (0, t.jsx)("span", { className: d().box3 }),
                      (0, t.jsx)("span", { className: d().box4 }),
                      (0, t.jsx)("span", { className: d().box5 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: d().left,
                    children: [
                      (0, t.jsxs)("h2", {
                        children: [
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]avatarbattle__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]avatarbattle__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]avatarbattle__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]avatarbattle__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]avatarbattle__title"),
                          }),
                          "ja-jp" === s
                            ? (0, t.jsx)("span", {
                                className: d().sub,
                                children: "／アバターバトル",
                              })
                            : null,
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: d().text,
                        children: (0, t.jsx)("span", {
                          children: e("[t]avatarbattle__text"),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: d().video,
                    children: (0, t.jsx)("div", {
                      className: d().video__inner,
                      children: (0, t.jsx)("a", {
                        href: "https://www.youtube.com/watch?v=R8xpWGkHLHI",
                        target: "_blank",
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/avatar_post.jpg",
                          width: "1280",
                          height: "720",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("article", {
                id: "cfn",
                className: "".concat(d().page__battlehub__cfn, " page_article"),
                children: [
                  (0, t.jsxs)("div", {
                    className: d().bg,
                    children: [
                      (0, t.jsx)("span", { className: d().hex }),
                      (0, t.jsx)("span", { className: d().rect }),
                      (0, t.jsx)("span", { className: d().box1 }),
                      (0, t.jsx)("span", { className: d().box2 }),
                      (0, t.jsx)("span", { className: d().box3 }),
                      (0, t.jsx)("span", { className: d().box4 }),
                      (0, t.jsx)("span", { className: d().box5 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: ""
                      .concat(d().page_article__inner, " ")
                      .concat(d().page_article__inner__1),
                    children: [
                      (0, t.jsxs)("div", {
                        className: d().left,
                        children: [
                          (0, t.jsxs)("h2", {
                            children: [
                              (0, t.jsx)("span", {
                                className: d().main,
                                children: e("[t]cfn__title"),
                              }),
                              (0, t.jsx)("span", {
                                className: d().main,
                                children: e("[t]cfn__title"),
                              }),
                              (0, t.jsx)("span", {
                                className: d().main,
                                children: e("[t]cfn__title"),
                              }),
                              (0, t.jsx)("span", {
                                className: d().main,
                                children: e("[t]cfn__title"),
                              }),
                              (0, t.jsx)("span", {
                                className: d().main,
                                children: e("[t]cfn__title"),
                              }),
                              (0, t.jsx)("span", {
                                className: d().sub,
                                children: "／Capcom Fighters Network",
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: d().text,
                            children: (0, t.jsx)("span", {
                              children: e("[t]cfn__text1"),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: d().images,
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/cfn_image1".concat(
                            "ja-jp" !== s ? "-en" : "",
                            ".jpg"
                          ),
                          width: "1248",
                          height: "702",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: ""
                      .concat(d().page_article__inner, " ")
                      .concat(d().page_article__inner__2),
                    children: [
                      (0, t.jsx)("p", {
                        className: d().text,
                        children: (0, t.jsx)("span", {
                          children: e("[t]cfn__text2"),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: d().images,
                        children: [
                          (0, t.jsxs)("ul", {
                            className: ""
                              .concat(d().images__list, " ")
                              .concat(d().images__list__cfn),
                            ref: l,
                            children: [
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__item, " ")
                                  .concat(d().images__list__item__cfn, " ")
                                  .concat(d().active),
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image2".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "799",
                                  height: "450",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__item, " ")
                                  .concat(d().images__list__item__cfn),
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image3".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "799",
                                  height: "450",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__item, " ")
                                  .concat(d().images__list__item__cfn),
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image4".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "799",
                                  height: "450",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__item, " ")
                                  .concat(d().images__list__item__cfn),
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image5".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "799",
                                  height: "450",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__item, " ")
                                  .concat(d().images__list__item__cfn),
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image6.jpg",
                                  width: "799",
                                  height: "450",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("ul", {
                            className: ""
                              .concat(d().images__list__thumb, " ")
                              .concat(d().images__list__thumb__cfn),
                            children: [
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__thumb__item, " ")
                                  .concat(
                                    d().images__list__thumb__item__cfn,
                                    " "
                                  )
                                  .concat(d().active),
                                onClick: r,
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image2".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "132",
                                  height: "74",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__thumb__item, " ")
                                  .concat(d().images__list__thumb__item__cfn),
                                onClick: r,
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image3".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "132",
                                  height: "74",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__thumb__item, " ")
                                  .concat(d().images__list__thumb__item__cfn),
                                onClick: r,
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image4".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "132",
                                  height: "74",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__thumb__item, " ")
                                  .concat(d().images__list__thumb__item__cfn),
                                onClick: r,
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image5".concat(
                                    "ja-jp" !== s ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "132",
                                  height: "74",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("li", {
                                className: ""
                                  .concat(d().images__list__thumb__item, " ")
                                  .concat(d().images__list__thumb__item__cfn),
                                onClick: r,
                                children: (0, t.jsx)(o(), {
                                  src: "/6/assets/images/mode/bh/cfn_image6.jpg",
                                  width: "132",
                                  height: "74",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("article", {
                id: "eventcounter",
                className: "".concat(
                  d().page__battlehub__eventcounter,
                  " page_article"
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: d().bg,
                    children: [
                      (0, t.jsx)("span", { className: d().hex }),
                      (0, t.jsx)("span", { className: d().rect }),
                      (0, t.jsx)("span", { className: d().box1 }),
                      (0, t.jsx)("span", { className: d().box2 }),
                      (0, t.jsx)("span", { className: d().box3 }),
                      (0, t.jsx)("span", { className: d().box4 }),
                      (0, t.jsx)("span", { className: d().box5 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: d().left,
                    children: [
                      (0, t.jsxs)("h2", {
                        children: [
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]eventcounter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]eventcounter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]eventcounter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]eventcounter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]eventcounter__title"),
                          }),
                          "ja-jp" === s
                            ? (0, t.jsx)("span", {
                                className: d().sub,
                                children: "／ イベント受付カウンター",
                              })
                            : null,
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children: (0, t.jsx)("span", {
                          children: e("[t]eventcounter__text"),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("ul", {
                    className: d().images,
                    children: [
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/ec_pic1.png",
                          width: "1224",
                          height: "679",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/ec_pic2.png",
                          width: "777",
                          height: "442",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("article", {
                id: "gamecenter",
                className: "".concat(
                  d().page__battlehub__gamecenter,
                  " page_article"
                ),
                children: [
                  (0, t.jsxs)("div", {
                    className: d().bg,
                    children: [
                      (0, t.jsx)("span", { className: d().hex }),
                      (0, t.jsx)("span", { className: d().rect }),
                      (0, t.jsx)("span", { className: d().box1 }),
                      (0, t.jsx)("span", { className: d().box2 }),
                      (0, t.jsx)("span", { className: d().box3 }),
                      (0, t.jsx)("span", { className: d().box4 }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: d().left,
                    children: [
                      (0, t.jsxs)("h2", {
                        children: [
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]gamecenter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]gamecenter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]gamecenter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]gamecenter__title"),
                          }),
                          (0, t.jsx)("span", {
                            className: d().main,
                            children: e("[t]gamecenter__title"),
                          }),
                          "ja-jp" === s
                            ? (0, t.jsx)("span", {
                                className: d().sub,
                                children: "／ゲームセンター",
                              })
                            : null,
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children: (0, t.jsx)("span", {
                          children: e("[t]gamecenter__text"),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("ul", {
                    className: d().images,
                    children: [
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/gc_pic1.png",
                          width: "1224",
                          height: "679",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                      (0, t.jsx)("li", {
                        children: (0, t.jsx)(o(), {
                          src: "/6/assets/images/mode/bh/gc_pic2.png",
                          width: "777",
                          height: "442",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("article", {
                id: "hubgoodsshop",
                className: "".concat(
                  d().page__battlehub__hubgoodsshop,
                  " page_article"
                ),
                children: (0, t.jsxs)("div", {
                  className: d().page__battlehub__hubgoodsshop__inner,
                  children: [
                    (0, t.jsxs)("div", {
                      className: d().left,
                      children: [
                        (0, t.jsxs)("h2", {
                          children: [
                            e("[t]hubgoodsshop__title"),
                            "ja-jp" === s
                              ? (0, t.jsx)("span", {
                                  children: "／ ハブグッズショップ",
                                })
                              : null,
                          ],
                        }),
                        (0, t.jsx)("p", {
                          children: (0, t.jsx)("span", {
                            children: e("[t]hubgoodsshop__text"),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("ul", {
                      className: d().images,
                      children: [
                        (0, t.jsx)("li", {
                          children: (0, t.jsx)(o(), {
                            src: "/6/assets/images/mode/bh/hgs_pic1.jpg",
                            width: "1299",
                            height: "841",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, t.jsx)("li", {
                          children: (0, t.jsx)(o(), {
                            src: "/6/assets/images/mode/bh/hgs_pic2.jpg",
                            width: "512",
                            height: "249",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, t.jsx)("li", {
                          children: (0, t.jsx)(o(), {
                            src: "/6/assets/images/mode/bh/hgs_pic3.jpg",
                            width: "505",
                            height: "247",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var v = a(57543),
        w = a(49715);
      let y = (e) => {
        let { isVisible: s, setModalVisible: a } = e,
          { t: n, lang: l } = (0, i.A)("index");
        if (!s) return null;
        let c = document.querySelector("html");
        c.classList.add("no_scroll");
        let r = document.getElementById("wrapper"),
          m = () => {
            a(!1), c.classList.remove("no_scroll");
          };
        return (0, w.createPortal)(
          (0, t.jsxs)("article", {
            className: "".concat(d().page__battlehub__image__modal, " modal"),
            children: [
              (0, t.jsx)("div", { className: d().modal__bg, onClick: m }),
              (0, t.jsxs)("section", {
                children: [
                  (0, t.jsx)("div", {
                    className: d().modal__mv,
                    children: (0, t.jsx)(o(), {
                      className: d().all,
                      src: "/6/assets/images/mode/bh/art.jpg",
                      width: "1920",
                      height: "1080",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "close",
                    onClick: m,
                    children: (0, t.jsx)(o(), {
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
      };
      var z = !0;
      let k = () => {
        let { t: e, lang: s } = (0, i.A)("mode/battlehub"),
          [a, r] = (0, n.useState)(!1);
        return (0, t.jsxs)(c.A, {
          children: [
            (0, t.jsx)(l.A, {
              pageTitle: e("[t]title"),
              pageDescription: e("[t]description"),
            }),
            (0, t.jsxs)("div", {
              className: "contents page__battlehub",
              children: [
                (0, t.jsx)(x, { setModalVisible: r }),
                (0, t.jsx)(b, {}),
                (0, t.jsx)(N, {}),
                (0, t.jsx)(v.A, {}),
                (0, t.jsx)(y, { isVisible: a, setModalVisible: r }),
              ],
            }),
          ],
        });
      };
    },
    22740: (e, s, a) => {
      e.exports = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
    },
    29345: (e, s, a) => {
      var t = a(22740),
        i = "object" == typeof self && self && self.Object === Object && self;
      e.exports = t || i || Function("return this")();
    },
    30551: (e) => {
      e.exports = {
        interface_box: "interface_interface_box__ZQVoO",
        wt: "interface_wt__FGvn0",
        bh: "interface_bh__WZoGS",
        fg: "interface_fg__kuVMB",
        active: "interface_active__PwdEc",
        blink: "interface_blink__9_frJ",
      };
    },
    32236: (e, s, a) => {
      var t = a(56869),
        i = a(44961),
        n = a(98078),
        l = t ? t.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : l && l in Object(e)
          ? i(e)
          : n(e);
      };
    },
    44940: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    44961: (e, s, a) => {
      var t = a(56869),
        i = Object.prototype,
        n = i.hasOwnProperty,
        l = i.toString,
        c = t ? t.toStringTag : void 0;
      e.exports = function (e) {
        var s = n.call(e, c),
          a = e[c];
        try {
          e[c] = void 0;
          var t = !0;
        } catch (e) {}
        var i = l.call(e);
        return t && (s ? (e[c] = a) : delete e[c]), i;
      };
    },
    56869: (e, s, a) => {
      e.exports = a(29345).Symbol;
    },
    57543: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => m });
      var t = a(66162),
        i = a(66833),
        n = a(69996),
        l = a(44922),
        c = a(30551),
        r = a.n(c),
        o = a(47573);
      let m = () => {
        let { t: e, lang: s } = (0, n.A)("common"),
          a = (0, l.useRef)(!1),
          c = encodeURI((0, i.useRouter)().asPath);
        return (
          (0, l.useEffect)(() => {
            !1 === a.current && (a.current = !0);
          }, []),
          (0, t.jsx)("article", {
            className: r().interface_box,
            children: (0, t.jsxs)("ul", {
              children: [
                (0, t.jsx)("li", {
                  className: c.match(/fightingground/)
                    ? "".concat(r().fg, " ").concat(r().active)
                    : r().fg,
                  children: (0, t.jsx)("a", {
                    href: "fightingground",
                    children: (0, t.jsx)(o.j_, {}),
                  }),
                }),
                (0, t.jsx)("li", {
                  className: c.match(/battlehub/)
                    ? "".concat(r().bh, " ").concat(r().active)
                    : r().bh,
                  children: (0, t.jsx)("a", {
                    href: "battlehub",
                    children: (0, t.jsx)(o.eN, {}),
                  }),
                }),
                (0, t.jsx)("li", {
                  className: c.match(/worldtour/)
                    ? "".concat(r().wt, " ").concat(r().active)
                    : r().wt,
                  children: (0, t.jsx)("a", {
                    href: "worldtour",
                    children: (0, t.jsx)(o.pN, {}),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    59672: (e, s, a) => {
      var t = a(29345);
      e.exports = function () {
        return t.Date.now();
      };
    },
    60266: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mode/battlehub",
        function () {
          return a(13616);
        },
      ]);
    },
    64332: (e, s, a) => {
      var t = a(1696),
        i = a(66539),
        n = a(90052),
        l = 0 / 0,
        c = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        m = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (n(e)) return l;
        if (i(e)) {
          var s = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(s) ? s + "" : s;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = t(e);
        var a = r.test(e);
        return a || o.test(e) ? m(e.slice(2), a ? 2 : 8) : c.test(e) ? l : +e;
      };
    },
    66539: (e) => {
      e.exports = function (e) {
        var s = typeof e;
        return null != e && ("object" == s || "function" == s);
      };
    },
    83075: (e, s, a) => {
      var t = a(66539),
        i = a(59672),
        n = a(64332),
        l = Math.max,
        c = Math.min;
      e.exports = function (e, s, a) {
        var r,
          o,
          m,
          _,
          h,
          d,
          j = 0,
          x = !1,
          g = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function u(s) {
          var a = r,
            t = o;
          return (r = o = void 0), (j = s), (_ = e.apply(t, a));
        }
        function b(e) {
          var a = e - d,
            t = e - j;
          return void 0 === d || a >= s || a < 0 || (g && t >= m);
        }
        function f() {
          var e,
            a,
            t,
            n = i();
          if (b(n)) return N(n);
          h = setTimeout(
            f,
            ((e = n - d), (a = n - j), (t = s - e), g ? c(t, m - a) : t)
          );
        }
        function N(e) {
          return ((h = void 0), p && r) ? u(e) : ((r = o = void 0), _);
        }
        function v() {
          var e,
            a = i(),
            t = b(a);
          if (((r = arguments), (o = this), (d = a), t)) {
            if (void 0 === h)
              return (j = e = d), (h = setTimeout(f, s)), x ? u(e) : _;
            if (g) return clearTimeout(h), (h = setTimeout(f, s)), u(d);
          }
          return void 0 === h && (h = setTimeout(f, s)), _;
        }
        return (
          (s = n(s) || 0),
          t(a) &&
            ((x = !!a.leading),
            (m = (g = "maxWait" in a) ? l(n(a.maxWait) || 0, s) : m),
            (p = "trailing" in a ? !!a.trailing : p)),
          (v.cancel = function () {
            void 0 !== h && clearTimeout(h), (j = 0), (r = d = o = h = void 0);
          }),
          (v.flush = function () {
            return void 0 === h ? _ : N(i());
          }),
          v
        );
      };
    },
    90052: (e, s, a) => {
      var t = a(32236),
        i = a(44940);
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && "[object Symbol]" == t(e));
      };
    },
    98078: (e) => {
      var s = Object.prototype.toString;
      e.exports = function (e) {
        return s.call(e);
      };
    },
  },
  (e) => {
    e.O(0, [36742, 88649, 42650, 86130, 34829, 90636, 46593, 38792], () =>
      e((e.s = 60266))
    ),
      (_N_E = e.O());
  },
]);
