const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    },
    {
        name: 'John Gaspar',
        marks: [8, 10, 10, 9, 10, 10 ]
    },
];
let studentAverageMark = calcAverageMark(students);
let groupAverageMark = calcGroupAverageMarks(studentAverageMark);

function calcAverageMark (massive) {
   let individualAverageMark;
   let student;
   let studentsAverageMarks =[];

    for (student of massive){

        let sum = student.marks.reduce((acc, item) => item+acc);
        individualAverageMark = sum/student.marks.length;
        studentsAverageMarks.push(individualAverageMark)
        console.log(`The average mark of ${student.name} is ${individualAverageMark}.`);
     }

     return studentsAverageMarks;
};

function calcGroupAverageMarks (massive){
    let sum = massive.reduce((acc, item) => item+acc);
    let result = sum/massive.length;
    console.log (`Group average mark is ${result}.`);
}