import styles from "./styles.module.css";

export interface BookCoverProps {
  title: string;
  src: string;
  tag: string;
}

export default function BookCover(props: BookCoverProps) {
  const { src, tag, title } = props;
  return (
    <div className={styles.container}>
      <div className={styles.book}>
        <div className={styles.front}>
          <div
            style={{ backgroundImage: `url(${src})` }}
            className={styles.cover}
          >
            {/* <p className="num-up">20</p>

            <p className="num-down">A</p> */}
            {/* <div className={styles.frostedGlass}> */}
            <p className={styles.author}>{title}</p>
            {/* </div> */}
          </div>
        </div>
        <div className={styles["left-side"]}>
          <h2>
            <span>{title}</span>
            <span>{tag}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
