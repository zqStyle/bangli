// JavaScript Document

$(function(){
	//左侧导航二级分类点击图标隐藏显示
	$(".bstancecon_L_dl dt span").click(function(){
		$(this).parent("dt").siblings("dd").slideToggle();
	});
	
	//会员积分查询，点击积分兑换弹出框
	$("#duiHuan_span").click(function(){
		$("#bl_blackBg").show();
		$(".exchangeJifen").show();	
	});
	$("#guanBispan").click(function(){
		$("#bl_blackBg").hide();
		$(".exchangeJifen").hide();	
	});
	
	//修改收货地址
	$("#xingMin_k").blur(function(){
		if( $("#xingMin_k").val()=="" ){
			$("#kongYi").show();
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongYi").hide();	
			$("#save_botton").attr("disabled",false);
		}	
	});
	//街道地址
	$("#jieDaodz").blur(function(){
		var dz = $("#jieDaodz").val();
		dzleng = dz.length;
		if( dz==""|| dzleng<3 ){
			$("#kongSan").show();
			$("#save_botton").attr("disabled","disabled");
			return false;	
		}else{
			$("#kongSan").hide();
			$("#save_botton").attr("disabled",false);
		}	
	});
	//邮政编码
	$("#youZegbm").blur(function(){
		if( $(this).val()=="" || $(this).val().length<6 ){
			$("#kongJiu").show();
			return false;	
		}else{
			$("#kongJiu").hide();
		}
	});
	//手机
	$("#dzShouji").blur(function(){
		//手机正则
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $("#dzShouji").val();
		//固话正则
		var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var gh_v = $("#guDingdhua").val();
		if( sj_v.length!=11||!sj_v.match(sj_a) ){ //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
			$("#kongSi").show();//alert("输入错误");
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongSi").hide();//alert("正确");
			$("#save_botton").attr("disabled",false);
		}
		if( gh_v.match(gh_a) ){
			$("#kongSi").hide();
		}
	});
	//固定电话
	$("#guDingdhua").blur(function(){
		//手机正则
		var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
		var sj_v = $("#dzShouji").val();
		//固话正则
		var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
		var gh_v = $("#guDingdhua").val();
		if( !gh_v.match(gh_a) ){
			$("#kongSi").show();
			$("#save_botton").attr("disabled","disabled");
		}else{
			$("#kongSi").hide();
			$("#save_botton").attr("disabled",false);
		}
		if( sj_v.length==11&&sj_v.match(sj_a) ){
			$("#kongSi").hide();
		}
	});
	//收货地址管理现有地址下边框
	$(".merParty:last-child").css("border-bottom","none 0");
	//用户安全中心
	$(".verFication:last-child").css("border-bottom","none 0");
	//收货管理删除用户地址
	$(".sctyB_a").click(function(){
		var inpv = $(this).attr("name");
		$("#xianYouhuodz"+inpv).remove();	
	});
	//收货管理页设为默认地址
	$(".merPartyB_mr").click(function(){
		var inpv = $(this).siblings("a.sctyB_a").attr("name");
		var thisIe = $(this).text();
		if( thisIe!="默认地址" ){
			$(".merPartyB_mr").text("设为默认地址");
			$(this).text("默认地址");
			$(".merParty").removeClass("merParty_col");	
			$("#xianYouhuodz"+inpv).addClass("merParty_col");
		}
	});
	//收货地址管理点击修改JS
	$(".ssDizxiug").click(function(){
		var href = $(this).attr("href");
		var pos = $(href).offset().top;//offset() 方法返回或设置匹配元素相对于文档的偏移（位置）。
		$("html,body").animate({scrollTop: pos-125}, 1000);//
		return false;
	});
	
	//我的订单颜色新添加JS订单名称显示隐藏
	$(".orderDiv_sonFisa a").hover(function(){
		$(this).children("span").stop(true).show("fast");
	},function(){
		$(this).children("span").stop(true).hide("fast");	
	});	
	//我的订单颜色新添加JS订单地址显示隐藏
	$(".yhUser_pSpan").hover(function(){
		$(this).parent("p.yhUser_p").siblings("div.yhUser_ation").stop(true).show("fast");
	},function(){
		$(this).parent("p.yhUser_p").siblings("div.yhUser_ation").stop(true).hide("fast");	
	});
	//我的删除商品
	$(".deleSp").click(function(){
		var tisA = $(this).attr("name");
		$("#deleteSp"+tisA).remove();	
	});
	
	//修改绑定手机输入框当前样式，判断是否为空
	$(".xgShoujiunm_input").focus(function(){
		$(this).css({"border":"solid 1px #E59C6F","background-color":"#FDF9C8"});
		$(this).siblings("p.detailsCirc_p").show();//输入提示
	}).blur(function(){
		$(this).css({"border":"solid 1px #95AECD","background-color":"#FFFFFF"});
		$(this).siblings("p.detailsCirc_p").hide();//输入提示
	});	
	//判断绑定的手机号
	$("#mobile").focus(function(){
		$(this).siblings("#layoutFir").hide();//为空	
		$(this).siblings("span.xsorrectSpan").hide();//正确提示
		$(this).siblings("div#layout").hide();//邮箱/手机号码格式不正确
		$("#chongFusj").hide();//手机号码重复
	}).blur(function(){
		var thisLen = $(this).val().length;
		if( /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.value) && thisLen==11 ){ 
			$(this).siblings("span.xsorrectSpan").show();//正确提示
		}else if( this.value=="" ){ 
			 $(this).siblings("#layoutFir").show();//为空
		}else{
			$(this).siblings("div#layout").show();//手机号码格式不正确	
		}
	});	
	//判断验证码
	$("#yanzCode").focus(function(){
		$(this).siblings("span.xsorrectSpan").hide();//正确提示
		$(this).siblings("#tifying").hide();//为空
		$(this).siblings("#yzMcuow").hide();//验证码错误
	}).blur(function(){
		if( this.value=="" ){ 
			 $(this).siblings("#tifying").show();//为空
		}	
	});
	//图形验证码 
	$("#yanzCode_tx").focus(function(){
		$(this).siblings("span.xsorrectSpan").hide();//正确提示
		$(this).siblings("#tifying_tx").hide();//为空
		$(this).siblings("#yzMcuow_tx").hide();//验证码错误
	}).blur(function(){
		if( this.value=="" ){ 
			 $(this).siblings("#tifying_tx").show();//为空
		}	
	});
	//判断新邮箱
	$("#newMaiInp").focus(function(){
		$(this).siblings(".hintTis_p").show();
		$(this).siblings("span.xsorrectSpan").hide();//正确提示
		$(this).siblings("#hintA").hide();//新邮箱为空
		$(this).siblings("#hintB").hide();//邮箱格式不正确
		$(this).siblings("#hintC").hide();//与原有相同
	}).blur(function(){
		$(this).siblings(".hintTis_p").hide();
		if ( /.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ){ 
			$(this).siblings(".xsorrectSpan").show();//正确提示
		}else if( this.value=="" ){ 
			 $(this).siblings("#hintA").show();//新邮箱为空
		}else{
			$(this).siblings("#hintB").show();//邮箱格式不正确	
		}
	});
	
	
	
	//积分兑换详情
	tabSwitch(".duiH_List",".mingXison a");	
});
//积分兑换日期切换
function tabSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().addClass("mingXisonFrist");
	$(objTab).click(function(){
		$(this).addClass("mingXisonFrist").siblings().removeClass("mingXisonFrist");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};

//收货地址管理提交
function souHuoform(){
	//收货人姓名
	if( $("#xingMin_k").val()=="" ){
		$("#kongYi").show();
		return false;
	}
	//街道地址
	var dz = $("#jieDaodz").val();
	dzleng = dz.length;
	if( dz==""|| dzleng<3 ){
		$("#kongSan").show();
		return false;	
	}
	//邮政编码
	if( $("#youZegbm").val()=="" || $("#youZegbm").val().length<6 ){
		$("#kongJiu").show();
		return false;	
	}
	//手机正则
	var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
	var sj_v = $("#dzShouji").val();
	//固话正则
	var gh_a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ ; 
	var gh_v = $("#guDingdhua").val();
	//手机
	if( sj_v.length!=11||!sj_v.match(sj_a) ){
		if( !gh_v.match(gh_a) ){
			$("#kongSi").show();
			return false;
		}
	}
	//固定电话
	if( !gh_v.match(gh_a) ){
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			$("#kongSi").show();
			return false;	
		}
	}
	//地区
	if( $(".selectH_a").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();

		return false;	
	}
	if( $(".selectH_b").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();

		return false;	
	}
	if( $(".selectH_c").children("option:selected").text()=="请选择" ){
		$("#kongEr").show();
		$(".addressModify_div").show();
		return false;	
	}	
	return true;
}
//我的订单取消订单
function cancelDd_a(){
	$("#bl_blackBg").show();
	$(".ddanCancel").show();
}
//我的订单点击关闭取消订单JS
function quxiao_spanGb(){
	$("#bl_blackBg").hide();
	$(".ddanCancel").hide();
}

