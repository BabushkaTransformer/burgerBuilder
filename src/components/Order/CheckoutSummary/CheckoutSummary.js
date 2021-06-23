import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckouSummary.module.css";

const CheckoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1 className={classes.Title}>we find you</h1>
			<div>
				<Burger ingredients={props.ingredients} />
				<Button btnType="Danger" clicked={props.checkoutCancelled}>
					CANCEL
				</Button>
				<Button btnType="Success" clicked={props.checkoutContinued}>
					CONTINUE
				</Button>
			</div>
		</div>
	);
};

export default CheckoutSummary;
