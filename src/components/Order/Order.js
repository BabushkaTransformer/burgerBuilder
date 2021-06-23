import React from "react";
import classes from "./Order.module.css";

const Order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName],
		});
	}

	const ingredientsOutput = ingredients.map((eachIng) => {
		return (
			<span
				key={eachIng.name}
				style={{
					textTransform: "capitalize",
					display: "inline-block",
					margin: "0 8px",
					border: "1px solid #ccc",
					padding: "5px",
				}}
			>
				{eachIng.name} ({eachIng.amount})
			</span>
		);
	});
	return (
		<div className={classes.Order}>
			<p>ingredients: {ingredientsOutput}</p>
			<p>
				Price: <strong>USD {Number.parseFloat(props.price)}</strong>
			</p>
		</div>
	);
};

export default Order;
