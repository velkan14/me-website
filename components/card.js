import styles from "../styles/Home.module.css";

export default function Card({
  id,
  title,
  subtitle,
  remark,
  description,
  tags,
  url,
}) {
  return (
    <a key={id} href={url} className={styles.card}>
      <h3>
        {title} {url && <span>&rarr;</span>}
      </h3>
      <h4>{subtitle}</h4>
      <h5>{remark}</h5>
      {description && <p>{description}</p>}
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}
