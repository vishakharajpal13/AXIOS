import React ,{Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    
    state={
        post:[],
        selectedid:null
    }
    componentDidMount(){
        console.log(this.props)
        axios.get("https://jsonplaceholder.cypress.io/todos")
        .then(response=>  { const post=response.data.slice(0,4);//this is to limit the length of arrayreturned from Json data
            const updatepost=post.map(post=> {return{

                ...post,author:'Max'
            }}) //we can edit the data from the server and add what we want this way 
            //by creating a new object by mapping the array obtain from the data
            
            this.setState({post:updatepost});
            });

    }
    selectedpost=(id)=>{
        this.setState({selectedid:id})
        
            }
    render(){
        const post=this.state.post.map(post=> <Post click={()=>this.selectedpost(post.id)} author={post.author} key={post.id} title={post.title} />)
      
        return(
            <div>
                 <section className="Posts">
                    {post}
                </section>
            </div>
        )
    }

}


export default Posts;