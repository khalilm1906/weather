import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


export default (props) => {
  const data = props.data;
  const units = props.units;
  const color = props.color;

  return (
    <div>
      <Sparklines height={120} width={180} data={data} units={units}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{units === '℉' ? kelvinToFahrenheit(data) : average(data)} {units}</div>
    </div>
  )
}

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function kelvinToFahrenheit(data) {
  return _.round(average(data) * 9 / 5 - 459.67);
}
