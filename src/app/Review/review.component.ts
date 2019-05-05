import { Component, Input } from '@angular/core';

@Component({
	selector: 'child',
	templateUrl: 'review.component.html'
})
export class Reviewcomp {
	@Input() Allreviews: any;
}
