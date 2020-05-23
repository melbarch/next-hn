
interface PostCardProps {
  url: string,
  title: string,
  publishedDate: string,
  points: string,
  user: string
}

const PostCard = ({ url, title, publishedDate, points, user }: PostCardProps) => (
  <div className="m-3 p-3 w-4/5 lg:w-2/3 rounded-md shadow-md">
      <a href={url} target="_blank" rel="noopener">
        <h3 className="text-2xl font-bold">{title}</h3>
      </a>
      <h5 className="text-gray-500">{publishedDate}</h5>
      <span className="flex justify-between" >
        <h5 className="text-black-500">by {user}</h5>
        <span className="flex">
          <h4>{points}</h4>
          <span className="fill-current text-yellow-500 h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" />
            </svg>
          </span>
        </span>
      </span>
  </div>
);

export default PostCard;