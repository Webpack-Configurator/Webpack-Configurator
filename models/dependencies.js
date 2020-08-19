const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://webpackconfigassist:Codesmith55463@cluster0.n48qo.mongodb.net/webpackconfig?retryWrites=true&w=majority';
// const string = 'mongorestore --uri="mongodb+srv://webpackconfigassist:Codesmith55463@cluster0.n48qo.mongodb.net/<dbname>?retryWrites=true&w=majority"'

mongoose.connect(MONGO_URI, {
	// options for the connect method to parse the URI
	useNewUrlParser: true,
	useUnifiedTopology: true,
	// sets the name of the DB that our collections are part of
	dbName: 'webpackconfig'
})
	.then(() => console.log('Connected to Mongo DB.'))
	.catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'dependencies' collection
const dependenciesSchema = new Schema({
	name: String,
	code: { type: Object, required: true, unique: true },
	require: String,
	dependencies: Array,
	devDependencies: Array
});

// creats a model for the 'dependencies' collection that will be part of the export
const Dependencies = mongoose.model('dependencies', dependenciesSchema);


// exports the model in an object to be used in the controller
module.exports = Dependencies;
