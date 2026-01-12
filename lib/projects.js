
const allProjects = [
    {
        title: 'Baseball Analytics', 
        id: 'baseball-analytics',
        description: 'This is a baseball analytics dashboard, built in Shiny, Python, Plotly, NumPy and Pandas', 
        projectUrl: 'https://jeffersbaxter.shinyapps.io/baseball-dash/',
        skills: ['Python', 'Plotly', 'NumPy', 'Pandas', 'Shiny'],
        imageSrc: '/trident-stats.png'
    },
    {
        title: 'Goal Tracker', 
        id: 'goal-tracker',
        description: `
          I believe in being 1% better from the day before. My Goal Tracker app allows users 
          to set a goal that decrements or increments. In addition, users can set an autoscaling 
          percentage that scales the target up or down by a given percentage, after a set period 
          of time.
        `, 
        projectUrl: 'https://goal-tracker-three-mocha.vercel.app/',
        skills: ['React', 'Node', 'Tailwind', 'Express', 'Mongoose', 'MongoDB'],
        imageSrc: '/goal-tracker.png'
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
