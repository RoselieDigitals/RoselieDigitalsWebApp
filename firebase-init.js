// -----------------------------------------------------------------------------
//  firebase-init.js – Hardcoded config (no setup form required)
// -----------------------------------------------------------------------------

import {
  initializeApp,
  getApps,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  child,
  onValue,
  push,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// 🔐 Hardcoded Firebase config for TaxiUpTax
const firebaseConfig = {
  apiKey: "AIzaSyBnoJuNKlKgdm7niZv83p343ozflpfsBlo",
  authDomain: "roselie-digitals-4ece4.firebaseapp.com",
  projectId: "roselie-digitals-4ece4",
  storageBucket: "roselie-digitals-4ece4.appspot.com",
  messagingSenderId: "506496490813",
  appId: "1:506496490813:web:443b255a18bfcd08ce3954",
  databaseURL: "https://taxiuptax-default-rtdb.firebaseio.com",
};

// ✅ Initialize Firebase (once only, for hot reload safety)
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// 📦 Export Firebase services for use in your other modules
export { app, auth, db, ref, get, set, update, remove, child, onValue, push };
