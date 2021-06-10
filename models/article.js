const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const ArticleSchema = new Schema({
    title: {type:String,min:5,max:400},
    description:{type:String, min:5,max:5000},
    owner:{type:ObjectId,ref:'User'},
    category:{
        type:String,
        enum:['sport','game','history'],
    },
    createdAt: {type: Date, default: new Date()},
});

ArticleSchema.index({title:'text'})

module.exports = mongoose.model('Article', ArticleSchema);