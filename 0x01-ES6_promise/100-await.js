import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.allSettled([uploadPhoto(), createUser()]);

    if (photo.status === 'fulfilled' && user.status === 'fulfilled') {
      return {
        photo: photo.value,
        user: user.value,
      };
    } return {
      photo: null,
      user: null,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
