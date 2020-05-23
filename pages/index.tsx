import PostCard from "../components/PostCard";

const HomePage = () => {
  const data = [
    {
      id: 5465,
      url: "https://github.com/u2zv1wx/neut",
      title: "Show HN: A dependently-typed programming language with static memory management",
      publishedDate: "2 hours ago",
      points: "141",
      user: "u2zv1wx",
    },
    {
      id: 5465,
      url: "https://github.com/u2zv1wx/neut",
      title: "Show HN: A dependently-typed programming language with static memory management",
      publishedDate: "2 hours ago",
      points: "141",
      user: "u2zv1wx",
    },
    {
      id: 5465,
      url: "https://github.com/u2zv1wx/neut",
      title: "Show HN: A dependently-typed programming language with static memory management",
      publishedDate: "2 hours ago",
      points: "141",
      user: "u2zv1wx",
    }
  ]
  return (
    <div className="flex justify-center items-center flex-col">
      {data.map(item =>
        <PostCard
          key={item.id}
          url={item.url}
          title={item.title}
          publishedDate={item.publishedDate}
          points={item.points}
          user={item.user}
        />
      )}
    </div>
  );
}

export default HomePage;
