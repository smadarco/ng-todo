import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



const modules =[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,MatDialogModule,MatInputModule

]

@NgModule({
  declarations: [],
  entryComponents: [
    MatDialogModule
  ],
  imports: [
    
    CommonModule,
    ...modules
  ],
  exports: modules,
})
export class MaterialModule { }
