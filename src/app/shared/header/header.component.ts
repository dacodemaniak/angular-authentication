import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showBackArrow: boolean = true;
  
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.storageService.remove();
    this.router.navigate(['/', 'account', 'signin']);
  }

}
