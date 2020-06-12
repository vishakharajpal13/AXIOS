import React, { Component } from 'react';
import axios  from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state={
        loaded:null
    }

componentDidUpdate(){
    if(this.props.id){
    if(!this.state.loaded || (this.state.loaded && this.state.loaded.id!==this.props.id ))
{

    axios.get('/todos/'+ this.props.id).then(
        response=>{this.setState({loaded:response.data})}

    )}}
}
deletePostHandler=()=>{

    axios.delete('/todos/'+ this.props.id).then(respose=>console.log(respose))
}

    render () {

    
        let post = <p style={{textAlign:"center"}} >Please select a Post!</p>;
    if(this.props.id){post=<p style={{textAlign:"center"}}>loading</p>}{

        if(this.state.loaded)
{        post = (
            <div className="FullPost" >
                <h1>{this.state.loaded.title}</h1>
                <p>{this.state.loaded.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                </div>
            </div>

        );
        
    }}
        
        return post;
       }   
}

export default FullPost;