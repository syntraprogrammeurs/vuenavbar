const app = Vue.createApp({
    data(){
        return {
            navbar:["Home","Portfolio", "Shop", "Contact", "Team","tEST"],
            hoveredItem:'',
        }
    },
   methods:{
        myHover(navItem){
            this.hoveredItem = navItem
        }
    },
});