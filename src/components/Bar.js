import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../constants';
import './styles/Bar.style.css';

const { DEFAULT_BAR_COLOR, PRIMARY_BAR_COLOR, SECONDARY_BAR_COLOR, PRIMARY_BOX_COLOR, SECONDARY_BOX_COLOR } = Constants.colors;

function Bar(props) {
	const { orientation, type, currentPlayer } = props;
	const styles = {};
	switch (type) {
		case 0:
			styles.backgroundColor = DEFAULT_BAR_COLOR;
			break;
		case 1:
			styles.backgroundColor = PRIMARY_BAR_COLOR;
			break;
		case 2:
			styles.backgroundColor = SECONDARY_BAR_COLOR;
			break;
		default:
			styles.display = 'none';
	}
	const isVerticalBar = orientation === 'vertical';
	const className = isVerticalBar ? 'vertical-bar' : 'horizontal-bar';
	return <div className={className} style={styles} onClick={props.onBarClick} onMouseEnter={(e) => hover(e, type, currentPlayer)}
	onMouseLeave={(e) => unhover(e, type)}/>;
}

function hover(e, type, currentPlayer) {
	if (type !== 0) return;
	let currentcolor = currentPlayer === 1 ? PRIMARY_BOX_COLOR : SECONDARY_BOX_COLOR;
    e.target.style.background = currentcolor;
}
function unhover(e, type) {
	if (type !== 0) return;
    e.target.style.background = DEFAULT_BAR_COLOR;
}

Bar.propTypes = {
	type: PropTypes.any,
	orientation: PropTypes.string,
	currentPlayer: PropTypes.number.isRequired,
};

Bar.defaultProps = {
	type: undefined,
	orientation: 'horizontal',
	currentPlayer: 1,
};

export default Bar;
