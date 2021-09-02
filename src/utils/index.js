
import $ from 'jquery'
function UnixToDate(a, c, b) {
	"number" == typeof b && (a = parseInt(a) + 3600 * parseInt(b));
	a = new Date(1E3 * a);
	b = "" + (a.getUTCFullYear() + "-");
	b += a.getUTCMonth() + 1 + "-";
	b += a.getUTCDate(); !0 === c && (b += " " + a.getUTCHours() + ":", b += a.getUTCMinutes() + ":", b += a.getUTCSeconds());
	return b
}
function getSuffix(a) {
	return a.substring(a.lastIndexOf(".") + 1).replace(/\s*/g, "").replace("{/dede:link}", "")
}
function phsregxgf(a) {
	for (var c in a) a[c].pubdate = UnixToDate(a[c].pubdate, "Y-m-d"),
		a[c].softlinks && (a[c].softlinks = a[c].softlinks.replace(RegExp(/(\{(.*?)\})/, "g"), ""), a[c].expname = a[c].softlinks.substring(a[c].softlinks.lastIndexOf(".") + 1), a[c].fillname = a[c].title.replace(/\s+/g, ""));
	return a
}
// 文件下载
function downloand(url, file, name) {
	// 提取文件名
	let str = file.replace(/\s*/g, "")
	const fileName = name.replace(/\s*/g, "") + '.' + str.substring(str.lastIndexOf('.') + 1)
	// 创建iframe
	let iframe = document.createElement('iframe')
	iframe.style.display = "none"
	const dom = `
			<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title></title>
		</head>
		<body>
		<a id="download" href="${url}" download="${fileName}"></a>
		<script>let a = document.querySelector('#download');a.click();</script>
		</body>
		</html>`
	iframe.srcdoc = dom
	document.body.appendChild(iframe)
	// 5s后删除iframe
	setTimeout(() => {
		//把iframe指向空白页面，这样可以释放大部分内存。 
		iframe.src = 'about:blank';
		iframe.srcdoc = ''
		//把iframe从页面移除
		$(iframe).remove()
	}, 1000)
}
function getUrlParam(a) {
	a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
	a = window.location.search.substr(1).match(a);
	return null != a ? unescape(a[2]) : null
}
function getQueryString(a) {
	a = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i");
	a = window.location.search.substr(1).match(a);
	return null != a ? unescape(a[2]) : null
}
// 获取当前年月日
function getDate() {
	const time = new Date;
	const array = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
	return time.getFullYear() + "年" + time.getMonth() + "月" + time.getDate() + "日" + array[time.getDay()];
}
function CustomScrollBar(a) {
	return 0 == a ? {
		cursorcolor: "#54669b",
		cursoropacitymin: 0,
		cursoropacitymax: 1,
		cursorwidth: "8px",
		cursorborder: "none",
		cursorborderradius: "5px",
		zindex: "auto",
		scrollspeed: 60,
		mousescrollstep: 40,
		touchbehavior: !1,
		hwacceleration: !0,
		boxzoom: !1,
		dblclickzoom: !0,
		gesturezoom: !0,
		grabcursorenabled: !0,
		autohidemode: !1,
		background: "#102153",
		iframeautoresize: !0,
		cursorminheight: 32,
		preservenativescrolling: !0,
		railoffset: !1,
		bouncescroll: !1,
		spacebarenabled: !0,
		railpadding: {
			top: 0,
			right: 0,
			left: 0,
			bottom: 0
		},
		disableoutline: !0,
		horizrailenabled: !1,
		railalign: "right",
		railvalign: "bottom",
		enabletranslate3d: !0,
		enablemousewheel: !0,
		enablekeyboard: !0,
		smoothscroll: !0,
		sensitiverail: !0,
		enablemouselockapi: !0,
		cursorfixedheight: !1,
		hidecursordelay: 400,
		directionlockdeadzone: 6,
		nativeparentscrolling: !0,
		enablescrollonselection: !0,
		cursordragspeed: .3,
		rtlmode: "auto",
		cursordragontouch: !1,
		oneaxismousemode: "auto",
		scriptpath: "",
		preventmultitouchscrolling: !0
	} : {
		cursorcolor: "#54669b",
		cursoropacitymin: 0,
		cursoropacitymax: 1,
		cursorwidth: "8px",
		cursorborder: "none",
		cursorborderradius: "5px",
		zindex: "auto",
		scrollspeed: 60,
		mousescrollstep: 40,
		touchbehavior: !1,
		hwacceleration: !0,
		boxzoom: !1,
		dblclickzoom: !0,
		gesturezoom: !0,
		grabcursorenabled: !0,
		autohidemode: !1,
		background: "#102153",
		iframeautoresize: !0,
		cursorminheight: 32,
		preservenativescrolling: !0,
		railoffset: !1,
		bouncescroll: !1,
		spacebarenabled: !0,
		railpadding: {
			top: 0,
			right: 0,
			left: 0,
			bottom: 0
		},
		disableoutline: !0,
		horizrailenabled: !0,
		railalign: "right",
		railvalign: "bottom",
		enabletranslate3d: !0,
		enablemousewheel: !0,
		enablekeyboard: !0,
		smoothscroll: !0,
		sensitiverail: !0,
		enablemouselockapi: !0,
		cursorfixedheight: !1,
		hidecursordelay: 400,
		directionlockdeadzone: 6,
		nativeparentscrolling: !0,
		enablescrollonselection: !0,
		cursordragspeed: .3,
		rtlmode: "auto",
		cursordragontouch: !1,
		oneaxismousemode: "auto",
		scriptpath: "",
		preventmultitouchscrolling: !0
	}
}
function unique(a) {
	return Array.from(new Set(a))
}
function ERdata(a, echarts) {
	return a.forEach(function (a) {
		echarts.init(document.getElementById(a.id)).setOption(a.data, !0)
	})
}
function formatDate() {
	var date = new Date(date);
	var YY = date.getFullYear() + '-';
	var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
	var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	// +" "+hh + mm + ss;
	return YY + MM + DD
}
export {
	UnixToDate, getSuffix, phsregxgf, getUrlParam, getQueryString, getDate,
	CustomScrollBar, unique, ERdata, formatDate,downloand
}