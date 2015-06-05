var AppStore = require('../stores/app-store.js');
var CONSTANTS = require('../utils/constants.js');
var ticker = require('../utils/ticker.js');

require('../utils/get-device-pixel-ratio.js');
var pixelRatio = getDevicePixelRatio();
var App = require('../apps/app');

class CanvasApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth * pixelRatio, height: window.innerHeight * pixelRatio};

        AppStore.on(CONSTANTS.WINDOW_RESIZE, this.onResizeHandler.bind(this));


    }

    componentWillMount() {

    }

    componentDidMount() {
        this.canvas = React.findDOMNode(this);
        this.ctx = this.canvas.getContext("2d");

        this.app = new App(this.ctx);
        this.app.start();

    }

    onResizeHandler() {
        this.setState({
            width: window.innerWidth * pixelRatio,
            height: window.innerHeight * pixelRatio
        });
    }

    render() {
        var style = {
            width: this.state.width * pixelRatio,
            height: this.state.height * pixelRatio
        }
        return (<canvas style={style} id="c"/>)
    }
}

module.exports = CanvasApp;
