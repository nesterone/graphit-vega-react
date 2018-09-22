import React from 'react';
import merge from 'lodash.merge'
import Vega from 'react-vega';
import { compile } from 'vega-lite';


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

        this.state = {
            spec: null
        };

        console.log('prep context', this.vegaContext);
    }

    componentDidMount () {
        // taddaa spec is ready here
        console.log('vega-lite spec', this.spec);
        let compiledSpec = compile(this.spec);
        console.log('compiled spec', compiledSpec);
        this.setState(()=> ({
            spec: compiledSpec
        }))
    }

    render() {
        console.log('before render ', this.vegaContext);
        console.log('before render ', this.spec);
        const specToRender = this.state.spec;
        return (
            <VegaLiteSpecContext.Provider value={this.vegaContext}>
                {this.props.children}
                {specToRender && <Vega spec={specToRender} /> }
            </VegaLiteSpecContext.Provider>
        );
    }
}
