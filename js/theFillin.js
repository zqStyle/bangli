// JavaScript Document
//订单页JS
$(function(){
	//商品总额
	$(".subtotalEm").each(function(){
		var tal = parseInt( $("#totalCon").html() );
        var xj = parseInt( $(this).html() );
		tal = tal + xj;
		$("#totalCon").html(tal);
    });
	//修改收货地址
	$("#xingMin_k").blur(function(){
		if( $("#xingMin_k").val()=="" ){
			$("#kongYi").show();	
		}else{
			$("#kongYi").hide();	
		}	
	});
	//街道地址
	$("#jieDaodz").blur(function(){
		var dz = $("#jieDaodz").val();
		dzleng = dz.length;
		if( dz==""|| dzleng<3 ){
			$("#kongSan").show();
			return false;	
		}else{
			$("#kongSan").hide();	
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
		if( sj_v.length!=11||!sj_v.match(sj_a) ){
			$("#kongSi").show();//alert("输入错误");
		}else{
			$("#kongSi").hide();//alert("正确");
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
		}else{
			$("#kongSi").hide();
		}
		if( sj_v.length==11&&sj_v.match(sj_a) ){
			$("#kongSi").hide();
		}
	});
	//点击保存按钮JS
	$("#qrShdz_but").click(function(){
		//收货人姓名
		if( $("#xingMin_k").val()=="" ){
			$("#kongYi").show();
			return false;	
		}else{
			$("#kongYi").hide();	
		}
		//街道地址
		var dz = $("#jieDaodz").val();
		dzleng = dz.length;
		if( dz==""|| dzleng<3 ){
			$("#kongSan").show();
			return false;	
		}else{
			$("#kongSan").hide();	
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
		}else{
			$("#kongSan").hide();	
		}
		//固定电话
		if( !gh_v.match(gh_a) ){
			if( sj_v.length!=11||!sj_v.match(sj_a) ){
				$("#kongSi").show();
				return false;	
			}
		}else{
			$("#kongSi").hide();
		}
		$(".addressModify_div").hide();
		$("#shouHuo_diz").hide();
		$("#bianJixingz").hide();
		$("#yuanSimr_dz").show();
		//地区		
		$(".selectH").each(function(){
			var sel = $(this).find("option:selected").text();
			if( sel=="请选择" ){
				$("#kongEr").show();
				$(".addressModify_div").show();
				$("#shouHuo_diz").show();
				$("#yuanSimr_dz").hide();
				return false;	
			}else{
				$("#yuanSimr_dz").show();
				$("#kongEr").hide();
				$("#shouHuo_diz").hide();
				$(".addressModify_div").hide();	
			}
		});	
	});
	
	//选择收货方式
	$("#deliveryCom").each(function(){
	  if( this.checked === true ){
			$(".addressDiv select").show();
		}  
	});
	$("#deliveryCom").click(function(){
		$(".addressDiv select").show();
	});
	$("#deliverySon").click(function(){
		$(".addressDiv select").hide();
	});	

	//选择默认地址JS
	$("input[name='sHradio']").each(function(){ 
		var xzv=$(this).val();
		if( this.checked === true ){
			$(this).siblings("div.upSet_div").addClass("dis_biock");		
		}
		$(this).click(function(){
			if( this.checked === true ){
				$("#mrDz"+xzv).addClass("dis_biock").parents("div.cZobtainDiv").siblings().children("div").removeClass("dis_biock");
			}
		});
	})
	//删除用户地址
	$(".dele_a").click(function(){
		var inpv = $(this).parent().siblings("input[name='sHradio']").val();
		$("#mrDzBox"+inpv).remove();	
	});
	//设为默认地址/确认收货地址
	$(".guanBish_dz").click(function(){
		$("#shouHuo_diz").hide();
		$("#yuanSimr_dz").show();
		$("#souHuoqurr").hide();
		$("#bianJixingz").hide();
	});
	//
	$("#souHuoqurr").click(function(){
		$("#shouHuo_diz").hide();
		$("#bianJixingz").hide();
		$("#yuanSimr_dz").show();	
	});
	
	//显示收货地址编辑框
	$(".bianJish_diz").click(function(){
		$("#bianJixingz").show();	
	});
	//修改收货地址
	$(".xiuGaish_adiz").click(function(){
		$("#shouHuo_diz").show();
		$("#yuanSimr_dz").hide();
		$("#souHuoqurr").show();
	});
	//修改送货地址
	$(".xiuGaiwup_dz").click(function(){
		$("#bianJishouhuofangs").show();
		$("#morenShouhuofs").hide();	
	});
	//确认收货地址
	$(".queRenshouuidizer").click(function(){
		$("#bianJishouhuofangs").hide();
		$("#morenShouhuofs").show();		
	});
	
	//商品运费产品价格
	var sp_Total = parseInt( $("#sp_Total").text() );
	var yf_Freight = parseInt( $("#yf_Freight").text() );
	var total = parseInt( $("#total").text() );
	var total = sp_Total+yf_Freight;
	$("#total").text( total );
});
//订单页，给商家留言限制字符JS
function tjzs(){
	var count = $("#nr").val().length;
	if(count>200){
		var nr = $("#nr").val().substring(0,200);
		$("#nr").val(nr);
		count=200;
	}
	$("#zs").text(count);
}



