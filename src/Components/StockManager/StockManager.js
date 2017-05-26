import React from 'react';
import './StockManager.css';
import TransactionEntry from "../TransactionEntry/TransactionEntry.js";
import TransactionLog from "../TransactionLog/TransactionLog.js";
import DisplaySnapshot from "../DisplaySnapshot/DisplaySnapshot.js";
import DisplayHistory from "../DisplayHistory/DisplayHistory.js";

class StockManager extends React.Component {
    constructor(props){
        super(props);
        let defaultLog = {
            msft: { 
                netQty: 200, 
                transactions: [{
                    symbol: "msft",
                    price: 63.17,
                    date: "2017-02-02",
                    quantity: 300,
                    type: "Buy"
                }, {
                    symbol: "msft",
                    price: 64.02,
                    date: "2017-02-19",
                    quantity: 100,
                    type: "Sell"
                }]
            }, 
            f: {
                netQty: 1100,
                transactions: [{
                    symbol: "f",
                    price: 12.53,
                    date: "2017-02-28",
                    quantity: 1100,
                    type: "Buy"
                }]
            },
            has: {
                netQty: 40,
                transactions: [{
                    symbol: "has",
                    price: 76.16,
                    date: "2016-10-14",
                    quantity: 40,
                    type: "Buy"
                }]
            }
        };
        let log = {}
        if (Object.keys(log).length == 0) {
            log = defaultLog;
        }
        console.log("starting log", log);
        this.state = {
            log: log,
            view: "stock"
        };
    }
    // buildSummary(log){
    //     // summary format {symbol1: [[qty, price], [qty, price]], symbol2: [[qty, price], ...], ...}
    //     let summary = {};
    //     let stockList = Object.keys(log);
    //     stockList.forEach(function(entry){
    //         currentPrice = 1; // http call for current price
    //         if (summary.hasOwnProperty(entry.symbol)){
    //             let x = [entry.quantity, entry.price, currentPrice];
    //             if (entry.type == "Buy"){
    //                 newSum = 
    //             }
    //         }
    //     })
    // }
    // addLogEntry = (newEntry) => {
    //     let updatedLog = this.state.log;
    //     updatedLog.push(newEntry);
    //     console.log(updatedLog);
    //     this.setState({log: updatedLog});
    // }
    render() {
    	return (
            <div className="App container">
                <div className="dataentry" ><TransactionEntry addLogEntry={this.addLogEntry}/></div>
                <div className="log" ><TransactionLog log={this.state.log} view={this.state.view}/></div>
                <div className="snapshot col-xs-12 col-sm-6" ><DisplaySnapshot /></div>
                <div className="history col-xs-12 col-sm-6" ><DisplayHistory /></div>
            </div>
		);
	}
}

export default StockManager;