import {useEffect,useState} from 'react'
import {createClient} from 'contentful'
import {Link, Route } from 'react-router-dom'
import client from './client.js' 
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Post from './Post.js'
import { useParams} from 'react-router-dom'
function BlogPage()  {
		const [blogPosts, setBlogPosts] = useState([])
	        useEffect(() => {
					window.scrollTo(0,0)
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

		<div className="blog-page-full">
                        <div className="navbar-blog translate-y-[130%]">
			<Navbar />
		</div>
			<div className="blog-page "> </div>
		<div className="flex flex-col items-center translate-y-[-350%]">
			<h1 className="blog-title text-cyan-500 text-9xl" > Blog </h1>

		  </div>
		
		{blogPosts?.items?.map((post) => { 
			return (
				<section key={post.sys.id}>
				<div className="flex flex-col items-center pr-[30%] translate-y-[-600%]">
				 <Link to={`/blog/${post.sys.id}`} className="w-fit"> <h1 className="blog-page-title min-w-[500px] max-w-[500px] relative text-white text-5xl hover:text-slate-400 w-fit truncate">{post.fields.title} </h1> </Link>
				</div>
				<div className="flex flex-col items-center pl-[12%] translate-y-[-900%]">
					<p className="blog-page-date text-white text-3xl w-fit"> {post.fields.date} </p>
				</div>
					</section>
					)
				}
				)
				}
		<div className="blog-footer pt-[30%]">
		<Footer />
	 	</div>
		</div>
			</>
	)	

}

export default BlogPage
