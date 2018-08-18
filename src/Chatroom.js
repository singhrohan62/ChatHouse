import React from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem  from '@material-ui/core/ListItem';
import List from '@material-ui/core/List'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import blue from '@material-ui/core/colors/blue';
import classNames from 'classnames';

import FullScreen from './Fullscreen';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
   margin: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
});

const ChatWindow = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 420px;
  box-sizing: border-box;
`
const ChatPanel = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px ;
  z-index: 1;
  color: #fafafa !important;
  border-bottom: 1px solid;
`

const Title = styled.p`
  text-align: center;
  font-size: 24px;
`

const NoDots = styled.div`
  hr {
    visibility: hidden;
  }
`

const OutputText = styled.div`
  white-space: normal !important;
  word-break: break-all !important;
  overflow: initial !important;
  width: 100%;
  height: auto !important;
  color: #fafafa !important;
`

const InputPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  align-self: center;
  border-top: 1px solid #fafafa;
`

const ChatroomImage = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
`

const Scrollable = styled.div`
  height: 100%;
  overflow: auto;
`

 class Chatroom extends React.Component {
  constructor(props, context) {
    super(props, context)

    const { chatHistory } = props

    this.state = {
      chatHistory,
      input: ''
    }

    this.onInput = this.onInput.bind(this)
    this.onSendMessage = this.onSendMessage.bind(this)
    this.onMessageReceived = this.onMessageReceived.bind(this)
    this.updateChatHistory = this.updateChatHistory.bind(this)
    this.scrollChatToBottom = this.scrollChatToBottom.bind(this)
  }

  componentDidMount() {
    this.props.registerHandler(this.onMessageReceived)
    this.scrollChatToBottom()
  }

  componentDidUpdate() {
    this.scrollChatToBottom()
  }

  componentWillUnmount() {
    this.props.unregisterHandler()
  }

  onInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  onSendMessage() {
    if (!this.state.input)
      return

    this.props.onSendMessage(this.state.input, (err) => {
      if (err)
        return console.error(err)

      return this.setState({ input: '' })
    })
  }

  onMessageReceived(entry) {
    console.log('onMessageReceived:', entry)
    this.updateChatHistory(entry)
  }

  updateChatHistory(entry) {
    this.setState({ chatHistory: this.state.chatHistory.concat(entry) })
  }

  scrollChatToBottom() {
    this.panel.scrollTo(0, this.panel.scrollHeight)
  }

  render() {
    const {classes} = this.props;
    return (
      <div style={{ height: '100%' }}>
        <ChatWindow>
          <Header>
            <Title>
              { this.props.chatroom.name }
            </Title>
            <Button
              variant="contained"
              color="primary"
              children={
                <ListItemIcon
                  style={{ fontSize: 24 }}><SendIcon/></ListItemIcon>
                  }
              onClick={this.props.onLeave}
              className={classNames(classes.margin, classes.cssRoot)}>
              Custom CSS
            </Button>
          </Header>
          <ChatroomImage
            src={this.props.chatroom.image}
            alt=""
          />
          <ChatPanel>
            <Scrollable innerRef={(panel) => { this.panel = panel; }}>
              <List>
                {
                  this.state.chatHistory.map(
                    ({ user, message, event }, i) => [
                      <NoDots>
                        <ListItem
                          key={i}
                          style={{ color: '#fafafa' }}
                          children={<Avatar src={user.image} />}
                          primaryText={`${user.name} ${event || ''}`}
                          secondaryText={
                            message &&
                            <OutputText>
                              { message }
                            </OutputText>
                          }
                        />
                      </NoDots>,
                      <Divider inset />
                    ]
                  )
                }
              </List>
            </Scrollable>
            <InputPanel>
              <TextField
                textareaStyle={{ color: '#fafafa' }}
                hintStyle={{ color: '#fafafa' }}
                floatingLabelStyle={{ color: '#fafafa' }}
                hintText="Enter a message."
                floatingLabelText="Enter a message."
                multiLine
                rows={4}
                rowsMax={4}
                onChange={this.onInput}
                value={this.state.input}
                onKeyPress={e => (e.key === 'Enter' ? this.onSendMessage() : null)}
              />
              <Button
                onClick={this.onSendMessage}
                style={{ marginLeft: 20 }}
              >
                <ListItemIcon>
                  <ChatBubbleOutlineIcon style={{ fontSize: 32 }} />
                </ListItemIcon>
              </Button>
            </InputPanel>
          </ChatPanel>
          <FullScreen
            opacity={0.6}
            background="#111111"
          />
        </ChatWindow>
      </div>
    )
  }
}

 Chatroom.propTypes = {
    classes :  PropTypes.object.isRequired,
  }

export default withStyles(styles)(Chatroom);