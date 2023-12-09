import React, { Component } from "react"

export class UserClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
    }
  }

  componentDidMount = () => {
    fetch("https://api.github.com/users/markDevRam")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          data: data,
        })
      })
  }

  render() {
    return (
      <div className="userContainer">
        <img
          className="user-logo"
          src={this.state.data.avatar_url}
          alt="profPic"
        />
        <h1>Hi Iam {this.state.data.name}</h1>
        <h2>github Id : {this.state.data.login}</h2>
      </div>
    )
  }
}

export default UserClass
