const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const CategorySchema = new Schema({
	category_name: {type: String},
	create_at: {type: Date, default: Date.now},
	updata_at: {type: Date, default: Date.now}
});

CategorySchema.pre('save', next => {
	this.updata_at = Date.now;
	next();
});

CategorySchema.statics = {
	updateCategory: function (category) {
		return category.save();
	},
	findAllCategory: function () {
		return this.find({}).exec();
	},
	findCategoryById: function (categoryId) {
		return this.findById(categoryId).exec();
	},
	deleteCategoryById: function (categoryId) {
		return this.remove({_id: categoryId}).exec();
	}
};

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;