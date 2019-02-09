import React from 'react'
import PropTypes from 'prop-types'

function MessageList(props){
    const { messages, username } = props;
    return(
        <ul className="message-list">
            {messages.map((message, index) => (
            <li
                key={index}
                className={
                message.username === username ? 'message sender' : 'message recipient'
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
            ))}
        </ul>
    )
}


MessageList.propTypes = {
    messages: PropTypes.array,
    username: PropTypes.string
}

export default MessageList