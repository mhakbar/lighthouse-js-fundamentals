function whichSchool(age) {

age = 13;
  if (age > 0 && age <= 13) {
    console.log(whichSchool("Elementary School"));

  } else if (age >= 13 && age <= 18) {
    console.log(whichSchool("Secondary School"));

  } else {
    console.log(whichSchool("Lighthouse Labs"));
  }
}