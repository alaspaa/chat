import { Stack, TextField, Typography, Paper, Box, Button, Grid } from '@mui/material'
import { useState } from 'react'

type opts = {
    setToken: (token:any)=>void
}

function LoginForm(props:opts) {

    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const submitLogin = async (e: any) => {
        e.preventDefault()
        const url = "http://localhost:8000/realms/chat/protocol/openid-connect/token"

        try {
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'password',
                    username: username!,
                    password: password!,
                    client_id: 'chat-front', // Replace with your actual client ID
                    client_secret: '5A2IFECnNuVwSUybUikZBbAwBtqn7C67', // Replace if confidential client
                    scope: 'openid', // Optional, adjust as needed
                }),
            });

            console.log(response.status)
            const token = await response.json()
            console.log(await token)
            props.setToken(token)
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <>
            <Grid container spacing={4}>
                        <Grid size={3}></Grid>
                        <Grid size={6}>
                            
                <Box component='form' onSubmit={submitLogin} sx={{pt:2}}>
                    
                    <Stack spacing={1}>
                        <Paper>
                            <TextField fullWidth required name='username' variant='outlined' label='Username' onChange={(e)=>{setUsername(e.target.value)}}></TextField>
                            </Paper>
                            <Paper>
                            <TextField fullWidth required name='password' variant='outlined' label='Password' type='password' onChange={(e)=>{setPassword(e.target.value)}}></TextField>
                        </Paper>
                            <Button variant='contained' color='success' type='submit'>
                                <Typography variant='button'>Login</Typography>
                            </Button>
                        
                    </Stack>
                </Box>
            
                        </Grid>
                        
                    </Grid>
            
        </>
    )
}

export default LoginForm