import { Container } from '@mui/material'
import './App.css'
import Header from './Header.js'
import MatchUp from './MatchUp.js'

function App() {

  return (
    <Container className='App' maxWidth={ false } disableGutters >  
        
      <Header />
      <MatchUp />
    </Container>
  )
}

export default App
