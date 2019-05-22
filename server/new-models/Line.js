/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('line', {
		idLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idLine'
		},
		showHeader: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showHeader'
		},
		showDataset: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'showDataset'
		},
		minValue: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'minValue'
		},
		maxValue: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '200',
			field: 'maxValue'
		},
		autoValueScale: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'autoValueScale'
		},
		displayMode: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'Line',
			field: 'displayMode'
		},
		wrapMode: {
			type: DataTypes.ENUM('None','Left','Right','Both'),
			allowNull: false,
			defaultValue: 'None',
			field: 'wrapMode'
		},
		blockPosition: {
			type: DataTypes.ENUM('None','Start','Middle','End'),
			allowNull: false,
			defaultValue: 'None',
			field: 'blockPosition'
		},
		ignoreMissingValues: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'ignoreMissingValues'
		},
		displayType: {
			type: DataTypes.ENUM('Linear','Logarithmic'),
			allowNull: false,
			defaultValue: 'Linear',
			field: 'displayType'
		},
		displayAs: {
			type: DataTypes.ENUM('Normal','Cumulative','Mirror','Pid'),
			allowNull: false,
			defaultValue: 'Normal',
			field: 'displayAs'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '[0]',
			field: 'lineStyle'
		},
		lineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'lineWidth'
		},
		lineColor: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red',
			field: 'lineColor'
		},
		symbolName: {
			type: DataTypes.ENUM('Circle','Cross','Diamond','Dot','Plus','Square','Star','Triangle'),
			allowNull: true,
			defaultValue: 'Circle',
			field: 'symbolName'
		},
		symbolSize: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '5',
			field: 'symbolSize'
		},
		symbolLineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'symbolLineWidth'
		},
		symbolStrokeStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red',
			field: 'symbolStrokeStyle'
		},
		symbolFillStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'red',
			field: 'symbolFillStyle'
		},
		symbolLineDash: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '[0]',
			field: 'symbolLineDash'
		},
		alias: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'alias'
		},
		unit: {
			type: DataTypes.STRING(100),
			allowNull: true,
			defaultValue: 'N/A',
			field: 'unit'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'a',
			field: 'orderNum'
		},
		textDisplayType: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Text',
			field: 'textDisplayType'
		},
		textSize: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '14',
			field: 'textSize'
		},
		textBackground: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white',
			field: 'textBackground'
		},
		textColor: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'black',
			field: 'textColor'
		},
		textVerticalAlignment: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'Top',
			field: 'textVerticalAlignment'
		},
		textDisplayBoundary: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'textDisplayBoundary'
		},
		arrayColumnCumulative: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'arrayColumnCumulative'
		},
		arrayYLowerLimit: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'arrayYLowerLimit'
		},
		arrayYUpperLimit: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '1',
			field: 'arrayYUpperLimit'
		},
		arrayXStart: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'arrayXStart'
		},
		arrayXStop: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '0',
			field: 'arrayXStop'
		},
		arraySmooth: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'arraySmooth'
		},
		arrayTraceColorPalette: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'arrayTraceColorPalette'
		},
		arrayMatrixStartColor: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'black',
			field: 'arrayMatrixStartColor'
		},
		arrayMatrixStopColor: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'green',
			field: 'arrayMatrixStopColor'
		},
		arrayDisplayAs: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Column',
			field: 'arrayDisplayAs'
		},
		arrayWindowSize: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '1',
			field: 'arrayWindowSize'
		},
		arrayWindowUnit: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'm',
			field: 'arrayWindowUnit'
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
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'deletedAt'
		},
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			},
			field: 'idTrack'
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurve'
		}
	}, {
		tableName: 'line'
	});
};
