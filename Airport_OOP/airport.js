/* Airport exercise using Object Oriented Programming */

"use strict";

(function () {

  /* constructor function for Person */
  function Person(name, lastname) {
    this.personName = name;
    this.personLastname = lastname;
    this.getData = function () {
      this.data = this.personName + " " + this.personLastname;
      return this.data;
    };
  };

  /* constructor function for Seat */
  function Seat(number, category) {
    this.seatNumber = number;
    this.seatCategory = category;
    this.getData = function () {
      this.data = this.seatNumber + ", " + this.seatCategory;
      return this.data;
    };
  };

  /* constructor function for Passenger */
  function Passenger(person, seat) {
    this.passengerNameLastname = person.getData();
    this.passengerSeat = seat.getData();
    this.getData = function () {
      this.data = this.passengerSeat + ", " + this.passengerNameLastname;
      return this.data;
    };
  };

  /* constructor function for Flight */
  function Flight(relation, date) {
    this.flightRelation = relation;
    this.flightDate = date;
    this.passengerList = [];
    this.addPassenger = function (passenger) {
      this.passengerList.push(passenger);
    };
    this.getData = function () {
      this.string = this.flightDate + ", " + this.flightRelation + "\n";
      this.passengerList.forEach((num, index) => {
        this.string += "\t\t\t\t\t\t " + this.passengerList[index].passengerSeat + ", " + this.passengerList[index].passengerNameLastname + "\n";
      });
      return this.string;
    };
  };

  /* constructor function for Airport */
  function Airport(name) {
    this.airportName = name;
    this.airportListOfFlights = [];
    this.addFlight = function (flight) {
      this.airportListOfFlights.push(flight);
    };
  };

  /* function for creating flight Object */
  function createFlight(relation, date) {
    var flight = new Flight(relation, date);
    return flight;
  };

  /* function for creating passenger Object */
  function createPassenger(firstName, lastName, seat, cat) {
    var seatNumber = seat == "" ? Math.floor(Math.random() * 100) + 1 : seat;
    var category = cat == "" ? "economy" : "business";
    var person = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    var passenger = new Passenger(person, seat);
    return passenger;
  };

  /* creating airport Object */
  var airport = new Airport("Nikola Tesla");

  /* creating flights */
  var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

  /* creating passengers */
  var person1 = createPassenger("John", "Snow", 1, "b");
  var person2 = createPassenger("Cersei", "Lannister", 2, "b");
  var person3 = createPassenger("Daenerys", "Targaryen", 14, "");
  var person4 = createPassenger("Tyrion", "Lannister", "", "");

  /* adding passengers to flights */
  flight1.addPassenger(person1);
  flight1.addPassenger(person2);
  flight2.addPassenger(person3);
  flight2.addPassenger(person4);

  /* adding flights to airport */
  airport.addFlight(flight1);
  airport.addFlight(flight2)

  /* sum of all passengers at airport */
  var sumOFPassengers = 0;
  airport.airportListOfFlights.forEach(function (num, index) {
    sumOFPassengers += airport.airportListOfFlights[index].passengerList.length;
  });

  /* print datas on display */
  console.log("Airport: " + airport.airportName + ", total passengers: " + sumOFPassengers);
  airport.airportListOfFlights.forEach(function (num, index) {
    console.log("\t\t\t " + airport.airportListOfFlights[index].getData());
  });
})();