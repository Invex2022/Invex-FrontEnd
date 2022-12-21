import Navbar from "../../components/Navbar/Navbar";
import loginPic from '../../assets/login-pic.svg';
import { Button, TextField, Typography } from "@mui/material";
import './Login-page.css';
import useAuth from "../../hooks/useAuth";


const LoginPage = () => {

    const { handleChange, login } = useAuth();

    return (
        <>
            <Navbar />
            <div className="login-view">
                <div className="login-first">
                    <img src={loginPic} alt="login" className="login-pic"/>
                </div>
                <div className="login-second">
                    <Typography 
                    variant = "h4"
                    sx={{height: "20vh",  display:"flex", alignItems: "end", paddingBottom: "20px"}}
                    >
                        Log in to Invex
                    </Typography>
                    <TextField
                        id="standard-basic"
                        name='email' 
                        label="Email" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:5, marginBottom:5, width:350}}
                    />
                    <TextField
                        id="standard-basic" 
                        name='password'
                        label="Password"
                        type= "password" 
                        variant="standard"
                        onChange={handleChange}
                        sx={{marginRight:5, marginBottom:5, width:350}}
                    />
                    <br></br>
                    <Button 
                        onClick= {login}
                        variant="contained" sx={{ 
                        backgroundColor: '#24387C', 
                        marginTop : 2,
                        "&:hover" : {
                            backgroundColor : '#6C63FF'
                        }
                    }}>Log In</Button>
                </div>

            </div>
        </>
    )
}

export default LoginPage;