import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

const Item = (props) => {
	const data = props.word;
	let meanings = [];
	let synonyms = [];
	meanings = data.meanings;

	synonyms = meanings[0].definitions[0].synonyms;

	return (
		<div className="mainContaniner">
			<div className="itemContainer">
				<h2>{data.word}</h2>

				<div className="itemInfo">
					<h4>{data.phonetics[0].text}</h4>
					<ReactAudioPlayer src={data.phonetics[0].audio} controls />
				</div>
				<div className="itemInfo">
					<h4>{data.phonetics[1].text}</h4>
					<ReactAudioPlayer src={data.phonetics[1].audio} controls />
				</div>

				<Link className="button" to={`/details/${data.word}`}>
					More Info
				</Link>
			</div>
			<div className="detailsSyn">
				<h4>Synonyms:-</h4>
				{synonyms.map((element) => {
					return (
						<div className="synonyms">
							<p>{element} | </p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Item;
