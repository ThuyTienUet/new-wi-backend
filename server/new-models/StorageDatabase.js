/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('storageDatabase', {
		idStorageDatabase: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idStorageDatabase'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'name'
		},
		inputDirectory: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'input_directory'
		},
		company: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: 'I2G',
			field: 'company'
		},
		type: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: 'INPUT',
			field: 'type'
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
		}
	}, {
		tableName: 'storage_database'
	});
};
