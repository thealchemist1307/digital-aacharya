import React from "react";

import axios from "axios";

import "../../css/card.css";


class EnrolledClassCard extends React.Component {
  constructor(props) {
    super(props);

    this.onSend = this.onSend.bind(this);
    this.state = {
      requests: [],
      count: 0
    };
  }
  onSend() {
    
  }

  render() {

    return (
      <div>
        <div className="card2">
          <header className="card-header" id="head4">
            <p className="card-header-title" id="head4t">
              {this.props.name}
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-content contentcard">
            <div className="content">
              <div class="bar2">
                <div className="emptybar2"></div>
                <div className="filledbar2"></div>
              </div>
              <b>Subject : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.subject}
              <br /><b>Fees : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.fees}
              <br />
              <b>Time : </b>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.props.time}
              <br />
            </div>
          </div>

          <footer className="card-footer footcard">
            <a
              href="#"
              className="card-footer-item"
              id="lin1"
              onClick={this.onSend}
            >
              Delete
            </a>
            {/* <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a> */}
          </footer>
        </div>
        <br />
       
      </div>
    );
  }
}


export default (EnrolledClassCard);
