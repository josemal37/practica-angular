import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/login/login.component';
import { LoginUser } from '../../shared/model/login_user';
import { MaterialModule } from '../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { CustomDialogComponent } from '../../components/custom-dialog/custom-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    CustomDialogComponent
  ],
  entryComponents: [
    CustomDialogComponent
  ],
  providers: [UsersService]
})
export class LoginModule { }
