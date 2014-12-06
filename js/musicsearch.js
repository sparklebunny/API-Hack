$(document).ready(function() {
	$("#search-options").submit(function(event){
		// zero out results if previous search has run
		$("#results").html('');
		// get the value of the input the user submitted
		var artist = $(this).find("input[name='artist']").val();
		var genre = $(this).find("input[name='genre']").val();
		var location = $(this).find("input[name='location']").val();
		var dates = $(this).find("input[name='dates']").val();

		var artistRequest = {api_key:"RRXS6RKJR0QZY7LZY",
							 format:"json",
							 name:"radio",
							 bucket:"id:CAXFDYO12E2688C130",
							 // bucket:"id:7digital-US",
							};

		var result = $.ajax({
			async: false,
			url: "js/query.json",
			// url: "http://developer.echonest.com/api/v4/artist/search",
			// data: artistRequest,
			dataType: "json",
			type: "GET",
		}).done(function(result){
			console.log("it works").append(result);
			// var searchResults = showSearchResults(request.tagged, result.items.length);

			// $('.search-results').html(searchResults);

			// $.each(result.items, function(i, item) {
			// 	var question = showQuestion(item);
			// 	$('.results').append(question);
			// });
		}).fail(function(xhr, textStatus, error){
			console.log(error);
			// $('.search-results').append(errorElem);
		}).always(function(){console.log("always")})


	});
});