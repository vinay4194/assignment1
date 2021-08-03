import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import { WordContext } from "./components/WordContext";
import NavBar from "./components/NavBar";

const App = () => {
	let [data, setData] = useState();
	useEffect(() => {
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/hello")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);
	return (
		<>
			<Router>
				<div className="container">
					<NavBar />
				</div>
				<WordContext.Provider value={{ data }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/details/:word" component={Details} />
					</Switch>
				</WordContext.Provider>
			</Router>
		</>
	);
};

export default App;
