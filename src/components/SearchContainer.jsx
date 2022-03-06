import React, { useState, useEffect, memo, createRef } from "react";
import "../styles/SearchContainer.scss";
import { useNavigate } from "react-router-dom";
import { allCategories } from "../helpers/promises";
import useLocalStorage from "../hooks/useLocalStorage";

const key = "searches";
const SearchContainer = () => {
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useLocalStorage(key, []);

  const input = createRef();
  useEffect(() => input.current.focus(), []);

  let navigate = useNavigate();
  const redirectToSearch = () => {
    setSearchHistory([...searchHistory, search]);
    console.log("search " + search);
    if (search == "") {
      navigate("/");
    } else {
      navigate(`/search/${search}`);
    }
  };

  const handleInputChange = (val)=>{
    setSearch(val)
  }

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      redirectToSearch()
    }
  }

  return (
    <div className="SearchContainer">
      <div className="search-content">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
        <div className="search-bar">
          <input
            ref={input}
            list="categories"
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={handleOnKeyDown}
            placeholder="Category, Author, Title..."
          />
          <datalist id="categories">
            {[...searchHistory, ...allCategories].map((cat) => (
              <option value={cat} key={`cat${cat.id}`}></option>
            ))}
          </datalist>
          <button className="btn-search" onClick={() => redirectToSearch()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchContainer);
