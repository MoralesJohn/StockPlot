import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import TransactionEntry from "./Components/TransactionEntry/TransactionEntry.js";
import TransactionLog from "./Components/TransactionLog/TransactionLog.js";
import DisplaySnapshot from "./Components/DisplaySnapshot/DisplaySnapshot.js";
import DisplayHistory from "./Components/DisplayHistory/DisplayHistory.js";

class App extends React.Component {
    render() {
    	return (
			<BrowserRouter>
				<div className="App container">
					<div className="dataentry" ><TransactionEntry /></div>
					<div className="log" ><TransactionLog /></div>
					<div className="snapshot col-xs-12 col-sm-6" ><DisplaySnapshot /></div>
					<div className="history col-xs-12 col-sm-6" ><DisplayHistory /></div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
