//General
const title = document.querySelector('.modal-title');
const p = document.querySelector('.modal-body');
const dropBtn = document.querySelector('.modalAction-dropbtn');
const dropContent = document.querySelector('.modalAction-dropbtn-content');

//Esto pertenece al modal de modalMain.html
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const closeBtns = document.querySelectorAll('.closeModal');

//Esto pertenece al modal de modalExp.html
const openBtnAbt = document.getElementById('openModalAbt');
const openBtnCont = document.getElementById('openModalCont');

//Esto pertenece al modal de modalSobreMi.html
const modalProjects = document.getElementById('myModalProjects');
const closeBtnsProjects = document.querySelectorAll('.closeModalProjects');
const closeBtnProjects = document.getElementById('closeModalProjects');
const openBtnAct = document.getElementById('openModalExpAct');
const openBtnPrev = document.getElementById('openModalExpPrev');
const openBtnProjects = document.getElementById('openModalProjects');

//Apéndice de Proyectos dentro de modalSobreMi.html
const bpbbdd = document.getElementById('BP-bbdd-Scrapper');
const calcv2 = document.getElementById('Calcv2');
const bprelease = document.getElementById('BP-Release-Analyzer');
const chess = document.getElementById('ChessCoach');
const modalActionTableGeneral = document.querySelector('.modalActionTableGeneral');
const modalActionTitle = document.querySelector('.modalAction-CurrentTitle');
const projectName = document.querySelector('.modalActionRowNameValueReplaceable');
const projectDesc = document.querySelector('.modalActionRowDescValueReplaceable');
const projectRepo = document.querySelector('.modalActionRowRepoValueReplaceable');
const avance = document.getElementById('modalActionPorcentajeAvance');
const currentstatus = document.getElementById('modalActionEstadoProyecto');


if (openBtn) {
    openBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
});
if (closeBtnProjects) {
    closeBtnProjects.addEventListener('click', () => {
        modalProjects.classList.remove('show');
        modalActionTableGeneral.classList.remove('show');
    });
}
closeBtnsProjects.forEach(btn => {
    btn.addEventListener('click', () => {
        modalProjects.classList.remove('show');
        modalActionTableGeneral.classList.remove('show');
        modalActionTitle.textContent = '';
    });
});

if (openBtnAct) {
    openBtnAct.addEventListener('click', () => {
        p.innerHTML = 'Actualmente, soy referente técnico en <a href="https://rmrconsultores.com/" target="_blank">RMR Technology Solutions</a>, para un proyecto, donde lidero desarrollos nuevos, propongo mejoras continuas y refactorizo código legacy del cliente. Mi foco está en entregar código de calidad, documentar todos los avances y dar soporte diario al equipo del cliente en dudas técnicas.';
        title.textContent = "Experiencia Actual"
        modal.classList.add('show');
    });
}
if (openBtnPrev) {
    openBtnPrev.addEventListener('click', () => {
        p.innerHTML = 'Mi primer trabajo fue en <a href="https://ctrl365.com/" target="_blank">Ctrl365</a>, donde fui "Digital Assistant" (Dev Trainee), en donde se me fue instruido en el uso de Blue Prism y por primera vez, me encontré en un entorno de trabajo dentro del rubro informático.<br> Eventualmente pude escalar internamente, hasta ser "Digital Developer" (Dev Junior +).<br> Luego formé parte del equipo de <a href="https://argentina.practia.global/" target="_blank">Practia Global</a>, donde fui Desarrollador de Blue Prism y Analista de Negocio para un proyecto de UIPath.<br> Mi foco para esa instancia, no solo era entregar código en las mejores condiciones posibles, sino además, poder responder dudas y consultas de mi lider y el cliente, además de facilitar documentación y soporte productivo.';
        title.textContent = "Experiencia Previa"
        modal.classList.add('show');
    });
}

