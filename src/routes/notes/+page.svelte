<script>
    import Note from '../../components/Note.svelte'
</script>

<h1>notes</h1>

<div class="grid md:grid-cols-2 gap-4">
    <Note name={"Electricity and Magnetism"} path={'../../../static/pdfs/8.022.pdf'} description="8.022"/>
    <Note name={"Linear Algebra with Optimization"} path={'../../../static/pdfs/18.c06.pdf'} description="18.C06"} />
    <Note name={"Mechanics"} path={'../../../static/pdfs/ap_phys.pdf'} description={"Physics C: Mechanics"} />
    <Note name={"Multivariable Calculus"} path={'../../../static/pdfs/Analysis_2A.pdf'} description={"MBHS Analysis 2A"} />
    <Note name={"Differential Equations"} path={'../../../static/pdfs/diffeq.pdf'} description={"MBHS Analysis 2B"} />
    <Note name={"Applied Statistics"} path={'../../../static/pdfs/Statistics.pdf'} description={"MBHS Magnet Statistics"} />
    <Note name={"Single Variable Calculus"} path={'../../../static/pdfs/Analysis_1.pdf'} description={"MBHS Analysis 1"} />
    <Note name={"Quantum Computing"} path={'../../../static/pdfs/quantum.pdf'} description={"BWSI Quantum Software"} />
</div>