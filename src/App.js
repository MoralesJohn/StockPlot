import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import StockManager from "./Components/StockManager/StockManager.js"

class App extends React.Component {
    render() {
    	return (
			<BrowserRouter>
				<div className="App container">
                    <StockManager />
                </div>
			</BrowserRouter>
		);
	}
}

export default App;
