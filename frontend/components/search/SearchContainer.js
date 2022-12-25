import { connect } from "react-redux";
import { fetchBusinesses } from "../../Util/business_util";
import Search from "./Search";

const mapStateToProps = (state, ownProps) => {
    return {
        // currentBusiness: state.entities.businesses[ownProps.match.params.businessId],
        businesses: state.entities.businesses,
        test: ownProps
    }
}

// find current business and businesse from state

const mapDispatchToProps = dispatch => {
    return {
        fetchBusinesses: () => dispatch(fetchBusinesses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);