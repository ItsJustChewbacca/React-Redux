import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
//connecting component to redux store
import { connect } from 'react-redux';


class Home extends Component {
  //Don't need this dummy data after loading in redux store

  // state = {
  //   posts: [ ]
  // }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         posts: res.data.slice(0, 10)
  //       })
  //     })
  // }

  render() {
    console.log(this.props)
    const { posts } = this.props
    const postList = !posts.length  ? (
      <div className="center"> No posts yet</div>
    ) : (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={ Logo } alt="xbox"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    )
    return(
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
}
//Grabbing store state and mapping the data to the props
const mapStatetoProps = (state) => {
  return {
    posts: state.posts
  }
}

//Using higher order component to wrap home compoonent in redux store
export default connect(mapStatetoProps)(Home)



