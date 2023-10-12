// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";

// const Search = (props) => {
//   const [searchInput, setSearchInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [showResults, setShowResults] = useState(false); // Added state for dropdown visibility
//   const searchInputRef = useRef(null);

//   const handleUpdate = (e) => {
//     const inputValue = e.currentTarget.value;
//     setSearchInput(inputValue);
//     const resultsArray = [];

//     if (inputValue) {
//       Object.values(props.businesses).forEach((business) => {
//         const businessName = business.name;
//         if (businessName.toLowerCase().includes(inputValue.toLowerCase())) {
//           resultsArray.push(business);
//         }
//       });

//       setResults(resultsArray);
//       setShowResults(true);
//     } else {
//       setResults([]);
//     }
//     setShowResults(!!resultsArray.length); // Hide dropdown when input is empty
//   };

//   const toggleDropDown = () => {
//     if (results.length > 0) { // Check if there are search results
//       setShowResults(!showResults);
//     }
//   };

//   const handleOutsideClick = (e) => {
//     if (
//       searchInputRef.current &&
//       !searchInputRef.current.contains(e.target)
//     ) {
//       setShowResults(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   useEffect(() => {
//     if (props.location !== props.prevLocation) {
//       setSearchInput("");
//       setResults([]);
//       setShowResults(false);
//     }
//   }, [props.location, props.prevLocation]);

//   return (
//     <div className="search-main-container" ref={searchInputRef}>
//       <input
//         type="text"
//         placeholder="Search Felp"
//         value={searchInput}
//         onChange={handleUpdate}
//         onClick={toggleDropDown}
//         className="search-input"
//       />
//       <div
//         className={`search-results ${showResults ? "show" : ""}`}
//         id="searched-results"
//       >
//         {results.map((searchedResult) => (
//           <li key={searchedResult.id}>
//             <Link to={`/business/${searchedResult.id}`}>
//               <p className="result-name">{searchedResult.name}</p>
//             </Link>
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // Added state for dropdown visibility
  const searchInputRef = useRef(null);

  const handleUpdate = (e) => {
    const inputValue = e.currentTarget.value;
    setSearchInput(inputValue);
    const resultsArray = [];

    if (inputValue) {
      Object.values(props.businesses).forEach((business) => {
        const businessName = business.name;
        if (businessName.toLowerCase().includes(inputValue.toLowerCase())) {
          resultsArray.push(business);
        }
      });

      setResults(resultsArray);
      setShowResults(true);
    } else {
      setResults([]);
      // setShowResults(false); // Hide dropdown when input is empty
    }
  };

  const toggleDropDown = () => {
    if (searchInput.length === 0) { // Check if there are search input is empty dont show menu
      setShowResults(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(e.target)
    ) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (props.location !== props.prevLocation) {
      setSearchInput("");
      setResults([]);
      setShowResults(false);
    }
  }, [props.location, props.prevLocation]);

  return (
    <div className="search-main-container" ref={searchInputRef}>
      <input
        type="text"
        placeholder="Search Felp"
        value={searchInput}
        onChange={handleUpdate}
        onClick={toggleDropDown}
        className="search-input"
      />
      <div
        className={`search-results ${showResults ? "show" : ""}`}
        id="searched-results"
      >
        {results.length > 0 ? (
          results.map((searchedResult) => (
            <li key={searchedResult.id}>
              <Link to={`/business/${searchedResult.id}`} className="result-link">
                <img
                  className="search-result-photo"
                  src={searchedResult.photo_urls[0]}
                  alt=""
                />
                <p className="result-name">{searchedResult.name}</p>
              </Link>
            </li>
          ))
        ) : (
          
            <p className="no-result">No Results...</p>
          
        )}
      </div>
    </div>
  );
};

export default Search;