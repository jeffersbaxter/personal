import EngineeringProject from '@/components/EngineeringProject';

const projects = [
    {
        title: 'Baseball Analytics', 
        id: 'a',
        description: 'This is a baseball analytics dashboard, built in Shiny, Python, Plotly, Numpy and Pandas', 
        projectUrl: 'https://jeffersbaxter.shinyapps.io/baseball-dash/',
        imageSrc: '/trident-stats.png'}
];

export const ProjectsPage = () => {
    return (
        <>
            <h2>Projects</h2>
            <article>
                <ul className='no-type'>
                    {projects.map(project => (
                        <li key={project.id} className="border rounded-lg p-6 shadow-sm list-none hover:shadow-md transition-shadow">
                            <EngineeringProject 
                                title={project.title} 
                                description={project.description} 
                                projectUrl={project.projectUrl} 
                                imageSrc={project.imageSrc} 
                            />
                        </li>
                    ))}
                </ul>
            </article>
        </>
    )
}

export default ProjectsPage;