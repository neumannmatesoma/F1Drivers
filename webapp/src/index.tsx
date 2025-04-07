// base preact stuff
import { render } from 'preact';
import Router, { Route } from "preact-router";
import { useState } from "preact/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import AddDriver from './components/AddDriver/AddDriver';
import { driversList as dl } from './data';
import "./style.css"
import DetailedDriverView from './components/DetailedView/DetailedDriverView';
import ListDriverView from './components/ListView/ListDriverView';
import DetailedCardView from './components/DetailedView/DetailedCardView';

export function App() {
	const [drivers, setDriverItems] = useState(dl);

	const addDriver = (newItem) => {
		setDriverItems((prevItems) => [
			...prevItems,
			{ ...newItem, id: prevItems.length + 1 },
		]);
	};

	const deleteDriver = (id) => {
		setDriverItems((prevItems) => prevItems.filter(driver => driver.id !== id));
	};

	const editDriver = (updatedDriver) => {
		setDriverItems((prevItems) =>
			prevItems.map((driver) =>
				driver.id === updatedDriver.id ? updatedDriver : driver
			)
		);
	};

	return (
		<div>
			<Header />
			<Nav />
			<Router>
				<Route path="/" component={ListDriverView} pilots={drivers} />
				<Route path="/drivers" component={ListDriverView} pilots={drivers} />

				<Route path="/drivers/detailed" component={DetailedCardView} pilots={drivers} onDelete={deleteDriver}/>
				<Route path="/drivers/list" component={ListDriverView} pilots={drivers} />
				
				<Route path="/drivers/:id" component={DetailedDriverView} pilots={drivers} onDelete={deleteDriver}/>
				<Route path="/drivers/:id/edit" component={AddDriver} drivers={drivers} onSave={editDriver} />

				<Route path="/drivers/new-driver" component={AddDriver} drivers={drivers} onSave={addDriver} />
			</Router>
		</div>
	);
}

render(<App />, document.getElementById('app'));
