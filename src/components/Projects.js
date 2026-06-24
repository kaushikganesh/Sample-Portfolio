import websiteImg1 from '../assets/preview-latest.avif';
import websiteImg2 from '../assets/1ddaf391-3e50-4870-9fd7-5d26b6ecf11c-cover.png';
import websiteImg3 from '../assets/849227104961439.Y3JvcCw4MDgsNjMyLDAsMA.jpg';


export default function Projects(){

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A E-commerce Website built with MERN Stack',
                link: 'https://github.com/kaushikganesh'
            },
            {
                image: websiteImg2,
                description: 'Food E-commerce Website built with Angular and .Net',
                link: 'https://github.com/kaushikganesh'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website built with Next JS and MongoDB',
                link: 'https://github.com/kaushikganeshs'
            }
        ]
    }

     return <section id='projects' className="flex flex-col  py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 md:py-10 py-0">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
            <p className='md:pb-0 pb-5'>These are some of my best projects I have built. Please check them out.</p>
            </div>

        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href={project.link}>
                    <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description} </p>
                        <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>
                     </div>
                     </a>

               ))}
            
                </div>
            </div>
     </section>





}