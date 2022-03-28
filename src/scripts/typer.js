const velocity = 100;
const waitTime = 3000;
const content = [
  "node welcome.js",
  "bash welcome.sh",
  "./ welcome.exe",
  "java welcome.class",
  "python3 welcome.py",
];

const textElement = document.querySelector("#text");

let contentIndex = 0;
let cursorLocation = 0;

/* The Forever Loop */

while (true) {
  await timedInterval(type, velocity);
  await wait(waitTime);
  await timedInterval(erase, velocity);
  await wait(waitTime);
  contentIndex = (contentIndex + 1) % content.length;
}

/* Functional */

function type() {
  const text = content[contentIndex].substring(0, ++cursorLocation);
  textElement.innerHTML = text;
  return text.length >= content[contentIndex].length;
}

function erase() {
  const text = content[contentIndex].substring(0, --cursorLocation);
  textElement.innerHTML = text;
  return text.length <= 0;
}

/* Promises */

function timedInterval(fn, ms) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (fn()) {
        clearInterval(interval);
        resolve();
      }
    }, ms);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
