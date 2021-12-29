import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    capitalLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    constructor(props){
        super(props)
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title= `${this.capitalLetter(this.props.category)}-Nagar News`;
    }

    async updateNews(){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata)
        this.setState({articles:parsedata.articles , totalResults:parsedata.totalResults,loading:false})
      
        this.props.setProgress(100);

    }
    

    async componentDidMount(){
       this.updateNews();
    } 

    // onhandlePreviousClick=async()=>{
    //     // console.log("you pressed the previous button")
    //     this.setState({page: this.state.page - 1});
    //     this.updateNews();
        
    // }

    // onhandleNextClick=async()=>{
    //     // console.log("you pressed the next button")
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/8)))
    //     {
            
    //     this.setState({page: this.state.page + 1});
    //     this.updateNews();
    //              }
     
    // }

    fetchMoreData=async()=>{
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({articles:this.state.articles.concat(parsedata.articles) , totalResults:parsedata.totalResults,loading:false})
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={{margin:"90px 0px 40px 0px"}}>NagarNews - Top Headlines on {this.capitalLetter(this.props.category)}</h1>
                {this.state.loading && <Spinner/>}

                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
            <div className="row">
            {
                this.state.articles.map((element,index)=>{
                    return <div className="col-md-4" key={index}>
                    <Newsitem title={element.title?element.title.slice(0,35):""}description={element.description?element.description.slice(0,85):""}
                    imageUrl={element.urlToImage?element.urlToImage:""} newsUrl={element.url} author={element.author?element.author:"Manish Nagar"} date={element.publishedAt} source={element.source.name}/>
                    </div>
                })
            }
            </div>
            </div>
            </InfiniteScroll>


            {/* <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.onhandlePreviousClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.onhandleNextClick}>Next &rarr;</button>
            </div> */}
            </>
        )
    }
}
