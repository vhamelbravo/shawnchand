import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Navbar from './Navbar.js'
import client from './client.js'
import Footer from './Footer.js'
import {createClient} from 'contentful'


function Post() {
	const { id } = useParams()
	const [post, setPost] = useState(null)
		useEffect(() => {
			const getPost = async () => {
				try {
					const entry = await client.getEntry(id)
					setPost(entry)
				}
				catch (error) {
					console.log(error)
				}	
			}
			getPost()
		}, [id])

		if (post === null) {
			return <div>Loading post...</div>;
		}

	return (
		<>
		<div className="my-[29%]"> </div>
		<h1 className="post-title text-cyan-500 text-8xl translate-y-[-550%] mx-auto min-w-[500px] max-w-[900px] truncate  "> {post.fields.title} </h1>
		<div className="navbar-post translate-x-[10%]">
		<Navbar  />
		</div>

		<h1 className="relative text-white text-7xl translate-y-[-80%] translate-x-[120%]  w-fit"> {post.fields.date} </h1> 
		{post.fields.content.content.map((contentBlock, index) => {
			  if (contentBlock.nodeType === 'paragraph' || contentBlock.nodeType === 'embedded-asset-block') {
				      return (
					            <div className="post-content text-white max-w-7xl translate-x-[12%]" key={index}>
					              {contentBlock.content.map((node, nodeIndex) => {
							                console.log('Node Type:', node.nodeType);
							                console.log('Node:', node);
							                if (node.nodeType === 'embedded-asset-block') {
										            if (node.data?.target?.sys?.id && post.includes.Asset) {
												                  const assetId = node.data.target.sys.id;
												                  const asset = post.includes.Asset.find(asset => asset.sys.id === assetId);
												                  if (asset && asset.fields?.file?.url) {
															                  const imageUrl = asset.fields.content.content.url;
															                  console.log("The if statement is working as it should");
															                  return (
																		                    <div key={nodeIndex}>
																		                      <img src="https://images.ctfassets.net/2q66jr3wkfx6/5BZ4ZUeu9qktKrS94iwPai/7653a7a1a61369d82bd19d184ddd5b4a/person.png" alt="Embedded Asset" />
																		                    </div>
																		                  );
															                }
												                }
										          } else if (node.nodeType === 'hyperlink') {
												              const url = node.data.uri;
												              return (
														                    <a className="hover:underline" href={url} target="_blank" rel="noopener noreferrer" key={nodeIndex}>
														                      {node.content.map((text, textIndex) => (
																	                        <span key={textIndex}>{text.value}</span>
																	                      ))}
														                    </a>
														                  );
												            } else if (node.nodeType === 'text') {
														                return <p key={nodeIndex}>{node.value}</p>;
														              } else {
																                  return null; // Ignore other node types or handle them accordingly
																                }
							              })}
					            </div>
					          );
				    } else {
					        return null; // Ignore other node types or handle them accordingly
					      }
		})}
		<div className="post-footer mt-[70%] translate-x-[3%]">
		<Footer />
		</div>
		
		</>
	)

}
export default Post
