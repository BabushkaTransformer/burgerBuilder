import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
	return (
		<div className="App">
			<Layout>
				<Switch>
					<Route path="/" exact component={BurgerBuilder} />
					<Route path="/orders" component={Orders} />
					<Route path="/checkout" component={Checkout} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
