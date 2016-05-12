/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('deli', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'deli.js'), 'utf-8')
  })

  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).to.equal("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).to.eql("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });

  describe('nowServing', () => {
    it('returns the line is empty when no on is on line', () => {
      expect(nowServing([])).to.equal("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).to.equal("Currently serving Steven.");
      expect(deliLine).to.eql(["Blake", "Avi"]);
    });
  });

  describe('takeANumber', () => {
    var katzDeli;
    var otherDeli;

    beforeEach(() => {
      katzDeli = [];
      otherDeli = ["Steven", "Blake", "Avi"];
    });

    it('adds a person to the line', () => {
      expect(takeANumber(katzDeli, 'Ada')).to.equal("Welcome, Ada. You are number 1 in line.");
      expect(katzDeli).to.eql(['Ada']);
    });

    it('appends the person the end of the line if there are already people on it', () => {
      expect(takeANumber(otherDeli, 'Grace')).to.equal("Welcome, Grace. You are number 4 in line.");
      expect(otherDeli).to.eql(["Steven", "Blake", "Avi", "Grace"]);
    });

    it("properly handles multiple people being added", () => {
      takeANumber(katzDeli, 'Ada');
      takeANumber(katzDeli, 'Grace');
      takeANumber(katzDeli, 'Kent');

      expect(katzDeli).to.eql(["Ada", "Grace", "Kent"]);
    });
  });
})
