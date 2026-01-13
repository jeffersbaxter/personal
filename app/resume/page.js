export default function ResumePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Jeffers&apos; Resume</h2>
      <section>
        <article>
            <div className='flex jc-sb'>
                <p className='fs-italic'>jeffersbaxter@comcast.net</p>
                <p className='fs-italic'>inbasicterms.com</p>
            </div>
            <h3>Skills</h3>
            <div>
                <ul className='pd-l-34'>
                    <li>
                        Python, SQL, JavaScript, React, Angular, Graph Databases, Agile, NextJS
                    </li>
                </ul>
            </div>
            <h3>Experience</h3>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Sole Proprietor, </span>
                    <span className='fw-300 pd-0-8'>In Basic Terms, </span>
                    <span className='fw-300 fs-italic'>2022 - Present</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Building custom, cross-platform applications in Python and JavaScript
                    </li>
                    <li>
                        Offering machine learning and data science solutions for local organizations
                    </li>
                    <li>
                        Teaching cost-effective classes on software engineering around western Washington
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>STEM Instructor, </span>
                    <span className='fw-300 pd-0-8'>Stemtree, </span>
                    <span className='fw-300 fs-italic'>2025</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Taught STEM classes to students with ages from Kindergarten to Fifth grade.
                    </li>
                    <li>
                        Adapted lessons to the ability and communication needs of each student.
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Teaching Assistant, </span>
                    <span className='fw-300 pd-0-8'>Oregon State University, </span>
                    <span className='fw-300 fs-italic'>2024</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Held office hours to teach React, JavaScript, Assembly, binary conversion and MongoDB to students.
                    </li>
                    <li>
                        Graded more than 30, full-stack assignments each week
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Full-Stack Developer, </span>
                    <span className='fw-300 pd-0-8'>Sermo Digital, </span>
                    <span className='fw-300 fs-italic'>2016 - 2021</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Extracted, transformed and loaded more than 10,000 nodes into a Neo4j instance
                    </li>
                    <li>
                        Developed Angular interface for searching through the Neo4j instance
                    </li>
                    <li>
                        Proved adaptability by learning Go, Docker, and Google Protocol Buffers after the backend developer left
                    </li>
                </ul>
            </div>
            <h3>Education</h3>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Bachelor&apos;s of Science in Computer Science, </span>
                    <span className='fw-300 pd-0-8'>Oregon State University, </span>
                    <span className='fw-300 fs-italic'>2023 - 2026</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Pursuing a degree in Computer Science with a 4.0 GPA
                    </li>
                    <li>
                        Courses include: Data Structures, Analysis of Algorithms, Operating Systems
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Bachelor&apos;s of Arts in Communication, </span>
                    <span className='fw-300 pd-0-8'>Washington State University, </span>
                    <span className='fw-300 fs-italic'>2009 - 2013</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Major in Strategic Communication
                    </li>
                    <li>
                        Minor in Business Administration
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex flex-wrap mg-21-0 merriweather pd-l-13'>
                    <span className='fw-700'>Web Development Bootcamp, </span>
                    <span className='fw-300 pd-0-8'>General Assembly, </span>
                    <span className='fw-300 fs-italic'>2015</span>
                </div>
                <ul className='pd-l-34'>
                    <li>
                        Constructed full-stack applications in Node.js, Angular, Ruby on Rails, Express and CSS
                    </li>
                </ul>
            </div>
        </article>
      </section>
      
    </div>
  );
}