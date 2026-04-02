import { posts } from "@repo/db/data";
import CategoryList from "./components/CategoryList";
import PostList from "./components/PostList";

export default function HomePage() {

  const activePosts = posts.filter(
    (p) => p.active
  );

  return (
    <div>

      <CategoryList />

      <PostList posts={activePosts} />

    </div>
  );
}