import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Quote from "./component/quote";
import TagDropdown from "./component/TagDropDown";
import Bookmark from "./component/Bookmark";
import './App.css';

const App = () => {
  const [tag, setTag] = useState("");

  const handleSelectTag = (selectedTag) => {
    setTag(selectedTag);
  };

  return (
    <Router>
      <nav>
        <ul className="app">
          <li className="card">
            <Link to="/">Home</Link>
          </li>
          <li className="card">
            <Link to="/Bookmark">Bookmarks</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Quote tag={tag} />
          <TagDropdown onSelectTag={handleSelectTag} />
        </Route>
        <Route path="/Bookmarks">
          <Bookmark />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
