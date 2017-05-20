import React from 'react';
import './StockManager.css';
import TransactionEntry from "../TransactionEntry/TransactionEntry.js";
import TransactionLog from "../TransactionLog/TransactionLog.js";
import DisplaySnapshot from "../DisplaySnapshot/DisplaySnapshot.js";
import DisplayHistory from "../DisplayHistory/DisplayHistory.js";

class StockManager extends React.Component {
    constructor(props){
        super(props);
        let defaultLog = [
            {
                symbol: "msft",
                price: 63.17,
                date: "2017-02-02",
                quantity: 300,
                type: "Buy"
            },{
                symbol: "f",
                price: 12.53,
                date: "2017-02-28",
                quantity: 1100,
                type: "Buy"
            },{
                symbol: "has",
                price: 76.16,
                date: "2016-10-14",
                quantity: 40,
                type: "Buy"
            }
        ]
        let log = []
        if (log == []) {
            log = defaultLog;
        }
        this.state = {log: log};
    }
    addLogEntry = (newEntry) => {
        let updatedLog = this.state.log;
        updatedLog += newEntry;
        console.log(updatedLog);
        this.setState({log: updatedLog});
    }
    render() {
    	return (
            <div className="App container">
                <div className="dataentry" ><TransactionEntry addLogEntry={this.addLogEntry}/></div>
                <div className="log" ><TransactionLog /></div>
                <div className="snapshot col-xs-12 col-sm-6" ><DisplaySnapshot /></div>
                <div className="history col-xs-12 col-sm-6" ><DisplayHistory /></div>
            </div>
		);
	}
}

export default StockManager;
