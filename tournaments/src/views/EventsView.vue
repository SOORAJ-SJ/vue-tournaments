<script setup></script>

<template>
    <section id="events-wrapper" class="mt-4">
        <div class="container-fluid">
            <div class="">
                <div class="content p-2">
                    <h1 class="leading-header mt-2">
                        PREDICTION CONTEST @TEAM_SATTVA
                    </h1>
                    <div class="description">
                        <p class="m-auto">
                            Who Will Take Home the Trophy? Our Prediction for the singles Table Tennis Tournament Finalist Winner
                        </p>
                        <div class="my-2">
                            <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLScB3edYfSiMpapR98muEnsb1hBsjVpS4FSu9eofSuXonKf7Lw/viewform?usp=sf_link" 
                            class="btn btn-outline-info"
                            target="_blank">Click Here!</a>
                            <p class="m-auto">
                                *Prediction contest will be closed at <span class="text-warning">6:30PM</span> today!
                            </p>
                        </div>
                    </div>
                    <div class="content-img my-4">
                        <div>
                            <img src="../assets/images/2205_w046_n004_124b_p1_124.jpg" alt="guessing">
                        </div>
                    </div>
                    <div class="trailing-content d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center my-4 p-2">
                        <div class="announcement-img m-auto mt-4 mt-lg-0">
                            <h2>Official Sponsors</h2>
                            <div class="d-flex justify-content-between align-items-center mt-3 flex-wrap">
                                <img src="../assets/images/Decathlon_(1).png" alt="decathlon">
                                <img src="../assets/images/Pringles-Logo-PNG6.png" alt="pringles">
                                <img src="../assets/images/KFC-Logo-PNG5.png" alt="pringles">
                            </div>
                        </div>
                        <div class="description">
                            <p class="m-auto">
                                Get ready for the most thrilling singles table tennis tournament of the season! Featuring the best players in the sport, this is an event you won't want to miss. And with a top prize on offer, the competition will be fierce!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #events-wrapper {
        background-color: var(--background);
        color: whitesmoke;
        text-align: center;
        line-height: 1.5;
        animation: fade .5s ease-in;
    }
    .leading-header {
        font-weight: 900;
    }
    .content-img {
        left: 0;
        border-radius: 0 10em 10em 0;
        overflow: hidden;
        margin-left: -20px;
        max-width: 1000px;
    }
    .content-img img {
        width: 100%
    }
    .description {
        font-size: 14px;
    }
    .description p {
        max-width: 600px;
    }
    .announcement-img {
        max-width: 400px;
    }
    .announcement-img img {
        width: 150px;
        max-height: 80px;
        height: auto;
        object-fit: contain;
    }
    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>