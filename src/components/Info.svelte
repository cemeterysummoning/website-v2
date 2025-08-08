<script>
    let { info=[] } = $props();
    import { fade } from 'svelte/transition';

    let collapsed = $state(true);
    let rotation = $state(0);

    let toggle = () => {
        collapsed = !collapsed;
        if (collapsed) {
            rotation = 0;
        } else {
            rotation = 90;
        }
    };
</script>

<div class="flex gap-2 items-center">
<button type="button" onclick={toggle}  style="transform: rotate({rotation}deg);">
    <img src="../../expand.svg" class="w-2.5 h-2.5">
</button>
<p class="text-sm">more info</p>
</div>


{#if !collapsed}
    <ol class="pl-10 list-disc text-sm leading-5" transition:fade>
        {#each info as sub}
            <li>{sub}</li>
        {/each}
    </ol>
{/if}