import React, {Component} from 'react';
import PropTypes from "prop-types";
import VegaLiteContextUpdated from "./VegaLiteContextUpdated";
import {VegaLiteSpecContext} from "./VegaLite";

class Mark extends Component {
    get mark () {
        return {mark: this.props.type};
    }

    componentDidMount() {
        console.log('got mark', this.mark);
    }

    render() {
        return <VegaLiteSpecContext.Consumer>
            { ({updateSpec}) => (
                <VegaLiteContextUpdated
                    chunk={this.mark}
                    updateSpec={updateSpec}
                />)
            }
        </VegaLiteSpecContext.Consumer>;
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

export default Mark;
