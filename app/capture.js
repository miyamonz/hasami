import {desktopCapturer} from "electron"

export default () => {

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
    document.querySelector('video').src = URL.createObjectURL(stream)

}

function handleError (e) {
    console.log(e)

}
