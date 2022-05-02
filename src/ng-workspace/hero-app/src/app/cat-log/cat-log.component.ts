import { Component, OnInit } from '@angular/core';
import { BooksdaoService } from '../booksdao.service';

@Component({
  selector: 'app-cat-log',
  templateUrl: './cat-log.component.html',
  styleUrls: ['./cat-log.component.css']
})
export class CatLogComponent implements OnInit {
  books:Array<any> = [];


  constructor(private booksvc : BooksdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }

}
