import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Data extends Component {
    componentDidMount() {
        console.log('got data part', {data: {values: this.props.values}});
    }

    render() {
        return null;
    }
}

Data.propTypes = {
    values: PropTypes.array
};

export default Data;
