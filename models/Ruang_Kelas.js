var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Ruang_Kelas = koneksi.define('ruang_kelas', {
       id_ruang: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       jumlah_kursi: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       luas: {
              type: Sequelize.INTEGER,
              allowNull: false
       },
       adaAC: {
              type: Sequelize.TINYINT,
              allowNull: false
       },
       adaProyektor: {
              type: Sequelize.TINYINT,
              allowNull: false
       },
       adaPapanTulis: {
              type: Sequelize.TINYINT,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Ruang_Kelas;