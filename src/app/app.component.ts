import { Component } from '@angular/core';
import { Myservice } from './myservice.service';
import { Mobile } from './Mobile';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	Name: string = 'Nagarjuna';
	name1: string = 'naga'; // string
	score: number = 23; // number
	Height: number = 5.6; // number
	isActivate: boolean = false; // boolean
	colorIs = Color[0]; // enum text
	colorIndexIs = Color.Yellow; // enum index is
	dontknow: any = 'dsgs'; // any
	empId: number[] = [ 21, 43, 56 ]; // number array
	depts: string[] = [ 'a', 'b', 'c' ]; // string array
	arrayobj = [ { id: 1, name: 'dgdfg5' }, { id: 2, name: 'dgdfg4' }, { id: 3, name: 'dgdfg1' } ];
  mob: Mobile = new Mobile();
 countIs: number = 0;
 Message: string ='hello world good morning';
 btnclik(){
  this.countIs++;
 }

	sample() {
		this.mob.buutonClicked();
	}
	thisDay = new Date();
	Eligiblepercent: number = 45.456789;
	curcountry: number = 2.5678;
	title = 'app';
	assignClick: string;
	Productname: string = 'Abc abc';
	Productdescription: string = 'this is sample product...';
	Productcost: number = 5000;
	Productreviews = [
		{ name: 'Ravi', review: 'this product is good' },
		{ name: 'Ramu', review: 'this product is ok' }
	];
	btnDisabled: boolean = true;
	something: string = 'hi vfgh';
	Employees = [
		{ ename: 'raja', gender: 1, salary: '70k' },
		{ ename: 'kiran', gender: 0, salary: '90k' },
		{ ename: 'ramesh', gender: 0, salary: '70k' },
		{ ename: 'nagg', gender: 1, salary: '60k' }
	];
	display: boolean = false;
	salary: number = 40000;
	Employees1 = [
		{ ename: 'raja', deptname: 'developer' },
		{ ename: 'kiran', deptname: 'developer1' },
		{ ename: 'ramesh', deptname: 'developer' },
		{ ename: 'nagg', deptname: 'developer' }
	];
	constructor(private ser: Myservice) {
    console.log('app constructor executed');
		this.title = ser.sample();
	}
	call() {
		this.assignClick = this.ser.sample();
	}
	TotalEmpComp() {
		//	debugger;
		alert('this is parent');
	}
}
enum Color {
	Red,
	Blue,
	Green,
	Yellow
}
