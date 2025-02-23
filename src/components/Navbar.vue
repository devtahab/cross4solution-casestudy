<template>
    <nav>
        <span @click="goToHome()"><img src="@/assets/food-icon.png"> DemoRestaurant | Menu</span>
        <router-link to="/favorites">Favorites</router-link>
        <i class="bi bi-list" @click="toggleDiv"></i>
        <div v-show="showToggle" class="toggle-div">
            <router-link to="/favorites">Favorites</router-link>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                showToggle: false
            }
        },
        methods: {
            toggleDiv(){
                if(this.showToggle){
                    this.showToggle = false
                }
                else{
                    this.showToggle = true
                }
            },
            goToHome(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>
    nav{
        max-width: 100%;
        padding: 0 300px;
        position: sticky;
        top: 0;
        z-index: 4;
        background-color: #fff;
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
    }

    nav > i{
        background-color: #ffc300;
        padding: 2px 6px;
        font-size: 24px;
        color: #fff;
        display: none;
    }

    nav > span{
        font-size: 30px;
        display: flex;
        color: #ffc300;
        gap: 10px;
        cursor: pointer;
    }

    nav > span > img{
        width: 50px;
        height: 50px;
    }

    nav > a{
        font-size: 24px;
        text-decoration: none;
        color: #ffc300;
    }

    nav > a:hover{
        color: grey;
    }

    nav > .toggle-div{
        position: absolute;
        padding: 10px;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
    }

    nav > .toggle-div > a{
        text-decoration: none;
        color: #ffc300;
        font-size: 20px;
        display: block;
    }

    @media (max-width: 1300px){
        nav{
            padding: 0 200px;
        }
    }

    @media (max-width: 1000px){
        nav{
            padding: 0 100px;
        }
    }

    @media (max-width: 760px){
        nav{
            padding: 0 20px;
        }
    }

    @media(max-width: 576px){
        nav{
            justify-content: space-between;
            height: 60px;
        }

        nav > i{
            display: block;
        }

        nav > i:active{
            background-color: #fff;
            color: #ffc300;
            outline: 1px solid #ffc300;
        }

        nav > span{
            font-size: 20px;
            align-items: center;
        }

        nav > span > img{
            width: 25px;
            height: 25px;
        }

        nav > a{
            display: none;
        }
    }
</style>