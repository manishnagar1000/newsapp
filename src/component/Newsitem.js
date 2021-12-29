import React, { Component } from 'react'


export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source } = this.props;
        return (
            <div className="my-3">
                
                <div className="card">
                    <div style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}}>
                <span className=" badge rounded-pill bg-danger">{source}</span></div>
                    <img className="card-img-top" src={imageUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}... </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
