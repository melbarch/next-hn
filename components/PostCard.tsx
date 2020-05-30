
interface PostCardProps {
  id: Number,
  postType: string,
  url: string,
  domain: string,
  title: string,
  publishedDate: string,
  points: Number,
  user: string,
  commentsCount: Number
}

const getIcon = (type: string): JSX.Element => {
  switch (type) {
    case 'Ask':
      return (
        <span className="bg-orange-600 rounded-sm text-white mr-1 px-1 text-xs">
          Ask
        </span>)
    case 'Job':
      return (
        <span className="bg-teal-600 rounded-sm text-white mr-1 px-1 text-xs">
          Job
        </span>)
    case 'Tell':
      return (
        <span className="bg-blue-600 rounded-sm text-white mr-1 px-1 text-xs">
          Tell
        </span>)
    case 'Show':
      return (
        <span className="bg-yellow-600 rounded-sm text-white mr-1 px-1 text-xs">
          Show
        </span>)
    default:
      return (
        <span className="bg-gray-600 rounded-sm text-white mr-1 px-1 text-xs">
          {type}
        </span>)
  }
}

const PostCard = ({ id, postType, url, domain, title, publishedDate, points, user, commentsCount, }: PostCardProps) => {
  // set up default postCard:
  let postLink = url;
  let iconType = 'Link';

  if (postType === "ask") {
    postLink = "https://news.ycombinator.com/" + postLink
    iconType = "Ask"
  }
  else if (postType === "job") {
    iconType = "Job"
  }
  else if (!domain) {
    // If no domain and no ask => type tell
    postLink = "https://news.ycombinator.com/" + postLink
    iconType = "Tell"
  }
  else if (title.toLowerCase().startsWith('show hn:')) {
    // If no domain and no ask => type tell
    iconType = "Show"
  }

  return (
    <div className="m-2 p-3 w-4/5 lg:w-2/3 rounded-md shadow-md bg-white">
      <div>
        <a href={postLink} target="_blank" rel="noopener" className="text-2xl font-bold visited:text-gray-600">
          <h3>
            {title}
          </h3>
        </a>
      </div>
      <div className="flex items-center">
        <div>{getIcon(iconType)}</div>|
        <h5 className="text-black-500 text-sm ml-1">by <span className="font-semibold">{user}</span></h5>
      </div>
      <div className="flex justify-between" >
        <div className="flex text-sm">
          <h5 className="text-gray-500 mr-2">{publishedDate}</h5> |
          <h5 className="text-black-500 mx-2 hover:underline">
            <a href={"https://news.ycombinator.com/item?id=" + id} target="_blank" rel="noreferrer noopener">
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
      </div>
    </div>
  )
};

export default PostCard;