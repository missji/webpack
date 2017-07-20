var htmlWebpackPlugin=require("html-webpack-plugin");
var path=require("path");
var webpack=require("webpack");
module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/app.js'
    ],
    /*entry: {
    	//main:"./src/script/main.js",
    	a:"./src/script/a.js",
        b:"./src/script/b.js",
        c:"./src/script/c.js"
        main:"./src/app.js"
    },*/
    output: {
        path:__dirname+"/dist",
        filename: "js/boundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:path.resolve(__dirname,"node_modules"),
                include:path.resolve(__dirname,"src")
            },{
                test:/\.css$/,
                loader:"style-loader!css-loader!postcss-loader"
                
            },{
                test:/\.html$/,
                loader:"html-loader"
            },
            {
                test:/\.ejs$/,
                loader:"ejs-loader"
            },
            {
               test:/\.(jpg|png|gif|svg)$/i,
               loader:"file-loader" 
            }
        ]
    },
    plugins: [
         new webpack.HotModuleReplacementPlugin(),
         new htmlWebpackPlugin({
         	title:"index",
         	inject:"body",
         	template:"index.html",
         	filename:"index.html"
            /*date:new Date(),
            chunks:["main","a"],
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }*/
         })
         /*new htmlWebpackPlugin({
            inject:"head",
            template:"index.html",
            filename:"b.html",
            title:"jrrB",
            chunks:["b"],
            date:new Date(),
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
         }),
         new htmlWebpackPlugin({
            inject:"head",
            template:"index.html",
            filename:"c.html",
            title:"jrrC",
            chunks:["c"],
            date:new Date(),
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
         })*/
    ]

};