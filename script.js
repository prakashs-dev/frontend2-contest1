const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developer = data.filter((dev) => dev.profession == "developer");
  for (let i of developer) {
    console.log(i);
  }
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name");
  const age = Number(prompt("Enter age"));
  const profession = prompt("Enter profession");

  let newData = {
    name: name,
    age: age,
    profession: profession,
  };
  data.push(newData);
  for (let i of data) {
    console.log(i);
  }
}

// 3. Remove Admins
function removeAdmin() {
  const removeRole = data.filter((role) => role.profession != "admin");
  console.log(removeRole);
}

// 4. Concatenate Array
function concatenateArray() {
  let newData = [
    {
      name: "user1",
      age: 30,
      profession: "tester",
    },
    {
      name: "user2",
      age: 40,
      profession: "hr",
    },
  ];
  let result = data.concat(newData);
  console.log(result);
  for (let i of result) {
    console.log(i);
  }
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / data.length;
  console.log(avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const checkAge = data.some((person) => person.age > 25);
  console.log(checkAge);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professionsSet = new Set(data.map((dev) => dev.profession));
  console.log([...professionsSet]);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  for (let i of data) {
    console.log(i);
  }
}

// 9. Update Profession
function updateJohnsProfession() {
  const upProfession = data.find((person) => person.name == "john");
  if (upProfession) {
    upProfession.profession = "team leader";
  }
  console.log(upProfession);
}

// 10. Profession Count
function getTotalProfessions() {
  const professionCount = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;
    return count;
  }, {});
  console.log(professionCount);
}
