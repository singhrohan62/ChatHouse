import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Card from  '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import styles from 'styled-components';

import chatrooms from './config/chatrooms'

const style = theme => ({
	root : {
		maxWidth : 600,
	},
	cardStyle : {
		display : 'flex',
		alignItems: 'center'
	},
	  card: {
	    maxWidth: 345,
	  },
	  media: {
	    height: 0,
	    paddingTop: '56.25%', // 16:9
	  }
});

const Wrapper = styles.div`
	cursor : pointer;
`



class ChatroomPreview extends React.Component{


	componentWillMount () {
		chatrooms.forEach(c => console.log(c.image))
	}
	render()
	{
		const {classes} = this.props;

		return (
				<div>
				<Wrapper>
					<Paper className={classes.root} elevation={3}>
					
					{chatrooms.map(c => (
							<Card className={classes.card} key={c.name}>
							<CardMedia
						          className={classes.media}
						          image={c.image}
						          title="Contemplative Reptile"
						        />				
								<CardContent>
									<Typography gutterBottom variant="headline" component="h2">{c.name}</Typography>
          						</CardContent>
          					</Card>
						))}										   
					</Paper>
				</Wrapper>
				</div>
			)
	}
}


ChatroomPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(ChatroomPreview);
