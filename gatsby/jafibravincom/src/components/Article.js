import React from 'react';

class Article extends React.Component {
    render() {
        return (
          <article id={this.props.id} className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
            <h2 className="major">Intro</h2>
            <span className="image main"><img src={this.props.img} alt="" /></span>
            <p>{this.props.text1}</p>
            <p>{this.props.text2}</p>
            
        </article>
        )
    }
};

export default Article;