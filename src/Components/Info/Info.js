import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './Info.css'

const styles = makeStyles({
    button:{
        color:'#212121',
        backgroundColor:'#424242',
        border:'2',
        width:'14vh',
        '&:hover':{
            backgroundColor:'#616161'
        }
    }
})

function Info(){
    const style = styles();
    return(
        <div>
            <div>
                <h1 className='subtitle'>Info</h1>
                <h2>About me:</h2>
            </div>
            <div>
                <h1 className='subtitle'>Skills</h1>
                <div>
                    <h2>Languages:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Javascript</p>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>Front-End:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img></img>
                            <p>React</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>HTML</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>CSS</p>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>Back-End:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Node.js</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>SQL Tabs</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>React Redux</p>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>Additional Technologies:</h2>
                    <ul className='skillsLists'>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Axios</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Sass</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Chart.js</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Socket.io</p>
                        </div>
                        <div className='skillsContent'>
                            <img></img>
                            <p>Material Ui</p>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='project'>
                <h1 className='subtitle'>Projects</h1>
                <div>
                    <h2>Personal Project</h2>
                    <h3>The Gauntlet</h3>
                    <h4>Info</h4>
                    <div className='projectInfo'>
                        <p>Project Info:</p>
                        <p>This was my Solo project through DevMountain. The app  utilized React, React Redux, Node.js, SQL tabs, and React-Router-Dom. Additionally I learned two additional technologies for this project, Sass and Chart.js.
                        </p>
                        <p>The app itself is a game that can be infinitely generated, and allows the user to create and add their own creatures into the game. The game plays similarly to Pokemon, by which their are turns for the player, and then the creature and all attacks hold 'types', and every creature/class hold their own weaknesses and resistances to these types. I also was able to implement color theme changes into the app through the use of Redux and conditional classes.
                        </p>
                        <Button>Github Link</Button>

                    </div>
                </div>
                <div>
                    <h2>Group Project</h2>
                    <h3>Boardgame App</h3>
                    <h4>Info</h4>
                    <div className='projectInfo'>
                        <p>Project Info:</p>
                        <p></p>
                        <p>This was my Group based project for DevMountain. The app
                            utilized React, React Redux, Node.js, SQL tabs, React-Router-Dom, and Material UI. Additionally for this project, I was able to learn and implement Socket.io.
                        </p>
                        <p>This project was especially interesting, because it was our first introduction to the group coding environment, and the project started after the Covid-19 outbreak, which required us to be able to communicate from the at-home environment for this project. This proved to be challenging at times, but was an excellent learning experience.
                        </p>
                        <p>The app consists as a holder for online Boardgames. The initial plan for the app was to create chess, then add more games as we progressed. It proved difficult to implement chess, as there is a lot of behind the scenes logic that needs to be in place for each piece, so we were only able to get two games out before the due-date: Chess and Tic-Tac-Toe. My role in this project was to learn how to implement Socket.io into the app so that the user will be able to play with others online once the site is hosted. </p>
                    </div>
                    <Button>Github Link</Button>
                </div>
            </div>
            <div>
                <h1 className='subtitle'>Contact</h1>
                <div className='linkButtons'>
                    <Button variant='outlined' size='large' target='newTab' href='https://github.com/DogSniffers' className={style.button}>GitHub</Button>
                    <Button variant='outlined' size='large' target='newTab' href='https://www.linkedin.com/in/noah-van-buskirk-221762161/' className={style.button}>LinkedIn</Button>
                    <Button variant='outlined' size='large' className={style.button}>Email</Button>
                </div>
            </div>
        </div>
    )
}
export default Info