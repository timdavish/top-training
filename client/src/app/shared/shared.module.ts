import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './components/list-errors.component';
import { StarRatingComponent } from './components/star-rating.component';

import { LocationAutocompleteDirective } from './directives/location-autocomplete.directive';
import { ShowAuthedDirective } from './directives/show-authed.directive';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule
	],
	declarations: [
		ListErrorsComponent,
		StarRatingComponent,

		LocationAutocompleteDirective,
		ShowAuthedDirective
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule,

		ListErrorsComponent,
		StarRatingComponent,

		LocationAutocompleteDirective,
		ShowAuthedDirective
	]
})
export class SharedModule {}
