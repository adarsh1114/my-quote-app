const bookmarks = [];

  export const FETCH_BOOKMARKS_REQUEST = "FETCH_BOOKMARKS_REQUEST";
  export const FETCH_BOOKMARKS_SUCCESS = "FETCH_BOOKMARKS_SUCCESS";
  export const FETCH_BOOKMARKS_FAILURE = "FETCH_BOOKMARKS_FAILURE";
  
 
  export const fetchBookmarksRequest = () => {
    return {
      type: FETCH_BOOKMARKS_REQUEST,
    };
  };
  
  export const fetchBookmarksSuccess = (bookmarks) => {
    return {
      type: FETCH_BOOKMARKS_SUCCESS,
      payload: bookmarks,
    };
  };
  
  export const fetchBookmarksFailure = (error) => {
    return {
      type: FETCH_BOOKMARKS_FAILURE,
      payload: error,
    };
  };
  

  export const fetchBookmarks = () => {
  
    return (dispatch) => {
      dispatch(fetchBookmarksRequest());
      
      setTimeout(() => {
        dispatch(fetchBookmarksSuccess(bookmarks));
      }, 1000);
    };
  };
  
















