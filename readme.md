Internet of Things Simulator for HMI Project

This branch would contain heavy code refactoring and
quality of life changes to make the simulator simpler
A List of changes would be found here.

- Integrate websocket server directly
- Recreated base class(AObject) for devices
- Created Light Device
- Add websocket-Device communication through Event Dispatching

Next
The Simulator Engine/Object

Work through the behavior of each entity to be included 
in the simulator, starting from low to high
i.e. Capability to Space

Find a list of possible entities in the Real Estate Core Pages


//Relationship refactoring
-Each entity stores the relationship

"relationships": [
{
"$relationshipId": "6fea7ce8-1827-4d6f-8773-dc42ffd124b5",
"$sourceId": "CostelloHeights",
"$targetId": "UpperFloor",
"$relationshipName": "hasPart",
"$etag": "W/\"fbbb0925-b5a2-4221-ad4e-4eb45e6311ef\""
},
{
"$relationshipId": "5451cb07-4a2c-4b0e-b2f8-a81f777e85c6",
"$sourceId": "CostelloHeights",
"$targetId": "LowerFloor",
"$relationshipName": "hasPart",
"$etag": "W/\"99b9f7b6-a150-4923-952f-f08f14bf08be\""
},
]