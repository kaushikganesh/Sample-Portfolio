import HeroImg from '../assets/hero.webp';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";



export default function Hero(){
    const config = {
        subtitle: "I'm a Full-stack developer",
        social: {
            instgram: 'https://www.instagram.com/kaushik.1512/',
            facebook: 'https://www.facebook.com/share/1Eg7BgfCjz/?mibextid=wwXIfr',
            linkedIn: 'https://www.linkedin.com/in/kaushik-ganesh-07639531b?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>

        <h1 className=' text-white text-6xl font-hero-font'> Hi, <br/> I'm <span className='text-black'>Kaushik Ganesh</span>
        <p className='text-2xl'>{config.subtitle}</p>
         </h1>
         <div className='flex py-10' >
            <a href={config.social.instgram} className='pr-5 hover:text-white'  ><AiOutlineInstagram size={40}/></a>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedIn} className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
         </div>

         </div>
         <img className='md:w-1/3' src={HeroImg}/>
    </section>
}