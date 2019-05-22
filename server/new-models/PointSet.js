/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pointSet', {
		idPointSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idPointSet'
		},
		scaleLeft: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleLeft'
		},
		scaleRight: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleRight'
		},
		scaleBottom: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleBottom'
		},
		scaleTop: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleTop'
		},
		logX: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'logX'
		},
		logY: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'logY'
		},
		majorX: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'majorX'
		},
		minorX: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'minorX'
		},
		majorY: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'majorY'
		},
		minorY: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'minorY'
		},
		scaleMin1: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMin1'
		},
		scaleMin2: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMin2'
		},
		scaleMin3: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMin3'
		},
		scaleMax1: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMax1'
		},
		scaleMax2: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMax2'
		},
		scaleMax3: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'scaleMax3'
		},
		numColor: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numColor'
		},
		numSize: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numSize'
		},
		numSymbol: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numSymbol'
		},
		pointSymbol: {
			type: DataTypes.STRING(60),
			allowNull: false,
			defaultValue: 'circle',
			field: 'pointSymbol'
		},
		pointSize: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '5',
			field: 'pointSize'
		},
		pointColor: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'blue',
			field: 'pointColor'
		},
		overlayLine: {
			type: DataTypes.STRING(180),
			allowNull: false,
			defaultValue: 'AnaDrill CDN 6.5in Den/Neu Rhof 1.0',
			field: 'overlayLine'
		},
		standalone: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'standalone'
		},
		showLine: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showLine'
		},
		lineMode: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'lineMode'
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
		activeZone: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'All',
			field: 'activeZone'
		},
		zAxes: {
			type: DataTypes.ENUM('Curve','Zone'),
			allowNull: false,
			defaultValue: 'Curve',
			field: 'zAxes'
		},
		depthType: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'intervalDepth',
			field: 'depthType'
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
		},
		idCurveX: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveX'
		},
		idCurveY: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveY'
		},
		idCurveZ: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveZ'
		},
		idCurveZ1: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveZ1'
		},
		idCurveZ2: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveZ2'
		},
		idCurveZ3: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurveZ3'
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			},
			field: 'idZoneSet'
		},
		idOverlayLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'overlay_line',
				key: 'idOverlayLine'
			},
			field: 'idOverlayLine'
		}
	}, {
		tableName: 'point_set'
	});
};
