<template>
    <div class="search">
        <input type="text" placeholder="Search for your meal" v-model="meal">
        <button @click="searchMeal(meal)">Search</button>
    </div>

    <div class="menu">

        <div class="category-card" v-for="(category, index) in categories" :key="index" @click="goToMenu(category.name)">
            <img :src="category.image">
            <div class="overlay"></div>
            <h3>{{ category.name }}</h3>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                meal: "",
                categories: []
            }
        },
        methods: {
            async getCategories(){
                try {
                    let countryResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php", {
                        params: {
                            a: "Italian"
                        }
                    });

                    let countryArr = countryResponse.data.meals

                    countryArr.forEach(async (el) => {
                        try {
                            let mealResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php", {
                                params: {
                                    i: el.idMeal
                                }
                            })

                            console.log(mealResponse.data.meals[0]);

                            let meal = mealResponse.data.meals[0]

                            if(!this.categories.some(cat => cat.name === meal.strCategory)){
                                this.categories.push({name: meal.strCategory, image: meal.strMealThumb})
                            }
                        } catch (error) {
                            console.error(error)
                        }
                    });

                    console.log(countryArr)
                    console.log(this.categories)

                } catch (error) {
                    console.error(error)
                }
            },
            goToMenu(category){
                this.$router.push(`/menu/${category}`)
            },
            searchMeal(meal){
                this.$router.push(`/search?q=${meal}`)
            }
        },
        mounted(){
            this.getCategories()
        }
    }
</script>

<style scoped>
    .search{
        margin-top: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search > input{
        height: 100%;
        width: 340px;
        padding: 0 0 0 10px;
        margin: 0;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 10px 0 0 10px;
        border-right: 0;
    }

    .search > input:focus{
        outline: 0;
    }

    .search > button{
        height: 100%;
        width: 100px;
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        border: 1px solid black;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        color: #fff;
        background-color: #ffc300;
        transition: 0.3s;
    }

    .search > button:hover{
        background-color: #fff;
        color: #ffc300;
    }

    .menu{
        width: 100%;
        padding: 60px 200px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        justify-items: center;
        row-gap: 60px;
    }

    .menu > .category-card{
        position: relative;
        width: 276px;
        height: 276px;
        border-radius: 10px;
        outline: 1px solid black;
        background-color: orange;
        cursor: pointer;
        transition: 0.2s;
    }

    .menu > .category-card:hover{
        scale: 1.04;
    }

    .menu > .category-card > img{
        display: block;
        width: 100%;
        z-index: 1;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .menu > .category-card > .overlay{
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .menu > .category-card > h3{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 26px;
        font-weight: 500;
        z-index: 3;
        color: #fff;
    }

    @media (max-width: 1300px){

    }

    @media (max-width: 1000px){

    }

    @media (max-width: 760px){
        .menu{
            padding: 60px 100px;
        }
    }

    @media(max-width: 576px){
        .search > input{
            width: 240px;
        }

        .menu{
            padding: 60px 20px;
        }
    }
</style>