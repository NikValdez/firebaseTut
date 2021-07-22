import firebase from "firebase/app"
import "firebase/database"

var firebaseConfig = {
	apiKey: "API_KEY",
	authDomain: "AUTH_DOMAIN",
	databaseURL: "DATABASE_URL",
	projectId: "PROJECT_ID",
	storageBucket: "STORAGE_BUCKET",
	messagingSenderId: "MESSAGING_SENDER_ID",
	appId: "APP_ID"
}

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const notesRef = databaseRef.child("notes")
export default firebase
