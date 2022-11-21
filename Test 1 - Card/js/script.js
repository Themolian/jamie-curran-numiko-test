function countTo(target, from, to, interval) {
  //   let from = 200;
  //   let to = 100;
  let step = to > from ? 1 : -1;
  //   let interval = 10;

  if (from == to) {
    document.querySelector(target).textContent = from;
    return;
  }

  let counter = setInterval(() => {
    from += step;
    document.querySelector(target).textContent = from;

    if (from == to) {
      clearInterval(counter);
    }
  }, interval);
}

countTo(".card-counter#companies .number", 0, 10, 300);
countTo(".card-counter#templates .number", 0, 314, 0.1);
countTo(".card-counter#queries .number", 0, 12, 300);
