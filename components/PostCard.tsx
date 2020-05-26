
interface PostCardProps {
  id: Number,
  url: string,
  title: string,
  publishedDate: string,
  points: Number,
  user: string,
  commentsCount: Number
}

const PostCard = ({ url, title, publishedDate, points, user, commentsCount, id }: PostCardProps) => (
  <div className="m-2 p-3 w-4/5 lg:w-2/3 rounded-md shadow-md bg-white">
    <h3>
      <a href={url} target="_blank" rel="noopener" className="text-2xl font-bold visited:text-gray-600">
        {title}
      </a>
    </h3>
    <span className="flex justify-between" >
      <div className="flex text-sm">
        <h5 className="text-gray-500 mr-2">{publishedDate}</h5> |
        <h5 className="text-black-500 mx-2 hover:underline">
          <a href={"https://news.ycombinator.com/item?id=" + id} target="_blank" rel="noopener">
            {commentsCount} comments
          </a>
        </h5>
      </div>
      <span className="flex items-center">
        <h4>{points}</h4>
        <span className="fill-current text-yellow-500 h-5 w-5 ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" />
          </svg>
        </span>
      </span>
    </span>
    <h5 className="text-black-500 text-sm">by {user}</h5>
  </div>
);

export default PostCard;