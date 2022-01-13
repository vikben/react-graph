/**
 * @desc this comp. holds the form with start date, min and max text filds
 * @author Vikram vikben@gmail.com
 */

import { useContext, useState, useEffect, useCallback, memo } from 'react';

import { GraphData } from '../../../interface';
import {
  AppLoadingButton,
  AppContainer,
  AppGrid,
} from '../../../common/muiComponents/';

import { AppContext } from '../../../context';
import FormDatePicker from './formDatePicker';
import FormTextField from './formTextField';
import { usePostData } from '../../../service';

function DataForm() {
  const { state } = useContext(AppContext);
  const { isPostLoading } = state;

  // flag to disable or enable button
  const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

  // intial state of the form where x is date vale
  const [formState, setFormState] = useState<GraphData>({
    x: null,
    min: 0,
    max: 0,
    avg: 0,
  });

  // hook to send form data to server
  const [apiMethod] = usePostData('/points', formState);

  useEffect(() => {
    // enable button if all values of the form fileds get filled
    if (formState.x !== null) {
      setIsButtonDisable(false);
    }
  }, [formState]);

  // set form state when form filed value changes
  const onChangeFormValue = useCallback(
    (value: string | number, key: string) => {
      const cloneState = { ...formState };
      cloneState[key] = value;
      cloneState.avg = Math.round((cloneState.min + cloneState.max) / 2);
      setFormState(cloneState);
    },
    [formState]
  );

  // function to call custome hook for sending form data to server
  const addNewData = useCallback(() => {
    apiMethod();
  }, [apiMethod]);

  return (
    <AppContainer maxWidth='xl'>
      <AppGrid container spacing={2} alignItems='center'>
        <AppGrid item xs={3}>
          <FormDatePicker
            date={formState.x}
            onChangeFormValue={onChangeFormValue}
          />
        </AppGrid>
        <AppGrid item xs={3}>
          <FormTextField
            label='Max*'
            value={formState.max}
            uniqueKey='max'
            onChangeFormValue={onChangeFormValue}
          />
        </AppGrid>
        <AppGrid item xs={3}>
          <FormTextField
            label='Min*'
            value={formState.min}
            uniqueKey='min'
            onChangeFormValue={onChangeFormValue}
          />
        </AppGrid>
        <AppGrid item xs={3}>
          <AppLoadingButton
            fullWidth
            variant='contained'
            onClick={() => addNewData()}
            disabled={isButtonDisable}
            loading={isPostLoading}
          >
            Add
          </AppLoadingButton>
        </AppGrid>
      </AppGrid>
    </AppContainer>
  );
}

export default memo(DataForm);
