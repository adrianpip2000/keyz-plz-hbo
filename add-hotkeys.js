var KeyCodes = {
    "Space": 32,  // Pause
    "Left": 37,   // Back 15 seconds
    "Right": 39   // Forward 15 seconds
};

var original_onkeydown = document.body.onkeydown;

document.body.onkeydown = function(e) {
    let cls_clk = (cls) => document.querySelector(cls).click();
    switch (e.keyCode) {
        case KeyCodes.Left:
            console.log("Skipping backward");
            cls_clk('div[data-testid="SkipBackwardButton"]');
			//fixStyle();
        break;
        case KeyCodes.Right:
            console.log("Skipping forward");
            cls_clk('div[data-testid="SkipForwardButton"]');
			//fixStyle();
        break;
        /*
        // Pause/play with spacebar
        case KeyCodes.Space:
            console.log("Toggling playback");
            cls_clk("div.r-6dt33c:nth-child(2) > div:nth-child(1) > div:nth-child(2), div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)");
			//fixStyle();
        break;
        */
    };
    return original_onkeydown(e);
};

/*
// Small stylistic change (height of playback background gradient) - doesn't work very well because it resets every time the playback bar disappears
function fixStyle() {
    document.querySelector("div.r-13awgt0:nth-child(4) > div:nth-child(2)").style.height = "200px";
};
*/

/*
Bakup of different selectors
Bwd skipping:
    'div[data-testid="SkipBackwardButton"]'
    "div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
Fwd skipping:
    'div[data-testid="SkipForwardButton"]'
    "div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)"
Pause/play:
    'div[data-testid="PauseButton"], div[data-testid="PlayButton"]' //not entirely sure about this one
    "div.r-6dt33c:nth-child(2) > div:nth-child(1) > div:nth-child(2), div.r-1pz39u2:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
*/
