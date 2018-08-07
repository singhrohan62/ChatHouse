import React,{ Component } from 'react';

class Chatroom extends Component {

	constructor() {
		super()

		this.state = {
			iSCharacterChosen : false
		}
	}



	render () {
		const {classes} = this.props;
 		return (
				<h3>Dfddf</h3>		
 			);
	}
}

Chatroom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chatroom);
