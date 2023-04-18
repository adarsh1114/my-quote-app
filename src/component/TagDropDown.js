import React, { useEffect, useState } from "react";
import axios from "axios";

const TagDropdown = ({ onSelectTag }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get("https://api.quotable.io/random");
      const adviceString = response.data.slip.advice;
      const tagArray = adviceString.split(" ");
      setTags(tagArray);
    };

    fetchTags();
  }, []);
  const handleSelectTag = (event) => {
    onSelectTag(event.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectTag}>
        <option value="">Select a tag</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagDropdown;
