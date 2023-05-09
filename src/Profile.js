import image from './assets/person.png'
function Profile () {
return (
	<>
	<div className="profile border border-slate-400 w-[50rem] pb-[10rem] mt-[-40%] translate-x-[55%] ">
	<h1 className="text-white text-4xl translate-x-[22%]"> Welcome to My Forest! </h1>
	<p className="relative text-white translate-x-[23%] translate-y-[10%] ">  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas mollis porta ex, ut  vulputate urna aliquet a. <br />  Nunc egestas arcu at elit finibus auctor. Integer ac <br/> ultricies  est. Donec egestas gravida ante, et fringilla dui <br />  elementum at. Donec condimentum diam congue  ligula <br/> condimentum, non euismod elit volutpat. Duis ut dictum <br/> sem,  nec congue ligula. In maximus  faucibus dolor  a <br/> varius. Quisque efficitur nibh in est laoreet varius.
</p>
	<p className="text-white text-3xl translate-y-[180%] translate-x-[5%]"> Quick facts </p>
	<ul>
	<li> <p className="text-white text-2xl translate-y-[280%] translate-x-[5%]">-Sample text </p> </li>
	<li> <p className="text-white text-2xl translate-y-[280%] translate-x-[5%]">-Sample text </p> </li>
	<li> <p className="text-white text-2xl translate-y-[280%] translate-x-[5%]">-Sample text </p> </li>

	</ul>
	<img className="z-20 relative scale-[20%] translate-x-[-39%] translate-y-[-75%] " src={image} />
	<div className="relative border border-slate-400 w-[10rem] pb-[10rem] mt-[-127%] translate-y-[-41%] translate-x-[5%] ">
	</div>
	</div>
	</>
)
}

export default Profile
