// const User = require('../../models/User');
// const UserSession = require('../../models/UserSession');

// module.exports = (app) => {

//     //user sign-up to create a new user
//     app.post('/api/account/signup', (req, res, next) => {
//         const { body } = req;
//         const {
//             firstName,
//             lastName,
//             password,
//         } = body;

//         let {
//             email
//         } = body;

//         if (!firstName) {
//             return res.send({
//                 success: false,
//                 message: 'Error: First name is required.'
//             });
//         }
//         if (!lastName) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Last name is required.'
//             });
//         }
//         if (!userName) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Username is required.'
//             });
//         }
//         if (!email) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Email is required.'
//             });
//         }
//         if (!password) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Password is required.'
//             });
//         }
//         if (!title) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Title of Leader or Volunteer is required.'
//             });
//         }
//         email = email.toLowerCase();

//         //steps:
//         //1:Verify Email does not already exist
//         //2: Save
//         User.find({
//             email: email
//         }, (err, previousUsers) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server Error.'
//                 });
//             } else if (previousUsers.length > 0) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Account already exists.'
//                 });
//             }

//             //save the new user
//             const newUser = new User();


//             newUser.firstName = firstName;
//             newUser.lastName = lastName;
//             newUser.userName = userName;
//             newUser.email = email;
//             newUser.password = newUser.generateHash(password);
//             newUser.title = title;
//             newUser.save((err, user) => {
//                 if (err) {
//                     return res.send({
//                         success: false,
//                         message: 'Error: Server Error.'
//                     });
//                 }
//                 return res.send({
//                     success: true,
//                     message: 'You are succesfully signed up!.'
//                 });
//             });
//         });

//     });

//     //user sign-in to create user session
//     app.post('/api/account/signin', (req, res, next) => {
//         const { body } = req;
//         const {
//             password,
//         } = body;
//         let {
//             email
//         } = body;

//         if (!email) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Email is required.'
//             });
//         }
//         if (!password) {
//             return res.send({
//                 success: false,
//                 message: 'Error: Password is required.'
//             });
//         }
//         email = email.toLowerCase();

//         User.find({
//             email: email
//         }, (err, users) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server Error.'
//                 });
//             } if (users.length != 1) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Invalid.'
//                 });
//             }

//             const user = users[0];
//             if (!user.validPassword(password)) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Invalid.'
//                 });
//             }

//             //Otherwise Create user session
//             const userSession = new UserSession();
//             userSession.userId = user._id;
//             userSession.save((err, doc) => {
//                 if (err) {
//                     return res.send({
//                         success: false,
//                         message: 'Error: Server Error.'
//                     });
//                 }

//                 return res.send({
//                     success: true,
//                     message: 'Valid Sign-in.',
//                     token: doc._id
//                 });
//             });
//         });
//     });


//     app.get('/api/account/verify', (req, res, next) => {
//         //get token 
//         const { query } = req;
//         const { token } = query;
//         //verify it is unique and is not deleted
//         UserSession.find({
//             _id: token,
//             isDeleted: false
//         }, (err, sessions) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server error.'
//                 });
//             }
//             if (sessions.length != 1) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Invalid.'
//                 });
//             } else {
//                 return res.send({
//                     success: true,
//                     message: 'Good!'
//                 });
//             }
//         })
//     });

//     app.get('/api/account/logout', (req, res, next) => {
//         //get token 
//         const { query } = req;
//         const { token } = query;
//         //verify it is unique and is not deleted
//         UserSession.findOneAndUpdate({
//             _id: token,
//             isDeleted: false
//         }, {
//          $set:{isDeleted:true}   
//         }, null, (err, sessions) => {
//             if (err) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server error.'
//                 });
//             }
//             if (sessions.length != 1) {
//                 return res.send({
//                     success: false,
//                     message: 'Error: Invalid.'
//                 });
//             } else {
//                 return res.send({
//                     success: true,
//                     message: 'Good!'
//                 });
//             }
//         })
//     });

    
// };
