import styles from 'styled-components';

export default styles.div`
	position : absolute;
	background : ${props => props.background};
	opacity : ${props => props.opacity};

`