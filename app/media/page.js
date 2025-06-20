import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";


export const MediaPage = () => {
    return (
        <>
            <h2>Media</h2>
            <article>
                <p className='mg-21-0'>
                    <MdEmail /> <span className='pd-0-8'>jeffersbaxter@comcast.net</span>
                </p>
                <p className='mg-21-0'>
                    <LuBriefcaseBusiness /> <span className='pd-0-8'>jeffers@inbasicterms.com</span>
                </p>
                <p className='mg-21-0'>
                    <FaGithub /><span className='pd-0-8'> github.com/jeffersbaxter</span>
                </p>
                <p className='mg-21-0'>
                    <FaLinkedinIn /><span className='pd-0-8'>linkedin.com/in/jeffersbaxter</span>
                </p>
            </article>
        </>
    )
}

export default MediaPage;