/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('curve', {
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idCurve'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'name'
		},
		unit: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'unit'
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: '',
			field: 'description'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
		},
		note: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'note'
		},
		type: {
			type: DataTypes.ENUM('NUMBER','TEXT','ARRAY','OTHER'),
			allowNull: false,
			defaultValue: 'NUMBER',
			field: 'type'
		},
		dimension: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'dimension'
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
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'deletedAt'
		},
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'dataset',
				key: 'idDataset'
			},
			field: 'idDataset'
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
		tableName: 'curve'
	});
};
