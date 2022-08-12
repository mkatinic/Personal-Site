import BarGraph from '../../assets/images/barGraph.webp';
import Meme from '../../assets/images/trollface.png'
import './index.scss';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                <p>
                    I recently graduated with a Computer Studies Diploma from Langara College, 
                    and I am excited to begin my career as a software developer. Langara has 
                    taught me various technologies, and I consider myself adept in C++, Java, 
                    JavaScript, Data Structures and Algorithms, and front end development. I 
                    am extremely passionate about computer science and I try to seize every 
                    oppourtunity to learn and better myself as a developer. Since graduation I 
                    have continued my learning independantly, through personal projects and 
                    online courses. As I am just starting my career in computer sciences, the 
                    majority of work experience I have has been in the trades. Spending years 
                    working as a millwright in the oil industry was essential in developing my 
                    tenacious work ethic and communication skills, which I take with me everywhere 
                    I go.
                </p>
            </div>

            <div className='projects'>
                <h2>Past Projects</h2>
                <div className="projects-details">
                <a href="https://mkatinic.github.io/Sorting-Visualizer/"><img src={BarGraph}alt="bar graph" /></a>
                    <p>
                    This project visualizes the steps different sorting algorithms take while running. This was my first React project and 
                    I started this as a way to take a break from the course I was following, while also testing some of the React skills I 
                    had learned. All of the code was written by myself and it is hosted on Github pages, you can find the app by clicking the 
                    image above or through the link here: <a
                        href="https://mkatinic.github.io/Sorting-Visualizer/">mkatinic.github.io/Sorting-Visualizer/</a></p>
                </div>
                <div className="projects-details">
                <a href="https://mkatinic.github.io/Meme-Generator/"><img src={Meme}alt="bar graph" /></a>
                    <p>
                    This project uses an API request to retrieve 100 of the most relevant memes images and displays one
                    randomly, then the user can add text to the image creating a meme. This app taught me a lot of important 
                    React concepts like making an API request, complex states, React forms, and side effects. You can find 
                    the app by clicking the image above or through the link here: <a
                        href="https://mkatinic.github.io/Meme-Generator/">mkatinic.github.io/Sorting-Visualizer/</a></p>
                </div>            
            </div>
        </div>
    )
}

export default About;