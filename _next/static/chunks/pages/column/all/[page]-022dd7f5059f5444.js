(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [21578],
  {
    51219: (e, n, s) => {
      "use strict";
      s.r(n), s.d(n, { __N_SSG: () => p, default: () => o });
      var l = s(66162),
        r = s(69996),
        i = s(12350),
        t = s(86130),
        _ = s(732),
        a = s(69505),
        c = s(50158),
        u = s(14603),
        d = s(64097),
        p = !0;
      let o = (e) => {
        let { t: n, lang: s } = (0, r.A)("column");
        return (0, l.jsxs)(t.A, {
          children: [
            (0, l.jsx)(i.A, {
              pageTitle: n("[t]title"),
              pageDescription: n("[t]description"),
              pageOgType: "website",
            }),
            (0, l.jsxs)("div", {
              className: "contents page__column",
              children: [
                (0, l.jsx)(c.A, {}),
                (0, l.jsx)(u.A, {}),
                (0, l.jsx)(_.D.Provider, {
                  value: e,
                  children: (0, l.jsx)(a.g.Provider, {
                    value: e,
                    children: (0, l.jsx)(d.A, { banner: e.banner }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    60484: (e, n, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/column/all/[page]",
        function () {
          return s(51219);
        },
      ]);
    },
  },
  (e) => {
    e.O(0, [88649, 86130, 94172, 64097, 90636, 46593, 38792], () =>
      e((e.s = 60484))
    ),
      (_N_E = e.O());
  },
]);
