import React from "react";
import PreloaderStyle from './PreloaderStyle.css';

let Preloader = () => {
	return(
		<div className="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}

export default Preloader;