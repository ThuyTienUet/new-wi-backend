/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('regressionLine', {
		idRegressionLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idRegressionLine'
		},
		lineStyle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{color: \'Blue\', width: 1, style: []}',
			field: 'lineStyle'
		},
		displayLine: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'displayLine'
		},
		displayEquation: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'displayEquation'
		},
		regType: {
			type: DataTypes.ENUM('Linear','Exponent','Power'),
			allowNull: false,
			defaultValue: 'Linear',
			field: 'regType'
		},
		inverseReg: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'inverseReg'
		},
		exclude: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'exclude'
		},
		fitX: {
			type: "DOUBLE",
			allowNull: true,
			field: 'fitX'
		},
		fitY: {
			type: "DOUBLE",
			allowNull: true,
			field: 'fitY'
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
		tableName: 'regression_line'
	});
};
