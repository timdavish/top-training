import { Directive,	Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { UserService } from '../services/user.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnDestroy, OnInit {
	private ngUnsubscribe: Subject<void> = new Subject<void>();

	condition: boolean;

	constructor(
		private templateRef: TemplateRef<any>,
		private userService: UserService,
		private viewContainer: ViewContainerRef
	) {}

	ngOnInit(): void {
		this.userService.isAuthenticated
			.takeUntil(this.ngUnsubscribe)
			.subscribe(
				isAuthenticated => {
					if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
						this.viewContainer.createEmbeddedView(this.templateRef);
					} else {
						this.viewContainer.clear();
					}
				},
				err => {}
			);
	}

	ngOnDestroy(): void {
		// Clean up subscriptions
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	@Input() private set showAuthed(condition: boolean) {
		this.condition = condition;
	}
}