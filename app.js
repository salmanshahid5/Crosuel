const user = [
    {
        imgUrl: "img/boy.jpg",
        name: "Salman",
        job: "Web-Development",
        discrption: `Web developers design and build websites, using programming languages like\nHTML, CSS, and JavaScript to create interactive and engaging online experiences.`

    },
    {
        imgUrl: "img/images.jpg",
        name: "Ali",
        job: "Graphics-Designer",
        discrption: `Graphic designers blend creativity and technical skills to communicate ideas visually,\nusing various tools from traditional art to digital software.`

    },
    {
        imgUrl: "img/download.jpg",
        name: "Usman",
        job: "Flutter Developer",
        discrption: `Flutter developers use Google's UI toolkit to build natively compiled applications for\nmobile, web, and desktop from a single codebase.`

    },
];
let usercount = 0;
function preveisHandral() {

    if (usercount > 0) {
        usercount--
        document.querySelector('#imgTag').src = user[usercount].imgUrl
        document.querySelector('#userName').textContent = user[usercount].name
        document.querySelector('#job').textContent = user[usercount].job
        document.querySelector('#discrption').textContent = user[usercount].discrption

    } else {
        usercount = user.length - 1
        document.querySelector('#imgTag').src = user[usercount].imgUrl
        document.querySelector('#userName').textContent = user[usercount].name
        document.querySelector('#job').textContent = user[usercount].job
        document.querySelector('#discrption').textContent = user[usercount].discrption
    }
}
function nextHandral() {

    if (usercount == user.length - 1) {
        usercount = 0
        document.querySelector('#imgTag').src = user[usercount].imgUrl
        document.querySelector('#userName').textContent = user[usercount].name
        document.querySelector('#job').textContent = user[usercount].job
        document.querySelector('#discrption').textContent = user[usercount].discrption

    }
    else {
        usercount++
        document.querySelector('#imgTag').src = user[usercount].imgUrl
        document.querySelector('#userName').textContent = user[usercount].name
        document.querySelector('#job').textContent = user[usercount].job
        document.querySelector('#discrption').textContent = user[usercount].discrption
    }
}