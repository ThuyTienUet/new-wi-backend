/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('polygonRegressionline', {
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
		idPolygon: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'polygon',
				key: 'idPolygon'
			},
			field: 'idPolygon'
		},
		idRegressionLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'regression_line',
				key: 'idRegressionLine'
			},
			field: 'idRegressionLine'
		}
	}, {
		tableName: 'polygon_regressionline'
	});
};
