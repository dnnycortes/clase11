import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChecklistComponent } from './core/common/checklist/checklist.component';
import { CheckComponent } from './core/common/check/check.component';


@NgModule({
	declarations: [
		AppComponent,
		ChecklistComponent,
		CheckComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})



export class AppModule { }
