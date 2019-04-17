import React, { Component } from "react";
import Item from "./Item";
import "./styles.css";

class Main extends Component {
  state = {
    className: "saveHide",
    tag: "",
    content: "",
    list: [],

    flag: 0
  };

  componentWillReceiveProps() {
    this.setState({ list: [] });
  }
  saveDisplay = () => {
    if (!this.state.flag) {
      this.setState({ className: "saveShow", flag: 1 });
    } else {
      this.setState({ className: "saveHide", flag: 0 });
    }
  };

  formHandler = e => {
    e.preventDefault();
    let newList = [...this.state.list];
    let item = { tag: null, content: null };
    //console.log('state tag'+this.state.tag);
    newList.push(item);
    item["tag"] = this.state.tag;
    item["content"] = this.state.content;
    item["id"] = Math.random();
    this.setState({ list: newList });
    this.saveDisplay();

    //console.log("state list" + this.state.list);
  };

  onTagChange = e => {
    this.setState({ tag: e.target.value });
  };
  onContentChange = e => {
    this.setState({ content: e.target.value });
  };

  deleteHandler = () => {
    let updatedList = [...this.state.list];
    updatedList.pop();
    this.setState({ list: updatedList });
    console.log(this.state.list);
  };
  render() {
    return (
      <div className="header">
        <nav>
          <div className="logo">
            <h1>Todo</h1>
          </div>
          <span>
            <a onClick={this.saveDisplay}>
              <strong>+</strong>
            </a>
          </span>

          <div className={this.state.className}>
            <div className="save">
              <form action="#">
                <h3>Create a Todo</h3>
                <input
                  required
                  name="tag"
                  placeholder="Give a Tag"
                  type="text"
                  onChange={this.onTagChange}
                  value={this.state.tag}
                />
                <input
                  required
                  name="des"
                  placeholder="Enter your todo"
                  type="text"
                  onChange={this.onContentChange}
                  value={this.state.content}
                />
                <button type="button" onClick={this.formHandler}>
                  Add{" "}
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="itemCon">
          <Item del={this.deleteHandler} list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Main;
