/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('familyCondition', {
		idFamilyCondition: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idFamilyCondition'
		},
		curveName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'curveName'
		},
		unit: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'unit'
		},
		type: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'NUMBER',
			field: 'type'
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
		idFamily: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'family',
				key: 'idFamily'
			},
			field: 'idFamily'
		}
	}, {
		tableName: 'family_condition'
	});
};
