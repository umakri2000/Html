import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { PriceDiscountPipe } from './price-discount.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';
import { CatLogComponent } from './cat-log/cat-log.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { BookformComponent } from './bookform/bookform.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'books',component:CatLogComponent},
  {path:'add',component: BookformComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PriceDiscountPipe,
    BookComponent,
    TabComponent,
    CatLogComponent,
    HomeComponent,
    MenuComponent,
    NewsComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
