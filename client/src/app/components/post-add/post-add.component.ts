import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  public credentials = {
    title: '',
    image: '',
    text: ''
  };

  constructor(public authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.authService.createOrUpdatePost(this.credentials).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/blog']);
  }
}
