//Declared a variable
// let a = 6;

// //created a function
// function fact(number) {
//   let arr = Array.from(Array(number + 1).keys()); // keys() return method returns an Array Iterator object with the keys of an array
//   console.log(arr);
//   let c = arr.slice(1).reduce((a, b) => a * b);
//   console.log(c);
// }

// fact(a);

// let arr1 = ["one", "two", "three", "four", "five"];
// const keys = Object.keys(arr1);
// console.log("Keys of the array are: ", keys);

// for (let i = 0; i < keys.length; i++) {
//   console.log(`Element at index ${i}: ${arr1[keys[i]]}`);
// }

/*
Output:
576872349
Keys of the array are:  0,1,2,3
Element at index 0: one
Element at index 1: two
Element at index 2: three
*/

async function getcard(
  title,
  subtitle,
  thumbnail,
  duration,
  date,
  views,
  likes
) {
  const res = await fetch("/card.json");
  const card = await res.json();
  // Assign values to the function arguments
  title = card.title;
  subtitle = card.subtitle;
  thumbnail = card.thumbnail;
  duration = card.duration;
  date = card.date;
  views = card.views;
  likes = card.likes;
  // Return an object with the updated values
  return { title, subtitle, thumbnail, duration, date, views, likes };
}

// Call the function and use the returned object
getcard().then(
  ({ title, subtitle, thumbnail, duration, date, views, likes }) => {
    console.log(title, subtitle, thumbnail, duration, date, views, likes);
    let cardtitle = document.getElementById("card-title");
    cardtitle.innerText = title;
  }
);
