const menuEnclosure=()=>{
    const toggle = document.getElementById('toggle-nav')
    const header = document.getElementById('header-nav')
    const hero = document.getElementById('container-hero')
  
    const links = document.querySelectorAll('.header-link')
  
    const opts = {threshold: .8}
  
    toggle.addEventListener('click',()=>header.classList.toggle('menu-open'))
  
    const handleScroll=(entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          header.classList.remove('header-off-top')
        }else{
          header.classList.add('header-off-top')
        }
      })
    }
  
    const obs = new IntersectionObserver(handleScroll, opts)
    obs.observe(hero)
  
    links.forEach(link=>{
      link.addEventListener('click',()=>{
        const targetId = link.getAttribute('href')
        const target = document.getElementById(targetId)
        header.classList.remove('menu-open')
        if(target){
          target.scrollTo()
        }else{
          window.location.href = '../../' + targetId
        }
      })
    })
  }
  
  menuEnclosure()