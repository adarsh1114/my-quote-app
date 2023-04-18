const initialState = {
    bookmarks: [],
  };
  
  const BookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BOOKMARK":
        return {
          ...state,
          bookmarks: [...state.bookmarks, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default {BookmarkReducer};