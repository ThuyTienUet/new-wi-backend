/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('familyUnit', {
		idUnit: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idUnit'
		},
		name: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'name'
		},
		rate: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'rate'
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
		idUnitGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'unit_group',
				key: 'idUnitGroup'
			},
			field: 'idUnitGroup'
		}
	}, {
		tableName: 'family_unit'
	});
};
