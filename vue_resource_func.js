/*vue-resource
for the first line's introduction:
All post data is send as application/json by default, 
if you want to send as form-data can enable this option:
*/
Vue.http.options.emulateJSON = true;
new Vue({
    el: '#app',
    data: {
        books: [],
        book: {
            id: 0,
            author: '',
            name: '',
            price: ''
        },
    },
    created: function() {
        this.$http.get('http://localhost:8080/vuejs/api/book.php').then((data) => {
            data = $.parseJSON(data.body);  //console.log(data.body)
    		this.books=data.data;
        })
    },
    methods:{
    	addBook:function(){
    		this.$http.post('http://localhost:8080/vuejs/api/add.php', {book:this.book}).then((data) => {
	            data = $.parseJSON(data.body);
	            this.book.id=parseInt(data.data);
	            this.books.push(this.book);
	            this.book='';
        	});
    	},
        delBook:function(book){
            this.$http.post('http://localhost:8080/vuejs/api/del.php', {bookId:book.id}).then((data) => {
                this.books.$remove(book);
            });
        },
    }
});