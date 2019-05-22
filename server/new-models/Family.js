/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('family', {
		idFamily: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idFamily'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		familyGroup: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'familyGroup'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'updatedAt'
		}
	}, {
		tableName: 'family'
	});
};
