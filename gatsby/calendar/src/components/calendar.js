import React from 'react';


class Calendar extends React.Component {
    render() {
        return (
            <iframe src={this.props.src} width="800" height="400" frameborder="0" scrolling="no"></iframe>
        )
    }
};

export default Calendar;