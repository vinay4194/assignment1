import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { WordContext } from "./WordContext";

const Details = () => {
	//get the dynamic parameter from url
	const url = useParams();
	const { data } = useContext(WordContext);
	//find the matching item.
	const history = useHistory();

	const wordData = data.find((item) => {
		if (item.word === url.word) {
			return item;
		}
	});

	let meanings = [];
	meanings = wordData.meanings;

	return (
		<div className="mainContainer">
			<div className="detailsContainer">
				<button
					className="button"
					onClick={() => {
						history.goBack();
					}}
				>
					Go Back
				</button>
				<div>
					<h2>{wordData.word}</h2>
				</div>
				<div className="details">
					<div>
						<h4>Definitions:</h4>
						{meanings.map((meaning) => {
							let synonyms = [];
							synonyms = meaning.definitions[0].synonyms;

							return (
								<div className="detailsContainer">
									<div>
										<h5>{meaning.partOfSpeech}</h5>
										<p className="meaning">{meaning.definitions[0].definition}</p>

										<p className="example">{meaning.definitions[0].example}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
