/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userDefineLine', {
		idUserDefineLine: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idUserDefineLine'
		},
		function: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'function'
		},
		lineStyle: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'lineStyle'
		},
		displayLine: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'displayLine'
		},
		displayEquation: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'displayEquation'
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
		idCrossPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			},
			field: 'idCrossPlot'
		}
	}, {
		tableName: 'user_define_line'
	});
};
