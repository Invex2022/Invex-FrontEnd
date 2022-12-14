import { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import getStarted from '../../assets/example-29.svg'
import './Register.css'


const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Navbar />
            <div className='form-section'>
                <div className='first-section'>
                    <img src = {getStarted} alt='login' className='login-pic'/>
                </div>

                <div className='second-section'>
                    <Typography
                        variant = "h3"
                    >
                        Create a new account.
                    </Typography>
                    <Typography
                        variant = "h6"
                    >
                        Already a member? 
                    </Typography>

                    <div>
                        <TextField
                            id="standard-basic" 
                            label="First Name" 
                            variant="standard"
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{margin:2}}
                        />
                        <TextField
                            id="standard-basic" 
                            label="Last Name" 
                            variant="standard"
                            onChange={(e) => setLastName(e.target.value)}
                            sx={{margin:2}}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-basic" 
                            label="Email" 
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{margin:2}}
                        />
                        <TextField
                            id="standard-basic" 
                            label="Password"
                            type= "password" 
                            variant="standard"
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{margin:2}}
                        />
                    </div>
                    <Button 
                        variant="contained" sx={{ 
                        backgroundColor: '#24387C', 
                        margin : 3,
                        "&:hover" : {
                            backgroundColor : '#6C63FF'
                        }
                    }}>Create your account</Button>
                </div>
            </div>
        </>
    )
}

export default Register;