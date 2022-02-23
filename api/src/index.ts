import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import app from './app';

const SERVICE_START_MESSAGE = 'Products API server started on port:';
const PORT = (process.env.PORT || 9000);

app.listen(PORT, () => {
    logger.info(`${SERVICE_START_MESSAGE} ${PORT}`);
});