//修改绑定手机
function subform(obj){
	if( obj.mobile.value === "" ){
		$("#layoutFir").show();//手机号码为空
		return false;
	}
	if( obj.yanzCode.value === "" ){
		$("#tifying").show();//验证码为空
		return false;
	}
	if( obj.yanzCode_tx.value === "" ){
		$("#tifying_tx").show();//图形验证码为空
		return false;
	}
	return true;
}

//修改手机发送验证码JS
var Time=60,t;
var c=Time;
function timedCount(){
	document.getElementById('fsyzm').value="(" + c + ")秒后重新发送";
	document.getElementById('fsyzm').disabled="disabled";
	$(".sJcode").show();
	c=c-1;
	t=setTimeout("timedCount()",1000);
	if(c<0){
		c=Time;
		stopCount();
		document.getElementById('fsyzm').value="发送验证码";
		document.getElementById('fsyzm').removeAttribute("disabled");
		$(".sJcode").hide();
	}
}function stopCount() {
	clearTimeout(t);
}//发送验证码JS end


//修改新邮箱验证码JS
var maiTime=60,s;
var a=maiTime;
function maiCount(){
	if( $("#newMaiInp").val()=="" ){
		return false;
	}
	var yx_a = /.+@.+\.[a-zA-Z]{2,4}$/ ;
	var yx_v = $("#newMaiInp").val(); 
	if ( !yx_v.match(yx_a) ){ 
		return false;
	}
	document.getElementById('whileSj').innerHTML="(" + a + ")秒后重新发送";
	document.getElementById('newMaiInp').disabled="disabled";
	a=a-1;
	s=setTimeout("maiCount()",1000);
	$("#ver_send").hide();
	$(".anewSpan").show();
	$(".novoP").show();
	$(".proviZs").show();
	if(a<0){
		a=maiTime;
		sCount();
		$("#ver_send").show();
		$("#ver_send").removeClass("ver_send01").addClass("ver_send02");
		$(".anewSpan").hide();
		$(".novoP").hide();
		$(".proviZs").hide();
		document.getElementById('newMaiInp').removeAttribute("disabled");
	}
}function sCount() {
	clearTimeout(s);
}//修改新邮箱验证码JS end



