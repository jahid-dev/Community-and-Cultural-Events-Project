<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greeting is not defined`
- C: `undefined`

<details><summary><b>Answer: B: `ReferenceError: greetign is not defined</b></summary>
<p>

#### Answer: B

<i>There's a typographical error in the code. It defines the variable as greetign but later tries to access it as greetign, which will result in a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C: `"12"`</b></summary>
<p>

#### Answer: C

<i>JavaScript attempts to add 1 and "2" using the + operator.
Since one of the operands is a string ("2"), JavaScript performs string concatenation rather than numerical addition.
The result of concatenating the string "1" and the string "2" is "12".
So, the function call sum(1, "2") returns the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A: ['🍕', '🍫', '🥑', '🍔']</b></summary>
<p>

#### Answer: A

<i>The code modifies the info.favoriteFood property but doesn't affect the food array. food remains ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B: `Hi there, undefined`</b></summary>
<p>

#### Answer: B

<i> The sayHi function expects an argument name, but it's called without any argument. In this case, name is undefined, so the result is Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C: 3</b></summary>
<p>

#### Answer: C

<i>The forEach loop iterates through the nums array, and the condition if (num) checks if each element is truthy. Since only the elements 1, 2, and 3 are truthy in JavaScript, the loop increments the count variable three times, resulting in a final value of 3.</i>

</p>
</details>
