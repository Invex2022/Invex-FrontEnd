import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Invex-1.png'
import './Navbar.css'


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" sx = {{ backgroundColor: '#1B2856' }}>
                <Toolbar sx={{ justifyContent : 'space-between' }}>
                    <div className = "logo-section">
                        <div className='logo-container'>
                            <img src={logo} className="logo" alt="logo"/>
                        </div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' },  flex: "50%", alignSelf : "center", margin: 2, fontStyle: "italic"}}
                        >
                            INVEX
                        </Typography>
                    </div>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, width:300, justifyContent : 'space-between'}} className = "box">
                        <Button className='nav-item' key='about' sx={{ color: '#fff' }} onClick={() => navigate('/about')}>
                            <Typography>About</Typography>
                        </Button>
                        <Button className='nav-item' key='sign-up' sx={{ color: '#fff' }} onClick={() => navigate('/signup')}>
                            <Typography> Sign Up </Typography>
                        </Button>
                        <Button className='nav-item' key='log-in' sx={{ color: '#fff' }} onClick={() => navigate('/login')}>
                            <Typography>Log In</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar