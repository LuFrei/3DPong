import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Viewport from "./components/scenes/TestScene";

import store from './store'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <div className="control-panel"><p>scroll-wheel to Zoom, left-click to Rotate, right-click to Pan</p></div>
        <Viewport />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));