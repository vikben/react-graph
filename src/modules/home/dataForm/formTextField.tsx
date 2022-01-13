/**
 * @desc comp. for form filed of type mumeber
 * @author Vikram vikben@gmail.com
 */

import { AppTextField } from '../../../common/muiComponents/';

interface IProps {
  value: number;
  label: string;
  uniqueKey: string;
  onChangeFormValue: (value: string | number, key: string) => void;
}

function FormTextField(props: IProps) {
  const { value, label, uniqueKey, onChangeFormValue } = props;
  return (
    <AppTextField
      label={label}
      type='number'
      value={value}
      fullWidth
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChangeFormValue(Number(event.target.value), uniqueKey)
      }
    />
  );
}

export default FormTextField;
