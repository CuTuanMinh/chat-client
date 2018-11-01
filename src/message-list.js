import React from 'react';
import MessageItem from './message-item';

export default class MessageList extends React.Component {
    render () {
        return (
            <ul className="messages clo-md-5">
                {this.props.messages.map(item =>
                    <MessageItem key={item.id} user={item.userId == this.props.user? true : false} message={item.message}/>
                )}
            </ul>
        )
    }
}
