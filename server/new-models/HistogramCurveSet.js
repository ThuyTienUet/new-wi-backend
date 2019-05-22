/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('histogramCurveSet', {
		idHistogramCurveSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idHistogramCurveSet'
		},
		intervalDepthTop: {
			type: "DOUBLE",
			allowNull: true,
			field: 'intervalDepthTop'
		},
		intervalDepthBottom: {
			type: "DOUBLE",
			allowNull: true,
			field: 'intervalDepthBottom'
		},
		showGaussian: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'showGaussian'
		},
		showCumulative: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showCumulative'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'Custom',
			field: 'lineStyle'
		},
		lineColor: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue',
			field: 'lineColor'
		},
		plot: {
			type: DataTypes.ENUM('Bar','Curve'),
			allowNull: true,
			defaultValue: 'Bar',
			field: 'plot'
		},
		color: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue',
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
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'histogram',
				key: 'idHistogram'
			},
			field: 'idHistogram'
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurve'
		}
	}, {
		tableName: 'histogram_curve_set'
	});
};
