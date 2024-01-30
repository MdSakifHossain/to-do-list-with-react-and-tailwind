import { useState } from "react";

const ToDoList = () => {
	const [tasks, setTasks] = useState([
		"get up from bed",
		"brush your teeth",
		"get ready bitch",
		"go to school bitch"
	]);
	const [newTask, setNewTask] = useState("");

	const handleNewTask = event => {
		setNewTask(event.target.value);
	};

	const handleAddTask = () => {
		if (newTask.trim() !== "") {
			setTasks(t => [...t, newTask]);
			setNewTask("");
		}
	};

	const handleDeleteTask = index => {
		setTasks(t => t.filter((_, i) => index !== i));
	};

	const handleTaskUp = index => {
		if (index > 0) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index - 1]] = [
				updatedTasks[index - 1],
				updatedTasks[index]
			];

			setTasks(t => [...updatedTasks]);
		}
	};

	const handleTaskDown = index => {
		if (index < tasks.length - 1) {
			const updatedTasks = [...tasks];
			[updatedTasks[index], updatedTasks[index + 1]] = [
				updatedTasks[index + 1],
				updatedTasks[index]
			];

			setTasks(t => [...updatedTasks]);
		}
	};

	return (
		<div className="flex items-center justify-start flex-col gap-3">
			<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
				To-Do-List
			</h2>
			<div className="flex w-full items-center space-x-2 md:w-1/3">
				<input
					className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
					type="text"
					placeholder="Enter Your Task..."
					value={newTask}
					onChange={handleNewTask}
				></input>
				<button
					type="button"
					className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm active:bg-emerald-600"
					onClick={handleAddTask}
				>
					Add_Task
				</button>
			</div>

			<ul className="w-full flex items-center justify-start flex-col gap-1.5">
				{tasks.map((task, index) => (
					<li
						key={index}
						className="border w-full flex items-center justify-between px-1.5 py-3 rounded capitalize"
					>
						<span className="font-medium">
							{index + 1}. {task}
						</span>
						<div className="flex justify-between items-center gap-1">
							<button
								className="rounded-full bg-black text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								onClick={() => handleTaskUp(index)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-arrow-up-circle"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<polyline points="16 12 12 8 8 12"></polyline>
									<line x1="12" y1="16" x2="12" y2="8"></line>
								</svg>
							</button>
							<button
								className="rounded-full bg-black text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								onClick={() => handleTaskDown(index)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-arrow-down-circle"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<polyline points="8 12 12 16 16 12"></polyline>
									<line x1="12" y1="8" x2="12" y2="16"></line>
								</svg>
							</button>
							<button
								className="rounded-full bg-black text-sm text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
								onClick={() => handleDeleteTask(index)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-x-circle"
								>
									<circle cx="12" cy="12" r="10"></circle>
									<line x1="15" y1="9" x2="9" y2="15"></line>
									<line x1="9" y1="9" x2="15" y2="15"></line>
								</svg>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;
