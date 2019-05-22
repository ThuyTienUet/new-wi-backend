/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marker', {
		idMarker: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idMarker'
		},
		depth: {
			type: "DOUBLE",
			allowNull: false,
			field: 'depth'
		},
		showOnTrack: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showOnTrack'
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
		idMarkerTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_template',
				key: 'idMarkerTemplate'
			},
			field: 'idMarkerTemplate'
		},
		idMarkerSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_set',
				key: 'idMarkerSet'
			},
			field: 'idMarkerSet'
		}
	}, {
		tableName: 'marker'
	});
};
