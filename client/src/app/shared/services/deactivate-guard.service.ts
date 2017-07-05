import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UserService } from './user.service';

export interface CanDeactivateComponent {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
	public canDeactivate(component: CanDeactivateComponent): boolean {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}
