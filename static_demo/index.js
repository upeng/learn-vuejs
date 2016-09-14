//json数据源
var jsonData = [{
            id: 1,
            author: '曹雪芹',
            name: '红楼梦',
            price: 32.0
        }, {
            id: 2,
            author: '施耐庵',
            name: '水浒传',
            price: 22.0
        }, {
            id: '3',
            author: '罗贯中',
            name: '三国演义',
            price: 24.0
        }, {
            id: 4,
            author: '吴承恩',
            name: '西游记',
            price: 29.0
        }];


var vm = new Vue({
    el: '#app',
    data: {
        sortparam: '',
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
        books: jsonData,
    },
    methods:{
        addBook:function(){
            this.book.id = this.books.length + 1;
            this.books.push(this.book);
            this.book = '';
        },
        delBook:function(book){
            
            this.books.$remove(book);
        },
        sortBy:function(sortparam){
            this.sortparam = sortparam;
        }
    }
});