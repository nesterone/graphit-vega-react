import React from 'react';
import Data from "../vega-lite/Data";
import Mark from "../vega-lite/Mark";
import Encoding from "../vega-lite/Encoding";
import X from "../vega-lite/X";
import Y from "../vega-lite/Y";
import VegaLite from "../vega-lite/VegaLite";

const SimpleBarChart = (props) => (
    <VegaLite>
        <Data values={props.data}/>
        <Mark type='bar'/>
        <Encoding>
            <X field='a' type='ordinal'/>
            <Y field='b' type='quantitative'/>
        </Encoding>
    </VegaLite>
);

export default SimpleBarChart;
