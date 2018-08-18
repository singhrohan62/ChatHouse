import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types'
import Loader from './Loader'
import { withStyles } from '@material-ui/core/styles'

 const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
});

 class UserSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      availableUsers: null
    }

    this.handleSelection = this.handleSelection.bind(this)
    this.renderUserItems = this.renderUserItems.bind(this)

    this.props.getAvailableUsers((err, availableUsers) => {
      this.setState({ availableUsers })
      console.log(availableUsers)
    })
  }

  handleSelection(selectedUser) {
    this.props.register(selectedUser.name)
  }

  renderUserItems() {
    return this.state.availableUsers.map(user => (
      <ListItem onClick={() => this.handleSelection(user)} key={user.name}>
        <ListItemText primary={user.name} secondary={user.statusText}/>
          <Avatar src={user.image} alt={user.name} />
      </ListItem>
    ))
  }

  render() {

    const {classes} = this.props;
    const actions = [
      <Button
        label="Cancel"
        primary
        onClick={this.props.close}
      />
    ]

    return (
      
      <Dialog
        title="Pick your character."
        actions={actions}
        modal={false}
        open
        onRequestClose={this.props.close}
      >
        {
          !this.state.availableUsers
            ? <Loader />
            : (
              <div className = {classes.root}>
              <List>
                { this.renderUserItems() }
              </List>
              </div>
            )
        }
      </Dialog>
      
    )
  }
}

  UserSelection.propTypes = {
    classes :  PropTypes.object.isRequired,
  }

export default withStyles(styles)(UserSelection);