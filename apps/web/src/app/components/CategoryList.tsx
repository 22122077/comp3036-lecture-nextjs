import Link from "next/link";
import { posts } from "@repo/db/data";

export default function CategoryList() {

  // Get active categories
  const categories = Array.from(
    new Set(
      posts
        .filter((p) => p.active)
        .map((p) => p.category)
    )
  );

  return (
    <div>

      <h2>Categories</h2>

      <ul>
        {categories.map((category) => (
          <li key={category}>

            <Link href={`/category/${category}`}>
              {category}
            </Link>

          </li>
        ))}
      </ul>

    </div>
  );
}