/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('polygon', {
		idPolygon: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idPolygon'
		},
		lineStyle: {
			type: DataTypes.STRING(60),
			allowNull: false,
			field: 'lineStyle'
		},
		display: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'display'
		},
		points: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'points'
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
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			},
			field: 'idCrossPlot'
		}
	}, {
		tableName: 'polygon'
	});
};
