import workImage from '../assets/work_image.jpeg';

function About() {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center h-10/12">
      <div id="image" className="flex justify-center items-center w-full md:w-1/4 mb-6 md:mb-0">
        <img src={workImage} alt="Profile" className="border rounded-full w-40 h-40 md:w-72 md:h-72 object-cover object-center bg-white shadow-[0_0_40px_rgba(205,208,212,0.3)] hover:shadow-[0_0_40px_rgba(205,208,212,0.5)] transition-all duration-500" style={{aspectRatio: '1/1'}} />
      </div>
      <div id = "about " className="ml-0 md:ml-8 w-full md:w-3/5 max-w-lg"> 
        <h1 className="text-4xl md:text-left text-blue-50 font-bold mb-4 ">Asmita Agarwal</h1>
        <p className="text-xl backdrop-blur-xs text-blue-50 font-medium md:text-left ">
          I am a software developer with a keen interest in building innovative solutions. I have experience in various programming languages and frameworks, and I love to learn new technologies.
        </p>
        <div className="flex justify-center md:justify-start mt-6">
          <a href="/AsmitaAgarwal.pdf" download className="px-6 py-2 rounded-lg bg-custom-blue text-primary font-semibold shadow bg-blue-100 transition-all duration-500  hover:scale-110 text-center will-change-transform">Download Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;