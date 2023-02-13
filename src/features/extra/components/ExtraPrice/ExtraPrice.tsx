import { Price } from '../../../../components';

import { Time } from '../../../timeOfTarif';
import { ExtraTitle } from '../../types';

import { getShortTimeOfTarif } from '../../../timeOfTarif';

import { extras } from '../../mock';

interface ExtraPriceProps {
  title: ExtraTitle;
  timeOfTarif: Time;
}

export const ExtraPrice = ({
  title,
  timeOfTarif,
}: ExtraPriceProps): JSX.Element => {
  const price = extras.find((extra) => extra.title === title)?.price[
    timeOfTarif
  ];

  return (
    <div>
      <Price
        sum={price || NaN}
        initial={getShortTimeOfTarif(timeOfTarif)}
        hasPlus
      />
    </div>
  );
};
