import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import PieChart from "highcharts-react-official";

const options = {
  title:{
    text:'Volume by Market Pair'
  },
  chart: {
    type: "pie",
    height:"300px"
  },
  accessibility: {
    announceNewData: {
        enabled: true
    },
    point: {
        valueSuffix: '%'
    }
},
plotOptions: {
  series: {
      dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%'
      }
  }
},
tooltip: {
  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'BTC/USDT',
        y: 14.3,
        color:'blue',
    }, {
        name: 'ETH/USDT',
        y: 11.8,
        color:'gray',
    }, {
        name: 'BNB/USDT',
        y: 10.85,
        color:'green',
    }, {
        name: 'XRP/USDT',
        y: 4.67,
        color:'orange',
    }, {
        name: 'DOGE/USDT',
        y: 4.18,
        color:'violet',
    }, {
        name: 'BTC/USDT',
        y: 1.64,
        color:'red',
    }, {
        name: 'BNDC/USDT',
        y: 1.6,
        color:'yellow',
    }, {
        name: 'CTH/USDTQ',
        y: 1.2,
        color:'purple',
    }, {
        name: 'ETH/USDT',
        y: 2.61
    }]
}]
};

class Piechart1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="stat-e1">
        <h2>Exchange Trade Volume Distribution (24h)</h2>
      </div>
      <div className="charts">
        <div className="chart1">
        <PieChart highcharts={Highcharts} options={options} />
        </div>
        <div className="chart2">
        <PieChart highcharts={Highcharts} options={options} />
        </div>
      </div>
      </>
    );
  }
}

export default Piechart1;
