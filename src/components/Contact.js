import ResumeImg from'../assets/qualified-employee-holds-an-excellent-resume-good-portfolio-for-hiring-confident-businessman-is-specialist-in-search-for-highly-qualified-job-business-profile-to-apply-for-new-job-concept-vector.jpg';
export default function Contact(){

    const config ={
        email: 'kaushikganesh1512@gmail.com',
        phone: '+91 9025413163'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32'>
        

        <div className='flex flex-col text-white items-center'>
        
            <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'> If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-bold'> Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'> Phone :</span> {config.phone}</p>


        
            
        </div>
    </section>
}