import {Button} from "./Button.tsx";
import {MainTasks} from "./App.tsx";

type Props = {
	title: string
	tasks: MainTasks[]
	date?: string
}


export const ToDoListItem = ({title, date, tasks}: Props) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={"+"}/>
			</div>
			
			{tasks.length === 0 ? (
				<p>Тасок нет!</p>
			) : (
				<ul>
					{tasks.map((item) => {
						return (
							<li key={item.id}>
								<input type="checkbox" checked={item.isDone}/>
								<span>{item.title}</span>
							</li>
						)
					})}
				</ul>)
			}
	
			
			<div>
				<Button title={"All"}/>
				<Button title={"Active"}/>
				<Button title={"Completed"}/>
			</div>
			<div>{date}</div>
		</div>
	);
};

