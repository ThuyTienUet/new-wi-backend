/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('workflow', {
		idWorkflow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idWorkflow'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
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
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			field: 'idProject'
		},
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'plot',
				key: 'idPlot'
			},
			field: 'idPlot'
		},
		idWorkflowSpec: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'workflow_spec',
				key: 'idWorkflowSpec'
			},
			field: 'idWorkflowSpec'
		}
	}, {
		tableName: 'workflow'
	});
};
