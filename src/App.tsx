import { StepsList } from './features/step';

import { useCurrentStep } from './features/step';

import styles from './scss/App.module.scss';

import { mainBlocks } from './mainBlocks';

export const App = (): JSX.Element => {
  const currentStep = useCurrentStep();

  return (
    <>
      <h1 className="visually-hidden">Site of step form.</h1>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <header className={styles.navigationContainer}>
            <StepsList />
          </header>
          <main className={styles.blockContainer}>
            {mainBlocks.find((block) => block.step === currentStep)?.component}
          </main>
        </div>
      </div>
    </>
  );
};
