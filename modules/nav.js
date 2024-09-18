document.write(`

<nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <!-- Navbar logo for large screens -->
        <a class="navbar-brand d-flex justify-content-start d-none d-lg-flex" href="#page-top">
            <img src="/assets/img/mov-text-logo-white.png" alt="Marshalls of Victory - White Text Logo" style="width: 15vw; height: auto;">
        </a>
        <!-- Navbar logo for small screens -->
        <a class="navbar-brand d-flex justify-content-start d-block d-lg-none" href="#page-top">
            <img src="/assets/img/mov-text-logo-white-short.png" alt="Marshalls of Victory - White Text Logo" style="width: 15vw; height: auto;">
        </a>

        <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/index.html#about"><span class = "Section_2_Title"></span></a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/index.html#portfolio"><span class = "Section_1_Title"></span></a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/index.html#contact"><span class = "Section_3_Title"></span></a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/links/index.html"><span class = "Section_4_Title"></span></a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded nav-link-clr" href="/releases/index.html"><span class = "Section_5_Title"></span></a></li>
            </ul>

            <div id = "languageSelector">
                <span id = "lang-0" onclick="langClicked(0)">
                    <i class="fi fi-gb"></i>
                </span>
                <span id = "lang-1" onclick="langClicked(1)">
                    <i class="fi fi-pl"></i>
                </span>                                        
            </div>
        </div>
    </div>
</nav>

`)