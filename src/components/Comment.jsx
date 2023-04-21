import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://media.licdn.com/dms/image/D4E03AQG31vX5XMcIMA/profile-displayphoto-shrink_800_800/0/1677337850532?e=1684972800&v=beta&t=h7PVs-d4W6JRGifs2EjVHpohWZ61oLXtJNVolreSZGA"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>lucasfalb</strong>
              <time title="19 de março às 23:56" dateTime="2022-03-19 23:56:32">
                Cerca de 1hr atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
