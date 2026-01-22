
<!-- <p>still working on image hosting lol sorry</p> -->

<script>
    import { Gallery } from 'flowbite-svelte';
    import { CldImage } from 'svelte-cloudinary'
    import { Cloudinary } from '@cloudinary/url-gen';

    const CLOUD_NAME = import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME;

    const cld = new Cloudinary({
      cloud: {
        cloudName: CLOUD_NAME
      }
    });
    

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
      const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/img.json`;
      const res = await fetch(url);

      const data = await res.json();

      console.log(data)

      data.resources.forEach(img => {
        images.push({
          alt: img.public_id,
          src: cld.image(img.public_id).format('auto').quality('auto').toURL()
        })
      })

      shuffle(images);

      col1 = images.slice(0, 10);
      col2 = images.slice(10, 20);
      
  }

    loadImages();
</script>
<h1>media</h1>
<p>i like noticing things, big and small. <a role="button" id="refresh" onclick={() => {
  shuffle(images);
  col1 = images.slice(0, 10);
  col2 = images.slice(10, 20);
}}>refresh photos</a> </p> <br><br>

<Gallery class="gap-4 grid-cols-1 md:grid-cols-2 items-start content-start">
  <Gallery items={col1} class="gap-4"/>
  <Gallery items={col2} class="gap-4"/>
</Gallery>

<style>
  #refresh:hover {
    cursor: pointer;
  }
</style>