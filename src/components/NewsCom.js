import React, { Component } from 'react'

export class NewsCom extends Component {
  render()
  {
  let {title,description,imgUrl,time,newsurl} = this.props

    return (
      <div>
        <div class="card my-3 h-50 d-inline-block" >
          <img src={!imgUrl ? "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : imgUrl} className="img-fluid rounded-start  " alt="..."/>
          <div class="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description == null ? "No description is avaliable.. " : description}....</p>
          <a href={newsurl} target= "_blank" type="button" className="btn btn-info btn-sm "><strong>Read Full Article</strong></a>
          <p className="card-text"><small className="text-body-secondary">{time}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsCom
