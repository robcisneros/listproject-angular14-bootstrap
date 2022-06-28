import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})

export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Dart Vader', side: '' },
  ];
  private logService:LogService;

  constructor(logService:LogService){
    this.logService = logService;
  }

  getCharacters(chosenList){
    if (chosenList === 'all'){
      return this.characters.slice(); //una copia del array
    }
    return this.characters.filter((char) =>{
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo){
    const positi = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[positi].side = charInfo.side;
    this.logService.writeLog('Changed side of: ' + charInfo.name+ ' .New side, ' + charInfo.side);
  }

  addCharacter(name,side){
    const positi = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if(positi !== -1){
      return;
    }
    const newChar = {name:name, side: side};
    this.characters.push(newChar);
  }
}
