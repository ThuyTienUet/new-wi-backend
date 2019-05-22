/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('imageTrack', {
		idImageTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idImageTrack'
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
			defaultValue: 'Image Track 1',
			field: 'title'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center',
			field: 'topJustification'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz',
			field: 'orderNum'
		},
		background: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white',
			field: 'background'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '1',
			field: 'width'
		},
		widthUnit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'inch',
			field: 'widthUnit'
		},
		zoomFactor: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '1',
			field: 'zoomFactor'
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
		idImageSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'image_set',
				key: 'idImageSet'
			},
			field: 'idImageSet'
		}
	}, {
		tableName: 'image_track'
	});
};
