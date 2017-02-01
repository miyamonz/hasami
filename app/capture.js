import {desktopCapturer} from "electron"

export default (rect, callback) => {
  let option = {
    types: ['window', 'screen'],
    thumbnailSize: {width: 1280, height:1280 }
  }
  desktopCapturer.getSources(option, (error, sources) => {
    if (error) throw error
    let source = sources.filter( s => s.name ==="Entire screen" )[0]
    let image = source.thumbnail;
    console.log(rect)
    callback(image.crop(rect))
    return

    // navigator.webkitGetUserMedia({
    //   audio: false,
    //   video: {
    //     mandatory: {
    //       chromeMediaSource: 'desktop',
    //       chromeMediaSourceId: source.id,
    //       minWidth: 1280,
    //       maxWidth: 1280,
    //       minHeight: 720,
    //       maxHeight: 720
    //     }
    //   }
    // }, handleStream, handleError)

    function handleStream (stream) {
      // let video = document.createElement("video");
      // video.src = URL.createObjectURL(stream)
      // let canvas = document.createElement("canvas");
      // let context = canvas.getContext("2d")
      // context.drawImage(video, 0, 0, canvas.width, canvas.height)
      // let url = canvas.toDataURL()
      // let url = URL.createObjectURL(stream)
      let url = stream.to
      callback(url)
    }

    function handleError (e) {
      console.log(e)
    }
  })
}
