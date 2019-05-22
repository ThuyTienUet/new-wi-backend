/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combinedBoxTool', {
		idCombinedBoxTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idCombinedBoxTool'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'name'
		},
		color: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'color'
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
		},
		idCombinedBox: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			},
			field: 'idCombinedBox'
		}
	}, {
		tableName: 'combined_box_tool'
	});
};
