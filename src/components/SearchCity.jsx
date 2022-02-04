import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

export function SearchCity({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const navigate = useNavigate();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    //  These gives us new arrays depending on what we have been searching for

    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    // Cleans the search filter if there is no text in the "search box"

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter.sort((a, b) => a.city.localeCompare(b.city)));
    }
  };

  // This method also cleans the filter but does that through the x icon
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div id="search">
      <div className="wrapper">
        <FormControl
          type="text"
          className="searchInputs"
          placeholder="Ange en stad..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseButton onClick={clearInput} className="clearBtn" />
          )}
        </div>
      </div>

      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div
                className="dataItem"
                key={key}
                target="_blank"
                onClick={() => navigate(`/${value.city}`)}
              >
                <p>{value.city}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
