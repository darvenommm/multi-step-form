import styles from './HeaderBlock.module.scss';

export interface HeaderBlockProps {
  title: string;
  description: string;
}

export const HeaderBlock = ({
  title,
  description,
}: HeaderBlockProps): JSX.Element => {
  return (
    <header>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
};
