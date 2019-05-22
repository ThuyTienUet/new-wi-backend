/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plot', {
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idPlot'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		option: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'option'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
		},
		currentState: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '{}',
			field: 'currentState'
		},
		cropDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'cropDisplay'
		},
		printSetting: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'printSetting'
		},
		unit: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'm',
			field: 'unit'
		},
		depthRefSpec: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'depthRefSpec'
		},
		notShowPatterns: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'notShowPatterns'
		},
		separationWidth: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '1',
			field: 'separationWidth'
		},
		separationUnit: {
			type: DataTypes.STRING(10),
			allowNull: true,
			defaultValue: 'inch',
			field: 'separationUnit'
		},
		note: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'note'
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
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			field: 'idProject'
		},
		referenceCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'referenceCurve'
		}
	}, {
		tableName: 'plot'
	});
};
