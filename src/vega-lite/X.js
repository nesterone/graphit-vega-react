import React, {Component} from 'react';
import PropTypes from "prop-types";

class X extends Component {
    componentDidMount () {
        console.log('got X', {x: {type: this.props.type, field: this.props.filed}});
    }
    render() {
        return null
    }
}

X.propTypes = {
    filed: PropTypes.string,
    type: PropTypes.string
};


export default X;
