import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { TrainerAppComponent } from './trainer-app.component';

import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared';

const authRouting: ModuleWithProviders = RouterModule.forChild([
	{
		path: 'login',
		component: AuthComponent,
		canActivate: [NoAuthGuard]
	},
	{
		path: 'register',
		component: AuthComponent,
		canActivate: [NoAuthGuard]
	},
	{
		path: 'trainer_app',
		component: TrainerAppComponent,
		canActivate: [NoAuthGuard]
	}
]);

@NgModule({
	imports: [
		authRouting,
		SharedModule
	],
	declarations: [
		AuthComponent,
		TrainerAppComponent
	],
	providers: [
		NoAuthGuard
	]
})
export class AuthModule {}