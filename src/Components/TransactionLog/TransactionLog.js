import React from "react";
import "./TransactionLog.css";
import TransactionItem from "./TransactionItem.js";

class TransactionLog extends React.Component {
    render(){
        if (this.props.view == "stock") {
            let log = this.props.log;
            let stockList = Object.keys(log);
            let logArr = [];
            stockList.forEach(function(stock) {
                console.log(stock);
                
                let transaction = log[stock].transactions.map((entry, ndx) => {
                    return <TransactionItem entry={entry} key={ndx} />
                });
                logArr.push(transaction);
            })
            
            return(
                <div className="col-xs-12" >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Stock</th>
                                    <th>Buy/Sell</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logArr}
                            </tbody>
                        </table>
                    </div>
            )
        } else {
            return (<h2>else</h2>);
        }
    }
}

export default TransactionLog;