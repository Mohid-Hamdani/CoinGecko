//import logo from './logo.svg';
import './App.css';
import { Tabs, Checkbox } from 'antd';
import Bitcoin from './components/Newcomp'
import DataTable from './components/Tabs';
import DataTable1 from './components/Tab1';
import L_Table from './components/Leverage';
import { Button } from 'antd';
import AboutBinance from './components/AboutBinance';
import Piechart1 from './components/Stat'
import Tscore from './components/T_score';
import New from './components/New';
import { Badge } from 'antd';



function App() {

  const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  
  
  
  return (
          <div className="main-body">
            <Bitcoin/>
          <div className="border">
        {/* Main Tab */}
          <div className="Tabs1">
          <Tabs className="Tabs" defaultActiveKey="1" onChange={callback}>
            <TabPane className="Tabpane" tab="Spot" key="1">
              {/* Sub Tab 1 */}
            <div className="s-tabs1">
              <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane className="first" tab="Market" key="1">
                    <div className="middle">
                  <div className='left-container'>
                    <div className='content'>
                    <div className="price">
                      <span className="value">$29,562,512,634</span><br/>
                      <span className="trading">24h Trading Volume</span>
                    </div>
                    <div className="coins">
                    <span className="value">326</span><br/>
                    <span className="trading">coins</span>
                    </div><div className="pairs">
                    <span className="value">1189</span><br/>
                    <span className="trading">pairs</span>
                    </div>
                </div>

              </div>
              <div className='right-container'>
              <div className="checkbox">
                  <Checkbox onChange={onChange}>Display Unconverted Data</Checkbox>
                  <Checkbox onChange={onChange}>Display Market Cap</Checkbox><br/>
                  <input className="input" type="text"placeholder="Search.."></input>
            </div>


              </div>
          </div>
          <DataTable/>
          <div className="More">
          <Button className="button2" style={{backgroundColor:'#8dc647', color:'white', borderBlockColor:'#4eaf0a'}}>Show More</Button>
          </div>
          <div className="heading">
            <h2>Unverified Tickers</h2>
          </div>
          <DataTable1/>
                    </TabPane>
                    
                    <TabPane className="first" tab="Leverage ETFs" key="2">
                      <div className="none">
                      </div>
                    <L_Table/>
                    </TabPane>
                    <TabPane className="first" tab="About Binance" key="3">
                      <AboutBinance/>
                    </TabPane>
                    <TabPane  className="first"tab="Statistics" key="4">
                      <Piechart1/>
                    </TabPane>
                    
                     <TabPane className="first" tab="Beam Updates" key="5">
                    </TabPane>
                    <TabPane className="first"  tab="Trust Score" key="6">
                      <Tscore/>
                    </TabPane>
              </Tabs>
              </div>
            </TabPane>
            <TabPane  className="Tabpane" tab="Derivatives" key="2">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Markets" key="1">
                  <New/>
                </TabPane>
                <TabPane tab="Leverage ETFs" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="About Binance(Futures)" key="3">
                  Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Statistics" key="4">
                      
                </TabPane>
            </Tabs>
            </TabPane>
            <TabPane  className="Tabpane" tab="Exchange Tokens" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          </div>
          </div>
         
          </div>
    
    
  );
}

export default App;
