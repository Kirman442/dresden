import{d as e}from"./calcite-input-time-picker-ZvKBhzts.js";import"./index-etWHd6DB.js";import"./form-GCREQyFK.js";import"./guid-6vN-YNJI.js";import"./interactive--JAR9EVP.js";import"./key-qdHumIlA.js";import"./label2-Dhek1xdb.js";import"./loadable-D0wdeDtL.js";import"./t9n-J8GWkH9z.js";import"./observers-0HsK5uWG.js";import"./focusTrapComponent-WcHb56Tm.js";import"./component-dtiBfYiX.js";import"./icon-kNCI3zdG.js";import"./openCloseComponent-y0UwZD3k.js";import"./action-x1ctONq5.js";import"./loader-va_1EmJ_.js";import"./input-text-iUlEGb9v.js";import"./progress-dCzkeBSm.js";import"./popover-2zIrP013.js";import"./floating-ui-ExfRhj2A.js";import"./debounce-HnHf1UOZ.js";import"./FloatingArrow-Bms5nvDc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */var o="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),i={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},p={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},_={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:o,monthsShort:o,weekStart:6,meridiem:function(r){return r>12?"م":"ص"},relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(r){return r.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(m){return p[m]}).replace(/،/g,",")},postformat:function(r){return r.replace(/\d/g,function(m){return i[m]}).replace(/,/g,"،")},ordinal:function(r){return r},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};e.locale(_,null,!0);export{_ as default};