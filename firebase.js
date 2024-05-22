  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAez9mQ4VRE2kZhhzgWgeyuFPGE8TDr2ss",
    authDomain: "nguyen-hong-hien.firebaseapp.com",
    databaseURL: "https://nguyen-hong-hien-default-rtdb.firebaseio.com",
    projectId: "nguyen-hong-hien",
    storageBucket: "nguyen-hong-hien.appspot.com",
    messagingSenderId: "80650028203",
    appId: "1:80650028203:web:7ba6a8499809208286a3ee",
    measurementId: "G-1SHJM55F1W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

