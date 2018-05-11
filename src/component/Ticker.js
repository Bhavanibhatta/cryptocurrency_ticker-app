import React, {Component} from 'react';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';
import './Ticker.css';


class Ticker extends Component{
  constructor(props){
        super(props);
     this.state ={
       data : [
         {
          id:"bitcoin",
          name:"Bitcoin",
          symbol:"BTC",
          price_usd: 1,
          percent_change_1h: 0,
          percent_change_24h:0,
          percent_change_7d: 0,
        },
        {
          id: "litecoin",
          name:"Litecoin",
          symbol:"LTC",
          price_usd: 1,
          percent_change_1h: "0",
          percent_change_24h:"0",
          percent_change_7d: "0",
        },
        {
          id: "stellar",
          name:"Stellar",
          symbol:"STLR",
          price_usd: 1,
          percent_change_1h: 1,
          percent_change_24h:0,
          percent_change_7d: 0,
        },
        {
          id: "ripple",
          name:"Ripple",
          symbol:"RPL",
          price_usd: 1,
          percent_change_1h: 0,
          percent_change_24h:0,
          percent_change_7d: 0,
        }
       ]
     };

  }

   fetchCryptocurrencydata(){
     axios.get("https://api.coinmarketcap.com/v1/ticker/")
     .then(response =>{
       var wanted=["bitcoin","litecoin","stellar","ripple"];
          var result= response.data.filter(currency =>wanted.includes(currency.id));
         this.setState({data:result});
     })
     .catch(err =>console.log(err));
   }
   componentDidMount() {
     this.fetchCryptocurrencydata();
     this.interval = setInterval(() => this.fetchCryptocurrencydata(), 20 * 1000);
 }

  render(){
    var ticker = this.state.data.map((currency)=>
        <Cryptocurrency data={currency} key={currency.id} />
  );

    return (
   <div className="ticker-container">
    <ul className="ticker">{ticker}</ul>
    <h4>The content on the page refreshes for every 20 seconds. These prices are displayed as per "coinmarketcap". </h4>
    </div>
 );
  }
}
export default Ticker;
