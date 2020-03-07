var i=0
var app = new Vue({ 
    el: '#app',
    data: {
        pizzaname: 'Pepperoni',
        picked:' ',
        pizzaprize:' ',
        todos:[]
    },
    methods:{
        additemstothelist:function(){
            app.todos.push({"id":i,"pizza":this.pizzaname,"prise":this.pizzaprize,"ingredients":this.picked});
            i=i+1;
            
        },
        edititem:function(index, pizza, prize, ingredients){
            
            this.pizzaname = pizza
            this.pizzaprize = prize
            this.picked = ingredients
            this.todos.splice(index,1);
            
            document.getElementById("pizzanam").value=this.pizzaname;
        }
    }
});
