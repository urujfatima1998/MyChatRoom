import React, { Component } from 'react';

class TestArea extends Component {
  render () {
    return (
      <div className="demo-test-area--wrapper">
        <div className="demo-test-area--title">
          <div className="demo-test-area--title-main">A lot can happen over a chat !</div>
          <div className="demo-test-area--title-sub">
            
          </div>
        </div>
        <form className="demo-test-area" onSubmit={(e)=> {
          e.preventDefault();
          this.props.onMessage(this.textArea.value);
          this.textArea.value = '';
        }}>
          <div className="demo-test-area--preamble"> Chat by sending a message .
          Message will be refelected to bottom right corner icon.</div>
          <textarea
            ref={(e) => { this.textArea = e; }}
            className="demo-test-area--text"
            placeholder="Write a message...."
          />
          <button className="demo-test-area--button"> Send Message! </button>
        </form>
        
      </div>
    );
  }
}

export default TestArea;
