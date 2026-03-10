// filtros proyectos
document.querySelectorAll('.filters button').forEach(btn=>{
 btn.onclick=()=>{
   const f=btn.dataset.filter;
   document.querySelectorAll('.project').forEach(p=>{
     p.style.display=(f==='all'||p.classList.contains(f))?'block':'none';
   })
 }
})

// reveal scroll
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting) e.target.classList.add('show')
 })
})

document.querySelectorAll('.section').forEach(s=>observer.observe(s))