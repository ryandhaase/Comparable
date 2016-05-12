// create bubble chart passing skills from offerContainer
import React, { Component } from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#FFAB6E", "#E8718A", "#E8718A", "#6492E8", "#65FFDB", "#90FF75", "#FFE26E", {color: "#1060D6", text: 'Positive', textColor: "#ffffff"}
];
var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

export default class BubbleChart extends Component {
  render() {
    const skills = this.props.skill.map((obj) =>{
      var myObj = {
        _id: Math.floor(Math.random() * Math.random() * Math.random() * 100000000),
        value: (obj.count + 5),
        displayText: obj.skill,
        colorValue: Math.random(),
      }
      console.log(myObj)
      return myObj;
    }).filter((obj) => {
      if (obj.displayText !== 'San Francisco' && obj.value > 6) {
        return obj;
      }
    });
    return (
      <div>
        <ReactBubbleChart
          className="my-cool-chart"
          colorLegend={colorLegend}
          data={skills}
          selectedColor="#737373"
          selectedTextColor="#d9d9d9"
          fixedDomain={{min: -1, max: 1}}
          legend={true}
          legendSpacing={0}
        />
      </div>
    );
  }
}
