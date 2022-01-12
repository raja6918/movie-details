import React, { Component } from 'react'

export default class Bollywood extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movies:[],
        }
    }
    componentDidMount(){
        this.getMoviesFromServer()
    }
    getMoviesFromServer=async()=>{
let serverMoviesData=await fetch("https://services.brninfotech.com/tws/MovieDetails.php?mediaType=movies")
let convertedData=await serverMoviesData.json();
let bollywoodMovieArr=convertedData.filter((movie)=>{
    if(movie.industry=="Bollywood"){
        return true;
}})
this.setState({movies:bollywoodMovieArr})
console.log(convertedData)
    }
    render() {
        return (

            <div className='Bollywood' >
                {this.state.movies.map((movie)=>{
                    return <div>
                    
                        <h1>{movie.title}</h1>
                        <div className='movielibrary'>
 <video src={"https://services.brninfotech.com/tws/"+movie.trailers  }  controls ></video>
<audio src={"https://services.brninfotech.com/tws/"+movie.songs} controls></audio>
         </div>
         <img src={"https://services.brninfotech.com/tws/"+movie.posters  } alt="" ></img>
                    <h1>{movie.director}</h1>
                    <h1>{movie.industry}</h1>
            
</div>
        })}</div>
            
        )
    }
}
