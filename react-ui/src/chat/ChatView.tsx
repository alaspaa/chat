import { Grid, Box, Card, TextField, Button } from "@mui/material"
import { StompSessionProvider } from "react-stomp-hooks"
import ChatWindow from "./ChatWindow"
import ChatMessageForm from "./ChatMessageForm"
import { useState } from "react"

function ChatView() {

        const [username, setUsername] = useState<string>('')
        const [formUsername, setFormUsername] = useState<string>('')

        const selectUsername = (event: any)=> {
                event.preventDefault()
                setUsername(formUsername)
        }

        var headers = {
                login: 'mylogin',
                passcode: 'mypasscode',
                // additional header
                'client-id': 'my-client-id'
        };

        return(
        <>
                {
                        username ? 
                        <StompSessionProvider url={"ws://127.0.0.1:8080/chapp"} connectHeaders={headers}>
                                <Grid container>
                                        <Grid size={12}>
                                                <ChatWindow username={username}></ChatWindow>
                                        </Grid>
                                        <Grid size={12}>
                                                <ChatMessageForm username={username}></ChatMessageForm>
                                        </Grid>
                                </Grid>
                        </StompSessionProvider>
                        :
                        
                        <Box component='section'>
                                <Card raised={true} sx={{p: 2, m: 2}}>
                                        <Grid container component='form' onSubmit={selectUsername} spacing={2}>
                                                <Grid size={12}><TextField fullWidth onChange={(e)=>setFormUsername(e.target.value)}></TextField></Grid>
                                                <Grid size={3}><Button type='submit' variant='contained' color='secondary'>OK</Button></Grid>
                                        </Grid>
                                        
                                </Card>
                        </Box>
                        
                }
                
        </>
        )
}

export default ChatView