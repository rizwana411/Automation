import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';

const matModules =  [MatDialogModule, MatCardModule, MatInputModule, MatButtonModule, MatSidenavModule,
  MatToolbarModule, MatIconModule, MatMenuModule, MatDividerModule, MatListModule,
  MatTableModule, MatPaginatorModule, MatSelectModule, MatCheckboxModule, MatSortModule];

@NgModule({
  declarations: [],
  imports: matModules,
  exports: matModules
})
export class MaterialModule { }
