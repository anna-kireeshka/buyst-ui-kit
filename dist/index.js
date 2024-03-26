import "./assets/index.css";
import bn, { jsx as u, jsxs as O } from "react/jsx-runtime";
import Pe, { useRef as yn, useState as re, useEffect as vn } from "react";
const wn = "Button-module__btn___ZPl3V", Rn = "Button-module__btnContent___EYnhQ", Pn = "Button-module__btnLoadingContainer___PhyRp", Ln = "Button-module__btnLoading___DrmPZ", Nn = "Button-module__rotation___CkkNA", U = {
  btn: wn,
  "btn--fullWidth": "Button-module__btn--fullWidth___y4Kok",
  "btn-gray": "Button-module__btn-gray___TJlhn",
  "btn-small": "Button-module__btn-small___HZ8-t",
  "btn-medium": "Button-module__btn-medium___n17ur",
  "btn-disabled": "Button-module__btn-disabled___Q-cHL",
  btnContent: Rn,
  btnLoadingContainer: Pn,
  btnLoading: Ln,
  rotation: Nn,
  "btn-green": "Button-module__btn-green___uXivq",
  "btn-green--outline": "Button-module__btn-green--outline___mHL7w",
  "btn-green--transparent": "Button-module__btn-green--transparent___Jg07l",
  "btn-green--withIcon": "Button-module__btn-green--withIcon___lCvWc",
  "btn-orange": "Button-module__btn-orange___mB9L-",
  "btn-orange--outline": "Button-module__btn-orange--outline___gy-v8",
  "btn-orange--transparent": "Button-module__btn-orange--transparent___Exy7B",
  "btn-orange--withIcon": "Button-module__btn-orange--withIcon___MCf6B",
  "btn-red": "Button-module__btn-red___gm4c1",
  "btn-red--outline": "Button-module__btn-red--outline___O9SjE",
  "btn-red--transparent": "Button-module__btn-red--transparent___Xp7uu",
  "btn-red--withIcon": "Button-module__btn-red--withIcon___RMflu",
  "btn-primary": "Button-module__btn-primary___WBCMt",
  "btn-primary--outline": "Button-module__btn-primary--outline___poWH6",
  "btn-primary--transparent": "Button-module__btn-primary--transparent___LCdvT",
  "btn-primary--withIcon": "Button-module__btn-primary--withIcon___Py-GC",
  "btn-gray--outline": "Button-module__btn-gray--outline___Bx71R",
  "btn-gray--transparent": "Button-module__btn-gray--transparent___D5cXl",
  "btn-gray--withIcon": "Button-module__btn-gray--withIcon___eFDez"
};
function nn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var rn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function o() {
      for (var a = [], n = 0; n < arguments.length; n++) {
        var r = arguments[n];
        if (r) {
          var c = typeof r;
          if (c === "string" || c === "number")
            a.push(r);
          else if (Array.isArray(r)) {
            if (r.length) {
              var i = o.apply(null, r);
              i && a.push(i);
            }
          } else if (c === "object") {
            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
              a.push(r.toString());
              continue;
            }
            for (var s in r)
              e.call(r, s) && r[s] && a.push(s);
          }
        }
      }
      return a.join(" ");
    }
    t.exports ? (o.default = o, t.exports = o) : window.classNames = o;
  })();
})(rn);
var Cn = rn.exports;
const ie = /* @__PURE__ */ nn(Cn), On = () => /* @__PURE__ */ u("div", { className: U.btnLoadingContainer, children: /* @__PURE__ */ u("span", { className: U.btnLoading }) }), Ro = ({
  theme: t = "green",
  disabled: e = !1,
  outline: o = !1,
  fullWidth: a = !1,
  children: n,
  size: r = "small",
  loading: c = !1,
  transparent: i = !1,
  withIcon: s = !1,
  ...l
}) => {
  const f = ie(U.btn, U[`btn-${t}`], {
    [U["btn--fullWidth"]]: a,
    [U[`btn-${t}--transparent`]]: i,
    [U[`btn-${r}`]]: r,
    [U[`btn-${t}--outline`]]: o,
    [U["btn-disabled"]]: e,
    [U[`btn-${t}--withIcon`]]: s
  });
  return c ? /* @__PURE__ */ u("button", { ...l, className: f, disabled: !0, children: /* @__PURE__ */ u(On, {}) }) : /* @__PURE__ */ u("button", { ...l, className: f, children: n });
}, In = "Input-module__field___q57In", En = "Input-module__input___jhteC", Mn = "Input-module__inputWithoutBorder___yoplm", te = {
  field: In,
  "field--disabled": "Input-module__field--disabled___XG2xU",
  input: En,
  "input--success": "Input-module__input--success___YJnVe",
  "input--danger": "Input-module__input--danger___kfbP2",
  "input--disabled": "Input-module__input--disabled___bmbFQ",
  "input--outlined": "Input-module__input--outlined___8YRYp",
  inputWithoutBorder: Mn
}, on = ({
  type: t = "text",
  label: e = "",
  state: o = "",
  value: a = "",
  borderRadius: n,
  onChange: r,
  placeholder: c = "",
  ...i
}) => {
  const s = (f) => {
    const m = f.code.toLowerCase();
    t === "number" && m.includes("key") && f.preventDefault();
  }, l = ie(te.input, {
    [te[`input--${o}`]]: o !== "",
    [te.inputWithoutBorder]: !n
  });
  return /* @__PURE__ */ O("div", { className: te.field, children: [
    !!e.length && /* @__PURE__ */ O("label", { className: te.label, children: [
      " ",
      e,
      " "
    ] }),
    /* @__PURE__ */ u(
      "input",
      {
        type: t,
        value: a,
        className: l,
        onKeyDown: (f) => s(f),
        onChange: r,
        placeholder: c,
        ...i
      }
    )
  ] });
}, Sn = "Checkbox-module__container___DuL-K", Tn = "Checkbox-module__checkbox___g1GQ5", kn = "Checkbox-module__checkmark___DNBen", Ee = {
  container: Sn,
  checkbox: Tn,
  checkmark: kn
}, Po = (t) => /* @__PURE__ */ O("label", { className: Ee.container, children: [
  /* @__PURE__ */ u("input", { type: "checkbox", ...t, className: Ee.checkbox }),
  /* @__PURE__ */ u("span", { className: Ee.checkmark }),
  t.label
] }), jn = "Radio-module__container___lGm-1", Dn = "Radio-module__radio___bl6dX", xn = "Radio-module__radioMark___gzrNl", Me = {
  container: jn,
  radio: Dn,
  radioMark: xn
}, Lo = ({ disabled: t }, e) => /* @__PURE__ */ O("label", { className: Me.container, children: [
  /* @__PURE__ */ u("input", { type: "radio", ...e, className: Me.radio }),
  /* @__PURE__ */ u("span", { className: Me.radioMark }),
  e.label
] }), qn = "ButtonIcon-module__btn___hBM-2", le = {
  btn: qn,
  "btn-green": "ButtonIcon-module__btn-green___7S-8q",
  "btn-orange": "ButtonIcon-module__btn-orange___Qkjb4",
  "btn-red": "ButtonIcon-module__btn-red___BhPmJ",
  "btn-primary": "ButtonIcon-module__btn-primary___n9QWo",
  "btn-gray": "ButtonIcon-module__btn-gray___zzgI0",
  "btn-sm": "ButtonIcon-module__btn-sm___1Ts5I",
  "btn-lg": "ButtonIcon-module__btn-lg___zCLLo"
}, No = ({ theme: t, size: e, fill: o = !1, children: a, ...n }) => {
  const r = ie(le.btn, le[`btn-${t}`], {
    [le[`btn-${e}`]]: e,
    [le["btn-fill"]]: o
  });
  return /* @__PURE__ */ u("button", { ...n, className: r, children: a });
}, An = "ButtonSocialNetwork-module__btn___JDtC2", mt = {
  btn: An,
  "btn-instagram": "ButtonSocialNetwork-module__btn-instagram___5W3ZO",
  "btn-whatsapp": "ButtonSocialNetwork-module__btn-whatsapp___TxjI3",
  "btn-facebook": "ButtonSocialNetwork-module__btn-facebook___-rsYX",
  "btn-telegram": "ButtonSocialNetwork-module__btn-telegram___Nd9XA"
}, Bn = () => /* @__PURE__ */ O(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 56.7 56.7",
    xmlSpace: "preserve",
    width: "20",
    height: "20",
    children: [
      /* @__PURE__ */ u("path", { d: "M28.2 16.7c-7 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8S41 36.5 41 29.5s-5.8-12.8-12.8-12.8zm0 21c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" }),
      /* @__PURE__ */ u("circle", { cx: "41.5", cy: "16.4", r: "2.9" }),
      /* @__PURE__ */ u("path", { d: "M49 8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7 0-14.5 5.8-14.5 14.5v20.5c0 4.3 1.4 8 4.2 10.7 2.7 2.6 6.3 3.9 10.4 3.9h20.4c4.3 0 7.9-1.4 10.5-3.9 2.7-2.6 4.1-6.3 4.1-10.6V19.3c0-4.2-1.4-7.8-4-10.4zm-.4 31c0 3.1-1.1 5.6-2.9 7.3s-4.3 2.6-7.3 2.6H18c-3 0-5.5-.9-7.3-2.6C8.9 45.4 8 42.9 8 39.8V19.3c0-3 .9-5.5 2.7-7.3 1.7-1.7 4.3-2.6 7.3-2.6h20.6c3 0 5.5.9 7.3 2.7 1.7 1.8 2.7 4.3 2.7 7.2v20.6z" })
    ]
  }
), $n = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ u(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
      }
    )
  }
), Un = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    version: "1.1",
    viewBox: "0 0 56.693 56.693",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ u("path", { d: "M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z" })
  }
), zn = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    clipRule: "evenodd",
    viewBox: "0 0 512 512",
    width: "20",
    height: "20",
    children: /* @__PURE__ */ u("path", { d: "M373.295 307.064c-6.37-3.188-37.687-18.596-43.526-20.724-5.838-2.126-10.084-3.187-14.331 3.188-4.246 6.376-16.454 20.725-20.17 24.976-3.715 4.251-7.431 4.785-13.8 1.594-6.37-3.187-26.895-9.913-51.225-31.616-18.935-16.89-31.72-37.749-35.435-44.126-3.716-6.377-.397-9.824 2.792-13 2.867-2.854 6.371-7.44 9.555-11.16 3.186-3.718 4.247-6.377 6.37-10.626 2.123-4.252 1.062-7.971-.532-11.159-1.591-3.188-14.33-34.542-19.638-47.298-5.171-12.419-10.422-10.737-14.332-10.934-3.711-.184-7.963-.223-12.208-.223-4.246 0-11.148 1.594-16.987 7.969-5.838 6.377-22.293 21.789-22.293 53.14 0 31.355 22.824 61.642 26.009 65.894 3.185 4.252 44.916 68.59 108.816 96.181 15.196 6.564 27.062 10.483 36.312 13.418 15.259 4.849 29.145 4.165 40.121 2.524 12.238-1.827 37.686-15.408 42.995-30.286 5.307-14.882 5.307-27.635 3.715-30.292-1.592-2.657-5.838-4.251-12.208-7.44M257.071 465.757h-.086c-38.022-.015-75.313-10.23-107.845-29.535l-7.738-4.592-80.194 21.037 21.405-78.19-5.037-8.017c-21.211-33.735-32.414-72.726-32.397-112.763.047-116.825 95.1-211.87 211.976-211.87 56.595.019 109.795 22.088 149.801 62.139 40.005 40.05 62.023 93.286 62.001 149.902-.048 116.834-95.1 211.889-211.886 211.889M437.403 73.533C389.272 25.347 325.265-1.202 257.068-1.23 116.554-1.23 2.193 113.124 2.136 253.681c-.018 44.932 11.72 88.786 34.03 127.448L0 513.231l135.141-35.45c37.236 20.31 79.159 31.015 121.826 31.029h.105c140.499 0 254.87-114.366 254.928-254.925.026-68.117-26.467-132.166-74.597-180.352" })
  }
), Co = ({ theme: t = "whatsapp", children: e, ...o }) => {
  const a = ie(mt.btn, mt[`btn-${t}`]);
  return /* @__PURE__ */ O("button", { ...o, className: a, children: [
    e,
    t === "whatsapp" ? /* @__PURE__ */ u(zn, {}) : t === "instagram" ? /* @__PURE__ */ u(Bn, {}) : t === "telegram" ? /* @__PURE__ */ u($n, {}) : /* @__PURE__ */ u(Un, {})
  ] });
}, ne = () => /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ u(
  "path",
  {
    d: "M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z",
    fill: "rgba(96,98,102,1)"
  }
) }), Wn = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ u("path", { d: "M396.6 160L416 180.7 256 352 96 180.7 115.3 160 256 310.5z" })
  }
), Hn = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ u("path", { d: "M396.6 352L416 331.3 256 160 96 331.3 115.3 352 256 201.5z" })
  }
), an = () => /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ u(
  "path",
  {
    fill: "#fff",
    d: "M10 2.75a7.25 7.25 0 015.63 11.819l4.9 4.9a.75.75 0 01-.976 1.134l-.084-.073-4.901-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z"
  }
) }), Vn = () => /* @__PURE__ */ u("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", children: /* @__PURE__ */ u("path", { d: "M3 4H21V6H3V4ZM3 19H17V21H3V19ZM3 14H21V16H3V14ZM3 9H17V11H3V9Z", fill: "#fff" }) }), Gn = () => /* @__PURE__ */ u(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    children: /* @__PURE__ */ u("path", { d: "M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" })
  }
), gt = () => /* @__PURE__ */ O("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "30", height: "30", children: [
  /* @__PURE__ */ u("path", { fill: "none", d: "M0 0h24v24H0z" }),
  /* @__PURE__ */ u(
    "path",
    {
      fill: "#fff",
      d: "M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm11.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
    }
  )
] });
var at = { exports: {} }, oe = {};
oe._ = oe._interop_require_default = Fn;
function Fn(t) {
  return t && t.__esModule ? t : { default: t };
}
var de = { exports: {} }, Se = {}, bt;
function sn() {
  return bt || (bt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, i) {
      for (var s in i)
        Object.defineProperty(c, s, {
          enumerable: !0,
          get: i[s]
        });
    }
    e(t, {
      searchParamsToUrlQuery: function() {
        return o;
      },
      urlQueryToSearchParams: function() {
        return n;
      },
      assign: function() {
        return r;
      }
    });
    function o(c) {
      const i = {};
      return c.forEach((s, l) => {
        typeof i[l] > "u" ? i[l] = s : Array.isArray(i[l]) ? i[l].push(s) : i[l] = [
          i[l],
          s
        ];
      }), i;
    }
    function a(c) {
      return typeof c == "string" || typeof c == "number" && !isNaN(c) || typeof c == "boolean" ? String(c) : "";
    }
    function n(c) {
      const i = new URLSearchParams();
      return Object.entries(c).forEach((s) => {
        let [l, f] = s;
        Array.isArray(f) ? f.forEach((m) => i.append(l, a(m))) : i.set(l, a(f));
      }), i;
    }
    function r(c) {
      for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
        s[l - 1] = arguments[l];
      return s.forEach((f) => {
        Array.from(f.keys()).forEach((m) => c.delete(m)), f.forEach((m, h) => c.append(h, m));
      }), c;
    }
  }(Se)), Se;
}
var Te = {}, fe = {}, yt;
function Kn() {
  if (yt)
    return fe;
  yt = 1;
  function t(o) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (t = function(r) {
      return r ? n : a;
    })(o);
  }
  fe._ = fe._interop_require_wildcard = e;
  function e(o, a) {
    if (!a && o && o.__esModule)
      return o;
    if (o === null || typeof o != "object" && typeof o != "function")
      return { default: o };
    var n = t(a);
    if (n && n.has(o))
      return n.get(o);
    var r = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var i in o)
      if (i !== "default" && Object.prototype.hasOwnProperty.call(o, i)) {
        var s = c ? Object.getOwnPropertyDescriptor(o, i) : null;
        s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = o[i];
      }
    return r.default = o, n && n.set(o, r), r;
  }
  return fe;
}
var vt;
function cn() {
  return vt || (vt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(s, l) {
      for (var f in l)
        Object.defineProperty(s, f, {
          enumerable: !0,
          get: l[f]
        });
    }
    e(t, {
      formatUrl: function() {
        return r;
      },
      urlObjectKeys: function() {
        return c;
      },
      formatWithValidation: function() {
        return i;
      }
    });
    const a = /* @__PURE__ */ Kn()._(sn()), n = /https?|ftp|gopher|file/;
    function r(s) {
      let { auth: l, hostname: f } = s, m = s.protocol || "", h = s.pathname || "", y = s.hash || "", P = s.query || "", d = !1;
      l = l ? encodeURIComponent(l).replace(/%3A/i, ":") + "@" : "", s.host ? d = l + s.host : f && (d = l + (~f.indexOf(":") ? "[" + f + "]" : f), s.port && (d += ":" + s.port)), P && typeof P == "object" && (P = String(a.urlQueryToSearchParams(P)));
      let p = s.search || P && "?" + P || "";
      return m && !m.endsWith(":") && (m += ":"), s.slashes || (!m || n.test(m)) && d !== !1 ? (d = "//" + (d || ""), h && h[0] !== "/" && (h = "/" + h)) : d || (d = ""), y && y[0] !== "#" && (y = "#" + y), p && p[0] !== "?" && (p = "?" + p), h = h.replace(/[?#]/g, encodeURIComponent), p = p.replace("#", "%23"), "" + m + d + h + p + y;
    }
    const c = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    function i(s) {
      return process.env.NODE_ENV === "development" && s !== null && typeof s == "object" && Object.keys(s).forEach((l) => {
        c.includes(l) || console.warn("Unknown key passed via urlObject into url.format: " + l);
      }), r(s);
    }
  }(Te)), Te;
}
var ke = {}, wt;
function Xn() {
  return wt || (wt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "omit", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o, a) {
      const n = {};
      return Object.keys(o).forEach((r) => {
        a.includes(r) || (n[r] = o[r]);
      }), n;
    }
  }(ke)), ke;
}
var je = {}, Rt;
function Le() {
  return Rt || (Rt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(_, v) {
      for (var L in v)
        Object.defineProperty(_, L, {
          enumerable: !0,
          get: v[L]
        });
    }
    e(t, {
      WEB_VITALS: function() {
        return o;
      },
      execOnce: function() {
        return a;
      },
      isAbsoluteUrl: function() {
        return r;
      },
      getLocationOrigin: function() {
        return c;
      },
      getURL: function() {
        return i;
      },
      getDisplayName: function() {
        return s;
      },
      isResSent: function() {
        return l;
      },
      normalizeRepeatedSlashes: function() {
        return f;
      },
      loadGetInitialProps: function() {
        return m;
      },
      SP: function() {
        return h;
      },
      ST: function() {
        return y;
      },
      DecodeError: function() {
        return P;
      },
      NormalizeError: function() {
        return d;
      },
      PageNotFoundError: function() {
        return p;
      },
      MissingStaticPage: function() {
        return g;
      },
      MiddlewareNotFoundError: function() {
        return I;
      },
      stringifyError: function() {
        return R;
      }
    });
    const o = [
      "CLS",
      "FCP",
      "FID",
      "INP",
      "LCP",
      "TTFB"
    ];
    function a(_) {
      let v = !1, L;
      return function() {
        for (var w = arguments.length, b = new Array(w), E = 0; E < w; E++)
          b[E] = arguments[E];
        return v || (v = !0, L = _(...b)), L;
      };
    }
    const n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, r = (_) => n.test(_);
    function c() {
      const { protocol: _, hostname: v, port: L } = window.location;
      return _ + "//" + v + (L ? ":" + L : "");
    }
    function i() {
      const { href: _ } = window.location, v = c();
      return _.substring(v.length);
    }
    function s(_) {
      return typeof _ == "string" ? _ : _.displayName || _.name || "Unknown";
    }
    function l(_) {
      return _.finished || _.headersSent;
    }
    function f(_) {
      const v = _.split("?");
      return v[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (v[1] ? "?" + v.slice(1).join("?") : "");
    }
    async function m(_, v) {
      if (process.env.NODE_ENV !== "production") {
        var L;
        if ((L = _.prototype) != null && L.getInitialProps) {
          const E = '"' + s(_) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
          throw new Error(E);
        }
      }
      const w = v.res || v.ctx && v.ctx.res;
      if (!_.getInitialProps)
        return v.ctx && v.Component ? {
          pageProps: await m(v.Component, v.ctx)
        } : {};
      const b = await _.getInitialProps(v);
      if (w && l(w))
        return b;
      if (!b) {
        const E = '"' + s(_) + '.getInitialProps()" should resolve to an object. But found "' + b + '" instead.';
        throw new Error(E);
      }
      return process.env.NODE_ENV !== "production" && Object.keys(b).length === 0 && !v.ctx && console.warn("" + s(_) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"), b;
    }
    const h = typeof performance < "u", y = h && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((_) => typeof performance[_] == "function");
    class P extends Error {
    }
    class d extends Error {
    }
    class p extends Error {
      constructor(v) {
        super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + v;
      }
    }
    class g extends Error {
      constructor(v, L) {
        super(), this.message = "Failed to load static file for page: " + v + " " + L;
      }
    }
    class I extends Error {
      constructor() {
        super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
      }
    }
    function R(_) {
      return JSON.stringify({
        message: _.message,
        stack: _.stack
      });
    }
  }(je)), je;
}
var _e = { exports: {} }, De = {}, Pt;
function un() {
  return Pt || (Pt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o) {
      return o.replace(/\/$/, "") || "/";
    }
  }(De)), De;
}
var xe = {}, Lt;
function st() {
  return Lt || (Lt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "parsePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o) {
      const a = o.indexOf("#"), n = o.indexOf("?"), r = n > -1 && (a < 0 || n < a);
      return r || a > -1 ? {
        pathname: o.substring(0, r ? n : a),
        query: r ? o.substring(n, a > -1 ? a : void 0) : "",
        hash: a > -1 ? o.slice(a) : ""
      } : {
        pathname: o,
        query: "",
        hash: ""
      };
    }
  }(xe)), xe;
}
var Nt;
function Ne() {
  return Nt || (Nt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const o = un(), a = st(), n = (r) => {
      if (!r.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return r;
      const { pathname: c, query: i, hash: s } = (0, a.parsePath)(r);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(c) ? "" + (0, o.removeTrailingSlash)(c) + i + s : c.endsWith("/") ? "" + c + i + s : c + "/" + i + s : "" + (0, o.removeTrailingSlash)(c) + i + s;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(_e, _e.exports)), _e.exports;
}
var qe = {}, he = { exports: {} }, Ae = {}, Ct;
function ln() {
  return Ct || (Ct = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const e = st();
    function o(a, n) {
      if (typeof a != "string")
        return !1;
      const { pathname: r } = (0, e.parsePath)(a);
      return r === n || r.startsWith(n + "/");
    }
  }(Ae)), Ae;
}
var Ot;
function Qn() {
  return Ot || (Ot = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "hasBasePath", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const o = ln(), a = process.env.__NEXT_ROUTER_BASEPATH || "";
    function n(r) {
      return (0, o.pathHasPrefix)(r, a);
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(he, he.exports)), he.exports;
}
var It;
function dn() {
  return It || (It = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isLocalURL", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = Le(), o = Qn();
    function a(n) {
      if (!(0, e.isAbsoluteUrl)(n))
        return !0;
      try {
        const r = (0, e.getLocationOrigin)(), c = new URL(n, r);
        return c.origin === r && (0, o.hasBasePath)(c.pathname);
      } catch {
        return !1;
      }
    }
  }(qe)), qe;
}
var Be = {}, $e = {}, Et;
function Yn() {
  return Et || (Et = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getSortedRoutes", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    class e {
      insert(n) {
        this._insert(n.split("/").filter(Boolean), [], !1);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(n) {
        n === void 0 && (n = "/");
        const r = [
          ...this.children.keys()
        ].sort();
        this.slugName !== null && r.splice(r.indexOf("[]"), 1), this.restSlugName !== null && r.splice(r.indexOf("[...]"), 1), this.optionalRestSlugName !== null && r.splice(r.indexOf("[[...]]"), 1);
        const c = r.map((i) => this.children.get(i)._smoosh("" + n + i + "/")).reduce((i, s) => [
          ...i,
          ...s
        ], []);
        if (this.slugName !== null && c.push(...this.children.get("[]")._smoosh(n + "[" + this.slugName + "]/")), !this.placeholder) {
          const i = n === "/" ? "/" : n.slice(0, -1);
          if (this.optionalRestSlugName != null)
            throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + i + '" and "' + i + "[[..." + this.optionalRestSlugName + ']]").');
          c.unshift(i);
        }
        return this.restSlugName !== null && c.push(...this.children.get("[...]")._smoosh(n + "[..." + this.restSlugName + "]/")), this.optionalRestSlugName !== null && c.push(...this.children.get("[[...]]")._smoosh(n + "[[..." + this.optionalRestSlugName + "]]/")), c;
      }
      _insert(n, r, c) {
        if (n.length === 0) {
          this.placeholder = !1;
          return;
        }
        if (c)
          throw new Error("Catch-all must be the last part of the URL.");
        let i = n[0];
        if (i.startsWith("[") && i.endsWith("]")) {
          let f = function(m, h) {
            if (m !== null && m !== h)
              throw new Error("You cannot use different slug names for the same dynamic path ('" + m + "' !== '" + h + "').");
            r.forEach((y) => {
              if (y === h)
                throw new Error('You cannot have the same slug name "' + h + '" repeat within a single dynamic path');
              if (y.replace(/\W/g, "") === i.replace(/\W/g, ""))
                throw new Error('You cannot have the slug names "' + y + '" and "' + h + '" differ only by non-word symbols within a single dynamic path');
            }), r.push(h);
          }, s = i.slice(1, -1), l = !1;
          if (s.startsWith("[") && s.endsWith("]") && (s = s.slice(1, -1), l = !0), s.startsWith("...") && (s = s.substring(3), c = !0), s.startsWith("[") || s.endsWith("]"))
            throw new Error("Segment names may not start or end with extra brackets ('" + s + "').");
          if (s.startsWith("."))
            throw new Error("Segment names may not start with erroneous periods ('" + s + "').");
          if (c)
            if (l) {
              if (this.restSlugName != null)
                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + n[0] + '" ).');
              f(this.optionalRestSlugName, s), this.optionalRestSlugName = s, i = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null)
                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + n[0] + '").');
              f(this.restSlugName, s), this.restSlugName = s, i = "[...]";
            }
          else {
            if (l)
              throw new Error('Optional route parameters are not yet supported ("' + n[0] + '").');
            f(this.slugName, s), this.slugName = s, i = "[]";
          }
        }
        this.children.has(i) || this.children.set(i, new e()), this.children.get(i)._insert(n.slice(1), r, c);
      }
      constructor() {
        this.placeholder = !0, this.children = /* @__PURE__ */ new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
      }
    }
    function o(a) {
      const n = new e();
      return a.forEach((r) => n.insert(r)), n.smoosh();
    }
  }($e)), $e;
}
var Ue = {}, ze = {}, We = {}, He = {}, Mt;
function Zn() {
  return Mt || (Mt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "ensureLeadingSlash", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o) {
      return o.startsWith("/") ? o : "/" + o;
    }
  }(He)), He;
}
var Ve = {}, St;
function Jn() {
  return St || (St = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(r, c) {
      for (var i in c)
        Object.defineProperty(r, i, {
          enumerable: !0,
          get: c[i]
        });
    }
    e(t, {
      isGroupSegment: function() {
        return o;
      },
      PAGE_SEGMENT_KEY: function() {
        return a;
      },
      DEFAULT_SEGMENT_KEY: function() {
        return n;
      }
    });
    function o(r) {
      return r[0] === "(" && r.endsWith(")");
    }
    const a = "__PAGE__", n = "__DEFAULT__";
  }(Ve)), Ve;
}
var Tt;
function er() {
  return Tt || (Tt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, i) {
      for (var s in i)
        Object.defineProperty(c, s, {
          enumerable: !0,
          get: i[s]
        });
    }
    e(t, {
      normalizeAppPath: function() {
        return n;
      },
      normalizeRscURL: function() {
        return r;
      }
    });
    const o = Zn(), a = Jn();
    function n(c) {
      return (0, o.ensureLeadingSlash)(c.split("/").reduce((i, s, l, f) => !s || (0, a.isGroupSegment)(s) || s[0] === "@" || (s === "page" || s === "route") && l === f.length - 1 ? i : i + "/" + s, ""));
    }
    function r(c) {
      return c.replace(
        /\.rsc($|\?)/,
        // $1 ensures `?` is preserved
        "$1"
      );
    }
  }(We)), We;
}
var kt;
function fn() {
  return kt || (kt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(c, i) {
      for (var s in i)
        Object.defineProperty(c, s, {
          enumerable: !0,
          get: i[s]
        });
    }
    e(t, {
      INTERCEPTION_ROUTE_MARKERS: function() {
        return a;
      },
      isInterceptionRouteAppPath: function() {
        return n;
      },
      extractInterceptionRouteInformation: function() {
        return r;
      }
    });
    const o = er(), a = [
      "(..)(..)",
      "(.)",
      "(..)",
      "(...)"
    ];
    function n(c) {
      return c.split("/").find((i) => a.find((s) => i.startsWith(s))) !== void 0;
    }
    function r(c) {
      let i, s, l;
      for (const f of c.split("/"))
        if (s = a.find((m) => f.startsWith(m)), s) {
          [i, l] = c.split(s, 2);
          break;
        }
      if (!i || !s || !l)
        throw new Error(`Invalid interception route: ${c}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
      switch (i = (0, o.normalizeAppPath)(i), s) {
        case "(.)":
          i === "/" ? l = `/${l}` : l = i + "/" + l;
          break;
        case "(..)":
          if (i === "/")
            throw new Error(`Invalid interception route: ${c}. Cannot use (..) marker at the root level, use (.) instead.`);
          l = i.split("/").slice(0, -1).concat(l).join("/");
          break;
        case "(...)":
          l = "/" + l;
          break;
        case "(..)(..)":
          const f = i.split("/");
          if (f.length <= 2)
            throw new Error(`Invalid interception route: ${c}. Cannot use (..)(..) marker at the root level or one level up.`);
          l = f.slice(0, -2).concat(l).join("/");
          break;
        default:
          throw new Error("Invariant: unexpected marker");
      }
      return {
        interceptingRoute: i,
        interceptedRoute: l
      };
    }
  }(ze)), ze;
}
var jt;
function tr() {
  return jt || (jt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "isDynamicRoute", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = fn(), o = /\/\[[^/]+?\](?=\/|$)/;
    function a(n) {
      return (0, e.isInterceptionRouteAppPath)(n) && (n = (0, e.extractInterceptionRouteInformation)(n).interceptedRoute), o.test(n);
    }
  }(Ue)), Ue;
}
var Dt;
function nr() {
  return Dt || (Dt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(n, r) {
      for (var c in r)
        Object.defineProperty(n, c, {
          enumerable: !0,
          get: r[c]
        });
    }
    e(t, {
      getSortedRoutes: function() {
        return o.getSortedRoutes;
      },
      isDynamicRoute: function() {
        return a.isDynamicRoute;
      }
    });
    const o = Yn(), a = tr();
  }(Be)), Be;
}
var Ge = {}, Fe = {}, xt;
function rr() {
  return xt || (xt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "getRouteMatcher", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const e = Le();
    function o(a) {
      let { re: n, groups: r } = a;
      return (c) => {
        const i = n.exec(c);
        if (!i)
          return !1;
        const s = (f) => {
          try {
            return decodeURIComponent(f);
          } catch {
            throw new e.DecodeError("failed to decode param");
          }
        }, l = {};
        return Object.keys(r).forEach((f) => {
          const m = r[f], h = i[m.pos];
          h !== void 0 && (l[f] = ~h.indexOf("/") ? h.split("/").map((y) => s(y)) : m.repeat ? [
            s(h)
          ] : s(h));
        }), l;
      };
    }
  }(Fe)), Fe;
}
var Ke = {}, Xe = {}, qt;
function or() {
  return qt || (qt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "escapeStringRegexp", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = /[|\\{}()[\]^$+*?.-]/, o = /[|\\{}()[\]^$+*?.-]/g;
    function a(n) {
      return e.test(n) ? n.replace(o, "\\$&") : n;
    }
  }(Xe)), Xe;
}
var At;
function ir() {
  return At || (At = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(d, p) {
      for (var g in p)
        Object.defineProperty(d, g, {
          enumerable: !0,
          get: p[g]
        });
    }
    e(t, {
      getRouteRegex: function() {
        return l;
      },
      getNamedRouteRegex: function() {
        return y;
      },
      getNamedMiddlewareRegex: function() {
        return P;
      }
    });
    const o = fn(), a = or(), n = un(), r = "nxtP", c = "nxtI";
    function i(d) {
      const p = d.startsWith("[") && d.endsWith("]");
      p && (d = d.slice(1, -1));
      const g = d.startsWith("...");
      return g && (d = d.slice(3)), {
        key: d,
        repeat: g,
        optional: p
      };
    }
    function s(d) {
      const p = (0, n.removeTrailingSlash)(d).slice(1).split("/"), g = {};
      let I = 1;
      return {
        parameterizedRoute: p.map((R) => {
          const _ = o.INTERCEPTION_ROUTE_MARKERS.find((L) => R.startsWith(L)), v = R.match(/\[((?:\[.*\])|.+)\]/);
          if (_ && v) {
            const { key: L, optional: w, repeat: b } = i(v[1]);
            return g[L] = {
              pos: I++,
              repeat: b,
              optional: w
            }, "/" + (0, a.escapeStringRegexp)(_) + "([^/]+?)";
          } else if (v) {
            const { key: L, repeat: w, optional: b } = i(v[1]);
            return g[L] = {
              pos: I++,
              repeat: w,
              optional: b
            }, w ? b ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else
            return "/" + (0, a.escapeStringRegexp)(R);
        }).join(""),
        groups: g
      };
    }
    function l(d) {
      const { parameterizedRoute: p, groups: g } = s(d);
      return {
        re: new RegExp("^" + p + "(?:/)?$"),
        groups: g
      };
    }
    function f() {
      let d = 0;
      return () => {
        let p = "", g = ++d;
        for (; g > 0; )
          p += String.fromCharCode(97 + (g - 1) % 26), g = Math.floor((g - 1) / 26);
        return p;
      };
    }
    function m(d) {
      let { interceptionMarker: p, getSafeRouteKey: g, segment: I, routeKeys: R, keyPrefix: _ } = d;
      const { key: v, optional: L, repeat: w } = i(I);
      let b = v.replace(/\W/g, "");
      _ && (b = "" + _ + b);
      let E = !1;
      (b.length === 0 || b.length > 30) && (E = !0), isNaN(parseInt(b.slice(0, 1))) || (E = !0), E && (b = g()), _ ? R[b] = "" + _ + v : R[b] = v;
      const M = p ? (0, a.escapeStringRegexp)(p) : "";
      return w ? L ? "(?:/" + M + "(?<" + b + ">.+?))?" : "/" + M + "(?<" + b + ">.+?)" : "/" + M + "(?<" + b + ">[^/]+?)";
    }
    function h(d, p) {
      const g = (0, n.removeTrailingSlash)(d).slice(1).split("/"), I = f(), R = {};
      return {
        namedParameterizedRoute: g.map((_) => {
          const v = o.INTERCEPTION_ROUTE_MARKERS.some((w) => _.startsWith(w)), L = _.match(/\[((?:\[.*\])|.+)\]/);
          if (v && L) {
            const [w] = _.split(L[0]);
            return m({
              getSafeRouteKey: I,
              interceptionMarker: w,
              segment: L[1],
              routeKeys: R,
              keyPrefix: p ? c : void 0
            });
          } else
            return L ? m({
              getSafeRouteKey: I,
              segment: L[1],
              routeKeys: R,
              keyPrefix: p ? r : void 0
            }) : "/" + (0, a.escapeStringRegexp)(_);
        }).join(""),
        routeKeys: R
      };
    }
    function y(d, p) {
      const g = h(d, p);
      return {
        ...l(d),
        namedRegex: "^" + g.namedParameterizedRoute + "(?:/)?$",
        routeKeys: g.routeKeys
      };
    }
    function P(d, p) {
      const { parameterizedRoute: g } = s(d), { catchAll: I = !0 } = p;
      if (g === "/")
        return {
          namedRegex: "^/" + (I ? ".*" : "") + "$"
        };
      const { namedParameterizedRoute: R } = h(d, !1);
      let _ = I ? "(?:(/.*)?)" : "";
      return {
        namedRegex: "^" + R + _ + "$"
      };
    }
  }(Ke)), Ke;
}
var Bt;
function ar() {
  return Bt || (Bt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "interpolateAs", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = rr(), o = ir();
    function a(n, r, c) {
      let i = "";
      const s = (0, o.getRouteRegex)(n), l = s.groups, f = (
        // Try to match the dynamic route against the asPath
        (r !== n ? (0, e.getRouteMatcher)(s)(r) : "") || // Fall back to reading the values from the href
        // TODO: should this take priority; also need to change in the router.
        c
      );
      i = n;
      const m = Object.keys(l);
      return m.every((h) => {
        let y = f[h] || "";
        const { repeat: P, optional: d } = l[h];
        let p = "[" + (P ? "..." : "") + h + "]";
        return d && (p = (y ? "" : "/") + "[" + p + "]"), P && !Array.isArray(y) && (y = [
          y
        ]), (d || h in f) && // Interpolate group into data URL if present
        (i = i.replace(p, P ? y.map(
          // these values should be fully encoded instead of just
          // path delimiter escaped since they are being inserted
          // into the URL and we expect URL encoded segments
          // when parsing dynamic route params
          (g) => encodeURIComponent(g)
        ).join("/") : encodeURIComponent(y)) || "/");
      }) || (i = ""), {
        params: m,
        result: i
      };
    }
  }(Ge)), Ge;
}
var $t;
function sr() {
  return $t || ($t = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "resolveHref", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const o = sn(), a = cn(), n = Xn(), r = Le(), c = Ne(), i = dn(), s = nr(), l = ar();
    function f(m, h, y) {
      let P, d = typeof h == "string" ? h : (0, a.formatWithValidation)(h);
      const p = d.match(/^[a-zA-Z]{1,}:\/\//), g = p ? d.slice(p[0].length) : d;
      if ((g.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + d + "' passed to next/router in page: '" + m.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const R = (0, r.normalizeRepeatedSlashes)(g);
        d = (p ? p[0] : "") + R;
      }
      if (!(0, i.isLocalURL)(d))
        return y ? [
          d
        ] : d;
      try {
        P = new URL(d.startsWith("#") ? m.asPath : m.pathname, "http://n");
      } catch {
        P = new URL("/", "http://n");
      }
      try {
        const R = new URL(d, P);
        R.pathname = (0, c.normalizePathTrailingSlash)(R.pathname);
        let _ = "";
        if ((0, s.isDynamicRoute)(R.pathname) && R.searchParams && y) {
          const L = (0, o.searchParamsToUrlQuery)(R.searchParams), { result: w, params: b } = (0, l.interpolateAs)(R.pathname, R.pathname, L);
          w && (_ = (0, a.formatWithValidation)({
            pathname: w,
            hash: R.hash,
            query: (0, n.omit)(L, b)
          }));
        }
        const v = R.origin === P.origin ? R.href.slice(R.origin.length) : R.href;
        return y ? [
          v,
          _ || v
        ] : v;
      } catch {
        return y ? [
          d
        ] : d;
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(de, de.exports)), de.exports;
}
var pe = { exports: {} }, Qe = {}, Ye = {}, Ut;
function _n() {
  return Ut || (Ut = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const e = st();
    function o(a, n) {
      if (!a.startsWith("/") || !n)
        return a;
      const { pathname: r, query: c, hash: i } = (0, e.parsePath)(a);
      return "" + n + r + c + i;
    }
  }(Ye)), Ye;
}
var zt;
function cr() {
  return zt || (zt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "addLocale", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const e = _n(), o = ln();
    function a(n, r, c, i) {
      if (!r || r === c)
        return n;
      const s = n.toLowerCase();
      return !i && ((0, o.pathHasPrefix)(s, "/api") || (0, o.pathHasPrefix)(s, "/" + r.toLowerCase())) ? n : (0, e.addPathPrefix)(n, "/" + r);
    }
  }(Qe)), Qe;
}
var Wt;
function ur() {
  return Wt || (Wt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addLocale", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const o = Ne(), a = function(n) {
      for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        c[i - 1] = arguments[i];
      return process.env.__NEXT_I18N_SUPPORT ? (0, o.normalizePathTrailingSlash)(cr().addLocale(n, ...c)) : n;
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(pe, pe.exports)), pe.exports;
}
var Ze = {}, Ht;
function lr() {
  return Ht || (Ht = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "RouterContext", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const a = (/* @__PURE__ */ oe._(Pe)).default.createContext(null);
    process.env.NODE_ENV !== "production" && (a.displayName = "RouterContext");
  }(Ze)), Ze;
}
var Je = {}, Vt;
function dr() {
  return Vt || (Vt = 1, function(t) {
    "use client";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    function e(l, f) {
      for (var m in f)
        Object.defineProperty(l, m, {
          enumerable: !0,
          get: f[m]
        });
    }
    e(t, {
      AppRouterContext: function() {
        return n;
      },
      LayoutRouterContext: function() {
        return r;
      },
      GlobalLayoutRouterContext: function() {
        return c;
      },
      TemplateContext: function() {
        return i;
      },
      MissingSlotContext: function() {
        return s;
      }
    });
    const a = /* @__PURE__ */ oe._(Pe), n = a.default.createContext(null), r = a.default.createContext(null), c = a.default.createContext(null), i = a.default.createContext(null);
    process.env.NODE_ENV !== "production" && (n.displayName = "AppRouterContext", r.displayName = "LayoutRouterContext", c.displayName = "GlobalLayoutRouterContext", i.displayName = "TemplateContext");
    const s = a.default.createContext(/* @__PURE__ */ new Set());
  }(Je)), Je;
}
var me = { exports: {} }, ge = { exports: {} }, Gt;
function fr() {
  return Gt || (Gt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function o(r, c) {
      for (var i in c)
        Object.defineProperty(r, i, {
          enumerable: !0,
          get: c[i]
        });
    }
    o(e, {
      requestIdleCallback: function() {
        return a;
      },
      cancelIdleCallback: function() {
        return n;
      }
    });
    const a = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(r) {
      let c = Date.now();
      return self.setTimeout(function() {
        r({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - c));
          }
        });
      }, 1);
    }, n = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(r) {
      return clearTimeout(r);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(ge, ge.exports)), ge.exports;
}
var Ft;
function _r() {
  return Ft || (Ft = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "useIntersection", {
      enumerable: !0,
      get: function() {
        return l;
      }
    });
    const o = Pe, a = fr(), n = typeof IntersectionObserver == "function", r = /* @__PURE__ */ new Map(), c = [];
    function i(f) {
      const m = {
        root: f.root || null,
        margin: f.rootMargin || ""
      }, h = c.find((p) => p.root === m.root && p.margin === m.margin);
      let y;
      if (h && (y = r.get(h), y))
        return y;
      const P = /* @__PURE__ */ new Map(), d = new IntersectionObserver((p) => {
        p.forEach((g) => {
          const I = P.get(g.target), R = g.isIntersecting || g.intersectionRatio > 0;
          I && R && I(R);
        });
      }, f);
      return y = {
        id: m,
        observer: d,
        elements: P
      }, c.push(m), r.set(m, y), y;
    }
    function s(f, m, h) {
      const { id: y, observer: P, elements: d } = i(h);
      return d.set(f, m), P.observe(f), function() {
        if (d.delete(f), P.unobserve(f), d.size === 0) {
          P.disconnect(), r.delete(y);
          const g = c.findIndex((I) => I.root === y.root && I.margin === y.margin);
          g > -1 && c.splice(g, 1);
        }
      };
    }
    function l(f) {
      let { rootRef: m, rootMargin: h, disabled: y } = f;
      const P = y || !n, [d, p] = (0, o.useState)(!1), g = (0, o.useRef)(null), I = (0, o.useCallback)((_) => {
        g.current = _;
      }, []);
      (0, o.useEffect)(() => {
        if (n) {
          if (P || d)
            return;
          const _ = g.current;
          if (_ && _.tagName)
            return s(_, (L) => L && p(L), {
              root: m == null ? void 0 : m.current,
              rootMargin: h
            });
        } else if (!d) {
          const _ = (0, a.requestIdleCallback)(() => p(!0));
          return () => (0, a.cancelIdleCallback)(_);
        }
      }, [
        P,
        h,
        m,
        d,
        g.current
      ]);
      const R = (0, o.useCallback)(() => {
        p(!1);
      }, []);
      return [
        I,
        d,
        R
      ];
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(me, me.exports)), me.exports;
}
var be = { exports: {} }, ye = { exports: {} }, et = {}, Kt;
function hr() {
  return Kt || (Kt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o, a) {
      let n;
      const r = o.split("/");
      return (a || []).some((c) => r[1] && r[1].toLowerCase() === c.toLowerCase() ? (n = c, r.splice(1, 1), o = r.join("/") || "/", !0) : !1), {
        pathname: o,
        detectedLocale: n
      };
    }
  }(et)), et;
}
var Xt;
function pr() {
  return Xt || (Xt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = (a, n) => process.env.__NEXT_I18N_SUPPORT ? hr().normalizeLocalePath(a, n) : {
      pathname: a,
      detectedLocale: void 0
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(ye, ye.exports)), ye.exports;
}
var ve = { exports: {} }, tt = {}, Qt;
function mr() {
  return Qt || (Qt = 1, function(t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), Object.defineProperty(t, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return e;
      }
    });
    function e(o, a, n) {
      if (o) {
        n && (n = n.toLowerCase());
        for (const i of o) {
          var r, c;
          const s = (r = i.domain) == null ? void 0 : r.split(":", 1)[0].toLowerCase();
          if (a === s || n === i.defaultLocale.toLowerCase() || (c = i.locales) != null && c.some((l) => l.toLowerCase() === n))
            return i;
        }
      }
    }
  }(tt)), tt;
}
var Yt;
function gr() {
  return Yt || (Yt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return o;
      }
    });
    const o = function() {
      for (var a = arguments.length, n = new Array(a), r = 0; r < a; r++)
        n[r] = arguments[r];
      if (process.env.__NEXT_I18N_SUPPORT)
        return mr().detectDomainLocale(...n);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(ve, ve.exports)), ve.exports;
}
var Zt;
function br() {
  return Zt || (Zt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "getDomainLocale", {
      enumerable: !0,
      get: function() {
        return n;
      }
    });
    const o = Ne(), a = process.env.__NEXT_ROUTER_BASEPATH || "";
    function n(r, c, i, s) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const l = pr().normalizeLocalePath, f = gr().detectDomainLocale, m = c || l(r, i).detectedLocale, h = f(s, void 0, m);
        if (h) {
          const y = "http" + (h.http ? "" : "s") + "://", P = m === h.defaultLocale ? "" : "/" + m;
          return "" + y + h.domain + (0, o.normalizePathTrailingSlash)("" + a + P + r);
        }
        return !1;
      } else
        return !1;
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(be, be.exports)), be.exports;
}
var we = { exports: {} }, Jt;
function yr() {
  return Jt || (Jt = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "addBasePath", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const o = _n(), a = Ne(), n = process.env.__NEXT_ROUTER_BASEPATH || "";
    function r(c, i) {
      return (0, a.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !i ? c : (0, o.addPathPrefix)(c, n));
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(we, we.exports)), we.exports;
}
var Re = { exports: {} }, en;
function vr() {
  return en || (en = 1, function(t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function o(h, y) {
      for (var P in y)
        Object.defineProperty(h, P, {
          enumerable: !0,
          get: y[P]
        });
    }
    o(e, {
      PrefetchKind: function() {
        return f;
      },
      ACTION_REFRESH: function() {
        return a;
      },
      ACTION_NAVIGATE: function() {
        return n;
      },
      ACTION_RESTORE: function() {
        return r;
      },
      ACTION_SERVER_PATCH: function() {
        return c;
      },
      ACTION_PREFETCH: function() {
        return i;
      },
      ACTION_FAST_REFRESH: function() {
        return s;
      },
      ACTION_SERVER_ACTION: function() {
        return l;
      },
      isThenable: function() {
        return m;
      }
    });
    const a = "refresh", n = "navigate", r = "restore", c = "server-patch", i = "prefetch", s = "fast-refresh", l = "server-action";
    var f;
    (function(h) {
      h.AUTO = "auto", h.FULL = "full", h.TEMPORARY = "temporary";
    })(f || (f = {}));
    function m(h) {
      return h && (typeof h == "object" || typeof h == "function") && typeof h.then == "function";
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
  }(Re, Re.exports)), Re.exports;
}
(function(t, e) {
  "use client";
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
      return L;
    }
  });
  const o = oe, a = bn, n = /* @__PURE__ */ o._(Pe), r = sr(), c = dn(), i = cn(), s = Le(), l = ur(), f = lr(), m = dr(), h = _r(), y = br(), P = yr(), d = vr(), p = /* @__PURE__ */ new Set();
  function g(w, b, E, M, j, A) {
    if (typeof window > "u" || !A && !(0, c.isLocalURL)(b))
      return;
    if (!M.bypassPrefetchedCheck) {
      const F = (
        // Let the link's locale prop override the default router locale.
        typeof M.locale < "u" ? M.locale : "locale" in w ? w.locale : void 0
      ), X = b + "%" + E + "%" + F;
      if (p.has(X))
        return;
      p.add(X);
    }
    const Q = A ? w.prefetch(b, j) : w.prefetch(b, E, M);
    Promise.resolve(Q).catch((F) => {
      if (process.env.NODE_ENV !== "production")
        throw F;
    });
  }
  function I(w) {
    const E = w.currentTarget.getAttribute("target");
    return E && E !== "_self" || w.metaKey || w.ctrlKey || w.shiftKey || w.altKey || // triggers resource download
    w.nativeEvent && w.nativeEvent.which === 2;
  }
  function R(w, b, E, M, j, A, Q, F, X) {
    const { nodeName: Ce } = w.currentTarget;
    if (Ce.toUpperCase() === "A" && (I(w) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !X && !(0, c.isLocalURL)(E)))
      return;
    w.preventDefault();
    const ae = () => {
      const $ = Q ?? !0;
      "beforePopState" in b ? b[j ? "replace" : "push"](E, M, {
        shallow: A,
        locale: F,
        scroll: $
      }) : b[j ? "replace" : "push"](M || E, {
        scroll: $
      });
    };
    X ? n.default.startTransition(ae) : ae();
  }
  function _(w) {
    return typeof w == "string" ? w : (0, i.formatUrl)(w);
  }
  const L = /* @__PURE__ */ n.default.forwardRef(function(b, E) {
    let M;
    const { href: j, as: A, children: Q, prefetch: F = null, passHref: X, replace: Ce, shallow: ct, scroll: ae, locale: $, onClick: Oe, onMouseEnter: Ie, onTouchStart: ut, legacyBehavior: B = !1, ...pn } = b;
    M = Q, B && (typeof M == "string" || typeof M == "number") && (M = /* @__PURE__ */ (0, a.jsx)("a", {
      children: M
    }));
    const T = n.default.useContext(f.RouterContext), mn = n.default.useContext(m.AppRouterContext), z = T ?? mn, W = !T, se = F !== !1, ce = F === null ? d.PrefetchKind.AUTO : d.PrefetchKind.FULL;
    if (process.env.NODE_ENV !== "production") {
      let N = function(C) {
        return new Error("Failed prop type: The prop `" + C.key + "` expects a " + C.expected + " in `<Link>`, but got `" + C.actual + "` instead." + (typeof window < "u" ? `
Open your browser's console to view the Component stack trace.` : ""));
      };
      Object.keys({
        href: !0
      }).forEach((C) => {
        if (C === "href" && (b[C] == null || typeof b[C] != "string" && typeof b[C] != "object"))
          throw N({
            key: C,
            expected: "`string` or `object`",
            actual: b[C] === null ? "null" : typeof b[C]
          });
      }), Object.keys({
        as: !0,
        replace: !0,
        scroll: !0,
        shallow: !0,
        passHref: !0,
        prefetch: !0,
        locale: !0,
        onClick: !0,
        onMouseEnter: !0,
        onTouchStart: !0,
        legacyBehavior: !0
      }).forEach((C) => {
        const V = typeof b[C];
        if (C === "as") {
          if (b[C] && V !== "string" && V !== "object")
            throw N({
              key: C,
              expected: "`string` or `object`",
              actual: V
            });
        } else if (C === "locale") {
          if (b[C] && V !== "string")
            throw N({
              key: C,
              expected: "`string`",
              actual: V
            });
        } else if (C === "onClick" || C === "onMouseEnter" || C === "onTouchStart") {
          if (b[C] && V !== "function")
            throw N({
              key: C,
              expected: "`function`",
              actual: V
            });
        } else if ((C === "replace" || C === "scroll" || C === "shallow" || C === "passHref" || C === "prefetch" || C === "legacyBehavior") && b[C] != null && V !== "boolean")
          throw N({
            key: C,
            expected: "`boolean`",
            actual: V
          });
      });
      const pt = n.default.useRef(!1);
      b.prefetch && !pt.current && !W && (pt.current = !0, console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));
    }
    if (process.env.NODE_ENV !== "production" && W && !A) {
      let N;
      if (typeof j == "string" ? N = j : typeof j == "object" && typeof j.pathname == "string" && (N = j.pathname), N && N.split("/").some((Z) => Z.startsWith("[") && Z.endsWith("]")))
        throw new Error("Dynamic href `" + N + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href");
    }
    const { href: H, as: x } = n.default.useMemo(() => {
      if (!T) {
        const Z = _(j);
        return {
          href: Z,
          as: A ? _(A) : Z
        };
      }
      const [N, ee] = (0, r.resolveHref)(T, j, !0);
      return {
        href: N,
        as: A ? (0, r.resolveHref)(T, A) : ee || N
      };
    }, [
      T,
      j,
      A
    ]), lt = n.default.useRef(H), dt = n.default.useRef(x);
    let D;
    if (B)
      if (process.env.NODE_ENV === "development") {
        Oe && console.warn('"onClick" was passed to <Link> with `href` of `' + j + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'), Ie && console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + j + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
        try {
          D = n.default.Children.only(M);
        } catch {
          throw M ? new Error("Multiple children were passed to <Link> with `href` of `" + j + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window < "u" ? ` 
Open your browser's console to view the Component stack trace.` : "")) : new Error("No children were passed to <Link> with `href` of `" + j + "` but one child is required https://nextjs.org/docs/messages/link-no-children");
        }
      } else
        D = n.default.Children.only(M);
    else if (process.env.NODE_ENV === "development" && (M == null ? void 0 : M.type) === "a")
      throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);
    const Y = B ? D && typeof D == "object" && D.ref : E, [ft, _t, ht] = (0, h.useIntersection)({
      rootMargin: "200px"
    }), gn = n.default.useCallback((N) => {
      (dt.current !== x || lt.current !== H) && (ht(), dt.current = x, lt.current = H), ft(N), Y && (typeof Y == "function" ? Y(N) : typeof Y == "object" && (Y.current = N));
    }, [
      x,
      Y,
      H,
      ht,
      ft
    ]);
    n.default.useEffect(() => {
      process.env.NODE_ENV === "production" && z && (!_t || !se || g(z, H, x, {
        locale: $
      }, {
        kind: ce
      }, W));
    }, [
      x,
      H,
      _t,
      $,
      se,
      T == null ? void 0 : T.locale,
      z,
      W,
      ce
    ]);
    const ue = {
      ref: gn,
      onClick(N) {
        if (process.env.NODE_ENV !== "production" && !N)
          throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');
        !B && typeof Oe == "function" && Oe(N), B && D.props && typeof D.props.onClick == "function" && D.props.onClick(N), z && (N.defaultPrevented || R(N, z, H, x, Ce, ct, ae, $, W));
      },
      onMouseEnter(N) {
        !B && typeof Ie == "function" && Ie(N), B && D.props && typeof D.props.onMouseEnter == "function" && D.props.onMouseEnter(N), z && ((!se || process.env.NODE_ENV === "development") && W || g(z, H, x, {
          locale: $,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ce
        }, W));
      },
      onTouchStart(N) {
        !B && typeof ut == "function" && ut(N), B && D.props && typeof D.props.onTouchStart == "function" && D.props.onTouchStart(N), z && (!se && W || g(z, H, x, {
          locale: $,
          priority: !0,
          // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
          bypassPrefetchedCheck: !0
        }, {
          kind: ce
        }, W));
      }
    };
    if ((0, s.isAbsoluteUrl)(x))
      ue.href = x;
    else if (!B || X || D.type === "a" && !("href" in D.props)) {
      const N = typeof $ < "u" ? $ : T == null ? void 0 : T.locale, ee = (T == null ? void 0 : T.isLocaleDomain) && (0, y.getDomainLocale)(x, N, T == null ? void 0 : T.locales, T == null ? void 0 : T.domainLocales);
      ue.href = ee || (0, P.addBasePath)((0, l.addLocale)(x, N, T == null ? void 0 : T.defaultLocale));
    }
    return B ? /* @__PURE__ */ n.default.cloneElement(D, ue) : /* @__PURE__ */ (0, a.jsx)("a", {
      ...pn,
      ...ue,
      children: M
    });
  });
  (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})(at, at.exports);
