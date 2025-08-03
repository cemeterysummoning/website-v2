<script>
    let { name, path, description } = $props();
</script>

<div class="border-2 px-5 py-5" style="border-color: var(--overlay-0); line-height: 2em;">
    <a href={path} >{name}</a>
    <p class="text-sm">{description}</p>
</div>