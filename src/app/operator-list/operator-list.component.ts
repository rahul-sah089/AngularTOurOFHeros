import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../shared/operator.service'; 
@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {
  operators: Array<any>;
  constructor(private operatorService: OperatorService) { }

  ngOnInit() {
    this.operatorService.getAll().subscribe(data =>{
      console.log("Operator Information");
      console.log(data);
      this.operators = data;
    });
  }

}
