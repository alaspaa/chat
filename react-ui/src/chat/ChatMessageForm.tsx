import { Box, Grid, Button, TextField, Typography, Paper } from "@mui/material"
import { useStompClient } from "react-stomp-hooks"
import { useState } from "react"
import { OutgoingChatMessage } from "../types/Messages"

type opts = {
    username: string
}

function ChatMessageForm(props: opts) {
    const {username} = props
    const stompClient = useStompClient()
    const [message, setMessage] = useState('')

    const sendMessage = (formEvent: any) => {
        formEvent.preventDefault()
    if (stompClient) {
      //Send Message
      const newMessage: OutgoingChatMessage = {
        username: username,
        message: message
      }
      stompClient.publish({
        destination: "/chat/main",
        body: JSON.stringify(newMessage),
      });
      setMessage('')
      //clear field and validate before send
    } else {
      //Handle error
    }
    }

    return(
        <Paper sx={{m:2}}>
        <Box component='form' onSubmit={sendMessage}>
                    <Grid container>
                            <Grid size={9} sx={{p: 2}}>
                                    <TextField fullWidth name='messagebox' onChange={(e) => setMessage(e.target.value)} value={message}></TextField>
                            </Grid>
                            <Grid size={3} sx={{p: 2}} alignContent='center'>
                                    <Button variant='contained' color='info' fullWidth type='submit'>
                                        <Typography variant='button'>Send</Typography>
                                    </Button>
                            </Grid>
                    </Grid>
            
        </Box>
        </Paper>
    )
}

export default ChatMessageForm