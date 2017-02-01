import React, {Component} from "react"
import Clip from "./clip.jsx"
import capture from "./capture.js"

export default class extends Component  {
  constructor(props){
    super(props)
    this.state = {
      cropped: false,
    }
  }
  render(){
    let onClip = url => {
      console.log("cliped")
      this.setState({cropped: true})
    }
    return (
      <div>
        {this.state.cropped ?
        <div>
          cliped!
          <img src="" />
        </div>
        :
        <Clip onCrop={onClip} />
        }
      </div>
      )
    }
}
