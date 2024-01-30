$('#rating-form').on('change','[name="rating"]',function(){
	$('#selected-rating').text($('[name="rating"]:checked').val());

	const stars = document.querySelectorAll('.star');
	const ratingContainer = document.querySelector('.star-rating');
	
	stars.forEach(star => {
		star.addEventListener('click', () => {
			const value = star.getAttribute('data-value');
			ratingContainer.setAttribute('data-rating', value);
			// You may want to send this value to the server for storage
			console.log('User rated:', value);
		});
	});
});