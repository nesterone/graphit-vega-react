import React, {Component} from 'react';
import PropTypes from "prop-types";

class SpecMerge extends Component {
    componentDidMount() {
        this.props.merge(this.props.chunk);
    }

    render() {
        return null
    }
}

SpecMerge.propTypes = {
    merge: PropTypes.func,
    chunk: PropTypes.object
};

export default SpecMerge;
