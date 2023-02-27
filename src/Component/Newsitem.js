import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date, source} = this.props;
    return (
      <div className="my-4" style={{color:'black'}}>
        <div className="card my-2" style={{ width: "18rem" , border: `4px solid ${document.body.style.color==='white'?'white':'black'}`, borderRadius: '10px' }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left: '92%'}}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
          <img src={imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
