var KeyCodes = {
//    "Space": 32,  // Pause
    "Left": 37,   // Back 15 seconds
    "Right": 39   // Forward 15 seconds
};

var original_onkeydown = document.body.onkeydown;

document.body.onkeydown = function(e) {
    let cls_clk = (cls) => document.querySelector(cls).click();
    switch (e.keyCode) {
/*
        case KeyCodes.Space:
            console.log("Toggling playback");
            cls_clk("div.r-6dt33c:nth-child(2) > div:nth-child(1) > div:nth-child(2), div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)")
        break;
*/
//Selecting by attribute names
        case KeyCodes.Left:
            console.log("Skipping backward");
            cls_clk('div[data-testid="SkipBackwardButton"]');
        break;
        case KeyCodes.Right:
            console.log("Skipping forward");
            cls_clk('div[data-testid="SkipForwardButton"]');
        break;

/*
        case KeyCodes.Left:
            console.log("Skipping backward");
            cls_clk("div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
        break;
        case KeyCodes.Right:
            console.log("Skipping forward");
            cls_clk("div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)");
        break;
*/
    };
    return original_onkeydown(e);
};
/*
// Small stylistic change (height of playback background gradient)
var playbackBkg = document.querySelector("div.r-13awgt0:nth-child(4) > div:nth-child(2)");
function fixStyle() {
    playbackBkg.style.height = "200px";
}
window.onload = fixStyle;
*/

/*
Bakup of attribute names
document.querySelector('div[data-testid="SkipBackwardButton"]');
document.querySelector('div[data-testid="SkipForwardButton"]');
*/
