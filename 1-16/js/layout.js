// JavaScript Document
$(document).ready(function () {

/*************************************ȥ�������ӺͰ�ť���ʱ���ɵ����߿�*******************************************************************/
	/*$('a,input[type="button"],input[type="submit"]').bind('focus',function(){
		if(this.blur){
			this.blur();
		};
	});
	*/

/*****  ���� **************************************/

/************************************** �б� **************************************/
$('dl.list_con dd').hover(function(){
		$(this).addClass('list_conhover');
	},function(){
		$(this).removeClass('list_conhover');
	});

/*************************************Tab��ǩ�л�********************************************************************/	
	$('.ind_share ul li').click(
	 	function(){
			if($(this).hasClass('martop')){
				//$('.ind_share li').addClass('');
				//$('.ind_share li').removeClass('');
				//$(this).addClass('');
				//$(this).removeClass('');
			}
			$('.infolist').hide().eq($(this).index()).show();
		})
	
/************************************** �����Ƭ�Ҳ���ʾ�� **************************************/
	$('.greet_n').click(
	 function(){
		 $(".greeting_n").show();
		 $(".greeting_replace").hide();
		 $(".greet_none").hide();
		 }
	);
	$('.greet_replace').click(
	 function(){
		 $(".greeting_replace").show();
		 $(".greeting_n").hide();
		 $(".greet_none").hide();
		 }
	);
	$('.greet_none').click(
	 function(){
		 $(".greet_none").hide();
		 $(".greeting_n").hide();
		 $(".greeting_replace").hide();
		 }
	);

/*****  ���ڽ��� **************************************/


/************************************** ��ҳ��Ʒչʾ **************************************/
	$('.prod').hover(function(){
		$(this).addClass('prod_infohover');
	},function(){
		$(this).removeClass('prod_infohover');
	});
/************************************** ר���Ʒչʾ **************************************/
	$('.prod_zt').hover(function(){
		$(this).addClass('prod_zthover');
	},function(){
		$(this).removeClass('prod_zthover');
	});
/************************************** ר���Ʒչʾ **************************************/
	$('.pic_zt').hover(function(){
		$(this).addClass('pic_zthover');
	},function(){
		$(this).removeClass('pic_zthover');
	});
/************************************** �ҵ�� **************************************/
	$('.love_box').hover(function(){
		$(this).addClass('love_boxhover');
	},function(){
		$(this).removeClass('love_boxhover');
	});

/************************************** ��ƷԤ�� **************************************/	
	$(".imgList li").mouseenter(function(){
			$(this).addClass("hover");
			$(".bigImg")[0].src=$(this).children("img").attr("src");
			$(".imgList li").not(this).removeClass("hover")
	   });	

/************************************** ����� **************************************/
  $("input.inputtext").hover(function () {
    $(this).addClass('inputtext_hover').css("color", "#475e6d");
  }, function () {
    $(this).removeClass('inputtext_hover').css("color", "#475e6d");
  });
  $("textarea.inputtext").hover(function () {
    $(this).addClass('inputtext_hover').css("color", "#475e6d");
  }, function () {
    $(this).removeClass('inputtext_hover').css("color", "#475e6d");
  });

  $("input.login_input").hover(function () {
    $(this).addClass('login_inputhover');
  }, function () {
    $(this).removeClass('login_inputhover');
  });
/***** ���ڵ�¼ע������� ***/  
    $("input.rl_input").hover(function () {
    $(this).addClass('rl_input_hover');
  }, function () {
    $(this).removeClass('rl_input_hover');
  });

/************************************** ���radio��ʾ�� **************************************/
$('.bank_list').click(
	 function(){
		 $(".bankpays").show(300);
		 $(".bankpay_con").hide(300);
		 $(".bank_none").hide(300);
		 }
	);
	$('.bankpay_list').click(
	 function(){
		 $(".bankpay_con").show(300);
		 $(".bankpays").hide(300);
		 $(".bank_none").hide(300);
		 }
	);
	/* ���� */
	$('.bank_none').click(
	 function(){
		 $(".bankpay_con").hide(300);
		 $(".bankpays").hide(300);
		 $(".bank_none").hide(300);
		 }
	);


/************************************** ����޸� **************************************/
$('.modify').click(
	 function(){
		 $(".info_content").show();
		 }
	);

/************************************** ����radio��ʽ **************************************/
	$(".seltectradio").click(function(){
			$('.seltectradio').removeClass('selectCurre')
			$(this).addClass('selectCurre')
			
		})

/************************************** ����ͼ����֧��ƽ̨ͼ�꽻����ʽ **************************************/
	$('li.bankpay').click(
	 function(){
		 	$('.bankpay').removeClass('bank_cardhover')
		  	$(this).addClass('bank_cardhover')
		  }
	);
	
/************************************** ���� **************************************/
$(document).ready(function() {
	$(".logins").click(function(e) {          
		e.preventDefault();
		$(".logininfo").toggle();
	});
//���´������ʵ�ֵ���հ״�����ʧ
$(document).mouseup(function(e) {
		if($(e.target).parent(".logins").length==0) {
			$(".logininfo").hide();
		}
	});	
});


/************************************** ��ҳ���� **************************************/
	var sw = 0;
	$(".demo .num a").mouseover(function(){
		sw = $(".num a").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".demo .num a").eq(i).addClass("cur").siblings("a").removeClass("cur");
		$(".demo ul li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
	}
	//����ֹͣ������������ʼ����
	$(".demo").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==5){sw=0;}
		} , 3000);
	});
	//�Զ���ʼ
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==5){sw=0;}
	} , 3000);

