import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((key) => {
		return (
			<li key={key}>
				<span style={{ textDecoration: "capitalize" }}>{key}:</span>{" "}
				{props.ingredients[key]}
			</li>
		);
	});

	return (
		<Auxiliary>
			<h3>Your Order</h3>
			<p>Burger with following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button btnType={"Danger"} clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType={"Success"} clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Auxiliary>
	);
};

export default OrderSummary;
