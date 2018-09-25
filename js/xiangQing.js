// JavaScript Document

//详情页JS
var maxNum = 999;//最大数字限制


$(function(){
	//图片放大镜效果
	$.fn.jqueryzoom = function(options){
		var settings = {
				xzoom: 436,//缩放宽度默认宽 度zoomed width default width
				yzoom: 436,//放大DIV默认宽度 zoomed div default width
				offset: 10,	//放大DIV默认偏移 zoomed div default offset
				position: "right",//缩放默认位置时，偏移位置是图像的右边 zoomed div default position,offset position is to the right of the image
				lens:1, //缩放镜头在图像上，默认情况下为1 zooming lens over the image,by default is 1;
				preload: 1
			};
			if(options) {
				$.extend(settings, options);
			}
		    var noalt='';
		    $(this).hover(function(){
				var imageLeft = this.offsetLeft;
				var imageRight = this.offsetRight;
				var imageTop =  $(this).get(0).offsetTop;
				var imageWidth = $(this).children('img').get(0).offsetWidth;
				var imageHeight = $(this).children('img').get(0).offsetHeight;
				noalt= $(this).children("img").attr("alt");
				var bigimage = $(this).children("img").attr("jqimg");
				$(this).children("img").attr("alt",'');
				if($("div.zoomdiv").get().length == 0){
					$(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");
					$(this).append("<div class='jqZoomPup'>&nbsp;</div>");
				}
		    if(settings.position == "right"){
            if(imageLeft + imageWidth + settings.offset + settings.xzoom > screen.width){
            leftpos = imageLeft  - settings.offset - settings.xzoom;
            }else{
		    leftpos = imageLeft + imageWidth + settings.offset;
            }
		    }else{
		    leftpos = imageLeft - settings.xzoom - settings.offset;
		    if(leftpos < 0){
            leftpos = imageLeft + imageWidth  + settings.offset;
		    }
		    }
		    $("div.zoomdiv").css({ top: imageTop,left: leftpos });
		    $("div.zoomdiv").width(settings.xzoom);
		    $("div.zoomdiv").height(settings.yzoom);
            $("div.zoomdiv").show();
            if(!settings.lens){
              $(this).css('cursor','crosshair');
			}
				   $(document.body).mousemove(function(e){
                   mouse = new MouseEvent(e);
                   /*$("div.jqZoomPup").hide();*/
				    var bigwidth = $(".bigimg").get(0).offsetWidth;
				    var bigheight = $(".bigimg").get(0).offsetHeight;
				    var scaley ='x';
				    var scalex= 'y';
				    if(isNaN(scalex)|isNaN(scaley)){
				    var scalex = (bigwidth/imageWidth);
				    var scaley = (bigheight/imageHeight);
				    $("div.jqZoomPup").width((settings.xzoom)/scalex );
		    		$("div.jqZoomPup").height((settings.yzoom)/scaley);
                    if(settings.lens){
                    $("div.jqZoomPup").css('visibility','visible');
					}
				   }

                    xpos = mouse.x - $("div.jqZoomPup").width()/2 - imageLeft;
                    ypos = mouse.y - $("div.jqZoomPup").height()/2 - imageTop ;
                    if(settings.lens){
                    xpos = (mouse.x - $("div.jqZoomPup").width()/2 < imageLeft ) ? 0 : (mouse.x + $("div.jqZoomPup").width()/2 > imageWidth + imageLeft ) ?  (imageWidth -$("div.jqZoomPup").width() -2)  : xpos;
					ypos = (mouse.y - $("div.jqZoomPup").height()/2 < imageTop ) ? 0 : (mouse.y + $("div.jqZoomPup").height()/2  > imageHeight + imageTop ) ?  (imageHeight - $("div.jqZoomPup").height() -2 ) : ypos;
                    }
                    if(settings.lens){
                    $("div.jqZoomPup").css({ top: ypos,left: xpos });
                    }

					scrolly = ypos;
					$("div.zoomdiv").get(0).scrollTop = scrolly * scaley;
					scrollx = xpos;
					$("div.zoomdiv").get(0).scrollLeft = (scrollx) * scalex ;
				    });
		    },function(){
               $(this).children("img").attr("alt",noalt);
		       $(document.body).unbind("mousemove");
		       if(settings.lens){
		       $("div.jqZoomPup").remove();
		       }
		       $("div.zoomdiv").remove();
		    });

        count = 0;
		if(settings.preload){
			$('body').append("<div style='display:none;' class='jqPreload"+count+"'>sdsdssdsd</div>");
			$(this).each(function(){
			var imagetopreload= $(this).children("img").attr("jqimg");
			var content = jQuery('div.jqPreload'+count+'').html();
			jQuery('div.jqPreload'+count+'').html(content+'<img src=\"'+imagetopreload+'\">');
			});
		}
	}	
	//图片放大镜效果
	$(".jqzoom").jqueryzoom({xzoom:436,yzoom:436});
	//图片预览小图移动效果,页面加载时触发
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 5; //设置每次显示图片的个数量
	var moveNum = 2; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
	//鼠标经过放大效果的小图片
	$(".spec-scroll .items ul li:first").addClass("bor2sod000");
	$(".spec-scroll .items ul li").hover(function(){
		$(this).addClass("bor2sod000").siblings().removeClass("bor2sod000");
	});
	
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
	//判断是否选中颜色、型号、相关提示文字
	$(".buyingOne,.hoppingCart").click(function(){
		if( $("#tb-thumbA li").hasClass("tb-selected")== false ){
			$(".prompt_Div_p1").css("display","block");
			$(".prompt_Div_p2").css("display","none");
			return false;
		}else{
			$(".prompt_Div_p1").css("display","none");
		}
		if( $("#tb-thumbB li").hasClass("tb-selected")== false ){
			$(".prompt_Div_p2").css("display","block");
			$(".prompt_Div_p1").css("display","none");
			return false;
		}else{
			$(".prompt_Div_p2").css("display","none");
		}
	});	

	
	
	xxSwitch(".xxListData",".goodsThe li"); //详细页产品介绍、用户评价、购买、服务、切换JS,这里调用xxSwitch()函数
});
//图片放大鼠标经过预览图片下标位置
function MouseEvent(e) {
this.x = e.pageX
this.y = e.pageY
}
//图片放大鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
//详细页产品介绍、购买、服务、切换JS
function xxSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().addClass("xxCurrent");
	$(objTab).click(function(){
		$(this).addClass("xxCurrent").siblings().removeClass("xxCurrent");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};

//详细页选中商品、类型选中JS
function speciColour( xz ){
	if( $("#xzXg"+xz).hasClass("tb-selected") ){
		$("#xzXg"+xz).removeClass("tb-selected");	
	}else{
		$("#xzXg"+xz).addClass("tb-selected").siblings("li").removeClass("tb-selected");
	}
}

//详细页产品加减JS
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
			}
	}
}

//详细页产品加减当产品值为空、或者直接输入0时JS
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
}


