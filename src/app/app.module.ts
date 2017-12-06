import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ChecklistComponent } from './core/common/checklist/checklist.component';
import { CheckComponent } from './core/common/check/check.component';
import { CardComponent } from './core/common/card/card.component';



const routes: Routes = [
	{
		path: '',
		component: CardComponent
	}
]


@NgModule({
	declarations: [
		AppComponent,
		ChecklistComponent,
		CheckComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot( routes )
	],
	providers: [],
	bootstrap: [AppComponent]
})



export class AppModule { }
