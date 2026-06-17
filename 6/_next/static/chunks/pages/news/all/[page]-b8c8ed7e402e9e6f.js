(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [51347],
  {
    13686: (e, s, n) => {
      "use strict";
      n.r(s), n.d(s, { __N_SSG: () => p, default: () => u });
      var t = n(66162),
        _ = n(69996),
        i = n(12350),
        l = n(86130),
        r = n(732),
        a = n(57385),
        c = n(5344),
        d = n(72087),
        p = !0;
      let u = (e) => {
        let { t: s, lang: n } = (0, _.A)("news");
        return (0, t.jsxs)(l.A, {
          children: [
            (0, t.jsx)(i.A, {
              pageTitle: s("[t]title"),
              pageDescription: s("[t]description"),
            }),
            (0, t.jsx)("div", {
              className: "contents page__news",
              children: (0, t.jsxs)(r.D.Provider, {
                value: e,
                children: [
                  (0, t.jsx)(a.A, {}),
                  (0, t.jsx)(c.A, {}),
                  (0, t.jsx)(d.A, {}),
                ],
              }),
            }),
          ],
        });
      };
    },
    37464: (e, s, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/news/all/[page]",
        function () {
          return n(13686);
        },
      ]);
    },
  },
  (e) => {
    e.O(0, [88649, 86130, 33213, 58342, 90636, 46593, 38792], () =>
      e((e.s = 37464))
    ),
      (_N_E = e.O());
  },
]);
