
var totalsold=0


var app1 = new Vue({ 
    el: '#app1',
    data: {
        date:'' + new Date().toLocaleString(),    
        pizzasold:'10',
        sold1:'',
        selected:'Pizza sause',
        todo1:[],
        todo2:[],
        
        options: [
            { text: 'Fresh Dough', value: 'Fresh Dough' },
            { text: 'Cheese', value: 'Cheese' },
            { text: 'Pizza sause', value: 'Pizza sause'},
            {text: 'Thin Crust', value: 'Thin Crust'},
            {text: 'Gluten-Free Dough', value: 'Gluten-Free Dough'}
    
          ]
    },methods:{
        solditems:function(){
       var date=new Date();
       
       
       
      
    
       app1.todo2.push({"u":this.selected,"v":this.pizzasold});
 

       totalsold=totalsold+parseInt(this.pizzasold);
       this.sold1=totalsold


       app1.todo1.push({"x":this.date,"y":totalsold,"z":this.selected});
      
     
    
       
        }
    }

});


