import './App.css'
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
			<HomeWorkTasks/>
		</div>
		
	)
}

