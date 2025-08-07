<script>
    import { onMount } from "svelte";
    let cellSize = $state(8);
    let interval_val = $state(500);

    let w = $state(0);
    let h = $state(0);

    onMount(() => {
        let container = document.getElementById("container");
        container.style.gridTemplateColumns = `repeat(${board.w_cells}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${board.h_cells}, 1fr)`;
    });

    class Board {

        w_cells = 0;
        h_cells = 0;
        cell_total = 0;
        status = $state([]);

        neighbors = [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [0, 1],
                [1, -1], [1, 0], [1, 1]
            ];

        constructor(w, h) {
            this.w_cells = Math.round(w / cellSize) - 1
            this.h_cells = Math.round(h / cellSize) - 1
            this.cell_total = this.w_cells * this.h_cells

            for (let i = 0; i < this.h_cells; i++) {
                let temp = []
                for (let j = 0; j < this.w_cells; j++) {
                    let c = Math.random() < 0.05 ? 1 : 0;
                    temp.push(c);
                }
                this.status.push(temp);
            }

        }

        outOfBounds(coord) {
            if (coord[0] < 0 || coord[1] < 0) {
                return true;
            }
            if (coord[0] >= this.h_cells || coord[1] >= this.w_cells) {
                return true;
            }

            return false;
        }

        getLiveCount(coord) {
            let count = 0;
            for (let i = 0; i < this.neighbors.length; i++) {
                let new_coord = [coord[0] + this.neighbors[i][0], coord[1] + this.neighbors[i][1]];
                if (!this.outOfBounds(new_coord)) {
                    count += this.status[new_coord[0]][new_coord[1]];
                }
            }
            return count
        }

        update() {
            for (let i = 0; i < this.h_cells; i++) {
                for (let j = 0; j < this.w_cells; j++) {
                    let neighbor_count = this.getLiveCount([i, j]);

                    if (neighbor_count == 3) {
                        this.status[i][j] = 1;
                    } else {
                        if (neighbor_count == 2 && this.status[i][j] == 1) {
                            continue;
                        }
                        this.status[i][j] = 0;
                    }
                }
            }
        }
    }

    let board = $derived.by(() => new Board(w, h));

    $effect(() => {
        const interval = setInterval(() => {
            board.update();
        }, interval_val);
        return () => {
            clearInterval(interval);
        }
    });
    
</script>

<svelte:window bind:outerWidth={w} bind:outerHeight={h} />
<div class="h-full w-full grid" id="container">
    {#each {length: board.h_cells} as _, i}
        {#each {length: board.w_cells} as _, j}
            <div class="h-[{cellSize}px] w-[{cellSize}px]" style="background-color: var(--mauve); opacity: {board.status[i][j]}"></div>
        {/each}
    {/each}
</div>