<script>
    import Info from '../../components/Info.svelte';

    let research = $state(true);
    let work = $state(false);
    let education = $state(false);
    
    let researchColor = $state("--green");
    let workColor = $state("--blue");
    let eduColor = $state("--blue")

    let toggleResearch = () => {
        research = true;
        researchColor = "--green";
        work = false;
        workColor = "--blue";
        education = false;
        eduColor = "--blue";
    }
    let toggleWork = () => {
        research = false;
        researchColor = "--blue";
        work = true;
        workColor = "--green";
        education = false;
        eduColor = "--blue";
    }
    let toggleEducation = () => {
        research = false;
        researchColor = "--blue";
        work = false;
        workColor = "--blue";
        education = true;
        eduColor = "--green";
    }
</script>
<h1>hey, I'm Ace.</h1>

<p>I'm a second-year undergraduate student at MIT, studying [ <a href="https://www.eecs.mit.edu/">computer science</a> | <a href="https://cmsw.mit.edu">comparative media studies (CMS)</a> ]. </p>
<p>I like <a href="https://letterboxd.com/cemeteryscene/">movies</a>, <a href="https://cemeterysummoning.github.io/sketches/">creative coding</a>, and reading wikipedia. I take <a href="/media">photos</a> sometimes.</p> I am primarily interested in research questions about [ <span style="color: var(--mauve);">computability and complexity theory</span> | <span style="color: var(--mauve);">sociotechnical systems</span> | <span style="color: var(--mauve);">education</span> ], but I'm always eager to learn more about anything!

<h2 id="categories">[ <a class="category" onclick={toggleResearch} role="button" tabindex=0 style="color: var({researchColor});">research</a> | <a class="category" onclick={toggleWork} role="button" tabindex=0 style="color: var({workColor});">work</a> | <a class="category" onclick={toggleEducation} role="button" tabindex=0 style="color: var({eduColor});">education</a> ]</h2>

