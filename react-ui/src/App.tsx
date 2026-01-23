
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatView from './chat/ChatView';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import LoginForm from './login/LoginForm';
import { useState, useEffect } from 'react';

function App() {

  const [token, setToken] = useState()

  const saveToken = (item: any) => {
    // TODO: save token data in cookies or localstorage
    
    setToken(item)
  }

  useEffect(()=>{
    //TODO: attempt to get token. If not token redirect to login
    console.log("bla")
  }, [])

  // TODO: block login if token

  return (
    <Container maxWidth="xl"  disableGutters sx={{ minHeight: '100vh', backgroundColor: '#f0ecd8'}}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h4'>W's in the chat</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatView />} />
        <Route path='/login' element={<LoginForm setToken={saveToken} />} />
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
