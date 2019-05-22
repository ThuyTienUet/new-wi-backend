/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('task', {
		idTask: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idTask'
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
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
		idFlow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'flow',
				key: 'idFlow'
			},
			field: 'idFlow'
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
		tableName: 'task'
	});
};
