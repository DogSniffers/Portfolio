import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import './Info.css'

function Info(){
    return(
        <div>
            <div>
                <h1 className='subtitle'>Info</h1>
                <h2>About me:</h2>
            </div>
            <div>
                <h1 className='subtitle'>Skills</h1>
                <div>
                    <h2>Languages</h2>
                    <p>Javascript</p>
                </div>
                <div>
                    <h2>Front-End</h2>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>
                <div>
                    <h2>Back-End</h2>
                    <p>Node.js</p>
                    <p>SQL Tabs</p>
                    <p>React Redux</p>
                </div>
                <div>
                    <h2>Additional Technologies</h2>
                    <p>Axios</p>
                    <p>Sass</p>
                    <p>Chart.js</p>
                    <p>Socket.io</p>
                    <p>Material Ui</p>
                </div>
            </div>
            <div>
                <Box>
                <h1 className='subtitle'>Projects</h1>
                <div>
                    <h2>Personal Project</h2>
                    <h3>The Gauntlet</h3>
                    <h4>Info</h4>
                    <p className='projectInfo'>Project Info</p>
                </div>
                </Box>
                <div className='project'>
                    <h2>Group Project</h2>
                    <h3>Boardgame App</h3>
                    <h4>Info</h4>
                    <p className='projectInfo'>Project Info</p>
                </div>
            </div>
            <div>
                <h1 className='subtitle'>Contact</h1>
                <div>
                    <Button>GitHub</Button>
                </div>
                <div>
                    <Button>LinkedIn</Button>
                </div>
                <div>
                    <Button>Email</Button>
                </div>
            </div>
        </div>
    )
}
export default Info