import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css'],
})
export class ContactsDetailsComponent implements OnInit {
  user!: Observable<User>;
  id!: number;

  constructor(
    private activateRouter: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params) => this.id = params?.['id'])
    this.user = this.adminService.getPerson(this.id)
  }
}
