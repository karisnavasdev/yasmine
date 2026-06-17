(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [91750],
  {
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
    51207: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { __N_SSG: () => y, default: () => z });
      var s = a(66162),
        _ = a(69996),
        i = a(44922),
        c = a(12350),
        l = a(86130),
        n = a(56709),
        o = a.n(n),
        r = a(42650),
        d = a(42223),
        m = a(37203),
        p = a.n(m),
        g = a(47573);
      let h = (e) => {
        let { setModalVisible: t, setModalImage: a } = e,
          { t: c, lang: l } = (0, _.A)("mode/worldtour"),
          n = (0, i.useRef)(!1),
          m = (0, i.useRef)([]),
          h = (0, i.useRef)([]);
        r.os.config({ nullTargetWarn: !1 });
        let j = (() => {
          switch (l) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              return (0, s.jsx)(g.em, {});
            case "fr":
              return (0, s.jsx)(g.PQ, {});
            case "it":
              return (0, s.jsx)(g.c8, {});
            case "de":
              return (0, s.jsx)(g.Qj, {});
            case "es-es":
            case "es-us":
              return (0, s.jsx)(g.lv, {});
            case "pt-br":
              return (0, s.jsx)(g.jQ, {});
            default:
              return (0, s.jsx)(g.X0, {});
          }
        })();
        return (
          (0, i.useEffect)(() => {
            !1 === n.current && (n.current = !0),
              (() => {
                let e = document.querySelector(".contents");
                r.os.to(e, 1, { opacity: 1, ease: d.G6.easeOut }),
                  r.os.to(h.current, 1.5, { y: 0, ease: d.G6.easeOut }),
                  r.os.to(m.current, 1.7, {
                    scale: 1,
                    opacity: 1,
                    ease: d.G6.easeOut,
                  });
              })();
          }, []),
          (0, s.jsxs)("article", {
            className: p().page__worldtour__image,
            children: [
              (0, s.jsx)("div", {
                className: p().page__worldtour__image__mv,
                ref: m,
                children: (0, s.jsx)("div", {
                  className: p().mainImage__btn,
                  onClick: () => {
                    t(!0), a("mainImage");
                  },
                  children: (0, s.jsx)("div", {
                    className: p().image,
                    children: (0, s.jsx)(o(), {
                      className: p().all,
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
              (0, s.jsx)("div", {
                className: p().page__worldtour__image__contents,
                ref: h,
                children: (0, s.jsxs)("div", {
                  className: p().image__contents,
                  children: [
                    (0, s.jsx)("div", {
                      className: p().image__contents__bg__title,
                      children: (0, s.jsx)(g.pN, {}),
                    }),
                    (0, s.jsxs)("h1", {
                      children: [
                        (0, s.jsx)("span", { children: j }),
                        (0, s.jsx)(g.pN, {}),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: p().image__contents__text,
                      children: c("[t]image__contents__text"),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var j = a(92674);
      let x = () => {
        let { t: e, lang: t } = (0, _.A)("mode/worldtour"),
          a = (0, i.useRef)(!1),
          c = (0, i.useRef)([]);
        r.os.config({ nullTargetWarn: !1 }),
          r.os.registerPlugin(j.ScrollTrigger);
        let l = (e) => {
          e.preventDefault();
          let t = e.currentTarget.getAttribute("href"),
            a = document.querySelector(t),
            s = document.querySelector("header"),
            _ = a.getBoundingClientRect(),
            i = window.pageYOffset + _.top - s.clientHeight;
          window.scrollTo({ top: i, behavior: "smooth" });
        };
        return (
          (0, i.useEffect)(() => {
            !1 === a.current &&
              ((a.current = !0),
              (() => {
                let e = document.querySelector("header"),
                  t = document.getElementById("worldtourNav"),
                  a = t.getBoundingClientRect(),
                  s = window.pageYOffset + a.top - e.clientHeight;
                j.ScrollTrigger.create({
                  trigger: "#wrapper",
                  start: "top+=".concat(s),
                  toggleClass: { targets: t, className: p().small },
                });
              })());
          }, []),
          (0, s.jsx)("article", {
            className: p().page__worldtour__nav,
            ref: c,
            id: "worldtourNav",
            children: (0, s.jsx)("div", {
              className: p().page__worldtour__nav__inner,
              children: (0, s.jsxs)("ul", {
                className: p().page_link,
                children: [
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)("a", {
                      href: "#overview",
                      onClick: l,
                      children: [
                        (0, s.jsx)("span", {
                          className: p().main,
                          children: e(
                            "[t]image__contents__interface__overview"
                          ),
                        }),
                        "ja-jp" === t
                          ? (0, s.jsx)("span", {
                              className: p().sub,
                              children: "概要",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)("a", {
                      href: "#avatar",
                      onClick: l,
                      children: [
                        (0, s.jsx)("span", {
                          className: p().main,
                          children: e("[t]image__contents__interface__avatar"),
                        }),
                        "ja-jp" === t
                          ? (0, s.jsx)("span", {
                              className: p().sub,
                              children: "アバター",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)("a", {
                      href: "#travel",
                      onClick: l,
                      children: [
                        (0, s.jsx)("span", {
                          className: p().main,
                          children: e("[t]image__contents__interface__travel"),
                        }),
                        "ja-jp" === t
                          ? (0, s.jsx)("span", {
                              className: p().sub,
                              children: "トラベル",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)("a", {
                      href: "#master",
                      onClick: l,
                      children: [
                        (0, s.jsx)("span", {
                          className: p().main,
                          children: e("[t]image__contents__interface__master"),
                        }),
                        "ja-jp" === t
                          ? (0, s.jsx)("span", {
                              className: p().sub,
                              children: "師匠",
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, s.jsx)("li", {
                    children: (0, s.jsxs)("a", {
                      href: "#battle",
                      onClick: l,
                      children: [
                        (0, s.jsx)("span", {
                          className: p().main,
                          children: e("[t]image__contents__interface__battle"),
                        }),
                        "ja-jp" === t
                          ? (0, s.jsx)("span", {
                              className: p().sub,
                              children: "バトル",
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
      var u = a(34829);
      let v = (e) => {
        let { setModalVisible: t, setModalImage: a } = e,
          { t: c, lang: l } = (0, _.A)("mode/worldtour"),
          n = (0, i.useRef)(!1),
          d = {
            arrows: !1,
            bars: !0,
            autoplay: !0,
            autoplaySpeed: 4600,
            flick: !0,
            overlapping: !0,
          },
          m = (0, i.useRef)([]);
        for (let e = 0; e < 2; e++) m.current[e] = (0, i.createRef)();
        let g = (e, t, a) => {
          let s = m.current[t].current.children,
            _ = e.target.parentElement.children;
          for (let e = 0; e < s.length; e++)
            s[e].classList.remove("".concat(p().active));
          for (let e = 0; e < _.length; e++)
            _[e].classList.remove("".concat(p().active));
          s[a].classList.add("".concat(p().active)),
            e.target.classList.add("".concat(p().active));
        };
        r.os.config({ nullTargetWarn: !1 }),
          r.os.registerPlugin(j.ScrollTrigger);
        let h = (0, i.useRef)(""),
          x = (0, i.useRef)(null),
          v = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            let e = null,
              t = (a) => {
                e || (e = a);
                let s = a - e;
                x.current &&
                  (x.current.style.transform = "rotate(".concat(
                    (s / 50) % 360,
                    "deg)"
                  )),
                  (v.current = requestAnimationFrame(t));
              };
            return (
              (v.current = requestAnimationFrame(t)),
              () => {
                v.current && cancelAnimationFrame(v.current);
              }
            );
          }, []),
          (0, i.useEffect)(() => {
            !1 === n.current && (n.current = !0),
              h.current &&
                (() => {
                  let e = document.getElementById("worldtourVideo");
                  j.ScrollTrigger.create({
                    trigger: "#master",
                    start: "top bottom",
                    end: "bottom",
                    onEnter: () => {
                      e.play();
                    },
                    onEnterBack: () => {
                      e.play();
                    },
                    onLeave: () => {
                      e.pause();
                    },
                    onLeaveBack: () => {
                      e.pause();
                    },
                  });
                })();
          }, [h]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("article", {
                id: "overview",
                className: ""
                  .concat(p().page__worldtour__section, " ")
                  .concat(p().page__worldtour__section__overview),
                children: (0, s.jsxs)("div", {
                  className: p().page__worldtour__section__item,
                  children: [
                    (0, s.jsxs)("h2", {
                      className: p().page__worldtour__section__ttl,
                      "data-title": c(
                        "[t]image__contents__interface__overview"
                      ),
                      children: [
                        c("[t]image__contents__interface__overview"),
                        "ja-jp" === l
                          ? (0, s.jsx)("span", { children: "／ 概要" })
                          : null,
                        (0, s.jsx)("div", { ref: x, className: p().circle }),
                      ],
                    }),
                    (0, s.jsxs)("ul", {
                      className: p().images,
                      children: [
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)(o(), {
                            className: p().all,
                            src: "/6/assets/images/mode/wt/ov_pic1.png",
                            width: "1291",
                            height: "738",
                            alt: "",
                            layout: "responsive",
                            loading: "lazy",
                            unoptimized: !0,
                          }),
                        }),
                        (0, s.jsxs)("li", {
                          className: p().page__worldtour__section__pic,
                          children: [
                            (0, s.jsx)("div", {
                              className: p().pc,
                              children: (0, s.jsx)(o(), {
                                src: "/6/assets/images/mode/wt/ov_pic2.png",
                                width: "727",
                                height: "738",
                                alt: "",
                                layout: "responsive",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: p().sp,
                              children: (0, s.jsx)(o(), {
                                src: "/6/assets/images/mode/wt/ov_pic2_sp.png",
                                width: "570",
                                height: "339",
                                alt: "",
                                layout: "responsive",
                                loading: "lazy",
                                unoptimized: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: p().page__worldtour__section__text,
                      children: (0, s.jsx)("p", {
                        className: p().text,
                        children: c("[t]overview__text"),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("article", {
                id: "avatar",
                className: ""
                  .concat(p().page__worldtour__section, " ")
                  .concat(p().page__worldtour__section__avatar),
                children: [
                  (0, s.jsx)("span", { className: p().bg__light }),
                  (0, s.jsx)("span", { className: p().bg__list }),
                  (0, s.jsxs)("div", {
                    className: p().page__worldtour__section__item,
                    children: [
                      (0, s.jsxs)("h2", {
                        className: p().avatar__ttl,
                        children: [
                          (0, s.jsx)("span", {
                            className: p().main,
                            children: c(
                              "[t]image__contents__interface__avatar"
                            ),
                          }),
                          "ja-jp" === l
                            ? (0, s.jsx)("span", {
                                className: p().sub,
                                children: "アバター",
                              })
                            : null,
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__1),
                        children: [
                          (0, s.jsx)("div", {
                            className: p().avatar__pic,
                            children: (0, s.jsx)(o(), {
                              className: p().all,
                              src: "/6/assets/images/mode/wt/avatar_pic1.png",
                              width: "1172",
                              height: "405",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsx)("p", {
                            className: ""
                              .concat(p().avatar__text, " ")
                              .concat(p().avatar__text__1),
                            children: c("[t]avatar_text"),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__2),
                        children: (0, s.jsx)("div", {
                          className: p().avatar__content,
                          children: (0, s.jsxs)("div", {
                            className: p().avatar__content__inner,
                            children: [
                              (0, s.jsxs)("div", {
                                className: p().avatar__content__item,
                                children: [
                                  (0, s.jsxs)("h3", {
                                    className: p().avatar__content__ttl,
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: c("[t]avatar_creating"),
                                      }),
                                      "ja-jp" === l
                                        ? (0, s.jsx)("small", {
                                            className:
                                              p().avatar__content__ttl__ruby,
                                            children:
                                              "／ アバタークリエーション機能",
                                          })
                                        : null,
                                    ],
                                  }),
                                  (0, s.jsx)(u.A, {
                                    settings: d,
                                    contentName: "worldtour",
                                    children: (0, s.jsxs)(i.Fragment, {
                                      children: [
                                        (0, s.jsx)(
                                          "li",
                                          {
                                            className: ""
                                              .concat(p().slides__item, " ")
                                              .concat(p().active),
                                            children: (0, s.jsx)(o(), {
                                              className: p().all,
                                              src: "/6/assets/images/mode/wt/avatar_pic3-01".concat(
                                                "ja-jp" !== l ? "-en" : "",
                                                ".jpg"
                                              ),
                                              width: "649",
                                              height: "365",
                                              alt: "",
                                              layout: "responsive",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          },
                                          "ss1"
                                        ),
                                        (0, s.jsx)(
                                          "li",
                                          {
                                            className: "".concat(
                                              p().slides__item
                                            ),
                                            children: (0, s.jsx)(o(), {
                                              className: p().all,
                                              src: "/6/assets/images/mode/wt/avatar_pic3-02".concat(
                                                "ja-jp" !== l ? "-en" : "",
                                                ".jpg"
                                              ),
                                              width: "649",
                                              height: "365",
                                              alt: "",
                                              layout: "responsive",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          },
                                          "ss2"
                                        ),
                                        (0, s.jsx)(
                                          "li",
                                          {
                                            className: "".concat(
                                              p().slides__item
                                            ),
                                            children: (0, s.jsx)(o(), {
                                              className: p().all,
                                              src: "/6/assets/images/mode/wt/avatar_pic3-03".concat(
                                                "ja-jp" !== l ? "-en" : "",
                                                ".jpg"
                                              ),
                                              width: "649",
                                              height: "365",
                                              alt: "",
                                              layout: "responsive",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          },
                                          "ss3"
                                        ),
                                        (0, s.jsx)(
                                          "li",
                                          {
                                            className: "".concat(
                                              p().slides__item
                                            ),
                                            children: (0, s.jsx)(o(), {
                                              className: p().all,
                                              src: "/6/assets/images/mode/wt/avatar_pic3-04.jpg",
                                              width: "649",
                                              height: "365",
                                              alt: "",
                                              layout: "responsive",
                                              loading: "lazy",
                                              unoptimized: !0,
                                            }),
                                          },
                                          "ss4"
                                        ),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().avatar__content__text,
                                    children: c("[t]avatar_creating_text"),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: p().avatar__content__item,
                                children: [
                                  (0, s.jsxs)("h3", {
                                    className: p().avatar__content__ttl,
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: c("[t]avatar_equipment"),
                                      }),
                                      "ja-jp" === l
                                        ? (0, s.jsx)("span", {
                                            className:
                                              p().avatar__content__ttl__ruby,
                                            children: "／ 装備品",
                                          })
                                        : null,
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().avatar__content__pic,
                                    children: (0, s.jsx)(o(), {
                                      className: p().all,
                                      src: "/6/assets/images/mode/wt/avatar_pic4".concat(
                                        "ja-jp" !== l ? "-en" : "",
                                        ".jpg"
                                      ),
                                      width: "649",
                                      height: "365",
                                      alt: "",
                                      layout: "responsive",
                                      loading: "lazy",
                                      unoptimized: !0,
                                    }),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().avatar__content__text,
                                    children: c("[t]avatar_equipment_text"),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: ""
                                  .concat(p().avatar__content__item, " ")
                                  .concat(p().avatar__content__item__ctr),
                                children: [
                                  (0, s.jsxs)("h3", {
                                    className: p().avatar__content__ttl,
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: c("[t]avatar_battlestyle"),
                                      }),
                                      "ja-jp" === l
                                        ? (0, s.jsx)("span", {
                                            className:
                                              p().avatar__content__ttl__ruby,
                                            children: "／ バトルスタイル",
                                          })
                                        : null,
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: p().avatar__content__item__inner,
                                    children: [
                                      (0, s.jsx)("h4", {
                                        className: p().avatar__content__sttl,
                                        children: c("[t]avatar_battlestyle_01"),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__pic,
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/avatar_pic5".concat(
                                            "ja-jp" !== l ? "-en" : "",
                                            ".jpg"
                                          ),
                                          width: "649",
                                          height: "365",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__text,
                                        children: c(
                                          "[t]avatar_battlestyle_01_text"
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: p().avatar__content__item__inner,
                                    children: [
                                      (0, s.jsx)("h4", {
                                        className: p().avatar__content__sttl,
                                        children: c("[t]avatar_battlestyle_02"),
                                      }),
                                      (0, s.jsx)(u.A, {
                                        settings: d,
                                        contentName: "worldtour",
                                        children: (0, s.jsxs)(i.Fragment, {
                                          children: [
                                            (0, s.jsx)(
                                              "li",
                                              {
                                                className: ""
                                                  .concat(p().slides__item, " ")
                                                  .concat(p().active),
                                                children: (0, s.jsx)(o(), {
                                                  className: p().all,
                                                  src: "/6/assets/images/mode/wt/avatar_pic6-01".concat(
                                                    "ja-jp" !== l ? "-en" : "",
                                                    ".jpg"
                                                  ),
                                                  width: "649",
                                                  height: "365",
                                                  alt: "",
                                                  layout: "responsive",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              },
                                              "ss1"
                                            ),
                                            (0, s.jsx)(
                                              "li",
                                              {
                                                className: "".concat(
                                                  p().slides__item
                                                ),
                                                children: (0, s.jsx)(o(), {
                                                  className: p().all,
                                                  src: "/6/assets/images/mode/wt/avatar_pic6-02".concat(
                                                    "ja-jp" !== l ? "-en" : "",
                                                    ".jpg"
                                                  ),
                                                  width: "649",
                                                  height: "365",
                                                  alt: "",
                                                  layout: "responsive",
                                                  loading: "lazy",
                                                  unoptimized: !0,
                                                }),
                                              },
                                              "ss2"
                                            ),
                                          ],
                                        }),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__text,
                                        children: c(
                                          "[t]avatar_battlestyle_02_text"
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: ""
                                  .concat(p().avatar__content__item, " ")
                                  .concat(p().avatar__content__item__ctr),
                                children: [
                                  (0, s.jsxs)("h3", {
                                    className: p().avatar__content__ttl,
                                    children: [
                                      (0, s.jsx)("strong", {
                                        children: c("[t]avatar_grow"),
                                      }),
                                      "ja-jp" === l
                                        ? (0, s.jsx)("span", {
                                            className:
                                              p().avatar__content__ttl__ruby,
                                            children: "／ 成長",
                                          })
                                        : null,
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: p().avatar__content__item__inner,
                                    children: [
                                      (0, s.jsx)("h4", {
                                        className: p().avatar__content__sttl,
                                        children: c("[t]avatar_grow_01"),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__pic,
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/avatar_pic7".concat(
                                            "ja-jp" !== l ? "-en" : "",
                                            ".jpg"
                                          ),
                                          width: "649",
                                          height: "365",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__text,
                                        children: c("[t]avatar_grow_01_text"),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: p().avatar__content__item__inner,
                                    children: [
                                      (0, s.jsx)("h4", {
                                        className: p().avatar__content__sttl,
                                        children: c("[t]avatar_grow_02"),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__pic,
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/avatar_pic8".concat(
                                            "ja-jp" !== l ? "-en" : "",
                                            ".jpg"
                                          ),
                                          width: "649",
                                          height: "365",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      }),
                                      (0, s.jsx)("p", {
                                        className: p().avatar__content__text,
                                        children: c("[t]avatar_grow_02_text"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__3),
                        children: [
                          (0, s.jsx)("h3", {
                            className: p().avatar__content__ttl,
                            children: c("[t]avatar_battle"),
                          }),
                          (0, s.jsxs)("div", {
                            className: p().avatar__pic,
                            children: [
                              (0, s.jsx)("div", {
                                className: p().pc,
                                children: (0, s.jsx)(o(), {
                                  src: "/6/assets/images/mode/wt/avatar_pic9.png",
                                  width: "1756",
                                  height: "884",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: p().sp,
                                children: (0, s.jsx)(o(), {
                                  src: "/6/assets/images/mode/wt/avatar_pic9-sp.png",
                                  width: "757",
                                  height: "656",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: p().avatar__text,
                            children: [
                              (0, s.jsx)("p", {
                                className: p().avatar__text__item,
                                children: c("[t]avatar_battle_text"),
                              }),
                              (0, s.jsx)("div", {
                                className: p().avatar__btn,
                                children: (0, s.jsx)("a", {
                                  className: p().avatar__btn__item,
                                  href: "./battlehub#avatarbattle",
                                  children: c("[t]avatar_battle_btn"),
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
              (0, s.jsxs)("article", {
                id: "travel",
                className: ""
                  .concat(p().page__worldtour__section, " ")
                  .concat(p().page__worldtour__section__travel),
                children: [
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__traveling),
                    children: [
                      (0, s.jsx)("div", {
                        className: p().bg,
                        children: (0, s.jsx)("span", {
                          className: ""
                            .concat(p().bg__item, " ")
                            .concat(p().bg__item__1),
                        }),
                      }),
                      (0, s.jsx)("h2", {
                        className: p().page__worldtour__section__ttl,
                        "data-title": c("[t]travel_traveling"),
                        children: c("[t]travel_traveling"),
                      }),
                      (0, s.jsx)("div", {
                        className: p().page__worldtour__section__text,
                        children: (0, s.jsx)("p", {
                          className: p().text,
                          children: c("[t]travel_traveling_text"),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__pic,
                        children: [
                          (0, s.jsx)("div", {
                            className: p().pc,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/traveling_pic.png",
                              width: "2347",
                              height: "256",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: p().sp,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/traveling_pic_sp.png",
                              width: "887",
                              height: "350",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__location),
                    children: [
                      (0, s.jsxs)("div", {
                        className: p().bg,
                        children: [
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__2),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__3),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__4),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__5),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__6),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(
                            p().page__worldtour__section__item__inner__metrocity
                          ),
                        children: [
                          (0, s.jsxs)("h3", {
                            className: p().page__worldtour__section__ttl,
                            "data-title": c("[t]travel_traveling_location01"),
                            children: [
                              c("[t]travel_traveling_location01"),
                              "ja-jp" === l
                                ? (0, s.jsx)("span", {
                                    children: "／ メトロシティ",
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: ""
                              .concat(p().wt__slider, " ")
                              .concat(p().wt__slider__travel1),
                            children: (0, s.jsx)("div", {
                              className: p().wt__slider__area,
                              children: (0, s.jsx)(u.A, {
                                settings: d,
                                contentName: "worldtour",
                                children: (0, s.jsxs)(i.Fragment, {
                                  children: [
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: ""
                                          .concat(p().slides__item, " ")
                                          .concat(p().active),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic1.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss1"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic2.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss2"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic3.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss3"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic4.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss4"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic5.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss5"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location1_pic6.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
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
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__text,
                            children: (0, s.jsx)("p", {
                              className: p().text,
                              children: c(
                                "[t]travel_traveling_location01_text"
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(
                            p().page__worldtour__section__item__inner__nayshall
                          ),
                        children: [
                          (0, s.jsxs)("h3", {
                            className: p().page__worldtour__section__ttl,
                            "data-title": c("[t]travel_traveling_location02"),
                            children: [
                              c("[t]travel_traveling_location02"),
                              "ja-jp" === l
                                ? (0, s.jsx)("span", {
                                    children: "／ ナイシャール",
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: ""
                              .concat(p().wt__slider, " ")
                              .concat(p().wt__slider__travel2),
                            children: (0, s.jsx)("div", {
                              className: p().wt__slider__area,
                              children: (0, s.jsx)(u.A, {
                                settings: d,
                                contentName: "worldtour",
                                children: (0, s.jsxs)(i.Fragment, {
                                  children: [
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: ""
                                          .concat(p().slides__item, " ")
                                          .concat(p().active),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic1.jpg",
                                          width: "902",
                                          height: "507",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss1"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic2.jpg",
                                          width: "902",
                                          height: "507",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss2"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic3.jpg",
                                          width: "902",
                                          height: "507",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss3"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic4.jpg",
                                          width: "902",
                                          height: "507",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss4"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic5.jpg",
                                          width: "1280",
                                          height: "720",
                                          alt: "",
                                          layout: "responsive",
                                          loading: "lazy",
                                          unoptimized: !0,
                                        }),
                                      },
                                      "ss5"
                                    ),
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        className: "".concat(p().slides__item),
                                        children: (0, s.jsx)(o(), {
                                          className: p().all,
                                          src: "/6/assets/images/mode/wt/world-location2_pic6.jpg",
                                          width: "902",
                                          height: "507",
                                          alt: "",
                                          layout: "responsive",
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
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__text,
                            children: (0, s.jsx)("p", {
                              className: p().text,
                              children: c(
                                "[t]travel_traveling_location02_text"
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__fates),
                    children: [
                      (0, s.jsx)("div", {
                        className: p().bg,
                        children: (0, s.jsx)("span", {
                          className: ""
                            .concat(p().bg__item, " ")
                            .concat(p().bg__item__7),
                        }),
                      }),
                      (0, s.jsx)("h3", {
                        className: p().page__worldtour__section__ttl,
                        "data-title": c("[t]travel_traveling_fates"),
                        children: c("[t]travel_traveling_fates"),
                      }),
                      (0, s.jsx)("div", {
                        className: p().page__worldtour__section__text,
                        children: (0, s.jsx)("p", {
                          className: p().text,
                          children: c("[t]travel_traveling_fates_text"),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__pic,
                        children: [
                          (0, s.jsx)("div", {
                            className: p().pc,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/world-fates_pic1.png",
                              width: "1734",
                              height: "1228",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: p().sp,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/world-fates_pic1-sp.png",
                              width: "674",
                              height: "1072",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__shop),
                    children: [
                      (0, s.jsxs)("div", {
                        className: p().bg,
                        children: [
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__8),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__9),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(
                            p().page__worldtour__section__item__inner__intro
                          ),
                        children: [
                          (0, s.jsxs)("h3", {
                            className: p().page__worldtour__section__ttl,
                            "data-title": c("[t]travel_traveling_shop"),
                            children: [
                              c("[t]travel_traveling_shop"),
                              "ja-jp" === l
                                ? (0, s.jsx)("span", {
                                    children: "／ ショップ",
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__text,
                            children: (0, s.jsx)("p", {
                              className: p().text,
                              children: c("[t]travel_traveling_shop_text"),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(
                            p().page__worldtour__section__item__inner__detail
                          ),
                        children: [
                          (0, s.jsx)("div", {
                            className: ""
                              .concat(p().page__worldtour__section__pic, " ")
                              .concat(p().page__worldtour__section__pic__left),
                            children: (0, s.jsxs)("ul", {
                              className: ""
                                .concat(
                                  p().page__worldtour__section__pic__list,
                                  " "
                                )
                                .concat(
                                  p().page__worldtour__section__pic__list1
                                ),
                              ref: m.current[0],
                              children: [
                                (0, s.jsx)("li", {
                                  className: ""
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list__item,
                                      " "
                                    )
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list1__item,
                                      " "
                                    )
                                    .concat(p().active),
                                  children: (0, s.jsx)(o(), {
                                    className: p().all,
                                    src: "/6/assets/images/mode/wt/world-shop1_pic1".concat(
                                      "ja-jp" !== l ? "-en" : "",
                                      ".jpg"
                                    ),
                                    width: "760",
                                    height: "427",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, s.jsx)("li", {
                                  className: ""
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list__item,
                                      " "
                                    )
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list1__item
                                    ),
                                  children: (0, s.jsx)(o(), {
                                    className: p().all,
                                    src: "/6/assets/images/mode/wt/world-shop1_pic2".concat(
                                      "ja-jp" !== l ? "-en" : "",
                                      ".jpg"
                                    ),
                                    width: "760",
                                    height: "427",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(p().page__worldtour__section__text, " ")
                              .concat(
                                p().page__worldtour__section__text__right
                              ),
                            children: [
                              (0, s.jsx)("p", {
                                className: p().ttl,
                                children: c("[t]travel_traveling_shop_01"),
                              }),
                              (0, s.jsx)("p", {
                                className: p().text,
                                children: c("[t]travel_traveling_shop_01_text"),
                              }),
                              (0, s.jsxs)("ul", {
                                className: p().list__btn,
                                children: [
                                  (0, s.jsx)("li", {
                                    className: ""
                                      .concat(p().list__btn__item, " ")
                                      .concat(p().list__btn__item__1, " ")
                                      .concat(p().active),
                                    onClick: (e) => g(e, 0, 0),
                                    children: c(
                                      "[t]travel_traveling_shop_btn_01"
                                    ),
                                  }),
                                  (0, s.jsx)("li", {
                                    className: ""
                                      .concat(p().list__btn__item, " ")
                                      .concat(p().list__btn__item__1),
                                    onClick: (e) => g(e, 0, 1),
                                    children: c(
                                      "[t]travel_traveling_shop_btn_02"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(
                            p().page__worldtour__section__item__inner__detail
                          ),
                        children: [
                          (0, s.jsx)("div", {
                            className: ""
                              .concat(p().page__worldtour__section__pic, " ")
                              .concat(p().page__worldtour__section__pic__right),
                            children: (0, s.jsxs)("ul", {
                              className: ""
                                .concat(
                                  p().page__worldtour__section__pic__list,
                                  " "
                                )
                                .concat(
                                  p().page__worldtour__section__pic__list2
                                ),
                              ref: m.current[1],
                              children: [
                                (0, s.jsx)("li", {
                                  className: ""
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list__item,
                                      " "
                                    )
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list2__item,
                                      " "
                                    )
                                    .concat(p().active),
                                  children: (0, s.jsx)(o(), {
                                    className: p().all,
                                    src: "/6/assets/images/mode/wt/world-shop2_pic1".concat(
                                      "ja-jp" !== l ? "-en" : "",
                                      ".jpg"
                                    ),
                                    width: "760",
                                    height: "427",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, s.jsx)("li", {
                                  className: ""
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list__item,
                                      " "
                                    )
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list2__item
                                    ),
                                  children: (0, s.jsx)(o(), {
                                    className: p().all,
                                    src: "/6/assets/images/mode/wt/world-shop2_pic2".concat(
                                      "ja-jp" !== l ? "-en" : "",
                                      ".jpg"
                                    ),
                                    width: "760",
                                    height: "427",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, s.jsx)("li", {
                                  className: ""
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list__item,
                                      " "
                                    )
                                    .concat(
                                      p()
                                        .page__worldtour__section__pic__list2__item
                                    ),
                                  children: (0, s.jsx)(o(), {
                                    className: p().all,
                                    src: "/6/assets/images/mode/wt/world-shop2_pic3.jpg",
                                    width: "760",
                                    height: "427",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(p().page__worldtour__section__text, " ")
                              .concat(p().page__worldtour__section__text__left),
                            children: [
                              (0, s.jsx)("p", {
                                className: p().ttl,
                                children: c("[t]travel_traveling_shop_02"),
                              }),
                              (0, s.jsx)("p", {
                                className: p().text,
                                children: c("[t]travel_traveling_shop_02_text"),
                              }),
                              (0, s.jsxs)("ul", {
                                className: p().list__btn,
                                children: [
                                  (0, s.jsx)("li", {
                                    className: ""
                                      .concat(p().list__btn__item, " ")
                                      .concat(p().list__btn__item__2, " ")
                                      .concat(p().active),
                                    onClick: (e) => g(e, 1, 0),
                                    children: c(
                                      "[t]travel_traveling_shop_btn_01"
                                    ),
                                  }),
                                  (0, s.jsx)("li", {
                                    className: ""
                                      .concat(p().list__btn__item, " ")
                                      .concat(p().list__btn__item__2),
                                    onClick: (e) => g(e, 1, 1),
                                    children: c(
                                      "[t]travel_traveling_shop_btn_02"
                                    ),
                                  }),
                                  (0, s.jsx)("li", {
                                    className: ""
                                      .concat(p().list__btn__item, " ")
                                      .concat(p().list__btn__item__2),
                                    onClick: (e) => g(e, 1, 2),
                                    children: c(
                                      "[t]travel_traveling_shop_btn_03"
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
              (0, s.jsxs)("article", {
                id: "master",
                className: ""
                  .concat(p().page__worldtour__section, " ")
                  .concat(p().page__worldtour__section__master),
                children: [
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__intro),
                    children: [
                      (0, s.jsxs)("div", {
                        className: p().bg,
                        children: [
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__1),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__2),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__3),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("h2", {
                        className: p().page__worldtour__section__ttl,
                        "data-title": c(
                          "[t]image__contents__interface__master"
                        ),
                        children: [
                          c("[t]image__contents__interface__master"),
                          "ja-jp" === l
                            ? (0, s.jsx)("span", { children: "／ 師匠" })
                            : null,
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__pic,
                        children: [
                          (0, s.jsx)("div", {
                            className: p().pc,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/master_pic1.png",
                              width: "994",
                              height: "783",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: p().sp,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/master_pic1_sp.png",
                              width: "385",
                              height: "267",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__item__inner,
                        children: [
                          (0, s.jsx)("video", {
                            id: "worldtourVideo",
                            className: ""
                              .concat(p().page__worldtour__section__video, " ")
                              .concat(p().page__worldtour__section__video__1),
                            ref: h,
                            src: "/6/assets/images/mode/wt/master_action_".concat(
                              "ja-jp" !== l ? "en" : "ja",
                              ".mp4"
                            ),
                            poster:
                              "/6/assets/images/mode/wt/master_action_poster.jpg",
                            preload: "none",
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__text,
                            children: (0, s.jsx)("p", {
                              className: p().text,
                              children: c("[t]master__text"),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__style),
                    children: [
                      (0, s.jsx)("div", {
                        className: p().bg,
                        children: (0, s.jsx)("span", {
                          className: ""
                            .concat(p().bg__item, " ")
                            .concat(p().bg__item__4),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__1),
                        children: [
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__pic,
                            children: (0, s.jsx)(o(), {
                              className: p().all,
                              src: "/6/assets/images/mode/wt/master_pic2.jpg",
                              width: "582",
                              height: "327",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: p().page__worldtour__section__text,
                            children: [
                              (0, s.jsx)("p", {
                                className: p().ttl,
                                children: c("[t]master_style01"),
                              }),
                              (0, s.jsx)("p", {
                                className: p().text,
                                children: c("[t]master_style01_text"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__2),
                        children: [
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__pic,
                            children: (0, s.jsx)(o(), {
                              className: p().all,
                              src: "/6/assets/images/mode/wt/master_pic3".concat(
                                "ja-jp" !== l ? "-en" : "",
                                ".jpg"
                              ),
                              width: "582",
                              height: "327",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: p().page__worldtour__section__text,
                            children: [
                              (0, s.jsx)("p", {
                                className: p().ttl,
                                children: c("[t]master_style02"),
                              }),
                              (0, s.jsx)("p", {
                                className: p().text,
                                children: c("[t]master_style02_text"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__action),
                    children: [
                      (0, s.jsxs)("div", {
                        className: p().bg,
                        children: [
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__5),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__6),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__7),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__text,
                        children: [
                          (0, s.jsx)("p", {
                            className: p().ttl,
                            children: c("[t]master_action"),
                          }),
                          (0, s.jsx)("p", {
                            className: p().text,
                            children: c("[t]master_action_text"),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: p().page__worldtour__section__video,
                        children: (0, s.jsx)("div", {
                          className: p().video__inner,
                          children: (0, s.jsx)("a", {
                            href: "https://www.youtube.com/watch?v=CyWrT95P2jQ",
                            target: "_blank",
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/master_post.jpg",
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
                ],
              }),
              (0, s.jsxs)("article", {
                id: "battle",
                className: ""
                  .concat(p().page__worldtour__section, " ")
                  .concat(p().page__worldtour__section__battle),
                children: [
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__battle),
                    children: [
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__1),
                        children: [
                          (0, s.jsxs)("div", {
                            className: p().bg,
                            children: [
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__1),
                              }),
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__2),
                              }),
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__3),
                              }),
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__4),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("h2", {
                            className: p().page__worldtour__section__ttl,
                            "data-title": c(
                              "[t]image__contents__interface__battle"
                            ),
                            children: [
                              c("[t]image__contents__interface__battle"),
                              "ja-jp" === l
                                ? (0, s.jsx)("span", { children: "／ バトル" })
                                : null,
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: p().page__worldtour__section__pic,
                            children: [
                              (0, s.jsx)("div", {
                                className: p().pc,
                                children: (0, s.jsx)(o(), {
                                  src: "/6/assets/images/mode/wt/battle_pic1.png",
                                  width: "1477",
                                  height: "936",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: p().sp,
                                children: (0, s.jsx)(o(), {
                                  src: "/6/assets/images/mode/wt/battle_pic1-sp.png",
                                  width: "961",
                                  height: "633",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__text,
                            children: (0, s.jsx)("p", {
                              className: p().text,
                              children: c("[t]battle__text"),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__2),
                        children: [
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(
                                p().page__worldtour__section__item__inner__item,
                                " "
                              )
                              .concat(
                                p()
                                  .page__worldtour__section__item__inner__item__1
                              ),
                            children: [
                              (0, s.jsx)("div", {
                                className: p().page__worldtour__section__pic,
                                children: (0, s.jsx)("a", {
                                  href: "https://www.youtube.com/watch?v=eki4Lwaj3iU",
                                  target: "_blank",
                                  children: (0, s.jsx)(o(), {
                                    className: p().modal__movie__btn,
                                    src: "/6/assets/images/mode/wt/battle_poster1.jpg",
                                    width: "960",
                                    height: "540",
                                    alt: "",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: p().page__worldtour__section__text,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: p().ttl,
                                    children: c("[t]battle_01"),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().text,
                                    children: c("[t]battle_01_text"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(
                                p().page__worldtour__section__item__inner__item,
                                " "
                              )
                              .concat(
                                p()
                                  .page__worldtour__section__item__inner__item__2
                              ),
                            children: [
                              (0, s.jsx)("div", {
                                className: p().page__worldtour__section__pic,
                                children: (0, s.jsx)("a", {
                                  href: "https://www.youtube.com/watch?v=J9U0yZ13kYg",
                                  target: "_blank",
                                  children: (0, s.jsx)(o(), {
                                    className: p().modal__movie__btn,
                                    src: "/6/assets/images/mode/wt/battle_poster2.jpg",
                                    width: "960",
                                    height: "540",
                                    alt: "",
                                    layout: "responsive",
                                    loading: "lazy",
                                    unoptimized: !0,
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: p().page__worldtour__section__text,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: p().ttl,
                                    children: c("[t]battle_02"),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().text,
                                    children: c("[t]battle_02_text"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__3),
                        children: [
                          (0, s.jsxs)("div", {
                            className: p().bg,
                            children: [
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__5),
                              }),
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__6),
                              }),
                              (0, s.jsx)("span", {
                                className: ""
                                  .concat(p().bg__item, " ")
                                  .concat(p().bg__item__7),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: p().page__worldtour__section__pic,
                            children: (0, s.jsx)(o(), {
                              className: p().all,
                              src: "/6/assets/images/mode/wt/battle_pic2.jpg",
                              width: "953",
                              height: "536",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: p().page__worldtour__section__text,
                            children: [
                              (0, s.jsx)("p", {
                                className: p().ttl,
                                children: c("[t]battle_03"),
                              }),
                              (0, s.jsx)("p", {
                                className: p().text,
                                children: c("[t]battle_03_text"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: ""
                          .concat(
                            p().page__worldtour__section__item__inner,
                            " "
                          )
                          .concat(p().page__worldtour__section__item__inner__4),
                        children: [
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(
                                p().page__worldtour__section__item__inner__item,
                                " "
                              )
                              .concat(
                                p()
                                  .page__worldtour__section__item__inner__item__1
                              ),
                            children: [
                              (0, s.jsx)("div", {
                                className: p().page__worldtour__section__pic,
                                children: (0, s.jsx)(o(), {
                                  className: p().all,
                                  src: "/6/assets/images/mode/wt/battle_pic3".concat(
                                    "ja-jp" !== l ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "966",
                                  height: "543",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: p().page__worldtour__section__text,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: p().ttl,
                                    children: c("[t]battle_04"),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().text,
                                    children: c("[t]battle_04_text"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: ""
                              .concat(
                                p().page__worldtour__section__item__inner__item,
                                " "
                              )
                              .concat(
                                p()
                                  .page__worldtour__section__item__inner__item__2
                              ),
                            children: [
                              (0, s.jsx)("div", {
                                className: p().page__worldtour__section__pic,
                                children: (0, s.jsx)(o(), {
                                  className: p().all,
                                  src: "/6/assets/images/mode/wt/battle_pic4".concat(
                                    "ja-jp" !== l ? "-en" : "",
                                    ".jpg"
                                  ),
                                  width: "966",
                                  height: "543",
                                  alt: "",
                                  layout: "responsive",
                                  loading: "lazy",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: p().page__worldtour__section__text,
                                children: [
                                  (0, s.jsx)("p", {
                                    className: p().ttl,
                                    children: c("[t]battle_05"),
                                  }),
                                  (0, s.jsx)("p", {
                                    className: p().text,
                                    children: c("[t]battle_05_text"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ""
                      .concat(p().page__worldtour__section__item, " ")
                      .concat(p().page__worldtour__section__item__minigame),
                    children: [
                      (0, s.jsxs)("div", {
                        className: p().bg,
                        children: [
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__1),
                          }),
                          (0, s.jsx)("span", {
                            className: ""
                              .concat(p().bg__item, " ")
                              .concat(p().bg__item__2),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("h2", {
                        className: p().page__worldtour__section__ttl,
                        "data-title": c(
                          "[t]image__contents__interface__minigame"
                        ),
                        children: [
                          c("[t]image__contents__interface__minigame"),
                          "ja-jp" === l
                            ? (0, s.jsx)("span", { children: "／ ミニゲーム" })
                            : null,
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: p().page__worldtour__section__text,
                        children: (0, s.jsx)("p", {
                          className: p().text,
                          children: c("[t]minigame__text"),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: p().page__worldtour__section__pic,
                        children: [
                          (0, s.jsx)("div", {
                            className: p().pc,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/minigame_pic1.png",
                              width: "1648",
                              height: "1127",
                              alt: "",
                              layout: "responsive",
                              loading: "lazy",
                              unoptimized: !0,
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: p().sp,
                            children: (0, s.jsx)(o(), {
                              src: "/6/assets/images/mode/wt/minigame_pic1_sp.png",
                              width: "580",
                              height: "1143",
                              alt: "",
                              layout: "responsive",
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
      var w = a(57543),
        N = a(49715);
      let b = (e) => {
        let { isVisible: t, isModalImage: a, setModalVisible: c } = e,
          { t: l, lang: n } = (0, _.A)("index"),
          r = (0, i.useRef)(null);
        if (
          ((0, i.useEffect)(() => {
            t &&
              "mainImage" === a &&
              r.current.classList.add("".concat(p().disp));
          }, [t, a]),
          !t)
        )
          return null;
        let d = document.querySelector("html");
        d.classList.add("no_scroll");
        let m = document.getElementById("wrapper"),
          g = () => {
            c(!1), d.classList.remove("no_scroll");
          };
        return (0, N.createPortal)(
          (0, s.jsxs)("article", {
            className: "".concat(p().page__worldtour__image__modal, " modal"),
            children: [
              (0, s.jsx)("div", { className: p().modal__bg, onClick: g }),
              (0, s.jsxs)("section", {
                children: [
                  (0, s.jsx)("div", {
                    className: p().modal__mv,
                    ref: r,
                    children: (0, s.jsx)(o(), {
                      className: p().all,
                      src: "/6/assets/images/mode/wt/art.jpg",
                      width: "1920",
                      height: "1080",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, s.jsx)("p", {
                    className: "close",
                    onClick: g,
                    children: (0, s.jsx)(o(), {
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
          m
        );
      };
      var y = !0;
      let z = () => {
        let { t: e, lang: t } = (0, _.A)("mode/worldtour"),
          [a, n] = (0, i.useState)(!1),
          [o, r] = (0, i.useState)("");
        return (0, s.jsxs)(l.A, {
          children: [
            (0, s.jsx)(c.A, {
              pageTitle: e("[t]title"),
              pageDescription: e("[t]description"),
            }),
            (0, s.jsxs)("div", {
              className: "contents page__worldtour",
              children: [
                (0, s.jsx)(h, { setModalVisible: n, setModalImage: r }),
                (0, s.jsx)(x, {}),
                (0, s.jsx)(v, { setModalVisible: n, setModalImage: r }),
                (0, s.jsx)(w.A, {}),
                (0, s.jsx)(b, {
                  isVisible: a,
                  isModalImage: o,
                  setModalVisible: n,
                }),
              ],
            }),
          ],
        });
      };
    },
    57543: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(66162),
        _ = a(66833),
        i = a(69996),
        c = a(44922),
        l = a(30551),
        n = a.n(l),
        o = a(47573);
      let r = () => {
        let { t: e, lang: t } = (0, i.A)("common"),
          a = (0, c.useRef)(!1),
          l = encodeURI((0, _.useRouter)().asPath);
        return (
          (0, c.useEffect)(() => {
            !1 === a.current && (a.current = !0);
          }, []),
          (0, s.jsx)("article", {
            className: n().interface_box,
            children: (0, s.jsxs)("ul", {
              children: [
                (0, s.jsx)("li", {
                  className: l.match(/fightingground/)
                    ? "".concat(n().fg, " ").concat(n().active)
                    : n().fg,
                  children: (0, s.jsx)("a", {
                    href: "fightingground",
                    children: (0, s.jsx)(o.j_, {}),
                  }),
                }),
                (0, s.jsx)("li", {
                  className: l.match(/battlehub/)
                    ? "".concat(n().bh, " ").concat(n().active)
                    : n().bh,
                  children: (0, s.jsx)("a", {
                    href: "battlehub",
                    children: (0, s.jsx)(o.eN, {}),
                  }),
                }),
                (0, s.jsx)("li", {
                  className: l.match(/worldtour/)
                    ? "".concat(n().wt, " ").concat(n().active)
                    : n().wt,
                  children: (0, s.jsx)("a", {
                    href: "worldtour",
                    children: (0, s.jsx)(o.pN, {}),
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    66548: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/mode/worldtour",
        function () {
          return a(51207);
        },
      ]);
    },
  },
  (e) => {
    e.O(0, [36742, 88649, 42650, 86130, 34829, 90636, 46593, 38792], () =>
      e((e.s = 66548))
    ),
      (_N_E = e.O());
  },
]);
