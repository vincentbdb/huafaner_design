// JavaScript Document
$(document).ready(function () {

/*************************************ȥ�������ӺͰ�ť���ʱ���ɵ����߿�*******************************************************************/
	/*$('a,input[type="button"],input[type="submit"]').bind('focus',function(){
		if(this.blur){
			this.blur();
		};
	});
	*/

/************************************** ����� **************************************/
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

/************************************** �б���ʽ **************************************/
	$(".list tr:even").addClass('even');
	$(".list tr").hover(function () {
		$(this).addClass('current')
		}, function () {
		$(this).removeClass('current')
	})
	
/************************************** ȫѡ **************************************/
	$("#ckAll").click(function() {
		$("input[name='sub']").prop("checked", this.checked);
	  });
	 
	  $("input[name='sub']").click(function() {
		var $subs = $("input[name='sub']");
		$("#ckAll").prop("checked" , $subs.length == $subs.filter(":checked").length ? true :false);
  	});



});
