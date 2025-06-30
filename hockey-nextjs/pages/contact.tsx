import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import { useEffect, useState } from "react";

const POSTS_QUERY = `*[_type == "post"]{ _id, title, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default function IndexPage() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  useEffect(() => {
    client
      .fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
      .then((data) => setPosts(data));
  }, []);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <h1>{post.title}</h1>
            <p>{post.publishedAt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
