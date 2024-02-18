// document.getElementById('loginForm').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     try {
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password }),
//         });

//         if (!response.ok) {
//             throw new Error('Login failed');
//         }

//         const data = await response.json();
//         console.log('Login successful:', data);
//         // Redirect to another page or show login success message
//     } catch (error) {
//         console.error(error.message);
//         // Show an error message to the user
//     }
// });
