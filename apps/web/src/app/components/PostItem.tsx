import Link from "next/link";
import type { Post } from "@repo/db/data";

export default function PostItem({
  post,
}: {
  post: Post;
}) {

  return (
    <article>

      <h2>

        <Link href={`/post/${post.urlId}`}>
          {post.title}
        </Link>

      </h2>

      {/* short description */}
      <p>{post.description}</p>

      {/* date */}
      <p>
        {post.date.toLocaleDateString()}
      </p>

      {/* category */}
      <p>
        Category: {post.category}
      </p>

    </article>
  );
}