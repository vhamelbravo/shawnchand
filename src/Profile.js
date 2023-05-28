import image from './assets/person.png'
function Profile () {
return (
	<>
	
        <div className=" pl-[10%] flex justify-start translate-y-[10%]">	
	<div className="text-white max-w-[63%] profile border border-slate-400 w-[63%] pb-[5rem] pl-[12%] min-h-[480px] ">
	 <h1 className="max-w-[100%] relative header-profile text-white text-4xl flex justify-start translate-x-[-20%] "> Welcome to My Forest! </h1> 
	<p className="max-h-[50%] overflow-y-scroll max-w-[100%] intro-text text-white max-w-[780px] translate-y-[5%] "> 
	Welcome to my creative corner! Immerse yourself in a world where pixels come alive and art meets passion. With a love for gaming aesthetics and a deep understanding of the design and pop culture space, I offer a range of services that bring your creative visions to life. From art and digital photography to project management and coaching, coding to architectural and graphic design, and marketing, I infuse each project with a touch of pixel art and a gamer's spirit. Let's collaborate and turn your ideas into extraordinary realities. Contact me today!

</p>
	<p className="max-w-[100%] relative facts text-3xl translate-y-[60%] flex justify-start translate-x-[-20%]"> Here are some quick facts about me </p>
	<ul className="max-w-[100%] flex flex-col items-start translate-x-[-23%] translate-y-[30%]">
	<li> <p className="max-w-[100%] facts-text facts-1 text-white">- Proudly hailing from Canada.</p> </li>
	<li> <p className="max-w-[100%] facts-text facts-2 text-white ">- I harbor a deep affection for adorable koalas.</p> </li>
	<li> <p className="max-w-[100%] facts-text facts-3 text-white ">- The fall and winter months hold a special  place in my heart.</p>
	</li>
	<li> <p className="max-w-[100%] facts-text facts-4 text-white">- I'm grateful for a successful kidney transplant, which has brought happiness and good health to my life .</p> </li>

	</ul>
	<img className=" flex flex-wrap translate-y-[-73%] translate-x-[-60.5%] z-20 profile-img absolute scale-[20%] " src={image} />
	</div>
	</div>
	</>
)
}

export default Profile
