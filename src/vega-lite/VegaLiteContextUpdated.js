import React, {Component} from 'react';

class VegaLiteContextUpdated extends Component {
    componentDidMount() {
        this.props.updateSpec(this.props.chunk);
    }

    render() {
        return null
    }
}

export default VegaLiteContextUpdated;
