import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';

const ErrorMessageModal = () => (
  <Dialog open>
    <Alert severity="error">
      <AlertTitle data-testid="error-modal-title">App Error</AlertTitle>
      An Error happened with some of the app components! Look at DevTools for
      more details!
    </Alert>
  </Dialog>
);

export default ErrorMessageModal;
