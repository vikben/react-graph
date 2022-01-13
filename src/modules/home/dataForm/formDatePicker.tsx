/**
 * @desc comp. for form filed of type date
 * @author Vikram vikben@gmail.com
 */

import { ElementType } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import moment from 'moment';

import { AppDatePicker, AppTextField } from '../../../common/muiComponents/';

interface IProps {
  date: string | null;
  onChangeFormValue: (value: string | number, key: string) => void;
}

function FormDatePicker(props: IProps) {
  const { date, onChangeFormValue } = props;
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <AppDatePicker
        label='Select date*'
        value={date}
        onChange={(newValue: Date) =>
          onChangeFormValue(moment(newValue).toISOString(), 'x')
        }
        renderInput={(params: ElementType) => (
          <AppTextField fullWidth {...params} />
        )}
      />
    </LocalizationProvider>
  );
}

export default FormDatePicker;
