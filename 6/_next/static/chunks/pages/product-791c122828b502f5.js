(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [17597],
  {
    3157: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { __N_SSG: () => N, default: () => y });
      var a = s(66162),
        r = s(69996),
        _ = s(44922),
        n = s(12350),
        i = s(86130),
        l = s(14376),
        c = s.n(l),
        d = s(15525),
        o = s.n(d),
        h = s(47573);
      let x = (e) => {
        let { setModalVisible: t } = e,
          { t: s, lang: n } = (0, r.A)("product"),
          i = (0, r.A)("common"),
          l = (0, _.useRef)(!1),
          [d, x] = (0, _.useState)("ps5"),
          m = (() => {
            switch (n) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return (0, a.jsx)(h.G4, {});
              case "fr":
                return (0, a.jsx)(h.bG, {});
              case "it":
                return (0, a.jsx)(h.Wz, {});
              case "de":
                return (0, a.jsx)(h.QF, {});
              case "es-es":
                return (0, a.jsx)(h.zA, {});
              case "es-us":
                return (0, a.jsx)(h.H6, {});
              case "pt-br":
                return (0, a.jsx)(h.ng, {});
              default:
                return (0, a.jsx)(h.n4, {});
            }
          })();
        return (
          (() => {
            switch (n) {
              case "en-us":
              case "en-uk":
              case "en-asia":
                return h.gu;
              case "fr":
                return h.$1;
              case "it":
                return h._6;
              case "de":
                return h.QQ;
              case "es-es":
                return h.nD;
              case "es-us":
                return h.H9;
              case "pt-br":
                return h.hA;
              default:
                return h.vp;
            }
          })(),
          (0, _.useEffect)(() => {
            !1 === l.current && (l.current = !0);
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("article", {
              className: o().page__product__headding,
              children: (0, a.jsx)("div", {
                className: o().wrap,
                children: (0, a.jsx)("h1", {
                  className: o().available,
                  children: (0, a.jsxs)("figure", {
                    children: [
                      (0, a.jsx)("div", { className: o().title, children: m }),
                      (0, a.jsx)("div", { className: o().stroke, children: m }),
                      (0, a.jsx)("div", {
                        className: o().trialBtn,
                        children: (0, a.jsx)(c(), {
                          href: "/demo",
                          children: (0, a.jsx)("span", {
                            children: i.t("[t]header__nav__global__demo"),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          })
        );
      };
      var m = s(56709),
        u = s.n(m),
        j = s(66833);
      let p = (e) => {
        let { setModalVisible: t } = e,
          { t: s, lang: n } = (0, r.A)("product"),
          i = (0, r.A)("common"),
          l = (0, _.useRef)(!1),
          [d, h] = (0, _.useState)("nsw2"),
          [x, m] = (0, _.useState)(4),
          p = (0, j.useRouter)(),
          g = !!p.query.p,
          b = p.query.y ? Number(p.query.y) : 0,
          N = () => {
            let e = window.location.hash.replace("#", "");
            ["nsw2", "ps5", "ps4", "xbox", "steam"].includes(e) && h(e);
          };
        (0, _.useEffect)(
          () => (
            N(),
            window.addEventListener("hashchange", N),
            () => {
              window.removeEventListener("hashchange", N);
            }
          ),
          []
        );
        let y = (e) => {
            h(e);
            let t = "#".concat(e),
              s = window.location.href.split("#")[0];
            window.history.replaceState(null, "", "".concat(s).concat(t));
          },
          v = (e) => {
            let t = e.currentTarget.previousElementSibling;
            t && t.classList.toggle(o().open);
          },
          k = (0, _.useRef)(null),
          f = (0, _.useRef)(null),
          w = (e) => {
            let t;
            e.preventDefault(),
              (t =
                "game" === e.currentTarget.dataset.content
                  ? k.current.getBoundingClientRect()
                  : f.current.getBoundingClientRect());
            let s = document.querySelector("header"),
              a = window.pageYOffset + t.top - s.clientHeight;
            window.scrollTo({ top: a, behavior: "smooth" });
          };
        return (
          (0, _.useEffect)(() => {
            if ((!1 === l.current && (l.current = !0), 0 !== b && m(b), g)) {
              let e = document.querySelector("header"),
                t = f.current.getBoundingClientRect().top;
              window.scrollTo({
                top: window.pageYOffset + t - e.clientHeight,
                behavior: "smooth",
              });
            }
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("article", {
              className: o().page__product__contents,
              children: [
                (0, a.jsxs)("div", {
                  className: o().page__product__contents__inner,
                  children: [
                    (0, a.jsxs)("div", {
                      className: o().platform__select,
                      children: [
                        (0, a.jsxs)("h2", {
                          className: o().ttl,
                          children: [
                            (0, a.jsx)("span", {
                              className: o().border__short,
                            }),
                            (0, a.jsx)("span", {
                              className: ""
                                .concat(o().border__long, " ")
                                .concat(o().space__top),
                            }),
                            (0, a.jsx)("p", {
                              className: o().txt,
                              children: s("[t]first_view_platform"),
                            }),
                            (0, a.jsx)("span", { className: o().border__long }),
                            (0, a.jsx)("span", {
                              className: ""
                                .concat(o().border__short, " ")
                                .concat(o().space__top),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: o().buy_attention,
                          children: s("[t]buy_text"),
                        }),
                        (0, a.jsx)("p", {
                          className: o().notes,
                          children: s("[t]first_view_platform_notes"),
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: o().change__box,
                      children: [
                        (0, a.jsxs)("ul", {
                          className: o().list,
                          children: [
                            (0, a.jsx)("li", {
                              className:
                                "nsw2" === d
                                  ? ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().nsw2, " ")
                                      .concat(o().active)
                                  : "".concat(o().tabnav, " ").concat(o().nsw2),
                              onClick: () => y("nsw2"),
                              children: (0, a.jsx)("div", {
                                className: o().img,
                                children: (0, a.jsx)(u(), {
                                  src: "/6/assets/images/product/icon_nsw2.png",
                                  width: "198",
                                  height: "43",
                                  alt: "Nintendo Switch 2",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className:
                                "ps5" === d
                                  ? ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().active)
                                  : o().tabnav,
                              onClick: () => y("ps5"),
                              children: (0, a.jsx)("div", {
                                className: o().img,
                                children: (0, a.jsx)(u(), {
                                  src: "/6/assets/images/product/icon_ps5.png",
                                  width: "198",
                                  height: "43",
                                  alt: "ps5",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className:
                                "ps4" === d
                                  ? ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().active)
                                  : o().tabnav,
                              onClick: () => y("ps4"),
                              children: (0, a.jsx)("div", {
                                className: o().img,
                                children: (0, a.jsx)(u(), {
                                  src: "/6/assets/images/product/icon_ps4.png",
                                  width: "204",
                                  height: "43",
                                  alt: "ps4",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className:
                                "xbox" === d
                                  ? ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().xbox, " ")
                                      .concat(o().active)
                                  : "".concat(o().tabnav, " ").concat(o().xbox),
                              onClick: () => y("xbox"),
                              children: (0, a.jsx)("div", {
                                className: o().img,
                                children: (0, a.jsx)(u(), {
                                  src: "/6/assets/images/product/icon_xsx.png",
                                  width: "258",
                                  height: "33",
                                  alt: "XBOX SERIES X|S",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className:
                                "steam" === d
                                  ? ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().steam, " ")
                                      .concat(o().active)
                                  : ""
                                      .concat(o().tabnav, " ")
                                      .concat(o().steam),
                              onClick: () => y("steam"),
                              children: (0, a.jsx)("div", {
                                className: o().img,
                                children: (0, a.jsx)(u(), {
                                  src: "/6/assets/images/product/icon_steam.png",
                                  width: "170",
                                  height: "52",
                                  alt: "steam",
                                  unoptimized: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("ul", {
                          className: o().scrollBtn,
                          children: [
                            (0, a.jsx)("li", {
                              "data-content": "game",
                              onClick: w,
                              children: (0, a.jsx)("p", {
                                children: s("[t]content_title1"),
                              }),
                            }),
                            (0, a.jsx)("li", {
                              "data-content": "dlc",
                              onClick: w,
                              children: (0, a.jsx)("p", {
                                children: s("[t]content_title2"),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("h2", {
                          className: o().ttl,
                          ref: k,
                          children: [
                            (0, a.jsx)("span", {
                              className: o().border__short,
                            }),
                            (0, a.jsx)("span", {
                              className: ""
                                .concat(o().border__long, " ")
                                .concat(o().space__top),
                            }),
                            (0, a.jsx)("p", {
                              className: o().txt,
                              children: s("[t]select_edition_ttl"),
                            }),
                            (0, a.jsx)("span", { className: o().border__long }),
                            (0, a.jsx)("span", {
                              className: ""
                                .concat(o().border__short, " ")
                                .concat(o().space__top),
                            }),
                          ],
                        }),
                        "nsw2" == d &&
                          (0, a.jsx)("div", {
                            className:
                              "nsw2" === d
                                ? ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().active, " ")
                                    .concat(o().anime)
                                : o().change__box__inner,
                            children: (0, a.jsx)("div", {
                              className: o().select__edition,
                              children: (0, a.jsx)("ul", {
                                className: o().edition__item,
                                children: (0, a.jsx)("li", {
                                  children: (0, a.jsxs)("ul", {
                                    className: o().edition__item__inner,
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: ""
                                          .concat(o().fighters, " ")
                                          .concat(o().nsw2),
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]nsw2_fighters_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]nsw2_fighters_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                dangerouslySetInnerHTML: {
                                                  __html: s(
                                                    "[t]nsw2_fighters_edition_ttl"
                                                  ),
                                                },
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().txtWrap,
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    className: o().txt,
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]nsw2_fighters_edition_txt"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("p", {
                                                    className: o().moreBtn,
                                                    onClick: v,
                                                    children: i.t("[t]more"),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]nsw2_fighters_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]nsw2_fighters_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["NSW2","Buy","FE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]nsw2_fighters_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              "ja-jp" === n
                                                ? (0, a.jsxs)("div", {
                                                    className: o().disc__ver,
                                                    children: [
                                                      (0, a.jsx)("div", {
                                                        className: o().subtitle,
                                                        children: (0, a.jsx)(
                                                          "p",
                                                          {
                                                            children: s(
                                                              "[t]nsw2_fighters_buy_disc_txt"
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          o().disc__ver__wrap,
                                                        children: (0, a.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              o().link__btn,
                                                            children: (0,
                                                            a.jsx)(c(), {
                                                              href: s(
                                                                "[t]nsw2_fighters_buy_disc1_store_url"
                                                              ),
                                                              "data-gtm-click":
                                                                '["NSW2","Buy","FE_PKG"]',
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: (0,
                                                              a.jsx)("div", {
                                                                children: s(
                                                                  "[t]nsw2_fighters_buy_disc1_store_alt"
                                                                ),
                                                              }),
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  })
                                                : "",
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]nsw2_fighters_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: o().standard,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]nsw2_standard_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]nsw2_standard_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                children: s(
                                                  "[t]nsw2_standard_edition_ttl"
                                                ),
                                              }),
                                              (0, a.jsx)("div", {
                                                className: o().txtWrap,
                                                children: (0, a.jsx)("p", {
                                                  className: o().txt,
                                                  dangerouslySetInnerHTML: {
                                                    __html: s(
                                                      "[t]nsw2_standard_edition_txt"
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]nsw2_standard_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: "".concat(
                                                      o().link__btn
                                                    ),
                                                    children: (0, a.jsx)(c(), {
                                                      dangerouslySetInnerHTML: {
                                                        __html: s(
                                                          "[t]nsw2_standard_buy_degital_store"
                                                        ),
                                                      },
                                                      href: s(
                                                        "[t]nsw2_standard_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["NSW2","Buy","SE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]nsw2_standard_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                        "ps5" == d &&
                          (0, a.jsx)("div", {
                            className:
                              "ps5" === d
                                ? ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().active, " ")
                                    .concat(o().anime)
                                : o().change__box__inner,
                            children: (0, a.jsx)("div", {
                              className: o().select__edition,
                              children: (0, a.jsx)("ul", {
                                className: o().edition__item,
                                children: (0, a.jsx)("li", {
                                  children: (0, a.jsxs)("ul", {
                                    className: o().edition__item__inner,
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: o().fighters,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]ps5_fighters_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]ps5_fighters_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                dangerouslySetInnerHTML: {
                                                  __html: s(
                                                    "[t]ps5_fighters_edition_ttl"
                                                  ),
                                                },
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().txtWrap,
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    className: o().txt,
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]ps5_fighters_edition_txt"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("p", {
                                                    className: o().moreBtn,
                                                    onClick: v,
                                                    children: i.t("[t]more"),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]ps5_fighters_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  "es-us" !== n
                                                    ? (0, a.jsx)("div", {
                                                        className: "".concat(
                                                          o().link__btn
                                                        ),
                                                        children: (0, a.jsx)(
                                                          c(),
                                                          {
                                                            href: s(
                                                              "[t]ps5_fighters_buy_degital_url"
                                                            ),
                                                            "data-gtm-click":
                                                              '["PS5","Buy","FE_DL"]',
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: s(
                                                              "[t]ps5_fighters_buy_degital_store"
                                                            ),
                                                          }
                                                        ),
                                                      })
                                                    : (0, a.jsx)("div", {
                                                        className: ""
                                                          .concat(
                                                            o().link__btn,
                                                            " "
                                                          )
                                                          .concat(o().disable),
                                                        children: (0, a.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              o().noneBtn,
                                                            children: s(
                                                              "[t]ps5_fighters_buy_degital_store"
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                ],
                                              }),
                                              "ja-jp" === n
                                                ? (0, a.jsxs)("div", {
                                                    className: o().disc__ver,
                                                    children: [
                                                      (0, a.jsx)("div", {
                                                        className: o().subtitle,
                                                        children: (0, a.jsx)(
                                                          "p",
                                                          {
                                                            children: s(
                                                              "[t]ps5_fighters_buy_disc_txt"
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          o().disc__ver__wrap,
                                                        children: (0, a.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "".concat(
                                                                o().link__btn
                                                              ),
                                                            children: (0,
                                                            a.jsx)(c(), {
                                                              href: s(
                                                                "[t]ps5_fighters_buy_disc1_store_url"
                                                              ),
                                                              "data-gtm-click":
                                                                '["PS5","Buy","FE_PKG"]',
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: (0,
                                                              a.jsx)("div", {
                                                                children: s(
                                                                  "[t]ps5_fighters_buy_disc1_store_alt"
                                                                ),
                                                              }),
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  })
                                                : "",
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]ps5_fighters_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: o().standard,
                                        children: [
                                          (0, a.jsx)("p", {
                                            className: o().otoku,
                                            children: s("[t]standard_otoku"),
                                          }),
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]ps5_standard_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]ps5_standard_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                children: s(
                                                  "[t]ps5_standard_edition_ttl"
                                                ),
                                              }),
                                              (0, a.jsx)("div", {
                                                className: o().txtWrap,
                                                children: (0, a.jsx)("p", {
                                                  className: o().txt,
                                                  dangerouslySetInnerHTML: {
                                                    __html: s(
                                                      "[t]ps5_standard_edition_txt"
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]ps5_standard_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["PS5", "Buy", "SE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]ps5_standard_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["PS5", "Buy", "SE_DL"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]ps5_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              "ja-jp" === n &&
                                                (0, a.jsxs)("div", {
                                                  className: ""
                                                    .concat(o().disc__ver, " ")
                                                    .concat(o().shop),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: o().subtitle,
                                                      children: (0, a.jsx)(
                                                        "p",
                                                        {
                                                          children: s(
                                                            "[t]ps5_standard_buy_disc_txt"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        o().disc__ver__wrap,
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc1_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc1_store_alt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc2_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc2_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc3_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc3_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              "en-us" === n &&
                                                (0, a.jsxs)("div", {
                                                  className: ""
                                                    .concat(o().disc__ver, " ")
                                                    .concat(o().shop),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: o().subtitle,
                                                      children: (0, a.jsx)(
                                                        "p",
                                                        {
                                                          children: s(
                                                            "[t]ps5_standard_buy_disc_txt"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        o().disc__ver__wrap,
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc1_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc1_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc2_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc2_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc4_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc4_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps5_standard_buy_disc5_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps5_standard_buy_disc5_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]ps5_standard_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                        "ps4" === d &&
                          (0, a.jsx)("div", {
                            className:
                              "ps4" === d
                                ? ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().active, " ")
                                    .concat(o().anime)
                                : o().change__box__inner,
                            children: (0, a.jsx)("div", {
                              className: o().select__edition,
                              children: (0, a.jsx)("ul", {
                                className: o().edition__item,
                                children: (0, a.jsx)("li", {
                                  children: (0, a.jsxs)("ul", {
                                    className: o().edition__item__inner,
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: o().fighters,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]ps4_fighters_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]ps4_fighters_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                dangerouslySetInnerHTML: {
                                                  __html: s(
                                                    "[t]ps4_fighters_edition_ttl"
                                                  ),
                                                },
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().txtWrap,
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    className: o().txt,
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]ps4_fighters_edition_txt"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("p", {
                                                    className: o().moreBtn,
                                                    onClick: v,
                                                    children: i.t("[t]more"),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]ps4_fighters_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  "es-us" !== n
                                                    ? (0, a.jsx)("div", {
                                                        className: "".concat(
                                                          o().link__btn
                                                        ),
                                                        children: (0, a.jsx)(
                                                          c(),
                                                          {
                                                            href: s(
                                                              "[t]ps4_fighters_buy_degital_url"
                                                            ),
                                                            "data-gtm-click":
                                                              '["PS4","Buy","FE_DL"]',
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: s(
                                                              "[t]ps4_fighters_buy_degital_store"
                                                            ),
                                                          }
                                                        ),
                                                      })
                                                    : (0, a.jsx)("div", {
                                                        className: ""
                                                          .concat(
                                                            o().link__btn,
                                                            " "
                                                          )
                                                          .concat(o().disable),
                                                        children: (0, a.jsx)(
                                                          "p",
                                                          {
                                                            className:
                                                              o().noneBtn,
                                                            children: s(
                                                              "[t]ps4_fighters_buy_degital_store"
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                ],
                                              }),
                                              "ja-jp" === n
                                                ? (0, a.jsxs)("div", {
                                                    className: o().disc__ver,
                                                    children: [
                                                      (0, a.jsx)("div", {
                                                        className: o().subtitle,
                                                        children: (0, a.jsx)(
                                                          "p",
                                                          {
                                                            children: s(
                                                              "[t]ps4_fighters_buy_disc_txt"
                                                            ),
                                                          }
                                                        ),
                                                      }),
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          o().disc__ver__wrap,
                                                        children: (0, a.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "".concat(
                                                                o().link__btn
                                                              ),
                                                            children: (0,
                                                            a.jsx)(c(), {
                                                              href: s(
                                                                "[t]ps4_fighters_buy_disc1_store_url"
                                                              ),
                                                              "data-gtm-click":
                                                                '["PS4","Buy","FE_PKG"]',
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: (0,
                                                              a.jsx)("div", {
                                                                children: s(
                                                                  "[t]ps4_fighters_buy_disc1_store_alt"
                                                                ),
                                                              }),
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  })
                                                : "",
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]ps4_fighters_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: o().standard,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().otoku,
                                            children: s("[t]standard_otoku"),
                                          }),
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]ps4_standard_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]ps4_standard_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                children: s(
                                                  "[t]ps4_standard_edition_ttl"
                                                ),
                                              }),
                                              (0, a.jsx)("div", {
                                                className: o().txtWrap,
                                                children: (0, a.jsx)("p", {
                                                  className: o().txt,
                                                  dangerouslySetInnerHTML: {
                                                    __html: s(
                                                      "[t]ps4_standard_edition_txt"
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]ps4_standard_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]ps4_standard_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["PS4", "Buy", "SE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps4_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]ps4_standard_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["PS4", "Buy", "SE_DL"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]ps4_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              "ja-jp" == n &&
                                                (0, a.jsxs)("div", {
                                                  className: ""
                                                    .concat(o().disc__ver, " ")
                                                    .concat(o().shop),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: o().subtitle,
                                                      children: (0, a.jsx)(
                                                        "p",
                                                        {
                                                          children: s(
                                                            "[t]ps4_standard_buy_disc_txt"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        o().disc__ver__wrap,
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc1_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc1_store_alt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc2_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc2_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc3_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc3_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              "en-us" == n &&
                                                (0, a.jsxs)("div", {
                                                  className: ""
                                                    .concat(o().disc__ver, " ")
                                                    .concat(o().shop),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: o().subtitle,
                                                      children: (0, a.jsx)(
                                                        "p",
                                                        {
                                                          children: s(
                                                            "[t]ps4_standard_buy_disc_txt"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        o().disc__ver__wrap,
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc1_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc1_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc2_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc2_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc4_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc4_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]ps4_standard_buy_disc5_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]ps4_standard_buy_disc5_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]ps4_standard_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                        "xbox" === d &&
                          (0, a.jsx)("div", {
                            className:
                              "xbox" === d
                                ? ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().xbox, " ")
                                    .concat(o().active, " ")
                                    .concat(o().anime)
                                : ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().xbox),
                            children: (0, a.jsx)("div", {
                              className: o().select__edition,
                              children: (0, a.jsx)("ul", {
                                className: o().edition__item,
                                children: (0, a.jsx)("li", {
                                  children: (0, a.jsxs)("ul", {
                                    className: o().edition__item__inner,
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: o().fighters,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]xbox_fighters_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]xbox_fighters_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                dangerouslySetInnerHTML: {
                                                  __html: s(
                                                    "[t]xbox_fighters_edition_ttl"
                                                  ),
                                                },
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().txtWrap,
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    className: o().txt,
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]xbox_fighters_edition_txt"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("p", {
                                                    className: o().moreBtn,
                                                    onClick: v,
                                                    children: i.t("[t]more"),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]xbox_fighters_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: "".concat(
                                                      o().link__btn
                                                    ),
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]xbox_fighters_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["XBS","Buy","FE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_fighters_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]xbox_fighters_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: o().standard,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().otoku,
                                            children: s("[t]standard_otoku"),
                                          }),
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]xbox_standard_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]xbox_standard_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                children: s(
                                                  "[t]xbox_standard_edition_ttl"
                                                ),
                                              }),
                                              (0, a.jsx)("div", {
                                                className: o().txtWrap,
                                                children: (0, a.jsx)("p", {
                                                  className: o().txt,
                                                  dangerouslySetInnerHTML: {
                                                    __html: s(
                                                      "[t]xbox_standard_edition_txt"
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]xbox_standard_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["XBS", "Buy", "SE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]xbox_standard_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["XBS", "Buy", "SE_DL"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]xbox_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              "en-us" == n &&
                                                (0, a.jsxs)("div", {
                                                  className: ""
                                                    .concat(o().disc__ver, " ")
                                                    .concat(o().shop),
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: o().subtitle,
                                                      children: (0, a.jsx)(
                                                        "p",
                                                        {
                                                          children: s(
                                                            "[t]ps4_standard_buy_disc_txt"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                      className:
                                                        o().disc__ver__wrap,
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]xbox_standard_buy_disc1_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]xbox_standard_buy_disc1_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]xbox_standard_buy_disc2_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]xbox_standard_buy_disc2_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]xbox_standard_buy_disc4_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]xbox_standard_buy_disc4_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]xbox_standard_buy_disc5_store_url"
                                                              ),
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]xbox_standard_buy_disc5_store_txt"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]xbox_standard_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                        "steam" === d &&
                          (0, a.jsx)("div", {
                            className:
                              "steam" === d
                                ? ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().steam, " ")
                                    .concat(o().active, " ")
                                    .concat(o().anime)
                                : ""
                                    .concat(o().change__box__inner, " ")
                                    .concat(o().steam),
                            children: (0, a.jsx)("div", {
                              className: o().select__edition,
                              children: (0, a.jsx)("ul", {
                                className: o().edition__item,
                                children: (0, a.jsx)("li", {
                                  children: (0, a.jsxs)("ul", {
                                    className: o().edition__item__inner,
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className: o().fighters,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]steam_fighters_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]steam_fighters_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                dangerouslySetInnerHTML: {
                                                  __html: s(
                                                    "[t]steam_fighters_edition_ttl"
                                                  ),
                                                },
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().txtWrap,
                                                children: [
                                                  (0, a.jsx)("p", {
                                                    className: o().txt,
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]steam_fighters_edition_txt"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("p", {
                                                    className: o().moreBtn,
                                                    onClick: v,
                                                    children: i.t("[t]more"),
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]steam_fighters_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: "".concat(
                                                      o().link__btn
                                                    ),
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]steam_fighters_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["Steam","Buy","FE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_fighters_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  ("ja-jp" === n ||
                                                    "en-us" === n) &&
                                                    (0, a.jsx)("div", {
                                                      className: "".concat(
                                                        o().link__btn
                                                      ),
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]steam_fighters_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["Steam","Buy","FE_DL_CTS"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_fighters_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]steam_fighters_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: o().standard,
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: o().otoku,
                                            children: s("[t]standard_otoku"),
                                          }),
                                          (0, a.jsx)("div", {
                                            className: o().edition__item__wrap,
                                            children: (0, a.jsx)("ul", {
                                              className: o().img__wrap,
                                              children: (0, a.jsx)("li", {
                                                children: (0, a.jsx)("div", {
                                                  className: o().img,
                                                  children: (0, a.jsx)(u(), {
                                                    src: "/6/assets/images/product/".concat(
                                                      s(
                                                        "[t]steam_standard_edition_img"
                                                      ),
                                                      ".jpg"
                                                    ),
                                                    width: "418",
                                                    height: "524",
                                                    alt: s(
                                                      "[t]steam_standard_edition_ttl"
                                                    ),
                                                    unoptimized: !0,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: o().buy__btn,
                                            children: [
                                              (0, a.jsx)("h3", {
                                                children: s(
                                                  "[t]steam_standard_edition_ttl"
                                                ),
                                              }),
                                              (0, a.jsx)("div", {
                                                className: o().txtWrap,
                                                children: (0, a.jsx)("p", {
                                                  className: o().txt,
                                                  dangerouslySetInnerHTML: {
                                                    __html: s(
                                                      "[t]steam_standard_edition_txt"
                                                    ),
                                                  },
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().digital__ver,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: o().subtitle,
                                                    children: (0, a.jsx)("p", {
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_txt"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]steam_standard_buy_degital_url"
                                                      ),
                                                      "data-gtm-click":
                                                        '["Steam", "Buy", "SE_DL"]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "ja-jp" === n &&
                                                    (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]steam_standard_buy_degital_url2"
                                                              ),
                                                              "data-gtm-click":
                                                                '["Steam", "Buy", "SE_DL"]',
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]steam_standard_buy_degital_store2"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            o().link__btn,
                                                          children: (0, a.jsx)(
                                                            c(),
                                                            {
                                                              href: s(
                                                                "[t]steam_standard_buy_degital_url3"
                                                              ),
                                                              "data-gtm-click":
                                                                '["Steam", "Buy", "SE_DL_CTS"]',
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                              children: s(
                                                                "[t]steam_standard_buy_degital_store3"
                                                              ),
                                                            }
                                                          ),
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                          className: ""
                                                            .concat(
                                                              o().link__btn,
                                                              " "
                                                            )
                                                            .concat(
                                                              o()
                                                                .link__btn__seven
                                                            ),
                                                          children: [
                                                            (0, a.jsx)("p", {
                                                              className:
                                                                o()
                                                                  .link__btn__notes,
                                                              dangerouslySetInnerHTML:
                                                                {
                                                                  __html: s(
                                                                    "[t]steam_standard_buy_degital_notes_seven"
                                                                  ),
                                                                },
                                                            }),
                                                            (0, a.jsx)("div", {
                                                              className: ""
                                                                .concat(
                                                                  o().link__btn,
                                                                  " "
                                                                )
                                                                .concat(
                                                                  o()
                                                                    .link__btn__seven
                                                                ),
                                                              children: (0,
                                                              a.jsx)(c(), {
                                                                href: "https://www.capcom-games.com/ja-jp/20230531/sf6_steam/",
                                                                target:
                                                                  "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: s(
                                                                  "[t]steam_standard_buy_degital_store_notice_seven"
                                                                ),
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  "en-us" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]steam_standard_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["Steam", "Buy", "SE_DL_CTS"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]steam_standard_buy_degital_url2"
                                                          ),
                                                          "data-gtm-click":
                                                            '["Steam", "Buy", "SE_DL"]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("p", {
                                            className: o().edition__item__note,
                                            children: s(
                                              "[t]steam_standard_edition_note"
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          }),
                        (0, a.jsxs)("section", {
                          id: "download_contents",
                          className: o().download_contents,
                          ref: f,
                          children: [
                            (0, a.jsxs)("h2", {
                              className: o().ttl,
                              children: [
                                (0, a.jsx)("span", {
                                  className: o().border__short,
                                }),
                                (0, a.jsx)("span", {
                                  className: ""
                                    .concat(o().border__long, " ")
                                    .concat(o().space__top),
                                }),
                                (0, a.jsx)("p", {
                                  className: o().txt,
                                  children: s("[t]year1_ttl"),
                                }),
                                (0, a.jsx)("span", {
                                  className: o().border__long,
                                }),
                                (0, a.jsx)("span", {
                                  className: ""
                                    .concat(o().border__short, " ")
                                    .concat(o().space__top),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("ul", {
                              className: o().year_select,
                              children: [
                                (0, a.jsx)("li", {
                                  className: 4 === x ? o().active : "",
                                  onClick: (e) => {
                                    m(4);
                                  },
                                  children: s("[t]year<YYYY>").replace(
                                    "<YYYY>",
                                    "4"
                                  ),
                                }),
                                (0, a.jsx)("li", {
                                  className: 3 === x ? o().active : "",
                                  onClick: (e) => {
                                    m(3);
                                  },
                                  children: s("[t]year<YYYY>").replace(
                                    "<YYYY>",
                                    "3"
                                  ),
                                }),
                                (0, a.jsx)("li", {
                                  className: 2 === x ? o().active : "",
                                  onClick: (e) => {
                                    m(2);
                                  },
                                  children: s("[t]year<YYYY>").replace(
                                    "<YYYY>",
                                    "2"
                                  ),
                                }),
                                (0, a.jsx)("li", {
                                  className: 1 === x ? o().active : "",
                                  onClick: (e) => {
                                    m(1);
                                  },
                                  children: s("[t]year<YYYY>").replace(
                                    "<YYYY>",
                                    "1"
                                  ),
                                }),
                              ],
                            }),
                            4 === x
                              ? (0, a.jsx)("div", {
                                  className: ""
                                    .concat(o().year__character, " ")
                                    .concat(o().year4),
                                  children: (0, a.jsxs)("div", {
                                    className: o().wrap,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: o().imageArea,
                                        children: (0, a.jsxs)("dl", {
                                          className: o().schedule,
                                          children: [
                                            (0, a.jsxs)("dt", {
                                              children: [
                                                s(
                                                  "[t]DLC_schedule_title_year4"
                                                ),
                                                "ja-jp" === n &&
                                                  (0, a.jsx)("span", {
                                                    children:
                                                      "リリーススケジュール",
                                                  }),
                                              ],
                                            }),
                                            (0, a.jsx)("dd", {
                                              children: (0, a.jsxs)("ul", {
                                                children: [
                                                  (0, a.jsx)("li", {
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]DLC_schedule_character1_year4"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]DLC_schedule_character2_year4"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]DLC_schedule_character3_year4"
                                                      ),
                                                    },
                                                  }),
                                                  (0, a.jsx)("li", {
                                                    dangerouslySetInnerHTML: {
                                                      __html: s(
                                                        "[t]DLC_schedule_character4_year4"
                                                      ),
                                                    },
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsxs)("ul", {
                                        className: o().itemArea,
                                        children: [
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().character),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_character_title_year4"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_character_txt_year4"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)(a.Fragment, {
                                                      children:
                                                        "" !==
                                                        s(
                                                          "[t]DLC_character_url_nsw2_year4"
                                                        )
                                                          ? (0, a.jsx)("div", {
                                                              className:
                                                                o().link__btn,
                                                              children: (0,
                                                              a.jsx)(c(), {
                                                                href: s(
                                                                  "[t]DLC_character_url_nsw2_year4"
                                                                ),
                                                                "data-gtm-click":
                                                                  '[ "NSW2", "Buy", "Y4_CP" ]',
                                                                target:
                                                                  "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            })
                                                          : (0, a.jsx)("div", {
                                                              className: ""
                                                                .concat(
                                                                  o().link__btn,
                                                                  " "
                                                                )
                                                                .concat(
                                                                  o().disable
                                                                ),
                                                              children: (0,
                                                              a.jsx)("p", {
                                                                className:
                                                                  o().noneBtn,
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            }),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_ps_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y4_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_xbox_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y4_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_steam_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y4_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().ultimate),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_ultimate_title_year4"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_ultimate_txt_year4"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)(a.Fragment, {
                                                      children:
                                                        "" !==
                                                        s(
                                                          "[t]DLC_ultimate_url_nsw2_year4"
                                                        )
                                                          ? (0, a.jsx)("div", {
                                                              className:
                                                                o().link__btn,
                                                              children: (0,
                                                              a.jsx)(c(), {
                                                                href: s(
                                                                  "[t]DLC_ultimate_url_nsw2_year4"
                                                                ),
                                                                "data-gtm-click":
                                                                  '[ "NSW2", "Buy", "Y4_UP" ]',
                                                                target:
                                                                  "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            })
                                                          : (0, a.jsx)("div", {
                                                              className: ""
                                                                .concat(
                                                                  o().link__btn,
                                                                  " "
                                                                )
                                                                .concat(
                                                                  o().disable
                                                                ),
                                                              children: (0,
                                                              a.jsx)("p", {
                                                                className:
                                                                  o().noneBtn,
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            }),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_ps_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y4_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_xbox_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y4_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_steam_year4"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y4_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
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
                                })
                              : null,
                            3 === x
                              ? (0, a.jsx)("div", {
                                  className: ""
                                    .concat(o().year__character, " ")
                                    .concat(o().year3),
                                  children: (0, a.jsxs)("div", {
                                    className: o().wrap,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: o().imageArea,
                                      }),
                                      (0, a.jsxs)("ul", {
                                        className: o().itemArea,
                                        children: [
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().character),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_character_title_year3"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_character_txt_year3"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)(a.Fragment, {
                                                      children:
                                                        "" !==
                                                        s(
                                                          "[t]DLC_character_url_nsw2_year3"
                                                        )
                                                          ? (0, a.jsx)("div", {
                                                              className:
                                                                o().link__btn,
                                                              children: (0,
                                                              a.jsx)(c(), {
                                                                href: s(
                                                                  "[t]DLC_character_url_nsw2_year3"
                                                                ),
                                                                "data-gtm-click":
                                                                  '[ "NSW2", "Buy", "Y3_CP" ]',
                                                                target:
                                                                  "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            })
                                                          : (0, a.jsx)("div", {
                                                              className: ""
                                                                .concat(
                                                                  o().link__btn,
                                                                  " "
                                                                )
                                                                .concat(
                                                                  o().disable
                                                                ),
                                                              children: (0,
                                                              a.jsx)("p", {
                                                                className:
                                                                  o().noneBtn,
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            }),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_ps_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y3_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_xbox_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y3_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_steam_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y3_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().ultimate),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_ultimate_title_year3"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_ultimate_txt_year3"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)(a.Fragment, {
                                                      children:
                                                        "" !==
                                                        s(
                                                          "[t]DLC_ultimate_url_nsw2_year3"
                                                        )
                                                          ? (0, a.jsx)("div", {
                                                              className:
                                                                o().link__btn,
                                                              children: (0,
                                                              a.jsx)(c(), {
                                                                href: s(
                                                                  "[t]DLC_ultimate_url_nsw2_year3"
                                                                ),
                                                                "data-gtm-click":
                                                                  '[ "NSW2", "Buy", "Y3_UP" ]',
                                                                target:
                                                                  "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            })
                                                          : (0, a.jsx)("div", {
                                                              className: ""
                                                                .concat(
                                                                  o().link__btn,
                                                                  " "
                                                                )
                                                                .concat(
                                                                  o().disable
                                                                ),
                                                              children: (0,
                                                              a.jsx)("p", {
                                                                className:
                                                                  o().noneBtn,
                                                                children: s(
                                                                  "[t]nsw2_standard_buy_degital_store"
                                                                ),
                                                              }),
                                                            }),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_ps_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y3_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_xbox_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y3_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_steam_year3"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y3_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
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
                                })
                              : null,
                            2 === x
                              ? (0, a.jsx)("div", {
                                  className: ""
                                    .concat(o().year__character, " ")
                                    .concat(o().year2),
                                  children: (0, a.jsxs)("div", {
                                    className: o().wrap,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: o().imageArea,
                                      }),
                                      (0, a.jsxs)("ul", {
                                        className: o().itemArea,
                                        children: [
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().character),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_character_title_year2"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_character_txt_year2"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_nsw2_year2"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "NSW2", "Buy", "Y2_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]nsw2_standard_buy_degital_store"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_ps_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y2_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_xbox_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y2_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_steam_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y2_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "ja-jp" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_ecap_year2"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "ecap", "Buy", "Y2_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().ultimate),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_ultimate_title_year2"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_ultimate_txt_year2"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_nsw2_year2"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "NSW2", "Buy", "Y2_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]nsw2_standard_buy_degital_store"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_ps_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y2_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_xbox_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y2_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_steam_year2"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y2_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "ja-jp" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_ecap_year2"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "ecap", "Buy", "Y2_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
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
                                })
                              : null,
                            1 === x
                              ? (0, a.jsx)("div", {
                                  className: ""
                                    .concat(o().year__character, " ")
                                    .concat(o().year1),
                                  children: (0, a.jsxs)("div", {
                                    className: o().wrap,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: o().imageArea,
                                        children: (0, a.jsx)("div", {
                                          className: o().link__btn,
                                          children: (0, a.jsx)(c(), {
                                            href: s("[t]year1_video"),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: s("[t]year1_video_name"),
                                          }),
                                        }),
                                      }),
                                      (0, a.jsxs)("ul", {
                                        className: o().itemArea,
                                        children: [
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().character),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_character_title_year1"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_character_txt_year1"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_nsw2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "NSW2", "Buy", "Y1_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]nsw2_standard_buy_degital_store"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_ps_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y1_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_ps2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "PS", "Buy", "Y1_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]ps5_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_xbox_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y1_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_xbox2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "XBS", "Buy", "Y1_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]xbox_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_character_url_steam_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y1_CP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_character_url_steam2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "Steam", "Buy", "Y1_CP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("li", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className: o().detailArea,
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className: ""
                                                      .concat(o().image, " ")
                                                      .concat(o().ultimate),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: o().text,
                                                    children: [
                                                      (0, a.jsx)("h3", {
                                                        children: s(
                                                          "[t]DLC_ultimate_title_year1"
                                                        ),
                                                      }),
                                                      (0, a.jsx)("p", {
                                                        dangerouslySetInnerHTML:
                                                          {
                                                            __html: s(
                                                              "[t]DLC_ultimate_txt_year1"
                                                            ),
                                                          },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                className: o().linkBtnArea,
                                                children: [
                                                  "ko-kr" !== n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_nsw2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "NSW2", "Buy", "Y1_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]nsw2_standard_buy_degital_store"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_ps_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "PS", "Buy", "Y1_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]ps5_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_ps2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "PS", "Buy", "Y1_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]ps5_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_xbox_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "XBS", "Buy", "Y1_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]xbox_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_xbox2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "XBS", "Buy", "Y1_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]xbox_standard_buy_degital_store2"
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("div", {
                                                    className: o().link__btn,
                                                    children: (0, a.jsx)(c(), {
                                                      href: s(
                                                        "[t]DLC_ultimate_url_steam_year1"
                                                      ),
                                                      "data-gtm-click":
                                                        '[ "Steam", "Buy", "Y1_UP" ]',
                                                      target: "_blank",
                                                      rel: "noopener noreferrer",
                                                      children: s(
                                                        "[t]steam_standard_buy_degital_store"
                                                      ),
                                                    }),
                                                  }),
                                                  "en-asia" === n &&
                                                    (0, a.jsx)("div", {
                                                      className: o().link__btn,
                                                      children: (0, a.jsx)(
                                                        c(),
                                                        {
                                                          href: s(
                                                            "[t]DLC_ultimate_url_steam2_year1"
                                                          ),
                                                          "data-gtm-click":
                                                            '[ "Steam", "Buy", "Y1_UP" ]',
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: s(
                                                            "[t]steam_standard_buy_degital_store2"
                                                          ),
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
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className: o().note,
                      dangerouslySetInnerHTML: {
                        __html: ""
                          .concat(
                            s(
                              "nsw2" === d
                                ? "[t]select_edition_note_nsw2"
                                : "[t]select_edition_note"
                            )
                          )
                          .concat(
                            "ja-jp" !== n && "en-us" !== n
                              ? "<br>".concat(s("[t]select_edition_note2"))
                              : ""
                          ),
                      },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: o().notes__area,
                  children: [
                    (0, a.jsxs)("dl", {
                      children: [
                        (0, a.jsx)("dt", {
                          dangerouslySetInnerHTML: {
                            __html: s("[t]notes_ttl"),
                          },
                        }),
                        (0, a.jsx)("dd", {
                          dangerouslySetInnerHTML: {
                            __html: s("[t]notes_list_txt"),
                          },
                        }),
                      ],
                    }),
                    (0, a.jsxs)("dl", {
                      children: [
                        (0, a.jsx)("dt", {
                          dangerouslySetInnerHTML: {
                            __html: s("[t]onlineplay_ttl"),
                          },
                        }),
                        (0, a.jsx)("dd", {
                          dangerouslySetInnerHTML: {
                            __html: s("[t]onlineplay_list_txt"),
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var g = s(49715);
      let b = (e) => {
        let { isVisible: t, setModalVisible: s } = e,
          { t: _, lang: n } = (0, r.A)("index");
        if (!t) return null;
        let i = document.querySelector("html");
        i.classList.add("no_scroll");
        let l = document.getElementById("wrapper"),
          c = () => {
            s(!1), i.classList.remove("no_scroll");
          };
        return (0, g.createPortal)(
          (0, a.jsxs)("article", {
            className: "".concat(o().image__modal, " modal"),
            children: [
              (0, a.jsx)("div", { className: o().modal__bg, onClick: c }),
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)("div", {
                    children: (0, a.jsx)(u(), {
                      src: "/6/assets/images/product/modal_bonus-color.jpg",
                      width: "1920",
                      height: "1080",
                      alt: "",
                      loading: "lazy",
                      unoptimized: !0,
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "close",
                    onClick: c,
                    children: (0, a.jsx)(u(), {
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
          l
        );
      };
      var N = !0;
      let y = () => {
        let { t: e, lang: t } = (0, r.A)("product"),
          [s, l] = (0, _.useState)(!1);
        return (0, a.jsxs)(i.A, {
          children: [
            (0, a.jsx)(n.A, {
              pageTitle: e("[t]title"),
              pageDescription: e("[t]description"),
            }),
            (0, a.jsxs)("div", {
              className: "contents page__product",
              children: [
                (0, a.jsx)(x, { setModalVisible: l }),
                (0, a.jsx)(p, { setModalVisible: l }),
                (0, a.jsx)(b, { isVisible: s, setModalVisible: l }),
              ],
            }),
          ],
        });
      };
    },
    15525: (e) => {
      e.exports = {
        ttl: "product_ttl__60Fs8",
        txt: "product_txt__ydSSD",
        border__short: "product_border__short__zDCbC",
        border__long: "product_border__long__YAGHN",
        space__top: "product_space__top__uKqKm",
        link__btn: "product_link__btn__zgFto",
        noneBtn: "product_noneBtn__9gaSJ",
        disable: "product_disable__9u_O0",
        xbox: "product_xbox__sbLy_",
        steam: "product_steam__xEH5Z",
        link__btn__seven: "product_link__btn__seven___vNab",
        link__btn__notes: "product_link__btn__notes__LGJS_",
        page__product__headding: "product_page__product__headding__zoenW",
        wrap: "product_wrap__SK85X",
        title: "product_title__4P4xv",
        stroke: "product_stroke__DdboR",
        trialBtn: "product_trialBtn__K8GZl",
        page__product__contents: "product_page__product__contents__NDg5Z",
        page__product__contents__inner:
          "product_page__product__contents__inner___11tg",
        bnr_year2: "product_bnr_year2__lvzBu",
        platform__select: "product_platform__select__3uV6A",
        buy_attention: "product_buy_attention__QiaFP",
        notes: "product_notes__peI4W",
        change__box: "product_change__box__19ZsE",
        list: "product_list__KYTFt",
        tabnav: "product_tabnav__wvFG3",
        active: "product_active__v4CcF",
        img: "product_img__da88K",
        nsw2: "product_nsw2__oWk_d",
        scrollBtn: "product_scrollBtn__V7pW8",
        blink: "product_blink__S9__M",
        change__box__inner: "product_change__box__inner__hd4di",
        anime: "product_anime__3Lm9A",
        "fade-in": "product_fade-in__EIgne",
        banner: "product_banner__2BhO6",
        ppl: "product_ppl__B8AmR",
        small: "product_small__GPI8_",
        blu: "product_blu__R8_md",
        big: "product_big__qDxo8",
        left: "product_left__YLmZe",
        right: "product_right__kKuBh",
        select__edition: "product_select__edition__GY5St",
        "border-shor": "product_border-shor__ioroH",
        edition__item: "product_edition__item__ag_Xy",
        edition__item__inner: "product_edition__item__inner__kxRC1",
        txtWrap: "product_txtWrap__uuhOy",
        edition__item__wrap: "product_edition__item__wrap__ReWO3",
        buy__btn: "product_buy__btn__ScQNZ",
        digital__ver: "product_digital__ver__u32dL",
        disc__ver: "product_disc__ver__B1MTB",
        shop: "product_shop___4a5s",
        disc__ver__wrap: "product_disc__ver__wrap__NS3cH",
        edition__item__note: "product_edition__item__note__iyXAH",
        subtitle: "product_subtitle__3LSYN",
        fighters: "product_fighters__bdXvM",
        open: "product_open__1_dGZ",
        moreBtn: "product_moreBtn__iXE2G",
        standard: "product_standard__6anzs",
        otoku: "product_otoku__VBc2C",
        side__logo: "product_side__logo__HwJyQ",
        inner: "product_inner__ikVJg",
        download_contents: "product_download_contents__6gbyK",
        year_select: "product_year_select__XNR_g",
        year__character: "product_year__character__UQ1P4",
        year4: "product_year4__w1kC5",
        imageArea: "product_imageArea__yAc7g",
        schedule: "product_schedule__jfO0M",
        itemArea: "product_itemArea__KPj7Y",
        detailArea: "product_detailArea__Y0QsV",
        image: "product_image__uUbXp",
        character: "product_character__4gM3n",
        ultimate: "product_ultimate__45EOp",
        year3: "product_year3__aIXPt",
        year2: "product_year2__quX7E",
        year1: "product_year1__qdvE5",
        text: "product_text__0qhjD",
        linkBtnArea: "product_linkBtnArea__P1FyW",
        note: "product_note__0BAK_",
        notes__area: "product_notes__area__rqB8O",
      };
    },
    90549: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/product",
        function () {
          return s(3157);
        },
      ]);
    },
  },
  (e) => {
    e.O(0, [88649, 86130, 90636, 46593, 38792], () => e((e.s = 90549))),
      (_N_E = e.O());
  },
]);
