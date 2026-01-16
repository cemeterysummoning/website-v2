
<!-- <p>still working on image hosting lol sorry</p> -->

<script>
    import { Gallery } from 'flowbite-svelte';
    const FOLDER_ID = "1a63-tasghTbbVWaHB7gKIZ5WhYEDLPjU";
    const apiKey = import.meta.env.VITE_GDRIVE_KEY
    let images = $state([]);

    let col1 = $state([]);
    let col2 = $state([]);

    function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

    async function loadImages() {
        const res = await fetch(
            `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents and mimeType contains 'image/'&fields=files(id,name)&key=${apiKey}`);
        const data = await res.json();

        data.files.forEach(img => {
          images.push({
            alt: img.name,
            src: `https://lh3.googleusercontent.com/d/${img.id}`
          })
        })

        shuffle(images);

        col1 = images.slice(0, 20);
        col2 = images.slice(20, 40);
        
    }

    loadImages();
</script>
<h1>media</h1>

<Gallery class="grid-cols-2 gap-4 md:grid-cols-2">
  <Gallery items={col1} />
  <Gallery items={col2} />
</Gallery>
<!-- <img src="https://lh3.googleusercontent.com/d/1vycuW-cLseRCXOmBemxQ8wOwrCxqaPUA" /> -->
<!-- <img src="https://lh3.googleusercontent.com/pw/AP1GczPO2Pze_MQr29vQfcJ744Pe2S5IxAd42WTwy7uvr3ueqwSOiIsD7sQE2dmnl-p8-86PFzfLmlMxLS0C1Wzvr1RiKm6O6x5C1xVqjMqWVD4UzQOYCiP7zIjnF93IwYUHW02VVS7C3eOu_D1uFcuyEuw=w1687-h949-s-no-gm?authuser=3" />

<a href="https://lh3.googleusercontent.com/pw/AP1GczMTX1hTaKG6fu1A1T_vG29tlJ5Ema0HgRhIj8TH7wR6tMIwMia6h5ZMBUW35eHLfNqajHQUOfFgp4Z-X1Q0rWy76koBQ_sUZV-H329o0Lftfb7nDg=w2400?source=screenshot.guru"> <img src="https://lh3.googleusercontent.com/pw/AP1GczMTX1hTaKG6fu1A1T_vG29tlJ5Ema0HgRhIj8TH7wR6tMIwMia6h5ZMBUW35eHLfNqajHQUOfFgp4Z-X1Q0rWy76koBQ_sUZV-H329o0Lftfb7nDg=w600-h315-p-k" /> </a> -->