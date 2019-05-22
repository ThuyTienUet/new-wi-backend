/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('objectOfTrack', {
		idObjectOfTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idObjectOfTrack'
		},
		object: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'object'
		},
		topDepth: {
			type: "DOUBLE",
			allowNull: false,
			field: 'topDepth'
		},
		bottomDepth: {
			type: "DOUBLE",
			allowNull: false,
			field: 'bottomDepth'
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'left'
		},
		right: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '100',
			field: 'right'
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
		idObjectTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'object_track',
				key: 'idObjectTrack'
			},
			field: 'idObjectTrack'
		}
	}, {
		tableName: 'object_of_track'
	});
};
