!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self).Email=t(e.React)}(this,function(t){"use strict";var r="default"in t?t.default:t;function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=[9,17,18,35,36,37,38,39,40,45],e=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}(this,i(n).call(this,e))).state={value:"",suggestion:"",valid:!0},t.handleChange=t.handleChange.bind(s(t)),t.getSuggest=t.getSuggest.bind(s(t)),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,t.Component),function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(n,[{key:"replaceLast",value:function(e,t,n){var o=e.split(t),r=o.pop();return o.join(t)+n+r}},{key:"handleChange",value:function(e){var t=this,n=e.target.value,o=this.props.onChange,r=this.suggest(n);void 0===r||r.length<1?this.setState({value:n,suggestion:r},function(){return t.selectText()}):this.setState({value:"".concat(n).concat(r),suggestion:r},function(){return t.selectText()}),o&&o(e)}},{key:"selectText",value:function(){var e=this.state,t=e.suggestion,n=e.value;if(void 0!==t&&0<t.length){var o=n.lastIndexOf(t),r=o+t.length;this.textHandler.setSelectionRange(o,r)}}},{key:"getSuggest",value:function(e){if(!(0<=l.indexOf(e.keyCode))){var t=this.state.suggestion,n=e.target.value;8===e.keyCode&&this.setState({value:this.replaceLast(n,t,"")})}}},{key:"suggest",value:function(t){var e=t.split("@");if(e.length-1!=0)return t=e.pop(),(this.props.domains.filter(function(e){return 0===e.indexOf(t)}).shift()||"").replace(t,"")}},{key:"componentDidMount",value:function(){var e=this.props,t=e.domains,n=e.value;"string"==typeof t&&(console.error("domains props should be array not string!"),this.setState({valid:!1})),this.setState({value:n})}},{key:"render",value:function(){var t=this,e=this.props,n=this.state,o=n.value;return n.valid?r.createElement("div",{className:"rea-wrapper"},r.createElement("input",a({},e,{autoCapitalize:"none",type:"text",inputMode:"email",value:o,onChange:this.handleChange,onKeyUp:this.getSuggest,ref:function(e){t.textHandler=e}}))):"Unable to render component! Please, Check out developer tools of your browser."}}]),n}();return e.defaultProps={domains:["yahoo.com","hotmail.com","gmail.com","me.com","aol.com","mac.com","live.com","googlemail.com","msn.com","facebook.com","verizon.net","outlook.com","icloud.com","rediffmail.com","zohomail.in","zoho.com","mail.com","protonmail.com","yandex.com"]},e});
