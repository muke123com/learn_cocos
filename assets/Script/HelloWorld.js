cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'cocos!'
    },

    // use this for initialization
    onLoad: function () {
        setTimeout( ()=> {
            this.label.string = this.text;
        }, 1500)
    },

    // called every frame
    update: function (dt) {

    },
});
