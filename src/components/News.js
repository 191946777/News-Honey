import React, { Component } from 'react'
import NewsCom from './NewsCom'
import Spinner from './Spinner';




export class News extends Component {
  constructor(){
    super();
    this.state = {
      itmes: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=675abaf9746748c399017b75b522fa1a&pageSize=18`
    this.setState({loading: true});
    let response = await fetch(url)
    let data = await response.json();
    this.setState({articles: data.articles,
        loading:false
      
    })
}

handlePrevBtn = async ()=>{
  let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=675abaf9746748c399017b75b522fa1a&pageSize=18&page=${this.state.page - 1}`
  this.setState({loading: true});
    let response = await fetch(url)
    let data = await response.json();
    this.setState({articles: data.articles, 
                  page: this.state.page - 1,
                  loading: false
    })
}

handleNextBtn = async ()=>{
  let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=675abaf9746748c399017b75b522fa1a&pageSize=18&page=${this.state.page+1}`
  this.setState({loading: true});
    let response = await fetch(url)
    let data = await response.json();
    this.setState({articles: data.articles,
                  page: this.state.page + 1,
                  loading: false
    })
}
  
  render() {
    return (
      <div className='container my-3'>
        <div className='main-title my-3'>News Honey - Top Trending News</div>
        {this.state.loading && <Spinner/>}
        <div className="row">

          {!this.state.loading && this.state.articles?.map((element)=>{
            return (
              <div className="col-md-4" key={element.url}>
                <NewsCom title = {element.title?.slice(0, 40)} description = {element.description?.slice(0,80)
                } imgUrl={element.urlToImage} time={element.publishedAt} newsurl={element.url}/>
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-outline-dark" onClick={this.handlePrevBtn} disabled={this.state.page <= 1}>&laquo; Previous</button>
        
        <button type="button" className="btn btn-outline-dark" onClick={this.handleNextBtn}>Next &raquo;</button>  
        </div>  
      </div>
    )
  }
}

export default News
