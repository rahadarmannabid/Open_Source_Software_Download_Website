import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

// Initialize Firebase Admin (server-side only)
const initAdmin = () => {
  if (getApps().length === 0) {
    try {
      const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT;
      const databaseURL = process.env.FIREBASE_DATABASE_URL;

      if (!databaseURL) {
        throw new Error('FIREBASE_DATABASE_URL is not set in environment variables');
      }

      if (serviceAccountEnv) {
        // Parse and use service account credentials
        let serviceAccount;
        try {
          serviceAccount = JSON.parse(serviceAccountEnv);
        } catch (e) {
          console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', e);
          throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT format');
        }

        console.log('Initializing Firebase with service account for project:', serviceAccount.project_id);
        
        initializeApp({
          credential: cert(serviceAccount),
          databaseURL: databaseURL,
        });
      } else {
        // For local development without service account
        console.warn('FIREBASE_SERVICE_ACCOUNT not found, initializing without credentials');
        console.warn('This will only work if you have gcloud credentials or are using an emulator');
        
        initializeApp({
          databaseURL: databaseURL,
        });
      }
    } catch (error) {
      console.error('Firebase initialization error:', error);
      throw error;
    }
  }
  return getDatabase();
};

export { initAdmin };

