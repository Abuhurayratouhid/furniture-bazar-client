// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// var process;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzB5UHYyj_pXsix2yBJYZv0wPjDm_V3LI",
  authDomain: "furniture-bazar-bece1.firebaseapp.com",
  projectId: "furniture-bazar-bece1",
  storageBucket: "furniture-bazar-bece1.appspot.com",
  messagingSenderId: "142764750906",
  appId: "1:142764750906:web:c5934e48888b5f4d1a1d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;