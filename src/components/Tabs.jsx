import { React,Component } from 'react';
import { Table } from 'antd';

const data = [
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
  {
    number:'1',
    key: '1',
    Coin: 'Bitcoin',
    Pair: 'XRP/USDT',
    Price: '$1.02',
    Spread: '0.02%',
    Depth_plus:'$3,532,585' ,
    Depth_minus:'$3,486,258',
    h_Volume:'$652,498,877',
    Volume:'3.12%',
    L_Traded:'Recently',
    T_Score:'-',
  },
 
];

class DataTable extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '#',
        dataIndex: 'number',
        key: '#',
        sorter: (a, b) => a.number - b.number,
        sortOrder: sortedInfo.columnKey === 'number' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Coin',
        dataIndex: 'Coin',
        key: 'Coin',
        sorter: (a, b) => a.Coin - b.Coin,
        sortOrder: sortedInfo.columnKey === 'Coin' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Pair',
        dataIndex: 'Pair',
        key: 'Pair',
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'Pair' && sortedInfo.order,
        ellipsis: true,
      },
      {title:'Price',
       dataIndex: 'Price',
       key:'Price' ,
       sorter: (a, b) => a.Price - b.Price,
       sortOrder: sortedInfo.columnKey === 'Price' && sortedInfo.order,
       ellipsis: true,
    },
    {title:'Spread',
    dataIndex: 'Spread',
    key:'Spread',
    sorter: (a, b) => a.Spread - b.Spread,
    sortOrder: sortedInfo.columnKey === 'Spread' && sortedInfo.order,
    ellipsis: true,
 },
 {title:'+2%Depth',
 dataIndex: 'Depth_plus',
 key:'Depth_plus' ,
 sorter: (a, b) => a.Depth_plus - b.Depth_plus,
 sortOrder: sortedInfo.columnKey === 'Depth_plus' && sortedInfo.order,
 ellipsis: true,
},
 {title:'-2%Depth',
dataIndex: 'Depth_minus',
key:'Depth_minus' ,
sorter: (a, b) => a.Depth_minus - b.Depth_minus,
sortOrder: sortedInfo.columnKey === 'Depth_minus' && sortedInfo.order,
ellipsis: true,
},
 {title:'24h Volume',
dataIndex: 'h_Volume',
key:'h_Volume' ,
sorter: (a, b) => a.h_Volume - b.h_Volume,
sortOrder: sortedInfo.columnKey === 'h_Volume' && sortedInfo.order,
ellipsis: true,
},
 {title:'Volume%',
dataIndex: 'Volume',
key:'Volume' ,
sorter: (a, b) => a.Volume - b.Volume,
sortOrder: sortedInfo.columnKey === 'Volume%' && sortedInfo.order,
ellipsis: true,
},
 {title:'Last Traded',
dataIndex: 'L_Traded',
key:'L_Traded' ,
sorter: (a, b) => a.L_Traded - b.L_Traded,
sortOrder: sortedInfo.columnKey === 'L_Traded' && sortedInfo.order,
ellipsis: true,
},
 {title:'Trust Score',
dataIndex: 'T_Score',
key:'T_Score' ,
sorter: (a, b) => a.T_Score - b.T_Score,
sortOrder: sortedInfo.columnKey === 'T_Score' && sortedInfo.order,
ellipsis: true,
}
    ];
    return (
      <>
       
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </>
    );
  }
}
export default DataTable;
