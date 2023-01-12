var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Biaya_Lain = koneksi.define('biaya_lain', {
       id: {
              type: Sequelize.BIGINT,
              allowNull: false,
              primaryKey:true
       },
       nim: {
              type: Sequelize.STRING,
              allowNull: false
       },
       id_prodi: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nama_biaya: {
              type: Sequelize.STRING,
              allowNull: false
       }, 
       jumlah: {
              type: Sequelize.DOUBLE,
              allowNull: false
       },
       status: {
              type: Sequelize.STRING,
              allowNull: false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Biaya_Lain;