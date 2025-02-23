<template>
    <footer>
        <span><img src="@/assets/food-icon.png"> DemoRestaurant</span>
        <h4>&copy; 2025 Taha Bolat</h4>
        <div class="icons">
            <router-link to="/"><i class="bi bi-instagram"></i></router-link>
            <router-link to="/"><i class="bi bi-tiktok"></i></router-link>
        </div>
    </footer>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    footer{
        max-width: 100%;
        height: 130px;
        padding: 20px 160px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        background-color: blanchedalmond;
    }

    footer > span{
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        gap: 10px;
    }

    footer > span > img{
        width: 50px;
        height: 50px;
    }

    footer > h4{
        font-weight: 500;
        font-size: 20px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer > .icons{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
    }

    footer > .icons > a{
        text-decoration: none;
        color: black;
    }

    footer > .icons > a> i{
        font-size: 20px;
    }

    @media (max-width: 1300px){
        footer{
            padding: 20px 100px;
            row-gap: 30px;
        }
    }

    @media (max-width: 1000px){
        footer{
            height: auto;
            padding: 20px 60px;
        }

        footer > span{
            font-size: 24px
        }
    }

    @media (max-width: 760px){
        footer{
            padding: 20px 20px;
        }
    }

    @media(max-width: 576px){
        footer{
            padding: 20px 10px;
        }
    }
</style>