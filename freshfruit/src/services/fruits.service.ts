import { Subject } from "rxjs";
import { Fruit } from "../models/Fruit";
import * as firebase from 'firebase';
import DataSnapshot=firebase.database.DataSnapshot;
export class FruitsService {
  fruits$ = new Subject<Fruit[]>();
    fruitsList: Fruit[] = [
      {
      name: 'Pomme',
      description: [
        'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
        ],
        prix:'3DT',
        isOn: true,
         imageUrl: '/assets/imgs/pomme.jpg',
         famille:'A pepin',
         startTime: '',
         endTime: ''
      },
      {
      name: 'Poire',
      description: [
        'Quantité: 7 kilos',
        'Origine: France',
        'Nature: Biologique'
        ],
        prix:'5DT',
        isOn: true,
        imageUrl: '/assets/imgs/poire.jpg',
        famille:'A pepin',
        startTime: '',
        endTime: ''
      },
      {
      name: 'Raisin',
      description: [
        'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
        ],
        isOn: false,
        prix:'2DT',
        imageUrl: '/assets/imgs/raisin.jpg',
        famille:'A pepin',
        startTime: '',
        endTime: ''
      }
      ];
      fruitsList1 = [
        {
          name: 'Peche',
          description: [
            'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
            ],
            isOn: true,
            prix:'3DT',
             imageUrl: '/assets/imgs/peches.jpg',
             famille:'A noyau',
             startTime: '',
             endTime: ''
          },
          {
            name: 'Abricot',
            description: [
              'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
              ],
              isOn: true,
              prix:'8DT',
               imageUrl: '/assets/imgs/abricots.jpg',
               famille:'A noyau',
               startTime: '',
               endTime: ''
            },
            {
              name: 'Prune',
              description: [
                'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                ],
                isOn: true,
                prix:'7DT',
                 imageUrl: '/assets/imgs/prunes.jpg',
                 famille:'A noyau',
                 startTime: '',
                 endTime: ''
              },
              {
                name: 'Peche',
                description: [
                  'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                  ],
                  isOn: true,
                  prix:'3DT',
                   imageUrl: '/assets/imgs/peches.jpg',
                   famille:'A noyau',
                   startTime: '',
                   endTime: ''
                },
                {
                  name: 'Abricot',
                  description: [
                    'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                    ],
                    isOn: true,
                    prix:'8DT',
                     imageUrl: '/assets/imgs/abricots.jpg',
                     famille:'A noyau',
                     startTime: '',
                     endTime: ''
                  },
                  {
                    name: 'Prune',
                    description: [
                      'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                      ],
                      isOn: true,
                      prix:'7DT',
                       imageUrl: '/assets/imgs/prunes.jpg',
                       famille:'A noyau',
                       startTime: '',
                       endTime: ''
                    }
        ];
        fruitsList11 = [
          {
            name: 'Peche',
            description: [
              'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
              ],
              isOn: true,
              prix:'3DT',
               imageUrl: '/assets/imgs/peches.jpg',
               famille:'A noyau',
               startTime: '',
               endTime: ''
            },
            {
              name: 'Abricot',
              description: [
                'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                ],
                isOn: true,
                prix:'8DT',
                 imageUrl: '/assets/imgs/abricots.jpg',
                 famille:'A noyau',
                 startTime: '',
                 endTime: ''
              },
              {
                name: 'Prune',
                description: [
                  'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                  ],
                  isOn: true,
                  prix:'7DT',
                   imageUrl: '/assets/imgs/prunes.jpg',
                   famille:'A noyau',
                   startTime: '',
                   endTime: ''
                }
          ];

        fruitsList2 = [
                {
                  name: 'Citron',
                  description: [
                    'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                    ],
                    isOn: true,
                    prix:'10DT',
                    imageUrl: '/assets/imgs/citrons.jpg',
                    famille:'Argume',
                    startTime: '',
                    endTime: ''
                  },
                  {
                    name: 'Orange',
                    description: [
                      'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                      ],
                      isOn: true,
                      prix:'1DT',
                       imageUrl: '/assets/imgs/oranges.jpg',
                       famille:'Argume',
                       startTime: '',
                       endTime: ''
                    },{
                      name: 'Pamplemousse',
                      description: [
                        'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                        ],
                        isOn: true,
                        prix:'3DT',
                         imageUrl: '/assets/imgs/pamplemousses.jpg',
                         famille:'Argume',
                         startTime: '',
                         endTime: ''
                      },
                      {
                        name: 'Citron',
                        description: [
                          'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                          ],
                          isOn: true,
                          prix:'10DT',
                          imageUrl: '/assets/imgs/citrons.jpg',
                          famille:'Argume',
                          startTime: '',
                          endTime: ''
                        },
                        {
                          name: 'Orange',
                          description: [
                            'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                            ],
                            isOn: true,
                            prix:'1DT',
                             imageUrl: '/assets/imgs/oranges.jpg',
                             famille:'Argume',
                             startTime: '',
                             endTime: ''
                          },{
                            name: 'Pamplemousse',
                            description: [
                              'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                              ],
                              isOn: true,
                              prix:'3DT',
                               imageUrl: '/assets/imgs/pamplemousses.jpg',
                               famille:'Argume',
                               startTime: '',
                               endTime: ''
                            },
                            {
                              name: 'Citron',
                              description: [
                                'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                                ],
                                isOn: true,
                                prix:'10DT',
                                imageUrl: '/assets/imgs/citrons.jpg',
                                famille:'Argume',
                                startTime: '',
                                endTime: ''
                              },
                              {
                                name: 'Orange',
                                description: [
                                  'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                                  ],
                                  isOn: true,
                                  prix:'1DT',
                                   imageUrl: '/assets/imgs/oranges.jpg',
                                   famille:'Argume',
                                   startTime: '',
                                   endTime: ''
                                },{
                                  name: 'Pamplemousse',
                                  description: [
                                    'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                                    ],
                                    isOn: true,
                                    prix:'3DT',
                                     imageUrl: '/assets/imgs/pamplemousses.jpg',
                                     famille:'Argume',
                                     startTime: '',
                                     endTime: ''
                                  }
          ];
    fruitsList22 = [
      {
        name: 'Citron',
        description: [
          'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
          ],
          isOn: true,
          prix:'10DT',
          imageUrl: '/assets/imgs/citrons.jpg',
          famille:'Argume',
          startTime: '',
          endTime: ''
        },
        {
          name: 'Orange',
          description: [
            'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
            ],
            isOn: true,
            prix:'1DT',
             imageUrl: '/assets/imgs/oranges.jpg',
             famille:'Argume',
             startTime: '',
             endTime: ''
          },{
            name: 'Pamplemousse',
            description: [
              'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
              ],
              isOn: true,
              prix:'3DT',
               imageUrl: '/assets/imgs/pamplemousses.jpg',
               famille:'Argume',
               startTime: '',
               endTime: ''
            }
          ];
          fruitsListPopulaire = [
            {
              name: 'Pomme',
              description: [
                'Quantité: 6 kilos',
                'Origine: France',
                'Nature: Biologique'
                ],
                prix:'3DT',
                isOn: true,
                 imageUrl: '/assets/imgs/pommes.jpg',
                 famille:'A pepin',
                 startTime: '',
                 endTime: ''
              },
            {
              name: 'Citron',
              description: [
                'Quantité: 6 kilos',
                'Origine: France',
                'Nature: Biologique'
                ],
                isOn: true,
                prix:'10DT',
                imageUrl: '/assets/imgs/citrons.jpg',
                famille:'Argume',
                startTime: '',
                endTime: ''
              },
              {
                name: 'Abricot',
                description: [
                  'Quantité: 6 kilos',
        'Origine: France',
        'Nature: Biologique'
                  ],
                  isOn: true,
                  prix:'8DT',
                   imageUrl: '/assets/imgs/abricots.jpg',
                   famille:'A noyau',
                   startTime: '',
                   endTime: ''
                }
              ];
              emitAppareils() {
                this.fruits$.next(this.fruitsList.slice());
                }
                saveData() {
                  return new Promise((resolve, reject) => {
                  firebase.database().ref('fruits').set(this.fruitsList).then(
                  (data: DataSnapshot) => {
                  resolve(data);
                  },
                  (error) => {
                  reject(error);
                  }
                  );
                  });
                  }
                  retrieveData() {
                  return new Promise((resolve, reject) => {
                  firebase.database().ref('fruits').once('value').then(
                  (data: DataSnapshot) => {
                  this.fruitsList = data.val();
                  this.emitAppareils();
                  resolve('Données récupérées avec succès !');
                  }, (error) => {
                  reject(error);
                  }
                  );
                  });
                  }
                  
              addFruit(fruit: Fruit) {
                this.fruitsList.push(fruit);
                this.emitAppareils();
                }
                addFruit1(fruit: Fruit) {
                  this.fruitsList.push(fruit);
                  this.emitAppareils();
                  }
        }