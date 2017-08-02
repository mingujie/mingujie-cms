var formartDate = function(value, lot, str) {
	 var date = new Date(value);
	 Y = date.getFullYear(),
	 m = date.getMonth() + 1,
	 d = date.getDate(),
	 H = date.getHours(),
	 i = date.getMinutes(),
	 s = date.getSeconds();
	 if (m < 10) {
	  m = '0' + m;
	 }
	 if (d < 10) {
	  d = '0' + d;
	 }
	 if (H < 10) {
	  H = '0' + H;
	 }
	 if (i < 10) {
	  i = '0' + i;
	 }
	 if (s < 10) {
	  s = '0' + s;
 }

 	if(str === 'set'){
 		var t = Y + lot + m + lot + d + ' '+ H + ':'+ i + ':'+ s;
 	}else if(str === 'get'){
 		var t = Y + lot + m + lot + d;
 	}
  
 return t;
}

 module.exports = formartDate