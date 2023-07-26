import { useEffect, useState } from "react";
import { createClient } from "contentful";
import client from "./client.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);

  return (
    <>
      <div className="flex justify-center md:py-12">
        <div className="border-[1px] border-slate-400 w-[94%] md:w-[82%]">
          <h1 className="text-cyan-500 text-7xl">Blog</h1>
          <div className="pb-4">
            {blogPosts?.items?.slice(0, 3).map((post) => {
              return (
                <section className="" key={post.sys.id}>
                  <p className=" text-white my-2 text-xl md:text-3xl px-2 border-b-[1px] border-slate-400 md:border-none">
                    <Link
                      to={`blog/${post.sys.id}`}
                      className="text-cyan-500  hover:underline"
                    >
                      {post.fields.title}
                    </Link>
                    - {post.fields.date}
                  </p>
                </section>
              );
            })}
            <p className="text-cyan-500 py-3 text-xl hover:underline">
              <Link to="/blog"> Read More </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
