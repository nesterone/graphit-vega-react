import React from 'react';

export default class VegaLite extends React.Component {

    componentDidMount () {
        console.log('init vega lite');
    }

    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}
