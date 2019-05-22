/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('customFill', {
		idCustomFill: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idCustomFill'
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'name'
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'content'
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
		tableName: 'custom_fill'
	});
};
