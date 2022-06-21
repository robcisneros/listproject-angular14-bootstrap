import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Dart Vader', side: ''}
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }
  onChoose(side){
    this.chosenList = side;
  }

  getCharacters(){
    if (this.chosenList === 'all'){
      return this.characters.slice(); //una copia del array
    }
    return this.characters.filter((char) =>{
      return char.side === this.chosenList;
    })
  }

  onSideChosen(charInfo){
    const positi = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[positi].side = charInfo.side;
  }

}
