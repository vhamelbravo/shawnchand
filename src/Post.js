import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.js";
import client from "./client.js";
import Footer from "./Footer.js";
import { createClient } from "contentful";
import MobileNavbar from "./MobileNavbar.js";
import Heading from "./components/Heading.js";

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
    <div className="min-h-[100vh]">
      <div className="lg:hidden">
		<Heading title={"Navigation"} />
        <MobileNavbar />
      </div>
      <div className="flex  justify-center py-12">
        <div className="px-7">
          <div className="">
            <h1
              className={`text-slate-500 ${
                post.fields.title.length > 7 ? "text-3xl md:text-3xl" : "text-6xl md:text-8xl"
              } `}
            >
              {post.fields.title}
            </h1>
            <div className="ps-6">
              <h1 className="text-white text-4xl ">{post.fields.date}</h1>
            </div>
          </div>
          <div className="ps-6 py-6">
            {post.fields.content.content.map((contentBlock, index) => {
              if (contentBlock.nodeType === "paragraph") {
                return (
                  <div className="text-white w-7xl " key={index}>
                    {contentBlock.content.map((node, nodeIndex) => {
                      if (node.nodeType === "hyperlink") {
                        const url = node.data.uri;
                        return (
                          <a
                            className=" hover:underline text-xl"
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={nodeIndex}
                          >
                            {node.content.map((text, textIndex) => (
                              <span key={textIndex}>{text.value}</span>
                            ))}
                          </a>
                        );
                      } else if (node.nodeType === "text") {
                        return (
                          <p className=" text-white text-xl " key={nodeIndex}>
                            {node.value}
                          </p>
                        );
                      } else {
                        return null; // Ignore other node types or handle them accordingly
                      }
                    })}
                  </div>
                );
              } else if (contentBlock.nodeType === "embedded-asset-block") {
                const imageUrl = contentBlock.data.target.fields.file.url;
                return (
                  <div className="text-white w-52 py-5" key={index}>
                    <div>
                      <img
                        src={`https:${imageUrl}`}
                        className="img-post"
                        alt="Embedded Asset"
                      />
                    </div>
                  </div>
                );
              } else {
                return null; // Ignore other node types or handle them accordingly
              }
            })}
          </div>
        </div>
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Post;
