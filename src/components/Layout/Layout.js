import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		return (
			<Auxiliary>
				<Toolbar drawerToggle={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					drawerClose={this.sideDrawerClosedHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Auxiliary>
		);
	}
}

export default Layout;
