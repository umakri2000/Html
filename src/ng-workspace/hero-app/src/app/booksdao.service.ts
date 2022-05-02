import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksdaoService {
  bookList=[
    {
      name:'The three Zeros',
    price:270,
    author:'Muhammed yunus',
    canBuy:true,
    images:[
      {thumb:'image/bookang1.png',full:''}],
      description: 'A winner of the Nobel Peace Prize offers his vision of an emerging new economic system that can save humankind and the planet Muhammad Yunus, who created microcredit, invented social business and earned ..',
      publishdate:Date.now(),
      discount:0.1
     
    
    },
    {
      name:'zero to one',
    price:320,
    author:'Peter thil',
    canBuy:false,
    images:[{thumb :'image/bookang2.png',full:''}],
    publishdate:Date.now(),
      discount:0.2,
    description: 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by venture capitalist, PayPal co-founder, and early Facebook investor Peter Thiel along with Blake Masters'
  }
  ]

  constructor() { }
  getBooks(){
    return this.bookList;
  }
  addBook(book:any){
    console.log('new book added'+ book.name +''+ book.author)
    console.log('no of books:'+this.bookList.length)
    this.bookList.push(book);
    console.log('no of books:'+this .bookList.length)

  }
  updateBook(book:any){
    console.log('book modified'+ book.name+''+book.author)

  }
}
