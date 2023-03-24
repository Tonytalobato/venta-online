import { initializeApp } from "firebase/app";
import { getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC36aZbQpH4UvwfmOsKi-JiziqBlypVSVQ",
  authDomain: "venta-online-eacd3.firebaseapp.com",
  projectId: "venta-online-eacd3",
  storageBucket: "venta-online-eacd3.appspot.com",
  messagingSenderId: "264397913755",
  appId: "1:264397913755:web:f5711510438e69e4b6503e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ 
    prompt: "select_account"
})

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)


//guardar un usuario en la base de datos
const db = getFirestore();

export const createUserDocFromAuth = async (uid, name, email) => {
  const userDoc = doc(db, "users", uid)
  const getUserDoc = await getDoc(userDoc)
  const create_at = new Date()
  if (!getUserDoc.exists()) {
   try {
    await setDoc(userDoc, {
      name, 
      email,
      create_at
    }); 
    } catch (err) {
      console.log(err);
    }
  } 
};

export const createAuthUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  return response;
}

export const signInUser = async (email, password) => {
const response = await signInWithEmailAndPassword(auth, email, password)
return response;

}

export const signOutUser = async () => {
  await signOut (auth);
}
