import React from "react";
import loader from "../assets/ZZ5H.gif";

export default function Loader() {
	return (
		<div className="container my-5 text-center">
			<img
				src={loader}
				alt="Loading..."
				width="50"
				and
				height="50"
			/>
		</div>
	);
}
