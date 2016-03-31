******* Clé ******
8731f8768a115cb349f607a0007f4ba544d348e3

******* Comment utiliser votre clé ******

GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}


******* Stations *******

Les stations sont représentées de la façon suivante :

{
  "number": 123,
  "contract_name" : "Paris",
  "name": "nom station",
  "address": "adresse indicative",
  "position": {
    "lat": 48.862993,
    "lng": 2.344294
  },
  "banking": true,
  "bonus": false,
  "status": "OPEN",
  "bike_stands": 20,
  "available_bike_stands": 15,
  "available_bikes": 5,
  "last_update": <timestamp>
}

******* Contrats *******

Pour chaque agglomération cliente de JCDecaux, un contrat est associé.

{
  "name" : "Paris",
  "commercial_name" : "Vélib'",
  "country_code" : "FR",
  "cities" : [
    "Paris",
    "Neuilly",
    ...
  ]
}