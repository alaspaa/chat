
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatView from './chat/ChatView';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

function App() {

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
      </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
