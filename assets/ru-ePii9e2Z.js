import{d as M}from"./calcite-input-time-picker-mhB3cDWh.js";import"./index-9slH3TG2.js";import"./form-H3tc7hYw.js";import"./guid-6vN-YNJI.js";import"./interactive-cs2-t5GE.js";import"./key-qdHumIlA.js";import"./label2-rqVAWTTU.js";import"./loadable-ikuVqpDA.js";import"./t9n-WN6OvQZz.js";import"./observers-z5y2bJc9.js";import"./focusTrapComponent-suZxYiYz.js";import"./component-dtiBfYiX.js";import"./icon-VVU-_m1r.js";import"./openCloseComponent-etmqV_TH.js";import"./action-MllWyAe0.js";import"./loader-7K3P1ua7.js";import"./input-text-S63O7eF_.js";import"./progress-SEzIeGkh.js";import"./popover-Y7tLAs4q.js";import"./floating-ui-ZFhtwb9J.js";import"./debounce-HnHf1UOZ.js";import"./FloatingArrow-25S_VvQ7.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */var e="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),p="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function h(r,t){var _=r.split("_");return t%10===1&&t%100!==11?_[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?_[1]:_[2]}function o(r,t,_){var l={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return _==="m"?t?"минута":"минуту":r+" "+h(l[_],+r)}var m=function(t,_){return s.test(_)?e[t.month()]:n[t.month()]};m.s=n;m.f=e;var i=function(t,_){return s.test(_)?a[t.month()]:p[t.month()]};i.s=p;i.f=a;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};M.locale(d,null,!0);export{d as default};