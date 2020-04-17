import React, { useState } from 'react';
import { startGame } from '../actions';
import './styles/StartMenu.style.css';

function MainScreen(props) {
	const { dispatch } = props;
	const [rows, setRows] = useState(3);
	const [columns, setColumns] = useState(3);

	function handleStartGame() {
		const rowsInt = parseInt(rows);
		const columnsInt = parseInt(columns);
		if (rowsInt <= 0 || rowsInt > 10 || columnsInt <= 0 || columnsInt > 10) {
			alert('Rows or columns should be between 1 and 10.');
			return;
		}
		dispatch(startGame(rowsInt, columnsInt));
	}

	return (
		<div className="start-menu">
			<div className="start-menu__header">
				<div>dots-and-boxes</div>
			</div>
			<div className="start-menu__input">
				<label>Rows</label>
				<input type="input" value={rows} onChange={e => setRows(e.target.value)} />
			</div>
			<div className="start-menu__input">
				<label>Columns</label>
				<input type="input" value={columns} onChange={e => setColumns(e.target.value)} />
			</div>
			<div className="start-menu__button">
				<button onTouchStart={handleStartGame} onClick={handleStartGame}>
					START GAME
				</button>
			</div>
		</div>
	);
}

export default MainScreen;
