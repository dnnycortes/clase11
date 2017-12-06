import { Component, OnInit, AfterViewInit } from '@angular/core';




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



export class ChecklistComponent implements OnInit, AfterViewInit {

	private checkList: Check[];

	constructor() { }

	ngOnInit() {
		this.checkList = [
			{ status: false, dueDate: new Date(), text: 'Tarea 1: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 2: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 3: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 4: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 5: ' },
			{ status: false, dueDate: new Date(), text: 'Tarea 6: ' }
		]
	}

	ngAfterViewInit(){
		this.checkList.forEach((item: CheckComponent) => item.foo = "Hola" );
	}

	foo(){
		this.checkList.push({status: false, dueDate: new Date(), text: 'Tarea 2: '})
	}

}
