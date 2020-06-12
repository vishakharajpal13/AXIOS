import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route,NavLink, Redirect} from 'react-router-dom';

class Blog extends Component {

    render ()
    
    {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>

                            {/* we dont want to use just the anchor tag for defining the urls , we'll use the property of router which is link so that when we navigate from one link to  another it doesn't reload but re-render*/ }
                         
                            <li><NavLink to='/'exact activeStyle={{
                                color:'red',
                                textDecoration:'underline'
                        
                            }} > Home</NavLink></li>
                            <li> <NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'quick-submit=true'
                                
                            }}>New Post</NavLink></li>
                     
                        </ul>
                    </nav>
                </header>
             {/* <Route exact path='/'render={()=> <h1>Home</h1>}></Route>
                <Route path='/'  render={()=><h1>Home2</h1>}></Route> */}

            <Route path='/' exact component={Posts}/>
            <Route path='/new-post' exact component={NewPost}/>
               </div>
              
        );
    }
}

export default Blog;



/*  <section>
                    <FullPost id={this.state.selectedid}/>
                </section>
                <section>   
                    <NewPost  />
                </section>
            </div>*/