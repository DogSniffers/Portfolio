import React from 'react'
import Button from '@material-ui/core/Button'
import './Info.css'

function Info(){
    return(
        <div>
            <div>
                <h1 className='subtitle'>Info</h1>
            </div>
            <div>
                <h1 className='subtitle'>Skills</h1>
            </div>
            <div>
                <h1 className='subtitle'>Projects</h1>
                <div>
                    <h2>Personal Project</h2>
                </div>
                <div>
                    <h2>Group Project</h2>
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