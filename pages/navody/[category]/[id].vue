<template>
  <div>
    <i-header id="cover-header" cover class="_text-align:center _color:white _background:primary">
      <h1>Ako nájsť čas odchodu autobusu</h1>
      <h4>Vytvorené v spolupráci s cp.hnonline.sk</h4>
    </i-header>
    <i-container>
      <i-row>
        <i-column>
          <i-breadcrumb class="_margin-top:2">
            <i-breadcrumb-item to="/navody">
              Kategórie
            </i-breadcrumb-item>
            <i-breadcrumb-item :to="`/navody/${$route.params.category}`">
              {{ $route.params.category }}
            </i-breadcrumb-item>
            <i-breadcrumb-item active :to="`/navody/${$route.params.category}/${$route.params.id}`">
              {{ $route.params.id }}
            </i-breadcrumb-item>
          </i-breadcrumb>
        </i-column>
      </i-row>
      <i-row>
        <i-column xs="8">
          <h2 class="_margin-top:0">
            Úvod
          </h2>
          <p>
            If you're an older person who wants to learn how to check the departure times of buses on the internet, this tutorial is for you. Using the internet to check bus schedules can be a convenient and easy way to plan your trips and make sure you get where you need to go on time.
            Here's a step-by-step guide on how to do it:
          </p>
          <h2>Všeobecný postup</h2>
          <ol>
            <li>
              Find the website of the transportation agency that operates the buses in your area. This information should be available on their official website, which you can find by doing a quick internet search. The website will likely have a domain name that includes the name of the agency, such as "citytransit.com" or "countybus.org".
            </li>
            <li>
              Once you've found the website, look for a section that is dedicated to schedules or departure times. This section should have a list of all the routes that the agency operates, along with the corresponding departure times. The section may be labeled as "Schedules", "Departure Times", or something similar.
            </li>
            <li>
              Select the route and the specific stop you want to check to see the departure times for that route and stop. To do this, you'll need to know the route number or name, as well as the name or location of the stop you want to check. This information should be available on the website or on signs at the bus stop.
            </li>
            <li>
              If you're not sure which route to choose or which stop to select, you can use the website's search function to find the information you need. Simply enter the name of the route or stop you're looking for, and the website will provide you with the information you need. Some websites may also have a map or list of stops that you can use to find the information you need.
            </li>
            <li>
              Once you've selected the route and stop, the website will display a list of the upcoming departure times for that route and stop. This information will be displayed in a table or schedule format, with the times listed in chronological order. The times may be listed in military time (using a 24-hour clock) or in a standard 12-hour format.
            </li>
            <li>
              Some websites may also offer additional features, such as the ability to set reminders or alerts for when the bus is about to arrive. This can be a great way to make sure you don't miss your bus, especially if you're not used to using public transportation. To set a reminder or alert, you'll need to create an account on the website and provide your contact information.
            </li>
          </ol>
          <p>
            By following these steps, you can easily check the departure times of buses on the internet and plan your trips with confidence. This can be a great way to make the most of your public transportation options and get where you need to go with ease.
          </p>
        </i-column>
        <i-column xs="4">
          <i-list-group :border="false">
            <i-list-group-item class="_text:bold">
              Obsah
            </i-list-group-item>
            <i-list-group-item>Úvod</i-list-group-item>
            <i-list-group-item>Všeobecný postup</i-list-group-item>
            <i-list-group-item>Konkrétny príklad</i-list-group-item>
            <i-list-group-item>Záver</i-list-group-item>
            <i-list-group-item>Skúste si sami</i-list-group-item>
          </i-list-group>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: `Seniori | Návod ${parseInt(route.params.id as string)}`
})
</script>

<style lang="scss" scoped>
#cover-header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~/assets/images/public-transport.jpg');
}
</style>
