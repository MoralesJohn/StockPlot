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
        if (log.length === 0) {
            log = defaultLog;
        }
        console.log("starting log", log);
        this.state = {log: log};
    }
    addLogEntry = (newEntry) => {
        let updatedLog = this.state.log;
        updatedLog.push(newEntry);
        console.log(updatedLog);
        this.setState({log: updatedLog});
    }
    render() {
    	return (
            <div className="App container">
                <div className="dataentry" ><TransactionEntry addLogEntry={this.addLogEntry}/></div>
                <div className="exportdata col-sm-offset-9">
                    {this.state.log.length > 0 &&
                        <div className="csvlink"><CSVLink data={this.state.log}>Download Report</CSVLink></div>
                    }
                </div>
                <div className="log" ><TransactionLog /></div>
                <div className="snapshot col-xs-12 col-sm-6" ><DisplaySnapshot /></div>
                <div className="history col-xs-12 col-sm-6" ><DisplayHistory /></div>
            </div>
		);
	}
}

export default StockManager;
