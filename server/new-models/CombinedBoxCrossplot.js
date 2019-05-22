/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combinedBoxCrossplot', {
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
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			},
			field: 'idCrossPlot'
		}
	}, {
		tableName: 'combined_box_crossplot'
	});
};
