import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
// import axios from "../../axios-orders";

const INGREDIENTS_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 1,
			bacon: 1,
			cheese: 1,
			meat: 1,
		},
		totalPrice: 4,
		purchaseable: true,
		purchasing: false,
		loading: false,
	};

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map((key) => ingredients[key])
			.reduce((acc, el) => acc + el, 0);
		this.setState({ purchaseable: sum > 0 });
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};
	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENTS_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	};

	purchaseHandler = () => {
		this.setState(() => {
			return { purchasing: !this.state.purchasing };
		});
	};

	purchaseContinueHandler = () => {
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(
				encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i])
			);
		}
		queryParams.push("price=" + this.state.totalPrice);
		const queryString = queryParams.join("&");
		this.props.history.push({
			pathname: "/checkout",
			search: "?" + queryString,
		});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = (
			<OrderSummary
				ingredients={this.state.ingredients}
				price={this.state.totalPrice}
				purchaseCancelled={this.purchaseHandler}
				purchaseContinued={this.purchaseContinueHandler}
			/>
		);
		if (this.state.loading) {
			orderSummary = <Spinner />;
		}
		return (
			<Auxiliary>
				<Modal show={this.state.purchasing} modalClose={this.purchaseHandler}>
					{orderSummary}
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientAdded={this.addIngredientHandler}
					ingredientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					purchase={this.state.purchaseable}
					price={this.state.totalPrice}
					ordered={this.purchaseHandler}
				/>
			</Auxiliary>
		);
	}
}

export default BurgerBuilder;
