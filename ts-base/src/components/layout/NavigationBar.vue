<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="info" fixed='top'>
      <b-navbar-brand href="#">Vue tests</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active to="/"> Home </b-nav-item>
          <b-nav-item disabled to="/about"> About </b-nav-item>
          <b-nav-item to="/quiz"> Quiz </b-nav-item>
          <b-nav-item disabled to="#">Posts</b-nav-item>
          <b-nav-item disabled to="#">Adopt pets</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
