(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [74307],
  {
    1696: (s, e, t) => {
      var n = t(6094),
        a = /^\s+/;
      s.exports = function (s) {
        return s ? s.slice(0, n(s) + 1).replace(a, "") : s;
      };
    },
    6094: (s) => {
      var e = /\s/;
      s.exports = function (s) {
        for (var t = s.length; t-- && e.test(s.charAt(t)); );
        return t;
      };
    },
    22740: (s, e, t) => {
      s.exports = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
    },
    29345: (s, e, t) => {
      var n = t(22740),
        a = "object" == typeof self && self && self.Object === Object && self;
      s.exports = n || a || Function("return this")();
    },
    30551: (s) => {
      s.exports = {
        interface_box: "interface_interface_box__ZQVoO",
        wt: "interface_wt__FGvn0",
        bh: "interface_bh__WZoGS",
        fg: "interface_fg__kuVMB",
        active: "interface_active__PwdEc",
        blink: "interface_blink__9_frJ",
      };
    },
    32236: (s, e, t) => {
      var n = t(56869),
        a = t(44961),
        i = t(98078),
        l = n ? n.toStringTag : void 0;
      s.exports = function (s) {
        return null == s
          ? void 0 === s
            ? "[object Undefined]"
            : "[object Null]"
          : l && l in Object(s)
          ? a(s)
          : i(s);
      };
    },
    33329: (s, e, t) => {
      "use strict";
      t.r(e), t.d(e, { __N_SSG: () => I, default: () => T });
      var n = t(66162),
        a = t(44922),
        i = t(69996),
        l = t(12350),
        c = t(86130),
        o = t(56709),
        r = t.n(o),
        d = t(42650),
        m = t(42223),
        _ = t(55315),
        h = t.n(_),
        g = t(47573);
      let x = (s) => {
        let { setModalVisible: e, setModalImage: t } = s,
          { t: l, lang: c } = (0, i.A)("mode/fightingground"),
          o = (0, a.useRef)(!1),
          _ = (0, a.useRef)([]),
          x = (0, a.useRef)([]);
        d.os.config({ nullTargetWarn: !1 });
        let p = (() => {
          switch (c) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              return (0, n.jsx)(g.em, {});
            case "fr":
              return (0, n.jsx)(g.PQ, {});
            case "it":
              return (0, n.jsx)(g.c8, {});
            case "de":
              return (0, n.jsx)(g.Qj, {});
            case "es-es":
            case "es-us":
              return (0, n.jsx)(g.lv, {});
            case "pt-br":
              return (0, n.jsx)(g.jQ, {});
            default:
              return (0, n.jsx)(g.X0, {});
          }
        })();
        return (
          (0, a.useEffect)(() => {
            !1 === o.current && (o.current = !0),
              (() => {
                let s = document.querySelector(".contents");
                d.os.to(s, 1, { opacity: 1, ease: m.G6.easeOut }),
                  d.os.to(x.current, 1.5, { y: 0, ease: m.G6.easeOut }),
                  d.os.to(_.current, 1.7, {
                    scale: 1,
                    opacity: 1,
                    ease: m.G6.easeOut,
                  });
              })();
          }, []),
          (0, n.jsxs)("article", {
            className: h().page__fightingground__image,
            children: [
              (0, n.jsx)("div", {
                className: h().page__fightingground__image__mv,
                ref: _,
                children: (0, n.jsx)("div", {
                  className: h().mainImage__btn,
                  onClick: () => {
                    e(!0), t("mainImage");
                  },
                  children: (0, n.jsx)("div", {
                    className: h().image,
                    children: (0, n.jsx)(r(), {
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
              (0, n.jsx)("div", {
                className: h().page__fightingground__image__contents,
                ref: x,
                children: (0, n.jsxs)("div", {
                  className: h().image__contents,
                  children: [
                    (0, n.jsx)("div", {
                      className: h().image__contents__bg__title,
                      children: (0, n.jsx)(g.j_, {}),
                    }),
                    (0, n.jsxs)("h1", {
                      children: [
                        (0, n.jsx)("span", { children: p }),
                        (0, n.jsx)(g.j_, {}),
                      ],
                    }),
                    (0, n.jsx)("p", {
                      className: h().image__contents__text,
                      children: l("[t]image__contents__text"),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var p = t(92674),
        j = t(83075),
        u = t.n(j);
      let y = (s) => {
          let { onContentPageChanged: e, activeId: t } = s,
            { t: l, lang: c } = (0, i.A)("mode/fightingground"),
            o = (0, a.useRef)(!1),
            [r, m] = (0, a.useState)(!1),
            _ = (0, a.useRef)(""),
            g = (0, a.useRef)(""),
            x = (0, a.useRef)(""),
            j = (0, a.useRef)(""),
            y = (0, a.useRef)("");
          d.os.config({ nullTargetWarn: !1 }),
            d.os.registerPlugin(p.ScrollTrigger);
          let N = (s) => {
              if ("contents" === s) {
                m(!0),
                  e(!0),
                  g.current.classList.remove(h().current),
                  x.current.classList.add(h().current);
                let s = document.querySelector("#driveSystem");
                if (s) {
                  let e =
                    s.getBoundingClientRect().top + window.pageYOffset - 150;
                  window.scrollTo({ top: e, behavior: "smooth" });
                }
              } else {
                m(!1),
                  e(!1),
                  x.current.classList.remove(h().current),
                  g.current.classList.add(h().current);
                let s = document.querySelector("#versus");
                if (s) {
                  let e =
                    s.getBoundingClientRect().top + window.pageYOffset - 150;
                  window.scrollTo({ top: e, behavior: "smooth" });
                }
              }
            },
            z = [],
            w = () => {
              let s = window.innerWidth,
                e = document.querySelectorAll(".page_contents, .page_system"),
                t = _.current.querySelector("ul:nth-child(2)");
              t &&
                e.forEach((e, n) => {
                  let a = p.ScrollTrigger.create({
                    trigger: e,
                    id: e.id,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleClass: {
                      targets: t,
                      className: ((s) => {
                        if (r)
                          switch (s) {
                            case "versus":
                              return h().versus;
                            case "onlinebattle":
                              return h().onlinebattle;
                            case "extremebattle":
                              return h().extremebattle;
                            case "arcade":
                              return h().arcade;
                            case "trainingmode":
                              return h().trainingmode;
                            default:
                              return "";
                          }
                        switch (s) {
                          case "driveSystem":
                            return h().driveSystem;
                          case "controlType":
                            return h().controlType;
                          case "liveCommentary":
                            return h().liveCommentary;
                          case "battleDamage":
                            return h().battleDamage;
                          case "accessibility":
                            return h().accessibility;
                          default:
                            return "";
                        }
                      })(e.id),
                    },
                    onEnter: () => {
                      s <= 767 &&
                        t.scroll({
                          left: 0.42 * t.clientWidth * n,
                          behavior: "smooth",
                        });
                    },
                    onEnterBack: () => {
                      s <= 767 &&
                        t.scroll({
                          left: 0.42 * t.clientWidth * n,
                          behavior: "smooth",
                        });
                    },
                  });
                  z.push(a);
                });
            },
            f = (s) => {
              s.preventDefault();
              let e = s.currentTarget.getAttribute("href"),
                t = document.querySelector(e),
                n = document.querySelector("header"),
                a = t.getBoundingClientRect(),
                i =
                  window.pageYOffset +
                  a.top -
                  n.clientHeight -
                  _.current.clientHeight;
              window.scrollTo({ top: i, behavior: "smooth" });
            };
          return (
            (0, a.useEffect)(() => {
              !1 === o.current && (o.current = !0),
                _.current &&
                  ((() => {
                    let s = document.querySelector("header"),
                      e = document.getElementById("fightinggroundNav"),
                      t = e.getBoundingClientRect(),
                      n = window.pageYOffset + t.top - s.clientHeight;
                    p.ScrollTrigger.create({
                      trigger: "#wrapper",
                      start: "top+=".concat(n),
                      toggleClass: { targets: e, className: h().small },
                    });
                  })(),
                  w());
              let s = u()(() => {
                p.ScrollTrigger.refresh();
              }, 200);
              return (
                window.addEventListener("resize", s),
                () => {
                  z.forEach((s) => s.kill()),
                    s.cancel(),
                    window.removeEventListener("resize", s);
                }
              );
            }, [r, w]),
            (0, n.jsx)("article", {
              className: h().page__fightingground__nav,
              ref: _,
              id: "fightinggroundNav",
              children: (0, n.jsxs)("div", {
                className: h().page__fightingground__nav__inner,
                children: [
                  (0, n.jsxs)("ul", {
                    className: h().tab_link,
                    children: [
                      (0, n.jsx)("li", {
                        className: ""
                          .concat(h().system, " ")
                          .concat(h().current),
                        ref: g,
                        children: (0, n.jsx)("span", {
                          onClick: () => N("system"),
                          children: l("[t]image__contents__interface__system"),
                        }),
                      }),
                      (0, n.jsx)("li", {
                        className: "".concat(h().contents),
                        ref: x,
                        children: (0, n.jsx)("span", {
                          onClick: () => N("contents"),
                          children: l(
                            "[t]image__contents__interface__contents"
                          ),
                        }),
                      }),
                    ],
                  }),
                  r
                    ? (0, n.jsxs)("ul", {
                        className: ""
                          .concat(h().page_link, " ")
                          .concat(h().nav_contents),
                        ref: j,
                        children: [
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#versus",
                              onClick: f,
                              "data-target": "versus",
                              className: "versus" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__versus"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "バーサス",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#onlinebattle",
                              onClick: f,
                              "data-target": "onlinebattle",
                              className: "onlinebattle" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__onlinebattle"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "オンラインバトル",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#extremebattle",
                              onClick: f,
                              "data-target": "extremebattle",
                              className:
                                "extremebattle" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__extreamebattle"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "エクストリームバトル",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#arcade",
                              onClick: f,
                              "data-target": "arcade",
                              className: "arcade" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__arcade"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "アーケード",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#trainingmode",
                              onClick: f,
                              "data-target": "trainingmode",
                              className: "trainingmode" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__trainingmode"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "トレーニングメニュー",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                        ],
                      })
                    : (0, n.jsxs)("ul", {
                        className: ""
                          .concat(h().page_link, " ")
                          .concat(h().nav_system),
                        ref: y,
                        children: [
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#driveSystem",
                              onClick: f,
                              "data-target": "driveSystem",
                              className: "driveSystem" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__drive"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "ドライブシステム",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#controlType",
                              onClick: f,
                              "data-target": "controlType",
                              className: "controlType" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__control"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "操作タイプ",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#liveCommentary",
                              onClick: f,
                              "data-target": "liveCommentary",
                              className:
                                "liveCommentary" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__live"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "自動実況",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#battleDamage",
                              onClick: f,
                              "data-target": "battleDamage",
                              className: "battleDamage" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__battlegamage"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "ダメージ表現設定",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, n.jsx)("li", {
                            children: (0, n.jsxs)("a", {
                              href: "#accessibility",
                              onClick: f,
                              "data-target": "accessibility",
                              className:
                                "accessibility" === t ? h().active : "",
                              children: [
                                (0, n.jsx)("span", {
                                  className: h().main,
                                  children: l(
                                    "[t]image__contents__interface__accessibility"
                                  ),
                                }),
                                "ja-jp" === c
                                  ? (0, n.jsx)("span", {
                                      className: h().sub,
                                      children: "サウンドアクセシビリティ",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                        ],
                      }),
                ],
              }),
            })
          );
        },
        N = (s) => {
          let { setModalVisible: e, setModalImage: t } = s,
            { t: l, lang: c } = (0, i.A)("mode/fightingground"),
            o = (0, a.useRef)(!1),
            d = (0, a.useRef)([]);
          for (let s = 0; s < 5; s++) d.current[s] = (0, a.createRef)();
          let [m, _] = (0, a.useState)(0),
            x = (s, e) => {
              for (let s = 0; s < d.current.length; s++)
                d.current[s].current.classList.remove("".concat(h().prev)),
                  d.current[s].current.classList.remove("".concat(h().next)),
                  d.current[s].current.classList.add("".concat(h().min)),
                  d.current[s].current.classList.remove("".concat(h().open)),
                  d.current[s].current.classList.remove("".concat(h().right));
              e - 1 >= 0 &&
                d.current[e - 1].current.classList.add("".concat(h().prev)),
                e + 1 !== d.current.length &&
                  d.current[e + 1].current.classList.add("".concat(h().next)),
                d.current[e].current.classList.remove("".concat(h().min)),
                d.current[e].current.classList.add("".concat(h().open)),
                e > m &&
                  d.current[e].current.classList.add("".concat(h().right)),
                _(e);
            };
          return (
            (0, a.useEffect)(() => {
              !1 === o.current && (o.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "driveSystem",
              className: "".concat(
                h().page__fightingground__drive,
                " page_system"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": l("[t]image__contents__interface__drive"),
                  children: [
                    "ja-jp" === c
                      ? (0, n.jsx)("span", { children: "ドライブシステム" })
                      : null,
                    l("[t]image__contents__interface__drive"),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().simpleOperation,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().simpleOperation__contents,
                      children: [
                        (0, n.jsx)("h3", {
                          children: l("[t]simpleOperation__title"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().simpleOperation__contents__text,
                          children: l("[t]simpleOperation__text"),
                        }),
                        (0, n.jsx)("p", {
                          className: ""
                            .concat(h().simpleOperation__contents__link, " ")
                            .concat(h().btn),
                          onClick: () => {
                            e(!0), t("simpleOperationImage");
                          },
                          children: l("[t]simpleOperation__link"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: h().simpleOperation__image,
                      children: (0, n.jsx)(r(), {
                        src: "/6/assets/images/mode/fg/ds_01_s.jpg",
                        width: "1057",
                        height: "595",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().driveGauge,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().driveGauge__contents,
                      children: [
                        (0, n.jsx)("h3", {
                          children: l("[t]driveGauge__title"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().driveGauge__contents__text,
                          children: l("[t]driveGauge__text"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: h().driveGauge__image,
                      children: (0, n.jsx)(r(), {
                        src: "/6/assets/images/mode/fg/ds_02.jpg",
                        width: "598",
                        height: "285",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().commonSystem,
                  children: [
                    (0, n.jsx)("h3", { children: l("[t]commonSystem__title") }),
                    (0, n.jsxs)("div", {
                      className: h().commonSystem__contents,
                      children: [
                        (0, n.jsxs)("div", {
                          className: ""
                            .concat(h().commonSystem__contents__impact, " ")
                            .concat(h().item),
                          ref: d.current[0],
                          onClick: (s) => x(s, 0),
                          children: [
                            (0, n.jsxs)("section", {
                              className: h().outer,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().outer__num,
                                  children: (0, g.Hd)(1),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().outer__title,
                                  children: [
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブインパクト",
                                        })
                                      : null,
                                    (0, n.jsx)(g.Cd, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("section", {
                              className: h().inner,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().inner__num,
                                  children: (0, g.Hd)(1),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().inner__title,
                                  children: [
                                    (0, n.jsx)(g.Cd, {}),
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブインパクト",
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.jsxs)("p", {
                                  className: h().inner__cost,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: l(
                                        "[t]commonSystem__cost__title"
                                      ),
                                    }),
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_1.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    "\xd71",
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__text,
                                  children: l("[t]driveimpact__text"),
                                }),
                                (0, n.jsxs)("ul", {
                                  className: h().inner__command,
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__classic,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                            width: "30",
                                            height: "22",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                            width: "30",
                                            height: "27",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("li", {
                                      className: h().inner__command__modern,
                                      children: (0, n.jsx)("span", {
                                        className: h().keyBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/ps/key-BtnL1.png",
                                          width: "30",
                                          height: "22",
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
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: ""
                            .concat(h().commonSystem__contents__parry, " ")
                            .concat(h().item),
                          ref: d.current[1],
                          onClick: (s) => x(s, 1),
                          children: [
                            (0, n.jsxs)("section", {
                              className: h().outer,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().outer__num,
                                  children: (0, g.Hd)(2),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().outer__title,
                                  children: [
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブパリィ",
                                        })
                                      : null,
                                    (0, n.jsx)(g.AK, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("section", {
                              className: h().inner,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().inner__num,
                                  children: (0, g.Hd)(2),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().inner__title,
                                  children: [
                                    (0, n.jsx)(g.AK, {}),
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブパリィ",
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.jsxs)("p", {
                                  className: h().inner__cost,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: l(
                                        "[t]commonSystem__cost__title"
                                      ),
                                    }),
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_2.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    l("[t]commonSystem__cost__continue"),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__text,
                                  children: l("[t]driveparry__text"),
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__attention,
                                  children: l("[t]driveparry__attention"),
                                }),
                                (0, n.jsxs)("ul", {
                                  className: h().inner__command,
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__classic,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)("li", {
                                      className: h().inner__command__modern,
                                      children: (0, n.jsx)("span", {
                                        className: h().keyBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                          width: "30",
                                          height: "22",
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
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: ""
                            .concat(h().commonSystem__contents__drive, " ")
                            .concat(h().item),
                          ref: d.current[2],
                          onClick: (s) => x(s, 2),
                          children: [
                            (0, n.jsxs)("section", {
                              className: h().outer,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().outer__num,
                                  children: (0, g.Hd)(3),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().outer__title,
                                  children: [
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "オーバードライブ",
                                        })
                                      : null,
                                    (0, n.jsx)(g.qh, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("section", {
                              className: h().inner,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().inner__num,
                                  children: (0, g.Hd)(3),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().inner__title,
                                  children: [
                                    (0, n.jsx)(g.qh, {}),
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "オーバードライブ",
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.jsxs)("p", {
                                  className: h().inner__cost,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: l(
                                        "[t]commonSystem__cost__title"
                                      ),
                                    }),
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_1.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    "\xd72",
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__text,
                                  children: l("[t]overdrive__text"),
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__attention,
                                  children: l("[t]overdrive__attention"),
                                }),
                                (0, n.jsxs)("ul", {
                                  className: h().inner__command,
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__classic,
                                      children: [
                                        (0, n.jsx)("span", { children: "ex." }),
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-d.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-dr.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                            width: "30",
                                            height: "22",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__modern,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                            width: "30",
                                            height: "27",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                            width: "30",
                                            height: "30",
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
                        (0, n.jsxs)("div", {
                          className: ""
                            .concat(h().commonSystem__contents__rush, " ")
                            .concat(h().item),
                          ref: d.current[3],
                          onClick: (s) => x(s, 3),
                          children: [
                            (0, n.jsxs)("section", {
                              className: h().outer,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().outer__num,
                                  children: (0, g.Hd)(4),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().outer__title,
                                  children: [
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブラッシュ",
                                        })
                                      : null,
                                    (0, n.jsx)(g.GT, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("section", {
                              className: h().inner,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().inner__num,
                                  children: (0, g.Hd)(4),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().inner__title,
                                  children: [
                                    (0, n.jsx)(g.GT, {}),
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブラッシュ",
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.jsxs)("p", {
                                  className: h().inner__cost,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: l(
                                        "[t]commonSystem__cost__title"
                                      ),
                                    }),
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_1.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    "\xd71 or",
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_1.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    "\xd73",
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__text,
                                  children: l("[t]driverush__text"),
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__attention,
                                  children: l("[t]driverush__attention"),
                                }),
                                (0, n.jsxs)("ul", {
                                  className: h().inner__command,
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__classic,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__modern,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
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
                        (0, n.jsxs)("div", {
                          className: ""
                            .concat(h().commonSystem__contents__reversal, " ")
                            .concat(h().item),
                          ref: d.current[4],
                          onClick: (s) => x(s, 4),
                          children: [
                            (0, n.jsxs)("section", {
                              className: h().outer,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().outer__num,
                                  children: (0, g.Hd)(5),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().outer__title,
                                  children: [
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブリバーサル",
                                        })
                                      : null,
                                    (0, n.jsx)(g.Eu, {}),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("section", {
                              className: h().inner,
                              children: [
                                (0, n.jsx)("div", {
                                  className: h().inner__num,
                                  children: (0, g.Hd)(5),
                                }),
                                (0, n.jsxs)("h4", {
                                  className: h().inner__title,
                                  children: [
                                    (0, n.jsx)(g.Eu, {}),
                                    "ja-jp" === c
                                      ? (0, n.jsx)("span", {
                                          children: "ドライブリバーサル",
                                        })
                                      : null,
                                  ],
                                }),
                                (0, n.jsxs)("p", {
                                  className: h().inner__cost,
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: l(
                                        "[t]commonSystem__cost__title"
                                      ),
                                    }),
                                    (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/guage_1.png",
                                      width: "43",
                                      height: "14",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                    "\xd72",
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__text,
                                  children: l("[t]drivereversal__text"),
                                }),
                                (0, n.jsx)("p", {
                                  className: h().inner__attention,
                                  children: l("[t]drivereversal__attention"),
                                }),
                                (0, n.jsxs)("ul", {
                                  className: h().inner__command,
                                  children: [
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__classic,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                            width: "30",
                                            height: "20",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                            width: "30",
                                            height: "27",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("li", {
                                      className: h().inner__command__modern,
                                      children: [
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/key-r.png",
                                            width: "30",
                                            height: "30",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                        }),
                                        " ",
                                        "+",
                                        (0, n.jsx)("span", {
                                          className: h().keyBtn,
                                          children: (0, n.jsx)(r(), {
                                            src: "/6/assets/images/common/controller/ps/key-BtnL1.png",
                                            width: "30",
                                            height: "22",
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
                        (0, n.jsxs)("ul", {
                          className: h().commonSystem__interface,
                          children: [
                            (0, n.jsx)("li", {
                              className: h().commonSystem__interface__prev,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/common/arrow_interface_wh.png",
                                width: "35",
                                height: "66",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className: h().commonSystem__interface__next,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/common/arrow_interface_wh.png",
                                width: "35",
                                height: "66",
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
            })
          );
        };
      var z = t(34829);
      let w = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1),
            l = (() => {
              switch (e) {
                case "en-us":
                case "en-uk":
                case "en-asia":
                  return (0, n.jsx)(g.kn, {});
                case "fr":
                  return (0, n.jsx)(g.A6, {});
                case "it":
                  return (0, n.jsx)(g.Q2, {});
                case "de":
                  return (0, n.jsx)(g.I3, {});
                case "es-es":
                case "es-us":
                  return (0, n.jsx)(g.d3, {});
                case "pt-br":
                  return (0, n.jsx)(g.PO, {});
                default:
                  return (0, n.jsx)(g.gY, {});
              }
            })(),
            c = (() => {
              switch (e) {
                case "en-us":
                case "en-uk":
                case "en-asia":
                  return (0, n.jsx)(g.Hu, {});
                case "fr":
                  return (0, n.jsx)(g.Y1, {});
                case "it":
                  return (0, n.jsx)(g.tg, {});
                case "de":
                  return (0, n.jsx)(g.Xq, {});
                case "es-es":
                case "es-us":
                  return (0, n.jsx)(g.Al, {});
                case "pt-br":
                  return (0, n.jsx)(g.qS, {});
                default:
                  return (0, n.jsx)(g.yC, {});
              }
            })(),
            o = (() => {
              switch (e) {
                case "en-us":
                case "en-uk":
                case "en-asia":
                  return (0, n.jsx)(g.wk, {});
                case "fr":
                  return (0, n.jsx)(g.t6, {});
                case "it":
                  return (0, n.jsx)(g.Km, {});
                case "de":
                  return (0, n.jsx)(g.Gp, {});
                case "es-es":
                case "es-us":
                  return (0, n.jsx)(g.Fe, {});
                case "pt-br":
                  return (0, n.jsx)(g.Zs, {});
                default:
                  return (0, n.jsx)(g.ff, {});
              }
            })(),
            d = (0, a.useRef)([]),
            m = (0, a.useRef)([]),
            _ = null;
          for (let s = 0; s < 3; s++)
            (d.current[s] = (0, a.createRef)()),
              (m.current[s] = (0, a.createRef)());
          let x = (s, e) => {
              for (let s = 0; s < d.current.length; s++)
                d.current[s].current.classList.remove("".concat(h().active)),
                  m.current[s].current.classList.remove("".concat(h().active));
              d.current[e].current.classList.add("".concat(h().active)),
                m.current[e].current.classList.add("".concat(h().active));
            },
            p = (s, e, t) => {
              (_ = m.current[e].current.querySelector("section")),
                0 === t
                  ? (_.classList.remove(h().xbox), _.classList.add(h().ps))
                  : 1 === t
                  ? (_.classList.remove(h().ps), _.classList.add(h().xbox))
                  : 2 === t
                  ? (_.classList.remove(h().command),
                    _.classList.add(h().system))
                  : 3 === t &&
                    (_.classList.remove(h().system),
                    _.classList.add(h().command));
            },
            j = { arrows: !0, bars: !0, flick: !0, overlapping: !0 },
            [u, y] = (0, a.useState)(-1),
            N = (0, a.useRef)(""),
            w = (0, a.useRef)([]);
          for (let s = 0; s < 4; s++) w.current[s] = (0, a.createRef)();
          let [f, b] = (0, a.useState)(-1),
            [v, B] = (0, a.useState)([!1, !1, !1]),
            k = (0, a.useRef)([]);
          for (let s = 0; s < 3; s++) k.current[s] = (0, a.createRef)();
          let C = (s) => {
            v[s] ? k.current[s].current.pause() : k.current[s].current.play();
            let e = [...v];
            (e[s] = !e[s]), B(e);
          };
          return (
            (0, a.useEffect)(() => {
              if ((!1 === t.current && (t.current = !0), -1 !== u)) {
                for (let s = 0; s < 4; s++)
                  N.current.classList.remove(h()["num".concat(s)]);
                N.current.classList.add(h()["num".concat(u)]);
              }
              -1 !== f &&
                ((k.current[f].current.currentTime = 0),
                k.current[f].current.play());
            }, [u, f]),
            (0, n.jsxs)("article", {
              id: "controlType",
              className: "".concat(
                h().page__fightingground__control,
                " page_system"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__control"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "操作タイプ" })
                      : null,
                    s("[t]image__contents__interface__control"),
                  ],
                }),
                (0, n.jsx)("section", {
                  className: h().page__fightingground__control__type,
                  children: (0, n.jsx)("div", {
                    className:
                      h().page__fightingground__control__type__contents,
                    children: (0, n.jsx)("p", {
                      children: s("[t]conrtol__type__text"),
                    }),
                  }),
                }),
                (0, n.jsx)("nav", {
                  className: h().page__fightingground__control__type__tabnav,
                  children: (0, n.jsxs)("ul", {
                    className:
                      h().page__fightingground__control__type__tabnav__list,
                    children: [
                      (0, n.jsx)("li", {
                        className: ""
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item,
                            " "
                          )
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item__modern,
                            " "
                          )
                          .concat(h().active),
                        ref: d.current[0],
                        onClick: (s) => x(s, 0),
                        children: (0, n.jsx)("span", {
                          className: h().logo,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/logo-modern.png",
                            width: "251",
                            height: "64",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                      (0, n.jsx)("li", {
                        className: ""
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item,
                            " "
                          )
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item__classic
                          ),
                        ref: d.current[1],
                        onClick: (s) => x(s, 1),
                        children: (0, n.jsx)("span", {
                          className: h().logo,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/logo-classic.png",
                            width: "251",
                            height: "64",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                      (0, n.jsx)("li", {
                        className: ""
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item,
                            " "
                          )
                          .concat(
                            h()
                              .page__fightingground__control__type__tabnav__list__item__dynamic
                          ),
                        ref: d.current[2],
                        onClick: (s) => x(s, 2),
                        children: (0, n.jsx)("span", {
                          className: h().logo,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/logo-dynamic.png",
                            width: "251",
                            height: "64",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: ""
                    .concat(h().page__fightingground__control__type__tabs, " ")
                    .concat(h().active),
                  ref: m.current[0],
                  children: [
                    (0, n.jsx)("h3", {
                      className: ""
                        .concat(h().page__fightingground__control__title, " ")
                        .concat(h().modern),
                      children: (0, n.jsx)("div", {
                        children: (0, n.jsx)("span", {
                          children: s("[t]modern__title"),
                        }),
                      }),
                    }),
                    (0, n.jsx)("section", {
                      className: ""
                        .concat(h().page__fightingground__control__modern, " ")
                        .concat(h().ps, " ")
                        .concat(h().system),
                      children: (0, n.jsxs)("div", {
                        className: h().control__detail,
                        children: [
                          (0, n.jsxs)("div", {
                            className: h().control__detail__high,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__image,
                                children: l,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__text,
                              }),
                              (0, n.jsxs)("ul", {
                                className: h().control__detail__high__tab01,
                                children: [
                                  (0, n.jsx)("li", {
                                    className: h().ps,
                                    onClick: (s) => p(s, 0, 0),
                                    children: "PlayStation",
                                  }),
                                  (0, n.jsx)("li", {
                                    className: h().xbox,
                                    onClick: (s) => p(s, 0, 1),
                                    children: "Xbox / PC",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("dl", {
                                className: h().control__detail__high__text,
                                children: [
                                  (0, n.jsx)("dt", {
                                    children: (0, n.jsx)("span", {
                                      children: s("[t]modern__text__title"),
                                    }),
                                  }),
                                  (0, n.jsx)("dd", {
                                    children: s("[t]modern__text__text"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  h().control__detail__high__controller,
                                children: [
                                  (0, n.jsxs)("p", {
                                    className:
                                      h()
                                        .control__detail__high__controller__caution,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: h().barrageBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/key-barrage.png",
                                          width: "25",
                                          height: "25",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      "= ",
                                      s("[t]modern__controller__push"),
                                    ],
                                  }),
                                  (0, n.jsx)("span", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().psBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/ps/pad.png",
                                      width: "358",
                                      height: "237",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsx)("span", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().xboxBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/xbox/pad.png",
                                      width: "358",
                                      height: "237",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsxs)("ul", {
                                    className:
                                      h()
                                        .control__detail__high__controller__btnList,
                                    children: [
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList01,
                                        children: [
                                          s("[t]modern__controller__btn01"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnL2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnL2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList02,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn02"),
                                          (0, n.jsxs)("div", {
                                            className: h().caution,
                                            children: [
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().barrageBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/key-barrage.png",
                                                  width: "25",
                                                  height: "25",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              "+ ",
                                              s(
                                                "[t]modern__controller__btn02__text"
                                              ),
                                              (0, n.jsx)("span", {
                                                children: s(
                                                  "[t]modern__controller__btn02__title"
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList03,
                                        children: [
                                          s("[t]modern__controller__btn03"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnL1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnL1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList04,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnR1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn04"),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList05,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/modern_l.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn05"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList06,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn06"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/modern_sp.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList07,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/modern_m.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn07"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList08,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]modern__controller__btn08"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/modern_h.png",
                                              width: "30",
                                              height: "30",
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
                          (0, n.jsxs)("div", {
                            className: h().control__detail__low,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__image,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__text,
                              }),
                              (0, n.jsxs)("ul", {
                                className: h().control__detail__low__tab02,
                                children: [
                                  (0, n.jsx)("li", {
                                    className: h().system,
                                    onClick: (s) => p(s, 0, 2),
                                    children: s("[t]controller__tab02__system"),
                                  }),
                                  (0, n.jsx)("li", {
                                    className: h().command,
                                    onClick: (s) => p(s, 0, 3),
                                    children: s(
                                      "[t]controller__tab02__command"
                                    ),
                                  }),
                                ],
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__assist,
                                children: (0, n.jsx)("div", {
                                  className: ""
                                    .concat(
                                      h().control__detail__low__assist__slider,
                                      " "
                                    )
                                    .concat(h().num0),
                                  ref: N,
                                  children: (0, n.jsx)(z.A, {
                                    settings: j,
                                    contentName: "fgSystem",
                                    setModernSlideNumber: (s) => {
                                      y(s);
                                    },
                                    children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide01, " ")
                                            .concat(h().active),
                                          ref: w.current[0],
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]modern__slide01__title"
                                              ),
                                            }),
                                            (0, n.jsx)("div", {
                                              className: h().image,
                                              children: (0, n.jsx)(r(), {
                                                src: "/6/assets/images/mode/fg/modern_slide1.jpg",
                                                width: "796",
                                                height: "446",
                                                alt: "",
                                                loading: "lazy",
                                                unoptimized: !0,
                                              }),
                                            }),
                                            (0, n.jsxs)("p", {
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className: h().psBtn,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                    width: "200",
                                                    height: "200",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className: h().xboxBtn,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                    width: "200",
                                                    height: "200",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className: h().modern,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/modern_sp.png",
                                                    width: "140",
                                                    height: "140",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                s("[t]modern__slide01__text"),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide02),
                                          ref: w.current[1],
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]modern__slide02__title"
                                              ),
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide2_1.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().sp,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-l.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                s("[t]modern__slide02__arts01"),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: h().controller,
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className: h().crossKey,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/cross_key.png",
                                                    width: "300",
                                                    height: "300",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().left,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().right,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().down,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide2_3.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().sp,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-r.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                s("[t]modern__slide02__arts02"),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide2_2.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  className: h().sp,
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-d.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                s("[t]modern__slide02__arts03"),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide03),
                                          ref: w.current[2],
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]modern__slide03__title"
                                              ),
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide3_1.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().nBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-nutral.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "or",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-r.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_h.png",
                                                          width: "100",
                                                          height: "100",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().commandBtn,
                                                      children: s(
                                                        "[t]modern__slide04__str03"
                                                      ),
                                                    }),
                                                    (0, n.jsx)("br", {}),
                                                  ],
                                                }),
                                                s("[t]modern__slide03__arts01"),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide3_2.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-l.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_h.png",
                                                          width: "100",
                                                          height: "100",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().commandBtn,
                                                      children: s(
                                                        "[t]modern__slide04__str03"
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                s("[t]modern__slide03__arts02"),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/mode/fg/modern_slide3_3.jpg",
                                                  width: "379",
                                                  height: "213",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                                (0, n.jsxs)("p", {
                                                  children: [
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/key-d.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_sp.png",
                                                          width: "140",
                                                          height: "140",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      children: "+",
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().psBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                          width: "200",
                                                          height: "200",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().xboxBtn,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                          width: "74",
                                                          height: "74",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().modern,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/modern_h.png",
                                                          width: "100",
                                                          height: "100",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().commandBtn,
                                                      children: s(
                                                        "[t]modern__slide04__str03"
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                s("[t]modern__slide03__arts03"),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide04),
                                          ref: w.current[3],
                                          children: [
                                            (0, n.jsxs)("h4", {
                                              children: [
                                                s("[t]modern__slide04__title"),
                                                (0, n.jsx)("span", {
                                                  children: s(
                                                    "[t]modern__slide04__text"
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, n.jsxs)("p", {
                                              className: h().caution,
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className: h().barrageBtn,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-barrage.png",
                                                    width: "200",
                                                    height: "200",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                "=",
                                                s(
                                                  "[t]modern__controller__push"
                                                ),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: h().scroll,
                                              children: [
                                                (0, n.jsxs)("div", {
                                                  children: [
                                                    (0, n.jsxs)("h5", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children: s(
                                                            "[t]modern__slide04__combo01"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().psBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                                              width: "200",
                                                              height: "180",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().xboxBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                                              width: "62",
                                                              height: "62",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().barrageBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/key-barrage.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_l.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str01"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_l.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str01"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_1_a.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_1_b.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                  children: [
                                                    (0, n.jsxs)("h5", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children: s(
                                                            "[t]modern__slide04__combo02"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().psBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                                              width: "200",
                                                              height: "180",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().xboxBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                                              width: "62",
                                                              height: "62",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().barrageBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/key-barrage.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_m.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str02"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_m.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str02"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_m.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str02"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_2_a.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_2_b.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_2_c.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                  children: [
                                                    (0, n.jsxs)("h5", {
                                                      children: [
                                                        (0, n.jsx)("span", {
                                                          children: s(
                                                            "[t]modern__slide04__combo03"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().psBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                                              width: "200",
                                                              height: "180",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: ""
                                                            .concat(
                                                              h().xboxBtn,
                                                              " "
                                                            )
                                                            .concat(
                                                              h().command
                                                            ),
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                                              width: "62",
                                                              height: "62",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().barrageBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/key-barrage.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_h.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str03"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_h.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str03"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_h.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str03"
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().arrow,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/arrow_1.png",
                                                              width: "200",
                                                              height: "229",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().psBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                              width: "200",
                                                              height: "200",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().xboxBtn,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                              width: "74",
                                                              height: "74",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className: h().modern,
                                                          children: (0, n.jsx)(
                                                            r(),
                                                            {
                                                              src: "/6/assets/images/common/controller/modern_h.png",
                                                              width: "100",
                                                              height: "100",
                                                              alt: "",
                                                              loading: "lazy",
                                                              unoptimized: !0,
                                                            }
                                                          ),
                                                        }),
                                                        (0, n.jsx)("span", {
                                                          className:
                                                            h().commandBtn,
                                                          children: s(
                                                            "[t]modern__slide04__str03"
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_3_a.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_3_b.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_3_c.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().arrow,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/common/controller/arrow_2.png",
                                                          width: "200",
                                                          height: "229",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                    (0, n.jsx)("span", {
                                                      className: h().slideImg,
                                                      children: (0, n.jsx)(
                                                        r(),
                                                        {
                                                          src: "/6/assets/images/mode/fg/modern_slide4_3_d.jpg",
                                                          width: "263",
                                                          height: "148",
                                                          alt: "",
                                                          loading: "lazy",
                                                          unoptimized: !0,
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: h().page__fightingground__control__type__tabs,
                  ref: m.current[1],
                  children: [
                    (0, n.jsx)("h3", {
                      className: ""
                        .concat(h().page__fightingground__control__title, " ")
                        .concat(h().classic),
                      children: (0, n.jsx)("div", {
                        children: (0, n.jsx)("span", {
                          children: s("[t]classic__title"),
                        }),
                      }),
                    }),
                    (0, n.jsx)("section", {
                      className: ""
                        .concat(h().page__fightingground__control__classic, " ")
                        .concat(h().ps, " ")
                        .concat(h().system),
                      children: (0, n.jsxs)("div", {
                        className: ""
                          .concat(h().control__detail, " ")
                          .concat(h().ps),
                        children: [
                          (0, n.jsxs)("div", {
                            className: h().control__detail__high,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__image,
                                children: c,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__text,
                              }),
                              (0, n.jsxs)("ul", {
                                className: h().control__detail__high__tab01,
                                children: [
                                  (0, n.jsx)("li", {
                                    className: h().ps,
                                    onClick: (s) => p(s, 1, 0),
                                    children: "PlayStation",
                                  }),
                                  (0, n.jsx)("li", {
                                    className: h().xbox,
                                    onClick: (s) => p(s, 1, 1),
                                    children: "Xbox / PC",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("dl", {
                                className: h().control__detail__high__text,
                                children: [
                                  (0, n.jsx)("dt", {
                                    children: (0, n.jsx)("span", {
                                      children: s("[t]classic__text__title"),
                                    }),
                                  }),
                                  (0, n.jsx)("dd", {
                                    children: s("[t]classic__text__text"),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  h().control__detail__high__controller,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().psBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/ps/pad.png",
                                      width: "358",
                                      height: "237",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsx)("span", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().xboxBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/xbox/pad.png",
                                      width: "358",
                                      height: "237",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsxs)("ul", {
                                    className:
                                      h()
                                        .control__detail__high__controller__btnList,
                                    children: [
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList02,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn02"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_kick_h.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: h().caution,
                                            children: [
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-BtnR1.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              "+",
                                              " ",
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-BtnR2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-BtnR2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                children: s(
                                                  "[t]modern__controller__btn03"
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList04,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-BtnR1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-BtnR1.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn04"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_punch_h.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList05,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_punch_l.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn05"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList06,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn06"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_punch_m.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList07,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_kick_l.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn07"),
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: h().caution,
                                            children: [
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              "+",
                                              " ",
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                children: s(
                                                  "[t]modern__controller__btn01"
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        className:
                                          h()
                                            .control__detail__high__controller__btnList08,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: h().psBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsx)("span", {
                                            className: h().xboxBtn,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                              width: "50",
                                              height: "50",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          s("[t]classic__controller__btn08"),
                                          (0, n.jsx)("span", {
                                            className: h().modern,
                                            children: (0, n.jsx)(r(), {
                                              src: "/6/assets/images/common/controller/icon_kick_m.png",
                                              width: "30",
                                              height: "30",
                                              alt: "",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          }),
                                          (0, n.jsxs)("div", {
                                            className: h().caution,
                                            children: [
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              "+",
                                              " ",
                                              (0, n.jsx)("span", {
                                                className: h().psBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                className: h().xboxBtn,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                              (0, n.jsx)("span", {
                                                children: s(
                                                  "[t]modern__controller__btn04"
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: h().control__detail__low,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__image,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__text,
                              }),
                              (0, n.jsxs)("ul", {
                                className: h().control__detail__low__tab02,
                                children: [
                                  (0, n.jsx)("li", {
                                    className: ""
                                      .concat(h().system, " ")
                                      .concat(h().active),
                                    onClick: (s) => p(s, 1, 2),
                                    children: s("[t]controller__tab02__system"),
                                  }),
                                  (0, n.jsx)("li", {
                                    className: h().command,
                                    onClick: (s) => p(s, 1, 3),
                                    children: s(
                                      "[t]controller__tab02__command"
                                    ),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: h().control__detail__low__command,
                                children: [
                                  (0, n.jsx)("ul", {
                                    children: (0, n.jsxs)("li", {
                                      children: [
                                        (0, n.jsx)(r(), {
                                          src: "/6/assets/images/mode/fg/modern_slide1.jpg",
                                          width: "351",
                                          height: "195",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                        (0, n.jsxs)("ul", {
                                          children: [
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("span", {
                                                className: h().arrow,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/key-d.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("span", {
                                                className: h().arrow,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/key-dr.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", {
                                              children: (0, n.jsx)("span", {
                                                className: h().arrow,
                                                children: (0, n.jsx)(r(), {
                                                  src: "/6/assets/images/common/controller/key-r.png",
                                                  width: "50",
                                                  height: "50",
                                                  alt: "",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)("li", { children: "+" }),
                                            (0, n.jsxs)("li", {
                                              children: [
                                                (0, n.jsx)("span", {
                                                  className: h().psBtn,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className: h().xboxBtn,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                                (0, n.jsx)("span", {
                                                  className: h().modern,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/icon_punch.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("p", {
                                          children: s(
                                            "[t]modern__slide01__text"
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, n.jsxs)("ul", {
                                    children: [
                                      (0, n.jsxs)("li", {
                                        children: [
                                          (0, n.jsx)(r(), {
                                            src: "/6/assets/images/mode/fg/modern_slide2_1.jpg",
                                            width: "796",
                                            height: "446",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                          (0, n.jsxs)("ul", {
                                            children: [
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-d.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-dl.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-l.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: "+",
                                              }),
                                              (0, n.jsxs)("li", {
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    className: h().psBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().xboxBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().modern,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/icon_kick.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("p", {
                                            children: s(
                                              "[t]modern__slide02__arts01"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        children: [
                                          (0, n.jsx)(r(), {
                                            src: "/6/assets/images/mode/fg/modern_slide2_3.jpg",
                                            width: "351",
                                            height: "195",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                          (0, n.jsxs)("ul", {
                                            children: [
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-r.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-d.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-dr.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: "+",
                                              }),
                                              (0, n.jsxs)("li", {
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    className: h().psBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/ps/key-Btn8.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().xboxBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/xbox/key-Btn8.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().modern,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/icon_punch.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("p", {
                                            children: s(
                                              "[t]modern__slide02__arts02"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsxs)("li", {
                                        children: [
                                          (0, n.jsx)(r(), {
                                            src: "/6/assets/images/mode/fg/modern_slide2_2.jpg",
                                            width: "351",
                                            height: "195",
                                            alt: "",
                                            loading: "lazy",
                                            unoptimized: !0,
                                          }),
                                          (0, n.jsxs)("ul", {
                                            children: [
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-d.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-dr.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: (0, n.jsx)("span", {
                                                  className: h().arrow,
                                                  children: (0, n.jsx)(r(), {
                                                    src: "/6/assets/images/common/controller/key-r.png",
                                                    width: "50",
                                                    height: "50",
                                                    alt: "",
                                                    loading: "lazy",
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                              (0, n.jsx)("li", {
                                                children: "+",
                                              }),
                                              (0, n.jsxs)("li", {
                                                children: [
                                                  (0, n.jsx)("span", {
                                                    className: h().psBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().xboxBtn,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    className: h().modern,
                                                    children: (0, n.jsx)(r(), {
                                                      src: "/6/assets/images/common/controller/icon_kick.png",
                                                      width: "50",
                                                      height: "50",
                                                      alt: "",
                                                      loading: "lazy",
                                                      unoptimized: !0,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, n.jsx)("p", {
                                            children: s(
                                              "[t]modern__slide02__arts03"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: h().page__fightingground__control__type__tabs,
                  ref: m.current[2],
                  children: [
                    (0, n.jsx)("h3", {
                      className: ""
                        .concat(h().page__fightingground__control__title, " ")
                        .concat(h().dynamic),
                      children: (0, n.jsx)("div", {
                        children: (0, n.jsx)("span", {
                          children: s("[t]dynamic__title"),
                        }),
                      }),
                    }),
                    (0, n.jsx)("section", {
                      className: ""
                        .concat(h().page__fightingground__control__dynamic, " ")
                        .concat(h().ps, " ")
                        .concat(h().system),
                      children: (0, n.jsxs)("div", {
                        className: h().control__detail,
                        children: [
                          (0, n.jsxs)("div", {
                            className: h().control__detail__high,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__image,
                                children: o,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__high__bg__text,
                              }),
                              (0, n.jsxs)("ul", {
                                className: h().control__detail__high__tab01,
                                children: [
                                  (0, n.jsx)("li", {
                                    className: h().ps,
                                    onClick: (s) => p(s, 2, 0),
                                    children: "PlayStation",
                                  }),
                                  (0, n.jsx)("li", {
                                    className: h().xbox,
                                    onClick: (s) => p(s, 2, 1),
                                    children: "Xbox / PC",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("dl", {
                                className: h().control__detail__high__text,
                                children: [
                                  (0, n.jsx)("dt", {
                                    children: (0, n.jsx)("span", {
                                      children: s("[t]dynamic__text__title"),
                                    }),
                                  }),
                                  (0, n.jsx)("dd", {
                                    className: h().text,
                                    children: s("[t]dynamic__text__text"),
                                  }),
                                  (0, n.jsx)("dd", {
                                    className: h().list,
                                    children: (0, n.jsxs)("ul", {
                                      children: [
                                        (0, n.jsx)("li", {
                                          children: s(
                                            "[t]dynamic__text__attention01"
                                          ),
                                        }),
                                        (0, n.jsx)("li", {
                                          children: s(
                                            "[t]dynamic__text__attention02"
                                          ),
                                        }),
                                        (0, n.jsx)("li", {
                                          children: s(
                                            "[t]dynamic__text__attention03"
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  h().control__detail__high__controller,
                                children: [
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().psBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/ps/pad.png",
                                      width: "465",
                                      height: "307",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: ""
                                      .concat(
                                        h()
                                          .control__detail__high__controller__pad,
                                        " "
                                      )
                                      .concat(h().xboxBtn),
                                    children: (0, n.jsx)(r(), {
                                      src: "/6/assets/images/common/controller/xbox/pad.png",
                                      width: "465",
                                      height: "324",
                                      alt: "",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      h()
                                        .control__detail__high__controller__btnList,
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: h().psBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/ps/key-Btn4.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: h().xboxBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/xbox/key-Btn4.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: h().psBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/ps/key-Btn2.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: h().xboxBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/xbox/key-Btn2.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: h().psBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/ps/key-Btn6.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        className: h().xboxBtn,
                                        children: (0, n.jsx)(r(), {
                                          src: "/6/assets/images/common/controller/xbox/key-Btn6.png",
                                          width: "50",
                                          height: "50",
                                          alt: "",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, n.jsx)("span", {
                                        children: s(
                                          "[t]dynamic__controller__btn01"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: h().control__detail__low,
                            children: [
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__image,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__bg__text,
                              }),
                              (0, n.jsx)("div", {
                                className: h().control__detail__low__assist,
                                children: (0, n.jsx)("div", {
                                  className:
                                    h().control__detail__low__assist__slider,
                                  children: (0, n.jsx)(z.A, {
                                    settings: j,
                                    contentName: "fgSystem",
                                    setDynamicSlideNumber: (s) => {
                                      b(s);
                                    },
                                    children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide01, " ")
                                            .concat(h().active),
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]dynamic__slide01__title"
                                              ),
                                            }),
                                            (0, n.jsx)("video", {
                                              ref: k.current[0],
                                              onClick: () => C(0),
                                              src: "/6/assets/images/mode/fg/dynamic/dynamic_01_".concat(
                                                "ja-jp" !== e ? "esrb" : "cero",
                                                ".mp4"
                                              ),
                                              preload: "none",
                                              poster:
                                                "/6/assets/images/mode/fg/dynamic/dynamic_movie_pic".concat(
                                                  "ja-jp" !== e ? "_en" : "",
                                                  ".jpg"
                                                ),
                                              loop: !0,
                                              playsInline: !0,
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide02),
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]dynamic__slide02__title"
                                              ),
                                            }),
                                            (0, n.jsx)("video", {
                                              ref: k.current[1],
                                              onClick: () => C(1),
                                              src: "/6/assets/images/mode/fg/dynamic/dynamic_02_".concat(
                                                "ja-jp" !== e ? "esrb" : "cero",
                                                ".mp4"
                                              ),
                                              preload: "none",
                                              loop: !0,
                                              playsInline: !0,
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("li", {
                                          className: ""
                                            .concat(h().slides__item, " ")
                                            .concat(h().slide03),
                                          children: [
                                            (0, n.jsx)("h4", {
                                              children: s(
                                                "[t]dynamic__slide03__title"
                                              ),
                                            }),
                                            (0, n.jsx)("video", {
                                              ref: k.current[2],
                                              onClick: () => C(2),
                                              src: "/6/assets/images/mode/fg/dynamic/dynamic_03_".concat(
                                                "ja-jp" !== e ? "esrb" : "cero",
                                                ".mp4"
                                              ),
                                              preload: "none",
                                              loop: !0,
                                              playsInline: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        f = (s) => {
          let { setModalVisible: e, setModalImage: t, setModalIndex: l } = s,
            { t: c, lang: o } = (0, i.A)("mode/fightingground"),
            d = (0, a.useRef)(!1),
            m = (0, a.useRef)(null),
            _ = (s) => {
              let e = s.currentTarget,
                t = Array.from(e.parentElement.children),
                n = t.indexOf(e);
              t.forEach((s, e) => {
                s.classList.toggle("".concat(h().active), e === n);
              }),
                m.current &&
                  Array.from(m.current.children).forEach((s, e) => {
                    s.classList.toggle("".concat(h().active), e === n);
                  });
            };
          return (
            (0, a.useEffect)(() => {
              !1 === d.current && (d.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "liveCommentary",
              className: "".concat(
                h().page__fightingground__realtime,
                " page_system"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": c("[t]image__contents__interface__live"),
                  "data-bg01": "REAL TIME",
                  "data-bg02": "COMMENTARY",
                  children: [
                    "ja-jp" === o
                      ? (0, n.jsx)("span", { children: "自動実況" })
                      : null,
                    c("[t]image__contents__interface__live"),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().realtime,
                  children: [
                    (0, n.jsx)("p", {
                      className: h().realtime__text,
                      children: c("[t]realtime__text"),
                    }),
                    (0, n.jsxs)("section", {
                      className: h().realtime__image,
                      children: [
                        (0, n.jsxs)("ul", {
                          className: h().realtime__image__picture,
                          ref: m,
                          children: [
                            (0, n.jsx)("li", {
                              className: h().active,
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie07")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_07.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie06")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_06.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie05")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_05.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie04")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_04.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie03")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_03.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie02")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_02.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, n.jsx)("li", {
                              children: (0, n.jsx)("a", {
                                href: "https://www.youtube.com/watch?v=".concat(
                                  c("[t]realtime__movie01")
                                ),
                                target: "_blank",
                                children: (0, n.jsx)(r(), {
                                  src: "/6/assets/images/mode/fg/rtc_01.jpg",
                                  width: "967",
                                  height: "544",
                                  alt: "",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("ul", {
                          className: h().realtime__image__interface,
                          children: [
                            (0, n.jsx)("li", {
                              className: h().active,
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_07_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_06_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_05_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_04_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_03_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_02_s.jpg",
                                width: "200",
                                height: "80",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              onClick: _,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/rtc_01_s.jpg",
                                width: "200",
                                height: "80",
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
                (0, n.jsxs)("section", {
                  className: "".concat(h().commentators, " ").concat(h().live),
                  children: [
                    (0, n.jsxs)("h3", {
                      children: [
                        c("[t]commentators__title01"),
                        "ja-jp" === o
                          ? (0, n.jsx)("span", { children: "実況者" })
                          : null,
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          className: h().commentator5,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name05"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_5.png",
                                width: "309",
                                height: "466",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name05"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang01"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text05"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator3,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name03"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang02"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_3.png",
                                width: "309",
                                height: "466",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name03"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang02"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text03"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator1,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name01"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_1.png",
                                width: "309",
                                height: "466",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name01"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang01"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text01"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator2,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name02"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang02"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_2.png",
                                width: "309",
                                height: "466",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name02"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang02"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text02"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: "".concat(h().commentators, " ").concat(h().color),
                  children: [
                    (0, n.jsxs)("h3", {
                      children: [
                        c("[t]commentators__title02"),
                        "ja-jp" === o
                          ? (0, n.jsx)("span", { children: "解説者" })
                          : null,
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          className: ""
                            .concat(h().commentator10, " ")
                            .concat(h().new),
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name10"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_10.png",
                                width: "464",
                                height: "471",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name10"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang01"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    dangerouslySetInnerHTML: {
                                      __html: c("[t]commentators__text10"),
                                    },
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: ""
                            .concat(h().commentator9, " ")
                            .concat(h().new),
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name09"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang03"),
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                    "/ ",
                                    c("[t]commentators__lang02"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_9.png",
                                width: "266",
                                height: "472",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name09"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang03"),
                                          "/",
                                          c("[t]commentators__lang01"),
                                          "/",
                                          c("[t]commentators__lang02"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text09"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator8,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name08"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_8.png",
                                width: "317",
                                height: "529",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name08"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang01"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text08"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator7,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name07"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang02"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_7.png",
                                width: "317",
                                height: "529",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name07"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang02"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text07"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator6,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name06"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang01"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_6.png",
                                width: "317",
                                height: "529",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name06"),
                                      "ko-kr" !== o
                                        ? (0, n.jsx)("span", {
                                            className: h().job,
                                            children: c(
                                              "[t]commentators__name06_2"
                                            ),
                                          })
                                        : "",
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang01"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text06"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          className: h().commentator4,
                          children: [
                            (0, n.jsxs)("h4", {
                              children: [
                                c("[t]commentators__name04"),
                                (0, n.jsxs)("span", {
                                  children: [
                                    "/ ",
                                    c("[t]commentators__lang02"),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: h().image,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/commentator_4.png",
                                width: "317",
                                height: "529",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: h().wrap01,
                              children: (0, n.jsxs)("div", {
                                className: h().wrap02,
                                children: [
                                  (0, n.jsxs)("h4", {
                                    children: [
                                      c("[t]commentators__name04"),
                                      (0, n.jsxs)("span", {
                                        children: [
                                          "/ ",
                                          c("[t]commentators__lang02"),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("p", {
                                    children: c("[t]commentators__text04"),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        b = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "versus",
              className: "".concat(
                h().page__fightingground__versus,
                " page_contents"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__versus"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "バーサス" })
                      : null,
                    s("[t]image__contents__interface__versus"),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: h().versus__text,
                  children: (0, n.jsx)("span", {
                    children: s("[t]versus__text"),
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: h().versus__contents,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().versus__contents__item,
                      children: [
                        (0, n.jsx)("p", {
                          className: h().versus__contents__item__img,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/versus_pic1.jpg",
                            width: "452",
                            height: "254",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("h3", {
                          children: s("[t]versus__contents__title"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().versus__contents__item__text,
                          children: s("[t]versus__contents__text"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h().versus__contents__item,
                      children: [
                        (0, n.jsx)("p", {
                          className: h().versus__contents__item__img,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/versus_pic2.jpg",
                            width: "452",
                            height: "254",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("h3", { children: s("[t]versus_01") }),
                        (0, n.jsx)("p", {
                          className: h().versus__contents__item__text,
                          children: s("[t]versus_01_text"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        v = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1),
            l = (0, a.useRef)(null),
            c = (s) => {
              let e = s.currentTarget,
                t = Array.from(e.parentElement.children),
                n = t.indexOf(e);
              t.forEach((s, e) => {
                s.classList.toggle("".concat(h().active), e === n);
              }),
                l.current &&
                  Array.from(l.current.children).forEach((s, e) => {
                    s.classList.toggle("".concat(h().active), e === n);
                  });
            };
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "onlinebattle",
              className: "".concat(
                h().page__fightingground__onlinebattle,
                " page_contents"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__onlinebattle"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "オンラインバトル" })
                      : null,
                    s("[t]image__contents__interface__onlinebattle"),
                  ],
                }),
                (0, n.jsx)("section", {
                  className: h().crossplatform,
                  children: (0, n.jsxs)("div", {
                    className: h().crossplatform__contents,
                    children: [
                      (0, n.jsx)("h3", { children: s("[t]online__cp__title") }),
                      (0, n.jsx)("p", {
                        className: h().crossplatform__contents__text,
                        children: s("[t]online__cp__text"),
                      }),
                      (0, n.jsxs)("ul", {
                        className: h().crossplatform__contents__attention,
                        children: [
                          (0, n.jsx)("li", {
                            dangerouslySetInnerHTML: {
                              __html: s("[t]online__cp__attention1"),
                            },
                          }),
                          (0, n.jsx)("li", {
                            dangerouslySetInnerHTML: {
                              __html: s("[t]online__cp__attention2"),
                            },
                          }),
                          (0, n.jsx)("li", {
                            dangerouslySetInnerHTML: {
                              __html: s("[t]online__cp__attention3"),
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("section", {
                  className: h().match,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().match__contents,
                      children: [
                        (0, n.jsx)(z.A, {
                          settings: {
                            arrows: !1,
                            bars: !0,
                            autoplay: !0,
                            autoplaySpeed: 4600,
                            flick: !0,
                            overlapping: !0,
                          },
                          contentName: "fgContents",
                          children: (0, n.jsxs)(a.Fragment, {
                            children: [
                              (0, n.jsx)(
                                "li",
                                {
                                  className: ""
                                    .concat(h().slides__item, " ")
                                    .concat(h().active),
                                  children: (0, n.jsx)(r(), {
                                    className: h().all,
                                    src: "/6/assets/images/mode/fg/online_pic1.jpg",
                                    width: "762",
                                    height: "428",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss1"
                              ),
                              (0, n.jsx)(
                                "li",
                                {
                                  className: h().slides__item,
                                  children: (0, n.jsx)(r(), {
                                    className: h().all,
                                    src: "/6/assets/images/mode/fg/online_pic3".concat(
                                      "ja-jp" !== e ? "-en" : "",
                                      ".jpg"
                                    ),
                                    width: "762",
                                    height: "428",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                },
                                "ss2"
                              ),
                            ],
                          }),
                        }),
                        (0, n.jsxs)("h3", {
                          children: [
                            s("[t]online__match__title1"),
                            "ja-jp" === e
                              ? (0, n.jsx)("span", {
                                  children: "／ ランクマッチ",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsxs)("p", {
                          className: h().match__contents__text,
                          children: [
                            s("[t]online__match__text1"),
                            (0, n.jsx)("br", {}),
                            s("[t]online__match__text1_add"),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h().match__contents,
                      children: [
                        (0, n.jsx)("p", {
                          className: h().match__contents__img,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/online_pic2.jpg",
                            width: "762",
                            height: "428",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsxs)("h3", {
                          children: [
                            s("[t]online__match__title2"),
                            "ja-jp" === e
                              ? (0, n.jsx)("span", {
                                  children: "／ カジュアルマッチ",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().match__contents__text,
                          children: s("[t]online__match__text2"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().custom,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().custom__contents__img,
                      children: [
                        (0, n.jsxs)("ul", {
                          className: h().custom__contents__img__list,
                          ref: l,
                          children: [
                            (0, n.jsx)("li", {
                              className: ""
                                .concat(
                                  h().custom__contents__img__list__item,
                                  " "
                                )
                                .concat(h().active),
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img01".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className: h().custom__contents__img__list__item,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img02".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className: h().custom__contents__img__list__item,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img03".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className: h().custom__contents__img__list__item,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img04.jpg",
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("ul", {
                          className: h().custom__contents__img__list__thumb,
                          children: [
                            (0, n.jsx)("li", {
                              className: ""
                                .concat(
                                  h().custom__contents__img__list__thumb__item,
                                  " "
                                )
                                .concat(h().active, "\n              "),
                              onClick: c,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img01".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className:
                                h().custom__contents__img__list__thumb__item,
                              onClick: c,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img02".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className:
                                h().custom__contents__img__list__thumb__item,
                              onClick: c,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img03".concat(
                                  "ja-jp" !== e ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, n.jsx)("li", {
                              className:
                                h().custom__contents__img__list__thumb__item,
                              onClick: c,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/custom_img04.jpg",
                                width: "982",
                                height: "553",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h().custom__contents__item,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            s("[t]onlinebattle_custom"),
                            "ja-jp" === e
                              ? (0, n.jsx)("span", {
                                  children: "／ カスタムルーム",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().custom__contents__text,
                          children: s("[t]onlinebattle_custom_text"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        B = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "extremebattle",
              className: "".concat(
                h().page__fightingground__extremebattle,
                " page_contents"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__extreamebattle"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "エクストリームバトル" })
                      : null,
                    s("[t]image__contents__interface__extreamebattle"),
                  ],
                }),
                (0, n.jsx)("p", {
                  children: (0, n.jsx)("span", {
                    children: s("[t]extreme__text"),
                  }),
                }),
                (0, n.jsx)("div", {
                  className: h().slidearea,
                  children: (0, n.jsx)("ul", {
                    className: h().slides,
                    children: (0, n.jsx)("li", {
                      className: h().current,
                      children: (0, n.jsx)("a", {
                        href: "https://www.youtube.com/watch?v=".concat(
                          s("[t]extremebattle__ytId")
                        ),
                        target: "_blank",
                        children: (0, n.jsx)(r(), {
                          src: "/6/assets/images/mode/fg/accessibility_post.jpg",
                          width: "1280",
                          height: "720",
                          alt: "",
                          loading: "lazy",
                          unoptimized: !0,
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        k = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "arcade",
              className: "".concat(
                h().page__fightingground__arcade,
                " page_contents"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]arcade"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "アーケード" })
                      : null,
                    s("[t]arcade"),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: h().arcade__text,
                  children: (0, n.jsx)("span", {
                    children: s("[t]arcade_text"),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: h().arcade__contents,
                  children: [
                    (0, n.jsx)("p", {
                      className: h().arcade__contents__img,
                      children: (0, n.jsx)(r(), {
                        src: "/6/assets/images/mode/fg/arcade_img".concat(
                          "ja-jp" !== e ? "-en" : "",
                          ".png"
                        ),
                        width: "1600",
                        height: "464",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                    (0, n.jsx)("p", {
                      className: ""
                        .concat(h().arcade__contents__img, " ")
                        .concat(h().sp),
                      children: (0, n.jsx)(r(), {
                        src: "/6/assets/images/mode/fg/arcade_img".concat(
                          "ja-jp" !== e ? "-en" : "",
                          "-sp.png"
                        ),
                        width: "673",
                        height: "786",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        C = (s) => {
          let { setModalVisible: e, setModalImage: t, setModalIndex: l } = s,
            { t: c, lang: o } = (0, i.A)("mode/fightingground"),
            d = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === d.current && (d.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "trainingmode",
              className: "".concat(
                h().page__fightingground__trainingmode,
                " page_contents"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": c("[t]image__contents__interface__trainingmode"),
                  children: [
                    "ja-jp" === o
                      ? (0, n.jsx)("span", { children: "トレーニングメニュー" })
                      : null,
                    c("[t]image__contents__interface__trainingmode"),
                  ],
                }),
                (0, n.jsx)("p", {
                  className: h().trainingmode__text,
                  children: (0, n.jsx)("span", {
                    children: c("[t]training__text"),
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: ""
                    .concat(h().trainingmode__contents, " ")
                    .concat(h().trainingmode__contents__multi),
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__item,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]training__frame__title"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ フレームメーター",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]training__frame__text"),
                        }),
                        (0, n.jsx)("p", {
                          className: ""
                            .concat(h().trainingmode__contents__btn, " ")
                            .concat(h().btn),
                          onClick: () => {
                            e(!0), t("frameMeterImage"), l(0);
                          },
                          children: c("[t]training__frame__btn"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__img,
                          children: (0, n.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=".concat(
                              c("[t]training__ytId01")
                            ),
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                              className: h().movie_btn,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/training_pic1.jpg",
                                width: "765",
                                height: "430",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__item,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]training__reversal__title"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", { children: "／ 反撃設定" })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]training__reversal__text"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__img,
                          children: (0, n.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=".concat(
                              c("[t]training__ytId02")
                            ),
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                              className: h().movie_btn,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/training_pic2.jpg",
                                width: "765",
                                height: "430",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: ""
                    .concat(h().trainingmode__contents, " ")
                    .concat(h().trainingmode__contents__multi),
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__item,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]training__setup__title"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ 簡単練習設定",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]training__setup__text"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__img,
                          children: (0, n.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=".concat(
                              c("[t]training__ytId03")
                            ),
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                              className: h().movie_btn,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/training_pic3.jpg",
                                width: "765",
                                height: "430",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__item,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]trainingmode_game"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ ゲームスピード設定",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]trainingmode_game_text"),
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__img,
                          children: (0, n.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=".concat(
                              "ja-jp" !== o ? "djRfiYh7Hl4" : "h0adyuwd-Uc"
                            ),
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                              className: h().movie_btn,
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/training_pic7".concat(
                                  "ja-jp" !== o ? "-en" : "",
                                  ".jpg"
                                ),
                                width: "765",
                                height: "430",
                                alt: "",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: h().trainingmode__contents,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__left,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]trainingmode_tutorial"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ チュートリアル",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]trainingmode_tutorial_text"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href: "https://www.youtube.com/watch?v=".concat(
                          "ja-jp" !== o ? "k-o0QPe_H10" : "B30Z_GbWGi4"
                        ),
                        target: "_blank",
                        children: (0, n.jsx)("span", {
                          className: h().movie_btn,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/training_pic4".concat(
                              "ja-jp" !== o ? "-en" : "",
                              ".jpg"
                            ),
                            width: "765",
                            height: "430",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: h().trainingmode__contents,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__right,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]trainingmode_charactr"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ キャラクターガイド",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]trainingmode_charactr_text"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href: "https://www.youtube.com/watch?v=".concat(
                          "ja-jp" !== o ? "z7iS42bP8JE" : "nVbl47rGZhE"
                        ),
                        target: "_blank",
                        children: (0, n.jsx)("span", {
                          className: h().movie_btn,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/training_pic5".concat(
                              "ja-jp" !== o ? "-en" : "",
                              ".jpg"
                            ),
                            width: "765",
                            height: "430",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: h().trainingmode__contents,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h().trainingmode__contents__left,
                      children: [
                        (0, n.jsxs)("h3", {
                          children: [
                            c("[t]trainingmode_combo"),
                            "ja-jp" === o
                              ? (0, n.jsx)("span", {
                                  children: "／ コンボトライアル",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: h().trainingmode__contents__text,
                          children: c("[t]trainingmode_combo_text"),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        href: "https://www.youtube.com/watch?v=".concat(
                          "ja-jp" !== o ? "zSrOCk-Deyk" : "UDpp_kWYKuY"
                        ),
                        target: "_blank",
                        children: (0, n.jsx)("span", {
                          className: h().movie_btn,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/training_pic6".concat(
                              "ja-jp" !== o ? "-en" : "",
                              ".jpg"
                            ),
                            width: "765",
                            height: "430",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        R = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "battleDamage",
              className: "".concat(
                h().page__fightingground__battledamage,
                " page_system"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__battlegamage"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", { children: "ダメージ表現設定" })
                      : null,
                    s("[t]image__contents__interface__battlegamage"),
                  ],
                }),
                (0, n.jsx)("section", {
                  className: h().battledamage,
                  children: (0, n.jsxs)("div", {
                    className: h().battledamage__contents,
                    children: [
                      (0, n.jsx)("p", {
                        className: h().battledamage__contents__text,
                        children: s("[t]battlegamage_text"),
                      }),
                      (0, n.jsx)("div", {
                        className: h().battledamage__contents__video,
                        children: (0, n.jsx)("div", {
                          className: h().video__inner,
                          children: (0, n.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=ZBGFKU5DmKY",
                            target: "_blank",
                            children: (0, n.jsx)(r(), {
                              src: "/6/assets/images/mode/fg/damage_post.jpg",
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
                }),
              ],
            })
          );
        },
        S = () => {
          let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
            t = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              !1 === t.current && (t.current = !0);
            }, []),
            (0, n.jsxs)("article", {
              id: "accessibility",
              className: "".concat(
                h().page__fightingground__accessibility,
                " page_system"
              ),
              children: [
                (0, n.jsxs)("h2", {
                  "data-bg": s("[t]image__contents__interface__accessibility"),
                  children: [
                    "ja-jp" === e
                      ? (0, n.jsx)("span", {
                          children: "サウンドアクセシビリティ",
                        })
                      : null,
                    s("[t]image__contents__interface__accessibility"),
                  ],
                }),
                (0, n.jsxs)("section", {
                  className: h().accessibility,
                  children: [
                    (0, n.jsxs)("div", {
                      className: ""
                        .concat(h().accessibility__contents, " ")
                        .concat(h().accessibility__contents__1),
                      children: [
                        (0, n.jsx)("p", {
                          className: h().accessibility__contents__text,
                          children: s("[t]accessibility_text"),
                        }),
                        (0, n.jsx)("div", {
                          className: h().accessibility__contents__video,
                          children: (0, n.jsx)("div", {
                            className: h().video__inner,
                            children: (0, n.jsx)("a", {
                              href: "https://www.youtube.com/watch?v=vBIcy5z7kkM",
                              target: "_blank",
                              children: (0, n.jsx)(r(), {
                                src: "/6/assets/images/mode/fg/accessibility_post.jpg",
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
                    (0, n.jsxs)("div", {
                      className: ""
                        .concat(h().accessibility__contents, " ")
                        .concat(h().accessibility__contents__2),
                      children: [
                        (0, n.jsx)("p", {
                          className: h().accessibility__contents__image,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/accessibility_pic1".concat(
                              "ja-jp" === e ? "" : "-en",
                              ".jpg"
                            ),
                            width: "764",
                            height: "431",
                            alt: "",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, n.jsx)("p", {
                          className: h().accessibility__contents__image,
                          children: (0, n.jsx)(r(), {
                            src: "/6/assets/images/mode/fg/accessibility_pic2".concat(
                              "ja-jp" === e ? "" : "-en",
                              ".jpg"
                            ),
                            width: "764",
                            height: "431",
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
            })
          );
        };
      var L = t(57543),
        O = t(49715);
      let E = (s) => {
        let {
            isVisible: e,
            isModalImage: t,
            isModalIndex: l,
            setModalVisible: c,
          } = s,
          { t: o, lang: d } = (0, i.A)("mode/fightingground"),
          m = (0, a.useRef)(null),
          _ = (0, a.useRef)(null),
          g = (0, a.useRef)(null);
        if (
          ((0, a.useEffect)(() => {
            e &&
              (m.current.classList.remove("".concat(h().disp)),
              _.current.classList.remove("".concat(h().disp)),
              g.current.classList.remove("".concat(h().disp)),
              "mainImage" === t
                ? m.current.classList.add("".concat(h().disp))
                : "simpleOperationImage" === t
                ? _.current.classList.add("".concat(h().disp))
                : "frameMeterImage" === t &&
                  g.current.classList.add("".concat(h().disp)));
          }, [e, t, l]),
          !e)
        )
          return null;
        let x = document.querySelector("html");
        x.classList.add("no_scroll");
        let p = document.getElementById("wrapper"),
          j = () => {
            c(!1), x.classList.remove("no_scroll");
          };
        return (0, O.createPortal)(
          (0, n.jsxs)("article", {
            className: "".concat(
              h().page__fightingground__image__modal,
              " modal"
            ),
            children: [
              (0, n.jsx)("div", { className: h().modal__bg, onClick: j }),
              (0, n.jsxs)("section", {
                children: [
                  (0, n.jsx)("div", {
                    className: h().modal__mv,
                    ref: m,
                    children: (0, n.jsx)(r(), {
                      src: "/6/assets/images/mode/fg/art.jpg",
                      width: "1920",
                      height: "1080",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: h().modal__drive,
                    ref: _,
                    children: [
                      (0, n.jsx)(r(), {
                        src: "/6/assets/images/mode/fg/game_screen.jpg",
                        width: "1600",
                        height: "919",
                        alt: "",
                        loading: "lazy",
                        unoptimized: !0,
                      }),
                      (0, n.jsxs)("ul", {
                        className: h().modal__drive__list,
                        children: [
                          (0, n.jsxs)("li", {
                            className: h().num_01,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list01__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list01__text"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            className: h().num_02,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list02__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list02__text"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            className: h().num_03,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list03__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list03__text"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            className: h().num_04,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list04__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list04__text"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            className: h().num_05,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list05__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list05__text"),
                              }),
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            className: h().num_06,
                            children: [
                              (0, n.jsx)("h4", {
                                children: o(
                                  "[t]simpleOperation__list06__title"
                                ),
                              }),
                              (0, n.jsx)("p", {
                                children: o("[t]simpleOperation__list06__text"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: h().modal__frame,
                    ref: g,
                    children: (0, n.jsx)(r(), {
                      src: "/6/assets/images/mode/fg/frame_meter_".concat(
                        "ja-jp" !== d ? "en" : "ja",
                        ".jpg"
                      ),
                      width: "1920",
                      height: "1080",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, n.jsx)("p", {
                    className: "close",
                    onClick: j,
                    children: (0, n.jsx)(r(), {
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
          p
        );
      };
      var I = !0;
      let T = () => {
        let { t: s, lang: e } = (0, i.A)("mode/fightingground"),
          [t, o] = (0, a.useState)(!1),
          [r, d] = (0, a.useState)(!1),
          [m, _] = (0, a.useState)(""),
          [h, g] = (0, a.useState)(0),
          [p, j] = (0, a.useState)("");
        return (
          (0, a.useRef)(null),
          (0, a.useEffect)(() => {}, [t]),
          (0, n.jsxs)(c.A, {
            children: [
              (0, n.jsx)(l.A, {
                pageTitle: s("[t]title"),
                pageDescription: s("[t]description"),
              }),
              (0, n.jsxs)("div", {
                className: "contents page__fightingground",
                children: [
                  (0, n.jsx)(x, { setModalVisible: d, setModalImage: _ }),
                  (0, n.jsx)(y, {
                    onContentPageChanged: (s) => {
                      o(s);
                    },
                    activeId: p,
                  }),
                  t
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(b, {}),
                          (0, n.jsx)(v, {}),
                          (0, n.jsx)(B, {}),
                          (0, n.jsx)(k, {}),
                          (0, n.jsx)(C, {
                            setModalVisible: d,
                            setModalImage: _,
                            setModalIndex: g,
                          }),
                        ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(N, {
                            setModalVisible: d,
                            setModalImage: _,
                          }),
                          (0, n.jsx)(w, {}),
                          (0, n.jsx)(f, {
                            setModalVisible: d,
                            setModalImage: _,
                            setModalIndex: g,
                          }),
                          (0, n.jsx)(R, {}),
                          (0, n.jsx)(S, {}),
                        ],
                      }),
                  (0, n.jsx)(L.A, {}),
                  (0, n.jsx)(E, {
                    isVisible: r,
                    isModalImage: m,
                    isModalIndex: h,
                    setModalVisible: d,
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    44940: (s) => {
      s.exports = function (s) {
        return null != s && "object" == typeof s;
      };
    },
    44961: (s, e, t) => {
      var n = t(56869),
        a = Object.prototype,
        i = a.hasOwnProperty,
        l = a.toString,
        c = n ? n.toStringTag : void 0;
      s.exports = function (s) {
        var e = i.call(s, c),
          t = s[c];
        try {
          s[c] = void 0;
          var n = !0;
        } catch (s) {}
        var a = l.call(s);
        return n && (e ? (s[c] = t) : delete s[c]), a;
      };
    },
    56869: (s, e, t) => {
      s.exports = t(29345).Symbol;
    },
    57543: (s, e, t) => {
      "use strict";
      t.d(e, { A: () => d });
      var n = t(66162),
        a = t(66833),
        i = t(69996),
        l = t(44922),
        c = t(30551),
        o = t.n(c),
        r = t(47573);
      let d = () => {
        let { t: s, lang: e } = (0, i.A)("common"),
          t = (0, l.useRef)(!1),
          c = encodeURI((0, a.useRouter)().asPath);
        return (
          (0, l.useEffect)(() => {
            !1 === t.current && (t.current = !0);
          }, []),
          (0, n.jsx)("article", {
            className: o().interface_box,
            children: (0, n.jsxs)("ul", {
              children: [
                (0, n.jsx)("li", {
                  className: c.match(/fightingground/)
                    ? "".concat(o().fg, " ").concat(o().active)
                    : o().fg,
                  children: (0, n.jsx)("a", {
                    href: "fightingground",
                    children: (0, n.jsx)(r.j_, {}),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: c.match(/battlehub/)
                    ? "".concat(o().bh, " ").concat(o().active)
                    : o().bh,
                  children: (0, n.jsx)("a", {
                    href: "battlehub",
                    children: (0, n.jsx)(r.eN, {}),
                  }),
                }),
                (0, n.jsx)("li", {
                  className: c.match(/worldtour/)
                    ? "".concat(o().wt, " ").concat(o().active)
                    : o().wt,
                  children: (0, n.jsx)("a", {
                    href: "worldtour",
                    children: (0, n.jsx)(r.pN, {}),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    59672: (s, e, t) => {
      var n = t(29345);
      s.exports = function () {
        return n.Date.now();
      };
    },
    64332: (s, e, t) => {
      var n = t(1696),
        a = t(66539),
        i = t(90052),
        l = 0 / 0,
        c = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        r = /^0o[0-7]+$/i,
        d = parseInt;
      s.exports = function (s) {
        if ("number" == typeof s) return s;
        if (i(s)) return l;
        if (a(s)) {
          var e = "function" == typeof s.valueOf ? s.valueOf() : s;
          s = a(e) ? e + "" : e;
        }
        if ("string" != typeof s) return 0 === s ? s : +s;
        s = n(s);
        var t = o.test(s);
        return t || r.test(s) ? d(s.slice(2), t ? 2 : 8) : c.test(s) ? l : +s;
      };
    },
    66539: (s) => {
      s.exports = function (s) {
        var e = typeof s;
        return null != s && ("object" == e || "function" == e);
      };
    },
    67880: (s, e, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mode/fightingground",
        function () {
          return t(33329);
        },
      ]);
    },
    83075: (s, e, t) => {
      var n = t(66539),
        a = t(59672),
        i = t(64332),
        l = Math.max,
        c = Math.min;
      s.exports = function (s, e, t) {
        var o,
          r,
          d,
          m,
          _,
          h,
          g = 0,
          x = !1,
          p = !1,
          j = !0;
        if ("function" != typeof s) throw TypeError("Expected a function");
        function u(e) {
          var t = o,
            n = r;
          return (o = r = void 0), (g = e), (m = s.apply(n, t));
        }
        function y(s) {
          var t = s - h,
            n = s - g;
          return void 0 === h || t >= e || t < 0 || (p && n >= d);
        }
        function N() {
          var s,
            t,
            n,
            i = a();
          if (y(i)) return z(i);
          _ = setTimeout(
            N,
            ((s = i - h), (t = i - g), (n = e - s), p ? c(n, d - t) : n)
          );
        }
        function z(s) {
          return ((_ = void 0), j && o) ? u(s) : ((o = r = void 0), m);
        }
        function w() {
          var s,
            t = a(),
            n = y(t);
          if (((o = arguments), (r = this), (h = t), n)) {
            if (void 0 === _)
              return (g = s = h), (_ = setTimeout(N, e)), x ? u(s) : m;
            if (p) return clearTimeout(_), (_ = setTimeout(N, e)), u(h);
          }
          return void 0 === _ && (_ = setTimeout(N, e)), m;
        }
        return (
          (e = i(e) || 0),
          n(t) &&
            ((x = !!t.leading),
            (d = (p = "maxWait" in t) ? l(i(t.maxWait) || 0, e) : d),
            (j = "trailing" in t ? !!t.trailing : j)),
          (w.cancel = function () {
            void 0 !== _ && clearTimeout(_), (g = 0), (o = h = r = _ = void 0);
          }),
          (w.flush = function () {
            return void 0 === _ ? m : z(a());
          }),
          w
        );
      };
    },
    90052: (s, e, t) => {
      var n = t(32236),
        a = t(44940);
      s.exports = function (s) {
        return "symbol" == typeof s || (a(s) && "[object Symbol]" == n(s));
      };
    },
    98078: (s) => {
      var e = Object.prototype.toString;
      s.exports = function (s) {
        return e.call(s);
      };
    },
  },
  (s) => {
    s.O(0, [36742, 88649, 42650, 86130, 34829, 90636, 46593, 38792], () =>
      s((s.s = 67880))
    ),
      (_N_E = s.O());
  },
]);
