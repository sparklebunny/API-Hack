$(document).ready(function() {
	$("#submit-btn").click(function(event){
		// zero out results if previous search has run
		$("#results").html('');
		// get the value of the input the user submitted
		var artist = $("input[name='artist']").val();
		var genre = $(this).find("input[name='genre']").val();
		var location = $(this).find("input[name='location']").val();
		var dates = $(this).find("input[name='dates']").val();

		var artistRequest = {api_key:"RRXS6RKJR0QZY7LZY",
							 format:"jsonp",
							 name: artist,
							 bucket:"id:CAXFDYO12E2688C130",
							 // bucket:"id:7digital-US",
							};

		var result = $.ajax({
			async: false,
			// url: "js/query.json",
			url: "http://developer.echonest.com/api/v4/artist/search",
			data: artistRequest,
			dataType: "jsonp",
			jsonpCallback: "MyJSFunc",
			type: "GET",
		}).done(function(result){
			console.log("it works" + result);

// Refer to other API for code//
			$.each(result.response.artists, function(i, item) {
				$('#results').append("<div> item </div>"); 
			});
		}).fail(function(xhr, textStatus, error){
			console.log(error);
			// $('.search-results').append(errorElem);
		}).always(function(){console.log("always")})


	});
});