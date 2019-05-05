import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reviewcomp } from './Review/Review.component';
import { SalaryCompComponent } from './salary-comp/salary-comp.component';
import { Myservice } from './myservice.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { SetGenderPipe } from './set-gender.pipe';
import { FilterempPipe } from './filteremp.pipe';
import {FormsModule} from '@angular/forms';
@NgModule({
	declarations: [
		AppComponent,
		Reviewcomp,
		SalaryCompComponent,
		HomeComponent,
		AboutComponent,
		ContactComponent,
		AboutHomeComponent,
		SetGenderPipe,
		FilterempPipe
	],
	imports: [ BrowserModule, FormsModule, AppRoutingModule ],
	providers: [ Myservice ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
