import React from "react";

class TransactionItem extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.entry.date}</td>
                <td>{this.props.entry.symbol}</td>
                <td>{this.props.entry.type}</td>
                <td>{this.props.entry.quantity}</td>
                <td>{this.props.entry.price}</td>
            </tr>
        )
    }
}

export default TransactionItem;