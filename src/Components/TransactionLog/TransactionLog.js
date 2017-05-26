import React from "react";
import "./TransactionLog.css";
import Reactable from "reactable";

class TransactionLog extends React.Component {
    render(){
        if (this.props.view === "stock") {
            let Table = Reactable.Table; 
            return(
                <div className="col-xs-12" >
                    <Table className="table" sortable={true} data={this.props.logArr} />
                    {/*
                    <div id="table"></div>
                            <Thead>
                                    <Th>Date</Th>
                                    <Th>Stock</Th>
                                    <Th>Buy/Sell</Th>
                                    <Th>Qty</Th>
                                    <Th>Price</Th>
                            </Thead>
                    </div>
                    */}
                </div>
            )
        } else {
            return (<h2>else</h2>);
        }
    }
}

export default TransactionLog;