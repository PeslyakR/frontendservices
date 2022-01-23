import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { updateRequestAction } from 'src/app/store/content/actions/requests.action';
import { selectRequest } from 'src/app/store/content/selectors/requests.selectors';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss'],
})
export class EditRequestComponent implements OnInit {
  reqForm!: FormGroup;
  id!: number;
  idAuthor!: number;
  idService!: number;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.pipe(select(selectRequest)).subscribe((req) => {
      this.idService = req?.idService!;
      this.reqForm = this.fb.group({
        header: [req?.header, Validators.required],
        body: [req?.body],
        id: [req?.id],
        idAuthor: [req?.author?.id],
        idService: [req?.service?.id],
      });
    });
  }

  onSubmit(): void {
    console.log('idAuthor ', this.reqForm.value.idService);
    console.log('idserv ', this.reqForm.value.idAuthor);
    const request: IRequest = {
      header: this.reqForm.value.header,
      body: this.reqForm.value.body,
      id: this.reqForm.value.id,
      idAuthor: this.reqForm.value.idAuthor,
      idService: this.reqForm.value.idService,
    };
    this.store.dispatch(updateRequestAction({ request }));
  }
}
