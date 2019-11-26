<template>
    <div id="app" class="d-flex container-fluid h-100 flex-column">
        <div class="row">
            <div class="col p-0">
                <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <a class="navbar-brand mb-0 h1" href="#">Reggie</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/tutorial">Tutorial</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/progress">Progress</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/challenge">Challenge</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/playground">Playground</router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div class="row flex-grow-1">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