{#if research}
    <table class="md:table-fixed table-auto w-[98%]"><tbody>
    {#snippet entry(year, txt, name, link, ls)}
        <tr><td class="year w-1/5 border-y-2 align-top">{year}</td>
            <td>{txt} <a href={link}>{name}</a> <br> <Info info={ls} /></td>
        </tr>
    {/snippet}
    {@render entry("2024 — 2026", "research assistant with", "MIT FutureTech", "https://futuretech.mit.edu/", [
        'Worked with Dr. Jayson Lynch as part of the Measuring Progress in Algorithms group',
        'Surveyed and analyzed time and space complexity of quantum algorithms',
        'Contributed complexity data to the Quantum Economic Advantage Calculator'
    ])}
    {@render entry("2026", "digital humanities researcher with", "MIT Concourse", "https://concourse.mit.edu", [
        "Worked with Dr. Daniel Keliher and Dr. Erica Zimmer",
        "Developed clustering and temporal trend models over the EEBO-TCP/VEP Early Modern Science collection"
    ])}
    {@render entry("2025", "research assistant with", "MIT IDSS", "https://idss.mit.edu", [
        "Worked with Dr. Crystal Lee and Prof. Catherine D'ignazio",
        'Qualitative research into the proliferation of carceral technologies throughout society'
    ])}
    {@render entry("2025", "Undergraduate Research Fellow at", "NIST", "https://www.nist.gov/surf", [
        'Work as part of the NIST Summer Undergraduate Research Fellowship',
        'Worked with Dr. Justyna Zwolak and Dr. Merritt Losert on optimizing latched readouts of quantum dot hybrid qubits',
        'Designed a U-Net-based image processing pipeline for line and point localization from charge stability diagrams',
        'Presented a poster at the 2025 Quantum Computing Program Review (QCPR)'
    ])}
    {@render entry("2023 — 2024", "research assistant with", "UMD CCRL", "https://ccrl.umd.edu/", [
        'Worked with Dr. Yancy Diaz-Mercado in the Collaborative Controls and Robotics Lab (CCRL)',
        'Created software for advancing remote robotic actuation projects', 
        "Programmed training data annotation program from HTML, CSS, and JavaScript for Google DeepMind's TAPIR point-wise tracking model",
        "Researched agent tracking and control theory for MagnetoSuture, an autonomous, minimally invasive, and tetherless surgical system",
        "Presented a poster at the IEEE Integrated STEM Education Conference 2024: Facilitating a Hands-On Approach to Open and Modular Engineering Projects through Software Design and Data Collection"
    ])}
</tbody></table>
{/if}
<!-- add bulleted list for more details under each -->

{#if work}
<table class="md:table-fixed table-auto w-[98%]"><tbody>
    {#snippet entry(year, txt, name, link, ls)}
        <tr><td class="year w-1/5 border-y-2 align-top">{year}</td>
            <td>{txt} <a href={link}>{name}</a> <br> <Info info={ls} /></td>
        </tr>
    {/snippet}
    {@render entry("2026", "undergraduate teaching assistant for", "6.1210: Introduction to Algorithms", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/", [
        "MIT EECS teaching staff for the introductory algorithms course, under Brynmor Chapman, Yael Tauman Kalai, Will Leierson",
        "Taught fundamental topics in algorithm design and analysis, such as dynamic programming, data structure analysis, and graph problem reductions"
    ])}
    {@render entry("2026", "undergraduate teaching assistant for", "CC.1802: Multivariable Calculus", "https://concourse.mit.edu/class/cc-1802/", [
        "MIT Concourse teaching staff for multivariable calculus, under Daniel Keliher"
    ])}
    {@render entry("2025 — 2026", "undergraduate scholar with", "MIT SERC", "https://computing.mit.edu/cross-cutting/social-and-ethical-responsibilities-of-computing/SERC-scholars-program/", [
        "Member of the Social and Ethical Responsibilities of Computing Scholars program",
        "Participated in weekly discussions and projects pertaining to human-chatbot interactions and their ethical implications"
    ])}
    {@render entry("2025 —", "mail room worker at", "East Campus", "https://ec.mit.edu/about", [
        "Managed incoming mail and packages for residents across East Campus, a dormitory at MIT"
    ])}
    {@render entry("2024", "course instructor for", "BWSI Quantum Software", "https://beaverworks.ll.mit.edu/CMS/bw/bwsi_quantum_software", [
        "Teaching staff for the Beaver Works Summer Institute, 2024, with Melvin Lin",
        'Taught supplementary material about quantum computing algorithms and theory to high school juniors and seniors',
        "Lectured on mechanics behind mathematical qubit representations and Grover's algorithm",
        'Provided assistance to students during final team projects, including an implementation of the Variational Quantum Classifier'
    ])}
    {@render entry("2021 — 2024", "regional director for", "Steel City Codes, D.C. chapter", "https://www.steelcitycodes.org/", [
        "Organized free programming education summer camps and classes for students from grades 4-8",
        "Led outreach efforts to students of historically underprivileged backgrounds, aiming to level the playing field of computer science opportunities",
        "Taught introductory to intermediate level Python, Java, and web design courses"
    ])}
</tbody></table>
{/if}

{#if education} 
<table class="md:table-fixed table-auto w-[98%]"><tbody>
    <tr><td class="year w-1/5 border-y-2">2024 -</td><td>Massachusetts Institute of Technology</td></tr>
    <tr><td class="year">2020 - 2024</td><td>Science, Mathematics, and Computer Science Program at Montgomery Blair</td></tr>
    <tr><td class="year">2022</td><td>MIT Beaver Works Summer Institute in Quantum Software</td></tr>
</tbody></table>

<h2 id="coursework">coursework and credits</h2>
{#snippet course(year, ls)}
        <tr><td class="year w-1/5 border-y-2 align-top">{year}</td>
            <td><Info info={ls} /></td>
        </tr>
    {/snippet}
<table class="md:table-fixed table-auto w-[98%]"><tbody>
    {@render course("Fall 2025", [
        '6.4400 — Computer Graphics',
        '18.4041 — Theory of Computation',
        '18.600 — Probability and Random Variables',
        'CMS.614 — Critical Internet Studies',
    ])}
    {@render course("Spring 2025", [
        '6.1210 — Introduction to Algorithms',
        '6.3900 — Introduction to Machine Learning',
        'CC.8022 — Electricity and Magnetism',
        '7.016 — Introductory Biology',
        'STS.012 — Technologies and Controversies in Everyday Life'
    ])}
    {@render course("Fall 2024", [
        '18.C06 — Linear Algebra and Optimization',
        '6.1010 — Fundamentals of Programming',
        'CC.5111 — Principles of Chemical Science',
        'CC.110 — Becoming Human: Ancient Greek Perspectives on the Good Life'
    ])}
    {@render course("ASEs", [
        '18.03 — Differential Equations',
        '18.02 — Multivariable Calculus/Calculus II',
        '6.100A — Introduction to Computer Science Programming in Python',
    ])}
</tbody></table>
{/if}
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

    .category:hover {
        cursor: pointer;
        color: var(--green);
    }
</style>
