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
    const isNew = true
    admin.firestore().collection('students').where('mobile', '==', student.mobile).get()
      .then(querySnapshot => {
        isNew = false
        querySnapshot.forEach(queryDoc => {
          if (queryDoc.id == doc.id) {
            admin.firestore().collection('students').doc(queryDoc.id).delete()
          } else {
            admin.firestore().collection('students').doc(queryDoc.id).set(student)
          }
        })
      })
    const now = admin.firestore.Timestamp.now()
    const notification = {
      content: isNew ? 'new student registered' : 'previous student has re-register',
      student: `${student.name} ${student.mobile}`,
      time: now
    }
    return createNotification(notification)    
  })

