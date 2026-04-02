import { posts } from "@repo/db/data";

export default function PostPage({
  params,
}: {
  params: { urlId: string };
}) {

  const post = posts.find(
    (p) => p.urlId === params.urlId
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <article>

      <h1>{post.title}</h1>

      <p>{post.content}</p>

    </article>
  );
}