import { ThankBlock } from '../../components';

import styles from './ThankSection.module.scss';

// He will have logic in future
export const ThankSection = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <ThankBlock />
    </section>
  );
};
