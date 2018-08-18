import styles from 'styled-components';

export default styles.div`
	position : absolute;
	width : 100vw;
	background : ${props => props.background};
	opacity : ${props => props.opacity};
	background-repeat : repeat-y;
`

