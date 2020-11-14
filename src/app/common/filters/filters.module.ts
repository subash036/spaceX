import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports:[FiltersComponent]
})
export class FiltersModule { }
