import styles from './ThankBlock.module.scss';

export const ThankBlock = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <img
        className={styles.images}
        src="/assets/images/icon-thank-you.svg"
        alt="Red circle with check mark."
      />
      <h2 className={styles.title}>Thank you!</h2>
      <p className={styles.text}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
