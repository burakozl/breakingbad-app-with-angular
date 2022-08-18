import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharactersService } from '../services/characters.service';
import { DialogComponent } from './dialog/dialog.component';

interface Characters {
  id : number,
  name : string,
  birthday: string,
  occupation : [],
  img : string,
  status : string,
  nickname: string,
  appearance: []
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageSize=8;
  page=8;
  charactersData:Array<Characters> = [];

  constructor(
    private charactersService:CharactersService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getCharactersData();
  }
  openDialog(element:Characters,viewOrShowQuotes:boolean){
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'auto',
      data:{character: element, isClickedTheView:viewOrShowQuotes}
    });
  }

  getCharactersData(){
    this.charactersService.getCharacters().subscribe((res) => {
      this.charactersData = res;
    })
  }

}
