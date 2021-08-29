import '../App.css';
import { Button} from 'antd';

 const Bitcoin = () => {
    return(
        <div className ='main'>
            <div className='element-1'>
            <a className="Anchor" href="#">Exchanges (Spot)</a>
          <span className="Binance">Binance</span>
            </div>
            <div className ='element-2'>
                <div className='logo'>
                    <div className="B_img" >
                        <img  alt="Binance exchange" width= "50px"
                        height= "50px" src="https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250"></img>
                    <div className="inline"> 
                        <p className="B_tag">Binance</p>
                        
                        <p className="center">centralized</p></div> 
                        </div>
                </div>
                <div className='score'>
                    <div className='score-no'>
                    <span className="num">10</span>
                   
                    <div className='trust'>
                    <span className="trust-scr">Trust Score</span>
                    </div>
                    </div>
               
                <div className="trad">
                    <div className='start-trd'>
                    <Button className="button" style={{backgroundColor:'#8dc647', color:'white'}}>Start Trading</Button>
                    </div>
                    <div className='affiliate'>
                    <a  className="Anchor1" href="#">Affiliate disclousers</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Bitcoin;