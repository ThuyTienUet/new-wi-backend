/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('crossPlot', {
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idCrossPlot'
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'BlankCrossPlot',
			field: 'name'
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '{}',
			field: 'title'
		},
		discriminator: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'discriminator'
		},
		isDefineDepthColors: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'isDefineDepthColors'
		},
		axisColors: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'axisColors'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1',
			field: 'duplicated'
		},
		showHistogram: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'showHistogram'
		},
		showZones: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0',
			field: 'showZones'
		},
		configs: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'configs'
		},
		note: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '',
			field: 'note'
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
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			field: 'idProject'
		}
	}, {
		tableName: 'cross_plot'
	});
};
