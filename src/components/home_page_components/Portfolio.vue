<template>
        <section class="page-section portfolio bg-black text-white" id="portfolio">
            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-white mb-0"><span class = "Section_1_Title"></span></h2>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center">
                    <!-- Portfolio Item 1-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_1.jpg" alt="Band photo #1 - Marhsalls of Victory" />
                        </div>
                    </div>
                    <!-- Portfolio Item 2-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_2.jpg" alt="Band photo #2 - Marhsalls of Victory" />
                        </div>
                    </div>
                    <!-- Portfolio Item 3-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_3.jpg" alt="Band photo #3 - Marhsalls of Victory" />
                        </div>
                    </div>
                    <!-- Portfolio Item 4-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_4.jpg" alt="Band photo #4 - Marhsalls of Victory" />
                        </div>
                    </div>
                    <!-- Portfolio Item 5-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_5.jpg" alt="Band photo #5 - Marhsalls of Victory" />
                        </div>
                    </div>
                    <!-- Portfolio Item 6-->
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/img_6.jpg" alt="Band photo #6 - Marhsalls of Victory"/>
                        </div>
                    </div>

                    <!-- Portfolio Item 4 -->
                    <!-- <div class="col-md-6 col-lg-4 mb-5 mb-lg-0"> -->
                        <!-- <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4"> -->
                            <!-- <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"> -->
                                <!-- <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div> -->
                            <!-- </div> -->
                            <!-- <img class="img-fluid" src="/assets/img/portfolio/game.png" alt="..." /> -->
                        <!-- </div> -->
                    <!-- </div> -->
                    <!-- Portfolio Item 5-->
                    <!-- <div class="col-md-6 col-lg-4 mb-5 mb-md-0"> -->
                        <!-- <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5"> -->
                            <!-- <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"> -->
                                <!-- <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div> -->
                            <!-- </div> -->
                            <!-- <img class="img-fluid" src="/assets/img/portfolio/safe.png" alt="..." /> -->
                        <!-- </div> -->
                    <!-- </div> -->
                    <!-- Portfolio Item 6-->
                    <!-- <div class="col-md-6 col-lg-4"> -->
                        <!-- <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6"> -->
                            <!-- <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"> -->
                                <!-- <div class="portfolio-item-caption-content text-center text-white"><i class="fa-solid fa-circle-info"></i></div> -->
                            <!-- </div> -->
                            <!-- <img class="img-fluid" src="/assets/img/portfolio/submarine.png" alt="..." /> -->
                        <!-- </div> -->
                    <!-- </div> -->

                    <!-- View more button -->
                    <div class="text-center mt-4">
                        <a class="btn btn-xl btn-outline-light" href="https://www.instagram.com/marshallsofvictory">
                            <i class="fab fa-fw fa-instagram"></i>
                            <span class = "view_more"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>


        <!-- Portfolio Modals-->
        <!-- Portfolio Modal 1-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_1_title"></span></h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_1.jpg" alt="Band photo #1 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 2-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_2_title"></span></h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_2.jpg" alt="Band photo #2 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 3-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" aria-labelledby="portfolioModal3" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_3_title"></span></h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_3.jpg" alt="Band photo #3 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 4-->
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" aria-labelledby="portfolioModal4" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title -->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_3_title"></span></h2>
                                    <!-- Icon Divider -->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image -->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_4.jpg" alt="Band photo #4 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text -->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 5 -->
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" aria-labelledby="portfolioModal5" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_3_title"></span></h2>
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image -->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_5.jpg" alt="Band photo #5 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text -->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Modal 6 -->
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" aria-labelledby="portfolioModal6" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0"><span class="Photo_3_title"></span></h2>
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image -->
                                    <img class="img-fluid rounded mb-5" src="/assets/img/portfolio/img_6.jpg" alt="Band photo #6 - Marshalls of Victory" />
                                    <!-- Portfolio Modal - Text -->
                                    <p class="mb-4"><span class="Photo_desc"></span></p>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.instagram.com/marshallsofvictory"><i class="fab fa-fw fa-instagram"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://www.facebook.com/profile.php?id=61558754971767"><i class="fab fa-fw fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-dark btn-social mx-1" href="https://twitter.com/movtheband"><i class="fab fa-fw fa fa-brands fa-twitter"></i></a><br><br>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        <span class="close_window"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>