// Barras del código de barras generadas dinámicamente (patrón pseudoaleatorio fijo)
(function(){
  const el = document.getElementById('barcode');
  const pattern = [3,1,2,1,3,2,1,1,2,3,1,2,1,3,1,2,2,1,3,1,2,1,1,3,2,1,3,1,2,1];
  pattern.forEach(w=>{
    const bar = document.createElement('span');
    const h = 18 + (w * 9);
    bar.style.width = (w*1.4)+'px';
    bar.style.height = h+'px';
    el.appendChild(bar);
  });
})();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> navLinks.classList.remove('open'));
});