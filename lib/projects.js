
const allProjects = [
    {
        title: 'Baseball Analytics', 
        id: 'baseball-analytics',
        description: 'This is a baseball analytics dashboard, built in Shiny, Python, Plotly, NumPy and Pandas', 
        projectUrl: 'https://jeffersbaxter.shinyapps.io/baseball-dash/',
        skills: ['Python', 'Plotly', 'NumPy', 'Pandas', 'Shiny'],
        imageSrc: '/trident-stats.png'
    }
];

export function getAllProjects() {
    return allProjects;
};

export function getAllProjectIds () {
    return allProjects.map((p) => (p.id));
}

export function getProjectById(id) {
  let project = null;

  allProjects.forEach(function (p, i) {
    if (id === p.id) {
        project = p;
    }
  });

  if (project === null) {
    throw new Error(`No project with id ${id}`);
  }

  return project;
}
