var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Biaya_Tetap = koneksi.define('biaya_tetap', {
       id: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       nim: {
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
       id_prodi: {
              type: Sequelize.STRING,
              allowNull: false
       },
       smt: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       id_angkatan: {
              type: Sequelize.STRING,
              allowNull: false
       },
       tanggal_bayar: {
              type: Sequelize.DATE,
              allowNull: false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Biaya_Tetap;