import React, {Component} from 'react';
import PropTypes from "prop-types";

class Y extends Component {
    componentDidMount () {
        console.log('got Y', {x: {type: this.props.type, field: this.props.filed}});
    }
    render() {
        return null
    }
}

Y.propTypes = {
    filed: PropTypes.string,
    type: PropTypes.string
};


export default Y;
