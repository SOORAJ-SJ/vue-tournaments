<script setup>
    const legendList = [
        {
            title: "P",
            expanstion: "Matches Played"
        },
        {
            title: "W",
            expanstion: "No of wins"
        },
        {
            title: "D",
            expanstion: "No of draws"
        },
        {
            title: "L",
            expanstion: "No of loses"
        },
        {
            title: "SW",
            expanstion: "Sets win"
        },
        {
            title: "SL",
            expanstion: "Sets lose"
        },
        {
            title: "SD",
            expanstion: "Set difference"
        },
        {
            title: "PF",
            expanstion: "Points forwarded"
        },
        {
            title: "PA",
            expanstion: "Points accepted"
        },
        {
            title: "PD",
            expanstion: "Total point difference"
        }
    ]
</script>
<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="ms-2">Legend</span>
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <div class="row justify-content-evenly">
                    <div class="col-12 mb-1 col-md-5 mb-md-2 border" v-for="legend in legendList">
                        <div class="d-flex p-1">
                            <span class="w-25">{{ legend.title }}</span>
                            <span>{{ legend.expanstion }}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  </div>
</template>