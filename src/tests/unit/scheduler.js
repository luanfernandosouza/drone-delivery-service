'use strict';

var scheduler = require(APP_DIR + '/scheduler');

describe('scheduler', () => {
  describe('generate()', () => {
    let drones, locations;

    beforeEach(() => {
      /* Given */
      drones = [
        { name: 'Phantom', maxWeight: 30 },
        { name: 'Spark', maxWeight: 50 }
      ];

      // Total weight to be delivered 130
      locations = [
        { name: 'Goiânia', weight: 10 },
        { name: 'Curitiba', weight: 5 },
        { name: 'Belém', weight: 10 },
        { name: 'Teresina', weight: 20 },
        { name: 'Natal', weight: 15 },
        { name: 'Ribeirão Preto', weight: 10 },
        { name: 'Osasco', weight: 25 },
        { name: 'Joinville', weight: 5 },
        { name: 'Ananindeua', weight: 10 },
        { name: 'Mogi das Cruzes', weight: 20 }
      ];
    });

    it ('should try to fill the drones to max capacity on each trip', () => {
      /* When */
      let schedule = scheduler.generate(drones, locations);

      /* Then */
      // Fewest number of trips should be 3 where (+ 30 50 50) = 130
      let totalNumberOfTrips = calculateNumOfTrips(schedule);
      expect(totalNumberOfTrips).to.be.eql(3);

      // For
      let droneBitchip = schedule[0];
      expect(droneBitchip.trips).to.have.lengthOf(1);
      expect(droneBitchip.trips).to.be.eql([
        // 1st trip (+ 10 5 10 5)
        [ locations[0], locations[1], locations[2], locations[7] ]
      ]);

      // For
      let droneFintone = schedule[1];
      expect(droneFintone.trips).to.have.lengthOf(2);
      expect(droneFintone.trips).to.be.eql([
        // 1st trip (+ 20 10 20)
        [ locations[3], locations[5], locations[9] ],
        // 2nd trip (+ 15 25 10)
        [ locations[4], locations[6], locations[8] ]
      ]);
    });

    it ('should return empty schedule when no locations provided', () => {
      /* Given */
      locations = [];

      /* When */
      let schedule = scheduler.generate(drones, locations);

      /* Then */
      expect(schedule).to.be.eql([]);
    });

    it ('should return empty schedule when no drones provided', () => {
      /* Given */
      drones = [];

      /* When */
      let schedule = scheduler.generate(drones, locations);

      /* Then */
      expect(schedule).to.be.eql([]);
    });
  });
});

/* Test helper function */
function calculateNumOfTrips(schedule) {
  return schedule.reduce((numOfTrips, droneSchedule) => {
    return numOfTrips + droneSchedule.trips.length;
  }, 0);
}
