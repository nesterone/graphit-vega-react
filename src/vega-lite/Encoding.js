import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

class Encoding extends Component {
    render() {
        return <Fragment>
            {this.props.children}
        </Fragment>
    }

}

Encoding.propTypes = {
    children: PropTypes.node
};

export default Encoding;
