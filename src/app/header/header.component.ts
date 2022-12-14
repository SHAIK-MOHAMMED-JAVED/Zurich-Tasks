import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  headerData: any;
  ngOnInit(): void {
    this.sharedService.getHeaderContent().subscribe(
      data =>{ this.headerData = data; console.log(data)}
    );
  }

}
