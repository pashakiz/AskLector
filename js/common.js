$(document).ready(function() {

	// Placeholder
	function placeholder(selector) {
		var title = "";
		title = $(selector).val();
		if (title == "") {
			return false;
		}
		$(selector).on("focus", function() {
			if( $(this).val() == title || $(this).val() == "" ) {
				$(this).val("");
			}
		});
		$(selector).on("blur", function() {
			if( $(this).val() == "" ) {
				$(this).val(title);
			}
		});
	}
	placeholder(".form-takepart__name");
	placeholder(".form-takepart__email");
	placeholder(".feedback__name");
	placeholder(".feedback__email");

	$(".btn-takepart").on("click", function() {
		$("#form-takepart").slideDown();
		$(this).hide();
	});


	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	// $("a.scroll").click(function() {
	// 	$.scrollTo($(".div"), 800, {
	// 		offset: -90
	// 	});
	// });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form").serialize(),
			success: function(data) {
				//$('#order_status').html(data);
				$('#order_status').html('Спасибо, Ваша заявка отправлена!');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});