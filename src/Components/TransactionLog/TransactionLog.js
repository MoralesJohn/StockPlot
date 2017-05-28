import React from "react";
import "./TransactionLog.css";
import Reactable from "reactable";

class TransactionLog extends React.Component {
    render(){
        if (this.props.view === "stock") {
            let Table = Reactable.Table,
                Thead = Reactable.Thead,
                Th = Reactable.Th;
            return(
                <div className="col-xs-12" >
                    <Table
                        className="table"
                        id="log-table"
                        sortable={true}
                        data={this.props.logArr}
                        itemsPerPage={4}
                        pageButtonLimit={5}
                        defaultSort={{column: "date", direction: "asc"}}
                        filterable={["symbol", "date", "type", "price", "quantity"]}
                        filterPlaceholder="Search"
                        >
                        <Thead>
                            <Th column="date">
                                <strong className="date-header">Date</strong>
                            </Th>
                            <Th column="symbol">
                                <strong className="date-header">Stock</strong>
                            </Th>
                            <Th column="type">
                                <strong className="date-header">Buy/Sell</strong>
                            </Th>
                            <Th column="quantity">
                                <strong className="date-header">Quantity</strong>
                            </Th>
                            <Th column="price">
                                <strong className="date-header">Price</strong>
                            </Th>
                        </Thead>
                    </Table>
                </div>
            )
        } else {
            return (<h2>else</h2>);
        }
    }
}

export default TransactionLog;