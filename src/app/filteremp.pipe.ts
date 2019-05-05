import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filteremp'
})
export class FilterempPipe implements PipeTransform {
	transform(Employees: any, empFind: any): any {
		if (empFind === 'undefind') {
			console.log(Employees);
			return Employees;
		} else {


			return Employees.filter(function(x) {
				return x.ename.toLowerCase().includes(empFind.toLowerCase());
			});
  }
}
}
