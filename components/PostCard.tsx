
interface PostCardProps {
  url: string,
  title: string,
  publishedDate: string,
  points: string,
  user: string
}

const PostCard = ({ url, title, publishedDate, points, user }: PostCardProps) => (
  <div className="my-3 p-3 lg:w-1/2 rounded-md shadow-md">
    <a href={url}>
      <h3 className="text-2xl font-bold">{title}</h3>
    </a>
    <h5 className="text-gray-500">{publishedDate} - {points} points</h5>
    <h5 className="text-gray-500">by {user} </h5>
  </div>
);

export default PostCard;