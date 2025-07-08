// Intro example
interface Meeting {
  description: string;
  chapter: string;
  date: string;
  startTime: string;
  endTime: string;
}

const bootcamp: Meeting = {
  description: "Week 8: React Router and TypeScript",
  chapter: "UMD",
  date: "03-31-25",
  startTime: "5:30 PM",
  endTime: "7:00 PM"
};

console.log(bootcamp);

// Interfaces being used in other interfaces,,
// optional properties

interface Point {
  x: number;
  y: number;
}

interface Polygon {
  points: Point[];
  color?: string;
}

const triangle: Polygon = {
  points: [{x: 0, y: 0}, { x: 1, y: 0}, {x: 0, y :1}],
  // color: "blue" // OPTIONAL
}

console.log(triangle);

// Extending Interfaces

interface Human {
  firstName: string;
  middleName?: string;
  lastName: string;
}

interface Teacher extends Human {
  subject: string;
}

let teacher: Teacher = {
  firstName: "William",
  middleName: "Sanford",
  lastName: "Nye",
  subject: "Science"
}

console.log(teacher);