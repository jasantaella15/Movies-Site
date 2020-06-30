import {requestVideoList, requestError, receivedVideoList} from '../store/Actions';
import {requestVideo, receivedVideo} from '../store/Actions';
import "isomorphic-fetch";

export const fetchVideosList = () => (dispatch, getState) => {
  dispatch(requestVideoList());
  return fetch("http://localhost:3000/api/videosList")
    .then(response => response.json())
    .then(videos => dispatch(receivedVideoList(videos)))
    .catch(err => dispatch(requestError(err)));
};

export const fetchVideoById = (id) => (dispatch, getState) => {
  dispatch(requestVideo());
  return fetch(`http://localhost:3000/api/video/${id}`)
    .then(response => response.json())
    .then(video => dispatch(receivedVideo(video)))
    .catch(err => dispatch(requestError(err)));
};

