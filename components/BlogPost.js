import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ children, title, date }) => {
  return (
    <article className={styles.blogpost}>
      <h1>{title}</h1>
      <span className={styles.date}>{date}</span>
      {children}
    </article>
  );
};

export default BlogPost;
