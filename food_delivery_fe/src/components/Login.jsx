import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import NavBar from './NavBar';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { username, password } = user; // Destructure username and password
        try {
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Use destructured values
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const data = await response.json(); // Parse the response JSON data
            alert('Login successful');
            setLoggedIn(true); // Set login status to true
            localStorage.setItem('username', username);
            console.log(loggedIn)
            localStorage.setItem('setLoggedIn', 'true'); // Store login status in local storage
            localStorage.setItem('loggedIn', 'true'); // Store login status in local storage
            console.log(localStorage.getItem('username'))

            navigate('/'); // Navigate to the home page
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert('Login failed');
        }
    };

    const handleCancel = () => {
        setUser({
            username: '',
            password: '',
        });
    };

    return (
        <div className="login-page-container">
            <div className="form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <label htmlFor="username">Username</label>

                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>

                    <button type="submit">Login</button>
                    <button type="button" className="cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default Login;



