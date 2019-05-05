import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-salary-comp',
	templateUrl: './salary-comp.component.html',
	styleUrls: [ './salary-comp.component.css' ]
})
export class SalaryCompComponent implements OnInit {
	@Output() clickemitRef = new EventEmitter();
	constructor() {}
	getSalDetails() {
		//debugger;
		alert('it is from child');
		this.clickemitRef.emit();
	}
	ngOnInit() {}
}
