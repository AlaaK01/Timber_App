import React, { Component, useEffect, useState } from 'react'
import { parsePath } from 'react-router-dom'
import PostData from '../Data/Data.json'
import './Card.css'

const PostList = () => {
	return (
	  <div className='card_container'>
		  {PostData.map((postDetail, index)=>{

			  function OpenNewTab() { 
				const Url = postDetail.url;
				window.open(Url, '_blank');
				if(Url === undefined){
					alert("Jobbet du har sökt har tyvärr blivit tillsatt, ansök gärna från resterande annonser")
				};

			};
			const jobImage = postDetail.image;
			  console.log(URL)
			  return <div class ='base'>
			  <div class ='card'>
				 <div class = 'job_title'>{postDetail.job_title}</div>
				 <div className='city'>{postDetail.city}</div>
				 <img className='image' src={postDetail.image}/>
				  <div className='job_descr'>{postDetail.job_description}</div>
				 <button type='button' className='button' onClick={OpenNewTab}>Ansök</button>
				</div>  
			  </div>
		  })}
	  </div>
	)
  }

export default PostList