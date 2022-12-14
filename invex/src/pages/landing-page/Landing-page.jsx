import Navbar  from '../../components/Navbar/Navbar'
import money from '../../assets/money-grow.jpg'
import image from '../../assets/person-stock.svg'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import './Landing-page.css'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className='first-view'>
                <div className = "first-items">
                    <h1 className='heading'>Test your trading skills without risking a dime.</h1>
                    <Button variant="contained" sx={{ 
                        backgroundColor: '#6C63FF', 
                        marginBottom : 3,
                        "&:hover" : {
                            backgroundColor : '#24387C'
                        }
                    }} onClick = {() => navigate('/signup')}>Create your account</Button>    
                    <Divider />
                </div>
                <img className='first-items first-image' src={image} />
            </div>
            <Divider />
            
            <img className = 'welcome-image' src={money} alt = "welcome"/>
        </>
    )
}

export default LandingPage