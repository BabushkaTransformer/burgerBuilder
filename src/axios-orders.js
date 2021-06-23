import axios from "axios";

const instance = axios.create({
	baseURL: "https://burgerbuilder-104c8-default-rtdb.firebaseio.com/",
});

export default instance;
