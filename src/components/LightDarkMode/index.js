// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {container: 'container-black', head: 'head-white', mode: 'Light Mode'}

  onChangeMode = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(() => ({
        container: 'container-white',
        head: 'head-black',
        mode: 'Dark Mode',
      }))
    } else {
      this.setState(() => ({
        container: 'container-black',
        head: 'head-white',
        mode: 'Light Mode',
      }))
    }
  }

  render() {
    const {container, head, mode} = this.state
    return (
      <div className="main-container">
        <div className={container}>
          <h1 className={head}>Click To Change Mode</h1>
          <button onClick={this.onChangeMode} className="button" type="button">
            {mode}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
