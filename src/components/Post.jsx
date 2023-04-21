import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://media.licdn.com/dms/image/D4E03AQG31vX5XMcIMA/profile-displayphoto-shrink_800_800/0/1677337850532?e=1684972800&v=beta&t=h7PVs-d4W6JRGifs2EjVHpohWZ61oLXtJNVolreSZGA"
          />
          <div className={styles.authorInfo}>
            <strong>lucasfalb</strong>
            <span>Developer</span>
          </div>
        </div>
        <time title="19 de março às 23:56" dateTime="2022-03-19 23:56:32">
          Publicado há 1hr
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
