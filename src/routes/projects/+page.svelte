<script>
    import ProjectThumbnail from "../../components/ProjectThumbnail.svelte";
</script>

<h1>projects</h1>

<div class="grid md:grid-cols-2 gap-4">
<ProjectThumbnail name="Boids" 
description="Boids simulation, written in GLOO and C++. 6.4400 final project with Phoenix Wu"
gitlink="https://github.com/cemeterysummoning/boids-v2" />
    <ProjectThumbnail name="MagnetoSuture™ Annotator" 
        description="Video annotator created for MagnetoSuture™, created as part of my internship at UMD Department of Mechanical Engineering"
        gitlink="https://github.com/cemeterysummoning/annotator" />
    <ProjectThumbnail name="Variational Quantum Classifier" 
            description="Final project for Quantum Software at BWSI, a simple quantum machine learning architecture" 
            gitlink="https://github.com/cemeterysummoning/fruse"/>

    <ProjectThumbnail name="Sketches"
            description="Small javascript animations for generative art and mathematical visualization"
            gitlink="https://github.com/cemeterysummoning/sketches" />

    <ProjectThumbnail name="Manage"
            description="CLI calendar and todo-list management system. Written in NodeJS"
            gitlink="https://github.com/cemeterysummoning/tdmanage" />

    <ProjectThumbnail name="QRNG"
            description="Theory for a quantum computer-based random number generator"
            gitlink="https://github.com/cemeterysummoning/qrng" />

    <ProjectThumbnail name="pkSolo"
            description="Python tkinter-based quizbowl practice tool"
            gitlink="https://github.com/cemeterysummoning/pkSolo" />

    <ProjectThumbnail name="calculator" 
            description="Calculator with binary and hexadecimal functionality"
            gitlink="https://github.com/cemeterysummoning/calculator" />
</div>