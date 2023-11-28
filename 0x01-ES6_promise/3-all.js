import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();
  return Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      const { firstName, lastName } = userResult;
      console.log(`${photoResult.body} ${firstName} ${lastName}`);
    })
    // eslint-disable-next-line
    .catch((error) => {
      console.log('Signup system offline');
    });
}
