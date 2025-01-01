// const contain = document.querySelectorAll(".counter");
// const speed = 200; // The lower the slower

// contain.forEach((counter) => {
//   const updateCount = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;

//     // Lower inc to slow and higher to slow
//     const inc = target / speed;

//     // console.log(inc);
//     // console.log(count);

//     // Check if target is reached
//     if (count < target) {
//       // Add inc to count and output in counter
//       counter.innerText = count + inc;
//       // Call function every ms
//       setTimeout(updateCount, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCount();
// });

// sdadadaadadadadada

const contain = document.querySelectorAll(".counter");

contain.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
	const target = +counter.getAttribute('data-target');
	const inc = +counter.innerText;

	const increment = target / 250;

	if (inc < target) {
		counter.innerText = `${Math.ceil(inc + increment)}`;
		setTimeout(updateCounter, 1);
	} else {
		counter.innerText = target;
	}
  };
  updateCounter();
});
