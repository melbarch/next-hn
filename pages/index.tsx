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
  if (!data) return (
    <main className="flex justify-center items-center flex-col">
      {Array.from(Array(10), (_, i) => i + 1).map((item: any) =>
        <div key={item} className="m-2 p-3 w-4/5 lg:w-2/3 rounded-md shadow-md bg-white">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
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
