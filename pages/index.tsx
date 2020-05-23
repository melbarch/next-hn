import useSWR from 'swr';
import PostCard from "../components/PostCard";

const API_URL = 'https://node-hnapi.herokuapp.com/news?page=1';

const fetcher = async (url: string) =>{
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

const HomePage = () => {
  const { data, error } = useSWR(API_URL, fetcher)
  console.log()
  if (error) return <div className="text-center text-red-700 font-bold text-3xl">failed to load</div>
  if (!data) return <div className="text-center text-gray-700">loading...</div>
  return (
    <div className="flex justify-center items-center flex-col">
      {data.map((item : any) =>
        <PostCard
          key={item.id}
          url={item.url}
          title={item.title}
          publishedDate={item.time_ago}
          points={item.points}
          user={item.user}
        />
      )}
    </div>
  );
}

export default HomePage;
