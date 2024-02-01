function getPaymentTokenFromAPI(success) {
	return new Promise((resolve, reject) =>{
		if (success === 'true') {
			resolve({ data: 'Successful response from the API'});
		} else {
		  reject();
		}
	});
}

module.exports = getPaymentTokenFromAPI