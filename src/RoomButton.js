import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ButtonBase from '@material-ui/core/ButtonBase';

import Chatroom from './Chatroom';
import App from './App';
import bakwas from './bakwas'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100vw',
  },

  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});


 class ChatroomCard extends Component {

 	constructor() {
 		super()

 		this.state = {
 			isButtonClicked : false,
 		}
 	}

 	renderChatroom  = () => {
 		return (
 				<div><bakwas/></div>
 			)
 	}

 	renderChatroomOptions = (classes) => {
 		return (
 				<div className={classes.root} style={{marginTop:20+'px'}}>
			      
			      <ButtonBase
			          focusRipple
			          key={this.props.title}
			          className={classes.image}
			          focusVisibleClassName={classes.focusVisible}
			          style={{
			            width: '100%',
			          }}
			          onClick = { () => this.setState({isButtonClicked :  true})}
			        >
			          <span
			            className={classes.imageSrc}
			            style={{
			              backgroundImage: `url(${this.props.image})`,
			            }}
			          />
			          <span className={classes.imageBackdrop} />
			          <span className={classes.imageButton}>
			            <Typography
			              component="span"
			              variant="subheading"
			              color="inherit"
			              className={classes.imageTitle}
			            >
			              {this.props.title}
			              <span className={classes.imageMarked} />
			            </Typography>
			          </span>
			        </ButtonBase>
			        
			    </div>
 			)
 	}

 	render () {
 		const {classes} = this.props;

 		if(!this.state.isButtonClicked)
 		{
 			return this.renderChatroomOptions(classes);
 		}

 		else 
 		{
 			return this.renderChatroom();
 		}
 	}
			
}
ChatroomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatroomCard);
