/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parameterSet', {
		idParameterSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idParameterSet'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name'
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'content'
		},
		type: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'TASK',
			field: 'type'
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
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			field: 'idProject'
		},
		idTaskSpec: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'task_spec',
				key: 'idTaskSpec'
			},
			field: 'idTaskSpec'
		}
	}, {
		tableName: 'parameter_set'
	});
};
