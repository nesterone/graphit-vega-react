import React from 'react';
import merge from 'lodash.merge'

export const VegaLiteSpecContext = React.createContext();

export default class VegaLite extends React.Component {
    constructor(props) {
        super(props);

        this.spec = {
            $schema: "https://vega.github.io/schema/vega-lite/v2.json"
        };

        this.updateSpec = (chunk) => {
            merge(this.spec, chunk);
            console.log('change spec', this.spec);
        };

        this.vegaContext = {
            spec: this.spec,
            updateSpec: this.updateSpec
        };

        console.log('prep context', this.vegaContext);
    }

    componentDidMount () {
        // taddaa spec is ready here
        console.log('init vega lite', this.spec);
    }

    render() {
        console.log('before render ', this.vegaContext);
        console.log('before render ', this.spec);
        return (
            <VegaLiteSpecContext.Provider value={this.vegaContext}>
                {this.props.children}
            </VegaLiteSpecContext.Provider>
        );
    }
}
