import type { BeerSpot, OpenRule } from '../types'

/**
 * Öl-ställen i Ystad – "var hittar man billigaste ölen".
 *
 * Priser, ölsort och volym kommer från Ystads Allehandas genomgång av 40 barer
 * i centrala Ystad ("Här är Ystads billigaste öl"), kollade i första halvan av
 * juni 2026. Varje rad avser ställets BILLIGASTE öl, och nyckeltalet kr/cl gör
 * olika storlekar jämförbara. Namn, adresser och koordinater är geokodade via
 * OpenStreetMap. Priser ändras – dubbelkolla vid behov.
 */
export const beerspots: BeerSpot[] = [
  {
    id: 'olearys-beer',
    name: "O'Learys",
    area: 'Östra Förstaden',
    address: 'Fridhemsgatan 27, Ystad',
    lat: 55.433235,
    lng: 13.834274,
    brand: 'Carlsberg Export',
    container: 'fat',
    volumeCl: 50,
    price: 74,
    note: 'Amerikansk sportbar.',
  },
  {
    id: 'backahasten-beer',
    name: 'Bäckahästen',
    area: 'Ystad centrum',
    address: 'Stortorget, Ystad',
    lat: 55.4303513,
    lng: 13.8211017,
    brand: 'Mariestad',
    container: 'fat',
    volumeCl: 50,
    price: 79,
    note: 'Uteservering, öppet maj–aug.',
  },
  {
    id: 'kings-head',
    name: 'Kings Head',
    area: 'Östra Förstaden',
    address: 'Regementsgatan 3, Ystad',
    lat: 55.430993,
    lng: 13.829461,
    brand: 'Fat 21',
    container: 'fat',
    volumeCl: 50,
    price: 79,
    note: 'Engelsk pub.',
  },
  {
    id: 'upp-eller-ner-beer',
    name: 'Upp Eller Ner',
    area: 'Ystad centrum',
    address: 'Stortorget 11, Ystad',
    lat: 55.429204,
    lng: 13.820095,
    brand: 'Pripps Blå',
    container: 'fat',
    volumeCl: 60,
    price: 99,
  },
  {
    id: 'broderna-m-beer',
    name: 'Bröderna M',
    area: 'Ystad centrum',
    address: 'Hamngatan 11, Ystad',
    lat: 55.428199,
    lng: 13.821681,
    brand: 'Heineken',
    container: 'fat',
    volumeCl: 50,
    price: 96,
  },
  {
    id: 'cle-beer',
    name: 'Clé Restaurang',
    area: 'Östra Förstaden',
    address: 'Regementsgatan 7A, Ystad',
    lat: 55.431115,
    lng: 13.830315,
    brand: 'Bryggmästaren',
    container: 'fat',
    volumeCl: 40,
    price: 79,
    website: 'https://clerestaurant.se',
  },
  {
    id: 'tumult-beer',
    name: 'Tumült',
    area: 'Östra Förstaden',
    address: 'Björnstjernegatan 5, Ystad',
    lat: 55.4323972,
    lng: 13.8426424,
    brand: 'Spansk ljus lager',
    container: 'fat',
    volumeCl: 40,
    price: 85,
    website: 'https://www.tumult.se',
    note: 'Hantverksöl.',
  },
  {
    id: 'marinan-beer',
    name: 'Marinan',
    area: 'Ystad hamn',
    address: 'Segelgatan, Ystad',
    lat: 55.4262049,
    lng: 13.8138056,
    brand: 'Källarmästaren',
    container: 'fat',
    volumeCl: 40,
    price: 89,
    note: 'Solläge vid marinan.',
  },
  {
    id: 'le-cardinal-beer',
    name: 'Le Cardinal',
    area: 'Ystad centrum',
    address: 'Stortorget 15, Ystad',
    lat: 55.428861,
    lng: 13.818686,
    brand: 'Falcon/Carlsberg',
    container: 'fat',
    volumeCl: 40,
    price: 90,
    note: 'Pizzeria & pub.',
  },
  {
    id: 'store-thor-beer',
    name: 'Store Thor',
    area: 'Ystad centrum',
    address: 'Stortorget 18, Ystad',
    lat: 55.4296,
    lng: 13.819133,
    brand: 'Tuborg',
    container: 'flaska',
    volumeCl: 33,
    price: 82,
  },
]

/**
 * Strukturerade happy hour-tider per öl-id, för "Happy hour nu"-markering.
 * Tom tills vi har verifierade happy hour-tider – fyll på med { days, from, to }.
 */
export const happyHours: Record<string, OpenRule> = {}
