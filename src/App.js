import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

const API_PATH = 'http://localhost:81/bittest/api/test/index.php';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home_url: "",
            auth_uri: "",
            client_id: "",
            client_secret: "",
        };
    }
    handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              //message(result);
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };
    /*
    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }*/
    render() {
        return (
            <div className="App">
                <p>Bit Integrator</p>
                <div>
                    <form action='../db_connection.php'>
                        <label>Home Page URL</label>
                        <input
                            type="text"
                            id="home_url"
                            name="home_url"
                            defaultValue="http://localhost:81/integrator"
                            readOnly
                            disabled
                        />
                        <label>Authorize Redirect URI</label>
                        <input
                            type="text"
                            id="auth_uri"
                            name="auth_uri"
                            value="http://localhost:81/integrator/callback.php"
                            readOnly
                            disabled
                        />
                        <label>Client-ID</label>
                        <input
                            type="text"
                            id="client_id"
                            name="client_id"
                            value={this.state.client_id}
                            onChange={(e) =>
                                this.setState({ client_id: e.target.value })
                            }
                            placeholder="Your Client-ID"
                        />
                        <label>Client-Secret</label>
                        <input
                            type="text"
                            id="client_secret"
                            name="client_secret"
                            value={this.state.client_secret}
                            onChange={(e) =>
                                this.setState({ client_secret: e.target.value })
                            }
                            placeholder="Your Client-Secret"
                        />
                        <input
                            type="submit"
                            onClick={(e) => this.handleFormSubmit(e)}
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        );
    }
}
export default App;
