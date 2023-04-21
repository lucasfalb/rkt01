import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/D4E03AQG31vX5XMcIMA/profile-displayphoto-shrink_800_800/0/1677337850532?e=1684972800&v=beta&t=h7PVs-d4W6JRGifs2EjVHpohWZ61oLXtJNVolreSZGA" />
        <h2>lucasfalb</h2>
        <h3>Developer</h3>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
