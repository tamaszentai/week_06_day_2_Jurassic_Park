const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur;
  let dinosaur2;
  let park;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 80);
    dinosaur3 = new Dinosaur('pterodactyl', 'omnivore', 90);
    park = new Park ('Jurassic Park', 15, [dinosaur, dinosaur2])
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.aCollectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.aCollectionOfDinosaurs.push(dinosaur3);
    const actual = park.aCollectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2, dinosaur3]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.aCollectionOfDinosaurs.pop();
    const actual = park.aCollectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    const actual = park.findDinosaurThatAttractsMostVisitors();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    const actual = park.findAllDinosaursOfParticularSpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to calculate the total number of visitors per day', function (){
    const actual = park.totalVisitors();
    assert.strictEqual(actual, 130);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 47450);
  });

  it('should be able to calculate total revenue for one year', function (){
    const actual = park.totalRevenue();
    assert.strictEqual(actual, 711750);
  });

});
