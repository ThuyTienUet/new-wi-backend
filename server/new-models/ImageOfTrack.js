/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('imageOfTrack', {
		idImageOfTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idImageOfTrack'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'name'
		},
		fill: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'fill'
		},
		showName: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'showName'
		},
		imageUrl: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'imageUrl'
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
		smartDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'smartDisplay'
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
		idImageTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'image_track',
				key: 'idImageTrack'
			},
			field: 'idImageTrack'
		}
	}, {
		tableName: 'image_of_track'
	});
};
