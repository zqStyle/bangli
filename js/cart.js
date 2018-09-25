// JavaScript Document

var maxNum = 999;//最大数字限制

$(function(){
	//判断商品
	$(".cc_digital").each(function(){
		var v=$(this).val();
		var id=$(this).attr('title');
		if( v ==1 ){
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
			$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		else if(v < maxNum&&v>1){
			$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		else{
			$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色
			$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"pointer"});//加、添加灰色
		}
	});
	//购物车、已选择的产品数量
	$("[name=items]:checkbox").click(function(){
		var num = $(".electNum").text();
		if( this.checked === true ){
			num++;
		}else{
			num--;
		}
		if( num < 0 ){
			return false;
		}
		$(".electNum").text( num );
	});
	
	//购物车、全选JS
     $(".CheckedAll").click(function(){
		 //所有checkbox跟着全选的checkbox走。
		$("[name=items]:checkbox").attr("checked", this.checked );
		//商品选中商品数量显示
		var $tmp=$("[name=items]:checkbox").length;
		if( $("[name=items]:checkbox").is(":checked") ){
			$(".electNum").text( $tmp );
		}else{
			$(".electNum").text( 0 );
		}
		//全选时商品总额
		$(".totalNum").html(0);
		$(".xuanZ_inp").each(function() {
			var bj = $(this).val();
			if( $("[name=items]:checkbox").is(":checked") ){
				$("#tr_"+bj).addClass("backgroundFEC6C5");
				$(".balanceH").addClass("balanceA");
				$(".gouWu_jieH").addClass("gouWu_jieS");
				//已选商品总额	
				var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
				var soloTotal = parseInt( $("#digital_x"+bj).html() );//单个商品总额
				totalNum = totalNum + soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)	
			}else{
				$("#tr_"+bj).removeClass("backgroundFEC6C5");
				$(".balanceH").removeClass("balanceA");
				$(".gouWu_jieH").removeClass("gouWu_jieS");	
				//已选商品总额	
				$(".totalNum").html(0)//已选商品总额
			}
        });	
	 });
	 //当复选框全选时，全选按钮也同时被选中
	 $("[name=items]:checkbox").click(function(){
		 //定义一个临时变量，避免重复使用同一个选择器选择页面中的元素
		var $tmp=$("[name=items]:checkbox");
		//用filter方法筛选出选中的复选框。并直接给CheckedAll赋值
		$(".CheckedAll").attr("checked",$tmp.length==$tmp.filter(":checked").length);
	 });
	 
	//删除失效商品
	$(".shiXiao_a").click(function(){
		$(".shiXiao_tr").remove();		
	});	
	//失效商品不能加减
	$(".shiXiao_tr input").attr("disabled","disabled");//加、减、添加disabled属性
	$(".shiXiao_tr input").css({"color":"#E9E9E9","cursor":"default"});
	
	//选中商品，添加背景颜色
	$(".xuanZ_inp").click(function(){
		$(this).each(function() {
			var bj = $(this).val();
			var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
			var soloTotal = parseInt( $("#digital_x"+bj).html() );//单个商品总额
			if( this.checked === true ){
				$("#tr_"+bj).addClass("backgroundFEC6C5");
				totalNum = totalNum + soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)	
			}else{
				$("#tr_"+bj).removeClass("backgroundFEC6C5");
				totalNum = totalNum - soloTotal ;//已选商品总额
				$(".totalNum").html(totalNum)
			}
			if( $("[name=items]:checkbox").is(":checked") ){
				$(".balanceH").addClass("balanceA");
				$(".gouWu_jieH").addClass("gouWu_jieS");	
			}else{
				$(".balanceH").removeClass("balanceA");
				$(".gouWu_jieH").removeClass("gouWu_jieS");	
			}
        });	
	});	
	
	//购物车结算按钮添加href属性
	if( $(".huiSejies_a").hasClass("balanceA") ){
		$(".huiSejies_a").attr("href","#");	
	}else{
		$(".huiSejies_a").attr("href","javascript:void(0)");		
	}
	if( $(".huiSezoj_js").hasClass("gouWu_jieS") ){
		$(".huiSezoj_js").attr("href","#");	
	}else{
		$(".huiSezoj_js").attr("href","javascript:void(0)");		
	}
	$(".xuanZ_inp,.CheckedAll").click(function(){
		if( $(".huiSejies_a").hasClass("balanceA") ){
			$(".huiSejies_a").attr("href","#");	
		}else{
			$(".huiSejies_a").attr("href","javascript:void(0)");		
		}
		if( $(".huiSezoj_js").hasClass("gouWu_jieS") ){
			$(".huiSezoj_js").attr("href","#");	
		}else{
			$(".huiSezoj_js").attr("href","javascript:void(0)");		
		}
	});
	

});

