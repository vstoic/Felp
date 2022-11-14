import React from "react";
import {withRouter, Redirect, Link} from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            searchInput: "",
            results: [],
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    };

    handleUpdate(e) {
        let restultsArr = [];
        this.setState({ searchInput: e.target.value })
        if (e.currentTarget.value) {
            object.values(this.props.business).forEach(business => {
                let businessName = businessName.toLowerCase();
                if (business.includes(e.currentTarget.value.toLowerCase())) {
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

    render() {
        // console.log(this.props.businesses)
        return (
            <div className="search-main-container">
                <input type="text" placeholder="SearchBar YUR" 
                value={this.state.searchInput} 
                onChange={this.handleUpdate} 
                className="search-input"/>
                <div className="search-results">
                    {this.state.results.map(searchedResults => {
                        return <link to={`/businesses/${searchedResults.id}`} key={searchedResults.id}>
                            <div className="result-name">
                                {searchedResults.name}
                            </div>
                        </link>
                    })}
                </div>
            </div>
        )
    };
};
export default Search;