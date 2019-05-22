/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shading', {
		idShading: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idShading'
		},
		name: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'name'
		},
		leftFixedValue: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'leftFixedValue'
		},
		rightFixedValue: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'rightFixedValue'
		},
		negativeFill: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'negativeFill'
		},
		fill: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'fill'
		},
		positiveFill: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'positiveFill'
		},
		isNegPosFill: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'isNegPosFill'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: 'a',
			field: 'orderNum'
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
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			},
			field: 'idTrack'
		},
		idLeftLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'line',
				key: 'idLine'
			},
			field: 'idLeftLine'
		},
		idRightLine: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'line',
				key: 'idLine'
			},
			field: 'idRightLine'
		},
		idControlCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idControlCurve'
		}
	}, {
		tableName: 'shading'
	});
};
