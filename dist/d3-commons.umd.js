!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self)["d3-commons"]={})}(this,(function(t){"use strict";var n={value:()=>{}};function e(){for(var t,n=0,e=arguments.length,i={};n<e;++n){if(!(t=arguments[n]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new r(i)}function r(t){this._=t}function i(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function o(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function u(t,e,r){for(var i=0,o=t.length;i<o;++i)if(t[i].name===e){t[i]=n,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=r&&t.push({name:e,value:r}),t}r.prototype=e.prototype={constructor:r,on:function(t,n){var e,r=this._,a=i(t+"",r),s=-1,l=a.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++s<l;)if(e=(t=a[s]).type)r[e]=u(r[e],t.name,n);else if(null==n)for(e in r)r[e]=u(r[e],t.name,null);return this}for(;++s<l;)if((e=(t=a[s]).type)&&(e=o(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new r(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var a="http://www.w3.org/1999/xhtml",s={svg:"http://www.w3.org/2000/svg",xhtml:a,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function l(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),s.hasOwnProperty(n)?{space:s[n],local:t}:t}function c(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===a&&n.documentElement.namespaceURI===a?n.createElement(t):n.createElementNS(e,t)}}function h(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function f(t){var n=l(t);return(n.local?h:c)(n)}function p(){}function d(t){return null==t?p:function(){return this.querySelector(t)}}function y(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function _(){return[]}function v(t){return null==t?_:function(){return this.querySelectorAll(t)}}function g(t){return function(){return this.matches(t)}}function m(t){return function(n){return n.matches(t)}}var w=Array.prototype.find;function b(){return this.firstElementChild}var x=Array.prototype.filter;function A(){return Array.from(this.children)}function N(t){return new Array(t.length)}function k(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function $(t){return function(){return t}}function E(t,n,e,r,i,o){for(var u,a=0,s=n.length,l=o.length;a<l;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new k(t,o[a]);for(;a<s;++a)(u=n[a])&&(i[a]=u)}function M(t,n,e,r,i,o,u){var a,s,l,c=new Map,h=n.length,f=o.length,p=new Array(h);for(a=0;a<h;++a)(s=n[a])&&(p[a]=l=u.call(s,s.__data__,a,n)+"",c.has(l)?i[a]=s:c.set(l,s));for(a=0;a<f;++a)l=u.call(t,o[a],a,o)+"",(s=c.get(l))?(r[a]=s,s.__data__=o[a],c.delete(l)):e[a]=new k(t,o[a]);for(a=0;a<h;++a)(s=n[a])&&c.get(p[a])===s&&(i[a]=s)}function S(t){return t.__data__}function C(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function q(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function P(t){return function(){this.removeAttribute(t)}}function O(t){return function(){this.removeAttributeNS(t.space,t.local)}}function T(t,n){return function(){this.setAttribute(t,n)}}function X(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function R(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function j(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function H(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function I(t){return function(){this.style.removeProperty(t)}}function L(t,n,e){return function(){this.style.setProperty(t,n,e)}}function D(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function B(t,n){return t.style.getPropertyValue(n)||H(t).getComputedStyle(t,null).getPropertyValue(n)}function Y(t){return function(){delete this[t]}}function V(t,n){return function(){this[t]=n}}function z(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function U(t){return t.trim().split(/^|\s+/)}function F(t){return t.classList||new K(t)}function K(t){this._node=t,this._names=U(t.getAttribute("class")||"")}function W(t,n){for(var e=F(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function G(t,n){for(var e=F(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function J(t){return function(){W(this,t)}}function Q(t){return function(){G(this,t)}}function Z(t,n){return function(){(n.apply(this,arguments)?W:G)(this,t)}}function tt(){this.textContent=""}function nt(t){return function(){this.textContent=t}}function et(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function rt(){this.innerHTML=""}function it(t){return function(){this.innerHTML=t}}function ot(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function ut(){this.nextSibling&&this.parentNode.appendChild(this)}function at(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function st(){return null}function lt(){var t=this.parentNode;t&&t.removeChild(this)}function ct(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ht(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ft(t){return t.trim().split(/^|\s+/).map((function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}))}function pt(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function dt(t,n,e){return function(){var r,i=this.__on,o=function(t){return function(n){t.call(this,n,this.__data__)}}(n);if(i)for(var u=0,a=i.length;u<a;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),void(r.value=n);this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function yt(t,n,e){var r=H(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function _t(t,n){return function(){return yt(this,t,n)}}function vt(t,n){return function(){return yt(this,t,n.apply(this,arguments))}}k.prototype={constructor:k,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},K.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var gt=[null];function mt(t,n){this._groups=t,this._parents=n}function wt(){return new mt([[document.documentElement]],gt)}function bt(t){return"string"==typeof t?new mt([[document.querySelector(t)]],[document.documentElement]):new mt([[t]],gt)}function xt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function At(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Nt(){}mt.prototype=wt.prototype={constructor:mt,select:function(t){"function"!=typeof t&&(t=d(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],s=a.length,l=r[i]=new Array(s),c=0;c<s;++c)(o=a[c])&&(u=t.call(o,o.__data__,c,a))&&("__data__"in o&&(u.__data__=o.__data__),l[c]=u);return new mt(r,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){return y(t.apply(this,arguments))}}(t):v(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],s=a.length,l=0;l<s;++l)(u=a[l])&&(r.push(t.call(u,u.__data__,l,a)),i.push(u));return new mt(r,i)},selectChild:function(t){return this.select(null==t?b:function(t){return function(){return w.call(this.children,t)}}("function"==typeof t?t:m(t)))},selectChildren:function(t){return this.selectAll(null==t?A:function(t){return function(){return x.call(this.children,t)}}("function"==typeof t?t:m(t)))},filter:function(t){"function"!=typeof t&&(t=g(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,s=r[i]=[],l=0;l<a;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&s.push(o);return new mt(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,S);var e=n?M:E,r=this._parents,i=this._groups;"function"!=typeof t&&(t=$(t));for(var o=i.length,u=new Array(o),a=new Array(o),s=new Array(o),l=0;l<o;++l){var c=r[l],h=i[l],f=h.length,p=C(t.call(c,c&&c.__data__,l,r)),d=p.length,y=a[l]=new Array(d),_=u[l]=new Array(d),v=s[l]=new Array(f);e(c,h,y,_,v,p,n);for(var g,m,w=0,b=0;w<d;++w)if(g=y[w]){for(w>=b&&(b=w+1);!(m=_[b])&&++b<d;);g._next=m||null}}return(u=new mt(u,r))._enter=a,u._exit=s,u},enter:function(){return new mt(this._enter||this._groups.map(N),this._parents)},exit:function(){return new mt(this._exit||this._groups.map(N),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,u=Math.min(i,o),a=new Array(i),s=0;s<u;++s)for(var l,c=e[s],h=r[s],f=c.length,p=a[s]=new Array(f),d=0;d<f;++d)(l=c[d]||h[d])&&(p[d]=l);for(;s<i;++s)a[s]=e[s];return new mt(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=q);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],s=a.length,l=i[o]=new Array(s),c=0;c<s;++c)(u=a[c])&&(l[c]=u);l.sort(n)}return new mt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},size:function(){let t=0;for(const n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var e=l(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?O:P:"function"==typeof n?e.local?j:R:e.local?X:T)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?I:"function"==typeof n?D:L)(t,n,null==e?"":e)):B(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?Y:"function"==typeof n?z:V)(t,n)):this.node()[t]},classed:function(t,n){var e=U(t+"");if(arguments.length<2){for(var r=F(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?Z:n?J:Q)(e,n))},text:function(t){return arguments.length?this.each(null==t?tt:("function"==typeof t?et:nt)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?rt:("function"==typeof t?ot:it)(t)):this.node().innerHTML},raise:function(){return this.each(ut)},lower:function(){return this.each(at)},append:function(t){var n="function"==typeof t?t:f(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var e="function"==typeof t?t:f(t),r=null==n?st:"function"==typeof n?n:d(n);return this.select((function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(lt)},clone:function(t){return this.select(t?ht:ct)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=ft(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?dt:pt,r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var s,l=0,c=a.length;l<c;++l)for(r=0,s=a[l];r<u;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,n){return this.each(("function"==typeof n?vt:_t)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}};var kt=.7,$t=1/kt,Et="\\s*([+-]?\\d+)\\s*",Mt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",St="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ct=/^#([0-9a-f]{3,8})$/,qt=new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`),Pt=new RegExp(`^rgb\\(${St},${St},${St}\\)$`),Ot=new RegExp(`^rgba\\(${Et},${Et},${Et},${Mt}\\)$`),Tt=new RegExp(`^rgba\\(${St},${St},${St},${Mt}\\)$`),Xt=new RegExp(`^hsl\\(${Mt},${St},${St}\\)$`),Rt=new RegExp(`^hsla\\(${Mt},${St},${St},${Mt}\\)$`),jt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Ht(){return this.rgb().formatHex()}function It(){return this.rgb().formatRgb()}function Lt(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=Ct.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?Dt(n):3===e?new zt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?Bt(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?Bt(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=qt.exec(t))?new zt(n[1],n[2],n[3],1):(n=Pt.exec(t))?new zt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Ot.exec(t))?Bt(n[1],n[2],n[3],n[4]):(n=Tt.exec(t))?Bt(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Xt.exec(t))?Jt(n[1],n[2]/100,n[3]/100,1):(n=Rt.exec(t))?Jt(n[1],n[2]/100,n[3]/100,n[4]):jt.hasOwnProperty(t)?Dt(jt[t]):"transparent"===t?new zt(NaN,NaN,NaN,0):null}function Dt(t){return new zt(t>>16&255,t>>8&255,255&t,1)}function Bt(t,n,e,r){return r<=0&&(t=n=e=NaN),new zt(t,n,e,r)}function Yt(t){return t instanceof Nt||(t=Lt(t)),t?new zt((t=t.rgb()).r,t.g,t.b,t.opacity):new zt}function Vt(t,n,e,r){return 1===arguments.length?Yt(t):new zt(t,n,e,null==r?1:r)}function zt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Ut(){return`#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}`}function Ft(){const t=Kt(this.opacity);return`${1===t?"rgb(":"rgba("}${Wt(this.r)}, ${Wt(this.g)}, ${Wt(this.b)}${1===t?")":`, ${t})`}`}function Kt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Wt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Gt(t){return((t=Wt(t))<16?"0":"")+t.toString(16)}function Jt(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Zt(t,n,e,r)}function Qt(t){if(t instanceof Zt)return new Zt(t.h,t.s,t.l,t.opacity);if(t instanceof Nt||(t=Lt(t)),!t)return new Zt;if(t instanceof Zt)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,s=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=s<.5?o+i:2-o-i,u*=60):a=s>0&&s<1?0:u,new Zt(u,a,s,t.opacity)}function Zt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function tn(t){return(t=(t||0)%360)<0?t+360:t}function nn(t){return Math.max(0,Math.min(1,t||0))}function en(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}xt(Nt,Lt,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Ht,formatHex:Ht,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Qt(this).formatHsl()},formatRgb:It,toString:It}),xt(zt,Vt,At(Nt,{brighter(t){return t=null==t?$t:Math.pow($t,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?kt:Math.pow(kt,t),new zt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new zt(Wt(this.r),Wt(this.g),Wt(this.b),Kt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ut,formatHex:Ut,formatHex8:function(){return`#${Gt(this.r)}${Gt(this.g)}${Gt(this.b)}${Gt(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Ft,toString:Ft})),xt(Zt,(function(t,n,e,r){return 1===arguments.length?Qt(t):new Zt(t,n,e,null==r?1:r)}),At(Nt,{brighter(t){return t=null==t?$t:Math.pow($t,t),new Zt(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?kt:Math.pow(kt,t),new Zt(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new zt(en(t>=240?t-240:t+120,i,r),en(t,i,r),en(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new Zt(tn(this.h),nn(this.s),nn(this.l),Kt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Kt(this.opacity);return`${1===t?"hsl(":"hsla("}${tn(this.h)}, ${100*nn(this.s)}%, ${100*nn(this.l)}%${1===t?")":`, ${t})`}`}}));var rn=t=>()=>t;function on(t){return 1==(t=+t)?un:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):rn(isNaN(n)?e:n)}}function un(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):rn(isNaN(t)?n:t)}var an=function t(n){var e=on(n);function r(t,n){var r=e((t=Vt(t)).r,(n=Vt(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),u=un(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}return r.gamma=t,r}(1);function sn(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var ln=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,cn=new RegExp(ln.source,"g");function hn(t,n){var e,r,i,o=ln.lastIndex=cn.lastIndex=0,u=-1,a=[],s=[];for(t+="",n+="";(e=ln.exec(t))&&(r=cn.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,s.push({i:u,x:sn(e,r)})),o=cn.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?s[0]?function(t){return function(n){return t(n)+""}}(s[0].x):function(t){return function(){return t}}(n):(n=s.length,function(t){for(var e,r=0;r<n;++r)a[(e=s[r]).i]=e.x(t);return a.join("")})}var fn,pn=180/Math.PI,dn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function yn(t,n,e,r,i,o){var u,a,s;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,s/=a),t*r<n*e&&(t=-t,n=-n,s=-s,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*pn,skewX:Math.atan(s)*pn,scaleX:u,scaleY:a}}function _n(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,u){var a=[],s=[];return o=t(o),u=t(u),function(t,r,i,o,u,a){if(t!==i||r!==o){var s=u.push("translate(",null,n,null,e);a.push({i:s-4,x:sn(t,i)},{i:s-2,x:sn(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}(o.translateX,o.translateY,u.translateX,u.translateY,a,s),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:sn(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,u.rotate,a,s),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:sn(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,u.skewX,a,s),function(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:sn(t,e)},{i:a-2,x:sn(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,a,s),o=u=null,function(t){for(var n,e=-1,r=s.length;++e<r;)a[(n=s[e]).i]=n.x(t);return a.join("")}}}var vn,gn,mn=_n((function(t){const n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?dn:yn(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),wn=_n((function(t){return null==t?dn:(fn||(fn=document.createElementNS("http://www.w3.org/2000/svg","g")),fn.setAttribute("transform",t),(t=fn.transform.baseVal.consolidate())?yn((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):dn)}),", ",")",")"),bn=0,xn=0,An=0,Nn=0,kn=0,$n=0,En="object"==typeof performance&&performance.now?performance:Date,Mn="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Sn(){return kn||(Mn(Cn),kn=En.now()+$n)}function Cn(){kn=0}function qn(){this._call=this._time=this._next=null}function Pn(t,n,e){var r=new qn;return r.restart(t,n,e),r}function On(){kn=(Nn=En.now())+$n,bn=xn=0;try{!function(){Sn(),++bn;for(var t,n=vn;n;)(t=kn-n._time)>=0&&n._call.call(void 0,t),n=n._next;--bn}()}finally{bn=0,function(){var t,n,e=vn,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:vn=n);gn=t,Xn(r)}(),kn=0}}function Tn(){var t=En.now(),n=t-Nn;n>1e3&&($n-=n,Nn=t)}function Xn(t){bn||(xn&&(xn=clearTimeout(xn)),t-kn>24?(t<1/0&&(xn=setTimeout(On,t-En.now()-$n)),An&&(An=clearInterval(An))):(An||(Nn=En.now(),An=setInterval(Tn,1e3)),bn=1,Mn(On)))}function Rn(t,n,e){var r=new qn;return n=null==n?0:+n,r.restart((e=>{r.stop(),t(e+n)}),n,e),r}qn.prototype=Pn.prototype={constructor:qn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?Sn():+e)+(null==n?0:+n),this._next||gn===this||(gn?gn._next=this:vn=this,gn=this),this._call=t,this._time=e,Xn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Xn())}};var jn=e("start","end","cancel","interrupt"),Hn=[];function In(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(t){e.state=1,e.timer.restart(u,e.delay,e.time),e.delay<=t&&u(t-e.delay)}function u(o){var l,c,h,f;if(1!==e.state)return s();for(l in i)if((f=i[l]).name===e.name){if(3===f.state)return Rn(u);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[l]):+l<n&&(f.state=6,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[l])}if(Rn((function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(o))})),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(e.state=3,r=new Array(h=e.tween.length),l=0,c=-1;l<h;++l)(f=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++c]=f);r.length=c+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(s),e.state=5,1),o=-1,u=r.length;++o<u;)r[o].call(t,i);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),s())}function s(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=Pn(o,0,e.time)}(t,e,{name:n,index:r,group:i,on:jn,tween:Hn,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function Ln(t,n){var e=Bn(t,n);if(e.state>0)throw new Error("too late; already scheduled");return e}function Dn(t,n){var e=Bn(t,n);if(e.state>3)throw new Error("too late; already running");return e}function Bn(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Yn(t,n){var e,r;return function(){var i=Dn(this,t),o=i.tween;if(o!==e)for(var u=0,a=(r=e=o).length;u<a;++u)if(r[u].name===n){(r=r.slice()).splice(u,1);break}i.tween=r}}function Vn(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Dn(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=a;break}s===l&&i.push(a)}o.tween=i}}function zn(t,n,e){var r=t._id;return t.each((function(){var t=Dn(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)})),function(t){return Bn(t,r).value[n]}}function Un(t,n){var e;return("number"==typeof n?sn:n instanceof Lt?an:(e=Lt(n))?(n=e,an):hn)(t,n)}function Fn(t){return function(){this.removeAttribute(t)}}function Kn(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Wn(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttribute(t);return u===o?null:u===r?i:i=n(r=u,e)}}function Gn(t,n,e){var r,i,o=e+"";return function(){var u=this.getAttributeNS(t.space,t.local);return u===o?null:u===r?i:i=n(r=u,e)}}function Jn(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttribute(t))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttribute(t)}}function Qn(t,n,e){var r,i,o;return function(){var u,a,s=e(this);if(null!=s)return(u=this.getAttributeNS(t.space,t.local))===(a=s+"")?null:u===r&&a===i?o:(i=a,o=n(r=u,s));this.removeAttributeNS(t.space,t.local)}}function Zn(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function te(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function ne(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&te(t,i)),e}return i._value=n,i}function ee(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&Zn(t,i)),e}return i._value=n,i}function re(t,n){return function(){Ln(this,t).delay=+n.apply(this,arguments)}}function ie(t,n){return n=+n,function(){Ln(this,t).delay=n}}function oe(t,n){return function(){Dn(this,t).duration=+n.apply(this,arguments)}}function ue(t,n){return n=+n,function(){Dn(this,t).duration=n}}function ae(t,n){if("function"!=typeof n)throw new Error;return function(){Dn(this,t).ease=n}}function se(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?Ln:Dn;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}var le=wt.prototype.constructor;function ce(t){return function(){this.style.removeProperty(t)}}function he(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function fe(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&he(t,o,e)),r}return o._value=n,o}function pe(t){return function(n){this.textContent=t.call(this,n)}}function de(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&pe(r)),n}return r._value=t,r}var ye=0;function _e(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ve(t){return wt().transition(t)}function ge(){return++ye}var me=wt.prototype;_e.prototype=ve.prototype={constructor:_e,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=d(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,s,l=r[u],c=l.length,h=o[u]=new Array(c),f=0;f<c;++f)(a=l[f])&&(s=t.call(a,a.__data__,f,l))&&("__data__"in a&&(s.__data__=a.__data__),h[f]=s,In(h[f],n,e,f,h,Bn(a,e)));return new _e(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=v(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var s,l=r[a],c=l.length,h=0;h<c;++h)if(s=l[h]){for(var f,p=t.call(s,s.__data__,h,l),d=Bn(s,e),y=0,_=p.length;y<_;++y)(f=p[y])&&In(f,n,e,y,p,d);o.push(p),u.push(s)}return new _e(o,u,n,e)},selectChild:me.selectChild,selectChildren:me.selectChildren,filter:function(t){"function"!=typeof t&&(t=g(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,s=r[i]=[],l=0;l<a;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&s.push(o);return new _e(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var s,l=n[a],c=e[a],h=l.length,f=u[a]=new Array(h),p=0;p<h;++p)(s=l[p]||c[p])&&(f[p]=s);for(;a<r;++a)u[a]=n[a];return new _e(u,this._parents,this._name,this._id)},selection:function(){return new le(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=ge(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)if(u=a[l]){var c=Bn(u,n);In(u,t,e,l,a,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new _e(r,this._parents,t,e)},call:me.call,nodes:me.nodes,node:me.node,size:me.size,empty:me.empty,each:me.each,on:function(t,n){var e=this._id;return arguments.length<2?Bn(this.node(),e).on.on(t):this.each(se(e,t,n))},attr:function(t,n){var e=l(t),r="transform"===e?wn:Un;return this.attrTween(t,"function"==typeof n?(e.local?Qn:Jn)(e,r,zn(this,"attr."+t,n)):null==n?(e.local?Kn:Fn)(e):(e.local?Gn:Wn)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=l(t);return this.tween(e,(r.local?ne:ee)(r,n))},style:function(t,n,e){var r="transform"==(t+="")?mn:Un;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=B(this,t),u=(this.style.removeProperty(t),B(this,t));return o===u?null:o===e&&u===r?i:i=n(e=o,r=u)}}(t,r)).on("end.style."+t,ce(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var u=B(this,t),a=e(this),s=a+"";return null==a&&(this.style.removeProperty(t),s=a=B(this,t)),u===s?null:u===r&&s===i?o:(i=s,o=n(r=u,a))}}(t,r,zn(this,"style."+t,n))).each(function(t,n){var e,r,i,o,u="style."+n,a="end."+u;return function(){var s=Dn(this,t),l=s.on,c=null==s.value[u]?o||(o=ce(n)):void 0;l===e&&i===c||(r=(e=l).copy()).on(a,i=c),s.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var u=B(this,t);return u===o?null:u===r?i:i=n(r=u,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,fe(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(zn(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,de(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Bn(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Yn:Vn)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?re:ie)(n,t)):Bn(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?oe:ue)(n,t)):Bn(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(ae(n,t)):Bn(this.node(),n).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,n){return function(){var e=n.apply(this,arguments);if("function"!=typeof e)throw new Error;Dn(this,t).ease=e}}(this._id,t))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise((function(o,u){var a={value:u},s={value:function(){0==--i&&o()}};e.each((function(){var e=Dn(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(s)),e.on=n})),0===i&&o()}))},[Symbol.iterator]:me[Symbol.iterator]};var we={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function be(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}wt.prototype.interrupt=function(t){return this.each((function(){!function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}}(this,t)}))},wt.prototype.transition=function(t){var n,e;t instanceof _e?(n=t._id,t=t._name):(n=ge(),(e=we).time=Sn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],s=a.length,l=0;l<s;++l)(u=a[l])&&In(u,t,n,l,a,e||be(u,n));return new _e(r,this._parents,t,n)},t.textInterpolate=function(t,n){var e=bt(t),r=bt(n);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return ve().duration(n).style("opacity",t)}e.transition(i()),r.transition(i())},Object.defineProperty(t,"__esModule",{value:!0})}));
