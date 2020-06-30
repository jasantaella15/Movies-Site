import {FETCH_VIDEO_LIST_SUCCESS, FETCH_VIDEO_SUCCESS} from './Actions'

//Reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case FETCH_VIDEO_LIST_SUCCESS:
        return { ...state, videoList: action.payload }

        case FETCH_VIDEO_SUCCESS:
          return {...state, video: action.payload }
      default:
        return state;
    }
  }