head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
		$('.popup__nav a').click(function(event) {
			$('.popup__nav a').removeClass('is-active');
			$(this).addClass('is-active');
			toggle = $(this).parents('ul').data('blocks');
			//alert(toggle);
			$('.'+toggle).hide();
			str = $(this).attr('href');			
			str = str.substr(1);
			//alert(str);
			$(this).parents('.container').find('.'+str).show();
			return false;
		});

		
		$('.scrollbar-style').tinyscrollbar();
		$('.bb2, .bb3, .bb4, .hideblock').hide(); 


		$(".switch").checkable();
		
		$('.switch').click(function(event) {			
			if($(this).find("input[type=checkbox].ui-checkable").prop("checked") == 1) {
				$(this).parent().find('.hideblock').show();				
			}
			else {
				$(this).parent().find('.hideblock').hide();				
			}

			return false;
		});


		$( ".slider" ).slider({
		 	animate: true,
		 	range: "min",
		 	value: 1943875,
		 	min: 1900000,
		 	max: 2200000,
		 	step: 1234,

		 	slide: function(event, ui ) {
		 		$( "#slider-result" ).html(ui.value);
		 	},

		 	change: function(event, ui) {
		 		$('#text').attr('value', ui.value);
		 	}
		});		

		$('.ahover').hover(
			function () {
				$(this).parent().css("margin-bottom", "250px");				
				$('.gamepreview').show();
			}, 
			function () {
				$(this).parent().css("margin-bottom", "0px");
				$('.gamepreview').hide();
			}
		);

		function scrollFixedElements() {
		    var scroll_left = $(this).scrollLeft();
		    $(".fixed-element").css({
		        left: -scroll_left
		    });
		}
		scrollFixedElements();
		$(window).scroll(function(){
		    scrollFixedElements()
		});

    $( "#datepicker-start" ).datepicker({

      selectOtherMonths: true, 
      showOtherMonths: true,
      onClose: function( selectedDate ) {
        $( "#datepicker-end" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#datepicker-end" ).datepicker({      
      selectOtherMonths: true,
      showOtherMonths: true,
      onClose: function( selectedDate ) {
        $( "#datepicker-start" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
});