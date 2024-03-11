import styles from './study-web.module.css';

/* eslint-disable-next-line */
export interface StudyWebProps {}

export function StudyWeb(props: StudyWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StudyWeb!</h1>
    </div>
  );
}

export default StudyWeb;
