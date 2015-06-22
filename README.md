#Tour de France 2015
ce repository est dédié à l'atelier #Maptime #Alpes du 07/07/2015 sur le sujet du tour de France 2015.


## Données
Les données du tour c'est à dire le parcours provient des utilisateurs de [MapMyTracks](https://www.mapmytracks.com/) et en particulier de l'évenement [Tour de Force 2015](https://www.mapmytracks.com/events/tour-de-force-2015) et [Tour de Frane 2015](https://www.mapmytracks.com/events/tour-de-france-2015).

## Visualisations
Vous pouvez cloner ce repository et réaliser des visualisations avant l'atelier

## Trucs
Pour la conversion des données de GPX vers GEOJSON, le module toGeoJSON disponible sous node est utile:
~~~
npm install togeojson
~~~

puis 

~~~
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-01UtrechtPrologue.gpx > 01UtrechtPrologue.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-02Utrecht-Zeland.gpx >02Utrecht-Zeland.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-03Anvers-Huy-.gpx > 03Anvers-Huy.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-04Seraing-Cambrai.gpx > 04Seraing-Cambrai.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-05Arras-Amiens.gpx > 05Arras-Amiens.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-06Abbeville-Le-Harve.gpx > 06Abbeville-Le-Harve.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-07Livarot-Fougeres.gpx > 07Livarot-Fougeres.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-08Rennes-MurdeBretagne.gpx > 08Rennes-MurdeBretagne.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-09Vannes-Plumelec.gpx > 09Vannes-Plumelec.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-10Tarbes-LaPierreSaintMartin.gpx > 10Tarbes-LaPierreSaintMartin.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-11Pau-Cauterets.gpx > 11Pau-Cauterets.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-12Lannemezan-Plateau-de-Beille.gpx > 12Lannemezan-Plateau-de-Beille.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-13Muret-Rodez.gpx > 13Muret-Rodez.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-14Rodez-Mende.gpx > 14Rodez-Mende.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-15Mende-Valence.gpx > 15Mende-Valence.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-16BourgdePeage-Gap.gpx > 16BourgdePeage-Gap.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-17DignelesBains-Pra-Loup.gpx > 17DignelesBains-Pra-Loup.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-18Gap-SaintJeandeMaurienne.gpx > 18Gap-SaintJeandeMaurienne.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-19SaintJeandeMaurienne-La-Toussuire.gpx > 19SaintJeandeMaurienne-La-Toussuire.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-20Modane-Valfrejus-Alpe-dHuez.gpx > 20Modane-Valfrejus-Alpe-dHuez.geojson
./node_modules/.bin/togeojson MapMyTrack-Route-Tour-de-Force-2015Stage-21Sevres-ParisChampsElysees.gpx > 21Sevres-ParisChampsElysees.geojson
~~~

