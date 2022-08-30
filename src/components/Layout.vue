<template>
    <div>
        <b-navbar class="navbar" type="dark" variant="dark">
            <b-navbar-nav>
                <b-navbar-brand to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732228.png" class="d-inline-block align-top" alt="Kitten" height="30">
                    
                </b-navbar-brand>
                <b-nav-item to="/">Inicio</b-nav-item>
                <b-nav-item to="/series">Series</b-nav-item>
                <b-nav-item to="/movies">Filmes</b-nav-item>

                <!-- Navbar dropdowns -->
                <!-- <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->

                <!-- <b-nav-item-dropdown text="User" right>
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
        </b-navbar>
    <router-view/>
  </div>

</template>

<style>
.navbar {
    background:#141414 !important;
}
</style>