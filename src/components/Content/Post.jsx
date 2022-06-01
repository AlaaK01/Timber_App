import React, { Component } from 'react'
import PostData from '../Data/Data.json'
import './Card.css'

 class PostList extends Component {
  render() {
	return (
	  <div className='container'>
		  {PostData.map((postDetail, index)=>{
			  return <div class ='card'>
				 <div class = 'job_title'>{postDetail.job_title}</div>
				 <div class ='img'>{postDetail.image}</div>
				  <div>{postDetail.city}</div>
				  <div>{postDetail.job_description}</div>
				  
			  </div>
		  })}
	  </div>
	)
  }
}
export default PostList