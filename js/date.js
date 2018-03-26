(function(){
	
	//当月第一天    new Date(year,month-1,1); 
	//当月最后一天   new Date(year,month,0);
	//
	var datepicker = {};
	
	datepicker.getMonthData = function(year,month){
		debugger
		var ret = [];
		
		if(!year && !month){
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}
		var firstDay = new Date(year,month - 1,1);   //当前月份第一天
		var firstDayWeekDay = firstDay.getDay();   //当前月份第一天是周几
		if(firstDayWeekDay ===0) firstDayWeekDay = 7;  
		
		year = firstDay.getFullYear();
		month = firstDay.getMonth() + 1;
		
		var lastDayOfLastMonth = new Date(year, month -1 ,0);   //上月份最后一天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();  //返回上月份的最后一天是几号
		
		var preMonthDayCount = firstDayWeekDay - 1;  //要显示上一个月份的多少天
		
		var lastDay = new Date(year, month, 0);   //当前月份的最后一天
		var lastDate = lastDay.getDate();   //返回当前月份的最后一天是几号
		
		for(var i=0; i<7*6; i++){
			var date = i+ 1 - preMonthDayCount;
			var showDate = date;
			var thisMonth = month;
			if(date <= 0){
				//上一月
				thisMonth = month - 1;
				showDate = lastDateOfLastMonth + date;
			}else if(date > lastDate){
				//下一月
				thisMonth = month +1;
				showDate = showDate - lastDate;
			}
			if(thisMonth ===0) thisMonth = 12;
			if(thisMonth ===13) thisMonth = 1;
			
			ret.push({
				month: thisMonth,
				date:date,
				showDate:showDate
			});
		}
		//return ret;
		return {
			year:year,
			month:month,
			days:ret
		}
	};
	
	
	window.datepicker = datepicker;
})();
