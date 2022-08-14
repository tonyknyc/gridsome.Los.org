export default {
    api_key: process.env.FLICKR_KEY,
    user_id: process.env.FLICKR_USERID,
    method: `flickr.photosets.getPhotos`,
    photoset_id: process.env.FLICKR_ALBUM_ID 
}