/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('depthAxis', {
		idDepthAxis: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idDepthAxis'
		},
		showTitle: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showTitle'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Depth',
			field: 'title'
		},
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'plot',
				key: 'idPlot'
			},
			field: 'idPlot'
		},
		justification: {
			type: DataTypes.STRING(50),
			allowNull: true,
			defaultValue: 'center',
			field: 'justification'
		},
		depthType: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'depthType'
		},
		unitType: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'M',
			field: 'unitType'
		},
		decimals: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'decimals'
		},
		trackBackground: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'rgba(255,255,255,0)',
			field: 'trackBackground'
		},
		geometryWidth: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0.6',
			field: 'geometryWidth'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz',
			field: 'orderNum'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0.5',
			field: 'width'
		},
		widthUnit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'inch',
			field: 'widthUnit'
		},
		trackOffset: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'trackOffset'
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
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'well',
				key: 'idWell'
			},
			field: 'idWell'
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
		tableName: 'depth_axis'
	});
};
