import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	const handleClick = color => {
		setColor(color);
	};
	return (
		<div>
			<div id="traffic-top" />
			<div id="container">
				<div
					onClick={e => handleClick("red")}
					className={
						color === "red" ? "red-light selected" : "red-light"
					}
				/>
				<div
					onClick={e => handleClick("yellow")}
					className={
						color === "yellow"
							? "yellow-light selected"
							: "yellow-light"
					}
				/>
				<div
					onClick={e => handleClick("green")}
					className={
						color === "green"
							? "green-light selected"
							: "green-light"
					}
				/>
			</div>
		</div>
	);
}
