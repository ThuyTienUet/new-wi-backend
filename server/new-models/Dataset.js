/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataset', {
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idDataset'
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'name'
		},
		datasetKey: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'datasetKey'
		},
		datasetLabel: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'datasetLabel'
		},
		step: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			field: 'step'
		},
		top: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			field: 'top'
		},
		bottom: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0',
			field: 'bottom'
		},
		unit: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'M',
			field: 'unit'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
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
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			},
			field: 'idWell'
		}
	}, {
		tableName: 'dataset'
	});
};
