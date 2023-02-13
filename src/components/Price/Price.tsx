import styles from './Price.module.scss';

interface PriceProps {
  sum: number;
  initial: string;
  hasPlus?: boolean;
}

export const Price = ({
  sum,
  initial,
  hasPlus = false,
}: PriceProps): JSX.Element => {
  return (
    <p className={styles.price}>
      {hasPlus && '+'}${sum}/{initial}
    </p>
  );
};
