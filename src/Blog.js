import {useEffect, useState} from 'react'
import {createClient} from 'contentful'
import client from './client.js'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import './index.css'
function Blog () {
		const [blogPosts, setBlogPosts] = useState([])
		useEffect(() => {
					const getAllEntries =  async () => {
									try {
														await client.getEntries().then((entries) => {
																				console.log(entries)
																				setBlogPosts(entries)
																			}
																			)
													}
									catch (error) {
														console.log("error")
													}
								}
					getAllEntries()
				}, [])
	return (
		<>
		<div className="flex justify-start pl-[10%]">
			<div className="blog-preview border-2 border-slate-400 w-[90%] max-w-[100%]  pb-[5rem] translate-y-[-95%] ">
			<h1 className="blog-preview-header text-cyan-500 text-7xl  "> Blog </h1>
			{blogPosts?.items?.slice(0,3).map((post) => {
						return (
										<section className="blog-preview-section" key={post.sys.id}>
								<ul className="blog-preview-list">
								 <p className="blog-preview-title text-white text-3xl translate-x-[1%]"> <Link to={`blog/${post.sys.id}`} className="blog-preview-link text-cyan-500  hover:underline"> {post.fields.title} </Link> - {post.fields.date} </p>   
								</ul>

										</section>
						)
					}
					)}
			  <p className="blog-read-more text-cyan-500 text-xl hover:underline translate-x-[2%] translate-y-[60%]"><Link to="/blog"> Read More </Link> </p>   
			</div>
		</div>
		</>
			)
}

export default Blog;
