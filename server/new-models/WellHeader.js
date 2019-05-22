/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wellHeader', {
		idWellHeader: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idWellHeader'
		},
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			references: {
				model: 'well',
				key: 'idWell'
			},
			field: 'idWell'
		},
		header: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'header'
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'value'
		},
		unit: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'unit'
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'description'
		},
		standard: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'standard'
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
		tableName: 'well_header'
	});
};
