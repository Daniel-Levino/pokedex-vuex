<template>
    <div>
        <div class="row">
            <div class="text-h1 text-center col-12 q-mt-xl">
                quasar pokedex
            </div>
            <div class="col-12 q-mt-xl" align="center">
                <q-btn 
                    label='entrar'
                    align="center"
                    size="xl"
                    @click="toPokemons()"
                />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "homePage",
    data () {
        return {

        }
    },
    methods: {
        toPokemons() {
            this.$router.push('pokemons')
        }
    }
}
</script>