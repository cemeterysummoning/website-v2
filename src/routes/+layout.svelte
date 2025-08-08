<script>
	import '../app.css';
	import MenuItem from '../components/MenuItem.svelte'
	import GOL from '../components/GOL.svelte'
	import { fly, fade, draw } from 'svelte/transition';
	import { animate } from './shared.js'
	
	let { children } = $props();
	let width = $state(0);

	let desktop = $derived(width > 500);

	let menuOpen = $state(true);
	function closeMenu() {
		menuOpen = !menuOpen;
	}
	function playToggle() {
		$animate = !$animate;
	}
</script>

<svelte:window bind:innerWidth={width} />

<div id="background" class="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
	<GOL />
</div>

<div id="filter" class="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed">

</div>

<div id="foreground" class="absolute top-0 left-0 w-screen h-screen">
	{#if desktop}
	<div id="top-bar" class="border-b-1 w-screen h-16 backdrop-blur-sm grid grid-cols-2" style="border-color: var(--overlay-1);">
		<div class="flex px-8 justify-start items-center gap-4" style="text-align: left;">
			<img onclick={closeMenu}  src="../../menu_open.svg" height="32" width="32" style="display: inline-block;  cursor: pointer;">
			<img src={$animate ? '../../pause.svg' : '../../play.svg'} onclick={playToggle} height="32"  width="32" style="display: inline-block;  cursor: pointer;">
		</div>
		<div class="h-full px-8 flex justify-end items-center gap-8">
			<a href="https://github.com/cemeterysummoning"><img src="../../github.svg" height="32" width="32"></a>
			<p style="color: var(--blue);">achun [at] mit [dot] edu</p>
		</div>
	</div>
		<div class="flex justify-items-center px-16 py-8 md:mx-16 md:my-8">
		{#if menuOpen}
			<nav class="basis-90" transition:fly={{ x: -200 }}>
				<ol>
					<MenuItem name={"home"} href={"/"}/>
					<MenuItem name={"about"} subdirs={[["work", "/about#work"], ["education", "/about#education"], ["resume", "../../static/Resume.pdf"]]} href={"/about"}/>
					<MenuItem name={"notes"} href={"/notes"}/>
					<MenuItem name={"projects"} href={"/projects"}/>
					<!-- <MenuItem name={"blog"} href={"/blog"}/> -->
					<MenuItem name={"media"} subdirs={[["photos", "https://drive.google.com/drive/u/4/folders/1a63-tasghTbbVWaHB7gKIZ5WhYEDLPjU?usp=sharing"], ["origami", "https://drive.google.com/drive/u/4/folders/1IhjJT39Yes32mFmDbWF3VV4T5UshebKW"]]} href={"/media"}/>
				</ol>
			</nav>
		{/if}
	

			<div class="flex-l w-[60%] pl-16 md:mx-16 md:mb-8">
				{@render children()}
			</div>
		</div>
	{:else}
		<div id="top-bar" class="border-b-1 w-screen h-16 backdrop-blur-sm" style="border-color: var(--overlay-1);">
		<div class="flex px-8 h-full justify-start items-center gap-4"style="text-align: left;">
			<img onclick={closeMenu} src="../../menu_open.svg" height="32" width="32" style="display: inline-block;  cursor: pointer;">
			<img src={$animate ? '../../pause.svg' : '../../play.svg'} onclick={playToggle} height="32"  width="32" style="display: inline-block;  cursor: pointer;">
		</div>
		</div>

			<div class="flex justify-items-center px-16 py-8">
				{#if menuOpen}
				<nav class="basis-90" in:fly={{ x: -50 }}>
					<ol>
						<MenuItem name={"home"} href={"/"} close={() => closeMenu()}/>
						<MenuItem name={"about"} subdirs={[["work", "/about#work"], ["education", "/about#education"], ["resume", "../../static/Resume.pdf"]]} href={"/about"} close={() => closeMenu()}/>
						<MenuItem name={"notes"} href={"/notes"} close={() => closeMenu()}/>
						<MenuItem name={"projects"} href={"/projects"} close={() => closeMenu()}/>
						<!-- <MenuItem name={"blog"} href={"/blog"}/> -->
						<MenuItem name={"media"} subdirs={[["photos", "https://drive.google.com/drive/u/4/folders/1a63-tasghTbbVWaHB7gKIZ5WhYEDLPjU?usp=sharing"], ["origami", "https://drive.google.com/drive/u/4/folders/1IhjJT39Yes32mFmDbWF3VV4T5UshebKW"]]} href={"/media"} close={() => closeMenu()}/>
					</ol>
				</nav>
				{:else}
				<div in:fly={{ x: 50}}>
					{@render children()}
				</div>
				{/if}
			</div>
	{/if}

</div>