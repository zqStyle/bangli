// JavaScript Document

$(function(){

	//注册页面输入提示
	$(".detailsCirc_input").focus(function(){
		$(this).css({"border":"solid 1px #E59C6F","background-color":"#FDF9C8"});
		$(this).siblings("p.detailsCirc_p").show();//输入提示
		//注册页面验证身份JS
		$(this).siblings("#sj_zhuCheyz").hide();
		$(this).siblings("#sj_zhuCheyzSon").hide();
	}).blur(function(){
		$(this).css({"border":"solid 1px #95AECD","background-color":"#FFFFFF"});
		$(this).siblings("p.detailsCirc_p").hide();//输入提示
		//注册页面验证身份JS
		if( this.value=="" ){
			$(this).siblings("#sj_zhuCheyz").show();
			$(this).siblings("#sj_zhuCheyzSon").show();	
		}
	});	
	//点击立即注册按钮
	$(".onceZuche input").attr("disabled","disabled");//添加disabled属性
	$(".agreeInp").click(function(){
		if( this.checked === true ){
			$(".onceZuche input").addClass("onceZucheinput");//绿色背景图
			$(".onceZuche input").removeAttr("disabled");//加、移除disabled属性
		}else{
			$(".onceZuche input").removeClass("onceZucheinput");//绿色背景图
			$(".onceZuche input").attr("disabled","disabled");//添加disabled属性	
		}	
	});
	
	//注册页面验证用户名
	$("#email").focus(function(){
		$(this).siblings("span.sorrectSpan").hide();//正确提示
		$(this).siblings("div#layout").hide();//邮箱/手机号码格式不正确
		$(this).siblings("div#layoutFir").hide();//为空
	}).blur(function(){
		var thisLen = $(this).val().length;
		if ( /.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ){ 
			$(this).siblings("span.sorrectSpan").show();//正确提示
		} 
		else if( /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.value) && thisLen==11 ){ 
			$(this).siblings("span.sorrectSpan").show();//正确提示
		} 
		else if( this.value=="" ){ 
			 $(this).siblings("div#layoutFir").show();//为空
		} 
		else{
			$(this).siblings("div#layout").show();//邮箱/手机号码格式不正确	
		}
	});	

	//注册页面登录密码
	$("#pass").focus(function(){
		$(".pw-strength").hide();//密码强度
		$(this).siblings("div#xiaoYubox").hide();//密码长度
		$(this).siblings("div#emptyDiv").hide();//密码为空
	}).blur(function(){
		$(".pw-strength").show();//密码强度
		var leng = $("#pass").val().length;
		if( leng < 6 ){
			$(".pw-strength").hide();//密码强度
			$(this).siblings("div#xiaoYubox").show();//密码长度
			$(this).siblings("div#emptyDiv").hide();//密码为空
			
		}else{
			$(".pw-strength").show();//密码强度
			$(this).siblings("div#xiaoYubox").hide();//密码长度
			$(this).siblings("div#emptyDiv").hide();//密码为空	
		}
		if( leng=="" ){
			$(".pw-strength").hide();//密码强度
			$(this).siblings("div#xiaoYubox").hide();//密码长度
			$(this).siblings("div#emptyDiv").show();//密码为空
		}
	});
	$('#pass').keyup(function(){ 
		$(".pw-strength").show();//密码强度
		$(this).siblings("p").hide();//输入提示
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
		var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
	
		if (false == enoughRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-defule'); 
			 //密码小于六位的时候，密码强度图片都为灰色
		} 
		else if (strongRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-strong'); 
			 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强
		} 
		else if (mediumRegex.test($(this).val())) { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass(' pw-medium'); 
			 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} 
		else { 
			$('#level').removeClass('pw-weak'); 
			$('#level').removeClass('pw-medium'); 
			$('#level').removeClass('pw-strong'); 
			$('#level').addClass('pw-weak'); 
			 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的
		} 
		return true; 
	});
	
	//注册页确认密码
	$("#passSon").focus(function(){		
	   $(this).siblings("span.sorrectSpan").hide();//密码正确
	   $(this).siblings("div#Empty").hide();//密码为空 	
	   $(this).siblings("div#Different").hide();//密码不一致
	   $(this).siblings("div#verifylength").hide();//重复密码长度
	}).blur(function(){
		var pass = $("#pass").val();
		var passSon = $(this).val();
		if( passSon == ""){
			$(this).siblings("div#Empty").show();//密码为空
			$(this).siblings("div#Different").hide();//密码不一致
	  		$(this).siblings("span.sorrectSpan").hide();//密码正确
			return false;	
		}
	    if( pass === passSon ){
			$(this).siblings("span.sorrectSpan").show();//密码正确
			$(this).siblings("div#Empty").hide();//密码为空
			$(this).siblings("div#Different").hide();//密码不一致
		}else{
			$(this).siblings("div#Different").show();//密码不一致
			$(this).siblings("span.sorrectSpan").hide();//密码正确
			$(this).siblings("div#Empty").hide();//密码为空		
		}	
		var leng = $("#passSon").val().length;
		if( leng < 6 ){
			$(this).siblings("span.sorrectSpan").hide();//密码正确
			$(this).siblings("div#verifylength").show();//重复密码长度
			$(this).siblings("div#Different").hide();//密码不一致
		}
	});	
	//验证密码
	$("#yanzCode").focus(function(){
		$(this).siblings("div#tifying").hide();//验证码为空	
	}).blur(function(){
		if( this.value=="" ){ 
			 $(this).siblings("div#tifying").show();//验证码为空
		} 	
	});	
	
	//注册页面点击立即注册弹出框
	$("#onceInp").click(function(){
		//注册页面验证身份
		if( $("#yanzCode").val() == "" ){
			return false;
		}
		$(".zCemail").each(function() {
			var thisLen = $(this).val().length;
			if( /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.value) && thisLen==11 ){
				$("#cc_blackBg").show();
				$("#mailboxDiv").show();
			}
			return false;
		});
		
		
		
		
		
			
	});
	
	
	//注册页面关闭X
	$("#wj_Close").click(function(){
		//注册页面验证身份
		$("#cc_blackBg").hide();
		$("#mailboxDiv").hide();
		//忘记密码验证身份
		//$("#pass_mailboxDiv").hide();
	});
		
});



//注册页面注册发送验证码JS
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
	　　 data: "dealType=" + dealType +"&uid=" + uid + "&code=" + code,
	　　 error: function (XMLHttpRequest, textStatus, errorThrown) { },
	 　　success: function (msg){ }
	 });
}//timer处理函数
function SetRemainTime(){
	if (curCount == 0){                
		$(".verify_p").hide();
		window.clearInterval(InterValObj);//停止计时器
		$("#btnSendCode").removeAttr("disabled");//启用按钮
		$("#btnSendCode").val("重新获取证码");
	}
	else{
		$(".verify_p").show();
		curCount--;
		$("#btnSendCode").val( curCount + "秒重新获取");
	}
}

function subform(){
	if( $("#email").val() === "" ){
		$("div#layoutFir").show();//用户名为空
		return false;
	}
	if( $("#pass").val() === "" ){
		$("div#emptyDiv").show();//密码为空
		return false;
	}
	if( $("#passSon").val() === "" ){
		$("div#Empty").show();//确认密码为空
		return false;
	}
	if( $("#yanzCode").val() === "" ){
		$("div#tifying").show();//验证码为空
		return false;
	}
	return true;
}

function Yzmform(){
	if( $("#yzmInpyz").val() === "" ){
		$("#sj_zhuCheyz").show();//验证码为空
		return false;
	}
	return true;
}