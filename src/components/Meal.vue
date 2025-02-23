<template>
    <div class="meal">
        <h3>
            <span class="links"><router-link to="/">Home</router-link> > <router-link :to="'/menu/' + meal.category">{{ meal.category }}</router-link> > <router-link to="#">{{ meal.name }}</router-link></span>
            <span class="fav-text" @click="toggleFavorite(meal)">{{ isFavorite(meal.id) ? "Remove From Favorites" : "Add To Favorites" }}</span>
        </h3>

        <figure>
            <img :src="meal.image">
            <figcaption>{{ meal.name }}</figcaption>
        </figure>

        <div class="description">
            <h4>Ingredients</h4>
            <div class="ingredients">
                <li v-for="(ingredient, index) in meal.ingredients" :key="index">{{ ingredient }}</li>
            </div>
            <h4>Instructions</h4>
            <div class="instructions">
                <p>{{ meal.instructions }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapActions, mapGetters } from 'vuex';

    export default{
        data(){
            return{
                mealId: this.$route.params.id,
                meal: {}
            }
        },
        methods: {
            async getMealInfo(){
                let infoResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php", {
                    params: {
                        i: this.mealId
                    }
                })

                console.log(infoResponse.data.meals[0])

                let mealResponse = infoResponse.data.meals[0]

                let ingredients = []
                let isIngredientEmpty = false
                let count = 1
                while(isIngredientEmpty === false){
                    let firstKey = `strIngredient${count}`
                    let secondKey = `strMeasure${count}`
                    if(mealResponse[firstKey] !== ""){
                        let concatStr = mealResponse[firstKey].concat(" ", mealResponse[secondKey])
                        ingredients.push(concatStr)
                        count++
                    }
                    else{
                        isIngredientEmpty = true
                    }
                }

                this.meal = {
                    id: this.mealId,
                    ingredients: ingredients,
                    instructions: mealResponse.strInstructions,
                    name: mealResponse.strMeal,
                    category: mealResponse.strCategory,
                    image: mealResponse.strMealThumb,

                }
            },
            ...mapActions(['toggleFavorite'])
        },
        computed: {
          ...mapGetters(['isFavorite', 'favorites'])  
        },
        mounted(){
            this.getMealInfo()
        }
    }
</script>

<style scoped>
    .meal{
        width: 100%;
        padding: 30px 200px 60px;
    }

    .meal > h3{
        display: flex;
        justify-content: space-between;
        color: #ffc300;
    }

    .meal > h3 > .links > a{
        color: #ffc300;
        text-decoration: none;
        font-size: 20px;
    }

    .meal > h3 > .fav-text{
        cursor: pointer;
        color: red;
        text-decoration: underline;
    }

    .meal > figure{    
        padding: 20px 0; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .meal > figure > img{
        width: 400px;
        height: 400px;
    }

    .meal > figure > figcaption{
        font-size: 20px;
    }

    .meal > .description{
        padding: 20px;
    }

    .meal > .description > h4{
        font-size: 24px;
        text-decoration: underline;
    }

    .meal > .description > .ingredients{
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        row-gap: 12px;
        margin-bottom: 30px;
    }

    .meal > .description > .ingredients > li{
        font-size: 20px;
        padding: 5px;
    }

    .meal > .description > .instructions{
        padding: 0;
    }

    .meal > .description > .instructions > p{
        font-size: 20px;
        padding: 20px;
    }

    @media (max-width: 1300px){

    }

    @media (max-width: 1000px){
        .meal{
            padding: 30px 100px 60px;
        }
    }

    @media (max-width: 760px){
        .meal{
            padding: 30px 25px 60px;
        }

        .meal > h3 > .links > a{
            font-size: 18px;
        }

        .meal > h3 > .fav-text{
            font-size: 18px
        }
    }

    @media(max-width: 576px){
        .meal > h3{
            flex-direction: column;
            flex-wrap: wrap;
        }

        .meal > h3 > .links > a{
            font-size: 16px;
        }

        .meal > h3 > .fav-text{
            font-size: 16px
        }

        .meal > figure > img{
            width: 300px;
            height: 300px;
        }

        .meal > figure > figcaption{
            font-size: 16px;
        }

        .meal > .description > h4{
            font-size: 20px;
        }

        .meal > .description > .ingredients > li{
            font-size: 18px;
        }

        .meal > .description > .instructions > p{
            font-size: 18px;
        }

    }
</style>