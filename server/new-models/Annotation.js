/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('annotation', {
		idAnnotation: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idAnnotation'
		},
		text: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: 'Example text',
			field: 'text'
		},
		textStyle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{}',
			field: 'textStyle'
		},
		vAlign: {
			type: DataTypes.ENUM('top','middle','bottom'),
			allowNull: false,
			defaultValue: 'middle',
			field: 'vAlign'
		},
		hAlign: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center',
			field: 'hAlign'
		},
		background: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: '{}',
			field: 'background'
		},
		fitBounds: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'fitBounds'
		},
		deviceSpace: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'deviceSpace'
		},
		vertical: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'vertical'
		},
		shadow: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'shadow'
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'left'
		},
		width: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '100',
			field: 'width'
		},
		top: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'top'
		},
		bottom: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'bottom'
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
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'track',
				key: 'idTrack'
			},
			field: 'idTrack'
		}
	}, {
		tableName: 'annotation'
	});
};
