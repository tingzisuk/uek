/*
* @Author: DELL
* @Date:   2017-04-01 10:54:40
* @Last Modified by:   DELL
* @Last Modified time: 2017-04-01 18:05:47
*/

'use strict';

window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}