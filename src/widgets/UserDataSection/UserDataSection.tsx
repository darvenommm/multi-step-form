import { Section } from '../../templates';
import { UserDataForm } from '../../features/userData';

import { useIsCorrectUserData } from '../../features/userData';

const title = 'Personal info';
const description = 'Please provide your name, email address and phone number.';

export const UserDataSection = (): JSX.Element => {
  const isCorrectForm = useIsCorrectUserData();

  return (
    <Section
      title={title}
      description={description}
      disabled={!isCorrectForm}
      order="first"
      isFocused={isCorrectForm}
    >
      <UserDataForm />
    </Section>
  );
};
