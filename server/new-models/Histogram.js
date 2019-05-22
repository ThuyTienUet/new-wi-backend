/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('histogram', {
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idHistogram'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'BlankHistogram',
			field: 'name'
		},
		histogramTitle: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'histogramTitle'
		},
		hardCopyWidth: {
			type: "DOUBLE",
			allowNull: true,
			field: 'hardCopyWidth'
		},
		hardCopyHeight: {
			type: "DOUBLE",
			allowNull: true,
			field: 'hardCopyHeight'
		},
		activeZone: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'All',
			field: 'activeZone'
		},
		divisions: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '50',
			field: 'divisions'
		},
		loga: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'loga'
		},
		showGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'showGrid'
		},
		flipHorizontal: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'flipHorizontal'
		},
		plotType: {
			type: DataTypes.ENUM('Frequency','Percent'),
			allowNull: false,
			defaultValue: 'Frequency',
			field: 'plotType'
		},
		leftScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'leftScale'
		},
		rightScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'rightScale'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
		},
		colorBy: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'zone',
			field: 'colorBy'
		},
		showZones: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'showZones'
		},
		configs: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'configs'
		},
		discriminator: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'discriminator'
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
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			},
			field: 'idZoneSet'
		}
	}, {
		tableName: 'histogram'
	});
};
