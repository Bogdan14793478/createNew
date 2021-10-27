import {
  GET_ALL_POST,
  CREATE_NEW_POST,
  DELETE_POST,
  ERROR_DELETE_POST,
  GET_ALL_POST_FAILURE,
  ERROR_CREATE_NEW_POST,
  SET_CURRENT_PAGE,
  SET_PER_PAGE,
} from "../actions/types"
/* eslint-disable no-case-declarations */
const initial = {
  posts: [],
  error: [],
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
}

export const userPosts = (state = initial, action) => {
  console.log(action.payload, " action.type")
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        totalCount: action.payload.totalCount,
      }
    case GET_ALL_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    case CREATE_NEW_POST:
      return { ...state, posts: [...state.posts, action.payload.data] }
    case ERROR_CREATE_NEW_POST:
      return {
        ...state,
        error: action.payload.error,
      }
    // case "UPDATE_POST":
    //   return { ...state, post: action.payload } ??
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload.data._id),
      }
    case ERROR_DELETE_POST:
      return {
        ...state,
        error: action.payload.error,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      }
    default:
      return state
  }
}
