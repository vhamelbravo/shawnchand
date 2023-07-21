import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { Link, Route } from "react-router-dom";
import client from "./client.js";
import Navbar from "./Navbar.js";
import Heading from "./components/Heading.js";
import Footer from "./Footer.js";
import Post from "./Post.js";
import { useParams } from "react-router-dom";
function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries);
          setBlogPosts(entries);
        });
      } catch (error) {
        console.log("error");
      }
    };
    getAllEntries();
  }, []);
  const proccessText = (text) => {
    if (text.length > 15) {
      return text.split("").splice(0, 15).join("") + "...";
    } else {
      return text;
    }
  };
  return (
    <>
      <div className="py-8 md:py-0">
        <Heading title={"Blog"} />
        <div className="flex justify-center">
          <div className="flex flex-col justify-center w-[55rem] py-8 md:py-0">
            {blogPosts?.items?.map((post) => {
              return (
                <section
                  className="flex justify-start items-center my-5 w-[100%]"
                  key={post.sys.id}
                >
                  <div className="w-[60%] px-5">
                    <Link to={`/blog/${post.sys.id}`} className="">
                      <h1 className="text-white text-2xl md:text-5xl hover:text-slate-400">
                        {proccessText(post.fields.title)}
                      </h1>
                    </Link>
                  </div>
                  <div className="w-[30%] px-2">
                    <p className=" text-white md:text-3xl">
                      {post.fields.date}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
