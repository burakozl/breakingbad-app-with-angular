import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuotesService } from 'src/app/services/quotes.service';

interface Quotes{
  quote_id:number,
  quote:string,
  author:string,
  series:string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  quotesData:Array<Quotes> = [];
  quote:any = [];

  isClickedTheView:boolean = false;
  characterData = {
    char_id : 0,
    name : '',
    birthday: '',
    occupation : [],
    img : '',
    status : '',
    nickname: '',
    portrayed:'',
    appearance: []
  }

  constructor(
    private quotesService:QuotesService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>) {
    if(data.isClickedTheView){
      this.isClickedTheView = true;
    }else{
      this.isClickedTheView = false;
    }
   }

  ngOnInit(): void {
    this.characterData = this.data.character;
    this.getQuotes();
  }

  close(){
    this.dialogRef.close();
  }

  getQuotes(){
    debugger;
    this.quotesService.getQuotes().subscribe((res) => {
      this.quotesData = res.filter((quote:any) => quote.author === this.characterData.name);
    });
  }

}
