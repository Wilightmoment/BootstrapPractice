$(document).ready(function(){
	$('#account-tabs a').click(function(e){
	e.preventDefault()	
	$(this).tab('show')	
	})


	var $charCount, maxCharCount;

	/*宣告要抓取的物件*/
	$charCount = $('#tweet-modal .char-count')
	/*因為在.char-count中 有一個屬性為data-max='140'，故抓取data中的max屬性*/
	maxCharCount = parseInt($charCount.data('max'),10)

	$('#tweet-modal textarea').on('keyup',function(e){
		var tweetLength = $(e.currentTarget).val().length;
		$charCount.html(maxCharCount-tweetLength)
	})

	/*使用tooltip時一定要初始化它*/
	$('[data-toggle="tooltip"]').tooltip();

	var popoverContentTemplate = ''+'<img src="imgs/breed.jpg" class="img-rounded">'+ 
									'<div class="info">'+ 
										'<strong>狗品種</strong>'+
										'<a href="#" class="btn btn-default">'+
											'<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'+
											'關注'+
										'</a>'+
									'</div>';

	/*使用popover時一定要初始化它*/
	$('[data-toggle="popover"]').popover({
		placement:'bottom',
		html:true,/*把提示的內容設為HTML格式*/
		content:function(){
			return popoverContentTemplate;
		}
	});

	/*show.bs.popover事件是一個會再彈出提示顯示時立刻產生的事件(即顯示前會做的事情)*/
	$('[data-toggle="popover"]').on('show.bs.popover',function(){
		var $icon= $(this).find('span.glyphicon');

		$icon.removeClass('glyphicon-plus').addClass('glyphicon-ok');
		//$(this).append('中');
	});
});