import { QuestionCircleOutlined ,CheckOutlined} from '@ant-design/icons';
import { Progress , Badge} from 'antd';

function Tscore(){
    return(
        <>
        <div className="Tscore-body">
            <div className="t-element1">
                <div className="tsub-element1">
                <div className="b-trust">
                    <div className="b-head">
                <span><b>Binance Trust Score</b></span><br />
                </div>
                <span className="ten">10</span>
                <hr className="line"></hr>
                </div>
                <div className="new-table">
                <div className="firstnew">
                <div className="new1">
                    <span>Liquidity<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>Scale<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>Cybersecurity<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>API-coverage<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>Team<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>Incident<QuestionCircleOutlined /></span>
                </div>
                <div className="new1">
                    <span>Total</span>
                </div>
                </div>
                <div className="secondnew">
                    <div>
                        <span className="s-value1">4.0</span>
                    </div>
                    <div>
                        <span className="s-value2">1.0</span>
                    </div> <div>
                        <span className="s-value3">2.0</span>
                    </div> <div>
                        <span className="s-value4">1.0</span>
                    </div>
                    <div>
                        <span className="s-value5">1.0</span>
                    </div>
                    <div>
                        <span className="s-value6">1.0</span>
                    </div>
                    
                    <div >
                        <span className="s-value7">10/10</span>
                    </div>
                </div>
            </div>
                
            </div>
            <div className="tsub-element2">
                <span className="text2">    
                * This is a tabled form for the breakdown of Trust Score. For full methodology please refer to our
                <a className="Anchor" href="https://blog.coingecko.com/trust-score-explained/" target="_blank">blog post</a> 
                </span>
            </div>
            </div>
            <div className="t-element2">
                <div className="t-heading">
                    <h4 >Liquidity</h4>
                </div>
                <div className="liquidity">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="table-head">Reported Trading Volume</div>
                            </td>
                            <td>
                                <div className='liquidity-value'>
                                $27,725,957,517
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-head">Normalized Trading Volume</div>
                            </td>
                            <td>
                                <div className='liquidity-value'>
                                $27,725,957,517
                                </div>
                            </td>
                        </tr><tr>
                            <td>
                                <div className="table-head">Reported-Normalized Volume Ratio</div>
                            </td>
                            <td>
                                <div className='liquidity-value'>
                                1.0
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-head">Average Bid-Ask Spread</div>
                            </td>
                            <td>
                                <div className='liquidity-value'>
                                0.308%
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="table-head">Trading Pair Total Trust Score</div>
                            </td>
                            <td >
                                <div className="ant-progress-line">
                                < Progress percent={97} status='success'/>
                                
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className="t-element3">
            <div className="t-heading">
                    <h4 >Scale</h4>
                </div>
                <div className="liquidity">
                    <tbody>
                        <thead>
                            <tr>
                                <td>
                                <div className="table-head">Normalized Volume Percentile</div>
                                </td>
                                <td>
                                    <div>
                                    <span className='liquidity-value1'>100<sup>th</sup></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="table-head">Combined Orderbook Percentile</div>
                                </td>
                                <td>
                                    <div className='liquidity-value1'>
                                    99<sup>th</sup>
                                    </div>
                                </td>
                            </tr>
                        
                        </thead>
                    </tbody>

                </div>

            </div>
            
            <div className="t-element4">
            <div className="t-heading">
                    <h4 >Cybersecurity<QuestionCircleOutlined  style={{ fontSize: '18px', color: 'gray',paddingLeft:'2%' }} /></h4>
                </div>
                <div className='muted'>
                    <small>Last Updated: 2021-02-16</small><br />
                    <small>Data provided by <a className="Anchor" href="https://bit.ly/31r8HL9">cer.live</a></small>
                </div>
                <div className="rating">
                <img width="240px" class="darkhide" src="https://static.coingecko.com/s/cer_live_3stars-bbaf0992e7c49f90c45abaeda159a322281e3c86b4e48818867ff2aff3b291c2.svg"/><QuestionCircleOutlined  style={{ fontSize: '18px', color: 'gray',paddingLeft:'2%' }} />
                </div>
                <div className="liquidity1">
                    <tbody>
                        <thead>
                            <tr>
                                <td>
                                <div className="cyber-element">Penetration Test</div>
                                </td>
                                <td>
                                    <div className='liquidity-value2'>
                                    <CheckOutlined  style={{  color: ' #4eaf0a'}} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="cyber-element">Proof of Funds</div>
                                </td>
                                <td>
                                    <div className='liquidity-value2'>
                                    <CheckOutlined  style={{  color: ' #4eaf0a'}} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="cyber-element">Bug Bounty</div>
                                </td>
                                <td>
                                    <div className='liquidity-value2'>
                                    <CheckOutlined  style={{  color: ' #4eaf0a'}} />
                                    </div>
                                </td>
                            </tr>
                        
                        </thead>
                    </tbody>

                </div>
            </div>
            <div className="t-element5">
            <div className="t-heading">
                    <h4 >API Coverage</h4>
                </div>
                <div className="t-heading2">
                    <span>Grade:A</span>
                </div>
                <div className="API-table">
                <div className="first-API">
                <div className="API-first1">
                    <span></span>
                </div> 
                <div className="API-first1">
                    <span>Tickers Data</span>
                </div>
                <div className="API-first1">
                    <span>Historical Trades Data</span>
                </div>
                <div className="API-first1">
                    <span>Orderbook Data</span>
                </div>
                <div className="API-first1">
                    <span>Trading via API</span>
                </div>
                <div className="API-first1">
                    <span>Candlestick</span>
                </div>
                <div className="API-first1">
                    <span>Websocket</span>
                </div>
                <div className="new1">
                    <span>Public Documentation</span>
                </div>
                </div>
                <div className="second-API">
                    <div>
                        <span className="second-API1"><b>Avaibility</b></span>
                    </div>
                    <div>
                        <span className="second-API2"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div>
                    <div>
                        <span className="second-API3"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div> <div>
                        <span className="second-API4"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div> <div>
                        <span className="second-API5"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div>
                    <div>
                        <span className="second-API6"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div>
                    <div>
                        <span className="second-API7"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div>
                    
                    <div >
                        <span className="s-value8"><CheckOutlined style={{color:'#4eaf0a'}}/></span>
                    </div>
                </div>
            </div>
                </div>

                <div className="t-element6">
                <div className="t-heading">
                    <h4 >Team</h4>
                </div>
                <div className="liquidity">
                    <tbody>
                        <thead>
                            <tr>
                                <td>
                                <div className="table-head">Team is public </div>
                                </td>
                                <td>
                                    <div className='liquidity-value2'>
                                    <CheckOutlined  style={{  color: ' #4eaf0a'}} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <div className="table-head">Team Profile Page</div>
                                </td>
                                <td>
                                    <div className='liquidity-value2'>
                                    <CheckOutlined  style={{  color: ' #4eaf0a'}} />
                                    </div>
                                </td>
                            </tr>
                           
                        
                        </thead>
                    </tbody>

                </div>
            </div>
            <div className="t-element7">
            <div className="t-heading">
                    <h4 >Public Incidents</h4>
                </div>
            </div>

                <div className="t-element8">
                <div className="t-heading">
                <div className="flex">
                    <h4 >Regulatory Compliance</h4>
                    <a class="mr-2" target="_blank" href="https://www.coinfirm.com/">
                        <img src="https://static.coingecko.com/s/coinfirm-a067db7bdb032af7c20000b10a350e963ad059ffc482297fcf1bb08ff94b457e.png"/>

                    </a>
                    <a target="_blank" rel="nofollow noopener" href="https://amlt.coinfirm.com/">
                        <img src="https://static.coingecko.com/s/amlt-1e1e85b25385ebd965353a7c703a0ee4cf9f59c41de7a524c338413bc22c699c.png"/>
                    </a>
                    </div>
                </div>
                <div className="regular-table">
                <div className="first-regular">
                <div className="regular-first1">
                    <span></span>
                </div> 
                <div className="regular-first1">
                    <span>License & Authorization<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>Sanctions<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>Senior Public Figure<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>Jurisdiction Risks<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>KYC Procedures<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>Negative News<QuestionCircleOutlined /></span>
                </div>
                <div className="regular-first1">
                    <span>AML<QuestionCircleOutlined /></span>
                </div>
                </div>
                <div className="second-regular">
                    <div>
                        <span className="second-regular1"><b>Risk</b></span>
                    </div>
                    <div>
                        <span className="second-regular2"><Badge status="error" text="High" style={{color:'red'}} /></span>
                    </div>
                    <div>
                        <span className="second-regular3"><Badge status="success" text="Low" style={{color:'green'}} /></span>
                    </div> <div>
                        <span className="second-regular4"><Badge status="success" text="Low" style={{color:'green'}} /></span>
                    </div> <div>
                        <span className="second-regular5"><Badge status="success" text="Low" style={{color:'green'}} /></span>
                    </div>
                    <div>
                        <span className="second-regular6"><Badge status="error" text="High" style={{color:'red'}} /></span>
                    </div>
                    <div>
                        <span className="second-regular7"><Badge status="warning" text="Medium" style={{color:'orange'}} /></span>
                    </div>
                    
                    <div >
                        <span className="second-regular8"><Badge status="success" text="Low" style={{color:'green'}} /></span>
                    </div>
                </div>
                </div>
            </div>
                </div>
                    
               
               
            
        
        </>
    );
}
export default Tscore;