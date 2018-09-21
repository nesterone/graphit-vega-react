import React, {Component} from 'react';
import PropTypes from "prop-types";

class Mark extends Component {
    componentDidMount() {
        console.log('got mark', {mark: {type: this.props.type}});
    }

    render() {
        return null;
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

export default Mark;
