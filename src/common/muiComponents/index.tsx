/**
 * @desc this file will contain all the material ui comp. that are going to be be used on the application
 * @author Vikram vikben@gmail.com
 */

import DatePicker from '@mui/lab/DatePicker';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Container, { ContainerProps } from '@mui/material/Container';
import Grid, { GridProps } from '@mui/material/Grid';
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

export const AppDatePicker = (props: any) => <DatePicker {...props} />;
export const AppTextField = (props: TextFieldProps) => <TextField {...props} />;
export const AppLoadingButton = (props: LoadingButtonProps) => <LoadingButton {...props} />;
export const AppContainer = (props: ContainerProps) => <Container {...props} />;
export const AppGrid = (props: GridProps) => <Grid {...props} />;
