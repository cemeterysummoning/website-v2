<script>
    import { fade } from 'svelte/transition';
    let { name, subdirs=[], href } = $props();

    let expandable = subdirs.length > 0;

    let rotation = $state(0);

    let collapsed = $state(true);
    let toggle = () => {
        collapsed = !collapsed;
        if (collapsed) {
            rotation = 0;
        } else {
            rotation = 90;
        }
    };
</script>

<li class="leading-[2.5em]">
    {#if expandable}
        <button type="button" onclick={toggle}  style="transform: rotate({rotation}deg);">
            <img src="../../static/expand.svg" class="w-2.5 h-2.5">
        </button>
    {:else}
        <div class="w-2.5 h-2.5" style="display: inline-block;"></div>
    {/if}
    <a href={href}>{name}</a>
    {#if !collapsed}
    <ol class="pl-10" transition:fade>
        
        {#each subdirs as sub}
            <li><a href="{sub[1]}" class="submenu">{sub[0]}</a></li>
        {/each}
        
    </ol>
    {/if}
</li>

<style>
    button {
        transition: transform 0.3s ease-in-out;
    }
    .submenu {
        color: var(--lavender);
        font-size: 0.8em;
    }
</style>