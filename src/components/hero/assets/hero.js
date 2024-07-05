const convertImagesToBackgroundString = (imgs) => {
    const l = imgs.length;
    const newArray = [];
    for (let i = 0; i < l; i++) {
      newArray.push(`linear-gradient(
          rgba(16, 78, 139, 0.7),
          rgba(16, 78, 139, 0.8)
        ),
        url("imgs/heros/${imgs[i]}")`);
    }
    return newArray;
  };
  
  const heroEnclosure = () => {
    const images = [
      "wegner-caliegh.jpg",
      "naples-office.jpg",
      "estero-office-night.jpg",
    ];
  
    const titles = [
      `
      Been there<span style='font-size: .8em'>.</span><br/>Done that<span style='font-size: .8em'>.</span>
    `,
  
      `
      <span style='font-size: .8em'>Attorneys you swear by, not at<span style='font-size: .8em'>.</span></span>
    `,
  
      `We mean business<span style='font-size: .8em'>.</span>`,
    ];
    const subtitles = [
      `Business lawyers that are businesspeople too.`,
      `Out of this world service, down to earth attorneys.`,
      `A law firm built for your business.`,
    ];
    const subtexts = [
      `We understand what you want from an attorney because we are businesspeople too. Learn how we leverage our real-world experience to provide world-class service to clients.`,
      `
    Unlike other lawyers, we pride ourselves on being approachable and accessible to our clients. Learn how much clients achieve with lawyers they actually get along with.
    `,
      `
    Wegner Law PLLC is all about serving businesses, entrepreneurs and investors. Learn how this focus allows to provide the very best to our clients.
    `,
    ];
  
    const backgroundImages = convertImagesToBackgroundString(images);
  
    const heroImageHolder = document.getElementById("container-hero-imgs");
    const textContainer = document.getElementById('container-hero-text')
    const heroTitle = document.getElementById('title-hero')
    const heroSubtitle = document.getElementById('subtitle-hero')
    const heroSubtext = document.getElementById('subtext-hero')
    let heroImages = [];
  
    const imagesLength = images.length;
    const textsLength = titles.length;
  
    const loadImages = () => {
      for (let i = 0; i < imagesLength; i++) {
        if (i !== 0) {
          const newHero = document.createElement("div");
          heroImageHolder.appendChild(newHero);
  
          heroImages.push(newHero);
  
          newHero.style.backgroundImage = backgroundImages[i];
          newHero.className = "hero-img";
        }
      }
  
      //@ts-ignore
      heroImages = document.querySelectorAll(".hero-img");
    };
    let lazyLoadTimeout = setTimeout(() => {
      loadImages();
      clearTimeout(lazyLoadTimeout);
    }, 2000);
  
    let currentFrame = 0;
  
  
  
    const setText = (currentFrame) => {
      textContainer.style.opacity = '0';
      const textIndex = currentFrame % textsLength;
      let textTimeout = setTimeout(() => {
        heroTitle.innerHTML = titles[textIndex];
        heroSubtitle.innerHTML = subtitles[textIndex];
        heroSubtext.innerHTML = subtexts[textIndex];
        textContainer.style.opacity = '1';
        clearTimeout(textTimeout);
      }, 1500);
    };
  
    const updateImage = () => {
      const priorIndex = currentFrame % imagesLength;
      currentFrame++;
      const nextIndex = currentFrame % imagesLength;
      heroImages[priorIndex].classList.remove("hero-img-active");
      heroImages[nextIndex].classList.add("hero-img-active");
      setText(currentFrame)
    };
  
    setInterval(() => {
      updateImage();
    }, 10000);
  };
  
  heroEnclosure();
  