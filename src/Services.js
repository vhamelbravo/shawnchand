import art from './assets/art.png'
import coaching from './assets/coaching.png'
import coding from './assets/coding.png'
import planning from './assets/planning.png'
import writing from './assets/writing.png'
import design from './assets/design.png'
import marketing from './assets/marketing.png'
import Navbar from './Navbar'
import Footer from './Footer'

function Services () {
	return (
	<>
		<div className="h-[2000px] services">

		<h1 className="services-title text-cyan-500 text-9xl my-[-8%] mx-[25%] absolute"> Services </h1>
		<div className="my-[33%]">
		<div className="services-container border border-slate-400 w-[75rem] translate-y-[1%] mx-[5%] h-[1800px] absolute ">
		<img src={art} className="absolute service-1-img scale-[20%] my-[-20%] mx-[-28%]" />
		<h1 className="service-1-title text-cyan-500 text-xl translate-y-[200%] w-fit translate-x-[80%]  "> Art/Digital Photography </h1>
		<p className="service-text max-w-[300px] my-[8%] mx-[22%] text-white">
		Capture the essence of moments with our artful and immersive digital photography services. Whether it's capturing the beauty of landscapes, the depth of emotions in portraits, or the intricate details of still life, I am a skilled photographer and have an eye for transforming scenes into captivating visual stories. Let us preserve your memories and create stunning visuals that leave a lasting impact. </p>
		<img className="service-2-img scale-[100%] my-[-41%] mx-[50%]" src={coaching} />
		<h1 className="service-2-title text-cyan-500 text-xl my-[18%] mx-[68%]"> Project Management/Coaching </h1>
		<p className="service-text max-w-[300px] text-white my-[-17%] translate-x-[270%]">
		Unlock the full potential of your projects with expert project management and coaching services. I’m a professional, equipped with the knowledge and skills to ensure seamless execution, efficient resource allocation, and effective team collaboration. From initiating projects to monitoring progress and delivering successful outcomes, I’ll guide you through every stage of the project journey, empowering you to achieve your goals.</p>
		<img src={coding} className="absolute service-3-img scale-[38%] mx-[-10%] my-[15%] " />
		<h1 className="service-3-title text-cyan-500 text-xl my-[30%] mx-[23%]"> Coding </h1>
		<p className="service-text max-w-[300px] text-white my-[-28%] mx-[22%]">Harness the power of technology with my comprehensive coding services. Skilled coders bring ideas to life through clean and efficient code, tailored to your specific needs. Whether you require website development, software solutions, or mobile app creation, I combine technical expertise with a deep understanding of user experience to deliver innovative and functional solutions that elevate your digital presence. </p>
		<img src={planning} className="service-4-img scale-[17.5%] my-[-52%] mx-[6%] absolute" />
		<h1 className="service-4-title text-cyan-500 text-xl my-[-12.5%] translate-x-[308%] absolute"> Architectural Design </h1>
		<p className="service-text max-w-[300px] text-white my-[-8%] translate-x-[270%] absolute">Transform your vision into reality with my architectural design and visualization services. I specialize in creating spaces that blend functionality, aesthetics, and sustainability. From concept development and 3D modeling to construction documentation, I bring expertise in designing residential, commercial, and institutional structures. Let me shape your surroundings and create harmonious spaces that leave a lasting impression.  </p>
		<img src={design} className="absolute scale-[20%] mx-[-33%]" />
		<h1 className="service-5-title text-cyan-500 text-xl translate-y-[1300%] translate-x-[22%]"> Graphic Design </h1>
		<p className="service-text max-w-[300px] text-white translate-y-[85%] translate-x-[88%]">  Make a visual impact with my dynamic graphic design services. Talented designers possess a keen eye for detail and a flair for creativity. I excel in creating visually stunning designs that communicate your brand's essence, whether it's designing captivating logos, eye-catching marketing collateral, engaging social media graphics, or immersive user interfaces. Let me transform your ideas into visually compelling designs that captivate your audience.</p>
		<img src={marketing} className="absolute scale-[20%] translate-y-[-47%] mx-[15%]" />
		<h1 className="service-6-title text-cyan-500 text-xl translate-y-[-430%] translate-x-[68%]"> Marketing </h1>
		<p className="service-text text-white max-w-[300px] translate-x-[270%] translate-y-[-23%]">  Unlock the power of effective marketing strategies with my comprehensive marketing services. From market research and brand positioning to digital marketing campaigns and content creation, I'll help you build a strong brand presence and connect with your target audience. Marketing experts understand the latest trends and techniques to drive engagement, increase conversions, and boost your business's growth. </p>
		
		
		
		</div>
		
		<div className="navbar-services">
		<Navbar/>
		</div>
		<div className="services-footer translate-y-[8000%]">
		<Footer />
		</div>
		
	</div>	
		
		</div>
	</>)
}
export default Services
