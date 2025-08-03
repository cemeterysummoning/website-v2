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
        status = [];
        neighbors = [];

        constructor(w, h) {
            this.w_cells = Math.round(w / cellSize) - 1
            this.h_cells = Math.round(h / cellSize) - 1
            this.cell_total = this.w_cells * this.h_cells

            for (let i = 0; i < this.h_cells; i++) {
                let temp = []
                let temp_n = []
                for (let j = 0; j < this.w_cells; j++) {
                    let c = new Cell(i, j, this)
                    temp.push(c);
                    temp_n.push(0);
                }
                this.status.push(temp);
                this.neighbors.push(temp_n);
            }

            for (let i = 0; i < this.h_cells; i++) {
                for (let j = 0; j < this.w_cells; j++) {
                    this.neighbors[i][j] = this.status[i][j].getLiveCount();
                }
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

        getCellStatus(coord) {
            return this.status[coord[0]][coord[1]].alive;
        }

        update() {
            for (let i = 0; i < this.h_cells; i++) {
                for (let j = 0; j < this.w_cells; j++) {
                    let current = this.status[i][j];
                    let neighbor_count = current.getLiveCount();

                    if (neighbor_count == 3) {
                        current.alive = true;
                    } else {
                        if (neighbor_count == 2 && current.alive) {
                            continue;
                        }
                        current.alive = false;
                    }
                }
            }
        }
    }

    class Cell {
        row = 0;
        col = 0;
        alive = $state(false);
        opacity = 0;
        parent = new Board(0, 0);
        neighbors = [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1], [0, 1],
                [1, -1], [1, 0], [1, 1]
            ];

        constructor(xind, yind, parent) {
            this.row = xind;
            this.col = yind;
            this.alive = Math.random() < 0.05;
            this.opacity = Math.random();
            this.parent = parent
        }

        getLiveCount() {
            let count = 0;

            for (let i = 0; i < this.neighbors.length; i++) {
                let d = this.neighbors[i]

                let test = [this.row + d[0], this.col + d[1]]
                
                if (this.parent.outOfBounds(test)) {
                    continue;
                }

                if (this.parent.getCellStatus(test)) {
                    count += 1;
                }
            }

            return count;
        }
    }

    let board = $derived.by(() => new Board(w, h));

    $effect(() => {
        const interval = setInterval(() => {
            // let random_row = Math.floor(Math.random() * board.h_cells);
            // let random_col = Math.floor(Math.random() * board.w_cells);
            // console.log(random_row, random_col);
            // console.log(board.getCellStatus([random_row, random_col]))
            
            // board.status[random_row][random_col].alive = !board.status[random_row][random_col].alive;
            // console.log(board.getCellStatus([random_row, random_col]))

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
            <div class="h-[{cellSize}px] w-[{cellSize}px]" style="background-color: var(--mauve); opacity: {board.status[i][j].alive ? 1 : 0}"></div>
        {/each}
    {/each}
</div>