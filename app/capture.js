import {desktopCapturer} from "electron"

export default (callback) => {
    desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
        if (error) throw error
        for (let i = 0; i < sources.length; ++i) {
            console.log("i ", i, sources[i].name)
            if (sources[i].name === 'Entire screen') {
                navigator.webkitGetUserMedia({
                    audio: false,
                    video: {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: sources[i].id,
                            minWidth: 1280,
                            maxWidth: 1280,
                            minHeight: 720,
                            maxHeight: 720
                        }
                    }
                }, handleStream, handleError)
                return
            }
        }
    })
}
function handleStream (stream) {
    console.log("hello", stream)
    let video = document.createElement("video");
    video.src = URL.createObjectURL(stream)
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d")
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    console.log(canvas, context)
    let url = canvas.toDataURL()
    console.log(url)

}

function handleError (e) {
    console.log(e)
}
