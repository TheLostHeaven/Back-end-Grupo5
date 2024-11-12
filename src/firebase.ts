import admin from 'firebase-admin'
import * as serviceAccount from '../serviceAccountKey.json'


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const auth = admin.auth();

const fireStore = admin.firestore();

export {fireStore, auth};