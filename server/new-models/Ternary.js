/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ternary', {
		idTernary: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idTernary'
		},
		xValue: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'xValue'
		},
		yValue: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'yValue'
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '',
			field: 'name'
		},
		style: {
			type: DataTypes.ENUM('Circle','Cross','Diamond','Plus','Square','Star','Triangle'),
			allowNull: false,
			defaultValue: 'Circle',
			field: 'style'
		},
		usedIn: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'usedIn'
		},
		show: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'show'
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
		tableName: 'ternary'
	});
};
