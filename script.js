const words = [
    "Engineer",
    "Photographer",
    "UI/UX Enthusiast"
];

let index = 0;

setInterval(() => {
    document.getElementById("typing").textContent =
    words[index];

    index++;

    if(index === words.length){
        index = 0;
    }

}, 2000);

function filterProjects(category){

    const cards =
    document.querySelectorAll('.project-card');

    let count = 0;

    cards.forEach(card => {

        const show =
        category === 'all' ||
        card.classList.contains(category);

        if(show){

            card.style.display = 'block';

            setTimeout(() => {
                card.classList.remove('hide');
            },50);

            count++;

        }else{

            card.classList.add('hide');

            setTimeout(() => {
                card.style.display = 'none';
            },400);

        }

    });

    document.getElementById('project-count')
    .textContent =
    `Showing: ${count} Project${count !== 1 ? 's' : ''}`;

    document.getElementById('no-projects')
    .style.display =
    count === 0 ? 'block' : 'none';

}

async function loadGithubProjects() {

    const response =
    await fetch('projects.json');

    const projects =
    await response.json();

    const grid =
    document.getElementById('github-projects');

    projects.forEach(project => {

        const card =
        document.createElement('div');

        card.className =
        'card project-card code';

        card.innerHTML = `
            <h3>${project.title}</h3>

            <p>
                ${project.description}
            </p>

            <a
            href="${project.github}"
            target="_blank">
                View Repository
            </a>
        `;

        grid.appendChild(card);

    });

}

loadGithubProjects();