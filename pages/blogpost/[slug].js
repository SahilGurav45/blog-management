import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import style from '../../styles/BlogPost.module.css';

const Slug = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const { slug } = router.query;

    // ✅ Slug check
    if (!slug) return;

    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setBlog(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blog:", err);
        setError("Failed to fetch blog");
        setLoading(false);
      });
  }, [router.isReady, router.query.slug]);

  if (loading) {
    return <div className={style.loading}>Loading blog...</div>;
  }

  if (error) {
    return <div className={style.error}>{error}</div>;
  }

  return (
   <div className={style.container}>
  <main className={style.main}>
    <h1 className={style.title}>{blog.title}</h1>
    <hr className={style.hrLine} />
    <div className={style.content}>{blog.content}</div>
    <p className={style.author}><b>Author:</b> {blog.author}</p>
  </main>
</div>
  );
};

export default Slug;
