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
		<div className="my-[33%]">
		<div className="border border-slate-400 w-[75rem] translate-y-[1%] mx-[5%] h-[800px] absolute ">
		<img src={art} className="scale-[20%] my-[-28%] mx-[-25%]" />
		<h1 className="text-slate-400 text-xl translate-y-[-800%] translate-x-[22%]"> Art/Digital Photography </h1>
		<p className="max-w-[300px] my-[-18%] mx-[22%] text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<img className="scale-[80%] my-[-28%] mx-[50%]" src={coaching} />
		<h1 className="text-slate-400 text-xl my-[12%] mx-[65%]"> Coaching </h1>
		<p className="max-w-[300px] text-white my-[-11%] translate-x-[260%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		<img src={coding} className="scale-[40%] mx-[-8%] my-[2%] " />
		<h1 className="text-slate-400 text-xl my-[-30%] mx-[23%]"> Coding </h1>
		<p className="max-w-[300px] text-white my-[32%] mx-[22%]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat   </p>
		<img src={planning} className="scale-[19%] my-[-99%] mx-[8%]" />
		<h1 className="text-slate-400 text-xl my-[44.5%] translate-x-[68%]"> Technical Design </h1>
		<p className="max-w-[300px] text-white my-[-42%] translate-x-[270%]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula suscipit nunc, vitae pharetra turpis accumsan quis. Nulla ut mollis nunc. Sed eu interdum risus. Nulla a ipsum sed tortor consectetur consectetur. Aliquam suscipit luctus mi vestibulum viverra. Sed consequat </p>
		</div>
		<Navbar />
		<div className="my-[53%] translate-x-[-5%]">
		<Footer />
		</div>
		</div>
		<h1 className="text-slate-400 text-9xl my-[-117%] mx-[25%]"> Services </h1>
		</div>
	</>)
}
export default Services
