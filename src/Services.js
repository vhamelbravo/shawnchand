import art from './assets/art.png'
import coaching from './assets/coaching.png'
import coding from './assets/coding.png'
import planning from './assets/planning.png'
import writing from './assets/writing.png'
import Navbar from './Navbar'
import Footer from './Footer'

function Services () {
	return (
	<>
		<div className="h-screen">

		<h1 className="text-cyan-500 text-9xl my-[-8%] mx-[25%] absolute"> Services </h1>
		<div className="my-[33%]">
		<div className="border border-slate-400 w-[75rem] translate-y-[1%] mx-[5%] h-[1300px] absolute ">
		<img src={art} className="scale-[20%] my-[-28%] mx-[-28%]" />
		<h1 className="text-cyan-500 text-xl translate-y-[-800%] w-fit translate-x-[80%]  "> Art/Digital Photography </h1>
		<p className="max-w-[300px] my-[-18%] mx-[22%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<img className="scale-[80%] my-[-28%] mx-[50%]" src={coaching} />
		<h1 className="text-cyan-500 text-xl my-[12%] mx-[68%]"> Project Management/Coaching </h1>
		<p className="max-w-[300px] text-white my-[-11%] translate-x-[270%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<img src={coding} className="scale-[30%] mx-[-12%] my-[2%] " />
		<h1 className="text-cyan-500 text-xl my-[-30%] mx-[23%]"> Coding </h1>
		<p className="max-w-[300px] text-white my-[32%] mx-[22%]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat   </p>
		<img src={planning} className="scale-[13%] my-[-99%] mx-[8%]" />
		<h1 className="text-cyan-500 text-xl my-[44.5%] translate-x-[68%]"> Architectural Design </h1>
		<p className="max-w-[300px] text-white my-[-42%] translate-x-[270%]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<h1 className="text-white text-xl translate-y-[2000%] translate-x-[22%]"> Graphic Design </h1>
		<p className="max-w-[300px] text-white translate-y-[200%] translate-x-[88%]">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<h1 className="text-cyan-500 text-xl translate-y-[850%] translate-x-[68%]"> Marketing </h1>
		<p className="text-white max-w-[300px] translate-x-[270%] translate-y-[90%]">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		
		
		
		</div>
		<Navbar />
		<div className="translate-y-[5500%] mx-[-20%]">
		<Footer />
		</div>
		
	</div>	
		
		</div>
	</>)
}
export default Services
