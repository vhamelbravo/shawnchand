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
			<div className="my-[29%]"> </div>
			<h1 className="text-slate-400 text-9xl translate-y-[-430%] translate-x-[40%]"> Blog </h1>
			<Navbar />
		{blogPosts?.items?.map((post) => { 
			return (
				<section key={post.sys.id}>
				 <Link to={`/blog/${post.sys.id}`} className="w-fit"> <h1 className="min-w-[500px] max-w-[500px] relative text-cyan-500 text-5xl translate-y-[-100%] mx-[10%] hover:text-slate-400 w-fit truncate">{post.fields.title} </h1> </Link>
					<p className="text-cyan-500 text-3xl translate-y-[-250%] translate-x-[350%] w-fit"> {post.fields.date} </p>
					</section>
					)
				}
				)
				}
			<div className="mt-[70%] translate-x-[3%]">
			<Footer />
			</div>
			</>
	)	

}

export default BlogPage
