import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 p-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 bg-[#ff6c6d] h-5 rounded-full ' />
          <div className='w-2 sm:h-96 bg-[#ff6c6d] h-96 ' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#ff6c6d]'>THE DM AGENCY</span>

           <br/>
          <span className={`text-[#fff] ${styles.sectionHeadText}`}>Plus efficace, plus rapide. </span>

          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Profitez de l’expertise marketing de notre agence de marketing digital et d’une vision digitale de votre marché pour vous imposer.
            </p>

            <br/>

            <div className='w-full flex mt-8 items-center'>
       
       
       <a href='#contact'>
         <button className={`w-[285px] bg-[#ff6c6d] h-[64px] rounded-3xl ${styles.sectionButton} `}>
           {/* <motion.div
             animate={{
               y: [0, 24, 0],
             }}
             transition={{
               duration: 1.5,
               repeat: Infinity,
               repeatType: "loop",
             }}
             className='w-3 h-3 rounded-full bg-secondary '
           /> */}
           Démarrer Mon project
         </button>
       </a>
     </div>


            
        </div>


        
      </div>

      


      {/* <ComputersCanvas /> */}






    
    </section>
  );
};

export default Hero;
