import React, { useContext } from "react";
import Item from "./Item";
import { WordContext } from "./WordContext";

const Home = () => {
	const { data } = useContext(WordContext);

	if (!data) {
		return null;
	}
	if (data) {
		return (
			<>
				{/* <h1 className="heading">Assignment</h1> */}
				<div className="item">
					{data.map((wordData) => (
						<Item word={wordData} />
					))}
				</div>
			</>
		);
	}
};

export default Home;
