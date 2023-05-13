import image from './assets/person.png'
function Profile () {
return (
	<>
	<div className="profile text-white profile border border-slate-400 w-[960px] pb-[11rem] mt-[-40%] translate-x-[35%] h-[480px] ">
	<h1 className=" header-profile text-white text-4xl translate-x-[1%]"> Welcome to My Forest! </h1>
	<p className="intro-text relative text-white translate-x-[23%] translate-y-[10%] "> Welcome to my creative corner! This website and blog <br/> page  are a delightful blend of various pixel art sites <br /> that have inspired me across the web. <br/>

	As an avid art and design enthusiast, I draw inspiration <br/> from a multitude of styles. If youre curious to learn <br/> more about me and my artistic journey, be sure to visit <br/> the About section.
</p>
	<p className="facts text-3xl translate-y-[100%] translate-x-[1%]"> Here are some quick facts about me </p>
	<ul>
	<li> <p className="facts-text facts-1 text-white translate-y-[150%] translate-x-[1%]">- Proudly hailing from Canada.</p> </li>
	<li> <p className="facts-text facts-2 text-white translate-y-[150%] translate-x-[1%]">- I harbor a deep affection for adorable koalas.</p> </li>
	<li> <p className="facts-text facts-3 text-white translate-y-[135%] translate-x-[1%]">- The fall and winter months hold a special  place in my heart.</p>
	</li>
	<li> <p className="facts-text facts-4 text-white translate-y-[60%] translate-x-[1%]">- I'm grateful for a successful kidney transplant, which has brought happiness and good health to my life .</p> </li>

	</ul>
	<img className="z-20 profile-img relative scale-[20%] translate-x-[-39%] translate-y-[-75%] " src={image} />
	
	
	</div>
	</>
)
}

export default Profile
