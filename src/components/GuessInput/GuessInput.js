import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
	const [guess, setGuess] = React.useState("");
	function handleSubmit(event) {
		event.preventDefault();

		handleSubmitGuess(guess);

		setGuess("");
	}

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				disabled={gameStatus !== "running"}
				minLength={5}
				maxLength={5}
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				id="guess-input"
				type="text"
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
