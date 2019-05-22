/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('flow', {
		idFlow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idFlow'
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
		isTemplate: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isTemplate'
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
			allowNull: true,
			references: {
				model: 'project',
				key: 'idProject'
			},
			field: 'idProject'
		}
	}, {
		tableName: 'flow'
	});
};
