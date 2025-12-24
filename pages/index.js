import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const blogs = [
    {
      title: "Mastering JavaScript in 2025",
      content: "JavaScript is essential for modern web apps. Learn fundamentals, ES6+ features, DOM manipulation, and build dynamic websites with confidence."
    },
    {
      title: "Next.js: Fast & SEO-Friendly Apps",
      content: "Next.js lets you create blazing-fast React apps. Learn routing, SSR, SSG, and API routes to become a full-stack developer."
    },
    {
      title: "React Best Practices",
      content: "Optimize your React apps with proper component structure, hooks, state management, and performance techniques for scalable UI."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>TechRoots</title>
        <meta name="description" content="TechRoots Blog" />
        <meta name="keywords" content="nextjs, techroots blog, react, javascript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section with Background */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>&lt;TechRoots/&gt;</h1>
            <p>Learn, Build & Grow in Web Development</p>
          </div>
        </section>

        {/* Blogs Section */}
        <section className={styles.blogSection}>
          <h2>Latest Blogs</h2>
          <div className={styles.blogGrid}>
            {blogs.map((blog, index) => (
              <div key={index} className={styles.blogCard}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <button>Read More</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        &copy; 2025 TechRoots. All rights reserved.
      </footer>
    </div>
  )
}
