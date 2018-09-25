// JavaScript Document

$(function(){
	//登录页
	$(".messageDiv input").focus(function(){
		  $(this).css("background-color","#FAFFBD");
		  $(this).parent("div.messageDiv").css("border","solid 1px #9ACCFE");
		  $(this).siblings("p.prompt_p").show(); 
		  $(this).siblings("p#email_p").hide(); 
		  $(this).siblings("p#pass_p").hide();
		  $(this).siblings("p#yanZheng_p").hide();
		 
	}).blur(function(){
		 $(this).css("background-color","#FFFFFF");
		 $(this).parent("div.messageDiv").css("border","solid 1px #C7C6C6");
		 $(this).siblings("p.prompt_p").hide();
		 if ($(this).val() == '') {
			$(this).siblings("p#email_p").show();
			$(this).siblings("p#pass_p").show();
			$(this).siblings("p#yanZheng_p").show();
		 }
	});
	
	
		
});

function subform(){
	var username =$("#email").val();
	var password =$("#pass").val();
	var yanZheng =$("#yanZheng").val();
	if( username === "" ){
		$("#email_p").show();
		return false;
	}else{
		$("#email_p").hide();	
	}
	if( password === "" ){
		$("#pass_p").show();
		return false;
	}else{
		$("#pass_p").hide();	
	}
	if( yanZheng === "" ){
		$("#yanZheng_p").show();
		return false;
	}else{
		$("#yanZheng_p").hide();	
	}
	return true;
}
