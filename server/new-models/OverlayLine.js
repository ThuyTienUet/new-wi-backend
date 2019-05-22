/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('overlayLine', {
		idOverlayLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idOverlayLine'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'name'
		},
		familyGroupX: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'family_group_x'
		},
		familyGroupY: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'family_group_y'
		},
		overlayLineSpecs: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'overlay_line_specs'
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
		}
	}, {
		tableName: 'overlay_line'
	});
};
