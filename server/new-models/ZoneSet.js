/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zoneSet', {
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idZoneSet'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
		},
		note: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'note'
		},
		lockable: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'lockable'
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
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			},
			field: 'idWell'
		},
		idZoneSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_set_template',
				key: 'idZoneSetTemplate'
			},
			field: 'idZoneSetTemplate'
		}
	}, {
		tableName: 'zone_set'
	});
};
