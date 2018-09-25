// JavaScript Document

//列表页左侧上方点击箭头弹出产品分类JS
function allGetspan(id){
	$("#detailsList_div"+id).show();
}
function spanClose(id){
	$("#detailsList_div"+id).hide();
}

setInterval(function(){$("span.next").trigger("click");},4500);//列表页今日推荐产品切换JS
$(function(){
	//列表页今日推荐产品切换JS
    var page = 1;
    var i = 4; //每版放6个图片
    //向后 按钮
    $("span.next").click(function(){    //绑定click事件
	     var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
		
		 var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width() ;
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   ///只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
			  if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
				$v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
				page++;
			 }
		 }
   });
    //往前 按钮
    $("span.prev").click(function(){
	     var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
		 var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
		 var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;   ///只要不是整数，就往大的方向取最小的整数
		 if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
		 	 if( page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });
	
	//列表页关键字更多JS
	var $category = $('#gjzKeyword_dl dd a:gt(25):not(:last)');
	$category.hide();
	var $toggleBtn = $('.gjz_dlAlast_child');
	$toggleBtn.toggle(function(){
		$category.show();
		$('.gjz_dlAlast_child').text("隐藏部分");
		$('.gjz_dlAlast_child').addClass("gjz_dlAlast_child2");
		return false;
	},function(){
		$category.hide();
		$('.gjz_dlAlast_child').text("更多");
		$('.gjz_dlAlast_child').removeClass("gjz_dlAlast_child2");
		$('.gjz_dlAlast_child').addClass("gjz_dlAlast_child");
		return false;
	});
	
	//显示仅有货JS
	$(".onlyCp").toggle(function(){
	     $('[name=items]:checkbox').attr('checked', true);
	 },function(){
		$('[name=items]:checkbox').attr('checked', false);
	});
	
	
});




