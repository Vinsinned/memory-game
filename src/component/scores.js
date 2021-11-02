import React from "react";

function Scores(props) {
  return (
		<div id="scoreboard">
			<p>Current Score: {props.score}</p>
			<p>Best score: {props.bestScore}</p>
    </div>
  );
}

export default Scores;
