import Link from "next/link";
import { posts } from "@repo/db/data";

export default function CategoriesPage() {
  // Only active categories
  const activeCategories = Array.from(
    new Set(posts.filter((p) => p.active).map((p) => p.category))
  );

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {activeCategories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}