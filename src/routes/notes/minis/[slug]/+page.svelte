<script>
    import { page } from "$app/state";
    let { data } = $props();
</script>

<article>
<h1>{data.slug}</h1>
<!-- <p>{data.date}</p> -->
<!-- <svelte:component this={data.content} /> -->
</article>