var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Jadwal = koneksi.define('jadwal', {
       id_jadwal: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       id_matkul: {
              type: Sequelize.STRING,
              allowNull: false
       },
       id_kelas: {
              type: Sequelize.STRING,
              allowNull: false
       },
       id_ruang: {
              type: Sequelize.STRING,
              allowNull: false
       },
       hari: {
              type: Sequelize.STRING,
              allowNull: false
       },
       durasi: {
              type: Sequelize.INTEGER,
              allowNull: false
       }
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Jadwal;