import React from "react";
import { Link } from 'react-router-dom';
import business_index_container from '../business/business_index_container';

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
    render() {
        // console.log(this.state.results)
        return (
            <div className="search-main-container">
                <input type="text" placeholder="Search Felp" 
                value={this.state.searchInput} 
                onChange={this.handleUpdate} 
                className="search-input"/>
                <Link className="search-button" to={{pathname:"/business", state: this.state.results}}>🔍</Link>
                <div className="search-results">
                    {this.state.results.map(searchedResults => {
                        return <Link to={`/business/${searchedResults.id}`} key={searchedResults.id}>
                            <p className="result-name">
                                {searchedResults.name}
                            </p>
                        </Link> 
                    })}
                </div>
            </div>
        )
    };
};
export default Search;