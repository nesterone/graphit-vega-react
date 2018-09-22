import React, {Component} from 'react';

class SpecUpdater extends Component {
    componentDidMount() {
        this.props.updateSpec(this.props.chunk);
    }

    render() {
        return null
    }
}

export default SpecUpdater;
