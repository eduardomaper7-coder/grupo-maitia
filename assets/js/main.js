
const body=document.body,menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>{body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',body.classList.contains('menu-open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>body.classList.remove('menu-open')));
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('[data-whatsapp-form]');
form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const text=[
'Hola Grupo Maitía5, quiero solicitar presupuesto.',
`Nombre: ${d.get('nombre')||''}`,
`Teléfono: ${d.get('telefono')||''}`,
`Tipo de servicio: ${d.get('servicio')||''}`,
`Fecha aproximada: ${d.get('fecha')||''}`,
`Localidad: ${d.get('localidad')||''}`,
`Asistentes: ${d.get('aforo')||''}`,
`Mensaje: ${d.get('mensaje')||''}`
].join('\n');window.open('https://wa.me/34655262434?text='+encodeURIComponent(text),'_blank','noopener');const s=form.querySelector('.status');if(s)s.textContent='Abriendo WhatsApp con tu solicitud preparada…'});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
