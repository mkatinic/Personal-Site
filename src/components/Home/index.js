import { Link } from 'react-router-dom';
import HeadShot from '../../assets/images/profile.JPG'
import './index.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <img className='headshot' src={HeadShot}></img>
            
            <div className='text-zone'>
                <h1>Hi, <br /> 
                I'm Markan,<br />
                aspiring software engineer!
                </h1>
                <h2>Diploma in Computer Studies, Langara College</h2>
                <Link to="/Personal-Site/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;