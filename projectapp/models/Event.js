//Setting up database using mySQL

//Table for new clean-up events, will store location details
module.exports = function(sequelize, Sequelize) {

	var Event = sequelize.define('event', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		before_img_url: { type: Sequelize.STRING },
		after_img_url: { type: Sequelize.STRING },
		date: { type: Sequelize.DATE},
		start_time: {type:Sequelize.TIME},
        street_address: {type:Sequelize.STRING},
        city: { type:Sequelize.STRING },
        state: {type: Sequelize.STRING},
		zip: {type: Sequelize.INTEGER, allowNull: false }, 
        lat: {type: Sequelize.DECIMAL(10, 8), allowNull: false},
        lng: {type: Sequelize.DECIMAL(11, 8), allowNull: false},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

	return Event;

} 

