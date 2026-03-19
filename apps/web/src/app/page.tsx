import styles from "./page.module.css";
import { posts } from "@repo/db/data";
import Link from "next/link";

export default function Home() {

  //filter active posts
  const activePosts = posts.filter((p) => p.active);

  return (
    <main className = {styles.main}>
      <h1>All Posts</h1>

      <ul>
        {activePosts.map((p) => (
          <li key={p.id}>
            <h2>
              <Link href={`/posts/${p.urlId}`}>{p.title}</Link>
            </h2>

            <p>{p.description}</p>
            <p>{p.category}</p>
            <p>{p.date.toDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
