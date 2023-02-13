import { Section } from '../../templates';
import { ExtrasList } from '../../features/extra';

import { useTimeOfTarif } from '../../features/timeOfTarif';

const title = 'Pick add-ons';
const description = 'Add-ons help enhance your gaming experience.';

export const ExtrasSection = (): JSX.Element => {
  const timeOfTarif = useTimeOfTarif();

  return (
    <Section title={title} description={description}>
      <ExtrasList timeOfTarif={timeOfTarif} />
    </Section>
  );
};
