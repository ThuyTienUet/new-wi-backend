/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('selectionTool', {
		idSelectionTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idSelectionTool'
		},
		data: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'data'
		},
		createdBy: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'createdBy'
		},
		updatedBy: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'updatedBy'
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
			allowNull: false,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			},
			field: 'idCombinedBox'
		},
		idCombinedBoxTool: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'combined_box_tool',
				key: 'idCombinedBoxTool'
			},
			field: 'idCombinedBoxTool'
		}
	}, {
		tableName: 'selection_tool'
	});
};
