import PostItem from "./PostItem";
import type { Post } from "@repo/db/data";

export default function PostList({
  posts,
}: {
  posts: Post[];
}) {

  return (
    <div>

      {posts.length === 0 ? (
        <p>0 Posts</p>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))
      )}

    </div>
  );
}