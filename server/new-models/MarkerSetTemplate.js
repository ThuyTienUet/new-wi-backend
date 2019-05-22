/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('markerSetTemplate', {
		idMarkerSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idMarkerSetTemplate'
		},
		name: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'name'
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
		tableName: 'marker_set_template'
	});
};
