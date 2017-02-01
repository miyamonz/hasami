import React, {Component} from "react"
import Clip from "./clip.jsx"
import capture from "./capture.js"

export default class extends Component  {
  constructor(props){
    super(props)
    this.state = {
      cropped: false,
      rect: {},
      url: "",
    }
  }
  render(){
    let onClip = rect => {
      console.log("cliped")
      console.log(rect)
      this.setState({cropped: true, rect})
      capture(rect, image => {
        let url = image.toDataURL();
        this.setState({url})
      })
    }
    return (
      <div>
        {this.state.cropped ?
        <div style={{
          backgroundColor: "rgba(255,255,255,1)",
          }}>
          cliped!
          <img src={this.state.url} />
          <div style={{
            backgroundColor:"rgba(0,0,0,0)",
            position:"absolute",
            left: this.state.rect.x,
            top:  this.state.rect.y,
            width:  this.state.rect.width,
            height: this.state.rect.height,

            }}></div>
        </div>
        :
        <Clip onCrop={onClip} />
        }
      </div>
      )
    }
}
