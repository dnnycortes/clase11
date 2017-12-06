import { Component, OnInit } from '@angular/core';


interface Task{
	name: string;
	status: any;
	checkList?: any;
}

@Component({
	selector: 'app-check',
	templateUrl: './check.component.html',
	styleUrls: ['./check.component.scss']
})



export class CheckComponent implements OnInit {

	// task
	/*{
		name: "",
		status: [0 | 1 | 2 | 3 | 4 | 5],
		checkList?: {
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' }
		}
	}*/

	public foo: any;

	constructor() { }

	ngOnInit() {
	}

}
