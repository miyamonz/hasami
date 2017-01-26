import React, {Component} from "react"

let createRect = (a,b) => {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width:   Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y),
  }
}

export default class extends Component  {
  constructor(props){
    super(props)
    this.state = {
      x: 0,
      y: 0,
      cropping: false,
      downPoint: {},
      rect: {},
    }
  }
  render(){
    let onMouseMove = e => {
      let nowPoint = {
        x: e.clientX,
        y: e.clientY,
      }
      this.setState(nowPoint)
      if(!this.state.cropping) return
      this.setState({
        rect: createRect(this.state.downPoint, nowPoint)
      })
    }
    let onMouseUp = e => {
      console.log(JSON.stringify(this.state.rect))
      this.setState({cropping: false, rect: {}})
    }
    let onMouseDown = e => {
      e.preventDefault();
      this.setState({cropping: true, downPoint: {x: e.clientX, y: e.clientY}})
    }
    return (
      <div 
        className="window"
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
      >
        <div className="rect" key="rect" style={{
          left: this.state.rect.x,
          top: this.state.rect.y,
          width: this.state.rect.width,
          height: this.state.rect.height,
          }}></div>
        <div className="cursor" key="cursor" style={{
          left: this.state.x,
          top: this.state.y,
          }}>
          <div className="indicator">{this.state.x + "\n" + this.state.y}</div>
        </div>
      </div>
      )
    }
}
