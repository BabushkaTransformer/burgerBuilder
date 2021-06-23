import React from "react";

import classes from "./SideDrawer.module.css";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Logo from "../../../hoc/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Auxiliary>
			<Backdrop show={props.open} close={props.drawerClose} />
			<div className={attachedClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxiliary>
	);
};

export default SideDrawer;
