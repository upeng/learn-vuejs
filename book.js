$(function(){
    var url = 'http://localhost:8080/vuejs/api/book.php';
    getJson(url, pushDom);   
})

//封装ajax getJson方法
function getJson(url,func){
    $.ajax({
        type: 'get', 
        url: url,
        dataType: 'json',
        success: function(data){
            if (data.code == 100000){
                func(data);
            }else{
                alert('接口调用失败');
            }
        },
        error: function(data){
            alert(JSON.stringify(data));
        }
    });
}

//vuejs代码
function pushDom(data){
    var vm = new Vue({
        el: '#app',
        data: {
            book: {
                id: 0,
                author: '',
                name: '',
                price: ''
            },
            books: data.data,
        },
        methods:{
            addBook:function(){
                this.book.id = parseInt(postData(this.book));
                this.books.push(this.book);
                this.book = '';
            },
            delBook:function(book){
                delData(book.id);
                this.books.$remove(book);
            },
        }
    });
}

//增加图书
function postData(book){
    var id = 0;
    $.ajax({
        url: 'http://localhost:8080/vuejs/api/add.php',
        data: {book: book},
        type: 'post', 
        dataType: 'json',
        async: false,
        success: function(data){
            if (data.code == 100000){
                id = data.data;
            }else{
                alert(data.msg);
            }
        },
        error: function(data){
            alert(data.msg);
            // alert(JSON.stringify(data));
        }
    });
    return id;
}

//删除
function delData(id){
    $.ajax({
        url: 'http://localhost:8080/vuejs/api/del.php',
        data: {bookId: id},
        type: 'post', 
        dataType: 'json',
        success: function(data){
            if (data.code == 100000){
                console.log(data.data);
            }else{
                alert(data.msg);
            }
        },
        error: function(data){
            alert(data.msg);
        }
    });
}