/*=========== JQ ===========*/
$(document).ready(function(){
	//ex1
	$('#btn1').on('click',function(){
			alert("hello");
	});
	//ex2
	$('#btnh').on('click', function(){
		$('#lorem1').hide();
	})
	$('#btns').on('click', function(){
		$('#lorem1').show();
	})
	$('#btnt').on('click', function(){
		$('#lorem1').toggle();
	})
	//ex3
	$('p').on('click', function(){
		$(this). hide();
	})
	//ex4
	$('#btnfo').on('click', function(){
		$('#lorem2'). fadeOut();
	});
	$('#btnfi').on('click', function(){
		$('#lorem2').fadeIn();
	});
	$('#btnft').on('click', function(){
		$('#lorem2'). fadeToggle();
	});
	// ex5
	$("#p1").on('mouseenter', function(){
		alert("You entered p1");
	});
	// ex6
	$("#p2").on('mouseleave', function(){
		alert("You now leave p2");
	});
	// ex7
	$("#p3").on('mouseup', function(){
		alert("Mouse up over p3!");
	});
	// ex8
	$("#p4").on('mouseenter', function(){
		$(this).css("background-color", "lightgray");
	});
	$("#p4").on('mouseleave', function(){
		$(this).css("background-color", "lightblue");
	});
	// ex9
	$('#btn3').on('click', function(){
		$('#lorem3').hide(1000);
	})
	$('#btn4').on('click', function(){
		$('#lorem3').show(1000);
	})
	// ex10
	$("#btn5").on('click', function(){
		$("p").toggle();
	});
	//ex11
	$("#btn6").on('click', function(){
		$("#div1").fadeIn("slow");
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn("3000");
		$("#div4").fadeIn("3000");
	});
	$("#btn7").on('click', function(){
		$("#div1").fadeOut("slow");
		$("#div2").fadeOut("slow");
		$("#div3").fadeOut("3000");
		$("#div4").fadeOut("3000");
	});
	// ex12
	$("#flip").on('click', function(){
		$("#panel").fadeToggle("slow");
	});
	//ex13
	$("#btna").on('click', function(){
		$("#starta").animate({left:'500px'});
		});
	//ex14
	$("#flip1").on('click', function(){
		$("#panel1").slideDown(5000);
		});
	$("#stop").on('click', function(){
		$("#panel1").stop();
		});
});