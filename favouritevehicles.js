const vehicles = ["ford", "honda", "nissan", "renault", "hyundai"]; 
for (let i = 0; i < vehicles.length; i++){

// ford is the first car on the list so 0 is its value. Ford is my favourite car (dont judge i love my fiesta)
// https://codeyourfuture.github.io/syllabus-london/js-core-1/week-2/lesson.html helped me figure this out
if (i == 0) {
    console.log(`${(vehicles[i])} is my favourite car`);
} 
else 
    console.log(`${(vehicles[i])} is not my favourite car`);
}