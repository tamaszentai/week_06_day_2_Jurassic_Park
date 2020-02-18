const Park = function (name, ticketPrice, aCollectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.aCollectionOfDinosaurs = aCollectionOfDinosaurs;
}

Park.prototype.findDinosaurThatAttractsMostVisitors = function () {
  let foundDino = this.aCollectionOfDinosaurs[0];

  for (let dino of this.aCollectionOfDinosaurs) {
    if (dino.guestsAttractedPerDay > foundDino.guestsAttractedPerDay) {
       foundDino = dino;
    }
  }

  return foundDino;
};

Park.prototype.findAllDinosaursOfParticularSpecies = function (species) {
  let foundDinos = []

  for (let dino of this.aCollectionOfDinosaurs) {
    if (dino.species === species) {
      foundDinos.push(dino)
    }
  }
  return foundDinos;
};

Park.prototype.totalVisitors = function (){
  let total = 0

  for (let dino of this.aCollectionOfDinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.totalVisitorsPerYear = function (){
  let totalVisitorsPerYear = this.totalVisitors() * 365;
  return totalVisitorsPerYear
}

Park.prototype.totalRevenue = function (){
  let totalmoney = this.totalVisitorsPerYear() * this.ticketPrice
  return totalmoney
}
module.exports = Park;
