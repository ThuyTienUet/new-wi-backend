/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone', {
		idZone: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idZone'
		},
		startDepth: {
			type: "DOUBLE",
			allowNull: false,
			field: 'startDepth'
		},
		endDepth: {
			type: "DOUBLE",
			allowNull: false,
			field: 'endDepth'
		},
		showName: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showName'
		},
		showOnTrack: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showOnTrack'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0',
			field: 'orderNum'
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
		idZoneTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_template',
				key: 'idZoneTemplate'
			},
			field: 'idZoneTemplate'
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			},
			field: 'idZoneSet'
		}
	}, {
		tableName: 'zone'
	});
};
