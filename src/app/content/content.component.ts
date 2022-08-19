import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private sharedService: SharedService) { }
  bodyData: any;
  ngOnInit(): void {
    this.sharedService.getContent().subscribe(
      data => this.bodyData = data
    );
  }

}
