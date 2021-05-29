import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => (
	<header className={classes.Toolbar}>
		<div>menu</div>
		<Logo />
		<NavigationItems />
	</header>
);

export default Toolbar;