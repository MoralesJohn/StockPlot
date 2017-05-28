import React from 'react';
import './StockManager.css';
import TransactionEntry from "../TransactionEntry/TransactionEntry.js";
import TransactionLog from "../TransactionLog/TransactionLog.js";
import DisplaySnapshot from "../DisplaySnapshot/DisplaySnapshot.js";
import DisplayHistory from "../DisplayHistory/DisplayHistory.js";
import {CSVLink} from 'react-csv';

class StockManager extends React.Component {
    constructor(props){
        super(props);
        let defaultLog = {
            MSFT: { 
                netQty: 200, 
                transactions: [{
                    symbol: "MSFT",
                    price: 63.17,
                    date: "2017-02-02",
                    quantity: 300,
                    type: "Buy"
                }, {
                    symbol: "MSFT",
                    price: 64.02,
                    date: "2017-02-19",
                    quantity: 100,
                    type: "Sell"
                }]
            }, 
            F: {
                netQty: 1100,
                transactions: [{
                    symbol: "F",
                    price: 12.53,
                    date: "2017-02-28",
                    quantity: 1100,
                    type: "Buy"
                }]
            },
            HAS: {
                netQty: 40,
                transactions: [{
                    symbol: "HAS",
                    price: 76.16,
                    date: "2016-10-14",
                    quantity: 40,
                    type: "Buy"
                }]
            }
        };
        let log = {}
        if (Object.keys(log).length === 0) {
            log = defaultLog;
        }
        console.log("starting log", log);
        this.state = {
            log: log,
            view: "stock"
        }

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
    addLogEntry = (newEntry) => {
        let updatedLog = this.state.log;
        let stockList = Object.keys(updatedLog);
        if (stockList.indexOf(newEntry.symbol) >= 0) {
            if (newEntry.type === "Buy") {
                updatedLog[newEntry.symbol].netQty += newEntry.quantity;
                updatedLog[newEntry.symbol].transactions.push(newEntry);
                this.setState({log: updatedLog});
            } else {
                if (newEntry.quantity < updatedLog[newEntry.symbol].netQty) {
                    updatedLog[newEntry.symbol].netQty -= newEntry.quantity;
                    updatedLog[newEntry.symbol].transactions.push(newEntry);
                    this.setState({log: updatedLog});
                } else {
                    console.log(newEntry.quantity, updatedLog[newEntry.symbol].netQty)
                    alert("You cannot sell more than you own");
                    return
                }
            }
        } else {
            if (newEntry.type === "Sell") {
                alert("You cannot sell stock you do not own");
                return
            } else {
                updatedLog[newEntry.symbol] = {
                    netQty: newEntry.quantity,
                    transactions: [newEntry]
                }
            }
            this.setState({log: updatedLog})
        }

    }
    render() {
        let logArr = [];
        if (Object.keys(this.state.log).length > 0) {
            Object.keys(this.state.log).forEach((symbol) => {
                this.state.log[symbol].transactions.forEach((transaction) => {
                    logArr.push(transaction);
                });
            });
        }

        console.log("logArr", logArr);
    	return (
            <div className="App container">
                <div className="dataentry" ><TransactionEntry addLogEntry={this.addLogEntry}/></div>
                <div className="exportdata col-md-2 col-md-offset-9">
                     {logArr.length > 0 &&
                         <div className="csvlink"><CSVLink data={logArr}>Download Report</CSVLink></div>
                     }
                </div>
                <div className="log" ><TransactionLog log={this.state.log} logArr={logArr} view={this.state.view}/></div>
                <div className="snapshot col-xs-12 col-sm-6" ><DisplaySnapshot /></div>
                <div className="history col-xs-12 col-sm-6" ><DisplayHistory /></div>
            </div>
		);
	}
}

export default StockManager;
