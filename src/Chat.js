import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageList from './MessageList'

class Chat extends Component {
    state = {
        message: ''
    }
    isDisabled = () => {
        if(this.state.message)
            return false;
        else
            return true;
    };
    message_OnChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }
    messageSubmit = event => {
        event.preventDefault();
        this.props.newMessage({ username: this.props.username, text: this.state.message });
        this.setState({ message: '' })
    }
    render() {
        const { username, messages } = this.props;
        return(
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
            <MessageList messages={messages} username={username} />
            <div>
              <form className="input-group" onSubmit={this.messageSubmit}>
                <input type="text" className="form-control" value={this.state.message} onChange={this.message_OnChange} placeholder="Enter your message..." />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
    }
}

Chat.propTypes = {
    messages: PropTypes.array,
    username: PropTypes.string
}

export default Chat