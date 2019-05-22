/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combinedBoxPlot', {
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
			primaryKey: true,
			references: {
				model: 'combined_box',
				key: 'idCombinedBox'
			},
			field: 'idCombinedBox'
		},
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'plot',
				key: 'idPlot'
			},
			field: 'idPlot'
		}
	}, {
		tableName: 'combined_box_plot'
	});
};
