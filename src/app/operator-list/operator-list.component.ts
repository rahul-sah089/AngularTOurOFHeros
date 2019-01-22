import { Component, OnInit } from '@angular/core';
import {OperatorService} from '../shared/operator.service'; 
import { GiphyService } from '../shared/giphy.service';
@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {
  operators: Array<any>;
  constructor(private operatorService: OperatorService,private giphyService:GiphyService) { }

  ngOnInit() {
    this.operatorService.getAll().subscribe(data =>{
      console.log("Operator Information");
      console.log(data);
      this.operators = data;
      for(const operator of this.operators){
        this.giphyService.get(operator.name).subscribe(url => operator.image = url);
      }
    });
  }

}
