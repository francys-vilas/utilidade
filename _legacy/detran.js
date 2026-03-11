{
   "jobIds":[
      "81726e7a-b835-456f-a501-9bcf910dcad0"
   ],
   "results":[
      {
         "jobId":"81726e7a-b835-456f-a501-9bcf910dcad0",
         "result":{
            "data":{
               "timestamp":"2025-12-10T10:22:23.712Z",
               "rootActivityId":"5258a4dc-57ad-471e-843d-bef663c2907b",
               "descriptor":{
                  "Select":[
                     {
                        "Kind":1,
                        "Depth":0,
                        "Value":"G0",
                        "GroupKeys":[
                           {
                              "Source":{
                                 "Entity":"instrutores_RENACH",
                                 "Property":"Nome"
                              },
                              "Calc":"G0",
                              "IsSameAsSelect":true
                           }
                        ],
                        "Name":"instrutores_RENACH.nome"
                     },
                     {
                        "Kind":1,
                        "Depth":0,
                        "Value":"G1",
                        "GroupKeys":[
                           {
                              "Source":{
                                 "Entity":"instrutores_RENACH",
                                 "Property":"UF Detran"
                              },
                              "Calc":"G1",
                              "IsSameAsSelect":true
                           }
                        ],
                        "Name":"instrutores_RENACH.uf_detran_cadastramento"
                     },
                     {
                        "Kind":1,
                        "Depth":0,
                        "Value":"G2",
                        "GroupKeys":[
                           {
                              "Source":{
                                 "Entity":"instrutores_RENACH",
                                 "Property":"Bairro"
                              },
                              "Calc":"G2",
                              "IsSameAsSelect":true
                           }
                        ],
                        "Name":"instrutores_RENACH.Bairro"
                     },
                     {
                        "Kind":1,
                        "Depth":0,
                        "Value":"G3",
                        "GroupKeys":[
                           {
                              "Source":{
                                 "Entity":"TOM_Serpro",
                                 "Property":"Município"
                              },
                              "Calc":"G3",
                              "IsSameAsSelect":true
                           }
                        ],
                        "Name":"TOM_Serpro.MUNI_NM"
                     }
                  ],
                  "Expressions":{
                     "Primary":{
                        "Groupings":[
                           {
                              "Keys":[
                                 {
                                    "Source":{
                                       "Entity":"instrutores_RENACH",
                                       "Property":"Nome"
                                    },
                                    "Select":0
                                 },
                                 {
                                    "Source":{
                                       "Entity":"instrutores_RENACH",
                                       "Property":"UF Detran"
                                    },
                                    "Select":1
                                 },
                                 {
                                    "Source":{
                                       "Entity":"instrutores_RENACH",
                                       "Property":"Bairro"
                                    },
                                    "Select":2
                                 },
                                 {
                                    "Source":{
                                       "Entity":"TOM_Serpro",
                                       "Property":"Município"
                                    },
                                    "Select":3
                                 }
                              ],
                              "Member":"DM0"
                           }
                        ]
                     }
                  },
                  "Version":2
               },
               "metrics":{
                  "Version":"1.0.0",
                  "Events":[
                     {
                        "Id":"6c024f1d-2ca0-4954-be03-4115b69ab2e6",
                        "Name":"Execute Semantic Query",
                        "Component":"DSE",
                        "Start":"2025-12-10T10:22:23.7122058Z",
                        "End":"2025-12-10T10:22:23.7434567Z"
                     },
                     {
                        "Id":"0794d2f7-94d2-4b15-8b69-7bbf6b0c0c78",
                        "ParentId":"6c024f1d-2ca0-4954-be03-4115b69ab2e6",
                        "Name":"Execute DAX Query",
                        "Component":"DSE",
                        "Start":"2025-12-10T10:22:23.7122058Z",
                        "End":"2025-12-10T10:22:23.7434567Z",
                        "Metrics":{
                           "RowCount":212
                        }
                     },
                     {
                        "Id":"F6FB39F2-2398-41E1-AB58-0AEAB3294F47",
                        "ParentId":"0794d2f7-94d2-4b15-8b69-7bbf6b0c0c78",
                        "Name":"Execute Query",
                        "Component":"AS",
                        "Start":"2025-12-10T10:22:23.743Z",
                        "End":"2025-12-10T10:22:23.75Z"
                     },
                     {
                        "Id":"DB764AA2-4EBB-43A7-B71F-4DE8BB8BEBA7",
                        "ParentId":"F6FB39F2-2398-41E1-AB58-0AEAB3294F47",
                        "Name":"Serialize Rowset",
                        "Component":"AS",
                        "Start":"2025-12-10T10:22:23.747Z",
                        "End":"2025-12-10T10:22:23.75Z"
                     }
                  ]
               },
               "fromCache":false,
               "dsr":{
                  "Version":2,
                  "MinorVersion":1,
                  "DS":[
                     {
                        "N":"DS0",
                        "PH":[
                           {
                              "DM0":[
                                 {
                                    "S":[
                                       {
                                          "N":"G0",
                                          "T":1,
                                          "DN":"D0"
                                       },
                                       {
                                          "N":"G1",
                                          "T":1,
                                          "DN":"D1"
                                       },
                                       {
                                          "N":"G2",
                                          "T":1,
                                          "DN":"D2"
                                       },
                                       {
                                          "N":"G3",
                                          "T":1,
                                          "DN":"D3"
                                       }
                                    ],
                                    "C":[
                                       0,
                                       0,
                                       0,
                                       0
                                    ]
                                 },
                                 {
                                    "C":[
                                       1,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       2,
                                       2
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       3,
                                       3
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       4,
                                       4
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       5,
                                       5
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       6,
                                       3
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       7,
                                       6
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       8,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       9,
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       10,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       11,
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       12,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       13,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       14,
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       15,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       16,
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       17,
                                       13
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       18,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       19,
                                       14
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       20,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       21,
                                       15
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       22,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       23
                                    ],
                                    "R":14
                                 },
                                 {
                                    "C":[
                                       24,
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       25,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       26
                                    ],
                                    "R":14
                                 },
                                 {
                                    "C":[
                                       27,
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       28,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       29,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       30,
                                       14
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       31,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       32,
                                       18
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       33,
                                       19
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       34,
                                       20
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       35,
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       36,
                                       21
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       37,
                                       22
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       38,
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       39,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       40,
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       41,
                                       15
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       42,
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       43,
                                       23
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       44,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       45,
                                       24
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       46,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       47,
                                       25
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       48,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       49,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       50,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       51,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       52,
                                       26
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       53,
                                       27
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       54,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       55,
                                       22
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       56,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       57,
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       58,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       59,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       60,
                                       27
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       61,
                                       21
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       62,
                                       4
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       63,
                                       28
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       64,
                                       29
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       65,
                                       30
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       66,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       67,
                                       4
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       68,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       69,
                                       3
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       70,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       71,
                                       31
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       72,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       73,
                                       2
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       74,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       75,
                                       4
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       76,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       77,
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       78,
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       79,
                                       21
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       80,
                                       30
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       81,
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       82,
                                       18
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       83,
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       84,
                                       32
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       85,
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       86,
                                       28
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       87,
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       88,
                                       33
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       89,
                                       34
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       90,
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       91,
                                       35
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       92,
                                       36
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       93,
                                       37
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       94,
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       95,
                                       38
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       96,
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       97,
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       98,
                                       28
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       99,
                                       31
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JACKSON RODRIGUES VICENTE",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JAQUELINE ALVES",
                                       21
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JAYNE DE MORAES SILVA",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JEFERSON FIDELIS SOUTO",
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JESUS DE SOUSA ALVES",
                                       39
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOCKEBED DE ALMEIDA LIMA SILVA",
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JONATAS DOMINGUES",
                                       27
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE ANTONIO DE ALVARENGA",
                                       40
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE BATISTA LELLES FERREIRA",
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE CARLOS OLIVEIRA DOS SANTOS",
                                       41
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE DEOLINDO DE OLIVEIRA",
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE DIMAS MOREIRA",
                                       42
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE MARTINS DA SILVA",
                                       41
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE PEREIRA DE SOUZA",
                                       24
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE TOMAZ FERREIRA",
                                       43
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSE VIEIRA ANTERO",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JOSUE DOS SANTOS RODRIGUES",
                                       44
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JULIANA FERREIRA NELVAM BRANDIAO",
                                       2
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JULIO MARIA GOMES DA SILVA",
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "JUSCINEIA LUCILAINE DE ALMEIDA F SILVA",
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "KELLY KARINE DA SILVA GONCALVES SOARES",
                                       45
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LICINIO MARIO DE SOUZA",
                                       46
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LILIAN HENRIQUES MIRANDA",
                                       47
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LORAINE GONCALVES DE SOUZA",
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LOURDES DA SILVA OLIVEIRA ANDRADE",
                                       48
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LUCAS JEAN MARTINS FORTES",
                                       5
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LUCIMAR TEODORO DOS REIS",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LUCINEA GOMES DE PAULA SILVA",
                                       2
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "LUIZ CARLOS DO CARMO RAMOS",
                                       18
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCELO CANDIDO DE ANDRADE",
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCELO LUCIO MATOS",
                                       49
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCELO NARCISO DE OLIVEIRA",
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCIA PAULA SOUZA REIS",
                                       50
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCIO WILLIAN FEU",
                                       51
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCO VINICIO TEIXEIRA DE SOUZA",
                                       52
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCOS ANTONIO DE MIRANDA",
                                       24
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCOS ANTONIO VIEIRA DO AMARAL",
                                       46
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCOS VINICIUS BRAGA DE OLIVEIRA",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCOS VINICIUS MOREIRA DE MIRANDA",
                                       13
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARCUS VITORIO SOUZA DA SILVA",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARIA APARECIDA COSTA SENA",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARIA AUXILIADORA DA SILVA",
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARIA LUIZA MONTEIRO SILVA",
                                       53
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARIELLE ANDRADE FRANCO",
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARILUZI BALBINO SILVA TEIXEIRA ROSARIO",
                                       54
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "MARLLON CESAR MOTA MATIAS",
                                       55
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "NAIARA CRISTINA LAGE SILVA",
                                       29
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "NATALIA MOREIRA DA SILVA",
                                       15
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "NEIRES REIS BRAGANCA",
                                       36
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "NELI ALVES DE SOUZA",
                                       56
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "NELIO DIAS DRUMMOND",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "OSSIMAR TEIXEIRA PINHEIRO",
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "OTAVIO LUIZ MARTINS FORTES",
                                       5
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "PAOLA PAULINE GAMA DE OLIVEIRA",
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "PATRICIA WERLY LOUBAC",
                                       14
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RAINER DE ARRUDA RIBEIRO",
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RAISSA RODRIGUES SA",
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RAMIRO MARIO DE SOUZA",
                                       46
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RAMON PONTES MIRANDA",
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RAQUEL DA COSTA KNUP",
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RECSSIANE LAURINDA MENDES MENEZES",
                                       55
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "REGINALDO ALMEIDA RODRIGUES",
                                       27
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "REGINALDO QUIRINO DE ALVARENGA",
                                       57
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "REINALDO BARROS MATA",
                                       58
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "REINALDO RODRIGUES DE PAULA",
                                       38
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "REJANE MARTINS NUNES",
                                       13
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RENATO DIAS DA SILVA",
                                       59
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RENATO ZACARIAS DA SILVA",
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RIVAIL WERNER LOUBACK NETO",
                                       6
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "ROBERTO ALMEIDA SOARES"
                                    ],
                                    "R":14
                                 },
                                 {
                                    "C":[
                                       "RODRIGO MONTEIRO CUNHA",
                                       56
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RODRIGUES RAMOS DE ARAUJO",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "ROMILTON CALDEIRA DOS SANTOS",
                                       22
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RONALDO FERREIRA DE ALVARENGA",
                                       36
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RONALDO JOAO DE BRITO",
                                       1
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RONALDO NARCISO DE OLIVEIRA",
                                       11
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RONERIO RAFAEL DE PAULA",
                                       28
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "RONILSON LAGE DIAS",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "SAVIO AGUIAR OLIVEIRA",
                                       45
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "SEMEVALDO GOMES DE AGUIAR",
                                       27
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "SILAS ANTONIO DOS REIS JUNIOR",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "SOFFIA CLAUDIA MIRANDA",
                                       16
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "SULAMITA SATHLER HENRIQUES",
                                       8
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "TAINA SILVA FERREIRA",
                                       25
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "THAIS GARCIA SILVESTRE RIBEIRO",
                                       59
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "THIAGO DE SOUZA PACHECO",
                                       33
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "THIAGO GOMES DE OLIVEIRA",
                                       60
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "TIAGO ALMEIDA DE SOUZA",
                                       61
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VALDEIR FERNANDES DE OLIVEIRA",
                                       7
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VALDINEY RODRIGUES SOARES",
                                       62
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VANDO RUFINO DE ARRUDA",
                                       15
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VERA LUCIA MARTINS DAS GRACAS",
                                       45
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VERA MARIA DAS GRACAS DE ASSIS",
                                       2
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "VILSON JUNIOR RIBEIRO",
                                       18
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WAGNER BARBOSA LIMA",
                                       17
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WAGNER MARTINS DA ROCHA",
                                       9
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WAGNER MAYCRON SOUZA",
                                       45
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WAKTER OLIVEIRA CARVALHO",
                                       31
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WALASTAN MALAQUIAS PINTO",
                                       25
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WALDETE DE MATOS LEAL",
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WARLEN VIANA DE CARVALHO"
                                    ],
                                    "R":14
                                 },
                                 {
                                    "C":[
                                       "WARLESON BARBOZA BEZERRA",
                                       28
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WASHINGTON WILSON SILVA",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WELITON DE OLIVEIRA SILVEIRA",
                                       12
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WELLINGTON DA SILVA XAVIER",
                                       6
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WELLINGTON DE SOUZA",
                                       61
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WEMERSON FERNANDO TOMAZ SILVA",
                                       38
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WENDELL DIAS CARVALHO",
                                       10
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WERVERSON ARCANJO MARTINS",
                                       63
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WESLEY LIMA NUNES",
                                       64
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WESLEY PINHO DE OLIVEIRA",
                                       25
                                    ],
                                    "R":10
                                 },
                                 {
                                    "C":[
                                       "WEUCLES MOREIRA SANTOS",
                                       65
                                    ],
                                    "R":10
                                 }
                              ]
                           }
                        ],
                        "IC":true,
                        "HAD":true,
                        "ValueDicts":{
                           "D0":[
                              "ADMILSON PINTO DA SILVA",
                              "ADRIANA SILVA PINHEIRO",
                              "ADRIELY MIRANDA CAMPOS SILVA",
                              "AGANOEL GOMES CAVALCANTE",
                              "AILTON BARBOSA CRUZ",
                              "ALBENI MAGALHAES ROSA",
                              "ALESSANDRA RODRIGUES SCHIMIDT MARCONDES",
                              "ALESSANDRO DE SOUZA GONCALVES",
                              "ALEX FELIPE DA SILVA",
                              "ALEXANDER SOARES ALMEIDA",
                              "ALEXANDRE VIANA DE OLIVEIRA",
                              "ALINE ASSIS MIRANDA",
                              "ALINE DE OLIVEIRA BOMFA",
                              "ALINE DOS ANJOS SANTOS",
                              "ALISA VICTORIA ACUNA",
                              "ALYSSON OLIVEIRA LAGE ARAUJO DRUMOND",
                              "ANALIA FERNANDES DOS SANTOS",
                              "ANDERSON PEREIRA MOURAO",
                              "ANDRE ESTRELA SCHERRER",
                              "ANDRE LUIZ VERNEQUE DA SILVA",
                              "ANTONIO CUSTODIO DA SILVA",
                              "ANTONIO MARIO CARNEIRO",
                              "ANTONIO MIGUEL PEREIRA",
                              "ANTONIO MOREIRA CASTRO",
                              "ANTONIO SECUNDINO LOPES",
                              "ARISTIDES LOPES CESARIO",
                              "ARLENE ALMEIDA DA SILVA",
                              "AUGUSTO LAGE DE ALMEIDA",
                              "AUREA DAYANA SOARES",
                              "AURELIANO RIBEIRO DE MATOS JUNIOR",
                              "BRUNIEKS FERREIRA MIRANDA",
                              "CARLOS DE OLIVEIRA MARQUES",
                              "CARLOS ROBERTO ALVES",
                              "CARMELITO ALVES DA SILVA",
                              "CHARBEL HENRIQUE RODRIGUES DE ANDRADE",
                              "CLAUDIA TELES CAMPOS SOUZA",
                              "CLAUDIANA MARCHIOLI BASTOS",
                              "CLEBER VILELA PEREIRA",
                              "CLEIDE ALVES DE ALCANTARA",
                              "CLICIA GONCALVES DE CASTRO OLIVEIRA",
                              "CLIFER GESSE GONCALVES DE CASTRO",
                              "CYNTIA CRISTINA DE MORAIS",
                              "DANIELA DA PENHA TEREZA DIAS SOUZA",
                              "DANIELLY GUARINO DE ANDRADE",
                              "DENIS ALEF DE SA CAITANO",
                              "DENIS MAX GONCALVES",
                              "DIOGO CESAR MARQUES",
                              "DIRLENE FERREIRA BRUM CANDIDO",
                              "DOUGLAS MARQUES",
                              "DOUGLAS RIBEIRO JARDIM",
                              "EDILAMAR ERICA BARBOSA",
                              "EDILSON DE LAMANCHE DE ASSIS",
                              "EDNILSON JOSE GONCALVES ALVES",
                              "EDSON MARCOS DE OLIVEIRA",
                              "EDSON VASQUES SILVESTRE",
                              "ELECHON ALVES DE ALCANTARA",
                              "ELENIZE DAS GRACAS DRUMOND",
                              "ELIAS ALVES DOS REIS",
                              "ELIENE RIBEIRO DE SOUSA TELES",
                              "ELISEU NUNES DE FREITAS",
                              "ELIVANIA SILVA FERREIRA",
                              "ELIZEU GOMES FERREIRA",
                              "ELOISA HELENA DE PAULO",
                              "ELTON DA SILVA NEVES",
                              "ESDRAS MARTINS ANTONIO",
                              "EUDILENE MARIA DE MEDEIROS",
                              "EUNICE GONCALVES DE SOUZA",
                              "EURIDES CORREIA",
                              "FABIO ANTONIO DA SILVA",
                              "FABIO DA SILVA GARCIA",
                              "FAGNER GARCIA BARCELAR",
                              "FERNANDA DE CASTRO NASCIMENTO",
                              "FLAVIANE AP PEREIRA SILVESTRE ROQUE",
                              "FLAVIO SOUZA ROSA",
                              "FRANCE ALMEIDA VIEIRA",
                              "FRANCISCO HENRIQUE F DE CARVALHO",
                              "FRANCISCO QUINTAO FARIA",
                              "GABRIEL LUCAS VIEIRA SOUSA",
                              "GEONAIA KRISTMAN ALMEIDA",
                              "GERALDA APARECIDA MARCELINO LIMA",
                              "GERALDO GALDINO DE SOUZA ASSIS",
                              "GERALDO PEREIRA DE ALMEIDA",
                              "GERALDO PROCOPIO DE OLIVEIRA",
                              "GILLES FONSECA DE ARRUDA",
                              "GILSON PEREIRA",
                              "GIORGENES JOSE COSTA DIAS",
                              "GIOVANE MOREIRA SALES",
                              "GLAUCIANE COIMBRA FARIAS",
                              "GUILHERME SILVA RAMOS",
                              "GUSTAVO REESTELY DOS SANTOS",
                              "HALBERICON DE ANDRADE OLIVEIRA",
                              "HEIDRIAN MAIK ALVES NASCIMENTO",
                              "HERICA NEVES REIS XAVIER",
                              "HERMOGENES MARCOS MOREIRA JUNIOR",
                              "ICARO CORREA ROQUE",
                              "IGOR ROSA DE SOUZA",
                              "ILDA FLAVIA GONCALVES DE CASTRO",
                              "ISMAR PEREIRA RAMOS",
                              "IVONE MARIA FERNANDES DIAS",
                              "IWEBSTER PATRICK DE ABREU GONCALVES"
                           ],
                           "D1":[
                              "MG"
                           ],
                           "D2":[
                              "RESIDENCIAL POMAR",
                              "AMARO LANARI",
                              "SAO DOMINGOS",
                              "NOVA TIJUCA",
                              "SILVIO PEREIRA I",
                              "SANTO ANTONIO",
                              "CALADINHO",
                              "SANTA CRUZ",
                              "GIOVANINI",
                              "FLORESTA",
                              "CENTRO",
                              "APARECIDA DO NORTE",
                              "MORADA DO VALE",
                              "SURINAN",
                              "CALADINHO DO MEIO",
                              "SILVIO PEREIRA II",
                              "MELO VIANA",
                              "GIOVANNINI",
                              "MANOEL MAIA",
                              "ALIPINHO",
                              "SANTA RITA",
                              "JK",
                              "CALADINHO DE BAIXO",
                              "SANTA LUZIA",
                              "OLARIA",
                              "RECANTO VERDE",
                              "MORRO DO CARMO",
                              "MANGUEIRAS",
                              "SANTA TEREZINHA",
                              "GAVEA",
                              "Sao Vicente",
                              "CALADINHO DE CIMA",
                              "GIOVANINNI",
                              "SYLVIO PEREIRA II",
                              "JUDITH BHERING",
                              "JULIA KUBITSCHEK",
                              "CALADAO",
                              "FUNCIONARIOS",
                              "NOSSA SENHORA DO CAR",
                              "NOSSA SENHORA DA PEN",
                              "STO. ANTONIO",
                              "SAO CRISTOVAO",
                              "SÃO DOMINGOS",
                              "CONTENTE",
                              "CAL DE BAIXO",
                              "SURINA",
                              "SANTO ELOI",
                              "JARDIM PRIMAVERA",
                              "PLANALTO",
                              "JULIA KUBITSCHECK",
                              "ALDEIA DO LAGO",
                              "SANTA TEREZNHA",
                              "STA CRUZ",
                              "CORREGO ALTO",
                              "NAZARE",
                              "POTIRA",
                              "BELVEDERE",
                              "VALE VERDE",
                              "AREA RURAL",
                              "SAO GERALDO",
                              "SANTA INES",
                              "BOM JESUS",
                              "FREDERICO OZAMAN",
                              "ANTONIO DIAS",
                              "SANTA TEREZINHA I",
                              "TODOS OS SANTOS"
                           ],
                           "D3":[
                              "CORONEL FABRICIANO"
                           ]
                        }
                     }
                  ]
               }
            }
         }
      }
   ]
}