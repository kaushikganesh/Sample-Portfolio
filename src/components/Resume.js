import ResumeImg from'../assets/qualified-employee-holds-an-excellent-resume-good-portfolio-for-hiring-confident-businessman-is-specialist-in-search-for-highly-qualified-job-business-profile-to-apply-for-new-job-concept-vector.jpg';
export default function Resume(){

    const config = {
        link: 'https://drive.google.com/file/d/1_VjlB8o6pBeIoZ2RnJ7qOkUQJ5f3rowR/view?usp=drivesdk'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>

        <div className='md:w-1/2 flex justify-center'>
        <div className='px-3 flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn' href={config.link} >Download</a></p>
            

        </div>
            
        </div>
    </section>
}