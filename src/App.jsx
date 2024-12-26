import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

export default function App() {
  const [allPost, setAllPost] = useState([]);
  const [pageNumber, setpageNumber] = useState(1);
  const [perPagePosts, setPerPagePosts] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        setLoading(false);
        setAllPost(res.data);
      });
    })();
  }, []);

  const lastIndexPosts = perPagePosts * pageNumber;
  const firstIndexPosts = lastIndexPosts - perPagePosts;
  const currentPagePosts = allPost.slice(firstIndexPosts, lastIndexPosts);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Latest Posts
        </h2>

        {loading ? (
          <h1 className="text-5xl font-extrabold">Loading...</h1>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {currentPagePosts?.map((posts) => (
              <Post key={posts?.id} posts={posts} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        setpageNumber={setpageNumber}
        pageNumber={pageNumber}
        perPagePosts={perPagePosts}
        totalPost={allPost.length}
        setPerPagePosts={setPerPagePosts}
      />
    </div>
  );
}
