import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './Info.css'

const styles = makeStyles({
    button:{
        color:'#212121',
        backgroundColor:'#dd2c00',
        border:'2',
        width:'18vh',
        '&:hover':{
            backgroundColor:'#bf360c'
        }
    },
    projectLinkButton:{
        color:'#212121',
        backgroundColor:'#dd2c00',
        border:'2',
        width:'18vh',
        marginLeft:'10px',
        marginBottom:'10px',
        '&:hover':{
            backgroundColor:'#bf360c'
        }
    }
})

function Info(){
    const style = styles();
    return(
        <div>
            <div id='info'>
                <h1 className='subtitle'>Info</h1>
                <div className='aboutMeHolder'>
                    <div className='aboutMe'>
                            <h2>About me:</h2>
                                <p>I've always had an interest in Computer technology, beginning at a young age with the introduction to PC gaming. I found enjoyment in figuring out ways to apply mods into games, which itself created a lot of room for the game to begin to break which then required me to figure out ways to fix the program, or simply learn new ways to edit and manage basic file structure bugs. </p>
                                <p>Web Development has been extremely fun for me, as it's fascinating learning new technologies and being able to analyze potential ways that companies have set up their own software, and learning ways to apply these technologies into my own apps.
                                </p>
                                <p>I consider myself a creative individual, with deep interests in the arts, experimenting in drawing, instruments, and music production softwares. Web Development has given me an excellent outlet for experimentation and implementation of my ideas in a more virtual sense, and even allows me to express these ideas in ways that I never thought possible!
                                </p>
                </div>
            </div>
            </div>
            <div id='skills'>
                <h1 className='subtitle'>Skills</h1>
                <div className='skillsSection'>
                    <div className='skillsBoxHolder'>
                    <h2 className='skillsSubtitle'>Languages:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img src='https://cdn.iconscout.com/icon/free/png-512/javascript-20-555998.png' alt='JS' className='techImageJS'></img>
                            <p className='techName'>Javascript</p>
                        </div>
                    </ul>
                    </div>
                </div>
                <div className='skillsSection'>
                    <h2 className='skillsSubtitle'>Front-End:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png' alt='React' className='techImageFrontendReact'></img>
                            <p className='techName'>React</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png' alt='HTML' className='techImageFrontendHTML'></img>
                            <p className='techName'>HTML</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png' alt='CSS' className='techImageFrontendCSS'></img>
                            <p className='techName'>CSS</p>
                        </div>
                    </ul>
                </div>
                <div className='skillsSection'>
                    <h2 className='skillsSubtitle'>Back-End:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='NodeJS' className='techImageNode'></img>
                            <p className='techName'>Node.js</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-sql-data-database-512.png' alt='SQL Tabs' className='techImageSQL'></img>
                            <p className='techName'>SQL Tabs</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://cdn.iconscout.com/icon/free/png-256/redux-283024.png' alt='Redux' className='techImageRedux'></img>
                            <p className='techName'>React Redux</p>
                        </div>
                    </ul>
                </div>
                <div className='skillsSection'>
                    <h2 className='skillsSubtitle'>Additional Technologies:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img src='https://static.axios.com/img/axios-icon.png' alt='Axios' className='techImageAxios'></img>
                            <p className='techName'>Axios</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png' alt='Sass' className='techImageSass'></img>
                            <p className='techName'>Sass</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://www.saashub.com/images/app/service_logos/17/43137ded8e56/large.png?1540615225' alt='ChartJS' className='techImageChart'></img>
                            <p className='techName'>Chart.js</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg' alt='SocketIO' className='techImageSocket'></img>
                            <p className='techName'>Socket.io</p>
                        </div>
                        <div className='skillsContent'>
                            <img src='https://material-ui.com/static/logo.png' alt='MaterialUI' className='techImageMaterial'></img>
                            <p className='techName'>Material UI</p>
                        </div>
                    </ul>
                </div>
            </div>
        <h1 className='subtitle'>Projects</h1>
        <div className='projectsHolder'>
            <div id='projects' className='project'>
                <div>
                    <h2 className='projectSubtitle'>Personal Project</h2>
                    <h3 className='projectSubtitle'>The Gauntlet</h3>
                    <div className='projectInfo'>
                        <h3>Project Info:</h3>
                        <p>This was my Solo project through DevMountain. The app  utilized React, React Redux, Node.js, SQL tabs, and React-Router-Dom. Additionally I learned two additional technologies for this project, Sass and Chart.js.
                        </p>
                        <p>The app itself is a game that can be infinitely generated, and allows the user to create and add their own creatures into the game. The game plays similarly to Pokemon, by which there are turns for the player, and then the creature and all attacks hold 'types', and every creature/class hold their own weaknesses and resistances to these types. I also was able to implement color theme changes into the app through the use of Redux and conditional classes.
                        </p>
                        <div className='linkButtons'>
                            <Button href='https://github.com/DogSniffers/Personal-Project-The-Gauntlet' target='newPage' variant='outlined' className={style.projectLinkButton}>Github Link</Button>
                            <Button href='http://206.189.74.111:6542/' target='newPage' variant='outlined' className={style.projectLinkButton}>Hosted</Button>
                        </div>

                    </div>
                </div>
                <div className='projectInfo'>
                    <h2 className='projectSubtitle'>Group Project</h2>
                    <h3 className='projectSubtitle'>Boardgame App</h3>
                    <div className='projectInfo'>
                        <h3>Project Info:</h3>
                        <p></p>
                        <p>This was my Group based project for DevMountain. The app
                            utilized React, React Redux, Node.js, SQL tabs, React-Router-Dom, and Material UI. Additionally for this project, I was able to learn and implement Socket.io.
                        </p>
                        <p>This project was especially interesting, because it was our first introduction to the group coding environment, and the project started after the Covid-19 outbreak, which required us to be able to communicate from the at-home environment for this project. This proved to be challenging at times, but was an excellent learning experience.
                        </p>
                        <p>The app consists as a holder for online Boardgames. The initial plan for the app was to create chess, then add more games as we progressed. It proved difficult to implement chess, as there is a lot of behind the scenes logic that needs to be in place for each piece, so we were only able to get two games out before the due-date: Chess and Tic-Tac-Toe. My role in this project was to learn how to implement Socket.io into the app so that the user will be able to play with others online once the site is hosted. </p>
                    </div>
                    <div className='linkButtons'>
                        <Button href='https://github.com/Board-Game-Group-Project/Boardgames' target='newPage' variant='outlined' className={style.projectLinkButton}>Github Link</Button>
                    </div>
                </div>
            </div>
        </div>
        <h1 className='subtitle'>Contact</h1>
        <div className='contactHolder'>
            <div id='contact' className='contactInfo'>
                <div className='linkButtons'>
                    <Button variant='outlined' size='large' target='newTab' href='https://github.com/DogSniffers' className={style.button}>GitHub</Button>
                    <Button variant='outlined' size='large' target='newTab' href='https://www.linkedin.com/in/noah-van-buskirk-221762161/' className={style.button}>LinkedIn</Button>
                    <Button variant='outlined' size='large' className={style.button}href='mailto:noahvanbeezie@gmail.com'>Email</Button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Info