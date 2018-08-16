import React from 'react';
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

const Wrapper = styled.div`
  cursor: pointer;
`

const getCardTitleStyle = () => ({
  display: 'flex',
  alignItems: 'center'
})

export default ({ chatroom, onEnter }) => (
  <Paper
    style={{ maxWidth: 600, marginBottom: 40 }}
    zDepth={5}
  >
    <Wrapper onClick={onEnter}>
      <Card>
        <CardMedia>
          <img height="100%" src={chatroom.image} alt="" />
          <Typography gutterBottom variant="headline" component="h2">
            {chatroom.name}
          </Typography>
        </CardMedia>
      </Card>
    </Wrapper>
  </Paper>
)
