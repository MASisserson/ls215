"use strict";

const gradeTable = {
  A: 93,
  B: 85,
  C: 77,
  D: 69,
  E: 60,
  F: 0
};

const examWeight = 0.65;
const exerciseWeight = 0.35;

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const avg = function averageNumberArray(numbers) {
  return numbers.reduce((sum, num) => num + sum) / numbers.length;
};

const sum = function calculateSumOfArrayElements(numbers) {
  return numbers.reduce((sum, num) => sum + num);
};

const roundToTenths = function roundToOneDecimalPlace(num) {
  return Math.round(num * 10) / 10;
};

const getMin = function getMinimum(numbers) {
  return numbers.reduce((min, num) => ((min <= num) ? min : num));
};

const getMax = function getMaximum(numbers) {
  return numbers.reduce((max, num) => ((max >= num) ? max : num));
};

const getExams = function getExamsFromStudentScores(studentData) {
  return studentData.exams;
};

const rotArr = function rotateNestedArray(___, idx, arr) {
  return arr.map(ele => ele[idx]);
};

const compileExams = function compileExamData(examGrades) {
  return examGrades.map(exam => {
    return {
      average: roundToTenths(avg(exam)),
      minimum: getMin(exam),
      maximum: getMax(exam),
    };
  });
};

const parseExams = function parseExamDataFromScores(studentData) {
  const studentExams = studentData.map(getExams);
  const numberOfExams = studentExams[0].length;
  const examStats = studentExams.map(rotArr);
  examStats.length = numberOfExams;

  return compileExams(examStats);
};

const formatGrade = function formatFinalNumberAndLetterGrade(finalGrade) {
  return Object.keys(gradeTable).reduceRight((match, ltrGrade) => {
    if (gradeTable[ltrGrade] <= finalGrade) {
      match = `${finalGrade} (${ltrGrade})`;
    }
    return match;
  }, '');
};

const calcGrade = function calculateStudentGrade(studentData) {
  const examScore = avg(studentData.exams);
  const exerciseScore = sum(studentData.exercises);

  let finalGrade = (examScore * examWeight) + (exerciseScore * exerciseWeight);
  finalGrade = Math.round(finalGrade);
  return formatGrade(finalGrade);
};

const generateClassRecordSummary = function generateClassRecordSummary(scores) {
  const students = Object.keys(scores);
  const studentScores = students.map(student => scores[student].scores);

  const studentGrades = studentScores.map(calcGrade);
  const exams = parseExams(studentScores);

  return { studentGrades, exams };
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
