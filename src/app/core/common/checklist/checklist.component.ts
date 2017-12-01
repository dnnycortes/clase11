import { Component, OnInit } from '@angular/core';



interface Check{
	status: boolean;
	dueDate: Date;
	text: string;
	user?: number;

}



@Component({
	selector: 'app-checklist',
	templateUrl: './checklist.component.html',
	styleUrls: ['./checklist.component.scss']
})



export class ChecklistComponent implements OnInit {

	private checkList: Check[];

	constructor() { }

	ngOnInit() {
		this.checkList = [
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' }
		]
	}

}
