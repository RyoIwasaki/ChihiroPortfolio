/* lastUpdated:26-01-2015 */

(function( win, doc, undefined ){

var Hash 			= location.hash.slice(1);
	wHeight 		= $(window).height(),
	indexString 	= true;

if(!Hash){
	Hash = "index";
}



/*
 * Loading
 *
 */

$(function() {
	$('#loader-bg ,#loader').height(wHeight).css('display','block');
});


$(window).load(function() {
	displayChangeFunc(Hash);
	$('#loader-bg').delay(900).fadeOut(800);
	$('#loader').delay(600).fadeOut(300);
});


/*
 * button Func
 *
 */


$(".displayChange").on("click", function(){
	var wrapData = $(this).closest('.wrapper').attr("id");
	var changeData = $(this).data("display");
	console.log(wrapData + "←この画面を閉じる : この画面へいく→" + changeData)
	pulloutDisplayFunc(changeData, wrapData);
	//displayChangeFunc(changeData);
})


/*
 * index
 *
 */

indexFunc = function(data){

	$("#" + data).css("opacity", "1").fadeIn(1000);
	
	indexFunc.stringUpDown = function(){
		if(indexString){
			$(".indexImageString").animate({
				height: "65px"
			}, 1000, "easeInOutCirc").animate({
				height: "60px"
			}, 1000, "easeInOutCirc");

			setTimeout("indexFunc.stringUpDown()", 2000)
		}
	}
	indexFunc.indexImageUpDown = function(){
		if(indexString){
			$(".indexImage").animate({
				marginTop: "5px"
			}, 1000, "easeInOutCirc").animate({
				marginTop: "0"
			}, 1000, "easeInOutCirc");

			setTimeout("indexFunc.indexImageUpDown()", 2000)
		}
	}


	$(".mainImageString").ready(function(){
		indexFunc.stringUpDown();
		indexFunc.indexImageUpDown();
	})
}



/*
 * profile
 *
 */

profileFunc = function(data){
	$("#" + data).css("opacity", "1").fadeIn(1000);
}




/*
 * pulloutDisplayFunction
 *
 */

pulloutDisplayFunc = function(changeData, wrapData){
	
	if(wrapData == "index"){
		console.log("上へギューン")
		$(".indexImage").stop().animate({
			marginTop: "-1000px"
		}, 500, "easeInOutCirc")
		$(".indexImageString").stop().animate({
			height: "0px"
		}, 500, "easeInOutCirc")
	}

	$("#" + wrapData).animate({
		opacity: "0"
	}, 1000, function(){
		$("#" + wrapData).hide();
		displayChangeFunc(changeData)
	});
}

/*
 * displayChangeFunction
 *
 */

displayChangeFunc = function(data){

	if(data == "index"){

		indexString = true;
		indexFunc(data);

	}else if(data == "profile"){

		indexString = false;
		profileFunc(data);

	}

}//displayChangeFunc

})( window, document );