import './App.css'
import {ToDoListItem} from "./ToDoListItem.tsx";
import {HomeWorkTasks} from "./HomeWorkTasks.tsx";

export type MainTasks = {
	id: number
	title: string
	isDone: boolean
}

const Task1: MainTasks[] = [
	{id: 1, title: "HTML&CSS", isDone: true},
	{id: 2, title: "JS", isDone: true},
	{id: 3, title: "ReactJS", isDone: false},
	{id: 4, title: "Redux", isDone: false},
	{id: 5, title: "Sass", isDone: false},
	{id: 6, title: "Coffee", isDone: false},
]



export const App = () => {
	return (
		<div className="app">
			{/*<ToDoListItem title={"What to learn"} tasks={Task1} date={"27.07.2027"}/>*/}
			<HomeWorkTasks/>
		</div>
		
	)
}

