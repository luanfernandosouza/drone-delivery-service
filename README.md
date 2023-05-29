# Drone Delivery Service

###Quick Start

To start script:
```
$ npm start
```

To run tests:
```
$ npm test
```

###Description

A squad of drones is tasked with delivering packages for a major online retailer in a world where
time and distance do not matter.

Each drone can carry a specific weight and can make multiple deliveries before returning to
home base to pick up additional packages; however, the goal is to make the fewest number of
trips, as each time the drone returns to home base, it is extremely costly to refuel and reload
the drone.

The software shall accept input which will include: the name of each drone, the maximum weight
it can carry, along with a series of locations and the total weight needed to be delivered to that
specific location. The software should highlight the most efficient deliveries for each drone to
make on each trip.

Assume that time and distance to each location do not matter, and that the size of each
package is irrelevant. It is also assumed that the cost to refuel and restock each drone is a
constant and does not vary between drones.

The maximum number of drones in a squad is 100, and there is no maximum number of
required deliveries.

###Given Input
```
Line 1: [Drone #1 Name], [#1 Maximum Weight], [Drone #2 Name], [#2 Maximum Weight], etc.
Line 2: [Location #1 Name], [Location #1 Package Weight]
Line 3: [Location #2 Name], [Location #2 Package Weight] 
Line 4: [Location #3 Name], [Location #3 Package Weight] 
Etc.
```
###Expected Output
```
[Drone #1 Name]
Trip #1
[Location #2 Name], [Location #3 Name]
Trip #2
[Location #1 Name]

[Drone #2 Name]
Trip #1
[Location #4 Name], [Location #7 Name]
Trip #2
[Location #5 Name], [Location #6 Name]
```
