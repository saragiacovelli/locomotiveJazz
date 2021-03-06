/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};
    var servizi = [
      {
          image:'img/event1.png',
          id: 1,
          titolo: "LA MUSICA NASCE DALLE PERIFERIE",
          data: "14 LUGLIO",
          luogo: "MONTERONI DI LECCE",
          link: "www.bookingshow.it/Paolo-Fresu-Around-Tuk--Biglietti/99795",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: ">>Palazzo Baronale",

          },
          programma: [
              {
                  ore: "ore 11:00",
                  descrizione: "conferenza La Musica nasce dalle Periferie  <p> in collaborazione con Università del Salento </p>"
              },
              {
                  ore: "ore 20:30",
                  descrizione: "<p>Consegna premio</p>" +
                                "<p><b>Ricerca e innovazione 2017-Città di Monteroni</b> </p>" +
                                   "<p>Riconoscimento alle eccellenze dell'Università del Salento</p>"
              },
              {
                  ore: "ore 21:30/INGRESSO LIBERO",
                  descrizione: "<h4><b>DANILO REA</b></h4>"+
                                "Piano solo"
              },
              {
                  ore: "dalle ore 23:00 in poi",
                  descrizione: "<b>AFTER CONCERT</b>"+
                                "<p>presso CANTINA APPOLONIO</p>"+
                                "<p>Jam session live</p>"
              },
          ]
      },
      {
          image:'img/evento2.png',
          id: 2,
          titolo: "LA MUSICA NASCE DALLE PERIFERIE",
          data: "22 LUGLIO",
          luogo: "LECCE",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: ">>Piazza Sant'Oronzo - Mosaico della Lupa",
              link: "www.bookingshow.it/Paolo-Fresu-Around-Tuk--Biglietti/99795"
          },
          programma: [
              {
                  ore: "ore 19:00/INGRESSO LIBERO",
                  descrizione: "<p> sonorizzazione restauro <i>de La Lupa</i>  </p>"+
                               "<p> con <b>DINO RUBINO</b> piano solo  </p>"
              },
              {
                  luogo:">>Basilica di Santa Croce",
                  ore: "ore 19:30/INGRESSO LIBERO",
                  descrizione: "<p> sonorizzazione restauro Basilica di Santa Croce </p>"+
                                "<p> con <b>PAOLO FRESU</b> solo  </p>"

              },
              {
                  luogo:">>Rettorato Università del Salento",
                  ore: "ore 22:00",
                  descrizione: "<h4 class='red-text'><b>PAOLO FRESU</b></h4>"+
                               "<h4 class='red-text'><b>'AROUND TUK'</b></h4>"+
                               "<h5><b>PAOLO FRESU</b></h5>"+
                               "<p>tromba-flicorno-elettronica</p>"+
                               "<h5><b>RAFFAELE CASARANO</b></h5>"+
                               "<p>sax contralto,soprano,elettronica</p>"+
                               "<h5><b>DINO RUBINO</b></h5>"+
                               "<p>piano e tromba</p>"+
                               "<h5><b>MIRKO SIGNORILE</b></h5>"+
                               "<p>piano</p>"+
                               "<h5><b>MARCO BARDOSCIA</b></h5>"+
                               "<p>contrabbasso</p>"+
                               "<h5><b>ENRICO MORELLO</b></h5>"+
                               "<p>batteria</p>"

              },
              {
                  descrizione: "PREVENDITE SU BOOKINGSHOW.IT"
              }

          ]
      },
      {
          image:'img/evento3.png',
          id: 3,
          titolo: "FROM STATION TO STATION "+
                  "VINTAGE EDITION 2017",
          data: "23 LUGLIO",
          luogo: "da BARI a MATERA",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: "",

          },
          programma: [
              {
                  ore: "ore 17:00",
                  descrizione: "<p> inaugurazione e viaggio di una Locomotiva a vapore del 1932 da Bari a Matera  </p>"+
                               "<p> From Station to Station da Bari a Matera  </p>"+
                               "<p> “Binario Sonoro Puglia - Basilicata” </p>"+
                               "<p> partenza dalla stazione di Bari Centrale</p>"+
                               "<p> <b>MIRKO SIGNORILE</b> piano solo </p>"
              },
              {
                  titoli:" TRILOGIA/TRAMONTO LOCOMOTIVE 2017",
                  ore: "ore 17:30/Partenza TRENO",
                  descrizione: "<p> prima sosta Grumo Appula </p>"+
                                "<p> seconda sosta (degustazione) Altamura  </p>"

              },
              {
                  luogo:"",
                  ore: "ore 21:30/Arrivo a Matera Villa Longo",
                  descrizione: "<p>POSTI DISPONIBILI n° 121, seconda classe € 20</p>"+
                               "<p>In vendita su <b> www.rotaiedipuglia.it</b></p>"+
                               "<p>info: Luigi Mighali 3471225188</p>"
              },
              {
                  ore: "ore 21:30/Arrivo a Matera, Stazione Villa Longo",
                  descrizione: "<p> passeggiata sonora tra i Sassi  </p>"+
                               "<p> con <b> ‘LOCOMOTIVE ORCHESTRA’</b>  </p>"+
                               "<p> e la partecipazione speciale </p>"+
                               "<p>dell’attrice <b>STEFANIA ROCCA</b></p>"
              },
              {
                  ore: "",
                  luogo: ">>Casa Cava/INGRESSO LIBERO",
                  descrizione: "<p> LIVE JAM SESSION  </p>"+
                               "<p> <i>Un evento Ferrovie Appulo Lucane e con la collaborazione</i> </p>"+
                               "<p> <i>di Gezziamoci Festival Ass. Onyx jazz e Ass. Biagio Mattatelli</i> </p>"
              },
              {
                  ore: "",
                  descrizione: "<p class='green-text'> Ritorno a Bari con gli autobus  </p>"+
                               "<p class='green-text'> delle Ferrovie Appulo Lucane </p>"
              },
              {
                  descrizione: "PREVENDITE SU BOOKINGSHOW.IT"
              }

          ]
      },
      {
          image:'img/SEMINARIO-FOTOGRAFIA.jpg',
          id: 4,
          titolo: "PUNTI DI SVOLTA",
          data: "24 LUGLIO",
          luogo: "LECCE",
          luogoMaps: {
              lat: 343,
              log: 3434,
          },
          programma: [
              {

                  descrizione: "<p> SEMINARIO DI FOTOGRAFIA</p>"+
                               "<p >a cura di <b>ANDREA BOCCALINI</b> </p>"+
                               "<p >e <b>FLAVIO & FRANK</b> </p>"+
                               "<p>Il ritratto fotografico attraverso un percorso </p>"+
                               "<p>parte dalla musica pop e passando dal rock, </p>"+
                               "<p>al jazz arriva al reportage e alla moda. Un </p>"+
                               "<p>viaggio in cui Flavio e Frank insieme ad Andrea</p>"+
                               "<p>Boccalini, partendo dalle loro esperienze </p>"+
                               "<p>umane e professionali vi condurranno alla </p>"+
                               "<p>scoperta della ritrattistica in chiave narrativa e </p>"+
                               "<p>concettuale. <b> I partecipanti saranno coinvolti in </b></p>"+
                               "<p><b>un progetto di ritrattistica legato al Lcomotive </b></p>"+
                               "<p><b>Jazz Festival.</b></p>"
              },
              {

                  luogo: "» Sala Conferenze LINLKS-MT",
                  descrizione: "(Via Rocco Scotellaro, 55)"
              },
              {
                  descrizione: "Rinfresco"
              },
              {
                  descrizione: "<p>Ai partecipanti verrà fornito un </p>"+
                               "<p class='red-text'>Pass 'ALL AREAS LOCOMOTIVE' </p>"+
                               "<p>che garantisce l’accesso a tutti</p>"+
                               "<p>gli eventi in programma</p>"
              },
              {
                  descrizione: "<p class='background-color:black; color:white' >INFO E ISCRIZIONI</p>"+
                               "<p>e-mail: info@locomotivejazzfestival.it"+
                               "<p>tel: +39 345 1089622</p>"
              },
              {
                  descrizione: "<p class='red-text'></p>"+
                               "<p>Bonifico bancario</p>"+
                               "<p><b>BANCA:</b> Banca Sella, filiale di Maglie</p>"+
                               "<p><b>IBAN:</b> IT 64 T 03268 79720 05275 2631960</p>"+
                               "<p><b>CAUSALE:</b> 'Nome e Cognome, iscrizione</p>"+
                               "<p>seminario di fotografia Locomotive' </p>"+
                               "<p>inviare un'email con copia del bonifico all'indirizzo</p>"+
                               "<p><b>amministrazione@locomotivejazzfestival.it</b> </p>"
              }
          ]
      },
      {
          image:'img/trio-tosca.jpg',
          id: 5,
          titolo: "LA MUSICA NASCE DALLE PERIFERIE ",
          data: "26 LUGLIO",
          luogo: "GIURDIGNANO (LE)",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: ""

          },
          programma: [
              {
                  luogo: ">>Palazzo Baronale",
                  ore: "ore 18:00/INGRESSO LIBERO",
                  descrizione: "<p> Incontro con Raffaele Casarano, Ada  </p>"+
                               "<p> Montellanico (presidente Midj Italia) e giovani  </p>"+
                               "<p> studenti di Giurdignano: <i>“La musica nella vita </p>"+
                               "<p>  di una periferia”</i> a seguire passeggiata sonora </p>"+
                               "<p>  e gastronomica verso il Giardino Megalitico. </p>"
              },
              {
                  luogo: ">>Giardino Megalitico di Europa",
                  ore: "ore 21:00/INGRESSO LIBERO",
                  descrizione: "<p> concerto <i>\"LUMINA\"</i> (anteprima Tulk Music) </p>"+
                               "<p> <b>CARLA CASARANO</b> voce  </p>"+
                               "<p> <b>LEILA SHIRVANI</b> violoncello  </p>"+
                               "<p> <b>WILLIAM GRECO</b> piano  </p>"+
                               "<p> <b>MARCO BARDOSCIA</b> contrabbasso </p>"+
                               "<p> <b>EMANUELE MANISCALCO</b> batteria  </p>"+
                               "<h6> In collaborazione con azienda vinicola Toscana Tenuta Frescobaldi.</h6>"

              },
              {

                  ore: "ore 22:00/INGRSSO LIBERO",
                  descrizione: "<p>Concerto \"Abbey's Road\"</p>"+
                               "<p> <b> ADA MONTELLANICO band</b></p>"+
                               "<p>guest <b>GIOVANNI FALZONE</b></p>"+
                               "<p> con <b>MATTEO BORTONE</b> contrabbasso </p>"+
                               "<p><b>FILIPPO VIGNATO</b> trombone</p>"+
                               "<p><b>ERMANNO BARON</b> batteria </p>"+
                               "<p><i> omaggio alla grande Abbey Lincoln.</i></p>"
              },
              {
                  ore: "ore 23:00/INGRESSO LIBERO",
                  descrizione: "<p> <i>\"UM BRASIL DIFERENTE\"</i> </p>"+
                               "<p><b>GABRIELE MIRABASSI</b> clarinetto  </p>"+
                               "<p><b>ROBERTO TAUFIC</b> chitarra </p>"+
                               "<p>feat. <b>TOSCA</b></p>"
              }
          ]
      },
      {
          image:'img/zampaglione.jpg',
          id: 6,
          titolo: "LA MUSICA NASCE DALLE PERIFERIE",
          data: "27 LUGLIO",
          luogo: "ACAYA (LE) E PARCO NATURALE"+
                 "DELLE CESINE",
          luogoMaps: {
              lat: 343,
              log: 3434,
          },
          programma: [
              {
                  luogo: ">>Castello di Acaya",
                  ore:"ore 11:00/INGRESSO LIBERO",
                  descrizione: "<p> PURPLE GRAZIANO - JIMI HENDRIX</p>"+
                               "<p> <b>SIMONE GRAZIANO</b> Fender Rhodes, piano, </p>"+
                               "<p >synth</p>"+
                               "<p><b>ALESSANDRO LANZONI</b> Fender Rhodes, </p>"+
                               "<p>piano </p>"+
                               "<p><b>NAOMI BERRILL</b> voce, violoncello </p>"+
                               "<p><b>FRANCESCO BIGONI</b> sax tenore</p>"+
                               "<p><b> STEFANO TAMBORRINO </b> batteria </p>"
              },
              {
                  titoli: "TRILOGIA/NOTTE LOCOMOTIVE 2017",
                  luogo: "» Parco Naturale delle Cesine, Strada Bianca",
                  ore: "ore:23:30/INGRESSO LIBERO",
                  descrizione: "<p><b>FEDERICO ZAMPAGLIONE</b> ospite speciale<p>"+
                               "<p>'NOTTE LOCOMOTIVE 2017'</p>"+
                               "<p> Il Locomotive sostiene la tutela del</p>"+
                               "<p> territorio e la salvaguardia dei luoghi</p>"+
                               "<p> naturali. Per accededere all'area evento è </p>"+
                               "<p> necessario ritirare i sacchetti ecologici</p>"+
                               "<p>al costo di 1€. Grazie della </p>"+
                               "<p> collaborazione.</p>"
              }
          ]
      },
    ];

    servizio.getEventi = function(){

        return servizi;
    };

    servizio.getEvento = function(idEvento){
        for(var i=0;i<servizi.length; i++){
            if(servizi[i].id == idEvento){
                return servizi[i];
            }
        }
    };


    return servizio;
});
