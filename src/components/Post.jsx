/* eslint-disable react/prop-types */

function Post({ posts }) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto h-32"></div>
      <div className="mt-4 ">
        <div>
          <h3 className="text-xl capitalize text-gray-700">
            {posts.title.slice(0, 10)}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 capitalize">
          {posts.body.slice(0, 50)}
        </p>
      </div>
    </div>
  );
}

export default Post;
