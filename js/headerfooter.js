const headerTemplate = `<nav class="navbar navbar-expand-lg bg-dark navbar-dark shadow">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="/assets/images/codoacodo.png" width="75" alt="logo codo a codo">
    </a>
    <a class="navbar-brand" href="#"> Conf Bs As
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse text-center justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav  mb-2 mb-lg-0 nav ">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">La conferencia</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#oradores">Los oradores</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#lugaryfecha">El lugar y la fecha</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#conviertete">Conviértete en orador</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-success" href="./tickets.html">Comprar tickets</a>
            </li>


        </ul>

    </div>
</div>
</nav>`

const footerTemplate =`<div class="footer-color py-3 px-5">
<ul class="nav ">
    <li class="nav-item ">
        <a class="nav-link text-white fs-6" href="#">Preguntas Frecuentes</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Contáctanos</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Prensa</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Conferencias</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Términos y Condiciones</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Privacidad</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-white fs-6" href="#">Estudiantes</a>
    </li>
</ul>
</div>`



const header = document.getElementsByTagName('header')[0]
const footer = document.getElementsByTagName('footer')[0]

header.innerHTML = headerTemplate
footer.innerHTML = footerTemplate