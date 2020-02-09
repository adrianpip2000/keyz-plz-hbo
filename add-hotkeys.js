var KeyCodes = {
    "F": 70,      // Fullscreen
    "Space": 32,  // Pause
    "Left": 37,   // Back 10 seconds
    "Right": 39   // Forward 10 seconds
};

var original_onkeydown = document.body.onkeydown;

document.body.onkeydown = function(e) {
    let cls_clk = (cls) => document.querySelector(cls).click();
    switch (e.keyCode) {
        case KeyCodes.F:
            console.log("Toggling full screen");
            cls_clk(".vjs-fullscreen-control");
        break;
        case KeyCodes.Space:
            console.log("Toggling playback");
            cls_clk(".vjs-button.vjs-paused, .vjs-button.vjs-playing")
        break;
        case KeyCodes.Left:
            console.log("Seeking back");
            cls_clk(".backward-button");
        break;
        case KeyCodes.Right:
            console.log("Seeking forward");
            cls_clk(".forward-button");
        break;
    };
    return original_onkeydown(e);
}
