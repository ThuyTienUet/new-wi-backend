/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('track', {
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idTrack'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz',
			field: 'orderNum'
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
			defaultValue: 'Track 1',
			field: 'title'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center',
			field: 'topJustification'
		},
		bottomJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center',
			field: 'bottomJustification'
		},
		showLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'showLabels'
		},
		showValueGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showValueGrid'
		},
		majorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'majorTicks'
		},
		minorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '5',
			field: 'minorTicks'
		},
		showDepthGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showDepthGrid'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '2',
			field: 'width'
		},
		widthUnit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'inch',
			field: 'widthUnit'
		},
		color: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white',
			field: 'color'
		},
		showEndLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showEndLabels'
		},
		labelFormat: {
			type: DataTypes.STRING(150),
			allowNull: true,
			field: 'labelFormat'
		},
		zoomFactor: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '1',
			field: 'zoomFactor'
		},
		zoneAboveCurve: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'zoneAboveCurve'
		},
		zoneOpacity: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0.6',
			field: 'zoneOpacity'
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
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'plot',
				key: 'idPlot'
			},
			field: 'idPlot'
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
		idMarkerSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'marker_set',
				key: 'idMarkerSet'
			},
			field: 'idMarkerSet'
		}
	}, {
		tableName: 'track'
	});
};