/************************************** �б���ʽ **************************************/	
	$(".List tr.lr_color:odd").addClass('even');
	$("")
	$(".List tr").hover(
		function(){
			
			$(this).addClass('current')
			$('tr.show').removeClass('current');
			},
		function(){
			$(this).removeClass('current')
	})
	$(".List tr:contains('�쳣')").addClass('error');
	//$(".subMenu dl dt").hover()
	
/************************************** ��һ�޶� ѡ�� **************************************/
	$('.selhua').click(
	 function(){
		 	$('.selhua').removeClass('selecthua')
		  	$(this).addClass('selecthua')
		  }
	);
	
/************************************** ��ձ��ڵ���Ϣ **************************************/
	$(".inputtext").focus(function(){
	var txt_value = $(this).val();
	if(txt_value==this.defaultValue){
		$(this).val("");
		}
	});
	$(".inputtext").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);	
		}
	})

/************************************** ��һ�޶����� **************************************/	
	$('.custom').hover(function(){
		$(this).addClass('custom_infohover');
	},function(){
		$(this).removeClass('custom_infohover');
	});



})

/************************************** ��ʾTR���� **************************************/
$(function() {
		$(".btn_close").toggle(
		function(){
			$(this).addClass('btn_open')
			$('.current').addClass('tit_bj')
			},
		function(){
			$(this).removeClass('btn_open')
			$('.current').removeClass('tit_bj')
			})
});

function showTr(ObjId){
	//$(this).css("background", 'red')
		//alert($("#"+ObjId).hasClass('hid'))
		if($("#"+ObjId).hasClass('hid')){
			$(this).addClass('btn_open');
			
		    $("#"+ObjId).removeClass('hid');
			$("#"+ObjId).addClass('show');
		  
		}else{
		   $("#"+ObjId).addClass('hid');
		}
	
		return false;
	}

$(function() {
		$(".btn_col").toggle(
		function(){
			$('.current').addClass('tit_bj')
			},
		function(){
			$('.current').removeClass('tit_bj')
			})
});


/************************************** PNG ͼƬ͸�� **************************************/
function correctPNG () {
  for ( var i = 0; i < document.images.length; i++) {
    var img = document.images[i];
    var imgName = img.src.toUpperCase();
    if (imgName.substring(imgName.length - 3, imgName.length) == "PNG") {
      var imgID = (img.id) ? "id='" + img.id + "' " : "";
      var imgClass = (img.className) ? "class='" + img.className + "' " : "";
      var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='"
          + img.alt + "' ";
      var imgStyle = "display:inline-block;" + img.style.cssText;
      if (img.align == "left") {
        imgStyle = "float:left;" + imgStyle;
      }
      if (img.align == "right") {
        imgStyle = "float:right;" + imgStyle;
      }
      if (img.parentElement.href) {
        imgStyle = "cursor:hand;" + imgStyle;
      }
      var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\""
          + "width:" + img.width + "px; height:" + img.height + "px;"
          + imgStyle + ";"
          + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
          + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
      img.outerHTML = strNewHTML;
    }
  }
}
/************************************** ��һ�޶����ҹ��� **************************************/
ph$ = {
	bindEvt : function() {
		var o = {};
		o.btn_sell_l = $("#pageLeft");
		if (o.btn_sell_l.length > 0) {
			o.btn_sell_l.bind("click", function() {
				ph$.scrollLveSell('right');
			});
		}
		o.btn_sell_r = $("#pageRight");
		if (o.btn_sell_r.length > 0) {
			o.btn_sell_r.bind("click", function() {
				ph$.scrollLveSell('left');
			});
		}

	},
	scrollLveSell : function(o) {
		if (this.cfg.lv_flag == 0)
			return false;
		var tar = $("#customcon");
		var tar2 = $("#customcon_t");
		tar.stop();
		tar2.stop();
		var max_num = $("#customcon>dd").length;
		var width = 230;
		var left = 0;
		var pos = tar.position();
		//alert(pos.left + "|" + width);
		if (o == "left") {
			if (Math.abs(pos.left)+width > width*(max_num-4)) {
				return false;
			}
			left = pos.left - width;
		} else if (o == "right") {
			if (pos.left >= 0) {
				return false;
			}
			left = pos.left + width;
		}
		left = left + "px";
		//alert(left);
		ph$.cfg.lv_flag = 0;
		tar.animate({
			left: left
		}, 600);
		tar2.animate({
			left: left
		}, 600, function() {
			ph$.cfg.lv_flag = 1;
			//alert(pos.left);
		});
	},

	cfg : {

	},
	init : function() {
		this.bindEvt();
	}
};

$(function($) {
	ph$.init();
});


