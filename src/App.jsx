import ToDoList from "./components/ToDoList.jsx";

const App = () => {
	return (
		<div className="h-svh w-svh p-4 min-h-full min-w-full max-h-fit max-w-full flex items-center flex-col justify-start select-none">
			<ToDoList />
		</div>
	);
};

export default App;
