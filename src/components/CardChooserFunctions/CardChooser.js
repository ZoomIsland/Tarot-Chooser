import { thothTarot } from './ThothDeckRepository'
import { riderTarot } from './RWDeckRepository'
import { wildUnknownTarot } from './WUDeckRepository'

const CardChooser = {
  pullCards(number, chosenDeck) {
    let dupedTarot = [];
    if (chosenDeck === 'wild') {
      dupedTarot = wildUnknownTarot;
    } else if (chosenDeck === 'thoth') {
      dupedTarot = thothTarot;
    } else if (chosenDeck === 'rider') {
      dupedTarot = riderTarot;
    }
    
    dupedTarot = this.assignRandomNumber(dupedTarot);
    dupedTarot.sort(function(a,b) {
      return a.indexNumber - b.indexNumber;
    });

    dupedTarot = dupedTarot.slice(0, number);
    return dupedTarot;
  },

  assignRandomNumber(inputTarot) {
    for (var j = 0; j < inputTarot.length; j++) {
      var individualCard = inputTarot[j];
      var newRandomNumber = Math.random()
      individualCard.indexNumber = newRandomNumber;
    }
    return inputTarot;
  }
}

export default CardChooser;