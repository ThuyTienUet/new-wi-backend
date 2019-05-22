/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('project', {
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idProject'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true,
			field: 'name'
		},
		alias: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'alias'
		},
		location: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'location'
		},
		company: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'company'
		},
		department: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'department'
		},
		description: {
			type: DataTypes.STRING(250),
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
		}
	}, {
		tableName: 'project'
	});
};
