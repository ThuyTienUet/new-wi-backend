/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('datasetParams', {
		idDatasetParam: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idDatasetParam'
		},
		mnem: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'mnem'
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
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'dataset',
				key: 'idDataset'
			},
			field: 'idDataset'
		}
	}, {
		tableName: 'dataset_params'
	});
};
