/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('familySpec', {
		idFamilySpec: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idFamilySpec'
		},
		unit: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'unit'
		},
		minScale: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'minScale'
		},
		maxScale: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'maxScale'
		},
		displayType: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'displayType'
		},
		displayMode: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'displayMode'
		},
		blockPosition: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'blockPosition'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'lineStyle'
		},
		lineWidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'lineWidth'
		},
		lineColor: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'lineColor'
		},
		isDefault: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isDefault'
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
		tableName: 'family_spec'
	});
};
