const Park = function (name, price, visitors) {
  this.name = name;
  this.price = 30;
  this.dinosaurs = [];
  this.visitors = visitors;
}

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function (dinosaur) {
  return this.dinosaurs.splice(dinosaur, 0)
};

Park.prototype.mostAttracted = function (dinosaur) {
  return this.dinosaur.every((dinosaur) => {
    return dinosaur.lenght >= guestsAttractedPerDay
  });
};

Park.prototype.findBySpecies = function (species) {
return this.dinosaur.filter((dinosaurs) => {
  return dinosaur.species === species
  });
};

Park.prototype.totalVisitorsPerDay = function () {
  return this.dinosaurs.reduce((total, dinosaur) => {
    return total += dinosaur.guestsAttractedPerDay;
  }, 0);
};

Park.prototype.totalVisitorsPerYear = function (total) {
  const day = 80
  const year = 365;
  return day * year;
}

Park.prototype.totalRevenueOfTheYear = function (total) {
  const day = 2400;
  const year = 365;
  return day * year;
}



module.exports = Park;
