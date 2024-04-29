import { useState } from "react";
import { login } from "./stores/slices/auth";
import { LoginRequest } from "./types/auth";
import { useAppDispatch } from "./stores";

function App() {
  const [count] = useState(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const params: LoginRequest = {
      email: email,
      password: password,
    };

    const res = await dispatch(login(params)).unwrap();
    console.log(res);
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-blue-300">
      <h1>{count}</h1>
      <button>Click</button>
      <form onSubmit={submitForm}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
