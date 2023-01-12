var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Angkatan = koneksi.define('angkatan', {
       id_angkatan : {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       tahun: {
              type: Sequelize.INTEGER,
              allowNull: false,
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);

module.exports=Angkatan;