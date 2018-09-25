// JavaScript Document

$(function(){
	//左侧导航二级分类点击图标隐藏显示
	$(".bstancecon_L_dl dt span").click(function(){
		$(this).parent("dt").siblings("dd").slideToggle();
	});
	
	//用户安全中心
	$(".verFication:last-child").css("border-bottom","none 0");
	
	
	//关闭用户安全中心验证弹出框
	$("#wj_Close").click(function(){
		$("#bl_blackBg").hide();
		$("#pass_mailboxDiv").hide();	
	});
	
});



//用户中心验证码弹出框、验证码、提交表单
function subform(obj){
	if( obj.yhsubmit.value === "" ){
		$("#sj_zhuCheyz").show();
		return false;
	}
	if( obj.txyhsubmit.value === "" ){
		$("#sj_zhuCheyzSon").show();
		return false;
	}
	return true;
}





//用户安全中心发送验证码信息JS
var InterValObj; //timer变量，控制时间
var count = parseInt(60); //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage(){
  　curCount = count;
　　//设置button效果，开始计时
	 $("#btnSendCode").attr("disabled", "true");
	 $("#btnSendCode").val( curCount + "秒重新获取");
	 InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
　　  //向后台发送处理数据
	 $.ajax({
	 　　type: "POST", //用POST方式传输
	 　　dataType: "text", //数据格式:JSON
	 　　url: 'Login.ashx', //目标地址
	　　 //data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
	　　 error: function (XMLHttpRequest, textStatus, errorThrown) { },
	 　　success: function (msg){ }
	 });
}//timer处理函数
function SetRemainTime(){
	if (curCount == 0){                
		$(".wangVerify_p").hide();
		window.clearInterval(InterValObj);//停止计时器
		$("#btnSendCode").removeAttr("disabled");//启用按钮
		$("#btnSendCode").val("重新获取证码");
	}
	else{
		$(".wangVerify_p").show();
		curCount--;
		$("#btnSendCode").val( curCount + "秒重新获取");
	}
}
function yhAqModify(){
	$("#bl_blackBg").show();
	$("#pass_mailboxDiv").show();
}


