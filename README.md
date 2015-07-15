#Tour de France 2015
Ce repository est dédié à l'atelier #Maptime #Alpes du 07/07/2015 sur le sujet du tour de France 2015.


## Données
Les données du tour c'est à dire le parcours provient des utilisateurs de [MapMyTracks](https://www.mapmytracks.com/) et en particulier des événements [Tour de Force 2015](https://www.mapmytracks.com/events/tour-de-force-2015) et [Tour de France 2015](https://www.mapmytracks.com/events/tour-de-france-2015).

Les données sont donc disponibles aux formats GPX et geoJSON dans data.
Vous trouverez un fichier par étape et un fichier global. Attention, les données temporelles sont présentes, les fichiers sont donc volumineux.

## Visualisations
Vous pouvez cloner ce repository et réaliser des visualisations avant l'atelier. Ainsi, un répertoire [visu](./visu) est prêt à accueillir vos pull requests et partager ainsi vos créations. [Suivez ce lien](./visu)

## Licensing
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [license](LICENCE) file.



## Trucs
### Données
Pour la conversion des données de GPX vers GEOJSON, le module toGeoJSON disponible pour node s'installe ainsi:
~~~
npm install togeojson
~~~

puis s'utilise par exemple comme cela:

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

