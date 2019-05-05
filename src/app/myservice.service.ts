import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Myservice {
	constructor() {}
	sample() {
		return 'welcome to i am a service';
	}
}
