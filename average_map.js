const DataStudents =
    [
        [
            "s1",
            {
                "name": "Alice",
                "mention": "",
                "notes": [11, 12, 18],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/1"
            }
        ],
        [
            "s2",
            {
                "name": "Alan",
                "mention": "",
                "notes": [10, 14.5, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
            "s3",
            {
                "name": "Bernard",
                "mention": "",
                "notes": [11, 9, 9],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/2"
            }
        ],
        [
        "s4",
        {
            "name": "Naoudi",
            "mention": "",
            "notes": [14.5, 19, 18],
            "average" : null,
            "url": "http://lorempixel.com/100/100/cats/3"
        }
        ],
        [
            "s5",
            {
                "name": "Fenley",
                "mention": "",
                "notes": [9, 7, 11],
                "average" : null,
                "url": "http://lorempixel.com/100/100/cats/4"
            }
        ]
    ];

    const Students = new Map(DataStudents);
    
    const mentions = [
        { mention: "TB", notes: [17, 20]},
        { mention: "B", notes: [14, 16.99]},
        { mention: "AB", notes: [12, 13.99]},
        { mention: "P", notes: [10, 11.99]},

    ]

    // Ajouter un etudiant au MAP
    const AddAStudent = (dataMap, sX, {...newData}) => {
       
            if (dataMap.has(sX) ) return 'Cet étudiant existe deja' //throw newError('Cet étudiant existe deja')  
            else dataMap.set(sX, {...newData})
    }
    
    AddAStudent(Students, 's20', {
        "name": "Julien",
        "mention": "",
        "notes": [14, 12, 20],
        "average": null,
    })

    AddAStudent(Students, 's19', {
        "name": "Marie",
        "mention": "",
        "notes": [19, 17, 20],
        "average": null,
    })
   

    // calculer l'average de chaque eleve du DataStudent puis donner la mention en fonction de l'average obtenu pour chaque élève
    Students.forEach(student => {
        student.average = (student.notes.reduce((acc, curr) => (curr + acc)) / (student.notes.length)).toFixed(2);
        mentions.forEach( mention => {
            student.average >= mention.notes[0] && student.average <= mention.notes[1] ? student.mention = mention.mention : 'aucune mention'
        })
    });

    console.log(Students)
