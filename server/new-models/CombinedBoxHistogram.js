/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('combinedBoxHistogram', {
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
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'histogram',
				key: 'idHistogram'
			},
			field: 'idHistogram'
		}
	}, {
		tableName: 'combined_box_histogram'
	});
};
