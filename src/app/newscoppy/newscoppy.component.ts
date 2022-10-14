import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-newscoppy',
  templateUrl: './newscoppy.component.html',
  styleUrls: ['./newscoppy.component.css']
})
export class NewscoppyComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  load:boolean=false

fetchData=()=>{
  this.myapi.view().subscribe(
    (data=>{
      this.newsData=data
      this.load=true
    })
  )
}

  newsData:any={}

  ngOnInit(): void {
  }

}
