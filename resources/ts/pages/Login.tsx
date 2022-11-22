// pages/Login.tsx
import '../Login.css'
const Login = () => {
	return (
		<main>
			<form>
				<h1>Please sign in</h1>

				<div>
					<input type="email" id="floatingInput" placeholder="name@example.com" />
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div>
					<input type="password" id="floatingPassword" placeholder="Password" />
					<label htmlFor="floatingPassword">Password</label>
				</div>

				<button type="submit">Sign in</button>
			</form>
	  	</main>
	)
}
export default Login
