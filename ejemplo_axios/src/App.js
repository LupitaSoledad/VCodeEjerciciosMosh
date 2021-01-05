import "./App.css";
import axios from "axios";
import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiEndpoint } from "./config.json";

class App extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);

    this.setState({ posts });
    console.log(posts);
  }

  render() {
    return <div className="App"></div>;
  }
}
export default App;
