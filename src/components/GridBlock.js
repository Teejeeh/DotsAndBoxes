import React from 'react';
import PropTypes from 'prop-types';
import Dot from '../components/Dot';
import Box from '../components/Box';
import Bar from '../components/Bar';
import { updateGrid } from '../actions';
import './styles/GridBlock.style.css';

function GridBlock(props) {
	const { block, dispatch, currentPlayer } = props;

	function handleBarClick(row, column, type) {
		dispatch(updateGrid(row, column, type));
	}

	const { row, column, top, left, completedBy } = block;
	return (
		<div className="grid__basic-block">
			<div className="grid__basic-block__dot-and-bar">
				<Dot />
				<Bar
					type={top}
					currentPlayer={currentPlayer}
					orientation="horizontal"
					onBarClick={() => handleBarClick(row, column, 'top')}
				/>
			</div>
			<div className="grid__basic-block__bar-and-box">
				<Bar
					type={left}
					currentPlayer={currentPlayer}
					orientation="vertical"
					onBarClick={() => handleBarClick(row, column, 'left')}
				/>
				<Box type={completedBy} text={props.text} />
			</div>
		</div>
	);
}

GridBlock.propTypes = {
	block: PropTypes.object.isRequired,
	currentPlayer: PropTypes.number.isRequired,
	dispatch: PropTypes.func.isRequired,
};

GridBlock.defaultProps = {
	block: {},
	currentPlayer: 1,
	dispatch: () => {},
};

export default GridBlock;
