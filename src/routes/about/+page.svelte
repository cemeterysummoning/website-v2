<h1>hey, I'm Ace.</h1>

<p>I'm a second-year undergraduate student at MIT, studying [ <a href="https://www.eecs.mit.edu/">computer science</a> | <a href="https://sts-program.mit.edu/">science, technology, and society (STS)</a> ]. </p>
<p>I like <a href="https://letterboxd.com/cemeteryscene/">movies</a>, <a href="https://cemeterysummoning.github.io/sketches/">creative coding</a>, and reading wikipedia.</p>

<h2 id="work">work</h2>
<table class="md:table-fixed table-auto w-full"><tbody>
    {#snippet entry(year, txt, name, link)}
        <tr><td class="year w-1/6 border-y-2">{year}</td><td>{txt} <a href={link}>{name}</a></td></tr>
    {/snippet}
    {@render entry("2025", "Undergraduate Research Fellow at", "NIST", "https://www.nist.gov/surf")}
    {@render entry("2024 - 2025", "research assistant with", "MIT FutureTech", "https://futuretech.mit.edu/")}
    {@render entry("2024", "course instructor for", "BWSI Quantum Software", "https://beaverworks.ll.mit.edu/CMS/bw/bwsi_quantum_software")}
    {@render entry("2023 - 2024", "research assistant with", "UMD Collaborative Controls and Robotics Lab (CCRL)", "https://ccrl.umd.edu/")}
    {@render entry("2021 - 2024", "regional director for", "Steel City Codes, D.C. chapter", "https://www.steelcitycodes.org/")}
</tbody></table>

<h2 id="education">education</h2>
<table class="md:table-fixed table-auto w-full"><tbody>
    <tr><td class="year w-1/6 border-y-2">2024 -</td><td>Massachusetts Institute of Technology</td></tr>
    <tr><td class="year">2020 - 2024</td><td>Science, Mathematics, and Computer Science Program at Montgomery Blair</td></tr>
    <tr><td class="year">2022</td><td>MIT Beaver Works Summer Institute in Quantum Software</td></tr>
</tbody></table>

<style>
    * {
        line-height: 2em;
    }

    /* a {
        color: var(--green);
    } */

    h2 {
        font-size: 1.5em;
        color: var(--lavender);
        padding-bottom: 1em;
        padding-top: 1em;
    }
    
    .year {
        text-align: right;
        /* padding-right: 3em; */
        color: var(--subtext-0);
    }
    
    td {
        padding: 1em;
        border-block-style: var(--tw-border-style);
        border-block-width: 1px;
        border-color: var(--surface-1);
    }

    tr {
        border: 1px;
    }
</style>