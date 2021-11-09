import React from "react";
import profilePicture from "../../../static/assets/images/auth/login.jpg";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				Placeholder content for bio information in right side column
			</div>
		</div>
	);
}
