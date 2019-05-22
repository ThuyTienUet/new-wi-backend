/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image', {
		idImage: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idImage'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		imageUrl: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'imageUrl'
		},
		fill: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white',
			field: 'fill'
		},
		spec: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'spec'
		},
		orderNum: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0',
			field: 'orderNum'
		},
		showOnTrack: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'showOnTrack'
		},
		topDepth: {
			type: DataTypes.FLOAT,
			allowNull: false,
			field: 'topDepth'
		},
		bottomDepth: {
			type: DataTypes.FLOAT,
			allowNull: false,
			field: 'bottomDepth'
		},
		right: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '50',
			field: 'right'
		},
		left: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '50',
			field: 'left'
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
		idImageSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'image_set',
				key: 'idImageSet'
			},
			field: 'idImageSet'
		}
	}, {
		tableName: 'image'
	});
};
