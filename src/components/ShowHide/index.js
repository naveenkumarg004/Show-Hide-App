import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showF: false, showL: false}

  fnDisHide = () => {
    this.setState(prevState => ({showF: !prevState.showF}))
  }

  lnDisHide = () => {
    this.setState(prevState => ({showL: !prevState.showL}))
  }

  render() {
    const {showF} = this.state
    const {showL} = this.state
    const fnParaClass = showF ? 'para' : null
    const fnPara = showF ? 'Joe' : null
    const lnParaClass = showL ? 'para' : null
    const lnPara = showL ? 'Jonas' : null

    return (
      <div className="bg">
        <div className="content-cont">
          <h1 className="head">Show/Hide</h1>
          <div className="names-cont">
            <div className="sub-cont">
              <button onClick={this.fnDisHide} type="button" className="btn">
                Show/Hide Firstname
              </button>
              <p className={fnParaClass}>{fnPara}</p>
            </div>
            <div className="sub-cont">
              <button onClick={this.lnDisHide} type="button" className="btn">
                Show/Hide Lastname
              </button>
              <p className={lnParaClass}>{lnPara}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
