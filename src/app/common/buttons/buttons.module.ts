import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonComponent } from './toggle-button.component';



@NgModule({
  declarations: [ToggleButtonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ToggleButtonComponent]
})
export class ButtonsModule { }
