/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('well', {
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idWell'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'name'
		},
		unit: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'm',
			field: 'unit'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1',
			field: 'duplicated'
		},
		color: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '#f3b86d',
			field: 'color'
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
		idGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'groups',
				key: 'idGroup'
			},
			field: 'idGroup'
		}
	}, {
		tableName: 'well'
	});
};
