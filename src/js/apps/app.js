import AppStore from "../stores/app-store.js"
import ticker from "../utils/ticker.js"
import CONSTANTS from "../utils/constants.js"

class App {
    constructor(ctx) {
        this.update = this.update.bind(this);
    }

    start(){
        ticker.addListener(CONSTANTS.TICK, this.update);
    }

    update(){
        console.log('update');
    }

    stop(){
        ticker.removeListener(CONSTANTS.TICK, this.update);
    }
}

export default App;