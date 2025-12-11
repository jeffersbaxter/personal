import EngineeringProject from '@/components/EngineeringProject';

const projects = [
    {
        title: 'Baseball Analytics', 
        id: 'a',
        description: 'This is a baseball analytics dashboard, built in Shiny, Python, Plotly, NumPy and Pandas', 
        projectUrl: 'https://jeffersbaxter.shinyapps.io/baseball-dash/',
        skills: ['Python', 'Plotly', 'NumPy', 'Pandas', 'Shiny'],
        imageSrc: '/trident-stats.png'
    }
];

export const ProjectsPage = () => {
    return (
        <>
            <h2>Projects</h2>
            <ul className='no-type'>
                {projects.map(project => (
                    <li key={project.id} className="border rounded-lg p-6 shadow-sm list-none hover:shadow-md transition-shadow">
                        <EngineeringProject 
                            title={project.title} 
                            description={project.description} 
                            projectUrl={project.projectUrl} 
                            skills={project.skills} 
                            imageSrc={project.imageSrc} 
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProjectsPage;