import image from './assets/person.png'
function Profile () {
return (
	<>
	<div className="profile border border-slate-400 w-[50rem] pb-[11rem] mt-[-40%] translate-x-[55%] ">
	<h1 className="text-white text-4xl translate-x-[22%]"> Welcome to My Forest! </h1>
	<p className="relative text-white translate-x-[23%] translate-y-[10%] "> Welcome to my creative corner! This website and blog <br/> page  are a delightful blend of various pixel art sites <br /> that have inspired me across the web. <br/>

	As an avid art and design enthusiast, I draw inspiration <br/> from a multitude of styles. If youre curious to learn <br/> more about me and my artistic journey, be sure to visit <br/> the About section.
</p>
	<p className="text-white text-3xl translate-y-[100%] translate-x-[5%]"> Here are some quick facts about me </p>
	<ul>
	<li> <p className="text-white translate-y-[150%] translate-x-[5%]">- Proudly hailing from Canada.</p> </li>
	<li> <p className="text-white translate-y-[150%] translate-x-[5%]">- I harbor a deep affection for adorable koalas.</p> </li>
	<li> <p className="text-white translate-y-[70%] translate-x-[5%]">- The fall and winter months hold a special <br/> place in my heart.</p>
	</li>
	<li> <p className="text-white translate-y-[60%] translate-x-[5%]">- I'm grateful for a successful kidney transplant, which has brought happiness and good health to my life .</p> </li>

	</ul>
	<img className="z-20 relative scale-[20%] translate-x-[-39%] translate-y-[-80%] " src={image} />
	<div className="relative border border-slate-400 w-[10rem] pb-[10rem] mt-[-132%] translate-y-[-41%] translate-x-[5%] ">
	</div>
	</div>
	</>
)
}

export default Profile
