var koneksi = require('../koneksi');
const Sequelize = require('sequelize');   
  
const Mahasiswaa = koneksi.define('mahasiswaa', {
       nim: {
              type: Sequelize.STRING,
              allowNull: false,
              primaryKey:true
       },
       id_angkatan: {
              type: Sequelize.STRING,
              allowNull: false
       },
       id_prodi: {
              type: Sequelize.STRING,
              allowNull: false
       },
       nama: {
              type: Sequelize.STRING,
              allowNull: false
       },
       jenis_kelamin: {
              type: Sequelize.CHAR,
              allowNull: false
       },
       alamat: {
              type: Sequelize.TEXT,
              allowNull: false
       },
       tanggal_lahir: {
              type: Sequelize.DATEONLY,
              allowNull: false
       },
       no_hp: {
              type: Sequelize.STRING,
              allowNull: false
       },
},
{
       timestamps:true,
       freezeTableName: true
}
);
 
module.exports=Mahasiswaa;