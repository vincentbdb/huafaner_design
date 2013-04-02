// JavaScript Document
$(document).ready(function () {

/*************************************去掉超链接和按钮点击时生成的虚线框*******************************************************************/
	/*$('a,input[type="button"],input[type="submit"]').bind('focus',function(){
		if(this.blur){
			this.blur();
		};
	});
	*/

/************************************** 输入框 **************************************/
	$("input.inputlogin").hover(function () {
		$(this).addClass('inputlogin_hover');
	}, function () {
		$(this).removeClass('inputlogin_hover');
	});

	$("input.same").hover(function () {
		$(this).addClass('samehover');
	}, function () {
		$(this).removeClass('samehover');
	});

/************************************** 列表样式 **************************************/
	$(".list tr:even").addClass('even');
	$(".list tr").hover(function () {
		$(this).addClass('current')
		}, function () {
		$(this).removeClass('current')
	})
	
/************************************** 全选 **************************************/
	$("#ckAll").click(function() {
		$("input[name='sub']").prop("checked", this.checked);
	  });
	 
	  $("input[name='sub']").click(function() {
		var $subs = $("input[name='sub']");
		$("#ckAll").prop("checked" , $subs.length == $subs.filter(":checked").length ? true :false);
  	});



});
