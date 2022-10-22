// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: 'AIzaSyAFXlVf0Zt2KL7R7HaRFJW6kRZfVjVQEe0',
  authDomain: 'dragon-news-4e9ab.firebaseapp.com',
  projectId: 'dragon-news-4e9ab',
  storageBucket: 'dragon-news-4e9ab.appspot.com',
  messagingSenderId: '440428856647',
  appId: '1:440428856647:web:6792ca2dc3cd1796723862',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
