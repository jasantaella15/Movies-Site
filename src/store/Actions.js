//Actions 
export const FETCH_VIDEO_LIST_REQUEST = "FETCH_VIDEO_LIST_REQUEST";
export const FETCH_VIDEO_LIST_SUCCESS = "FETCH_VIDEO_LIST_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const FETCH_VIDEO_REQUEST = "FETCH_VIDEO_REQUEST";
export const FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS";


//Actions creators
export const receivedVideoList = data => ({ type: FETCH_VIDEO_LIST_SUCCESS, payload: data });
export const requestVideoList = () => ({ type: FETCH_VIDEO_LIST_REQUEST });

export const receivedVideo = data => ({ type: FETCH_VIDEO_SUCCESS, payload: data });
export const requestVideo = () => ({ type: FETCH_VIDEO_REQUEST });

export const requestError = () => ({ type: FETCH_FAILURE });


