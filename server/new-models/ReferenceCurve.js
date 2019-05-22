/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('referenceCurve', {
		idReferenceCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'idReferenceCurve'
		},
		left: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'left'
		},
		right: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0',
			field: 'right'
		},
		visiable: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'visiable'
		},
		log: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1',
			field: 'log'
		},
		color: {
			type: DataTypes.STRING(250),
			allowNull: false,
			defaultValue: 'rgb(0,0,0)',
			field: 'color'
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
			allowNull: true,
			references: {
				model: 'cross_plot',
				key: 'idCrossPlot'
			},
			field: 'idCrossPlot'
		},
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'histogram',
				key: 'idHistogram'
			},
			field: 'idHistogram'
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'curve',
				key: 'idCurve'
			},
			field: 'idCurve'
		}
	}, {
		tableName: 'reference_curve'
	});
};
