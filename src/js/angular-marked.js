!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.angularMarked=e()}}(function(){return function e(n,r,t){function i(a,u){if(!r[a]){if(!n[a]){var d="function"==typeof require&&require;if(!u&&d)return d(a,!0);if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[a]={exports:{}};n[a][0].call(c.exports,function(e){var r=n[a][1][e];return i(r||e)},c,c.exports,e,n,r,t)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<t.length;a++)i(t[a]);return i}({1:[function(e,n,r){n.exports=function(e){if(!e)return e;var n,r=e.replace(/\t/g,"  ").split(/\r?\n/),t=null,i=r.length;for(n=0;n<i;n++){var o=r[n],a=o.match(/^(\s*)/)[0].length;a!==o.length&&(t=a<t||null===t?a:t)}if(null!==t&&t>0)for(n=0;n<i;n++)r[n]=r[n].substr(t);return r.join("\n")}},{}],2:[function(e,n,r){"use strict";function t(){var n=this;n.setRenderer=function(e){this.renderer=e},n.setOptions=function(e){this.defaults=e},n.$get=["$log","$window",function(r,t){function i(e){return"<span ng-non-bindable>"+e+"</span>"}var o;try{o=e("marked")}catch(e){o=t.marked||marked}if(angular.isUndefined(o))return void r.error("angular-marked Error: marked not loaded.  See installation instructions.");var a=new o.Renderer;if(n.renderer)for(var u=Object.keys(n.renderer),d=u.length;d--;)a[u[d]]=n.renderer[u[d]];var f=a.code.bind(a);a.code=function(e,n,r){return i(f(e,n,r))};var c=a.codespan.bind(a);return a.codespan=function(e){return i(c(e))},n.defaults=n.defaults||{},n.defaults.renderer=a,o.setOptions(n.defaults),o}]}function i(e,n,r){return{restrict:"AE",replace:!0,scope:{opts:"=",marked:"=",compile:"@",src:"="},link:function(t,i,a){function u(n){n=o(String(n||"")),i.html(e(n,t.opts||null)),t.$eval(a.compile)&&r(i.contents())(t.$parent)}a.marked?(u(t.marked),t.$watch("marked",u)):a.src?t.$watch("src",function(e){n(e,!0).then(function(e){u(e)},function(){u(""),t.$emit("$markedIncludeError",a.src)})}):u(i.text())}}}var o=e("./strip-indent");i.$inject=["marked","$templateRequest","$compile"],n.exports=angular.module("hc.marked",[]).directive("marked",i).provider("marked",t).name},{"./strip-indent":1,marked:"marked"}]},{},[2])(2)});