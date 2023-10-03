import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    color: 'rgba(0,183,255, 1)',
    flexGrow: '1',
    padding: '2em',
    backgroundColor: 'red',
    marginLeft: '15px',
  },
}));
