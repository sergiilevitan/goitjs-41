console.log('module 1.2')
  

// // === break===

// for (let i = 0; i < 1000; i += 5) {
//     // console.log(i);
//     if (i  === 710) {
//       console.log(i);
//         break;
//     }         
// }

// // === continue ==

// for (let i = 0; i < 100; i += 1) {
//     if (!(i % 5 === 0)) {
//         continue;
//     }
//      console.log(i);
// }

// // ==== spam check===
// const checkForSpam = (message) => {
//     const words = ['spam', 'sale', 'hui'];
//     const str = message.toLowerCase();
//     let hasSpam = false;
//     for (let i = 0; i < words.length; i += 1) {
//         let word = words[i];
//         if (str.includes(word)) {
//                hasSpam = true;
//         break;
//         }
         
//     }

//     return hasSpam;
// }

// console.log(checkForSpam('SPam sapdfasfasf'));
// console.log(checkForSpam('SPaf'));
// console.log(checkForSpam('SALE sapdfasfasf'));
// console.log(checkForSpam('hui hui hui '));

/// ===== login check

// const checkForLogin = (userLogin) => {
//     const logins = ['admin', 'root', 'user'];
    
//     let hasLogin = false;
//     for (const login of logins) {
//         if (userLogin === login) {
//             hasLogin = true;
//         }
//     }

//     return hasLogin;
// }

// console.log(checkForLogin('user'));
// console.log(checkForLogin('root'));
// console.log(checkForLogin('admhuiin'));
// console.log(checkForLogin('user'));