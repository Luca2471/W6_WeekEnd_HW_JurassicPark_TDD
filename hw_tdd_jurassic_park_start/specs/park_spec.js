const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park = new Park(`Dinoworld`, 30, 80)
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaurs = [dinosaur1, dinosaur2]
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, `Dinoworld`)
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs)
  })

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1)
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = dinosaurs.guestsAttractedPerDay(40)
    assert.strictEqual(actual, dinosaur1)
  }
);

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = dinosaurs.findBySpecies(`t-rex`);
    const expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 80);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 29200)
  })

  it('should be able to calculate total revenue for one year', function () {
    const actual = park.totalRevenueOfTheYear()
      assert.strictEqual(actual, 876000)

  });

});
