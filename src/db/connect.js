const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://stahk:ckmobile123@cluster0.osky3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
})
