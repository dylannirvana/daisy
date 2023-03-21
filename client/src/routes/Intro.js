import { Component } from 'react'
import pseudo from '../assets/pseudo_1.mp4'

class Intro extends Component {
    render() {
        return(
            <header className="App-header">
              <video src={pseudo} playsInline autoPlay muted loop style={{
                type: 'video/mp4',
                objectFit: 'cover',
                overflow: 'hidden',
                width: '100vw',
                height: '100vh',
                }} />
          </header>
        )
    }
}

export default Intro