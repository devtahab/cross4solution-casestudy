<template>
    <div class="search">

        <div v-if="meals[0]" class="meal-card" v-for="(meal, index) in meals" :key="index">
            <img :src="meal.strMealThumb">
            <div class="info">
                <h3>{{ meal.strMeal.length > 22 ? `${meal.strMeal.substring(0, 22)}...` : meal.strMeal.substring(0, 22) }}</h3>
                <h4>£{{ (Math.random() * 60 + 10).toFixed(2) }}</h4>
                <a @click="goToMeal(meal.idMeal)">Detail</a>
            </div>
        </div>

        <h2 v-else>No Search Results For "{{ meal }}" <i class="bi bi-emoji-frown"></i></h2>

    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                meal: this.$route.query.q,
                meals: []
            }
        },
        methods: {
            async getMeals(){
                try {
                    let searchResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php", {
                        params: {
                            s: this.meal
                        }
                    });

                    console.log(this.meal)
                    console.log(searchResponse)

                    let searchArr = searchResponse.data.meals

                    searchArr.forEach(async (el) => {
                        if(el.strArea === "Italian"){
                            this.meals.push(el)
                        }
                    });

                } catch (error) {
                    console.error(error)
                }
            },
            goToMeal(id){
                this.$router.push(`/meal/${id}`)
            }
        },
        mounted(){
            this.getMeals()
        }
    }
</script>

<style scoped>
    .search{
        width: 100%;
        padding: 60px 200px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        justify-items: center;
        row-gap: 60px;
    }

    .search > h2{
        font-size: 30px;
        font-weight: 300;
        padding: 0  10px;
        color: black;
    }

    .search > .meal-card{
        width: 320px;
        height: 400px;
        border-radius: 10px;
        outline: 1px solid black;
        transition: 0.2s;
    }

    .search > .meal-card:hover{
        scale: 1.04;
    }

    .search > .meal-card > .info{
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

    .search > .meal-card > .info > h3{
        font-size: 26px;
        font-weight: 400;
        text-align: center;
    }

    .search > .meal-card > .info > h4{
        font-size: 26px;
        font-weight: 300;
        text-align: center;
    }

    .search > .meal-card > .info > a{
        text-decoration: none;
        background-color: #ffc300;
        color: #fff;
        padding: 6px 28px;
        font-size: 22px;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.4s;
    }

    .search > .meal-card > .info > a:hover{
        background-color: #fff;
        color: #ffc300;
        outline: 1px solid #ffc300;
    }

    .search > .meal-card > img{
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
        .search{
            padding: 60px 100px;
        }
    }

    @media(max-width: 576px){
        .search{
            padding: 60px 0;
        }
    }
</style>