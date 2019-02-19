const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


const createNotification = notification => {
  return admin.firestore().collection('notifications').add(notification)
    .then(doc => console.log('notification added', doc))
}

exports.studentRegister = functions.firestore.document('students/{studentId}')
  .onCreate(doc => {
    const student = doc.data()
    const now = admin.firestore.Timestamp.now()
    const notification = {
			content: "new student registered",
			student: `${student.name} ${student.email}`,
			time: now
    }
    createNotification(notification)
  })

