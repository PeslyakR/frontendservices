import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteEmployeeAction,
  findEmployeeAction,
  updateEmployeeAction,
} from 'src/app/store/content/actions/employees.action';
import { gettingActiveEmployeeSelector } from 'src/app/store/content/selectors/employee.selector';
import { selectActionPositions } from 'src/app/store/content/selectors/positions.selector';
import { IEmployee } from 'src/app/store/content/types/employees/Employee.interface';
import { IPosition } from 'src/app/store/content/types/positions/Position.interface';
import { formatDate } from '@angular/common';
import { findPositionsAction } from 'src/app/store/content/actions/positions.action';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';
import { gettingDepartmentsSelector } from 'src/app/store/content/selectors/deps.selectors';
import { deleteUserAction } from 'src/app/store/content/actions/users.action';

@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrls: ['./active-employee.component.scss'],
})
export class ActiveEmployeeComponent implements OnInit {
  Employeeform!: FormGroup;
  employee$!: Observable<IEmployee | undefined>;
  departments$!: Observable<IDepartment[] | undefined>;
  id?: number;
  updated?: string;
  positions$!: Observable<IPosition[] | undefined>;
  formVisible: boolean = false;
  position!: number;
  idDep: number;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idDep = this.route.snapshot.params['idDep'];
    this.id = this.route.snapshot.params['id'];

    this.Employeeform = this.fb.group({
      fullName: ['', Validators.required],
      address: [''],
      beginWorking: [formatDate(Date.now(), 'yyyy-MM-dd', 'en')],
      endWorking: [formatDate(Date.now(), 'yyyy-MM-dd', 'en')],
    });
  }

  deleteUser(): void {
    this.employee$.subscribe((e) => {
      this.store.dispatch(deleteUserAction({ id: e?.idUser! }));
    });

    this.router.navigate(['/response']);
  }

  ngOnInit(): void {
    this.store.dispatch(findEmployeeAction({ id: this.id! }));
    this.store.dispatch(findPositionsAction({ idDep: this.idDep }));
    this.employee$ = this.store.pipe(select(gettingActiveEmployeeSelector));
  }

  onSubmit(): void {
    const employee: IEmployee = {
      id: this.id,
      fullName: this.Employeeform.value.fullName,
      address: this.Employeeform.value.address,
      beginWorking: this.Employeeform.value.beginWorking,
      endWorking: this.Employeeform.value.endWorking,
      positionId: this.position,
      updated: this.updated,
    };
    this.store.dispatch(updateEmployeeAction({ employee }));
    this.router.navigate(['/response']);
  }

  editEmployee(): void {
    this.departments$ = this.store.pipe(select(gettingDepartmentsSelector));
    this.positions$ = this.store.pipe(select(selectActionPositions));

    this.employee$.subscribe((emp) => {
      this.id = emp?.id;
      this.position = emp!.positionId;
      this.position = emp!.positionId;
      this.updated = emp?.updated;
      this.Employeeform = this.fb.group({
        fullName: [emp?.fullName, Validators.required],
        address: [emp?.address],
        beginWorking: [emp?.beginWorking],
        endWorking: [emp?.endWorking],
      });
    });
    this.formVisible = !this.formVisible;
  }

  getPositions(idDep: number): void {
    this.store.dispatch(findPositionsAction({ idDep }));

    this.positions$ = this.store.pipe(select(selectActionPositions));
  }
  deleteEmplooyee(): void {
    this.store.dispatch(deleteEmployeeAction({ id: this.id! }));
    this.router.navigate(['/response']);
  }
}
