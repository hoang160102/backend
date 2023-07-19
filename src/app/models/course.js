const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String },
    level: { type: String }
}, {
    timestamps: true
});

const MyModel = mongoose.model('Course', Course);

module.exports = MyModel;
