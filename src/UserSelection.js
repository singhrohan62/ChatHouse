import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar';

import Loader from './Loader'

export default class UserSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      availableUsers: null
    }

    this.handleSelection = this.handleSelection.bind(this)
    this.renderUserItems = this.renderUserItems.bind(this)

    this.props.getAvailableUsers((err, availableUsers) => {
      this.setState({ availableUsers })
    })
  }

  handleSelection(selectedUser) {
    this.props.register(selectedUser.name)
  }

  renderUserItems() {
    return this.state.availableUsers.map(user => (
      <ListItem
        onClick={() => this.handleSelection(user)}
        primaryText={user.name}
        secondaryText={user.statusText}
        key={user.name}
        leftAvatar={<Avatar src={user.image} alt="" />}
      />
    ))
  }

  render() {
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
              <List>
                { this.renderUserItems() }
              </List>
            )
        }
      </Dialog>
    )
  }
}
