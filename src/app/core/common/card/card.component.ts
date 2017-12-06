import { Component, OnInit } from '@angular/core';
import { Check } from '../checklist/checklist.component';


interface Card {
  id: number,
  text: string,
  status: number,
  checkList?: Check []

}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {

  private card: Card = {
    id: 1,
    text: 'Esta es la tarea de ejemplo',
    status: 0,
    checkList: [
      { status: false, dueDate: new Date(), text: "Tarea1" },
      { status: false, dueDate: new Date(), text: "Tarea2" },
      { status: false, dueDate: new Date(), text: "Tarea3" },
      { status: false, dueDate: new Date(), text: "Tarea4" },
      { status: false, dueDate: new Date(), text: "Tarea5" }
    ]
  } 
  constructor() { }

  ngOnInit() {
  }

}