var wr = at.exports, Rr = wr;
const q = /* @__PURE__ */ nn(Rr), Pr = "CategoryDropDownDesctop-module__categories___1N8Xb", Lr = "CategoryDropDownDesctop-module__categoriesLink___c0QCi", Nr = "CategoryDropDownDesctop-module__categoriesContainer___H-Ys3", Cr = "CategoryDropDownDesctop-module__categoriesMain___3B4Wi", Or = "CategoryDropDownDesctop-module__categoriesMainList___u2Mwj", Ir = "CategoryDropDownDesctop-module__categoriesMainListItem___xTF38", Er = "CategoryDropDownDesctop-module__categoriesChildren___HTbXB", Mr = "CategoryDropDownDesctop-module__categoriesChildrenTitle___X6FIv", Sr = "CategoryDropDownDesctop-module__categoriesChildrenGrid___WfORI", Tr = "CategoryDropDownDesctop-module__categoriesChildrenList___yBfpZ", kr = "CategoryDropDownDesctop-module__categoriesChildrenListItem___m-2Il", S = {
  categories: Pr,
  categoriesLink: Lr,
  categoriesContainer: Nr,
  categoriesMain: Cr,
  categoriesMainList: Or,
  categoriesMainListItem: Ir,
  categoriesChildren: Er,
  categoriesChildrenTitle: Mr,
  categoriesChildrenGrid: Sr,
  categoriesChildrenList: Tr,
  categoriesChildrenListItem: kr
}, jr = () => /* @__PURE__ */ u("div", { className: S.categories, children: /* @__PURE__ */ O("div", { className: S.categoriesContainer, children: [
  /* @__PURE__ */ u("div", { className: S.categoriesMain, children: /* @__PURE__ */ O("ul", { className: S.categoriesMainList, children: [
    /* @__PURE__ */ O("li", { className: S.categoriesMainListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: S.categoriesLink, children: "main category" }),
      /* @__PURE__ */ u(ne, {})
    ] }),
    /* @__PURE__ */ O("li", { className: S.categoriesMainListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: S.categoriesLink, children: "main category 2" }),
      /* @__PURE__ */ u(ne, {})
    ] }),
    /* @__PURE__ */ O("li", { className: S.categoriesMainListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: S.categoriesLink, children: "main category 3" }),
      /* @__PURE__ */ u(ne, {})
    ] }),
    /* @__PURE__ */ O("li", { className: S.categoriesMainListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: S.categoriesLink, children: "main category 4" }),
      /* @__PURE__ */ u(ne, {})
    ] }),
    /* @__PURE__ */ O("li", { className: S.categoriesMainListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: S.categoriesLink, children: "main category 5" }),
      /* @__PURE__ */ u(ne, {})
    ] })
  ] }) }),
  /* @__PURE__ */ O("div", { className: S.categoriesChildren, children: [
    /* @__PURE__ */ u("strong", { className: S.categoriesChildrenTitle, children: "Main Category Active" }),
    /* @__PURE__ */ u("div", { className: S.categoriesChildrenGrid, children: /* @__PURE__ */ u("ul", { className: S.categoriesChildrenList, children: /* @__PURE__ */ O("li", { className: S.categoriesChildrenListItem, children: [
      /* @__PURE__ */ u(q, { prefetch: !1, className: S.categoriesLink, href: "/", children: /* @__PURE__ */ u("strong", { children: "sub_menu_category" }) }),
      /* @__PURE__ */ u(q, { prefetch: !1, className: S.categoriesLink, href: "/", children: "sub_menu_second_category" })
    ] }) }) })
  ] })
] }) }), Dr = "InputSerach-module__search___eeRxM", xr = "InputSerach-module__searchBtn___j04Tu", qr = "InputSerach-module__categoryBtn___9mkEx", nt = {
  search: Dr,
  searchBtn: xr,
  categoryBtn: qr
}, Oo = ({
  label: t = "",
  value: e = "",
  onChange: o,
  openCategoryList: a = !1,
  onClick: n,
  placeholder: r = "",
  borderRadius: c = !1,
  ...i
}) => /* @__PURE__ */ O("div", { className: nt.search, children: [
  /* @__PURE__ */ u("button", { className: nt.categoryBtn, onClick: n, children: a ? /* @__PURE__ */ u(Gn, {}) : /* @__PURE__ */ u(Vn, {}) }),
  a && /* @__PURE__ */ u(jr, {}),
  /* @__PURE__ */ u(
    on,
    {
      type: "text",
      label: t,
      state: "",
      borderRadius: c,
      value: e,
      onChange: o,
      placeholder: r,
      ...i
    }
  ),
  /* @__PURE__ */ u("button", { className: nt.searchBtn, children: /* @__PURE__ */ u(an, {}) })
] }), Ar = "Select-module__selectList___BBJ-6", Br = "Select-module__selectListItem___C6m6C", $r = "Select-module__selectListItemActive___iy6J8", G = {
  selectList: Ar,
  selectListItem: Br,
  selectListItemActive: $r
}, Ur = "ButtonDropdown-module__selectContainer___dDy1-", zr = "ButtonDropdown-module__selectContainerLabel___ZaGFM", Wr = "ButtonDropdown-module__selectList___f7sOU", rt = {
  selectContainer: Ur,
  selectContainerLabel: zr,
  selectList: Wr
}, hn = ({ label: t = "select", children: e, isOpen: o, value: a, onClick: n }) => /* @__PURE__ */ O("div", { className: rt.selectContainer, children: [
  /* @__PURE__ */ O(
    "button",
    {
      className: rt.selectContainerLabel,
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-controls": `${t}_dropdown`,
      "aria-labelledby": `${t}_label`,
      "aria-expanded": o,
      "aria-activedescendant": `${t}_element_${a}`,
      onClick: n,
      children: [
        a || "Label",
        o ? /* @__PURE__ */ u(Wn, {}) : /* @__PURE__ */ u(Hn, {})
      ]
    }
  ),
  /* @__PURE__ */ u(
    "ul",
    {
      className: rt.selectList,
      role: "listbox",
      tabIndex: -1,
      "aria-multiselectable": !1,
      id: `${t}_dropdown`,
      children: e
    }
  )
] }), Io = ({
  label: t = "",
  listLength: e = 5,
  value: o = "",
  isOpen: a = !1,
  selectValue: n,
  onHandleDropdown: r
}) => {
  const c = yn(null), [i, s] = re("");
  let [l, f] = re(0);
  const m = 38, h = 40;
  vn(() => {
    function d(p) {
      y(p);
    }
    return a && document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [a, l]);
  const y = (d) => {
    d.keyCode === m && l > 0 ? f((p) => p - 1) : d.keyCode === h ? f(e === l ? 0 : (p) => p + 1) : d.key === "Enter" && n(i), P();
  }, P = () => {
    var g;
    const d = (g = c == null ? void 0 : c.current) == null ? void 0 : g.children;
    let p = 0;
    d && Array.from(d).map((I, R) => {
      const _ = I.textContent || "";
      o = _, R === l && (s(_), p = I.clientHeight);
    }), c.current && (c.current.scrollTop = p * l);
  };
  return /* @__PURE__ */ u(hn, { label: t, isOpen: a, value: o, onClick: r, children: /* @__PURE__ */ O("div", { className: G.selectList, ref: c, children: [
    /* @__PURE__ */ u(
      "li",
      {
        className: `${G.selectListItem} ${o === "Option 1" && G.selectListItemActive}`,
        id: `${t}_element_option1`,
        "aria-selected": o === "Option 1",
        role: "option",
        onClick: () => n("Option 2"),
        children: "Option 1"
      }
    ),
    /* @__PURE__ */ u(
      "li",
      {
        className: `${G.selectListItem} ${o === "Option 2" && G.selectListItemActive}`,
        id: `${t}_element_option1}`,
        "aria-selected": o === "Option 2",
        role: "option",
        onClick: () => n("Option 2"),
        children: "Option 2"
      }
    ),
    /* @__PURE__ */ u(
      "li",
      {
        className: `${G.selectListItem} ${o === "Option 3" && G.selectListItemActive}`,
        id: `${t}_element_option1}`,
        "aria-selected": o === "Option 3",
        role: "option",
        onClick: () => n("Option 3"),
        children: "Option 3"
      }
    ),
    /* @__PURE__ */ u(
      "li",
      {
        className: `${G.selectListItem} ${o === "Option 4" && G.selectListItemActive}`,
        id: `${t}_element_option1}`,
        "aria-selected": o === "Option 4",
        role: "option",
        onClick: () => n("Option 4"),
        children: "Option 4"
      }
    )
  ] }) });
}, Hr = "SelectRange-module__selectRange___TFKDM", Vr = {
  selectRange: Hr
}, Eo = ({ label: t = "select", children: e, id: o, onHandleDropdown: a, isOpen: n }) => /* @__PURE__ */ u(hn, { label: t, isOpen: n, value: "", onClick: a, children: /* @__PURE__ */ u("div", { className: Vr.selectRange, children: e }) }), Gr = "ToggleSwitch-module__toggleSwitch___q9-bP", Fr = "ToggleSwitch-module__background___LtBzR", Kr = "ToggleSwitch-module__toggleOption___MigHk", Xr = "ToggleSwitch-module__selected___-sbPH", K = {
  toggleSwitch: Gr,
  background: Fr,
  toggleOption: Kr,
  selected: Xr
}, Mo = () => {
  const [t, e] = re("value 1"), [o, a] = re(0), n = (i, s) => {
    e(i), a(s);
  }, r = `calc(${100 / 3 * o}% + 4px)`, c = `calc(${100 / 3}% - 7px)`;
  return /* @__PURE__ */ O("div", { className: K.toggleSwitch, children: [
    /* @__PURE__ */ u("div", { className: K.background, style: { left: r, width: c } }),
    /* @__PURE__ */ u(
      "button",
      {
        className: `${K.toggleOption} ${t === "value 1" ? K.selected : ""}`,
        onClick: () => n("value 1", 0),
        children: "Value 1"
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        className: `${K.toggleOption} ${t === "value 2" ? K.selected : ""}`,
        onClick: () => n("value 2", 1),
        children: "Value 2"
      }
    ),
    /* @__PURE__ */ u(
      "button",
      {
        className: `${K.toggleOption} ${t === "value 3" ? K.selected : ""}`,
        onClick: () => n("value 3", 2),
        children: "Value 3"
      }
    )
  ] });
}, Qr = "Tag-module__tag___AZjUl", tn = {
  tag: Qr,
  "tag-big": "Tag-module__tag-big___-Ddhg",
  "tag-small": "Tag-module__tag-small___uygaA"
}, So = ({ children: t, bgColor: e = "#eee", size: o = "" }) => {
  const a = ie(tn.tag, {
    [tn[`tag-${o}`]]: o
  });
  return /* @__PURE__ */ u("p", { className: a, style: { background: e }, children: t });
}, Yr = "CheckboxBtn-module__container___63Szq", Zr = "CheckboxBtn-module__checkbox___cNrS2", Jr = "CheckboxBtn-module__buttonCheckmark___pyVLr", ot = {
  container: Yr,
  checkbox: Zr,
  buttonCheckmark: Jr
}, To = (t) => /* @__PURE__ */ O("label", { className: ot.container, htmlFor: t.id, children: [
  /* @__PURE__ */ u("input", { type: "checkbox", ...t, className: ot.checkbox, id: t.id }),
  /* @__PURE__ */ u("span", { className: ot.buttonCheckmark, children: t.label })
] }), eo = "Rating-module__rating___-Zs3G", to = "Rating-module__ratingCount___kNIHK", no = "Rating-module__button___buQnR", ro = "Rating-module__buttonOn___FC3EW", oo = "Rating-module__buttonOff___87I2G", io = "Rating-module__buttonBig___UTemz", J = {
  rating: eo,
  ratingCount: to,
  button: no,
  buttonOn: ro,
  buttonOff: oo,
  buttonBig: io
}, ko = ({
  fontSize: t = 1,
  rating: e = 0,
  setRating: o,
  hover: a,
  setHover: n,
  isClickable: r = !1,
  isShowRatingCount: c = !0
}) => /* @__PURE__ */ O("div", { className: J.rating, children: [
  c && /* @__PURE__ */ u("strong", { className: J.ratingCount, style: { fontSize: t + "rem" } }),
  [...Array(5)].map((i, s) => (s += 1, /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      style: { fontSize: t + "rem" },
      className: `${J.button} ${s <= (a || e) ? J.buttonOn : J.buttonOff}`,
      onClick: r ? () => o(s) : void 0,
      onMouseEnter: r ? () => n(s) : void 0,
      onMouseLeave: r ? () => n(e) : void 0,
      children: /* @__PURE__ */ u("span", { className: J.star, children: "★" })
    },
    s
  )))
] }), ao = "InputSearchMobile-module__search___EyYLo", so = "InputSearchMobile-module__searchWrapper___8-AVv", co = "InputSearchMobile-module__searchWrapperIcon___R6cD6", it = {
  search: ao,
  searchWrapper: so,
  searchWrapperIcon: co
}, jo = ({ value: t = "", onChange: e, placeholder: o = "", ...a }) => /* @__PURE__ */ u("div", { className: it.search, children: /* @__PURE__ */ O("div", { className: it.searchWrapper, children: [
  /* @__PURE__ */ u(
    on,
    {
      type: "text",
      label: "",
      state: "",
      borderRadius: !0,
      value: t,
      onChange: e,
      placeholder: o,
      ...a
    }
  ),
  /* @__PURE__ */ u("div", { className: it.searchWrapperIcon, children: /* @__PURE__ */ u(an, {}) })
] }) }), uo = "CategoryDropDownMobile-module__categories___G6mvb", lo = "CategoryDropDownMobile-module__categoriesLink___FnVD4", fo = "CategoryDropDownMobile-module__categoriesList___tbqn1", _o = "CategoryDropDownMobile-module__categoriesListMainLink___zETZ0", ho = "CategoryDropDownMobile-module__categoriesListContainer___DUTbX", po = "CategoryDropDownMobile-module__categoriesChildrenList___qV-Jy", mo = "CategoryDropDownMobile-module__categoriesChildrenListItem___wQlfc", k = {
  categories: uo,
  categoriesLink: lo,
  categoriesList: fo,
  categoriesListMainLink: _o,
  categoriesListContainer: ho,
  categoriesChildrenList: po,
  categoriesChildrenListItem: mo
}, Do = () => {
  const [t, e] = re(!1);
  return /* @__PURE__ */ u("div", { className: k.categories, children: /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u("div", { className: k.categoriesList, children: /* @__PURE__ */ O("div", { className: k.categoriesListContainer, children: [
    /* @__PURE__ */ O("div", { children: [
      /* @__PURE__ */ O("button", { className: k.categoriesListMainLink, children: [
        /* @__PURE__ */ u(gt, {}),
        /* @__PURE__ */ u("p", { children: "Main Category" })
      ] }),
      t && /* @__PURE__ */ O("ul", { className: k.categoriesChildrenList, children: [
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category" }) }),
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category_2" }) }),
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category_3" }) })
      ] })
    ] }),
    /* @__PURE__ */ O("div", { children: [
      /* @__PURE__ */ O("button", { className: k.categoriesListMainLink, children: [
        /* @__PURE__ */ u(gt, {}),
        /* @__PURE__ */ u("p", { children: "Main Category" })
      ] }),
      t && /* @__PURE__ */ O("ul", { className: k.categoriesChildrenList, children: [
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category" }) }),
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category_2" }) }),
        /* @__PURE__ */ u("li", { className: k.categoriesChildrenListItem, children: /* @__PURE__ */ u(q, { prefetch: !1, href: "/", className: k.categoriesLink, children: "sub_menu_category_3" }) })
      ] })
    ] })
  ] }) }) }) });
};
export {
  Ro as Button,
  No as ButtonIcon,
  Co as ButtonSocialNetwork,
  Do as CategoryDropDownMobile,
  Po as Checkbox,
  To as CheckboxBtn,
  on as Input,
  Oo as InputSearch,
  jo as InputSearchMobile,
  Lo as Radio,
  ko as Rating,
  Io as Select,
  Eo as SelectRange,
  So as Tag,
  Mo as ToggleSwitch
};
