export default function handleResponseFromAPI(promise) {
  return promise
    // eslint-disable-next-line
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    // eslint-disable-next-line
    .catch((error) => {
      return new Error();
    });
}
