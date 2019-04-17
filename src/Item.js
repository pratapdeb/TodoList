import React, { Component } from "react";
import "./styles.css";
class item extends Component {
  deleteHandler = id => {
    this.props.del();
  };
  //console.log(props.list);
  render() {
    //console.log(this.state.list);
    return (
      <div>
        <div className="item heading">
          <h4>Tags</h4>
          <p className="content">Description</p>
          <a>Option</a>
        </div>
        {this.props.list.map(key => {
          return (
            <div className="item">
              <h4 key={key["id"] + 1}>{key["tag"]}</h4>
              <p key={key["id"] + 2} className="content">
                {key["content"]}
              </p>
              <a key={key["id"]} onClick={() => this.deleteHandler(key["id"])}>
                delete
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
export default item;
