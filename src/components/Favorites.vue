<template>
    <h2>My Favorites <i class="bi bi-heart-fill"></i></h2>

    <div class="favorites">

        <div v-if="favorites.length" class="meal-card" v-for="(meal, index) in favorites" :key="index">
            <img :src="meal.image">
            <div class="info">
                <h3>{{ meal.name.length > 22 ? `${meal.name.substring(0, 22)}...` : meal.name.substring(0, 22) }}</h3>
                <h4>£{{ (Math.random() * 60 + 10).toFixed(2) }}</h4>
                <a @click="goToMeal(meal.id)">Detail</a>
            </div>
        </div>

        <h2 v-else>Nothing in here yet <i class="bi bi-emoji-frown"></i></h2>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default{
        data(){
            return{
                meal: this.$route.query.q,
                meals: []
            }
        },
        methods: {
            goToMeal(id){
                this.$router.push(`/meal/${id}`)
            },
            ...mapActions(['toggleFavorite'])
        },
        computed: {
            ...mapGetters(['isFavorite', 'favorites'])
        }
    }
</script>

<style scoped>
    h2{
        margin-top: 40px;
        height: 40px;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 12px;
        font-size: 36px;
        color: black;
    }

    h2 > i{
        margin-top: 6px;
        color: red;
    }

    .favorites > h2{
        font-size: 30px;
        font-weight: 300;
        color: black;
    }

    .favorites > h2 > i{
        font-size: 30px;
        font-weight: 300;
        color: black;
    }

    .favorites{
        width: 100%;
        padding: 60px 200px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        justify-items: center;
        row-gap: 60px;
    }

    .favorites > .meal-card{
        width: 320px;
        height: 400px;
        border-radius: 10px;
        outline: 1px solid black;
        transition: 0.2s;
    }

    .favorites > .meal-card:hover{
        scale: 1.04;
    }

    .favorites > .meal-card > .info{
        width: 100%;
        height: 180px;
        padding: 10px 10px 16px;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: blanchedalmond;
    }

    .favorites > .meal-card > .info > h3{
        font-size: 26px;
        font-weight: 400;
        text-align: center;
    }

    .favorites > .meal-card > .info > h4{
        font-size: 26px;
        font-weight: 300;
        text-align: center;
    }

    .favorites > .meal-card > .info > a{
        text-decoration: none;
        background-color: #ffc300;
        color: #fff;
        padding: 6px 28px;
        font-size: 22px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.4s;
    }

    .favorites > .meal-card > .info > a:hover{
        background-color: #fff;
        color: #ffc300;
        outline: 1px solid #ffc300;
    }

    .favorites > .meal-card > img{
        display: block;
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
        background-color: aquamarine;
    }

    @media (max-width: 1300px){

    }

    @media (max-width: 1000px){

    }

    @media (max-width: 760px){
        .favorites{
            padding: 60px 100px;
        }
    }

    @media(max-width: 576px){
        .favorites{
            padding: 60px 0;
        }
    }
</style>