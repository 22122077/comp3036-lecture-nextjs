import { posts } from "@repo/db/data";
import PostList from "../../components/PostList";

export default function CategoryPage({
  params,
}: {
  params: { name: string };
}) {

  const categoryName = params.name;

  const filteredPosts = posts.filter(
    (post) =>
      post.active &&
      post.category === categoryName
  );

  return (
    <div>

      <h1>{categoryName}</h1>

      <PostList posts={filteredPosts} />

    </div>
  );
}