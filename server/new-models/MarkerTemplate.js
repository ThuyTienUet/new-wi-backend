/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('markerTemplate', {
		idMarkerTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idMarkerTemplate'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true,
			field: 'name'
		},
		color: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'color'
		},
		lineStyle: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'lineStyle'
		},
		lineWidth: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '2',
			field: 'lineWidth'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0',
			field: 'orderNum'
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'description'
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
		idMarkerSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_set_template',
				key: 'idMarkerSetTemplate'
			},
			field: 'idMarkerSetTemplate'
		}
	}, {
		tableName: 'marker_template'
	});
};
