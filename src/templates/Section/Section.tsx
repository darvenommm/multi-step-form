import { ReactElement } from 'react';

import { HeaderBlock, StepButtons } from '../../components';

import { StepButtonsProps, HeaderBlockProps } from '../../components';

import styles from './Section.module.scss';

interface SectionProps extends StepButtonsProps, HeaderBlockProps {
  children: ReactElement;
}

export const Section = ({
  title,
  description,
  children,
  order,
  disabled,
  prevText,
  nextText,
  isFocused = true,
}: SectionProps): JSX.Element => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.headerContainer}>
          <HeaderBlock title={title} description={description} />
        </div>
        {children}
      </div>
      <div className={styles.footerContainer}>
        <StepButtons
          disabled={disabled}
          order={order}
          prevText={prevText}
          nextText={nextText}
          isFocused={isFocused}
        />
      </div>
    </section>
  );
};
