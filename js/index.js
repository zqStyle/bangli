// JavaScript Document

//服务公告优惠信息切换JS
function tabSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().css("border-right","solid 1px #C7C7C7");
	$(objTab).first().addClass("current");
	$(objTab).hover(function(){//鼠标经过
		$(this).addClass("current").siblings().removeClass("current");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};
$(function(){
	//服务公告优惠信息切换JS  调用上面的tabSwitch函数	
	tabSwitch(".InquiryListData",".formationBulle_ul li");
	
	//首页图片移动效果
	var rank_move_time  = 300;//偏移时速
	var rank_move_range = 13;
	$(".hover_moving_img").hover(
		function(){
			$(this).stop().animate({"marginLeft":-rank_move_range},rank_move_time);
		},
		function(){
			$(this).stop().animate({"marginLeft":0},rank_move_time);
		}
	);
	
	
	
});




