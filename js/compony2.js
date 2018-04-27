$(document).ready(function(){
	$('#contact form').on('submit',function(e){
		//避免預設的動作被驅動，這裡代表送出表單的動作
		e.preventDefault();
		var $form =$(e.currentTarget),
			$email =$form.find('#contact-email'),
			$button =$form.find('button[type=submit]');

		if($email.val().indexOf("@")==-1){
			//closest() 尋找該元素的父元素
			vaca =$email.closest('form-group')
			//若不存在'@'元素，則替父元素.form-group加上has-error類別
			$email.closest('.form-group').addClass('has-error');
		}else{
			$form.find('.form-group').addClass('has-success').removeClass('has-error');
			//設定被選中元素的屬性與值，disabled表示禁用
			$button.attr('disabled','disabled');
			$button.after('<span>訊息已送出。我們將盡快與你聯繫。</sapn>');
		}
	})


	$('#sign-btn').on('click',function(e){
		$(e.currentTarget).closest('ul').hide();
		$('form#signin').fadeIn('fast');
	})
})