import styles from "../styles/UserItem.module.css";

function UserItem ({name}){

    return(
        <div className={styles.divUserItem}>
            <p className={styles.pUserItem}>User:  {name}</p>
        </div>
    )
}
export default UserItem;