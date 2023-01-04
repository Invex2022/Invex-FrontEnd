import { Button, TextField, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import getStarted from '../../assets/example-29.svg';
import './Register.css';
import useAuth from '../../hooks/useAuth';


const Register = () => {

    const { handleChange, signup } = useAuth()
   
    return (
        <>
            <Navbar />
            <div className='form-section'>
                <div className='first-section'>
                    <img src = {getStarted} alt='login' className='sign-pic'/>
                </div>

                <div className='second-section'>
                    <Typography
                        sx={{height: "20vh",  display:"flex", alignItems: "end", paddingBottom: "20px"}}
                        variant = "h4"
                    >
                        Create a new account.
                    </Typography>
                    <Typography
                        variant = "h6"
                    >
                        Already a member? 
                    </Typography>
                    <TextField
                        name="first_name"
                        id="standard-basic" 
                        label="First Name" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:2}}
                    />
                    <TextField
                        name='last_name'
                        id="standard-basic" 
                        label="Last Name" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:2, marginBottom:3}}
                    />
                    <br></br>
                    <TextField
                        name='email'
                        id="standard-basic" 
                        label="Email" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:5, marginBottom:5, width:350}}
                    />
                    <br></br>
                    <TextField
                        name='password'
                        id="standard-basic" 
                        label="Password"
                        type= "password" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:5, marginBottom:5, width:350}}
                    />
                    <br></br>
                    <Button 
                        onClick = {signup}
                        variant="contained" sx={{ 
                        backgroundColor: '#24387C', 
                        marginTop : 3,
                        "&:hover" : {
                            backgroundColor : '#6C63FF'
                        }
                    }}>Create an account</Button>
                </div>
            </div>
        </>
    )
}

export default Register;