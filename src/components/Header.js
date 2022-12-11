import { AppBar, Toolbar, Typography } from '@mui/material'
import './Header.css'
import football from '../resources/football.png'

function Header() {

    return (
        <AppBar position='static'>
            <Toolbar className='header'>
                <img className='logo' alt='Football' src={football} />
                <Typography variant='h4'>
                    FIFA World Cup 2022 Match Up Winner Predictor
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header