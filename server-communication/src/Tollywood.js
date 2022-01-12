import React, { Component } from 'react'

export default class Tollywood extends Component {
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
let tollywoodMovieArr=convertedData.filter((movie)=>{
if(movie.industry=="Tollywood"){
    return true;
}})
/*let bollywoodMovieArr=convertedData.filter((movie)=>{


if(movie.industry==="Bollywood"){
    return true;
}})
let kollywoodMovieArr=convertedData.filter((movie)=>{


if(movie.industry==="Kollywood"){
    return true;
}
})*/


this.setState({movies:tollywoodMovieArr})
/*this.setState({movies:bollywoodMovieArr})
this.setState({movies:kollywoodMovieArr})*/
console.log(convertedData)
}
    render() {
        return (
            
        <div className='tollywood'>{this.state.movies.map((movie)=>
        {
            return <div>
                <h1>{movie.title}</h1>
                <div className='movielibrary'>
                <video src={"https://services.brninfotech.com/tws/"+movie.trailers  }  controls ></video>
<audio src={"https://services.brninfotech.com/tws/"+movie.songs[0]} controls></audio>
<audio src={"https://services.brninfotech.com/tws/"+movie.songs[1]} controls></audio>
<audio src={"https://services.brninfotech.com/tws/"+movie.songs[2]} controls></audio>
</div>
               

                    <img src={"https://services.brninfotech.com/tws/"+movie.posters  } alt="" ></img>
                    <h1>Director : {movie.director}</h1>
                    <h1>Actor : {movie.industry}</h1>
                    <h2>------------</h2>
                    <hr></hr>
            
            </div>
        })}</div>
            
        )
    }
}
