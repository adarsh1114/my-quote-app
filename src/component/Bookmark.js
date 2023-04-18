import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookmarks} from "./redux/bookmarkActions";
import "./bookmark.css";

const Bookmark = () => {
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((bookmark, index) => (
          <div key={index}>
            <h2>{bookmark.content}</h2>
            <p> {bookmark.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmark;
