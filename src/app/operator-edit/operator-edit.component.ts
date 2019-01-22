import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { OperatorService } from '../shared/operator.service';
import { GiphyService } from '../shared/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit, OnDestroy {
  operator: any = {};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private operatorService: OperatorService,
    private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.operatorService.get(id).subscribe((operator: any) => {
          if (operator) {
            this.operator = operator;
            this.operator.href = operator._links.self.href;
            this.giphyService.get(operator.name).subscribe(url => operator.giphyUrl = url);
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm) {
    this.operatorService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.operatorService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
