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
		$(this).slideUp();
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form#form-takepart").submit(function() {
		var email = $(this).find(".form-takepart__email").val();
		var pattern = /.+@.+\..+/i;
		if (!pattern.test(email)) {
			alert("Введите корректный E-mail адрес!");
			return false;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form#form-takepart").serialize(),
			success: function(data) {
				//$('#order_status').html(data);
				//$('#order_status').html('Спасибо, Ваша заявка отправлена!');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
		});
		return false;
	});
	$("form#feedback").submit(function() {
		var email = $(this).find(".feedback__email").val();
		var pattern = /.+@.+\..+/i;
		if (!pattern.test(email)) {
			alert("Введите корректный E-mail адрес!");
			return false;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("form#feedback").serialize(),
			success: function(data) {
				//$('#order_status').html(data);
				//$('#order_status').html('Спасибо, Ваша заявка отправлена!');
			},
			error:  function(xhr, str){
				alert('Возникла ошибка: ' + xhr.responseCode);
			}
		}).done(function() {
			alert("Спасибо за заявку!");
		});
		return false;
	});

});