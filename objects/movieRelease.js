const movies = [
  { moviename: "kaki 2898 AD", hero: "prabhas", relesaeDate: "2024-06-27" },
  { moviename: "RRR", hero: "Ram charan,NTR", relesaeDate: "2022-03-24" },
  { moviename: "Hanuman", hero: "teja sajja", relesaeDate: "2024-02-27" },
];
movies.sort((a, b) => a.relesaeDate.localeCompare(b.relesaeDate));
console.log(movies);

// movies.forEach((a) => {
//   console.log(a);
// });
