import styles from './StepItem.module.scss';

interface StepItemProps {
  index: number;
  title: string;
  isActive: boolean;
}

export const StepItem = ({
  index,
  title,
  isActive,
}: StepItemProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <div className={[styles.icon, isActive ? styles.active : ''].join(' ')}>
        <span>{index}</span>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.extraText}>STEP {index}</p>
        <p className={styles.text}>{title}</p>
      </div>
    </li>
  );
};
