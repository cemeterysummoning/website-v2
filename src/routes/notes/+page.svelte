<script>
    import Note from '../../components/Note.svelte'
</script>

<h1>notes</h1>

<div class="grid md:grid-cols-2 gap-4">
    <Note name={"Theory of Computation"} path={'../../../pdfs/18.404.pdf'} description="18.404"/>
    <Note name={"Probability and Random Variables"} path={'../../../pdfs/18.600.pdf'} description="18.600"/>
    <Note name={"Discrete Math for Computer Science"} path={'../../../pdfs/6.1200.pdf'} description="6.1200"/>
    <Note name={"Electricity and Magnetism"} path={'../../../pdfs/8.022.pdf'} description="8.022"/>
    <Note name={"Linear Algebra with Optimization"} path={'../../../pdfs/18.c06.pdf'} description="18.C06"} />
    <Note name={"Mechanics"} path={'../../../pdfs/ap_phys.pdf'} description={"Physics C: Mechanics"} />
    <Note name={"Multivariable Calculus"} path={'../../../pdfs/Analysis_2A.pdf'} description={"MBHS Analysis 2A"} />
    <Note name={"Differential Equations"} path={'../../../pdfs/diffeq.pdf'} description={"MBHS Analysis 2B"} />
    <Note name={"Applied Statistics"} path={'../../../pdfs/Statistics.pdf'} description={"MBHS Magnet Statistics"} />
    <Note name={"Single Variable Calculus"} path={'../../../pdfs/Analysis_1.pdf'} description={"MBHS Analysis 1"} />
    <Note name={"Quantum Computing"} path={'../../../pdfs/quantum.pdf'} description={"BWSI Quantum Software"} />
</div>