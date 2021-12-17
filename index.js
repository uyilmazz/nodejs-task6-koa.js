const Koa = require('koa');
const app = new Koa();


app.use(ctx => {
    const url = ctx.url;

    if(url === '/'){
        ctx.body = '<h1>Welcome to Home Page</h1>';
    }else if (url === '/about'){
        ctx.body = '<h1>Welcome to About us Page</h1>';
    }else if(url === '/contact'){
        ctx.body = '<h1>Welcome to Contact Page</h1>';
    }else{
        ctx.body = '<h1>404 Page Not Found</h1>';
    }

});


const port = 3000;
app.listen(port,() => {
    console.log('Server initialized');
});