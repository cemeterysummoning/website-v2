<script>
    import { onMount } from "svelte";
    import { animate } from "../routes/shared.js";

    import { innerWidth, innerHeight } from 'svelte/reactivity/window';

    let cellSize = $state(8);
    let interval_val = 500;
    let last_step = 0;

    let canvas;
    let ctx;

    let w = $state(0);
    let h = $state(0);
    let cols, rows;
    let grid, next;

    function index(x, y) {
        return y * cols + x;
    }

    function init() {
        cols = Math.floor(w / cellSize);
        rows = Math.floor(h / cellSize);

        if (cols <= 0 || rows <= 0) return;

        const dpr = window.devicePixelRatio || 1;

        canvas.style.width  = `${cols * cellSize}px`;
        canvas.style.height = `${rows * cellSize}px`;

        canvas.width  = cols * cellSize * dpr;
        canvas.height = rows * cellSize * dpr;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        grid = new Uint8Array(cols * rows);
        next = new Uint8Array(cols * rows);

        for (let i = 0; i < grid.length; i++) {
            grid[i] = Math.random() < 0.05 ? 1 : 0;
        }
    }

    function step() {
        for (let y = 1; y < rows - 1; y++) {
            for (let x = 1; x < cols - 1; x++) {
                let i = index(x, y);

                let n = grid[i - cols - 1] + grid[i - cols] + grid[i - cols + 1] +
                        grid[i - 1]                         + grid[i + 1] +
                        grid[i + cols - 1] + grid[i + cols] + grid[i + cols + 1];

                next[i] = (n == 3 || (n == 2 && grid[i])) ? 1 : 0;
            }
        }
        [grid, next] = [next, grid];
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#cba6f7";

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                if (grid[index(x, y)]) {
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }
    }

    function loop(ts) {
        if ($animate && grid && ts - last_step > interval_val) {
            step();
            last_step = ts;
        }
        draw(); 
        requestAnimationFrame(loop);
    }

    onMount(() => {
        ctx = canvas.getContext('2d');
        init();
        loop();
    });

    $effect(() => {
        if (canvas && ctx && w > 0 && h > 0) {
            init();
        }
        console.log(w);
        console.log(h);
    })
</script>

<canvas bind:this={canvas} class="absolute inset-0 h-full w-full" id="container"></canvas>
<svelte:window bind:innerWidth={w} bind:innerHeight={h} />