if (openBtnAbt) {
    openBtnAbt.addEventListener('click', () => {
        p.textContent = 'Tengo 2 gatos, se llaman Florencio y Emilio.\n Hago natación y dentro de poco, volveré al GYM.\n Si bien no lo hago siempre, me gustaría darle más énfasis a la programación como hobby, ya que no solo me resulta divertido de hacer, también es una oportunidad de crecimiento y de adquisición de conocimiento técnico enorme.\n Me gusta leer manga, de hecho, tengo una colección de poco más de ¡270 tomos!.\n Me gustaría conocer la patagonia en algún momento, y soy fan de la Monster Blanca.';
        title.textContent = "Más sobre mi"
        modal.classList.add('show');
    });
}

if (openBtnCont) {
    openBtnCont.addEventListener('click', () => {
        p.innerHTML = 'Pueden contactarme por los siguientes canales:<br> LinkedIn: <a href="https://www.linkedin.com/in/bruno-morales-5247b1201/" target="_blank">https://www.linkedin.com/in/bruno-morales-5247b1201/</a> <br> Y si te interesa ver más de lo que hago. <br> Github: <a href="https://github.com/BrunoMorales23" target="_blank">https://github.com/BrunoMorales23</a>';
        title.textContent = "¡Contacto!"
        modal.classList.add('show');
    });
}

if (openBtnProjects) {
    openBtnProjects.addEventListener('click', () => {
        modalProjects.classList.add('show');
    });
}

dropBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropContent.classList.toggle('show');
});

dropContent.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => dropContent.classList.remove('show'));
});


document.addEventListener('click', (e) => {
    if (!dropContent.contains(e.target) && !dropBtn.contains(e.target)) {
        dropContent.classList.remove('show');
    }
});

if (bpbbdd) {
    bpbbdd.addEventListener('click', () => {
        projectName.textContent = 'Blue Prism Data Base Scrapper';
        projectDesc.textContent = 'Proyecto que busca automatizar Dailys!';
        projectRepo.innerHTML = '<a href="https://github.com/BrunoMorales23/BP-bbdd-Scrapper" target="_blank">https://github.com/BrunoMorales23/BP-bbdd-Scrapper</a>';
        modalActionTitle.textContent = 'BP-bbdd-Scrapper';
        currentstatus.textContent = 'Desarrollo';
        avance.textContent = '10%'
        modalActionTableGeneral.classList.add('show');
    });
}

if (calcv2) {
    calcv2.addEventListener('click', () => {
        projectName.textContent = 'Calculadora de Estimaciones v2';
        projectDesc.textContent = 'Automatizador de Estimaciones en base a un PDD, utiliza como LLM, Llama3.2 y usa cola de trabajo alojada en SQLite intentando reflejar la WQ de Blue Prism.';
        projectRepo.innerHTML = '<a href="https://github.com/BrunoMorales23/calcv2" target="_blank">https://github.com/BrunoMorales23/calcv2</a>';
        modalActionTitle.textContent = 'Calcv2';
        currentstatus.textContent = 'Desarrollo';
        avance.textContent = '80%'
        modalActionTableGeneral.classList.add('show');
    });
}

if (bprelease) {
    bprelease.addEventListener('click', () => {
        projectName.textContent = 'Blue Prism Release Analyzer';
        projectDesc.textContent = 'XML Trimmer que permite recortar secciones específicas de releases de Blue Prism para su análisis o bien, eliminación de contenido.';
        projectRepo.innerHTML = '<a href="https://github.com/BrunoMorales23/BP-Release-Analyzer" target="_blank">https://github.com/BrunoMorales23/BP-Release-Analyzer</a>';
        modalActionTitle.textContent = 'BP-Release-Analyzer';
        currentstatus.textContent = 'Finalizado';
        avance.textContent = '100%'
        modalActionTableGeneral.classList.add('show');
    });
}

if (chess) {
    chess.addEventListener('click', () => {
        projectName.textContent = 'Chess Coach';
        projectDesc.textContent = 'Hub interactivo de ajedrez basado en Chess.com donde se puede espejar partidas en tiempo real (o partidas terminadas) para su análisis en conjunto';
        projectRepo.innerHTML = '<a href="https://github.com/BrunoMorales23/Chess-Coach" target="_blank">https://github.com/BrunoMorales23/Chess-Coach</a>';
        modalActionTitle.textContent = 'Chess Coach';
        currentstatus.textContent = 'Stand-By';
        avance.textContent = '40%'
        modalActionTableGeneral.classList.add('show');
    });
}
