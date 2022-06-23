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
}
