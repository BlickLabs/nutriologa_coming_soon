/*
 notifyMe.js v1.0.0
 Copyright (c)2014 Sergey Serafimovich
*/

(function ($) {
	"use strict";
  $.fn.notifyMe = function(options) {
    // Default options.
  	var settings = $.extend({
	  	// Error and success message strings
	    msgError404: "Servicio no disponible por el momento.",
			msgError503: "Algo salió mal. Intentalo de nuevo más tarde.",
			msgErrorValidation: "La dirección de correo electrónico es inválida o no existe.",
			msgErrorFormat: "La dirección de correo electrónico es incorrecta.",
			msgSuccess: "Suscripción realizada con éxito."
		}, options );

  
		var form = $(this);
		var input = form.find("input[name=email]");
		var button = form.find("button");
		var loader = form.closest(".notify-wrap").children(".loader-container");
		
		var action = form.attr("action");
		var message = $("<div class='col-lg-12 align-center' id='message'></div>").appendTo(form);

		loader.hide();
	  
		form.on("submit", function (e) {
			e.preventDefault();
			// Test if the value of input is actually an email
			$.ajax({
	      type: 'POST',
	      url: action, 
	      data: form.serialize(),
	      beforeSend: function () {
	        var isEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
	        message.text('');
	        if (isEmail.test(input.val())) {
	          button.attr('disabled', 'disabled');
	          loader.show();
	        } else {
	           message.text(settings.msgErrorFormat);
	           return false;
	        }
	      },
	      success: function (data) {
	        if (data.status == 'subscribed') {
	          message.text(settings.msgSuccess);
	        } else if (data.type == "ValidationError") { 
						message.text(settings.msgErrorValidation);
					} else {
						message.text(settings.msgError503);
					}
	      },
	      error: function (data) {
	      	if (data.status == 404) {
	      		message.text(settings.msgError404);
	      	} else {
	      		message.text(settings.msgError503);
	      	}
	      },
	      complete: function () {
	        button.removeAttr('disabled');
	        loader.hide();
	        input.val('');
	      }
	    });
  	});
  };
}(jQuery));