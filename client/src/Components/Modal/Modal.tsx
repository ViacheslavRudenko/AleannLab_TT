import styles from "./index.module.scss";
import { ModalTypes } from "./types";

export const Modal = ({
  title,
  content,
  isModalOpen,
  setIsModalOpen,
}: ModalTypes) => {
  return (
    <>
      {isModalOpen ? (
        <>
          <div className={styles.box}>
            <div className={styles.boxModal}>
              <div className={styles.smallBoxModal}>
                <div className={styles.headerBox}>
                  <h3 className={styles.headerTitle}>{title}</h3>
                  <button
                    className={styles.headerbtn}
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    X
                  </button>
                </div>
                <div className={styles.contentBox}>{content}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