//购物车产品加减JS
function boutton(type,id){
   if(type==1){
		//减
		var v = $("#digital"+id).val();
		v = parseInt(v);
		if( true === isNaN(v) ){
			alert("数量有误");
			return false;
		}
		if( v <= 1 ){
			return false;
		}
		if( v === 1 ){
			return false;
		}
		v--;
		$("#digital"+id).val(v);
		if( v === 1 ){
			//this.disabled = "true";//添加disabled属性
			$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
			$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
		}
		if( v < maxNum ){
			$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
			$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
		}
		var xj = parseInt($("#digital_j"+id).html());//商品单价
		$("#digital_x"+id).html(xj*v);//商品总金额
		//所选商品总额
		if( $("#xZ"+id).is(":checked") ){
			var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
			totalNum = totalNum - xj ;//已选商品总额
			$(".totalNum").html(totalNum)	
		}
	}else{
		//加
		var v = $("#digital"+id).val();
		v = parseInt(v);
		if( true === isNaN(v) ){
			alert("数量有误");
			return false;
		}
		if( v > maxNum ){
			return false;
		}
		v++;
		$("#digital"+id).val(v);
		if( v > 1 ){
			$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
			$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色
		}
		if( v === maxNum ){
			$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
			$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"default"});//加、改变灰色
			return false;
		}
		var xj = parseInt($("#digital_j"+id).html());//商品单价
		$("#digital_x"+id).html(xj*v);//商品总金额
		//所选商品总额
		if( $("#xZ"+id).is(":checked") ){
			var totalNum = parseInt( $(".totalNum").html() );//所选商品总额	
			totalNum = totalNum + xj ;//已选商品总额
			$(".totalNum").html(totalNum)	
		}
	}
}

//购物车产品数量直接输入时JS
function xiaoJiFen(id){
	var name = $("#digital"+id).val();
	if( name.length==0 ){
		$("#digital"+id).val(1);
	}
	var v = $("#digital"+id).val();//产品数量
		v = parseInt(v);
	if( v === 0 ){
		$("#digital"+id).val(1);
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
	}
	if( v === 1 ){
		$('#but_decr'+id).attr("disabled","disabled");//减、添加disabled属性
		$('#but_decr'+id).css({"color":"#E9E9E9","cursor":"default"});//减、改变灰色
	}
	if( v > 1 ){
		$('#but_decr'+id).removeAttr("disabled");//减、移除disabled属性
		$('#but_decr'+id).css({"color":"#C91735","cursor":"pointer"});//减、添加高亮颜色	
	}
	if( v < maxNum ){
		$('#but_incr'+id).removeAttr("disabled");//加、移除disabled属性
		$('#but_incr'+id).css({"color":"#C91735","cursor":"pointer"});//加、添加高亮颜色
	}
	if( v === maxNum ){
		$('#but_incr'+id).attr("disabled","disabled");//加、添加disabled属性
		$('#but_incr'+id).css({"color":"#E9E9E9","cursor":"default"});//加、改变灰色
	}
	//商品总金额
	var xj = parseInt($("#digital_j"+id).html());//商品单价
	var xf_Z = $("#digital_x"+id).html();//单个物品小计
	var xiaoji=xj*v;
	$("#digital_x"+id).html(xiaoji);
	
	//所选商品总额
	var soloTotal;
	var totalNum='0';
	$("input[name='items']:checked").each(function(){ 
		var xid=$(this).val();
		soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
		totalNum=parseInt(totalNum)+soloTotal;
		$(".totalNum").html(totalNum);	
    })

}

//购物车、删除选中商品
var del = function(){
	var list = $('[name=items]:checkbox');
	for(i in list){
		if( list[i].checked === true ){
			del_tr( list[i].value );
		}
	}
	//显示选中商品数量
	$("input[name='items']:checked").each(function(){ 
		var $tmp=$('[name=items]:checkbox').length;
		$(".electNum").text( $tmp );	
    })
	//商品都清楚
	if($("input[name='items']:checked").length==0){
		$(".electNum").text( 0 );
	}
	$(".totalNum").html(0)
	$(".balanceH").removeClass("balanceA");//改变结算按钮的背景
	$(".gouWu_jieH").removeClass("gouWu_jieS");//改变结算按钮的背景
}
//购物车、删除TR
var del_tr = function(id){
	$("tr[id=\"tr_" + id + "\"]").remove();
	//所选商品总额
	var soloTotal;
	var totalNum='0';
	$("input[name='items']:checked").each(function(){ 
		var xid=$(this).val();
		soloTotal = parseInt( $("#digital_x"+xid).html() );//单个商品总额
		totalNum=parseInt(totalNum)+soloTotal;
		$(".totalNum").html(totalNum);	
		//已选商品数量
		var $tmp=$('[name=items]:checkbox').length;
		$(".electNum").text( $tmp );
    })
	$("input[name='items']").each(function(){ 
		if( $("[name=items]:checkbox").is(":checked") ){
			$(".balanceH").addClass("balanceA");
			$(".gouWu_jieH").addClass("gouWu_jieS");
		}else{
			$(".balanceH").removeClass("balanceA");
			$(".gouWu_jieH").removeClass("gouWu_jieS");
			$(".totalNum").html(0)	
			$(".electNum").text(0);
		}
    })
	if($("input[name='items']:checked").length==0){
		$(".electNum").text(0);
		$(".totalNum").html(0)
		$(".balanceH").removeClass("balanceA");//改变结算按钮的背景
		$(".gouWu_jieH").removeClass("gouWu_jieS");//改变结算按钮的背景
	}
}

















