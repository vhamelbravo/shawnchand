import Navbar from './Navbar.js'
import Footer from './Footer.js'
import image from './assets/person.png'
function About () {
return (
	<>
	
	<div className="h-screen">
<h1 className="text-slate-400 text-9xl translate-x-[30%] "> About Me </h1>
	<div className="border border-slate-400 w-[60rem] mx-[18%] my-[3%] h-[550px]">
	<img className="scale-[30%] translate-y-[-32%] translate-x-[-30%]" src={image} />
	<p className="text-white max-w-[500px] translate-y-[-195%] translate-x-[80%]"> n consectetur nunc pharetra ornare scelerisque. Vivamus pellentesque, dui et faucibus hendrerit, felis quam efficitur erat, sed commodo dolor elit vel augue. Suspendisse elementum in ante eget tincidunt. Nulla mollis, libero ac interdum posuere, diam tellus egestas ipsum, eu rhoncus enim arcu ac tellus. Mauris a lacus a diam molestie pharetra. Nam luctus mattis egestas. Nullam viverra commodo urna, eget vulputate augue faucibus eget. Donec consequat nibh aliquet posuere sodales. Quisque ut purus id dui faucibus lobortis. Donec mi ipsum, vehicula at nunc ac, congue accumsan ipsum. Maecenas ut tristique lectus. Quisque luctus placerat felis, et imperdiet tortor ultrices ut. Aenean luctus at diam vitae elementum. Phasellus mi metus, dictum eget felis sed, porta fringilla magna. Integer pharetra egestas lacus, tincidunt tincidunt dui facilisis ut.  </p>
	</div>
	<div className="max-h-[500px] translate-y-[-26%] ">
	<Navbar />
	</div>
	<div className="border border-slate-400 w-[100rem] mx-[10%] mt-[1%] min-h-[500px]">
	<p className="text-white"> n consectetur nunc pharetra ornare scelerisque. Vivamus pellentesque, dui et faucibus hendrerit, felis quam efficitur erat, sed commodo dolor elit vel augue. Suspendisse elementum in ante eget tincidunt. Nulla mollis, libero ac interdum posuere, diam tellus egestas ipsum, eu rhoncus enim arcu ac tellus. Mauris a lacus a diam molestie pharetra. Nam luctus mattis egestas. Nullam viverra commodo urna, eget vulputate augue faucibus eget. Donec consequat nibh aliquet posuere sodales. Quisque ut purus id dui faucibus lobortis. Donec mi ipsum, vehicula at nunc ac, congue accumsan ipsum. Maecenas ut tristique lectus. Quisque luctus placerat felis, et imperdiet tortor ultrices ut. Aenean luctus at diam vitae elementum. Phasellus mi metus, dictum eget felis sed, porta fringilla magna. Integer pharetra egestas lacus, tincidunt tincidunt dui facilisis ut.  Mauris maximus sagittis quam sit amet accumsan. Maecenas facilisis id odio sed venenatis. Donec convallis lectus et elit porta, non venenatis justo sodales. Mauris consectetur viverra augue, a varius felis finibus sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia orci et posuere bibendum. Nam tristique varius urna, nec dapibus orci scelerisque quis. Aenean euismod auctor porttitor. Mauris tristique sagittis ex. Suspendisse potenti. Duis ac purus lacus. Nunc rutrum orci sit amet volutpat aliquam. Mauris dignissim dictum lorem, nec consequat erat tempus a. Phasellus commodo maximus pulvinar. Vivamus ac nisi vel eros blandit porttitor vitae in nulla. Pellentesque imperdiet non justo a vulputate.

	Nulla facilisi. Ut maximus laoreet eros at tristique. Aliquam diam nibh, tincidunt non nulla sit amet, rhoncus iaculis nisi. Duis porta ante metus, at convallis ipsum convallis vel. Praesent neque tellus, bibendum auctor lectus a, lacinia blandit turpis. Donec semper condimentum eleifend. Aliquam rhoncus odio non tempus convallis. Donec tincidunt ultricies mauris, eget malesuada urna mollis vel. Donec at ipsum sit amet risus consequat dignissim a quis ipsum. Integer dictum ipsum vel placerat tempor. Phasellus sem mi, dapibus eu massa a, egestas semper tortor. Mauris vehicula, eros in sagittis cursus, ex sem dictum tellus, id vestibulum purus elit id turpis. Praesent mattis pretium ipsum, in placerat lacus tempus nec. Mauris suscipit est nisl, nec tincidunt mauris accumsan eget. Ut et interdum odio. Pellentesque in sem sed turpis aliquet lacinia. </p>
	</div>
	</div>
	<div className="translate-y-[2800%]">
	<Footer />
	</div>
	</>
)
}

export default About
