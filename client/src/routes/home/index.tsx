import { useState } from "react";
import { Loader, PostCard, FormField } from "../../components";
import { PostProps } from "../../types";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section>
      <div className="h-[50dvh] flex-center flex-col text-center shadow-cardhover">
        <h1 className="text-5xl font-bold capitalize text-primary">Unleash the power of imagination</h1>
        <p className="text-text ">Transforms your ideas into stunning visuals. Whether you're a seasoned designer or a creative enthusiast.</p>
      </div>
      <div>
        <FormField placeholder="Imagine.." />
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : searchQuery ? (
          <ReaderCards data={posts} title="No search result found!" />
        ) : (
          <div>
            <ReaderCards data={posts} title="No posts found!" />
          </div>
        )}
      </div>
    </section>
  );
}

function ReaderCards({ data, title }: any) {
  if (data.length === 0)
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );

  return data.map((post: any) => <PostCard key={post._id} {...post} />);
}
