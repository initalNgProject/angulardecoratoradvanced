import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { ContactComponent } from './about/contact/contact.component';
const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'about',
		component: AboutComponent,
		children: [ { path: '', component: AboutHomeComponent }, { path: 'contact', component: ContactComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
