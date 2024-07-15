import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
	const pageSize = "5";
	const countryCode = "in";
	const apiKey = process.env.REACT_APP_NEWS_API_KEY;
	// const apiKey = "831467e1e683490c917fa39a08a1f0de";
	const [progress, setProgress] = useState(0);
	

	return (
		<>
			<BrowserRouter>
				<Navbar />
				<LoadingBar
					color="#f11946"
					progress={progress}
					onLoaderFinished={() => setProgress(0)}
				/>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<News
								setProgress={setProgress}
								key="general"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="general"
							/>
						}
					/>
					<Route
						exact
						path="/general"
						element={
							<News
								setProgress={setProgress}
								key="general"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="general"
							/>
						}
					/>
					<Route
						exact
						path="/business"
						element={
							<News
								setProgress={setProgress}
								key="business"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="business"
							/>
						}
					/>
					<Route
						exact
						path="/health"
						element={
							<News
								setProgress={setProgress}
								key="health"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="health"
							/>
						}
					/>
					<Route
						exact
						path="/science"
						element={
							<News
								setProgress={setProgress}
								key="science"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="science"
							/>
						}
					/>
					<Route
						exact
						path="/technology"
						element={
							<News
								setProgress={setProgress}
								key="technology"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="technology"
							/>
						}
					/>
					<Route
						exact
						path="/entertainment"
						element={
							<News
								setProgress={setProgress}
								key="entertainment"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="entertainment"
							/>
						}
					/>
					<Route
						exact
						path="/sports"
						element={
							<News
								setProgress={setProgress}
								key="sports"
								pageSize={pageSize}
								apiKey={apiKey}
								countryCode={countryCode}
								category="sports"
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
