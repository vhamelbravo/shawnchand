import {useEffect, useState} from 'react'
import {createClient} from 'contentful'
import client from './client.js'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
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
			<div className="blog-preview border-2 border-slate-400 w-[83rem] my-[30%] mx-[17.5%] pb-[5rem] ">
			<h1 className="text-cyan-500 text-7xl mx-[1%] my-[3%] "> Blog </h1>
			{blogPosts?.items?.slice(0,3).map((post) => {
						return (
										<section key={post.sys.id}>
								<ul>
								 <p className="blog-preview-title text-white text-3xl translate-x-[1%]"> <Link to={`blog/${post.sys.id}`} className="text-cyan-500  hover:underline"> {post.fields.title} </Link> - {post.fields.date} </p>   
								</ul>

										</section>
						)
					}
					)}
			  <p className="text-cyan-500 text-xl hover:underline translate-x-[2%] translate-y-[60%]"><Link to="/blog"> Read More </Link> </p>   
			</div>
		</>
			)
}

export default Blog;
