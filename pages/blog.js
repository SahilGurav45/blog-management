import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading blogs...</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.length === 0 && <p>No blogs found.</p>}

        {blogs.map(blog => (
          <div key={blog.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3 className={styles.h3}>{blog.title}</h3>
            </Link>
            <p className={styles.content}>
              {blog.content ? blog.content.substr(0, 150) + '...' : "No content available"}
            </p>
            <p className={styles.author}><b>Author:</b> {blog.author || blog.autor || "Unknown"}</p>
            <Link href={`/blogpost/${blog.slug}`}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
