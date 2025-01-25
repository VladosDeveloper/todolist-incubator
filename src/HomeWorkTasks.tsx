// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component HomeWorkTasks, where you will render these arrays.
// -Don't forget to assign types to our data.


import {Button} from "./Button.tsx";

type TasksArrayType = {
	id: number
	title: string
	isDone: boolean
}

export type TasksType = {
	title: string
	dataTasks: Array<TasksArrayType>
	students: Array<string>
}


const data1: TasksType = {
	title: "What to do",
	dataTasks: [
		{id: 1, title: "HTML&CSS2", isDone: true},
		{id: 2, title: "JS2", isDone: true}
	],
	students: [
		'Jago Wormald1',
		'Saul Milne2',
		'Aariz Hester3',
		'Dion Reeve4',
		'Anisa Ortega5',
		'Blade Cisneros6',
		'Malaikah Phelps7',
		'Zeeshan Gallagher8',
		'Isobella Vo9',
		'Rizwan Mathis10',
		'Menaal Leach11',
		'Kian Walton12',
		'Orion Lamb13',
		'Faizah Huynh14',
		'Crystal Vaughan15',
		'Vivien Hickman16',
		'Stuart Lu17',
		'Karol Davison18',
		'Dario Burns19',
		'Chloe Rich20',
		'Martyna Felix',
		'Nida Glass',
		'Maeve Miles',
		'Hasnain Puckett',
		'Ayman Cano',
		'Safwan Perry',
		'Fox Kelly',
		'Louise Barlow',
		'Malaki Mcgill',
		'Leanna Cline',
		'Willard Hodge',
		'Amelia Dorsey',
		'Kiah Porter',
		'Jeanne Daly',
		'Mohsin Armstrong',
		'Laurie Rangel',
		'Princess Tierney',
		'Kasim Kendall',
		'Darryl Cope',
		'Elysha Ray',
		'Liyana Harris',
		'Kashif Blackburn',
		'Atif Zimmerman',
		'Sila Hartley',
		'Ralphie Hebert',
	]
}
const data2: TasksType = {
	title: "What to learn",
	dataTasks: [
		{id: 1, title: "HTML&CSS", isDone: true},
		{id: 2, title: "JS", isDone: true}
	],
	students: [
		'Rick Kane',
		'Finnlay Bentley',
		'Samia North',
		'Isaac Morton',
		'Lily-Ann Clifford',
		'Thalia Park',
		'Sapphire Cruz',
		'Cieran Vazquez',
		'Anya Estes',
		'Dominika Field',
		'Rosanna Chung',
		'Safiyah Davey',
		'Ryley Beasley',
		'Kalvin Trejo',
		'Evie-Mae Farrell',
		'Juliet Valencia',
		'Astrid Austin',
		'Lyle Montgomery',
		'Nisha Mora',
		'Kylie Callaghan',
		'Star Wilks',
		'Marissa Colley',
		'Asa Fuller',
		'Leigh Kemp',
		'Avleen Dawson',
		'Sammy Bonilla',
		'Acacia Becker',
		'Coral Shepherd',
		'Melina Molina',
		'Kiran Bailey',
		'Clara Escobar',
		'Alexandru Horn',
		'Brandon-Lee Mercado',
		'Elouise Weston',
		'King Long',
		'Kerri Searle',
		'Kanye Hamer',
		'Elwood Benitez',
		'Mikail Whitaker',
		'Bobby Hardy',
		'Talha Ferry',
		'Priscilla Landry',
		'Olivia-Grace Cain',
		'Kiaan Wallace',
		'Wesley Padilla90',
		'Ella-Grace Wooten91',
		'Kaif Molloy92',
		'Kamal Broadhurst93',
		'Bianca Ferrell94',
		'Micheal Talbot95',
	]
}


export const HomeWorkTasks = () => {
	
	return (
		<>
			<TASKS title={data1.title} dataTasks={data1.dataTasks} students={data1.students} />
			<TASKS title={data2.title} dataTasks={data2.dataTasks} students={data2.students} />
		</>
	);
	
}


const TASKS = ({title, dataTasks, students}: TasksType) => {
	return (
		<div>
			<h3>{title}</h3>
			<div>
				<input/>
				<Button title={"+"}/>
			</div>
			
			{dataTasks.length === 0 ? (
				<p>Тасок нет!</p>
			) : (
				<ul>
					{dataTasks.map((item) => {
						return (
							<li key={item.id}>
								<input type="checkbox" checked={item.isDone}/>
								<span>{item.title}</span>
							</li>
						)
					})}
				</ul>)
			}
			
			<p>All students</p>
			<ul>
				{students.map((item) => {
					return <li>{item}</li>
				})}
			</ul>
			
			
			<div>
				<Button title={"All"}/>
				<Button title={"Active"}/>
				<Button title={"Completed"}/>
			</div>
			
		</div>
	)
}
