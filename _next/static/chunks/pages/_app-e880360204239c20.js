(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [90636],
  {
    92: (a, e, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(65216);
        },
      ]);
    },
    12350: (a, e, r) => {
      "use strict";
      r.d(e, { A: () => i });
      var t = r(66162),
        c = r(66833),
        s = r(55874),
        n = r.n(s),
        o = r(44922);
      let i = (a) => {
        let {
            pageTitle: e,
            pageDescription: r,
            pageKeywords: s,
            pageOgUrl: i,
            pageOgImg: h,
            pageOgType: m,
          } = a,
          u = (0, c.useRouter)(),
          l = u.asPath;
        "/" === (l = l.split("?")[0].split("#")[0]) && (l = "");
        let j = u.locale,
          f = "https://www.streetfighter.com/6/".concat(j).concat(l),
          d = e ? "".concat(e) : "STREET FIGHTER 6 | CAPCOM",
          k =
            r ||
            "Info on the latest iteration of the Street Fighter series! #StreetFighter6",
          p = [
            { og: "ja_JP", lang: "ja-jp", region: "ja-jp" },
            { og: "en_US", lang: "en-us", region: "en-us" },
            { og: "en_UK", lang: "en-uk", region: "en-gb" },
            { og: "en_ASIA", lang: "en-asia", region: "en-sg" },
            { og: "fr_FR", lang: "fr", region: "fr" },
            { og: "it_IT", lang: "it", region: "it" },
            { og: "de_DE", lang: "de", region: "de" },
            { og: "es_ES", lang: "es-es", region: "es-es" },
            { og: "es_US", lang: "es-us", region: "es-us" },
            { og: "pt_BR", lang: "pt-br", region: "pt-br" },
            { og: "zh_TW", lang: "zh-hant", region: "zh-Hant" },
            { og: "zh_CN", lang: "zh-hans", region: "zh-Hans" },
            { og: "ko_KR", lang: "ko-kr", region: "ko-kr" },
          ];
        return (0, t.jsxs)(n(), {
          children: [
            (0, t.jsx)("meta", { charSet: "utf-8" }),
            (0, t.jsx)("meta", {
              httpEquiv: "X-UA-Compatible",
              content: "IE=Edge",
            }),
            (0, t.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            }),
            (0, t.jsx)("meta", {
              name: "format-detection",
              content: "telephone=no",
            }),
            (0, t.jsx)("title", { children: d }),
            (0, t.jsx)("meta", { name: "description", content: k }),
            (0, t.jsx)("meta", {
              name: "keywords",
              content: s || "Street Fighter,CAPCOM",
            }),
            (0, t.jsx)("meta", {
              property: "og:site_name",
              content: "STREET FIGHTER 6",
            }),
            (0, t.jsx)("meta", { property: "og:title", content: d }),
            (0, t.jsx)("meta", { property: "og:description", content: k }),
            (0, t.jsx)("meta", {
              property: "og:image",
              content:
                h || "https://www.streetfighter.com/6/assets/images/sns_6.jpg",
            }),
            (0, t.jsx)("meta", { property: "og:url", content: i || f }),
            (0, t.jsx)("meta", {
              property: "og:type",
              content: m || "article",
            }),
            p.map((a, e) =>
              (0, t.jsx)(
                o.Fragment,
                {
                  children: (0, t.jsx)("meta", {
                    property: "og:locale:alternate",
                    content: a.og,
                  }),
                },
                "alternate".concat(e)
              )
            ),
            (0, t.jsx)("link", {
              rel: "canonical",
              href: "https://www.streetfighter.com/6/ja-jp".concat(l),
            }),
            l.includes("detail")
              ? ""
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    p.map((a, e) =>
                      (0, t.jsx)(
                        "link",
                        {
                          rel: "alternate",
                          hrefLang: a.region,
                          href: "https://www.streetfighter.com/6/"
                            .concat(a.lang)
                            .concat(l),
                        },
                        e
                      )
                    ),
                    (0, t.jsx)("link", {
                      rel: "alternate",
                      hrefLang: "x-default",
                      href: "https://www.streetfighter.com/6".concat(l),
                    }),
                  ],
                }),
            (0, t.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, t.jsx)("link", {
              rel: "shortcut icon",
              href: "/6/assets/images/favicon.ico",
            }),
            (0, t.jsx)("link", {
              rel: "apple-touch-icon-precomposed",
              href: "/6/assets/images/icon.jpg",
            }),
          ],
        });
      };
    },
    17398: (a, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let t = r(57130),
        c = r(52431),
        s = r(66162),
        n = c._(r(44922)),
        o = c._(r(49715)),
        i = t._(r(91835)),
        h = r(5423),
        m = r(85340),
        u = r(81825);
      r(1635);
      let l = r(52169);
      function j(a) {
        return "/" === a[0] ? a.slice(1) : a;
      }
      let f = "function" == typeof o.preload,
        d = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/6/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        k = new Set(),
        p =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        v = new Map([
          [
            "default",
            function (a) {
              var e;
              let { config: r, src: t, width: c, quality: s } = a,
                n =
                  s ||
                  (null == (e = r.qualities)
                    ? void 0
                    : e.reduce((a, e) =>
                        Math.abs(e - 75) < Math.abs(a - 75) ? e : a
                      )) ||
                  75;
              return !r.dangerouslyAllowSVG &&
                t.split("?", 1)[0].endsWith(".svg")
                ? t
                : (0, l.normalizePathTrailingSlash)(r.path) +
                    "?url=" +
                    encodeURIComponent(t) +
                    "&w=" +
                    c +
                    "&q=" +
                    n;
            },
          ],
          [
            "imgix",
            function (a) {
              let { config: e, src: r, width: t, quality: c } = a,
                s = new URL("" + e.path + j(r)),
                n = s.searchParams;
              return (
                n.set("auto", n.getAll("auto").join(",") || "format"),
                n.set("fit", n.get("fit") || "max"),
                n.set("w", n.get("w") || t.toString()),
                c && n.set("q", c.toString()),
                s.href
              );
            },
          ],
          [
            "cloudinary",
            function (a) {
              let { config: e, src: r, width: t, quality: c } = a,
                s =
                  ["f_auto", "c_limit", "w_" + t, "q_" + (c || "auto")].join(
                    ","
                  ) + "/";
              return "" + e.path + s + j(r);
            },
          ],
          [
            "akamai",
            function (a) {
              let { config: e, src: r, width: t } = a;
              return "" + e.path + j(r) + "?imwidth=" + t;
            },
          ],
          [
            "custom",
            function (a) {
              let { src: e } = a;
              throw Object.defineProperty(
                Error(
                  'Image with src "' +
                    e +
                    '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
                ),
                "__NEXT_ERROR_CODE",
                { value: "E252", enumerable: !1, configurable: !0 }
              );
            },
          ],
        ]);
      function g(a) {
        return void 0 !== a.default;
      }
      function b(a) {
        let {
          config: e,
          src: r,
          unoptimized: t,
          layout: c,
          width: s,
          quality: n,
          sizes: o,
          loader: i,
        } = a;
        if (t) return { src: r, srcSet: void 0, sizes: void 0 };
        let { widths: h, kind: m } = (function (a, e, r, t) {
            let { deviceSizes: c, allSizes: s } = a;
            if (t && ("fill" === r || "responsive" === r)) {
              let a = /(^|\s)(1?\d?\d)vw/g,
                e = [];
              for (let r; (r = a.exec(t)); ) e.push(parseInt(r[2]));
              if (e.length) {
                let a = 0.01 * Math.min(...e);
                return { widths: s.filter((e) => e >= c[0] * a), kind: "w" };
              }
              return { widths: s, kind: "w" };
            }
            return "number" != typeof e || "fill" === r || "responsive" === r
              ? { widths: c, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [e, 2 * e].map(
                        (a) => s.find((e) => e >= a) || s[s.length - 1]
                      )
                    ),
                  ],
                  kind: "x",
                };
          })(e, s, c, o),
          u = h.length - 1;
        return {
          sizes: o || "w" !== m ? o : "100vw",
          srcSet: h
            .map(
              (a, t) =>
                i({ config: e, src: r, quality: n, width: a }) +
                " " +
                ("w" === m ? a : t + 1) +
                m
            )
            .join(", "),
          src: i({ config: e, src: r, quality: n, width: h[u] }),
        };
      }
      function y(a) {
        return "number" == typeof a
          ? a
          : "string" == typeof a
          ? parseInt(a, 10)
          : void 0;
      }
      function z(a) {
        var e;
        let r = (null == (e = a.config) ? void 0 : e.loader) || "default",
          t = v.get(r);
        if (t) return t(a);
        throw Object.defineProperty(
          Error(
            'Unknown "loader" found in "next.config.js". Expected: ' +
              h.VALID_LOADERS.join(", ") +
              ". Received: " +
              r
          ),
          "__NEXT_ERROR_CODE",
          { value: "E338", enumerable: !1, configurable: !0 }
        );
      }
      function _(a, e, r, t, c, s) {
        a &&
          a.src !== p &&
          a["data-loaded-src"] !== e &&
          ((a["data-loaded-src"] = e),
          ("decode" in a ? a.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (
                a.parentNode &&
                (k.add(e),
                "blur" === t && s(!0),
                null == c ? void 0 : c.current)
              ) {
                let { naturalWidth: e, naturalHeight: r } = a;
                c.current({ naturalWidth: e, naturalHeight: r });
              }
            }));
      }
      let x = (a) => {
        let {
          imgAttributes: e,
          heightInt: r,
          widthInt: t,
          qualityInt: c,
          layout: o,
          className: i,
          imgStyle: h,
          blurStyle: m,
          isLazy: u,
          placeholder: l,
          loading: j,
          srcString: f,
          config: d,
          unoptimized: k,
          loader: p,
          onLoadingCompleteRef: v,
          setBlurComplete: g,
          setIntersection: y,
          onLoad: z,
          onError: x,
          isVisible: w,
          noscriptSizes: N,
          ...O
        } = a;
        return (
          (j = u ? "lazy" : j),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("img", {
                ...O,
                ...e,
                decoding: "async",
                "data-nimg": o,
                className: i,
                style: { ...h, ...m },
                ref: (0, n.useCallback)(
                  (a) => {
                    y(a),
                      (null == a ? void 0 : a.complete) && _(a, f, o, l, v, g);
                  },
                  [y, f, o, l, v, g]
                ),
                onLoad: (a) => {
                  _(a.currentTarget, f, o, l, v, g), z && z(a);
                },
                onError: (a) => {
                  "blur" === l && g(!0), x && x(a);
                },
              }),
              (u || "blur" === l) &&
                (0, s.jsx)("noscript", {
                  children: (0, s.jsx)("img", {
                    ...O,
                    loading: j,
                    decoding: "async",
                    "data-nimg": o,
                    style: h,
                    className: i,
                    ...b({
                      config: d,
                      src: f,
                      unoptimized: k,
                      layout: o,
                      width: t,
                      quality: c,
                      sizes: N,
                      loader: p,
                    }),
                  }),
                }),
            ],
          })
        );
      };
      function w(a) {
        var e;
        let r,
          {
            src: t,
            sizes: c,
            unoptimized: o = !1,
            priority: l = !1,
            loading: j,
            lazyRoot: v = null,
            lazyBoundary: _,
            className: w,
            quality: N,
            width: O,
            height: I,
            style: E,
            objectFit: A,
            objectPosition: T,
            onLoadingComplete: S,
            placeholder: R = "empty",
            blurDataURL: L,
            ...P
          } = a,
          C = (0, n.useContext)(u.ImageConfigContext),
          M = (0, n.useMemo)(() => {
            var a;
            let e = d || C || h.imageConfigDefault,
              r = [...e.deviceSizes, ...e.imageSizes].sort((a, e) => a - e),
              t = e.deviceSizes.sort((a, e) => a - e),
              c = null == (a = e.qualities) ? void 0 : a.sort((a, e) => a - e);
            return { ...e, allSizes: r, deviceSizes: t, qualities: c };
          }, [C]),
          D = c ? "responsive" : "intrinsic";
        "layout" in P && (P.layout && (D = P.layout), delete P.layout);
        let F = z;
        if ("loader" in P) {
          if (P.loader) {
            let a = P.loader;
            F = (e) => {
              let { config: r, ...t } = e;
              return a(t);
            };
          }
          delete P.loader;
        }
        let H = "";
        if ("object" == typeof (e = t) && (g(e) || void 0 !== e.src)) {
          let a = g(t) ? t.default : t;
          if (!a.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(a)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (
            ((L = L || a.blurDataURL),
            (H = a.src),
            (!D || "fill" !== D) &&
              ((I = I || a.height), (O = O || a.width), !a.height || !a.width))
          )
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(a)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
        }
        let q = !l && ("lazy" === j || void 0 === j);
        ((t = "string" == typeof t ? t : H).startsWith("data:") ||
          t.startsWith("blob:")) &&
          ((o = !0), (q = !1)),
          k.has(t) && (q = !1),
          M.unoptimized && (o = !0);
        let [G, B] = (0, n.useState)(!1),
          [U, W, K] = (0, m.useIntersection)({
            rootRef: v,
            rootMargin: _ || "200px",
            disabled: !q,
          }),
          X = !q || W,
          J = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Q = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          Y = !1,
          V = y(O),
          $ = y(I),
          Z = y(N),
          aa = Object.assign({}, E, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: A,
            objectPosition: T,
          }),
          ae =
            "blur" !== R || G
              ? {}
              : {
                  backgroundSize: A || "cover",
                  backgroundPosition: T || "0% 0%",
                  filter: "blur(20px)",
                  backgroundImage: 'url("' + L + '")',
                };
        if ("fill" === D)
          (J.display = "block"),
            (J.position = "absolute"),
            (J.top = 0),
            (J.left = 0),
            (J.bottom = 0),
            (J.right = 0);
        else if (void 0 !== V && void 0 !== $) {
          let a = $ / V,
            e = isNaN(a) ? "100%" : "" + 100 * a + "%";
          "responsive" === D
            ? ((J.display = "block"),
              (J.position = "relative"),
              (Y = !0),
              (Q.paddingTop = e))
            : "intrinsic" === D
            ? ((J.display = "inline-block"),
              (J.position = "relative"),
              (J.maxWidth = "100%"),
              (Y = !0),
              (Q.maxWidth = "100%"),
              (r =
                "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" +
                V +
                "%27%20height=%27" +
                $ +
                "%27/%3e"))
            : "fixed" === D &&
              ((J.display = "inline-block"),
              (J.position = "relative"),
              (J.width = V),
              (J.height = $));
        }
        let ar = { src: p, srcSet: void 0, sizes: void 0 };
        X &&
          (ar = b({
            config: M,
            src: t,
            unoptimized: o,
            layout: D,
            width: V,
            quality: Z,
            sizes: c,
            loader: F,
          }));
        let at = t,
          ac = f
            ? void 0
            : {
                imageSrcSet: ar.srcSet,
                imageSizes: ar.sizes,
                crossOrigin: P.crossOrigin,
                referrerPolicy: P.referrerPolicy,
              },
          as = n.default.useLayoutEffect,
          an = (0, n.useRef)(S),
          ao = (0, n.useRef)(t);
        (0, n.useEffect)(() => {
          an.current = S;
        }, [S]),
          as(() => {
            ao.current !== t && (K(), (ao.current = t));
          }, [K, t]);
        let ai = {
          isLazy: q,
          imgAttributes: ar,
          heightInt: $,
          widthInt: V,
          qualityInt: Z,
          layout: D,
          className: w,
          imgStyle: aa,
          blurStyle: ae,
          loading: j,
          config: M,
          unoptimized: o,
          placeholder: R,
          loader: F,
          srcString: at,
          onLoadingCompleteRef: an,
          setBlurComplete: B,
          setIntersection: U,
          isVisible: X,
          noscriptSizes: c,
          ...P,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("span", {
              style: J,
              children: [
                Y
                  ? (0, s.jsx)("span", {
                      style: Q,
                      children: r
                        ? (0, s.jsx)("img", {
                            style: {
                              display: "block",
                              maxWidth: "100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                            },
                            alt: "",
                            "aria-hidden": !0,
                            src: r,
                          })
                        : null,
                    })
                  : null,
                (0, s.jsx)(x, { ...ai }),
              ],
            }),
            !f && l
              ? (0, s.jsx)(i.default, {
                  children: (0, s.jsx)(
                    "link",
                    {
                      rel: "preload",
                      as: "image",
                      href: ar.srcSet ? void 0 : ar.src,
                      ...ac,
                    },
                    "__nimg-" + ar.src + ar.srcSet + ar.sizes
                  ),
                })
              : null,
          ],
        });
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (a.exports = e.default));
    },
    19989: (a, e, r) => {
      "use strict";
      r.r(e), r.d(e, { __N_SSG: () => m, default: () => u });
      var t = r(66162),
        c = r(56709),
        s = r.n(c),
        n = r(69996),
        o = r(12350),
        i = r(48102),
        h = r.n(i),
        m = !0;
      let u = () => {
        let a,
          e,
          { t: r, lang: c } = (0, n.A)("error"),
          i = (0, n.A)("common");
        switch (c) {
          case "en-us":
          case "en-uk":
          case "en-asia":
            a = "en";
            break;
          default:
            a = c;
        }
        switch (c) {
          case "ja-jp":
            e = "";
            break;
          case "en-us":
            e = "ft-gl ft-pp-us";
            break;
          case "en-asia":
          case "zh-hant":
          case "zh-hans":
          case "ko-kr":
            e = "ft-gl ft-pp-asia";
            break;
          default:
            e = "ft-gl";
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              id: "wrapper",
              className: h().wrapper,
              children: [
                (0, t.jsx)(o.A, {
                  pageTitle: i.t("[t]404_title"),
                  pageDescription: i.t("[t]404_title"),
                }),
                (0, t.jsx)("article", {
                  className: h().error,
                  children: (0, t.jsxs)("div", {
                    className: h().inner,
                    children: [
                      (0, t.jsx)("p", {
                        className: h().logo,
                        children: (0, t.jsx)(s(), {
                          src: "/6/assets/images/series/logo_404.png",
                          width: "334",
                          height: "162",
                          layout: "responsive",
                          alt: "",
                          unoptimized: !0,
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        children: (0, t.jsx)(s(), {
                          src: "/6/assets/images/series/text_404.png",
                          width: "319",
                          height: "180",
                          layout: "responsive",
                          alt: "",
                          unoptimized: !0,
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: h().text,
                        dangerouslySetInnerHTML: {
                          __html: "".concat(i.t("[t]404_text")),
                        },
                      }),
                      (0, t.jsxs)("ul", {
                        className: h().btnarea,
                        children: [
                          (0, t.jsxs)("li", {
                            className: h().six,
                            children: [
                              (0, t.jsx)("span", {
                                className: h().image,
                                children: (0, t.jsx)(s(), {
                                  src: "/6/assets/images/common/logo.png",
                                  width: "255",
                                  height: "41",
                                  layout: "responsive",
                                  alt: "",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("a", {
                                href: "/6/".concat(c),
                                target: "_blank",
                                rel: "noreferrer",
                                children: i.t("[t]links_sf6"),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("li", {
                            className: h().bbc,
                            children: [
                              (0, t.jsx)("span", {
                                className: h().image,
                                children: (0, t.jsx)(s(), {
                                  src: "/6/assets/images/series/logo_buckler".concat(
                                    "ja-jp" === c ? "_ja" : "",
                                    ".png"
                                  ),
                                  width: "544",
                                  height: "178",
                                  layout: "responsive",
                                  alt: "",
                                  unoptimized: !0,
                                }),
                              }),
                              (0, t.jsx)("a", {
                                href: "/6/buckler/".concat(a),
                                dangerouslySetInnerHTML: {
                                  __html: "".concat(i.t("[t]links_bbc")),
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className: h().series_top,
                        children: (0, t.jsx)("a", {
                          href: "ja-jp" === c ? "/ja" : "/en",
                          target: "_blank",
                          rel: "noreferrer",
                          children: i.t("[t]links_series"),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: h().bg,
                  children: [
                    (0, t.jsxs)("div", {
                      className: h().bg_sf,
                      children: [
                        (0, t.jsx)("span", { className: h().top }),
                        (0, t.jsx)("span", { className: h().btm }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: h().bg_left,
                      children: (0, t.jsx)("span", {}),
                    }),
                    (0, t.jsx)("div", {
                      className: h().bg_right,
                      children: (0, t.jsx)("span", {}),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("footer", { id: "title_footer", className: e }),
          ],
        });
      };
    },
    34013: (a, e, r) => {
      "use strict";
      r.d(e, { Rs: () => s, n6: () => o, ur: () => i, wc: () => n });
      var t = r(44922);
      let c = { fighterId: "", shortId: 0, regionId: 0 },
        s = t.createContext({ state: c, dispatch: null });
      function n() {
        return t.useReducer((a, e) => {
          switch (e.type) {
            case "LOGIN":
              return {
                fighterId: e.fighterId,
                shortId: e.shortId,
                regionId: e.regionId,
              };
            case "ERROR":
              return {
                fighterId: e.fighterId,
                shortId: e.shortId,
                regionId: e.regionId,
                errorFlg: !0,
              };
          }
        }, c);
      }
      function o(a, e) {
        t.useEffect(() => {
          (async () => {
            try {
              let e = await fetch("/6/buckler/api/auth/getlogindata", {
                  method: "GET",
                  headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                  },
                }),
                r = await e.json();
              r.loginUser.flg
                ? a({
                    type: "LOGIN",
                    fighterId: r.loginUser.fighterId,
                    shortId: r.loginUser.shortId,
                    regionId: r.loginUser.regionId,
                  })
                : a({ type: "LOGIN", fighterId: "", shortId: 0, regionId: 0 });
            } catch (e) {
              a({ type: "ERROR", fighterId: "", shortId: 0, regionId: 0 });
            }
          })();
        }, [a, e]);
      }
      function i() {
        return t.useContext(s);
      }
    },
    48102: (a) => {
      a.exports = {
        wrapper: "custom_error_series_wrapper__z2t56",
        error: "custom_error_series_error__7H7s0",
        inner: "custom_error_series_inner__fa_zi",
        logo: "custom_error_series_logo__KOzrp",
        maintenance: "custom_error_series_maintenance__tQbSZ",
        text: "custom_error_series_text__2MqGy",
        btn: "custom_error_series_btn__mpr_6",
        btnarea: "custom_error_series_btnarea__CDdkK",
        six: "custom_error_series_six__PE5h5",
        image: "custom_error_series_image__prHxD",
        bbc: "custom_error_series_bbc__X_El5",
        series_top: "custom_error_series_series_top__doOKo",
        bg: "custom_error_series_bg__pyi0h",
        bg_sf: "custom_error_series_bg_sf__AGuJb",
        top: "custom_error_series_top__rJIOt",
        left_to_right: "custom_error_series_left_to_right___ezCn",
        left_to_right_over: "custom_error_series_left_to_right_over__2dmnX",
        left_to_right_sp: "custom_error_series_left_to_right_sp__xTfIz",
        btm: "custom_error_series_btm__IErtT",
        right_to_left: "custom_error_series_right_to_left__3S5oG",
        right_to_left_over: "custom_error_series_right_to_left_over__8gS2Q",
        bg_left: "custom_error_series_bg_left__Bpw_B",
        bg_right: "custom_error_series_bg_right__mXmyF",
        top_to_bottom: "custom_error_series_top_to_bottom__bmqzC",
        top_to_bottom_over: "custom_error_series_top_to_bottom_over__CQrwx",
        top_to_bottom_sp: "custom_error_series_top_to_bottom_sp__IOY_I",
        bottom_to_top: "custom_error_series_bottom_to_top__5nZpL",
        bottom_to_top_over: "custom_error_series_bottom_to_top_over___u2Hl",
        bottom_to_top_sp: "custom_error_series_bottom_to_top_sp__0DyLY",
        blink: "custom_error_series_blink__9e_Wk",
        right_to_left_sp: "custom_error_series_right_to_left_sp__LwEn3",
      };
    },
    55071: (a, e, r) => {
      "use strict";
      r.d(e, { A: () => x });
      var t = r(44922),
        c = r(66833),
        s = r(90609),
        n = function () {
          return (n =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        };
      function o(a, e, r, t) {
        void 0 === e && (e = ""), void 0 === t && (t = { returnObjects: !1 });
        var c = (r || {}).keySeparator,
          s = void 0 === c ? "." : c,
          n = s ? e.split(s) : [e];
        if (e === s && t.returnObjects) return a;
        var o = n.reduce(function (a, e) {
          if ("string" == typeof a) return {};
          var r = a[e];
          return r || ("string" == typeof r ? r : {});
        }, a);
        if ("string" == typeof o || (o instanceof Object && t.returnObjects))
          return o;
      }
      function i(a) {
        var e = a.text,
          r = a.query,
          t = a.config,
          c = a.lang;
        if (!e || !r) return e || "";
        var s = function (a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          },
          n = t.interpolation || {},
          o = n.format,
          i = void 0 === o ? null : o,
          h = n.prefix,
          m = void 0 === h ? "{{" : h,
          u = n.suffix,
          l = void 0 === u ? "}}" : u,
          j = "" === l ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(s(l));
        return Object.keys(r).reduce(function (a, e) {
          if ("string" != typeof a) return a;
          var t = RegExp("".concat(s(m), "\\s*").concat(e).concat(j), "gm");
          return a.replace(t, function (a, t) {
            return t && i ? i(r[e], t, c) : r[e];
          });
        }, e);
      }
      function h(a) {
        a.namespace, a.i18nKey;
      }
      var m = r(69996),
        u = function () {
          return (u =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        },
        l = (0, t.createContext)({ ns: {}, config: {} });
      function j(a) {
        var e,
          r,
          j,
          f,
          d,
          k,
          p,
          v,
          g,
          b,
          y = a.lang,
          z = a.namespaces,
          _ = a.children,
          x = a.config,
          w = (0, m.A)().lang,
          N = (0, c.useRouter)() || {},
          O = N.locale,
          I = N.defaultLocale,
          E = (0, t.useContext)(l),
          A = u(
            u(
              u(
                {},
                "undefined" == typeof window
                  ? {}
                  : (null ==
                    (r = null == (e = window.__NEXT_DATA__) ? void 0 : e.props)
                      ? void 0
                      : r.__namespaces) || {}
              ),
              E.ns
            ),
            void 0 === z ? {} : z
          ),
          T = y || w || O || I || "",
          S = u(u({}, E.config), void 0 === x ? {} : x),
          R = (S.localesToIgnore || ["default"]).includes(T),
          L =
            ((f = (j = {
              config: S,
              allNamespaces: A,
              pluralRules: new Intl.PluralRules(R ? void 0 : T),
              lang: T,
            }).config),
            (d = j.allNamespaces),
            (k = j.pluralRules),
            (p = j.lang),
            (g = void 0 === (v = f.logger) ? h : v),
            (b = function (a, e, r) {
              void 0 === a && (a = "");
              var t,
                c = Array.isArray(a) ? a[0] : a,
                s = f.nsSeparator,
                h = f.loggerEnvironment,
                m = void 0 === h ? "browser" : h,
                u = (function (a, e) {
                  if (!e) return { i18nKey: a };
                  var r = a.indexOf(e);
                  return r < 0
                    ? { i18nKey: a }
                    : {
                        namespace: a.slice(0, r),
                        i18nKey: a.slice(r + e.length),
                      };
                })(c, void 0 === s ? ":" : s),
                l = u.i18nKey,
                j = u.namespace,
                v =
                  void 0 === j
                    ? null != (t = null == r ? void 0 : r.ns)
                      ? t
                      : f.defaultNS
                    : j,
                y = (v && d[v]) || {},
                z = (function (a, e, r, t, c) {
                  if (!c || "number" != typeof c.count) return r;
                  var s = "".concat(r, "_").concat(c.count);
                  if (void 0 !== o(e, s, t)) return s;
                  var n = "".concat(r, "_").concat(a.select(c.count));
                  if (void 0 !== o(e, n, t)) return n;
                  var i = "".concat(r, ".").concat(c.count);
                  if (void 0 !== o(e, i, t)) return i;
                  var h = "".concat(r, ".").concat(a.select(c.count));
                  return void 0 !== o(e, h, t) ? h : r;
                })(k, y, l, f, e),
                _ = o(y, z, f, r),
                x =
                  void 0 === _ ||
                  ("object" == typeof _ && !Object.keys(_).length),
                w =
                  "string" == typeof (null == r ? void 0 : r.fallback)
                    ? [r.fallback]
                    : (null == r ? void 0 : r.fallback) || [];
              if (
                (x &&
                  ("both" === m ||
                    m ===
                      ("undefined" == typeof window ? "node" : "browser")) &&
                  g({ namespace: v, i18nKey: l }),
                x && Array.isArray(w) && w.length)
              ) {
                var N = w[0],
                  O = w.slice(1);
                if ("string" == typeof N)
                  return b(N, e, n(n({}, r), { fallback: O }));
              }
              return x &&
                (null == r ? void 0 : r.default) &&
                (null == w ? void 0 : w.length) == 0
                ? i({
                    text: null == r ? void 0 : r.default,
                    query: e,
                    config: f,
                    lang: p,
                  })
                : x
                ? c
                : _ instanceof Object
                ? (function a(e) {
                    var r = e.obj,
                      t = e.query,
                      c = e.config,
                      s = e.lang;
                    return (
                      t &&
                        0 !== Object.keys(t).length &&
                        Object.keys(r).forEach(function (e) {
                          r[e] instanceof Object &&
                            a({ obj: r[e], query: t, config: c, lang: s }),
                            "string" == typeof r[e] &&
                              (r[e] = i({
                                text: r[e],
                                query: t,
                                config: c,
                                lang: s,
                              }));
                        }),
                      r
                    );
                  })({ obj: _, query: e, config: f, lang: p })
                : i({ text: _, query: e, config: f, lang: p });
            }));
        return t.createElement(
          s.A.Provider,
          { value: { lang: T, t: L } },
          t.createElement(l.Provider, { value: { ns: A, config: S } }, _)
        );
      }
      var f = function (a, e, r, t) {
          return new (r || (r = Promise))(function (c, s) {
            function n(a) {
              try {
                i(t.next(a));
              } catch (a) {
                s(a);
              }
            }
            function o(a) {
              try {
                i(t.throw(a));
              } catch (a) {
                s(a);
              }
            }
            function i(a) {
              var e;
              a.done
                ? c(a.value)
                : ((e = a.value) instanceof r
                    ? e
                    : new r(function (a) {
                        a(e);
                      })
                  ).then(n, o);
            }
            i((t = t.apply(a, e || [])).next());
          });
        },
        d = function (a, e) {
          var r,
            t,
            c,
            s,
            n = {
              label: 0,
              sent: function () {
                if (1 & c[0]) throw c[1];
                return c[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function o(s) {
            return function (o) {
              var i = [s, o];
              if (r) throw TypeError("Generator is already executing.");
              for (; n; )
                try {
                  if (
                    ((r = 1),
                    t &&
                      (c =
                        2 & i[0]
                          ? t.return
                          : i[0]
                          ? t.throw || ((c = t.return) && c.call(t), 0)
                          : t.next) &&
                      !(c = c.call(t, i[1])).done)
                  )
                    return c;
                  switch (((t = 0), c && (i = [2 & i[0], c.value]), i[0])) {
                    case 0:
                    case 1:
                      c = i;
                      break;
                    case 4:
                      return n.label++, { value: i[1], done: !1 };
                    case 5:
                      n.label++, (t = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = n.ops.pop()), n.trys.pop();
                      continue;
                    default:
                      if (
                        !(c = (c = n.trys).length > 0 && c[c.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        n = 0;
                        continue;
                      }
                      if (3 === i[0] && (!c || (i[1] > c[0] && i[1] < c[3]))) {
                        n.label = i[1];
                        break;
                      }
                      if (6 === i[0] && n.label < c[1]) {
                        (n.label = c[1]), (c = i);
                        break;
                      }
                      if (c && n.label < c[2]) {
                        (n.label = c[2]), n.ops.push(i);
                        break;
                      }
                      c[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  i = e.call(a, n);
                } catch (a) {
                  (i = [6, a]), (t = 0);
                } finally {
                  r = c = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            };
          }
        },
        k = function (a, e, r) {
          if (r || 2 == arguments.length)
            for (var t, c = 0, s = e.length; c < s; c++)
              (!t && c in e) ||
                (t || (t = Array.prototype.slice.call(e, 0, c)), (t[c] = e[c]));
          return a.concat(t || Array.prototype.slice.call(e));
        };
      function p(a) {
        return a.reduce(function (a, e) {
          return a.concat(e);
        }, []);
      }
      var v = r(80240),
        g = function () {
          return (g =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        },
        b = function (a, e) {
          var r,
            t,
            c,
            s,
            n = {
              label: 0,
              sent: function () {
                if (1 & c[0]) throw c[1];
                return c[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function o(s) {
            return function (o) {
              var i = [s, o];
              if (r) throw TypeError("Generator is already executing.");
              for (; n; )
                try {
                  if (
                    ((r = 1),
                    t &&
                      (c =
                        2 & i[0]
                          ? t.return
                          : i[0]
                          ? t.throw || ((c = t.return) && c.call(t), 0)
                          : t.next) &&
                      !(c = c.call(t, i[1])).done)
                  )
                    return c;
                  switch (((t = 0), c && (i = [2 & i[0], c.value]), i[0])) {
                    case 0:
                    case 1:
                      c = i;
                      break;
                    case 4:
                      return n.label++, { value: i[1], done: !1 };
                    case 5:
                      n.label++, (t = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = n.ops.pop()), n.trys.pop();
                      continue;
                    default:
                      if (
                        !(c = (c = n.trys).length > 0 && c[c.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        n = 0;
                        continue;
                      }
                      if (3 === i[0] && (!c || (i[1] > c[0] && i[1] < c[3]))) {
                        n.label = i[1];
                        break;
                      }
                      if (6 === i[0] && n.label < c[1]) {
                        (n.label = c[1]), (c = i);
                        break;
                      }
                      if (c && n.label < c[2]) {
                        (n.label = c[2]), n.ops.push(i);
                        break;
                      }
                      c[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  i = e.call(a, n);
                } catch (a) {
                  (i = [6, a]), (t = 0);
                } finally {
                  r = c = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            };
          }
        },
        y =
          null == v.env.NODE_DISABLE_COLORS &&
          null == v.env.NO_COLOR &&
          "dumb" !== v.env.TERM &&
          "0" !== v.env.FORCE_COLOR,
        z = function () {
          return (z =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        },
        _ = function (a, e) {
          var r,
            t,
            c,
            s,
            n = {
              label: 0,
              sent: function () {
                if (1 & c[0]) throw c[1];
                return c[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: o(0), throw: o(1), return: o(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function o(s) {
            return function (o) {
              var i = [s, o];
              if (r) throw TypeError("Generator is already executing.");
              for (; n; )
                try {
                  if (
                    ((r = 1),
                    t &&
                      (c =
                        2 & i[0]
                          ? t.return
                          : i[0]
                          ? t.throw || ((c = t.return) && c.call(t), 0)
                          : t.next) &&
                      !(c = c.call(t, i[1])).done)
                  )
                    return c;
                  switch (((t = 0), c && (i = [2 & i[0], c.value]), i[0])) {
                    case 0:
                    case 1:
                      c = i;
                      break;
                    case 4:
                      return n.label++, { value: i[1], done: !1 };
                    case 5:
                      n.label++, (t = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = n.ops.pop()), n.trys.pop();
                      continue;
                    default:
                      if (
                        !(c = (c = n.trys).length > 0 && c[c.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        n = 0;
                        continue;
                      }
                      if (3 === i[0] && (!c || (i[1] > c[0] && i[1] < c[3]))) {
                        n.label = i[1];
                        break;
                      }
                      if (6 === i[0] && n.label < c[1]) {
                        (n.label = c[1]), (c = i);
                        break;
                      }
                      if (c && n.label < c[2]) {
                        (n.label = c[2]), n.ops.push(i);
                        break;
                      }
                      c[2] && n.ops.pop(), n.trys.pop();
                      continue;
                  }
                  i = e.call(a, n);
                } catch (a) {
                  (i = [6, a]), (t = 0);
                } finally {
                  r = c = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            };
          }
        };
      function x(a, e) {
        var c = this;
        function s(r) {
          var c,
            s,
            n = e.defaultLocale;
          return t.createElement(
            j,
            {
              lang:
                (null == (c = r.pageProps) ? void 0 : c.__lang) ||
                r.__lang ||
                n,
              namespaces:
                (null == (s = r.pageProps) ? void 0 : s.__namespaces) ||
                r.__namespaces,
              config: e,
            },
            t.createElement(a, z({}, r))
          );
        }
        return (
          void 0 === e && (e = {}),
          e.isLoader ||
            !1 === e.loader ||
            console.warn(
              '\uD83D\uDEA8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'
            ),
          "function" == typeof e.staticsHoc && e.staticsHoc(s, a),
          "undefined" == typeof window
            ? (r.g.i18nConfig = e)
            : (window.i18nConfig = e),
          e.skipInitialProps ||
            (s.getInitialProps = function (t) {
              var s, n, o;
              return (
                (s = void 0),
                (n = void 0),
                (o = function () {
                  var c, s, n;
                  return _(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (
                          ((c = z(z({}, t.ctx || {}), t || {})),
                          (s = { pageProps: {} }),
                          !a.getInitialProps)
                        )
                          return [3, 2];
                        return [4, a.getInitialProps(t)];
                      case 1:
                        (s = o.sent() || {}), (o.label = 2);
                      case 2:
                        return (
                          (n = [z({}, s)]),
                          [
                            4,
                            (function (a) {
                              var e, t, c, s, n, o;
                              return (
                                void 0 === a && (a = {}),
                                (c = this),
                                (s = void 0),
                                (n = void 0),
                                (o = function () {
                                  var c, s, n, o, i, h, m;
                                  return b(this, function (u) {
                                    switch (u.label) {
                                      case 0:
                                        var l;
                                        if (
                                          ((s = (c = g(
                                            g(
                                              {},
                                              ("undefined" == typeof window
                                                ? r.g
                                                : window
                                              ).i18nConfig
                                            ),
                                            a
                                          )).localesToIgnore || ["default"]),
                                          (n =
                                            (null == (e = c.req)
                                              ? void 0
                                              : e.locale) ||
                                            c.locale ||
                                            (null == (t = c.router)
                                              ? void 0
                                              : t.locale) ||
                                            c.defaultLocale ||
                                            ""),
                                          !c.pathname)
                                        )
                                          return (
                                            console.warn(
                                              '\uD83D\uDEA8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'
                                            ),
                                            [2, { __lang: n }]
                                          );
                                        if (s.includes(n))
                                          return [2, { __lang: n }];
                                        return (
                                          c.loaderName ||
                                            !1 === c.loader ||
                                            console.warn(
                                              '\uD83D\uDEA8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'
                                            ),
                                          (o =
                                            (void 0 ===
                                              (l = c.pathname.replace(
                                                /\/index$/,
                                                ""
                                              )) && (l = ""),
                                            (l.length > 1 && l.endsWith("/")
                                              ? l.slice(0, -1)
                                              : l) || "/")),
                                          [
                                            4,
                                            (function (a, e, r) {
                                              var t = a.pages,
                                                c = void 0 === t ? {} : t;
                                              return f(
                                                this,
                                                void 0,
                                                void 0,
                                                function () {
                                                  var a,
                                                    t,
                                                    s,
                                                    n,
                                                    o,
                                                    i,
                                                    h,
                                                    m = this;
                                                  return d(this, function (u) {
                                                    switch (u.label) {
                                                      case 0:
                                                        return (
                                                          (a = "rgx:"),
                                                          (t = function (a) {
                                                            return f(
                                                              m,
                                                              void 0,
                                                              void 0,
                                                              function () {
                                                                return d(
                                                                  this,
                                                                  function (e) {
                                                                    return [
                                                                      2,
                                                                      "function" ==
                                                                      typeof a
                                                                        ? a(r)
                                                                        : a ||
                                                                          [],
                                                                    ];
                                                                  }
                                                                );
                                                              }
                                                            );
                                                          }),
                                                          (s = Object.keys(
                                                            c
                                                          ).reduce(function (
                                                            r,
                                                            s
                                                          ) {
                                                            return (
                                                              s.substring(
                                                                0,
                                                                a.length
                                                              ) === a &&
                                                                new RegExp(
                                                                  s.replace(
                                                                    a,
                                                                    ""
                                                                  )
                                                                ).test(e) &&
                                                                r.push(t(c[s])),
                                                              r
                                                            );
                                                          },
                                                          [])),
                                                          (n = [[]]),
                                                          [4, t(c["*"])]
                                                        );
                                                      case 1:
                                                        return (
                                                          (o = [
                                                            k.apply(
                                                              void 0,
                                                              n.concat([
                                                                u.sent(),
                                                                !0,
                                                              ])
                                                            ),
                                                          ]),
                                                          [4, t(c[e])]
                                                        );
                                                      case 2:
                                                        return (
                                                          (i = [
                                                            k.apply(
                                                              void 0,
                                                              o.concat([
                                                                u.sent(),
                                                                !0,
                                                              ])
                                                            ),
                                                          ]),
                                                          (h = p),
                                                          [4, Promise.all(s)]
                                                        );
                                                      case 3:
                                                        return [
                                                          2,
                                                          k.apply(
                                                            void 0,
                                                            i.concat([
                                                              h.apply(void 0, [
                                                                u.sent(),
                                                              ]),
                                                              !0,
                                                            ])
                                                          ),
                                                        ];
                                                    }
                                                  });
                                                }
                                              );
                                            })(c, o, c),
                                          ]
                                        );
                                      case 1:
                                        return [
                                          4,
                                          Promise.all(
                                            (i = u.sent()).map(function (a) {
                                              return "function" ==
                                                typeof c.loadLocaleFrom
                                                ? c
                                                    .loadLocaleFrom(n, a)
                                                    .catch(function () {
                                                      return {};
                                                    })
                                                : Promise.resolve({});
                                            })
                                          ),
                                        ];
                                      case 2:
                                        return (
                                          (h = u.sent() || []),
                                          !1 !== c.logBuild &&
                                            "undefined" == typeof window &&
                                            console.log(
                                              (m = function (a) {
                                                return y
                                                  ? "\x1b[36m".concat(
                                                      a,
                                                      "\x1b[0m"
                                                    )
                                                  : a;
                                              })("next-translate"),
                                              "- compiled page:",
                                              m(o),
                                              "- locale:",
                                              m(n),
                                              "- namespaces:",
                                              m(i.join(", ")),
                                              "- used loader:",
                                              m(c.loaderName || "-")
                                            ),
                                          [
                                            2,
                                            {
                                              __lang: n,
                                              __namespaces: i.reduce(function (
                                                a,
                                                e,
                                                r
                                              ) {
                                                return (a[e] = h[r] || null), a;
                                              },
                                              {}),
                                            },
                                          ]
                                        );
                                    }
                                  });
                                }),
                                new (n || (n = Promise))(function (a, e) {
                                  function r(a) {
                                    try {
                                      i(o.next(a));
                                    } catch (a) {
                                      e(a);
                                    }
                                  }
                                  function t(a) {
                                    try {
                                      i(o.throw(a));
                                    } catch (a) {
                                      e(a);
                                    }
                                  }
                                  function i(e) {
                                    var c;
                                    e.done
                                      ? a(e.value)
                                      : ((c = e.value) instanceof n
                                          ? c
                                          : new n(function (a) {
                                              a(c);
                                            })
                                        ).then(r, t);
                                  }
                                  i((o = o.apply(c, s || [])).next());
                                })
                              );
                            })(
                              z(z(z({}, c), e), {
                                loaderName: "getInitialProps",
                              })
                            ),
                          ]
                        );
                      case 3:
                        return [2, z.apply(void 0, n.concat([o.sent()]))];
                    }
                  });
                }),
                new (n || (n = Promise))(function (a, e) {
                  function r(a) {
                    try {
                      i(o.next(a));
                    } catch (a) {
                      e(a);
                    }
                  }
                  function t(a) {
                    try {
                      i(o.throw(a));
                    } catch (a) {
                      e(a);
                    }
                  }
                  function i(e) {
                    var c;
                    e.done
                      ? a(e.value)
                      : ((c = e.value) instanceof n
                          ? c
                          : new n(function (a) {
                              a(c);
                            })
                        ).then(r, t);
                  }
                  i((o = o.apply(c, s || [])).next());
                })
              );
            }),
          s
        );
      }
    },
    55874: (a, e, r) => {
      a.exports = r(91835);
    },
    56709: (a, e, r) => {
      a.exports = r(17398);
    },
    57536: () => {},
    65216: (a, e, r) => {
      "use strict";
      r.r(e), r.d(e, { default: () => _ });
      var t = r(66162),
        c = r(73115),
        s = r(55071),
        n = r(66833);
      r(44922);
      var o = r(72823),
        i = r.n(o);
      r(57536);
      var h = r(34013);
      let m = (a) => {
          let { googleTagManagerId: e } = a;
          return (0, t.jsx)(i(), {
            id: "gtm",
            strategy: "afterInteractive",
            dangerouslySetInnerHTML: {
              __html:
                "\n      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','".concat(
                  e,
                  "');\n      "
                ),
            },
          });
        },
        u = (a) => {
          let { googleTagManagerId: e } = a;
          return (0, t.jsx)(i(), {
            id: "gtm2",
            strategy: "afterInteractive",
            dangerouslySetInnerHTML: {
              __html:
                "\n      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer','".concat(
                  e,
                  "');\n      "
                ),
            },
          });
        },
        l = (a) => {
          let {} = a;
          return (0, t.jsx)("script", {});
        };
      var j = r(56709),
        f = r.n(j),
        d = r(69996),
        k = r(12350),
        p = r(48102),
        v = r.n(p);
      let g = () => {
          let a,
            e,
            { t: r, lang: c } = (0, d.A)("common");
          switch (c) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              a = "en";
              break;
            default:
              a = c;
          }
          switch (c) {
            case "ja-jp":
              e = "";
              break;
            case "en-us":
              e = "ft-gl ft-pp-us";
              break;
            case "en-asia":
            case "zh-hant":
            case "zh-hans":
            case "ko-kr":
              e = "ft-gl ft-pp-asia";
              break;
            default:
              e = "ft-gl";
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                id: "wrapper",
                className: v().wrapper,
                children: [
                  (0, t.jsx)(k.A, {
                    pageTitle: r("[t]title"),
                    pageDescription: r("[t]description"),
                  }),
                  (0, t.jsx)("article", {
                    className: v().error,
                    children: (0, t.jsxs)("div", {
                      className: v().inner,
                      children: [
                        (0, t.jsx)("p", {
                          className: v().logo,
                          children: (0, t.jsx)(f(), {
                            src: "/6/assets/images/series/logo_404.png",
                            width: "334",
                            height: "162",
                            layout: "responsive",
                            alt: "",
                            unoptimized: !0,
                          }),
                        }),
                        (0, t.jsx)("h1", { children: "403" }),
                        (0, t.jsx)("h2", {
                          dangerouslySetInnerHTML: {
                            __html: "".concat(r("[t]403_title")),
                          },
                        }),
                        (0, t.jsx)("p", {
                          className: v().text,
                          dangerouslySetInnerHTML: {
                            __html: "".concat(r("[t]403_text")),
                          },
                        }),
                        (0, t.jsxs)("ul", {
                          className: v().btnarea,
                          children: [
                            (0, t.jsxs)("li", {
                              className: v().six,
                              children: [
                                (0, t.jsx)("span", {
                                  className: v().image,
                                  children: (0, t.jsx)(f(), {
                                    src: "/6/assets/images/common/logo.png",
                                    width: "255",
                                    height: "41",
                                    layout: "responsive",
                                    alt: "",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "/6/".concat(c),
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: r("[t]links_sf6"),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: v().bbc,
                              children: [
                                (0, t.jsx)("span", {
                                  className: v().image,
                                  children: (0, t.jsx)(f(), {
                                    src: "/6/assets/images/series/logo_buckler".concat(
                                      "ja-jp" === c ? "_ja" : "",
                                      ".png"
                                    ),
                                    width: "544",
                                    height: "178",
                                    layout: "responsive",
                                    alt: "",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "/6/buckler/".concat(a),
                                  dangerouslySetInnerHTML: {
                                    __html: "".concat(r("[t]links_bbc")),
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: v().series_top,
                          children: (0, t.jsx)("a", {
                            href: "ja-jp" === c ? "/ja" : "/en",
                            target: "_blank",
                            rel: "noreferrer",
                            children: r("[t]links_series"),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: v().bg,
                    children: [
                      (0, t.jsxs)("div", {
                        className: v().bg_sf,
                        children: [
                          (0, t.jsx)("span", { className: v().top }),
                          (0, t.jsx)("span", { className: v().btm }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: v().bg_left,
                        children: (0, t.jsx)("span", {}),
                      }),
                      (0, t.jsx)("div", {
                        className: v().bg_right,
                        children: (0, t.jsx)("span", {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("footer", { id: "title_footer", className: e }),
            ],
          });
        },
        b = () => {
          let a,
            { t: e, lang: r } = (0, d.A)("common");
          switch (r) {
            case "en-us":
            case "en-uk":
            case "en-asia":
              a = "en";
              break;
            default:
              a = r;
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                id: "wrapper",
                className: v().wrapper,
                children: [
                  (0, t.jsx)(k.A, {
                    pageTitle: e("[t]title"),
                    pageDescription: e("[t]description"),
                  }),
                  (0, t.jsx)("article", {
                    className: v().error,
                    children: (0, t.jsxs)("div", {
                      className: v().inner,
                      children: [
                        (0, t.jsx)("p", {
                          className: v().logo,
                          children: (0, t.jsx)(f(), {
                            src: "/6/assets/images/series/logo_404.png",
                            width: "334",
                            height: "162",
                            layout: "responsive",
                            alt: "",
                            unoptimized: !0,
                          }),
                        }),
                        (0, t.jsx)("h1", {
                          className: v().maintenance,
                          children: e("[t]maintenance_title"),
                        }),
                        (0, t.jsx)("p", {
                          className: v().text,
                          dangerouslySetInnerHTML: {
                            __html: "".concat(e("[t]maintenance_text")),
                          },
                        }),
                        (0, t.jsxs)("ul", {
                          className: v().btnarea,
                          children: [
                            (0, t.jsxs)("li", {
                              className: v().six,
                              children: [
                                (0, t.jsx)("span", {
                                  className: v().image,
                                  children: (0, t.jsx)(f(), {
                                    src: "/6/assets/images/common/logo.png",
                                    width: "255",
                                    height: "41",
                                    layout: "responsive",
                                    alt: "",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "/6/".concat(r),
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: e("[t]links_sf6"),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("li", {
                              className: v().bbc,
                              children: [
                                (0, t.jsx)("span", {
                                  className: v().image,
                                  children: (0, t.jsx)(f(), {
                                    src: "/6/assets/images/series/logo_buckler".concat(
                                      "ja-jp" === r ? "_ja" : "",
                                      ".png"
                                    ),
                                    width: "544",
                                    height: "178",
                                    layout: "responsive",
                                    alt: "",
                                    unoptimized: !0,
                                  }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "/6/buckler/".concat(a),
                                  dangerouslySetInnerHTML: {
                                    __html: "".concat(e("[t]links_bbc")),
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: v().series_top,
                          children: (0, t.jsx)("a", {
                            href: "ja-jp" === r ? "/ja" : "/en",
                            target: "_blank",
                            rel: "noreferrer",
                            children: e("[t]links_series"),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: v().bg,
                    children: [
                      (0, t.jsxs)("div", {
                        className: v().bg_sf,
                        children: [
                          (0, t.jsx)("span", { className: v().top }),
                          (0, t.jsx)("span", { className: v().btm }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: v().bg_left,
                        children: (0, t.jsx)("span", {}),
                      }),
                      (0, t.jsx)("div", {
                        className: v().bg_right,
                        children: (0, t.jsx)("span", {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("footer", {
                id: "title_footer",
                className: "titleFooter",
              }),
            ],
          });
        };
      var y = r(19989);
      let z = () => {
          let a,
            { t: e, lang: r } = (0, d.A)("common");
          switch (r) {
            case "ja-jp":
              a = "";
              break;
            case "en-us":
              a = "ft-gl ft-pp-us";
              break;
            case "en-asia":
            case "zh-hant":
            case "zh-hans":
            case "ko-kr":
              a = "ft-gl ft-pp-asia";
              break;
            default:
              a = "ft-gl";
          }
          return (0, t.jsx)("footer", { id: "title_footer", className: a });
        },
        _ = (0, s.A)(
          function (a) {
            let { Component: e, pageProps: r } = a,
              c = (0, n.useRouter)(),
              [s, o] = (0, h.wc)();
            (0, h.n6)(o, c.query.status);
            let { lang: j } = (0, d.A)("index");
            return "AuthError" === r.errorMessage
              ? (0, t.jsx)(g, {})
              : "Maintenance" === r.errorMessage
              ? (0, t.jsx)(b, {})
              : "PageNotFound" === r.errorMessage
              ? (0, t.jsx)(y.default, {})
              : (0, t.jsxs)(h.Rs.Provider, {
                  value: { state: s, dispatch: o },
                  children: [
                    (0, t.jsx)(l, {}),
                    (0, t.jsx)(m, { googleTagManagerId: "GTM-WSVMG6C" }),
                    (0, t.jsx)(u, { googleTagManagerId: "GTM-MTBFQGT" }),
                    "en-us" == j &&
                      (0, t.jsx)(i(), {
                        id: "cookiebot-custom-consent",
                        type: "text/javascript",
                        dangerouslySetInnerHTML: {
                          __html:
                            "\n            window.addEventListener(\"CookiebotOnAccept\", (e) => {\n              if (Cookiebot.consent.statistics && Cookiebot.consent.preferences && Cookiebot.consent.marketing) {\n                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n                })(window,document,'script','dataLayer','".concat(
                              "GTM-T6N6KW5",
                              "');\n              }\n            });\n            "
                            ),
                        },
                      }),
                    (0, t.jsx)(e, { ...r }),
                    (0, t.jsx)(z, {}),
                  ],
                });
          },
          {
            ...c,
            isLoader: !0,
            skipInitialProps: !0,
            loadLocaleFrom: (a, e) =>
              r(68091)("./".concat(a, "/").concat(e)).then((a) => a.default),
          }
        );
    },
    66833: (a, e, r) => {
      a.exports = r(14226);
    },
    68091: (a, e, r) => {
      var t = {
        "./de": [60791, 60791],
        "./de/": [60791, 60791],
        "./de/character": [62628, 62628],
        "./de/character.json": [62628, 62628],
        "./de/character/aki": [79296, 79296],
        "./de/character/aki.json": [79296, 79296],
        "./de/character/alex": [68463, 68463],
        "./de/character/alex.json": [68463, 68463],
        "./de/character/blanka": [25721, 48102],
        "./de/character/blanka.json": [25721, 48102],
        "./de/character/cammy": [10602, 10602],
        "./de/character/cammy.json": [10602, 10602],
        "./de/character/chunli": [33176, 33176],
        "./de/character/chunli.json": [33176, 33176],
        "./de/character/cviper": [17180, 17180],
        "./de/character/cviper.json": [17180, 17180],
        "./de/character/deejay": [57241, 57241],
        "./de/character/deejay.json": [57241, 57241],
        "./de/character/dhalsim": [10847, 10847],
        "./de/character/dhalsim.json": [10847, 10847],
        "./de/character/ed": [47774, 47774],
        "./de/character/ed.json": [47774, 47774],
        "./de/character/ehonda": [46484, 46484],
        "./de/character/ehonda.json": [46484, 46484],
        "./de/character/elena": [30794, 30794],
        "./de/character/elena.json": [30794, 30794],
        "./de/character/frame/_common": [357, 357],
        "./de/character/frame/_common.json": [357, 357],
        "./de/character/frame/aki": [41890, 41890],
        "./de/character/frame/aki.json": [41890, 41890],
        "./de/character/frame/alex": [40697, 40697],
        "./de/character/frame/alex.json": [40697, 40697],
        "./de/character/frame/blanka": [26692, 26692],
        "./de/character/frame/blanka.json": [26692, 26692],
        "./de/character/frame/cammy": [20620, 20620],
        "./de/character/frame/cammy.json": [20620, 20620],
        "./de/character/frame/chunli": [26146, 26146],
        "./de/character/frame/chunli.json": [26146, 26146],
        "./de/character/frame/cviper": [74018, 74018],
        "./de/character/frame/cviper.json": [74018, 74018],
        "./de/character/frame/deejay": [19263, 19263],
        "./de/character/frame/deejay.json": [19263, 19263],
        "./de/character/frame/dhalsim": [92873, 92873],
        "./de/character/frame/dhalsim.json": [92873, 92873],
        "./de/character/frame/ed": [63152, 40771],
        "./de/character/frame/ed.json": [63152, 40771],
        "./de/character/frame/ehonda": [60790, 60790],
        "./de/character/frame/ehonda.json": [60790, 60790],
        "./de/character/frame/elena": [32524, 32524],
        "./de/character/frame/elena.json": [32524, 32524],
        "./de/character/frame/gouki_akuma": [44938, 44938],
        "./de/character/frame/gouki_akuma.json": [44938, 44938],
        "./de/character/frame/guile": [28121, 28121],
        "./de/character/frame/guile.json": [28121, 28121],
        "./de/character/frame/ingrid": [32322, 32322],
        "./de/character/frame/ingrid.json": [32322, 32322],
        "./de/character/frame/jamie": [75707, 75707],
        "./de/character/frame/jamie.json": [75707, 75707],
        "./de/character/frame/jp": [87691, 87691],
        "./de/character/frame/jp.json": [87691, 87691],
        "./de/character/frame/juri": [23529, 23529],
        "./de/character/frame/juri.json": [23529, 23529],
        "./de/character/frame/ken": [13207, 13207],
        "./de/character/frame/ken.json": [13207, 13207],
        "./de/character/frame/kimberly": [15402, 15402],
        "./de/character/frame/kimberly.json": [15402, 15402],
        "./de/character/frame/lily": [3537, 3537],
        "./de/character/frame/lily.json": [3537, 3537],
        "./de/character/frame/luke": [82646, 82646],
        "./de/character/frame/luke.json": [82646, 82646],
        "./de/character/frame/mai": [45456, 45456],
        "./de/character/frame/mai.json": [45456, 45456],
        "./de/character/frame/manon": [66700, 66700],
        "./de/character/frame/manon.json": [66700, 66700],
        "./de/character/frame/marisa": [52554, 52554],
        "./de/character/frame/marisa.json": [52554, 52554],
        "./de/character/frame/rashid": [13490, 13490],
        "./de/character/frame/rashid.json": [13490, 13490],
        "./de/character/frame/ryu": [79713, 79713],
        "./de/character/frame/ryu.json": [79713, 79713],
        "./de/character/frame/sagat": [96889, 96889],
        "./de/character/frame/sagat.json": [96889, 96889],
        "./de/character/frame/terry": [49495, 49495],
        "./de/character/frame/terry.json": [49495, 49495],
        "./de/character/frame/vega_mbison": [74597, 74597],
        "./de/character/frame/vega_mbison.json": [74597, 74597],
        "./de/character/frame/zangief": [13863, 13863],
        "./de/character/frame/zangief.json": [13863, 13863],
        "./de/character/gouki_akuma": [95440, 95440],
        "./de/character/gouki_akuma.json": [95440, 95440],
        "./de/character/guile": [91855, 91855],
        "./de/character/guile.json": [91855, 91855],
        "./de/character/ingrid": [53276, 53276],
        "./de/character/ingrid.json": [53276, 53276],
        "./de/character/jamie": [85161, 85161],
        "./de/character/jamie.json": [85161, 85161],
        "./de/character/jp": [72237, 72237],
        "./de/character/jp.json": [72237, 72237],
        "./de/character/juri": [26407, 26407],
        "./de/character/juri.json": [26407, 26407],
        "./de/character/ken": [89401, 89401],
        "./de/character/ken.json": [89401, 89401],
        "./de/character/kimberly": [78636, 78636],
        "./de/character/kimberly.json": [78636, 78636],
        "./de/character/lily": [68095, 68095],
        "./de/character/lily.json": [68095, 68095],
        "./de/character/luke": [22952, 22952],
        "./de/character/luke.json": [22952, 22952],
        "./de/character/mai": [7442, 7442],
        "./de/character/mai.json": [7442, 7442],
        "./de/character/manon": [81466, 81466],
        "./de/character/manon.json": [81466, 81466],
        "./de/character/marisa": [43848, 43848],
        "./de/character/marisa.json": [43848, 43848],
        "./de/character/movelist/_common": [46049, 46049],
        "./de/character/movelist/_common.json": [46049, 46049],
        "./de/character/movelist/aki": [38030, 38030],
        "./de/character/movelist/aki.json": [38030, 38030],
        "./de/character/movelist/alex": [79741, 79741],
        "./de/character/movelist/alex.json": [79741, 79741],
        "./de/character/movelist/blanka": [45400, 45400],
        "./de/character/movelist/blanka.json": [45400, 45400],
        "./de/character/movelist/cammy": [36520, 36520],
        "./de/character/movelist/cammy.json": [36520, 36520],
        "./de/character/movelist/chunli": [75358, 75358],
        "./de/character/movelist/chunli.json": [75358, 75358],
        "./de/character/movelist/cviper": [61590, 61590],
        "./de/character/movelist/cviper.json": [61590, 61590],
        "./de/character/movelist/deejay": [89643, 89643],
        "./de/character/movelist/deejay.json": [89643, 89643],
        "./de/character/movelist/dhalsim": [38173, 38173],
        "./de/character/movelist/dhalsim.json": [38173, 38173],
        "./de/character/movelist/ed": [1412, 1412],
        "./de/character/movelist/ed.json": [1412, 1412],
        "./de/character/movelist/ehonda": [69450, 69450],
        "./de/character/movelist/ehonda.json": [69450, 69450],
        "./de/character/movelist/elena": [25592, 25592],
        "./de/character/movelist/elena.json": [25592, 25592],
        "./de/character/movelist/gouki_akuma": [23286, 23286],
        "./de/character/movelist/gouki_akuma.json": [23286, 23286],
        "./de/character/movelist/guile": [97653, 97653],
        "./de/character/movelist/guile.json": [97653, 97653],
        "./de/character/movelist/ingrid": [45598, 45598],
        "./de/character/movelist/ingrid.json": [45598, 45598],
        "./de/character/movelist/jamie": [8071, 8071],
        "./de/character/movelist/jamie.json": [8071, 8071],
        "./de/character/movelist/jp": [42767, 42767],
        "./de/character/movelist/jp.json": [42767, 42767],
        "./de/character/movelist/juri": [63269, 63269],
        "./de/character/movelist/juri.json": [63269, 63269],
        "./de/character/movelist/ken": [34675, 34675],
        "./de/character/movelist/ken.json": [34675, 34675],
        "./de/character/movelist/kimberly": [64358, 64358],
        "./de/character/movelist/kimberly.json": [64358, 64358],
        "./de/character/movelist/lily": [74725, 74725],
        "./de/character/movelist/lily.json": [74725, 74725],
        "./de/character/movelist/luke": [31506, 31506],
        "./de/character/movelist/luke.json": [31506, 31506],
        "./de/character/movelist/mai": [25684, 25684],
        "./de/character/movelist/mai.json": [25684, 25684],
        "./de/character/movelist/manon": [86040, 86040],
        "./de/character/movelist/manon.json": [86040, 86040],
        "./de/character/movelist/marisa": [41878, 41878],
        "./de/character/movelist/marisa.json": [41878, 41878],
        "./de/character/movelist/rashid": [32510, 32510],
        "./de/character/movelist/rashid.json": [32510, 32510],
        "./de/character/movelist/ryu": [74901, 74901],
        "./de/character/movelist/ryu.json": [74901, 74901],
        "./de/character/movelist/sagat": [21957, 21957],
        "./de/character/movelist/sagat.json": [21957, 21957],
        "./de/character/movelist/terry": [92243, 92243],
        "./de/character/movelist/terry.json": [92243, 92243],
        "./de/character/movelist/vega_mbison": [91561, 91561],
        "./de/character/movelist/vega_mbison.json": [91561, 91561],
        "./de/character/movelist/zangief": [76131, 76131],
        "./de/character/movelist/zangief.json": [76131, 76131],
        "./de/character/outfit/aki": [74404, 74404],
        "./de/character/outfit/aki.json": [74404, 74404],
        "./de/character/outfit/alex": [32219, 32219],
        "./de/character/outfit/alex.json": [32219, 32219],
        "./de/character/outfit/blanka": [73138, 73138],
        "./de/character/outfit/blanka.json": [73138, 73138],
        "./de/character/outfit/cammy": [12318, 12318],
        "./de/character/outfit/cammy.json": [12318, 12318],
        "./de/character/outfit/chunli": [75692, 75692],
        "./de/character/outfit/chunli.json": [75692, 75692],
        "./de/character/outfit/cviper": [9400, 9400],
        "./de/character/outfit/cviper.json": [9400, 9400],
        "./de/character/outfit/deejay": [84221, 84221],
        "./de/character/outfit/deejay.json": [84221, 84221],
        "./de/character/outfit/dhalsim": [6123, 6123],
        "./de/character/outfit/dhalsim.json": [6123, 6123],
        "./de/character/outfit/ed": [45178, 45178],
        "./de/character/outfit/ed.json": [45178, 45178],
        "./de/character/outfit/ehonda": [48544, 48544],
        "./de/character/outfit/ehonda.json": [48544, 48544],
        "./de/character/outfit/elena": [55054, 55054],
        "./de/character/outfit/elena.json": [55054, 55054],
        "./de/character/outfit/gouki_akuma": [95124, 95124],
        "./de/character/outfit/gouki_akuma.json": [95124, 95124],
        "./de/character/outfit/guile": [92883, 92883],
        "./de/character/outfit/guile.json": [92883, 92883],
        "./de/character/outfit/ingrid": [73456, 73456],
        "./de/character/outfit/ingrid.json": [73456, 73456],
        "./de/character/outfit/jamie": [97741, 97741],
        "./de/character/outfit/jamie.json": [97741, 97741],
        "./de/character/outfit/jp": [27817, 27817],
        "./de/character/outfit/jp.json": [27817, 27817],
        "./de/character/outfit/juri": [86507, 86507],
        "./de/character/outfit/juri.json": [86507, 86507],
        "./de/character/outfit/ken": [44605, 44605],
        "./de/character/outfit/ken.json": [44605, 44605],
        "./de/character/outfit/kimberly": [12528, 12528],
        "./de/character/outfit/kimberly.json": [12528, 12528],
        "./de/character/outfit/lily": [81547, 81547],
        "./de/character/outfit/lily.json": [81547, 81547],
        "./de/character/outfit/luke": [64796, 64796],
        "./de/character/outfit/luke.json": [64796, 64796],
        "./de/character/outfit/mai": [53854, 53854],
        "./de/character/outfit/mai.json": [53854, 53854],
        "./de/character/outfit/manon": [75710, 75710],
        "./de/character/outfit/manon.json": [75710, 75710],
        "./de/character/outfit/marisa": [69692, 69692],
        "./de/character/outfit/marisa.json": [69692, 69692],
        "./de/character/outfit/rashid": [67772, 67772],
        "./de/character/outfit/rashid.json": [67772, 67772],
        "./de/character/outfit/ryu": [37747, 37747],
        "./de/character/outfit/ryu.json": [37747, 37747],
        "./de/character/outfit/sagat": [90239, 90239],
        "./de/character/outfit/sagat.json": [90239, 90239],
        "./de/character/outfit/terry": [53333, 53333],
        "./de/character/outfit/terry.json": [53333, 53333],
        "./de/character/outfit/vega_mbison": [41095, 41095],
        "./de/character/outfit/vega_mbison.json": [41095, 41095],
        "./de/character/outfit/zangief": [85181, 85181],
        "./de/character/outfit/zangief.json": [85181, 85181],
        "./de/character/rashid": [9832, 9832],
        "./de/character/rashid.json": [9832, 9832],
        "./de/character/ryu": [37191, 37191],
        "./de/character/ryu.json": [37191, 37191],
        "./de/character/sagat": [5323, 5323],
        "./de/character/sagat.json": [5323, 5323],
        "./de/character/terry": [94065, 94065],
        "./de/character/terry.json": [94065, 94065],
        "./de/character/vega_mbison": [2587, 2587],
        "./de/character/vega_mbison.json": [2587, 2587],
        "./de/character/zangief": [93369, 93369],
        "./de/character/zangief.json": [93369, 93369],
        "./de/column": [36153, 36153],
        "./de/column.json": [36153, 36153],
        "./de/common": [54698, 54698],
        "./de/common.json": [54698, 54698],
        "./de/concept": [5043, 5043],
        "./de/concept.json": [5043, 5043],
        "./de/demo": [16404, 16404],
        "./de/demo.json": [16404, 16404],
        "./de/guide": [9859, 9859],
        "./de/guide.json": [9859, 9859],
        "./de/index": [60791, 60791],
        "./de/index.json": [60791, 60791],
        "./de/live": [58305, 58305],
        "./de/live.json": [58305, 58305],
        "./de/mode/battlehub": [3286, 3286],
        "./de/mode/battlehub.json": [3286, 3286],
        "./de/mode/fightingground": [29358, 29358],
        "./de/mode/fightingground.json": [29358, 29358],
        "./de/mode/worldtour": [49097, 49097],
        "./de/mode/worldtour.json": [49097, 49097],
        "./de/news": [70396, 70396],
        "./de/news.json": [70396, 70396],
        "./de/product": [1312, 1312],
        "./de/product.json": [1312, 1312],
        "./en-asia": [36720, 36720],
        "./en-asia/": [36720, 36720],
        "./en-asia/character": [99579, 99579],
        "./en-asia/character.json": [99579, 99579],
        "./en-asia/character/aki": [23887, 23887],
        "./en-asia/character/aki.json": [23887, 23887],
        "./en-asia/character/alex": [99958, 99958],
        "./en-asia/character/alex.json": [99958, 99958],
        "./en-asia/character/blanka": [92615, 92615],
        "./en-asia/character/blanka.json": [92615, 92615],
        "./en-asia/character/cammy": [8545, 8545],
        "./en-asia/character/cammy.json": [8545, 8545],
        "./en-asia/character/chunli": [65105, 65105],
        "./en-asia/character/chunli.json": [65105, 65105],
        "./en-asia/character/cviper": [11493, 11493],
        "./en-asia/character/cviper.json": [11493, 11493],
        "./en-asia/character/deejay": [86572, 86572],
        "./en-asia/character/deejay.json": [86572, 86572],
        "./en-asia/character/dhalsim": [79900, 79900],
        "./en-asia/character/dhalsim.json": [79900, 79900],
        "./en-asia/character/ed": [18687, 18687],
        "./en-asia/character/ed.json": [18687, 18687],
        "./en-asia/character/ehonda": [20733, 20733],
        "./en-asia/character/ehonda.json": [20733, 20733],
        "./en-asia/character/elena": [57589, 57589],
        "./en-asia/character/elena.json": [57589, 57589],
        "./en-asia/character/frame/_common": [33250, 33250],
        "./en-asia/character/frame/_common.json": [33250, 33250],
        "./en-asia/character/frame/aki": [8401, 8401],
        "./en-asia/character/frame/aki.json": [8401, 8401],
        "./en-asia/character/frame/alex": [94704, 94704],
        "./en-asia/character/frame/alex.json": [94704, 94704],
        "./en-asia/character/frame/blanka": [74325, 74325],
        "./en-asia/character/frame/blanka.json": [74325, 74325],
        "./en-asia/character/frame/cammy": [23539, 23539],
        "./en-asia/character/frame/cammy.json": [23539, 23539],
        "./en-asia/character/frame/chunli": [57859, 57859],
        "./en-asia/character/frame/chunli.json": [57859, 57859],
        "./en-asia/character/frame/cviper": [89051, 89051],
        "./en-asia/character/frame/cviper.json": [89051, 89051],
        "./en-asia/character/frame/deejay": [96090, 96090],
        "./en-asia/character/frame/deejay.json": [96090, 96090],
        "./en-asia/character/frame/dhalsim": [85654, 85654],
        "./en-asia/character/frame/dhalsim.json": [85654, 85654],
        "./en-asia/character/frame/ed": [38801, 38801],
        "./en-asia/character/frame/ed.json": [38801, 38801],
        "./en-asia/character/frame/ehonda": [38615, 38615],
        "./en-asia/character/frame/ehonda.json": [38615, 38615],
        "./en-asia/character/frame/elena": [20311, 20311],
        "./en-asia/character/frame/elena.json": [20311, 20311],
        "./en-asia/character/frame/gouki_akuma": [78941, 78941],
        "./en-asia/character/frame/gouki_akuma.json": [78941, 78941],
        "./en-asia/character/frame/guile": [63318, 63318],
        "./en-asia/character/frame/guile.json": [63318, 63318],
        "./en-asia/character/frame/ingrid": [35595, 35595],
        "./en-asia/character/frame/ingrid.json": [35595, 35595],
        "./en-asia/character/frame/jamie": [50236, 50236],
        "./en-asia/character/frame/jamie.json": [50236, 50236],
        "./en-asia/character/frame/jp": [40018, 40018],
        "./en-asia/character/frame/jp.json": [40018, 40018],
        "./en-asia/character/frame/juri": [20120, 20120],
        "./en-asia/character/frame/juri.json": [20120, 20120],
        "./en-asia/character/frame/ken": [94476, 94476],
        "./en-asia/character/frame/ken.json": [94476, 94476],
        "./en-asia/character/frame/kimberly": [1555, 1555],
        "./en-asia/character/frame/kimberly.json": [1555, 1555],
        "./en-asia/character/frame/lily": [65728, 65728],
        "./en-asia/character/frame/lily.json": [65728, 65728],
        "./en-asia/character/frame/luke": [21911, 21911],
        "./en-asia/character/frame/luke.json": [21911, 21911],
        "./en-asia/character/frame/mai": [11107, 11107],
        "./en-asia/character/frame/mai.json": [11107, 11107],
        "./en-asia/character/frame/manon": [67711, 67711],
        "./en-asia/character/frame/manon.json": [67711, 67711],
        "./en-asia/character/frame/marisa": [97935, 97935],
        "./en-asia/character/frame/marisa.json": [97935, 97935],
        "./en-asia/character/frame/rashid": [4919, 4919],
        "./en-asia/character/frame/rashid.json": [4919, 4919],
        "./en-asia/character/frame/ryu": [62574, 62574],
        "./en-asia/character/frame/ryu.json": [62574, 62574],
        "./en-asia/character/frame/sagat": [49234, 49234],
        "./en-asia/character/frame/sagat.json": [49234, 49234],
        "./en-asia/character/frame/terry": [90464, 90464],
        "./en-asia/character/frame/terry.json": [90464, 90464],
        "./en-asia/character/frame/vega_mbison": [81606, 81606],
        "./en-asia/character/frame/vega_mbison.json": [81606, 81606],
        "./en-asia/character/frame/zangief": [64816, 64816],
        "./en-asia/character/frame/zangief.json": [64816, 64816],
        "./en-asia/character/gouki_akuma": [73059, 73059],
        "./en-asia/character/gouki_akuma.json": [73059, 73059],
        "./en-asia/character/guile": [71044, 48663],
        "./en-asia/character/guile.json": [71044, 48663],
        "./en-asia/character/ingrid": [91821, 91821],
        "./en-asia/character/ingrid.json": [91821, 91821],
        "./en-asia/character/jamie": [15154, 15154],
        "./en-asia/character/jamie.json": [15154, 15154],
        "./en-asia/character/jp": [94732, 94732],
        "./en-asia/character/jp.json": [94732, 94732],
        "./en-asia/character/juri": [41238, 41238],
        "./en-asia/character/juri.json": [41238, 41238],
        "./en-asia/character/ken": [71294, 71294],
        "./en-asia/character/ken.json": [71294, 71294],
        "./en-asia/character/kimberly": [59757, 59757],
        "./en-asia/character/kimberly.json": [59757, 59757],
        "./en-asia/character/lily": [48054, 48054],
        "./en-asia/character/lily.json": [48054, 48054],
        "./en-asia/character/luke": [60385, 60385],
        "./en-asia/character/luke.json": [60385, 60385],
        "./en-asia/character/mai": [19069, 19069],
        "./en-asia/character/mai.json": [19069, 19069],
        "./en-asia/character/manon": [10181, 10181],
        "./en-asia/character/manon.json": [10181, 10181],
        "./en-asia/character/marisa": [43493, 43493],
        "./en-asia/character/marisa.json": [43493, 43493],
        "./en-asia/character/movelist/_common": [85216, 85216],
        "./en-asia/character/movelist/_common.json": [85216, 85216],
        "./en-asia/character/movelist/aki": [5479, 5479],
        "./en-asia/character/movelist/aki.json": [5479, 5479],
        "./en-asia/character/movelist/alex": [70174, 70174],
        "./en-asia/character/movelist/alex.json": [70174, 70174],
        "./en-asia/character/movelist/blanka": [84991, 84991],
        "./en-asia/character/movelist/blanka.json": [84991, 84991],
        "./en-asia/character/movelist/cammy": [53481, 53481],
        "./en-asia/character/movelist/cammy.json": [53481, 53481],
        "./en-asia/character/movelist/chunli": [33305, 33305],
        "./en-asia/character/movelist/chunli.json": [33305, 33305],
        "./en-asia/character/movelist/cviper": [78525, 78525],
        "./en-asia/character/movelist/cviper.json": [78525, 78525],
        "./en-asia/character/movelist/deejay": [32084, 32084],
        "./en-asia/character/movelist/deejay.json": [32084, 32084],
        "./en-asia/character/movelist/dhalsim": [62228, 62228],
        "./en-asia/character/movelist/dhalsim.json": [62228, 62228],
        "./en-asia/character/movelist/ed": [98695, 98695],
        "./en-asia/character/movelist/ed.json": [98695, 98695],
        "./en-asia/character/movelist/ehonda": [5109, 5109],
        "./en-asia/character/movelist/ehonda.json": [5109, 5109],
        "./en-asia/character/movelist/elena": [28941, 28941],
        "./en-asia/character/movelist/elena.json": [28941, 28941],
        "./en-asia/character/movelist/gouki_akuma": [25339, 25339],
        "./en-asia/character/movelist/gouki_akuma.json": [25339, 25339],
        "./en-asia/character/movelist/guile": [98524, 98524],
        "./en-asia/character/movelist/guile.json": [98524, 98524],
        "./en-asia/character/movelist/ingrid": [46181, 46181],
        "./en-asia/character/movelist/ingrid.json": [46181, 46181],
        "./en-asia/character/movelist/jamie": [70138, 70138],
        "./en-asia/character/movelist/jamie.json": [70138, 70138],
        "./en-asia/character/movelist/jp": [98564, 98564],
        "./en-asia/character/movelist/jp.json": [98564, 98564],
        "./en-asia/character/movelist/juri": [12926, 12926],
        "./en-asia/character/movelist/juri.json": [12926, 12926],
        "./en-asia/character/movelist/ken": [67958, 67958],
        "./en-asia/character/movelist/ken.json": [67958, 67958],
        "./en-asia/character/movelist/kimberly": [66085, 66085],
        "./en-asia/character/movelist/kimberly.json": [66085, 66085],
        "./en-asia/character/movelist/lily": [98270, 98270],
        "./en-asia/character/movelist/lily.json": [98270, 98270],
        "./en-asia/character/movelist/luke": [27753, 27753],
        "./en-asia/character/movelist/luke.json": [27753, 27753],
        "./en-asia/character/movelist/mai": [39253, 39253],
        "./en-asia/character/movelist/mai.json": [39253, 39253],
        "./en-asia/character/movelist/manon": [25597, 25597],
        "./en-asia/character/movelist/manon.json": [25597, 25597],
        "./en-asia/character/movelist/marisa": [77997, 77997],
        "./en-asia/character/movelist/marisa.json": [77997, 77997],
        "./en-asia/character/movelist/rashid": [40901, 40901],
        "./en-asia/character/movelist/rashid.json": [40901, 40901],
        "./en-asia/character/movelist/ryu": [28132, 28132],
        "./en-asia/character/movelist/ryu.json": [28132, 28132],
        "./en-asia/character/movelist/sagat": [63748, 63748],
        "./en-asia/character/movelist/sagat.json": [63748, 63748],
        "./en-asia/character/movelist/terry": [43754, 43754],
        "./en-asia/character/movelist/terry.json": [43754, 43754],
        "./en-asia/character/movelist/vega_mbison": [22700, 22700],
        "./en-asia/character/movelist/vega_mbison.json": [22700, 22700],
        "./en-asia/character/movelist/zangief": [60026, 60026],
        "./en-asia/character/movelist/zangief.json": [60026, 60026],
        "./en-asia/character/outfit/aki": [53349, 53349],
        "./en-asia/character/outfit/aki.json": [53349, 53349],
        "./en-asia/character/outfit/alex": [70892, 70892],
        "./en-asia/character/outfit/alex.json": [70892, 70892],
        "./en-asia/character/outfit/blanka": [11201, 11201],
        "./en-asia/character/outfit/blanka.json": [11201, 11201],
        "./en-asia/character/outfit/cammy": [39719, 39719],
        "./en-asia/character/outfit/cammy.json": [39719, 39719],
        "./en-asia/character/outfit/chunli": [967, 967],
        "./en-asia/character/outfit/chunli.json": [967, 967],
        "./en-asia/character/outfit/cviper": [81847, 81847],
        "./en-asia/character/outfit/cviper.json": [81847, 81847],
        "./en-asia/character/outfit/deejay": [79246, 79246],
        "./en-asia/character/outfit/deejay.json": [79246, 79246],
        "./en-asia/character/outfit/dhalsim": [82258, 82258],
        "./en-asia/character/outfit/dhalsim.json": [82258, 82258],
        "./en-asia/character/outfit/ed": [37277, 37277],
        "./en-asia/character/outfit/ed.json": [37277, 37277],
        "./en-asia/character/outfit/ehonda": [67187, 67187],
        "./en-asia/character/outfit/ehonda.json": [67187, 67187],
        "./en-asia/character/outfit/elena": [891, 891],
        "./en-asia/character/outfit/elena.json": [891, 891],
        "./en-asia/character/outfit/gouki_akuma": [67841, 67841],
        "./en-asia/character/outfit/gouki_akuma.json": [67841, 67841],
        "./en-asia/character/outfit/guile": [94714, 94714],
        "./en-asia/character/outfit/guile.json": [94714, 94714],
        "./en-asia/character/outfit/ingrid": [5183, 5183],
        "./en-asia/character/outfit/ingrid.json": [5183, 5183],
        "./en-asia/character/outfit/jamie": [98352, 98352],
        "./en-asia/character/outfit/jamie.json": [98352, 98352],
        "./en-asia/character/outfit/jp": [42830, 42830],
        "./en-asia/character/outfit/jp.json": [42830, 42830],
        "./en-asia/character/outfit/juri": [94428, 94428],
        "./en-asia/character/outfit/juri.json": [94428, 94428],
        "./en-asia/character/outfit/ken": [78480, 78480],
        "./en-asia/character/outfit/ken.json": [78480, 78480],
        "./en-asia/character/outfit/kimberly": [6119, 6119],
        "./en-asia/character/outfit/kimberly.json": [6119, 6119],
        "./en-asia/character/outfit/lily": [15692, 15692],
        "./en-asia/character/outfit/lily.json": [15692, 15692],
        "./en-asia/character/outfit/luke": [7259, 7259],
        "./en-asia/character/outfit/luke.json": [7259, 7259],
        "./en-asia/character/outfit/mai": [30863, 30863],
        "./en-asia/character/outfit/mai.json": [30863, 30863],
        "./en-asia/character/outfit/manon": [53091, 53091],
        "./en-asia/character/outfit/manon.json": [53091, 53091],
        "./en-asia/character/outfit/marisa": [35651, 35651],
        "./en-asia/character/outfit/marisa.json": [35651, 35651],
        "./en-asia/character/outfit/rashid": [87499, 87499],
        "./en-asia/character/outfit/rashid.json": [87499, 87499],
        "./en-asia/character/outfit/ryu": [25098, 25098],
        "./en-asia/character/outfit/ryu.json": [25098, 25098],
        "./en-asia/character/outfit/sagat": [3190, 3190],
        "./en-asia/character/outfit/sagat.json": [3190, 3190],
        "./en-asia/character/outfit/terry": [34676, 34676],
        "./en-asia/character/outfit/terry.json": [34676, 34676],
        "./en-asia/character/outfit/vega_mbison": [37538, 37538],
        "./en-asia/character/outfit/vega_mbison.json": [37538, 37538],
        "./en-asia/character/outfit/zangief": [65428, 65428],
        "./en-asia/character/outfit/zangief.json": [65428, 65428],
        "./en-asia/character/rashid": [27741, 27741],
        "./en-asia/character/rashid.json": [27741, 27741],
        "./en-asia/character/ryu": [89468, 89468],
        "./en-asia/character/ryu.json": [89468, 89468],
        "./en-asia/character/sagat": [44620, 44620],
        "./en-asia/character/sagat.json": [44620, 44620],
        "./en-asia/character/terry": [34786, 34786],
        "./en-asia/character/terry.json": [34786, 34786],
        "./en-asia/character/vega_mbison": [68964, 68964],
        "./en-asia/character/vega_mbison.json": [68964, 68964],
        "./en-asia/character/zangief": [60722, 60722],
        "./en-asia/character/zangief.json": [60722, 60722],
        "./en-asia/column": [13184, 13184],
        "./en-asia/column.json": [13184, 13184],
        "./en-asia/common": [68411, 68411],
        "./en-asia/common.json": [68411, 68411],
        "./en-asia/concept": [79180, 79180],
        "./en-asia/concept.json": [79180, 79180],
        "./en-asia/demo": [93609, 93609],
        "./en-asia/demo.json": [93609, 93609],
        "./en-asia/guide": [26208, 26208],
        "./en-asia/guide.json": [26208, 26208],
        "./en-asia/index": [36720, 36720],
        "./en-asia/index.json": [36720, 36720],
        "./en-asia/live": [39144, 39144],
        "./en-asia/live.json": [39144, 39144],
        "./en-asia/mode/battlehub": [78075, 78075],
        "./en-asia/mode/battlehub.json": [78075, 78075],
        "./en-asia/mode/fightingground": [37709, 37709],
        "./en-asia/mode/fightingground.json": [37709, 37709],
        "./en-asia/mode/worldtour": [26052, 26052],
        "./en-asia/mode/worldtour.json": [26052, 26052],
        "./en-asia/news": [77009, 77009],
        "./en-asia/news.json": [77009, 77009],
        "./en-asia/product": [59747, 59747],
        "./en-asia/product.json": [59747, 59747],
        "./en-uk": [38918, 38918],
        "./en-uk/": [38918, 38918],
        "./en-uk/character": [8429, 8429],
        "./en-uk/character.json": [8429, 8429],
        "./en-uk/character/aki": [89825, 89825],
        "./en-uk/character/aki.json": [89825, 89825],
        "./en-uk/character/alex": [56512, 56512],
        "./en-uk/character/alex.json": [56512, 56512],
        "./en-uk/character/blanka": [2277, 2277],
        "./en-uk/character/blanka.json": [2277, 2277],
        "./en-uk/character/cammy": [40995, 63376],
        "./en-uk/character/cammy.json": [40995, 63376],
        "./en-uk/character/chunli": [35827, 35827],
        "./en-uk/character/chunli.json": [35827, 35827],
        "./en-uk/character/cviper": [68779, 68779],
        "./en-uk/character/cviper.json": [68779, 68779],
        "./en-uk/character/deejay": [88330, 88330],
        "./en-uk/character/deejay.json": [88330, 88330],
        "./en-uk/character/dhalsim": [52934, 52934],
        "./en-uk/character/dhalsim.json": [52934, 52934],
        "./en-uk/character/ed": [43809, 43809],
        "./en-uk/character/ed.json": [43809, 43809],
        "./en-uk/character/ehonda": [21159, 21159],
        "./en-uk/character/ehonda.json": [21159, 21159],
        "./en-uk/character/elena": [52903, 52903],
        "./en-uk/character/elena.json": [52903, 52903],
        "./en-uk/character/frame/_common": [23056, 23056],
        "./en-uk/character/frame/_common.json": [23056, 23056],
        "./en-uk/character/frame/aki": [73111, 73111],
        "./en-uk/character/frame/aki.json": [73111, 73111],
        "./en-uk/character/frame/alex": [67918, 67918],
        "./en-uk/character/frame/alex.json": [67918, 67918],
        "./en-uk/character/frame/blanka": [10991, 10991],
        "./en-uk/character/frame/blanka.json": [10991, 10991],
        "./en-uk/character/frame/cammy": [93849, 93849],
        "./en-uk/character/frame/cammy.json": [93849, 93849],
        "./en-uk/character/frame/chunli": [60969, 60969],
        "./en-uk/character/frame/chunli.json": [60969, 60969],
        "./en-uk/character/frame/cviper": [62957, 62957],
        "./en-uk/character/frame/cviper.json": [62957, 62957],
        "./en-uk/character/frame/deejay": [27716, 5335],
        "./en-uk/character/frame/deejay.json": [27716, 5335],
        "./en-uk/character/frame/dhalsim": [48068, 48068],
        "./en-uk/character/frame/dhalsim.json": [48068, 48068],
        "./en-uk/character/frame/ed": [55735, 55735],
        "./en-uk/character/frame/ed.json": [55735, 55735],
        "./en-uk/character/frame/ehonda": [10277, 10277],
        "./en-uk/character/frame/ehonda.json": [10277, 10277],
        "./en-uk/character/frame/elena": [86301, 86301],
        "./en-uk/character/frame/elena.json": [86301, 86301],
        "./en-uk/character/frame/gouki_akuma": [12747, 12747],
        "./en-uk/character/frame/gouki_akuma.json": [12747, 12747],
        "./en-uk/character/frame/guile": [69804, 69804],
        "./en-uk/character/frame/guile.json": [69804, 69804],
        "./en-uk/character/frame/ingrid": [57141, 57141],
        "./en-uk/character/frame/ingrid.json": [57141, 57141],
        "./en-uk/character/frame/jamie": [90666, 90666],
        "./en-uk/character/frame/jamie.json": [90666, 90666],
        "./en-uk/character/frame/jp": [58420, 58420],
        "./en-uk/character/frame/jp.json": [58420, 58420],
        "./en-uk/character/frame/juri": [25614, 25614],
        "./en-uk/character/frame/juri.json": [25614, 25614],
        "./en-uk/character/frame/ken": [86758, 86758],
        "./en-uk/character/frame/ken.json": [86758, 86758],
        "./en-uk/character/frame/kimberly": [62261, 62261],
        "./en-uk/character/frame/kimberly.json": [62261, 62261],
        "./en-uk/character/frame/lily": [85262, 85262],
        "./en-uk/character/frame/lily.json": [85262, 85262],
        "./en-uk/character/frame/luke": [19673, 19673],
        "./en-uk/character/frame/luke.json": [19673, 19673],
        "./en-uk/character/frame/mai": [55845, 55845],
        "./en-uk/character/frame/mai.json": [55845, 55845],
        "./en-uk/character/frame/manon": [59725, 59725],
        "./en-uk/character/frame/manon.json": [59725, 59725],
        "./en-uk/character/frame/marisa": [59485, 59485],
        "./en-uk/character/frame/marisa.json": [59485, 59485],
        "./en-uk/character/frame/rashid": [15797, 15797],
        "./en-uk/character/frame/rashid.json": [15797, 15797],
        "./en-uk/character/frame/ryu": [12116, 12116],
        "./en-uk/character/frame/ryu.json": [12116, 12116],
        "./en-uk/character/frame/sagat": [16852, 16852],
        "./en-uk/character/frame/sagat.json": [16852, 16852],
        "./en-uk/character/frame/terry": [34042, 34042],
        "./en-uk/character/frame/terry.json": [34042, 34042],
        "./en-uk/character/frame/vega_mbison": [40476, 40476],
        "./en-uk/character/frame/vega_mbison.json": [40476, 40476],
        "./en-uk/character/frame/zangief": [72330, 72330],
        "./en-uk/character/frame/zangief.json": [72330, 72330],
        "./en-uk/character/gouki_akuma": [3597, 3597],
        "./en-uk/character/gouki_akuma.json": [3597, 3597],
        "./en-uk/character/guile": [27750, 27750],
        "./en-uk/character/guile.json": [27750, 27750],
        "./en-uk/character/ingrid": [58075, 58075],
        "./en-uk/character/ingrid.json": [58075, 58075],
        "./en-uk/character/jamie": [92428, 92428],
        "./en-uk/character/jamie.json": [92428, 92428],
        "./en-uk/character/jp": [5218, 5218],
        "./en-uk/character/jp.json": [5218, 5218],
        "./en-uk/character/juri": [33864, 33864],
        "./en-uk/character/juri.json": [33864, 33864],
        "./en-uk/character/ken": [46268, 46268],
        "./en-uk/character/ken.json": [46268, 46268],
        "./en-uk/character/kimberly": [46915, 46915],
        "./en-uk/character/kimberly.json": [46915, 46915],
        "./en-uk/character/lily": [26768, 26768],
        "./en-uk/character/lily.json": [26768, 26768],
        "./en-uk/character/luke": [44199, 44199],
        "./en-uk/character/luke.json": [44199, 44199],
        "./en-uk/character/mai": [14227, 14227],
        "./en-uk/character/mai.json": [14227, 14227],
        "./en-uk/character/manon": [60975, 60975],
        "./en-uk/character/manon.json": [60975, 60975],
        "./en-uk/character/marisa": [13855, 13855],
        "./en-uk/character/marisa.json": [13855, 13855],
        "./en-uk/character/movelist/_common": [87902, 87902],
        "./en-uk/character/movelist/_common.json": [87902, 87902],
        "./en-uk/character/movelist/aki": [72077, 72077],
        "./en-uk/character/movelist/aki.json": [72077, 72077],
        "./en-uk/character/movelist/alex": [67940, 67940],
        "./en-uk/character/movelist/alex.json": [67940, 67940],
        "./en-uk/character/movelist/blanka": [68553, 68553],
        "./en-uk/character/movelist/blanka.json": [68553, 68553],
        "./en-uk/character/movelist/cammy": [80671, 80671],
        "./en-uk/character/movelist/cammy.json": [80671, 80671],
        "./en-uk/character/movelist/chunli": [28191, 28191],
        "./en-uk/character/movelist/chunli.json": [28191, 28191],
        "./en-uk/character/movelist/cviper": [23487, 23487],
        "./en-uk/character/movelist/cviper.json": [23487, 23487],
        "./en-uk/character/movelist/deejay": [40166, 40166],
        "./en-uk/character/movelist/deejay.json": [40166, 40166],
        "./en-uk/character/movelist/dhalsim": [37658, 37658],
        "./en-uk/character/movelist/dhalsim.json": [37658, 37658],
        "./en-uk/character/movelist/ed": [85429, 85429],
        "./en-uk/character/movelist/ed.json": [85429, 85429],
        "./en-uk/character/movelist/ehonda": [8283, 8283],
        "./en-uk/character/movelist/ehonda.json": [8283, 8283],
        "./en-uk/character/movelist/elena": [99491, 99491],
        "./en-uk/character/movelist/elena.json": [99491, 99491],
        "./en-uk/character/movelist/gouki_akuma": [43721, 43721],
        "./en-uk/character/movelist/gouki_akuma.json": [43721, 43721],
        "./en-uk/character/movelist/guile": [77314, 77314],
        "./en-uk/character/movelist/guile.json": [77314, 77314],
        "./en-uk/character/movelist/ingrid": [24039, 24039],
        "./en-uk/character/movelist/ingrid.json": [24039, 24039],
        "./en-uk/character/movelist/jamie": [49064, 49064],
        "./en-uk/character/movelist/jamie.json": [49064, 49064],
        "./en-uk/character/movelist/jp": [75414, 53033],
        "./en-uk/character/movelist/jp.json": [75414, 53033],
        "./en-uk/character/movelist/juri": [35540, 35540],
        "./en-uk/character/movelist/juri.json": [35540, 35540],
        "./en-uk/character/movelist/ken": [52856, 52856],
        "./en-uk/character/movelist/ken.json": [52856, 52856],
        "./en-uk/character/movelist/kimberly": [82831, 82831],
        "./en-uk/character/movelist/kimberly.json": [82831, 82831],
        "./en-uk/character/movelist/lily": [69380, 69380],
        "./en-uk/character/movelist/lily.json": [69380, 69380],
        "./en-uk/character/movelist/luke": [65683, 65683],
        "./en-uk/character/movelist/luke.json": [65683, 65683],
        "./en-uk/character/movelist/mai": [7127, 7127],
        "./en-uk/character/movelist/mai.json": [7127, 7127],
        "./en-uk/character/movelist/manon": [27691, 27691],
        "./en-uk/character/movelist/manon.json": [27691, 27691],
        "./en-uk/character/movelist/marisa": [3835, 3835],
        "./en-uk/character/movelist/marisa.json": [3835, 3835],
        "./en-uk/character/movelist/rashid": [99523, 99523],
        "./en-uk/character/movelist/rashid.json": [99523, 99523],
        "./en-uk/character/movelist/ryu": [20578, 20578],
        "./en-uk/character/movelist/ryu.json": [20578, 20578],
        "./en-uk/character/movelist/sagat": [71422, 71422],
        "./en-uk/character/movelist/sagat.json": [71422, 71422],
        "./en-uk/character/movelist/terry": [35116, 35116],
        "./en-uk/character/movelist/terry.json": [35116, 35116],
        "./en-uk/character/movelist/vega_mbison": [37242, 37242],
        "./en-uk/character/movelist/vega_mbison.json": [37242, 37242],
        "./en-uk/character/movelist/zangief": [90060, 90060],
        "./en-uk/character/movelist/zangief.json": [90060, 90060],
        "./en-uk/character/outfit/aki": [5247, 5247],
        "./en-uk/character/outfit/aki.json": [5247, 5247],
        "./en-uk/character/outfit/alex": [50726, 50726],
        "./en-uk/character/outfit/alex.json": [50726, 50726],
        "./en-uk/character/outfit/blanka": [7639, 7639],
        "./en-uk/character/outfit/blanka.json": [7639, 7639],
        "./en-uk/character/outfit/cammy": [25457, 25457],
        "./en-uk/character/outfit/cammy.json": [25457, 25457],
        "./en-uk/character/outfit/chunli": [32609, 32609],
        "./en-uk/character/outfit/chunli.json": [32609, 32609],
        "./en-uk/character/outfit/cviper": [79861, 79861],
        "./en-uk/character/outfit/cviper.json": [79861, 79861],
        "./en-uk/character/outfit/deejay": [50588, 50588],
        "./en-uk/character/outfit/deejay.json": [50588, 50588],
        "./en-uk/character/outfit/dhalsim": [98316, 98316],
        "./en-uk/character/outfit/dhalsim.json": [98316, 98316],
        "./en-uk/character/outfit/ed": [65391, 65391],
        "./en-uk/character/outfit/ed.json": [65391, 65391],
        "./en-uk/character/outfit/ehonda": [73901, 73901],
        "./en-uk/character/outfit/ehonda.json": [73901, 73901],
        "./en-uk/character/outfit/elena": [42277, 42277],
        "./en-uk/character/outfit/elena.json": [42277, 42277],
        "./en-uk/character/outfit/gouki_akuma": [96787, 96787],
        "./en-uk/character/outfit/gouki_akuma.json": [96787, 96787],
        "./en-uk/character/outfit/guile": [92852, 92852],
        "./en-uk/character/outfit/guile.json": [92852, 92852],
        "./en-uk/character/outfit/ingrid": [91837, 91837],
        "./en-uk/character/outfit/ingrid.json": [91837, 91837],
        "./en-uk/character/outfit/jamie": [86850, 86850],
        "./en-uk/character/outfit/jamie.json": [86850, 86850],
        "./en-uk/character/outfit/jp": [79580, 79580],
        "./en-uk/character/outfit/jp.json": [79580, 79580],
        "./en-uk/character/outfit/juri": [56006, 56006],
        "./en-uk/character/outfit/juri.json": [56006, 56006],
        "./en-uk/character/outfit/ken": [8174, 8174],
        "./en-uk/character/outfit/ken.json": [8174, 8174],
        "./en-uk/character/outfit/kimberly": [35869, 35869],
        "./en-uk/character/outfit/kimberly.json": [35869, 35869],
        "./en-uk/character/outfit/lily": [9062, 9062],
        "./en-uk/character/outfit/lily.json": [9062, 9062],
        "./en-uk/character/outfit/luke": [24721, 24721],
        "./en-uk/character/outfit/luke.json": [24721, 24721],
        "./en-uk/character/outfit/mai": [51149, 51149],
        "./en-uk/character/outfit/mai.json": [51149, 51149],
        "./en-uk/character/outfit/manon": [86613, 86613],
        "./en-uk/character/outfit/manon.json": [86613, 86613],
        "./en-uk/character/outfit/marisa": [11957, 11957],
        "./en-uk/character/outfit/marisa.json": [11957, 11957],
        "./en-uk/character/outfit/rashid": [35277, 35277],
        "./en-uk/character/outfit/rashid.json": [35277, 35277],
        "./en-uk/character/outfit/ryu": [812, 812],
        "./en-uk/character/outfit/ryu.json": [812, 812],
        "./en-uk/character/outfit/sagat": [29596, 29596],
        "./en-uk/character/outfit/sagat.json": [29596, 29596],
        "./en-uk/character/outfit/terry": [73234, 73234],
        "./en-uk/character/outfit/terry.json": [73234, 73234],
        "./en-uk/character/outfit/vega_mbison": [63988, 63988],
        "./en-uk/character/outfit/vega_mbison.json": [63988, 63988],
        "./en-uk/character/outfit/zangief": [98946, 98946],
        "./en-uk/character/outfit/zangief.json": [98946, 98946],
        "./en-uk/character/rashid": [62247, 62247],
        "./en-uk/character/rashid.json": [62247, 62247],
        "./en-uk/character/ryu": [66846, 66846],
        "./en-uk/character/ryu.json": [66846, 66846],
        "./en-uk/character/sagat": [65666, 43285],
        "./en-uk/character/sagat.json": [65666, 43285],
        "./en-uk/character/terry": [48624, 48624],
        "./en-uk/character/terry.json": [48624, 48624],
        "./en-uk/character/vega_mbison": [54742, 54742],
        "./en-uk/character/vega_mbison.json": [54742, 54742],
        "./en-uk/character/zangief": [63008, 63008],
        "./en-uk/character/zangief.json": [63008, 63008],
        "./en-uk/column": [50842, 50842],
        "./en-uk/column.json": [50842, 50842],
        "./en-uk/common": [89329, 89329],
        "./en-uk/common.json": [89329, 89329],
        "./en-uk/concept": [40358, 40358],
        "./en-uk/concept.json": [40358, 40358],
        "./en-uk/demo": [2243, 2243],
        "./en-uk/demo.json": [2243, 2243],
        "./en-uk/guide": [62846, 62846],
        "./en-uk/guide.json": [62846, 62846],
        "./en-uk/index": [38918, 38918],
        "./en-uk/index.json": [38918, 38918],
        "./en-uk/live": [73298, 73298],
        "./en-uk/live.json": [73298, 73298],
        "./en-uk/mode/battlehub": [89489, 89489],
        "./en-uk/mode/battlehub.json": [89489, 89489],
        "./en-uk/mode/fightingground": [703, 703],
        "./en-uk/mode/fightingground.json": [703, 703],
        "./en-uk/mode/worldtour": [33214, 33214],
        "./en-uk/mode/worldtour.json": [33214, 33214],
        "./en-uk/news": [58427, 58427],
        "./en-uk/news.json": [58427, 58427],
        "./en-uk/product": [78761, 78761],
        "./en-uk/product.json": [78761, 78761],
        "./en-us": [54270, 54270],
        "./en-us/": [54270, 54270],
        "./en-us/character": [63685, 63685],
        "./en-us/character.json": [63685, 63685],
        "./en-us/character/aki": [38665, 38665],
        "./en-us/character/aki.json": [38665, 38665],
        "./en-us/character/alex": [87224, 87224],
        "./en-us/character/alex.json": [87224, 87224],
        "./en-us/character/blanka": [96717, 96717],
        "./en-us/character/blanka.json": [96717, 96717],
        "./en-us/character/cammy": [83259, 83259],
        "./en-us/character/cammy.json": [83259, 83259],
        "./en-us/character/chunli": [66603, 66603],
        "./en-us/character/chunli.json": [66603, 66603],
        "./en-us/character/cviper": [91763, 91763],
        "./en-us/character/cviper.json": [91763, 91763],
        "./en-us/character/deejay": [12226, 12226],
        "./en-us/character/deejay.json": [12226, 12226],
        "./en-us/character/dhalsim": [67566, 67566],
        "./en-us/character/dhalsim.json": [67566, 67566],
        "./en-us/character/ed": [52953, 52953],
        "./en-us/character/ed.json": [52953, 52953],
        "./en-us/character/ehonda": [94447, 94447],
        "./en-us/character/ehonda.json": [94447, 94447],
        "./en-us/character/elena": [43055, 43055],
        "./en-us/character/elena.json": [43055, 43055],
        "./en-us/character/frame/_common": [38136, 38136],
        "./en-us/character/frame/_common.json": [38136, 38136],
        "./en-us/character/frame/aki": [4575, 4575],
        "./en-us/character/frame/aki.json": [4575, 4575],
        "./en-us/character/frame/alex": [75526, 75526],
        "./en-us/character/frame/alex.json": [75526, 75526],
        "./en-us/character/frame/blanka": [54647, 54647],
        "./en-us/character/frame/blanka.json": [54647, 54647],
        "./en-us/character/frame/cammy": [68945, 68945],
        "./en-us/character/frame/cammy.json": [68945, 68945],
        "./en-us/character/frame/chunli": [79617, 79617],
        "./en-us/character/frame/chunli.json": [79617, 79617],
        "./en-us/character/frame/cviper": [43221, 43221],
        "./en-us/character/frame/cviper.json": [43221, 43221],
        "./en-us/character/frame/deejay": [97596, 97596],
        "./en-us/character/frame/deejay.json": [97596, 97596],
        "./en-us/character/frame/dhalsim": [4780, 4780],
        "./en-us/character/frame/dhalsim.json": [4780, 4780],
        "./en-us/character/frame/ed": [99567, 99567],
        "./en-us/character/frame/ed.json": [99567, 99567],
        "./en-us/character/frame/ehonda": [37261, 37261],
        "./en-us/character/frame/ehonda.json": [37261, 37261],
        "./en-us/character/frame/elena": [85765, 85765],
        "./en-us/character/frame/elena.json": [85765, 85765],
        "./en-us/character/frame/gouki_akuma": [90259, 12640],
        "./en-us/character/frame/gouki_akuma.json": [90259, 12640],
        "./en-us/character/frame/guile": [52692, 52692],
        "./en-us/character/frame/guile.json": [52692, 52692],
        "./en-us/character/frame/ingrid": [55197, 55197],
        "./en-us/character/frame/ingrid.json": [55197, 55197],
        "./en-us/character/frame/jamie": [46690, 46690],
        "./en-us/character/frame/jamie.json": [46690, 46690],
        "./en-us/character/frame/jp": [13756, 13756],
        "./en-us/character/frame/jp.json": [13756, 13756],
        "./en-us/character/frame/juri": [80806, 80806],
        "./en-us/character/frame/juri.json": [80806, 80806],
        "./en-us/character/frame/ken": [7502, 7502],
        "./en-us/character/frame/ken.json": [7502, 7502],
        "./en-us/character/frame/kimberly": [95613, 95613],
        "./en-us/character/frame/kimberly.json": [95613, 95613],
        "./en-us/character/frame/lily": [33862, 33862],
        "./en-us/character/frame/lily.json": [33862, 33862],
        "./en-us/character/frame/luke": [49521, 49521],
        "./en-us/character/frame/luke.json": [49521, 49521],
        "./en-us/character/frame/mai": [34125, 34125],
        "./en-us/character/frame/mai.json": [34125, 34125],
        "./en-us/character/frame/manon": [30101, 30101],
        "./en-us/character/frame/manon.json": [30101, 30101],
        "./en-us/character/frame/marisa": [75317, 75317],
        "./en-us/character/frame/marisa.json": [75317, 75317],
        "./en-us/character/frame/rashid": [82285, 82285],
        "./en-us/character/frame/rashid.json": [82285, 82285],
        "./en-us/character/frame/ryu": [140, 140],
        "./en-us/character/frame/ryu.json": [140, 140],
        "./en-us/character/frame/sagat": [73084, 73084],
        "./en-us/character/frame/sagat.json": [73084, 73084],
        "./en-us/character/frame/terry": [33074, 33074],
        "./en-us/character/frame/terry.json": [33074, 33074],
        "./en-us/character/frame/vega_mbison": [57460, 57460],
        "./en-us/character/frame/vega_mbison.json": [57460, 57460],
        "./en-us/character/frame/zangief": [5410, 5410],
        "./en-us/character/frame/zangief.json": [5410, 5410],
        "./en-us/character/gouki_akuma": [87861, 87861],
        "./en-us/character/gouki_akuma.json": [87861, 87861],
        "./en-us/character/guile": [61838, 61838],
        "./en-us/character/guile.json": [61838, 61838],
        "./en-us/character/ingrid": [6339, 6339],
        "./en-us/character/ingrid.json": [6339, 6339],
        "./en-us/character/jamie": [88612, 88612],
        "./en-us/character/jamie.json": [88612, 88612],
        "./en-us/character/jp": [66090, 66090],
        "./en-us/character/jp.json": [66090, 66090],
        "./en-us/character/juri": [95424, 95424],
        "./en-us/character/juri.json": [95424, 95424],
        "./en-us/character/ken": [43012, 43012],
        "./en-us/character/ken.json": [43012, 43012],
        "./en-us/character/kimberly": [8907, 8907],
        "./en-us/character/kimberly.json": [8907, 8907],
        "./en-us/character/lily": [70952, 70952],
        "./en-us/character/lily.json": [70952, 70952],
        "./en-us/character/luke": [12703, 12703],
        "./en-us/character/luke.json": [12703, 12703],
        "./en-us/character/mai": [38107, 38107],
        "./en-us/character/mai.json": [38107, 38107],
        "./en-us/character/manon": [20791, 20791],
        "./en-us/character/manon.json": [20791, 20791],
        "./en-us/character/marisa": [22263, 22263],
        "./en-us/character/marisa.json": [22263, 22263],
        "./en-us/character/movelist/_common": [97350, 97350],
        "./en-us/character/movelist/_common.json": [97350, 97350],
        "./en-us/character/movelist/aki": [45717, 45717],
        "./en-us/character/movelist/aki.json": [45717, 45717],
        "./en-us/character/movelist/alex": [29244, 29244],
        "./en-us/character/movelist/alex.json": [29244, 29244],
        "./en-us/character/movelist/blanka": [11185, 11185],
        "./en-us/character/movelist/blanka.json": [11185, 11185],
        "./en-us/character/movelist/cammy": [56983, 56983],
        "./en-us/character/movelist/cammy.json": [56983, 56983],
        "./en-us/character/movelist/chunli": [32727, 32727],
        "./en-us/character/movelist/chunli.json": [32727, 32727],
        "./en-us/character/movelist/cviper": [40903, 40903],
        "./en-us/character/movelist/cviper.json": [40903, 40903],
        "./en-us/character/movelist/deejay": [26366, 26366],
        "./en-us/character/movelist/deejay.json": [26366, 26366],
        "./en-us/character/movelist/dhalsim": [5890, 5890],
        "./en-us/character/movelist/dhalsim.json": [5890, 5890],
        "./en-us/character/movelist/ed": [58957, 58957],
        "./en-us/character/movelist/ed.json": [58957, 58957],
        "./en-us/character/movelist/ehonda": [19171, 19171],
        "./en-us/character/movelist/ehonda.json": [19171, 19171],
        "./en-us/character/movelist/elena": [89227, 89227],
        "./en-us/character/movelist/elena.json": [89227, 89227],
        "./en-us/character/movelist/gouki_akuma": [70801, 70801],
        "./en-us/character/movelist/gouki_akuma.json": [70801, 70801],
        "./en-us/character/movelist/guile": [17418, 17418],
        "./en-us/character/movelist/guile.json": [17418, 17418],
        "./en-us/character/movelist/ingrid": [30447, 30447],
        "./en-us/character/movelist/ingrid.json": [30447, 30447],
        "./en-us/character/movelist/jamie": [34752, 34752],
        "./en-us/character/movelist/jamie.json": [34752, 34752],
        "./en-us/character/movelist/jp": [1982, 1982],
        "./en-us/character/movelist/jp.json": [1982, 1982],
        "./en-us/character/movelist/juri": [9804, 9804],
        "./en-us/character/movelist/juri.json": [9804, 9804],
        "./en-us/character/movelist/ken": [80512, 80512],
        "./en-us/character/movelist/ken.json": [80512, 80512],
        "./en-us/character/movelist/kimberly": [43959, 43959],
        "./en-us/character/movelist/kimberly.json": [43959, 43959],
        "./en-us/character/movelist/lily": [3132, 3132],
        "./en-us/character/movelist/lily.json": [3132, 3132],
        "./en-us/character/movelist/luke": [74635, 74635],
        "./en-us/character/movelist/luke.json": [74635, 74635],
        "./en-us/character/movelist/mai": [28159, 28159],
        "./en-us/character/movelist/mai.json": [28159, 28159],
        "./en-us/character/movelist/manon": [54771, 54771],
        "./en-us/character/movelist/manon.json": [54771, 54771],
        "./en-us/character/movelist/marisa": [82707, 82707],
        "./en-us/character/movelist/marisa.json": [82707, 82707],
        "./en-us/character/movelist/rashid": [56059, 56059],
        "./en-us/character/movelist/rashid.json": [56059, 56059],
        "./en-us/character/movelist/ryu": [15130, 15130],
        "./en-us/character/movelist/ryu.json": [15130, 15130],
        "./en-us/character/movelist/sagat": [34502, 34502],
        "./en-us/character/movelist/sagat.json": [34502, 34502],
        "./en-us/character/movelist/terry": [39620, 39620],
        "./en-us/character/movelist/terry.json": [39620, 39620],
        "./en-us/character/movelist/vega_mbison": [72050, 72050],
        "./en-us/character/movelist/vega_mbison.json": [72050, 72050],
        "./en-us/character/movelist/zangief": [85604, 85604],
        "./en-us/character/movelist/zangief.json": [85604, 85604],
        "./en-us/character/outfit/aki": [89351, 89351],
        "./en-us/character/outfit/aki.json": [89351, 89351],
        "./en-us/character/outfit/alex": [39422, 39422],
        "./en-us/character/outfit/alex.json": [39422, 39422],
        "./en-us/character/outfit/blanka": [19295, 19295],
        "./en-us/character/outfit/blanka.json": [19295, 19295],
        "./en-us/character/outfit/cammy": [77705, 77705],
        "./en-us/character/outfit/cammy.json": [77705, 77705],
        "./en-us/character/outfit/chunli": [48409, 48409],
        "./en-us/character/outfit/chunli.json": [48409, 48409],
        "./en-us/character/outfit/cviper": [53501, 53501],
        "./en-us/character/outfit/cviper.json": [53501, 53501],
        "./en-us/character/outfit/deejay": [24788, 24788],
        "./en-us/character/outfit/deejay.json": [24788, 24788],
        "./en-us/character/outfit/dhalsim": [15892, 15892],
        "./en-us/character/outfit/dhalsim.json": [15892, 15892],
        "./en-us/character/outfit/ed": [73479, 73479],
        "./en-us/character/outfit/ed.json": [73479, 73479],
        "./en-us/character/outfit/ehonda": [58741, 58741],
        "./en-us/character/outfit/ehonda.json": [58741, 58741],
        "./en-us/character/outfit/elena": [21773, 21773],
        "./en-us/character/outfit/elena.json": [21773, 21773],
        "./en-us/character/outfit/gouki_akuma": [82971, 82971],
        "./en-us/character/outfit/gouki_akuma.json": [82971, 82971],
        "./en-us/character/outfit/guile": [44892, 44892],
        "./en-us/character/outfit/guile.json": [44892, 44892],
        "./en-us/character/outfit/ingrid": [3845, 3845],
        "./en-us/character/outfit/ingrid.json": [3845, 3845],
        "./en-us/character/outfit/jamie": [24538, 2157],
        "./en-us/character/outfit/jamie.json": [24538, 2157],
        "./en-us/character/outfit/jp": [86916, 86916],
        "./en-us/character/outfit/jp.json": [86916, 86916],
        "./en-us/character/outfit/juri": [87038, 87038],
        "./en-us/character/outfit/juri.json": [87038, 87038],
        "./en-us/character/outfit/ken": [86326, 86326],
        "./en-us/character/outfit/ken.json": [86326, 86326],
        "./en-us/character/outfit/kimberly": [57381, 57381],
        "./en-us/character/outfit/kimberly.json": [57381, 57381],
        "./en-us/character/outfit/lily": [77886, 77886],
        "./en-us/character/outfit/lily.json": [77886, 77886],
        "./en-us/character/outfit/luke": [79369, 79369],
        "./en-us/character/outfit/luke.json": [79369, 79369],
        "./en-us/character/outfit/mai": [9237, 9237],
        "./en-us/character/outfit/mai.json": [9237, 9237],
        "./en-us/character/outfit/manon": [78589, 78589],
        "./en-us/character/outfit/manon.json": [78589, 78589],
        "./en-us/character/outfit/marisa": [19213, 19213],
        "./en-us/character/outfit/marisa.json": [19213, 19213],
        "./en-us/character/outfit/rashid": [10213, 10213],
        "./en-us/character/outfit/rashid.json": [10213, 10213],
        "./en-us/character/outfit/ryu": [20804, 20804],
        "./en-us/character/outfit/ryu.json": [20804, 20804],
        "./en-us/character/outfit/sagat": [90788, 90788],
        "./en-us/character/outfit/sagat.json": [90788, 90788],
        "./en-us/character/outfit/terry": [34122, 34122],
        "./en-us/character/outfit/terry.json": [34122, 34122],
        "./en-us/character/outfit/vega_mbison": [22604, 22604],
        "./en-us/character/outfit/vega_mbison.json": [22604, 22604],
        "./en-us/character/outfit/zangief": [45146, 45146],
        "./en-us/character/outfit/zangief.json": [45146, 45146],
        "./en-us/character/rashid": [17791, 17791],
        "./en-us/character/rashid.json": [17791, 17791],
        "./en-us/character/ryu": [53033, 75414],
        "./en-us/character/ryu.json": [53033, 75414],
        "./en-us/character/sagat": [44298, 44298],
        "./en-us/character/sagat.json": [44298, 44298],
        "./en-us/character/terry": [95944, 95944],
        "./en-us/character/terry.json": [95944, 95944],
        "./en-us/character/vega_mbison": [86414, 86414],
        "./en-us/character/vega_mbison.json": [86414, 86414],
        "./en-us/character/zangief": [47576, 47576],
        "./en-us/character/zangief.json": [47576, 47576],
        "./en-us/column": [18130, 18130],
        "./en-us/column.json": [18130, 18130],
        "./en-us/common": [26393, 26393],
        "./en-us/common.json": [26393, 26393],
        "./en-us/concept": [60046, 60046],
        "./en-us/concept.json": [60046, 60046],
        "./en-us/demo": [30203, 30203],
        "./en-us/demo.json": [30203, 30203],
        "./en-us/form": [17778, 17778],
        "./en-us/form.json": [17778, 17778],
        "./en-us/guide": [5238, 5238],
        "./en-us/guide.json": [5238, 5238],
        "./en-us/index": [54270, 54270],
        "./en-us/index.json": [54270, 54270],
        "./en-us/live": [10250, 10250],
        "./en-us/live.json": [10250, 10250],
        "./en-us/mode/battlehub": [76057, 76057],
        "./en-us/mode/battlehub.json": [76057, 76057],
        "./en-us/mode/fightingground": [74071, 74071],
        "./en-us/mode/fightingground.json": [74071, 74071],
        "./en-us/mode/worldtour": [30198, 30198],
        "./en-us/mode/worldtour.json": [30198, 30198],
        "./en-us/news": [95587, 95587],
        "./en-us/news.json": [95587, 95587],
        "./en-us/product": [57505, 57505],
        "./en-us/product.json": [57505, 57505],
        "./es-es": [40451, 40451],
        "./es-es/": [40451, 40451],
        "./es-es/character": [91048, 91048],
        "./es-es/character.json": [91048, 91048],
        "./es-es/character/aki": [24892, 24892],
        "./es-es/character/aki.json": [24892, 24892],
        "./es-es/character/alex": [5731, 5731],
        "./es-es/character/alex.json": [5731, 5731],
        "./es-es/character/blanka": [12778, 12778],
        "./es-es/character/blanka.json": [12778, 12778],
        "./es-es/character/cammy": [19622, 19622],
        "./es-es/character/cammy.json": [19622, 19622],
        "./es-es/character/chunli": [31924, 31924],
        "./es-es/character/chunli.json": [31924, 31924],
        "./es-es/character/cviper": [80560, 80560],
        "./es-es/character/cviper.json": [80560, 80560],
        "./es-es/character/deejay": [91685, 91685],
        "./es-es/character/deejay.json": [91685, 91685],
        "./es-es/character/dhalsim": [6467, 6467],
        "./es-es/character/dhalsim.json": [6467, 6467],
        "./es-es/character/ed": [4770, 4770],
        "./es-es/character/ed.json": [4770, 4770],
        "./es-es/character/ehonda": [95640, 95640],
        "./es-es/character/ehonda.json": [95640, 95640],
        "./es-es/character/elena": [33606, 33606],
        "./es-es/character/elena.json": [33606, 33606],
        "./es-es/character/frame/_common": [81, 81],
        "./es-es/character/frame/_common.json": [81, 81],
        "./es-es/character/frame/aki": [29694, 29694],
        "./es-es/character/frame/aki.json": [29694, 29694],
        "./es-es/character/frame/alex": [66285, 66285],
        "./es-es/character/frame/alex.json": [66285, 66285],
        "./es-es/character/frame/blanka": [19912, 19912],
        "./es-es/character/frame/blanka.json": [19912, 19912],
        "./es-es/character/frame/cammy": [64760, 64760],
        "./es-es/character/frame/cammy.json": [64760, 64760],
        "./es-es/character/frame/chunli": [21806, 21806],
        "./es-es/character/frame/chunli.json": [21806, 21806],
        "./es-es/character/frame/cviper": [51174, 51174],
        "./es-es/character/frame/cviper.json": [51174, 51174],
        "./es-es/character/frame/deejay": [61659, 61659],
        "./es-es/character/frame/deejay.json": [61659, 61659],
        "./es-es/character/frame/dhalsim": [32525, 32525],
        "./es-es/character/frame/dhalsim.json": [32525, 32525],
        "./es-es/character/frame/ed": [83636, 83636],
        "./es-es/character/frame/ed.json": [83636, 83636],
        "./es-es/character/frame/ehonda": [99674, 99674],
        "./es-es/character/frame/ehonda.json": [99674, 99674],
        "./es-es/character/frame/elena": [78536, 78536],
        "./es-es/character/frame/elena.json": [78536, 78536],
        "./es-es/character/frame/gouki_akuma": [58214, 58214],
        "./es-es/character/frame/gouki_akuma.json": [58214, 58214],
        "./es-es/character/frame/guile": [39365, 39365],
        "./es-es/character/frame/guile.json": [39365, 39365],
        "./es-es/character/frame/ingrid": [92750, 92750],
        "./es-es/character/frame/ingrid.json": [92750, 92750],
        "./es-es/character/frame/jamie": [23767, 23767],
        "./es-es/character/frame/jamie.json": [23767, 23767],
        "./es-es/character/frame/jp": [55359, 55359],
        "./es-es/character/frame/jp.json": [55359, 55359],
        "./es-es/character/frame/juri": [21525, 21525],
        "./es-es/character/frame/juri.json": [21525, 21525],
        "./es-es/character/frame/ken": [63331, 63331],
        "./es-es/character/frame/ken.json": [63331, 63331],
        "./es-es/character/frame/kimberly": [69974, 69974],
        "./es-es/character/frame/kimberly.json": [69974, 69974],
        "./es-es/character/frame/lily": [85685, 85685],
        "./es-es/character/frame/lily.json": [85685, 85685],
        "./es-es/character/frame/luke": [87586, 87586],
        "./es-es/character/frame/luke.json": [87586, 87586],
        "./es-es/character/frame/mai": [29348, 29348],
        "./es-es/character/frame/mai.json": [29348, 29348],
        "./es-es/character/frame/manon": [72488, 72488],
        "./es-es/character/frame/manon.json": [72488, 72488],
        "./es-es/character/frame/marisa": [41414, 41414],
        "./es-es/character/frame/marisa.json": [41414, 41414],
        "./es-es/character/frame/rashid": [32462, 32462],
        "./es-es/character/frame/rashid.json": [32462, 32462],
        "./es-es/character/frame/ryu": [93221, 93221],
        "./es-es/character/frame/ryu.json": [93221, 93221],
        "./es-es/character/frame/sagat": [76213, 76213],
        "./es-es/character/frame/sagat.json": [76213, 76213],
        "./es-es/character/frame/terry": [12195, 12195],
        "./es-es/character/frame/terry.json": [12195, 12195],
        "./es-es/character/frame/vega_mbison": [5849, 5849],
        "./es-es/character/frame/vega_mbison.json": [5849, 5849],
        "./es-es/character/frame/zangief": [86387, 86387],
        "./es-es/character/frame/zangief.json": [86387, 86387],
        "./es-es/character/gouki_akuma": [52716, 52716],
        "./es-es/character/gouki_akuma.json": [52716, 52716],
        "./es-es/character/guile": [49515, 49515],
        "./es-es/character/guile.json": [49515, 49515],
        "./es-es/character/ingrid": [3848, 3848],
        "./es-es/character/ingrid.json": [3848, 3848],
        "./es-es/character/jamie": [86197, 86197],
        "./es-es/character/jamie.json": [86197, 86197],
        "./es-es/character/jp": [24321, 24321],
        "./es-es/character/jp.json": [24321, 24321],
        "./es-es/character/juri": [27443, 27443],
        "./es-es/character/juri.json": [27443, 27443],
        "./es-es/character/ken": [37525, 37525],
        "./es-es/character/ken.json": [37525, 37525],
        "./es-es/character/kimberly": [43560, 43560],
        "./es-es/character/kimberly.json": [43560, 43560],
        "./es-es/character/lily": [37459, 37459],
        "./es-es/character/lily.json": [37459, 37459],
        "./es-es/character/luke": [64868, 64868],
        "./es-es/character/luke.json": [64868, 64868],
        "./es-es/character/mai": [80054, 80054],
        "./es-es/character/mai.json": [80054, 80054],
        "./es-es/character/manon": [7350, 7350],
        "./es-es/character/manon.json": [7350, 7350],
        "./es-es/character/marisa": [41220, 41220],
        "./es-es/character/marisa.json": [41220, 41220],
        "./es-es/character/movelist/_common": [63661, 63661],
        "./es-es/character/movelist/_common.json": [63661, 63661],
        "./es-es/character/movelist/aki": [2250, 2250],
        "./es-es/character/movelist/aki.json": [2250, 2250],
        "./es-es/character/movelist/alex": [34897, 34897],
        "./es-es/character/movelist/alex.json": [34897, 34897],
        "./es-es/character/movelist/blanka": [73132, 73132],
        "./es-es/character/movelist/blanka.json": [73132, 73132],
        "./es-es/character/movelist/cammy": [48663, 71044],
        "./es-es/character/movelist/cammy.json": [48663, 71044],
        "./es-es/character/movelist/chunli": [90618, 90618],
        "./es-es/character/movelist/chunli.json": [90618, 90618],
        "./es-es/character/movelist/cviper": [49994, 49994],
        "./es-es/character/movelist/cviper.json": [49994, 49994],
        "./es-es/character/movelist/deejay": [67191, 67191],
        "./es-es/character/movelist/deejay.json": [67191, 67191],
        "./es-es/character/movelist/dhalsim": [49, 49],
        "./es-es/character/movelist/dhalsim.json": [49, 49],
        "./es-es/character/movelist/ed": [22888, 22888],
        "./es-es/character/movelist/ed.json": [22888, 22888],
        "./es-es/character/movelist/ehonda": [95774, 95774],
        "./es-es/character/movelist/ehonda.json": [95774, 95774],
        "./es-es/character/movelist/elena": [74228, 74228],
        "./es-es/character/movelist/elena.json": [74228, 74228],
        "./es-es/character/movelist/gouki_akuma": [70770, 70770],
        "./es-es/character/movelist/gouki_akuma.json": [70770, 70770],
        "./es-es/character/movelist/guile": [62753, 62753],
        "./es-es/character/movelist/guile.json": [62753, 62753],
        "./es-es/character/movelist/ingrid": [56938, 56938],
        "./es-es/character/movelist/ingrid.json": [56938, 56938],
        "./es-es/character/movelist/jamie": [26451, 26451],
        "./es-es/character/movelist/jamie.json": [26451, 26451],
        "./es-es/character/movelist/jp": [32115, 32115],
        "./es-es/character/movelist/jp.json": [32115, 32115],
        "./es-es/character/movelist/juri": [82241, 82241],
        "./es-es/character/movelist/juri.json": [82241, 82241],
        "./es-es/character/movelist/ken": [7583, 7583],
        "./es-es/character/movelist/ken.json": [7583, 7583],
        "./es-es/character/movelist/kimberly": [12242, 12242],
        "./es-es/character/movelist/kimberly.json": [12242, 12242],
        "./es-es/character/movelist/lily": [1065, 1065],
        "./es-es/character/movelist/lily.json": [1065, 1065],
        "./es-es/character/movelist/luke": [52430, 52430],
        "./es-es/character/movelist/luke.json": [52430, 52430],
        "./es-es/character/movelist/mai": [77848, 77848],
        "./es-es/character/movelist/mai.json": [77848, 77848],
        "./es-es/character/movelist/manon": [78740, 78740],
        "./es-es/character/movelist/manon.json": [78740, 78740],
        "./es-es/character/movelist/marisa": [36642, 36642],
        "./es-es/character/movelist/marisa.json": [36642, 36642],
        "./es-es/character/movelist/rashid": [44810, 44810],
        "./es-es/character/movelist/rashid.json": [44810, 44810],
        "./es-es/character/movelist/ryu": [56697, 56697],
        "./es-es/character/movelist/ryu.json": [56697, 56697],
        "./es-es/character/movelist/sagat": [56929, 56929],
        "./es-es/character/movelist/sagat.json": [56929, 56929],
        "./es-es/character/movelist/terry": [39215, 39215],
        "./es-es/character/movelist/terry.json": [39215, 39215],
        "./es-es/character/movelist/vega_mbison": [53821, 53821],
        "./es-es/character/movelist/vega_mbison.json": [53821, 53821],
        "./es-es/character/movelist/zangief": [75967, 75967],
        "./es-es/character/movelist/zangief.json": [75967, 75967],
        "./es-es/character/outfit/aki": [90728, 90728],
        "./es-es/character/outfit/aki.json": [90728, 90728],
        "./es-es/character/outfit/alex": [70663, 70663],
        "./es-es/character/outfit/alex.json": [70663, 70663],
        "./es-es/character/outfit/blanka": [76014, 76014],
        "./es-es/character/outfit/blanka.json": [76014, 76014],
        "./es-es/character/outfit/cammy": [71842, 71842],
        "./es-es/character/outfit/cammy.json": [71842, 71842],
        "./es-es/character/outfit/chunli": [5200, 5200],
        "./es-es/character/outfit/chunli.json": [5200, 5200],
        "./es-es/character/outfit/cviper": [17252, 17252],
        "./es-es/character/outfit/cviper.json": [17252, 17252],
        "./es-es/character/outfit/deejay": [67761, 67761],
        "./es-es/character/outfit/deejay.json": [67761, 67761],
        "./es-es/character/outfit/dhalsim": [18183, 18183],
        "./es-es/character/outfit/dhalsim.json": [18183, 18183],
        "./es-es/character/outfit/ed": [20086, 20086],
        "./es-es/character/outfit/ed.json": [20086, 20086],
        "./es-es/character/outfit/ehonda": [49468, 49468],
        "./es-es/character/outfit/ehonda.json": [49468, 49468],
        "./es-es/character/outfit/elena": [73330, 73330],
        "./es-es/character/outfit/elena.json": [73330, 73330],
        "./es-es/character/outfit/gouki_akuma": [99320, 99320],
        "./es-es/character/outfit/gouki_akuma.json": [99320, 99320],
        "./es-es/character/outfit/guile": [38071, 38071],
        "./es-es/character/outfit/guile.json": [38071, 38071],
        "./es-es/character/outfit/ingrid": [5335, 27716],
        "./es-es/character/outfit/ingrid.json": [5335, 27716],
        "./es-es/character/outfit/jamie": [58881, 58881],
        "./es-es/character/outfit/jamie.json": [58881, 58881],
        "./es-es/character/outfit/jp": [29813, 29813],
        "./es-es/character/outfit/jp.json": [29813, 29813],
        "./es-es/character/outfit/juri": [74527, 74527],
        "./es-es/character/outfit/juri.json": [74527, 74527],
        "./es-es/character/outfit/ken": [79489, 79489],
        "./es-es/character/outfit/ken.json": [79489, 79489],
        "./es-es/character/outfit/kimberly": [23092, 23092],
        "./es-es/character/outfit/kimberly.json": [23092, 23092],
        "./es-es/character/outfit/lily": [74455, 74455],
        "./es-es/character/outfit/lily.json": [74455, 74455],
        "./es-es/character/outfit/luke": [24864, 24864],
        "./es-es/character/outfit/luke.json": [24864, 24864],
        "./es-es/character/outfit/mai": [70362, 70362],
        "./es-es/character/outfit/mai.json": [70362, 70362],
        "./es-es/character/outfit/manon": [81442, 81442],
        "./es-es/character/outfit/manon.json": [81442, 81442],
        "./es-es/character/outfit/marisa": [74880, 74880],
        "./es-es/character/outfit/marisa.json": [74880, 74880],
        "./es-es/character/outfit/rashid": [43776, 43776],
        "./es-es/character/outfit/rashid.json": [43776, 43776],
        "./es-es/character/outfit/ryu": [41663, 41663],
        "./es-es/character/outfit/ryu.json": [41663, 41663],
        "./es-es/character/outfit/sagat": [80595, 80595],
        "./es-es/character/outfit/sagat.json": [80595, 80595],
        "./es-es/character/outfit/terry": [87113, 87113],
        "./es-es/character/outfit/terry.json": [87113, 87113],
        "./es-es/character/outfit/vega_mbison": [1395, 1395],
        "./es-es/character/outfit/vega_mbison.json": [1395, 1395],
        "./es-es/character/outfit/zangief": [94353, 94353],
        "./es-es/character/outfit/zangief.json": [94353, 94353],
        "./es-es/character/rashid": [14788, 14788],
        "./es-es/character/rashid.json": [14788, 14788],
        "./es-es/character/ryu": [15355, 15355],
        "./es-es/character/ryu.json": [15355, 15355],
        "./es-es/character/sagat": [99703, 99703],
        "./es-es/character/sagat.json": [99703, 99703],
        "./es-es/character/terry": [50045, 50045],
        "./es-es/character/terry.json": [50045, 50045],
        "./es-es/character/vega_mbison": [52207, 52207],
        "./es-es/character/vega_mbison.json": [52207, 52207],
        "./es-es/character/zangief": [24709, 24709],
        "./es-es/character/zangief.json": [24709, 24709],
        "./es-es/column": [91629, 91629],
        "./es-es/column.json": [91629, 91629],
        "./es-es/common": [60334, 60334],
        "./es-es/common.json": [60334, 60334],
        "./es-es/concept": [60103, 60103],
        "./es-es/concept.json": [60103, 60103],
        "./es-es/demo": [54352, 54352],
        "./es-es/demo.json": [54352, 54352],
        "./es-es/dynamic": [72570, 72570],
        "./es-es/dynamic.json": [72570, 72570],
        "./es-es/error": [64433, 64433],
        "./es-es/error.json": [64433, 64433],
        "./es-es/guide": [43383, 43383],
        "./es-es/guide.json": [43383, 43383],
        "./es-es/index": [40451, 40451],
        "./es-es/index.json": [40451, 40451],
        "./es-es/live": [33973, 33973],
        "./es-es/live.json": [33973, 33973],
        "./es-es/mode/battlehub": [28786, 28786],
        "./es-es/mode/battlehub.json": [28786, 28786],
        "./es-es/mode/fightingground": [97786, 97786],
        "./es-es/mode/fightingground.json": [97786, 97786],
        "./es-es/mode/worldtour": [67189, 67189],
        "./es-es/mode/worldtour.json": [67189, 67189],
        "./es-es/more-examples": [54992, 54992],
        "./es-es/more-examples.json": [54992, 54992],
        "./es-es/news": [78336, 78336],
        "./es-es/news.json": [78336, 78336],
        "./es-es/product": [66868, 66868],
        "./es-es/product.json": [66868, 66868],
        "./es-us": [65331, 65331],
        "./es-us/": [65331, 65331],
        "./es-us/character": [90904, 90904],
        "./es-us/character.json": [90904, 90904],
        "./es-us/character/aki": [84460, 84460],
        "./es-us/character/aki.json": [84460, 84460],
        "./es-us/character/alex": [26227, 26227],
        "./es-us/character/alex.json": [26227, 26227],
        "./es-us/character/blanka": [68410, 68410],
        "./es-us/character/blanka.json": [68410, 68410],
        "./es-us/character/cammy": [70838, 70838],
        "./es-us/character/cammy.json": [70838, 70838],
        "./es-us/character/chunli": [55556, 55556],
        "./es-us/character/chunli.json": [55556, 55556],
        "./es-us/character/cviper": [79168, 79168],
        "./es-us/character/cviper.json": [79168, 79168],
        "./es-us/character/deejay": [38933, 38933],
        "./es-us/character/deejay.json": [38933, 38933],
        "./es-us/character/dhalsim": [10259, 10259],
        "./es-us/character/dhalsim.json": [10259, 10259],
        "./es-us/character/ed": [47826, 47826],
        "./es-us/character/ed.json": [47826, 47826],
        "./es-us/character/ehonda": [95368, 95368],
        "./es-us/character/ehonda.json": [95368, 95368],
        "./es-us/character/elena": [7926, 7926],
        "./es-us/character/elena.json": [7926, 7926],
        "./es-us/character/frame/_common": [5025, 5025],
        "./es-us/character/frame/_common.json": [5025, 5025],
        "./es-us/character/frame/aki": [43118, 43118],
        "./es-us/character/frame/aki.json": [43118, 43118],
        "./es-us/character/frame/alex": [22045, 22045],
        "./es-us/character/frame/alex.json": [22045, 22045],
        "./es-us/character/frame/blanka": [9272, 9272],
        "./es-us/character/frame/blanka.json": [9272, 9272],
        "./es-us/character/frame/cammy": [94504, 94504],
        "./es-us/character/frame/cammy.json": [94504, 94504],
        "./es-us/character/frame/chunli": [91550, 91550],
        "./es-us/character/frame/chunli.json": [91550, 91550],
        "./es-us/character/frame/cviper": [72822, 72822],
        "./es-us/character/frame/cviper.json": [72822, 72822],
        "./es-us/character/frame/deejay": [41131, 41131],
        "./es-us/character/frame/deejay.json": [41131, 41131],
        "./es-us/character/frame/dhalsim": [85789, 85789],
        "./es-us/character/frame/dhalsim.json": [85789, 85789],
        "./es-us/character/frame/ed": [12324, 12324],
        "./es-us/character/frame/ed.json": [12324, 12324],
        "./es-us/character/frame/ehonda": [8746, 8746],
        "./es-us/character/frame/ehonda.json": [8746, 8746],
        "./es-us/character/frame/elena": [60920, 60920],
        "./es-us/character/frame/elena.json": [60920, 60920],
        "./es-us/character/frame/gouki_akuma": [95382, 95382],
        "./es-us/character/frame/gouki_akuma.json": [95382, 95382],
        "./es-us/character/frame/guile": [79381, 79381],
        "./es-us/character/frame/guile.json": [79381, 79381],
        "./es-us/character/frame/ingrid": [85630, 85630],
        "./es-us/character/frame/ingrid.json": [85630, 85630],
        "./es-us/character/frame/jamie": [17703, 17703],
        "./es-us/character/frame/jamie.json": [17703, 17703],
        "./es-us/character/frame/jp": [15183, 15183],
        "./es-us/character/frame/jp.json": [15183, 15183],
        "./es-us/character/frame/juri": [3045, 3045],
        "./es-us/character/frame/juri.json": [3045, 3045],
        "./es-us/character/frame/ken": [723, 723],
        "./es-us/character/frame/ken.json": [723, 723],
        "./es-us/character/frame/kimberly": [27174, 27174],
        "./es-us/character/frame/kimberly.json": [27174, 27174],
        "./es-us/character/frame/lily": [6213, 6213],
        "./es-us/character/frame/lily.json": [6213, 6213],
        "./es-us/character/frame/luke": [5106, 5106],
        "./es-us/character/frame/luke.json": [5106, 5106],
        "./es-us/character/frame/mai": [67444, 67444],
        "./es-us/character/frame/mai.json": [67444, 67444],
        "./es-us/character/frame/manon": [39288, 39288],
        "./es-us/character/frame/manon.json": [39288, 39288],
        "./es-us/character/frame/marisa": [76438, 76438],
        "./es-us/character/frame/marisa.json": [76438, 76438],
        "./es-us/character/frame/rashid": [56638, 34257],
        "./es-us/character/frame/rashid.json": [56638, 34257],
        "./es-us/character/frame/ryu": [86133, 86133],
        "./es-us/character/frame/ryu.json": [86133, 86133],
        "./es-us/character/frame/sagat": [35045, 35045],
        "./es-us/character/frame/sagat.json": [35045, 35045],
        "./es-us/character/frame/terry": [16115, 16115],
        "./es-us/character/frame/terry.json": [16115, 16115],
        "./es-us/character/frame/vega_mbison": [21833, 21833],
        "./es-us/character/frame/vega_mbison.json": [21833, 21833],
        "./es-us/character/frame/zangief": [16099, 16099],
        "./es-us/character/frame/zangief.json": [16099, 16099],
        "./es-us/character/gouki_akuma": [18364, 18364],
        "./es-us/character/gouki_akuma.json": [18364, 18364],
        "./es-us/character/guile": [43099, 43099],
        "./es-us/character/guile.json": [43099, 43099],
        "./es-us/character/ingrid": [25880, 25880],
        "./es-us/character/ingrid.json": [25880, 25880],
        "./es-us/character/jamie": [59557, 59557],
        "./es-us/character/jamie.json": [59557, 59557],
        "./es-us/character/jp": [72369, 72369],
        "./es-us/character/jp.json": [72369, 72369],
        "./es-us/character/juri": [22307, 22307],
        "./es-us/character/juri.json": [22307, 22307],
        "./es-us/character/ken": [31717, 31717],
        "./es-us/character/ken.json": [31717, 31717],
        "./es-us/character/kimberly": [1688, 1688],
        "./es-us/character/kimberly.json": [1688, 1688],
        "./es-us/character/lily": [17603, 17603],
        "./es-us/character/lily.json": [17603, 17603],
        "./es-us/character/luke": [75828, 75828],
        "./es-us/character/luke.json": [75828, 75828],
        "./es-us/character/mai": [37350, 37350],
        "./es-us/character/mai.json": [37350, 37350],
        "./es-us/character/manon": [19110, 19110],
        "./es-us/character/manon.json": [19110, 19110],
        "./es-us/character/marisa": [19860, 19860],
        "./es-us/character/marisa.json": [19860, 19860],
        "./es-us/character/movelist/_common": [14173, 14173],
        "./es-us/character/movelist/_common.json": [14173, 14173],
        "./es-us/character/movelist/aki": [2106, 2106],
        "./es-us/character/movelist/aki.json": [2106, 2106],
        "./es-us/character/movelist/alex": [44513, 44513],
        "./es-us/character/movelist/alex.json": [44513, 44513],
        "./es-us/character/movelist/blanka": [5468, 5468],
        "./es-us/character/movelist/blanka.json": [5468, 5468],
        "./es-us/character/movelist/cammy": [43220, 43220],
        "./es-us/character/movelist/cammy.json": [43220, 43220],
        "./es-us/character/movelist/chunli": [20042, 20042],
        "./es-us/character/movelist/chunli.json": [20042, 20042],
        "./es-us/character/movelist/cviper": [43898, 43898],
        "./es-us/character/movelist/cviper.json": [43898, 43898],
        "./es-us/character/movelist/deejay": [59143, 59143],
        "./es-us/character/movelist/deejay.json": [59143, 59143],
        "./es-us/character/movelist/dhalsim": [30926, 30926],
        "./es-us/character/movelist/dhalsim.json": [30926, 30926],
        "./es-us/character/movelist/ed": [73080, 73080],
        "./es-us/character/movelist/ed.json": [73080, 73080],
        "./es-us/character/movelist/ehonda": [28078, 28078],
        "./es-us/character/movelist/ehonda.json": [28078, 28078],
        "./es-us/character/movelist/elena": [44612, 44612],
        "./es-us/character/movelist/elena.json": [44612, 44612],
        "./es-us/character/movelist/gouki_akuma": [59842, 59842],
        "./es-us/character/movelist/gouki_akuma.json": [59842, 59842],
        "./es-us/character/movelist/guile": [88753, 88753],
        "./es-us/character/movelist/guile.json": [88753, 88753],
        "./es-us/character/movelist/ingrid": [13210, 13210],
        "./es-us/character/movelist/ingrid.json": [13210, 13210],
        "./es-us/character/movelist/jamie": [90755, 90755],
        "./es-us/character/movelist/jamie.json": [90755, 90755],
        "./es-us/character/movelist/jp": [3363, 3363],
        "./es-us/character/movelist/jp.json": [3363, 3363],
        "./es-us/character/movelist/juri": [30001, 30001],
        "./es-us/character/movelist/juri.json": [30001, 30001],
        "./es-us/character/movelist/ken": [15343, 15343],
        "./es-us/character/movelist/ken.json": [15343, 15343],
        "./es-us/character/movelist/kimberly": [34018, 34018],
        "./es-us/character/movelist/kimberly.json": [34018, 34018],
        "./es-us/character/movelist/lily": [67161, 67161],
        "./es-us/character/movelist/lily.json": [67161, 67161],
        "./es-us/character/movelist/luke": [40894, 40894],
        "./es-us/character/movelist/luke.json": [40894, 40894],
        "./es-us/character/movelist/mai": [45499, 67880],
        "./es-us/character/movelist/mai.json": [45499, 67880],
        "./es-us/character/movelist/manon": [38756, 38756],
        "./es-us/character/movelist/manon.json": [38756, 38756],
        "./es-us/character/movelist/marisa": [85266, 85266],
        "./es-us/character/movelist/marisa.json": [85266, 85266],
        "./es-us/character/movelist/rashid": [83386, 83386],
        "./es-us/character/movelist/rashid.json": [83386, 83386],
        "./es-us/character/movelist/ryu": [54537, 54537],
        "./es-us/character/movelist/ryu.json": [54537, 54537],
        "./es-us/character/movelist/sagat": [31153, 31153],
        "./es-us/character/movelist/sagat.json": [31153, 31153],
        "./es-us/character/movelist/terry": [53215, 53215],
        "./es-us/character/movelist/terry.json": [53215, 53215],
        "./es-us/character/movelist/vega_mbison": [44973, 44973],
        "./es-us/character/movelist/vega_mbison.json": [44973, 44973],
        "./es-us/character/movelist/zangief": [77775, 77775],
        "./es-us/character/movelist/zangief.json": [77775, 77775],
        "./es-us/character/outfit/aki": [13688, 13688],
        "./es-us/character/outfit/aki.json": [13688, 13688],
        "./es-us/character/outfit/alex": [10103, 10103],
        "./es-us/character/outfit/alex.json": [10103, 10103],
        "./es-us/character/outfit/blanka": [25438, 25438],
        "./es-us/character/outfit/blanka.json": [25438, 25438],
        "./es-us/character/outfit/cammy": [37906, 37906],
        "./es-us/character/outfit/cammy.json": [37906, 37906],
        "./es-us/character/outfit/chunli": [34304, 34304],
        "./es-us/character/outfit/chunli.json": [34304, 34304],
        "./es-us/character/outfit/cviper": [68948, 68948],
        "./es-us/character/outfit/cviper.json": [68948, 68948],
        "./es-us/character/outfit/deejay": [76673, 76673],
        "./es-us/character/outfit/deejay.json": [76673, 76673],
        "./es-us/character/outfit/dhalsim": [83703, 83703],
        "./es-us/character/outfit/dhalsim.json": [83703, 83703],
        "./es-us/character/outfit/ed": [22054, 22054],
        "./es-us/character/outfit/ed.json": [22054, 22054],
        "./es-us/character/outfit/ehonda": [72972, 72972],
        "./es-us/character/outfit/ehonda.json": [72972, 72972],
        "./es-us/character/outfit/elena": [9954, 9954],
        "./es-us/character/outfit/elena.json": [9954, 9954],
        "./es-us/character/outfit/gouki_akuma": [14504, 14504],
        "./es-us/character/outfit/gouki_akuma.json": [14504, 14504],
        "./es-us/character/outfit/guile": [74503, 74503],
        "./es-us/character/outfit/guile.json": [74503, 74503],
        "./es-us/character/outfit/ingrid": [25588, 25588],
        "./es-us/character/outfit/ingrid.json": [25588, 25588],
        "./es-us/character/outfit/jamie": [40881, 40881],
        "./es-us/character/outfit/jamie.json": [40881, 40881],
        "./es-us/character/outfit/jp": [25989, 25989],
        "./es-us/character/outfit/jp.json": [25989, 25989],
        "./es-us/character/outfit/juri": [37071, 37071],
        "./es-us/character/outfit/juri.json": [37071, 37071],
        "./es-us/character/outfit/ken": [13009, 13009],
        "./es-us/character/outfit/ken.json": [13009, 13009],
        "./es-us/character/outfit/kimberly": [96836, 96836],
        "./es-us/character/outfit/kimberly.json": [96836, 96836],
        "./es-us/character/outfit/lily": [46151, 46151],
        "./es-us/character/outfit/lily.json": [46151, 46151],
        "./es-us/character/outfit/luke": [90608, 90608],
        "./es-us/character/outfit/luke.json": [90608, 90608],
        "./es-us/character/outfit/mai": [18186, 18186],
        "./es-us/character/outfit/mai.json": [18186, 18186],
        "./es-us/character/outfit/manon": [19986, 19986],
        "./es-us/character/outfit/manon.json": [19986, 19986],
        "./es-us/character/outfit/marisa": [56656, 34275],
        "./es-us/character/outfit/marisa.json": [56656, 34275],
        "./es-us/character/outfit/rashid": [60560, 60560],
        "./es-us/character/outfit/rashid.json": [60560, 60560],
        "./es-us/character/outfit/ryu": [49103, 49103],
        "./es-us/character/outfit/ryu.json": [49103, 49103],
        "./es-us/character/outfit/sagat": [50595, 50595],
        "./es-us/character/outfit/sagat.json": [50595, 50595],
        "./es-us/character/outfit/terry": [42297, 42297],
        "./es-us/character/outfit/terry.json": [42297, 42297],
        "./es-us/character/outfit/vega_mbison": [77571, 77571],
        "./es-us/character/outfit/vega_mbison.json": [77571, 77571],
        "./es-us/character/outfit/zangief": [72513, 72513],
        "./es-us/character/outfit/zangief.json": [72513, 72513],
        "./es-us/character/rashid": [59796, 59796],
        "./es-us/character/rashid.json": [59796, 59796],
        "./es-us/character/ryu": [94155, 94155],
        "./es-us/character/ryu.json": [94155, 94155],
        "./es-us/character/sagat": [2375, 2375],
        "./es-us/character/sagat.json": [2375, 2375],
        "./es-us/character/terry": [20141, 20141],
        "./es-us/character/terry.json": [20141, 20141],
        "./es-us/character/vega_mbison": [78239, 78239],
        "./es-us/character/vega_mbison.json": [78239, 78239],
        "./es-us/character/zangief": [3253, 3253],
        "./es-us/character/zangief.json": [3253, 3253],
        "./es-us/column": [25021, 25021],
        "./es-us/column.json": [25021, 25021],
        "./es-us/common": [83262, 83262],
        "./es-us/common.json": [83262, 83262],
        "./es-us/concept": [9015, 9015],
        "./es-us/concept.json": [9015, 9015],
        "./es-us/demo": [4864, 4864],
        "./es-us/demo.json": [4864, 4864],
        "./es-us/guide": [13191, 13191],
        "./es-us/guide.json": [13191, 13191],
        "./es-us/index": [65331, 65331],
        "./es-us/index.json": [65331, 65331],
        "./es-us/live": [45605, 45605],
        "./es-us/live.json": [45605, 45605],
        "./es-us/mode/battlehub": [9698, 9698],
        "./es-us/mode/battlehub.json": [9698, 9698],
        "./es-us/mode/fightingground": [86986, 86986],
        "./es-us/mode/fightingground.json": [86986, 86986],
        "./es-us/mode/worldtour": [261, 261],
        "./es-us/mode/worldtour.json": [261, 261],
        "./es-us/news": [40771, 63152],
        "./es-us/news.json": [40771, 63152],
        "./es-us/product": [39332, 39332],
        "./es-us/product.json": [39332, 39332],
        "./fr": [42083, 64464],
        "./fr/": [42083, 64464],
        "./fr/character": [83003, 83003],
        "./fr/character.json": [83003, 83003],
        "./fr/character/aki": [37583, 37583],
        "./fr/character/aki.json": [37583, 37583],
        "./fr/character/alex": [80470, 80470],
        "./fr/character/alex.json": [80470, 80470],
        "./fr/character/blanka": [11527, 11527],
        "./fr/character/blanka.json": [11527, 11527],
        "./fr/character/cammy": [17761, 17761],
        "./fr/character/cammy.json": [17761, 17761],
        "./fr/character/chunli": [69617, 69617],
        "./fr/character/chunli.json": [69617, 69617],
        "./fr/character/cviper": [7493, 7493],
        "./fr/character/cviper.json": [7493, 7493],
        "./fr/character/deejay": [684, 684],
        "./fr/character/deejay.json": [684, 684],
        "./fr/character/dhalsim": [6076, 6076],
        "./fr/character/dhalsim.json": [6076, 6076],
        "./fr/character/ed": [8287, 8287],
        "./fr/character/ed.json": [8287, 8287],
        "./fr/character/ehonda": [51677, 51677],
        "./fr/character/ehonda.json": [51677, 51677],
        "./fr/character/elena": [81333, 81333],
        "./fr/character/elena.json": [81333, 81333],
        "./fr/character/frame/_common": [16322, 16322],
        "./fr/character/frame/_common.json": [16322, 16322],
        "./fr/character/frame/aki": [99665, 99665],
        "./fr/character/frame/aki.json": [99665, 99665],
        "./fr/character/frame/alex": [79024, 79024],
        "./fr/character/frame/alex.json": [79024, 79024],
        "./fr/character/frame/blanka": [30485, 30485],
        "./fr/character/frame/blanka.json": [30485, 30485],
        "./fr/character/frame/cammy": [91987, 91987],
        "./fr/character/frame/cammy.json": [91987, 91987],
        "./fr/character/frame/chunli": [87395, 87395],
        "./fr/character/frame/chunli.json": [87395, 87395],
        "./fr/character/frame/cviper": [62843, 62843],
        "./fr/character/frame/cviper.json": [62843, 62843],
        "./fr/character/frame/deejay": [88666, 88666],
        "./fr/character/frame/deejay.json": [88666, 88666],
        "./fr/character/frame/dhalsim": [26230, 26230],
        "./fr/character/frame/dhalsim.json": [26230, 26230],
        "./fr/character/frame/ed": [30321, 30321],
        "./fr/character/frame/ed.json": [30321, 30321],
        "./fr/character/frame/ehonda": [9751, 9751],
        "./fr/character/frame/ehonda.json": [9751, 9751],
        "./fr/character/frame/elena": [63703, 63703],
        "./fr/character/frame/elena.json": [63703, 63703],
        "./fr/character/frame/gouki_akuma": [53629, 53629],
        "./fr/character/frame/gouki_akuma.json": [53629, 53629],
        "./fr/character/frame/guile": [12054, 12054],
        "./fr/character/frame/guile.json": [12054, 12054],
        "./fr/character/frame/ingrid": [99211, 99211],
        "./fr/character/frame/ingrid.json": [99211, 99211],
        "./fr/character/frame/jamie": [53788, 53788],
        "./fr/character/frame/jamie.json": [53788, 53788],
        "./fr/character/frame/jp": [80402, 80402],
        "./fr/character/frame/jp.json": [80402, 80402],
        "./fr/character/frame/juri": [45976, 45976],
        "./fr/character/frame/juri.json": [45976, 45976],
        "./fr/character/frame/ken": [11788, 11788],
        "./fr/character/frame/ken.json": [11788, 11788],
        "./fr/character/frame/kimberly": [60051, 60051],
        "./fr/character/frame/kimberly.json": [60051, 60051],
        "./fr/character/frame/lily": [15072, 15072],
        "./fr/character/frame/lily.json": [15072, 15072],
        "./fr/character/frame/luke": [90423, 90423],
        "./fr/character/frame/luke.json": [90423, 90423],
        "./fr/character/frame/mai": [67, 67],
        "./fr/character/frame/mai.json": [67, 67],
        "./fr/character/frame/manon": [95455, 95455],
        "./fr/character/frame/manon.json": [95455, 95455],
        "./fr/character/frame/marisa": [73647, 73647],
        "./fr/character/frame/marisa.json": [73647, 73647],
        "./fr/character/frame/rashid": [94999, 94999],
        "./fr/character/frame/rashid.json": [94999, 94999],
        "./fr/character/frame/ryu": [63982, 63982],
        "./fr/character/frame/ryu.json": [63982, 63982],
        "./fr/character/frame/sagat": [178, 178],
        "./fr/character/frame/sagat.json": [178, 178],
        "./fr/character/frame/terry": [66720, 66720],
        "./fr/character/frame/terry.json": [66720, 66720],
        "./fr/character/frame/vega_mbison": [92838, 92838],
        "./fr/character/frame/vega_mbison.json": [92838, 92838],
        "./fr/character/frame/zangief": [94128, 94128],
        "./fr/character/frame/zangief.json": [94128, 94128],
        "./fr/character/gouki_akuma": [68643, 68643],
        "./fr/character/gouki_akuma.json": [68643, 68643],
        "./fr/character/guile": [54436, 54436],
        "./fr/character/guile.json": [54436, 54436],
        "./fr/character/ingrid": [42445, 42445],
        "./fr/character/ingrid.json": [42445, 42445],
        "./fr/character/jamie": [83794, 83794],
        "./fr/character/jamie.json": [83794, 83794],
        "./fr/character/jp": [12556, 12556],
        "./fr/character/jp.json": [12556, 12556],
        "./fr/character/juri": [14070, 14070],
        "./fr/character/juri.json": [14070, 14070],
        "./fr/character/ken": [74558, 74558],
        "./fr/character/ken.json": [74558, 74558],
        "./fr/character/kimberly": [70573, 70573],
        "./fr/character/kimberly.json": [70573, 70573],
        "./fr/character/lily": [44918, 44918],
        "./fr/character/lily.json": [44918, 44918],
        "./fr/character/luke": [16609, 16609],
        "./fr/character/luke.json": [16609, 16609],
        "./fr/character/mai": [77725, 77725],
        "./fr/character/mai.json": [77725, 77725],
        "./fr/character/manon": [91397, 91397],
        "./fr/character/manon.json": [91397, 91397],
        "./fr/character/marisa": [36581, 36581],
        "./fr/character/marisa.json": [36581, 36581],
        "./fr/character/movelist/_common": [45696, 45696],
        "./fr/character/movelist/_common.json": [45696, 45696],
        "./fr/character/movelist/aki": [92903, 92903],
        "./fr/character/movelist/aki.json": [92903, 92903],
        "./fr/character/movelist/alex": [50654, 50654],
        "./fr/character/movelist/alex.json": [50654, 50654],
        "./fr/character/movelist/blanka": [18975, 18975],
        "./fr/character/movelist/blanka.json": [18975, 18975],
        "./fr/character/movelist/cammy": [7273, 7273],
        "./fr/character/movelist/cammy.json": [7273, 7273],
        "./fr/character/movelist/chunli": [729, 729],
        "./fr/character/movelist/chunli.json": [729, 729],
        "./fr/character/movelist/cviper": [79805, 79805],
        "./fr/character/movelist/cviper.json": [79805, 79805],
        "./fr/character/movelist/deejay": [8756, 8756],
        "./fr/character/movelist/deejay.json": [8756, 8756],
        "./fr/character/movelist/dhalsim": [19796, 19796],
        "./fr/character/movelist/dhalsim.json": [19796, 19796],
        "./fr/character/movelist/ed": [15047, 15047],
        "./fr/character/movelist/ed.json": [15047, 15047],
        "./fr/character/movelist/ehonda": [15157, 15157],
        "./fr/character/movelist/ehonda.json": [15157, 15157],
        "./fr/character/movelist/elena": [28781, 28781],
        "./fr/character/movelist/elena.json": [28781, 28781],
        "./fr/character/movelist/gouki_akuma": [18555, 18555],
        "./fr/character/movelist/gouki_akuma.json": [18555, 18555],
        "./fr/character/movelist/guile": [60764, 60764],
        "./fr/character/movelist/guile.json": [60764, 60764],
        "./fr/character/movelist/ingrid": [96741, 96741],
        "./fr/character/movelist/ingrid.json": [96741, 96741],
        "./fr/character/movelist/jamie": [93946, 93946],
        "./fr/character/movelist/jamie.json": [93946, 93946],
        "./fr/character/movelist/jp": [65668, 65668],
        "./fr/character/movelist/jp.json": [65668, 65668],
        "./fr/character/movelist/juri": [82590, 82590],
        "./fr/character/movelist/juri.json": [82590, 82590],
        "./fr/character/movelist/ken": [92566, 92566],
        "./fr/character/movelist/ken.json": [92566, 92566],
        "./fr/character/movelist/kimberly": [49605, 49605],
        "./fr/character/movelist/kimberly.json": [49605, 49605],
        "./fr/character/movelist/lily": [80638, 80638],
        "./fr/character/movelist/lily.json": [80638, 80638],
        "./fr/character/movelist/luke": [91369, 91369],
        "./fr/character/movelist/luke.json": [91369, 91369],
        "./fr/character/movelist/mai": [99189, 99189],
        "./fr/character/movelist/mai.json": [99189, 99189],
        "./fr/character/movelist/manon": [44413, 44413],
        "./fr/character/movelist/manon.json": [44413, 44413],
        "./fr/character/movelist/marisa": [76365, 76365],
        "./fr/character/movelist/marisa.json": [76365, 76365],
        "./fr/character/movelist/rashid": [17637, 17637],
        "./fr/character/movelist/rashid.json": [17637, 17637],
        "./fr/character/movelist/ryu": [6980, 6980],
        "./fr/character/movelist/ryu.json": [6980, 6980],
        "./fr/character/movelist/sagat": [5540, 5540],
        "./fr/character/movelist/sagat.json": [5540, 5540],
        "./fr/character/movelist/terry": [76938, 76938],
        "./fr/character/movelist/terry.json": [76938, 76938],
        "./fr/character/movelist/vega_mbison": [89484, 89484],
        "./fr/character/movelist/vega_mbison.json": [89484, 89484],
        "./fr/character/movelist/zangief": [33466, 33466],
        "./fr/character/movelist/zangief.json": [33466, 33466],
        "./fr/character/outfit/aki": [78309, 78309],
        "./fr/character/outfit/aki.json": [78309, 78309],
        "./fr/character/outfit/alex": [65708, 65708],
        "./fr/character/outfit/alex.json": [65708, 65708],
        "./fr/character/outfit/blanka": [46817, 46817],
        "./fr/character/outfit/blanka.json": [46817, 46817],
        "./fr/character/outfit/cammy": [615, 615],
        "./fr/character/outfit/cammy.json": [615, 615],
        "./fr/character/outfit/chunli": [34663, 34663],
        "./fr/character/outfit/chunli.json": [34663, 34663],
        "./fr/character/outfit/cviper": [62903, 62903],
        "./fr/character/outfit/cviper.json": [62903, 62903],
        "./fr/character/outfit/deejay": [63310, 63310],
        "./fr/character/outfit/deejay.json": [63310, 63310],
        "./fr/character/outfit/dhalsim": [81138, 81138],
        "./fr/character/outfit/dhalsim.json": [81138, 81138],
        "./fr/character/outfit/ed": [15709, 15709],
        "./fr/character/outfit/ed.json": [15709, 15709],
        "./fr/character/outfit/ehonda": [16691, 16691],
        "./fr/character/outfit/ehonda.json": [16691, 16691],
        "./fr/character/outfit/elena": [68251, 68251],
        "./fr/character/outfit/elena.json": [68251, 68251],
        "./fr/character/outfit/gouki_akuma": [52257, 52257],
        "./fr/character/outfit/gouki_akuma.json": [52257, 52257],
        "./fr/character/outfit/guile": [92218, 92218],
        "./fr/character/outfit/guile.json": [92218, 92218],
        "./fr/character/outfit/ingrid": [36863, 36863],
        "./fr/character/outfit/ingrid.json": [36863, 36863],
        "./fr/character/outfit/jamie": [15280, 15280],
        "./fr/character/outfit/jamie.json": [15280, 15280],
        "./fr/character/outfit/jp": [37166, 37166],
        "./fr/character/outfit/jp.json": [37166, 37166],
        "./fr/character/outfit/juri": [27740, 27740],
        "./fr/character/outfit/juri.json": [27740, 27740],
        "./fr/character/outfit/ken": [85872, 85872],
        "./fr/character/outfit/ken.json": [85872, 85872],
        "./fr/character/outfit/kimberly": [64743, 64743],
        "./fr/character/outfit/kimberly.json": [64743, 64743],
        "./fr/character/outfit/lily": [69868, 69868],
        "./fr/character/outfit/lily.json": [69868, 69868],
        "./fr/character/outfit/luke": [88699, 88699],
        "./fr/character/outfit/luke.json": [88699, 88699],
        "./fr/character/outfit/mai": [74812, 52431],
        "./fr/character/outfit/mai.json": [74812, 52431],
        "./fr/character/outfit/manon": [83139, 83139],
        "./fr/character/outfit/manon.json": [83139, 83139],
        "./fr/character/outfit/marisa": [37123, 37123],
        "./fr/character/outfit/marisa.json": [37123, 37123],
        "./fr/character/outfit/rashid": [23179, 23179],
        "./fr/character/outfit/rashid.json": [23179, 23179],
        "./fr/character/outfit/ryu": [43082, 43082],
        "./fr/character/outfit/ryu.json": [43082, 43082],
        "./fr/character/outfit/sagat": [14326, 14326],
        "./fr/character/outfit/sagat.json": [14326, 14326],
        "./fr/character/outfit/terry": [31092, 31092],
        "./fr/character/outfit/terry.json": [31092, 31092],
        "./fr/character/outfit/vega_mbison": [89794, 89794],
        "./fr/character/outfit/vega_mbison.json": [89794, 89794],
        "./fr/character/outfit/zangief": [8596, 8596],
        "./fr/character/outfit/zangief.json": [8596, 8596],
        "./fr/character/rashid": [36029, 36029],
        "./fr/character/rashid.json": [36029, 36029],
        "./fr/character/ryu": [26492, 26492],
        "./fr/character/ryu.json": [26492, 26492],
        "./fr/character/sagat": [39948, 39948],
        "./fr/character/sagat.json": [39948, 39948],
        "./fr/character/terry": [57410, 57410],
        "./fr/character/terry.json": [57410, 57410],
        "./fr/character/vega_mbison": [65412, 65412],
        "./fr/character/vega_mbison.json": [65412, 65412],
        "./fr/character/zangief": [97682, 97682],
        "./fr/character/zangief.json": [97682, 97682],
        "./fr/column": [82240, 82240],
        "./fr/column.json": [82240, 82240],
        "./fr/common": [23547, 23547],
        "./fr/common.json": [23547, 23547],
        "./fr/concept": [99308, 99308],
        "./fr/concept.json": [99308, 99308],
        "./fr/demo": [90217, 90217],
        "./fr/demo.json": [90217, 90217],
        "./fr/dynamic": [34761, 34761],
        "./fr/dynamic.json": [34761, 34761],
        "./fr/error": [8146, 8146],
        "./fr/error.json": [8146, 8146],
        "./fr/guide": [55680, 55680],
        "./fr/guide.json": [55680, 55680],
        "./fr/index": [42083, 64464],
        "./fr/index.json": [42083, 64464],
        "./fr/live": [96296, 96296],
        "./fr/live.json": [96296, 96296],
        "./fr/mode/battlehub": [54619, 54619],
        "./fr/mode/battlehub.json": [54619, 54619],
        "./fr/mode/fightingground": [18189, 18189],
        "./fr/mode/fightingground.json": [18189, 18189],
        "./fr/mode/worldtour": [35716, 35716],
        "./fr/mode/worldtour.json": [35716, 35716],
        "./fr/more-examples": [51403, 51403],
        "./fr/more-examples.json": [51403, 51403],
        "./fr/news": [44305, 44305],
        "./fr/news.json": [44305, 44305],
        "./fr/product": [15043, 15043],
        "./fr/product.json": [15043, 15043],
        "./it": [76753, 76753],
        "./it/": [76753, 76753],
        "./it/character": [45522, 45522],
        "./it/character.json": [45522, 45522],
        "./it/character/aki": [68302, 68302],
        "./it/character/aki.json": [68302, 68302],
        "./it/character/alex": [41789, 41789],
        "./it/character/alex.json": [41789, 41789],
        "./it/character/blanka": [48184, 48184],
        "./it/character/blanka.json": [48184, 48184],
        "./it/character/cammy": [10824, 10824],
        "./it/character/cammy.json": [10824, 10824],
        "./it/character/chunli": [62014, 62014],
        "./it/character/chunli.json": [62014, 62014],
        "./it/character/cviper": [53398, 53398],
        "./it/character/cviper.json": [53398, 53398],
        "./it/character/deejay": [395, 395],
        "./it/character/deejay.json": [395, 395],
        "./it/character/dhalsim": [33597, 33597],
        "./it/character/dhalsim.json": [33597, 33597],
        "./it/character/ed": [30052, 30052],
        "./it/character/ed.json": [30052, 30052],
        "./it/character/ehonda": [76714, 76714],
        "./it/character/ehonda.json": [76714, 76714],
        "./it/character/elena": [64184, 64184],
        "./it/character/elena.json": [64184, 64184],
        "./it/character/frame/_common": [8807, 8807],
        "./it/character/frame/_common.json": [8807, 8807],
        "./it/character/frame/aki": [10724, 88343],
        "./it/character/frame/aki.json": [10724, 88343],
        "./it/character/frame/alex": [18331, 18331],
        "./it/character/frame/alex.json": [18331, 18331],
        "./it/character/frame/blanka": [13074, 13074],
        "./it/character/frame/blanka.json": [13074, 13074],
        "./it/character/frame/cammy": [17246, 17246],
        "./it/character/frame/cammy.json": [17246, 17246],
        "./it/character/frame/chunli": [83948, 83948],
        "./it/character/frame/chunli.json": [83948, 83948],
        "./it/character/frame/cviper": [33688, 33688],
        "./it/character/frame/cviper.json": [33688, 33688],
        "./it/character/frame/deejay": [92701, 92701],
        "./it/character/frame/deejay.json": [92701, 92701],
        "./it/character/frame/dhalsim": [94635, 94635],
        "./it/character/frame/dhalsim.json": [94635, 94635],
        "./it/character/frame/ed": [20634, 20634],
        "./it/character/frame/ed.json": [20634, 20634],
        "./it/character/frame/ehonda": [34688, 34688],
        "./it/character/frame/ehonda.json": [34688, 34688],
        "./it/character/frame/elena": [21966, 21966],
        "./it/character/frame/elena.json": [21966, 21966],
        "./it/character/frame/gouki_akuma": [88756, 88756],
        "./it/character/frame/gouki_akuma.json": [88756, 88756],
        "./it/character/frame/guile": [39347, 39347],
        "./it/character/frame/guile.json": [39347, 39347],
        "./it/character/frame/ingrid": [23440, 23440],
        "./it/character/frame/ingrid.json": [23440, 23440],
        "./it/character/frame/jamie": [66093, 66093],
        "./it/character/frame/jamie.json": [66093, 66093],
        "./it/character/frame/jp": [51785, 51785],
        "./it/character/frame/jp.json": [51785, 51785],
        "./it/character/frame/juri": [76395, 76395],
        "./it/character/frame/juri.json": [76395, 76395],
        "./it/character/frame/ken": [12253, 12253],
        "./it/character/frame/ken.json": [12253, 12253],
        "./it/character/frame/kimberly": [34275, 56656],
        "./it/character/frame/kimberly.json": [34275, 56656],
        "./it/character/frame/lily": [61067, 61067],
        "./it/character/frame/lily.json": [61067, 61067],
        "./it/character/frame/luke": [9660, 9660],
        "./it/character/frame/luke.json": [9660, 9660],
        "./it/character/frame/mai": [11070, 11070],
        "./it/character/frame/mai.json": [11070, 11070],
        "./it/character/frame/manon": [99230, 99230],
        "./it/character/frame/manon.json": [99230, 99230],
        "./it/character/frame/marisa": [25244, 25244],
        "./it/character/frame/marisa.json": [25244, 25244],
        "./it/character/frame/rashid": [66620, 66620],
        "./it/character/frame/rashid.json": [66620, 66620],
        "./it/character/frame/ryu": [90995, 90995],
        "./it/character/frame/ryu.json": [90995, 90995],
        "./it/character/frame/sagat": [13727, 13727],
        "./it/character/frame/sagat.json": [13727, 13727],
        "./it/character/frame/terry": [26389, 26389],
        "./it/character/frame/terry.json": [26389, 26389],
        "./it/character/frame/vega_mbison": [98567, 98567],
        "./it/character/frame/vega_mbison.json": [98567, 98567],
        "./it/character/frame/zangief": [1117, 1117],
        "./it/character/frame/zangief.json": [1117, 1117],
        "./it/character/gouki_akuma": [75702, 75702],
        "./it/character/gouki_akuma.json": [75702, 75702],
        "./it/character/guile": [68725, 68725],
        "./it/character/guile.json": [68725, 68725],
        "./it/character/ingrid": [10334, 10334],
        "./it/character/ingrid.json": [10334, 10334],
        "./it/character/jamie": [79271, 79271],
        "./it/character/jamie.json": [79271, 79271],
        "./it/character/jp": [59452, 59452],
        "./it/character/jp.json": [59452, 59452],
        "./it/character/juri": [86821, 86821],
        "./it/character/juri.json": [86821, 86821],
        "./it/character/ken": [9331, 9331],
        "./it/character/ken.json": [9331, 9331],
        "./it/character/kimberly": [71974, 71974],
        "./it/character/kimberly.json": [71974, 71974],
        "./it/character/lily": [10053, 10053],
        "./it/character/lily.json": [10053, 10053],
        "./it/character/luke": [55026, 55026],
        "./it/character/luke.json": [55026, 55026],
        "./it/character/mai": [73236, 73236],
        "./it/character/mai.json": [73236, 73236],
        "./it/character/manon": [20824, 20824],
        "./it/character/manon.json": [20824, 20824],
        "./it/character/marisa": [9206, 9206],
        "./it/character/marisa.json": [9206, 9206],
        "./it/character/movelist/_common": [10123, 10123],
        "./it/character/movelist/_common.json": [10123, 10123],
        "./it/character/movelist/aki": [65896, 65896],
        "./it/character/movelist/aki.json": [65896, 65896],
        "./it/character/movelist/alex": [77959, 77959],
        "./it/character/movelist/alex.json": [77959, 77959],
        "./it/character/movelist/blanka": [39278, 39278],
        "./it/character/movelist/blanka.json": [39278, 39278],
        "./it/character/movelist/cammy": [45250, 45250],
        "./it/character/movelist/cammy.json": [45250, 45250],
        "./it/character/movelist/chunli": [9264, 9264],
        "./it/character/movelist/chunli.json": [9264, 9264],
        "./it/character/movelist/cviper": [47044, 47044],
        "./it/character/movelist/cviper.json": [47044, 47044],
        "./it/character/movelist/deejay": [63601, 63601],
        "./it/character/movelist/deejay.json": [63601, 63601],
        "./it/character/movelist/dhalsim": [73799, 73799],
        "./it/character/movelist/dhalsim.json": [73799, 73799],
        "./it/character/movelist/ed": [4406, 4406],
        "./it/character/movelist/ed.json": [4406, 4406],
        "./it/character/movelist/ehonda": [25820, 25820],
        "./it/character/movelist/ehonda.json": [25820, 25820],
        "./it/character/movelist/elena": [39474, 39474],
        "./it/character/movelist/elena.json": [39474, 39474],
        "./it/character/movelist/gouki_akuma": [78008, 78008],
        "./it/character/movelist/gouki_akuma.json": [78008, 78008],
        "./it/character/movelist/guile": [16919, 16919],
        "./it/character/movelist/guile.json": [16919, 16919],
        "./it/character/movelist/ingrid": [96100, 96100],
        "./it/character/movelist/ingrid.json": [96100, 96100],
        "./it/character/movelist/jamie": [56545, 56545],
        "./it/character/movelist/jamie.json": [56545, 56545],
        "./it/character/movelist/jp": [71893, 71893],
        "./it/character/movelist/jp.json": [71893, 71893],
        "./it/character/movelist/juri": [44095, 44095],
        "./it/character/movelist/juri.json": [44095, 44095],
        "./it/character/movelist/ken": [75265, 75265],
        "./it/character/movelist/ken.json": [75265, 75265],
        "./it/character/movelist/kimberly": [76276, 76276],
        "./it/character/movelist/kimberly.json": [76276, 76276],
        "./it/character/movelist/lily": [23735, 23735],
        "./it/character/movelist/lily.json": [23735, 23735],
        "./it/character/movelist/luke": [39936, 39936],
        "./it/character/movelist/luke.json": [39936, 39936],
        "./it/character/movelist/mai": [122, 122],
        "./it/character/movelist/mai.json": [122, 122],
        "./it/character/movelist/manon": [63714, 63714],
        "./it/character/movelist/manon.json": [63714, 63714],
        "./it/character/movelist/marisa": [8800, 8800],
        "./it/character/movelist/marisa.json": [8800, 8800],
        "./it/character/movelist/rashid": [45184, 45184],
        "./it/character/movelist/rashid.json": [45184, 45184],
        "./it/character/movelist/ryu": [19551, 19551],
        "./it/character/movelist/ryu.json": [19551, 19551],
        "./it/character/movelist/sagat": [12640, 90259],
        "./it/character/movelist/sagat.json": [12640, 90259],
        "./it/character/movelist/terry": [60521, 60521],
        "./it/character/movelist/terry.json": [60521, 60521],
        "./it/character/movelist/vega_mbison": [69907, 69907],
        "./it/character/movelist/vega_mbison.json": [69907, 69907],
        "./it/character/movelist/zangief": [53841, 53841],
        "./it/character/movelist/zangief.json": [53841, 53841],
        "./it/character/outfit/aki": [8250, 8250],
        "./it/character/outfit/aki.json": [8250, 8250],
        "./it/character/outfit/alex": [18017, 18017],
        "./it/character/outfit/alex.json": [18017, 18017],
        "./it/character/outfit/blanka": [56796, 56796],
        "./it/character/outfit/blanka.json": [56796, 56796],
        "./it/character/outfit/cammy": [23796, 23796],
        "./it/character/outfit/cammy.json": [23796, 23796],
        "./it/character/outfit/chunli": [71370, 71370],
        "./it/character/outfit/chunli.json": [71370, 71370],
        "./it/character/outfit/cviper": [95226, 95226],
        "./it/character/outfit/cviper.json": [95226, 95226],
        "./it/character/outfit/deejay": [10471, 10471],
        "./it/character/outfit/deejay.json": [10471, 10471],
        "./it/character/outfit/dhalsim": [3137, 3137],
        "./it/character/outfit/dhalsim.json": [3137, 3137],
        "./it/character/outfit/ed": [81432, 81432],
        "./it/character/outfit/ed.json": [81432, 81432],
        "./it/character/outfit/ehonda": [79406, 79406],
        "./it/character/outfit/ehonda.json": [79406, 79406],
        "./it/character/outfit/elena": [41540, 41540],
        "./it/character/outfit/elena.json": [41540, 41540],
        "./it/character/outfit/gouki_akuma": [81410, 81410],
        "./it/character/outfit/gouki_akuma.json": [81410, 81410],
        "./it/character/outfit/guile": [69329, 69329],
        "./it/character/outfit/guile.json": [69329, 69329],
        "./it/character/outfit/ingrid": [80890, 80890],
        "./it/character/outfit/ingrid.json": [80890, 80890],
        "./it/character/outfit/jamie": [87683, 87683],
        "./it/character/outfit/jamie.json": [87683, 87683],
        "./it/character/outfit/jp": [95363, 95363],
        "./it/character/outfit/jp.json": [95363, 95363],
        "./it/character/outfit/juri": [3505, 3505],
        "./it/character/outfit/juri.json": [3505, 3505],
        "./it/character/outfit/ken": [21487, 21487],
        "./it/character/outfit/ken.json": [21487, 21487],
        "./it/character/outfit/kimberly": [15554, 15554],
        "./it/character/outfit/kimberly.json": [15554, 15554],
        "./it/character/outfit/lily": [40665, 40665],
        "./it/character/outfit/lily.json": [40665, 40665],
        "./it/character/outfit/luke": [14398, 14398],
        "./it/character/outfit/luke.json": [14398, 14398],
        "./it/character/outfit/mai": [74024, 74024],
        "./it/character/outfit/mai.json": [74024, 74024],
        "./it/character/outfit/manon": [19332, 19332],
        "./it/character/outfit/manon.json": [19332, 19332],
        "./it/character/outfit/marisa": [36594, 36594],
        "./it/character/outfit/marisa.json": [36594, 36594],
        "./it/character/outfit/rashid": [34714, 34714],
        "./it/character/outfit/rashid.json": [34714, 34714],
        "./it/character/outfit/ryu": [60681, 60681],
        "./it/character/outfit/ryu.json": [60681, 60681],
        "./it/character/outfit/sagat": [11729, 11729],
        "./it/character/outfit/sagat.json": [11729, 11729],
        "./it/character/outfit/terry": [50143, 50143],
        "./it/character/outfit/terry.json": [50143, 50143],
        "./it/character/outfit/vega_mbison": [66541, 66541],
        "./it/character/outfit/vega_mbison.json": [66541, 66541],
        "./it/character/outfit/zangief": [88719, 88719],
        "./it/character/outfit/zangief.json": [88719, 88719],
        "./it/character/rashid": [81342, 81342],
        "./it/character/rashid.json": [81342, 81342],
        "./it/character/ryu": [28757, 28757],
        "./it/character/ryu.json": [28757, 28757],
        "./it/character/sagat": [35557, 35557],
        "./it/character/sagat.json": [35557, 35557],
        "./it/character/terry": [68883, 68883],
        "./it/character/terry.json": [68883, 68883],
        "./it/character/vega_mbison": [69353, 69353],
        "./it/character/vega_mbison.json": [69353, 69353],
        "./it/character/zangief": [13827, 13827],
        "./it/character/zangief.json": [13827, 13827],
        "./it/column": [78015, 78015],
        "./it/column.json": [78015, 78015],
        "./it/common": [9868, 9868],
        "./it/common.json": [9868, 9868],
        "./it/concept": [42361, 42361],
        "./it/concept.json": [42361, 42361],
        "./it/demo": [36034, 36034],
        "./it/demo.json": [36034, 36034],
        "./it/guide": [47669, 47669],
        "./it/guide.json": [47669, 47669],
        "./it/index": [76753, 76753],
        "./it/index.json": [76753, 76753],
        "./it/live": [35588, 35588],
        "./it/live.json": [35588, 35588],
        "./it/mode/battlehub": [50880, 50880],
        "./it/mode/battlehub.json": [50880, 50880],
        "./it/mode/fightingground": [88972, 88972],
        "./it/mode/fightingground.json": [88972, 88972],
        "./it/mode/worldtour": [19759, 19759],
        "./it/mode/worldtour.json": [19759, 19759],
        "./it/news": [39034, 39034],
        "./it/news.json": [39034, 39034],
        "./it/product": [43285, 65666],
        "./it/product.json": [43285, 65666],
        "./ja-jp": [34302, 34302],
        "./ja-jp/": [34302, 34302],
        "./ja-jp/character": [36165, 36165],
        "./ja-jp/character.json": [36165, 36165],
        "./ja-jp/character/aki": [41385, 41385],
        "./ja-jp/character/aki.json": [41385, 41385],
        "./ja-jp/character/alex": [21912, 21912],
        "./ja-jp/character/alex.json": [21912, 21912],
        "./ja-jp/character/blanka": [87565, 87565],
        "./ja-jp/character/blanka.json": [87565, 87565],
        "./ja-jp/character/cammy": [70267, 70267],
        "./ja-jp/character/cammy.json": [70267, 70267],
        "./ja-jp/character/chunli": [8139, 8139],
        "./ja-jp/character/chunli.json": [8139, 8139],
        "./ja-jp/character/cviper": [93971, 93971],
        "./ja-jp/character/cviper.json": [93971, 93971],
        "./ja-jp/character/deejay": [31234, 31234],
        "./ja-jp/character/deejay.json": [31234, 31234],
        "./ja-jp/character/dhalsim": [49326, 49326],
        "./ja-jp/character/dhalsim.json": [49326, 49326],
        "./ja-jp/character/ed": [99513, 99513],
        "./ja-jp/character/ed.json": [99513, 99513],
        "./ja-jp/character/ehonda": [5071, 5071],
        "./ja-jp/character/ehonda.json": [5071, 5071],
        "./ja-jp/character/elena": [24783, 24783],
        "./ja-jp/character/elena.json": [24783, 24783],
        "./ja-jp/character/frame/_common": [61304, 61304],
        "./ja-jp/character/frame/_common.json": [61304, 61304],
        "./ja-jp/character/frame/aki": [57247, 57247],
        "./ja-jp/character/frame/aki.json": [57247, 57247],
        "./ja-jp/character/frame/alex": [27641, 50022],
        "./ja-jp/character/frame/alex.json": [27641, 50022],
        "./ja-jp/character/frame/blanka": [71415, 71415],
        "./ja-jp/character/frame/blanka.json": [71415, 71415],
        "./ja-jp/character/frame/cammy": [67921, 67921],
        "./ja-jp/character/frame/cammy.json": [67921, 67921],
        "./ja-jp/character/frame/chunli": [42529, 42529],
        "./ja-jp/character/frame/chunli.json": [42529, 42529],
        "./ja-jp/character/frame/cviper": [96373, 96373],
        "./ja-jp/character/frame/cviper.json": [96373, 96373],
        "./ja-jp/character/frame/deejay": [83004, 83004],
        "./ja-jp/character/frame/deejay.json": [83004, 83004],
        "./ja-jp/character/frame/dhalsim": [48268, 48268],
        "./ja-jp/character/frame/dhalsim.json": [48268, 48268],
        "./ja-jp/character/frame/ed": [7087, 7087],
        "./ja-jp/character/frame/ed.json": [7087, 7087],
        "./ja-jp/character/frame/ehonda": [66829, 66829],
        "./ja-jp/character/frame/ehonda.json": [66829, 66829],
        "./ja-jp/character/frame/elena": [17733, 17733],
        "./ja-jp/character/frame/elena.json": [17733, 17733],
        "./ja-jp/character/frame/gouki_akuma": [58208, 58208],
        "./ja-jp/character/frame/gouki_akuma.json": [58208, 58208],
        "./ja-jp/character/frame/guile": [87956, 87956],
        "./ja-jp/character/frame/guile.json": [87956, 87956],
        "./ja-jp/character/frame/ingrid": [30621, 30621],
        "./ja-jp/character/frame/ingrid.json": [30621, 30621],
        "./ja-jp/character/frame/jamie": [26786, 26786],
        "./ja-jp/character/frame/jamie.json": [26786, 26786],
        "./ja-jp/character/frame/jp": [52540, 52540],
        "./ja-jp/character/frame/jp.json": [52540, 52540],
        "./ja-jp/character/frame/juri": [65670, 65670],
        "./ja-jp/character/frame/juri.json": [65670, 65670],
        "./ja-jp/character/frame/ken": [42894, 42894],
        "./ja-jp/character/frame/ken.json": [42894, 42894],
        "./ja-jp/character/frame/kimberly": [10333, 10333],
        "./ja-jp/character/frame/kimberly.json": [10333, 10333],
        "./ja-jp/character/frame/lily": [21414, 21414],
        "./ja-jp/character/frame/lily.json": [21414, 21414],
        "./ja-jp/character/frame/luke": [89841, 89841],
        "./ja-jp/character/frame/luke.json": [89841, 89841],
        "./ja-jp/character/frame/mai": [43053, 43053],
        "./ja-jp/character/frame/mai.json": [43053, 43053],
        "./ja-jp/character/frame/manon": [89109, 89109],
        "./ja-jp/character/frame/manon.json": [89109, 89109],
        "./ja-jp/character/frame/marisa": [38837, 38837],
        "./ja-jp/character/frame/marisa.json": [38837, 38837],
        "./ja-jp/character/frame/rashid": [141, 141],
        "./ja-jp/character/frame/rashid.json": [141, 141],
        "./ja-jp/character/frame/ryu": [61196, 61196],
        "./ja-jp/character/frame/ryu.json": [61196, 61196],
        "./ja-jp/character/frame/sagat": [34140, 34140],
        "./ja-jp/character/frame/sagat.json": [34140, 34140],
        "./ja-jp/character/frame/terry": [15250, 15250],
        "./ja-jp/character/frame/terry.json": [15250, 15250],
        "./ja-jp/character/frame/vega_mbison": [10292, 10292],
        "./ja-jp/character/frame/vega_mbison.json": [10292, 10292],
        "./ja-jp/character/frame/zangief": [80674, 80674],
        "./ja-jp/character/frame/zangief.json": [80674, 80674],
        "./ja-jp/character/gouki_akuma": [85045, 85045],
        "./ja-jp/character/gouki_akuma.json": [85045, 85045],
        "./ja-jp/character/guile": [64750, 64750],
        "./ja-jp/character/guile.json": [64750, 64750],
        "./ja-jp/character/ingrid": [71139, 71139],
        "./ja-jp/character/ingrid.json": [71139, 71139],
        "./ja-jp/character/jamie": [3652, 3652],
        "./ja-jp/character/jamie.json": [3652, 3652],
        "./ja-jp/character/jp": [33642, 33642],
        "./ja-jp/character/jp.json": [33642, 33642],
        "./ja-jp/character/juri": [13696, 13696],
        "./ja-jp/character/juri.json": [13696, 13696],
        "./ja-jp/character/ken": [53348, 53348],
        "./ja-jp/character/ken.json": [53348, 53348],
        "./ja-jp/character/kimberly": [44011, 44011],
        "./ja-jp/character/kimberly.json": [44011, 44011],
        "./ja-jp/character/lily": [66120, 66120],
        "./ja-jp/character/lily.json": [66120, 66120],
        "./ja-jp/character/luke": [575, 575],
        "./ja-jp/character/luke.json": [575, 575],
        "./ja-jp/character/mai": [81595, 81595],
        "./ja-jp/character/mai.json": [81595, 81595],
        "./ja-jp/character/manon": [89143, 89143],
        "./ja-jp/character/manon.json": [89143, 89143],
        "./ja-jp/character/marisa": [83063, 83063],
        "./ja-jp/character/marisa.json": [83063, 83063],
        "./ja-jp/character/movelist/_common": [76934, 76934],
        "./ja-jp/character/movelist/_common.json": [76934, 76934],
        "./ja-jp/character/movelist/aki": [82549, 82549],
        "./ja-jp/character/movelist/aki.json": [82549, 82549],
        "./ja-jp/character/movelist/alex": [58684, 58684],
        "./ja-jp/character/movelist/alex.json": [58684, 58684],
        "./ja-jp/character/movelist/blanka": [85982, 85982],
        "./ja-jp/character/movelist/blanka.json": [85982, 85982],
        "./ja-jp/character/movelist/cammy": [2807, 2807],
        "./ja-jp/character/movelist/cammy.json": [2807, 2807],
        "./ja-jp/character/movelist/chunli": [21239, 21239],
        "./ja-jp/character/movelist/chunli.json": [21239, 21239],
        "./ja-jp/character/movelist/cviper": [16967, 16967],
        "./ja-jp/character/movelist/cviper.json": [16967, 16967],
        "./ja-jp/character/movelist/deejay": [88766, 88766],
        "./ja-jp/character/movelist/deejay.json": [88766, 88766],
        "./ja-jp/character/movelist/dhalsim": [13410, 13410],
        "./ja-jp/character/movelist/dhalsim.json": [13410, 13410],
        "./ja-jp/character/movelist/ed": [93869, 93869],
        "./ja-jp/character/movelist/ed.json": [93869, 93869],
        "./ja-jp/character/movelist/ehonda": [1379, 1379],
        "./ja-jp/character/movelist/ehonda.json": [1379, 1379],
        "./ja-jp/character/movelist/elena": [59691, 59691],
        "./ja-jp/character/movelist/elena.json": [59691, 59691],
        "./ja-jp/character/movelist/gouki_akuma": [47825, 47825],
        "./ja-jp/character/movelist/gouki_akuma.json": [47825, 47825],
        "./ja-jp/character/movelist/guile": [10058, 10058],
        "./ja-jp/character/movelist/guile.json": [10058, 10058],
        "./ja-jp/character/movelist/ingrid": [30543, 30543],
        "./ja-jp/character/movelist/ingrid.json": [30543, 30543],
        "./ja-jp/character/movelist/jamie": [30816, 30816],
        "./ja-jp/character/movelist/jamie.json": [30816, 30816],
        "./ja-jp/character/movelist/jp": [79294, 79294],
        "./ja-jp/character/movelist/jp.json": [79294, 79294],
        "./ja-jp/character/movelist/juri": [25708, 25708],
        "./ja-jp/character/movelist/juri.json": [25708, 25708],
        "./ja-jp/character/movelist/ken": [26944, 26944],
        "./ja-jp/character/movelist/ken.json": [26944, 26944],
        "./ja-jp/character/movelist/kimberly": [24439, 24439],
        "./ja-jp/character/movelist/kimberly.json": [24439, 24439],
        "./ja-jp/character/movelist/lily": [36732, 36732],
        "./ja-jp/character/movelist/lily.json": [36732, 36732],
        "./ja-jp/character/movelist/luke": [7563, 7563],
        "./ja-jp/character/movelist/luke.json": [7563, 7563],
        "./ja-jp/character/movelist/mai": [37567, 37567],
        "./ja-jp/character/movelist/mai.json": [37567, 37567],
        "./ja-jp/character/movelist/manon": [42803, 42803],
        "./ja-jp/character/movelist/manon.json": [42803, 42803],
        "./ja-jp/character/movelist/marisa": [80563, 80563],
        "./ja-jp/character/movelist/marisa.json": [80563, 80563],
        "./ja-jp/character/movelist/rashid": [10811, 10811],
        "./ja-jp/character/movelist/rashid.json": [10811, 10811],
        "./ja-jp/character/movelist/ryu": [2157, 24538],
        "./ja-jp/character/movelist/ryu.json": [2157, 24538],
        "./ja-jp/character/movelist/sagat": [92550, 92550],
        "./ja-jp/character/movelist/sagat.json": [92550, 92550],
        "./ja-jp/character/movelist/terry": [49604, 49604],
        "./ja-jp/character/movelist/terry.json": [49604, 49604],
        "./ja-jp/character/movelist/vega_mbison": [42834, 42834],
        "./ja-jp/character/movelist/vega_mbison.json": [42834, 42834],
        "./ja-jp/character/movelist/zangief": [4548, 4548],
        "./ja-jp/character/movelist/zangief.json": [4548, 4548],
        "./ja-jp/character/outfit/aki": [41703, 41703],
        "./ja-jp/character/outfit/aki.json": [41703, 41703],
        "./ja-jp/character/outfit/alex": [72862, 72862],
        "./ja-jp/character/outfit/alex.json": [72862, 72862],
        "./ja-jp/character/outfit/blanka": [80223, 80223],
        "./ja-jp/character/outfit/blanka.json": [80223, 80223],
        "./ja-jp/character/outfit/cammy": [73225, 73225],
        "./ja-jp/character/outfit/cammy.json": [73225, 73225],
        "./ja-jp/character/outfit/chunli": [44889, 44889],
        "./ja-jp/character/outfit/chunli.json": [44889, 44889],
        "./ja-jp/character/outfit/cviper": [73757, 73757],
        "./ja-jp/character/outfit/cviper.json": [73757, 73757],
        "./ja-jp/character/outfit/deejay": [27316, 27316],
        "./ja-jp/character/outfit/deejay.json": [27316, 27316],
        "./ja-jp/character/outfit/dhalsim": [84724, 84724],
        "./ja-jp/character/outfit/dhalsim.json": [84724, 84724],
        "./ja-jp/character/outfit/ed": [34119, 34119],
        "./ja-jp/character/outfit/ed.json": [34119, 34119],
        "./ja-jp/character/outfit/ehonda": [341, 341],
        "./ja-jp/character/outfit/ehonda.json": [341, 341],
        "./ja-jp/character/outfit/elena": [48685, 48685],
        "./ja-jp/character/outfit/elena.json": [48685, 48685],
        "./ja-jp/character/outfit/gouki_akuma": [31163, 31163],
        "./ja-jp/character/outfit/gouki_akuma.json": [31163, 31163],
        "./ja-jp/character/outfit/guile": [1916, 1916],
        "./ja-jp/character/outfit/guile.json": [1916, 1916],
        "./ja-jp/character/outfit/ingrid": [41413, 41413],
        "./ja-jp/character/outfit/ingrid.json": [41413, 41413],
        "./ja-jp/character/outfit/jamie": [89882, 89882],
        "./ja-jp/character/outfit/jamie.json": [89882, 89882],
        "./ja-jp/character/outfit/jp": [33988, 33988],
        "./ja-jp/character/outfit/jp.json": [33988, 33988],
        "./ja-jp/character/outfit/juri": [15614, 15614],
        "./ja-jp/character/outfit/juri.json": [15614, 15614],
        "./ja-jp/character/outfit/ken": [4182, 4182],
        "./ja-jp/character/outfit/ken.json": [4182, 4182],
        "./ja-jp/character/outfit/kimberly": [43941, 43941],
        "./ja-jp/character/outfit/kimberly.json": [43941, 43941],
        "./ja-jp/character/outfit/lily": [958, 958],
        "./ja-jp/character/outfit/lily.json": [958, 958],
        "./ja-jp/character/outfit/luke": [30441, 30441],
        "./ja-jp/character/outfit/luke.json": [30441, 30441],
        "./ja-jp/character/outfit/mai": [75477, 75477],
        "./ja-jp/character/outfit/mai.json": [75477, 75477],
        "./ja-jp/character/outfit/manon": [45341, 45341],
        "./ja-jp/character/outfit/manon.json": [45341, 45341],
        "./ja-jp/character/outfit/marisa": [73229, 73229],
        "./ja-jp/character/outfit/marisa.json": [73229, 73229],
        "./ja-jp/character/outfit/rashid": [36133, 36133],
        "./ja-jp/character/outfit/rashid.json": [36133, 36133],
        "./ja-jp/character/outfit/ryu": [64356, 64356],
        "./ja-jp/character/outfit/ryu.json": [64356, 64356],
        "./ja-jp/character/outfit/sagat": [67140, 67140],
        "./ja-jp/character/outfit/sagat.json": [67140, 67140],
        "./ja-jp/character/outfit/terry": [47146, 47146],
        "./ja-jp/character/outfit/terry.json": [47146, 47146],
        "./ja-jp/character/outfit/vega_mbison": [12172, 12172],
        "./ja-jp/character/outfit/vega_mbison.json": [12172, 12172],
        "./ja-jp/character/outfit/zangief": [82522, 82522],
        "./ja-jp/character/outfit/zangief.json": [82522, 82522],
        "./ja-jp/character/rashid": [47999, 47999],
        "./ja-jp/character/rashid.json": [47999, 47999],
        "./ja-jp/character/ryu": [86998, 86998],
        "./ja-jp/character/ryu.json": [86998, 86998],
        "./ja-jp/character/sagat": [15082, 15082],
        "./ja-jp/character/sagat.json": [15082, 15082],
        "./ja-jp/character/terry": [44136, 44136],
        "./ja-jp/character/terry.json": [44136, 44136],
        "./ja-jp/character/vega_mbison": [93710, 93710],
        "./ja-jp/character/vega_mbison.json": [93710, 93710],
        "./ja-jp/character/zangief": [67416, 67416],
        "./ja-jp/character/zangief.json": [67416, 67416],
        "./ja-jp/column": [11474, 11474],
        "./ja-jp/column.json": [11474, 11474],
        "./ja-jp/common": [58585, 58585],
        "./ja-jp/common.json": [58585, 58585],
        "./ja-jp/concept": [26894, 26894],
        "./ja-jp/concept.json": [26894, 26894],
        "./ja-jp/demo": [69211, 69211],
        "./ja-jp/demo.json": [69211, 69211],
        "./ja-jp/guide": [45718, 45718],
        "./ja-jp/guide.json": [45718, 45718],
        "./ja-jp/index": [34302, 34302],
        "./ja-jp/index.json": [34302, 34302],
        "./ja-jp/live": [79018, 79018],
        "./ja-jp/live.json": [79018, 79018],
        "./ja-jp/mode/battlehub": [39385, 39385],
        "./ja-jp/mode/battlehub.json": [39385, 39385],
        "./ja-jp/mode/fightingground": [39799, 39799],
        "./ja-jp/mode/fightingground.json": [39799, 39799],
        "./ja-jp/mode/worldtour": [74294, 74294],
        "./ja-jp/mode/worldtour.json": [74294, 74294],
        "./ja-jp/news": [80931, 80931],
        "./ja-jp/news.json": [80931, 80931],
        "./ja-jp/product": [84193, 84193],
        "./ja-jp/product.json": [84193, 84193],
        "./ko-kr": [96068, 96068],
        "./ko-kr/": [96068, 96068],
        "./ko-kr/character": [57783, 57783],
        "./ko-kr/character.json": [57783, 57783],
        "./ko-kr/character/aki": [95843, 95843],
        "./ko-kr/character/aki.json": [95843, 95843],
        "./ko-kr/character/alex": [58818, 58818],
        "./ko-kr/character/alex.json": [58818, 58818],
        "./ko-kr/character/blanka": [33619, 33619],
        "./ko-kr/character/blanka.json": [33619, 33619],
        "./ko-kr/character/cammy": [20309, 20309],
        "./ko-kr/character/cammy.json": [20309, 20309],
        "./ko-kr/character/chunli": [5541, 5541],
        "./ko-kr/character/chunli.json": [5541, 5541],
        "./ko-kr/character/cviper": [36193, 36193],
        "./ko-kr/character/cviper.json": [36193, 36193],
        "./ko-kr/character/deejay": [35232, 35232],
        "./ko-kr/character/deejay.json": [35232, 35232],
        "./ko-kr/character/dhalsim": [16872, 16872],
        "./ko-kr/character/dhalsim.json": [16872, 16872],
        "./ko-kr/character/ed": [7835, 7835],
        "./ko-kr/character/ed.json": [7835, 7835],
        "./ko-kr/character/ehonda": [4873, 4873],
        "./ko-kr/character/ehonda.json": [4873, 4873],
        "./ko-kr/character/elena": [32585, 32585],
        "./ko-kr/character/elena.json": [32585, 32585],
        "./ko-kr/character/frame/_common": [43686, 43686],
        "./ko-kr/character/frame/_common.json": [43686, 43686],
        "./ko-kr/character/frame/aki": [59893, 59893],
        "./ko-kr/character/frame/aki.json": [59893, 59893],
        "./ko-kr/character/frame/alex": [69244, 69244],
        "./ko-kr/character/frame/alex.json": [69244, 69244],
        "./ko-kr/character/frame/blanka": [36401, 36401],
        "./ko-kr/character/frame/blanka.json": [36401, 36401],
        "./ko-kr/character/frame/cammy": [81111, 81111],
        "./ko-kr/character/frame/cammy.json": [81111, 81111],
        "./ko-kr/character/frame/chunli": [77687, 77687],
        "./ko-kr/character/frame/chunli.json": [77687, 77687],
        "./ko-kr/character/frame/cviper": [73415, 73415],
        "./ko-kr/character/frame/cviper.json": [73415, 73415],
        "./ko-kr/character/frame/deejay": [45214, 45214],
        "./ko-kr/character/frame/deejay.json": [45214, 45214],
        "./ko-kr/character/frame/dhalsim": [96514, 96514],
        "./ko-kr/character/frame/dhalsim.json": [96514, 96514],
        "./ko-kr/character/frame/ed": [94618, 94618],
        "./ko-kr/character/frame/ed.json": [94618, 94618],
        "./ko-kr/character/frame/ehonda": [74179, 74179],
        "./ko-kr/character/frame/ehonda.json": [74179, 74179],
        "./ko-kr/character/frame/elena": [37995, 37995],
        "./ko-kr/character/frame/elena.json": [37995, 37995],
        "./ko-kr/character/frame/gouki_akuma": [25521, 25521],
        "./ko-kr/character/frame/gouki_akuma.json": [25521, 25521],
        "./ko-kr/character/frame/guile": [4714, 4714],
        "./ko-kr/character/frame/guile.json": [4714, 4714],
        "./ko-kr/character/frame/ingrid": [86991, 86991],
        "./ko-kr/character/frame/ingrid.json": [86991, 86991],
        "./ko-kr/character/frame/jamie": [9120, 9120],
        "./ko-kr/character/frame/jamie.json": [9120, 9120],
        "./ko-kr/character/frame/jp": [57662, 57662],
        "./ko-kr/character/frame/jp.json": [57662, 57662],
        "./ko-kr/character/frame/juri": [36268, 36268],
        "./ko-kr/character/frame/juri.json": [36268, 36268],
        "./ko-kr/character/frame/ken": [4288, 4288],
        "./ko-kr/character/frame/ken.json": [4288, 4288],
        "./ko-kr/character/frame/kimberly": [94039, 94039],
        "./ko-kr/character/frame/kimberly.json": [94039, 94039],
        "./ko-kr/character/frame/lily": [47292, 47292],
        "./ko-kr/character/frame/lily.json": [47292, 47292],
        "./ko-kr/character/frame/luke": [34475, 34475],
        "./ko-kr/character/frame/luke.json": [34475, 34475],
        "./ko-kr/character/frame/mai": [98559, 98559],
        "./ko-kr/character/frame/mai.json": [98559, 98559],
        "./ko-kr/character/frame/manon": [59840, 59840],
        "./ko-kr/character/frame/manon.json": [59840, 59840],
        "./ko-kr/character/frame/marisa": [37011, 37011],
        "./ko-kr/character/frame/marisa.json": [37011, 37011],
        "./ko-kr/character/frame/rashid": [83611, 83611],
        "./ko-kr/character/frame/rashid.json": [83611, 83611],
        "./ko-kr/character/frame/ryu": [1882, 1882],
        "./ko-kr/character/frame/ryu.json": [1882, 1882],
        "./ko-kr/character/frame/sagat": [87206, 87206],
        "./ko-kr/character/frame/sagat.json": [87206, 87206],
        "./ko-kr/character/frame/terry": [44260, 44260],
        "./ko-kr/character/frame/terry.json": [44260, 44260],
        "./ko-kr/character/frame/vega_mbison": [20530, 20530],
        "./ko-kr/character/frame/vega_mbison.json": [20530, 20530],
        "./ko-kr/character/frame/zangief": [87652, 87652],
        "./ko-kr/character/frame/zangief.json": [87652, 87652],
        "./ko-kr/character/gouki_akuma": [87255, 87255],
        "./ko-kr/character/gouki_akuma.json": [87255, 87255],
        "./ko-kr/character/guile": [67672, 67672],
        "./ko-kr/character/guile.json": [67672, 67672],
        "./ko-kr/character/ingrid": [70577, 70577],
        "./ko-kr/character/ingrid.json": [70577, 70577],
        "./ko-kr/character/jamie": [80694, 80694],
        "./ko-kr/character/jamie.json": [80694, 80694],
        "./ko-kr/character/jp": [85928, 85928],
        "./ko-kr/character/jp.json": [85928, 85928],
        "./ko-kr/character/juri": [21306, 21306],
        "./ko-kr/character/juri.json": [21306, 21306],
        "./ko-kr/character/ken": [55858, 55858],
        "./ko-kr/character/ken.json": [55858, 55858],
        "./ko-kr/character/kimberly": [46065, 46065],
        "./ko-kr/character/kimberly.json": [46065, 46065],
        "./ko-kr/character/lily": [72274, 72274],
        "./ko-kr/character/lily.json": [72274, 72274],
        "./ko-kr/character/luke": [3765, 3765],
        "./ko-kr/character/luke.json": [3765, 3765],
        "./ko-kr/character/mai": [30281, 30281],
        "./ko-kr/character/mai.json": [30281, 30281],
        "./ko-kr/character/manon": [30457, 30457],
        "./ko-kr/character/manon.json": [30457, 30457],
        "./ko-kr/character/marisa": [3465, 3465],
        "./ko-kr/character/marisa.json": [3465, 3465],
        "./ko-kr/character/movelist/_common": [26308, 26308],
        "./ko-kr/character/movelist/_common.json": [26308, 26308],
        "./ko-kr/character/movelist/aki": [86795, 86795],
        "./ko-kr/character/movelist/aki.json": [86795, 86795],
        "./ko-kr/character/movelist/alex": [40442, 40442],
        "./ko-kr/character/movelist/alex.json": [40442, 40442],
        "./ko-kr/character/movelist/blanka": [55163, 55163],
        "./ko-kr/character/movelist/blanka.json": [55163, 55163],
        "./ko-kr/character/movelist/cammy": [21549, 21549],
        "./ko-kr/character/movelist/cammy.json": [21549, 21549],
        "./ko-kr/character/movelist/chunli": [50749, 50749],
        "./ko-kr/character/movelist/chunli.json": [50749, 50749],
        "./ko-kr/character/movelist/cviper": [92329, 92329],
        "./ko-kr/character/movelist/cviper.json": [92329, 92329],
        "./ko-kr/character/movelist/deejay": [13720, 13720],
        "./ko-kr/character/movelist/deejay.json": [13720, 13720],
        "./ko-kr/character/movelist/dhalsim": [73008, 73008],
        "./ko-kr/character/movelist/dhalsim.json": [73008, 73008],
        "./ko-kr/character/movelist/ed": [53555, 53555],
        "./ko-kr/character/movelist/ed.json": [53555, 53555],
        "./ko-kr/character/movelist/ehonda": [32273, 32273],
        "./ko-kr/character/movelist/ehonda.json": [32273, 32273],
        "./ko-kr/character/movelist/elena": [13713, 13713],
        "./ko-kr/character/movelist/elena.json": [13713, 13713],
        "./ko-kr/character/movelist/gouki_akuma": [69343, 69343],
        "./ko-kr/character/movelist/gouki_akuma.json": [69343, 69343],
        "./ko-kr/character/movelist/guile": [35136, 35136],
        "./ko-kr/character/movelist/guile.json": [35136, 35136],
        "./ko-kr/character/movelist/ingrid": [46937, 46937],
        "./ko-kr/character/movelist/ingrid.json": [46937, 46937],
        "./ko-kr/character/movelist/jamie": [91086, 91086],
        "./ko-kr/character/movelist/jamie.json": [91086, 91086],
        "./ko-kr/character/movelist/jp": [23088, 23088],
        "./ko-kr/character/movelist/jp.json": [23088, 23088],
        "./ko-kr/character/movelist/juri": [95506, 95506],
        "./ko-kr/character/movelist/juri.json": [95506, 95506],
        "./ko-kr/character/movelist/ken": [66010, 66010],
        "./ko-kr/character/movelist/ken.json": [66010, 66010],
        "./ko-kr/character/movelist/kimberly": [41017, 41017],
        "./ko-kr/character/movelist/kimberly.json": [41017, 41017],
        "./ko-kr/character/movelist/lily": [20394, 20394],
        "./ko-kr/character/movelist/lily.json": [20394, 20394],
        "./ko-kr/character/movelist/luke": [55053, 55053],
        "./ko-kr/character/movelist/luke.json": [55053, 55053],
        "./ko-kr/character/movelist/mai": [33425, 33425],
        "./ko-kr/character/movelist/mai.json": [33425, 33425],
        "./ko-kr/character/movelist/manon": [79521, 79521],
        "./ko-kr/character/movelist/manon.json": [79521, 79521],
        "./ko-kr/character/movelist/marisa": [129, 129],
        "./ko-kr/character/movelist/marisa.json": [129, 129],
        "./ko-kr/character/movelist/rashid": [36937, 36937],
        "./ko-kr/character/movelist/rashid.json": [36937, 36937],
        "./ko-kr/character/movelist/ryu": [65184, 65184],
        "./ko-kr/character/movelist/ryu.json": [65184, 65184],
        "./ko-kr/character/movelist/sagat": [62616, 62616],
        "./ko-kr/character/movelist/sagat.json": [62616, 62616],
        "./ko-kr/character/movelist/terry": [4910, 4910],
        "./ko-kr/character/movelist/terry.json": [4910, 4910],
        "./ko-kr/character/movelist/vega_mbison": [10248, 10248],
        "./ko-kr/character/movelist/vega_mbison.json": [10248, 10248],
        "./ko-kr/character/movelist/zangief": [3646, 3646],
        "./ko-kr/character/movelist/zangief.json": [3646, 3646],
        "./ko-kr/character/outfit/aki": [70353, 70353],
        "./ko-kr/character/outfit/aki.json": [70353, 70353],
        "./ko-kr/character/outfit/alex": [46864, 46864],
        "./ko-kr/character/outfit/alex.json": [46864, 46864],
        "./ko-kr/character/outfit/blanka": [87669, 87669],
        "./ko-kr/character/outfit/blanka.json": [87669, 87669],
        "./ko-kr/character/outfit/cammy": [84371, 84371],
        "./ko-kr/character/outfit/cammy.json": [84371, 84371],
        "./ko-kr/character/outfit/chunli": [60931, 60931],
        "./ko-kr/character/outfit/chunli.json": [60931, 60931],
        "./ko-kr/character/outfit/cviper": [36379, 36379],
        "./ko-kr/character/outfit/cviper.json": [36379, 36379],
        "./ko-kr/character/outfit/deejay": [62202, 62202],
        "./ko-kr/character/outfit/deejay.json": [62202, 62202],
        "./ko-kr/character/outfit/dhalsim": [83286, 83286],
        "./ko-kr/character/outfit/dhalsim.json": [83286, 83286],
        "./ko-kr/character/outfit/ed": [50065, 50065],
        "./ko-kr/character/outfit/ed.json": [50065, 50065],
        "./ko-kr/character/outfit/ehonda": [83287, 83287],
        "./ko-kr/character/outfit/ehonda.json": [83287, 83287],
        "./ko-kr/character/outfit/elena": [39735, 39735],
        "./ko-kr/character/outfit/elena.json": [39735, 39735],
        "./ko-kr/character/outfit/gouki_akuma": [74269, 74269],
        "./ko-kr/character/outfit/gouki_akuma.json": [74269, 74269],
        "./ko-kr/character/outfit/guile": [88086, 88086],
        "./ko-kr/character/outfit/guile.json": [88086, 88086],
        "./ko-kr/character/outfit/ingrid": [72747, 72747],
        "./ko-kr/character/outfit/ingrid.json": [72747, 72747],
        "./ko-kr/character/outfit/jamie": [29820, 29820],
        "./ko-kr/character/outfit/jamie.json": [29820, 29820],
        "./ko-kr/character/outfit/jp": [146, 146],
        "./ko-kr/character/outfit/jp.json": [146, 146],
        "./ko-kr/character/outfit/juri": [97464, 97464],
        "./ko-kr/character/outfit/juri.json": [97464, 97464],
        "./ko-kr/character/outfit/ken": [82476, 82476],
        "./ko-kr/character/outfit/ken.json": [82476, 82476],
        "./ko-kr/character/outfit/kimberly": [86291, 86291],
        "./ko-kr/character/outfit/kimberly.json": [86291, 86291],
        "./ko-kr/character/outfit/lily": [82912, 82912],
        "./ko-kr/character/outfit/lily.json": [82912, 82912],
        "./ko-kr/character/outfit/luke": [41911, 41911],
        "./ko-kr/character/outfit/luke.json": [41911, 41911],
        "./ko-kr/character/outfit/mai": [54403, 54403],
        "./ko-kr/character/outfit/mai.json": [54403, 54403],
        "./ko-kr/character/outfit/manon": [87839, 87839],
        "./ko-kr/character/outfit/manon.json": [87839, 87839],
        "./ko-kr/character/outfit/marisa": [47183, 47183],
        "./ko-kr/character/outfit/marisa.json": [47183, 47183],
        "./ko-kr/character/outfit/rashid": [68535, 68535],
        "./ko-kr/character/outfit/rashid.json": [68535, 68535],
        "./ko-kr/character/outfit/ryu": [18318, 18318],
        "./ko-kr/character/outfit/ryu.json": [18318, 18318],
        "./ko-kr/character/outfit/sagat": [92562, 92562],
        "./ko-kr/character/outfit/sagat.json": [92562, 92562],
        "./ko-kr/character/outfit/terry": [59104, 59104],
        "./ko-kr/character/outfit/terry.json": [59104, 59104],
        "./ko-kr/character/outfit/vega_mbison": [13478, 13478],
        "./ko-kr/character/outfit/vega_mbison.json": [13478, 13478],
        "./ko-kr/character/outfit/zangief": [67536, 67536],
        "./ko-kr/character/outfit/zangief.json": [67536, 67536],
        "./ko-kr/character/rashid": [35390, 35390],
        "./ko-kr/character/rashid.json": [35390, 35390],
        "./ko-kr/character/ryu": [41416, 41416],
        "./ko-kr/character/ryu.json": [41416, 41416],
        "./ko-kr/character/sagat": [57360, 57360],
        "./ko-kr/character/sagat.json": [57360, 57360],
        "./ko-kr/character/terry": [38614, 38614],
        "./ko-kr/character/terry.json": [38614, 38614],
        "./ko-kr/character/vega_mbison": [47184, 47184],
        "./ko-kr/character/vega_mbison.json": [47184, 47184],
        "./ko-kr/character/zangief": [18150, 18150],
        "./ko-kr/character/zangief.json": [18150, 18150],
        "./ko-kr/column": [4540, 4540],
        "./ko-kr/column.json": [4540, 4540],
        "./ko-kr/common": [86663, 86663],
        "./ko-kr/common.json": [86663, 86663],
        "./ko-kr/concept": [81048, 81048],
        "./ko-kr/concept.json": [81048, 81048],
        "./ko-kr/demo": [89293, 89293],
        "./ko-kr/demo.json": [89293, 89293],
        "./ko-kr/guide": [54508, 54508],
        "./ko-kr/guide.json": [54508, 54508],
        "./ko-kr/index": [96068, 96068],
        "./ko-kr/index.json": [96068, 96068],
        "./ko-kr/live": [51204, 51204],
        "./ko-kr/live.json": [51204, 51204],
        "./ko-kr/mode/battlehub": [81663, 81663],
        "./ko-kr/mode/battlehub.json": [81663, 81663],
        "./ko-kr/mode/fightingground": [67425, 67425],
        "./ko-kr/mode/fightingground.json": [67425, 67425],
        "./ko-kr/mode/worldtour": [63752, 63752],
        "./ko-kr/mode/worldtour.json": [63752, 63752],
        "./ko-kr/news": [69261, 69261],
        "./ko-kr/news.json": [69261, 69261],
        "./ko-kr/product": [10543, 10543],
        "./ko-kr/product.json": [10543, 10543],
        "./pt-br": [27915, 27915],
        "./pt-br/": [27915, 27915],
        "./pt-br/character": [20176, 20176],
        "./pt-br/character.json": [20176, 20176],
        "./pt-br/character/aki": [27540, 27540],
        "./pt-br/character/aki.json": [27540, 27540],
        "./pt-br/character/alex": [18155, 18155],
        "./pt-br/character/alex.json": [18155, 18155],
        "./pt-br/character/blanka": [91778, 91778],
        "./pt-br/character/blanka.json": [91778, 91778],
        "./pt-br/character/cammy": [15886, 15886],
        "./pt-br/character/cammy.json": [15886, 15886],
        "./pt-br/character/chunli": [31644, 31644],
        "./pt-br/character/chunli.json": [31644, 31644],
        "./pt-br/character/cviper": [24968, 24968],
        "./pt-br/character/cviper.json": [24968, 24968],
        "./pt-br/character/deejay": [52109, 52109],
        "./pt-br/character/deejay.json": [52109, 52109],
        "./pt-br/character/dhalsim": [14331, 14331],
        "./pt-br/character/dhalsim.json": [14331, 14331],
        "./pt-br/character/ed": [92298, 92298],
        "./pt-br/character/ed.json": [92298, 92298],
        "./pt-br/character/ehonda": [45296, 45296],
        "./pt-br/character/ehonda.json": [45296, 45296],
        "./pt-br/character/elena": [34257, 56638],
        "./pt-br/character/elena.json": [34257, 56638],
        "./pt-br/character/frame/_common": [72169, 72169],
        "./pt-br/character/frame/_common.json": [72169, 72169],
        "./pt-br/character/frame/aki": [5846, 5846],
        "./pt-br/character/frame/aki.json": [5846, 5846],
        "./pt-br/character/frame/alex": [14741, 14741],
        "./pt-br/character/frame/alex.json": [14741, 14741],
        "./pt-br/character/frame/blanka": [69536, 69536],
        "./pt-br/character/frame/blanka.json": [69536, 69536],
        "./pt-br/character/frame/cammy": [56864, 56864],
        "./pt-br/character/frame/cammy.json": [56864, 56864],
        "./pt-br/character/frame/chunli": [67798, 67798],
        "./pt-br/character/frame/chunli.json": [67798, 67798],
        "./pt-br/character/frame/cviper": [45630, 45630],
        "./pt-br/character/frame/cviper.json": [45630, 45630],
        "./pt-br/character/frame/deejay": [83299, 83299],
        "./pt-br/character/frame/deejay.json": [83299, 83299],
        "./pt-br/character/frame/dhalsim": [19301, 19301],
        "./pt-br/character/frame/dhalsim.json": [19301, 19301],
        "./pt-br/character/frame/ed": [6908, 6908],
        "./pt-br/character/frame/ed.json": [6908, 6908],
        "./pt-br/character/frame/ehonda": [71602, 71602],
        "./pt-br/character/frame/ehonda.json": [71602, 71602],
        "./pt-br/character/frame/elena": [59904, 59904],
        "./pt-br/character/frame/elena.json": [59904, 59904],
        "./pt-br/character/frame/gouki_akuma": [82494, 82494],
        "./pt-br/character/frame/gouki_akuma.json": [82494, 82494],
        "./pt-br/character/frame/guile": [47101, 47101],
        "./pt-br/character/frame/guile.json": [47101, 47101],
        "./pt-br/character/frame/ingrid": [8678, 8678],
        "./pt-br/character/frame/ingrid.json": [8678, 8678],
        "./pt-br/character/frame/jamie": [81727, 81727],
        "./pt-br/character/frame/jamie.json": [81727, 81727],
        "./pt-br/character/frame/jp": [60695, 60695],
        "./pt-br/character/frame/jp.json": [60695, 60695],
        "./pt-br/character/frame/juri": [75869, 75869],
        "./pt-br/character/frame/juri.json": [75869, 75869],
        "./pt-br/character/frame/ken": [43899, 43899],
        "./pt-br/character/frame/ken.json": [43899, 43899],
        "./pt-br/character/frame/kimberly": [35950, 35950],
        "./pt-br/character/frame/kimberly.json": [35950, 35950],
        "./pt-br/character/frame/lily": [79005, 79005],
        "./pt-br/character/frame/lily.json": [79005, 79005],
        "./pt-br/character/frame/luke": [7882, 7882],
        "./pt-br/character/frame/luke.json": [7882, 7882],
        "./pt-br/character/frame/mai": [34332, 34332],
        "./pt-br/character/frame/mai.json": [34332, 34332],
        "./pt-br/character/frame/manon": [69728, 69728],
        "./pt-br/character/frame/manon.json": [69728, 69728],
        "./pt-br/character/frame/marisa": [80302, 80302],
        "./pt-br/character/frame/marisa.json": [80302, 80302],
        "./pt-br/character/frame/rashid": [18262, 18262],
        "./pt-br/character/frame/rashid.json": [18262, 18262],
        "./pt-br/character/frame/ryu": [66733, 66733],
        "./pt-br/character/frame/ryu.json": [66733, 66733],
        "./pt-br/character/frame/sagat": [32333, 32333],
        "./pt-br/character/frame/sagat.json": [32333, 32333],
        "./pt-br/character/frame/terry": [31147, 31147],
        "./pt-br/character/frame/terry.json": [31147, 31147],
        "./pt-br/character/frame/vega_mbison": [45761, 45761],
        "./pt-br/character/frame/vega_mbison.json": [45761, 45761],
        "./pt-br/character/frame/zangief": [42427, 42427],
        "./pt-br/character/frame/zangief.json": [42427, 42427],
        "./pt-br/character/gouki_akuma": [31524, 31524],
        "./pt-br/character/gouki_akuma.json": [31524, 31524],
        "./pt-br/character/guile": [62531, 62531],
        "./pt-br/character/guile.json": [62531, 62531],
        "./pt-br/character/ingrid": [2400, 2400],
        "./pt-br/character/ingrid.json": [2400, 2400],
        "./pt-br/character/jamie": [39037, 39037],
        "./pt-br/character/jamie.json": [39037, 39037],
        "./pt-br/character/jp": [86873, 86873],
        "./pt-br/character/jp.json": [86873, 86873],
        "./pt-br/character/juri": [50299, 50299],
        "./pt-br/character/juri.json": [50299, 50299],
        "./pt-br/character/ken": [4429, 4429],
        "./pt-br/character/ken.json": [4429, 4429],
        "./pt-br/character/kimberly": [72128, 72128],
        "./pt-br/character/kimberly.json": [72128, 72128],
        "./pt-br/character/lily": [29115, 29115],
        "./pt-br/character/lily.json": [29115, 29115],
        "./pt-br/character/luke": [44076, 44076],
        "./pt-br/character/luke.json": [44076, 44076],
        "./pt-br/character/mai": [35790, 35790],
        "./pt-br/character/mai.json": [35790, 35790],
        "./pt-br/character/manon": [36974, 36974],
        "./pt-br/character/manon.json": [36974, 36974],
        "./pt-br/character/marisa": [87423, 87423],
        "./pt-br/character/marisa.json": [87423, 87423],
        "./pt-br/character/movelist/_common": [65509, 65509],
        "./pt-br/character/movelist/_common.json": [65509, 65509],
        "./pt-br/character/movelist/aki": [30722, 30722],
        "./pt-br/character/movelist/aki.json": [30722, 30722],
        "./pt-br/character/movelist/alex": [73721, 73721],
        "./pt-br/character/movelist/alex.json": [73721, 73721],
        "./pt-br/character/movelist/blanka": [12996, 12996],
        "./pt-br/character/movelist/blanka.json": [12996, 12996],
        "./pt-br/character/movelist/cammy": [71916, 71916],
        "./pt-br/character/movelist/cammy.json": [71916, 71916],
        "./pt-br/character/movelist/chunli": [84834, 84834],
        "./pt-br/character/movelist/chunli.json": [84834, 84834],
        "./pt-br/character/movelist/cviper": [32706, 32706],
        "./pt-br/character/movelist/cviper.json": [32706, 32706],
        "./pt-br/character/movelist/deejay": [22655, 22655],
        "./pt-br/character/movelist/deejay.json": [22655, 22655],
        "./pt-br/character/movelist/dhalsim": [23689, 23689],
        "./pt-br/character/movelist/dhalsim.json": [23689, 23689],
        "./pt-br/character/movelist/ed": [70608, 70608],
        "./pt-br/character/movelist/ed.json": [70608, 70608],
        "./pt-br/character/movelist/ehonda": [21110, 21110],
        "./pt-br/character/movelist/ehonda.json": [21110, 21110],
        "./pt-br/character/movelist/elena": [53612, 53612],
        "./pt-br/character/movelist/elena.json": [53612, 53612],
        "./pt-br/character/movelist/gouki_akuma": [96746, 96746],
        "./pt-br/character/movelist/gouki_akuma.json": [96746, 96746],
        "./pt-br/character/movelist/guile": [33145, 33145],
        "./pt-br/character/movelist/guile.json": [33145, 33145],
        "./pt-br/character/movelist/ingrid": [77602, 77602],
        "./pt-br/character/movelist/ingrid.json": [77602, 77602],
        "./pt-br/character/movelist/jamie": [14299, 14299],
        "./pt-br/character/movelist/jamie.json": [14299, 14299],
        "./pt-br/character/movelist/jp": [50475, 50475],
        "./pt-br/character/movelist/jp.json": [50475, 50475],
        "./pt-br/character/movelist/juri": [74345, 74345],
        "./pt-br/character/movelist/juri.json": [74345, 74345],
        "./pt-br/character/movelist/ken": [97879, 97879],
        "./pt-br/character/movelist/ken.json": [97879, 97879],
        "./pt-br/character/movelist/kimberly": [86954, 86954],
        "./pt-br/character/movelist/kimberly.json": [86954, 86954],
        "./pt-br/character/movelist/lily": [85585, 85585],
        "./pt-br/character/movelist/lily.json": [85585, 85585],
        "./pt-br/character/movelist/luke": [96438, 96438],
        "./pt-br/character/movelist/luke.json": [96438, 96438],
        "./pt-br/character/movelist/mai": [32272, 32272],
        "./pt-br/character/movelist/mai.json": [32272, 32272],
        "./pt-br/character/movelist/manon": [91276, 91276],
        "./pt-br/character/movelist/manon.json": [91276, 91276],
        "./pt-br/character/movelist/marisa": [61034, 61034],
        "./pt-br/character/movelist/marisa.json": [61034, 61034],
        "./pt-br/character/movelist/rashid": [1810, 1810],
        "./pt-br/character/movelist/rashid.json": [1810, 1810],
        "./pt-br/character/movelist/ryu": [1729, 1729],
        "./pt-br/character/movelist/ryu.json": [1729, 1729],
        "./pt-br/character/movelist/sagat": [28633, 28633],
        "./pt-br/character/movelist/sagat.json": [28633, 28633],
        "./pt-br/character/movelist/terry": [13271, 13271],
        "./pt-br/character/movelist/terry.json": [13271, 13271],
        "./pt-br/character/movelist/vega_mbison": [28517, 28517],
        "./pt-br/character/movelist/vega_mbison.json": [28517, 28517],
        "./pt-br/character/movelist/zangief": [27559, 27559],
        "./pt-br/character/movelist/zangief.json": [27559, 27559],
        "./pt-br/character/outfit/aki": [71168, 71168],
        "./pt-br/character/outfit/aki.json": [71168, 71168],
        "./pt-br/character/outfit/alex": [4687, 4687],
        "./pt-br/character/outfit/alex.json": [4687, 4687],
        "./pt-br/character/outfit/blanka": [19814, 19814],
        "./pt-br/character/outfit/blanka.json": [19814, 19814],
        "./pt-br/character/outfit/cammy": [1578, 1578],
        "./pt-br/character/outfit/cammy.json": [1578, 1578],
        "./pt-br/character/outfit/chunli": [84152, 84152],
        "./pt-br/character/outfit/chunli.json": [84152, 84152],
        "./pt-br/character/outfit/cviper": [84444, 84444],
        "./pt-br/character/outfit/cviper.json": [84444, 84444],
        "./pt-br/character/outfit/deejay": [89177, 89177],
        "./pt-br/character/outfit/deejay.json": [89177, 89177],
        "./pt-br/character/outfit/dhalsim": [80767, 80767],
        "./pt-br/character/outfit/dhalsim.json": [80767, 80767],
        "./pt-br/character/outfit/ed": [47870, 47870],
        "./pt-br/character/outfit/ed.json": [47870, 47870],
        "./pt-br/character/outfit/ehonda": [66932, 66932],
        "./pt-br/character/outfit/ehonda.json": [66932, 66932],
        "./pt-br/character/outfit/elena": [95466, 95466],
        "./pt-br/character/outfit/elena.json": [95466, 95466],
        "./pt-br/character/outfit/gouki_akuma": [24592, 24592],
        "./pt-br/character/outfit/gouki_akuma.json": [24592, 24592],
        "./pt-br/character/outfit/guile": [38575, 38575],
        "./pt-br/character/outfit/guile.json": [38575, 38575],
        "./pt-br/character/outfit/ingrid": [81980, 81980],
        "./pt-br/character/outfit/ingrid.json": [81980, 81980],
        "./pt-br/character/outfit/jamie": [70441, 70441],
        "./pt-br/character/outfit/jamie.json": [70441, 70441],
        "./pt-br/character/outfit/jp": [34797, 34797],
        "./pt-br/character/outfit/jp.json": [34797, 34797],
        "./pt-br/character/outfit/juri": [38599, 38599],
        "./pt-br/character/outfit/juri.json": [38599, 38599],
        "./pt-br/character/outfit/ken": [47289, 47289],
        "./pt-br/character/outfit/ken.json": [47289, 47289],
        "./pt-br/character/outfit/kimberly": [80748, 80748],
        "./pt-br/character/outfit/kimberly.json": [80748, 80748],
        "./pt-br/character/outfit/lily": [83871, 83871],
        "./pt-br/character/outfit/lily.json": [83871, 83871],
        "./pt-br/character/outfit/luke": [63336, 63336],
        "./pt-br/character/outfit/luke.json": [63336, 63336],
        "./pt-br/character/outfit/mai": [51794, 51794],
        "./pt-br/character/outfit/mai.json": [51794, 51794],
        "./pt-br/character/outfit/manon": [82394, 82394],
        "./pt-br/character/outfit/manon.json": [82394, 82394],
        "./pt-br/character/outfit/marisa": [69128, 69128],
        "./pt-br/character/outfit/marisa.json": [69128, 69128],
        "./pt-br/character/outfit/rashid": [55432, 55432],
        "./pt-br/character/outfit/rashid.json": [55432, 55432],
        "./pt-br/character/outfit/ryu": [96359, 96359],
        "./pt-br/character/outfit/ryu.json": [96359, 96359],
        "./pt-br/character/outfit/sagat": [35499, 35499],
        "./pt-br/character/outfit/sagat.json": [35499, 35499],
        "./pt-br/character/outfit/terry": [42833, 42833],
        "./pt-br/character/outfit/terry.json": [42833, 42833],
        "./pt-br/character/outfit/vega_mbison": [38651, 38651],
        "./pt-br/character/outfit/vega_mbison.json": [38651, 38651],
        "./pt-br/character/outfit/zangief": [87929, 87929],
        "./pt-br/character/outfit/zangief.json": [87929, 87929],
        "./pt-br/character/rashid": [69740, 69740],
        "./pt-br/character/rashid.json": [69740, 69740],
        "./pt-br/character/ryu": [22403, 22403],
        "./pt-br/character/ryu.json": [22403, 22403],
        "./pt-br/character/sagat": [1519, 1519],
        "./pt-br/character/sagat.json": [1519, 1519],
        "./pt-br/character/terry": [69445, 69445],
        "./pt-br/character/terry.json": [69445, 69445],
        "./pt-br/character/vega_mbison": [27287, 27287],
        "./pt-br/character/vega_mbison.json": [27287, 27287],
        "./pt-br/character/zangief": [90957, 90957],
        "./pt-br/character/zangief.json": [90957, 90957],
        "./pt-br/column": [4565, 4565],
        "./pt-br/column.json": [4565, 4565],
        "./pt-br/common": [8742, 8742],
        "./pt-br/common.json": [8742, 8742],
        "./pt-br/concept": [54431, 54431],
        "./pt-br/concept.json": [54431, 54431],
        "./pt-br/demo": [83768, 83768],
        "./pt-br/demo.json": [83768, 83768],
        "./pt-br/dynamic": [58578, 58578],
        "./pt-br/dynamic.json": [58578, 58578],
        "./pt-br/error": [48569, 48569],
        "./pt-br/error.json": [48569, 48569],
        "./pt-br/guide": [8447, 8447],
        "./pt-br/guide.json": [8447, 8447],
        "./pt-br/index": [27915, 27915],
        "./pt-br/index.json": [27915, 27915],
        "./pt-br/live": [32765, 32765],
        "./pt-br/live.json": [32765, 32765],
        "./pt-br/mode/battlehub": [76074, 76074],
        "./pt-br/mode/battlehub.json": [76074, 76074],
        "./pt-br/mode/fightingground": [17762, 17762],
        "./pt-br/mode/fightingground.json": [17762, 17762],
        "./pt-br/mode/worldtour": [72605, 72605],
        "./pt-br/mode/worldtour.json": [72605, 72605],
        "./pt-br/more-examples": [1512, 1512],
        "./pt-br/more-examples.json": [1512, 1512],
        "./pt-br/news": [7864, 7864],
        "./pt-br/news.json": [7864, 7864],
        "./pt-br/product": [40156, 40156],
        "./pt-br/product.json": [40156, 40156],
        "./zh-hans": [52585, 52585],
        "./zh-hans/": [52585, 52585],
        "./zh-hans/character": [61770, 61770],
        "./zh-hans/character.json": [61770, 61770],
        "./zh-hans/character/aki": [26582, 26582],
        "./zh-hans/character/aki.json": [26582, 26582],
        "./zh-hans/character/alex": [55829, 55829],
        "./zh-hans/character/alex.json": [55829, 55829],
        "./zh-hans/character/blanka": [31456, 31456],
        "./zh-hans/character/blanka.json": [31456, 31456],
        "./zh-hans/character/cammy": [47072, 47072],
        "./zh-hans/character/cammy.json": [47072, 47072],
        "./zh-hans/character/chunli": [92086, 92086],
        "./zh-hans/character/chunli.json": [92086, 92086],
        "./zh-hans/character/cviper": [85150, 85150],
        "./zh-hans/character/cviper.json": [85150, 85150],
        "./zh-hans/character/deejay": [42787, 42787],
        "./zh-hans/character/deejay.json": [42787, 42787],
        "./zh-hans/character/dhalsim": [39045, 39045],
        "./zh-hans/character/dhalsim.json": [39045, 39045],
        "./zh-hans/character/ed": [34012, 34012],
        "./zh-hans/character/ed.json": [34012, 34012],
        "./zh-hans/character/ehonda": [33234, 33234],
        "./zh-hans/character/ehonda.json": [33234, 33234],
        "./zh-hans/character/elena": [66464, 66464],
        "./zh-hans/character/elena.json": [66464, 66464],
        "./zh-hans/character/frame/_common": [31759, 31759],
        "./zh-hans/character/frame/_common.json": [31759, 31759],
        "./zh-hans/character/frame/aki": [74348, 74348],
        "./zh-hans/character/frame/aki.json": [74348, 74348],
        "./zh-hans/character/frame/alex": [43923, 43923],
        "./zh-hans/character/frame/alex.json": [43923, 43923],
        "./zh-hans/character/frame/blanka": [30714, 30714],
        "./zh-hans/character/frame/blanka.json": [30714, 30714],
        "./zh-hans/character/frame/cammy": [71670, 71670],
        "./zh-hans/character/frame/cammy.json": [71670, 71670],
        "./zh-hans/character/frame/chunli": [15588, 15588],
        "./zh-hans/character/frame/chunli.json": [15588, 15588],
        "./zh-hans/character/frame/cviper": [1440, 1440],
        "./zh-hans/character/frame/cviper.json": [1440, 1440],
        "./zh-hans/character/frame/deejay": [89077, 89077],
        "./zh-hans/character/frame/deejay.json": [89077, 89077],
        "./zh-hans/character/frame/dhalsim": [93267, 93267],
        "./zh-hans/character/frame/dhalsim.json": [93267, 93267],
        "./zh-hans/character/frame/ed": [26194, 26194],
        "./zh-hans/character/frame/ed.json": [26194, 26194],
        "./zh-hans/character/frame/ehonda": [86504, 86504],
        "./zh-hans/character/frame/ehonda.json": [86504, 86504],
        "./zh-hans/character/frame/elena": [43350, 43350],
        "./zh-hans/character/frame/elena.json": [43350, 43350],
        "./zh-hans/character/frame/gouki_akuma": [73948, 73948],
        "./zh-hans/character/frame/gouki_akuma.json": [73948, 73948],
        "./zh-hans/character/frame/guile": [41083, 41083],
        "./zh-hans/character/frame/guile.json": [41083, 41083],
        "./zh-hans/character/frame/ingrid": [67736, 67736],
        "./zh-hans/character/frame/ingrid.json": [67736, 67736],
        "./zh-hans/character/frame/jamie": [80325, 80325],
        "./zh-hans/character/frame/jamie.json": [80325, 80325],
        "./zh-hans/character/frame/jp": [20817, 20817],
        "./zh-hans/character/frame/jp.json": [20817, 20817],
        "./zh-hans/character/frame/juri": [65251, 65251],
        "./zh-hans/character/frame/juri.json": [65251, 65251],
        "./zh-hans/character/frame/ken": [55909, 55909],
        "./zh-hans/character/frame/ken.json": [55909, 55909],
        "./zh-hans/character/frame/kimberly": [67928, 67928],
        "./zh-hans/character/frame/kimberly.json": [67928, 67928],
        "./zh-hans/character/frame/lily": [67747, 67747],
        "./zh-hans/character/frame/lily.json": [67747, 67747],
        "./zh-hans/character/frame/luke": [84916, 84916],
        "./zh-hans/character/frame/luke.json": [84916, 84916],
        "./zh-hans/character/frame/mai": [18246, 18246],
        "./zh-hans/character/frame/mai.json": [18246, 18246],
        "./zh-hans/character/frame/manon": [97862, 97862],
        "./zh-hans/character/frame/manon.json": [97862, 97862],
        "./zh-hans/character/frame/marisa": [44436, 44436],
        "./zh-hans/character/frame/marisa.json": [44436, 44436],
        "./zh-hans/character/frame/rashid": [64308, 64308],
        "./zh-hans/character/frame/rashid.json": [64308, 64308],
        "./zh-hans/character/frame/ryu": [61579, 61579],
        "./zh-hans/character/frame/ryu.json": [61579, 61579],
        "./zh-hans/character/frame/sagat": [90247, 90247],
        "./zh-hans/character/frame/sagat.json": [90247, 90247],
        "./zh-hans/character/frame/terry": [39437, 39437],
        "./zh-hans/character/frame/terry.json": [39437, 39437],
        "./zh-hans/character/frame/vega_mbison": [61663, 61663],
        "./zh-hans/character/frame/vega_mbison.json": [61663, 61663],
        "./zh-hans/character/frame/zangief": [89525, 89525],
        "./zh-hans/character/frame/zangief.json": [89525, 89525],
        "./zh-hans/character/gouki_akuma": [54238, 54238],
        "./zh-hans/character/gouki_akuma.json": [54238, 54238],
        "./zh-hans/character/guile": [38685, 38685],
        "./zh-hans/character/guile.json": [38685, 38685],
        "./zh-hans/character/ingrid": [6150, 6150],
        "./zh-hans/character/ingrid.json": [6150, 6150],
        "./zh-hans/character/jamie": [68959, 68959],
        "./zh-hans/character/jamie.json": [68959, 68959],
        "./zh-hans/character/jp": [27383, 27383],
        "./zh-hans/character/jp.json": [27383, 27383],
        "./zh-hans/character/juri": [49885, 49885],
        "./zh-hans/character/juri.json": [49885, 49885],
        "./zh-hans/character/ken": [26779, 26779],
        "./zh-hans/character/ken.json": [26779, 26779],
        "./zh-hans/character/kimberly": [60558, 60558],
        "./zh-hans/character/kimberly.json": [60558, 60558],
        "./zh-hans/character/lily": [23325, 23325],
        "./zh-hans/character/lily.json": [23325, 23325],
        "./zh-hans/character/luke": [43690, 43690],
        "./zh-hans/character/luke.json": [43690, 43690],
        "./zh-hans/character/mai": [26588, 26588],
        "./zh-hans/character/mai.json": [26588, 26588],
        "./zh-hans/character/manon": [5216, 5216],
        "./zh-hans/character/manon.json": [5216, 5216],
        "./zh-hans/character/marisa": [2734, 2734],
        "./zh-hans/character/marisa.json": [2734, 2734],
        "./zh-hans/character/movelist/_common": [595, 595],
        "./zh-hans/character/movelist/_common.json": [595, 595],
        "./zh-hans/character/movelist/aki": [73264, 73264],
        "./zh-hans/character/movelist/aki.json": [73264, 73264],
        "./zh-hans/character/movelist/alex": [85759, 85759],
        "./zh-hans/character/movelist/alex.json": [85759, 85759],
        "./zh-hans/character/movelist/blanka": [32182, 32182],
        "./zh-hans/character/movelist/blanka.json": [32182, 32182],
        "./zh-hans/character/movelist/cammy": [82810, 82810],
        "./zh-hans/character/movelist/cammy.json": [82810, 82810],
        "./zh-hans/character/movelist/chunli": [51176, 51176],
        "./zh-hans/character/movelist/chunli.json": [51176, 51176],
        "./zh-hans/character/movelist/cviper": [10828, 10828],
        "./zh-hans/character/movelist/cviper.json": [10828, 10828],
        "./zh-hans/character/movelist/deejay": [42857, 42857],
        "./zh-hans/character/movelist/deejay.json": [42857, 42857],
        "./zh-hans/character/movelist/dhalsim": [4367, 4367],
        "./zh-hans/character/movelist/dhalsim.json": [4367, 4367],
        "./zh-hans/character/movelist/ed": [5614, 5614],
        "./zh-hans/character/movelist/ed.json": [5614, 5614],
        "./zh-hans/character/movelist/ehonda": [3940, 3940],
        "./zh-hans/character/movelist/ehonda.json": [3940, 3940],
        "./zh-hans/character/movelist/elena": [81530, 81530],
        "./zh-hans/character/movelist/elena.json": [81530, 81530],
        "./zh-hans/character/movelist/gouki_akuma": [21472, 21472],
        "./zh-hans/character/movelist/gouki_akuma.json": [21472, 21472],
        "./zh-hans/character/movelist/guile": [91295, 91295],
        "./zh-hans/character/movelist/guile.json": [91295, 91295],
        "./zh-hans/character/movelist/ingrid": [47532, 47532],
        "./zh-hans/character/movelist/ingrid.json": [47532, 47532],
        "./zh-hans/character/movelist/jamie": [77497, 77497],
        "./zh-hans/character/movelist/jamie.json": [77497, 77497],
        "./zh-hans/character/movelist/jp": [41277, 41277],
        "./zh-hans/character/movelist/jp.json": [41277, 41277],
        "./zh-hans/character/movelist/juri": [33015, 33015],
        "./zh-hans/character/movelist/juri.json": [33015, 33015],
        "./zh-hans/character/movelist/ken": [4553, 4553],
        "./zh-hans/character/movelist/ken.json": [4553, 4553],
        "./zh-hans/character/movelist/kimberly": [65372, 65372],
        "./zh-hans/character/movelist/kimberly.json": [65372, 65372],
        "./zh-hans/character/movelist/lily": [84303, 84303],
        "./zh-hans/character/movelist/lily.json": [84303, 84303],
        "./zh-hans/character/movelist/luke": [96696, 96696],
        "./zh-hans/character/movelist/luke.json": [96696, 96696],
        "./zh-hans/character/movelist/mai": [71714, 71714],
        "./zh-hans/character/movelist/mai.json": [71714, 71714],
        "./zh-hans/character/movelist/manon": [48714, 48714],
        "./zh-hans/character/movelist/manon.json": [48714, 48714],
        "./zh-hans/character/movelist/marisa": [72952, 72952],
        "./zh-hans/character/movelist/marisa.json": [72952, 72952],
        "./zh-hans/character/movelist/rashid": [96952, 96952],
        "./zh-hans/character/movelist/rashid.json": [96952, 96952],
        "./zh-hans/character/movelist/ryu": [35863, 35863],
        "./zh-hans/character/movelist/ryu.json": [35863, 35863],
        "./zh-hans/character/movelist/sagat": [51643, 51643],
        "./zh-hans/character/movelist/sagat.json": [51643, 51643],
        "./zh-hans/character/movelist/terry": [12097, 12097],
        "./zh-hans/character/movelist/terry.json": [12097, 12097],
        "./zh-hans/character/movelist/vega_mbison": [85899, 85899],
        "./zh-hans/character/movelist/vega_mbison.json": [85899, 85899],
        "./zh-hans/character/movelist/zangief": [47241, 47241],
        "./zh-hans/character/movelist/zangief.json": [47241, 47241],
        "./zh-hans/character/outfit/aki": [77058, 77058],
        "./zh-hans/character/outfit/aki.json": [77058, 77058],
        "./zh-hans/character/outfit/alex": [36281, 36281],
        "./zh-hans/character/outfit/alex.json": [36281, 36281],
        "./zh-hans/character/outfit/blanka": [50372, 50372],
        "./zh-hans/character/outfit/blanka.json": [50372, 50372],
        "./zh-hans/character/outfit/cammy": [52172, 52172],
        "./zh-hans/character/outfit/cammy.json": [52172, 52172],
        "./zh-hans/character/outfit/chunli": [3938, 3938],
        "./zh-hans/character/outfit/chunli.json": [3938, 3938],
        "./zh-hans/character/outfit/cviper": [40994, 40994],
        "./zh-hans/character/outfit/cviper.json": [40994, 40994],
        "./zh-hans/character/outfit/deejay": [77823, 77823],
        "./zh-hans/character/outfit/deejay.json": [77823, 77823],
        "./zh-hans/character/outfit/dhalsim": [28073, 28073],
        "./zh-hans/character/outfit/dhalsim.json": [28073, 28073],
        "./zh-hans/character/outfit/ed": [72080, 72080],
        "./zh-hans/character/outfit/ed.json": [72080, 72080],
        "./zh-hans/character/outfit/ehonda": [70710, 70710],
        "./zh-hans/character/outfit/ehonda.json": [70710, 70710],
        "./zh-hans/character/outfit/elena": [14956, 14956],
        "./zh-hans/character/outfit/elena.json": [14956, 14956],
        "./zh-hans/character/outfit/gouki_akuma": [23146, 23146],
        "./zh-hans/character/outfit/gouki_akuma.json": [23146, 23146],
        "./zh-hans/character/outfit/guile": [26073, 26073],
        "./zh-hans/character/outfit/guile.json": [26073, 26073],
        "./zh-hans/character/outfit/ingrid": [40354, 40354],
        "./zh-hans/character/outfit/ingrid.json": [40354, 40354],
        "./zh-hans/character/outfit/jamie": [2939, 2939],
        "./zh-hans/character/outfit/jamie.json": [2939, 2939],
        "./zh-hans/character/outfit/jp": [77771, 77771],
        "./zh-hans/character/outfit/jp.json": [77771, 77771],
        "./zh-hans/character/outfit/juri": [80201, 80201],
        "./zh-hans/character/outfit/juri.json": [80201, 80201],
        "./zh-hans/character/outfit/ken": [407, 407],
        "./zh-hans/character/outfit/ken.json": [407, 407],
        "./zh-hans/character/outfit/kimberly": [62186, 62186],
        "./zh-hans/character/outfit/kimberly.json": [62186, 62186],
        "./zh-hans/character/outfit/lily": [88721, 88721],
        "./zh-hans/character/outfit/lily.json": [88721, 88721],
        "./zh-hans/character/outfit/luke": [2486, 2486],
        "./zh-hans/character/outfit/luke.json": [2486, 2486],
        "./zh-hans/character/outfit/mai": [34224, 34224],
        "./zh-hans/character/outfit/mai.json": [34224, 34224],
        "./zh-hans/character/outfit/manon": [98252, 98252],
        "./zh-hans/character/outfit/manon.json": [98252, 98252],
        "./zh-hans/character/outfit/marisa": [47530, 47530],
        "./zh-hans/character/outfit/marisa.json": [47530, 47530],
        "./zh-hans/character/outfit/rashid": [51218, 51218],
        "./zh-hans/character/outfit/rashid.json": [51218, 51218],
        "./zh-hans/character/outfit/ryu": [87009, 87009],
        "./zh-hans/character/outfit/ryu.json": [87009, 87009],
        "./zh-hans/character/outfit/sagat": [94841, 94841],
        "./zh-hans/character/outfit/sagat.json": [94841, 94841],
        "./zh-hans/character/outfit/terry": [3575, 3575],
        "./zh-hans/character/outfit/terry.json": [3575, 3575],
        "./zh-hans/character/outfit/vega_mbison": [3557, 3557],
        "./zh-hans/character/outfit/vega_mbison.json": [3557, 3557],
        "./zh-hans/character/outfit/zangief": [7879, 7879],
        "./zh-hans/character/outfit/zangief.json": [7879, 7879],
        "./zh-hans/character/rashid": [72182, 72182],
        "./zh-hans/character/rashid.json": [72182, 72182],
        "./zh-hans/character/ryu": [95469, 95469],
        "./zh-hans/character/ryu.json": [95469, 95469],
        "./zh-hans/character/sagat": [83405, 83405],
        "./zh-hans/character/sagat.json": [83405, 83405],
        "./zh-hans/character/terry": [59787, 59787],
        "./zh-hans/character/terry.json": [59787, 59787],
        "./zh-hans/character/vega_mbison": [31041, 31041],
        "./zh-hans/character/vega_mbison.json": [31041, 31041],
        "./zh-hans/character/zangief": [60667, 60667],
        "./zh-hans/character/zangief.json": [60667, 60667],
        "./zh-hans/column": [21847, 21847],
        "./zh-hans/column.json": [21847, 21847],
        "./zh-hans/common": [28052, 28052],
        "./zh-hans/common.json": [28052, 28052],
        "./zh-hans/concept": [87425, 87425],
        "./zh-hans/concept.json": [87425, 87425],
        "./zh-hans/demo": [84954, 84954],
        "./zh-hans/demo.json": [84954, 84954],
        "./zh-hans/guide": [50797, 50797],
        "./zh-hans/guide.json": [50797, 50797],
        "./zh-hans/index": [52585, 52585],
        "./zh-hans/index.json": [52585, 52585],
        "./zh-hans/live": [71887, 71887],
        "./zh-hans/live.json": [71887, 71887],
        "./zh-hans/mode/battlehub": [13416, 13416],
        "./zh-hans/mode/battlehub.json": [13416, 13416],
        "./zh-hans/mode/fightingground": [69028, 69028],
        "./zh-hans/mode/fightingground.json": [69028, 69028],
        "./zh-hans/mode/worldtour": [94727, 94727],
        "./zh-hans/mode/worldtour.json": [94727, 94727],
        "./zh-hans/news": [7458, 7458],
        "./zh-hans/news.json": [7458, 7458],
        "./zh-hans/product": [67354, 67354],
        "./zh-hans/product.json": [67354, 67354],
        "./zh-hant": [75868, 75868],
        "./zh-hant/": [75868, 75868],
        "./zh-hant/character": [48252, 42223],
        "./zh-hant/character.json": [48252, 42223],
        "./zh-hant/character/aki": [63371, 63371],
        "./zh-hant/character/aki.json": [63371, 63371],
        "./zh-hant/character/alex": [13114, 13114],
        "./zh-hant/character/alex.json": [13114, 13114],
        "./zh-hant/character/blanka": [46299, 46299],
        "./zh-hant/character/blanka.json": [46299, 46299],
        "./zh-hant/character/cammy": [31565, 31565],
        "./zh-hant/character/cammy.json": [31565, 31565],
        "./zh-hant/character/chunli": [41885, 41885],
        "./zh-hant/character/chunli.json": [41885, 41885],
        "./zh-hant/character/cviper": [99817, 99817],
        "./zh-hant/character/cviper.json": [99817, 99817],
        "./zh-hant/character/deejay": [4856, 4856],
        "./zh-hant/character/deejay.json": [4856, 4856],
        "./zh-hant/character/dhalsim": [70576, 70576],
        "./zh-hant/character/dhalsim.json": [70576, 70576],
        "./zh-hant/character/ed": [6995, 6995],
        "./zh-hant/character/ed.json": [6995, 6995],
        "./zh-hant/character/ehonda": [39761, 39761],
        "./zh-hant/character/ehonda.json": [39761, 39761],
        "./zh-hant/character/elena": [40081, 40081],
        "./zh-hant/character/elena.json": [40081, 40081],
        "./zh-hant/character/frame/_common": [11438, 11438],
        "./zh-hant/character/frame/_common.json": [11438, 11438],
        "./zh-hant/character/frame/aki": [38973, 38973],
        "./zh-hant/character/frame/aki.json": [38973, 38973],
        "./zh-hant/character/frame/alex": [90420, 90420],
        "./zh-hant/character/frame/alex.json": [90420, 90420],
        "./zh-hant/character/frame/blanka": [96153, 96153],
        "./zh-hant/character/frame/blanka.json": [96153, 96153],
        "./zh-hant/character/frame/cammy": [25199, 25199],
        "./zh-hant/character/frame/cammy.json": [25199, 25199],
        "./zh-hant/character/frame/chunli": [29295, 29295],
        "./zh-hant/character/frame/chunli.json": [29295, 29295],
        "./zh-hant/character/frame/cviper": [84399, 84399],
        "./zh-hant/character/frame/cviper.json": [84399, 84399],
        "./zh-hant/character/frame/deejay": [90902, 90902],
        "./zh-hant/character/frame/deejay.json": [90902, 90902],
        "./zh-hant/character/frame/dhalsim": [82346, 82346],
        "./zh-hant/character/frame/dhalsim.json": [82346, 82346],
        "./zh-hant/character/frame/ed": [95205, 95205],
        "./zh-hant/character/frame/ed.json": [95205, 95205],
        "./zh-hant/character/frame/ehonda": [89067, 89067],
        "./zh-hant/character/frame/ehonda.json": [89067, 89067],
        "./zh-hant/character/frame/elena": [84755, 84755],
        "./zh-hant/character/frame/elena.json": [84755, 84755],
        "./zh-hant/character/frame/gouki_akuma": [99865, 99865],
        "./zh-hant/character/frame/gouki_akuma.json": [99865, 99865],
        "./zh-hant/character/frame/guile": [44146, 44146],
        "./zh-hant/character/frame/guile.json": [44146, 44146],
        "./zh-hant/character/frame/ingrid": [18455, 18455],
        "./zh-hant/character/frame/ingrid.json": [18455, 18455],
        "./zh-hant/character/frame/jamie": [44792, 44792],
        "./zh-hant/character/frame/jamie.json": [44792, 44792],
        "./zh-hant/character/frame/jp": [63910, 63910],
        "./zh-hant/character/frame/jp.json": [63910, 63910],
        "./zh-hant/character/frame/juri": [91492, 91492],
        "./zh-hant/character/frame/juri.json": [91492, 91492],
        "./zh-hant/character/frame/ken": [56392, 56392],
        "./zh-hant/character/frame/ken.json": [56392, 56392],
        "./zh-hant/character/frame/kimberly": [49471, 49471],
        "./zh-hant/character/frame/kimberly.json": [49471, 49471],
        "./zh-hant/character/frame/lily": [17652, 17652],
        "./zh-hant/character/frame/lily.json": [17652, 17652],
        "./zh-hant/character/frame/luke": [64387, 64387],
        "./zh-hant/character/frame/luke.json": [64387, 64387],
        "./zh-hant/character/frame/mai": [68359, 68359],
        "./zh-hant/character/frame/mai.json": [68359, 68359],
        "./zh-hant/character/frame/manon": [51131, 51131],
        "./zh-hant/character/frame/manon.json": [51131, 51131],
        "./zh-hant/character/frame/marisa": [939, 939],
        "./zh-hant/character/frame/marisa.json": [939, 939],
        "./zh-hant/character/frame/rashid": [58035, 58035],
        "./zh-hant/character/frame/rashid.json": [58035, 58035],
        "./zh-hant/character/frame/ryu": [81938, 81938],
        "./zh-hant/character/frame/ryu.json": [81938, 81938],
        "./zh-hant/character/frame/sagat": [72974, 72974],
        "./zh-hant/character/frame/sagat.json": [72974, 72974],
        "./zh-hant/character/frame/terry": [38076, 38076],
        "./zh-hant/character/frame/terry.json": [38076, 38076],
        "./zh-hant/character/frame/vega_mbison": [67786, 67786],
        "./zh-hant/character/frame/vega_mbison.json": [67786, 67786],
        "./zh-hant/character/frame/zangief": [62012, 62012],
        "./zh-hant/character/frame/zangief.json": [62012, 62012],
        "./zh-hant/character/gouki_akuma": [67999, 67999],
        "./zh-hant/character/gouki_akuma.json": [67999, 67999],
        "./zh-hant/character/guile": [45152, 45152],
        "./zh-hant/character/guile.json": [45152, 45152],
        "./zh-hant/character/ingrid": [38073, 38073],
        "./zh-hant/character/ingrid.json": [38073, 38073],
        "./zh-hant/character/jamie": [1102, 1102],
        "./zh-hant/character/jamie.json": [1102, 1102],
        "./zh-hant/character/jp": [76528, 76528],
        "./zh-hant/character/jp.json": [76528, 76528],
        "./zh-hant/character/juri": [68178, 68178],
        "./zh-hant/character/juri.json": [68178, 68178],
        "./zh-hant/character/ken": [42586, 42586],
        "./zh-hant/character/ken.json": [42586, 42586],
        "./zh-hant/character/kimberly": [52121, 52121],
        "./zh-hant/character/kimberly.json": [52121, 52121],
        "./zh-hant/character/lily": [9418, 9418],
        "./zh-hant/character/lily.json": [9418, 9418],
        "./zh-hant/character/luke": [44077, 44077],
        "./zh-hant/character/luke.json": [44077, 44077],
        "./zh-hant/character/mai": [26353, 26353],
        "./zh-hant/character/mai.json": [26353, 26353],
        "./zh-hant/character/manon": [5889, 5889],
        "./zh-hant/character/manon.json": [5889, 5889],
        "./zh-hant/character/marisa": [7617, 7617],
        "./zh-hant/character/marisa.json": [7617, 7617],
        "./zh-hant/character/movelist/_common": [89964, 89964],
        "./zh-hant/character/movelist/_common.json": [89964, 89964],
        "./zh-hant/character/movelist/aki": [24691, 24691],
        "./zh-hant/character/movelist/aki.json": [24691, 24691],
        "./zh-hant/character/movelist/alex": [45778, 45778],
        "./zh-hant/character/movelist/alex.json": [45778, 45778],
        "./zh-hant/character/movelist/blanka": [46723, 46723],
        "./zh-hant/character/movelist/blanka.json": [46723, 46723],
        "./zh-hant/character/movelist/cammy": [50981, 50981],
        "./zh-hant/character/movelist/cammy.json": [50981, 50981],
        "./zh-hant/character/movelist/chunli": [13749, 13749],
        "./zh-hant/character/movelist/chunli.json": [13749, 13749],
        "./zh-hant/character/movelist/cviper": [50321, 50321],
        "./zh-hant/character/movelist/cviper.json": [50321, 50321],
        "./zh-hant/character/movelist/deejay": [62576, 62576],
        "./zh-hant/character/movelist/deejay.json": [62576, 62576],
        "./zh-hant/character/movelist/dhalsim": [96792, 96792],
        "./zh-hant/character/movelist/dhalsim.json": [96792, 96792],
        "./zh-hant/character/movelist/ed": [48523, 48523],
        "./zh-hant/character/movelist/ed.json": [48523, 48523],
        "./zh-hant/character/movelist/ehonda": [85913, 85913],
        "./zh-hant/character/movelist/ehonda.json": [85913, 85913],
        "./zh-hant/character/movelist/elena": [99161, 99161],
        "./zh-hant/character/movelist/elena.json": [99161, 99161],
        "./zh-hant/character/movelist/gouki_akuma": [92103, 92103],
        "./zh-hant/character/movelist/gouki_akuma.json": [92103, 92103],
        "./zh-hant/character/movelist/guile": [77576, 77576],
        "./zh-hant/character/movelist/guile.json": [77576, 77576],
        "./zh-hant/character/movelist/ingrid": [73953, 73953],
        "./zh-hant/character/movelist/ingrid.json": [73953, 73953],
        "./zh-hant/character/movelist/jamie": [49286, 49286],
        "./zh-hant/character/movelist/jamie.json": [49286, 49286],
        "./zh-hant/character/movelist/jp": [12664, 12664],
        "./zh-hant/character/movelist/jp.json": [12664, 12664],
        "./zh-hant/character/movelist/juri": [69418, 69418],
        "./zh-hant/character/movelist/juri.json": [69418, 69418],
        "./zh-hant/character/movelist/ken": [98306, 98306],
        "./zh-hant/character/movelist/ken.json": [98306, 98306],
        "./zh-hant/character/movelist/kimberly": [3617, 3617],
        "./zh-hant/character/movelist/kimberly.json": [3617, 3617],
        "./zh-hant/character/movelist/lily": [82594, 82594],
        "./zh-hant/character/movelist/lily.json": [82594, 82594],
        "./zh-hant/character/movelist/luke": [65093, 65093],
        "./zh-hant/character/movelist/luke.json": [65093, 65093],
        "./zh-hant/character/movelist/mai": [45017, 45017],
        "./zh-hant/character/movelist/mai.json": [45017, 45017],
        "./zh-hant/character/movelist/manon": [60329, 60329],
        "./zh-hant/character/movelist/manon.json": [60329, 60329],
        "./zh-hant/character/movelist/marisa": [56729, 56729],
        "./zh-hant/character/movelist/marisa.json": [56729, 56729],
        "./zh-hant/character/movelist/rashid": [64481, 64481],
        "./zh-hant/character/movelist/rashid.json": [64481, 64481],
        "./zh-hant/character/movelist/ryu": [15e3, 15e3],
        "./zh-hant/character/movelist/ryu.json": [15e3, 15e3],
        "./zh-hant/character/movelist/sagat": [47488, 47488],
        "./zh-hant/character/movelist/sagat.json": [47488, 47488],
        "./zh-hant/character/movelist/terry": [99334, 99334],
        "./zh-hant/character/movelist/terry.json": [99334, 99334],
        "./zh-hant/character/movelist/vega_mbison": [42400, 42400],
        "./zh-hant/character/movelist/vega_mbison.json": [42400, 42400],
        "./zh-hant/character/movelist/zangief": [74614, 74614],
        "./zh-hant/character/movelist/zangief.json": [74614, 74614],
        "./zh-hant/character/outfit/aki": [86265, 86265],
        "./zh-hant/character/outfit/aki.json": [86265, 86265],
        "./zh-hant/character/outfit/alex": [94984, 94984],
        "./zh-hant/character/outfit/alex.json": [94984, 94984],
        "./zh-hant/character/outfit/blanka": [9405, 9405],
        "./zh-hant/character/outfit/blanka.json": [9405, 9405],
        "./zh-hant/character/outfit/cammy": [54059, 54059],
        "./zh-hant/character/outfit/cammy.json": [54059, 54059],
        "./zh-hant/character/outfit/chunli": [29883, 29883],
        "./zh-hant/character/outfit/chunli.json": [29883, 29883],
        "./zh-hant/character/outfit/cviper": [8707, 8707],
        "./zh-hant/character/outfit/cviper.json": [8707, 8707],
        "./zh-hant/character/outfit/deejay": [60530, 60530],
        "./zh-hant/character/outfit/deejay.json": [60530, 60530],
        "./zh-hant/character/outfit/dhalsim": [58366, 58366],
        "./zh-hant/character/outfit/dhalsim.json": [58366, 58366],
        "./zh-hant/character/outfit/ed": [96873, 96873],
        "./zh-hant/character/outfit/ed.json": [96873, 96873],
        "./zh-hant/character/outfit/ehonda": [22239, 22239],
        "./zh-hant/character/outfit/ehonda.json": [22239, 22239],
        "./zh-hant/character/outfit/elena": [34111, 34111],
        "./zh-hant/character/outfit/elena.json": [34111, 34111],
        "./zh-hant/character/outfit/gouki_akuma": [76453, 76453],
        "./zh-hant/character/outfit/gouki_akuma.json": [76453, 76453],
        "./zh-hant/character/outfit/guile": [8222, 8222],
        "./zh-hant/character/outfit/guile.json": [8222, 8222],
        "./zh-hant/character/outfit/ingrid": [26803, 26803],
        "./zh-hant/character/outfit/ingrid.json": [26803, 26803],
        "./zh-hant/character/outfit/jamie": [46740, 46740],
        "./zh-hant/character/outfit/jamie.json": [46740, 46740],
        "./zh-hant/character/outfit/jp": [89850, 89850],
        "./zh-hant/character/outfit/jp.json": [89850, 89850],
        "./zh-hant/character/outfit/juri": [96688, 96688],
        "./zh-hant/character/outfit/juri.json": [96688, 96688],
        "./zh-hant/character/outfit/ken": [68244, 68244],
        "./zh-hant/character/outfit/ken.json": [68244, 68244],
        "./zh-hant/character/outfit/kimberly": [59259, 59259],
        "./zh-hant/character/outfit/kimberly.json": [59259, 59259],
        "./zh-hant/character/outfit/lily": [17368, 17368],
        "./zh-hant/character/outfit/lily.json": [17368, 17368],
        "./zh-hant/character/outfit/luke": [68879, 68879],
        "./zh-hant/character/outfit/luke.json": [68879, 68879],
        "./zh-hant/character/outfit/mai": [73995, 73995],
        "./zh-hant/character/outfit/mai.json": [73995, 73995],
        "./zh-hant/character/outfit/manon": [455, 455],
        "./zh-hant/character/outfit/manon.json": [455, 455],
        "./zh-hant/character/outfit/marisa": [33799, 33799],
        "./zh-hant/character/outfit/marisa.json": [33799, 33799],
        "./zh-hant/character/outfit/rashid": [99055, 99055],
        "./zh-hant/character/outfit/rashid.json": [99055, 99055],
        "./zh-hant/character/outfit/ryu": [50470, 50470],
        "./zh-hant/character/outfit/ryu.json": [50470, 50470],
        "./zh-hant/character/outfit/sagat": [13370, 13370],
        "./zh-hant/character/outfit/sagat.json": [13370, 13370],
        "./zh-hant/character/outfit/terry": [82776, 82776],
        "./zh-hant/character/outfit/terry.json": [82776, 82776],
        "./zh-hant/character/outfit/vega_mbison": [85758, 85758],
        "./zh-hant/character/outfit/vega_mbison.json": [85758, 85758],
        "./zh-hant/character/outfit/zangief": [8456, 8456],
        "./zh-hant/character/outfit/zangief.json": [8456, 8456],
        "./zh-hant/character/rashid": [44425, 44425],
        "./zh-hant/character/rashid.json": [44425, 44425],
        "./zh-hant/character/ryu": [41760, 41760],
        "./zh-hant/character/ryu.json": [41760, 41760],
        "./zh-hant/character/sagat": [72632, 72632],
        "./zh-hant/character/sagat.json": [72632, 72632],
        "./zh-hant/character/terry": [14926, 14926],
        "./zh-hant/character/terry.json": [14926, 14926],
        "./zh-hant/character/vega_mbison": [8904, 8904],
        "./zh-hant/character/vega_mbison.json": [8904, 8904],
        "./zh-hant/character/zangief": [1214, 1214],
        "./zh-hant/character/zangief.json": [1214, 1214],
        "./zh-hant/column": [47476, 47476],
        "./zh-hant/column.json": [47476, 47476],
        "./zh-hant/common": [45999, 45999],
        "./zh-hant/common.json": [45999, 45999],
        "./zh-hant/concept": [98688, 98688],
        "./zh-hant/concept.json": [98688, 98688],
        "./zh-hant/demo": [27013, 27013],
        "./zh-hant/demo.json": [27013, 27013],
        "./zh-hant/guide": [8548, 8548],
        "./zh-hant/guide.json": [8548, 8548],
        "./zh-hant/index": [75868, 75868],
        "./zh-hant/index.json": [75868, 75868],
        "./zh-hant/live": [84892, 84892],
        "./zh-hant/live.json": [84892, 84892],
        "./zh-hant/mode/battlehub": [55079, 55079],
        "./zh-hant/mode/battlehub.json": [55079, 55079],
        "./zh-hant/mode/fightingground": [12697, 12697],
        "./zh-hant/mode/fightingground.json": [12697, 12697],
        "./zh-hant/mode/worldtour": [70528, 70528],
        "./zh-hant/mode/worldtour.json": [70528, 70528],
        "./zh-hant/news": [36501, 36501],
        "./zh-hant/news.json": [36501, 36501],
        "./zh-hant/product": [72327, 72327],
        "./zh-hant/product.json": [72327, 72327],
      };
      function c(a) {
        if (!r.o(t, a))
          return Promise.resolve().then(() => {
            var e = Error("Cannot find module '" + a + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = t[a],
          c = e[0];
        return r.e(e[1]).then(() => r.t(c, 19));
      }
      (c.keys = () => Object.keys(t)), (c.id = 68091), (a.exports = c);
    },
    69996: (a, e, r) => {
      "use strict";
      r.d(e, { A: () => o });
      var t = r(44922),
        c = function () {
          return (c =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        },
        s = r(90609),
        n = function () {
          return (n =
            Object.assign ||
            function (a) {
              for (var e, r = 1, t = arguments.length; r < t; r++)
                for (var c in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
              return a;
            }).apply(this, arguments);
        };
      function o(a) {
        var e = (0, t.useContext)(s.A);
        return (0, t.useMemo)(
          function () {
            var r;
            return n(n({}, e), {
              t:
                ((r = e.t),
                "string" != typeof a
                  ? r
                  : function (e, t, s) {
                      return r(e, t, c({ ns: a }, s));
                    }),
            });
          },
          [e, a]
        );
      }
    },
    72823: (a, e, r) => {
      a.exports = r(22896);
    },
    73115: (a) => {
      "use strict";
      a.exports = JSON.parse(
        '{"locales":["ja-jp","en-us","en-uk","en-asia","fr","it","de","es-es","pt-br","zh-hant","zh-hans","ko-kr","es-us"],"defaultLocale":"en-us","pages":{"*":["common"],"/":["index","concept","product"],"/mode/fightingground":["mode/fightingground"],"/mode/battlehub":["mode/battlehub"],"/mode/worldtour":["mode/worldtour"],"/character":["character"],"/character/[name]":["character","character/ryu","character/luke","character/jamie","character/chunli","character/guile","character/kimberly","character/juri","character/ken","character/blanka","character/dhalsim","character/ehonda","character/deejay","character/manon","character/marisa","character/jp","character/zangief","character/lily","character/cammy","character/rashid","character/aki","character/ed","character/gouki_akuma","character/vega_mbison","character/terry","character/mai","character/elena","character/sagat","character/cviper","character/alex","character/ingrid"],"/character/[name]/movelist":["character","character/ryu","character/luke","character/jamie","character/chunli","character/guile","character/kimberly","character/juri","character/ken","character/blanka","character/dhalsim","character/ehonda","character/deejay","character/manon","character/marisa","character/jp","character/zangief","character/lily","character/cammy","character/rashid","character/aki","character/ed","character/gouki_akuma","character/vega_mbison","character/terry","character/mai","character/elena","character/sagat","character/cviper","character/alex","character/ingrid","character/movelist/_common","character/movelist/ryu","character/movelist/luke","character/movelist/jamie","character/movelist/chunli","character/movelist/guile","character/movelist/kimberly","character/movelist/juri","character/movelist/ken","character/movelist/blanka","character/movelist/dhalsim","character/movelist/ehonda","character/movelist/deejay","character/movelist/manon","character/movelist/marisa","character/movelist/jp","character/movelist/zangief","character/movelist/lily","character/movelist/cammy","character/movelist/rashid","character/movelist/aki","character/movelist/ed","character/movelist/gouki_akuma","character/movelist/vega_mbison","character/movelist/terry","character/movelist/mai","character/movelist/elena","character/movelist/sagat","character/movelist/cviper","character/movelist/alex","character/movelist/ingrid"],"/character/[name]/frame":["character","character/ryu","character/luke","character/jamie","character/chunli","character/guile","character/kimberly","character/juri","character/ken","character/blanka","character/dhalsim","character/ehonda","character/deejay","character/manon","character/marisa","character/jp","character/zangief","character/lily","character/cammy","character/rashid","character/aki","character/ed","character/gouki_akuma","character/vega_mbison","character/terry","character/mai","character/elena","character/sagat","character/cviper","character/alex","character/ingrid","character/frame/_common","character/frame/ryu","character/frame/luke","character/frame/jamie","character/frame/chunli","character/frame/guile","character/frame/kimberly","character/frame/juri","character/frame/ken","character/frame/blanka","character/frame/dhalsim","character/frame/ehonda","character/frame/deejay","character/frame/manon","character/frame/marisa","character/frame/jp","character/frame/zangief","character/frame/lily","character/frame/cammy","character/frame/rashid","character/frame/aki","character/frame/ed","character/frame/gouki_akuma","character/frame/vega_mbison","character/frame/terry","character/frame/mai","character/frame/elena","character/frame/sagat","character/frame/cviper","character/frame/alex","character/frame/ingrid"],"/character/[name]/outfit":["character","character/ryu","character/luke","character/jamie","character/chunli","character/guile","character/kimberly","character/juri","character/ken","character/blanka","character/dhalsim","character/ehonda","character/deejay","character/manon","character/marisa","character/jp","character/zangief","character/lily","character/cammy","character/rashid","character/aki","character/ed","character/gouki_akuma","character/vega_mbison","character/terry","character/mai","character/elena","character/sagat","character/cviper","character/alex","character/ingrid","character/outfit/ryu","character/outfit/luke","character/outfit/jamie","character/outfit/chunli","character/outfit/guile","character/outfit/kimberly","character/outfit/juri","character/outfit/ken","character/outfit/blanka","character/outfit/dhalsim","character/outfit/ehonda","character/outfit/deejay","character/outfit/manon","character/outfit/marisa","character/outfit/jp","character/outfit/zangief","character/outfit/lily","character/outfit/cammy","character/outfit/rashid","character/outfit/aki","character/outfit/ed","character/outfit/gouki_akuma","character/outfit/vega_mbison","character/outfit/terry","character/outfit/mai","character/outfit/elena","character/outfit/sagat","character/outfit/cviper","character/outfit/alex","character/outfit/ingrid"],"/concept":["concept"],"/news":["news"],"/news/[slug]":["news"],"/news/all/[page]":["news"],"/news/[category]/[page]":["news"],"/news/detail/[slug]":["news"],"/column":["column","news","index"],"/column/all/[page]":["column","news","index"],"/column/[category]/[page]":["column","news","index"],"/column/detail/[slug]":["column","news","index"],"/product":["index","product"],"/magazine":["magazine"],"/magazine/[slug]":["magazine"],"/demo":["demo"],"/live":["live"],"/guide":["guide"],"/404":["error"],"/support/lang":["form"],"/support/form":["form"],"/support/conf":["form"],"/support/done":["form"],"/support/faq":["faq"],"rgx:^/more-examples":["more-examples"]}}'
      );
    },
    80240: (a) => {
      var e,
        r,
        t,
        c = (a.exports = {});
      function s() {
        throw Error("setTimeout has not been defined");
      }
      function n() {
        throw Error("clearTimeout has not been defined");
      }
      try {
        e = "function" == typeof setTimeout ? setTimeout : s;
      } catch (a) {
        e = s;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (a) {
        r = n;
      }
      function o(a) {
        if (e === setTimeout) return setTimeout(a, 0);
        if ((e === s || !e) && setTimeout)
          return (e = setTimeout), setTimeout(a, 0);
        try {
          return e(a, 0);
        } catch (r) {
          try {
            return e.call(null, a, 0);
          } catch (r) {
            return e.call(this, a, 0);
          }
        }
      }
      var i = [],
        h = !1,
        m = -1;
      function u() {
        h &&
          t &&
          ((h = !1), t.length ? (i = t.concat(i)) : (m = -1), i.length && l());
      }
      function l() {
        if (!h) {
          var a = o(u);
          h = !0;
          for (var e = i.length; e; ) {
            for (t = i, i = []; ++m < e; ) t && t[m].run();
            (m = -1), (e = i.length);
          }
          (t = null),
            (h = !1),
            (function (a) {
              if (r === clearTimeout) return clearTimeout(a);
              if ((r === n || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(a);
              try {
                r(a);
              } catch (e) {
                try {
                  return r.call(null, a);
                } catch (e) {
                  return r.call(this, a);
                }
              }
            })(a);
        }
      }
      function j(a, e) {
        (this.fun = a), (this.array = e);
      }
      function f() {}
      (c.nextTick = function (a) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        i.push(new j(a, e)), 1 !== i.length || h || o(l);
      }),
        (j.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (c.title = "browser"),
        (c.browser = !0),
        (c.env = {}),
        (c.argv = []),
        (c.version = ""),
        (c.versions = {}),
        (c.on = f),
        (c.addListener = f),
        (c.once = f),
        (c.off = f),
        (c.removeListener = f),
        (c.removeAllListeners = f),
        (c.emit = f),
        (c.prependListener = f),
        (c.prependOnceListener = f),
        (c.listeners = function (a) {
          return [];
        }),
        (c.binding = function (a) {
          throw Error("process.binding is not supported");
        }),
        (c.cwd = function () {
          return "/";
        }),
        (c.chdir = function (a) {
          throw Error("process.chdir is not supported");
        }),
        (c.umask = function () {
          return 0;
        });
    },
    85340: (a, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let t = r(44922),
        c = r(28587),
        s = "function" == typeof IntersectionObserver,
        n = new Map(),
        o = [];
      function i(a) {
        let { rootRef: e, rootMargin: r, disabled: i } = a,
          h = i || !s,
          [m, u] = (0, t.useState)(!1),
          l = (0, t.useRef)(null),
          j = (0, t.useCallback)((a) => {
            l.current = a;
          }, []);
        return (
          (0, t.useEffect)(() => {
            if (s) {
              if (h || m) return;
              let a = l.current;
              if (a && a.tagName)
                return (function (a, e, r) {
                  let {
                    id: t,
                    observer: c,
                    elements: s,
                  } = (function (a) {
                    let e,
                      r = { root: a.root || null, margin: a.rootMargin || "" },
                      t = o.find(
                        (a) => a.root === r.root && a.margin === r.margin
                      );
                    if (t && (e = n.get(t))) return e;
                    let c = new Map();
                    return (
                      (e = {
                        id: r,
                        observer: new IntersectionObserver((a) => {
                          a.forEach((a) => {
                            let e = c.get(a.target),
                              r = a.isIntersecting || a.intersectionRatio > 0;
                            e && r && e(r);
                          });
                        }, a),
                        elements: c,
                      }),
                      o.push(r),
                      n.set(r, e),
                      e
                    );
                  })(r);
                  return (
                    s.set(a, e),
                    c.observe(a),
                    function () {
                      if ((s.delete(a), c.unobserve(a), 0 === s.size)) {
                        c.disconnect(), n.delete(t);
                        let a = o.findIndex(
                          (a) => a.root === t.root && a.margin === t.margin
                        );
                        a > -1 && o.splice(a, 1);
                      }
                    }
                  );
                })(a, (a) => a && u(a), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: r,
                });
            } else if (!m) {
              let a = (0, c.requestIdleCallback)(() => u(!0));
              return () => (0, c.cancelIdleCallback)(a);
            }
          }, [h, r, e, m, l.current]),
          [
            j,
            m,
            (0, t.useCallback)(() => {
              u(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (a.exports = e.default));
    },
    90609: (a, e, r) => {
      "use strict";
      r.d(e, { A: () => t });
      let t = (0, r(44922).createContext)({
        t: function (a) {
          return Array.isArray(a) ? a[0] : a;
        },
        lang: "",
      });
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    a.O(0, [46593, 38792], () => (e(92), e(14226))), (_N_E = a.O());
  },
]);
