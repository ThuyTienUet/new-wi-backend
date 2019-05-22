/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zoneTemplate', {
		idZoneTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idZoneTemplate'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'name'
		},
		background: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'background'
		},
		foreground: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'white',
			field: 'foreground'
		},
		pattern: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'none',
			field: 'pattern'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0',
			field: 'orderNum'
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
		tableName: 'zone_template'
	});
};
