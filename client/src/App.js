import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Recruitprocess from "./components/Recruitmentprocess/Recruitprocess";
import Recruiterpage from "./components/Recruiterpage/Recruiterpage";
import Studentpage from "./components/Studentpage/Studentpage";
import Form from "./components/Form/Form";
import Home from "./components/Home";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/main" exact element={<Main />} />}
			<Route path="/" element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/main" element={<Navigate replace to="/login" />} />
			<Route path="/recruitprocess" element={<Recruitprocess />} />
            <Route path="/recruiterpage" element={<Recruiterpage />} />
             <Route path="/studentpage" element={<Studentpage />} />
              <Route path="/form" element={<Form />} />
		</Routes>
	);
}

export default App;
