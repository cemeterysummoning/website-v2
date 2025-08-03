<script>
	import '../app.css';
	import MenuItem from '../components/MenuItem.svelte'
	import GOL from '../components/GOL.svelte'
	
	let { children } = $props();
</script>

<div id="background" class="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">
	<GOL />
</div>

<div id="filter" class="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">

</div>

<div id="foreground" class="absolute top-0 left-0 w-screen h-screen">
	<div id="top-bar" class="border-b-1 w-screen h-16 backdrop-blur-sm" style="border-color: var(--overlay-1); text-align: right;">
		<a href="https://github.com/cemeterysummoning"><img src="../../static/github.svg" height="32" width="32" style="display: inline-block;"></a>
		<p class="px-8 py-4" style="color: var(--blue); display: inline-block;">achun [at] mit [dot] edu</p>
	</div>

	<div class="flex justify-items-center px-16 py-8 md:mx-16 md:my-8">
		<nav class="basis-90">
			<ol>
				<MenuItem name={"home"} href={"/"}/>
				<MenuItem name={"about"} subdirs={[["work", "/about#work"], ["education", "/about#education"], ["resume", "../../static/Resume.pdf"]]} href={"/about"}/>
				<MenuItem name={"notes"} href={"/notes"}/>
				<MenuItem name={"projects"} href={"/projects"}/>
				<!-- <MenuItem name={"blog"} href={"/blog"}/> -->
				<MenuItem name={"media"} subdirs={[["photos", "https://drive.google.com/drive/u/4/folders/1a63-tasghTbbVWaHB7gKIZ5WhYEDLPjU?usp=sharing"], ["origami", "https://drive.google.com/drive/u/4/folders/1IhjJT39Yes32mFmDbWF3VV4T5UshebKW"]]} href={"/media"}/>
			</ol>
		</nav>
	

	<div class="flex-l w-[60%] pl-16 md:mx-16 md:mb-8">
		{@render children()}
	</div>
	</div>

</div>