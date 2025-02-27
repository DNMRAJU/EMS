import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"employees",component:EmployeeListComponent}
  ,{path:'',redirectTo:'employees',pathMatch:'full'},
  {path:"add-employee",component:CreateEmployeeComponent},
  {path:"manage-employee",component:DeleteEmployeeComponent},
  {path:"update-employee/:id",component:UpdateEmployeeComponent},
  {path:"view-employee/:id",component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
