import app from './app';
import { initDatabase } from './DB/init';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await initDatabase();
    console.log('Database connected and synced');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
