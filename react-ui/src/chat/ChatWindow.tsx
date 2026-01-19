import { Box, Card, Typography, Grid, Stack } from "@mui/material"
import { IncomingChatMessage } from "../types/Messages"
import { useSubscription } from "react-stomp-hooks"
import { useState } from "react"
import Item from "../components/ItemComponent"

interface opts{
    username: string
}

function ChatWindow(props: opts) {
    const [messages, setMessages] = useState<IncomingChatMessage[]>([])

    useSubscription("/topic/main", item => { 
        console.log(item.body)
        const newMessage: IncomingChatMessage = JSON.parse(item.body)
        setMessages([...messages, newMessage])
    })

    return(
        <Box component='section' sx={{ p: 2}} >
            <Box sx={{border: '1px solid'}}>
                                <Card raised={true} sx={{ minWidth: 275, minHeight: 300, maxHeight: 300, overflow: 'scroll', padding: 2 }}>
                                    {messages.length < 1 ?
                                    <Card raised={true} sx={{margin: 1, padding: 1}}>
                                        <Grid container>
                                            <Grid size={12}>
                                                <Typography textAlign={'center'}>No messages yet</Typography>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                    :
                                    messages.map((it, index) => 
                                            <Card raised={true} sx={{margin: 1, padding: 1}} key={index}>
                                            <Grid container>
                                                <Grid size={1}>
                                                    <Stack spacing={2}>
                                                        <Item value={it.username} />
                                                        <Item value={it.time} />
                                                    </Stack>
                                                </Grid>
                                                    
                                                <Grid size={11}><Typography variant="body1" sx={{p:2}}>{it.message}</Typography></Grid>
                                            </Grid>
                                            </Card>
                                    )
                                        
                                }                
                                </Card>
                                </Box>
                        </Box>
    )

}

export default ChatWindow