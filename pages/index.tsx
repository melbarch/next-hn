import useSWR from 'swr';
import PostCard from "../components/PostCard";

const API_URL = 'https://node-hnapi.herokuapp.com/news?page=1';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const HomePage = () => {
  const { data, error } = useSWR(API_URL, fetcher)
  if (error) return <div className="text-center text-red-700 font-bold text-3xl bg-gray-100">failed to load</div>
  if (!data) return <div className="text-center text-gray-700 bg-gray-100">loading...</div>
  return (
    <main className="flex justify-center items-center flex-col">
      {data.map((item: any) =>
        <PostCard
          key={item.id}
          id={item.id}
          postType={item.type}
          domain={item.domain}
          url={item.url}
          title={item.title}
          publishedDate={item.time_ago}
          points={item.points}
          user={item.user}
          commentsCount={item.comments_count}
        />
      )}
    </main>
  );
}

export default HomePage;
