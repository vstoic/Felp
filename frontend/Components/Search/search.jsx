import React from "react";
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: this.props.business,
            searchInput: "",
            results: [],
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    };
    handleUpdate(e) {
        let restultsArr = [];
        this.setState({ searchInput: e.currentTarget.value })
        if (e.currentTarget.value) {
            Object.values(this.props.businesses).forEach(business => {
                let businessName = business.name;
                if (businessName.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                    restultsArr.push(business)
                }
        })

        this.setState({ results: restultsArr })
        };
    };
    componentDidUpdate(prevProps) {
        if (prevProps.location != this.props.location) {
            this.setState({ 
            searchInput: "",
            results: []
            })
        };   
    };

    // dropDown() {
    //     document.getElementById("searched-results").classList.toggle("show");
    //     window.onclick = function(e) {
    //     if (!e.target.matches(".search-input")) {
    //       var dropdowns = document.getElementsByClassName("search-results");
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains("show")) {
    //           openDropdown.classList.remove("show");
    //         }
    //       }
    //     }
    //     }
    // }

    toggleDropDown() {
        document.getElementById("searched-results").classList.toggle("show");
    }

    render() {
        // console.log(this.state.results)
        return (
          <div className="search-main-container">
            <input
              type="text"
              placeholder="Search Felp"
              value={this.state.searchInput}
              onChange={this.handleUpdate}
              onClick={() => this.toggleDropDown()}
              className="search-input"
            />
            <div className="search-results" id="searched-results">
              {this.state.results.map((searchedResults) => {
                return (
                  <Link
                    to={`/business/${searchedResults.id}`}
                    key={searchedResults.id}
                  >
                    <p className="result-name">{searchedResults.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        );
    };
};
export default Search;