export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Dart Vader', side: '' },
  ];

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
  }
}
