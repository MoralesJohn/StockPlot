import React from "react";
import "./TransactionEntry.css";

class TransactionEntry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            symbol: "",
            date: "",
            quantity: 0,
            price: 0,
            type: "Buy"
        }
    }
    newTransaction = (e) => {
        e.preventDefault();
        let newEntry = {
            symbol: this.state.symbol.toUpperCase(),
            date: this.state.date,
            quantity: Number(this.state.quantity),
            price: Number(this.state.price),
            type: this.state.type
        }
        console.log(newEntry);
        this.setState({
            symbol: "",
            date: "",
            quantity: 0,
            price: 0,
            type: "Buy"
        })
        this.props.addLogEntry(newEntry);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        return(
            <div>
                <form className="form-inline" onSubmit={this.newTransaction} >
                    <div className="col-sm-12" >
                        <label htmlFor="symbol" >Stock:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="symbol" 
                            onChange={this.handleChange}
                            value={this.state.symbol}/>
                        <label htmlFor="quantity" >Quantity:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="quantity" 
                            onChange={this.handleChange}
                            value={this.state.quantity}
                            step="1" 
                            min="1" />
                        <label htmlFor="price" >Price:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="price" 
                            onChange={this.handleChange}
                            value={this.state.price}
                            step="0.001" 
                            min="0" />
                    </div>
                    <div className="col-sm-12" >
                        <label htmlFor="date" >Date:</label>
                        <input 
                            type="date" 
                            className="form-control" name="date" 
                            onChange={this.handleChange}
                            value={this.state.date} />
                        <label htmlFor="type" >Type:</label>
                        <select 
                            name="type" 
                            className="form-control"
                            onChange={this.handleChange}
                            value={this.state.type} >
                            <option>Buy</option>
                            <option>Sell</option>
                        </select> 
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TransactionEntry;