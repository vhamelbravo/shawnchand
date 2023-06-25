import { useState, useEffect } from 'react';
			import { Link } from 'react-router-dom';
			import { useParams } from 'react-router-dom';
			import Navbar from './Navbar.js';
			import client from './client.js';
			import Footer from './Footer.js';
			import { createClient } from 'contentful';

			function Post() {
				  const { id } = useParams();
				  const [post, setPost] = useState(null);

				  useEffect(() => {
					      const getPost = async () => {
						            try {
								            const entry = await client.getEntry(id);
								            setPost(entry);
								          } catch (error) {
										          console.log(error);
										        }
						          };
					      getPost();
					    }, [id]);

				  if (post === null) {
					      return <div>Loading post...</div>;
					    }

				  return (
					      <>
					        <div className=""></div>
					        <h1 className="post-title text-slate-400 text-9xl translate-y-[100%] pl-[18%] min-[500px] max-[500px] truncate">
					          {post.fields.title}
					        </h1>
					        <div className="post-navbar-container">
					          <div className="post-navbar translate-y-[120%]">
					            <Navbar />
					          </div>
					        </div>
					        <div className="flex justify-center pr-[20%]">
					          <h1 className="post-date relative text-white text-7xl translate-y-[-500%]  w-fit">{post.fields.date}</h1>
					        </div>
					        {post.fields.content.content.map((contentBlock, index) => {
							        if (contentBlock.nodeType === 'paragraph') {
									          return (
											              <div className="text-white max-w-7xl translate-y-[-500%]  px-[12%] post" key={index}>
											                {contentBlock.content.map((node, nodeIndex) => {
														                if (node.nodeType === 'hyperlink') {
																	                  const url = node.data.uri;
																	                  return (
																				                      <a className="post-link hover:underline text-xl" href={url} target="_blank" rel="noopener noreferrer" key={nodeIndex}>
																				                        {node.content.map((text, textIndex) => (
																								                        <span key={textIndex}>{text.value}</span>
																								                      ))}
																				                      </a>
																				                    );
																	                } else if (node.nodeType === 'text') {
																				                  return (
																							                      <p className="post-text text-white text-xl " key={nodeIndex}>
																							                        {node.value}
																							                      </p>
																							                    );
																				                } else {
																							                  return null; // Ignore other node types or handle them accordingly
																							                }
														              })}
											              </div>
											            );
									        } else if (contentBlock.nodeType === 'embedded-asset-block') {
											          const imageUrl = contentBlock.data.target.fields.file.url;
											          return (
													              <div className="text-white max-w-7xl pl-[10%] translate-y-[-20%] " key={index}>
													                <div>
													                  <img src={`https:${imageUrl}`} className="img-post" alt="Embedded Asset" />
													                </div>
													              </div>
													            );
											        } else {
													          return null; // Ignore other node types or handle them accordingly
													        }
							      })}
					        <Footer />
					      </>
					    );
			}

	export default Post;


